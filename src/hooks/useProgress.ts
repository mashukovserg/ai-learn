"use client";

import { useState, useEffect, useCallback } from 'react';
import { ROOM_TASKS } from '@/data/rooms';

async function fetchAuth<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, { credentials: 'include', ...options });
    if (res.ok) return await res.json();
  } catch { /* offline or not authed */ }
  return null;
}

export function useProgress(roomId: string) {
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const data = await fetchAuth<{ completed_task_ids: number[] }>(`/api/progress/${roomId}`);

      if (!cancelled && data) {
        setCompletedIds(new Set(data.completed_task_ids));
        setIsAuthed(true);
        return;
      }

      // Fallback to localStorage
      try {
        const raw = localStorage.getItem(`progress:${roomId}`);
        if (raw && !cancelled) {
          setCompletedIds(new Set(JSON.parse(raw)));
        }
      } catch { /* ignore */ }
    })();

    return () => { cancelled = true; };
  }, [roomId]);

  const markCompleted = useCallback((id: number) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.add(id);

      if (isAuthed) {
        fetch(`/api/progress/${roomId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ task_id: id }),
        }).catch(() => { /* silently fail */ });
      }

      try {
        localStorage.setItem(`progress:${roomId}`, JSON.stringify([...next]));
        window.dispatchEvent(new CustomEvent('progress-updated'));
      } catch { /* storage full */ }

      return next;
    });
  }, [roomId, isAuthed]);

  return { completedIds, markCompleted };
}

export function getRoomProgress(roomId: string): 'not-started' | 'in-progress' | 'completed' {
  if (typeof window === 'undefined') return 'not-started';
  try {
    const raw = localStorage.getItem(`progress:${roomId}`);
    if (!raw) return 'not-started';
    const ids: number[] = JSON.parse(raw);
    if (ids.length === 0) return 'not-started';
    const totalIds = ROOM_TASKS[roomId];
    if (!totalIds) return 'not-started';
    if (ids.length >= totalIds.length) return 'completed';
    return 'in-progress';
  } catch {
    return 'not-started';
  }
}

export function getCompletedRoomCount(): number {
  if (typeof window === 'undefined') return 0;
  return Object.keys(ROOM_TASKS).filter(
    roomId => getRoomProgress(roomId) === 'completed'
  ).length;
}
