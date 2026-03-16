"use client";

import { useState } from 'react';
import { Check, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TaskCategorizeProps {
  id: number;
  question: string;
  items: string[];
  buckets: string[];
  correctMapping: Record<string, string>; // item → bucket
  explanation?: string;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
  lang?: string;
}

export default function TaskCategorize({
  id,
  question,
  items,
  buckets,
  correctMapping,
  explanation,
  onSuccess,
  initialCompleted = false,
  lang = 'en',
}: TaskCategorizeProps) {
  const [assignments, setAssignments] = useState<Record<string, string>>(
    initialCompleted ? correctMapping : {}
  );
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>(
    initialCompleted ? 'correct' : 'idle'
  );

  const resolvedStatus = initialCompleted ? 'correct' : status;
  const unassigned = items.filter(item => !assignments[item]);

  const handleDragStart = (item: string) => {
    if (resolvedStatus === 'correct') return;
    setDraggedItem(item);
  };

  const handleDrop = (bucket: string) => {
    if (!draggedItem || resolvedStatus === 'correct') return;
    setAssignments(prev => ({ ...prev, [draggedItem]: bucket }));
    setDraggedItem(null);
    setHoveredBucket(null);
    if (status === 'incorrect') setStatus('idle');
  };

  const handleRemove = (item: string) => {
    if (resolvedStatus === 'correct') return;
    setAssignments(prev => {
      const next = { ...prev };
      delete next[item];
      return next;
    });
    if (status === 'incorrect') setStatus('idle');
  };

  const checkAnswer = () => {
    const allAssigned = items.every(item => assignments[item]);
    if (!allAssigned) return;

    const isCorrect = items.every(item => assignments[item] === correctMapping[item]);
    if (isCorrect) {
      setStatus('correct');
      onSuccess(id);
    } else {
      setStatus('incorrect');
    }
  };

  const getBucketItems = (bucket: string) =>
    items.filter(item => assignments[item] === bucket);

  return (
    <div className={`bg-[#1a1a1a] border rounded-lg p-4 mb-3 transition-colors ${
      resolvedStatus === 'correct' ? 'border-neutral-600' : 'border-[#282828]'
    }`}>
      <div className="flex items-start gap-3 mb-4">
        <div className={`p-1.5 rounded-md ${resolvedStatus === 'correct' ? 'bg-white/10 text-neutral-300' : 'bg-white/5 text-neutral-500'}`}>
          <FolderOpen size={16} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-300">{question}</p>
          <p className="text-[10px] text-neutral-600 uppercase mt-1">
            {lang === 'ru' ? 'Перетащите элементы в категории' : 'Drag items into categories'}
          </p>
        </div>
      </div>

      {/* Unassigned items */}
      {unassigned.length > 0 && resolvedStatus !== 'correct' && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {unassigned.map(item => (
            <motion.div
              key={item}
              layout
              draggable
              onDragStart={() => handleDragStart(item)}
              onDragEnd={() => { setDraggedItem(null); setHoveredBucket(null); }}
              className={`px-2.5 py-1.5 rounded-md border text-xs cursor-grab active:cursor-grabbing select-none transition-colors ${
                draggedItem === item
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : 'border-[#282828] bg-[#0f0f0f] text-neutral-300 hover:border-neutral-700'
              }`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      )}

      {/* Buckets */}
      <div className={`grid gap-2 mb-4 ${buckets.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {buckets.map(bucket => {
          const bucketItems = getBucketItems(bucket);
          const isHovered = hoveredBucket === bucket && draggedItem !== null;

          return (
            <div
              key={bucket}
              onDragOver={e => {
                e.preventDefault();
                setHoveredBucket(bucket);
              }}
              onDragLeave={() => setHoveredBucket(null)}
              onDrop={e => {
                e.preventDefault();
                handleDrop(bucket);
              }}
              className={`rounded-md border p-2 min-h-[80px] transition-colors ${
                resolvedStatus === 'correct'
                  ? 'border-neutral-800 bg-[#0f0f0f]'
                  : isHovered
                    ? 'border-emerald-500/40 bg-emerald-500/5'
                    : 'border-[#282828] bg-[#0f0f0f]'
              }`}
            >
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2 px-1">
                {bucket}
              </p>
              <AnimatePresence>
                {bucketItems.map(item => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => handleRemove(item)}
                    className={`px-2 py-1 rounded text-xs mb-1 transition-colors ${
                      resolvedStatus === 'correct'
                        ? 'bg-neutral-800/50 text-neutral-500 cursor-default'
                        : 'bg-neutral-800 text-neutral-300 cursor-pointer hover:bg-neutral-700'
                    }`}
                  >
                    {item}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Check button */}
      {resolvedStatus !== 'correct' && (
        <button
          onClick={checkAnswer}
          disabled={unassigned.length > 0}
          className="w-full py-2 bg-white/10 text-neutral-300 rounded-md text-xs font-medium hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {lang === 'ru' ? 'Проверить' : 'Check'}
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
          {lang === 'ru' ? 'Некоторые элементы в неверных категориях. Попробуйте ещё раз!' : 'Some items are in the wrong category. Try again!'}
        </p>
      )}
    </div>
  );
}
