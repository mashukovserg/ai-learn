# Agent Runtime Policy

What a test enforces is named here in one line, with the test that holds it — the detail lives in the test, which is checked on every run and cannot go stale. What stays in prose is what a test cannot carry: judgment, taste, and the history behind a decision.

The full pre-2026-09-07 text of this file, before that split, is archived verbatim in [`HISTORY.md`](HISTORY.md). If a rule was cut and you find you needed it, restore it from there — and add the test that should have been holding it.

Architecture and file layout live in `../CLAUDE.md`; this file is only the gates.

---

## Runtime

**Frontend must be up.** For any coding task — implementation, bugfix, review, study, audit, exploration — make sure `http://localhost:3000` answers, reuse it if it does, `npm run dev` from the repo root if it does not, and leave it running. Say in your report which of the two it was. The backend (`http://localhost:8000`) is only needed when the task asks for it; without it the frontend falls back to guest mode and `/api/*` returns 500s, which is expected, not a bug.

Explicit user overrides win ("don't start the server", "backend only", a custom port).

---

## Content gates

### Localization parity (Mandatory)

Any change to user-facing text ships in both `en` and `ru` in the same task. Never one locale alone unless the user explicitly asks for that.

### Task solvability (Mandatory)

The gate no test can hold, and the reason the others exist. After adding or editing tasks, walk through each one and ask: *can a learner who has read this room's theory, in this language, select the correct answer?* If the answer depends on anything not stated in the theory, the task or the theory is wrong. A task that classifies items ("pick the US-company models") needs that mapping stated explicitly in the theory.

The same guard applies to exhibits: a terminal or screenshot must never hand over a task's answer.

### Task data validation gate (Mandatory)

Enforced by `src/data/rooms/__tests__/task-shapes.test.ts` and `data-integrity.test.ts`: per-type field validity for all 8 `TaskType`s, `LocalizedString` completeness on every user-visible field, task-image existence and locale parity, and the task-mix rule (every room carries at least one `sorting` or `mentor` task — never MCQ/input only).

Worth knowing rather than rediscovering: **the components do no runtime validation at all**, so malformed task data does not throw — it silently produces a task nobody can solve. This gate is the only safety net.

### Task ID sequencing (Mandatory)

Task IDs within a room are sequential integers from 1, no gaps, no duplicates. Enforced by `data-integrity.test.ts`.

**Why it matters:** progress stores completed IDs as a `Set<number>` and compares `set.size` against `ROOM_TASKS[roomId].length`. A gap inflates the denominator without a reachable numerator, so the bar can never reach 100%; a duplicate lets one task shadow another, leaving the second permanently stuck.

### Chapter Text Depth Gate (Mandatory)

At least 240 words per language and 4 body paragraphs per theory chapter, unless the chapter is concise by design and labelled `Краткий блок` / `Short block` in both languages. Enforced by `src/components/theory/__tests__/chapter-depth.test.ts`.

**Scope is the judgment part.** The bar applies in full to new chapters and to any chapter you substantively edit. The 44 rooms that predate it are listed as debt in that test: bring a room up to the bar when you touch it for any other reason, and take it off the list. Do not mass-rewrite untouched rooms — prose padded to length is worse than short prose.

### Forbidden phrasing (Mandatory)

Never write the construction `это не просто` or the word `вендор` (any case form) — in theory text, docs, commit messages, PR notes, or replies to the user. Use a concrete contrast instead of the template, and for the second one a concrete alternative by context: `поставщик модели`, `игрок рынка`, `платформа`, `компания`.

Enforced by `src/__tests__/forbidden-phrasing.test.ts` across `src/`, `docs/` and the root docs. Quoting the pattern in order to talk about it — backticks, `«»`, `""` — is exempt, which is why this section can name what it forbids.

### Content and i18n consistency

1. Keep terminology support intact — wrap domain terms in `<Term>` and register them in `src/data/glossary.ts` with both locales.
2. Ask the owner which domain terms should get `<Term>` tooltips before shipping new theory.
3. Keep room titles and descriptions synchronized across the surfaces that render them.

---

## Design

### Design forks — do not silently collapse them (Mandatory)

Several design decisions are deliberately **open**: terminal styling, site and terminal typefaces, the accent green, page structure and density. They live in [`DESIGN_FORKS.md`](DESIGN_FORKS.md) (+ `.ru`) with paste-ready values for every option.

Before "fixing" a design inconsistency in those areas, check that file — the inconsistency may be a live fork rather than a defect. When you move a fork, record the move (new pick, demoted option, date, one line of rationale) in the same commit, and never delete the losing option.

### Design tokens (Mandatory)

Surfaces and borders are `@theme` tokens in `src/app/[lang]/globals.css`: `bg-card`, `bg-card-dark`, `bg-base`, `bg-deep`, `bg-input`, `bg-muted`; `border-border-card`, `border-border-subtle`, `border-border-emphasis`. Never introduce an arbitrary hex — reuse a token or add one.

**Address color by role, not by palette name.** A design change must never cost a repo-wide sweep. The evidence is in this repo: swapping the terminal look took minutes (11 `--color-term-*` tokens), while recoloring theory headings cost 250 replacements across 34 files, because the accent was hardcoded as `emerald-*` everywhere.

| Role | Use | Never |
|---|---|---|
| Brand / interactive accent | `text-accent-500`, `bg-accent-500/10` | `emerald-*` |
| Theory chapter headings | `text-heading` | `text-accent-*` (Fork 3 — the accent means *interactive*) |
| Terminal | `bg-term-bg`, `text-term-prompt`, … | literal hex |
| Error / failure | `text-danger-500` | `red-*` |
| Warning / caution | `text-warning-400` | `amber-*` |
| Informational | `text-info-400` | `blue-*` |
| Success | `text-success-400` | `green-*` |

Swapping the whole site accent means editing the ramp in `@theme` plus its `[data-theme="saas"]` override — 7 lines, no component edits. Categorical content hues (`cyan`, `rose`, `purple`, `violet`, `pink`, `orange`, `slate`, `yellow`) are deliberately not status roles and stay literal. Enforced by `src/__tests__/design-tokens.test.ts`.

**Trap — never write `text-base`.** `--color-base` is a *color* token, so Tailwind v4 generates `.text-base` as `color: var(--color-base)` — the page background — and that utility shadows the built-in font-size one, which is never emitted. So a plain `text-base` sets no size and quietly loses to a neighbouring `text-neutral-*`, while a `md:text-base` *wins* over it (variants come after base utilities) and paints the paragraph in the background color, invisible on both themes. This shipped unnoticed in `ai-career-trajectories` until 2026-08-23. Body copy already inherits the base size, so drop the utility; use `text-[1rem]` when a size is genuinely needed. `bg-base` is unaffected.

**Known boundary:** raster assets under `public/images/**` are not tokenized — a cover PNG keeps its baked-in colors through an accent swap.

### No leading icons in headings (Mandatory)

No decorative leading icons in headings — emphasis comes from typography, spacing and color. Enforced by `src/__tests__/heading-icons.test.ts`, which lists the 17 files that predate the rule as debt; strip the icons when you touch one.

**Chapter heading typography lock:** heading size is locked. Do not change it by default; if the user asks for a typography change, apply only the scope requested.

### Anti-Vibecode Frontend Gate (Mandatory)

Applies to UI composition and to user-facing lesson copy.

1. **Layout:** single-column reading flow for long narrative theory — no default desktop two-column split unless the user asks for a split comparison.
2. **Alignment:** body and summary text left-aligned; centered only on request.
3. **Typography:** no full-paragraph italics for core explanatory content.
4. **Restraint:** no decorative glow, neon or attention-grabbing shadow on core reading cards.
5. **Headings:** no leading icons (above).
6. **Tone:** analytical and concrete; no hype, no drama, no pathos-laden pronouncements. Ground a claim in a number or a source instead of asserting its importance.
7. **Comparison cards:** stacked sequential cards by default, not side-by-side splits.
8. **Evidence framing:** observations and tradeoffs, not absolute-dominance narratives.
9. Style and tone rewrites ship in both locales, same task.
10. An explicit user instruction overrides any point above, limited to the scope requested.

### Terminal component — a core design element (use it)

`src/components/Terminal.tsx` is part of the visual language, not a one-off: a GNOME-Terminal-on-Ubuntu window — aubergine `#300A24`, the Tango ANSI palette, Ubuntu Mono via the `--font-term` token. It stays dark in **both** themes (its `--color-term-*` tokens are deliberately not overridden in the `[data-theme="saas"]` block), so a terminal looks like a terminal on light UI too.

```tsx
import Terminal from '@/components/Terminal';
<Terminal title="ollama · zsh" lines={[
  { cmd: 'ollama pull llama3.1:8b', comment: lang === 'ru' ? '# скачать' : '# download' },
  { out: 'pulling manifest ... success' },
  { out: '✓ ready', tone: 'ok' },
]} />
```

Line kinds are `{ cmd, comment?, prompt? }` and `{ out, tone? }`; tones `dim` · `ok` · `bad` · `dir` · `link` · `warn` map to the Tango colors Ubuntu's `LS_COLORS` uses, so `ls`-style output renders faithfully.

- **Use it for:** command sequences, agent/tool-call sessions, REPL interactions, install→run→verify flows, red→green test loops, API sessions. Reach for it whenever a chapter shows a real command, and let terminals recur across the platform rather than sit in one or two rooms.
- **Not for:** static JSON/YAML/config or math — those stay plain `<pre>` on `bg-deep`. The terminal means *a session*; using it as a decorative frame for static data cheapens it.
- The look itself is an open fork (see above) and is token-driven — switching is a one-block swap in `globals.css`, never a component edit.

### Product screenshots — a core design element (seek them out)

The GUI counterpart of the Terminal rule. CLI content → `<Terminal>`; GUI content → a real screenshot. Use `src/components/Screenshot.tsx` (accent-bordered frame, clickable, full-screen lightbox — essential on mobile) rather than hand-rolling `<figure>` + `next/image`. Assets go in `public/images/rooms/<room-id>/`, named descriptively.

- **Seek them out, proactively.** Screenshots are the primary tool for keeping theory pages varied — walls of prose are the failure mode we design against. Don't wait for a chapter to "be about a GUI product": look in every room for a place a real capture carries meaning prose can't — a product UI, a neutral-instrument exhibit (the `chatgpt-moment` Wikimedia Pageviews chart is the model: third-party measurement, not a company's own numbers), a model catalog, a benchmark leaderboard, a primary-source document. Aim for ≥1 genuine exhibit in every content-heavy room.
- **Suitability beats quota.** An exhibit earns its place only if it is genuine, load-bearing (it *shows* evidence or teaches an interface the prose would otherwise merely assert), and interpreted. If you cannot capture a real one, ship the prose and log the gap in `BACKLOG.md` — never invent filler.
- **The sandwich is mandatory.** Text above introduces what the reader is about to see; the capture shows it; text below says how to read it and what the caveats are. A screenshot with no interpretation after it is decoration, not teaching.
- **Authenticity:** genuine captures only. No mocked-up UI, no AI-generated interfaces, no doctored numbers — a learner must be able to open the product and see the same thing. Crop to the relevant region; avoid or blur personal data. Prefer dark captures when the product has a dark theme.
- `alt` is mandatory and bilingual, as is a caption when present. The UI in the image may be English — that's authentic — but everything the platform renders around it ships in both locales.

---

## Working practice

### Commit hygiene — work must be committed to survive (Mandatory)

**The working tree is not durable.** Sessions re-sync to the latest merged `main`, and uncommitted edits to tracked files are silently wiped when the tree moves. This has cost real work more than once — the light-theme toggle kept vanishing until it was committed.

1. Work on a dedicated branch, never on an uncommitted `main` working tree.
2. When a logical unit is done: `npm run check-all`, then `git add` the specific paths — not `git add -A`, which sweeps in unrelated artifacts — then commit and `git push -u origin <branch>`.
3. New untracked files that belong to the change must be explicitly added; they are part of no commit until you do.
4. Never end a session with substantial uncommitted edits.
5. Pushing on the user's behalf follows the normal outward-action rule: confirm unless already authorized this session.

### Docs sync (Mandatory)

When behavior, setup, or content changes, update in the same task — and update the `*.ru.md` mirror of anything you touch that has one:

| File | When |
|---|---|
| `BACKLOG.md` (+ `.ru`) | Always. Mark the item `[x]` and log what you did in `## Completed`, with a `(by <agent>)` tag. Group by logical unit, not by file touched. Do it when the unit is finished — never defer to a future session. |
| `PROGRESS.md` (+ `.ru`) | A milestone row: date + what changed. |
| `CURRICULUM.md` (+ `.ru`) | Path, module, or room coverage changed. |
| `../README.md` (+ `.ru`) | Routes, architecture, or user-visible behavior changed. |
| `DEPLOYMENT.md` | See below. |
| `HISTORY.md` | A gate moved between prose and tests, or the policy changed substantially. |

Room counts are **not** maintained by hand anywhere. `ROOMS_METADATA.length` is the answer, and the registry guards fail `check-all` if the registries disagree.

### Deployment docs (Mandatory)

Update `DEPLOYMENT.md` in the same task when you change `backend/Dockerfile`, `next.config.ts`, `backend/settings.py`, `backend/.env.sample`, `docker-compose.yml`, add an Alembic migration with a deploy-time requirement, or add any new service, port or third-party integration.

What to update there: a **"What Was Changed"** entry with the before/after and why; the Environment Variables Reference table if vars moved; the startup commands if the sequence changed; the Architecture / Request Flow section if the topology changed. Do not defer it to a follow-up task.
