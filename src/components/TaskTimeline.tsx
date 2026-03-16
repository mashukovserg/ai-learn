"use client";

import { useState } from 'react';
import { Check, Calendar } from 'lucide-react';
import { Reorder, motion } from 'framer-motion';

interface TimelineEvent {
  label: string;
  year: string;
}

interface TaskTimelineProps {
  id: number;
  question: string;
  events: TimelineEvent[];
  correctOrder: string[]; // ordered labels
  explanation?: string;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
  lang?: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TaskTimeline({
  id,
  question,
  events,
  correctOrder,
  explanation,
  onSuccess,
  initialCompleted = false,
  lang = 'en',
}: TaskTimelineProps) {
  const correctEvents = correctOrder.map(label => events.find(e => e.label === label)!);
  const [orderedLabels, setOrderedLabels] = useState<string[]>(
    initialCompleted ? correctOrder : () => shuffle(correctOrder)
  );
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>(
    initialCompleted ? 'correct' : 'idle'
  );

  const resolvedStatus = initialCompleted ? 'correct' : status;
  const renderedLabels = initialCompleted ? correctOrder : orderedLabels;

  const checkOrder = () => {
    const isCorrect = orderedLabels.every((label, i) => label === correctOrder[i]);
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
          <Calendar size={16} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-300">{question}</p>
          <p className="text-[10px] text-neutral-600 uppercase mt-1">
            {lang === 'ru' ? 'Расположите события в хронологическом порядке' : 'Arrange events in chronological order'}
          </p>
        </div>
      </div>

      {/* Timeline visualization */}
      {resolvedStatus === 'correct' ? (
        // Completed: show final timeline with years revealed
        <div className="relative mb-4 pl-4">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-emerald-500/30" />
          {correctEvents.map((event, i) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative flex items-start gap-3 mb-3 last:mb-0"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.6)] z-10" />
              <div className="flex-1 flex items-baseline gap-2">
                <span className="text-[10px] font-mono text-emerald-500 font-bold shrink-0 w-10">
                  {event.year}
                </span>
                <span className="text-xs text-neutral-400">{event.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Interactive: drag to reorder
        <>
          <div className="relative mb-4 pl-4">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800" />
            <Reorder.Group
              axis="y"
              values={renderedLabels}
              onReorder={setOrderedLabels}
              className="space-y-1.5"
            >
              {renderedLabels.map(label => (
                <Reorder.Item
                  key={label}
                  value={label}
                  className="relative flex items-center gap-3 p-2 rounded-md border border-[#282828] bg-[#0f0f0f] text-sm text-neutral-300 hover:border-neutral-700 cursor-grab active:cursor-grabbing"
                >
                  <div className="w-2 h-2 rounded-full bg-neutral-700 shrink-0 z-10" />
                  <span className="text-[10px] font-mono text-neutral-600 shrink-0 w-10">
                    {'????'}
                  </span>
                  <span className="flex-1 text-xs">{label}</span>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </>
      )}

      {resolvedStatus !== 'correct' && (
        <button
          onClick={checkOrder}
          className="w-full py-2 bg-white/10 text-neutral-300 rounded-md text-xs font-medium hover:bg-white/15 transition-colors"
        >
          {lang === 'ru' ? 'Проверить порядок' : 'Check Order'}
        </button>
      )}

      {resolvedStatus === 'correct' && (
        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
          <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
            <Check size={14} /> {lang === 'ru' ? 'Верно!' : 'Correct!'}
          </p>
          {explanation && (
            <p className="text-xs text-emerald-200/80 leading-relaxed">{explanation}</p>
          )}
        </div>
      )}

      {resolvedStatus === 'incorrect' && (
        <p className="mt-2 text-xs text-red-300">
          {lang === 'ru' ? 'Неверный порядок. Попробуйте ещё раз!' : 'Incorrect order. Try again!'}
        </p>
      )}
    </div>
  );
}
