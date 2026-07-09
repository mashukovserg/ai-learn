/**
 * Per-task-type validation. Each task type below is checked against the rules
 * in docs/AGENTS.md → "Task data validation gate". A failing assertion means a task
 * is silently unsolvable in the UI (no runtime validation exists in components).
 */
import { describe, it, expect } from 'vitest';
import { ROOM_TASKS } from '../index';
import type { LocalizedString, LocalizedTask } from '../types';

interface LabeledTask {
  label: string;
  roomId: string;
  task: LocalizedTask;
}

const allTasks: LabeledTask[] = Object.entries(ROOM_TASKS).flatMap(([roomId, tasks]) =>
  tasks.map(task => ({ label: `${roomId}#${task.id}`, roomId, task }))
);

const tasksOfType = (type: LocalizedTask['type']) =>
  allTasks
    .filter(({ task }) => task.type === type)
    .map(t => [t.label, t] as const);

function isLocalized(value: unknown): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as LocalizedString).en === 'string' &&
    typeof (value as LocalizedString).ru === 'string' &&
    (value as LocalizedString).en.trim().length > 0 &&
    (value as LocalizedString).ru.trim().length > 0
  );
}

function localizedEquals(a: LocalizedString, b: LocalizedString): boolean {
  return a.en === b.en && a.ru === b.ru;
}

describe('input tasks', () => {
  const tasks = tasksOfType('input');

  // Runtime accepts answer as string | string[] | LocalizedString | (LocalizedString | string)[].
  // Both sides are lowercased+trimmed by the runtime normalizer in TaskQuestion,
  // so case and trailing punctuation in source don't break matching — only
  // emptiness does.
  function isFilledAnswerEntry(v: unknown): boolean {
    if (typeof v === 'string') return v.trim().length > 0;
    if (isLocalized(v)) return true;
    return false;
  }

  it.each(tasks)('%s has a non-empty answer (string, string[], or {en,ru})', (_label, { task }) => {
    const a = task.answer;
    if (Array.isArray(a)) {
      expect(a.length, 'input answer array must be non-empty').toBeGreaterThan(0);
      for (const v of a) {
        expect(isFilledAnswerEntry(v), `array entry must be non-empty string or {en,ru}: ${JSON.stringify(v)}`).toBe(true);
      }
    } else {
      expect(isFilledAnswerEntry(a), `answer must be non-empty string or {en,ru}: ${JSON.stringify(a)}`).toBe(true);
    }
  });
});

describe('multiple-choice tasks', () => {
  const tasks = tasksOfType('multiple-choice');

  it.each(tasks)('%s has a localized answer that exactly matches one option (both locales)', (_label, { task }) => {
    expect(isLocalized(task.answer), 'mc answer must be {en, ru}').toBe(true);
    const options = (task.options ?? []) as LocalizedString[];
    expect(options.length, 'mc must have options').toBeGreaterThan(0);
    for (const opt of options) {
      expect(isLocalized(opt), 'every option must be {en, ru}').toBe(true);
    }
    const match = options.some(opt => localizedEquals(opt, task.answer as LocalizedString));
    expect(match, 'answer.en + answer.ru must match the same option entry').toBe(true);
  });
});

describe('multiple-select tasks', () => {
  const tasks = tasksOfType('multiple-select');

  it.each(tasks)('%s has every selected answer present in options (both locales)', (_label, { task }) => {
    expect(Array.isArray(task.answer), 'ms answer must be an array').toBe(true);
    const answers = task.answer as LocalizedString[];
    const options = (task.options ?? []) as LocalizedString[];
    expect(answers.length, 'ms answer must have at least one entry').toBeGreaterThan(0);
    for (const ans of answers) {
      expect(isLocalized(ans), 'each answer must be {en, ru}').toBe(true);
      const match = options.some(opt => localizedEquals(opt, ans));
      expect(match, `answer "${ans.en}" not found in options`).toBe(true);
    }
  });
});

describe('sorting tasks', () => {
  const tasks = tasksOfType('sorting');

  it.each(tasks)('%s correctOrder is a permutation of initialItems', (_label, { task }) => {
    const init = (task.initialItems ?? []) as LocalizedString[];
    const correct = (task.correctOrder ?? []) as LocalizedString[];
    expect(init.length).toBeGreaterThan(0);
    expect(correct.length).toBe(init.length);

    const sortByEn = (a: LocalizedString, b: LocalizedString) => a.en.localeCompare(b.en);
    const initSorted = [...init].sort(sortByEn);
    const correctSorted = [...correct].sort(sortByEn);

    for (let i = 0; i < initSorted.length; i++) {
      expect(localizedEquals(initSorted[i], correctSorted[i]), 'multiset mismatch between initialItems and correctOrder').toBe(true);
    }
  });
});

describe('mentor tasks', () => {
  const tasks = tasksOfType('mentor');

  it.each(tasks)('%s has a filled mentorMessage and at least one correct option', (_label, { task }) => {
    expect(task.dialogue, 'mentor task must have a dialogue object').toBeDefined();
    const d = task.dialogue!;
    expect(isLocalized(d.mentorMessage), 'mentorMessage must be {en, ru}').toBe(true);
    expect(d.userOptions.length, 'mentor must have at least one userOption').toBeGreaterThan(0);
    expect(d.userOptions.some(o => o.isCorrect === true), 'mentor must have at least one isCorrect option').toBe(true);
    for (const opt of d.userOptions) {
      expect(isLocalized(opt.text), 'option.text must be {en, ru}').toBe(true);
      expect(isLocalized(opt.reaction), 'option.reaction must be {en, ru}').toBe(true);
    }
  });
});

describe('categorize tasks', () => {
  const tasks = tasksOfType('categorize');

  it.each(tasks)('%s correctMapping keys/values resolve to items/buckets (English)', (_label, { task }) => {
    expect(task.categorize, 'categorize task must have a categorize block').toBeDefined();
    const c = task.categorize!;
    expect(c.items.length).toBeGreaterThan(0);
    expect(c.buckets.length).toBeGreaterThan(0);

    const itemEns = new Set(c.items.map(i => i.en));
    const bucketEns = new Set(c.buckets.map(b => b.en));

    for (const [key, value] of Object.entries(c.correctMapping)) {
      expect(itemEns.has(key), `correctMapping key "${key}" not found in items[].en`).toBe(true);
      expect(bucketEns.has(value), `correctMapping value "${value}" not found in buckets[].en`).toBe(true);
    }

    for (const item of c.items) expect(isLocalized(item)).toBe(true);
    for (const bucket of c.buckets) expect(isLocalized(bucket)).toBe(true);
  });
});

describe('timeline tasks', () => {
  const tasks = tasksOfType('timeline');

  it.each(tasks)('%s correctOrder labels match events labels (both locales) and years are filled', (_label, { task }) => {
    expect(task.timeline, 'timeline task must have a timeline block').toBeDefined();
    const t = task.timeline!;
    expect(t.events.length).toBeGreaterThan(0);
    expect(t.correctOrder.length).toBe(t.events.length);

    for (const ev of t.events) {
      expect(isLocalized(ev.label), 'event label must be {en, ru}').toBe(true);
      expect(typeof ev.year === 'string' && ev.year.trim().length > 0, 'event year must be non-empty').toBe(true);
    }

    for (const orderLabel of t.correctOrder) {
      expect(isLocalized(orderLabel), 'correctOrder entry must be {en, ru}').toBe(true);
      const match = t.events.some(ev => localizedEquals(ev.label, orderLabel));
      expect(match, `correctOrder label "${orderLabel.en}" not found in events`).toBe(true);
    }
  });
});

describe('scenario tasks', () => {
  const tasks = tasksOfType('scenario');

  it.each(tasks)('%s has at least one passing choice and valid scores/outcomes', (_label, { task }) => {
    expect(task.scenario, 'scenario task must have a scenario block').toBeDefined();
    const s = task.scenario!;
    expect(isLocalized(s.brief), 'scenario.brief must be {en, ru}').toBe(true);
    expect(s.choices.length).toBeGreaterThan(0);
    const passing = s.passingScore ?? 60;

    for (const choice of s.choices) {
      expect(isLocalized(choice.text), 'choice.text must be {en, ru}').toBe(true);
      expect(isLocalized(choice.outcome), 'choice.outcome must be {en, ru}').toBe(true);
      expect(typeof choice.score === 'number' && choice.score >= 0 && choice.score <= 100, `choice.score must be 0..100, got ${choice.score}`).toBe(true);
    }

    expect(s.choices.some(c => c.score >= passing), `no choice meets passingScore=${passing}`).toBe(true);

    for (const c of s.constraints) {
      expect(isLocalized(c), 'each constraint must be {en, ru}').toBe(true);
    }
  });
});
