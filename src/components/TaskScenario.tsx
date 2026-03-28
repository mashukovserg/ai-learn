"use client";

import { useState } from 'react';
import { CheckCircle2, AlertTriangle, ChevronRight, RotateCcw, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/hooks/useLang';

interface ScenarioChoice {
  text: string;
  outcome: string;
  score: number; // 0-100
  tags?: string[];
}

interface TaskScenarioProps {
  id: number;
  question: string;
  brief: string;
  constraints: string[];
  choices: ScenarioChoice[];
  explanation?: string;
  passingScore?: number;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
}

export default function TaskScenario({
  id,
  question,
  brief,
  constraints,
  choices,
  explanation,
  passingScore = 60,
  onSuccess,
  initialCompleted = false,
}: TaskScenarioProps) {
  const lang = useLang();
  const [step, setStep] = useState<'brief' | 'choose' | 'outcome'>(
    initialCompleted ? 'outcome' : 'brief'
  );
  const bestChoice = choices.reduce((a, b) => a.score > b.score ? a : b);
  const [selected, setSelected] = useState<ScenarioChoice | null>(
    initialCompleted ? bestChoice : null
  );
  const [completed, setCompleted] = useState(initialCompleted);

  const handleSelect = (choice: ScenarioChoice) => {
    setSelected(choice);
    setStep('outcome');
    if (choice.score >= passingScore) {
      setCompleted(true);
      onSuccess(id);
    }
  };

  const reset = () => {
    setSelected(null);
    setStep('brief');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= passingScore) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= passingScore) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={`bg-card-dark border rounded-xl overflow-hidden mb-4 transition-all duration-500 ${
      completed ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'border-border-card'
    }`}>
      {/* Header */}
      <div className="bg-card px-4 py-3 border-b border-border-card flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
            <Target size={14} className="text-amber-500" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block leading-none mb-1">
              {lang === 'ru' ? 'Сценарная миссия' : 'Scenario Mission'}
            </span>
            <span className="text-xs font-medium text-neutral-300">{question}</span>
          </div>
        </div>
        {completed && <CheckCircle2 size={16} className="text-emerald-500" />}
      </div>

      <div className="p-5">
        <AnimatePresence mode="wait">
          {/* Step 1: Brief */}
          {step === 'brief' && (
            <motion.div
              key="brief"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-base border border-border-card rounded-lg p-4">
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                  {lang === 'ru' ? 'Ситуация' : 'Situation'}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">{brief}</p>
              </div>

              {constraints.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-4">
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={12} />
                    {lang === 'ru' ? 'Ограничения' : 'Constraints'}
                  </p>
                  <ul className="space-y-1">
                    {constraints.map((c, i) => (
                      <li key={i} className="text-xs text-amber-200/70 flex items-start gap-2">
                        <span className="text-amber-500/50 mt-0.5">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setStep('choose')}
                className="w-full py-2.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-lg text-xs font-bold hover:bg-amber-500/15 transition-colors flex items-center justify-center gap-2"
              >
                {lang === 'ru' ? 'Принять решение' : 'Make your decision'}
                <ChevronRight size={14} />
              </button>
            </motion.div>
          )}

          {/* Step 2: Choose */}
          {step === 'choose' && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-3">
                {lang === 'ru' ? 'Выберите стратегию' : 'Choose your strategy'}
              </p>
              {choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(choice)}
                  className="w-full text-left p-3.5 rounded-lg border border-border-card bg-base hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      {choice.text}
                    </span>
                    <ChevronRight size={14} className="text-neutral-700 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>
                </button>
              ))}
            </motion.div>
          )}

          {/* Step 3: Outcome */}
          {step === 'outcome' && selected && (
            <motion.div
              key="outcome"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              {/* Score */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                      {lang === 'ru' ? 'Результат' : 'Score'}
                    </span>
                    <span className={`text-lg font-bold ${getScoreColor(selected.score)}`}>
                      {selected.score}/100
                    </span>
                  </div>
                  <div className="h-1.5 bg-deep rounded-full overflow-hidden border border-border-card">
                    <motion.div
                      className={`h-full rounded-full ${getScoreBarColor(selected.score)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.score}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Outcome text */}
              <div className={`rounded-lg p-4 border ${
                selected.score >= passingScore
                  ? 'bg-emerald-500/5 border-emerald-500/20'
                  : 'bg-red-500/5 border-red-500/20'
              }`}>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selected.outcome}
                </p>
              </div>

              {/* Tags */}
              {selected.tags && selected.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Explanation (shown when completed) */}
              {completed && explanation && (
                <div className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                      {lang === 'ru' ? 'Разбор' : 'Analysis'}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{explanation}</p>
                </div>
              )}

              {/* Retry button for failing scores */}
              {!completed && (
                <button
                  onClick={reset}
                  className="w-full py-2.5 bg-neutral-800 text-neutral-300 rounded-lg text-xs font-bold hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 border border-neutral-700"
                >
                  <RotateCcw size={14} />
                  {lang === 'ru' ? 'Попробовать другую стратегию' : 'Try a different strategy'}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
