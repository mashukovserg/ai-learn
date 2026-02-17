"use client";

import { useState } from 'react';
import { Check, ShieldQuestion, ListChecks } from 'lucide-react';

export type TaskType = 'input' | 'multiple-choice' | 'multiple-select' | 'sorting';

interface TaskQuestionProps {
  id: number;
  type?: TaskType;
  question: string;
  correctAnswer: string | string[];
  options?: string[];
  hint?: string;
  explanation?: string;
  onSuccess: (id: number) => void;
  initialCompleted?: boolean;
}

export default function TaskQuestion({
  id,
  type = 'input',
  question,
  correctAnswer,
  options = [],
  hint,
  explanation,
  onSuccess,
  initialCompleted = false,
}: TaskQuestionProps) {
  const [answer, setAnswer] = useState<string | string[]>(type === 'multiple-select' ? [] : '');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>(initialCompleted ? 'correct' : 'idle');
  const [showHint, setShowHint] = useState(false);
  const resolvedStatus: 'idle' | 'correct' | 'incorrect' = initialCompleted ? 'correct' : status;
  const resolvedInputValue = initialCompleted
    ? (Array.isArray(correctAnswer) ? (correctAnswer[0] ?? '') : correctAnswer)
    : (answer as string);

  const normalize = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[“”«»"]/g, '')
      .replace(/[.,!?;:]+$/g, '');

  const checkAnswer = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    let isCorrect = false;

    if (type === 'input') {
      const userAnswer = normalize(answer as string);
      if (Array.isArray(correctAnswer)) {
        isCorrect = correctAnswer.some((item) => normalize(item) === userAnswer);
      } else {
        isCorrect = normalize(correctAnswer as string) === userAnswer;
      }
    } else if (type === 'multiple-choice') {
      isCorrect = (answer as string) === (correctAnswer as string);
    } else if (type === 'multiple-select') {
      const selected = [...(answer as string[])].sort();
      const correct = [...(correctAnswer as string[])].sort();
      isCorrect = selected.length === correct.length && selected.every((v, i) => v === correct[i]);
    }

    if (isCorrect) {
      setStatus('correct');
      onSuccess(id);
    } else {
      setStatus('incorrect');
    }
  };

  const toggleSelect = (option: string) => {
    if (resolvedStatus === 'correct') return;
    setAnswer(prev => {
      const current = prev as string[];
      if (resolvedStatus === 'incorrect') setStatus('idle');
      return current.includes(option)
        ? current.filter(o => o !== option)
        : [...current, option];
    });
  };

  return (
    <div className={`bg-[#1a1a1a] border rounded-lg p-4 mb-3 transition-colors ${
      resolvedStatus === 'correct' ? 'border-neutral-600' : 'border-[#282828]'
    }`}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`p-1.5 rounded-md ${resolvedStatus === 'correct' ? 'bg-white/10 text-neutral-300' : 'bg-white/5 text-neutral-500'}`}>
          {type === 'input' ? <ShieldQuestion size={16} /> : <ListChecks size={16} />}
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-300">{question}</p>
          {type === 'multiple-select' && <p className="text-[10px] text-neutral-600 uppercase mt-1">Select all that apply</p>}
        </div>
      </div>

      {type === 'input' && (
        <form onSubmit={checkAnswer} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={resolvedInputValue}
              onChange={(e) => {
                if (resolvedStatus === 'incorrect') setStatus('idle');
                setAnswer(e.target.value);
              }}
              disabled={resolvedStatus === 'correct'}
              className={`w-full bg-[#0f0f0f] border rounded-md px-3 py-1.5 text-sm outline-none transition-colors ${
                resolvedStatus === 'correct' ? 'border-neutral-600 text-neutral-400' :
                resolvedStatus === 'incorrect' ? 'border-red-900/50' : 'border-[#282828] focus:border-neutral-600'
              }`}
            />
          </div>
          <button type="submit" disabled={resolvedStatus === 'correct'} className="px-3 py-1.5 bg-white/10 text-neutral-300 rounded-md text-xs font-medium hover:bg-white/15 transition-colors disabled:opacity-40">
            {resolvedStatus === 'correct' ? 'Done' : 'Check'}
          </button>
        </form>
      )}

      {(type === 'multiple-choice' || type === 'multiple-select') && (
        <div className="space-y-1.5">
          {options.map((option) => {
            const selected = type === 'multiple-choice'
              ? (initialCompleted
                ? option === (Array.isArray(correctAnswer) ? (correctAnswer[0] ?? '') : correctAnswer)
                : answer === option)
              : (initialCompleted
                ? (Array.isArray(correctAnswer) ? correctAnswer.includes(option) : false)
                : (answer as string[]).includes(option));

            return (
            <button
              key={option}
              onClick={() => {
                if (resolvedStatus === 'incorrect') setStatus('idle');
                if (type === 'multiple-choice') {
                  setAnswer(option);
                } else {
                  toggleSelect(option);
                }
              }}
              disabled={resolvedStatus === 'correct'}
              className={`w-full p-2.5 rounded-md border text-sm text-left flex items-center gap-3 transition-colors ${
                selected
                  ? 'border-neutral-600 bg-white/5 text-neutral-200'
                  : 'border-[#282828] bg-[#0f0f0f] text-neutral-500 hover:border-neutral-700'
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                selected
                  ? 'border-neutral-500 bg-neutral-500' : 'border-neutral-700'
              }`}>
                {selected && <Check size={10} className="text-black" />}
              </div>
              {option}
            </button>
            );
          })}
          {resolvedStatus !== 'correct' && (
            <button
              onClick={checkAnswer}
              className="w-full mt-1.5 py-2 bg-white/10 text-neutral-300 rounded-md text-xs font-medium hover:bg-white/15 transition-colors"
            >
              Submit Answer
            </button>
          )}
        </div>
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
        <p className="mt-2 text-xs text-red-300">Not quite. Try again or use hint.</p>
      )}

      {hint && resolvedStatus !== 'correct' && (
        <div className="mt-2.5">
          <button onClick={() => setShowHint(!showHint)} className="text-[10px] font-medium text-neutral-600 uppercase hover:text-neutral-400 transition-colors">
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          {showHint && <p className="text-xs text-neutral-500 mt-1 italic border-l-2 border-neutral-700 pl-2">{hint}</p>}
        </div>
      )}
    </div>
  );
}
