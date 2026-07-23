import { LocalizedTask, LocalizedString } from './types';

/**
 * Resolves a bilingual `LocalizedTask` into the single-locale shape the task
 * renderers consume. Extracted 1:1 from the room page, where this logic sat
 * inline inside a `useState` initializer and could not be unit-tested.
 *
 * Notable subtlety — `categorize`: `correctMapping` is authored with
 * English-keyed items/buckets (see the "Task data validation gate" in
 * docs/AGENTS.md), so the mapping is re-keyed here through the EN strings into
 * whichever locale is being rendered.
 */

type Lang = 'en' | 'ru';

const isLocalized = (v: unknown): v is LocalizedString =>
  typeof v === 'object' && v !== null && 'en' in v;

const pick = (v: LocalizedString | string, lang: Lang): string =>
  typeof v === 'object' ? v[lang] : v;

export function resolveTask(t: LocalizedTask, rawLang: string) {
  const lang = rawLang as Lang;

  return {
    ...t,
    question: t.question[lang],
    explanation: t.explanation[lang],
    answer: Array.isArray(t.answer)
      ? t.answer.map(a => (isLocalized(a) ? (a as unknown as Record<string, string>)[lang] : a))
      : isLocalized(t.answer)
        ? (t.answer as unknown as Record<string, string>)[lang]
        : t.answer,
    hint: t.hint ? t.hint[lang] : undefined,
    image: t.image
      ? {
          src: t.image.src,
          alt: t.image.alt[lang],
          caption: t.image.caption ? t.image.caption[lang] : undefined,
        }
      : undefined,
    options: t.options?.map(o => pick(o, lang)),
    initialItems: t.initialItems?.map(o => pick(o, lang)),
    correctOrder: t.correctOrder?.map(o => pick(o, lang)),
    dialogue: t.dialogue
      ? {
          mentorMessage: t.dialogue.mentorMessage[lang],
          userOptions: t.dialogue.userOptions.map(o => ({
            text: o.text[lang],
            reaction: o.reaction[lang],
            isCorrect: o.isCorrect,
            deepening: o.deepening ? o.deepening[lang] : undefined,
          })),
        }
      : undefined,
    categorize: t.categorize
      ? (() => {
          const resolvedItems = t.categorize!.items.map(i => pick(i, lang));
          const resolvedBuckets = t.categorize!.buckets.map(b => pick(b, lang));
          const rawItems = t.categorize!.items.map(i => (typeof i === 'object' ? i.en : i));
          const rawBuckets = t.categorize!.buckets.map(b => (typeof b === 'object' ? b.en : b));
          const resolvedMapping: Record<string, string> = {};
          for (const [rawItem, rawBucket] of Object.entries(t.categorize!.correctMapping)) {
            const itemIdx = rawItems.indexOf(rawItem);
            const bucketIdx = rawBuckets.indexOf(rawBucket);
            if (itemIdx !== -1 && bucketIdx !== -1) {
              resolvedMapping[resolvedItems[itemIdx]] = resolvedBuckets[bucketIdx];
            }
          }
          return { items: resolvedItems, buckets: resolvedBuckets, correctMapping: resolvedMapping };
        })()
      : undefined,
    timeline: t.timeline
      ? {
          events: t.timeline.events.map(e => ({
            label: pick(e.label, lang),
            year: e.year,
          })),
          correctOrder: t.timeline.correctOrder.map(l => pick(l, lang)),
        }
      : undefined,
    scenario: t.scenario
      ? {
          brief: t.scenario.brief[lang],
          constraints: t.scenario.constraints.map(c => c[lang]),
          choices: t.scenario.choices.map(c => ({
            text: c.text[lang],
            outcome: c.outcome[lang],
            score: c.score,
            tags: c.tags,
          })),
          passingScore: t.scenario.passingScore,
        }
      : undefined,
  };
}

export type ResolvedTask = ReturnType<typeof resolveTask>;
