/**
 * Room guard for `ai-political-philosophy`.
 *
 * The suite-wide tests already cover task shape, locale parity and ID sequencing
 * for every room. Checked here is what those cannot know: that this room is
 * wired into all three registries, that it sits in the path the curriculum put
 * it in, that it satisfies the task-mix rule, that every glossary term its
 * theory references exists, that the five chapters ship in both locales — and
 * that the Sources card still carries the works the argument rests on.
 *
 * The last one is the reason this file exists. The room shipped naming Berlin,
 * Rawls and Habermas with no citation at all, and three institutional links in
 * place of a reference apparatus. A philosophy room whose claims are not
 * traceable is the failure mode here, so the sources are asserted by URL.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '../metadata';
import { PATHS_METADATA } from '../paths';
import { ROOM_TASKS } from '../index';
import { GLOSSARY } from '../../glossary';

const ROOM_ID = 'ai-political-philosophy';

const theorySource = readFileSync(
  join(process.cwd(), 'src/components/theory/AiPoliticalPhilosophyTheory.tsx'),
  'utf8'
);

describe(`room ${ROOM_ID}`, () => {
  it('is registered in ROOMS_METADATA with bilingual copy', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID);
    expect(room, `${ROOM_ID} is missing from ROOMS_METADATA`).toBeDefined();
    expect(room!.title.ru.length).toBeGreaterThan(0);
    expect(room!.title.en.length).toBeGreaterThan(0);
  });

  it('belongs to the ideas-history path', () => {
    const room = ROOMS_METADATA.find(r => r.id === ROOM_ID)!;
    expect(room.pathIds).toContain('ideas-history');
    expect(PATHS_METADATA.some(p => p.id === 'ideas-history')).toBe(true);
  });

  it('has tasks registered in ROOM_TASKS', () => {
    expect(ROOM_TASKS[ROOM_ID]?.length ?? 0).toBeGreaterThan(0);
  });

  it('satisfies the task mix rule (at least one sorting or mentor task)', () => {
    const types = new Set((ROOM_TASKS[ROOM_ID] ?? []).map(t => t.type));
    expect(types.has('sorting') || types.has('mentor')).toBe(true);
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

  it('ships a bilingual Sources card with the works the argument rests on', () => {
    expect(theorySource).toContain("'Источники'");
    expect(theorySource).toContain("'Sources'");

    // One per named position in the room: the two liberty traditions, Rawls on
    // justice and on public reason, Habermas, private power, the empirical
    // claims, and the soft-law instruments.
    for (const href of [
      'plato.stanford.edu/entries/liberty-positive-negative/',
      'plato.stanford.edu/entries/republicanism/',
      'plato.stanford.edu/entries/original-position/',
      'plato.stanford.edu/entries/public-reason/',
      'plato.stanford.edu/entries/habermas/',
      'plato.stanford.edu/entries/democracy/',
      'press.princeton.edu/books/hardcover/9780691176512/private-government',
      'arxiv.org/abs/2106.15590',
      'arxiv.org/abs/2510.21043',
      'gradual-disempowerment.ai',
      'anthropic.com/research/collective-constitutional-ai',
      'aeon.co/essays/why-rule-by-the-people-is-better-than-rule-by-the-experts',
      'coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence',
      'unesco.org/en/artificial-intelligence/recommendation-ethics',
    ]) {
      expect(theorySource, `source ${href} is missing`).toContain(href);
    }
  });

  it('every source entry carries a note in both locales', () => {
    const notes = [...theorySource.matchAll(/note: \{\s*ru: '([^']*)',\s*en: '([^']*)',/g)];
    expect(notes.length).toBeGreaterThanOrEqual(14);
    for (const [, ru, en] of notes) {
      expect(ru.trim().length, 'a source note is missing its Russian text').toBeGreaterThan(0);
      expect(en.trim().length, 'a source note is missing its English text').toBeGreaterThan(0);
    }
  });
});
