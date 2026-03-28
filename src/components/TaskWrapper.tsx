import { ReactNode } from 'react';
import { Check } from 'lucide-react';

export type TaskStatus = 'idle' | 'correct' | 'incorrect';

interface TaskWrapperProps {
  resolvedStatus: TaskStatus;
  icon: ReactNode;
  question: string;
  subtitle?: string;
  explanation?: string;
  incorrectMessage?: string;
  successLabel?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function TaskWrapper({
  resolvedStatus,
  icon,
  question,
  subtitle,
  explanation,
  incorrectMessage,
  successLabel = 'Correct!',
  footer,
  children,
}: TaskWrapperProps) {
  return (
    <div className={`bg-card border rounded-lg p-4 mb-3 transition-colors ${
      resolvedStatus === 'correct' ? 'border-neutral-600' : 'border-border-subtle'
    }`}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`p-1.5 rounded-md ${
          resolvedStatus === 'correct' ? 'bg-white/10 text-neutral-300' : 'bg-white/5 text-neutral-500'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm text-neutral-300">{question}</p>
          {subtitle && (
            <p className="text-[10px] text-neutral-600 uppercase mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {children}

      {resolvedStatus === 'correct' && (
        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
          <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
            <Check size={14} /> {successLabel}
          </p>
          {explanation && (
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              {explanation}
            </p>
          )}
        </div>
      )}

      {resolvedStatus === 'incorrect' && incorrectMessage && (
        <p className="mt-2 text-xs text-red-300">{incorrectMessage}</p>
      )}

      {footer}
    </div>
  );
}
