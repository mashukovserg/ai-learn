# Testing Strategy

## Why this exists

The platform ships 36 rooms of bilingual learning content. The progress system trusts that data is well-formed:

- `ROOM_TASKS[id].length` is the denominator for completion %, so a single task with a duplicate or skipped `id` permanently breaks the progress bar (see `AGENTS.md` → "Task ID sequencing").
- Task components do **no runtime validation**. A bad `correctMapping` key, a `correctAnswer` that doesn't match any option, or a missing `ru` translation silently produces an unsolvable task. The user sees a broken room; the team sees nothing in logs.
- We've already shipped at least one such bug to production (`scaling-hypothesis` task id `10` instead of `5`, fixed 2026-03-17). It would have been caught in milliseconds by a data-integrity test.

This document captures the testing approach and the trade-offs behind it.

## Test layers (in priority order)

| Layer | Status | Tool | What it covers |
|---|---|---|---|
| 1. Data integrity | **In progress** | Vitest | Room metadata, path metadata, task arrays — structural rules from `AGENTS.md`. |
| 2. Hooks (unit) | Planned | Vitest + RTL | `useProgress` merge logic, `useAuth` flow guards. |
| 3. Components (unit) | Planned | Vitest + RTL | `TaskQuestion`, `TaskSorting`, `TaskCategorize`, etc. — happy path + wrong answer per task type. |
| 4. E2E smoke | Planned (later) | Playwright | Signup → complete a room → relogin → progress persists. |

We start with layer 1 because:

- It catches the bug class that has actually broken production (broken IDs, missing translations, mismatched answers).
- It runs in <1s, no browser, no DOM, no API mocks.
- It pays for itself the moment a 37th room is added — every new task file goes through the same gate.

Layers 2–4 are deferred until we have evidence of bugs in those layers.

## What layer 1 enforces

The rules below are the codified version of `AGENTS.md` → "Task data validation gate" and "Task ID sequencing". Each becomes a single Vitest assertion.

### Cross-cutting (every task)

- Task `id` is a sequential integer starting at `1` per room — no gaps, no duplicates.
- Every text field that is typed `LocalizedString` has both `en` and `ru` populated (non-empty after `.trim()`).
- Every room registered in `ROOM_TASKS` exists in `ROOMS_METADATA` and vice versa.
- Every `pathIds[]` reference points to an existing `PATHS_METADATA.id`.
- Every `PATHS_METADATA` path that is `unlocked: true` has at least one room pointing to it.

### Per task type

| Type | Rule |
|---|---|
| `input` | `answer` is a non-empty string or non-empty `string[]`; entries are lowercase and trimmed (matches the runtime normalizer). |
| `multiple-choice` | `answer.en` is exactly equal to one `options[i].en` and `answer.ru` is exactly equal to that same `options[i].ru`. |
| `multiple-select` | Every entry in `answer[]` (both locales) appears in `options[]` (matched as a `LocalizedString`). |
| `sorting` | `correctOrder` is a permutation of `initialItems` — same multiset in both locales. |
| `mentor` | `dialogue.userOptions` has at least one `isCorrect: true`; every option has a non-empty `reaction.en` and `reaction.ru`. |
| `categorize` | Every key of `correctMapping` matches some `items[i].en`; every value matches some `buckets[j].en`. |
| `timeline` | Every entry in `correctOrder` matches some `events[i].label` exactly (both locales); every event has a non-empty `year`. |
| `scenario` | At least one `choices[i].score >= passingScore` (default `60`); every choice has a numeric `score` in `[0, 100]` and a non-empty `outcome` in both locales. |

## Naming and locations

- Test files live next to the data they test, suffixed `.test.ts`:
  - `src/data/rooms/__tests__/data-integrity.test.ts` — cross-cutting rules.
  - `src/data/rooms/__tests__/task-shapes.test.ts` — per-task-type rules.
- Hook and component tests, when added, live under `__tests__/` next to their source.
- `tests/` at the repo root is reserved for E2E (Playwright) when that layer arrives.

## Running

```bash
npm run test           # one-shot run, exits with non-zero on failure
npm run test:watch     # watch mode for development
npm run test:coverage  # one-shot with v8 coverage report
```

`npm run test` is **not** part of `check-all` yet. It will be folded into the gate once the 47 pre-existing data issues uncovered by the initial run (see "Known data issues" below) are resolved or explicitly quarantined. Keeping `check-all` green during that work prevents the gate from blocking unrelated changes.

## Known data issues (initial run, 2026-05-11)

The first full run surfaced 47 failures across 36 rooms — every one is a real defect, not a test calibration problem. They split into four buckets:

### 1. `categorize` tasks with non-English `correctMapping` keys (22)

The room renderer at `src/app/[lang]/rooms/[id]/page.tsx:138-144` resolves `correctMapping` by matching against `items[i].en` and `buckets[j].en`. When authors wrote Russian or mixed strings as keys, the lookup returns `-1`, the resolved mapping ends up empty, and **no user (EN or RU) can solve the task** — every drop registers as wrong.

Affected: `agent-coding-foundations#6`, `agent-coding-foundations#7`, `agentic-swarm-management#6`, `agentic-testing-loop#3`, `agentic-ui-delivery#3`, `ai-agents#4`, `ai-history#8`, `ai-image-creation#5`, `ai-rag#3`, `ai-regulation-eu#2`, `ai-regulation-ru#3`, `ai-security#4`, `chatgpt-moment#8`, `claude-code-agentic-loop#2`, `frontier-evals-logic#6`, `llm-guardrails#2`, `llm-mechanics#11`, `multi-agent-collaboration#4`, `native-multimodality#5`, `prompt-contracts#4`, `prompting-101#9`, `scaling-hypothesis#6`.

Fix: rewrite each `correctMapping` so every key matches an `items[i].en` exactly, and every value matches a `buckets[j].en` exactly.

### 2. `scenario` tasks with no passing choice or negative scores (6)

Either no choice meets `passingScore` (default 60), or scores are outside `[0, 100]`. The user cannot complete the scenario.

- No passing choice: `prompt-contracts#5`, `multi-agent-collaboration#5`, `agentic-testing-loop#4`, `agentic-ui-delivery#5`.
- Negative scores: `agentic-swarm-management#4` (`-5`), `frontier-evals-logic#8` (`-5`).

Fix: review scoring rubric, ensure at least one choice meets `passingScore`, clamp scores to `[0, 100]`.

### 3. Tasks with empty `explanation` (17)

The `explanation` field is typed as required `LocalizedString` but several tasks ship `{ en: '', ru: '' }`. Severity is lower (UI renders an empty block, doesn't break the task), but it violates the contract and degrades the post-task feedback.

Affected: `agentic-swarm-management#9`, `ai-alignment#6`, `ai-history#6`, `ai-regulation-eu#5`, `ai-regulation-ru#5`, `ai-research#6`, `ai-singularity#6`, `chatgpt-moment#5`, `claude-code-agentic-loop#9`, `deep-search-agents#6`, `fine-tuning-101#8`, `llm-guardrails#5`, `llm-landscape#11`, `llm-mechanics#8`, `post-chatgpt-history#6`, `prompting-101#6`, `research-grounding#6`, `scaling-hypothesis#5`.

Fix: write a 1–2 sentence explanation for each, in both locales.

### 4. Missing task registration (1)

`prompt-evals` exists in `ROOMS_METADATA` but is absent from `ROOM_TASKS` — there is no `src/data/rooms/tasks/prompt-evals.ts` import in `tasks/index.ts`. The room renders the metadata, then crashes (or shows zero tasks) because `ROOM_TASKS['prompt-evals']` is `undefined`.

Fix: either restore the task file (`PROGRESS.md` 2026-02-17 milestone says it once existed) or remove the metadata entry.

### How to clear this list

For each item, fix the underlying data, re-run `npm run test`, and remove the entry above when its test passes. When the list is empty, re-add `npm run test` to `check-all` in `package.json`.

## What we deliberately don't test (yet)

- **Theory component rendering.** Theory text is reviewed by humans. Snapshot tests on theory would create churn without catching a meaningful bug class.
- **Visual regression.** Out of scope until we have a paid budget for it (Chromatic or similar).
- **Backend.** FastAPI routes have type-checked Pydantic schemas and a shallow surface. If/when the backend grows, pytest tests live under `backend/tests/`.
- **Translation quality.** A test can confirm `ru` is populated, not that it's a good translation. Translation review remains human.

## How to extend

When you add a new task type, add:

1. A new branch to `task-shapes.test.ts` for that type's rules.
2. The corresponding row to the table above.
3. The same rule to `AGENTS.md` → "Task data validation gate".

When a bug slips past these tests, write the failing test first, then fix the bug. The test stays as a regression guard.
