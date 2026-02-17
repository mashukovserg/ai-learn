# AI-Learn Backlog

## Completed
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

## In Progress
- [ ] Centralize room metadata in one source (`id`, title, difficulty, task count, learners, duration).
- [ ] Add "Success Modal" upon room completion.
- [ ] Add missing pages for sidebar routes: `/${lang}/compete`, `/${lang}/leaderboard`, `/${lang}/settings`.
- [ ] Migrate Next.js locale `middleware` to `proxy` convention (build warning in Next.js 16).

## Future Content (Room Pipeline)
- [ ] **Room 202: Research & Grounding** — RAG basics, retrieval quality, citation discipline.
- [ ] **Room 203: EvalOps Basics** — Build eval sets, score prompts/models, regression checks.
- [ ] **Room 301: AI Product Systems** — Routing, fallback, cost controls, incident playbooks.

## Future Engineering
- [ ] Backend persistence (user accounts + progress stored server-side).
- [ ] User authentication (optional/prototype).
- [ ] Room completion analytics / leaderboard.
