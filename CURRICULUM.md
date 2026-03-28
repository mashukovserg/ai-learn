# AI Curriculum: Beginner Path

## Path: AI Foundations (Основы AI)
**Goal:** Understand the ecosystem, geopolitics, and core mechanics of modern LLMs.

### Module 1: The Modern AI Landscape
- [x] **Room 101: The LLM Landscape (Ландшафт LLM)** — 26 tasks
  - *Topics:* Original Gangster (OpenAI), Leaderboards (ELO/Chatbot Arena), Geopolitics (USA vs China vs EU), Sovereign AI, model-selection framework, SDK integration maturity.
- [x] **Room 102: How LLMs Think (Как мыслят LLM)** — 4 tasks (includes sorting)
  - *Topics:* Tokens, Context Windows, Next-Token Prediction, Temperature.
- [x] **Room 103: Prompting 101 (Основы промптинга)** — 6 tasks
  - *Topics:* System Prompts, Few-shot/Zero-shot, Hallucination mitigation, Prompt iteration.

### Module 2: Multimodality
- [x] **Room 201: Native Multimodality** — 6 tasks
  - *Topics:* Vision (Image Patches), Audio (Spectrogram tokens), Real-time assistance.
- [x] **Room 202: Research & Grounding** — 6 tasks
  - *Topics:* RAG basics, retrieval quality, source citation and trust calibration.

### Module 3: Architecture & Adaptation
- [x] **Fine-Tuning & Adaptation (Файн-тюнинг и адаптация)** — 12 tasks (includes categorize, scenario, mentor)
  - *Topics:* LoRA, QLoRA, full fine-tune vs prompting vs RAG, dataset preparation, overfitting, catastrophic forgetting, decision framework.
- [x] **Embeddings & Vector Search (Эмбеддинги и векторный поиск)** — 10 tasks (includes timeline, categorize, sorting, scenario)
  - *Topics:* Word2Vec to transformers, cosine similarity, vector databases, chunking strategies, RAG pipeline, re-ranking, hybrid search.

### Module 4: Advanced AI Systems
- [x] **AI Agents (AI-агенты)** — 6 tasks (Enriched)
  - *Topics:* Agency patterns, ReAct loop, MAS (Multi-agent systems), tool-use.
- [x] **AI RAG (Retrieval-Augmented Generation)** — 6 tasks (Enriched)
  - *Topics:* Chunking, Embeddings, Vector Search, Augmentation, Reranking.
- [x] **AI Security (Безопасность ИИ)** — 6 tasks (Enriched)
  - *Topics:* Prompt Injection, Jailbreaking, Defense patterns (Dual-LLM).
- [x] **AI Research (ИИ-исследователь)** — 5 tasks (Enriched)
  - *Topics:* Automated search, synthesis, hypothesis testing.

### Module 5: Practice
- [x] **Prompt Evaluation & Evals** — 6 tasks
  - *Topics:* Eval sets, metrics, release gates for LLM features.
- [x] **AI for Image Creation** — 6 tasks
  - *Topics:* Prompts, composition, negative prompts, seed control, commercial use.

## Path: Ideas and Debates in AI (Идеи и споры об ИИ)
**Goal:** Understand major conceptual debates in AI communities and translate them into practical product decisions.

- [x] **ChatGPT moment** — 6 tasks
  - *Topics:* Interface psychology of mass adoption, viral distribution loops, "Code Red" search economics, ecosystem and governance implications.
- [x] **Scaling Hypothesis (Гипотеза масштабирования)** — 4 tasks
  - *Topics:* Compute/Data/Parameters pillars, Emergent abilities, Chinchilla optimality.
- [x] **Singularity in AI Debates (Сингулярность в AI-дебатах)** — 6 tasks
  - *Topics:* Pro/contra arguments, camp-comparison framework, risk framing, operational implications for teams.
- [x] **AI History (История AI)** — 6 tasks
  - *Topics:* AI timeline, key milestones, key voices in AI-risk discourse, Computer Science to global phenomenon.
- [x] **Singularity in AI Debates** — 6 tasks
- [x] **Post-ChatGPT Era (Пост-ChatGPT эпоха)** — 6 tasks
  - *Topics:* API-access model tradeoffs, open-weight ecosystem dynamics, reasoning models (o1), geopolitics of compute.

## Path in Rollout: Agent Coding (Агентная разработка)
**Goal:** Train learners to deliver production-grade software with coding-agent loops, engineering discipline, and measurable quality gates.

### Module A: Agent Coding Foundations
- [x] **AC-101: Agent Coding Foundations** (`agent-coding-foundations`) — 10 tasks; framing, loop speed, acceptance criteria, guardrails, rollback.
- [ ] **AC-102: Prompt Contracts for Coding Agents** — feature specs, constraints, output contracts.
- [ ] **AC-103: Multi-Agent Collaboration Patterns** — decomposition, context hygiene, branch strategy.

### Module B: Build Loops and Quality
- [ ] **AC-201: Repo Navigation with Coding Agents** — semantic exploration and safe refactor planning.
- [ ] **AC-202: Agentic Testing Loop** — test-first prompting, regression safety, failure triage.
- [ ] **AC-203: Agentic UI Delivery** — responsive implementation, accessibility checks, component consistency.

### Module C: Shipping and Team Operations
- [ ] **AC-301: Shipping Agentic Features with Guardrails** — policy checks, red-team prompts, release gates.
- [ ] **AC-302: Cost & Latency Control for Agents** — routing, caching, budget boundaries, observability.
- [ ] **AC-303: Team Protocols for Agent Coding** — review standards, handoffs, decision logs.

### Module D: Production Reality and Capstone
- [ ] **AC-401: Incident Playbooks for Agentic Features** — rollback, hotfixes, postmortems.
- [ ] **AC-402: Data/Eval Operations for Agent Teams** — eval suites, drift detection, quality dashboards.
- [ ] **AC-499: Agent Coding Capstone** — full feature delivery from brief to production release.

## Notes on availability
- All rooms are served by the dynamic route `src/app/[lang]/rooms/[id]/page.tsx`. Theory content lives in `src/components/theory/`.
- Room progress is persisted via the backend API when authenticated, with localStorage fallback for guests (`useProgress` hook).
- Reading-focused UI baseline was refreshed on 2026-03-24: typography stacks were tuned, `reading-prose` was added for long theory blocks, and shell-level spacing rhythm was unified via `content-shell`.
