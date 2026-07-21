# Room Development: Logic, Checklist, and Queue

Last synced with registry: **2026-07-12** (40 rooms in `ROOMS_METADATA`, 39 wired; `prompt-evals` lacks a task file).

This is the single authoritative document for deciding **which room to build next** and **how to add a room correctly**. It supersedes the idea list in `ROOMS_IDEAS.md` (now a pointer stub) and the 4-step "Adding a New Room" summary in `CLAUDE.md`. Gates referenced here live in [`AGENTS.md`](AGENTS.md) — this document does not replace them.

## How agents use this document

1. Pick work from the **queue** top-down within the highest open priority band. Do not start a P2 room while a P0 item is open.
2. Every new room idea enters the queue (see "Idea intake") **before** any code is written — including ideas from the project owner: add the row first, then build.
3. When a room ships, in the same session: move its queue row to "Shipped", update the "Last synced" date above, and run the docs sync from the checklist.
4. If you deviate from the queue (owner asked for something else), still record the built room in "Shipped" with a note.

## Priority logic

Work bands, in order:

- **P0 — broken or promised.** Anything in `ROOMS_METADATA` without a task file (renders a broken room), and the tracked data defects blocking the test gate (`BACKLOG.md` punch lists). Nothing new gets built while a room is broken in production.
- **P1 — roadmap commitments.** Rooms with an explicit commitment in [`ROADMAP_3M.md`](ROADMAP_3M.md). Today: the six Agent Coding rooms (canonical numbering below).
- **P2 — thin spots.** Categories with only 2 rooms (today: Security, Open Models) and CURRICULUM modules with only 2 rooms (today: Module 2 Multimodality, Module 5 Practice — Modules 3/6 grow via queue entries already planned). A thin spot is an argument, not an order: pick the thin spot whose audience overlaps the strongest existing path.
- **P3 — idea backlog.** Everything else in the queue.

### Selection heuristics (apply within a band)

1. **Strengthen before you widen.** Prefer adding to an existing path/category over opening a new one. **No new category without at least 2 rooms planned for it** (precedent: «Открытые модели» opened as a pair).
2. **Cluster pattern.** Pair a broad intro with a deep dive: `local-models-101` + `llama-3-1-8b`, `research-ai-era` + `ai-literature-reviews`, planned `prompt-evals` + `evalops-basics`. When an idea is too big for one room, design the cluster up front and note it in the queue.
3. **Fact-decay check.** Build rooms on durable concepts (mechanisms, tradeoffs, workflows). Perishable specifics — prices, benchmark numbers, model names of the season — go into theory callouts with a date and an inline citation (see `AGENTS.md` → Inline citation format), never into task answers. Specifically: (a) use **model families, not versions** (GPT / Claude / Gemini / Llama / Mistral / Qwen / DeepSeek); keep concrete versions only in dated, source-linked callouts or citation labels. (b) **No categorical "best vendor = X" rankings**, and never as a task correct-answer — frame as "often among the leaders" and route learners to their own eval set. Precedent: the `llm-landscape` durability refactor (2026-07-16).
4. **Difficulty balance.** Check the target path's difficulty spread before choosing; a path of all-Beginner rooms needs an Intermediate capstone more than a fifth intro.
5. **pathIds at idea stage.** Every queue row names its target `pathIds`. A room without a path is invisible on path pages — see the coherence rules below.

## Canonical room-addition checklist

The full procedure. `CLAUDE.md`'s short list is a summary of steps 3–6; this list is the authority.

1. **Duplication check.** Grep `src/components/theory/` and `src/data/rooms/tasks/` for the topic's key terms (EN + RU). If substantial overlap exists — extend the existing room or design a cluster instead of duplicating.
2. **Placement.** Assign `pathIds` (mandatory, ≥1 unlocked path), category (existing one unless the 2-room rule is met), and CURRICULUM module.
3. **Metadata** entry in `src/data/rooms/metadata.ts`, placed adjacent to its cluster sibling if it has one.
4. **Theory** component in `src/components/theory/<RoomName>Theory.tsx`: 5 chapters, bilingual, single-column. Gates: Chapter Text Depth (≥120 words / ≥2 paragraphs per language per chapter), no leading icons in headings, Anti-Vibecode, inline citation format, quote/callout formatting. **Ask the owner which terms get `<Term>` tooltips before shipping.**
5. **Tasks** file in `src/data/rooms/tasks/<room-id>.ts`: 8–10 tasks, ≥3 types, task-mix rule (≥1 `sorting` or `mentor`), per-type validation gate, sequential IDs from 1. `categorize` mapping keys must equal `items[].en` exactly.
6. **Register in BOTH places:** `src/data/rooms/tasks/index.ts` (import + `ROOM_TASKS` entry) **and** `THEORY_COMPONENTS` in `src/app/[lang]/rooms/[id]/page.tsx`. Forgetting the second one silently renders a placeholder.
7. **Glossary.** New concepts get entries in `src/data/glossary.ts` (both locales) and `<Term>` wraps in theory.
8. **Cover.** Programmatic via `RoomCover`: add the room's icon to `ICON_MAP` in `src/components/roomVisuals.ts` if missing; cover tone hue must be mapped in the saas theme block of `globals.css`. Optional custom art: add a prompt to `IMAGE_GENERATION_PROMPTS.md` and reference the target file.
9. **Verify.** `npm run check-all` clean; `npm run test` — no new failures beyond the tracked defect list; walk every task in both locales at `http://localhost:3000` (progress must reach 100%).
10. **Docs sync** (same session, per `AGENTS.md` Completion checklist): `BACKLOG.md` work log, `PROGRESS.md` milestone + room count, `AGENTS.md` room inventory, `CURRICULUM.md` module entry, `README.md` counts — plus the queue row here moves to "Shipped".

## Curriculum coherence rules

1. **`pathIds` is mandatory** for every room. Historical note: on 2026-07-12 nine legacy rooms were path-orphaned (invisible on all path pages while CURRICULUM narrated them inside modules) and were fixed in bulk. Do not recreate this drift.
2. **Locked paths don't count.** `intermediate` is `unlocked: false` — a room assigned to it must also carry an unlocked path, or it is unreachable from path pages.
3. **Category minimum.** A new category requires 2+ rooms planned (intro + deep dive is the natural pair).
4. **Canonical Agent Coding numbering** (resolves the former ROADMAP/CURRICULUM conflict; CURRICULUM wording wins):

| Code | Room | Module |
|---|---|---|
| AC-301 | Shipping Agentic Features with Guardrails | C — Shipping and Team Operations |
| AC-302 | Cost & Latency Control for Agents | C |
| AC-303 | Team Protocols for Agent Coding | C |
| AC-401 | Incident Playbooks for Agentic Features | D — Production Reality and Capstone |
| AC-402 | Data/Eval Operations for Agent Teams | D |
| AC-499 | Agent Coding Capstone | D |

## Queue

Format: one row per idea. Rationale and risks stay short; design happens when the room is picked up.

### P0 — broken or promised

| Room / item | Path(s) | Cluster | Rationale | Fact-decay risk |
|---|---|---|---|---|
| Restore `prompt-evals` tasks (8–10 tasks from existing `PromptEvalsTheory`) | beginner | pairs with `evalops-basics` | Room is broken in production: metadata + theory exist, task file missing | low — evals concepts are durable |

### P1 — roadmap commitments

| Room / item | Path(s) | Cluster | Rationale | Fact-decay risk |
|---|---|---|---|---|
| AC-301 Shipping Agentic Features with Guardrails | agent-coding | Module C | ROADMAP M2-1 | low |
| AC-302 Cost & Latency Control for Agents | agent-coding | Module C; reconcile with `ai-product-systems` idea before building | ROADMAP M2-1 | medium — pricing specifics go to cited callouts |
| AC-303 Team Protocols for Agent Coding | agent-coding | Module C | ROADMAP M2-1 | low |
| AC-401 Incident Playbooks for Agentic Features | agent-coding | Module D | ROADMAP M2-1 | low |
| AC-402 Data/Eval Operations for Agent Teams | agent-coding | Module D; conceptual sibling of `prompt-evals`/`evalops-basics` | ROADMAP M2-1 | low |
| AC-499 Agent Coding Capstone | agent-coding | Module D; scenario-heavy synthesis of AC-101…402 | ROADMAP M2-1 | low |
| GROK task pack — **tasks in 5 existing rooms, not a new room** (`llm-landscape`, `deep-search-agents`, `prompting-101`, `frontier-evals-logic`, `native-multimodality` + screenshot after task-image infra) | — | — | ROADMAP M1-6; build on durable concepts (realtime grounding, tool-priced API, default persona) | high if built on prices/benchmarks — keep those in cited theory only |

### P2 — thin spots

| Room / item | Path(s) | Cluster | Rationale | Fact-decay risk |
|---|---|---|---|---|
| `ai-ethics-bias` — training-data bias, fairness metrics, case studies | ideas-history | — | Only cleanly unbuilt idea from the old ROOMS_IDEAS; strengthens Ideas path and pairs thematically with `ai-alignment` | low |
| `evalops-basics` — eval sets in practice, scoring, regression gates | beginner (Module 5 Practice) | pairs with `prompt-evals` | Module 5 is thin (2 rooms); natural intro+practice cluster | low |
| Multimodality deep dive (video/realtime or generation-side) | beginner (Module 2) | pairs with `native-multimodality` | Module 2 is thin (2 rooms) | medium |

### P3 — idea backlog

| Room / item | Path(s) | Cluster | Rationale | Fact-decay risk |
|---|---|---|---|---|
| `ai-product-systems` — routing, fallback, cost controls, incident response | intermediate + beginner | overlaps AC-302 — reconcile scope at design time | Old ROOMS_IDEAS "Room 301" | medium |
| Path-completion artifact (certificate/code per path) — **feature, not a room** | — | — | Biggest structural gap vs the original model: we lack the long reward loop (see `references/tryhackme-com.md`) | — |

### Shipped (log)

| Date | Room | Notes |
|---|---|---|
| 2026-07-22 | `ai-existential-risk` | ideas-history: Bostrom 2013 (four risk classes, maxipok) + Grace 2022 counterarguments. Angle is argument analysis — deliberately distinct from `ai-singularity` (the idea and its camps) and `ai-alignment` (technical methods) |
| 2026-07-21 | `context-engineering-101` | AC-204, Module B: context layers, window economics, artifacts (skill/agent), hygiene cycle. Sourced from the owner's course notes; theory written original (course listings not copied), tool-specific numbers in a dated callout per the fact-decay rule |
| 2026-07-11 | `research-ai-era`, `ai-literature-reviews` | Research cluster (method + tools), ideas-history path |
| 2026-05-16 | `local-models-101` | Opened «Открытые модели» category as intro to `llama-3-1-8b` |

## Idea intake

To propose a room: add one row to the appropriate priority table with all five columns filled. If the idea comes from a conversation with the owner, add the row in the same session. If an idea duplicates an existing room, extend that room instead (checklist step 1). Feature ideas that are not rooms (labs, mechanics, artifacts) get a row only if they gate room work; otherwise they belong in `BACKLOG.md` / `IDEAS_NEXT_STEPS.md`.
