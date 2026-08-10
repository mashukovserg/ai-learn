/**
 * Room-level guards for `search-retrieval-to-synthesis`.
 *
 * The generic suites (data-integrity, task-shapes) already cover ID sequencing
 * and per-type solvability for every room. What is checked here is what those
 * cannot know: that this room is wired into all three registries, that it sits
 * where the curriculum decision put it, that it satisfies the task-mix rule,
 * and that every glossary term its theory references actually exists (a typo in
 * a `<Term id>` renders silently, so nothing else would catch it).
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'search-retrieval-to-synthesis';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/SearchRetrievalToSynthesisTheory.tsx'),
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

  it('belongs to the ideas-history path and is ordered right after chatgpt-moment', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    expect(room.pathIds).toContain('ideas-history');

    const path = PATHS_METADATA.find(p => p.id === 'ideas-history')!;
    const idx = path.roomIds.indexOf(ROOM_ID);
    expect(idx).toBeGreaterThan(-1);
    expect(path.roomIds[idx - 1]).toBe('chatgpt-moment');
  });

  it('has tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]).toBeDefined();
    expect(ROOM_TASKS[ROOM_ID].length).toBeGreaterThanOrEqual(8);
  });

  it('satisfies the task mix rule (at least one sorting or mentor task)', () => {
    const types = ROOM_TASKS[ROOM_ID].map(t => t.type);
    expect(types.some(t => t === 'sorting' || t === 'mentor')).toBe(true);
  });

  it('uses a varied task mix rather than MCQ/input only', () => {
    const types = new Set(ROOM_TASKS[ROOM_ID].map(t => t.type));
    for (const required of ['timeline', 'categorize', 'sorting', 'mentor', 'scenario'] as const) {
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

  it('ships six chapters in both locales', () => {
    const ruChapters = [...theorySource.matchAll(/'Глава (\d+):/g)].map(m => Number(m[1]));
    const enChapters = [...theorySource.matchAll(/'Chapter (\d+):/g)].map(m => Number(m[1]));
    expect(ruChapters).toEqual([1, 2, 3, 4, 5, 6]);
    expect(enChapters).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('cites the primary sources the room is built on', () => {
    for (const marker of [
      'Situating Search',
      'Stochastic Parrots',
      'Evaluating Verifiability in Generative',
      'Generative Echo Chamber',
      '2402.11707',
    ]) {
      expect(theorySource, `theory is missing the source "${marker}"`).toContain(marker);
    }
  });
});
