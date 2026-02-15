# AI-Learn Platform

TryHackMe-style AI learning platform with interactive theory + tasks, built with Next.js App Router.

## What is implemented
- RU/EN locale routing via middleware (`/ru` default redirect for non-localized paths).
- Dashboard (`/[lang]`) with recommended rooms and path CTA.
- Learning paths pages:
  - `/${lang}/paths`
  - `/${lang}/paths/beginner`
- Rooms pages:
  - `/${lang}/rooms` (listing page)
  - `/${lang}/rooms/[id]` (LLM Landscape room content, task-driven)
  - `/${lang}/rooms/llm-mechanics`
  - `/${lang}/rooms/prompting-101`
  - `/${lang}/rooms/native-multimodality`
- Interactive `TaskQuestion` component with:
  - `input`
  - `multiple-choice`
  - `multiple-select`

## Current architecture
- `src/app/[lang]/...` for localized routes.
- `src/components/AppShell.tsx` for shared shell layout.
- `src/components/Sidebar.tsx` + `src/components/Navbar.tsx` for navigation.
- `src/dictionaries/{en,ru}.json` + `src/dictionaries/get-dictionary.ts` for localized UI strings.

## Tech stack
- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- Framer Motion `^12.34.0`
- Lucide React `^0.564.0`

## Known limitations
- Progress is in-memory only (resets on refresh); no localStorage/backend persistence yet.
- Sidebar links `/${lang}/compete`, `/${lang}/leaderboard`, `/${lang}/settings` are present in UI but routes are not implemented yet.
- Room metadata is duplicated across pages (dashboard/rooms/path each define their own room arrays).
- Some user stats are static UI values (points/streak/completion are not sourced from a profile store).

## Content rules
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
