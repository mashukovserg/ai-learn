# AI Curriculum: Beginner Path

## Path: AI Foundations (Основы AI)
**Goal:** Understand the ecosystem, geopolitics, and core mechanics of modern LLMs.

### Module 1: The Modern AI Landscape
- [x] **Room 101: The LLM Landscape (Ландшафт LLM)**
  - *Topics:* Original Gangster (OpenAI), Leaderboards (ELO/Chatbot Arena), Geopolitics (USA vs China vs EU), Sovereign AI.
- [x] **Room 102: How LLMs Think (Как мыслят LLM)**
  - *Topics:* Tokens, Context Windows, Next-Token Prediction logic.
- [x] **Room 103: Prompting 101 (Основы промптинга)**
  - *Topics:* System Prompts, Few-shot/Zero-shot, Hallucination mitigation.

### Module 2: Multimodality
- [x] **Room 201: Native Multimodality**
  - *Topics:* Vision (Image Patches), Audio (Spectrogram tokens), Real-time assistance.
- [ ] **Room 202: Research & Grounding**
  - *Topics:* NotebookLM, RAG basics, Custom Podcast generation.

## Notes on availability
- Rooms 103 and 201 have implemented content pages, but in `/${lang}/rooms` they are currently marked as locked/coming-soon.
- Room completion/progress is currently session-only and not persisted between reloads.

## Where full lesson texts are
- **In the app (rendered lessons):**
  - `/${lang}/rooms/llm-landscape` (served by `src/app/[lang]/rooms/[id]/page.tsx` for `id=llm-landscape`)
  - `/${lang}/rooms/llm-mechanics` (`src/app/[lang]/rooms/llm-mechanics/page.tsx`)
  - `/${lang}/rooms/prompting-101` (`src/app/[lang]/rooms/prompting-101/page.tsx`)
  - `/${lang}/rooms/native-multimodality` (`src/app/[lang]/rooms/native-multimodality/page.tsx`)
- **Markdown lesson drafts/source notes:**
  - `obsidian-lessons/LLM Landscape (EN).md`
  - `obsidian-lessons/LLM Landscape (RU).md`
  - `obsidian-lessons/How LLMs Think (EN).md`
  - `obsidian-lessons/How LLMs Think (RU).md`
