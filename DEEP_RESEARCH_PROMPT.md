# Deep Research Prompt: Competitive Landscape for AI-Learn Platform

Use this prompt with Claude Deep Research (or similar) to map the competitive landscape and gather strategic insights.

---

## Prompt

I am building **AI-Learn** — a bilingual (Russian/English) interactive platform for AI literacy education. Below is its profile. Please research the competitive landscape, identify similar platforms, and provide strategic insights.

---

### Product profile

**AI-Learn** is a web-based learning platform that teaches AI concepts (LLMs, RAG, agents, fine-tuning, embeddings, security, alignment, etc.) through:
- Self-contained "rooms" (TryHackMe-style) with progressive theory + hands-on tasks.
- Duolingo-style gamification: XP points, streaks, levels, instant feedback, success modals.
- 8 interactive task types: free-text input, multiple-choice, multiple-select, drag-to-sort, drag-to-categorize, timeline ordering, branching mentor dialogue, scenario/decision missions with scoring rubrics.
- Full bilingual content (Russian + English) — Russian is the primary market.
- Guest mode (no account needed) + authenticated mode with server-side progress persistence.
- Tech stack: Next.js 16 / React 19 / TypeScript / Tailwind CSS / FastAPI / PostgreSQL.
- 19 rooms live covering: LLM landscape & mechanics, prompting, multimodality, fine-tuning, embeddings, RAG, agents, AI security, AI research, alignment, image generation, AI history, scaling hypothesis, ChatGPT moment, singularity debates, post-ChatGPT era.
- Target audience: non-technical and semi-technical practitioners (PMs, founders, marketers, business analysts) who need AI literacy for professional decisions — not primarily developers.

---

### Research questions

#### 1. Competitive landscape
- What platforms currently offer interactive AI/ML education in a similar format (gamified, room/module-based, hands-on tasks)?
- Which platforms specifically target non-technical or semi-technical audiences for AI literacy (not coding bootcamps)?
- Are there platforms with similar bilingual or non-English-first positioning, especially targeting Russian-speaking or Eastern European markets?
- How do existing platforms (e.g. TryHackMe, Coursera, fast.ai, DeepLearning.AI, Brilliant.org, Kaggle Learn, School of AI, Aimaster, Skillfactory, Stepik, Yandex Practicum) compare on: depth of interactivity, gamification, topic focus, audience, language support?

#### 2. Market gaps
- What gaps exist in AI literacy education for non-technical audiences?
- Which AI topics are underserved in existing interactive learning platforms?
- Is there a gap in Russian-language AI education that goes beyond translation of English content?

#### 3. Content and pedagogy benchmarks
- What learning formats (video, interactive exercises, projects, peer learning) have the highest completion rates in online AI education?
- What gamification mechanics are most effective for technical/semi-technical adult learners?
- How do leading platforms structure progressive curricula for AI topics (beginner → practitioner)?

#### 4. Monetization models
- What monetization models are used by comparable platforms (subscription, per-course, freemium, B2B/enterprise, certification)?
- What is the price point range for AI literacy courses/platforms in the consumer and B2B segments?
- Are there examples of successful freemium → paid conversion in similar platforms?

#### 5. Strategic opportunities
- Given the platform's current state (19 rooms, bilingual, gamified, practitioner-focused), what are the highest-leverage next content or feature investments?
- What partnerships or distribution channels are most relevant for reaching Russian-speaking AI practitioners?
- Are there analogous platforms in other technical domains (cybersecurity, data science) that have demonstrated successful growth patterns that AI-Learn could model?

---

### Output format requested

1. **Competitive matrix** — table comparing 8–12 most relevant platforms across: interactivity level, gamification, audience, language, topic focus, monetization, approximate user scale.
2. **Market gap analysis** — 3–5 specific underserved segments or topic areas with evidence.
3. **Pedagogy benchmarks** — top 3–5 findings on what works in interactive technical education for adults.
4. **Monetization recommendations** — ranked options with rationale for this platform's profile.
5. **Strategic priorities** — top 5 actionable recommendations for the next 6 months given the current product state.

---

### Context for relevance filtering

- Exclude: pure video courses with no interactivity, university degree programs, general-purpose coding bootcamps, platforms where AI is a small subset of a broader curriculum.
- Include: platforms with significant interactive exercise components, any gamified learning platform for technical topics, any platform specifically targeting AI literacy for non-developers.
- Prioritize sources from 2024–2026 given how rapidly the AI education market is evolving.
