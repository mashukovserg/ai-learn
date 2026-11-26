import { describe, expect, it } from 'vitest';
import { planContinue, type RoomStatus } from '@/lib/continuePlan';
import { PATHS_METADATA, getRoomsByPath } from '@/data/rooms';

const statuses = (map: Record<string, RoomStatus>) => (id: string): RoomStatus =>
  map[id] ?? 'not-started';

const firstUnlocked = PATHS_METADATA.find(p => p.unlocked)!;
const firstRooms = getRoomsByPath(firstUnlocked.id);

describe('planContinue', () => {
  it('defaults to the first unlocked path and its first room for a new learner', () => {
    const plan = planContinue(statuses({}), null)!;
    expect(plan.path.id).toBe(firstUnlocked.id);
    expect(plan.next?.id).toBe(firstRooms[0].id);
    expect(plan.completedCount).toBe(0);
    expect(plan.started).toBe(false);
    expect(plan.upcoming.map(r => r.id)).toEqual(firstRooms.slice(1, 4).map(r => r.id));
  });

  it('counts progress against the path, not against every room', () => {
    const plan = planContinue(statuses({ [firstRooms[0].id]: 'completed' }), null)!;
    expect(plan.completedCount).toBe(1);
    expect(plan.rooms.length).toBe(firstRooms.length);
    expect(plan.next?.id).toBe(firstRooms[1].id);
  });

  it('follows the last room into its path and resumes it while in progress', () => {
    const agent = getRoomsByPath('agent-coding');
    const room = agent[2];
    const plan = planContinue(statuses({ [room.id]: 'in-progress' }), room.id)!;
    expect(plan.path.id).toBe('agent-coding');
    expect(plan.next?.id).toBe(room.id);
    expect(plan.upcoming.every(r => agent.indexOf(r) > 2)).toBe(true);
  });

  it('skips completed rooms and moves on once the last room is done', () => {
    const agent = getRoomsByPath('agent-coding');
    const plan = planContinue(
      statuses({ [agent[0].id]: 'completed', [agent[1].id]: 'in-progress' }),
      agent[0].id,
    )!;
    expect(plan.path.id).toBe('agent-coding');
    expect(plan.next?.id).toBe(agent[1].id);
  });

  it('never picks a locked path', () => {
    const locked = PATHS_METADATA.find(p => !p.unlocked);
    if (!locked) return;
    const room = getRoomsByPath(locked.id).find(
      r => !PATHS_METADATA.some(p => p.unlocked && p.roomIds.includes(r.id)),
    );
    if (!room) return;
    const plan = planContinue(statuses({ [room.id]: 'in-progress' }), room.id)!;
    expect(plan.path.unlocked).toBe(true);
  });

  it('returns next = null when every room of the only candidate path is done', () => {
    const all = Object.fromEntries(firstRooms.map(r => [r.id, 'completed' as RoomStatus]));
    const onlyFirst = PATHS_METADATA.filter(p => p.id === firstUnlocked.id);
    const plan = planContinue(statuses(all), null, 3, onlyFirst)!;
    expect(plan.next).toBeNull();
    expect(plan.upcoming).toEqual([]);
    expect(plan.completedCount).toBe(firstRooms.length);
  });
});
