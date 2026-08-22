/**
 * Room-level guards for `opencode-terminal-agent`.
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type solvability for every room. Checked here is what those cannot
 * know: that this room is wired into all three registries, that it sits where
 * the curriculum decision put it (right after `agentic-cli-tools` in the
 * agent-coding path), that it satisfies the task-mix rule, that every glossary
 * term its theory references exists, and that the three genuine session
 * captures the theory is built around actually ship under `public/`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'opencode-terminal-agent';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/OpencodeTerminalAgentTheory.tsx'),
  'utf8'
);

describe(`room ${ROOM_ID}`, () => {
  it('is registered in ROOMS_METADATA with bilingual copy', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID);
    expect(room).toBeDefined();
    expect(room!.title.ru).toBeTruthy();
    expect(room!.title.en).toBeTruthy();
    expect(room!.description.ru).toBeTruthy();
    expect(room!.description.en).toBeTruthy();
  });

  it('belongs to the agent-coding path and is ordered right after agentic-cli-tools', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    expect(room.pathIds).toContain('agent-coding');

    const path = PATHS_METADATA.find(p => p.id === 'agent-coding')!;
    const idx = path.roomIds.indexOf(ROOM_ID);
    expect(idx).toBeGreaterThan(-1);
    expect(path.roomIds[idx - 1]).toBe('agentic-cli-tools');
  });

  it('has tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBeGreaterThanOrEqual(10);
  });

  it('satisfies the task mix rule (at least one sorting or mentor task)', () => {
    const types = ROOM_TASKS[ROOM_ID].map(t => t.type);
    expect(types.some(t => t === 'sorting' || t === 'mentor')).toBe(true);
  });

  it('uses a varied task mix rather than MCQ/input only', () => {
    const types = new Set(ROOM_TASKS[ROOM_ID].map(t => t.type));
    for (const required of ['categorize', 'sorting', 'mentor', 'scenario', 'multiple-select'] as const) {
      expect(types.has(required)).toBe(true);
    }
  });

  it('references only glossary terms that exist', () => {
    const ids = [...theorySource.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      expect(GLOSSARY[id], `<Term id="${id}"> has no entry in GLOSSARY`).toBeDefined();
    }
  });

  it('ships five chapters in both locales', () => {
    const ruChapters = [...theorySource.matchAll(/'Глава (\d+):/g)].map(m => Number(m[1]));
    const enChapters = [...theorySource.matchAll(/'Chapter (\d+):/g)].map(m => Number(m[1]));
    expect(ruChapters).toEqual([1, 2, 3, 4, 5]);
    expect(enChapters).toEqual([1, 2, 3, 4, 5]);
  });

  it('ships the three genuine session captures it teaches from', () => {
    const shots = [...theorySource.matchAll(/\$\{SHOTS\}\/([\w.-]+)/g)].map(m => m[1]);
    expect(shots.length).toBe(3);
    for (const shot of shots) {
      const file = join(process.cwd(), 'public/images/rooms/opencode-terminal-agent', shot);
      expect(existsSync(file), `screenshot ${shot} is missing under public/`).toBe(true);
    }
  });
});
