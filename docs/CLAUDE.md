# CLAUDE.md — AI Learning Platform

TryHackMe-style interactive AI education platform with 40 rooms, 3 learning paths, and full bilingual (RU/EN) support. Guest mode works out of the box; authenticated users get persistent progress synced to PostgreSQL.

## Architecture

Two processes, always run both for full functionality:

| Process | Tech | Port |
|---------|------|------|
| Frontend | Next.js 16 + React 19 + TypeScript | 3000 |
| Backend | FastAPI + PostgreSQL (async SQLAlchemy) | 8000 |

Next.js proxies all `/api/*` requests to the backend (`next.config.ts`). When the backend is down, the frontend falls back to localStorage for progress tracking (guest mode).

### Why these choices

**Next.js App Router** — App Router's folder-based routing maps cleanly to URLs and makes the `[lang]` dynamic segment the natural mechanism for bilingual routing. All 40 rooms share a single `rooms/[id]/page.tsx` renderer instead of 40 files — room data is looked up at runtime from `src/data/rooms/`.

**`[lang]` locale segment instead of middleware i18n** — Embedding locale in the URL (`/ru/rooms/...`, `/en/rooms/...`) makes language visible, bookmarkable, and shareable. Russian is the default because the primary audience is Russian-speaking (redirect in `src/proxy.ts`). Every page gets `lang` from route params; never hard-code a locale.

**FastAPI + Python backend (not Next.js API routes)** — A separate backend was chosen because the Agent Ops feature calls OpenAI and runs multi-step async cycles, which doesn't fit Next.js serverless edge constraints. Python also gives access to the ML/AI ecosystem if needed. The frontend never exposes the backend URL — Next.js rewrites `/api/*` server-side, so the browser only ever talks to one origin. This also eliminates CORS issues.

**Async SQLAlchemy 2.0 + asyncpg** — Synchronous DB calls would block the event loop under concurrent requests (many users completing tasks simultaneously). All DB access is async throughout; never import or use synchronous SQLAlchemy sessions.

**JWT in httpOnly cookies (not localStorage)** — Tokens in localStorage are readable by any JavaScript on the page (XSS risk). httpOnly cookies are invisible to JS and sent automatically on same-origin requests. Trade-off: no third-party API clients without a refresh-token flow — acceptable for a single-origin web app.

**Guest mode + localStorage fallback** — Learners start immediately without an account, reducing drop-off. The `useProgress()` hook transparently switches to the API on login and migrates localStorage progress to the server at signup. Guests cannot appear on the leaderboard, so local-only progress doesn't undermine integrity.

**Centralized room data (`src/data/rooms/`)** — Keeping metadata, tasks, paths, and types in one place means the dashboard, room list, path pages, and room renderer all read from the same source. There is no duplication. An earlier approach scattered room info across page files and caused drift.

**Closed task type set** — Six explicit types (`question`, `sorting`, `categorize`, `timeline`, `scenario`, `mentor`), each with a dedicated renderer. A closed set makes validation tractable (the Vitest suite checks every task against the schema) and UX consistent. Adding a new type requires a new renderer component — don't add task shapes that have no renderer.

**Repository pattern for DB access** — All DB queries go through `backend/app/db/repositories/`. Routes call repositories, not SQLAlchemy directly. This keeps query logic in one place and makes it easier to add caching or swap implementations later.

**Vercel + Railway** — Vercel is optimized for Next.js (edge CDN, preview deploys). Railway runs the Docker container (FastAPI + Alembic auto-migrate on start). `BACKEND_URL` env var controls which Railway service the Next.js rewrite targets; local dev defaults to `http://localhost:8000`.

**`uv` for Python deps** — Faster resolution and reproducible lock files vs. plain pip. Always use `uv sync` to install, not `pip install`.

## Dev Commands

### Frontend
```bash
npm run dev          # Start dev server (Turbopack)
npm run check-all    # Lint + TypeScript check (run before committing)
npm run test         # Vitest test suite
npm run test:watch   # Watch mode
npm run build        # Production build
```

### Backend
```bash
# Terminal 1 — database
cd backend && docker compose up -d db

# Terminal 2 — migrations + server
cd backend && uv sync
cd backend && .venv/bin/alembic upgrade head
cd backend && .venv/bin/python -m app.main
```

### Environment
- Frontend: `.env.local` (copy from `.env.sample`)
- Backend: `backend/.env` with `DATABASE_URL`, `JWT_SECRET`, etc.

## Project Structure

```
src/
├── app/[lang]/              # Locale-based routing — all pages live here
│   ├── rooms/[id]/page.tsx  # Single dynamic room renderer (not per-room files)
│   ├── paths/               # Learning path pages
│   ├── labs/                # Experimental features (Agent Ops, Prompt Compare)
│   └── ...
│
├── components/
│   ├── Task*.tsx            # 6 task type components (see Task Types below)
│   ├── theory/              # One file per room — lesson/theory content
│   └── ...                  # Navigation, modals, shared UI
│
├── data/rooms/              # Single source of truth for all room content
│   ├── metadata.ts          # Room catalog (40 rooms: title, desc, difficulty, paths)
│   ├── tasks/               # Per-room task files (one file per room ID)
│   ├── types.ts             # TypeScript interfaces for rooms and tasks
│   ├── paths.ts             # Learning path definitions
│   └── index.ts             # Aggregated exports
│
├── data/
│   ├── glossary.ts          # Central glossary — used by <Term> tooltip component
│   ├── skills.ts            # Skill definitions + skillMappings.ts
│   └── professions.ts       # AI profession catalog
│
├── dictionaries/
│   ├── en.json              # English UI labels
│   └── ru.json              # Russian UI labels
│
├── hooks/
│   ├── useAuth.tsx          # Auth context (login/signup/logout, user profile)
│   ├── useProgress.ts       # Dual-mode progress (API or localStorage fallback)
│   └── useLang.tsx          # Language context
│
└── types/room.ts            # TaskType union + Task interface

backend/app/
├── api/auth/                # Signup, login, logout (JWT + bcrypt)
├── api/progress/            # GET/POST task progress (user-scoped)
├── api/users/               # GET /me — user profile + stats
├── api/agent/               # Agent Ops queue (task CRUD, cycle execution)
├── api/labs/                # Lab endpoints (prompt comparison)
├── db/models/               # SQLAlchemy ORM models
└── db/repositories/         # Repository pattern — one per model
```

Path alias: `@/*` → `src/*` (configured in `tsconfig.json`).

## Key Patterns

### Locale Routing
All pages live under `src/app/[lang]/`. The `[lang]` segment is `en` or `ru`. Never hard-code a locale — always read it from params or `useLang()`.

UI label strings (buttons, nav, headings) go in `src/dictionaries/{en,ru}.json`. Content (room titles, task text, theory) uses `{ en: string; ru: string }` shape defined in `src/data/rooms/types.ts`.

### Adding a New Room
1. Add metadata entry to `src/data/rooms/metadata.ts`
2. Create task file at `src/data/rooms/tasks/<room-id>.ts`
3. Create theory component at `src/components/theory/<RoomName>Theory.tsx`
4. Register task file in `src/data/rooms/tasks/index.ts`

### Task Types
Six task types are supported — do not invent new ones without adding a corresponding renderer component:

| Type | Component | Description |
|------|-----------|-------------|
| `question` | `TaskQuestion.tsx` | Input, MCQ, or multi-select |
| `sorting` | `TaskSorting.tsx` | Drag-to-reorder (Framer Motion) |
| `categorize` | `TaskCategorize.tsx` | Bucket classification |
| `timeline` | `TaskTimeline.tsx` | Chronological ordering |
| `scenario` | `TaskScenario.tsx` | Decision-making with scoring |
| `mentor` | `TaskMentor.tsx` | Dialogue-based learning |

### Glossary Terms
Wrap technical terms in `<Term>` for hover tooltips. Register new terms in `src/data/glossary.ts` with both `en` and `ru` fields.

### Styling
Tailwind CSS v4 only. No CSS Modules, no scoped CSS, no inline `style={}` props unless absolutely necessary. All global overrides go in `src/app/[lang]/globals.css`.

### Auth & Progress
- `useAuth()` — provides `user`, `login()`, `signup()`, `logout()`
- `useProgress()` — reads/writes task completion; automatically uses API when logged in, localStorage when guest
- Backend auth: JWT stored in httpOnly cookie; use `CurrentUserIDDep` in FastAPI routes

### Backend Conventions
- All DB access goes through repository classes in `backend/app/db/repositories/`
- Use async SQLAlchemy everywhere — no synchronous DB calls
- Pydantic schemas live alongside their router in `schemas.py`
- New endpoints: add router in `backend/app/api/<domain>/router.py`, register in `main.py`
- Migrations: `alembic revision --autogenerate -m "description"` then `alembic upgrade head`

## Testing

```bash
npm run test           # Run all tests once
npm run test:coverage  # Coverage report
```

Tests live in `src/**/__tests__/` directories. `check-all` intentionally excludes tests (only runs lint + tsc) because **47 pre-existing data defects** are in triage — documented in `TESTING.md`. Do not fix these incidentally; they are tracked.

When adding a new room or task file, add a corresponding test in `src/data/rooms/tasks/__tests__/`.

## Content Rules

- **Bilingual parity** — every piece of content must have both `en` and `ru` fields, equal in quality
- **Self-contained tasks** — every task must be solvable without external context or internet access
- **Task IDs** — must be unique within a room file; use sequential integers starting at 1
- **Tone** — pragmatic, direct, practitioner-focused (not academic)

## Not Yet Implemented

- `src/app/[lang]/compete/` — route exists, no content
- `src/app/[lang]/leaderboard/` — route exists, no content
- Agent Ops cycle scheduling — currently manual trigger only

See `BACKLOG.md` for the full engineering backlog and `PROGRESS.md` for milestone status.
