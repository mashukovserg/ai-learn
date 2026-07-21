export type {
  LocalizedString,
  TaskCountByType,
  LocalizedRoomMetadata,
  PathMetadata,
  LocalizedTask,
} from './types';

export { PATHS_METADATA } from './paths';
export { ROOMS_METADATA } from './metadata';
export { ROOM_TASKS } from './tasks';

import { ROOMS_METADATA } from './metadata';
import { PATHS_METADATA } from './paths';
import { ROOM_TASKS } from './tasks';
import { LocalizedRoomMetadata, LocalizedString, TaskCountByType, LocalizedTask } from './types';

/**
 * Rooms of a path, in the path's declared curriculum order (`roomIds`).
 *
 * Order comes from the PATH, not from ROOMS_METADATA array position — the
 * latter only records when a room was added, and a room can hold different
 * positions in different paths (e.g. `mcp-tool-ecosystems` appears in both
 * `agent-coding` and `agentic-systems`).
 *
 * Membership stays on the room (`pathIds`); a Vitest guard keeps the two in
 * sync. Any room that declares the path but is missing from `roomIds` is still
 * returned, appended at the end, so a wiring slip degrades gracefully instead
 * of hiding a room from learners.
 */
export function getRoomsByPath(pathId: string): LocalizedRoomMetadata[] {
  const members = ROOMS_METADATA.filter(r => r.pathIds?.includes(pathId));
  const order = PATHS_METADATA.find(p => p.id === pathId)?.roomIds ?? [];

  const ordered = order
    .map(id => members.find(r => r.id === id))
    .filter((r): r is LocalizedRoomMetadata => r !== undefined);

  const unordered = members.filter(r => !order.includes(r.id));

  return [...ordered, ...unordered];
}

/**
 * The room that follows `roomId` within a path — used for "what's next" after
 * a room is completed. Falls back to the room's first declared path when no
 * path is given. Returns null at the end of a path (never leaks into an
 * unrelated room, which raw ROOMS_METADATA index arithmetic used to do).
 */
export function getNextRoomInPath(
  roomId: string,
  pathId?: string
): LocalizedRoomMetadata | null {
  const room = ROOMS_METADATA.find(r => r.id === roomId);
  const targetPath = pathId ?? room?.pathIds?.[0];
  if (!targetPath) return null;

  const rooms = getRoomsByPath(targetPath);
  const idx = rooms.findIndex(r => r.id === roomId);

  return idx !== -1 && idx < rooms.length - 1 ? rooms[idx + 1] : null;
}

function buildTaskCountByType(tasks: LocalizedTask[]): TaskCountByType {
  const counts: TaskCountByType = {};

  for (const task of tasks) {
    counts[task.type] = (counts[task.type] ?? 0) + 1;
  }

  return counts;
}

function buildDefaultOutcomes(room: LocalizedRoomMetadata): LocalizedString[] {
  return [
    {
      ru: `Объяснять ключевые идеи комнаты "${room.title.ru}" своими словами.`,
      en: `Explain the key ideas of "${room.title.en}" in your own words.`,
    },
    {
      ru: 'Решать основные задания комнаты без подсказок.',
      en: 'Complete the room core tasks without hints.',
    },
    {
      ru: 'Применять изученные подходы к рабочим сценариям.',
      en: 'Apply the learned approaches to practical work scenarios.',
    },
  ];
}

for (const room of ROOMS_METADATA) {
  room.outcomes ??= buildDefaultOutcomes(room);
  room.taskCountByType = buildTaskCountByType(ROOM_TASKS[room.id] ?? []);
}
