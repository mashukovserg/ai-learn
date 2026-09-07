/**
 * Chapter depth guard — docs/AGENTS.md → "Chapter Text Depth Gate".
 *
 * The rule: every theory chapter carries at least 240 words of body text per
 * language and at least 4 body paragraphs, unless it is explicitly labelled
 * `Краткий блок` / `Short block`. Two-paragraph chapters read as stubs.
 *
 * Why this exists: the bar was prose-only, so it was checked by eye — and the
 * BACKLOG entries that claim it show the cost (chapter word counts measured by
 * hand "in the rendered DOM", room by room, in a browser). Nothing measured
 * the rooms nobody happened to open, and a thin new chapter shipped as easily
 * as a thick one.
 *
 * SCOPE, per the gate itself: the bar applies to new chapters and to chapters
 * you substantively edit. Chapters written before 2026-07-23 largely predate
 * the 4-paragraph rule and are standing debt — the gate explicitly says NOT to
 * mass-rewrite untouched rooms, because prose padded to length is worse than
 * short prose. So the debt is listed in DEBT below rather than hidden: the
 * suite fails for every room outside that list, and the list may only shrink.
 * When you touch a room for any content reason, bring its chapters up to the
 * bar and delete its line here.
 *
 * HOW THE COUNT WORKS (and where it is approximate): theory lives in JSX, not
 * in data, as `{ru ? (<>…</>) : (<>…</>)}` per paragraph. Rather than parse the
 * ternaries — prose is full of colons and parentheses that defeat naive
 * splitting — the counter classifies each word by script: a word with Cyrillic
 * is Russian, a purely Latin word is English. The two branches are physically
 * disjoint, so the Russian count is exact. The English count is slightly HIGH,
 * because Latin technical tokens inside Russian prose (METR, DORA, diff) land
 * in it. That error direction is deliberate: the guard can miss a thin English
 * chapter, but it can never fail a good one. A guard that cries wolf gets
 * disabled; one that under-reports still blocks the stubs it does see.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const THEORY_DIR = join(process.cwd(), 'src/components/theory');

const MIN_WORDS = 240;
const MIN_PARAGRAPHS = 4;

/**
 * A chapter carrying one of these in either language is concise by design.
 * Matched case-insensitively: the label is written both as a heading («Краткий
 * блок») and mid-sentence («Итог для практика (краткий блок)»).
 */
const SHORT_BLOCK_LABELS = ['краткий блок', 'short block'];

/**
 * Rooms whose chapters predate the 2026-07-23 depth bar (docs/AGENTS.md says to
 * thicken them when a room is touched, not in a mass rewrite). This list is
 * standing debt: entries come OUT when a room is brought up to the bar, and no
 * entry may be added for a room you are editing.
 */
const DEBT: string[] = [
  'AgentCodingFoundationsTheory.tsx',
  'AgenticCliToolsTheory.tsx',
  'AgenticCodingToolsTheory.tsx',
  'AgenticSwarmTheory.tsx',
  'AgenticTestingLoopTheory.tsx',
  'AgenticUiDeliveryTheory.tsx',
  'AiAgentsTheory.tsx',
  'AiAlignmentLimitsTheory.tsx',
  'AiAlignmentTheory.tsx',
  'AiCareerTrajectoriesTheory.tsx',
  'AiExistentialRiskTheory.tsx',
  'AiHistoryTheory.tsx',
  'AiImageCreationTheory.tsx',
  'AiLiteratureReviewTheory.tsx',
  'AiRagTheory.tsx',
  'AiRegulationEuTheory.tsx',
  'AiRegulationRuTheory.tsx',
  'AiResearchTheory.tsx',
  'AiSecurityTheory.tsx',
  'AiSingularityTheory.tsx',
  'ChatgptMomentTheory.tsx',
  'ClaudeCodeAgenticLoopTheory.tsx',
  'ClaudeCodeProWorkflowTheory.tsx',
  'ContextEngineering101Theory.tsx',
  'DeepSearchAgentsTheory.tsx',
  'Embeddings101Theory.tsx',
  'FineTuning101Theory.tsx',
  'Llama318bTheory.tsx',
  'LlmGuardrailsTheory.tsx',
  'LlmLandscapeTheory.tsx',
  'LlmMechanicsTheory.tsx',
  'LocalModels101Theory.tsx',
  'LocalRagDocsTheory.tsx',
  'McpToolEcosystemsTheory.tsx',
  'MultiAgentCollaborationTheory.tsx',
  'NativeMultimodalityTheory.tsx',
  'PostChatgptHistoryTheory.tsx',
  'PromptContractsTheory.tsx',
  'PromptEvalsTheory.tsx',
  'Prompting101Theory.tsx',
  'ResearchGroundingTheory.tsx',
  'ScalingHypothesisTheory.tsx',
  'SearchRetrievalToSynthesisTheory.tsx',
  'TaxonomyMatchingTheory.tsx',
];

/** JSX scaffolding that survives tag-stripping and would otherwise count as English. */
const SCAFFOLDING = new Set(['ru', 'en', 'lang', 'className', 'href', 'src', 'alt', 'id', 'key']);

/**
 * A chapter is an <h2>-headed section. Rooms label them three different ways —
 * `'Глава N: Title'`, a bare `'Глава N'` with the title below, and 11 older
 * rooms with no numbering at all — so the heading TAG is the only boundary that
 * holds across the whole set.
 */
const CHAPTER_HEADING = /<h2[\s>]/g;

/** The Sources card is an <h2> section too, and is reference apparatus, not a chapter. */
const NOT_A_CHAPTER = ['Источники', 'Sources'];

type Chapter = { room: string; heading: string; ruWords: number; enWords: number; paragraphs: number };

/** Drop JSX tags with their attributes, then the small interpolations that are not prose. */
function toProse(section: string): string {
  return section
    .replace(/<[^>]*>/g, ' ')          // tags + attributes (className, href, …)
    .replace(/\{\s*'[^']*'\s*\}/g, ' ') // {' '} spacers
    .replace(/&[a-z]+;/gi, ' ')         // entities
    .replace(/[{}()[\]?:;,.!—–…"'`]/g, ' ');
}

function countWords(prose: string): { ru: number; en: number } {
  let ru = 0;
  let en = 0;
  for (const token of prose.split(/\s+/)) {
    if (!token || SCAFFOLDING.has(token)) continue;
    if (/[Ѐ-ӿ]/.test(token)) ru++;
    else if (/^[A-Za-z][A-Za-z-]*$/.test(token)) en++;
  }
  return { ru, en };
}

/** First Russian string in the heading, for an error message a human can act on. */
function headingLabel(section: string): string {
  const head = section.slice(0, section.indexOf('</h2>') + 1);
  const ruLiteral = head.match(/'([^']*[\u0400-\u04FF][^']*)'/);
  return (ruLiteral?.[1] ?? head.replace(/<[^>]*>/g, ' ').trim()).slice(0, 60);
}

function chaptersOf(room: string, source: string): Chapter[] {
  const starts = [...source.matchAll(CHAPTER_HEADING)].map(m => m.index);

  return starts.flatMap((index, i) => {
    const section = source.slice(index, starts[i + 1] ?? source.length);
    const heading = headingLabel(section);

    if (NOT_A_CHAPTER.some(label => heading.includes(label))) return [];
    const lowered = section.toLowerCase();
    if (SHORT_BLOCK_LABELS.some(label => lowered.includes(label))) return [];

    const { ru, en } = countWords(toProse(section));
    return [{
      room,
      heading,
      ruWords: ru,
      enWords: en,
      // Each <p> renders in both locales, so the paragraph count is shared.
      paragraphs: (section.match(/<p[\s>]/g) ?? []).length,
    }];
  });
}

const rooms = readdirSync(THEORY_DIR)
  .filter(name => name.endsWith('Theory.tsx'))
  .map(name => ({ room: name, chapters: chaptersOf(name, readFileSync(join(THEORY_DIR, name), 'utf8')) }));

describe('chapter depth (docs/AGENTS.md → "Chapter Text Depth Gate")', () => {
  it('every theory component exposes chapters the guard can measure', () => {
    // If the chapter markup is ever restructured, the counter would silently
    // measure nothing and pass. Fail loudly instead.
    const unreadable = rooms.filter(r => r.chapters.length === 0).map(r => r.room);
    expect(
      unreadable,
      unreadable.length
        ? `\n\nNo <h2> chapters found in:\n  ${unreadable.join('\n  ')}\n` +
          `Either the room genuinely has none, or the heading markup changed and ` +
          `CHAPTER_HEADING in this file needs updating.\n`
        : undefined
    ).toEqual([]);
  });

  it(`every chapter outside the debt list holds ≥${MIN_WORDS} words per language and ≥${MIN_PARAGRAPHS} paragraphs`, () => {
    const thin = rooms
      .filter(r => !DEBT.includes(r.room))
      .flatMap(r => r.chapters)
      .filter(c => c.ruWords < MIN_WORDS || c.enWords < MIN_WORDS || c.paragraphs < MIN_PARAGRAPHS)
      .map(c => {
        const misses = [
          c.ruWords < MIN_WORDS ? `ru ${c.ruWords}w` : null,
          c.enWords < MIN_WORDS ? `en ${c.enWords}w` : null,
          c.paragraphs < MIN_PARAGRAPHS ? `${c.paragraphs}¶` : null,
        ].filter(Boolean);
        return `  ${c.room} — «${c.heading}»: ${misses.join(', ')}`;
      });

    expect(
      thin,
      thin.length
        ? `\n\nChapters below the depth bar (≥${MIN_WORDS} words per language, ≥${MIN_PARAGRAPHS} paragraphs).\n` +
          `Thicken them, label them 'Краткий блок' / 'Short block' if concise by design, or — only for a\n` +
          `pre-2026-07-23 room you are NOT editing — add the file to DEBT in this test:\n\n` +
          thin.join('\n') + '\n'
        : undefined
    ).toEqual([]);
  });

  it('the debt list only names rooms that are actually still in debt', () => {
    // Keeps DEBT shrinking: once a room clears the bar its line must go, or the
    // list rots into a permanent exemption nobody rechecks.
    const stale = DEBT.filter(room => {
      const chapters = rooms.find(r => r.room === room)?.chapters ?? [];
      return chapters.length > 0 && chapters.every(
        c => c.ruWords >= MIN_WORDS && c.enWords >= MIN_WORDS && c.paragraphs >= MIN_PARAGRAPHS
      );
    });

    expect(
      stale,
      stale.length
        ? `\n\nThese rooms now clear the depth bar — remove them from DEBT:\n  ${stale.join('\n  ')}\n`
        : undefined
    ).toEqual([]);
  });
});
