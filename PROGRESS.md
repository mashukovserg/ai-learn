# Project Progress Snapshot

Last synced with codebase: **2026-02-15**

## Implementation status
- **Core app shell:** Done (`AppShell`, `Sidebar`, `Navbar`).
- **Localization:** Done (`ru`/`en` routes + middleware redirect to `/ru`).
- **Room engine:** Done (`TaskQuestion` supports input, single-choice, multi-select).
- **Room pages implemented:** 4
  - `llm-landscape` (via `/${lang}/rooms/[id]`)
  - `llm-mechanics`
  - `prompting-101`
  - `native-multimodality`
- **Learning paths UI:** Done (`/${lang}/paths`, `/${lang}/paths/beginner`).

## Platform milestones
| Date | Milestone |
|------|-----------|
| 2026-02-14 | Rooms index page created (`/[lang]/rooms`) |
| 2026-02-14 | Dashboard redesign with compact room rows + primary CTA |
| 2026-02-15 | Prompting 101 room page added (`/[lang]/rooms/prompting-101`) |
| 2026-02-15 | Native Multimodality room page added (`/[lang]/rooms/native-multimodality`) |
| 2026-02-15 | Project docs synced with actual route/component status |

## Gaps discovered during audit
- Progress is not persisted (state resets on reload).
- Sidebar has links to `compete`, `leaderboard`, `settings`, but pages are not implemented.
- Room metadata is duplicated across dashboard/rooms/path pages.
- User points/streak are currently static UI values.

## Current curriculum coverage
- **AI Foundations module:** content pages exist for Rooms 101/102/103.
- **Multimodality module:** Room 201 content page exists.
- **Next planned content page:** Room 202 (Research & Grounding).
