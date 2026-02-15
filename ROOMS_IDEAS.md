# AI-Learn: Room Ideas & Interactive Tasks
*Based on Andrei Karpathy's "How I Use LLMs"*

## Implemented in codebase

### Room 1: The LLM Landscape (Ландшафт LLM)
**Objective:** Understand the ecosystem, evaluation methods, and geopolitical competition.

### Content Structure
1. **The Incumbents:** History of ChatGPT/OpenAI.
2. **Evaluation:** ELO ratings and the Chatbot Arena (lmarena.ai).
3. **Geopolitics:**
   - USA: Capital & Compute (Proprietary models).
   - China: Efficiency (DeepSeek, Qwen).
   - Europe: Regulation & Openness (Mistral).
4. **Sovereign AI:** The need for national independence in models.

### Tasks
- **Input Task:** Identify OpenAI as the creator of ChatGPT.
- **Multiple Choice:** Explain the logic of ELO ranking (Winner ↑, Loser ↓).
- **Multiple Select:** Identify non-US models (DeepSeek, Mistral, Qwen, Yi, Jamba).
- **Input Task:** Define "Sovereign AI" (Суверенный ИИ).

---

### Room 2: How LLMs Think (Как мыслят LLM)
**Objective:** Demystify the "black box" of next-token prediction.

### Ideas
- **Interactive Tokenizer:** Show how a sentence like "I love AI" is split into tokens.
- **Prediction Game:** Give 3 tokens and have the user guess the most likely next token.
- **Context Window Challenge:** Show how a model loses information when the window is exceeded.

---

### Room 3: Prompting 101 (Основы промптинга)
**Objective:** Learn prompt structure and reliable production prompting habits.

### Content Structure
1. Prompt blocks: Role, Context, Task, Constraints, Format.
2. Zero-shot vs Few-shot trade-offs.
3. Hallucination controls (source-bounded answers, confidence, refusal criteria).
4. Prompt iteration loop (metric -> baseline -> change -> compare).

### Tasks
- **Multiple Choice:** System prompt as highest-level behavior control.
- **Multiple Select:** Reliability factors for production prompts.
- **Input Task:** Define few-shot prompting.
- **Multiple Choice:** Verifiability patterns (citations/confidence).

---

### Room 4: Native Multimodality (Нативная мультимодальность)
**Objective:** Understand how text, vision, and audio are processed in one model pipeline.

### Content Structure
1. Native multimodality concept.
2. Vision tokens and image patches.
3. Audio spectrogram/token pipeline.
4. Practical product stack: ingest, route, validate, fallback.

### Tasks
- **Multiple Choice:** Image representation as vision tokens/patches.
- **Input Task:** Spectrogram definition.
- **Multiple Select:** Real benefits of multimodal models.
- **Multiple Choice:** Latency drivers in multimodal requests.

---

## Future room ideas
- **Room 202: Research & Grounding**
  - RAG basics, retrieval quality, source citation and trust calibration.
- **Room 203: EvalOps Basics**
  - Product-specific eval sets, scoring, and regression checks.
- **Room 301: AI Product Systems**
  - Model routing, fallback strategy, cost controls, and incident response.
