# AI-Learn Platform — Deep Search Results

> Generated: 2026-04-05. Full codebase + docs analysis.

---

## 1. Current State Summary

**26 rooms live**, full auth + progress backend, gamification, bilingual EN/RU, deployed on Vercel + Railway.

| Layer | Status | Details |
|-------|--------|---------|
| Frontend | Production | Next.js 16 + React 19 + Tailwind v4 + Framer Motion |
| Backend | Production | FastAPI + async SQLAlchemy + PostgreSQL + JWT auth |
| Rooms | 26 live | 8 task types, full EN/RU, theory + interactive tasks |
| Paths | 5 defined | 4 active (beginner, ideas-history, agentic-systems, agent-coding), 1 locked (intermediate) |
| Labs | 2 live | Prompt Compare (Groq), Agent Ops MVP |
| Auth | Complete | Signup/login/logout, JWT cookies, guest→auth progress migration |
| Deploy | Live | Vercel (frontend), Railway (backend + Postgres) |

---

## 2. Architecture Map

```
src/
├── app/[lang]/                    # Next.js App Router (locale-parameterized)
│   ├── page.tsx                   # Dashboard
│   ├── rooms/page.tsx             # Rooms grid (filter by difficulty/status)
│   ├── rooms/[id]/page.tsx        # Dynamic room renderer (theory + tasks)
│   ├── paths/page.tsx             # Learning paths overview
│   ├── paths/[id]/page.tsx        # Path detail (beginner, ideas-history, etc.)
│   ├── labs/page.tsx              # Labs hub
│   ├── labs/prompt-compare/       # Side-by-side model comparison
│   ├── labs/agent-ops/            # Agent Ops MVP
│   ├── settings/page.tsx          # Profile, language, progress reset, skills
│   ├── login/page.tsx             # Auth (signup/login)
│   ├── faq/page.tsx               # FAQ
│   └── globals.css                # Tailwind @theme tokens, design system
│
├── components/
│   ├── AppShell.tsx               # Layout wrapper (sidebar + main)
│   ├── Sidebar.tsx                # Navigation, user info, level
│   ├── Navbar.tsx                 # Search, lang toggle, points/streak
│   ├── tasks/                     # TaskQuestion, TaskSorting, TaskCategorize,
│   │                              # TaskTimeline, TaskScenario, TaskMentor
│   ├── theory/                    # 26 theory components (one per room)
│   ├── RoomCard.tsx               # Room preview card
│   ├── CompletionModal.tsx        # Room completion celebration
│   ├── PromptPlayground.tsx       # Interactive prompt editor
│   ├── SkillsMatrix.tsx           # Radar chart
│   └── Term.tsx                   # Glossary tooltip
│
├── data/
│   ├── rooms/
│   │   ├── metadata.ts            # ROOMS_METADATA — all 26 rooms
│   │   ├── paths.ts               # PATHS_METADATA — 5 learning paths
│   │   ├── types.ts               # LocalizedString, LocalizedTask, etc.
│   │   ├── playgroundConfigs.ts   # Prompt playground configs
│   │   └── tasks/                 # 27 task files (one per room + index)
│   └── glossary.ts                # 40+ terms, EN/RU definitions
│
├── hooks/
│   ├── useAuth.tsx                # Auth context, login/signup/logout, guest sync
│   ├── useProgress.ts             # Room progress (API + localStorage fallback)
│   └── useLang.tsx                # Locale context
│
├── dictionaries/
│   ├── en.json                    # UI strings (navbar, sidebar, modals)
│   └── ru.json
│
└── lib/proxy.ts                   # Locale redirect middleware

backend/
├── app/
│   ├── main.py                    # FastAPI entry, CORS, route mounts
│   ├── api/
│   │   ├── auth/router.py         # POST signup/login/logout
│   │   ├── users/router.py        # GET /users/me
│   │   ├── progress/router.py     # GET/POST/DELETE progress
│   │   ├── labs/router.py         # Model comparison (Groq)
│   │   └── agent/router.py        # Agent Ops CRUD + cycle execution
│   ├── db/
│   │   ├── models/                # UserORM, UserProgressORM, AgentTask/Run/Knowledge
│   │   └── session.py             # Async SQLAlchemy engine
│   └── services/auth.py           # JWT + bcrypt
├── settings.py                    # Env config (DB, JWT, CORS, Groq)
├── alembic/                       # DB migrations
└── pyproject.toml                 # Python deps
```

---

## 3. Room Inventory (26 rooms)

### AI Foundations
| Room | Tasks | Topics |
|------|-------|--------|
| `llm-landscape` | 13 | Market snapshot, vendor eval, ELO, geopolitics |
| `llm-mechanics` | 8 | Tokens, BPE, temperature, context, attention |
| `prompting-101` | 10 | System prompts, few-shot, hallucination mitigation |
| `ai-history` | 10 | GOFAI → ChatGPT, key figures, turning points |
| `prompt-evals` | 6 | Eval sets, metrics, release gates |
| `ai-regulation-ru` | 6 | Russian AI law March 2026, risk levels |

### Ideas & Debates
| Room | Tasks | Topics |
|------|-------|--------|
| `chatgpt-moment` | 10 | Mass adoption, "Code Red", workflow shifts |
| `post-chatgpt-history` | 6 | Open vs closed, compute race, reasoning models |
| `ai-singularity` | 10 | Techno-optimism vs critique, risk framing |
| `scaling-hypothesis` | 10 | Compute/data/params, emergent abilities |
| `ai-research` | 5 | Automated search, synthesis |

### Architecture & Adaptation
| Room | Tasks | Topics |
|------|-------|--------|
| `native-multimodality` | 6 | Vision patches, audio tokens, real-time |
| `research-grounding` | 6 | RAG basics, retrieval, citations |
| `ai-alignment` | 6 | SFT, RLHF, DPO, Constitutional AI |
| `fine-tuning-101` | 12 | LoRA, QLoRA, decision framework |
| `embeddings-101` | 10 | Word2Vec → transformers, vector DBs, chunking |

### Practice & Advanced
| Room | Tasks | Topics |
|------|-------|--------|
| `ai-agents` | 6 | ReAct loop, MAS, tool-use |
| `deep-search-agents` | 6 | Sub-queries, synthesis, citations |
| `ai-rag` | 6 | Vector search, chunking, reranking |
| `ai-security` | 6 | Prompt injection, jailbreaks, defense |
| `ai-image-creation` | 6 | Prompt engineering, composition, seeds |
| `llm-guardrails` | 6 | LlamaGuard, NeMo, validation |
| `ai-regulation-eu` | 6 | EU AI Act, global standards |

### Agent Coding (new path)
| Room | Tasks | Topics |
|------|-------|--------|
| `agent-coding-foundations` | 10 | Goal framing, validation, safe release |
| `agentic-coding-tools` | 10 | Tool contracts, boundaries, guardrails |
| `agentic-cli-tools` | 10 | Terminal workflow, discovery, rollback |

---

## 4. What's Working Well

- **Content depth**: Rooms have substantive theory (1000+ words) with inline glossary tooltips
- **Task variety**: 8 interactive types (input, MC, multi-select, sorting, categorize, timeline, mentor, scenario)
- **Bilingual parity**: 100% EN/RU coverage across UI, content, and tasks
- **Progress system**: Seamless guest→auth migration, real-time progress bars
- **Design system**: Consistent dark theme with emerald accents, Notion-style polish
- **Data architecture**: Clean split — one task file per room, centralized metadata

---

## 5. Gaps & Issues Found

### Pages that exist in sidebar but aren't implemented
- **`/compete`** — sidebar link exists, no page
- **`/leaderboard`** — sidebar link exists, no page

### Functional gaps
- **Search** — UI exists in Navbar, not wired to anything
- **Skills Matrix** — shows placeholder/static data, not derived from actual progress
- **Email verification** — no flow exists
- **Password reset** — no flow exists
- **Profile editing** — can't change name/avatar
- **Notifications** — no system exists

### Content gaps
- **"Intermediate" path** — locked, no rooms assigned
- **Theory fallback** — if theory component missing, shows "coming soon" placeholder
- **Room images** — some rooms may use generic/placeholder images

### Technical debt
- **Log file sprawl** — 30+ `.log` files in project root (backend.log, frontend.log, server_*.log, etc.)
- **No tests** — no test files found in frontend or backend
- **No CI/CD pipeline** — no GitHub Actions or similar

---

## 6. What To Do Next — Prioritized

### Tier 1: High-impact, low-effort (do first)

**A. Clean up log files**
- 30+ `.log` files in project root serve no purpose in the repo
- Add `*.log` to `.gitignore`, delete stale logs

**B. Wire up Search**
- Navbar has search UI already — connect it to room metadata filtering
- Client-side fuzzy search over `ROOMS_METADATA` (title, description, category)

**C. Make Skills Matrix real**
- Currently static — should derive from completed room categories
- Map rooms → skill categories, calculate % from progress data

**D. Build `/compete` page**
- Sidebar link already exists — users click and get nothing
- Even a simple "coming soon" page with a concept preview is better than a dead link

### Tier 2: High-impact, medium-effort (next sprint)

**E. Scenario Missions expansion**
- `TaskScenario` component exists but only used in a few rooms
- Create dedicated scenario-heavy rooms (support bot, recruiter assistant, research helper per SERVICE_IMPROVEMENTS.md)

**F. Mistake Notebook / Adaptive Review**
- Track failed task IDs per user (backend already has progress infra)
- Generate retry sessions from failed tasks
- High retention impact

**G. AI Mentor Feedback on open answers**
- Extend `TaskQuestion` input type to accept free-text + AI-scored rubric feedback
- Use Groq API (already integrated) for scoring

### Tier 3: Content expansion

**H. Agent Coding path completion** (9 more rooms planned)
- AC-103: Prompt Contracts for Coding Agents
- AC-104: Multi-Agent Collaboration Patterns
- AC-202: Agentic Testing Loop
- AC-203: Agentic UI Delivery
- AC-301–303, AC-401–402, AC-499

**I. New standalone rooms**
- AI Ethics & Bias
- AI in Production (pricing, latency, caching, observability)
- Code Generation & AI-Assisted Dev
- EvalOps Basics (Room 203)

### Tier 4: Platform maturity

**J. Testing & CI**
- Add at least smoke tests for critical paths (auth, progress, room rendering)
- Set up GitHub Actions for build + lint + test

**K. Auth improvements**
- Email verification flow
- Password reset flow
- OAuth (Google/GitHub) — reduces signup friction

**L. Social/community features**
- Leaderboard (backend has points data, just needs UI)
- Badges / shareable completion certificates
- Community mission sharing

---

## 7. Deep Search Prompt Template

Use this prompt for targeted research on any specific area:

```
Analyze the AI-Learn platform (ai-learning-platform-murex.vercel.app) focusing on [AREA].

Context: TryHackMe-style AI education platform, 26 rooms, bilingual RU/EN,
Next.js 16 + FastAPI + PostgreSQL. Target audience: non-technical/semi-technical
professionals needing practical AI literacy.

Research:
1. [Specific question about AREA]
2. [Competitive analysis for AREA]
3. [Best practices from similar platforms]
4. [Implementation recommendations]

Output: Actionable recommendations with effort estimates and priority ranking.
```

---

## 8. Key Files Quick Reference

| What | Where |
|------|-------|
| Room metadata | `src/data/rooms/metadata.ts` |
| Room tasks | `src/data/rooms/tasks/<room-id>.ts` |
| Learning paths | `src/data/rooms/paths.ts` |
| Theory components | `src/components/theory/<RoomName>Theory.tsx` |
| Dynamic room page | `src/app/[lang]/rooms/[id]/page.tsx` |
| Design tokens | `src/app/[lang]/globals.css` (@theme) |
| Glossary | `src/data/glossary.ts` |
| UI translations | `src/dictionaries/{en,ru}.json` |
| Auth hook | `src/hooks/useAuth.tsx` |
| Progress hook | `src/hooks/useProgress.ts` |
| Backend API | `backend/app/api/*/router.py` |
| DB models | `backend/app/db/models/` |
| Env config | `backend/settings.py` |
| Agent rules | `AGENTS.md` |
| Dev guide | `DEVELOPER_GUIDE.md` |
| Backlog | `BACKLOG.md` / `BACKLOG.ru.md` |
| Progress log | `PROGRESS.md` / `PROGRESS.ru.md` |
