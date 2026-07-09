# Image Generation Prompts — Rooms Missing Unique Art

> Follow the spec in `IMAGE_GENERATION_BRIEF.md`:
> - Resolution: 1536x1024 (3:2), PNG
> - Dark cinematic mood, charcoal/black base + emerald accents
> - No text, no logos, no photoreal faces
> - Clean focal point in center-left (card cropping)

## Master style prompt (prepend to every generation)

```
cinematic digital illustration, dark graphite background, emerald accent lighting, volumetric glow, high contrast, soft atmospheric depth, clean composition, modern AI infrastructure aesthetic, subtle gradients, professional product artwork, no text, no logo, no watermark, 3:2 landscape
```

## Negative prompt (use with every generation)

```
text, letters, caption, logo, watermark, clutter, low contrast, oversaturated neon, cartoon style, noisy background, blurry details, distorted geometry, photoreal face
```

---

## 1) AI Agents
**Save as:** `public/images/ai-agents.png`
**Used by:** AI Agents, Agent Coding Foundations, MCP & Tool Ecosystems

```
autonomous AI agent orchestrating multiple tools and services, central glowing node with branching action paths radiating outward, each path ending in abstract tool icons — search lens, code terminal, database cylinder, API connector, robotic hands reaching into structured workflows, ReAct loop visualization as a luminous cycle, multi-agent network topology in the background, premium UI hero image
```

---

## 2) AI Alignment
**Save as:** `public/images/ai-alignment.png`

```
human-AI alignment visualization, two parallel signal streams — one organic and warm one digital and precise — converging into a shared trajectory, abstract reward model as a glowing prism filtering raw outputs into refined responses, RLHF feedback loop as orbiting arcs of light, guardrail boundaries as subtle emerald barriers, balance and calibration motif, premium UI hero image
```

---

## 3) AI RAG
**Save as:** `public/images/ai-rag.png`

```
retrieval-augmented generation pipeline, document corpus as layered translucent pages flowing into a vector embedding space of floating luminous points, semantic search beams connecting query node to relevant clusters, retrieved chunks assembling into a coherent response stream, grounding anchors linking output to source documents, knowledge pipeline aesthetic, premium UI hero image
```

---

## 4) AI Research
**Save as:** `public/images/ai-research.png`

```
AI-powered research synthesis, academic paper abstracts flowing as data streams into a central analysis engine, citation graph with glowing interconnected nodes, sub-query branches exploring different knowledge domains, synthesis funnel distilling multiple sources into structured insights, magnifying lens over knowledge clusters, scholarly yet futuristic, premium UI hero image
```

---

## 5) AI Security
**Save as:** `public/images/ai-security.png`
**Used by:** LLM Security, Guardrails

```
adversarial attacks on large language models, prompt injection visualized as a corrupted input stream penetrating a model shield, jailbreak attempts as fracture patterns in a protective barrier, defense layers — input validation firewall output filtering scanner red-team probe detector — stacked as concentric emerald rings, cat-and-mouse tension between attacker probes and defender walls, premium UI hero image
```

---

## 6) Research & Grounding
**Save as:** `public/images/research-grounding.png`

```
grounding AI responses in verified sources, floating answer bubble tethered by citation chains to solid evidence blocks below, trust calibration gauge from hallucination red to grounded green, retrieval quality spectrum, source verification checkmarks on connected documents, factual anchoring motif, clean layered depth, premium UI hero image
```

---

## 7) Fine-Tuning 101
**Save as:** `public/images/fine-tuning-101.png`

```
model fine-tuning and adaptation process, base foundation model as a large crystalline structure being reshaped by targeted data streams, LoRA adapters as thin luminous layers wrapping around the core weights, training data pipeline feeding curated examples, loss curve descending smoothly on a floating monitor, overfitting warning zone as a faint red boundary, surgical precision aesthetic, premium UI hero image
```

---

## 8) Embeddings 101
**Save as:** `public/images/embeddings-101.png`

```
high-dimensional vector embedding space, words and concepts as glowing particles clustered by semantic similarity, nearest-neighbor search beams connecting a query point to its closest matches, dimensionality reduction visualization — dense cloud projecting onto a 2D plane, cosine similarity arcs between related vectors, chunking grid overlay dividing a document into segments, geometric and mathematical beauty, premium UI hero image
```

---

## 9) Agentic Coding Tools
**Save as:** `public/images/agentic-coding-tools.png`

```
coding agent tool layer architecture, central agent brain connected to a ring of specialized developer tools — code editor terminal git branch tree test runner linter deployment pipeline, tool contracts as glowing interface boundaries between agent and tools, sandboxed execution environments as contained chambers, safe boundaries and guardrail indicators, structured engineering aesthetic, premium UI hero image
```

---

## 10) Agentic CLI Tools
**Save as:** `public/images/agentic-cli-tools.png`

```
terminal-first agentic workflow, dark command-line interface with cascading green-on-black commands, discovery phase scanning repository file tree, change phase editing code with diff highlights, verify phase running quality gate checks with pass-fail indicators, rollback arrow looping back to safe state, disciplined engineering cycle in a terminal environment, monospace typography aesthetic without readable text, premium UI hero image
```

---

## 11) AI Regulation RU
**Save as:** `public/images/ai-regulation-ru.png`

```
Russian AI regulation framework visualization, legislative document layers with risk classification tiers — minimal limited high unacceptable, compliance checkpoints as gated barriers, AI system marking and labeling requirements as tag icons, regulatory scales balancing innovation against safety, formal structured governance aesthetic with Cyrillic-inspired geometric patterns without actual text, premium UI hero image
```

---

## 12) AI Regulation EU
**Save as:** `public/images/ai-regulation-eu.png`

```
EU AI Act regulatory framework, tiered risk pyramid — prohibited high-risk limited-risk minimal-risk — with each tier glowing at different intensity, conformity assessment pipeline as a structured pathway through compliance gates, European governance motifs — stars arranged in a circle subtly integrated, penalty scales and audit checkpoints, formal institutional aesthetic with blue undertones blending into the emerald accent palette, premium UI hero image
```

---

## 13) Deep Search Agents
**Save as:** `public/images/deep-search-agents.png`

```
agentic deep search process, central query node decomposing into multiple parallel sub-query branches, each branch diving into different knowledge sources — web pages databases academic papers APIs, source verification filters checking credibility at each node, synthesis funnel merging validated fragments into a citation-backed final answer, search depth layers going progressively deeper, investigative intelligence aesthetic, premium UI hero image
```

---

## 14) MCP & Tool Ecosystems
**Save as:** `public/images/mcp-tool-ecosystems.png`

```
Model Context Protocol architecture, central AI model connected through a universal protocol layer to a diverse ecosystem of external tools and services, MCP server nodes arranged in a constellation — file system database web browser code executor calendar email, standardized connector interfaces as matching plug-socket pairs, transport channels as luminous data highways, open standard interoperability motif, protocol-first infrastructure aesthetic, premium UI hero image
```

---

## Workflow

1. Generate 4-6 variants per room using master style + room prompt + negative prompt
2. Pick the best based on thumbnail readability and dark-UI compatibility
3. Export as PNG at 1536x1024
4. Place in `public/images/`
5. Update `src/data/rooms/metadata.ts` image paths for rooms that get new filenames
6. Verify: `sips -g pixelWidth -g pixelHeight public/images/<file>.png`
