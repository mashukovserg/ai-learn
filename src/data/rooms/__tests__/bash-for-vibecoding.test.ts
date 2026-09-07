/**
 * Room guard for `bash-for-vibecoding`.
 *
 * The suite-wide tests already cover task shape, locale parity and ID
 * sequencing. Checked here is what those cannot know: that the room is wired
 * into all three registries, that it sits where the curriculum put it (after
 * `opencode-terminal-agent`, so the AC-201 → OpenCode pairing stays intact),
 * that it satisfies the task-mix rule, that its glossary terms exist, that the
 * seven chapters ship in both locales, and that the Sources card still carries
 * the references the safety claims rest on.
 *
 * The room teaches reading shell rather than writing it, so its claims are
 * about behaviour that has a primary source — the `set` builtin, Google's line
 * limit, ShellCheck. Those URLs are asserted rather than described.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'bash-for-vibecoding';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/BashForVibecodingTheory.tsx'),
  'utf8'
);

describe(`room ${ROOM_ID}`, () => {
  it('is registered in ROOMS_METADATA with bilingual copy', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID);
    expect(room, `${ROOM_ID} is missing from ROOMS_METADATA`).toBeDefined();
    expect(room!.title.ru.length).toBeGreaterThan(0);
    expect(room!.title.en.length).toBeGreaterThan(0);
    expect(room!.category.en).toBe('Agent Coding');
  });

  it('belongs to the agent-coding path, right after opencode-terminal-agent', () => {
    const path = PATHS_METADATA.find(p => p.id === 'agent-coding')!;
    const idx = path.roomIds.indexOf(ROOM_ID);
    expect(idx).toBeGreaterThan(-1);
    expect(path.roomIds[idx - 1]).toBe('opencode-terminal-agent');
  });

  it('has 16 tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]?.length).toBe(16);
  });

  it('uses a varied task mix rather than MCQ/input only', () => {
    const types = new Set((ROOM_TASKS[ROOM_ID] ?? []).map(t => t.type));
    expect(types.has('sorting') || types.has('mentor')).toBe(true);
    expect(types.size).toBeGreaterThanOrEqual(5);
  });

  it('references only glossary terms that exist', () => {
    const ids = [...theorySource.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      expect(GLOSSARY[id], `<Term id="${id}"> has no entry in GLOSSARY`).toBeDefined();
    }
  });

  it('ships seven chapters in both locales', () => {
    const ruChapters = [...theorySource.matchAll(/'Глава (\d+):/g)].map(m => Number(m[1]));
    const enChapters = [...theorySource.matchAll(/'Chapter (\d+):/g)].map(m => Number(m[1]));
    expect(ruChapters).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(enChapters).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('ships a bilingual Sources card with the references the safety claims rest on', () => {
    expect(theorySource).toContain("'Источники'");
    expect(theorySource).toContain("'Sources'");
    for (const href of [
      'google.github.io/styleguide/shellguide.html',
      'gnu.org/software/bash/manual/html_node/The-Set-Builtin.html',
      'redsymbol.net/articles/unofficial-bash-strict-mode',
      'mywiki.wooledge.org/BashPitfalls',
      'shellcheck.net',
      'github.com/ValveSoftware/steam-for-linux/issues/3671',
    ]) {
      expect(theorySource, `source ${href} is missing`).toContain(href);
    }
  });

  it('teaches the strict-mode line the tasks ask for', () => {
    // Task 3 expects `set -euo pipefail` as a typed answer, and task 7 sorts
    // failures by which of its three flags catches them. If the theory ever
    // loses the line, both become unsolvable from this room.
    expect(theorySource).toContain('set -euo pipefail');
    for (const flag of ['-e', '-u', '-o pipefail']) {
      expect(theorySource, `flag ${flag} is not explained`).toContain(flag);
    }
  });
});
