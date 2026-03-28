"use client";

import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { GripVertical, ListOrdered } from 'lucide-react';
import TaskWrapper from './TaskWrapper';

interface TaskSortingProps {
  id: number;
  question: string;
  initialItems: string[];
  correctOrder: string[];
  explanation?: string;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
}

export default function TaskSorting({
  id,
  question,
  initialItems,
  correctOrder,
  explanation,
  onSuccess,
  initialCompleted = false,
}: TaskSortingProps) {
  const [items, setItems] = useState(initialCompleted ? correctOrder : initialItems);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>(initialCompleted ? 'correct' : 'idle');
  const resolvedStatus: 'idle' | 'correct' | 'incorrect' = initialCompleted ? 'correct' : status;
  const renderedItems = initialCompleted ? correctOrder : items;

  const checkOrder = () => {
    const isCorrect = items.length === correctOrder.length &&
                      items.every((val, index) => val === correctOrder[index]);

    if (isCorrect) {
      setStatus('correct');
      onSuccess(id);
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <TaskWrapper
      resolvedStatus={resolvedStatus}
      icon={<ListOrdered size={16} />}
      question={question}
      subtitle="Drag to reorder"
      explanation={explanation}
      incorrectMessage="Incorrect order. Try again!"
      successLabel="Correct!"
    >
      <Reorder.Group axis="y" values={renderedItems} onReorder={resolvedStatus === 'correct' ? () => {} : setItems} className="space-y-1.5 mb-4">
        {renderedItems.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            dragListener={resolvedStatus !== 'correct'}
            className={`p-2.5 rounded-md border text-sm flex items-center gap-3 transition-colors bg-base ${
              resolvedStatus === 'correct' ? 'border-neutral-800 text-neutral-500 cursor-default' : 'border-border-subtle text-neutral-300 hover:border-neutral-700 cursor-grab active:cursor-grabbing'
            }`}
          >
            <GripVertical size={14} className="text-neutral-600 shrink-0" />
            <span className="flex-1">{item}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {resolvedStatus !== 'correct' && (
        <button
          onClick={checkOrder}
          className="w-full py-2 bg-white/10 text-neutral-300 rounded-md text-xs font-medium hover:bg-white/15 transition-colors"
        >
          Check Sequence
        </button>
      )}
    </TaskWrapper>
  );
}
