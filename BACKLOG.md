# AI-Learn Backlog

## Completed
- [x] Enriched theory content (1000+ words each) for rooms: ai-history, research-grounding, ai-research, prompting-101, ai-image-creation.
- [x] Create "Post-ChatGPT Era" room page and tasks (6 tasks).
- [x] Scaffold Next.js 16 project with TypeScript/Tailwind.
- [x] Implement TryHackMe-style Dashboard and Sidebar.
- [x] Create Room Layout (Content + Task Sidebar).
- [x] Build interactive `TaskQuestion` component (Input, MC, Multi-select).
- [x] Build interactive `TaskSorting` component (drag-to-reorder).
- [x] Implement Multi-language support (RU/EN) with Middleware.
- [x] Create "Room 101: LLM Landscape" with Geopolitics block (26 tasks).
- [x] Implement Learning Path overview and detail pages.
- [x] Create "Room 102: How LLMs Think" with tokens, prediction, context, temperature (4 tasks).
- [x] Create Rooms index page (`/[lang]/rooms`) with all rooms listing.
- [x] UI redesign: Linear/Notion aesthetic — muted palette, no neon/glow/emoji, increased whitespace.
- [x] Dashboard rework: compact room rows, "Continue learning" primary CTA.
- [x] Create "Room 103: Prompting 101" page and tasks (6 tasks).
- [x] Create "Room 201: Native Multimodality" page and tasks (6 tasks).
- [x] Create "AI History" room page and tasks (6 tasks).
- [x] Create "Prompt Evaluation & Evals" room page and tasks (6 tasks).
- [x] Create "AI for Image Creation" room page and tasks (6 tasks).
- [x] Persist task progress in localStorage (`useProgress` hook).
- [x] Show real progress on rooms list page (Completed / In Progress / Not Started badges).
- [x] Show real progress on dashboard (completed room count + progress bar).
- [x] Fix TaskSorting `disabled` prop type error for Framer Motion compatibility.
- [x] Deploy to Vercel.
- [x] Apply consistent green accent styling across all primary flows (Dashboard, Paths, Rooms, active sidebar route states).
- [x] Create path "Идеи и споры об ИИ / Ideas and Debates in AI" (`/${lang}/paths/ideas-history`).
- [x] Create "ChatGPT moment" room page and tasks (6 tasks).
- [x] Create "Сингулярность в AI-дебатах / Singularity in AI Debates" room page and tasks (6 tasks).
- [x] Create "Room 202: Research & Grounding" page and tasks (6 tasks).
- [x] Add "Success Modal" upon room completion with confetti and stats.
- [x] Centralize room metadata in one source (`src/data/rooms/`) for title, difficulty, tasks, and duration.
- [x] Create "Alignment: AI Alignment & RLHF" room page and tasks (6 tasks).
- [x] Implement `/${lang}/settings` page with language preference + per-room progress reset.
- [x] Refresh "LLM Landscape" room question set to a concise structured quiz (10 tasks).

## Completed (2026-03-28 session — by Codex)
- [x] Implemented guest progress sync on signup in `useAuth`: reads valid `localStorage` `progress:*` entries and replays tasks to `/api/progress/{roomId}` after successful account creation. (by Codex)
- [x] Synced docs and status tracking for this behavior in `README(.ru).md`, `PROGRESS(.ru).md`, and `BACKLOG(.ru).md`; marked the engineering backlog item as done. (by Codex)
- [x] Added glossary tooltip support for the term "Code Red" / "Красный код" in Post-ChatGPT Era Chapter 1 and synced EN/RU docs. (by Codex)
- [x] Added a dedicated cover image for `post-chatgpt-history` (`/images/post-chatgpt-era.webp`) and updated EN/RU docs and work logs. (by Codex)
- [x] Added a dedicated cover image for `ai-singularity` (`/images/ai-singularity.avif`) and updated EN/RU docs and work logs. (by Codex)
- [x] Moved Skills Matrix to profile page `/${lang}/settings`, switched sidebar entry to “Profile”, and added redirect from `/${lang}/skills` to `/${lang}/settings#skills-matrix`. (by Codex)
- [x] Reworked `/${lang}/rooms` from stacked list to responsive tile grid (3/2/1 columns), added equal-height image-first cards, hover lift/accent border behavior, and filter controls for difficulty/progress status. (by Codex)
- [x] Refined room card metadata on `/${lang}/rooms`: moved difficulty/status from image overlays into a compact minimalist row above each room title. (by Codex)
- [x] Fixed hydration mismatch on `/${lang}/rooms` by making initial progress status SSR-safe and syncing localStorage progress only after client mount. (by Codex)
- [x] Created a new grand-task epic for a multi-room `agent-coding` learning path and synced planning docs (`BACKLOG(.ru).md`, `CURRICULUM(.ru).md`). (by Codex)
- [x] Implemented AC-101 room `agent-coding-foundations` (5 theory chapters, 10 localized tasks), wired new path route `/${lang}/paths/agent-coding`, and added glossary terms `guardrails` + `context-window`. (by Codex)

## Completed (2026-03-24 session — by Codex)
- [x] Migrated Next.js locale request handler from `src/middleware.ts` to `src/proxy.ts` (`export function proxy`) to match Next.js 16 file conventions and remove the deprecation warning. (by Codex)
- [x] Synced docs for this platform-level change in `README(.ru).md`, `PROGRESS(.ru).md`, `CURRICULUM(.ru).md`, and `BACKLOG(.ru).md`. (by Codex)
- [x] Shipped frontend style pass (Notion-like): refined typography stacks, added `reading-prose` for long theory text, and introduced `content-shell` spacing rhythm in the app shell. (by Codex)
- [x] Softened base visual system tokens (`base/card/input/border`) and tuned Navbar/Sidebar density for calmer reading-focused UI. (by Codex)

## Completed (2026-03-18 session — by Gemini)
- [x] Created room: Guardrails: Safeguarding AI (`llm-guardrails`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).
- [x] Created room: AI Regulation in Russia 2026 (`ai-regulation-ru`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).
- [x] Created room: EU AI Act: The Global Standard (`ai-regulation-eu`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).

## Completed (2026-03-19 session — by Codex)
- [x] Refined `post-chatgpt-history` Chapter 1 to a less stylized presentation: replaced desktop two-column card layout with a single-column flow, removed decorative glow emphasis, and removed italicized closing paragraph style in EN/RU. (by Codex)
- [x] Synced docs for this content/UI adjustment in `README(.ru).md`, `PROGRESS(.ru).md`, and `CURRICULUM(.ru).md`. (by Codex)
- [x] Added `Anti-Vibecode Frontend Gate (Mandatory)` to `AGENTS.md` with 10 pass/fail rules, a vibecode-marker removal list, and a deterministic pre-ship checklist. (by Codex)
- [x] Synced policy update logs in `README(.ru).md`, `PROGRESS(.ru).md`, and `BACKLOG(.ru).md`. (by Codex)

## Completed (2026-03-17 session — by Codex)
- [x] Updated AI History theory Chapter 1 event cards from desktop two-column layout to single-column flow per UI request. (by Codex)
- [x] Synced docs for this UI behavior update in `README.md`, `README.ru.md`, `PROGRESS.md`, and `PROGRESS.ru.md`. (by Codex)
- [x] Removed italic styling from the AI History Chapter 1 reflective paragraph per UI request and synced docs updates. (by Codex)
- [x] Enriched ChatGPT Moment theory Chapter 3 and Chapter 4 "Code Red" section in both locales, then synced `README`, `PROGRESS`, and `CURRICULUM` mirrors. (by Codex)
- [x] Updated Singularity in AI Debates Chapter 2 comparison cards from two columns to a single-column flow and synced EN/RU docs. (by Codex)
- [x] Added AI History glossary tooltips for `Eliezer Yudkowsky`, `Ray Kurzweil`, `John von Neumann`, `I.J. Good`, and `Nick Bostrom`, plus synced EN/RU docs. (by Codex)
- [x] Removed centered text alignment from the AI History final summary block and synced EN/RU docs. (by Codex)
- [x] Expanded the LLM Landscape pre-model chapter intro ("2026 Market Snapshot + Source Links") with practical vendor-evaluation context and synced EN/RU docs. (by Codex)
- [x] Added an `SDK` tooltip in LLM Landscape evaluation criteria and added AGENTS rule forbidding the word `вендор` with neutral alternatives. Synced EN/RU docs. (by Codex)

## Completed (2026-03-17 session — by Claude Code)
- [x] Enriched `scaling-hypothesis` room: rewrote theory to 5 full chapters (The Core Idea, Three Pillars, Emergent Abilities, Chinchilla Laws, Critics & New Frontiers), fixed broken task id (10→5), expanded from 5 to 10 tasks adding categorize, scenario, sorting, timeline, multiple-select task types. (by Claude Code)
- [x] Enriched `ai-singularity` room: expanded theory from 2 slim sections to 5 full chapters (Event Horizon, Two Camps, Physical Limits, Key Voices, Practical Agenda), expanded from 6 to 10 tasks adding timeline, scenario, multiple-choice, multiple-select task types. (by Claude Code)
- [x] Rewrote `ai-history` theory (AiHistoryTheory.tsx) incorporating 10 insights from Melanie Mitchell's 2019 book: Dartmouth reality, Minsky vs Rosenblatt story, Simon/Minsky wrong predictions, Deep Blue + McCarthy quote, Hinton 1990 job advice, LeCun ImageNet quote, AlphaGo kami no itte, NVIDIA stock, adversarial examples warning, Hofstadter Google/EMI story. (by Claude Code)

## Completed (2026-03-16 session — by Gemini)
- [x] Enriched LLM Mechanics room (to 14 tasks) and AI Image Creation room (to 7 tasks) with new interactive components and deeper technical theory. (by Gemini)
- [x] Expanded AI History room with detailed Lighthill Report and GPU/NVIDIA context. Integrated Geoffrey Hinton's legacy and safety concerns into History and Singularity rooms. (by Gemini)
- [x] Enriched Scaling Hypothesis room (to 9 tasks) and AI Singularity room (to 10 tasks) with new interactive components. (by Gemini)
- [x] Enriched ChatGPT Moment room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched Prompting 101 room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched AI History room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched theory content for rooms: `ai-rag` (5 chapters), `ai-security` (5 chapters), `ai-agents` (8 chapters), `native-multimodality` (5 chapters) to meet AGENTS.md depth standards. (by Gemini)
- [x] Expanded task sets to 6 tasks each for `ai-rag`, `ai-security`, `ai-agents`, and `native-multimodality`, incorporating `categorize` and `scenario` task types. (by Gemini)
- [x] Fixed syntax errors and formatting in room data files for multiple rooms. (by Gemini)
- [x] Cleaned up unused imports in multiple theory components to reduce lint warnings. (by Gemini)

## Completed (2026-03-15 session — by Claude Code)
- [x] Built 3 new task components: `TaskCategorize`, `TaskTimeline`, `TaskScenario` (by Claude Code).
- [x] Built `Scenario Mission` task format with brief, constraints, scoring rubric, final decision report (by Claude Code).
- [x] Created room: Fine-Tuning & Adaptation (`fine-tuning-101`) — 12 tasks incl. categorize, scenario, mentor (by Claude Code).
- [x] Enriched fine-tuning-101 theory from detailed MD draft (9 chapters: LoRA math, pipelines, API, decision tree) (by Claude Code).
- [x] Created room: Embeddings & Vector Search (`embeddings-101`) — 10 tasks incl. timeline, categorize, sorting, scenario (by Claude Code).
- [x] Fixed smart quote / Unicode parsing issues across `AiSingularityTheory`, `PromptEvalsTheory`, `rooms.ts` (by Claude Code).
- [x] Removed orphaned duplicate task blocks in `rooms.ts` (after `ai-research` and `prompting-101`) (by Claude Code).
- [x] Synced all Russian mirror docs: PROGRESS.ru.md, CURRICULUM.ru.md, BACKLOG.ru.md, ROOMS_IDEAS.ru.md (by Claude Code).
- [x] Updated ROOMS_IDEAS.md from stale "9 rooms" to actual 19 rooms (by Claude Code).
- [x] Added mandatory agent rules to AGENTS.md: chapter text depth gate, chapter heading typography lock (by Claude Code).

## In Progress
- [ ] Add missing pages for sidebar routes: `/${lang}/compete`, `/${lang}/leaderboard`.

## Future Content (Room Pipeline)
- [ ] **Room 203: EvalOps Basics** — Build eval sets, score prompts/models, regression checks.
- [ ] **Room 301: AI Product Systems** — Routing, fallback, cost controls, incident playbooks.
- [ ] **AI Ethics & Bias** (`ai-ethics-bias`) — Training data bias, fairness metrics, case studies, responsible deployment.
- [ ] **AI in Production: Cost & Deployment** (`ai-production`) — Token pricing, latency budgets, caching, model routing, monitoring.
- [ ] **Code Generation & AI-Assisted Dev** (`ai-code-generation`) — Copilot/Cursor/Claude Code patterns, code review, test generation.
- [x] **Embeddings & Vector Search** (`embeddings-101`) — Embeddings, semantic similarity, vector DBs, chunking strategies.

## Grand Path Epic: Agent Coding
- [ ] **Grand Task: Agent Coding Path** (`agent-coding`) — launch a full end-to-end path with 12 rooms, practical labs, and capstone delivery.
- [x] **AC-101: Agent Coding Foundations** — problem framing, fast iteration loops, acceptance criteria.
- [ ] **AC-102: Prompt Contracts for Coding Agents** — translating product intent into prompt specs and failure boundaries.
- [ ] **AC-103: Multi-Agent Collaboration Patterns** — decomposition, context windows, branch-per-task discipline.
- [ ] **AC-201: Repo Navigation with Coding Agents** — semantic search, codebase mapping, safe refactor planning.
- [ ] **AC-202: Agentic Testing Loop** — test-first prompts, regression harnesses, flaky-test control.
- [ ] **AC-203: Agentic UI Delivery** — design-to-code workflows, responsive constraints, accessibility checks.
- [ ] **AC-301: Shipping Agentic Features with Guardrails** — policy checks, red-team prompts, deployment gates.
- [ ] **AC-302: Cost & Latency Control for Agents** — model routing, caching, budget limits, observability.
- [ ] **AC-303: Team Protocols for Agent Coding** — PR templates, review rubrics, handoff standards.
- [ ] **AC-401: Production Incidents in Agentic Systems** — rollback playbooks, prompt hotfixes, postmortem templates.
- [ ] **AC-402: Agent Coding Capstone** — ship a feature from brief to production-grade release with eval evidence.

## Future Product & Learning
- [ ] Create FAQ page (`/${lang}/faq`) with sections: platform basics, auth, progress/streak, troubleshooting, privacy.
- [ ] Add adaptive learning flow: repeat weak topics + personalized next-room recommendations.
- [ ] Add spaced repetition mode (daily short review from previously failed tasks).
- [ ] Add Prompt Playground lab (system prompt, temperature, output comparison).
- [ ] Add Mini RAG lab with user-provided documents.
- [ ] Add motivation loops: weekly challenges, badges, shareable completion certificates.
- [ ] Expand settings: profile management (login/email/password), privacy controls (export/delete data), session controls.
- [ ] Expand settings: notification preferences (daily reminders, weekly summary).
- [ ] Add AI learning preferences: explanation depth and hint mode.
- [ ] Instrument analytics: task drop-off, room/path completion funnels, guest-to-auth conversion.

## Roadmap Additions (March 2026)
- [x] Build `Scenario Mission` task format (brief, constraints, scoring rubric, final decision report).
- [x] Add first mission to `llm-landscape` room (model choice + cost/safety tradeoff).
- [ ] Build Prompt Lab MVP (`/${lang}/labs/prompt-compare`) with side-by-side outputs.
- [ ] Add cost/latency estimator panel to Prompt Lab compare view.
- [ ] Implement "Mistake Notebook": save failed tasks and generate adaptive retries.
- [ ] Add free-text answer task type with rubric-based AI mentor feedback.
- [ ] Add content freshness metadata to rooms (last updated + source links).
- [ ] Add community sharing MVP for mission solutions (publish/bookmark/moderation queue).

## Completed (Backend & Auth)
- [x] Backend persistence (FastAPI + PostgreSQL, user accounts + progress stored server-side).
- [x] User authentication (signup/login/logout, JWT in httpOnly cookies).
- [x] Points system (+10 per task) and streak tracking.
- [x] Frontend auth integration (AuthProvider, useAuth hook, login page).
- [x] Navbar/Sidebar show real user data (points, streak, username, level).
- [x] useProgress hook upgraded to API with localStorage fallback.
- [x] Docker Compose setup for PostgreSQL.
- [x] Alembic migrations for database schema.

## Future Engineering
- [x] Sync guest localStorage progress to server on signup.
- [ ] Room completion analytics / leaderboard.
- [ ] Reduce lint warnings across theory components and hooks.

## Completed (2026-03-22 session — by Claude Code)
- [x] Split monolithic `src/data/rooms.ts` (5,143 lines) into `src/data/rooms/` directory: `types.ts`, `paths.ts`, `metadata.ts`, and 22 per-room task files under `tasks/`. Barrel re-export preserves all existing imports. (by Claude Code)
- [x] Extracted design tokens into Tailwind v4 `@theme` block in `globals.css`: 9 color tokens for surfaces and borders. Replaced ~680 hardcoded hex values (`border-[#262626]`, `bg-[#1a1a1a]`, `bg-[#141414]`, etc.) across 40+ component files with semantic classes (`border-border-card`, `bg-card`, `bg-card-dark`, etc.). (by Claude Code)
- [x] Extracted `TaskWrapper` component from 4 task components (TaskQuestion, TaskSorting, TaskCategorize, TaskTimeline). Shared container, icon header, success/error feedback now defined once. (by Claude Code)
