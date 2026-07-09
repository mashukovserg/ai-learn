# AI-Learn Platform — Comprehensive Project Overview

> Created: 2026-03-16. Share this document for research on similar platforms and competitive landscape.

---

## 1. What it is

**AI-Learn** is a bilingual (Russian / English) interactive learning platform focused exclusively on AI literacy. It combines two proven UX models:

- **TryHackMe-style structure** — self-contained "rooms" with progressive theory + hands-on tasks, difficulty badges, completion status.
- **Duolingo-style gamification** — XP points (+10/task), streaks, level progression, skill radar, instant feedback, success modals with confetti.

**Live demo:** https://ai-learning-platform-murex.vercel.app

**Target audience:** Non-technical and semi-technical learners (product managers, marketers, founders, developers new to AI) who need practical AI literacy — not just theory.

**Primary language market:** Russian-speaking audience (default locale `/ru`), with full English parity.

---

## 2. Learning model

### Rooms
The atomic unit is a **room** — a self-contained module covering one topic. Each room contains:
1. **Theory block** — long-form, chapter-based prose (minimum 120 words/chapter, 2+ paragraphs per chapter) with inline hover tooltips for technical terms.
2. **Task sidebar** — 5–13 interactive tasks that test comprehension of the theory.
3. **Progress tracking** — per-room completion percentage, Completed / In Progress / Not Started badge.

### Learning Paths
Rooms are grouped into **paths** (curated sequences):
- **AI Foundations** — LLM landscape, mechanics, prompting, multimodality, fine-tuning, embeddings, agents, RAG, security, research.
- **Ideas and Debates in AI** — ChatGPT moment, scaling hypothesis, singularity debates, AI history, post-ChatGPT era.
- **Agentic Systems** — AI agents, deep search agents, MCP tool ecosystems, agentic swarm management.
- **Agent Coding** — Agent coding foundations, agentic coding tools, agentic CLI tools, Claude Code agentic loop, Claude Code pro workflow.

### Current room inventory (31 rooms)
| Room | Notes |
|---|---|
| LLM Landscape | Geopolitics, model selection |
| How LLMs Think (LLM Mechanics) | Tokens, context, temperature |
| Prompting 101 | System prompts, few-shot, hallucinations |
| ChatGPT Moment | Mass adoption, ecosystem effects |
| AI Singularity | Pro/contra, risk framing |
| AI History | Timeline, milestones |
| Prompt Evals | Eval sets, metrics, release gates |
| AI Image Creation | Prompts, negative prompts, seed control |
| Research & Grounding | RAG basics, retrieval, citations |
| AI Agents | ReAct loop, MAS, tool-use |
| AI RAG | Chunking, vector search, reranking |
| AI Security | Prompt injection, jailbreaking, defense |
| AI Research | Automated search, synthesis |
| AI Alignment | RLHF, alignment debates |
| Native Multimodality | Vision, audio, real-time |
| Fine-Tuning 101 | LoRA, QLoRA, decision framework |
| Post-ChatGPT Era | Open vs closed, reasoning models, geopolitics |
| Embeddings 101 | Word2Vec → transformers, cosine sim, vector DBs |
| Scaling Hypothesis | Compute/data pillars, emergent abilities |
| Agent Coding Foundations | AC-101, agentic coding intro |
| Agentic Coding Tools | AC-102, tools for agent coding |
| Agentic CLI Tools | AC-201, CLI tools for agents |
| LLM Guardrails | Safeguarding AI outputs |
| AI Regulation (Russia) | Russian AI regulation 2026 |
| AI Regulation (EU) | EU AI Act |
| Deep Search Agents | Multi-step search workflows |
| MCP Tool Ecosystems | Model Context Protocol |
| Agentic Swarm Management | Scale AI swarm concepts |
| Frontier Evals Logic | Benchmark design & test-time compute |
| Claude Code Agentic Loop | Agent loop internals |
| Claude Code Pro Workflow | Advanced Claude Code usage |

---

## 3. Interactive task types (8 types)

| Type | Description |
|---|---|
| `input` | Free-text answer, normalized match |
| `multiple-choice` | Single correct option |
| `multiple-select` | Multiple correct options |
| `sorting` | Drag-to-reorder (Framer Motion) |
| `categorize` | Drag items into labeled buckets |
| `timeline` | Arrange events in chronological order |
| `mentor` | Branching dialogue with AI mentor persona |
| `scenario` | Multi-step decision mission with scoring rubric and final report |

All tasks are bilingual — `en` and `ru` fields required for every visible string.

---

## 4. Gamification & progress system

- **Points:** +10 XP per completed task, accumulated server-side.
- **Streaks:** daily login/activity streak tracked in backend.
- **Levels:** calculated from total points.
- **Progress:** per-room completion % shown on dashboard and rooms list.
- **Success modal:** confetti + stats on room completion.
- **Guest mode:** localStorage fallback (no account required to start).
- **Auth mode:** JWT in httpOnly cookies, PostgreSQL persistence.

---

## 5. Tech stack

### Frontend
| Tech | Version |
|---|---|
| Next.js (App Router) | 16.1.6 |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Framer Motion | ^12 |
| Lucide React | ^0.564 |

**Architecture:** `src/app/[lang]/...` locale routing, middleware-based RU/EN redirect, central room metadata in `src/data/rooms/` (types, paths, metadata, and per-room task files).

### Backend
| Tech | Version |
|---|---|
| Python | 3.12 |
| FastAPI | 0.115 |
| SQLAlchemy (async) | 2.0 |
| PostgreSQL | 16 |
| Alembic | migrations |
| bcrypt + python-jose | auth |
| uv | package manager |

**Architecture:** Repository pattern, async SQLAlchemy, JWT in httpOnly cookies, Docker Compose for local dev.

---

## 6. Content philosophy

- **Pragmatic Instructional Narrative style:** conceptual analogies (scaffolding), conversational tone, contextual justification for why each topic matters, roadmap-oriented structure.
- **High Interactivity:** every room must include at least one "sorting" (drag-to-reorder) or "mentor" (dialogue-based) task to move beyond simple multiple-choice questions and ensure deep engagement.
- **Solvability guarantee:** every task must be answerable from the theory text in both languages. No external lookup required.
- **Terminology system:** `src/data/glossary.ts` + `<Term>` hover tooltip component for technical terms, used inline in theory text.
- **Depth gate:** minimum 120 words / 2 paragraphs per theory chapter.

---

## 7. Current state (as of April 2026)

### Implemented
- 31 rooms fully wired with theory + tasks.
- 4 learning paths with room sequences.
- All 8 task types implemented and in use.
- Backend auth (signup/login/logout), progress persistence, points/streak.
- Bilingual UI and content (RU/EN).
- Vercel deployment (frontend), Docker Compose (local full-stack).
- Settings page (language preference, per-room progress reset).
- Glossary/tooltip system.

### Not yet implemented
- `/${lang}/compete` — competition/challenge mode.
- `/${lang}/leaderboard` — public rankings.
- Prompt Lab (side-by-side model output comparison).
- Adaptive learning (repeat weak topics, spaced repetition).
- Mistake Notebook (failed tasks → adaptive retry).
- AI mentor feedback on free-text answers.
- ~~Guest → auth progress sync.~~ Done (signup-time migration).
- Analytics instrumentation.
- Badges / shareable certificates.
- Community mission sharing.

### Rooms in pipeline
- EvalOps Basics, AI Product Systems, AI Ethics & Bias, AI in Production (Cost & Deployment), Code Generation & AI-Assisted Dev.

---

## 8. Multi-agent development model

The project is built with multiple AI coding agents (Claude Code, Gemini) working in parallel sessions. `AGENTS.md` encodes the operational contract:

- **Mandatory bilingual gate** — no user-facing text change ships in one locale only.
- **Docs sync trigger** — every behavior/route/setup change updates README + PROGRESS.
- **Task data validation gate** — all 8 task types have explicit validation rules before shipping.
- **Task ID sequencing** — sequential IDs with no gaps (progress system depends on this).
- **Chapter depth gate** — minimum word/paragraph counts per chapter.
- **Work log** — agents log completed work in BACKLOG.md with credit tags.

---

## 9. Competitive positioning (self-described)

The platform occupies a specific niche:
- **Topic focus:** AI literacy only (not general tech, not coding bootcamp).
- **Depth:** more interactive and structured than blog posts or YouTube; less academic than university courses.
- **Language:** Russian-first with full English parity — underserved market for quality AI education.
- **Format:** TryHackMe room structure + Duolingo engagement loops, applied to AI concepts.
- **Audience:** practitioners who need to understand AI to make product/business decisions, not just developers.

---

## 10. Project links

| Resource | Location |
|---|---|
| Live demo | https://ai-learning-platform-murex.vercel.app |
| Curriculum | `CURRICULUM.md` |
| Backlog | `BACKLOG.md` |
| Progress log | `PROGRESS.md` |
| Rooms content ideas | `ROOMS_IDEAS.md` |
| Roadmap view mode reference | `ROADMAP_VIEW_MODE.md` |
| Developer guide | `DEVELOPER_GUIDE.md` |
| Agent runtime policy | `AGENTS.md` |
