/**
 * Cross-cutting data-integrity rules for rooms, paths, and the task registry.
 * Source of truth for these rules: docs/AGENTS.md → "Task data validation gate" and
 * "Task ID sequencing". When you change a rule here, update docs/AGENTS.md too.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ROOMS_METADATA, PATHS_METADATA, ROOM_TASKS, getRoomsByPath, getNextRoomInPath } from '../index';
import type { LocalizedRoomMetadata, LocalizedString } from '../types';

// A LocalizedString field is "valid" only when both EN and RU are non-empty.
function isFilledLocalized(value: unknown): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as LocalizedString).en === 'string' &&
    typeof (value as LocalizedString).ru === 'string' &&
    (value as LocalizedString).en.trim().length > 0 &&
    (value as LocalizedString).ru.trim().length > 0
  );
}

describe('ROOMS_METADATA structure', () => {
  it('has unique room ids', () => {
    const ids = ROOMS_METADATA.map(r => r.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates, `duplicate room ids: ${duplicates.join(', ')}`).toEqual([]);
  });

  it.each(ROOMS_METADATA.map(r => [r.id, r] as const))(
    '%s has filled bilingual title/description/category/time',
    (_id, room: LocalizedRoomMetadata) => {
      expect(isFilledLocalized(room.title), `title for ${room.id}`).toBe(true);
      expect(isFilledLocalized(room.description), `description for ${room.id}`).toBe(true);
      expect(isFilledLocalized(room.category), `category for ${room.id}`).toBe(true);
      expect(isFilledLocalized(room.time), `time for ${room.id}`).toBe(true);
    }
  );

  it.each(ROOMS_METADATA.map(r => [r.id, r] as const))(
    '%s has a non-empty image path',
    (_id, room: LocalizedRoomMetadata) => {
      expect(typeof room.image === 'string' && room.image.length > 0, `image for ${room.id}`).toBe(true);
    }
  );
});

describe('PATHS_METADATA structure', () => {
  it('has unique path ids', () => {
    const ids = PATHS_METADATA.map(p => p.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates).toEqual([]);
  });

  it.each(PATHS_METADATA.map(p => [p.id, p] as const))(
    'path %s has filled bilingual title/description/difficulty',
    (_id, path) => {
      expect(isFilledLocalized(path.title), `title for ${path.id}`).toBe(true);
      expect(isFilledLocalized(path.description), `description for ${path.id}`).toBe(true);
      expect(isFilledLocalized(path.difficulty), `difficulty for ${path.id}`).toBe(true);
    }
  );
});

describe('Room ↔ Path references', () => {
  const pathIds = new Set(PATHS_METADATA.map(p => p.id));

  it.each(
    ROOMS_METADATA.flatMap(room =>
      (room.pathIds ?? []).map(pid => [room.id, pid] as const)
    )
  )('room %s references existing path %s', (_roomId, pathId) => {
    expect(pathIds.has(pathId), `path "${pathId}" not found in PATHS_METADATA`).toBe(true);
  });

  it.each(PATHS_METADATA.filter(p => p.unlocked).map(p => [p.id] as const))(
    'unlocked path %s has at least one room',
    pathId => {
      const rooms = ROOMS_METADATA.filter(r => r.pathIds?.includes(pathId));
      expect(rooms.length, `no rooms attached to unlocked path "${pathId}"`).toBeGreaterThan(0);
    }
  );
});

describe('ROOM_TASKS ↔ ROOMS_METADATA registry', () => {
  const taskRoomIds = new Set(Object.keys(ROOM_TASKS));
  const metadataRoomIds = new Set(ROOMS_METADATA.map(r => r.id));

  it.each(Array.from(taskRoomIds).map(id => [id] as const))(
    'task room %s also exists in ROOMS_METADATA',
    roomId => {
      expect(metadataRoomIds.has(roomId), `${roomId} has tasks but no metadata entry`).toBe(true);
    }
  );

  it.each(Array.from(metadataRoomIds).map(id => [id] as const))(
    'metadata room %s also exists in ROOM_TASKS',
    roomId => {
      expect(taskRoomIds.has(roomId), `${roomId} has metadata but no tasks registered`).toBe(true);
    }
  );

  it.each(Array.from(taskRoomIds).map(id => [id] as const))(
    'room %s has at least one task',
    roomId => {
      const tasks = ROOM_TASKS[roomId];
      expect(tasks.length, `${roomId} has zero tasks`).toBeGreaterThan(0);
    }
  );
});

describe('Task ID sequencing (docs/AGENTS.md → "Task ID sequencing")', () => {
  it.each(Object.keys(ROOM_TASKS).map(id => [id] as const))(
    'room %s has sequential task ids 1..N with no gaps or duplicates',
    roomId => {
      const tasks = ROOM_TASKS[roomId];
      const ids = tasks.map(t => t.id);
      const expected = Array.from({ length: tasks.length }, (_, i) => i + 1);
      // Failure here means: the progress bar can never reach 100% for this room.
      // See docs/AGENTS.md → "Task ID sequencing" for the why.
      expect(ids).toEqual(expected);
    }
  );
});

describe('Task common fields', () => {
  const allTasks = Object.entries(ROOM_TASKS).flatMap(([roomId, tasks]) =>
    tasks.map(task => [`${roomId}#${task.id}`, task] as const)
  );

  it.each(allTasks)('%s has a filled bilingual question', (_label, task) => {
    expect(isFilledLocalized(task.question)).toBe(true);
  });

  it.each(allTasks)('%s has a filled bilingual explanation', (_label, task) => {
    expect(isFilledLocalized(task.explanation)).toBe(true);
  });

  it.each(allTasks)('%s declares a known task type', (_label, task) => {
    expect([
      'input',
      'multiple-choice',
      'multiple-select',
      'sorting',
      'mentor',
      'categorize',
      'timeline',
      'scenario',
    ]).toContain(task.type);
  });
});

describe('Task images (docs/AGENTS.md → "Task data validation gate")', () => {
  const tasksWithImages = Object.entries(ROOM_TASKS).flatMap(([roomId, tasks]) =>
    tasks
      .filter(t => t.image !== undefined)
      .map(t => [`${roomId}#${t.id}`, t] as const)
  );

  // it.each on an empty list throws, so guard the whole block.
  if (tasksWithImages.length === 0) {
    it('no task images declared (nothing to validate)', () => {
      expect(tasksWithImages).toEqual([]);
    });
    return;
  }

  it.each(tasksWithImages)('%s image.src points to an existing file under public/', (_label, task) => {
    const src = task.image!.src;
    expect(typeof src === 'string' && src.startsWith('/'), `src must start with "/": ${src}`).toBe(true);
    const filePath = path.join(process.cwd(), 'public', src);
    expect(fs.existsSync(filePath), `missing file: public${src}`).toBe(true);
  });

  it.each(tasksWithImages)('%s image.alt is bilingual (and caption too, when present)', (_label, task) => {
    expect(isFilledLocalized(task.image!.alt), 'alt must be filled {en, ru}').toBe(true);
    if (task.image!.caption !== undefined) {
      expect(isFilledLocalized(task.image!.caption), 'caption must be filled {en, ru}').toBe(true);
    }
  });
});

/**
 * Path room ordering. Order is a curriculum decision owned by the PATH
 * (`PATHS_METADATA[].roomIds`), while membership is declared on the ROOM
 * (`pathIds`). Two sources of truth stay honest only if something checks them —
 * without this, a new room silently lands at the end of its path (which is how
 * `context-engineering-101` ended up after the Advanced rooms).
 */
describe('path room ordering', () => {
  it.each(PATHS_METADATA.map(p => [p.id, p] as const))(
    '%s: roomIds exactly matches the rooms declaring this path',
    (pathId, path) => {
      const declared = ROOMS_METADATA
        .filter(r => r.pathIds?.includes(pathId))
        .map(r => r.id)
        .sort();
      const ordered = [...path.roomIds].sort();

      const missing = declared.filter(id => !ordered.includes(id));
      const extra = ordered.filter(id => !declared.includes(id));

      expect(
        { missing, extra },
        `\nPath "${pathId}" is out of sync.\n` +
          (missing.length ? `  Rooms declaring pathIds but absent from roomIds (they would fall to the end): ${missing.join(', ')}\n` : '') +
          (extra.length ? `  Ids in roomIds with no matching room: ${extra.join(', ')}\n` : '')
      ).toEqual({ missing: [], extra: [] });
    }
  );

  it.each(PATHS_METADATA.map(p => [p.id, p] as const))(
    '%s: roomIds has no duplicates',
    (_pathId, path) => {
      expect(new Set(path.roomIds).size).toBe(path.roomIds.length);
    }
  );
});

/**
 * "What's next" after finishing a room must stay inside the learning path.
 * The previous implementation indexed into ROOMS_METADATA, so the last room of
 * a path handed the learner an unrelated room from whatever happened to sit
 * next in the array.
 */
describe('next room stays within the path', () => {
  it.each(PATHS_METADATA.map(p => [p.id] as const))(
    '%s: every room points to its successor, and the last one points nowhere',
    (pathId) => {
      const rooms = getRoomsByPath(pathId);
      expect(rooms.length, `path ${pathId} has no rooms`).toBeGreaterThan(0);

      rooms.forEach((room, i) => {
        const next = getNextRoomInPath(room.id, pathId);
        if (i === rooms.length - 1) {
          expect(next, `last room of ${pathId} must not leak into another path`).toBeNull();
        } else {
          expect(next?.id, `${room.id} should be followed by ${rooms[i + 1].id}`).toBe(rooms[i + 1].id);
        }
      });
    }
  );

  it('a next room always belongs to the same path', () => {
    for (const path of PATHS_METADATA) {
      for (const room of getRoomsByPath(path.id)) {
        const next = getNextRoomInPath(room.id, path.id);
        if (next) {
          expect(
            next.pathIds?.includes(path.id),
            `${room.id} -> ${next.id} leaves path ${path.id}`
          ).toBe(true);
        }
      }
    }
  });
});
