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
- [x] Centralize room metadata in one source (`src/data/rooms.ts`) for title, difficulty, tasks, and duration.
- [x] Create "Alignment: AI Alignment & RLHF" room page and tasks (6 tasks).
- [x] Implement `/${lang}/settings` page with language preference + per-room progress reset.
- [x] Refresh "LLM Landscape" room question set to a concise structured quiz (10 tasks).

## Completed (2026-03-16 session — by Gemini)
- [x] Enriched theory content for rooms: `ai-rag` (5 chapters), `ai-security` (5 chapters), `ai-agents` (8 chapters), `native-multimodality` (5 chapters) to meet AGENTS.md depth standards. (by Gemini)
- [x] Expanded task sets to 6 tasks each for `ai-rag`, `ai-security`, `ai-agents`, and `native-multimodality`, incorporating `categorize` and `scenario` task types. (by Gemini)
- [x] Fixed syntax errors and formatting in `src/data/rooms.ts` for multiple rooms. (by Gemini)
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
- [ ] Migrate Next.js locale `middleware` to `proxy` convention (build warning in Next.js 16).

## Future Content (Room Pipeline)
- [ ] **Room 203: EvalOps Basics** — Build eval sets, score prompts/models, regression checks.
- [ ] **Room 301: AI Product Systems** — Routing, fallback, cost controls, incident playbooks.
- [ ] **AI Ethics & Bias** (`ai-ethics-bias`) — Training data bias, fairness metrics, case studies, responsible deployment.
- [ ] **AI in Production: Cost & Deployment** (`ai-production`) — Token pricing, latency budgets, caching, model routing, monitoring.
- [ ] **Code Generation & AI-Assisted Dev** (`ai-code-generation`) — Copilot/Cursor/Claude Code patterns, code review, test generation.
- [x] **Embeddings & Vector Search** (`embeddings-101`) — Embeddings, semantic similarity, vector DBs, chunking strategies.

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
- [ ] Sync guest localStorage progress to server on signup.
- [ ] Room completion analytics / leaderboard.
- [ ] Reduce lint warnings across theory components and hooks.
