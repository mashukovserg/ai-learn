"use client";

import Link from 'next/link';
import { ArrowUpRight, SignalHigh } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { ProfessionCard } from '@/data/professions';

function progressTone(progress: number) {
  if (progress >= 15) return 'text-accent-200 border-accent-300/50 bg-accent-500/10';
  if (progress >= 8) return 'text-cyan-200 border-cyan-300/50 bg-cyan-500/10';
  return 'text-neutral-200 border-white/35 bg-white/5';
}

export default function AIProfessionCard({ profession }: { profession: ProfessionCard }) {
  const lang = useLang() as 'en' | 'ru';
  const Icon = profession.icon;

  const difficultyLabel = profession.difficulty === 'Beginner'
    ? (lang === 'ru' ? 'База' : 'Easy')
    : profession.difficulty === 'Intermediate'
      ? (lang === 'ru' ? 'Средний' : 'Intermediate')
      : (lang === 'ru' ? 'Продвинутый' : 'Advanced');

  const statusLabel = profession.status === 'Core'
    ? (lang === 'ru' ? 'Базовая роль' : 'Core Role')
    : profession.status === 'Specialized'
      ? (lang === 'ru' ? 'Специализация' : 'Specialized')
      : (lang === 'ru' ? 'Лидерство' : 'Leadership');

  return (
    <Link
      href={`/${lang}${profession.href}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card-dark transition-all duration-300 ${
        profession.featured
          ? 'border-accent-400/60 shadow-[0_0_0_1px_rgba(74,222,128,0.12)]'
          : 'border-border-card hover:-translate-y-1 hover:border-border-emphasis'
      }`}
    >
      {profession.featured && (
        <div className="absolute left-5 top-0 z-20 -translate-y-1/2 rounded-full bg-lime-300 px-4 py-1 text-xs font-semibold text-lime-950">
          {lang === 'ru' ? 'Рекомендуемый старт' : 'Recommended start'}
        </div>
      )}

      <div className={`relative h-48 overflow-hidden border-b border-border-card bg-gradient-to-br ${profession.visualClassName}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="absolute right-5 top-5">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold ${progressTone(profession.progress)}`}>
            {profession.progress}%
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10">
          <div className="flex items-end justify-between gap-4">
            <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm ${profession.iconColorClass}`}>
              <Icon size={44} strokeWidth={1.8} />
            </div>
            <ArrowUpRight className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          <span>{statusLabel}</span>
          <span className="text-neutral-700">•</span>
          <span>{profession.progress}%</span>
        </div>

        <h3 className="mb-2 text-[1.65rem] leading-tight font-semibold text-neutral-100 transition-colors group-hover:text-white">
          {profession.title[lang]}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-neutral-400">
          {profession.description[lang]}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {profession.highlights.map((highlight) => (
            <span
              key={highlight[lang]}
              className="rounded-full border border-border-subtle bg-base px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {highlight[lang]}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <SignalHigh size={14} className={profession.difficulty === 'Beginner' ? 'text-accent-300' : profession.difficulty === 'Intermediate' ? 'text-warning-300' : 'text-rose-300'} />
            <span>{difficultyLabel}</span>
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            {profession.relatedLabel[lang]}
          </span>
        </div>
      </div>
    </Link>
  );
}
