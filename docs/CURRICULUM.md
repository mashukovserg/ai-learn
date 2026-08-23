# AI Curriculum: Beginner Path

## Path: AI Foundations (Основы AI)
**Goal:** Understand the ecosystem, geopolitics, and core mechanics of modern LLMs.

### Module 1: The Modern AI Landscape
- [x] **Room 101: The LLM Landscape (Ландшафт LLM)** — 26 tasks
  - *Topics:* Original Gangster (OpenAI), Leaderboards (ELO/Chatbot Arena), Geopolitics (USA vs China vs EU), Sovereign AI, model-selection framework, SDK integration maturity.
- [x] **Room 102: How LLMs Think (Как мыслят LLM)** — 14 tasks (includes sorting, categorize, timeline, mentor, scenario)
  - *Topics:* Tokens and BPE, next-token prediction (logits → Softmax → autoregressive loop), Self-Attention with Q/K/V and multi-head, positional encoding (sinusoidal → RoPE), temperature and decoding strategies (greedy, beam search, top-k, top-p/nucleus, repetition penalty), context windows (growth, KV cache, "Lost in the Middle"), hallucinations.
- [x] **Room 103: Prompting 101 (Основы промптинга)** — 6 tasks
  - *Topics:* System Prompts, Few-shot/Zero-shot, Hallucination mitigation, Prompt iteration.
- [x] **AI Career Trajectories (`ai-career-trajectories`)** — 10 tasks (includes sorting, categorize, mentor, scenario, input); 4 sourced chapters around the interactive career map
  - *Topics:* IC vs research vs management paths, branch points after senior level, skills focus by stage, realistic first-year transition plan into AI.

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
- [x] **Literature Review in the AI Era (Литературный обзор в эпоху ИИ)** — 10 tasks (includes sorting, categorize, scenario, mentor)
  - *Topics:* Rigorous AI-assisted literature review; PICO question framing and sub-query decomposition; inclusion/exclusion criteria before searching; deduplication and two-pass PRISMA-style screening; verifying citations against hallucinated/nonexistent references (resolve DOI → confirm venue/authors/quote); synthesis, evidence tables, and the reproducible audit trail. Two-way cross-linked with `deep-search-agents` (the retrieval engine it builds on).

### Module 6: Open Models
- [x] **Local Models 101 (Локальные модели 101)** — 10 tasks (includes categorize, sorting, scenario, mentor, timeline)
  - *Topics:* Open weights vs open source, privacy/offline/cost tradeoffs, model landscape (Llama, Qwen, Mistral, Gemma, Phi, DeepSeek), first run with Ollama/LM Studio, quantization and VRAM basics, limits and hybrid local+cloud strategy.
- [x] **Llama 3.1 8B (Llama 3.1 8B: открытая модель)** — 7 tasks (includes categorize, scenario, mentor)
  - *Topics:* One-model deep dive: GQA, RoPE scaling, 128K context, Llama Community License, running via Ollama/vLLM/Transformers, VRAM budgets.
- [x] **Local RAG (Локальный RAG: приватный поиск по своим документам)** — 11 tasks (includes sorting, categorize, mentor, scenario)
  - *Topics:* A concrete local-models task: private semantic search over your own archive; index vs query phases (chunking → embeddings → vector DB → retrieval → generation); multilingual embedding choice (multilingual-e5/bge-m3 vs English-only MiniLM, MTEB); same-model rule and reindexing; retrieval-first debugging; sources as the trust mechanism; honest local-vs-cloud limits.

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

### Ideas and Debates additions
- [x] **Search: From Retrieval to Synthesis** (`search-retrieval-to-synthesis`) — 11 tasks; the ranked list as a division of labour, the generative pipeline, the Shah & Bender diagnosis written before ChatGPT, measured verifiability (51.5% / 74.5%) and the generative echo chamber, the economics of sources, and a working verification protocol. Sits right after `chatgpt-moment`: what the break did to one concrete institution. Cross-links to `ai-rag`, `research-grounding`, `deep-search-agents`, `ai-literature-review`.
- [x] **Research in the AI Era: The Abbott Method** (`research-ai-era`) — 10 tasks across 8 types; puzzle vs topic, the history of bottlenecks from scarcity to abundance, controlled vocabulary before the query, three search modes plus citation chaining, Abbott's five source questions applied to an agent's answer, and the researcher as orchestrator. Sits on `agentic-systems` right after `deep-search-agents`, before `ai-literature-review`. Written 2026-07-21, wired up 2026-08-18.
- [x] **Whose Values? The Limits of Alignment** (`ai-alignment-limits`) — 12 tasks; the dual challenge (epistemic + political), Delphi/Moral Machine, RLHF and constitutional AI under the same test, creeping technocracy, the practitioner's question "why should the affected accept this decision?". Pairs with the argument-anatomy method of `ai-existential-risk`.
- [x] **Existential Risk: Anatomy of the Argument** (`ai-existential-risk`) — 12 tasks; Bostrom's four risk classes + maxipok, the basic AI x-risk case as three premises (Grace/AI Impacts), counterarguments by premise, the "proves too much" test. Teaches argument decomposition, not a verdict.

## Path in Rollout: Agent Coding (Агентная разработка)
**Goal:** Train learners to deliver production-grade software with coding-agent loops, engineering discipline, and measurable quality gates.

### Module A: Agent Coding Foundations
- [x] **AC-101: Agent Coding Foundations** (`agent-coding-foundations`) — 10 tasks; framing, loop speed, acceptance criteria, guardrails, rollback.
- [x] **AC-102: Agentic Coding Tools** (`agentic-coding-tools`) — 10 tasks; tool-layer architecture, contracts, role split, release controls, rollback discipline.
- [x] **AC-105: Git as a Safety Net for Agent Work** (`git-safety-net`) — 10 tasks; reading a diff you did not write, signal files (checks/tests/dependencies), commits as units of undo and the staging area, restore/stash/reset/revert/reflog chosen by where the change lives, branch + worktree per task.
- [x] **AC-103: Prompt Contracts for Coding Agents** (`prompt-contracts`) — 10 tasks; feature specs, constraints, output contracts.
- [x] **AC-104: Multi-Agent Collaboration Patterns** (`multi-agent-collaboration`) — 10 tasks; decomposition, context hygiene, branch strategy.

### Module B: Build Loops and Quality
- [x] **AC-201: CLI Tools for Agent Coding** (`agentic-cli-tools`) — terminal workflow discipline, discovery/change/verify loop, quality gates, and rollback routines.
  - *2026-04-05 update:* theory delivery was restructured into shorter practical blocks with explicit CLI loop model, concrete command examples, verify matrix, role split, and execution checklist.
- [x] **Tool companions in the path (no AC codes):** `claude-code-agentic-loop` (the loop on a concrete tool), **`opencode-terminal-agent`** (added 2026-08-22, right after AC-201 — OpenCode as the open-source, model-agnostic counterpart: build/plan permission split, `/init` → AGENTS.md, `/undo` checkpoints, OpenCode Zen stealth models; built on genuine owner-session captures), `mcp-tool-ecosystems`, and `claude-code-pro-workflow` (Advanced tail).
- [x] **AC-202: Agentic Testing Loop** (`agentic-testing-loop`) — 10 tasks; test-first prompting, regression safety, failure triage.
- [x] **AC-205: Release Control for Agent-Written Code** (`agentic-release-control`) — 11 tasks; local run vs shared CI, quality gates and branch protection, who may start checks and merge, reviewing an agent's pull request, canary + feature flags + metric thresholds, rollback and the autonomy budget.
- [x] **AC-206: Build Your Own CI with GitHub Actions** (`github-actions-ci`) — 12 tasks; the clean-machine argument, workflow anatomy (triggers → jobs → steps), cache + parallel jobs + matrix + path filters, secrets and least-privilege run permissions with the "agent does not edit workflows" rule, artifacts and reading a red run.
- [x] **AC-203: Agentic UI Delivery** (`agentic-ui-delivery`) — 10 tasks; responsive implementation, accessibility checks, component consistency.
- [x] **AC-204: Context Engineering 101** (`context-engineering-101`) — 12 tasks; context layers, window economics (ROI test, context rot), knowledge artifacts (rule/fact/procedure/role → constitution/index/skill/agent), hygiene cycle, compaction.

### Module C: Shipping and Team Operations
- [x] **AC-301: Shipping Agentic Features with Guardrails** (`agentic-guardrails`) — 12 tasks; policy as a checkable list (forbidden action + condition + observable signal), the four red-team directions (direct bypass, planted instruction, escalation, leakage), findings becoming an adversarial eval set inside the quality gate, deny-by-default boundaries that never ask the model, and post-release monitoring with precision/recall on false positives.
- [x] **AC-302: Cost & Latency Control for Agents** (`agentic-cost-latency`) — 12 tasks; cost per run rather than per request, TTFT vs total latency and P95 tails, the four levers (prefix caching, parallel independent calls, context trimming, model routing, batch mode) with the price of each, per-run/project/provider ceilings with a circuit breaker, and tracing that attributes spend.
- [ ] **AC-303: Team Protocols for Agent Coding** — review standards, handoffs, decision logs.

### Module D: Production Reality and Capstone
- [ ] **AC-401: Incident Playbooks for Agentic Features** — rollback, hotfixes, postmortems.
- [ ] **AC-402: Data/Eval Operations for Agent Teams** — eval suites, drift detection, quality dashboards.
- [ ] **AC-499: Agent Coding Capstone** — full feature delivery from brief to production release.

## Notes on availability
- All rooms are served by the dynamic route `src/app/[lang]/rooms/[id]/page.tsx`. Theory content lives in `src/components/theory/`.
- Room progress is persisted via the backend API when authenticated, with localStorage fallback for guests (`useProgress` hook).
- Reading-focused UI baseline was refreshed on 2026-03-24: typography stacks were tuned, `reading-prose` was added for long theory blocks, and shell-level spacing rhythm was unified via `content-shell`.
