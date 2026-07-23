# Agent Runtime Policy

## Frontend Auto-Start Rule (Mandatory)

For any coding task request, the agent must ensure the frontend is available at:

`http://localhost:3000`

Coding task requests include (non-exhaustive): implementation, bugfix, review, study, audit, and exploration.

## Default Behavior

1. Ensure frontend availability before or early in task execution.
2. Use `npm run dev` from repo root if startup is required.
3. Keep the frontend process running after startup/check (do not auto-stop).
4. Respect explicit user overrides (for example: "don't start server", "backend only", custom port).
5. Never start a second `next dev` process if `http://localhost:3000` is healthy; always reuse the existing frontend server.

## Deterministic Startup/Check Sequence

1. Probe `http://localhost:3000`.
2. If reachable, reuse existing server and continue.
3. If unreachable, start `npm run dev` from repo root.
4. Re-check `http://localhost:3000`.
5. If sandbox restrictions block bind/network, request escalation automatically.

## Response Requirements

For coding tasks, the agent response must:

1. Explicitly state whether the frontend was already running or started by the agent.
2. Include the URL `http://localhost:3000` in status updates.
3. If startup fails, report:
   - exact failure reason
   - immediate next action (for example escalation request or user override path)

## Scope and Assumptions

1. No application API/schema/type changes are required by this policy.
2. Default frontend entrypoint is `npm run dev`.
3. Default frontend port is `3000`.
4. Backend startup is not required unless explicitly requested.

## Localization Gate (Mandatory)

For any change that modifies user-facing text, the agent must update both language variants in the same task:

1. English (`en`)
2. Russian (`ru`)

Do not ship user-facing text changes in only one locale unless the user explicitly requests a single-language change.

## Docs Sync Trigger (Mandatory)

When behavior or setup changes, update both docs in the same task:

1. `../README.md`
2. `PROGRESS.md`

This includes (non-exhaustive):

1. Changes to routes/endpoints/user-visible behavior.
2. Changes to startup/run/setup commands, ports, or environment requirements.
3. Changes to availability/limitations status that affect current project state.

## Project Orientation for Agents

### What this repository is

This project is a bilingual AI learning platform:

1. Frontend: Next.js App Router (`src/app/[lang]`) with RU/EN locale routing.
2. Backend: FastAPI (`backend/app`) with PostgreSQL persistence.
3. Learning model: rooms + tasks + theory + progress + points/streak.

### Current route shape (important)

Implemented top-level frontend sections:

1. `/${lang}` (dashboard)
2. `/${lang}/rooms`
3. `/${lang}/rooms/[id]` (primary dynamic room page)
4. `/${lang}/paths` and path detail pages
5. `/${lang}/professions`
6. `/${lang}/login`
7. `/${lang}/skills`
8. `/${lang}/settings`

Known absent routes (do not assume they exist):

1. `/${lang}/compete`
2. `/${lang}/leaderboard`

### Room inventory (42 rooms in `ROOMS_METADATA`)

Rooms with theory + tasks fully wired (42): **all** current `ROOMS_METADATA` entries are wired in the dynamic room route — `local-rag-docs` landed 2026-07-23. The inventory includes `ai-career-trajectories`, `prompt-contracts`, `mcp-tool-ecosystems`, `agentic-swarm-management`, `frontier-evals-logic`, `claude-code-agentic-loop`, `claude-code-pro-workflow`, `context-engineering-101`, `taxonomy-matching`, and the Open Models trio `local-models-101` + `llama-3-1-8b` + `local-rag-docs`.

Theory components are mapped in the lazy registry `src/components/theory/index.ts` (`THEORY_COMPONENTS`, 42 entries, `next/dynamic` — each room ships only its own theory chunk; SSR preserved). A room missing from the registry fails `check-all` via `src/components/theory/__tests__/registry.test.ts` — placeholders no longer slip through silently.

### Source of truth files (use these first)

When changing learning content or room behavior, prefer these files:

1. `src/data/rooms/` (barrel: `src/data/rooms/index.ts`)
   - `types.ts` — shared interfaces (`LocalizedString`, `LocalizedTask`, `LocalizedRoomMetadata`)
   - `metadata.ts` — canonical room metadata (`ROOMS_METADATA`)
   - `paths.ts` — learning path metadata (`PATHS_METADATA`)
   - `tasks/<room-id>.ts` — per-room task arrays, assembled in `tasks/index.ts` as `ROOM_TASKS`
2. `src/app/[lang]/rooms/[id]/page.tsx`
   - Dynamic room renderer (theory mapping lives in `src/components/theory/index.ts`; task locale resolution in `src/data/rooms/resolveTask.ts`)
3. `src/components/theory/*`
   - Theory text by room/topic
4. `src/hooks/useProgress.ts`
   - Progress persistence strategy (API + localStorage fallback)
5. `src/hooks/useAuth.tsx`
   - Auth context and `/api` auth calls
6. `backend/app/api/*`
   - Backend API contracts for auth/progress/users
7. `src/types/room.ts`
   - `TaskType` union: `'input' | 'multiple-choice' | 'multiple-select' | 'sorting' | 'mentor' | 'categorize' | 'timeline' | 'scenario'`

### Design tokens (Mandatory)

Surface and border colors are defined as Tailwind v4 theme tokens in `src/app/[lang]/globals.css` under `@theme`. When writing or editing component styles:

- Use `bg-card`, `bg-card-dark`, `bg-base`, `bg-deep`, `bg-input`, `bg-muted` for backgrounds.
- Use `border-border-card`, `border-border-subtle`, `border-border-emphasis` for borders.
- **Never** introduce new arbitrary hex background or border values (e.g. `bg-[#1a1a1a]`, `border-[#262626]`). Use the existing tokens or propose a new token in `globals.css`.

**Address color by role, not by palette name (Mandatory).** The point is that a design change must never cost a repo-wide sweep. Evidence from this repo: swapping the terminal look took minutes (11 `--color-term-*` tokens), while recoloring theory headings cost 250 replacements across 34 files — because the accent was hardcoded as `emerald-*` everywhere.

| Role | Use | Never |
|---|---|---|
| Brand / interactive accent | `text-accent-500`, `bg-accent-500/10`, `border-accent-500/20` | `emerald-*` |
| Theory chapter headings | `text-heading` | `text-accent-*` (Fork 3 — the accent means *interactive*) |
| Terminal | `bg-term-bg`, `text-term-prompt`, … | literal hex |
| Error / failure states | `text-danger-500`, `bg-danger-500/10` | `red-*` |
| Warnings / cautions | `text-warning-400`, `border-warning-500/30` | `amber-*` |
| Informational / neutral-highlight | `text-info-400`, `bg-info-500/10` | `blue-*` |
| Positive / success states | `text-success-400` | `green-*` |

The accent ramp (`--color-accent-100…950`) mirrors the shade scale, so alpha modifiers work normally (`bg-accent-500/10`). **Swapping the whole site accent = editing the ramp in `@theme` plus its `[data-theme="saas"]` override — 7 lines, no component edits.**

This is enforced by `src/__tests__/design-tokens.test.ts` (part of `check-all`): it fails on any literal `emerald-*` in components and on any theory heading painted with the accent, naming the offending files. Status palettes migrated on 2026-07-23 (red→danger, amber→warning, blue→info, green→success — values copied verbatim from Tailwind's default theme, so it was a visual no-op). Categorical content hues (`cyan`, `rose`, `purple`, `violet`, `pink`, `orange`, `slate`, `yellow`) are deliberately NOT status roles and stay literal; the guard tracks them informationally.

**Known boundary:** raster assets (`public/images/**`) are not tokenized. A room cover PNG keeps its baked-in colors through an accent swap; re-export or prefer SVG when a visual must follow the accent.

### Terminal component — a core design element (use it)

`src/components/Terminal.tsx` is a first-class part of the visual language, not a one-off. It renders a terminal window styled after **GNOME Terminal on Ubuntu**: the signature aubergine background (`#300A24`), the **Tango** ANSI palette, and **Ubuntu Mono** (loaded via `next/font` in `layout.tsx`, exposed as the `--font-term` token → `font-term` utility). The emerald-vs-aubergine tension is being resolved on the *heading* side, not the terminal side (fork history in `DESIGN_FORKS.md`, Forks 1 & 3). It stays intentionally dark in **both** themes — its `--color-term-*` tokens in `@theme` are deliberately **not** overridden in the `[data-theme="saas"]` block, so a terminal looks like a terminal on light UI too. Reach for it whenever a chapter shows a real command or interactive session — it is the preferred way to render such content, and terminals should recur across the platform rather than appear in one or two rooms.

- **Import + use** (lang-agnostic — resolve bilingual strings at the call site):
  ```tsx
  import Terminal from '@/components/Terminal';
  <Terminal title="ollama · zsh" lines={[
    { cmd: 'ollama pull llama3.1:8b', comment: lang === 'ru' ? '# скачать' : '# download' },
    { out: 'pulling manifest ... success' },
    { out: '✓ ready', tone: 'ok' },
  ]} />
  ```
  Output tones map to the Tango palette: `'dim'` (default) · `'ok'` green · `'bad'` red · `'dir'` blue · `'link'` cyan · `'warn'` yellow — the same colors Ubuntu's `LS_COLORS` uses, so `ls`-style output can be rendered faithfully.
  Line kinds: `{ cmd, comment?, prompt? }` (a prompt line, default prompt `$`) and `{ out, tone? }` (an output line).
- **Use it for:** CLI command sequences, agent/tool-call sessions (`● tool ▸ …`), REPL interactions, install→run→verify flows, red→green test loops, API-call sessions.
- **Do NOT use it for:** static JSON/YAML/schema/config display or math notation — those stay as plain code blocks (`bg-deep` + `<pre>`). The terminal means *a session* (command → output); misusing it as a decorative frame for static data cheapens the element.
- **Solvability:** never let a terminal hand a learner a task's answer (e.g. don't show the exact ordering a `sorting` task asks them to produce). Terminals illustrate; they don't spoil.
- Prefer this component over hand-rolling terminal markup, and over converting a real command block to a bespoke `<pre>`. If it exists, reuse it.
- **The terminal's visual style is an open fork, not a settled choice** — the project is still searching for its optimal design. The Ubuntu look above is *what is wired up today*. Alternatives (neutral black-gray, Tango-on-black, Solarized, Dracula) are kept paste-ready in [`DESIGN_FORKS.md`](DESIGN_FORKS.md). The whole look is token-driven, so switching is a one-block swap in `globals.css` — never a component or per-room edit. If you change the pick, update `DESIGN_FORKS.md` in the same task and do not delete the losing option.

### Design forks — do not silently collapse them (Mandatory)

Several design decisions are deliberately **open**: terminal styling, site and terminal typefaces, and the accent green. They are recorded in [`DESIGN_FORKS.md`](DESIGN_FORKS.md) (+ `.ru`) with paste-ready values for every option. Before "fixing" a design inconsistency in these areas, check that file — the inconsistency may be a live fork rather than a defect. When you move a fork, record the move (new pick, demoted option, date, one line of rationale) in the same commit.

### Product screenshots — a core design element (use them)

The GUI counterpart of the Terminal rule (reference pattern: TryHackMe's task pages, e.g. an annotated VirusTotal screenshot framed between two paragraphs of explanation). When a chapter discusses a product with a graphical interface — a web console, dashboard, chat UI, settings screen — show a **real screenshot** of that product instead of describing the UI in prose. CLI/session content → `<Terminal>`; GUI content → screenshot.

- **The sandwich structure (mandatory):** a screenshot never floats alone. Text above introduces what the tool is and what the reader is about to see; the screenshot shows it; text below tells the reader how to interpret what's shown and its caveats. A screenshot with no interpretive text after it is decoration, not teaching.
- **Authenticity:** only genuine captures of the real product. No mocked-up UI, no AI-generated fake interfaces, no doctored numbers — a learner must be able to open the product and see the same thing. Crop to the relevant region; blur or avoid personal data (emails, tokens, account names).
- **Framing:** wrap in a rounded container with a visible accent border so the screenshot reads as a deliberate exhibit, not a pasted image: `rounded-xl border-2 border-cyan-400/60 overflow-hidden` (reuse an accent already present in the chapter; border tokens stay for surfaces, the accent border marks "this is an exhibit"). Render via `next/image` with explicit `width`/`height`.
- **Dark captures preferred:** when the product has a dark theme, capture in dark — it sits naturally on both platform themes, same logic as the Terminal staying dark on light UI.
- **Assets:** `public/images/rooms/<room-id>/` for theory screenshots (task illustrations keep their existing `public/images/tasks/<room-id>/` convention). Prefer `.webp`/`.png`, keep files reasonably sized; name descriptively (`virustotal-detection-tab.webp`, not `screen1.png`).
- **Localization:** `alt` is mandatory and bilingual (resolve `ru`/`en` at the call site, like Terminal strings); an optional caption must also be bilingual. The screenshot itself may show an English UI — that's authentic — but everything the platform renders around it ships in both locales.
- **Solvability:** same guard as terminals — a screenshot must never hand a learner a task's answer (don't show the filled-in value an `input` task asks for). Screenshots illustrate; they don't spoil.

### Available task components

Six components render tasks inside rooms (dispatched by `TaskType`):

1. `TaskQuestion` — handles `input`, `multiple-choice`, `multiple-select`.
2. `TaskSorting` — handles `sorting` (drag-to-reorder with Framer Motion).
3. `TaskMentor` — handles `mentor` (dialogue-based interaction).
4. `TaskCategorize` — handles `categorize` (drag items into labeled buckets).
5. `TaskTimeline` — handles `timeline` (arrange events in chronological order).
6. `TaskScenario` — handles `scenario` (multi-step decision mission with scoring).

### Runtime and startup conventions

1. Frontend default URL: `http://localhost:3000`
2. Backend default URL: `http://localhost:8000`
3. Frontend -> backend API proxy: `/api/*` via `next.config.ts`
4. Frontend dev command: `npm run dev`
5. Frontend quality checks: `npm run check-all`

### Agent workflow expectations

For coding tasks, agents should:

1. Read `../README.md` and this file before substantial edits.
2. Prefer updating canonical sources over duplicating data in pages.
3. Preserve bilingual behavior and update both `en` and `ru` where required.
4. Run relevant checks after edits (`npm run check-all` at minimum for frontend changes).
5. Report what was changed, what was verified, and any unresolved warnings/limitations.

### Commit hygiene — work must be committed to survive (Mandatory)

**The working tree is not durable.** Sessions re-sync to the latest merged `main`, and uncommitted edits to tracked files are silently wiped when the tree moves to a newly merged branch. Real work on this repo happens through committed branches merged as PRs (`git log` shows the merge history). Therefore:

1. **Do not end a session with substantial uncommitted edits to tracked files.** They will be lost on the next branch sync. (This has bitten real work more than once — e.g. the light-theme toggle repeatedly vanished until it was committed.)
2. **Work on a dedicated branch** (`git checkout -b <topic>`), not on a detached/uncommitted `main` working tree.
3. When a logical unit is complete: run `npm run check-all`, then **commit** the specific files (`git add <paths>` — not `git add -A`, to avoid sweeping in unrelated untracked artifacts), and **push the branch** (`git push -u origin <branch>`) so it is durable on the remote and can become a PR.
4. New untracked files that belong to the change (new components, hooks, task files) must be explicitly `git add`-ed — they are not part of any commit until you add them, and they will not survive on their own.
5. Committing/pushing on the user's behalf follows the normal outward-action rule: confirm the push with the user unless already authorized in this session.

### Task mix and interactivity rule (Mandatory)

To ensure high interactivity and engagement, every room must follow the "Task Mix Rule":

1. Every room must include at least one "sorting" (drag-to-reorder) or "mentor" (dialogue-based) task.
2. Relying exclusively on multiple-choice or input tasks is forbidden.
3. Aim for a diverse mix of task types within each room to maintain learner momentum.

### Task data validation gate (Mandatory)

After adding or editing tasks in `ROOM_TASKS`, the agent must verify every task is completable in both locales before shipping. Validation rules per `TaskType`:

1. **`input`** — `correctAnswer` (string or string[]) must be non-empty. Answers are normalized (lowercased, trimmed, quotes/punctuation stripped), so `correctAnswer` values should be lowercase with no trailing punctuation. If an array, at least one item is required.
2. **`multiple-choice`** — `correctAnswer` must be an exact string match to one of the `options` entries (case-sensitive, no normalization). Verify the correct option text is identical in both fields.
3. **`multiple-select`** — every string in `correctAnswer[]` must appear in `options[]` (case-sensitive). Order does not matter (sorted internally), but set membership does.
4. **`sorting`** — `correctOrder[]` must contain exactly the same strings as `initialItems[]`, just in the right order. No extra or missing items.
5. **`mentor`** — at least one object in `userOptions` must have `isCorrect: true`, otherwise the task is unsolvable. Every option must have a non-empty `reaction` string.
6. **`categorize`** — every key in `correctMapping` must appear in `items[]`, and every value must appear in `buckets[]`. No orphaned keys or unknown bucket names.
7. **`timeline`** — every label in `correctOrder[]` must match an `events[].label` exactly (case-sensitive). Every event must have a non-empty `year` string.
8. **`scenario`** — at least one choice must have `score >= passingScore` (default 60). Every choice must have a numeric `score` (0–100) and a non-empty `outcome` string.

Cross-cutting checks:

- All user-visible text fields (`question`, `options`, `items`, `buckets`, `mentorMessage`, `brief`, `constraints`, choice `text`, event `label`) must be `LocalizedString` with both `en` and `ru` populated.
- **Task images (optional `image` field)** — any task may declare `image: { src, alt, caption? }` (rendered above the question for all 8 task types). Rules: `src` must start with `/` and point to an existing file under `public/` (convention: `public/images/tasks/<room-id>/`); `alt` is a required `LocalizedString` with both locales; `caption`, when present, must also be bilingual. The Vitest suite enforces file existence and locale parity — a missing file fails `npm run test`.
- After adding tasks, mentally walk through each one: "can a user who reads the theory select the correct answer?" If the answer depends on text not in the theory, the task or theory needs updating.
- No runtime validation exists in the components — bad data silently produces unsolvable tasks, so this gate is the only safety net.

### Task ID sequencing (Mandatory)

Within each room's task array in `ROOM_TASKS`, task IDs must be sequential integers starting at 1 with no gaps or duplicates.

1. First task in a room: `id: 1`. Second: `id: 2`. And so on.
2. No gaps (e.g. 1, 2, 4 — missing 3).
3. No duplicates (e.g. two tasks with `id: 2`).
4. When appending tasks to an existing room, continue from the current highest ID + 1.
5. When removing a task mid-array, renumber all subsequent tasks to close the gap.

**Why:** The progress system stores completed task IDs as a `Set<number>` and compares `set.size` against `ROOM_TASKS[roomId].length` to compute completion percentage. Gaps inflate the denominator without a reachable numerator, so the progress bar can never reach 100%. Duplicates cause one task to silently shadow another — completing either one marks the same ID, leaving the other permanently stuck.

### Content and i18n consistency rules

When changing educational content:

1. Keep tasks solvable from theory content in both languages.
2. Keep terminology support intact (use glossary/`Term` where needed).
3. Ensure room titles/descriptions/tasks remain synchronized across UI surfaces.
4. When writing or editing theory content, the agent must ask the project creator which domain terms should be wrapped in `<Term>` tooltips before shipping the content.

### Chapter Text Depth Gate (Mandatory)

For any theory chapter block (for example, sections titled "Глава N / Chapter N"):

1. Chapter text must not be short-form placeholder content.
2. Minimum depth per language (`ru` and `en`) for each chapter:
   - at least `120` words of body text
   - at least `2` body paragraphs
3. If a chapter is intentionally concise by design (for example glossary-only or recap-only), it must be explicitly labeled in both languages as:
   - `Краткий блок`
   - `Short block`
4. Without this explicit label, chapter content below the threshold is considered incomplete and should not be shipped.

### Chapter heading typography lock (Mandatory)

For chapter headings in theory blocks (for example, "Глава N: ..." / "Chapter N: ..."):

1. Do not change font size by default.
2. Treat the current heading size as locked unless the user explicitly asks to change it.
3. If typography changes are requested, apply only the requested scope (single chapter or global), not broader.

### No leading icons in headings (Mandatory)

For room and theory headings (page titles, chapter headings, section headings):

1. Do not add decorative icons before heading text.
2. If a heading currently has a leading icon, remove it unless the user explicitly requests it.
3. Keep emphasis through typography, spacing, and color only (not icon prefixes).

### Anti-Vibecode Frontend Gate (Mandatory)

This gate applies to:

1. Frontend UI composition and visual presentation.
2. User-facing lesson copy (theory blocks, explanatory text, summaries, and comparison framing).

Pass/fail points:

1. **Layout clarity:** do not use a default desktop two-column split for long narrative theory blocks; use a single-column reading flow unless the user explicitly requests a split comparison.
2. **Text alignment:** body and summary text must be left-aligned by default; centered paragraphs are allowed only when explicitly requested.
3. **Typography emphasis:** do not use full-paragraph italic styling for core explanatory content.
4. **Visual restraint:** avoid decorative glow, neon, or attention-grabbing shadow accents on core reading cards by default.
5. **Heading discipline:** do not add decorative leading icons; follow `No leading icons in headings (Mandatory)`.
6. **Tone discipline:** avoid hype or dramatic wording; prefer analytical and concrete phrasing.
7. **Comparison cards:** for camp/model tradeoff blocks, default to stacked sequential cards instead of side-by-side split cards.
8. **Evidence framing:** frame claims as observations and tradeoffs, not as absolute dominance narratives.
9. **Localization parity:** any style/tone rewrite must be shipped in both locales (`en` and `ru`) in the same task.
10. **User override:** explicit user instruction can override any point above, limited to the requested scope.

Vibecode markers to remove:

1. Desktop two-column narrative cards for long explanatory text.
2. Paragraph-level italics used only for dramatic emphasis.
3. Decorative glow emphasis on core text containers.
4. Overly dramatic copy templates.

Pre-ship checklist (yes/no):

1. Is long-form narrative content presented in a single-column flow by default?
2. Are body and summary paragraphs left-aligned unless the user requested centering?
3. Are core explanatory paragraphs free of full-paragraph italics?
4. Are decorative glow/neon/shadow accents removed from core reading cards?
5. Is wording analytical and tradeoff-oriented instead of dramatic?
6. Were style/tone changes applied in both `en` and `ru`?

### Forbidden phrase pattern: "это не просто" (Mandatory)

For any generated content and agent communication in this repository (theory text, docs, room content, summaries, PR notes, and user replies):

1. Do not use the construction `это не просто` (any case form).
2. Treat the regex-like pattern `/(^|\\s)это\\s+не\\s+просто(\\s|$)/i` as forbidden in authored text.
3. Rewrite with direct, concrete wording instead of contrastive template phrasing.

### Forbidden word pattern: "вендор" (Mandatory)

For any generated content and agent communication in this repository (theory text, docs, room content, summaries, PR notes, and user replies):

1. Do not use the word `вендор` in any case form.
2. Treat the regex-like pattern `/(^|\\s)вендор(а|у|ом|е|ы|ов|ам|ами|ах)?(\\s|$)/i` as forbidden in authored text.
3. Use concrete alternatives by context, for example: `поставщик модели`, `игрок рынка`, `платформа`, `компания`.

### Completion checklist (Mandatory)

When a new room, feature, or backlog item is finished, the agent must in the same task:

1. Mark the item as `[x]` in `BACKLOG.md`.
2. Add a milestone row (date + description) to `PROGRESS.md`.
3. Update room counts/lists in `PROGRESS.md` and `AGENTS.md` (Room inventory section) if a room was added or wired up.
4. Update `CURRICULUM.md` if the change affects path/module/room coverage.
5. Update `../README.md` if the change affects routes, architecture, or user-visible behavior.

### Agent work log (Mandatory)

When an agent completes work in a session, it must explicitly log what it did in `BACKLOG.md` (and `BACKLOG.ru.md` if maintained):

1. Add completed items to the `## Completed` section with `[x]` checkboxes.
2. Each entry must include a brief credit tag: `(by <agent name>)` — e.g. `(by Claude Code)`, `(by Gemini)`.
3. Group related work into logical entries (e.g. one entry per room, one per feature), not one entry per file touched.
4. Do this at the end of the session or when a logical unit of work is finished — do not defer to a future session.

### Documentation update matrix

When behavior/setup/content changes, update docs in the same task:

1. `../README.md`: setup, architecture, route/status overview.
2. `PROGRESS.md`: implementation status and milestones.
3. `CURRICULUM.md`: path/module/room coverage changes.
4. `BACKLOG.md`: newly identified follow-up engineering/content work.
5. `DEPLOYMENT.md`: any deployment-related change (see rule below).

If Russian mirrors exist and are maintained (`*.ru.md`), update them in the same task unless explicitly scoped out by the user.

### Deployment Docs Sync Rule (Mandatory)

When any of the following are changed, update `DEPLOYMENT.md` in the same task:

1. `backend/Dockerfile` — startup command, base image, build steps, user setup.
2. `next.config.ts` — rewrite rules, env var references affecting the API proxy.
3. `backend/settings.py` — new or renamed env vars consumed by the app.
4. `backend/.env.sample` — env var additions, removals, or default changes.
5. `docker-compose.yml` — service definitions, port mappings, volume changes.
6. `alembic/` — new migrations that add deploy-time database requirements.
7. Any new service, port, or third-party integration added to the stack.

What to update in `DEPLOYMENT.md`:

- Add a **"What Was Changed"** entry explaining the before/after and why.
- Update the **Environment Variables Reference** table if vars were added/renamed/removed.
- Update startup commands or steps if the deploy sequence changed.
- Keep the Architecture / Request Flow section accurate if the topology changed.

Do not defer `DEPLOYMENT.md` updates to a follow-up task.
