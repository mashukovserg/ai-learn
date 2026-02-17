"use client";

import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Check, GripVertical, ListOrdered } from 'lucide-react';

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
    <div className={`bg-[#1a1a1a] border rounded-lg p-4 mb-3 transition-colors ${
      resolvedStatus === 'correct' ? 'border-neutral-600' : 'border-[#282828]'
    }`}>
      <div className="flex items-start gap-3 mb-4">
        <div className={`p-1.5 rounded-md ${resolvedStatus === 'correct' ? 'bg-white/10 text-neutral-300' : 'bg-white/5 text-neutral-500'}`}>
          <ListOrdered size={16} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-300">{question}</p>
          <p className="text-[10px] text-neutral-600 uppercase mt-1">Drag to reorder</p>
        </div>
      </div>

      <Reorder.Group axis="y" values={renderedItems} onReorder={resolvedStatus === 'correct' ? () => {} : setItems} className="space-y-1.5 mb-4">
        {renderedItems.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            dragListener={resolvedStatus !== 'correct'}
            className={`p-2.5 rounded-md border text-sm flex items-center gap-3 transition-colors bg-[#0f0f0f] ${
              resolvedStatus === 'correct' ? 'border-neutral-800 text-neutral-500 cursor-default' : 'border-[#282828] text-neutral-300 hover:border-neutral-700 cursor-grab active:cursor-grabbing'
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

      {resolvedStatus === 'correct' && (
        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
          <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
            <Check size={14} /> Correct!
          </p>
          {explanation && (
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              {explanation}
            </p>
          )}
        </div>
      )}

      {resolvedStatus === 'incorrect' && (
        <p className="mt-2 text-xs text-red-300">Incorrect order. Try again!</p>
      )}
    </div>
  );
}
