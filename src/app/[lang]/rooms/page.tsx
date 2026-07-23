"use client";

import React, { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Bot,
  Brain,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Cpu,
  Database,
  Eye,
  FileCode,
  Globe,
  Image as ImageIcon,
  MessageSquare,
  Palette,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Waves,
  Wrench,
} from 'lucide-react';
import { ROOM_TASKS, ROOMS_METADATA } from '@/data/rooms';
import { getRoomProgress } from '@/hooks/useProgress';

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';
type DifficultyFilter = 'all' | 'Beginner' | 'Intermediate' | 'Advanced';
type StatusFilter = 'all' | ProgressStatus;
type FocusFilter = 'all' | 'agent-coding' | 'ai-philosophy' | `category:${string}`;
type RoomProgressSnapshot = {
  status: ProgressStatus;
  percent: number;
};

const AI_PHILOSOPHY_ROOM_IDS = new Set<string>([
  'ai-history',
  'chatgpt-moment',
  'post-chatgpt-history',
  'scaling-hypothesis',
  'ai-singularity',
]);

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Bot,
  Brain,
  Terminal,
  Waves,
  Rocket,
  Sparkles,
  MessageSquare,
  Eye,
  ClipboardCheck,
  Image: ImageIcon,
  TrendingUp,
  Shield,
  Cpu,
  FileCode,
  Users,
  ShieldCheck,
  Palette,
  Search,
  Database,
  ShieldAlert,
  Scale,
  Globe,
  Wrench,
  RefreshCw,
};

function createInitialRoomSnapshots(): Record<string, RoomProgressSnapshot> {
  const snapshots: Record<string, RoomProgressSnapshot> = {};
  for (const room of ROOMS_METADATA) {
    snapshots[room.id] = { status: 'not-started', percent: 0 };
  }
  return snapshots;
}

function collectRoomSnapshots(): Record<string, RoomProgressSnapshot> {
  const snapshots: Record<string, RoomProgressSnapshot> = {};
  for (const room of ROOMS_METADATA) {
    const status = getRoomProgress(room.id);
    let percent = 0;

    try {
      const raw = localStorage.getItem(`progress:${room.id}`);
      const completedIds: number[] = raw ? JSON.parse(raw) : [];
      const totalTasks = ROOM_TASKS[room.id]?.length ?? 0;
      percent = totalTasks > 0 ? Math.min(100, Math.round((completedIds.length / totalTasks) * 100)) : 0;
      if (status === 'completed') {
        percent = 100;
      }
    } catch {
      percent = status === 'completed' ? 100 : 0;
    }

    snapshots[room.id] = { status, percent };
  }
  return snapshots;
}

function getCoverTone(category: string) {
  if (category === 'Agent Coding') {
    return {
      visualClassName: 'from-cyan-500/25 via-sky-500/10 to-card',
      iconColorClass: 'text-cyan-200',
    };
  }
  if (category === 'Ideas') {
    return {
      visualClassName: 'from-violet-500/25 via-indigo-500/10 to-card',
      iconColorClass: 'text-violet-200',
    };
  }
  if (category === 'Practice') {
    return {
      visualClassName: 'from-warning-500/25 via-orange-500/10 to-card',
      iconColorClass: 'text-warning-200',
    };
  }
  if (category === 'Architecture') {
    return {
      visualClassName: 'from-accent-500/25 via-lime-500/10 to-card',
      iconColorClass: 'text-accent-200',
    };
  }
  return {
    visualClassName: 'from-fuchsia-500/25 via-rose-500/10 to-card',
    iconColorClass: 'text-fuchsia-200',
  };
}

function progressTone(percent: number) {
  if (percent >= 100) return 'text-accent-200 border-accent-300/50 bg-accent-500/10';
  if (percent >= 10) return 'text-cyan-200 border-cyan-300/50 bg-cyan-500/10';
  return 'text-neutral-200 border-white/35 bg-white/5';
}

export default function RoomsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(props.params);
  const lockedRooms = new Set<string>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [focusFilter, setFocusFilter] = useState<FocusFilter>('all');
  const [roomSnapshots, setRoomSnapshots] = useState<Record<string, RoomProgressSnapshot>>(() => createInitialRoomSnapshots());

  const focusCategories = useMemo(() => {
    const seen = new Set<string>();
    const categories: { value: FocusFilter; label: string }[] = [];
    for (const room of ROOMS_METADATA) {
      const key = room.category.en;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      categories.push({
        value: `category:${key}`,
        label: room.category[lang as 'ru' | 'en'],
      });
    }
    return categories;
  }, [lang]);

  useEffect(() => {
    const handleProgressUpdated = () => {
      setRoomSnapshots(collectRoomSnapshots());
    };

    // Avoid SSR/CSR hydration mismatch: read local progress only after mount.
    handleProgressUpdated();
    window.addEventListener('progress-updated', handleProgressUpdated);
    return () => window.removeEventListener('progress-updated', handleProgressUpdated);
  }, []);

  const filteredRooms = useMemo(
    () => ROOMS_METADATA.filter((room) => {
      const roomStatus = roomSnapshots[room.id]?.status ?? 'not-started';
      const matchesDifficulty = difficultyFilter === 'all' || room.difficulty === difficultyFilter;
      const matchesStatus = statusFilter === 'all' || roomStatus === statusFilter;
      const matchesFocus = focusFilter === 'all'
        || (focusFilter === 'agent-coding' && room.category.en === 'Agent Coding')
        || (focusFilter === 'ai-philosophy'
          && (room.category.en === 'Ideas' || AI_PHILOSOPHY_ROOM_IDS.has(room.id)))
        || (focusFilter.startsWith('category:')
          && room.category.en === focusFilter.slice('category:'.length));
      return matchesDifficulty && matchesStatus && matchesFocus;
    }),
    [difficultyFilter, focusFilter, roomSnapshots, statusFilter]
  );

  const hasActiveFilters = difficultyFilter !== 'all' || focusFilter !== 'all' || statusFilter !== 'all';

  const resetFilters = () => {
    setDifficultyFilter('all');
    setFocusFilter('all');
    setStatusFilter('all');
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
          <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
            {lang === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span className="text-neutral-300">{lang === 'ru' ? 'Комнаты' : 'Rooms'}</span>
        </nav>

        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">{lang === 'ru' ? 'Все комнаты' : 'All Rooms'}</h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Каждая комната — это интерактивный урок с теорией и практическими заданиями. Проходите комнаты по порядку или выбирайте интересную тему.'
            : 'Each room is an interactive lesson with theory and hands-on tasks. Follow them in order or pick a topic that interests you.'}
        </p>
      </div>

      <div className="xl:grid xl:grid-cols-[248px_minmax(0,1fr)] xl:gap-6 xl:items-start">
        <aside className="mb-6 xl:mb-0 xl:sticky xl:top-6">
          <div className="bg-card-dark border border-border-card rounded-xl p-4 md:p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold text-neutral-200">
                  {lang === 'ru' ? 'Фильтры' : 'Filters'}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  {lang === 'ru'
                    ? 'Отберите комнаты по уровню, теме и статусу прогресса.'
                    : 'Narrow rooms by level, topic, and progress status.'}
                </p>
              </div>

              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-md border border-border-subtle px-2.5 py-1 text-[11px] font-medium text-neutral-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  {lang === 'ru' ? 'Сбросить' : 'Reset'}
                </button>
              ) : null}
            </div>

            <div className="space-y-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {lang === 'ru' ? 'Сложность' : 'Difficulty'}
                </span>
                <select
                  value={difficultyFilter}
                  onChange={(event) => setDifficultyFilter(event.target.value as DifficultyFilter)}
                  className="bg-input border border-border-subtle rounded-lg px-3 py-2 text-sm text-neutral-200 outline-none focus:border-cyan-400/70 transition-colors"
                >
                  <option value="all">{lang === 'ru' ? 'Все уровни' : 'All levels'}</option>
                  <option value="Beginner">BEGINNER</option>
                  <option value="Intermediate">INTERMEDIATE</option>
                  <option value="Advanced">ADVANCED</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {lang === 'ru' ? 'Фокус' : 'Focus'}
                </span>
                <select
                  value={focusFilter}
                  onChange={(event) => setFocusFilter(event.target.value as FocusFilter)}
                  className="bg-input border border-border-subtle rounded-lg px-3 py-2 text-sm text-neutral-200 outline-none focus:border-cyan-400/70 transition-colors"
                >
                  <option value="all">{lang === 'ru' ? 'Все темы' : 'All topics'}</option>
                  <option value="agent-coding">Agent Coding</option>
                  <option value="ai-philosophy">{lang === 'ru' ? 'Философия AI' : 'AI Philosophy'}</option>
                  {focusCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {lang === 'ru' ? 'Статус' : 'Status'}
                </span>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                  className="bg-input border border-border-subtle rounded-lg px-3 py-2 text-sm text-neutral-200 outline-none focus:border-cyan-400/70 transition-colors"
                >
                  <option value="all">{lang === 'ru' ? 'Все статусы' : 'All statuses'}</option>
                  <option value="in-progress">{lang === 'ru' ? 'В процессе' : 'In Progress'}</option>
                  <option value="completed">{lang === 'ru' ? 'Завершено' : 'Completed'}</option>
                  <option value="not-started">{lang === 'ru' ? 'Не начато' : 'Not Started'}</option>
                </select>
              </label>
            </div>

            <div className="mt-5 rounded-lg border border-border-subtle bg-base/40 px-3 py-3">
              <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                {lang === 'ru' ? 'Показано' : 'Showing'}
              </div>
              <div className="mt-1 text-2xl font-semibold text-neutral-100">
                {filteredRooms.length}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                {lang === 'ru'
                  ? `из ${ROOMS_METADATA.length} доступных комнат`
                  : `out of ${ROOMS_METADATA.length} available rooms`}
              </p>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-xs uppercase tracking-[0.14em] text-neutral-500">
              {lang === 'ru'
                ? `Каталог комнат · ${filteredRooms.length}`
                : `Room catalog · ${filteredRooms.length}`}
            </div>

            {hasActiveFilters ? (
              <div className="text-xs text-neutral-500">
                {lang === 'ru' ? 'Применены фильтры' : 'Filters applied'}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-4 xl:gap-5 items-stretch">
            {filteredRooms.map((room) => {
          const progressStatus = roomSnapshots[room.id]?.status ?? 'not-started';
          const progressPercent = roomSnapshots[room.id]?.percent ?? 0;
          const isCompleted = progressStatus === 'completed';
          const isLocked = lockedRooms.has(room.id);
          const title = room.title[lang as 'en' | 'ru'];
          const description = room.description[lang as 'en' | 'ru'];
          const time = room.time[lang as 'en' | 'ru'];
          const difficultyLabel = room.difficulty.toUpperCase();
          const Icon = (room.icon && ICON_MAP[room.icon]) || Terminal;
          const coverTone = getCoverTone(room.category.en);
          const statusLabel = progressStatus === 'completed'
            ? (lang === 'ru' ? 'Завершено' : 'Completed')
            : (lang === 'ru' ? 'В процессе' : 'In Progress');

            return (
              <div
                key={room.id}
                className={`bg-card-dark border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 ${
                  isCompleted
                    ? 'border-accent-500/50 bg-accent-500/[0.03]'
                    : 'border-border-card'
                } ${isLocked ? 'opacity-40 pointer-events-none' : 'group hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl'}`}
              >
                <div className={`relative h-40 md:h-44 overflow-hidden border-b border-border-subtle bg-gradient-to-br ${coverTone.visualClassName}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
                  <div className="absolute right-4 top-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold ${progressTone(progressPercent)}`}>
                      {progressPercent}%
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-8">
                    <div className="flex items-end justify-between gap-4">
                      <div className={`rounded-[1.15rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm ${coverTone.iconColorClass}`}>
                        <Icon size={32} strokeWidth={1.9} />
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-100 backdrop-blur-sm">
                        {room.category[lang as 'en' | 'ru']}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-4 flex-1 flex flex-col transition-all duration-300 ${isLocked ? '' : 'group-hover:-translate-y-1'}`}>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500/80" />
                      {difficultyLabel}
                    </span>

                    {isLocked ? (
                      <>
                        <span className="text-neutral-700">•</span>
                        <span className="text-neutral-400">{lang === 'ru' ? 'Скоро' : 'Coming Soon'}</span>
                      </>
                    ) : progressStatus !== 'not-started' ? (
                      <>
                        <span className="text-neutral-700">•</span>
                        <span className={progressStatus === 'completed' ? 'text-accent-300' : 'text-cyan-300'}>
                          {statusLabel}
                        </span>
                      </>
                    ) : null}
                  </div>

                  <h3 className={`text-[15px] font-semibold transition-colors mb-2 ${isCompleted ? 'text-accent-300' : 'text-neutral-100 group-hover:text-white'}`}>
                    {title}
                  </h3>

                  <p className="text-neutral-400 text-[13px] line-clamp-2 leading-relaxed mb-3">
                    {description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Clock size={13} />
                      <span>{time}</span>
                    </div>

                    {!isLocked && (
                      <Link
                        href={`/${lang}/rooms/${room.id}`}
                        className="p-2 rounded-md text-neutral-400 hover:text-cyan-200 hover:bg-cyan-500/10 transition-colors"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>

          {filteredRooms.length === 0 && (
            <div className="mt-8 bg-card-dark border border-border-card rounded-xl p-6 text-center">
              <p className="text-neutral-400 text-sm">
                {lang === 'ru'
                  ? 'Нет комнат, подходящих под выбранные фильтры.'
                  : 'No rooms match the selected filters.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
