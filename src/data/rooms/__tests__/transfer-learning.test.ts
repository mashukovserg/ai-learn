/**
 * Room-level guards for `transfer-learning`.
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type solvability for every room. Checked here is what those cannot
 * know: that this room is wired into all three registries, that it sits where
 * the curriculum decision put it (right before `fine-tuning-101` in both the
 * beginner and intermediate paths — the paradigm first, the practice second),
 * that it satisfies the task-mix rule and the "type the exact term" wish (three
 * input tasks with both-locale answers), that every glossary term its theory
 * references exists, that the six chapters plus the Sources card ship in both
 * locales, and that both genuine exhibits actually ship under `public/`.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'transfer-learning';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/TransferLearningTheory.tsx'),
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

  it('sits right before fine-tuning-101 in the beginner and intermediate paths', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    for (const pathId of ['beginner', 'intermediate']) {
      expect(room.pathIds).toContain(pathId);
      const path = PATHS_METADATA.find(p => p.id === pathId)!;
      const idx = path.roomIds.indexOf(ROOM_ID);
      expect(idx, `missing from path ${pathId}`).toBeGreaterThan(-1);
      expect(path.roomIds[idx + 1]).toBe('fine-tuning-101');
    }
  });

  it('has 11 tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBe(11);
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

  it('references only glossary terms that exist, including the three paradigm terms', () => {
    const ids = [...theorySource.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    for (const id of ids) {
      expect(GLOSSARY[id], `<Term id="${id}"> has no entry in GLOSSARY`).toBeDefined();
    }
    for (const required of ['transfer-learning', 'pretraining', 'post-training']) {
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
    for (const id of ['1411.1792', '2008.11687', '2305.11206', '2106.09685', '2005.14165', '2201.11903', '2509.04664']) {
      expect(theorySource, `source ${id} is missing`).toContain(id);
    }
  });

  it('ships the two genuine captures it teaches from', () => {
    const shots = [...theorySource.matchAll(/src="\/images\/rooms\/transfer-learning\/([\w.-]+)"/g)].map(m => m[1]);
    expect(shots).toEqual(['hf-bert-model-tree.png', 'openai-fine-tuning-winddown.png']);
    for (const shot of shots) {
      const file = join(process.cwd(), 'public/images/rooms/transfer-learning', shot);
      expect(existsSync(file), `screenshot ${shot} is missing under public/`).toBe(true);
    }
  });
});
