import { describe, it, expect } from 'vitest';
import { normalizeAnswer, isAnswerMatch } from '../answerNormalize';

describe('normalizeAnswer', () => {
  it('lowercases and trims', () => {
    expect(normalizeAnswer('  RLHF ')).toBe('rlhf');
  });
  it('folds ё to е', () => {
    expect(normalizeAnswer('Учёт')).toBe(normalizeAnswer('учет'));
  });
  it('drops quotes, backticks and apostrophes', () => {
    expect(normalizeAnswer('«джейлбрейк»')).toBe('джейлбрейк');
    expect(normalizeAnswer('`gh pr checks`')).toBe('gh pr checks');
    expect(normalizeAnswer("let's think step by step")).toBe('lets think step by step');
  });
  it('treats hyphens, dashes and underscores as spaces and collapses whitespace', () => {
    expect(normalizeAnswer('top-p')).toBe('top p');
    expect(normalizeAnswer('top_p')).toBe('top p');
    expect(normalizeAnswer('top   p')).toBe('top p');
    expect(normalizeAnswer('time — to — first token')).toBe('time to first token');
  });
  it('strips trailing sentence punctuation only', () => {
    expect(normalizeAnswer('rollback.')).toBe('rollback');
    expect(normalizeAnswer('agents.md')).toBe('agents.md');
    expect(normalizeAnswer('.safetensors')).toBe('.safetensors');
  });
  it('applies NFKC so full-width and compatibility forms match', () => {
    expect(normalizeAnswer('ＧＱＡ')).toBe('gqa');
  });
});

describe('isAnswerMatch', () => {
  it('matches a single accepted string', () => {
    expect(isAnswerMatch('Function Calling', 'function calling')).toBe(true);
  });
  it('matches any variant in an array', () => {
    expect(isAnswerMatch('Откат', ['rollback', 'roll back', 'откат'])).toBe(true);
    expect(isAnswerMatch('roll-back', ['rollback', 'roll back'])).toBe(true);
  });
  it('rejects an empty or whitespace-only answer even if a variant is empty', () => {
    expect(isAnswerMatch('   ', ['', 'x'])).toBe(false);
  });
  it('rejects a different word', () => {
    expect(isAnswerMatch('reranking', ['re-ranking'])).toBe(false);
  });
});
