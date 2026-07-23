/**
 * Theory registry completeness guard. Before the registry existed, a room
 * missing from THEORY_COMPONENTS silently rendered a "coming soon" placeholder
 * in production. Now a missing mapping fails check-all instead.
 */
import { describe, it, expect } from 'vitest';
import { ROOMS_METADATA } from '@/data/rooms';
import { THEORY_COMPONENTS } from '../index';

describe('theory registry', () => {
  it('every room in ROOMS_METADATA has a theory component', () => {
    const missing = ROOMS_METADATA
      .map(r => r.id)
      .filter(id => !(id in THEORY_COMPONENTS));

    expect(
      missing,
      missing.length
        ? `\nRooms without a theory mapping (add them to src/components/theory/index.ts):\n  ${missing.join('\n  ')}\n`
        : undefined
    ).toEqual([]);
  });

  it('the registry has no orphan entries pointing at removed rooms', () => {
    const roomIds = new Set(ROOMS_METADATA.map(r => r.id));
    const orphans = Object.keys(THEORY_COMPONENTS).filter(id => !roomIds.has(id));
    expect(orphans).toEqual([]);
  });
});
