# AI-Learn Platform

TryHackMe-style AI learning platform with interactive theory + tasks, built with Next.js App Router.

**Live demo:** [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app)

## What is implemented
- RU/EN locale routing via middleware (`/ru` default redirect for non-localized paths).
- Dashboard (`/[lang]`) with recommended rooms, real progress bar from localStorage.
- Learning paths pages:
  - `/${lang}/paths`
  - `/${lang}/paths/beginner`
- Consistent green accent styling across primary product flows:
  - active sidebar route states
  - dashboard CTAs
  - paths cards and actions
  - active elements in path detail flow
- Rooms pages (7 rooms):
  - `/${lang}/rooms` (listing page with live status badges)
  - `/${lang}/rooms/[id]` — LLM Landscape (26 tasks)
  - `/${lang}/rooms/llm-mechanics` (4 tasks)
  - `/${lang}/rooms/prompting-101` (6 tasks)
  - `/${lang}/rooms/native-multimodality` (6 tasks)
  - `/${lang}/rooms/ai-history` (6 tasks)
  - `/${lang}/rooms/prompt-evals` (6 tasks)
  - `/${lang}/rooms/ai-image-creation` (6 tasks)
- Interactive task components:
  - `TaskQuestion` — input, multiple-choice, multiple-select
  - `TaskSorting` — drag-to-reorder with Framer Motion
- Progress persistence via `useProgress` hook (localStorage-backed, SSR-safe).
- Rooms list and dashboard show real progress (Completed / In Progress / Not Started).

## Current architecture
- `src/app/[lang]/...` for localized routes.
- `src/components/AppShell.tsx` for shared shell layout.
- `src/components/Sidebar.tsx` + `src/components/Navbar.tsx` for navigation.
- `src/hooks/useProgress.ts` for localStorage-backed progress persistence.
- `src/components/RoomStatusBadge.tsx` + `DashboardProgress.tsx` for live progress display.
- `src/dictionaries/{en,ru}.json` + `src/dictionaries/get-dictionary.ts` for localized UI strings.

## Tech stack
- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- Framer Motion `^12.34.0`
- Lucide React `^0.564.0`

## Known limitations
- Progress is persisted in localStorage (survives refresh/navigation); no backend persistence yet.
- Sidebar links `/${lang}/compete`, `/${lang}/leaderboard`, `/${lang}/settings` are present in UI but routes are not implemented yet.
- Room metadata is duplicated across pages (dashboard/rooms/path each define their own room arrays).
- Some user stats are static UI values (points/streak/completion are not sourced from a profile store).
- Next.js currently shows a build warning that `middleware` convention is deprecated and should migrate to `proxy`.

## Content rules
- **Style rule (Pragmatic Instructional Narrative):** use conceptual analogies (scaffolding), maintain a conversational tone to reduce "tech anxiety," provide contextual justification for why the topic matters, and keep a clear roadmap-oriented structure.
- **Localization rule:** all user-facing lesson content and tasks must be available in both English and Russian (no EN-only or RU-only blocks).
- **Task coverage rule:** every task must be solvable from the lesson content in both languages.
- **Explicit mapping rule:** if a task asks for classification (for example, "Select models that do NOT belong to US companies"), the lesson must explicitly provide that mapping in the theory text.
- **Terminology tooltip rule:** each room must include hover tooltips (or equivalent inline clarifications) for complex technical terms so beginners can understand content without leaving the page.

## Development
```bash
npm install
npm run dev
```

Open `http://localhost:3000` (it redirects to `/ru`).

## Project docs
- `PROGRESS.md`: implementation status and milestones
- `BACKLOG.md`: active engineering backlog
- `CURRICULUM.md`: learning-path curriculum status
- `ROOMS_IDEAS.md`: content ideas and room/task design notes
