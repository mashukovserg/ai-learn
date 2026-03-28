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
import { ROOM_TASKS } from './tasks';
import { LocalizedRoomMetadata, LocalizedString, TaskCountByType, LocalizedTask } from './types';

export function getRoomsByPath(pathId: string): LocalizedRoomMetadata[] {
  return ROOMS_METADATA.filter(r => r.pathIds?.includes(pathId));
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
