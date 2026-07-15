"use client";

import { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskWrapper from './TaskWrapper';
import { useLang } from '@/hooks/useLang';

interface TaskCategorizeProps {
  id: number;
  question: string;
  items: string[];
  buckets: string[];
  correctMapping: Record<string, string>; // item → bucket
  explanation?: string;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
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
}: TaskCategorizeProps) {
  const lang = useLang();
  const [assignments, setAssignments] = useState<Record<string, string>>(
    initialCompleted ? correctMapping : {}
  );
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
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
    setSelectedItem(null);
    setHoveredBucket(null);
    if (status === 'incorrect') setStatus('idle');
  };

  // Tap-to-place: works on touch, mouse, and keyboard (native drag stays for desktop).
  const handleSelect = (item: string) => {
    if (resolvedStatus === 'correct') return;
    setSelectedItem(prev => (prev === item ? null : item));
  };

  const handleBucketTap = (bucket: string) => {
    if (!selectedItem || resolvedStatus === 'correct') return;
    setAssignments(prev => ({ ...prev, [selectedItem]: bucket }));
    setSelectedItem(null);
    if (status === 'incorrect') setStatus('idle');
  };

  const handleRemove = (item: string) => {
    if (resolvedStatus === 'correct') return;
    setAssignments(prev => {
      const next = { ...prev };
      delete next[item];
      return next;
    });
    setSelectedItem(null);
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
    <TaskWrapper
      resolvedStatus={resolvedStatus}
      icon={<FolderOpen size={16} />}
      question={question}
      subtitle={lang === 'ru' ? 'Нажмите элемент, затем категорию (или перетащите)' : 'Tap an item, then a category (or drag)'}
      explanation={explanation}
      incorrectMessage={lang === 'ru' ? 'Некоторые элементы в неверных категориях. Попробуйте ещё раз!' : 'Some items are in the wrong category. Try again!'}
      successLabel={lang === 'ru' ? 'Верно!' : 'Correct!'}
    >
      {/* Unassigned items */}
      {unassigned.length > 0 && resolvedStatus !== 'correct' && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {unassigned.map(item => (
            <motion.div
              key={item}
              layout
              role="button"
              tabIndex={0}
              aria-pressed={selectedItem === item}
              draggable
              onDragStart={() => handleDragStart(item)}
              onDragEnd={() => { setDraggedItem(null); setHoveredBucket(null); }}
              onClick={() => handleSelect(item)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect(item); }
              }}
              className={`px-2.5 py-1.5 rounded-md border text-xs cursor-grab active:cursor-grabbing select-none transition-colors ${
                draggedItem === item || selectedItem === item
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : 'border-border-subtle bg-base text-neutral-300 hover:border-neutral-700'
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
          const isTapTarget = selectedItem !== null && resolvedStatus !== 'correct';

          return (
            <div
              key={bucket}
              role="button"
              tabIndex={resolvedStatus === 'correct' ? -1 : 0}
              onDragOver={e => {
                e.preventDefault();
                setHoveredBucket(bucket);
              }}
              onDragLeave={() => setHoveredBucket(null)}
              onDrop={e => {
                e.preventDefault();
                handleDrop(bucket);
              }}
              onClick={() => handleBucketTap(bucket)}
              onKeyDown={e => {
                if ((e.key === 'Enter' || e.key === ' ') && selectedItem) { e.preventDefault(); handleBucketTap(bucket); }
              }}
              className={`rounded-md border p-2 min-h-[80px] transition-colors ${isTapTarget ? 'cursor-pointer' : ''} ${
                resolvedStatus === 'correct'
                  ? 'border-neutral-800 bg-base'
                  : isHovered || isTapTarget
                    ? 'border-emerald-500/40 bg-emerald-500/5'
                    : 'border-border-subtle bg-base'
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
                    onClick={e => {
                      e.stopPropagation();
                      // If an item is selected (tap-to-place), a tap on a chip means
                      // "place it into this chip's bucket", not "remove this chip".
                      if (selectedItem) { handleBucketTap(bucket); } else { handleRemove(item); }
                    }}
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
    </TaskWrapper>
  );
}
