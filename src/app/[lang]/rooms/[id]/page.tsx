"use client";

import React, { use, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, HelpCircle, Clock, ListChecks, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import CompletionModal from '@/components/CompletionModal';
import PromptPlayground from '@/components/PromptPlayground';
import TaskRenderer from '@/components/TaskRenderer';
import { THEORY_COMPONENTS } from '@/components/theory';
import { ROOMS_METADATA, getNextRoomInPath } from '@/data/rooms';
import { PLAYGROUND_CONFIGS } from '@/data/rooms/playgroundConfigs';
import { useRoomTasks } from '@/hooks/useRoomTasks';
import { toLang } from '@/types/lang';

const DefaultTheory = () => <div className="p-8 text-neutral-500">Theory content coming soon...</div>;

export default function DynamicRoomPage(props: { params: Promise<{ lang: string, id: string }> }) {
  const { lang: rawLang, id } = use(props.params);
  const lang = toLang(rawLang);

  const metadata = ROOMS_METADATA.find(r => r.id === id);

  // Task state, persistence, the completion chime and the success-modal
  // trigger all live in useRoomTasks — see src/hooks/useRoomTasks.ts.
  const {
    tasks,
    hasTasks,
    markCompleted,
    reset,
    resetNonce,
    progressPercent,
    showSuccessModal,
    closeSuccessModal,
  } = useRoomTasks(id, lang);

  // Confirm step for the destructive reset button — pure UI state, so it stays
  // in the page rather than in the hook.
  const [confirmReset, setConfirmReset] = useState(false);

  // Below lg the task panel sits after the whole theory column, which can be
  // tens of screens tall — a floating shortcut keeps tasks reachable. Hidden
  // while the panel itself is on screen.
  const tasksPanelRef = useRef<HTMLElement>(null);
  const [tasksInView, setTasksInView] = useState(false);

  useEffect(() => {
    const el = tasksPanelRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setTasksInView(entry.isIntersecting),
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!metadata || !hasTasks) {
    return notFound();
  }

  const handleReset = () => {
    reset();
    setConfirmReset(false);
  };

  const TheoryComponent = THEORY_COMPONENTS[id] || DefaultTheory;

  // Next room follows the learning path, not ROOMS_METADATA array position —
  // index arithmetic over the global list used to hand the learner a room from
  // an unrelated path once a path ran out.
  const nextRoom = getNextRoomInPath(id);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
        {/* Content Area */}
        <div className="min-w-0">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 min-w-0">
            <Link href={`/${lang}/rooms`} className="hover:text-neutral-300 transition-colors shrink-0">
              {lang === 'ru' ? 'Комнаты' : 'Rooms'}
            </Link>
            <ChevronRight size={14} className="shrink-0 hidden sm:block" />
            <span className="text-neutral-300 shrink-0 hidden sm:block">{metadata.category[lang]}</span>
            <ChevronRight size={14} className="shrink-0" />
            <span className="text-accent-500 font-medium truncate">{metadata.title[lang]}</span>
          </nav>

          <div className="mb-8 flex flex-col md:flex-row md:items-start gap-5">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">{metadata.title[lang]}</h1>
              <div className="flex items-center gap-6 text-sm text-neutral-400">
                <span className="flex items-center gap-2 text-accent-500 font-bold bg-accent-500/10 px-2 py-1 rounded text-xs uppercase border border-accent-500/20">
                  {metadata.difficulty}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-neutral-500" /> {metadata.time[lang]}
                </span>
              </div>
            </div>

            {metadata.image && (
              <div className="w-full md:w-[320px] rounded-xl overflow-hidden border border-border-card bg-card-dark shrink-0">
                <Image
                  src={metadata.image}
                  alt={metadata.title[lang]}
                  width={640}
                  height={360}
                  priority
                  className="w-full h-[180px] object-cover"
                />
              </div>
            )}
          </div>

          <div className="prose prose-invert max-w-none reading-prose">
             <TheoryComponent lang={lang} />
          </div>

          {/* Prompt Playground — shown only for rooms that have a config */}
          {PLAYGROUND_CONFIGS[id] && (
            <PromptPlayground lang={lang} config={PLAYGROUND_CONFIGS[id]} />
          )}
        </div>

        {/* Task Sidebar */}
        <aside
          ref={tasksPanelRef}
          className="w-full lg:w-[320px] lg:sticky lg:top-[100px] flex flex-col gap-4 scroll-mt-20"
        >
          <div className="bg-card-dark border border-border-card rounded-xl p-4 sm:p-6 lg:overflow-y-auto lg:max-h-[calc(100vh-280px)]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="text-accent-500" size={20} />
              {lang === 'ru' ? 'Задания комнаты' : 'Room Tasks'}
            </h3>
            <div className="space-y-2">
              {tasks.map((task) => (
                // resetNonce in the key remounts the card so a task solved in
                // this session drops its internal answer state on reset.
                <TaskRenderer
                  key={`${task.id}-${resetNonce}`}
                  task={task}
                  onSuccess={markCompleted}
                />
              ))}
            </div>
          </div>

          <div className="bg-card-dark border border-border-card rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {lang === 'ru' ? 'Прогресс' : 'Progress'}
              </span>
              <span className="text-sm font-bold text-accent-500">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="h-1.5 bg-deep rounded-full overflow-hidden border border-border-card">
              <motion.div
                className="h-full bg-accent-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
              />
            </div>

            {tasks.some(t => t.completed) && (
              <div className="mt-4 pt-4 border-t border-border-card">
                {confirmReset ? (
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-neutral-400">
                      {lang === 'ru' ? 'Сбросить прогресс?' : 'Reset progress?'}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleReset}
                        className="text-xs font-semibold text-danger-400 hover:text-danger-300 transition-colors"
                      >
                        {lang === 'ru' ? 'Да' : 'Yes'}
                      </button>
                      <button
                        onClick={() => setConfirmReset(false)}
                        className="text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors"
                      >
                        {lang === 'ru' ? 'Отмена' : 'Cancel'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    <RotateCcw size={13} />
                    {lang === 'ru' ? 'Сбросить прогресс' : 'Reset progress'}
                  </button>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Mobile/tablet shortcut to the task panel (it renders below the theory there) */}
      {!tasksInView && (
        <button
          type="button"
          onClick={() => tasksPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="lg:hidden fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-accent-300 text-accent-950 pl-4 pr-4.5 py-2.5 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] hover:bg-accent-200 transition-colors"
        >
          <ListChecks size={16} />
          {lang === 'ru' ? 'Задания' : 'Tasks'}
          <span className="text-accent-950/70 font-medium">
            {tasks.filter(t => t.completed).length}/{tasks.length}
          </span>
        </button>
      )}

      {/* Success modal — rendered outside the grid so it overlays everything */}
      <CompletionModal
        isOpen={showSuccessModal}
        onClose={closeSuccessModal}
        roomTitle={metadata.title[lang]}
        pointsEarned={tasks.length * 10}
        nextRoomId={nextRoom?.id}
      />
    </>
  );
}
