"use client";

import TaskQuestion from '@/components/TaskQuestion';
import TaskSorting from '@/components/TaskSorting';
import TaskMentor from '@/components/TaskMentor';
import TaskCategorize from '@/components/TaskCategorize';
import TaskTimeline from '@/components/TaskTimeline';
import TaskScenario from '@/components/TaskScenario';
import type { RoomTask } from '@/hooks/useRoomTasks';

/**
 * Dispatches one resolved task to its renderer.
 *
 * This was a six-branch ternary chain inlined in the room page, where each
 * branch repeated the same five props (`id`, `question`, `image`, `onSuccess`,
 * `initialCompleted`) around a couple of type-specific ones. Adding a task type
 * meant editing the page; now it means adding a `case` here, next to the other
 * five, and the page just maps over tasks.
 *
 * The `key` (and therefore the remount-on-reset behaviour) stays at the call
 * site — see `resetNonce` in `useRoomTasks`.
 *
 * The non-null assertions mirror the shape guarantees the Vitest data suite
 * enforces: a `mentor` task always carries `dialogue`, a `categorize` task
 * always carries `categorize`, and so on (docs/AGENTS.md → "Task data
 * validation gate"). There is no runtime validation behind them.
 */
export default function TaskRenderer({
  task,
  onSuccess,
}: {
  task: RoomTask;
  onSuccess: (taskId: number) => void;
}) {
  const common = {
    id: task.id,
    question: task.question,
    image: task.image,
    onSuccess,
    initialCompleted: task.completed,
  };

  switch (task.type) {
    case 'sorting':
      return (
        <TaskSorting
          {...common}
          initialItems={task.initialItems as string[]}
          correctOrder={task.correctOrder as string[]}
          explanation={task.explanation}
        />
      );

    case 'mentor':
      return (
        <TaskMentor
          {...common}
          mentorMessage={task.dialogue!.mentorMessage}
          userOptions={task.dialogue!.userOptions}
        />
      );

    case 'categorize':
      return (
        <TaskCategorize
          {...common}
          items={task.categorize!.items}
          buckets={task.categorize!.buckets}
          correctMapping={task.categorize!.correctMapping}
          explanation={task.explanation}
        />
      );

    case 'timeline':
      return (
        <TaskTimeline
          {...common}
          events={task.timeline!.events}
          correctOrder={task.timeline!.correctOrder}
          explanation={task.explanation}
        />
      );

    case 'scenario':
      return (
        <TaskScenario
          {...common}
          brief={task.scenario!.brief}
          constraints={task.scenario!.constraints}
          choices={task.scenario!.choices}
          explanation={task.explanation}
          passingScore={task.scenario!.passingScore}
        />
      );

    // 'input' | 'multiple-choice' | 'multiple-select'
    default:
      return (
        <TaskQuestion
          {...common}
          type={task.type}
          correctAnswer={task.answer as string | string[]}
          options={task.options as string[]}
          hint={task.hint}
          explanation={task.explanation}
        />
      );
  }
}
