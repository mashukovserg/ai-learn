/**
 * Cross-cutting data-integrity rules for rooms, paths, and the task registry.
 * Source of truth for these rules: docs/AGENTS.md → "Task data validation gate" and
 * "Task ID sequencing". When you change a rule here, update docs/AGENTS.md too.
 */
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA, PATHS_METADATA, ROOM_TASKS } from '../index';
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
