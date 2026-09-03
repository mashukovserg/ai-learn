/**
 * Room-level guards for `agentic-team-protocols` (AC-303).
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type solvability for every room. Checked here is what those cannot
 * know: that this room is wired into all three registries, that it sits where
 * the curriculum decision put it (right after `agentic-cost-latency`, closing
 * Module C of the agent-coding path), that it satisfies the task-mix rule, that
 * every glossary term its theory references exists, and that the five chapters
 * plus the Sources card ship in both locales, and that the one genuine
 * exhibit the theory is built around actually ships under `public/`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'agentic-team-protocols';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/AgenticTeamProtocolsTheory.tsx'),
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
    expect(room!.title.en).toContain('AC-303');
  });

  it('belongs to the agent-coding path and is ordered right after agentic-cost-latency', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    expect(room.pathIds).toContain('agent-coding');

    const path = PATHS_METADATA.find(p => p.id === 'agent-coding')!;
    const idx = path.roomIds.indexOf(ROOM_ID);
    expect(idx).toBeGreaterThan(-1);
    expect(path.roomIds[idx - 1]).toBe('agentic-cost-latency');
  });

  it('has 12 tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBe(12);
  });

  it('satisfies the task mix rule (at least one sorting or mentor task)', () => {
    const types = ROOM_TASKS[ROOM_ID].map(t => t.type);
    expect(types.some(t => t === 'sorting' || t === 'mentor')).toBe(true);
  });

  it('uses seven task types rather than MCQ/input only', () => {
    const types = new Set(ROOM_TASKS[ROOM_ID].map(t => t.type));
    for (const required of ['multiple-choice', 'input', 'multiple-select', 'sorting', 'categorize', 'mentor', 'scenario'] as const) {
      expect(types.has(required), `missing task type ${required}`).toBe(true);
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

  it('ships a bilingual Sources card with the studies the numbers come from', () => {
    expect(theorySource).toContain("'Источники'");
    expect(theorySource).toContain("'Sources'");
    for (const href of ['arxiv.org/abs/2507.09089', 'dora.dev', 'gitclear.com', 'smartbear.com', 'google.github.io/eng-practices']) {
      expect(theorySource, `source ${href} is missing`).toContain(href);
    }
  });

  it('ships the genuine Google “Small CLs” capture it teaches from', () => {
    const shots = [...theorySource.matchAll(/src="\/images\/rooms\/agentic-team-protocols\/([\w.-]+)"/g)].map(m => m[1]);
    expect(shots).toEqual(['google-small-cls.png']);
    for (const shot of shots) {
      const file = join(process.cwd(), 'public/images/rooms/agentic-team-protocols', shot);
      expect(existsSync(file), `screenshot ${shot} is missing under public/`).toBe(true);
    }
  });
});
