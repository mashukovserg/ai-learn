/**
 * Heading-icon guard — docs/AGENTS.md → "No leading icons in headings" (and the
 * Anti-Vibecode Frontend Gate it belongs to).
 *
 * The rule: room and theory headings carry no decorative icon before the text.
 * Emphasis comes from typography, spacing and color — an icon prefix is the
 * house style of generated UI, which is exactly what the anti-vibecode gate is
 * there to keep out.
 *
 * Why this exists: the rule was prose-only and is invisible in review — an
 * `<Icon />` inside an `<h2>` looks like ordinary markup in a diff, and reads
 * as decoration only once rendered. Writing this guard immediately turned up
 * live violations in rooms nobody had reopened since the rule landed.
 *
 * What counts as a violation: a self-closing capitalised component (the lucide
 * icons are all `<Info />`, `<Rocket />`, …) or an emoji inside an <h1>–<h4>.
 * Text-carrying children are fine — `<Term>`, `<span>`, `{lang === 'ru' ? …}`
 * are how bilingual headings are built.
 *
 * SCOPE: the headings that predate the rule are listed in DEBT rather than
 * stripped here. Removing ~100 icons across 15 rooms is a visible design change
 * to shipped content, and docs/DESIGN_FORKS.md says the design is still being
 * searched — that call belongs to the owner, not to a guard landing alongside
 * it. What the list does guarantee: no NEW heading gets an icon, and the debt is
 * countable instead of anecdotal.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SRC = join(process.cwd(), 'src');

/** `<Info className="…" />` — a capitalised, self-closing element renders an icon, not text. */
const SELF_CLOSING_COMPONENT = /<([A-Z][A-Za-z0-9]*)\b[^>]*\/>/g;

/** Self-closing but text-rendering: `<Term id="rag" />` prints the glossary label. */
const RENDERS_TEXT = new Set(['Term']);

/**
 * Files whose headings carry icons from before the rule (docs/AGENTS.md → "No
 * leading icons in headings"). Standing debt, not an exemption: strip the icons
 * when you touch one of these for any reason, and delete its line here.
 */
const DEBT: string[] = [
  'src/app/[lang]/rooms/[id]/page.tsx',
  'src/app/[lang]/settings/page.tsx',
  'src/components/Sidebar.tsx',
  'src/components/SkillsMatrix.tsx',
  'src/components/theory/AiAgentsTheory.tsx',
  'src/components/theory/AiAlignmentTheory.tsx',
  'src/components/theory/AiImageCreationTheory.tsx',
  'src/components/theory/AiRagTheory.tsx',
  'src/components/theory/AiResearchTheory.tsx',
  'src/components/theory/AiSecurityTheory.tsx',
  'src/components/theory/Embeddings101Theory.tsx',
  'src/components/theory/FineTuning101Theory.tsx',
  'src/components/theory/Llama318bTheory.tsx',
  'src/components/theory/NativeMultimodalityTheory.tsx',
  'src/components/theory/PromptEvalsTheory.tsx',
  'src/components/theory/Prompting101Theory.tsx',
  'src/components/theory/ResearchGroundingTheory.tsx',
];
const EMOJI = /\p{Extended_Pictographic}/u;
const HEADING = /<(h[1-4])\b[^>]*>([\s\S]*?)<\/\1>/g;

function componentFiles(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name === '__tests__' || name === 'node_modules') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) componentFiles(full, acc);
    else if (/\.(tsx|jsx)$/.test(name)) acc.push(full);
  }
  return acc;
}

const files = componentFiles(SRC).map(path => ({
  rel: relative(process.cwd(), path),
  text: readFileSync(path, 'utf8'),
}));

/** Line number of an offset, so the failure message points at something clickable. */
function lineOf(text: string, index: number): number {
  return text.slice(0, index).split('\n').length;
}

const offenders = files.filter(f => !DEBT.includes(f.rel)).flatMap(({ rel, text }) =>
  [...text.matchAll(HEADING)].flatMap(match => {
    const [, tag, inner] = match;
    const line = lineOf(text, match.index);

    const icons = [...inner.matchAll(SELF_CLOSING_COMPONENT)]
      .filter(m => !RENDERS_TEXT.has(m[1]))
      .map(m => `<${m[1]} />`);
    if (EMOJI.test(inner)) icons.push('emoji');

    return icons.length ? [`  ${rel}:${line}  <${tag}> carries ${[...new Set(icons)].join(', ')}`] : [];
  })
);

describe('heading icons (docs/AGENTS.md → "No leading icons in headings")', () => {
  it('no decorative icons inside <h1>–<h4>', () => {
    expect(
      offenders,
      offenders.length
        ? `\n\nHeadings must carry text only — drop the icon and keep the emphasis in ` +
          `typography, spacing and color (docs/AGENTS.md, Anti-Vibecode Frontend Gate):\n\n` +
          offenders.join('\n') + '\n'
        : undefined
    ).toEqual([]);
  });

  it('the debt list only names files that still carry heading icons', () => {
    // Keeps DEBT shrinking: a cleaned file must lose its line, or the list rots
    // into a permanent exemption nobody rechecks.
    const stale = DEBT.filter(rel => {
      const text = files.find(f => f.rel === rel)?.text ?? '';
      return ![...text.matchAll(HEADING)].some(m =>
        EMOJI.test(m[2]) ||
        [...m[2].matchAll(SELF_CLOSING_COMPONENT)].some(i => !RENDERS_TEXT.has(i[1]))
      );
    });

    expect(
      stale,
      stale.length ? `\n\nThese files no longer carry heading icons — remove them from DEBT:\n  ${stale.join('\n  ')}\n` : undefined
    ).toEqual([]);
  });

  it('the detector still recognises an icon heading', () => {
    // Guards the guard: a regex that silently stops matching would turn this
    // suite green forever.
    const sample = '<h2 className="flex"><Info className="text-accent-500" />Заголовок</h2>';
    const found = [...sample.matchAll(HEADING)].flatMap(m => [...m[2].matchAll(SELF_CLOSING_COMPONENT)]);
    expect(found).toHaveLength(1);
    expect(EMOJI.test('<h2>🚀 Title</h2>')).toBe(true);
  });
});
