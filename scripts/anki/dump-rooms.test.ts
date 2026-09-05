/**
 * Dumps ROOMS_METADATA, PATHS_METADATA and ROOM_TASKS to scripts/anki/rooms.json
 * so build_deck.py can turn them into an Anki package.
 *
 * Runs through Vitest because the task files are TypeScript with the `@/*`
 * alias and type-only imports; Node's own type stripping cannot load them.
 *
 *   npx vitest run --config scripts/anki/vitest.config.ts
 *
 * Deliberately outside the root Vitest `include` so `npm run test` never
 * writes files.
 */
import { it } from 'vitest';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOM_TASKS } from '@/data/rooms/tasks';
import { ROOMS_METADATA } from '@/data/rooms/metadata';
import { PATHS_METADATA } from '@/data/rooms/paths';

it('writes scripts/anki/rooms.json', () => {
  const out = join(__dirname, 'rooms.json');
  writeFileSync(
    out,
    JSON.stringify({ rooms: ROOMS_METADATA, paths: PATHS_METADATA, tasks: ROOM_TASKS }),
    'utf8',
  );
});
