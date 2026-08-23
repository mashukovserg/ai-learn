"use client";

import React, { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Bot,
  Brain,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Database,
  Eye,
  FileCode,
  GitBranch,
  Flame,
  Globe,
  HardDrive,
  Image as ImageIcon,
  Landmark,
  Layers,
  Library,
  MessageSquare,
  Network,
  Palette,
  RefreshCw,
  Rocket,
  Gauge,
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
  Workflow,
  Wrench,
} from 'lucide-react';
import { ROOM_TASKS, ROOMS_METADATA } from '@/data/rooms';
import { getRoomProgress } from '@/hooks/useProgress';
import { toLang } from '@/types/lang';

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';
type DifficultyFilter = 'all' | 'Beginner' | 'Intermediate' | 'Advanced';
type StatusFilter = 'all' | ProgressStatus;
type FocusFilter = 'all' | 'agent-coding' | 'ai-philosophy' | `category:${string}`;
type RoomProgressSnapshot = {
  status: ProgressStatus;
  percent: number;
  completed: number;
  total: number;
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
  GitBranch,
  Workflow,
  BookOpen,
  Library,
  Landmark,
  Layers,
  Network,
  Flame,
  HardDrive,
  Gauge,
};

function createInitialRoomSnapshots(): Record<string, RoomProgressSnapshot> {
  const snapshots: Record<string, RoomProgressSnapshot> = {};
  for (const room of ROOMS_METADATA) {
    snapshots[room.id] = {
      status: 'not-started',
      percent: 0,
      completed: 0,
      total: ROOM_TASKS[room.id]?.length ?? 0,
    };
  }
  return snapshots;
}

function collectRoomSnapshots(): Record<string, RoomProgressSnapshot> {
  const snapshots: Record<string, RoomProgressSnapshot> = {};
  for (const room of ROOMS_METADATA) {
    const status = getRoomProgress(room.id);
    const total = ROOM_TASKS[room.id]?.length ?? 0;
    let completed = 0;
    let percent = 0;

    try {
      const raw = localStorage.getItem(`progress:${room.id}`);
      const completedIds: number[] = raw ? JSON.parse(raw) : [];
      completed = Math.min(completedIds.length, total);
      percent = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;
      if (status === 'completed') {
        completed = total;
        percent = 100;
      }
    } catch {
      completed = status === 'completed' ? total : 0;
      percent = status === 'completed' ? 100 : 0;
    }

    snapshots[room.id] = { status, percent, completed, total };
  }
  return snapshots;
}

/**
 * Category tint for the icon tile (Fork 5 · variant B, docs/DESIGN_FORKS.md).
 * With the gradient covers gone, this small tile is the only thing that tells
 * categories apart at a glance, so each family gets one hue; the border and the
 * fill are the same hue at low opacity. The accent is deliberately absent here —
 * it means "interactive / completed" (Fork 3), not "belongs to a category".
 */
function getCategoryTone(category: string): string {
  switch (category) {
    case 'Agent Coding':
      return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10';
    case 'Practice':
      return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
    case 'Foundations':
      return 'text-info-400 border-info-400/30 bg-info-400/10';
    case 'Ideas':
    case 'Ideas and Debates':
      return 'text-violet-400 border-violet-400/30 bg-violet-400/10';
    case 'Architecture':
      return 'text-slate-300 border-slate-300/30 bg-slate-300/10';
    case 'Open Models':
      return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    case 'Security':
      return 'text-pink-500 border-pink-500/30 bg-pink-500/10';
    default:
      return 'text-neutral-400 border-neutral-400/30 bg-neutral-400/10';
  }
}

/** Difficulty marker in the meta row — one dot, three levels. */
function difficultyDot(difficulty: string): string {
  if (difficulty === 'Advanced') return 'bg-rose-400';
  if (difficulty === 'Intermediate') return 'bg-warning-400';
  return 'bg-accent-500';
}

export default function RoomsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const lang = toLang(use(props.params).lang);
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
        label: room.category[lang],
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
          const completedTasks = roomSnapshots[room.id]?.completed ?? 0;
          const totalTasks = roomSnapshots[room.id]?.total ?? 0;
          const isCompleted = progressStatus === 'completed';
          const isLocked = lockedRooms.has(room.id);
          const title = room.title[lang];
          const description = room.description[lang];
          const time = room.time[lang];
          const difficultyLabel = room.difficulty.toUpperCase();
          const Icon = (room.icon && ICON_MAP[room.icon]) || Terminal;
          const categoryTone = getCategoryTone(room.category.en);

            return (
              <Link
                key={room.id}
                href={`/${lang}/rooms/${room.id}`}
                aria-disabled={isLocked || undefined}
                tabIndex={isLocked ? -1 : undefined}
                className={`relative h-full flex flex-col overflow-hidden rounded-lg border bg-card-dark p-4 pb-[18px] transition-colors duration-200 ${
                  isCompleted
                    ? 'border-accent-500/40 bg-accent-500/[0.03]'
                    : 'border-border-card'
                } ${isLocked ? 'opacity-40 pointer-events-none' : 'hover:border-accent-500/45'}`}
              >
                <div className="mb-3 flex items-center justify-between gap-2.5">
                  <div className={`flex h-[34px] w-[34px] items-center justify-center rounded-lg border ${categoryTone}`}>
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-neutral-500">
                    {room.category[lang]}
                  </span>
                </div>

                <h3 className={`mb-1.5 text-[15px] font-semibold leading-snug ${isCompleted ? 'text-accent-300' : 'text-neutral-100'}`}>
                  {title}
                </h3>

                <p className="mb-3.5 text-[13px] leading-relaxed text-neutral-400 line-clamp-2">
                  {description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2.5 font-mono text-[10.5px] tracking-[0.05em] text-neutral-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${difficultyDot(room.difficulty)}`} />
                    {difficultyLabel} · {time}
                  </span>

                  {isLocked ? (
                    <span className="text-neutral-400">{lang === 'ru' ? 'Скоро' : 'Coming Soon'}</span>
                  ) : isCompleted ? (
                    <span className="text-accent-400">✓ {lang === 'ru' ? 'завершено' : 'completed'}</span>
                  ) : progressStatus === 'in-progress' ? (
                    <span className="text-cyan-400">{completedTasks}/{totalTasks}</span>
                  ) : null}
                </div>

                {progressPercent > 0 ? (
                  <div className="absolute inset-x-0 bottom-0 h-0.5">
                    <div
                      className={`h-full ${isCompleted ? 'bg-accent-500' : 'bg-cyan-400'}`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                ) : null}
              </Link>
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
