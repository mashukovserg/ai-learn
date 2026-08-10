"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { ROOM_TASKS } from '@/data/rooms';
import { resolveTask, type ResolvedTask } from '@/data/rooms/resolveTask';
import { useProgress } from '@/hooks/useProgress';
import { playTaskDoneSound } from '@/lib/taskDoneSound';
import type { Lang } from '@/types/lang';

/** A locale-resolved task plus the learner's completion state for it. */
export type RoomTask = ResolvedTask & { completed: boolean };

/**
 * Everything the room page needs to run a room's task list: locale resolution,
 * completion state, persistence, the completion chime, and the "room finished"
 * modal trigger.
 *
 * Extracted from `app/[lang]/rooms/[id]/page.tsx`, which had grown into a
 * 355-line component where this state machine was interleaved with the page
 * layout. The page now renders; this hook decides.
 *
 * Safe to call for an unknown room id — it yields an empty task list, so the
 * page can still run its hooks before deciding to `notFound()`.
 */
export function useRoomTasks(roomId: string, lang: Lang) {
  const localizedTasks = ROOM_TASKS[roomId];

  const { completedIds, markCompleted: persistCompleted, resetProgress } = useProgress(roomId);

  // Locale resolution lives in resolveTask (src/data/rooms/resolveTask.ts),
  // where it is unit-testable; this hook only adds completion state.
  const [tasks, setTasks] = useState<RoomTask[]>(() =>
    localizedTasks
      ? localizedTasks.map(t => ({ ...resolveTask(t, lang), completed: completedIds.has(t.id) }))
      : [],
  );

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // Guard: only trigger the modal when the user completes a task, not on load.
  const modalTriggered = useRef(false);
  // Bumped on reset so the page can remount task cards and clear their internal
  // solved/answer state (`initialCompleted` alone cannot undo a task solved in
  // the current session).
  const [resetNonce, setResetNonce] = useState(0);

  // Progress arrives asynchronously (API, then localStorage fallback), so the
  // initial state above is usually empty and gets reconciled here.
  useEffect(() => {
    if (!localizedTasks) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTasks(prev => {
      const hasChanged = prev.some(t => t.completed !== completedIds.has(t.id));
      if (!hasChanged) return prev;
      return prev.map(t => ({ ...t, completed: completedIds.has(t.id) }));
    });
  }, [completedIds, localizedTasks]);

  // Mirrors the solved ids so `markCompleted` can decide whether to play the
  // chime without reading `tasks` (which would make its identity unstable) and
  // without firing a side effect inside a state updater.
  const solvedRef = useRef<Set<number>>(new Set());
  useEffect(() => {
    solvedRef.current = new Set(tasks.filter(t => t.completed).map(t => t.id));
  }, [tasks]);

  const markCompleted = useCallback((taskId: number) => {
    if (!solvedRef.current.has(taskId)) {
      solvedRef.current.add(taskId);
      playTaskDoneSound();
    }

    setTasks(prev => {
      const updated = prev.map(t => (t.id === taskId ? { ...t, completed: true } : t));

      // Fire the success modal when the last remaining task is solved.
      if (updated.every(t => t.completed) && !modalTriggered.current) {
        modalTriggered.current = true;
        setTimeout(() => setShowSuccessModal(true), 500);
      }

      return updated;
    });

    persistCompleted(taskId);
  }, [persistCompleted]);

  const reset = useCallback(() => {
    resetProgress();
    setTasks(prev => prev.map(t => ({ ...t, completed: false })));
    modalTriggered.current = false;
    setShowSuccessModal(false);
    setResetNonce(n => n + 1);
  }, [resetProgress]);

  const closeSuccessModal = useCallback(() => setShowSuccessModal(false), []);

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length ? (completedCount / tasks.length) * 100 : 0;

  return {
    tasks,
    hasTasks: Boolean(localizedTasks),
    markCompleted,
    reset,
    resetNonce,
    completedCount,
    progressPercent,
    showSuccessModal,
    closeSuccessModal,
  };
}
