/**
 * Forbidden-phrasing guard — docs/AGENTS.md → "Forbidden phrasing".
 *
 * Why this exists: the rule lived only in prose, so it was enforced by whoever
 * happened to remember it. Two separate branches were spent purging `это не
 * просто` and `вендор` by hand (`docs/BACKLOG.md`, 2026-08), the second sweep
 * finding two files the first had missed because it grepped case-sensitively.
 * The sweeps cleaned `src/` and left `docs/lessons/` behind, and nothing stopped
 * either from coming back the next day. A rule that costs a branch to enforce
 * belongs in the test suite, not in the prompt.
 *
 * USE vs. MENTION — the exemption that keeps this maintainable:
 * this file, the gate in `docs/AGENTS.md`, `CLAUDE.md`, the READMEs and every
 * BACKLOG/PROGRESS entry logging a past sweep all have to NAME the forbidden
 * strings. They are talking ABOUT the phrase, not writing in it, and the repo
 * already marks that distinction: a mention is always quoted — in backticks,
 * guillemets or double quotes. So quoted occurrences are exempt and bare ones
 * fail. No file allowlist to maintain, and a new policy doc needs no edit here.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();

/** Authored text lives here: room content, components, docs, and the root READMEs. */
const SCANNED_DIRS = ['src', 'docs'];
const SCANNED_ROOT_FILES = ['README.md', 'README.ru.md', 'CLAUDE.md'];
const TEXT_FILE = /\.(tsx?|jsx?|json|md)$/;

const FORBIDDEN: { label: string; pattern: RegExp; instead: string }[] = [
  {
    label: 'это не просто',
    // Mirrors docs/AGENTS.md: /(^|\s)это\s+не\s+просто(\s|$)/i, widened to any
    // whitespace run so a line-wrapped JSX string cannot slip through.
    pattern: /(^|[\s>(])это\s+не\s+просто(?=[\s,.:;!?)<]|$)/gi,
    instead:
      'a concrete contrast instead of the template — «Агент — не отдельная программа, а архитектурный паттерн…»',
  },
  {
    label: 'вендор',
    pattern: /(^|[\s>(])вендор(а|у|ом|е|ы|ов|ам|ами|ах)?(?=[\s,.:;!?)<]|$)/gi,
    instead: '`поставщик модели`, `игрок рынка`, `платформа`, `компания` — pick by context',
  },
];

/**
 * Strip quoted spans so only *used* prose remains. Backtick code spans,
 * «guillemets» and "double quotes" all mark a mention of the pattern rather
 * than an instance of it.
 */
function stripMentions(line: string): string {
  return line
    .replace(/`[^`]*`/g, ' ')
    .replace(/«[^»]*»/g, ' ')
    .replace(/"[^"]*"/g, ' ')
    .replace(/“[^”]*”/g, ' ');
}

function textFiles(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next' || name === '.git') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) textFiles(full, acc);
    else if (TEXT_FILE.test(name)) acc.push(full);
  }
  return acc;
}

const files = [
  ...SCANNED_DIRS.flatMap(d => textFiles(join(ROOT, d))),
  ...SCANNED_ROOT_FILES.map(f => join(ROOT, f)),
]
  .map(path => ({ rel: relative(ROOT, path), text: readFileSync(path, 'utf8') }))
  // This guard has to spell the patterns out to test for them.
  .filter(f => f.rel !== join('src', '__tests__', 'forbidden-phrasing.test.ts'));

describe('forbidden phrasing (docs/AGENTS.md → "Forbidden phrasing")', () => {
  for (const { label, pattern, instead } of FORBIDDEN) {
    it(`no unquoted "${label}" in authored text`, () => {
      const offenders: string[] = [];

      for (const { rel, text } of files) {
        text.split('\n').forEach((line, i) => {
          const used = stripMentions(line);
          if (new RegExp(pattern.source, 'i').test(used)) {
            offenders.push(`  ${rel}:${i + 1}  ${line.trim().slice(0, 120)}`);
          }
        });
      }

      expect(
        offenders,
        offenders.length
          ? `\n\n"${label}" is forbidden in authored text (docs/AGENTS.md). Use ${instead}.\n` +
            `Quoting the pattern to talk about it (backticks, «», "") is exempt — these are bare uses:\n\n` +
            offenders.join('\n') + '\n'
          : undefined
      ).toEqual([]);
    });
  }

  it('the use/mention exemption still recognises a quoted mention', () => {
    // Guards the guard: if stripMentions ever stops working, the suite would go
    // quietly green on every policy doc instead of loudly red. Each case is the
    // same sentence written twice — once used, once merely quoted.
    const cases = [
      { used: 'Выравнивание это не просто задача.', quoted: 'Правило запрещает `это не просто`.' },
      { used: 'Какой вендор чаще ассоциируется с этим?', quoted: 'Правило запрещает слово «вендор».' },
      { used: 'Модели это не просто трюки.', quoted: 'Правило запрещает "это не просто".' },
    ];

    for (const { used, quoted } of cases) {
      const matchesSomething = (line: string) =>
        FORBIDDEN.some(({ pattern }) => new RegExp(pattern.source, 'i').test(line));

      expect(matchesSomething(used), `bare use should be caught: ${used}`).toBe(true);
      expect(matchesSomething(stripMentions(quoted)), `quoted mention should be exempt: ${quoted}`).toBe(false);
    }
  });
});
