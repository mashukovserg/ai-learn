---
title: AI Learn - Project Hub
aliases:
  - AI-Learn Platform Hub
  - AI Learning OS
type: project-hub
status: active
updated: 2026-02-15
tags:
  - ai-learning
  - project
  - dashboard
  - curriculum
---

# AI Learn - Project Hub

Single source of truth for the current state of the `ai-learning-platform` project.

## Overview

- Product: TryHackMe-style interactive platform for learning AI.
- Core UX: Dashboard, Rooms, Learning Paths, task-based lessons.
- Languages: English + Russian via dictionary i18n.
- UI Direction: Dark, compact, green-accent dashboard and room flow.

## Quick Links

- Main README: `../../README.md`
- Curriculum plan: `../CURRICULUM.md`
- Progress log: `../PROGRESS.md`
- Backlog: `../BACKLOG.md`
- Rooms index: `src/app/[lang]/rooms/page.tsx`
- Dashboard: `src/app/[lang]/page.tsx`
- Task component: `src/components/TaskQuestion.tsx`

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- UI: Tailwind CSS 4
- Animation: Framer Motion
- Icons: Lucide React
- i18n: Custom middleware + dictionaries

## Runbook

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start prod: `npm run start`
- Lint: `npm run lint`

## Current Project Structure

- App shell and routes: `src/app/[lang]/`
- Rooms pages: `src/app/[lang]/rooms/`
- Shared components: `src/components/`
- Dictionaries: `src/dictionaries/`
- Middleware: `src/middleware.ts`
- Obsidian notes: `docs/lessons/`

## Route Map

- `/{lang}` -> Dashboard
- `/{lang}/rooms` -> All Rooms list
- `/{lang}/rooms/{id}` -> Generic room page (currently LLM Landscape content)
- `/{lang}/rooms/llm-mechanics` -> How LLMs Think
- `/{lang}/rooms/prompting-101` -> Prompting 101
- `/{lang}/rooms/native-multimodality` -> Native Multimodality
- `/{lang}/paths` -> Learning paths overview
- `/{lang}/paths/beginner` -> Beginner path detail

## Lesson Inventory (Implemented)

1. Room 101: LLM Landscape
- Route: `/{lang}/rooms/{id}` (used by `llm-landscape`)
- Source: `src/app/[lang]/rooms/[id]/page.tsx`
- Task count: 11
- Includes: geopolitics, sovereign AI, ELO, model selection framework

2. Room 102: How LLMs Think
- Route: `/{lang}/rooms/llm-mechanics`
- Source: `src/app/[lang]/rooms/llm-mechanics/page.tsx`
- Task count: 4
- Includes: tokenization, next-token prediction, context windows, temperature
- Includes lab: Token Inspector + advanced terminal/Python task (`tiktoken`)

3. Room 103: Prompting 101
- Route: `/{lang}/rooms/prompting-101`
- Source: `src/app/[lang]/rooms/prompting-101/page.tsx`
- Task count: 6
- Includes: system prompts, zero-shot/few-shot, anti-hallucination patterns, prompt iteration

4. Room 201: Native Multimodality
- Route: `/{lang}/rooms/native-multimodality`
- Source: `src/app/[lang]/rooms/native-multimodality/page.tsx`
- Task count: 6
- Includes: vision patches, spectrogram/audio tokens, multimodal product stack

## Curriculum Plan (Planned Track)

- Path: AI Foundations (Основы AI)
- Module 1:
- Room 101: LLM Landscape
- Room 102: How LLMs Think
- Room 103: Prompting 101
- Module 2:
- Room 201: Native Multimodality
- Room 202: Research & Grounding (planned, not implemented yet)

## Rooms Index Status Note

- In `src/app/[lang]/rooms/page.tsx`, rooms currently use status badges:
- `llm-landscape` = `completed`
- `llm-mechanics` = `active`
- `prompting-101` = `locked`
- `native-multimodality` = `locked`
- Even though pages for Room 103 and Room 201 now exist, they are still visually locked in the rooms grid until status is changed.

## Dashboard State

- Primary CTA: Continue learning card above recommendations.
- Progress indicator added for current path.
- Recommended room cards compacted and iconized.
- Hover interactions improved with subtle elevation/border.
- Sentence-case section label for recommended rooms.

## User Progress Snapshot (from ../PROGRESS.md)

- User: Sergei
- Level: 1
- Points: 600
- Streak: 5 days
- Completion (logged): 2/6 planned rooms
- Completed rooms log:
- 2026-02-13: `llm-landscape`
- 2026-02-14: `llm-mechanics`

## Backlog Snapshot

- Completed:
- Core scaffold, i18n, dashboard, room layout, task system, rooms index, redesign, dashboard rework
- In progress:
- Persist task completion to local storage
- Success modal on room completion
- Optional/prototype auth
- Future content:
- Room 202: Research & Grounding

## Obsidian Lesson Notes (Existing)

- `LLM Landscape (EN).md`
- `LLM Landscape (RU).md`
- `How LLMs Think (EN).md`
- `How LLMs Think (RU).md`

## Recommended Next Sync

- Create Obsidian duplicates for:
- `Prompting 101` (EN/RU)
- `Native Multimodality` (EN/RU)
- Keep this hub updated whenever room status or route structure changes.
