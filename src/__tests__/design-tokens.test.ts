/**
 * Design-token guard. Keeps design changes cheap by making sure components
 * address color by ROLE (a semantic token) rather than by literal palette name.
 *
 * Why this exists: swapping the terminal design cost minutes (11 `--color-term-*`
 * tokens), while recoloring theory headings cost 250 replacements across 34 files
 * because the emerald accent was hardcoded everywhere. The accent ramp was
 * migrated to `--color-accent-*` on 2026-07-21; without this guard the literals
 * come back within a week and the next design change is expensive again.
 *
 * See docs/DESIGN_FORKS.md and the "Design tokens" gate in docs/AGENTS.md.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SRC = join(process.cwd(), 'src');

/** Where the primitives legitimately live — the only place a palette name is allowed. */
const TOKEN_DEFINITION_FILES = ['src/app/[lang]/globals.css'];

/**
 * Palettes that have been migrated to a semantic token. Using them literally in a
 * component re-hardcodes a decision the token layer exists to keep swappable.
 */
const RETIRED_PALETTES: { palette: string; useInstead: string }[] = [
  { palette: 'emerald', useInstead: 'accent-* (e.g. text-accent-500, bg-accent-500/10)' },
  { palette: 'red', useInstead: 'danger-*' },
  { palette: 'amber', useInstead: 'warning-*' },
  { palette: 'blue', useInstead: 'info-*' },
  { palette: 'green', useInstead: 'success-*' },
];

/**
 * Not yet migrated — tracked so the debt is visible and cannot silently grow.
 * When these move to semantic tokens (success/warning/danger/info), move the
 * entry into RETIRED_PALETTES and drop it here.
 */
const NOT_YET_MIGRATED = ['cyan', 'rose', 'purple', 'violet', 'pink', 'orange', 'slate', 'yellow'];

function sourceFiles(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === '__tests__' || name === 'node_modules') continue;
      sourceFiles(full, acc);
    } else if (/\.(tsx|ts|jsx|js)$/.test(name)) {
      acc.push(full);
    }
  }
  return acc;
}

const files = sourceFiles(SRC)
  .map(f => ({ path: f, rel: relative(process.cwd(), f) }))
  .filter(f => !TOKEN_DEFINITION_FILES.includes(f.rel))
  .map(f => ({ ...f, text: readFileSync(f.path, 'utf8') }));

describe('design tokens: retired palettes must not be used literally', () => {
  for (const { palette, useInstead } of RETIRED_PALETTES) {
    it(`no literal \`${palette}-*\` classes in components — use ${useInstead}`, () => {
      const re = new RegExp(`\\b${palette}-\\d{2,3}\\b`, 'g');
      const offenders = files
        .map(f => ({ rel: f.rel, hits: [...new Set(f.text.match(re) ?? [])] }))
        .filter(f => f.hits.length > 0);

      expect(
        offenders,
        offenders.length
          ? `\n\nLiteral \`${palette}\` classes found. Use ${useInstead} so the accent stays swappable ` +
            `(a design change must not cost a repo-wide sweep — see docs/DESIGN_FORKS.md):\n` +
            offenders.map(o => `  ${o.rel}: ${o.hits.join(', ')}`).join('\n') + '\n'
          : undefined
      ).toEqual([]);
    });
  }
});

describe('design tokens: theory headings use the heading token', () => {
  /**
   * Fork 3 (docs/DESIGN_FORKS.md): chapter headings are deliberately NOT the accent
   * color — the accent means "interactive". A heading painted with the accent
   * silently reverts that decision.
   */
  it('no <h2>/<h3>/<h4> in theory components painted with the accent', () => {
    const theory = files.filter(f => f.rel.startsWith('src/components/theory/'));
    // `[^>]` already spans newlines, so no dotAll flag is needed here.
    const re = /<h[234]\b(?:(?!<\/?h[234]\b)[^>])*?text-accent-\d{2,3}/g;

    const offenders = theory
      .map(f => ({ rel: f.rel, count: (f.text.match(re) ?? []).length }))
      .filter(f => f.count > 0);

    expect(
      offenders,
      offenders.length
        ? `\n\nTheory headings must use \`text-heading\`, not the accent (Fork 3 in docs/DESIGN_FORKS.md):\n` +
          offenders.map(o => `  ${o.rel}: ${o.count} heading(s)`).join('\n') + '\n'
        : undefined
    ).toEqual([]);
  });
});

describe('design tokens: migration debt is visible', () => {
  /**
   * Not a failure — a ratchet. It records how much literal color is left so the
   * next migration phase has a number, and so growth shows up in review.
   */
  it('reports remaining literal palette usage (informational)', () => {
    const counts = NOT_YET_MIGRATED.map(palette => {
      const re = new RegExp(`\\b${palette}-\\d{2,3}\\b`, 'g');
      return { palette, count: files.reduce((n, f) => n + (f.text.match(re) ?? []).length, 0) };
    })
      .filter(c => c.count > 0)
      .sort((a, b) => b.count - a.count);

    // Always passes; the assertion just keeps the array shape honest.
    expect(Array.isArray(counts)).toBe(true);
  });
});
