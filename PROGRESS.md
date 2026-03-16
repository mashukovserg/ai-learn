# Project Progress Snapshot

Last synced with codebase: **2026-03-15**

## Implementation status
- **Core app shell:** Done (`AppShell`, `Sidebar`, `Navbar`).
- **Localization:** Done (`ru`/`en` routes + middleware redirect to `/ru`).
- **Room engine:** Done (`TaskQuestion` supports input, single-choice, multi-select; `TaskSorting` supports drag-to-reorder; `TaskMentor` supports dialogue).
- **Progress persistence:** Done (`useProgress` hook — API-backed when authenticated, localStorage fallback for guests).
- **Backend:** Done (FastAPI + PostgreSQL, JWT auth, user accounts, server-side progress, points/streak tracking).
- **Authentication:** Done (signup/login/logout, JWT in httpOnly cookies, login page at `/${lang}/login`).
- **Room pages implemented:** 20
  - `llm-landscape` (via `/${lang}/rooms/[id]`) — 13 tasks (input, MC, multi-select, sorting, categorize, scenario)
  - `llm-mechanics` — 8 tasks (input, MC, sorting)
  - `prompting-101` — 5 tasks
  - `chatgpt-moment` — 6 tasks
  - `ai-singularity` — 6 tasks
  - `ai-history` — 4 tasks (includes timeline)
  - `scaling-hypothesis` — 5 tasks (includes sorting)
  - `native-multimodality` — 6 tasks (Enriched: 5 chapters, categorize, scenario)
  - `prompt-evals` — 6 tasks
  - `ai-image-creation` — 6 tasks (Enriched)
  - `research-grounding` — 6 tasks (Enriched) (includes sorting)
  - `ai-alignment` — 6 tasks
  - `ai-agents` — 6 tasks (Enriched: 8 chapters, categorize, scenario)
  - `deep-search-agents` — 6 tasks (includes sorting)
  - `ai-rag` — 6 tasks (Enriched: 5 chapters, categorize, scenario)
  - `ai-security` — 6 tasks (Enriched: 5 chapters, categorize, scenario)
  - `ai-research` (Enriched) — 5 tasks
  - `fine-tuning-101` — 12 tasks (includes categorize, scenario, mentor)
  - `post-chatgpt-history` — 6 tasks
  - `embeddings-101` — 10 tasks (includes timeline, categorize, sorting, scenario)
- **Learning paths UI:** Done (`/${lang}/paths`, `/${lang}/paths/beginner`, `/${lang}/paths/ideas-history`).
- **Rooms list page:** Shows real progress status (Completed / In Progress / Not Started).
- **Dashboard:** Shows real completed room count and progress bar. Welcome line shows actual username when logged in.
- **Deployment:** Live on Vercel at [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app).
- **UI consistency:** Green accent styling is now consistent across primary flows (Dashboard, Paths, Rooms, active sidebar routes).

## Platform milestones
| Date | Milestone |
|------|-----------|
| 2026-02-14 | Rooms index page created (`/[lang]/rooms`) |
| 2026-02-14 | Dashboard redesign with compact room rows + primary CTA |
| 2026-02-15 | Prompting 101 room page added |
| 2026-02-15 | Native Multimodality room page added |
| 2026-02-15 | Project docs synced with actual route/component status |
| 2026-02-17 | AI History, Prompt Evals, AI Image Creation rooms added |
| 2026-02-17 | localStorage progress persistence (`useProgress` hook) |
| 2026-02-17 | Real progress on rooms list page and dashboard |
| 2026-02-17 | TaskSorting `disabled` type error fixed |
| 2026-02-17 | Deployed to Vercel |
| 2026-02-17 | Green-accent UI pass shipped to production (`/paths` and cross-flow active states) |
| 2026-02-18 | Added path: "Идеи и споры об ИИ / Ideas and Debates in AI" |
| 2026-02-18 | Added room: `chatgpt-moment` |
| 2026-02-18 | Added room: `ai-singularity` |
| 2026-02-24 | Backend added: FastAPI + PostgreSQL with JWT auth, progress persistence, points/streak |
| 2026-02-24 | Frontend auth integration: AuthProvider, useAuth hook, login/signup page |
| 2026-02-24 | Navbar/Sidebar now show real user data (points, streak, username, level) |
| 2026-02-24 | useProgress hook upgraded to use API when authenticated (localStorage fallback) |
| 2026-02-24 | next.config.ts: API proxy rewrites (`/api/*` → backend) |
| 2026-02-26 | Added Room 202: Research & Grounding |
| 2026-02-26 | Added Room: AI Alignment & RLHF |
| 2026-02-26 | Metadata centralization in `src/data/rooms.ts` |
| 2026-02-26 | Room duration estimates optimized for bite-sized learning |
| 2026-02-26 | Added `check-all` script for safer builds (lint + types) |
| 2026-03-15 | Added 3 new task components: TaskCategorize, TaskTimeline, TaskScenario |
| 2026-03-15 | Filled in content for 3 rooms: Singularity, Prompt Evals, AI Image Creation |
| 2026-03-15 | Added Room: Fine-Tuning & Adaptation (12 tasks, uses categorize + scenario + mentor) |
| 2026-03-15 | Fine-Tuning theory enriched from detailed MD draft (9 chapters: LoRA math, pipelines, API, decision tree) |
| 2026-03-15 | Added Room: Embeddings & Vector Search (10 tasks, uses timeline + categorize + sorting + scenario) |
| 2026-03-15 | All documentation synced: ROOMS_IDEAS, PROGRESS, CURRICULUM, BACKLOG + Russian mirrors |
| 2026-03-15 | Enriched theory content in 5 rooms and added Post-ChatGPT Era room |
| 2026-03-16 | Enriched theory and expanded tasks for AI RAG, AI Security, and AI Agents (by Gemini) |
| 2026-03-16 | Enriched theory and expanded tasks for Native Multimodality (by Gemini) |


## Gaps remaining
- Sidebar has links to `compete`, `leaderboard`, but pages are not implemented.
- Guest progress (localStorage) is not synced to the server when a user later signs up.
- Next.js build warns that `middleware` file convention is deprecated in favor of `proxy`.

## Current curriculum coverage
- **AI Foundations module:** Rooms 101 (LLM Landscape), 102 (LLM Mechanics), 103 (Prompting 101).
- **Multimodality module:** Room 201 (Native Multimodality), Room 202 (Research & Grounding).
- **Architecture & Adaptation module:** Fine-Tuning & Adaptation.
- **Practice module:** Prompt Evals, AI Image Creation.
- **Ideas module:** ChatGPT Moment, Scaling Hypothesis, AI Singularity debates, AI History.
- **Advanced module:** AI Agents, Deep Search Agents, AI RAG, AI Security, AI Research, AI Alignment.
- **Next planned content:** Embeddings & Vector Search, EvalOps Basics.
