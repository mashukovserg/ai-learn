# AI-Learn Platform

AI learning platform with interactive theory + tasks, built with Next.js App Router + FastAPI backend. Combines a TryHackMe-style room/task structure (progressive rooms, hands-on challenges) with Duolingo-style gamification (points, streaks, progress bars, skill radar, bite-sized lessons with instant feedback).

**Live demo:** [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app)

## What is implemented
- RU/EN locale routing via `proxy.ts` (`/ru` default redirect for non-localized paths).
- Dashboard (`/[lang]`) with recommended rooms, real progress bar from localStorage.
- Learning paths pages:
  - `/${lang}/paths`
  - `/${lang}/paths/beginner`
  - `/${lang}/paths/ideas-history` (Ideas and Debates in AI)
  - `/${lang}/paths/agentic-systems`
  - `/${lang}/paths/agent-coding` (Agent Coding)
- AI professions catalog page:
  - `/${lang}/professions`
- Consistent green accent styling across primary product flows:
  - active sidebar route states
  - dashboard CTAs
  - paths cards and actions
  - active elements in path detail flow
- Notion-style visual polish pass for readability and rhythm:
  - upgraded typography system (clean sans UI stack + serif reading mode for long theory content)
  - softer surface palette with warmer neutrals and lower-contrast borders
  - unified app spacing container (`content-shell`) and calmer top/nav chrome density
- AI History theory chapter event cards now use a single-column layout (no desktop two-column split) for a consistent reading flow.
- AI History theory chapter reflective paragraph now uses regular text style (italic emphasis removed).
- AI History room now includes glossary tooltips for key figures (`Eliezer Yudkowsky`, `Ray Kurzweil`, `John von Neumann`, `I.J. Good`, `Nick Bostrom`) in theory text.
- AI History final summary block is left-aligned (centered text removed for readability).
- LLM Landscape chapter "2026 Market Snapshot + Source Links" now has an expanded pre-model introduction with practical vendor-evaluation guidance.
- LLM Landscape chapter now includes an `SDK` tooltip in the pre-model evaluation criteria paragraph.
- AGENTS authoring policy now forbids the word `вендор` and requires neutral alternatives by context.
- AGENTS now includes an `Anti-Vibecode Frontend Gate (Mandatory)` with a deterministic pass/fail checklist for layout, alignment, emphasis, tone, and `en`/`ru` parity.
- ChatGPT Moment theory Chapter 3 and Chapter 4 "Code Red" section were enriched with deeper interface-adoption and market-structure explanations (EN/RU).
- Singularity in AI Debates Chapter 2 camp comparison cards now use a single-column layout (no desktop two-column split).
- Post-ChatGPT Era Chapter 1 was rewritten in a more analytical tone with a single-column comparison flow; decorative glow emphasis and italicized conclusion styling were removed.
- Post-ChatGPT Era Chapter 1 now includes a glossary tooltip for the term "Code Red" / "Красный код".
- Post-ChatGPT Era room now uses a dedicated cover image (`/images/post-chatgpt-era.webp`) on room cards and room header.
- Singularity in AI Debates room now uses a dedicated cover image (`/images/ai-singularity.avif`) on room cards and room header.
- Implemented AC-101 room `agent-coding-foundations` with full theory + 10 localized tasks and added Agent Coding path wiring (`/${lang}/paths/agent-coding`).
- Implemented AC-102 room `agentic-coding-tools` with full theory + 10 localized tasks and wired it into the Agent Coding path (`/${lang}/paths/agent-coding`).
- Implemented AC-201 room `agentic-cli-tools` with full theory + 10 localized tasks focused on CLI discovery/change/verify loops and safe rollback routines.
- Refined AC-201 theory presentation for learning flow: reduced paragraph density, added a clear loop model, concrete CLI command examples per phase, verify tooling matrix, role split (agent vs engineer), and a practical checklist/exercise in EN/RU.
- Added glossary terms for `guardrails` and `context-window` for AC-101 theory tooltips in EN/RU.
- Added a new Labs tool: `/${lang}/labs/agent-ops` (Agent Ops MVP) with task queue management, manual cycle execution, run logs, and a knowledge feed.
- Rooms catalog (`/${lang}/rooms`) now uses a responsive tile grid layout (3 columns from `1200px`, 2 from `768px`, 1 on mobile) with equal-height cards, professions-style illustrated covers (gradient + room icon + real progress badge), filter controls for difficulty/focus/progress status (focus supports thematic presets like `Agent Coding` and `AI Philosophy` plus all room categories), and a compact meta row for difficulty + status above each title.
- The rooms catalog cover area was tightened further: smaller visual headers, smaller room-symbol blocks, and denser top spacing for more content-first cards.
- The rooms catalog density was increased on large screens: a wider container, more columns at high viewport widths, and slightly tighter card spacing so more rooms fit on screen.
- The rooms catalog now places difficulty/focus/status controls in a dedicated side filter rail on desktop, keeping the room grid visible higher on the page while preserving a stacked mobile filter layout.
- Fixed `/${lang}/rooms` hydration mismatch by deferring localStorage-based progress status reads to post-mount client sync.
- Moved Skills Matrix to the Profile page (`/${lang}/settings`) and wired `/${lang}/skills` to redirect to `/${lang}/settings#skills-matrix` for backward compatibility.
- Rooms pages (39 rooms):
  - `/${lang}/rooms` (listing page with live progress states, thematic focus filter, and compact difficulty/status metadata)
  - `/${lang}/rooms/[id]` — Dynamic room renderer for 38 topics across foundations, debates, advanced systems, agent coding, and open models, including the Open Models pair (`local-models-101`, `llama-3-1-8b`) and the `ai-career-trajectories` room with a dedicated career-roadmap theory layout.
- Interactive task components:
  - `TaskQuestion` — input, multiple-choice, multiple-select
  - `TaskSorting` — drag-to-reorder with Framer Motion
  - `TaskCategorize` — bucket-based classification
  - `TaskTimeline` — chronological ordering
  - `TaskScenario` — decision-making missions with scoring
  - `TaskMentor` — dialogue-based learning
- Progress persistence via `useProgress` hook (API-backed when authenticated, localStorage fallback for guests, and automatic guest-progress sync to server on signup).
- Rooms list and dashboard show real progress (Completed / In Progress / Not Started).
- **Backend (FastAPI + PostgreSQL):**
  - User authentication (signup/login/logout) with JWT in httpOnly cookies.
  - Server-side progress persistence (completed task IDs per room).
  - User profile/stats: real points (+10 per task), streak tracking, level calculation.
  - Agent Ops API (`/agent/tasks`, `/agent/cycle/run`, `/agent/runs`, `/agent/knowledge`) with queue-based execution and deduplicated knowledge storage.
  - Login/signup page at `/${lang}/login`.
  - Docker Compose setup (PostgreSQL + app).

## Current architecture

### Frontend (Next.js)
- `src/app/[lang]/...` for localized routes.
- `src/components/AppShell.tsx` for shared shell layout (wraps everything in `AuthProvider`).
- `src/components/Sidebar.tsx` + `src/components/Navbar.tsx` for navigation (show real user data when authenticated).
- `src/data/glossary.ts` — central glossary entries used across theory rooms.
- `src/components/Term.tsx` — hover tooltip component that renders glossary definitions inline.
- `src/hooks/useProgress.ts` for progress persistence (API when logged in, localStorage fallback).
- `src/hooks/useAuth.tsx` for auth context (login/signup/logout, user profile from `/me`).
- `src/components/RoomStatusBadge.tsx` + `DashboardProgress.tsx` for live progress display.
- `src/dictionaries/{en,ru}.json` + `src/dictionaries/get-dictionary.ts` for localized UI strings.
- `next.config.ts` proxies `/api/*` requests to the backend at `http://localhost:8000`.

### Backend (FastAPI)
- `backend/app/main.py` — FastAPI app with CORS and routers.
- `backend/app/database.py` — Async SQLAlchemy engine + session.
- `backend/app/db/models/` — ORM models: `UserORM`, `AuthSessionORM`, `UserProgressORM`, `AgentTaskORM`, `AgentRunORM`, `AgentKnowledgeItemORM`.
- `backend/app/db/repositories/` — Repository pattern (collections + per-object repos).
- `backend/app/api/auth/` — Signup, login, logout with bcrypt + JWT cookies.
- `backend/app/api/progress/` — GET/POST progress per room, streak/points logic.
- `backend/app/api/users/` — GET `/me` for user profile + stats.
- `backend/app/api/agent/` — Agent Ops queue API (task CRUD-lite, cycle run, runs feed, knowledge feed).
- `backend/app/api/dependencies/` — `DBSessionDep`, `CurrentUserIDDep` (cookie → session → user_id).
- `backend/alembic/` — Async Alembic migrations for PostgreSQL.

## Tech stack

### Frontend
- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- Framer Motion `^12.34.0`
- Lucide React `^0.564.0`

### Backend
- Python `3.12`
- FastAPI `0.115`
- SQLAlchemy `2.0` (async)
- PostgreSQL `16` (via asyncpg)
- Alembic (migrations)
- bcrypt + python-jose (auth)
- `uv` (package manager)

## Known limitations
- Sidebar links `/${lang}/compete` and `/${lang}/leaderboard` are present in UI but routes are not implemented yet.
- Room metadata is duplicated across pages (dashboard/rooms/path each define their own room arrays).
- Agent Ops cycle scheduling is manual in this MVP (`POST /api/agent/cycle/run`); a periodic scheduler is not wired yet.

## Content rules
- **Style rule (Pragmatic Instructional Narrative):** use conceptual analogies (scaffolding), maintain a conversational tone to reduce "tech anxiety," provide contextual justification for why the topic matters, and keep a clear roadmap-oriented structure.
- **High Interactivity rule:** every room must include at least one "sorting" (drag-to-reorder) or "mentor" (dialogue-based) task to ensure high interactivity and deep engagement.
- **Localization rule:** all user-facing lesson content and tasks must be available in both English and Russian (no EN-only or RU-only blocks).
- **Task coverage rule:** every task must be solvable from the lesson content in both languages.
- **Explicit mapping rule:** if a task asks for classification (for example, "Select models that do NOT belong to US companies"), the lesson must explicitly provide that mapping in the theory text.
- **Terminology tooltip rule:** each room must include hover tooltips (or equivalent inline clarifications) for complex technical terms so beginners can understand content without leaving the page.

## Glossary system
- **Storage:** glossary terms are stored in `src/data/glossary.ts` as a typed map (`GLOSSARY`).
- **Runtime behavior:** `src/components/Term.tsx` reads a term by `id`, selects `ru/en` variant by current language, and shows the definition in a hover tooltip.
- **Usage pattern in theory:** place `<Term id="..." lang={lang}>...</Term>` directly in lesson text. If `children` are not provided, `Term` uses the default label from `GLOSSARY.term`.

## Development

### Frontend only (guest mode, localStorage progress)
```bash
npm install
npm run dev
```
Open `http://localhost:3000` (it redirects to `/ru`).

### Full stack (with backend auth + progress)
```bash
# Terminal 1: Start PostgreSQL
cd backend && docker compose up -d db

# Terminal 2: Run migrations + start backend
cd backend && uv sync && .venv/bin/alembic upgrade head && .venv/bin/python -m app.main

# Terminal 3: Start frontend
npm run dev
```
Backend runs at `:8000`, frontend proxies `/api/*` to it automatically.

### Tests
```bash
npm run test           # one-shot data-integrity + task-shape suite (Vitest)
npm run test:watch     # watch mode
npm run test:coverage  # v8 coverage report
```
The suite codifies the rules from `docs/AGENTS.md` → "Task data validation gate" and "Task ID sequencing" against `ROOMS_METADATA`, `PATHS_METADATA`, and `ROOM_TASKS`. The 47 pre-existing data defects surfaced by the initial run were fixed on 2026-07-15 (see `docs/TESTING.md` for history), and `npm run test` is now part of `check-all` — the suite gates every change.

## Project docs
All docs are available in English and Russian (`.ru.md`):
- `docs/PROGRESS.md` / `docs/PROGRESS.ru.md`: implementation status and milestones
- `docs/BACKLOG.md` / `docs/BACKLOG.ru.md`: active engineering backlog
- `docs/CURRICULUM.md` / `docs/CURRICULUM.ru.md`: learning-path curriculum status
- `docs/ROOMS_IDEAS.md` / `docs/ROOMS_IDEAS.ru.md`: content ideas and room/task design notes
- `docs/ROADMAP_VIEW_MODE.md` / `docs/ROADMAP_VIEW_MODE.ru.md`: reference for roadmap-style trajectory screens and progression layouts
- `docs/DEVELOPER_GUIDE.md` / `docs/DEVELOPER_GUIDE.ru.md`: codebase walkthrough for newcomers
- `docs/TESTING.md`: test strategy, coverage map, and triage list of known data issues
