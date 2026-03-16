"use client";

import React, { use, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, HelpCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion from '@/components/TaskQuestion';
import TaskSorting from '@/components/TaskSorting';
import TaskMentor from '@/components/TaskMentor';
import TaskCategorize from '@/components/TaskCategorize';
import TaskTimeline from '@/components/TaskTimeline';
import TaskScenario from '@/components/TaskScenario';
import CompletionModal from '@/components/CompletionModal';
import { useProgress } from '@/hooks/useProgress';
import { ROOMS_METADATA, ROOM_TASKS } from '@/data/rooms';
import { notFound } from 'next/navigation';

// For now, we'll import theory components directly.
// In a real project, these could be MDX files.
import LlmMechanicsTheory from '@/components/theory/LlmMechanicsTheory';
import LlmLandscapeTheory from '@/components/theory/LlmLandscapeTheory';
import AiHistoryTheory from '@/components/theory/AiHistoryTheory';
import ChatgptMomentTheory from '@/components/theory/ChatgptMomentTheory';
import PostChatgptHistoryTheory from '@/components/theory/PostChatgptHistoryTheory';
import AiImageCreationTheory from '@/components/theory/AiImageCreationTheory';
import Prompting101Theory from '@/components/theory/Prompting101Theory';
import ScalingHypothesisTheory from '@/components/theory/ScalingHypothesisTheory';
import ResearchGroundingTheory from '@/components/theory/ResearchGroundingTheory';
import AiAlignmentTheory from '@/components/theory/AiAlignmentTheory';
import NativeMultimodalityTheory from '@/components/theory/NativeMultimodalityTheory';
import AiAgentsTheory from '@/components/theory/AiAgentsTheory';
import DeepSearchAgentsTheory from '@/components/theory/DeepSearchAgentsTheory';
import AiRagTheory from '@/components/theory/AiRagTheory';
import AiSecurityTheory from '@/components/theory/AiSecurityTheory';
import AiResearchTheory from '@/components/theory/AiResearchTheory';
import FineTuning101Theory from '@/components/theory/FineTuning101Theory';
import AiSingularityTheory from "@/components/theory/AiSingularityTheory";
import PromptEvalsTheory from "@/components/theory/PromptEvalsTheory";
import Embeddings101Theory from "@/components/theory/Embeddings101Theory";

const THEORY_COMPONENTS: Record<string, React.ComponentType<{ lang: string }>> = {
  'llm-mechanics': LlmMechanicsTheory,
  'llm-landscape': LlmLandscapeTheory,
  'ai-history': AiHistoryTheory,
  'chatgpt-moment': ChatgptMomentTheory,
  'post-chatgpt-history': PostChatgptHistoryTheory,
  'ai-image-creation': AiImageCreationTheory,
  'prompting-101': Prompting101Theory,
  'scaling-hypothesis': ScalingHypothesisTheory,
  'research-grounding': ResearchGroundingTheory,
  'ai-alignment': AiAlignmentTheory,
  'native-multimodality': NativeMultimodalityTheory,
  'ai-agents': AiAgentsTheory,
  'deep-search-agents': DeepSearchAgentsTheory,
  'ai-rag': AiRagTheory,
  'ai-security': AiSecurityTheory,
  'ai-research': AiResearchTheory,
  'fine-tuning-101': FineTuning101Theory,
  'prompt-evals': PromptEvalsTheory,
  'ai-singularity': AiSingularityTheory,
  'embeddings-101': Embeddings101Theory,
};

const DefaultTheory = () => <div className="p-8 text-neutral-500">Theory content coming soon...</div>;

type WindowWithWebkitAudio = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

export default function DynamicRoomPage(props: { params: Promise<{ lang: string, id: string }> }) {
  const params = use(props.params);
  const { lang, id } = params;

  const metadata = ROOMS_METADATA.find(r => r.id === id);
  const localizedTasks = ROOM_TASKS[id];

  const { completedIds, markCompleted: persistCompleted } = useProgress(id);

  // Initialize tasks with completion status from progress
  const [tasks, setTasks] = useState(localizedTasks ? localizedTasks.map(t => ({
    ...t,
    question: t.question[lang as 'en' | 'ru'],
    explanation: t.explanation[lang as 'en' | 'ru'],
    answer: Array.isArray(t.answer) 
      ? t.answer.map(a => typeof a === 'object' && a !== null && 'en' in a ? (a as unknown as Record<string, string>)[lang] : a)
      : (typeof t.answer === 'object' && t.answer !== null && 'en' in t.answer ? (t.answer as unknown as Record<string, string>)[lang] : t.answer),
    hint: t.hint ? t.hint[lang as 'en' | 'ru'] : undefined,
    options: t.options?.map(o => typeof o === 'object' ? o[lang as 'en' | 'ru'] : o),
    initialItems: t.initialItems?.map(o => typeof o === 'object' ? o[lang as 'en' | 'ru'] : o),
    correctOrder: t.correctOrder?.map(o => typeof o === 'object' ? o[lang as 'en' | 'ru'] : o),
    dialogue: t.dialogue ? {
      mentorMessage: t.dialogue.mentorMessage[lang as 'en' | 'ru'],
      userOptions: t.dialogue.userOptions.map(o => ({
        text: o.text[lang as 'en' | 'ru'],
        reaction: o.reaction[lang as 'en' | 'ru'],
        isCorrect: o.isCorrect,
        deepening: o.deepening ? o.deepening[lang as 'en' | 'ru'] : undefined,
      }))
    } : undefined,
    categorize: t.categorize ? (() => {
      const resolvedItems = t.categorize!.items.map(i => typeof i === 'object' ? i[lang as 'en' | 'ru'] : i);
      const resolvedBuckets = t.categorize!.buckets.map(b => typeof b === 'object' ? b[lang as 'en' | 'ru'] : b);
      const rawItems = t.categorize!.items.map(i => typeof i === 'object' ? i['en'] : i);
      const rawBuckets = t.categorize!.buckets.map(b => typeof b === 'object' ? b['en'] : b);
      const resolvedMapping: Record<string, string> = {};
      for (const [rawItem, rawBucket] of Object.entries(t.categorize!.correctMapping)) {
        const itemIdx = rawItems.indexOf(rawItem);
        const bucketIdx = rawBuckets.indexOf(rawBucket);
        if (itemIdx !== -1 && bucketIdx !== -1) {
          resolvedMapping[resolvedItems[itemIdx]] = resolvedBuckets[bucketIdx];
        }
      }
      return { items: resolvedItems, buckets: resolvedBuckets, correctMapping: resolvedMapping };
    })() : undefined,
    timeline: t.timeline ? {
      events: t.timeline.events.map(e => ({
        label: typeof e.label === 'object' ? e.label[lang as 'en' | 'ru'] : e.label,
        year: e.year,
      })),
      correctOrder: t.timeline.correctOrder.map(l => typeof l === 'object' ? l[lang as 'en' | 'ru'] : l),
    } : undefined,
    scenario: t.scenario ? {
      brief: t.scenario.brief[lang as 'en' | 'ru'],
      constraints: t.scenario.constraints.map(c => c[lang as 'en' | 'ru']),
      choices: t.scenario.choices.map(c => ({
        text: c.text[lang as 'en' | 'ru'],
        outcome: c.outcome[lang as 'en' | 'ru'],
        score: c.score,
        tags: c.tags,
      })),
      passingScore: t.scenario.passingScore,
    } : undefined,
    completed: completedIds.has(t.id)
  })) : []);

  // Success modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // Guard: only trigger modal when user completes a task, not on initial load
  const modalTriggered = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Update tasks completion status only when completedIds actually changes
  useEffect(() => {
    if (!localizedTasks) return;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTasks(prev => {
      // Check if anything actually changed to avoid unnecessary re-renders
      const hasChanged = prev.some(t => t.completed !== completedIds.has(t.id));
      if (!hasChanged) return prev;
      
      return prev.map(t => ({
        ...t,
        completed: completedIds.has(t.id)
      }));
    });
  }, [completedIds, localizedTasks]);

  if (!metadata || !localizedTasks) {
    return notFound();
  }

  const playTaskDoneSound = () => {
    if (typeof window === 'undefined') return;

    const AudioCtx = window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
    if (!AudioCtx) return;

    try {
      const ctx = audioContextRef.current ?? new AudioCtx();
      audioContextRef.current = ctx;

      if (ctx.state === 'suspended') {
        void ctx.resume();
      }

      const now = ctx.currentTime;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      gainNode.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(660, now);
      osc1.frequency.linearRampToValueAtTime(880, now + 0.12);
      osc1.connect(gainNode);
      osc1.start(now);
      osc1.stop(now + 0.2);
    } catch {
      // Keep UI responsive if audio is blocked by browser policy
    }
  };

  const markCompleted = (taskId: number) => {
    const wasCompleted = tasks.some(t => t.id === taskId && t.completed);
    if (!wasCompleted) {
      playTaskDoneSound();
    }

    setTasks(prev => {
      const updated = prev.map(t => t.id === taskId ? { ...t, completed: true } : t);
      // Trigger success modal when the very last task is completed by user action
      const allDone = updated.every(t => t.completed);
      if (allDone && !modalTriggered.current) {
        modalTriggered.current = true;
        setTimeout(() => setShowSuccessModal(true), 500);
      }
      return updated;
    });
    persistCompleted(taskId);
  };

  const TheoryComponent = THEORY_COMPONENTS[id] || DefaultTheory;

  // Logic to find the next room
  const currentRoomIndex = ROOMS_METADATA.findIndex(r => r.id === id);
  const nextRoom = currentRoomIndex !== -1 && currentRoomIndex < ROOMS_METADATA.length - 1 
    ? ROOMS_METADATA[currentRoomIndex + 1] 
    : null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Content Area */}
        <div className="min-w-0">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <Link href={`/${lang}/rooms`} className="hover:text-neutral-300 transition-colors">
              {lang === 'ru' ? 'Комнаты' : 'Rooms'}
            </Link>
            <ChevronRight size={14} />
            <span className="text-neutral-300">{metadata.category[lang as 'en' | 'ru']}</span>
            <ChevronRight size={14} />
            <span className="text-emerald-500 font-medium">{metadata.title[lang as 'en' | 'ru']}</span>
          </nav>

          <div className="mb-8 flex flex-col md:flex-row md:items-start gap-5">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-bold mb-4">{metadata.title[lang as 'en' | 'ru']}</h1>
                          <div className="flex items-center gap-6 text-sm text-neutral-400">
                            <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
                              {metadata.difficulty}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock size={16} className="text-neutral-500" /> {metadata.time[lang as 'en' | 'ru']}
                            </span>
                          </div>
              
            </div>

            {metadata.image && (
              <div className="w-full md:w-[320px] rounded-xl overflow-hidden border border-[#262626] bg-[#141414] shrink-0">
                <Image
                  src={metadata.image}
                  alt={metadata.title[lang as 'en' | 'ru']}
                  width={640}
                  height={360}
                  priority
                  className="w-full h-[180px] object-cover"
                />
              </div>
            )}
          </div>

          <div className="prose prose-invert max-w-none">
             <TheoryComponent lang={lang} />
          </div>
        </div>

        {/* Task Sidebar */}
        <aside className="w-full lg:w-[320px] lg:sticky lg:top-[100px] flex flex-col gap-4">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-y-auto max-h-[calc(100vh-280px)]">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="text-emerald-500" size={20} />
              {lang === 'ru' ? 'Задания комнаты' : 'Room Tasks'}
            </h3>
            <div className="space-y-2">
              {tasks.map((task) => (
                task.type === 'sorting' ? (
                  <TaskSorting
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    initialItems={task.initialItems as string[]}
                    correctOrder={task.correctOrder as string[]}
                    explanation={task.explanation}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                  />
                ) : task.type === 'mentor' ? (
                  <TaskMentor
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    mentorMessage={task.dialogue!.mentorMessage}
                    userOptions={task.dialogue!.userOptions}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                    lang={lang}
                  />
                ) : task.type === 'categorize' ? (
                  <TaskCategorize
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    items={task.categorize!.items}
                    buckets={task.categorize!.buckets}
                    correctMapping={task.categorize!.correctMapping}
                    explanation={task.explanation}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                    lang={lang}
                  />
                ) : task.type === 'timeline' ? (
                  <TaskTimeline
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    events={task.timeline!.events}
                    correctOrder={task.timeline!.correctOrder}
                    explanation={task.explanation}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                    lang={lang}
                  />
                ) : task.type === 'scenario' ? (
                  <TaskScenario
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    brief={task.scenario!.brief}
                    constraints={task.scenario!.constraints}
                    choices={task.scenario!.choices}
                    explanation={task.explanation}
                    passingScore={task.scenario!.passingScore}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                    lang={lang}
                  />
                ) : (
                  <TaskQuestion
                    key={task.id}
                    id={task.id}
                    question={task.question}
                    correctAnswer={task.answer as string | string[]}
                    options={task.options as string[]}
                    hint={task.hint}
                    explanation={task.explanation}
                    type={task.type}
                    onSuccess={markCompleted}
                    initialCompleted={task.completed}
                  />
                )
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {lang === 'ru' ? 'Прогресс' : 'Progress'}
              </span>
              <span className="text-sm font-bold text-emerald-500">
                {Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%
              </span>
            </div>
            <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#262626]">
              <motion.div
                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
              />
            </div>
          </div>
        </aside>
      </div>

      {/* Success modal — rendered outside the grid so it overlays everything */}
      <CompletionModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        lang={lang}
        roomTitle={metadata.title[lang as 'en' | 'ru']}
        pointsEarned={tasks.length * 10}
        nextRoomId={nextRoom?.id}
      />
    </>
  );
}
