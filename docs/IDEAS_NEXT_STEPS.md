# AI Learning Platform: Product Ideas and Next Steps

## 1) Engagement and Product Growth
- Implement missing core pages: `/{lang}/compete`, `/{lang}/leaderboard`, `/{lang}/settings`.
- Add adaptive learning:
  - repeat weak topics automatically
  - suggest personalized next room
- Add spaced repetition:
  - daily short review from previously failed tasks
- Add practical AI labs:
  - prompt playground (system prompt, temperature, output comparison)
  - mini RAG lab with user-uploaded docs
- Add motivation loops:
  - weekly challenges
  - badges/achievements
  - shareable completion certificates
- Add learning analytics:
  - drop-off per task
  - completion by room/path
  - conversion from guest to signed-in user

## 2) Content Pipeline
- Room 203: EvalOps Basics
  - build eval sets
  - prompt/model scoring
  - regression checks
- Room 301: AI Product Systems
  - routing/fallback
  - cost controls
  - incident playbooks

## 3) Technical Improvements
- Sync guest local progress to server after signup/login.
- Migrate deprecated Next.js locale middleware convention to the newer proxy convention.
- Reduce lint warnings in theory components (unused imports and hook dependency warning).
- Add a room-statistics script (for example `scripts/room_word_stats.py`) that returns: "word count per room" (theory + tasks, RU/EN breakdown).

## 4) Settings Page Scope (MVP and Next)

### Implemented now
- Learning preference: default language (RU/EN) stored via cookie.
- Progress action: reset progress for one selected room.

### Suggested next settings items
- Profile management:
  - change username/email
  - password update
- Notifications:
  - daily reminder
  - weekly summary
- Privacy controls:
  - export my data
  - delete account
  - logout all sessions
- AI behavior defaults:
  - explanation depth (short/deep)
  - hint level (light/full)

## 5) FAQ Structure Proposal
- How the platform works (rooms, paths, tasks, points, streaks).
- Account and authentication (guest vs account, login/session issues).
- Progress and streak logic (how progress is saved and reset).
- Language and localization (RU/EN switching behavior).
- Troubleshooting (progress mismatch, API errors, page issues).
- Data and privacy (what is stored, export/delete options).
- Learning strategy (recommended order by level and goal).

## 6) Strategic Upgrades (March 2026)
Detailed plan: see `SERVICE_IMPROVEMENTS.md`.

### Highest impact
- Scenario Missions (real-world cases with scoring rubric: quality/cost/safety).
- Prompt Lab (side-by-side model comparison + token/cost/latency view).
- Adaptive review "Mistake Notebook" (retry failed tasks with spaced repetition).

### Next layer
- AI mentor rubric feedback for free-text answers.
- Evidence-first content quality: source links + last-updated metadata per room.
- Lightweight community sharing of mission solutions and prompt patterns.

### Fast execution order
1. Ship one mission template in `llm-landscape`.
2. Ship Prompt Lab MVP (single compare flow).
3. Add source and freshness metadata to all core rooms.
