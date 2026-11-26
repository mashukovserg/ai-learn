"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Clock, Bot, Brain, Waves, Terminal, TrendingUp, Search, MessageSquare, Eye,
  ClipboardCheck, Image, Shield, Sparkles,
} from 'lucide-react';
import { DIFFICULTY_LABELS } from '@/data/rooms';
import { getLastRoomId, getRoomProgress } from '@/hooks/useProgress';
import { planContinue, type ContinuePlan } from '@/lib/continuePlan';
import type { Lang } from '@/types/lang';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Bot, Brain, Waves, Terminal, TrendingUp, Search, MessageSquare, Eye, ClipboardCheck, Image, Shield, Sparkles,
};

export interface DashboardContinueLabels {
  currentPath: string;
  startHere: string;
  next: string;
  pathProgress: string;
  continue: string;
  start: string;
  pathDone: string;
  pickNextPath: string;
  upcoming: string;
  viewAll: string;
}

// Server render and first client render both use "no progress", so hydration
// matches; real progress (localStorage) is applied after mount.
const EMPTY_PLAN = planContinue(() => 'not-started', null);

export default function DashboardContinue({ lang, labels }: { lang: Lang; labels: DashboardContinueLabels }) {
  const [plan, setPlan] = useState<ContinuePlan | null>(EMPTY_PLAN);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlan(planContinue(getRoomProgress, getLastRoomId()));
  }, []);

  if (!plan) return null;

  const total = plan.rooms.length;
  const percent = total > 0 ? Math.round((plan.completedCount / total) * 100) : 0;
  const ctaHref = plan.next ? `/${lang}/rooms/${plan.next.id}` : `/${lang}/paths`;
  const ctaLabel = !plan.next ? labels.pickNextPath : plan.started ? labels.continue : labels.start;

  return (
    <>
      {/* Continue learning — primary CTA */}
      <section className="bg-gradient-to-br from-card to-card-dark border border-accent-500/25 rounded-xl p-5 mb-9">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-accent-300/80 mb-1.5">
              {plan.started ? labels.currentPath : labels.startHere}
            </p>
            <Link
              href={`/${lang}/paths/${plan.path.id}`}
              className="font-semibold text-neutral-200 hover:text-neutral-100 transition-colors"
            >
              {plan.path.title[lang]}
            </Link>
            <p className="text-sm text-neutral-500 mt-1">
              {plan.next ? `${labels.next}: ${plan.next.title[lang]}` : labels.pathDone}
            </p>

            <div className="flex items-center gap-6 w-full">
              <div className="flex-1 min-w-0">
                <div className="mt-3 max-w-md">
                  <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                    <span>{labels.pathProgress}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-400 to-lime-300 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
              <span className="text-xs text-neutral-400 shrink-0 mt-3">
                {plan.completedCount}/{total}
              </span>
            </div>
          </div>

          <Link
            href={ctaHref}
            className="px-5 py-2.5 bg-accent-300 text-accent-950 text-sm font-semibold rounded-md hover:bg-accent-200 transition-colors flex items-center justify-center sm:justify-start gap-1.5 shrink-0"
          >
            {ctaLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Next rooms of the same path */}
      {plan.upcoming.length > 0 && (
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm text-neutral-400">{labels.upcoming}</h3>
            <Link href={`/${lang}/rooms`} className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              {labels.viewAll}
            </Link>
          </div>

          <div className="space-y-2">
            {plan.upcoming.map((room) => {
              const Icon = (room.icon && ICON_MAP[room.icon]) || Bot;
              return (
                <Link
                  key={room.id}
                  href={`/${lang}/rooms/${room.id}`}
                  className="flex items-center gap-3 bg-input border border-border-subtle rounded-lg px-3.5 py-3 hover:border-accent-500/35 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-md bg-accent-500/10 border border-accent-500/25 text-accent-300 flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors truncate">
                        {room.title[lang]}
                      </h4>
                      <span className="text-[10px] text-neutral-600 shrink-0">
                        {DIFFICULTY_LABELS[room.difficulty][lang]}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 truncate">{room.description[lang]}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:flex items-center gap-1 text-[11px] text-neutral-600">
                      <Clock size={12} /> {room.time[lang]}
                    </span>
                    <ArrowRight size={14} className="text-neutral-700 group-hover:text-neutral-400 transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
