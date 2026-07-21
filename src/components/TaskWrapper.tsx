import { ReactNode } from 'react';
import { Check } from 'lucide-react';

export type TaskStatus = 'idle' | 'correct' | 'incorrect';

export interface TaskImage {
  src: string;
  alt: string;
  caption?: string;
}

export function TaskIllustration({ image }: { image: TaskImage }) {
  return (
    <figure className="mb-3">
      {/* eslint-disable-next-line @next/next/no-img-element -- task illustrations are static assets under public/ */}
      <img
        src={image.src}
        alt={image.alt}
        className="w-full max-h-72 object-contain rounded-md border border-border-subtle bg-base"
      />
      {image.caption && (
        <figcaption className="mt-1.5 text-xs text-neutral-500">{image.caption}</figcaption>
      )}
    </figure>
  );
}

interface TaskWrapperProps {
  resolvedStatus: TaskStatus;
  icon: ReactNode;
  question: string;
  subtitle?: string;
  image?: TaskImage;
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
  image,
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
      {image && <TaskIllustration image={image} />}
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
        <div className="mt-3 p-3 bg-accent-500/10 border border-accent-500/20 rounded-md">
          <p className="text-xs font-bold text-accent-400 flex items-center gap-1.5 mb-1">
            <Check size={14} /> {successLabel}
          </p>
          {explanation && (
            <p className="text-xs text-accent-200/80 leading-relaxed">
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
