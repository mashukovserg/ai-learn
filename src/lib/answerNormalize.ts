/**
 * Free-text answer matching for `input` tasks.
 *
 * Framework-free on purpose (no React, no locale hook) so the rule can be unit
 * tested and reused by the authoring guard in the Vitest suite. Both the
 * learner's text and every accepted variant go through the same `normalizeAnswer`,
 * so authors only need to list *different words*, never different spellings of
 * the same word.
 *
 * What is folded (docs/AGENTS.md → "Task data validation gate", rule 1):
 * - Unicode NFKC, then lower case (`GQA` = `gqa`, full-width digits = ASCII).
 * - `ё` → `е` (a Russian learner may type either).
 * - Every kind of quote, backtick and apostrophe is dropped (`let's` = `lets`).
 * - Hyphens, dashes and underscores become spaces, then runs of whitespace
 *   collapse (`top-p` = `top p` = `top_p`; `re-ranking` = `reranking` is NOT
 *   folded — the hyphen becomes a space, so list `reranking` if you want it).
 * - Trailing sentence punctuation is stripped (`rollback.` = `rollback`).
 * - Leading/trailing whitespace is trimmed.
 */
export function normalizeAnswer(value: string): string {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[""«»"'`‘’‚‛]/g, '')
    .replace(/[-‐‑‒–—_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.,!?;:]+$/g, '')
    .trim();
}

/** True when `given` matches any accepted variant after normalisation. */
export function isAnswerMatch(given: string, accepted: string | readonly string[]): boolean {
  const user = normalizeAnswer(given);
  if (user.length === 0) return false;
  const variants = Array.isArray(accepted) ? accepted : [accepted as string];
  return variants.some((v) => normalizeAnswer(v) === user);
}
