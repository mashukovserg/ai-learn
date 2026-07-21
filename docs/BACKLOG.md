# AI-Learn Backlog

> **Active roadmap:** [`ROADMAP_3M.md`](ROADMAP_3M.md) (2026-05-16 → 2026-08-15) — agents pick work from there first; this file keeps the detailed punch lists and the work log.

## Completed (2026-07-20 session — by Claude Code)
- [x] **Glossary: 5 reliability-engineering terms + `<Term>` wiring in `agent-coding-foundations`.** Added bilingual entries to `src/data/glossary.ts` (simple-prose style, term after idea): `transient-failure`, `circuit-breaker`, `graceful-degradation`, `fault-tolerance`, `human-in-the-loop`. Wrapped first mentions in Chapter 6: «транзиентных ошибках»/"transient errors" in the recovery-order paragraph, Circuit Breaker in the fallback card, Human-in-the-Loop in the escalate card, Graceful Degradation + Fault Tolerance in the named-concepts paragraph (both locales; cards converted from string ternaries to JSX fragments where needed). Verified in DOM on `/ru` + `/en`: all five render as glossary spans (`cursor-help` dotted underline — the found-entry path in `Term.tsx`; a missing id would render a red "[Term not found]" marker, none present). `check-all` green (1714). (by Claude Code)
- [x] **`agent-coding-foundations`: recovery-stage cards rewritten in plain prose (creator's style guidance).** The four retry/fallback/rollback/escalate cards in Chapter 6's "Link to Classical Engineering" subsection rewritten per Sergei's instruction «Пиши проще» with his retry text as the model: unfold the everyday logic first (try again → why it helps → why not forever), introduce the terms after the idea, one thought per sentence. Both locales rewritten in the same register; no structural or factual changes; sources card and surrounding paragraphs untouched. Verified in browser on `/ru` + `/en` (new prose renders, old jargon-first phrasing gone). `check-all` green (1714). (by Claude Code)
- [x] **`agent-coding-foundations`: Chapter 6 "Errors and Recovery" extended with classical-engineering roots.** Existing structure, YAML schema, and the retry → fallback → rollback → escalate chain preserved untouched. Added a bilingual subsection "The Link to Classical Engineering / Связь с классической инженерией": (1) framing — the chain is distilled SE/Distributed Systems/DevOps/SRE practice, an agent is just another distributed system; (2) four stacked cards mapping each stage to its origin — retry → transient-fault handling with exponential backoff + hard attempt caps (retry storms), fallback → backup paths/degraded mode/Circuit Breaker, rollback → DB transactions, git reset/revert, blue-green/canary deploy rollback, escalate → Human-in-the-Loop as heir of SRE incident response/on-call with full-context handoff; (3) why this exact order — a recovery-cost ladder (cheap-first minimizes expected cost; per-rung limits prevent cascading failures); (4) named concepts paragraph — Graceful Degradation, Fault Tolerance, Resilience Engineering, Self-Healing Systems; (5) takeaway — agents reuse microservice resilience principles, agent = autonomous component with a service's contract (detect → contain → recover → escalate last with full context); (6) Sources card with 6 links: Azure Architecture Center (Retry, Circuit Breaker, Transient fault handling), Google SRE Book, Fowler (Circuit Breaker), AWS Well-Architected Reliability Pillar. Practical tone kept, no new `<Term>` wraps pending creator's pick. Verified in browser on `/ru` + `/en` (subsection renders, YAML intact, all 6 links present). `check-all` green (1714). (by Claude Code)

## Completed (2026-07-18 session — by Claude Code)
- [x] **Product screenshots documented as a core design element.** New mandatory section in `docs/AGENTS.md` (right after the Terminal rule) — the GUI counterpart of `<Terminal>`, modeled on TryHackMe's task pages (annotated VirusTotal screenshot framed between explanation paragraphs). Rules: real captures only (no mocked/AI-generated UI, no doctored numbers, crop + scrub personal data); mandatory "sandwich" structure (intro text above, interpretive text below — a bare screenshot is decoration); accent-border exhibit framing (`rounded-xl border-2 border-<accent>/60 overflow-hidden`, via `next/image`); dark-theme captures preferred (same logic as Terminal staying dark on light UI); assets under `public/images/rooms/<room-id>/` with descriptive names (tasks keep `public/images/tasks/<room-id>/`); bilingual `alt`/caption; solvability guard (screenshots illustrate, never spoil answers). Docs-only change — no runtime surface. (by Claude Code)
- [x] **`ai-history`: Dartmouth card historiographic revision (Kline 2011) + "birthplace myth" subblock + task 12.** Chapter 1, per archival literature: (1) Dartmouth funding concretized — ~$13,500 requested, Rockefeller officer Robert Morison approved $7,500 finding the plan vague/over-ambitious, framed as a documented vote of no confidence (inline DOI citation to Kline, "Cybernetics, Automata Studies, and the Dartmouth Conference on AI," IEEE Annals 33(4), 2011); (2) fixed the coining-of-"AI" motive — replaced the apocryphal "had to call it something" with McCarthy's "nail a flag to the mast" motive (distancing from cybernetics/Wiener, per Kline); (3) Logic Theorist card now notes it was built at RAND before and independently of Dartmouth, under the name "complex information processing"; (4) new bilingual subblock '"The birthplace of AI": a myth assembled after the fact' (AI@50, textbooks, McCorduck's *Machines Who Think* as myth-participating source). Added task 12 (multiple-choice) testing the myth subblock — solvable from theory. Verified in browser on `/ru` + `/en` (all new strings render, Kline link → DOI). `check-all` green (1714). (by Claude Code)
- [x] **`ai-history`: Halpern 2022 citation + new task.** Added a paginated scholarly citation to Chapter 3 of `AiHistoryTheory.tsx` — one bilingual paragraph placing the GOFAI-vs-connectionism dispute in intellectual history (learning-over-rules vs top-down calculation/planning), linking Orit Halpern, "The Future Will Not Be Calculated" (Critical Inquiry 48(2), 2022) via DOI with a page pinpoint (`Халперн 2022: 6` / `Halpern 2022: 6`; page number from the Russian edition's pagination). Reused the established inline-citation pattern (emerald underline `<a>`, `target="_blank"`). Added task 11 (multiple-choice, bilingual) to `tasks/ai-history.ts` testing exactly that paragraph — solvability gate satisfied. Verified in browser on `/ru` + `/en`: paragraph renders, link → DOI. `check-all` green (1710). (by Claude Code)

## Completed (2026-07-21 session — by Claude Code)
- [x] **Fork 1 corrected: aubergine terminal restored; Fork 3 (heading color) opened.** The earlier "Tango on gray" move was a misread of the owner's intent — the owner wants the Ubuntu preset + Ubuntu Mono kept, and the emerald clash solved by re-coloring the **headings and similar accents** instead. Reverted the terminal container tokens to aubergine (`#300a24` family) in `globals.css`; DESIGN_FORKS(+ru) rewritten: aubergine back as current pick with the history note, Tango-on-gray demoted to a fully paste-ready alternative ("strongest fallback"), and a new **Fork 3 — theory heading color** recorded as OPEN with measured scope (`text-emerald-400`: 289 occurrences in theory, ~250 on h2/h3/h4; `<Term>` links excluded), an implementation plan (a `--color-heading` token + heading-scoped regex sweep) and three gray candidates. Picker: Ubuntu re-marked current and a **heading-color toggle** added (изумруд/светло-серый/цвет текста/приглушённый) so Fork 3 is judged by eye next to the aubergine terminal; prototype screenshot confirmed the clash disappears with light-gray headings. AGENTS.md element description restored. Verified in browser: termBg `rgb(48,10,36)` live. (by Claude Code)
- [x] **Fork 1 moved: terminal is now "Tango on gray"** (`#1e1e1e` graphite + Tango ANSI palette + Ubuntu Mono). The owner resolved the fork's open question — the aubergine background *does* clash with the site's emerald blocks. To judge replacements by eye, the picker gained the exact context that caused the clash (an emerald chapter heading + a "Куда дальше" callout inside the preview stage) and three gray candidates; side-by-side screenshots showed near-black `#0d0d0d` melting into the dark page background while `#1e1e1e` reads as a distinct surface — the owner picked gray. Swapped only the container tokens in `globals.css` (`bg/head/line/dim`); Tango accents, Ubuntu Mono, and the dark-in-both-themes invariant unchanged. Fork move recorded per the DESIGN_FORKS rules: new current pick with rationale, aubergine demoted to Alternative A with full paste-ready tokens and why it lost, Tango-on-black recorded as tried-and-rejected; AGENTS.md element description updated; picker notes/default now mark gray as current. Also: `docs` static-server entry added to `.claude/launch.json` (the picker needs http, not file://). Verified in browser: computed `#1e1e1e` in both themes, Tango prompt, Ubuntu Mono, 5 terminals on AC-201. `check-all` green (1769). (by Claude Code)
- [x] **New room `context-engineering-101` (AC-204, Module B, agent-coding path)** — closes a real curriculum gap: no room mentioned context engineering, CLAUDE.md-style constitution files, memory indexes, or skills. Sourced from the owner's course notes (Генаров course, lesson 2) but **authored original** — course slide listings were not copied; the concepts taught (layered context, PARA/Zettelkasten/progressive summarization, context rot, compaction) are public methodologies. 5 bilingual chapters: (1) the discipline + stable→volatile layer table, (2) window economics — minimal-maximally-useful principle, ROI test, context rot, delete>archive, with tool-specific numbers (60/200 lines, ~8k tokens) confined to a dated "Tool practice, 2026" callout per the fact-decay rule, (3) knowledge artifacts with the explicit rule/fact/procedure/role → constitution/index/skill/agent mapping + telegraph-style example, (4) skills and agents — description=when-to-invoke, when NOT to create a skill, minimal tools + explicit write zones, (5) hygiene cycle (audit/update/restructure/cleanup) with a `hygiene · zsh` Terminal session + compaction cross-linked to claude-code-agentic-loop; "Where to Go Next" CTA at the END per the CTA-placement gate. 12 tasks across 7 types (6 MCQ, sorting, categorize, multiple-select, mentor, scenario, input) — every answer stated verbatim in theory in both locales; categorize keys are English-exact. 2 new glossary terms (`context-engineering`, `context-rot`). Docs synced: CURRICULUM (+ru) AC-204 row, ROOM_DEVELOPMENT (+ru) shipped log, PROGRESS (+ru) milestone + counter, CLAUDE.md/AGENTS.md/README counters 39→40. Gate green: 1769 tests (room auto-added 55 checks). SSR verified in both locales; live DOM: 12 task cards, terminal renders, room in catalog. (by Claude Code)

## Completed (2026-07-17 session — by Claude Code)
- [x] **Terminal design picker — `docs/terminal-picker.html`.** Makes Fork 1 explorable by eye instead of by hex, following the `green-accent-picker.html` precedent (self-contained HTML, RU UI). Switches 7 presets (Ubuntu/Tango current, neutral black-gray, Tango-on-black, Solarized Dark, Dracula, Nord, One Dark), 6 terminal fonts (Ubuntu Mono, IBM Plex Mono, JetBrains Mono, Fira Code, Source Code Pro, system) and 3 sizes — the size control exists because size is coupled to the face. Crucially it also toggles the **page background between the site's dark and light themes**, so the "terminal stays dark in both themes" invariant is verifiable visually. Renders the real AC-201 session (Cyrillic included — the thing to watch when judging a font) plus a palette terminal exercising `dir`/`link`/`warn`, and emits a paste-ready `@theme` token block with a copy button. Cross-linked from both `DESIGN_FORKS` files. Verified in browser: all 7 presets drive button state, computed terminal background and CSS output consistently. (by Claude Code)
- [x] **Committed orphaned docs that tracked files already referenced.** `docs/green-accent-picker.html`/`.md`, `docs/ROOM_DEVELOPMENT.md`/`.ru.md`, `docs/VERCEL.md` and `docs/references/` had been authored in earlier sessions but never committed — and `DESIGN_FORKS.md` (committed) links to the accent picker, so the link would have broken the moment the non-durable working tree re-synced. This is exactly the failure mode the Commit-hygiene gate exists to prevent. (by Claude Code)
- [x] **`agentic-cli-tools` (AC-201): introduced `rg` properly — closes a solvability-gate violation.** The owner flagged that `rg` appears out of nowhere in the Chapter 1 terminal with no explanation of what it is or how to get it. Investigation showed a worse problem underneath: **task #2 asks the learner to type "the command recommended in this project for fast code search instead of `grep`" (answer `rg`), but the theory never said any of that** — not that `rg` is ripgrep, not that it is recommended over `grep`. The task was only answerable by guessing from a terminal line. Fixes: new `ripgrep` glossary entry (bilingual, incl. install commands and the no-install fallback); a short first-contact note right after the Chapter 1 terminal wrapping `rg` in `<Term>` and pointing to Chapter 2; in Chapter 2 a full unpack of the four discovery commands — `rg` as ripgrep and explicitly *the one recommended instead of `grep`* (faster on large repos, respects `.gitignore`, skips binaries), `tree -L 2` (depth-capped directory tree), and `cat`/`git grep` noted as system-provided; a paragraph stating neither ripgrep nor `tree` ships with macOS/most Linux distros, with `grep -r` + `git grep` as the always-available fallback for locked-down environments; and a new `setup · zsh` terminal with the actual install commands (Homebrew / apt) plus a verify step. `check-all` green (1714); verified in browser — 5 terminals on the page, glossary tooltip resolves, `<code>` renders via `prose-invert`. (by Claude Code)
- [x] **Design decisions recorded as explicit open forks** — `docs/DESIGN_FORKS.md` (+ `.ru.md`). The owner flagged that the project is *still searching* for its optimal design, so terminal styling and typeface choices must not be recorded as settled. The file states up front that a "current pick" means *what is wired up today*, and carries **paste-ready complete token sets** for every option: Fork 1 (terminal design) — current Ubuntu/Tango, previous neutral black-gray, never-built Tango-on-black and Ubuntu+Ambiance-chrome, plus pre-converted Solarized Dark and Dracula presets; Fork 2 (typefaces) — site face (IBM Plex Sans vs Inter/Ubuntu Sans/split UI-reading) and terminal face (Ubuntu Mono vs IBM Plex Mono/JetBrains Mono/system), including the open tension that site and terminal currently use unrelated families, and the gotcha that terminal font size is coupled to the face (13→14px for Ubuntu Mono). Mandatory agent rules added: never treat a pick as final, never delete a losing option, record any fork move in the same commit, keep every preset complete (a partial preset silently breaks `text-term-*` utilities). Cross-linked from `AGENTS.md` (new "Design forks — do not silently collapse them" gate + a note on the Terminal design element) and the `CLAUDE.md` docs index. `check-all` green (1714). (by Claude Code)
- [x] **Terminal restyled to the Ubuntu GNOME Terminal look** (owner supplied a reference screenshot). Identified the reference as GNOME Terminal on Ubuntu (Unity-era Ambiance chrome) and adopted it wholesale: aubergine background `#300A24` (Ubuntu's signature terminal color), the **Tango** ANSI palette (`#EEEEEC` text, `#8AE234` prompt, `#EF2929` red, plus new `--color-term-blue/-cyan/-yellow` tokens matching Ubuntu's `LS_COLORS`, so `ls`-style output can be rendered faithfully), and **Ubuntu Mono** loaded via `next/font/google` in `layout.tsx` (latin+cyrillic — RU comments live in terminals) exposed as the `--font-term` token → `font-term` utility. `Terminal.tsx` gained the extra tones (`dir`/`link`/`warn`) and bumped to 14px for optical parity with the narrower Ubuntu Mono glyphs. All `--color-term-*` remain un-overridden in the SaaS block. Verified in browser: computed bg `rgb(48,10,36)`, text `rgb(238,238,236)`, prompt `rgb(138,226,52)`, font resolves to real "Ubuntu Mono", Cyrillic renders, aubergine holds in the light theme, no console errors. `check-all` green (1714). (by Claude Code)
- [x] **Per-room "Reset progress" button.** Added `resetProgress` to `useProgress` (clears local state + `localStorage.progress:<room>`, and `DELETE /api/progress/<room>` when authed — the backend endpoint already existed). Wired into the room-page progress card: a subtle `RotateCcw` "Сбросить прогресс / Reset progress" button that appears only when the room has progress, with an inline confirm step (Да·Отмена / Yes·Cancel). Because task cards keep their solved/answer state in internal `useState` (via `initialCompleted`), reset bumps a `resetNonce` folded into each task's React `key` so the cards remount to a fresh idle state; also resets the completion-modal guard. Verified in browser: seeded progress → 14%, button shown → confirm → "Yes" → 0%, `localStorage` cleared, button hidden. `check-all` green (1706). (by Claude Code)
- [x] **Terminal promoted to a core design element + rolled out to 5 more rooms.** Documented `<Terminal>` as a first-class design-system component in `docs/AGENTS.md` (right after Design tokens): API, when to use (command/agent/REPL/test sessions), when NOT (static JSON/YAML/schema/math stay plain code blocks), and a solvability guard (a terminal must not reveal a task's answer). Added tailored session terminals to `agent-coding-foundations` (agent executing the YAML contract → tool calls → acceptance check), `agentic-coding-tools` (read_file→edit_file→run_tests), `mcp-tool-ecosystems` (`claude mcp add` → tool call through the server), `fine-tuning-101` (LoRA training run: pip install → train → loss/epochs → saved adapter), `embeddings-101` (Python REPL: encode → cosine similarities). Terminal is now present in **11 rooms**. `check-all` green (1706); SSR confirms 1 terminal in each new room (ru). (by Claude Code)
- [x] **Reusable `<Terminal>` component + rollout to 5 more rooms.** Extracted the AC-201 terminal markup into `src/components/Terminal.tsx` (lang-agnostic; callers pass resolved bilingual strings; line kinds `{ cmd, comment?, prompt? }` / `{ out, tone? }` where tone `dim`|`ok`|`bad`). Added a `--color-term-red` token (`#f87171`, also not overridden in the SaaS block) for red→green output. Refactored AC-201 to use the component and upgraded its three plain `<pre>` "CLI Commands" blocks (Discovery/Change/Verify) into real terminals. Placed a tailored terminal in each of: `llama-3-1-8b` (Ollama install→pull→run, converted the existing plain block), `local-models-101` (Ollama first-run install→pull→run→verify in Chapter 4), `claude-code-agentic-loop` (Gather→Act→Verify one-loop pass, matching the chapter's own phase names, both lang branches), `claude-code-pro-workflow` (Claude Code `/plan`→execute→test session, both lang branches), `agentic-testing-loop` (red→green: failing `npm test` → minimal fix → green, Chapter 2). Also fixed a pre-existing forbidden-phrase violation (`это не просто`) in `ClaudeCodeProWorkflowTheory.tsx` found while editing. Verified: `check-all` green (1706); SSR HTML shows correct terminal counts across all 6 rooms (AC-201=4, others=1) in ru+en; live DOM confirmed termBg `#0d0d0d`, red `#f87171`, prompt `#34d399`; terminals stay dark in the SaaS light theme (no `--color-term-*` override there). (by Claude Code)
- [x] `agentic-cli-tools` (AC-201): added a styled **black-gray terminal window** to Chapter 1 (traffic-dot header, `$` prompt, monospace) showing one concrete discover→change→verify→commit loop pass, bilingual comments. Added dedicated `--color-term-*` tokens to `globals.css` `@theme` that are **not** overridden in the `[data-theme="saas"]` block, so the terminal stays dark on both themes (a terminal should look like a terminal on light UI too). Verified in browser: bg `#0d0d0d`, emerald prompt, gray dots — dark in both Terminal and SaaS themes. `check-all` green (1706). (by Claude Code)
- [x] `ai-history` room: added the missing **Expert Systems (1980s)** piece to Chapter 2 (a bilingual sub-block: first commercial AI success — XCON at DEC, LISP machines, expert-system shells — and how its brittleness + costly upkeep + cheap general workstations collapsed the market ~1990, causing the second AI Winter). This also closes a solvability gap: the room's `categorize` task already mapped "Expert Systems → Symbolic AI (GOFAI)" and the scenario mission referenced "expert-system algorithms" and the "second AI Winter", but the theory never introduced them. `check-all` green (1706); rendered/verified in browser; no forbidden phrases. (by Claude Code)

## Completed (2026-07-16 session — by Claude Code)
- [x] Roadmap M1-5 (pilot, awaiting creator approval): shipped the first task illustrations on the M1-4 image infrastructure. Three design-token SVG concept diagrams under `public/images/tasks/<room-id>/`: CLI discover→change→verify loop (`agentic-cli-tools#1`), 78/22 context auto-compact buffer bar (`claude-code-pro-workflow#5`), and the Gather→Act→Verify agentic loop (`claude-code-agentic-loop#8`). Attached to CONTEXT tasks, not to `agentic-loop#1` (name the phases, MC) or `agentic-cli-tools#4` (order the loop, sorting) where a diagram would reveal the answer — solvability gate respected. Bilingual alt/caption on each; rendered and screenshot-verified in context; `check-all` green (1706). Real terminal screenshots deferred (cannot be authentically captured here). Note: a pre-existing `TaskTimeline` SSR hydration warning surfaced during verification (reproduces in untouched rooms too) — logged as a follow-up, not caused by this change. (by Claude Code)
- [x] Roadmap N-2: merged PR #1 into `main` (merge commit `04da99b`) — root `CLAUDE.md`, `local-models-101` security chapter, responsive mobile shell, `taxonomy-matching` + `prompt-evals` rooms, 47 data-defect fixes, armed test gate. Working branch fast-forwarded onto `main` (no history rewrite). (by Claude Code)
- [x] Roadmap M1-4: task-image infrastructure. Optional `image?: { src, alt: LocalizedString, caption?: LocalizedString }` on `LocalizedTask` (+ resolved form on `Task`); locale resolution in the room page; shared `TaskIllustration` component (exported from `TaskWrapper.tsx`) rendered above the question in all 8 task types (`TaskWrapper` path + own-markup `TaskMentor`/`TaskScenario`); asset convention `public/images/tasks/<room-id>/` (+ `.gitkeep`); new Vitest block in `data-integrity.test.ts` (src must exist under `public/`, alt/caption bilingual); rule documented in `AGENTS.md` gate. Acceptance verified both ways: temp image rendered with localized alt/caption at `/en` and `/ru`, and a deliberately broken path failed `npm run test` with a clear message. Gate green: 1701/1701. (by Claude Code)

## Completed (2026-07-15 session — by Claude Code)
- [x] Roadmap M1-1: cleared all 47 tracked data defects. 22 `categorize` tasks — `correctMapping` normalized to canonical form (keys = `items[].en`, values = `buckets[].en`; RU-keyed and duplicated bilingual entries removed — the renderer silently dropped them, making items unsolvable). 6 `scenario` tasks (`prompt-contracts#5`, `multi-agent-collaboration#5`, `agentic-testing-loop#4`, `agentic-ui-delivery#5`, `agentic-swarm-management#4`, `frontier-evals-logic#8`) — scores rescaled from a 0–10 scale to the canonical 0–100 (×10, negatives clamped to 0, `passingScore` 8→80 / 9→90). 19 tasks — missing bilingual `explanation` texts authored (takeaway summaries for the success box). The "Engineering follow-ups uncovered by tests" list below is now fully resolved. (by Claude Code)
- [x] Roadmap M1-2: restored the `prompt-evals` room — created `src/data/rooms/tasks/prompt-evals.ts` with 9 tasks across 7 types (multiple-choice ×3, input, multiple-select, categorize, sorting, scenario, mentor), all answerable from `PromptEvalsTheory.tsx` (vibe check trap, three eval types, Release Gate, growing eval set), registered in `tasks/index.ts`. Room inventory now 39/39 fully wired. Verified rendering in both locales. (by Claude Code)
- [x] Roadmap M1-3: armed the test gate — `npm run test` added to `check-all` (`lint` + `tsc --noEmit` + Vitest). Full pipeline green: 1700/1700 tests. (by Claude Code)
- [x] New room `taxonomy-matching` (Intermediate, "Practice" category) — "Matching Jobs to a Skill Taxonomy". Teaches entity resolution / semantic matching as an applied ML task, framed on a real labor-market case: matching ~27k messy EN job titles to a curated 154-profession RU taxonomy. 5 bilingual theory chapters (messy-text-vs-taxonomy, normalization, lexical matching, semantic retrieval with multilingual embeddings, cascade + LLM adjudication + precision/recall eval) and 10 tasks across 7 types (multiple-choice, multiple-select, sorting, categorize ×2, input, scenario, mentor). Wired into metadata + `ROOM_TASKS` + `THEORY_COMPONENTS`. Room count 38→39 (38 wired). All 42 room tests pass in both locales; `check-all` clean; verified rendering and a task solved on a touch viewport. (by Claude Code)
- [x] Hardened `TaskCategorize` tap-to-place for multi-item buckets. After the N-1 fix, tapping a bucket that already contained a chip could land on the chip's remove handler (chips render inside the bucket) instead of adding the selected item — exposed by the new room's 3-items-per-bucket task. Now a tap on a placed chip while an item is selected places the selection into that chip's bucket; removal still works when nothing is selected. Verified: 3-per-bucket and 1-per-bucket categorize tasks both solve on a touch viewport. (by Claude Code)
- [x] Roadmap N-1: fixed touch-drag on `TaskCategorize`. It used native HTML5 drag (`draggable`/`onDragStart`/`onDrop`), which does not fire on touchscreens — categorize tasks were unsolvable on mobile. Added a tap-to-place interaction (tap an item to select, tap a category to place; tap a placed item to remove) alongside the existing native drag, with `aria-pressed`/`role="button"`/keyboard (Enter/Space) support. Subtitle updated in both locales ("Tap an item, then a category (or drag)"). Verified end-to-end on a 375px `hasTouch` viewport (Chromium): full local-models-101 family→company task solved via taps → "Correct!"; `check-all` clean. (by Claude Code)

## Completed (2026-07-12 session — by Claude Code)
- [x] Made the app shell responsive for mobile. The layout was a fixed CSS grid with an always-visible 208px sidebar and no `@media` queries, so on a phone the sidebar squeezed content into ~167px. Now, below `md` (768px): the sidebar renders as an off-canvas drawer (`fixed`, slide-in) toggled by a new hamburger button in `Navbar`, with a tap-to-dismiss backdrop and auto-close on link/logout; the shell grid collapses to a single full-width column. Desktop (`md+`) is byte-for-byte unchanged (sticky 208/64px sidebar, no hamburger). Touched `AppShell.tsx`, `Sidebar.tsx`, `Navbar.tsx`; `check-all` clean; verified with headless Chromium at 375px (drawer off-screen, full-width content, open/close/navigate) and 1280px (desktop intact). (by Claude Code)
- [x] Added a root `CLAUDE.md` (the file Claude Code auto-loads) as the authoritative AI-assistant entry point: architecture, dev commands, project structure, key patterns, task types, testing, and the mandatory authoring gates distilled from `AGENTS.md`. Corrected drift (compete/leaderboard are now "coming soon" stubs; labs backend router; 38 rooms / 37 wired). (by Claude Code)
- [x] Extended the `local-models-101` room with a security-research use-case chapter (Chapter 6, EN/RU): a privacy/offline/cost/reproducibility/customization/transparency motivations table and a curated defensive-security reading list (Hackphyr, ForensicLLM, Red Teaming LMs, and more), plus a new comprehension task (`#11`, room now 11 tasks) that reinforces the honest trade-off — local models lead on control/privacy/reproducibility, not raw capability, and authorization is always required. All `local-models-101` Vitest checks pass in both locales; `check-all` clean; room verified rendering at `/en` and `/ru`. (by Claude Code)

## Completed (2026-05-16 session — by Claude Code)
- [x] Full project review (docs + codebase) and a 3-month agent roadmap: `ROADMAP_3M.md` + `ROADMAP_3M.ru.md`. Month 1 — fix 47 data defects, restore `prompt-evals`, arm the test gate, task-image infrastructure, pilot screenshots, GROK task pack; Month 2 — complete Agent Coding path (AC-301…AC-402), screenshot rollout, backend pytest smoke tests; Month 3 — leaderboard, spaced repetition, analytics, stretch items. (by Claude Code)
- [x] Shipped `local-models-101` room — Beginner entry point of the «Открытые модели / Open Models» category (5 theory chapters with `<Term>` tooltips, 10 tasks across 8 task types, all passing the Vitest gate in both locales; 3 new glossary terms: `open-weights`, `quantization`, `vram`). `llama-3-1-8b` stays the model-specific deep dive; docs synced (README, PROGRESS, CURRICULUM, AGENTS, CLAUDE). (by Claude Code)

## Completed (2026-05-11 session — by Claude Code)
- [x] Stood up the first test layer: Vitest + `vite-tsconfig-paths`, `vitest.config.ts`, npm scripts (`test`, `test:watch`, `test:coverage`), and two suites under `src/data/rooms/__tests__/` (data integrity + per-task-type validation, 1527 assertions total) codifying the rules from `AGENTS.md` → "Task data validation gate" and "Task ID sequencing". (by Claude Code)
- [x] Added `TESTING.md` capturing the layered strategy, what is and isn't covered, and a triage list of 47 real data defects the initial run surfaced (22 broken `categorize` mappings, 6 unsolvable `scenario` tasks, 17 empty `explanation` fields, 1 unregistered room — see Engineering follow-ups below). (by Claude Code)

## Engineering follow-ups uncovered by tests (2026-05-11)

> **Resolved 2026-07-15 (by Claude Code):** every defect in this section was fixed as roadmap M1-1/M1-2, and `npm run test` is now part of `check-all`. The list below is kept for history.

Captured here as a self-contained punch list. Re-run `npm run test` after each fix to confirm the item drops off. When the list is empty, re-add `npm run test` to `check-all` in `package.json`.

### 🔴 Critical — `prompt-evals` room is broken in production (1)
Present in `ROOMS_METADATA` but absent from `ROOM_TASKS` and from `src/data/rooms/tasks/` — clicking the room lands on an empty/broken page. `PROGRESS.md` 2026-02-17 milestone says the room once had 6 tasks; either restore the task file or remove the metadata entry.
- [ ] `prompt-evals` — restore `src/data/rooms/tasks/prompt-evals.ts` and add the import to `tasks/index.ts`, **or** remove from `ROOMS_METADATA` and from any path that references it.

### 🔴 Critical — `categorize` tasks unsolvable due to non-English `correctMapping` keys (22)
The room renderer at `src/app/[lang]/rooms/[id]/page.tsx:138-144` matches `correctMapping` keys/values against `items[i].en` and `buckets[j].en`. Non-English or mismatched keys produce an empty resolved mapping, so **no drop ever registers as correct** for either locale. Fix: rewrite each `correctMapping` so every key exactly equals some `items[i].en` and every value exactly equals some `buckets[j].en`.
- [ ] `agent-coding-foundations#6`
- [ ] `agent-coding-foundations#7`
- [ ] `agentic-swarm-management#6`
- [ ] `agentic-testing-loop#3`
- [ ] `agentic-ui-delivery#3`
- [ ] `ai-agents#4`
- [ ] `ai-history#8`
- [ ] `ai-image-creation#5`
- [ ] `ai-rag#3`
- [ ] `ai-regulation-eu#2`
- [ ] `ai-regulation-ru#3`
- [ ] `ai-security#4`
- [ ] `chatgpt-moment#8`
- [ ] `claude-code-agentic-loop#2`
- [ ] `frontier-evals-logic#6`
- [ ] `llm-guardrails#2`
- [ ] `llm-mechanics#11`
- [ ] `multi-agent-collaboration#4`
- [ ] `native-multimodality#5`
- [ ] `prompt-contracts#4`
- [ ] `prompting-101#9`
- [ ] `scaling-hypothesis#6`

### 🔴 Critical — `scenario` tasks unsolvable (6)
Either no choice meets `passingScore` (default `60`), or a choice has a score outside `[0, 100]`. The user cannot complete the scenario. Fix: review the scoring rubric, ensure at least one choice meets `passingScore`, and clamp every `score` to `[0, 100]`.
- [ ] `prompt-contracts#5` — no choice meets `passingScore=60`
- [ ] `multi-agent-collaboration#5` — no choice meets `passingScore=60`
- [ ] `agentic-testing-loop#4` — no choice meets `passingScore=60`
- [ ] `agentic-ui-delivery#5` — no choice meets `passingScore=60`
- [ ] `agentic-swarm-management#4` — negative score (`-5`)
- [ ] `frontier-evals-logic#8` — negative score (`-5`)

### 🟡 Low severity — Empty `explanation` fields (18)
`explanation` is contract-required `LocalizedString`, but several tasks ship `{ en: '', ru: '' }`. UI renders an empty feedback block — the task still completes, but post-task feedback is missing. Fix: write a 1–2 sentence explanation per task, in both locales.
- [ ] `agentic-swarm-management#9`
- [ ] `ai-alignment#6`
- [ ] `ai-history#6`
- [ ] `ai-regulation-eu#5`
- [ ] `ai-regulation-ru#5`
- [ ] `ai-research#6`
- [ ] `ai-singularity#6`
- [ ] `chatgpt-moment#5`
- [ ] `claude-code-agentic-loop#9`
- [ ] `deep-search-agents#6`
- [ ] `fine-tuning-101#8`
- [ ] `llm-guardrails#5`
- [ ] `llm-landscape#11`
- [ ] `llm-mechanics#8`
- [ ] `post-chatgpt-history#6`
- [ ] `prompting-101#6`
- [ ] `research-grounding#6`
- [ ] `scaling-hypothesis#5`
- [ ] `llama-3-1-8b#7` — found 2026-05-16 after the initial triage (room shipped after `TESTING.md`); test suite now reports 48 failures total, all tracked here

### 🟢 Gate — Fold tests into `check-all`
- [ ] Re-add `npm run test` to `check-all` in `package.json` once all items above are green. Until then, `check-all` stays at `lint && tsc --noEmit` so unrelated work isn't blocked by pre-existing red.

## Completed (2026-05-07 session — by Claude Code)
- [x] Shipped production deploy `1b6588e` to Vercel (`ai-learning-platform-murex.vercel.app`): 151 files, +12331/-481, including all backlog items below. (by Claude Code)
- [x] Added `/${lang}/compete` and `/${lang}/leaderboard` pages to back the existing sidebar routes. (by Claude Code)
- [x] Added `/${lang}/faq` page covering platform basics, auth, progress/streak, troubleshooting, and privacy. (by Claude Code)
- [x] Added 5 new Agent Coding rooms with theory components + task files: `agentic-swarm-management`, `claude-code-agentic-loop`, `claude-code-pro-workflow`, `mcp-tool-ecosystems`, `frontier-evals-logic`. (by Claude Code)
- [x] Added `PromptPlayground` and `AIProfessionCard` components plus `src/data/rooms/playgroundConfigs.ts` data. (by Claude Code)
- [x] Repo hygiene: normalized `.gitignore` (`.next/`, `__pycache__/`, `*.pyc`), untracked previously-tracked Python cache files, removed stray `backend/=1.40.0` pip artifact. (by Claude Code)

## Completed
- [x] Moved `/${lang}/rooms` difficulty/focus/status filters into a dedicated desktop sidebar rail with sticky placement and a compact result summary. (by Codex)
- [x] Increased `/${lang}/rooms` density on large screens with a wider container, more columns, and tighter card spacing. (by Codex)
- [x] Reduced the `/${lang}/rooms` cover area: smaller room-symbol blocks, shorter headers, and tighter top-card composition. (by Codex)
- [x] Reworked `/${lang}/rooms` cards to use professions-style illustrated covers with room icons and real progress badges. (by Codex)
- [x] Added the `/${lang}/professions` page with search, filters, profession cards, and sidebar navigation for AI role discovery. (by Codex)
- [x] Added `ROADMAP_VIEW_MODE.md` and `ROADMAP_VIEW_MODE.ru.md` to capture the roadmap-style viewing mode for future AI Learn trajectory and progression screens. (by Codex)
- [x] Added the `ai-career-trajectories` room with a custom roadmap-style theory layout, bilingual IC/research/management track content, and 6 validated tasks. (by Codex)
- [x] Enriched theory content (1000+ words each) for rooms: ai-history, research-grounding, ai-research, prompting-101, ai-image-creation.
- [x] Create "Post-ChatGPT Era" room page and tasks (6 tasks).
- [x] Scaffold Next.js 16 project with TypeScript/Tailwind.
- [x] Implement TryHackMe-style Dashboard and Sidebar.
- [x] Create Room Layout (Content + Task Sidebar).
- [x] Build interactive `TaskQuestion` component (Input, MC, Multi-select).
- [x] Build interactive `TaskSorting` component (drag-to-reorder).
- [x] Implement Multi-language support (RU/EN) with Middleware.
- [x] Create "Room 101: LLM Landscape" with Geopolitics block (26 tasks).
- [x] Implement Learning Path overview and detail pages.
- [x] Create "Room 102: How LLMs Think" with tokens, prediction, context, temperature (4 tasks).
- [x] Create Rooms index page (`/[lang]/rooms`) with all rooms listing.
- [x] UI redesign: Linear/Notion aesthetic — muted palette, no neon/glow/emoji, increased whitespace.
- [x] Dashboard rework: compact room rows, "Continue learning" primary CTA.
- [x] Create "Room 103: Prompting 101" page and tasks (6 tasks).
- [x] Create "Room 201: Native Multimodality" page and tasks (6 tasks).
- [x] Create "AI History" room page and tasks (6 tasks).
- [x] Create "Prompt Evaluation & Evals" room page and tasks (6 tasks).
- [x] Create "AI for Image Creation" room page and tasks (6 tasks).
- [x] Persist task progress in localStorage (`useProgress` hook).
- [x] Show real progress on rooms list page (Completed / In Progress / Not Started badges).
- [x] Show real progress on dashboard (completed room count + progress bar).
- [x] Fix TaskSorting `disabled` prop type error for Framer Motion compatibility.
- [x] Deploy to Vercel.
- [x] Apply consistent green accent styling across all primary flows (Dashboard, Paths, Rooms, active sidebar route states).
- [x] Create path "Идеи и споры об ИИ / Ideas and Debates in AI" (`/${lang}/paths/ideas-history`).
- [x] Create "ChatGPT moment" room page and tasks (6 tasks).
- [x] Create "Сингулярность в AI-дебатах / Singularity in AI Debates" room page and tasks (6 tasks).
- [x] Create "Room 202: Research & Grounding" page and tasks (6 tasks).
- [x] Add "Success Modal" upon room completion with confetti and stats.
- [x] Centralize room metadata in one source (`src/data/rooms/`) for title, difficulty, tasks, and duration.
- [x] Create "Alignment: AI Alignment & RLHF" room page and tasks (6 tasks).
- [x] Implement `/${lang}/settings` page with language preference + per-room progress reset.
- [x] Refresh "LLM Landscape" room question set to a concise structured quiz (10 tasks).

## Completed (2026-04-05 session — by Codex)
- [x] Implemented 4 new Agent Coding rooms: AC-103 (Prompt Contracts), AC-104 (Multi-Agent Collaboration), AC-202 (Agentic Testing Loop), and AC-203 (Agentic UI Delivery). Each room includes 5 theory chapters and 10 localized tasks. (by Codex)
- [x] Refined the AC-101 (`agent-coding-foundations`) Chapter 1...
- [x] Added `DEC-002-EXPLAINED.md` with a concise Russian walkthrough of the accepted DEC-002 autonomous pipeline: autonomy levels, safety model, rollout stages, review/UAT loops, and Digital Twin operating model. (by Codex)
- [x] Added a new in-progress backlog task to implement DEC-002 ideas in AI Learn Platform through an autonomous terminal-session pipeline track. (by Codex)
- [x] Fixed corrupted UTF-8 symbols in AC-101 theory text (`agent-coding-foundations`) so Russian words render correctly in the room UI. (by Codex)
- [x] Added a thematic focus filter on `/${lang}/rooms` with presets (`Agent Coding`, `AI Philosophy`) and dynamic options for all room categories; wired into room listing logic alongside difficulty/status filters. (by Codex)
- [x] Reworked AC-201 (`agentic-cli-tools`) theory into a more practical lesson format with explicit loop model, concrete CLI examples by phase, verify tooling matrix, role split, and final checklist/exercise in RU/EN. (by Codex)

## Completed (2026-04-04 session — by Codex)
- [x] Implemented Agent Ops MVP in Labs: added `/${lang}/labs/agent-ops` with bilingual UI for task queue, cycle trigger, runs feed, and knowledge feed. (by Codex)
- [x] Added backend Agent Ops API (`/agent/tasks`, `/agent/tasks/{task_id}/status`, `/agent/cycle/run`, `/agent/runs`, `/agent/knowledge`) with queue processing and dedupe-by-fingerprint knowledge storage. (by Codex)
- [x] Added database schema for Agent Ops (`agent_tasks`, `agent_runs`, `agent_knowledge_items`) with Alembic migration and synced docs in `README(.ru).md` and `PROGRESS(.ru).md`. (by Codex)

## Completed (2026-03-28 session — by Codex)
- [x] Implemented guest progress sync on signup in `useAuth`: reads valid `localStorage` `progress:*` entries and replays tasks to `/api/progress/{roomId}` after successful account creation. (by Codex)
- [x] Synced docs and status tracking for this behavior in `README(.ru).md`, `PROGRESS(.ru).md`, and `BACKLOG(.ru).md`; marked the engineering backlog item as done. (by Codex)
- [x] Added glossary tooltip support for the term "Code Red" / "Красный код" in Post-ChatGPT Era Chapter 1 and synced EN/RU docs. (by Codex)
- [x] Added a dedicated cover image for `post-chatgpt-history` (`/images/post-chatgpt-era.webp`) and updated EN/RU docs and work logs. (by Codex)
- [x] Added a dedicated cover image for `ai-singularity` (`/images/ai-singularity.avif`) and updated EN/RU docs and work logs. (by Codex)
- [x] Moved Skills Matrix to profile page `/${lang}/settings`, switched sidebar entry to “Profile”, and added redirect from `/${lang}/skills` to `/${lang}/settings#skills-matrix`. (by Codex)
- [x] Reworked `/${lang}/rooms` from stacked list to responsive tile grid (3/2/1 columns), added equal-height image-first cards, hover lift/accent border behavior, and filter controls for difficulty/progress status. (by Codex)
- [x] Refined room card metadata on `/${lang}/rooms`: moved difficulty/status from image overlays into a compact minimalist row above each room title. (by Codex)
- [x] Fixed hydration mismatch on `/${lang}/rooms` by making initial progress status SSR-safe and syncing localStorage progress only after client mount. (by Codex)
- [x] Created a new grand-task epic for a multi-room `agent-coding` learning path and synced planning docs (`BACKLOG(.ru).md`, `CURRICULUM(.ru).md`). (by Codex)
- [x] Implemented AC-101 room `agent-coding-foundations` (5 theory chapters, 10 localized tasks), wired new path route `/${lang}/paths/agent-coding`, and added glossary terms `guardrails` + `context-window`. (by Codex)

## Completed (2026-03-29 session — by Codex)
- [x] Implemented AC-102 room `agentic-coding-tools` (5 theory chapters + 10 localized tasks), including metadata/task wiring, dynamic theory mapping, and path inclusion under `agent-coding`. (by Codex)
- [x] Synced room inventory/status docs for the new room in `README(.ru).md`, `PROGRESS(.ru).md`, `CURRICULUM(.ru).md`, `BACKLOG(.ru).md`, and `AGENTS.md`. (by Codex)
- [x] Implemented AC-201 room `agentic-cli-tools` (5 theory chapters + 10 localized tasks) and wired it into the Agent Coding path with dynamic room routing. (by Codex)
- [x] Updated Agent Coding planning/docs for AC-201 in `README(.ru).md`, `PROGRESS(.ru).md`, `CURRICULUM(.ru).md`, `BACKLOG(.ru).md`, and `AGENTS.md`. (by Codex)

## Completed (2026-03-24 session — by Codex)
- [x] Migrated Next.js locale request handler from `src/middleware.ts` to `src/proxy.ts` (`export function proxy`) to match Next.js 16 file conventions and remove the deprecation warning. (by Codex)
- [x] Synced docs for this platform-level change in `README(.ru).md`, `PROGRESS(.ru).md`, `CURRICULUM(.ru).md`, and `BACKLOG(.ru).md`. (by Codex)
- [x] Shipped frontend style pass (Notion-like): refined typography stacks, added `reading-prose` for long theory text, and introduced `content-shell` spacing rhythm in the app shell. (by Codex)
- [x] Softened base visual system tokens (`base/card/input/border`) and tuned Navbar/Sidebar density for calmer reading-focused UI. (by Codex)

## Completed (2026-03-18 session — by Gemini)
- [x] Created room: Guardrails: Safeguarding AI (`llm-guardrails`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).
- [x] Created room: AI Regulation in Russia 2026 (`ai-regulation-ru`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).
- [x] Created room: EU AI Act: The Global Standard (`ai-regulation-eu`) — 6 tasks incl. categorize, sorting, scenario, mentor (by Gemini).

## Completed (2026-03-19 session — by Codex)
- [x] Refined `post-chatgpt-history` Chapter 1 to a less stylized presentation: replaced desktop two-column card layout with a single-column flow, removed decorative glow emphasis, and removed italicized closing paragraph style in EN/RU. (by Codex)
- [x] Synced docs for this content/UI adjustment in `README(.ru).md`, `PROGRESS(.ru).md`, and `CURRICULUM(.ru).md`. (by Codex)
- [x] Added `Anti-Vibecode Frontend Gate (Mandatory)` to `AGENTS.md` with 10 pass/fail rules, a vibecode-marker removal list, and a deterministic pre-ship checklist. (by Codex)
- [x] Synced policy update logs in `README(.ru).md`, `PROGRESS(.ru).md`, and `BACKLOG(.ru).md`. (by Codex)

## Completed (2026-03-17 session — by Codex)
- [x] Updated AI History theory Chapter 1 event cards from desktop two-column layout to single-column flow per UI request. (by Codex)
- [x] Synced docs for this UI behavior update in `../README.md`, `../README.ru.md`, `PROGRESS.md`, and `PROGRESS.ru.md`. (by Codex)
- [x] Removed italic styling from the AI History Chapter 1 reflective paragraph per UI request and synced docs updates. (by Codex)
- [x] Enriched ChatGPT Moment theory Chapter 3 and Chapter 4 "Code Red" section in both locales, then synced `README`, `PROGRESS`, and `CURRICULUM` mirrors. (by Codex)
- [x] Updated Singularity in AI Debates Chapter 2 comparison cards from two columns to a single-column flow and synced EN/RU docs. (by Codex)
- [x] Added AI History glossary tooltips for `Eliezer Yudkowsky`, `Ray Kurzweil`, `John von Neumann`, `I.J. Good`, and `Nick Bostrom`, plus synced EN/RU docs. (by Codex)
- [x] Removed centered text alignment from the AI History final summary block and synced EN/RU docs. (by Codex)
- [x] Expanded the LLM Landscape pre-model chapter intro ("2026 Market Snapshot + Source Links") with practical vendor-evaluation context and synced EN/RU docs. (by Codex)
- [x] Added an `SDK` tooltip in LLM Landscape evaluation criteria and added AGENTS rule forbidding the word `вендор` with neutral alternatives. Synced EN/RU docs. (by Codex)

## Completed (2026-03-17 session — by Claude Code)
- [x] Enriched `scaling-hypothesis` room: rewrote theory to 5 full chapters (The Core Idea, Three Pillars, Emergent Abilities, Chinchilla Laws, Critics & New Frontiers), fixed broken task id (10→5), expanded from 5 to 10 tasks adding categorize, scenario, sorting, timeline, multiple-select task types. (by Claude Code)
- [x] Enriched `ai-singularity` room: expanded theory from 2 slim sections to 5 full chapters (Event Horizon, Two Camps, Physical Limits, Key Voices, Practical Agenda), expanded from 6 to 10 tasks adding timeline, scenario, multiple-choice, multiple-select task types. (by Claude Code)
- [x] Rewrote `ai-history` theory (AiHistoryTheory.tsx) incorporating 10 insights from Melanie Mitchell's 2019 book: Dartmouth reality, Minsky vs Rosenblatt story, Simon/Minsky wrong predictions, Deep Blue + McCarthy quote, Hinton 1990 job advice, LeCun ImageNet quote, AlphaGo kami no itte, NVIDIA stock, adversarial examples warning, Hofstadter Google/EMI story. (by Claude Code)

## Completed (2026-03-16 session — by Gemini)
- [x] Enriched LLM Mechanics room (to 14 tasks) and AI Image Creation room (to 7 tasks) with new interactive components and deeper technical theory. (by Gemini)
- [x] Expanded AI History room with detailed Lighthill Report and GPU/NVIDIA context. Integrated Geoffrey Hinton's legacy and safety concerns into History and Singularity rooms. (by Gemini)
- [x] Enriched Scaling Hypothesis room (to 9 tasks) and AI Singularity room (to 10 tasks) with new interactive components. (by Gemini)
- [x] Enriched ChatGPT Moment room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched Prompting 101 room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched AI History room (to 10 tasks) with new interactive components (Timeline, Categorize, Scenario, Sorting). (by Gemini)
- [x] Enriched theory content for rooms: `ai-rag` (5 chapters), `ai-security` (5 chapters), `ai-agents` (8 chapters), `native-multimodality` (5 chapters) to meet AGENTS.md depth standards. (by Gemini)
- [x] Expanded task sets to 6 tasks each for `ai-rag`, `ai-security`, `ai-agents`, and `native-multimodality`, incorporating `categorize` and `scenario` task types. (by Gemini)
- [x] Fixed syntax errors and formatting in room data files for multiple rooms. (by Gemini)
- [x] Cleaned up unused imports in multiple theory components to reduce lint warnings. (by Gemini)

## Completed (2026-03-15 session — by Claude Code)
- [x] Built 3 new task components: `TaskCategorize`, `TaskTimeline`, `TaskScenario` (by Claude Code).
- [x] Built `Scenario Mission` task format with brief, constraints, scoring rubric, final decision report (by Claude Code).
- [x] Created room: Fine-Tuning & Adaptation (`fine-tuning-101`) — 12 tasks incl. categorize, scenario, mentor (by Claude Code).
- [x] Enriched fine-tuning-101 theory from detailed MD draft (9 chapters: LoRA math, pipelines, API, decision tree) (by Claude Code).
- [x] Created room: Embeddings & Vector Search (`embeddings-101`) — 10 tasks incl. timeline, categorize, sorting, scenario (by Claude Code).
- [x] Fixed smart quote / Unicode parsing issues across `AiSingularityTheory`, `PromptEvalsTheory`, `rooms.ts` (by Claude Code).
- [x] Removed orphaned duplicate task blocks in `rooms.ts` (after `ai-research` and `prompting-101`) (by Claude Code).
- [x] Synced all Russian mirror docs: PROGRESS.ru.md, CURRICULUM.ru.md, BACKLOG.ru.md, ROOMS_IDEAS.ru.md (by Claude Code).
- [x] Updated ROOMS_IDEAS.md from stale "9 rooms" to actual 19 rooms (by Claude Code).
- [x] Added mandatory agent rules to AGENTS.md: chapter text depth gate, chapter heading typography lock (by Claude Code).

## In Progress
- [ ] Launch DEC-002 implementation track for AI Learn Platform (`dec-002-platform-pipeline`): adapt Agent Ops into a terminal-session autonomous loop with 3 autonomy levels, Telegram approval gates, tiered review loop, quiet hours, and 4-hour digest cadence.

## Future Content (Room Pipeline)
- [ ] **Room 203: EvalOps Basics** — Build eval sets, score prompts/models, regression checks.
- [ ] **Room 301: AI Product Systems** — Routing, fallback, cost controls, incident playbooks.
- [ ] **AI Ethics & Bias** (`ai-ethics-bias`) — Training data bias, fairness metrics, case studies, responsible deployment.
- [ ] **AI in Production: Cost & Deployment** (`ai-production`) — Token pricing, latency budgets, caching, model routing, monitoring.
- [ ] **Code Generation & AI-Assisted Dev** (`ai-code-generation`) — Copilot/Cursor/Claude Code patterns, code review, test generation.
- [x] **Embeddings & Vector Search** (`embeddings-101`) — Embeddings, semantic similarity, vector DBs, chunking strategies.

## Grand Path Epic: Agent Coding
- [ ] **Grand Task: Agent Coding Path** (`agent-coding`) — launch a full end-to-end path with 12 rooms, practical labs, and capstone delivery.
- [x] **AC-101: Agent Coding Foundations** — problem framing, fast iteration loops, acceptance criteria.
- [x] **AC-102: Agentic Coding Tools** — tool-layer architecture, contracts, safety boundaries, release controls.
- [x] **AC-103: Prompt Contracts for Coding Agents** — translating product intent into prompt specs and failure boundaries.
- [x] **AC-104: Multi-Agent Collaboration Patterns** — decomposition, context windows, branch-per-task discipline.
- [x] **AC-201: CLI Tools for Agent Coding** — terminal discovery/change/verify loop, quality gates, rollback discipline.
- [x] **AC-202: Agentic Testing Loop** — test-first prompts, regression harnesses, flaky-test control.
- [x] **AC-203: Agentic UI Delivery** — design-to-code workflows, responsive constraints, accessibility checks.
- [ ] **AC-301: Shipping Agentic Features with Guardrails** — policy checks, red-team prompts, deployment gates.
- [ ] **AC-302: Cost & Latency Control for Agents** — model routing, caching, budget limits, observability.
- [ ] **AC-303: Team Protocols for Agent Coding** — PR templates, review rubrics, handoff standards.
- [ ] **AC-401: Production Incidents in Agentic Systems** — rollback playbooks, prompt hotfixes, postmortem templates.
- [ ] **AC-402: Agent Coding Capstone** — ship a feature from brief to production-grade release with eval evidence.

## Future Product & Learning
- [ ] Add adaptive learning flow: repeat weak topics + personalized next-room recommendations.
- [ ] Add spaced repetition mode (daily short review from previously failed tasks).
- [ ] Implement a reusable roadmap-style view mode for trajectory, path-selection, and progression screens using the `ROADMAP_VIEW_MODE.md` reference.
- [ ] Add Prompt Playground lab (system prompt, temperature, output comparison).
- [ ] Add Mini RAG lab with user-provided documents.
- [ ] Add motivation loops: weekly challenges, badges, shareable completion certificates.
- [ ] Expand settings: profile management (login/email/password), privacy controls (export/delete data), session controls.
- [ ] Expand settings: notification preferences (daily reminders, weekly summary).
- [ ] Add AI learning preferences: explanation depth and hint mode.
- [ ] Instrument analytics: task drop-off, room/path completion funnels, guest-to-auth conversion.

## Roadmap Additions (March 2026)
- [x] Build `Scenario Mission` task format (brief, constraints, scoring rubric, final decision report).
- [x] Add first mission to `llm-landscape` room (model choice + cost/safety tradeoff).
- [ ] Build Prompt Lab MVP (`/${lang}/labs/prompt-compare`) with side-by-side outputs.
- [ ] Add cost/latency estimator panel to Prompt Lab compare view.
- [ ] Implement "Mistake Notebook": save failed tasks and generate adaptive retries.
- [ ] Add free-text answer task type with rubric-based AI mentor feedback.
- [ ] Add content freshness metadata to rooms (last updated + source links).
- [ ] Add community sharing MVP for mission solutions (publish/bookmark/moderation queue).

## Completed (Backend & Auth)
- [x] Backend persistence (FastAPI + PostgreSQL, user accounts + progress stored server-side).
- [x] User authentication (signup/login/logout, JWT in httpOnly cookies).
- [x] Points system (+10 per task) and streak tracking.
- [x] Frontend auth integration (AuthProvider, useAuth hook, login page).
- [x] Navbar/Sidebar show real user data (points, streak, username, level).
- [x] useProgress hook upgraded to API with localStorage fallback.
- [x] Docker Compose setup for PostgreSQL.
- [x] Alembic migrations for database schema.

## Future Engineering
- [x] Sync guest localStorage progress to server on signup.
- [ ] Room completion analytics / leaderboard.
- [ ] Reduce lint warnings across theory components and hooks.

## Completed (2026-03-22 session — by Claude Code)
- [x] Split monolithic `src/data/rooms.ts` (5,143 lines) into `src/data/rooms/` directory: `types.ts`, `paths.ts`, `metadata.ts`, and 22 per-room task files under `tasks/`. Barrel re-export preserves all existing imports. (by Claude Code)
- [x] Extracted design tokens into Tailwind v4 `@theme` block in `globals.css`: 9 color tokens for surfaces and borders. Replaced ~680 hardcoded hex values (`border-[#262626]`, `bg-[#1a1a1a]`, `bg-[#141414]`, etc.) across 40+ component files with semantic classes (`border-border-card`, `bg-card`, `bg-card-dark`, etc.). (by Claude Code)
- [x] Extracted `TaskWrapper` component from 4 task components (TaskQuestion, TaskSorting, TaskCategorize, TaskTimeline). Shared container, icon header, success/error feedback now defined once. (by Claude Code)
