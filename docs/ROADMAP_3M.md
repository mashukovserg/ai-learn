# 3-Month Agent Roadmap (2026-05-16 → 2026-08-15)

Execution plan for coding agents working on this repository. Each item is sized for the observed shipping cadence (~1 significant unit per 1–2 weeks) and carries its own acceptance criteria. Work top-down within a month; do not start a later month while a 🔴 item of the current month is open.

Companion docs: `AGENTS.md` (mandatory gates), `BACKLOG.md` (punch lists, work log), `TESTING.md` (test strategy and defect triage), `ROOMS_IDEAS.md` (room concepts).

## How agents should use this roadmap

1. Pick the topmost unchecked item in the current month.
2. Before editing, re-read the relevant gates in `AGENTS.md` (task validation, ID sequencing, bilingual parity, docs matrix).
3. Ship the item completely: code + both locales + docs sync + `BACKLOG.md` work log entry with `(by <agent name>)`.
4. Check the item off here in the same session.
5. Run `npm run check-all` (and `npm run test` once armed — see M1-3) before finishing.

---

## Now — immediate priorities (2026-07-15 reassessment)

Reality check: by the calendar this is Month 3, but execution is still on the Month 1 🔴 items — `npm run test` reports 48 failures and `prompt-evals` still has no task file. Per this roadmap's own rule, Month 2/3 stay closed until the Month 1 🔴 items clear. Two items surfaced after the original plan was written and jump the queue.

### N-1 ✅ Fix touch-drag on `TaskCategorize` (done 2026-07-15, by Claude Code)
- `TaskCategorize` used native HTML5 drag (`draggable` + `onDragStart`), which does not fire on touchscreens, so categorize tasks were **unsolvable on mobile**. Added a tap-to-place interaction (tap an item → tap a category) that works on touch, mouse, and keyboard; native drag is preserved for desktop.

**Acceptance:** ✅ verified solvable end-to-end on a 375px touch viewport (headless Chromium, `hasTouch`); desktop drag untouched; `npm run check-all` clean.

### N-2 ✅ Land the responsive-shell PR (#1) (done 2026-07-16, by Claude Code)
- Merged PR #1 — it had grown to include the root `CLAUDE.md`, the `local-models-101` security-research chapter, the responsive mobile shell, the `taxonomy-matching` and `prompt-evals` rooms, all 47 data-defect fixes, and the armed test gate.

**Acceptance:** ✅ PR merged to `main` (merge commit `04da99b`); the designated branch fast-forwarded onto `main` for follow-up work.

### Recommended order from here
1. **N-1, N-2** — mobile is visibly broken and there is in-flight work to close.
2. **M1-1 → M1-2 → M1-3** — clear the 🔴 blockers and arm the test gate, so every later PR is protected automatically.
3. Then resume Month 1 🟡 (M1-4…M1-6) and the rest of the plan.

Rationale: first remove what is already broken and user-visible (mobile), then remove the blocker that makes further work unsafe (test gate), and only then grow content/features.

---

## Month 1 — Stabilization + media groundwork (2026-05-16 → 2026-06-15)

Goal: green test suite gating every change; task-level images available; first GROK content live.

### M1-1 ✅ Fix the 47 data defects (done 2026-07-15, by Claude Code)
- [x] Fix 22 `categorize` tasks: every `correctMapping` key must exactly equal some `items[i].en`, every value some `buckets[j].en` (full task list in `BACKLOG.md` → "Engineering follow-ups").
- [x] Fix 6 `scenario` tasks: at least one choice with `score >= passingScore`, all scores clamped to `[0, 100]` (0–10 scale rescaled ×10).
- [x] Write bilingual `explanation` for the tasks shipping `{ en: '', ru: '' }` (19 including `llama-3-1-8b#7` found post-triage).

**Acceptance:** `npm run test` reports 0 failures for these categories; each fixed task manually walked through once in each locale at `http://localhost:3000`.

### M1-2 ✅ Restore the `prompt-evals` room (done 2026-07-15, by Claude Code)
- [x] Create `src/data/rooms/tasks/prompt-evals.ts` with 8–10 tasks (≥3 task types), all answerable from the existing `src/components/theory/PromptEvalsTheory.tsx` (9 tasks, 7 types incl. sorting + mentor).
- [x] Register in `src/data/rooms/tasks/index.ts`.

**Acceptance:** room opens, all tasks completable in both locales, progress reaches 100%.

### M1-3 ✅ Arm the test gate (done 2026-07-15, by Claude Code)
- [x] Add `npm run test` back into `check-all` in `package.json` — lint + typecheck + 1700 tests, all green.

**Acceptance:** `npm run check-all` runs lint + typecheck + tests and passes clean.

### M1-4 ✅ Task-image infrastructure (done 2026-07-16, by Claude Code)
- [x] Add optional field to `LocalizedTask` (`src/data/rooms/types.ts`) and `Task` (`src/types/room.ts`):
  `image?: { src: string; alt: LocalizedString; caption?: LocalizedString }`.
- [x] Render it once via a shared `TaskIllustration` (exported from `TaskWrapper.tsx`) so all 8 task types inherit it — `TaskWrapper` covers input/mc/ms/sorting/categorize/timeline; `TaskMentor` and `TaskScenario` (own card markup) render the same component at the top of their cards. Design tokens only.
- [x] Store assets under `public/images/tasks/<room-id>/` (directory + `.gitkeep` created).
- [x] Extend `src/data/rooms/__tests__/data-integrity.test.ts`: every referenced `image.src` must exist under `public/`, `alt` (and `caption` when present) must have both locales.
- [x] Document the field in `AGENTS.md` → "Task data validation gate".

**Acceptance:** a task with an image renders correctly in both locales; a missing file fails `npm run test`.

### M1-5 🟡 Pilot screenshots in agent-coding rooms
- [ ] Add 1–2 screenshots each to tasks in `claude-code-agentic-loop`, `agentic-cli-tools`, `claude-code-pro-workflow` (candidates: plan-mode output, permission modes, tool-call tree, CLAUDE.md example).
- [ ] Screenshots are supplied or approved by the project creator — ask before shipping.

**Acceptance:** pilot tasks show images with bilingual alt/captions; tests green.

### M1-6 🟡 GROK task pack (5–6 tasks across existing rooms)
- [ ] `llm-landscape` — model-comparison task including Grok (tradeoffs, context, pricing).
- [ ] `research-grounding` or `deep-search-agents` — realtime X-feed grounding: where it helps, where it is an antipattern.
- [ ] `native-multimodality` — Grok Vision reading a chart screenshot (uses M1-4 infrastructure).
- [ ] `prompting-101` — system prompt that overrides the default persona style.
- [ ] `frontier-evals-logic` — interpreting Grok benchmark results (ARC/SimpleBench-style).

**Acceptance:** each task appended with correct sequential ID, answerable from (possibly extended) theory, both locales, tests green. Theory extensions must respect the Chapter Text Depth Gate.

---

## Month 2 — Complete the Agent Coding path + screenshot rollout (2026-06-16 → 2026-07-15)

Goal: Agent Coding path 12/12 rooms; screenshots across the path; first backend tests.

### M2-1 🔴 Five new rooms, one per week

Build in order, each per the "How to add a new room" procedure and full `AGENTS.md` completion checklist (metadata + 5-chapter bilingual theory + 10 tasks with ≥3 types + skill mappings + docs sync):

- [ ] AC-301 — Shipping Agentic Features with Guardrails
- [ ] AC-302 — Cost & Latency Control for Agents
- [ ] AC-303 — Team Protocols for Agent Coding
- [ ] AC-401 — Production Incidents in Agentic Systems
- [ ] AC-402 — Agent Coding Capstone (scenario-heavy synthesis of AC-101…AC-401)

**Acceptance per room:** all tasks completable in both locales; tests green; `BACKLOG.md`, `PROGRESS.md`, `CURRICULUM.md`, `AGENTS.md` room inventory updated in the same session; ask the creator which terms get `<Term>` tooltips before shipping theory.

### M2-2 🟡 Screenshot rollout
- [ ] Extend task screenshots to the remaining agent-coding rooms (`agent-coding-foundations`, `agentic-coding-tools`, `prompt-contracts`, `multi-agent-collaboration`, `agentic-testing-loop`, `agentic-ui-delivery`, `agentic-swarm-management`, `mcp-tool-ecosystems`).

**Acceptance:** each room has ≥1 task with a meaningful screenshot; no decorative filler images.

### M2-3 🟡 Backend pytest smoke tests
- [ ] Add `backend/tests/` with pytest + pytest-asyncio covering auth (signup/login/logout), progress (mark/read/reset), and labs endpoints.

**Acceptance:** `pytest` passes locally against docker-compose PostgreSQL; test command documented in `TESTING.md` and `DEVELOPER_GUIDE.md`.

---

## Month 3 — Product features (2026-07-16 → 2026-08-15)

Goal: close the two "coming soon" stubs and add the first retention loop.

### M3-1 🔴 Leaderboard
- [ ] Implement `backend/app/api/leaderboard/router.py`: `GET /leaderboard` returning top users by points (login, points, completed rooms; no emails).
- [ ] Replace the placeholder at `src/app/[lang]/leaderboard/` with a real table (auth-aware: highlight current user).
- [ ] Restore sidebar link.

**Acceptance:** endpoint returns ranked data; page renders in both locales; `DEPLOYMENT.md` updated if env/infra changes.

### M3-2 🟡 Spaced repetition / mistake notebook
- [ ] Persist failed task attempts (localStorage for guests, API for authed users — mirror the `useProgress` dual strategy).
- [ ] Daily review queue on the dashboard: resurface previously failed tasks; clear on correct answer.

**Acceptance:** failing a task adds it to the queue; solving removes it; state survives reload in both guest and authed modes.

### M3-3 🟡 Analytics instrumentation
- [ ] Instrument task drop-off, room/path completion funnels, and guest→auth conversion (lightweight event layer; storage choice to be proposed to the creator before implementation).

**Acceptance:** events fire for start/complete/fail; a minimal report (script or endpoint) can answer "where do users drop off?".

### M3-4 ⚪ Stretch (pick by remaining capacity, in this order)
- [ ] Compete weekly-challenge MVP (replaces `/compete` placeholder).
- [ ] EvalOps Basics room (`ROOMS_IDEAS.md` Room 203).
- [ ] Adaptive next-room recommendations on the dashboard.
- [ ] Agent-ops periodic scheduler (DEC-002 track — see `DEC-002-EXPLAINED.md`).

---

## Cross-cutting rules (restated from `AGENTS.md` — always in force)

1. **Bilingual parity:** every user-facing string ships in `en` and `ru` in the same session.
2. **Task validation gate:** verify each task is completable in both locales; per-type rules in `AGENTS.md`.
3. **Task ID sequencing:** sequential integers from 1, no gaps, no duplicates.
4. **Docs update matrix:** `README.md`, `PROGRESS.md`, `CURRICULUM.md`, `BACKLOG.md`, `DEPLOYMENT.md` (+ `.ru.md` mirrors) updated in the same session as the change.
5. **Work log:** every completed unit logged in `BACKLOG.md` → Completed with `(by <agent name>)`.
6. **Style gates:** anti-vibecode rules, no leading icons in headings, chapter depth ≥120 words / ≥2 paragraphs per language, forbidden phrasing patterns — see `AGENTS.md`.
7. **Frontend availability:** ensure `http://localhost:3000` is up for any coding task; reuse a healthy server, never start a second one.
