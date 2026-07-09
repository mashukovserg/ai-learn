# 🤖 Agentic Coding Prompts for AI-Learn Platform

This file contains optimized prompts for AI agents (Gemini, Claude, GPT) to assist in the development of the AI-Learning Platform.

## 🛠 Feature Implementation

### 1. Create a New Learning Room
**Context:** Use this when adding a new topic to the platform.
**Prompt:**
> "I want to create a new room called '[ROOM_ID]'.
> 1. Add the metadata to `src/data/rooms/metadata.ts` with a title, description, and difficulty level in both RU and EN.
> 2. Create the theory component in `src/components/theory/[RoomName]Theory.tsx` following the 'Pragmatic Instructional Narrative' style (5 chapters, tooltips for terms).
> 3. Create a task file `src/data/rooms/tasks/[ROOM_ID].ts` with 6-10 tasks using at least 3 different task types (e.g., multiple-choice, sorting, scenario), then register it in `src/data/rooms/tasks/index.ts`.
> 4. Ensure all content is perfectly localized in Russian and English."

### 2. Implement a New Interactive Task Type
**Context:** Use this to extend the learning engine.
**Prompt:**
> "I need to add a new task type called '[TASK_TYPE]' to the platform.
> 1. Define the type interface in `src/types/room.ts`.
> 2. Create a new React component `src/components/tasks/Task[Name].tsx` using Tailwind CSS and Framer Motion for animations.
> 3. Integrate the new component into the main room renderer in `src/app/[lang]/rooms/[id]/page.tsx`.
> 4. Add a sample task of this type to the 'llm-landscape' room for testing."

---

## 🐛 Debugging & Refactoring

### 3. Refactor Metadata (Eliminate Duplication)
**Context:** Use this to fix the SSOT issue.
**Prompt:**
> "Analyze the project and find all places where room metadata (titles, icons, descriptions) is hardcoded (e.g., in `Sidebar.tsx`, `Dashboard.tsx`, `Paths.tsx`).
> Refactor the code to import this data exclusively from `src/data/rooms/`.
> Ensure that the UI remains consistent and no translations are lost."

### 4. Implement Guest-to-Auth Progress Sync
**Context:** Syncing localStorage to the Database.
**Prompt:**
> "Modify the authentication flow to sync progress for guest users.
> 1. In `useAuth.tsx`, after a successful login/signup, read all `progress:*` keys from `localStorage`.
> 2. Create a new backend endpoint `POST /api/progress/sync` that accepts a list of room IDs and completed task IDs.
> 3. Update the `UserProgress` table in the database with this data.
> 4. Ensure that we don't overwrite existing server-side progress if it's further ahead."

---

## 🧪 Testing & Quality

### 5. Generate Unit Tests for Hooks
**Context:** Adding reliability.
**Prompt:**
> "Write Vitest unit tests for the `useProgress` hook in `src/hooks/useProgress.ts`.
> Test the following scenarios:
> 1. Initial state when no progress exists.
> 2. Fetching progress from the API when authenticated.
> 3. Falling back to localStorage when the API fails.
> 4. Updating both API and localStorage when `markCompleted` is called."

---

## 📝 Content & Localization

### 6. Deep Audit of Localization
**Context:** Finding missing translations.
**Prompt:**
> "Scan all files in `src/components/theory/` and `src/data/rooms/`.
> Identify any strings that are only available in one language.
> Provide the missing translations and update the files to ensure 100% parity between EN and RU."
