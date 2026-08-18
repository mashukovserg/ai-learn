/**
 * Filesystem-level orphan guard.
 *
 * The registry guards (`theory/__tests__/registry.test.ts`) only compare
 * ROOMS_METADATA against THEORY_COMPONENTS — two in-memory maps. A room whose
 * files exist on disk but appear in NEITHER map is invisible to both, so it
 * ships as dead code that no learner can ever reach.
 *
 * That is not hypothetical: `research-ai-era` and `ai-literature-reviews` sat
 * unreachable from 2026-07-21 until 2026-08-18 — two complete rooms, ~7k words
 * of bilingual theory and 20 tasks — while `docs/ROOM_DEVELOPMENT.md` listed
 * them as shipped. These tests read the directory, not the maps.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ROOMS_METADATA } from '@/data/rooms';
import { ROOM_TASKS } from '@/data/rooms/tasks';
import { THEORY_COMPONENTS } from '@/components/theory';

const TASKS_DIR = path.join(process.cwd(), 'src/data/rooms/tasks');
const THEORY_DIR = path.join(process.cwd(), 'src/components/theory');

const roomIds = new Set(ROOMS_METADATA.map(r => r.id));

function taskFileRoomIds(): string[] {
  return fs
    .readdirSync(TASKS_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .map(f => f.replace(/\.ts$/, ''));
}

function theoryComponentFiles(): string[] {
  return fs
    .readdirSync(THEORY_DIR)
    .filter(f => f.endsWith('Theory.tsx'));
}

describe('no orphan room content on disk', () => {
  it('every task file under tasks/ belongs to a room in ROOMS_METADATA', () => {
    const orphans = taskFileRoomIds().filter(id => !roomIds.has(id));

    expect(
      orphans,
      orphans.length
        ? `\nTask files with no ROOMS_METADATA entry — unreachable content.\n` +
          `Either register the room (metadata.ts + tasks/index.ts + theory/index.ts) or delete the file:\n  ` +
          orphans.map(id => `src/data/rooms/tasks/${id}.ts`).join('\n  ') +
          '\n'
        : undefined
    ).toEqual([]);
  });

  it('every task file is wired into ROOM_TASKS', () => {
    const unwired = taskFileRoomIds().filter(id => !(id in ROOM_TASKS));

    expect(
      unwired,
      unwired.length
        ? `\nTask files missing from the ROOM_TASKS map in src/data/rooms/tasks/index.ts:\n  ${unwired.join('\n  ')}\n`
        : undefined
    ).toEqual([]);
  });

  it('every *Theory.tsx component is referenced by the theory registry', () => {
    const registrySource = fs.readFileSync(path.join(THEORY_DIR, 'index.ts'), 'utf8');

    const unreferenced = theoryComponentFiles().filter(file => {
      const componentName = file.replace(/\.tsx$/, '');
      return !registrySource.includes(`./${componentName}`);
    });

    expect(
      unreferenced,
      unreferenced.length
        ? `\nTheory components never imported by src/components/theory/index.ts — dead code:\n  ` +
          unreferenced.map(f => `src/components/theory/${f}`).join('\n  ') +
          '\n'
        : undefined
    ).toEqual([]);
  });

  it('every room in ROOMS_METADATA has tasks wired', () => {
    const missing = ROOMS_METADATA.map(r => r.id).filter(id => !(id in ROOM_TASKS));

    expect(
      missing,
      missing.length ? `\nRooms with no entry in ROOM_TASKS:\n  ${missing.join('\n  ')}\n` : undefined
    ).toEqual([]);
  });

  it('the three registries agree on the same room id set', () => {
    const metadataIds = [...roomIds].sort();
    const taskIds = Object.keys(ROOM_TASKS).sort();
    const theoryIds = Object.keys(THEORY_COMPONENTS).sort();

    expect(taskIds).toEqual(metadataIds);
    expect(theoryIds).toEqual(metadataIds);
  });
});
