# Project Progress Snapshot

Last synced with codebase: **2026-02-17**

## Implementation status
- **Core app shell:** Done (`AppShell`, `Sidebar`, `Navbar`).
- **Localization:** Done (`ru`/`en` routes + middleware redirect to `/ru`).
- **Room engine:** Done (`TaskQuestion` supports input, single-choice, multi-select; `TaskSorting` supports drag-to-reorder).
- **Progress persistence:** Done (`useProgress` hook backed by localStorage, SSR-safe).
- **Room pages implemented:** 7
  - `llm-landscape` (via `/${lang}/rooms/[id]`) — 26 tasks
  - `llm-mechanics` — 4 tasks (includes sorting)
  - `prompting-101` — 6 tasks
  - `native-multimodality` — 6 tasks
  - `ai-history` — 6 tasks
  - `prompt-evals` — 6 tasks
  - `ai-image-creation` — 6 tasks
- **Learning paths UI:** Done (`/${lang}/paths`, `/${lang}/paths/beginner`).
- **Rooms list page:** Shows real progress status (Completed / In Progress / Not Started) from localStorage.
- **Dashboard:** Shows real completed room count and progress bar from localStorage.
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

## Gaps remaining
- Sidebar has links to `compete`, `leaderboard`, `settings`, but pages are not implemented.
- Room metadata is duplicated across pages (dashboard/rooms/path each define their own room arrays).
- User points/streak are static UI values (not sourced from a profile store).
- No backend persistence or authentication yet.
- Next.js build warns that `middleware` file convention is deprecated in favor of `proxy`.

## Current curriculum coverage
- **AI Foundations module:** Rooms 101 (LLM Landscape), 102 (LLM Mechanics), 103 (Prompting 101).
- **Multimodality module:** Room 201 (Native Multimodality).
- **Practice module:** Prompt Evals, AI Image Creation, AI History.
- **Next planned content page:** Room 202 (Research & Grounding).
