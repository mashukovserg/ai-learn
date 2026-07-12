# Project Progress Snapshot

Last synced with codebase: **2026-05-16**

## Implementation status
- **Core app shell:** Done (`AppShell`, `Sidebar`, `Navbar`).
- **Localization:** Done (`ru`/`en` routes + `proxy.ts` redirect to `/ru`).
- **Room engine:** Done (`TaskQuestion` supports input, single-choice, multi-select; `TaskSorting` supports drag-to-reorder; `TaskMentor` supports dialogue).
- **Progress persistence:** Done (`useProgress` hook — API-backed when authenticated, localStorage fallback for guests, and signup-time guest progress sync to server).
- **Backend:** Done (FastAPI + PostgreSQL, JWT auth, user accounts, server-side progress, points/streak tracking).
- **Authentication:** Done (signup/login/logout, JWT in httpOnly cookies, login page at `/${lang}/login`).
- **Room pages implemented:** 38 in `ROOMS_METADATA` (37 fully wired; `prompt-evals` has metadata + theory but no task file — see `BACKLOG.md`)
  - `/${lang}/rooms/[id]` is fully wired for: `agent-coding-foundations`, `agentic-coding-tools`, `agentic-cli-tools`, `prompt-contracts`, `multi-agent-collaboration`, `agentic-testing-loop`, `agentic-ui-delivery`, `llm-landscape`, `llm-mechanics`, `prompting-101`, `ai-career-trajectories`, `chatgpt-moment`, `post-chatgpt-history`, `ai-history`, `scaling-hypothesis`, `ai-singularity`, `ai-image-creation`, `research-grounding`, `ai-agents`, `deep-search-agents`, `ai-rag`, `ai-security`, `ai-research`, `ai-alignment`, `native-multimodality`, `fine-tuning-101`, `embeddings-101`, `llm-guardrails`, `ai-regulation-ru`, `ai-regulation-eu`, `mcp-tool-ecosystems`, `agentic-swarm-management`, `frontier-evals-logic`, `claude-code-agentic-loop`, `claude-code-pro-workflow`, `local-models-101`, `llama-3-1-8b`.
  - Open Models category (2 rooms): `local-models-101` (Beginner intro: open weights, why local, model landscape, first run) and `llama-3-1-8b` (Intermediate deep dive into one model).
  - Newly added Agent Coding rooms: `agent-coding-foundations`, `agentic-coding-tools`, `agentic-cli-tools`, `prompt-contracts`, `multi-agent-collaboration`, `agentic-testing-loop`, `agentic-ui-delivery` (10 tasks each, EN/RU).
- **Learning paths UI:** Done (`/${lang}/paths`, `/${lang}/paths/beginner`, `/${lang}/paths/ideas-history`, `/${lang}/paths/agentic-systems`, `/${lang}/paths/agent-coding`).
- **AI professions page:** Done (`/${lang}/professions`) with search, difficulty/status filters, featured role card, and profession-specific card grid.
- **Labs:** Prompt Compare is live and Agent Ops MVP is added at `/${lang}/labs/agent-ops` (task queue, cycle trigger, runs feed, knowledge feed).
- **Profile page (`/${lang}/settings`):** Done (language preference, per-room progress reset, embedded Skills Matrix).
- **Rooms list page:** Shows real progress status (Completed / In Progress / Not Started), supports thematic focus filtering (presets `Agent Coding`, `AI Philosophy`, plus all room categories), and now uses professions-style illustrated covers with room icons and real progress badges.
- **Rooms list page:** On desktop, difficulty/focus/status controls now live in a dedicated side filter rail with a compact result summary, while mobile keeps a stacked filter flow above the catalog.
- **Dashboard:** Shows real completed room count and progress bar. Welcome line shows actual username when logged in.
- **Deployment:** Live on Vercel at [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app).
- **UI consistency:** Green accent styling is now consistent across primary flows (Dashboard, Paths, Rooms, active sidebar routes).

## Platform milestones
| Date | Milestone |
|------|-----------|
| 2026-07-12 | Extended the `local-models-101` room with Chapter 6 «Local Models in Security Research» (EN/RU): privacy/offline/cost/reproducibility/customization/transparency motivations table, a curated defensive-security reading list, and a new task (`#11`, now 11 tasks) reinforcing the honest trade-off — local models lead on control/privacy/reproducibility, not raw capability. |
| 2026-05-16 | Shipped the `local-models-101` room (Beginner, «Открытые модели / Open Models», 5 theory chapters, 10 tasks across 8 task types, 3 new glossary terms: open-weights, quantization, vram + reused inference). The room is the category entry point; `llama-3-1-8b` remains the model-specific deep dive. Also published `ROADMAP_3M.md` (3-month agent roadmap). |
| 2026-05-11 | Stood up the first test layer (Vitest, two suites under `src/data/rooms/__tests__/`, 1527 assertions) and authored `TESTING.md` with the strategy plus a triage list of 47 pre-existing data defects the initial run uncovered. `npm run test` is kept out of `check-all` until those are cleared. |
| 2026-04-26 | Moved `/${lang}/rooms` filters into a dedicated desktop sidebar rail with sticky placement and a compact result summary; mobile keeps the stacked filter layout. |
| 2026-04-26 | Increased `/${lang}/rooms` density on large screens: wider container, more columns, and tighter room-card spacing so more rooms fit on screen. |
| 2026-04-26 | Reduced the visual cover size on `/${lang}/rooms`: smaller room-symbol blocks, shorter card headers, and denser top-card composition. |
| 2026-04-26 | Reworked `/${lang}/rooms` cards to match the professions-style cover treatment: programmatic gradient headers, room icons, and real progress badges. |
| 2026-04-26 | Added `/${lang}/professions`: a dedicated AI professions catalog with search, filters, sidebar navigation, and card-first role discovery in both locales. |
| 2026-04-26 | Added `ai-career-trajectories`: a bilingual AI career roadmap room with a custom dark timeline layout, IC/research/management track switching, branch-point cards, and 6 validated tasks. |
| 2026-04-05 | Implemented 4 new Agent Coding rooms: AC-103 (Prompt Contracts), AC-104 (Multi-Agent Collaboration), AC-202 (Agentic Testing Loop), and AC-203 (Agentic UI Delivery). Each room includes 5 theory chapters and 10 localized tasks. |
| 2026-04-05 | Reworked AC-201 (`agentic-cli-tools`) theory... |
| 2026-04-05 | Added thematic focus filter to `/${lang}/rooms` with presets `Agent Coding` and `AI Philosophy`, plus dynamic options for all room categories; combined with existing difficulty/status filters. |
| 2026-04-04 | Implemented Agent Ops MVP: added `/${lang}/labs/agent-ops`, backend `/agent/*` API, queue/run/knowledge tables, and cycle execution endpoint with dedupe-by-fingerprint storage. |
| 2026-03-29 | Implemented AC-201 room `agentic-cli-tools` (5 theory chapters + 10 localized tasks), wired metadata/tasks/theory into the dynamic room engine, and attached the room to the Agent Coding path flow. |
| 2026-03-29 | Implemented AC-102 room `agentic-coding-tools` (5 theory chapters + 10 localized tasks), wired tasks/theory/metadata into dynamic room engine, and added it to Agent Coding path progression. |
| 2026-03-28 | Implemented AC-101 room `agent-coding-foundations` (5 theory chapters + 10 localized tasks), wired new Agent Coding path route `/${lang}/paths/agent-coding`, and added glossary terms `guardrails` + `context-window`. |
| 2026-03-28 | Implemented guest progress migration on signup: localStorage `progress:*` entries are replayed to `/api/progress/{roomId}` after account creation, then user profile is refreshed to reflect migrated points/streak. |
| 2026-03-28 | Added a glossary tooltip for "Code Red" / "Красный код" in Post-ChatGPT Era Chapter 1 (EN/RU). |
| 2026-03-28 | Updated `post-chatgpt-history` room cover image to `/images/post-chatgpt-era.webp`. |
| 2026-03-28 | Updated `ai-singularity` room cover image to `/images/ai-singularity.avif`. |
| 2026-03-28 | Moved Skills Matrix to profile page `/${lang}/settings`, updated sidebar entry to “Profile”, and redirected `/${lang}/skills` to `/${lang}/settings#skills-matrix`. |
| 2026-03-28 | Reworked `/${lang}/rooms` from list to responsive tile grid (3/2/1 columns), added equal-height vertical cards with 16:9 covers and filter controls by difficulty/status. |
| 2026-03-28 | Refined room card metadata on `/${lang}/rooms`: moved difficulty/status out of image overlays into a compact minimalist meta row above room titles. |
| 2026-03-28 | Fixed `/${lang}/rooms` hydration mismatch by initializing SSR-safe statuses and syncing localStorage progress only after client mount. |
| 2026-03-24 | Shipped a Notion-style frontend polish pass: upgraded typography stacks, added `reading-prose` for theory text, introduced `content-shell` spacing rhythm, and softened core surface/border tokens. |
| 2026-03-24 | Migrated locale request handler from `src/middleware.ts` to `src/proxy.ts` for Next.js 16 file-convention compatibility (warning removed). |
| 2026-02-14 | Rooms index page created (`/[lang]/rooms`) |
| 2026-02-14 | Dashboard redesign with compact room rows + primary CTA |
| 2026-02-15 | Prompting 101 room page added |
| 2026-02-15 | Native Multimodality room page added |
| 2026-02-15 | Project docs synced with actual route/component status |
| 2026-02-17 | AI History, Prompt Evals, AI Image Creation rooms added |
| 2026-02-17 | localStorage progress persistence (`useProgress` hook) |
| 2026-02-17 | Real progress on rooms list page and dashboard |
| 2026-02-17 | TaskSorting `disabled` type error fixed |
| 2026-03-16 | Enriched AI Image Creation room (from 3 to 7 tasks) with Latent Diffusion theory and new interactive components. |
| 2026-03-16 | Enriched LLM Mechanics room (from 10 to 14 tasks) with Self-Attention theory and new interactive tasks. |
| 2026-03-16 | Expanded AI History room with detailed Lighthill Report and GPU/NVIDIA context. Integrated Geoffrey Hinton's legacy and safety concerns into History and Singularity rooms. |
| 2026-03-16 | Enriched AI Singularity room (from 6 to 10 tasks) with Timeline, Scenario, and advanced MC/MS tasks. |
| 2026-03-16 | Enriched Scaling Hypothesis room (from 5 to 9 tasks) with Categorize, Scenario, Sorting, and Timeline tasks. |
| 2026-03-16 | Enriched ChatGPT Moment room (from 6 to 10 tasks) with Timeline, Categorize, Scenario, and Sorting tasks. |
| 2026-03-16 | Enriched Prompting 101 room (from 6 to 10 tasks) with Timeline, Categorize, Scenario, and Sorting tasks. |
| 2026-03-16 | Enriched AI History room (from 6 to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). |
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
| 2026-02-26 | Metadata centralization in `src/data/rooms/` |
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
| 2026-03-17 | Updated AI History theory Chapter 1 event cards to a single-column layout (removed desktop two-column arrangement). |
| 2026-03-17 | Removed italic styling from the AI History Chapter 1 reflective paragraph for consistent body text presentation. |
| 2026-03-17 | Added glossary tooltips for key AI-history figures (`Eliezer Yudkowsky`, `Ray Kurzweil`, `John von Neumann`, `I.J. Good`, `Nick Bostrom`) in room theory content. |
| 2026-03-17 | Updated AI History final summary block to left-aligned text (removed centered layout). |
| 2026-03-17 | Expanded LLM Landscape chapter intro before the 2026 model list with practical vendor-comparison guidance (EN/RU). |
| 2026-03-17 | Added `SDK` glossary tooltip in LLM Landscape pre-model criteria paragraph (EN/RU). |
| 2026-03-17 | Added AGENTS authoring rule forbidding the word `вендор` with required neutral alternatives. |
| 2026-03-17 | Enriched ChatGPT Moment theory Chapter 3 and Chapter 4 "Code Red" section with deeper adoption and search-economics context (EN/RU). |
| 2026-03-17 | Updated Singularity in AI Debates Chapter 2 camp comparison cards to a single-column layout (removed desktop two-column arrangement). |
| 2026-03-19 | Refined Post-ChatGPT Era Chapter 1 to a less stylized, analytical presentation: replaced desktop two-column comparison with single-column flow, removed decorative glow emphasis, and removed italicized closing paragraph style (EN/RU). |
| 2026-03-19 | Added `Anti-Vibecode Frontend Gate (Mandatory)` to AGENTS with 10 pass/fail points, a vibecode-marker removal list, and a deterministic pre-ship checklist for UI/copy quality in both locales. |
| 2026-03-17 | Enriched `scaling-hypothesis`: rewrote theory to 5 chapters, fixed broken task id (10→5), expanded to 10 tasks with all 8 task types (by Claude Code) |
| 2026-03-17 | Enriched `ai-singularity`: expanded theory to 5 chapters, expanded from 6 to 10 tasks adding timeline, scenario, multiple-select (by Claude Code) |
| 2026-03-17 | Rewrote `ai-history` theory with 10 insights from Mitchell (2019): Dartmouth reality, Minsky/Rosenblatt conflict, Simon/Minsky wrong predictions, Deep Blue, LeCun ImageNet quote, AlphaGo kami no itte, adversarial examples, Hofstadter EMI story (by Claude Code) |
| 2026-03-18 | Created room: Guardrails: Safeguarding AI (`llm-guardrails`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini) |
| 2026-03-18 | Created room: AI Regulation in Russia 2026 (`ai-regulation-ru`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini) |
| 2026-03-18 | Created room: EU AI Act: The Global Standard (`ai-regulation-eu`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini) |
| 2026-03-22 | Split monolithic `src/data/rooms.ts` (5,143 lines) into `src/data/rooms/` directory with 27 files: types, paths, metadata, and 22 per-room task files (by Claude Code) |
| 2026-03-22 | Extracted 9 design tokens into Tailwind v4 `@theme` block, replaced ~680 hardcoded hex values across 40+ files with semantic color classes (by Claude Code) |


## Gaps remaining
- 47 data defects across 36 rooms are now visible via `npm run test`. Triage list and fix path in `TESTING.md` → "Known data issues" and `BACKLOG.md` → "Engineering follow-ups uncovered by tests".
- `prompt-evals` is in `ROOMS_METADATA` but has no entry in `ROOM_TASKS` — the room is effectively broken on production until the task file is restored or the metadata is removed.

## Current curriculum coverage
- **AI Foundations module:** Rooms 101 (LLM Landscape), 102 (LLM Mechanics), 103 (Prompting 101), and AI Career Trajectories.
- **Multimodality module:** Room 201 (Native Multimodality), Room 202 (Research & Grounding).
- **Architecture & Adaptation module:** Fine-Tuning & Adaptation.
- **Practice module:** Prompt Evals, AI Image Creation.
- **Ideas module:** ChatGPT Moment, Scaling Hypothesis, AI Singularity debates, AI History.
- **Advanced module:** AI Agents, Deep Search Agents, AI RAG, AI Security, AI Research, AI Alignment.
- **Agent Coding module:** AC-101 Agent Coding Foundations, AC-102 Agentic Coding Tools, AC-103 Prompt Contracts, AC-104 Multi-Agent Collaboration Patterns, AC-201 CLI Tools for Agent Coding, AC-202 Agentic Testing Loop, AC-203 Agentic UI Delivery.
- **Next planned content:** AC-301 Shipping Agentic Features with Guardrails, AC-302 Cost & Latency Control for Agents.
