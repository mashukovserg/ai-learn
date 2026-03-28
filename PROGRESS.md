# Project Progress Snapshot

Last synced with codebase: **2026-03-28**

## Implementation status
- **Core app shell:** Done (`AppShell`, `Sidebar`, `Navbar`).
- **Localization:** Done (`ru`/`en` routes + `proxy.ts` redirect to `/ru`).
- **Room engine:** Done (`TaskQuestion` supports input, single-choice, multi-select; `TaskSorting` supports drag-to-reorder; `TaskMentor` supports dialogue).
- **Progress persistence:** Done (`useProgress` hook — API-backed when authenticated, localStorage fallback for guests, and signup-time guest progress sync to server).
- **Backend:** Done (FastAPI + PostgreSQL, JWT auth, user accounts, server-side progress, points/streak tracking).
- **Authentication:** Done (signup/login/logout, JWT in httpOnly cookies, login page at `/${lang}/login`).
- **Room pages implemented:** 24
  - `/${lang}/rooms/[id]` is fully wired for: `agent-coding-foundations`, `llm-landscape`, `llm-mechanics`, `prompting-101`, `chatgpt-moment`, `post-chatgpt-history`, `ai-history`, `scaling-hypothesis`, `ai-singularity`, `prompt-evals`, `ai-image-creation`, `research-grounding`, `ai-agents`, `deep-search-agents`, `ai-rag`, `ai-security`, `ai-research`, `ai-alignment`, `native-multimodality`, `fine-tuning-101`, `embeddings-101`, `llm-guardrails`, `ai-regulation-ru`, `ai-regulation-eu`.
  - Newly added AC-101 room: `agent-coding-foundations` (10 tasks across all supported task types, EN/RU).
- **Learning paths UI:** Done (`/${lang}/paths`, `/${lang}/paths/beginner`, `/${lang}/paths/ideas-history`, `/${lang}/paths/agentic-systems`, `/${lang}/paths/agent-coding`).
- **Profile page (`/${lang}/settings`):** Done (language preference, per-room progress reset, embedded Skills Matrix).
- **Rooms list page:** Shows real progress status (Completed / In Progress / Not Started) with compact difficulty/status metadata in card content (image overlays removed).
- **Dashboard:** Shows real completed room count and progress bar. Welcome line shows actual username when logged in.
- **Deployment:** Live on Vercel at [ai-learning-platform-murex.vercel.app](https://ai-learning-platform-murex.vercel.app).
- **UI consistency:** Green accent styling is now consistent across primary flows (Dashboard, Paths, Rooms, active sidebar routes).

## Platform milestones
| Date | Milestone |
|------|-----------|
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
- Sidebar has links to `compete`, `leaderboard`, but pages are not implemented.

## Current curriculum coverage
- **AI Foundations module:** Rooms 101 (LLM Landscape), 102 (LLM Mechanics), 103 (Prompting 101).
- **Multimodality module:** Room 201 (Native Multimodality), Room 202 (Research & Grounding).
- **Architecture & Adaptation module:** Fine-Tuning & Adaptation.
- **Practice module:** Prompt Evals, AI Image Creation.
- **Ideas module:** ChatGPT Moment, Scaling Hypothesis, AI Singularity debates, AI History.
- **Advanced module:** AI Agents, Deep Search Agents, AI RAG, AI Security, AI Research, AI Alignment.
- **Agent Coding module:** AC-101 Agent Coding Foundations.
- **Next planned content:** AC-102 Prompt Contracts, AC-103 Multi-Agent Collaboration Patterns, EvalOps Basics.
