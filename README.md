# AI-Learn Platform

AI learning platform with interactive theory + tasks, built with Next.js App Router + FastAPI backend. Combines a TryHackMe-style room/task structure (progressive rooms, hands-on challenges) with Duolingo-style gamification (points, streaks, progress bars, skill radar, bite-sized lessons with instant feedback).

**Live demo:** [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app)

## What is implemented
- RU/EN locale routing via middleware (`/ru` default redirect for non-localized paths).
- Dashboard (`/[lang]`) with recommended rooms, real progress bar from localStorage.
- Learning paths pages:
  - `/${lang}/paths`
  - `/${lang}/paths/beginner`
  - `/${lang}/paths/ideas-history` (Ideas and Debates in AI)
- Consistent green accent styling across primary product flows:
  - active sidebar route states
  - dashboard CTAs
  - paths cards and actions
  - active elements in path detail flow
- Rooms pages (19 rooms):
  - `/${lang}/rooms` (listing page with live status badges)
  - `/${lang}/rooms/[id]` — Dynamic room renderer for 19 topics:
    - `llm-landscape` (13 tasks), `llm-mechanics` (8 tasks), `prompting-101` (6 tasks)
    - `chatgpt-moment` (6 tasks), `ai-singularity` (6 tasks), `ai-history` (6 tasks)
    - `prompt-evals` (6 tasks), `ai-image-creation` (6 tasks), `research-grounding` (6 tasks)
    - `ai-agents` (6 tasks, Enriched), `ai-rag` (6 tasks, Enriched), `ai-security` (6 tasks, Enriched)
    - `ai-research` (5 tasks, Enriched), `ai-alignment` (6 tasks), `native-multimodality` (6 tasks)
    - `fine-tuning-101` (12 tasks), `post-chatgpt-history` (6 tasks), `embeddings-101` (10 tasks)
- Interactive task components:
  - `TaskQuestion` — input, multiple-choice, multiple-select
  - `TaskSorting` — drag-to-reorder with Framer Motion
  - `TaskCategorize` — bucket-based classification
  - `TaskTimeline` — chronological ordering
  - `TaskScenario` — decision-making missions with scoring
  - `TaskMentor` — dialogue-based learning
- Progress persistence via `useProgress` hook (API-backed when authenticated, localStorage fallback for guests).
- Rooms list and dashboard show real progress (Completed / In Progress / Not Started).
- **Backend (FastAPI + PostgreSQL):**
  - User authentication (signup/login/logout) with JWT in httpOnly cookies.
  - Server-side progress persistence (completed task IDs per room).
  - User profile/stats: real points (+10 per task), streak tracking, level calculation.
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
- `backend/app/db/models/` — ORM models: `UserORM`, `AuthSessionORM`, `UserProgressORM`.
- `backend/app/db/repositories/` — Repository pattern (collections + per-object repos).
- `backend/app/api/auth/` — Signup, login, logout with bcrypt + JWT cookies.
- `backend/app/api/progress/` — GET/POST progress per room, streak/points logic.
- `backend/app/api/users/` — GET `/me` for user profile + stats.
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
- Sidebar links `/${lang}/compete`, `/${lang}/leaderboard`, `/${lang}/settings` are present in UI but routes are not implemented yet.
- Room metadata is duplicated across pages (dashboard/rooms/path each define their own room arrays).
- Next.js currently shows a build warning that `middleware` convention is deprecated and should migrate to `proxy`.
- Guest users (not logged in) still use localStorage for progress; progress is not synced when they later sign up.

## Content rules
- **Style rule (Pragmatic Instructional Narrative):** use conceptual analogies (scaffolding), maintain a conversational tone to reduce "tech anxiety," provide contextual justification for why the topic matters, and keep a clear roadmap-oriented structure.
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

## Project docs
All docs are available in English and Russian (`.ru.md`):
- `PROGRESS.md` / `PROGRESS.ru.md`: implementation status and milestones
- `BACKLOG.md` / `BACKLOG.ru.md`: active engineering backlog
- `CURRICULUM.md` / `CURRICULUM.ru.md`: learning-path curriculum status
- `ROOMS_IDEAS.md` / `ROOMS_IDEAS.ru.md`: content ideas and room/task design notes
- `DEVELOPER_GUIDE.md` / `DEVELOPER_GUIDE.ru.md`: codebase walkthrough for newcomers
