/**
 * Room-level guards for `ai-career-trajectories`.
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type shape for every room. What is checked here is what those cannot
 * know: that the room stayed wired into the registries, that its task mix keeps
 * the variety the 2026-08-23 content pass gave it, that every `<Term id>` its
 * theory references exists (a typo renders silently), and that the claims the
 * chapters make still carry the sources they were written from — the room used
 * to assert levels and year ranges with no citation at all.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'ai-career-trajectories';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/AiCareerTrajectoriesTheory.tsx'),
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

  it('belongs to the beginner path and is ordered there', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    expect(room.pathIds).toContain('beginner');

    const path = PATHS_METADATA.find(p => p.id === 'beginner')!;
    expect(path.roomIds).toContain(ROOM_ID);
  });

  it('has twelve tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBeGreaterThanOrEqual(12);
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

  it('accepts the input answer in both locales', () => {
    const input = ROOM_TASKS[ROOM_ID].find(t => t.type === 'input')!;
    expect(Array.isArray(input.answer), 'a bilingual input task needs a list of accepted answers').toBe(true);
    const accepted = (input.answer as string[]).map(a => a.toLowerCase());
    expect(accepted).toContain('4');
    expect(accepted).toContain('четыре');
    expect(accepted).toContain('four');
  });

  it('references only glossary terms that exist', () => {
    const ids = [...theorySource.matchAll(/<Term id="([^"]+)"/g)].map(m => m[1]);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) {
      expect(GLOSSARY[id], `<Term id="${id}"> has no entry in GLOSSARY`).toBeDefined();
    }
  });

  it('ships five chapters in both locales', () => {
    const ruChapters = [...theorySource.matchAll(/'Глава (\d+)'/g)].map(m => Number(m[1]));
    const enChapters = [...theorySource.matchAll(/'Chapter (\d+)'/g)].map(m => Number(m[1]));
    expect(ruChapters).toEqual([1, 2, 3, 4, 5]);
    expect(enChapters).toEqual([1, 2, 3, 4, 5]);
  });

  it('cites the sources its claims rest on', () => {
    for (const marker of [
      'dropbox.github.io/dbx-career-framework',
      'progression.fyi',
      'staffeng.com/guides/staff-archetypes',
      'charity.wtf/2017/05/11/the-engineer-manager-pendulum',
      'latent.space/p/ai-engineer',
      'job-boards.greenhouse.io/anthropic',
      'lightcast.io/resources/blog/stanford-ai-2026',
      'doi.org/10.1073/pnas.2422633122',
      'arxiv.org/abs/2405.17739',
      'anthropic.com/research/AI-assistance-coding-skills',
    ]) {
      expect(theorySource, `theory is missing the source "${marker}"`).toContain(marker);
    }
  });
});
