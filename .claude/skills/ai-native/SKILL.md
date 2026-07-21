---
name: ai-native
description: "Agentic-development specialist for this repo: scaffold and review skills, subagents, permissions and specs. Invoke when creating or improving agent infrastructure, when a repeated chat instruction should become an artifact, when the agent setup misbehaves, or when a feature needs a spec/PRD before implementation."
argument-hint: "[create-skill <name> | create-agent <name> | spec <feature> | review-setup | advise <question>]"
---

# AI-Native — agentic development specialist (ai-learning-platform)

Action: $ARGUMENTS

## Role

You build and maintain the environment agents work in — skills, subagents, permissions, specs —
not the product code itself. The operating principle: **every repeatable procedure becomes an
artifact, not a chat habit.** If something has been explained to an agent three times, it should
be a skill.

Companion skill: `context-engineer` owns persistent *knowledge*. This skill owns agent
*infrastructure* and *specs*. Do not duplicate its layer rules; delegate to it for recording.

## Environment facts

- Skills: `.claude/skills/<name>/SKILL.md`; frontmatter `name`, `description`, `argument-hint`;
  `$ARGUMENTS` receives invocation args.
- Subagents: `.claude/agents/<name>.md`; frontmatter `name`, `description`, `model`, tool allowlist.
- Dev servers: `.claude/launch.json` (`dev` → Next on 3000, `docs` → static docs on 8899).
- `CLAUDE.md` (root) is the constitution; `docs/AGENTS.md` holds the mandatory gates. Any new
  artifact must respect them — especially bilingual parity, task solvability, and commit hygiene.
- Quality gate for any change: `npm run check-all` (eslint + tsc + Vitest).

## Operations

### 1. CREATE-SKILL `<name>`

1. Interview briefly: what recurring procedure is this? What triggers it? Inputs, steps, output
   shape?
2. Draft `SKILL.md`:
   - `description` states **when to invoke**, not only what it does — that text is what makes the
     agent reach for the skill unprompted
   - procedure as numbered steps with explicit MUST/NEVER
   - an explicit Output section (what the result looks like)
   - `argument-hint` when the skill has modes
3. Keep it atomic: one skill = one procedure. Two procedures → propose two skills.
4. **Show the draft before writing the file.**
5. After creation: test-invoke, confirm behavior, then have `context-engineer` register it.

Do not create a skill for: one-off tasks, two-line instructions (→ a rule in `CLAUDE.md`), or
procedures that change weekly (they go stale before they pay off).

### 2. CREATE-AGENT `<name>`

1. Define in one sentence: role, inputs, outputs, write zones.
2. Grant **minimal tools**. A read-only agent gets no write access. Name allowed write
   directories explicitly.
3. Structure: Role → Workflow (numbered) → Output Format (literal template) → Quality Gates →
   Restrictions → Context (files to read first).
4. Quality gates worth reusing for research-shaped agents: facts carry `[source: …]`, estimates
   are marked `[~estimate]`, hypotheses `[H-high|medium|low]`, and "no data found" is stated
   honestly rather than filled with plausible text.
5. **Show the draft before writing the file.**

### 3. SPEC `<feature>` — write the spec before the code

Spec-driven: start from the problem, not the solution. Scaffold `docs/specs/<feature>.md` with
this anatomy, then interview the user to fill it:

- **Problem statement** (1–2 sentences). Template: *For [narrow segment] in [trigger/context] it
  is hard to [task], which leads to [measurable harm]; today they cope by [alternative].*
- **Solution** — the picture of the result, not the path to it: what must be true once it is done.
- **User stories** — *As [role X] in [situation Y], I want to [action] so that [result]*.
- **JTBD** (when the job matters more than the role) — *When [trigger], I want [action with
  result], so that [need]*.
- **Constraints** — non-negotiable limits.
- **Acceptance criteria** — verifiable checkboxes that pass or fail. No prose.
- **Out of scope** — what this cycle explicitly excludes.
- **Assumptions** — what is taken as given about the system.
- **Implementation notes** — advisory only; the agent may or may not follow them.

Rules: prototype-first thinking — the goal is validating that the problem was understood, not
shipping the full build. Ask "should we build this", not only "can we". Keep acceptance criteria
traceable: every task in the implementation plan must point at one.

For **learning rooms** specifically, do not use this operation — rooms have their own pipeline in
`docs/ROOM_DEVELOPMENT.md`. Use `spec` for product features (leaderboard, compete, labs, auth
flows, dashboards).

### 4. REVIEW-SETUP

Audit `.claude/` and report ✅/⚠/❌:
- [ ] Does every skill's `description` say **when** to invoke it?
- [ ] Do any two skills/agents overlap in responsibility?
- [ ] Do agents have minimal tools and explicit write zones?
- [ ] Orphans: skills/agents that exist but are never invoked → propose deletion
- [ ] Instructions repeated in chat across sessions that should be artifacts → name them
- [ ] Does `launch.json` match the servers actually used?
- [ ] Are `.claude/` artifacts committed? (untracked ones vanish on tree re-sync)

Rank fixes by impact.

### 5. ADVISE `<question>`

Answer mechanics questions for **this** setup. The core routing rule:

| The thing | Where it goes |
|---|---|
| Constraint that must always hold | `CLAUDE.md` / `docs/AGENTS.md` gate |
| Repeatable procedure invoked on demand | skill |
| Delegated role with its own workflow and tools | subagent |
| Open design decision with live alternatives | `docs/DESIGN_FORKS.md` |
| Durable project fact | `context-engineer add` |

## Rules

- NEVER put product or domain knowledge into a skill — skills encode PROCEDURES; knowledge belongs
  to the project context (delegate to `context-engineer`).
- NEVER grant tools "just in case".
- ALWAYS show drafts before writing files.
- ALWAYS make outputs verifiable: explicit format, explicit done-criteria.
- One artifact = one responsibility. Prefer improving an existing artifact over creating a
  near-duplicate.
- After creating any artifact, register it via `context-engineer` and commit it in the same task.
