"use client";

import { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/hooks/useLang';

interface UserOption {
  text: string;
  reaction: string;
  isCorrect?: boolean;
  deepening?: string;
}

interface TaskMentorProps {
  id: number;
  question: string;
  mentorMessage: string;
  userOptions: UserOption[];
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
}

export default function TaskMentor({
  id,
  question,
  mentorMessage,
  userOptions,
  onSuccess,
  initialCompleted = false,
}: TaskMentorProps) {
  const lang = useLang();
  const [selectedOption, setSelectedOption] = useState<UserOption | null>(null);
  const [step, setStep] = useState<'selection' | 'reaction' | 'deepening'>(initialCompleted ? 'deepening' : 'selection');
  const [completed, setCompleted] = useState(initialCompleted);

  const handleSelect = (option: UserOption) => {
    setSelectedOption(option);
    setStep('reaction');
    if (option.isCorrect) {
      setCompleted(true);
      onSuccess(id);
    }
  };

  const reset = () => {
    setSelectedOption(null);
    setStep('selection');
  };

  return (
    <div className={`bg-card-dark border rounded-xl overflow-hidden mb-4 transition-all duration-500 ${
      completed ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'border-border-card'
    }`}>
      {/* Header */}
      <div className="bg-card px-4 py-3 border-b border-border-card flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <MessageSquare size={14} className="text-emerald-500" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block leading-none mb-1">
              {lang === 'ru' ? 'Диалог с наставником' : 'Mentor Dialogue'}
            </span>
            <span className="text-xs font-medium text-neutral-300">
              {question}
            </span>
          </div>
        </div>
        {completed && <CheckCircle2 size={16} className="text-emerald-500" />}
      </div>

      <div className="p-5">
        <AnimatePresence mode="wait">
          {step === 'selection' && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center text-xs font-bold text-neutral-400 border border-neutral-700">
                  M
                </div>
                <div className="bg-card border border-border-card rounded-2xl rounded-tl-none p-4 text-sm text-neutral-300 leading-relaxed shadow-sm">
                  {mentorMessage}
                </div>
              </div>

              <div className="grid gap-2 pl-12">
                {userOptions.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="text-left p-3.5 rounded-xl border border-border-card bg-base hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group relative overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                        {option.text}
                      </span>
                      <ArrowRight size={14} className="text-neutral-700 group-hover:text-emerald-500 transition-colors shrink-0" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'reaction' && selectedOption && (
            <motion.div
              key="reaction"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* User message */}
              <div className="flex gap-4 items-start justify-end">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl rounded-tr-none p-4 text-sm text-emerald-100 leading-relaxed max-w-[85%]">
                  {selectedOption.text}
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  U
                </div>
              </div>

              {/* Mentor reaction */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center text-xs font-bold text-neutral-400 border border-neutral-700">
                  M
                </div>
                <div className="bg-card border border-border-card rounded-2xl rounded-tl-none p-4 text-sm text-neutral-300 leading-relaxed shadow-sm flex-1">
                  {selectedOption.reaction}
                  
                  <div className="mt-4 flex gap-2">
                    {selectedOption.isCorrect ? (
                      <button
                        onClick={() => setStep('deepening')}
                        className="px-4 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
                      >
                        {lang === 'ru' ? 'Углубиться' : 'Go deeper'} <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={reset}
                        className="px-4 py-1.5 bg-neutral-800 text-neutral-300 text-xs font-bold rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-1.5 border border-neutral-700"
                      >
                        <RefreshCcw size={14} /> {lang === 'ru' ? 'Попробовать другой путь' : 'Try another path'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'deepening' && (
            <motion.div
              key="deepening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                  {lang === 'ru' ? 'Инсайт' : 'Insight'}
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed italic">
                {selectedOption?.deepening || userOptions.find(o => o.isCorrect)?.deepening}
              </p>
              
              {!initialCompleted && (
                <div className="mt-5 flex justify-end">
                  <div className="text-[10px] text-neutral-500 font-medium">
                    {lang === 'ru' ? 'Задание выполнено' : 'Task completed'}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
