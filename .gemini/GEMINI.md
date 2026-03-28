# AI-Learn Platform Project Context

## Project Memories
- **Automatic Dev Server:** Whenever working on this project, automatically start the development server using `npm run dev` in the background (port 3000).
- **Writing Style:** Use 'Pragmatic Instructional Narrative' for room content: 
    1. Conceptual analogies (scaffolding).
    2. Conversational tone.
    3. Contextual justification ('why' it matters).
    4. Roadmap-oriented.
- **JSX Safety:** Always escape single quotes in JSX text content (use `&apos;` or `&quot;`) to prevent parsing errors that crash the build.
- **Verification Rule:** Before finalizing any code changes, always run `npm run check-all` to verify both linting and TypeScript types.

## Content Creation Protocol
- **Task Mix Rule:** Every room must include at least one "sorting" (drag-to-reorder) or "mentor" (dialogue-based) task to ensure high interactivity.
- **Terminology Tooltip Rule:** Any complex technical term (e.g., "Latents", "Weights", "KV-Cache", "RAG") mentioned in theory must have an accompanying tooltip or clear inline explanation for beginners.
- **Explicit Mapping Rule:** If a task asks for classification or specific facts (e.g., "Select models from US companies"), the theory text must explicitly state those mappings to ensure every task is solvable using only the provided lesson content.

## Current State
- **Implemented Rooms:** 12 rooms across 'AI Foundations', 'Ideas and Debates', and 'Practice' modules.
- **Metadata Source:** `src/data/rooms/` directory is the single source of truth for all room metadata (`metadata.ts`), types (`types.ts`), paths (`paths.ts`), and per-room tasks (`tasks/<room-id>.ts`).
- **Architecture:** Next.js 16 (App Router) + FastAPI (Python) backend.
- **Design Tokens:** Surface and border colors are defined as Tailwind v4 `@theme` tokens in `src/app/[lang]/globals.css`. Use `bg-card`, `bg-card-dark`, `bg-base`, `bg-deep`, `bg-input`, `bg-muted` for backgrounds and `border-border-card`, `border-border-subtle`, `border-border-emphasis` for borders. Never use arbitrary hex values like `bg-[#1a1a1a]` or `border-[#262626]`.
