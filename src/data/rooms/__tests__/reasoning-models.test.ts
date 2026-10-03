/**
 * Room-level guards for `reasoning-models`.
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type solvability for every room. Checked here is what those cannot
 * know: that this room is wired into all three registries, that it sits where
 * the curriculum decision put it (right after `fine-tuning-101` in the beginner path, and right after `scaling-hypothesis` in ideas-history — test-time compute as the second scaling axis), that it satisfies the
 * task-mix rule and the "type the exact term" wish (input tasks with
 * both-locale answers), that every glossary term its theory references exists,
 * that the six chapters plus the Sources card ship in both locales, and that
 * every genuine exhibit actually ships under `public/`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'reasoning-models';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/ReasoningModelsTheory.tsx'),
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

  it('sits after fine-tuning-101 (beginner) and after scaling-hypothesis (ideas-history)', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    for (const [pathId, before] of [['beginner', 'fine-tuning-101'], ['ideas-history', 'scaling-hypothesis']] as const) {
      expect(room.pathIds).toContain(pathId);
      const path = PATHS_METADATA.find(p => p.id === pathId)!;
      const idx = path.roomIds.indexOf(ROOM_ID);
      expect(idx, `missing from path ${pathId}`).toBeGreaterThan(-1);
      expect(path.roomIds[idx - 1]).toBe(before);
    }
  });

  it('has 12 tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBe(12);
  });

  it('satisfies the task mix rule (at least one sorting or mentor task)', () => {
    const types = ROOM_TASKS[ROOM_ID].map(t => t.type);
    expect(types.some(t => t === 'sorting' || t === 'mentor')).toBe(true);
  });

  it('asks for exact terms in at least two input tasks, accepting both locales', () => {
    const inputs = ROOM_TASKS[ROOM_ID].filter(t => t.type === 'input');
    expect(inputs.length).toBeGreaterThanOrEqual(2);
    for (const task of inputs) {
      const answers = task.answer as string[];
      expect(Array.isArray(answers)).toBe(true);
      expect(answers.some(a => /[a-z]/i.test(a)), `task ${task.id} has no Latin answer`).toBe(true);
      expect(answers.some(a => /[а-я]/i.test(a)), `task ${task.id} has no Cyrillic answer`).toBe(true);
    }
  });

  it('references only glossary terms that exist, including the room\'s own terms', () => {
    const ids = [...theorySource.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    for (const id of ids) {
      expect(GLOSSARY[id], `<Term id="${id}"> has no entry in GLOSSARY`).toBeDefined();
    }
    for (const required of ['test-time-compute', 'chain-of-thought', 'rlvr', 'distillation', 'cot-faithfulness']) {
      expect(ids, `theory does not use <Term id="${required}">`).toContain(required);
    }
  });

  it('ships six chapters in both locales', () => {
    const ruChapters = [...theorySource.matchAll(/'Глава (\d+):/g)].map(m => Number(m[1]));
    const enChapters = [...theorySource.matchAll(/'Chapter (\d+):/g)].map(m => Number(m[1]));
    expect(ruChapters).toEqual([1, 2, 3, 4, 5, 6]);
    expect(enChapters).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('ships a bilingual Sources card with the studies the numbers come from', () => {
    expect(theorySource).toContain("'Источники'");
    expect(theorySource).toContain("'Sources'");
    for (const id of ['2201.11903', '2408.03314', '2501.12948', 's41586-025-09422-z', '2411.15124', '2504.13837', '2305.04388', '2505.05410', '2503.11926']) {
      expect(theorySource, `source ${id} is missing`).toContain(id);
    }
  });

  it('ships the genuine captures it teaches from', () => {
    const shots = [...theorySource.matchAll(/src="\/images\/rooms\/reasoning-models\/([\w.-]+)"/g)].map(m => m[1]);
    expect(shots).toEqual(['r1-zero-response-length.png', 'r1-distilled-eval.png', 'r1-zero-aha-moment.png']);
    for (const shot of shots) {
      const file = join(process.cwd(), 'public/images/rooms/reasoning-models', shot);
      expect(existsSync(file), `screenshot ${shot} is missing under public/`).toBe(true);
    }
  });
});
