# Service Improvement Roadmap (March 2026)

## Product goals
- Improve learning outcomes (users understand and apply concepts, not just click through).
- Increase retention (users come back weekly and keep streaks).
- Make the platform more "hands-on" and portfolio-friendly.
- Keep quality trustworthy with sources, updates, and measurable progress.

## Prioritized initiatives

### 1) Scenario Missions (highest priority)
- What: add real-world mini-cases (support bot, recruiter assistant, research helper) where users make model + prompt + safety decisions.
- Why: theory becomes practical, users can show applied skill.
- Scope:
  - mission brief
  - constraints (latency, budget, privacy)
  - scoring rubric (quality/cost/safety)
  - final "decision report"
- Success metrics:
  - mission completion rate
  - average mission score
  - return rate after first mission

### 2) Prompt Lab with Side-by-Side Model Compare
- What: playground where one prompt is tested across 2-3 models with visible token/cost estimate and latency.
- Why: users learn tradeoffs, not just "best model" myths.
- Scope:
  - prompt editor + system prompt field
  - model selector
  - output compare cards
  - basic cost/latency panel
- Success metrics:
  - average lab sessions per user
  - share of users who run 2+ model comparisons

### 3) Adaptive Review ("Mistake Notebook")
- What: collect failed questions/tasks and generate short personalized review sessions.
- Why: stronger long-term retention and visible learning loop.
- Scope:
  - save failed task IDs + tags
  - daily/weekly retry queue
  - "fixed after retry" tracking
- Success metrics:
  - retry completion rate
  - fail-to-pass conversion

### 4) AI Mentor Feedback on Open Answers
- What: allow short free-text answers and score them with rubric-based AI feedback.
- Why: richer learning than multiple choice.
- Scope:
  - free-text task type
  - rubric criteria (accuracy, clarity, constraints awareness)
  - feedback with concrete improvement tips
- Success metrics:
  - % of users submitting free-text answers
  - quality score improvement on second attempt

### 5) Evidence-First Content Quality
- What: add "last updated" and source links per major theory block.
- Why: trust and transparency, especially for fast-changing AI topics.
- Scope:
  - source section per room
  - changed-date metadata
  - optional confidence note
- Success metrics:
  - source-click rate
  - lower user confusion/complaint rate about outdated info

### 6) Lightweight Community Layer
- What: optional sharing of mission solutions and prompt patterns (with moderation).
- Why: social proof + motivation loop.
- Scope:
  - publish/unpublish solution
  - simple upvote/bookmark
  - moderation queue
- Success metrics:
  - number of shared solutions
  - % users interacting with community content

## Suggested rollout plan

### Phase 1 (2-3 weeks)
- Scenario Missions v1 (one mission template)
- Prompt Lab MVP (single compare view)
- Source links + last-updated metadata for top rooms

### Phase 2 (2-4 weeks)
- Mistake Notebook + adaptive retries
- Mentor feedback for open answers (pilot in 1-2 rooms)

### Phase 3 (later)
- Community sharing layer
- Team/classroom mode (if B2B focus appears)

## Quick wins this week
- Add "last updated" + source links to all existing theory rooms.
- Add 1 mission-style task to `llm-landscape`.
- Add a basic compare UI block in settings or labs page as a prototype.

