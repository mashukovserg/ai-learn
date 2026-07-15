# CLAUDE.md — AI Learning Platform

Bilingual (RU/EN) AI education platform in the style of TryHackMe rooms + Duolingo gamification: progressive **rooms** with **theory + interactive tasks**, points/streaks, a skill radar, and learning **paths**. Guest mode works with no account (localStorage progress); authenticated users get progress synced to PostgreSQL.

**Live demo:** https://ai-learning-platform-murex.vercel.app

> This file is the entry point for AI assistants. Two companion docs go deeper and are **authoritative** where they overlap:
> - `docs/AGENTS.md` — mandatory runtime + content-authoring gates (read before any substantial edit).
> - `docs/CLAUDE.md` — extended architecture rationale ("why these choices").

## Architecture

Two processes; run both for full functionality:

| Process  | Tech                                          | Port |
|----------|-----------------------------------------------|------|
| Frontend | Next.js 16 (App Router) + React 19 + TS 5     | 3000 |
| Backend  | FastAPI + PostgreSQL (async SQLAlchemy 2.0)   | 8000 |

Next.js rewrites all `/api/*` requests to the backend (`next.config.ts`, target `BACKEND_URL`, default `http://localhost:8000`). The browser only ever talks to one origin — no CORS, backend URL never exposed. When the backend is unreachable, the frontend falls back to localStorage (guest mode).

### Tech stack
- **Frontend:** Next.js `16.1.6`, React `19.2.3`, TypeScript `^5`, Tailwind CSS `v4`, Framer Motion `^12`, Lucide React.
- **Backend:** Python `3.12`, FastAPI `0.115`, SQLAlchemy `2.0` (async) + asyncpg, PostgreSQL `16`, Alembic, bcrypt + python-jose (JWT), `uv` package manager.

## Dev Commands

### Frontend (from repo root)
```bash
npm install
npm run dev          # Dev server (Turbopack) → http://localhost:3000 (redirects to /ru)
npm run check-all    # eslint + tsc --noEmit — run before committing
npm run test         # Vitest data-integrity / task-shape suite (one-shot)
npm run test:watch   # Vitest watch mode
npm run test:coverage
npm run build        # Production build
```

### Backend
```bash
cd backend && docker compose up -d db          # PostgreSQL 16
cd backend && uv sync                           # install deps (never pip install)
cd backend && .venv/bin/alembic upgrade head    # migrations
cd backend && .venv/bin/python -m app.main      # server on :8000
```

## Project Structure

```
src/
├── app/[lang]/                  # ALL pages — [lang] = 'en' | 'ru'
│   ├── page.tsx                 # Dashboard
│   ├── rooms/[id]/page.tsx      # SINGLE dynamic room renderer + THEORY_COMPONENTS map
│   ├── rooms/page.tsx           # Room catalog (filters, live progress)
│   ├── paths/                   # Learning-path pages (beginner, ideas-history, agentic-systems, agent-coding)
│   ├── labs/                    # agent-ops, prompt-compare (experimental tools)
│   ├── professions/ skills/ settings/ compete/ leaderboard/ faq/ login/
│   ├── api/labs/compare/route.ts
│   └── globals.css              # Tailwind v4 @theme design tokens
├── components/
│   ├── Task*.tsx                # 6 task renderers (see Task Types)
│   ├── theory/<Room>Theory.tsx  # one theory component per room
│   ├── Term.tsx                 # glossary hover tooltip
│   └── ...                      # AppShell, Sidebar, Navbar, modals, charts
├── data/
│   ├── rooms/                   # SINGLE SOURCE OF TRUTH for room content
│   │   ├── metadata.ts          # ROOMS_METADATA (39 rooms)
│   │   ├── paths.ts             # PATHS_METADATA
│   │   ├── types.ts             # LocalizedString, LocalizedTask, LocalizedRoomMetadata, PathMetadata
│   │   ├── tasks/<room-id>.ts   # per-room task arrays → assembled in tasks/index.ts as ROOM_TASKS
│   │   ├── playgroundConfigs.ts # PromptPlayground configs
│   │   └── index.ts             # barrel + getRoomsByPath / derived helpers
│   ├── glossary.ts  skills.ts  skillMappings.ts  professions.ts
├── dictionaries/{en,ru}.json    # UI label strings + get-dictionary.ts
├── hooks/ useAuth.tsx  useProgress.ts  useLang.tsx
├── proxy.ts                     # locale redirect (/ → /ru default)
└── types/room.ts                # TaskType union + legacy Task/Room/ContentBlock interfaces

backend/app/
├── main.py                      # FastAPI app; registers routers: auth, users, progress, labs, agent
├── database.py                  # async engine + session
├── api/{auth,users,progress,agent,labs,leaderboard}/  # router.py + schemas.py per domain
│                                # (leaderboard is a stub package — no router wired yet)
├── api/dependencies/            # DBSessionDep, CurrentUserIDDep (cookie → session → user_id)
├── db/models/                   # ORM: UserORM, AuthSessionORM, UserProgressORM, AgentTask/Run/KnowledgeItemORM
├── db/repositories/             # repository pattern — routes call repos, never SQLAlchemy directly
└── alembic/                     # async migrations
```

Path alias: `@/*` → `src/*` (`tsconfig.json`).

## Key Patterns

### Locale routing (never hard-code a locale)
Every page lives under `src/app/[lang]/` and reads `lang` from route params or `useLang()`. Russian is the default (redirect in `src/proxy.ts`).
- **UI chrome** (buttons, nav, headings) → `src/dictionaries/{en,ru}.json`.
- **Content** (room titles, task text, theory) → `LocalizedString` shape `{ en: string; ru: string }` from `src/data/rooms/types.ts`.

### Task types (closed set — 8 `TaskType`s, 6 renderer components)
`TaskType = 'input' | 'multiple-choice' | 'multiple-select' | 'sorting' | 'mentor' | 'categorize' | 'timeline' | 'scenario'`

| TaskType(s)                                | Component            |
|--------------------------------------------|----------------------|
| `input`, `multiple-choice`, `multiple-select` | `TaskQuestion.tsx`   |
| `sorting` (drag-to-reorder, Framer Motion) | `TaskSorting.tsx`    |
| `categorize` (drag into buckets)           | `TaskCategorize.tsx` |
| `timeline` (chronological order)           | `TaskTimeline.tsx`   |
| `scenario` (scored decision mission)       | `TaskScenario.tsx`   |
| `mentor` (dialogue)                        | `TaskMentor.tsx`     |

There is **no runtime validation** of task data — malformed tasks silently become unsolvable. The Vitest suite is the only safety net (see Testing + `docs/AGENTS.md` "Task data validation gate").

### Adding a new room
1. Add metadata entry to `src/data/rooms/metadata.ts` (`ROOMS_METADATA`).
2. Create `src/data/rooms/tasks/<room-id>.ts` and register it in `src/data/rooms/tasks/index.ts`.
3. Create `src/components/theory/<RoomName>Theory.tsx`.
4. Map the theory component in `THEORY_COMPONENTS` inside `src/app/[lang]/rooms/[id]/page.tsx` (unmapped rooms show a placeholder).
5. Add a data test under `src/data/rooms/__tests__/`.

### Glossary tooltips
Wrap technical terms in `<Term id="..." lang={lang}>…</Term>`. Register terms in `src/data/glossary.ts` (`GLOSSARY`) with both `en` and `ru`. If `children` are omitted, `Term` uses the default label.

### Styling — design tokens are mandatory
Tailwind v4 only (no CSS Modules / scoped CSS / inline `style` unless unavoidable). Surface/border colors are `@theme` tokens in `src/app/[lang]/globals.css`:
- Backgrounds: `bg-card`, `bg-card-dark`, `bg-base`, `bg-deep`, `bg-input`, `bg-muted`.
- Borders: `border-border-card`, `border-border-subtle`, `border-border-emphasis`.
- **Never** introduce arbitrary hex (`bg-[#1a1a1a]`, `border-[#262626]`) — reuse a token or add one in `globals.css`.

### Auth & progress
- `useAuth()` → `user`, `login()`, `signup()`, `logout()` (profile from `/api/me`).
- `useProgress()` → task completion; API when authenticated, localStorage when guest; migrates guest progress to server on signup.
- Backend: JWT in an **httpOnly cookie** (never localStorage); use `CurrentUserIDDep` in routes.

### Backend conventions
- All DB access goes through repository classes in `backend/app/db/repositories/`. Routes call repos, not SQLAlchemy sessions.
- Async SQLAlchemy everywhere — no synchronous DB calls.
- Pydantic schemas live in each domain's `schemas.py`.
- New endpoint: add `backend/app/api/<domain>/router.py`, register it in `backend/app/main.py`.
- Migrations: `alembic revision --autogenerate -m "..."` then `alembic upgrade head`.

## Testing

```bash
npm run test           # data-integrity + task-shape suite
npm run test:coverage
```
Tests live in `src/**/__tests__/`. They codify `docs/AGENTS.md` "Task data validation gate" + "Task ID sequencing" against `ROOMS_METADATA`, `PATHS_METADATA`, and `ROOM_TASKS`. The initial run surfaced **47 pre-existing data defects** (triage list in `docs/TESTING.md`), so `npm run test` is intentionally **not** part of `check-all` yet. Don't fix those incidentally — they are tracked.

## Mandatory Authoring Gates (from `docs/AGENTS.md`)

These are enforced conventions, not suggestions. Read `docs/AGENTS.md` for full detail.

- **Localization parity** — any user-facing text change ships in **both** `en` and `ru` in the same task. No single-locale content unless the user explicitly asks.
- **Task solvability** — every task must be answerable purely from that room's theory, in both languages. If a task classifies items ("select the US-company models"), the theory must state that mapping explicitly.
- **Task ID sequencing** — IDs within a room are sequential integers starting at `1`, no gaps or duplicates (progress % breaks otherwise).
- **Task mix rule** — every room includes at least one `sorting` or `mentor` task; never MCQ/input-only.
- **Chapter depth gate** — each theory chapter has ≥120 words and ≥2 paragraphs per language, unless explicitly labeled `Short block` / `Краткий блок`.
- **Anti-Vibecode frontend gate** — single-column narrative flow (no default 2-column split for long text), left-aligned body/summary, no full-paragraph italics, no decorative glow/neon, **no leading icons in headings**, analytical (non-hype) tone.
- **Forbidden phrasing** — never use `это не просто` or the word `вендор` (any case form) in authored text, docs, or replies; use concrete alternatives (`поставщик модели`, `платформа`, etc.).
- **Docs sync / completion checklist** — when behavior, setup, or content changes, update in the same task: `README.md`, `docs/PROGRESS.md`, `docs/BACKLOG.md` (log completed work with a `(by <agent>)` tag), and `docs/CURRICULUM.md` / `docs/DEPLOYMENT.md` where relevant. Update Russian mirrors (`*.ru.md`) when they exist.
- **Frontend auto-start** — for coding tasks, ensure `http://localhost:3000` is up (reuse if already running; start `npm run dev` if not) and state its status in your report.

## Current State & Limitations

- **39 rooms** in `ROOMS_METADATA`; 38 fully wired (theory + tasks). `prompt-evals` has metadata + theory but no task file yet (tracked in `docs/BACKLOG.md`).
- `compete/` and `leaderboard/` render bilingual "coming soon" placeholder pages; no ranking/competition backend yet (the `leaderboard` backend package is a stub with no router).
- Agent Ops cycle scheduling is **manual** (`POST /api/agent/cycle/run`); no periodic scheduler.

## Deployment

Frontend on **Vercel**; backend Docker container on **Railway** (Alembic auto-migrates on start). `BACKEND_URL` controls the Next.js rewrite target. See `docs/DEPLOYMENT.md` — and update it in the same task when changing `backend/Dockerfile`, `next.config.ts`, `backend/settings.py`, `docker-compose.yml`, or adding migrations/services.

## Docs Index (all mirrored `.ru.md` where noted)
- `docs/AGENTS.md` — runtime + authoring gates (**start here** for content work).
- `docs/CLAUDE.md` — extended architecture rationale.
- `docs/PROGRESS.md` — milestones / implementation status.
- `docs/BACKLOG.md` — engineering + content backlog and completed-work log.
- `docs/CURRICULUM.md` — learning-path / room coverage.
- `docs/TESTING.md` — test strategy + known-defect triage.
- `docs/DEVELOPER_GUIDE.md` — newcomer walkthrough.
- `docs/DEPLOYMENT.md` — deploy topology + env var reference.
- `docs/ROOMS_IDEAS.md`, `docs/ROADMAP_VIEW_MODE.md`, `docs/ROADMAP_3M.md` — content/design notes.
