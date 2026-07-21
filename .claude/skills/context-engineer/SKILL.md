---
name: context-engineer
description: "Manage this project's persistent context: audit and optimize CLAUDE.md, docs/AGENTS.md, the docs/ knowledge layers, and the RU mirrors. Invoke when context is stale, duplicated, bloated, out of sync with the code, or when a durable fact needs to be recorded in the right layer."
argument-hint: "[audit | update <topic> | add <fact> | restructure | cleanup]"
---

# Context Engineer — persistent context for ai-learning-platform

Action: $ARGUMENTS

## What this skill owns

Context engineering here means managing everything an agent loads before it can work on this
repo. Good context is the minimal volume of maximally useful information — every always-loaded
line competes with the actual task for attention. This project's context is a **docs/ system**,
not a `memory/` folder: the layers below are the real ones.

| Layer | Files | Loaded | Holds |
|---|---|---|---|
| Constitution | `CLAUDE.md` (root) | always | stack, structure, gates digest, commands |
| Mandatory gates | `docs/AGENTS.md` | on content/code work | runtime + authoring rules, design elements |
| Rationale | `docs/CLAUDE.md` | on demand | "why these choices" |
| Work log | `docs/BACKLOG.md` + `.ru.md` | on demand | completed work, `(by <agent>)` tags |
| Status | `docs/PROGRESS.md` + `.ru.md` | on demand | milestones, room counters |
| Curriculum | `docs/CURRICULUM.md` + `.ru.md` | on demand | module/room coverage |
| Room pipeline | `docs/ROOM_DEVELOPMENT.md` + `.ru.md` | on demand | priority queue, shipped log |
| Design forks | `docs/DESIGN_FORKS.md` + `.ru.md` | on demand | **open** design decisions + paste-ready alternatives |
| Topic files | `TESTING`, `DEPLOYMENT`, `ROADMAP_3M`, `references/` | on demand | deep reference |

**Ground truth always wins over docs.** Room counts come from `src/data/rooms/metadata.ts`, test
counts from `npm run test`, wiring from `THEORY_COMPONENTS`. When a doc disagrees with the code,
the doc is wrong.

## Operations

### 1. AUDIT — diagnose context health

Run every check; report ✅/⚠/❌ per item with the concrete fix. These are the failure modes this
repo has actually hit — do not skip any.

**Counter consistency (highest value — has drifted repeatedly)**
- [ ] Actual room count: `grep -c "^    id: '" src/data/rooms/metadata.ts`
- [ ] Does it match `CLAUDE.md` (2 places), `docs/CLAUDE.md` (3 places), `docs/AGENTS.md`
      (inventory + `THEORY_COMPONENTS` count), `README.md`, `PROGRESS.md` (+ `.ru`)?
- [ ] Test count in docs vs actual `npm run test` output

**RU mirror parity**
- [ ] Every `docs/*.md` with a `.ru.md` twin: does the twin have the same latest entries?
- [ ] A doc changed in this session without its mirror = ❌ (Localization Gate)

**Staleness against reality**
- [ ] References to files/paths that no longer exist (verify each with `ls`)
- [ ] "awaiting X" / "TODO" / "pending" items that are actually done (check `git log`)
- [ ] Superseded numbers, versions, dates

**Forbidden phrasing**
- [ ] `grep -riE "это не просто|вендор" docs/ CLAUDE.md src/` — hits outside the rule
      definitions themselves are violations. Check `src/components/theory/` too: older rooms
      predate the gate and still carry violations.

> **Distinguish history from current state.** A counter inside a dated milestone or shipped-log
> row ("as of 2026-07-15: 39/39 rooms wired") is correct history and must NOT be "fixed".
> Only *current-state* statements — inventories, structure comments, status lines — have to match
> the code today. Scope counter greps to those, or you will generate false positives.

**Orphaned work (has bitten twice)**
- [ ] `git status --short docs/` — untracked docs referenced by committed docs will break on the
      next working-tree re-sync. Flag them for commit.

**Cross-references**
- [ ] Every relative link in docs resolves to an existing file

**Design forks vs code**
- [ ] Does `DESIGN_FORKS.md`'s "current pick" match the actual tokens in
      `src/app/[lang]/globals.css`? A drift here means a fork move went unrecorded.

Output: a table of findings, then a ranked fix list. Do not fix silently — show first.

### 2. ADD `<fact>` — record one durable fact

Verify before writing: is it confirmed (not a guess)? Is it durable (not session-specific)?
Does it duplicate something? Does it contradict `CLAUDE.md`?

Then choose the layer:

```
Is it a RULE that must hold in every session?
├─ YES → docs/AGENTS.md (gate) + one digest line in CLAUDE.md if it is load-bearing
└─ NO → Is it an OPEN design decision with live alternatives?
    ├─ YES → docs/DESIGN_FORKS.md (+ .ru) — never as a settled fact
    └─ NO → Is it work that was completed?
        ├─ YES → docs/BACKLOG.md (+ .ru), with a (by <agent>) tag
        └─ NO → the matching topic file (TESTING / DEPLOYMENT / CURRICULUM / …)
```

Style: telegraphic. Lead with the WHAT. `code` for paths and commands. Tables over prose for
structured data. Write the RU mirror **in the same task**.

### 3. UPDATE `<topic>` — refresh a knowledge area

1. Read every file that touches the topic (including `.ru` mirrors).
2. Verify each claim against the code, not against other docs.
3. Prefer editing an existing entry over appending a new one.
4. Update all mirrors and counters in the same pass.

### 4. RESTRUCTURE — reorganize layers

Triggers: a file covers several unrelated topics; the same fact lives in three places; a new
major area appeared with no home; `CLAUDE.md` has grown detail that belongs in a topic file.

Process: read all context files → classify each block (rule / open decision / completed work /
reference) → move to the owning layer → leave a pointer where content moved from → present the
plan before executing.

### 5. CLEANUP — delete the dead

Delete beats archive: dead context is worse than none, because it lies. Cross-reference with
`git log` and the filesystem before deleting, list what goes with a reason, get approval, execute,
update the mirrors.

## Rules

- NEVER record an unverified claim; verify against code, `git log`, or a live check.
- NEVER change one locale of a mirrored doc without the other.
- NEVER present an open design fork as a settled decision — that is `DESIGN_FORKS.md`'s job.
- ALWAYS re-derive counters from the source of truth rather than copying them between docs.
- ALWAYS show proposed edits to `CLAUDE.md` or `docs/AGENTS.md` before writing them.
- Prefer editing over adding. Prefer a topic file when unsure (lowest risk).
- Commit docs work in the same task — the working tree is not durable (see the Commit hygiene
  gate in `docs/AGENTS.md`).
