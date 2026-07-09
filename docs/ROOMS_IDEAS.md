# AI-Learn: Room Ideas & Interactive Tasks
*Based on Andrei Karpathy's "How I Use LLMs"*

## Implemented in codebase (18 rooms)

### Room 101: The LLM Landscape (Ландшафт LLM) — 13 tasks
**Objective:** Understand the ecosystem, evaluation methods, and geopolitical competition.
- The Incumbents, ELO/Chatbot Arena, Geopolitics (USA/China/EU), Sovereign AI, Model Selection Framework, Vendor comparison.
- Task types: input, multiple-choice, multiple-select, sorting, categorize, scenario.

### Room 102: How LLMs Think (Как мыслят LLM) — 8 tasks
**Objective:** Demystify the "black box" of next-token prediction.
- Tokens, Context Windows, Next-Token Prediction, Temperature.
- Task types: input, multiple-choice, sorting.

### Room 103: Prompting 101 (Основы промптинга) — 5 tasks
**Objective:** Learn prompt structure and reliable production prompting habits.
- Prompt blocks (Role, Context, Task, Constraints, Format), Zero-shot vs Few-shot, Hallucination controls, Prompt iteration loop.
- Task types: input, multiple-choice, multiple-select.

### AI History (История AI) — 4 tasks
**Objective:** Trace how AI moved from a CS subfield to a global phenomenon.
- Task types: input, multiple-choice, timeline.

### ChatGPT Moment — 6 tasks
**Objective:** Understand the 2022 inflection point that moved AI into mass user workflows and institutional agendas.
- Task types: input, multiple-choice, multiple-select.

### Scaling Hypothesis (Гипотеза масштабирования) — 5 tasks
**Objective:** Understand why adding more compute and data makes models smarter.
- The Three Pillars (Compute, Data, Parameters), Emergent abilities, Chinchilla optimality, Balance between size and training data.
- Task types: input, multiple-choice, sorting.

### Singularity in AI Debates (Сингулярность в AI-дебатах) — 6 tasks
**Objective:** Analyze singularity as a debated idea and extract practical risk-management implications.
- Task types: input, multiple-choice, multiple-select.

### Native Multimodality (Нативная мультимодальность) — 3 tasks
**Objective:** Understand how text, vision, and audio are processed in one model pipeline.
- Vision tokens/image patches, Audio spectrogram/token pipeline, Practical product stack.
- Task types: input, multiple-choice.

### Prompt Evaluation & Evals — 6 tasks
**Objective:** Learn to build eval sets, choose metrics, and define release gates for LLM features.
- Task types: input, multiple-choice, multiple-select.

### AI for Image Creation — 6 tasks
**Objective:** Master prompts, composition, negative prompts, seed control, and commercial-use practices.
- Task types: input, multiple-choice, multiple-select.

### Research & Grounding (`research-grounding`) — 6 tasks
**Objective:** Understand how to ground LLM outputs in reliable sources and apply research-backed practices.
- Task types: multiple-choice, sorting, input.

### AI Alignment (`ai-alignment`) — 6 tasks
**Objective:** Explore alignment techniques and the challenge of making AI systems act in accordance with human intent.
- Task types: input, multiple-choice, multiple-select.

### AI Agents (`ai-agents`) — 3 tasks
**Objective:** Understand the fundamentals of autonomous AI agents and their architectures.
- Task types: input, multiple-choice.

### Deep Search Agents (`deep-search-agents`) — 6 tasks
**Objective:** Learn how search-augmented agents retrieve and synthesize information at scale.
- Task types: input, multiple-choice, sorting.

### AI RAG (`ai-rag`) — 2 tasks
**Objective:** Understand Retrieval-Augmented Generation and how to combine search with generation.
- Task types: input, multiple-choice.

### AI Security (`ai-security`) — 2 tasks
**Objective:** Learn about prompt injection, jailbreaks, and defensive patterns for LLM applications.
- Task types: input, multiple-choice.

### AI Research (`ai-research`) — 5 tasks
**Objective:** Explore how AI is transforming scientific research and discovery.
- Task types: input, multiple-choice.

### Fine-Tuning & Adaptation (`fine-tuning-101`) — 12 tasks
**Objective:** Understand LoRA, QLoRA, full fine-tune vs prompt engineering tradeoff, when to fine-tune vs use RAG, dataset preparation, overfitting risks.
- Task types: input, multiple-choice, multiple-select, categorize, scenario, mentor.

---

## Future room ideas

- **Room 203: EvalOps Basics**
  - Product-specific eval sets, scoring, and regression checks.
- **Room 301: AI Product Systems**
  - Model routing, fallback strategy, cost controls, and incident response.
- **AI Ethics & Bias** (`ai-ethics-bias`)
  - Path: ideas-history. Topics: training data bias, representation harm, fairness metrics (demographic parity, equalized odds), case studies (hiring, criminal justice), responsible deployment checklist.
  - Task types: scenario (deploying a hiring AI), categorize (bias types), mentor (ethical dilemma discussions).
- **AI in Production: Cost & Deployment** (`ai-production`)
  - Path: intermediate. Topics: token pricing, latency budgets, caching, model routing, monitoring/observability, SLAs.
  - Task types: scenario (optimize API costs), categorize (optimization strategies by impact), timeline (production pipeline stages).
- **Code Generation & AI-Assisted Development** (`ai-code-generation`)
  - Path: agentic-systems. Topics: Copilot/Cursor/Claude Code patterns, code review with AI, test generation, security scanning, prompt patterns for code.
  - Task types: scenario (debug with AI tools), categorize (tasks by AI-readiness), mentor (when to trust AI code).
- **Embeddings & Vector Search** (`embeddings-101`)
  - Path: intermediate. Topics: what are embeddings, semantic similarity, vector databases, similarity metrics, chunking strategies, embedding model selection.
  - Task types: categorize (vector DB features), timeline (TF-IDF to transformer embeddings), sorting (chunking strategies).
