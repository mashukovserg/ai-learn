import { PATHS_METADATA, getRoomsByPath } from '@/data/rooms';
import type { LocalizedRoomMetadata, PathMetadata } from '@/data/rooms';

export type RoomStatus = 'not-started' | 'in-progress' | 'completed';

export interface ContinuePlan {
  path: PathMetadata;
  /** Rooms of the path, in curriculum order. */
  rooms: LocalizedRoomMetadata[];
  completedCount: number;
  /** The room the CTA opens; null once every room of the path is completed. */
  next: LocalizedRoomMetadata | null;
  /** Up to `upcomingLimit` unfinished rooms after `next`, in path order. */
  upcoming: LocalizedRoomMetadata[];
  /** True when the learner has touched at least one room of this path. */
  started: boolean;
}

/**
 * Decides what the dashboard's "continue" block shows.
 *
 * Path choice, first match wins:
 * 1. the unfinished unlocked path that holds the last room the learner worked in;
 * 2. the first unlocked path with progress that is not finished yet;
 * 3. the first unlocked path (the default entry point, `beginner`).
 *
 * Next room: the last room, if it is in this path and still in progress;
 * otherwise the first room of the path that is not completed.
 */
export function planContinue(
  getStatus: (roomId: string) => RoomStatus,
  lastRoomId: string | null,
  upcomingLimit = 3,
  paths: PathMetadata[] = PATHS_METADATA,
): ContinuePlan | null {
  const unlocked = paths.filter(p => p.unlocked);
  if (unlocked.length === 0) return null;

  const withRooms = unlocked.map(path => {
    const rooms = getRoomsByPath(path.id);
    const statuses = rooms.map(r => getStatus(r.id));
    const completedCount = statuses.filter(s => s === 'completed').length;
    return {
      path,
      rooms,
      statuses,
      completedCount,
      started: statuses.some(s => s !== 'not-started'),
      finished: rooms.length > 0 && completedCount === rooms.length,
    };
  });

  const chosen =
    (lastRoomId &&
      withRooms.find(p => !p.finished && p.rooms.some(r => r.id === lastRoomId))) ||
    withRooms.find(p => p.started && !p.finished) ||
    withRooms[0];

  const lastIdx = lastRoomId ? chosen.rooms.findIndex(r => r.id === lastRoomId) : -1;
  const nextIdx =
    lastIdx !== -1 && chosen.statuses[lastIdx] === 'in-progress'
      ? lastIdx
      : chosen.statuses.findIndex(s => s !== 'completed');

  const next = nextIdx === -1 ? null : chosen.rooms[nextIdx];
  const upcoming =
    nextIdx === -1
      ? []
      : chosen.rooms
          .filter((_, i) => i > nextIdx && chosen.statuses[i] !== 'completed')
          .slice(0, upcomingLimit);

  return {
    path: chosen.path,
    rooms: chosen.rooms,
    completedCount: chosen.completedCount,
    next,
    upcoming,
    started: chosen.started,
  };
}
