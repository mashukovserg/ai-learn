import { describe, it, expect } from 'vitest';
import { resolveTask } from '../resolveTask';
import type { LocalizedTask } from '../types';

const base = {
  id: 1,
  question: { en: 'Q', ru: 'В' },
  explanation: { en: 'E', ru: 'О' },
} as const;

describe('resolveTask — input answers accept both locales', () => {
  it('flattens a localized {en, ru} answer into both variants', () => {
    const t: LocalizedTask = { ...base, type: 'input', answer: { en: 'Jailbreak', ru: 'Джейлбрейк' } };
    expect(resolveTask(t, 'ru').answer).toEqual(['Jailbreak', 'Джейлбрейк']);
    expect(resolveTask(t, 'en').answer).toEqual(['Jailbreak', 'Джейлбрейк']);
  });

  it('keeps a plain string answer as a one-element array', () => {
    const t: LocalizedTask = { ...base, type: 'input', answer: 'RLHF' };
    expect(resolveTask(t, 'en').answer).toEqual(['RLHF']);
  });

  it('flattens a mixed array of strings and localized entries', () => {
    const t: LocalizedTask = {
      ...base,
      type: 'input',
      answer: ['rollback', { en: 'roll back', ru: 'откат' }],
    };
    expect(resolveTask(t, 'ru').answer).toEqual(['rollback', 'roll back', 'откат']);
  });
});

describe('resolveTask — choice answers stay single-locale', () => {
  it('multiple-choice picks the page locale so it matches the rendered option', () => {
    const t: LocalizedTask = {
      ...base,
      type: 'multiple-choice',
      options: [{ en: 'A', ru: 'А' }, { en: 'B', ru: 'Б' }],
      answer: { en: 'B', ru: 'Б' },
    };
    expect(resolveTask(t, 'ru').answer).toBe('Б');
    expect(resolveTask(t, 'en').answer).toBe('B');
  });

  it('multiple-select maps each entry to the page locale', () => {
    const t: LocalizedTask = {
      ...base,
      type: 'multiple-select',
      options: [{ en: 'A', ru: 'А' }, { en: 'B', ru: 'Б' }],
      answer: [{ en: 'A', ru: 'А' }, { en: 'B', ru: 'Б' }],
    };
    expect(resolveTask(t, 'ru').answer).toEqual(['А', 'Б']);
  });
});
