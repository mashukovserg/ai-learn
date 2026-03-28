"use client";

import React, { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import { ROOMS_METADATA } from '@/data/rooms';
import { getRoomProgress } from '@/hooks/useProgress';

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';
type DifficultyFilter = 'all' | 'Beginner' | 'Intermediate' | 'Advanced';
type StatusFilter = 'all' | ProgressStatus;

function createInitialRoomStatuses(): Record<string, ProgressStatus> {
  const statuses: Record<string, ProgressStatus> = {};
  for (const room of ROOMS_METADATA) {
    statuses[room.id] = 'not-started';
  }
  return statuses;
}

function collectRoomStatuses(): Record<string, ProgressStatus> {
  const statuses: Record<string, ProgressStatus> = {};
  for (const room of ROOMS_METADATA) {
    statuses[room.id] = getRoomProgress(room.id);
  }
  return statuses;
}

export default function RoomsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(props.params);
  const lockedRooms = new Set<string>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [roomStatuses, setRoomStatuses] = useState<Record<string, ProgressStatus>>(() => createInitialRoomStatuses());

  useEffect(() => {
    const handleProgressUpdated = () => {
      setRoomStatuses(collectRoomStatuses());
    };

    // Avoid SSR/CSR hydration mismatch: read local progress only after mount.
    handleProgressUpdated();
    window.addEventListener('progress-updated', handleProgressUpdated);
    return () => window.removeEventListener('progress-updated', handleProgressUpdated);
  }, []);

  const filteredRooms = useMemo(
    () => ROOMS_METADATA.filter((room) => {
      const roomStatus = roomStatuses[room.id] ?? 'not-started';
      const matchesDifficulty = difficultyFilter === 'all' || room.difficulty === difficultyFilter;
      const matchesStatus = statusFilter === 'all' || roomStatus === statusFilter;
      return matchesDifficulty && matchesStatus;
    }),
    [difficultyFilter, roomStatuses, statusFilter]
  );

  return (
    <div className="max-w-6xl mx-auto">
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

      <div className="bg-card-dark border border-border-card rounded-xl p-4 md:p-5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-4 md:gap-5 min-[1200px]:gap-6 items-stretch">
        {filteredRooms.map((room) => {
          const progressStatus = roomStatuses[room.id] ?? 'not-started';
          const isCompleted = progressStatus === 'completed';
          const isLocked = lockedRooms.has(room.id);
          const title = room.title[lang as 'en' | 'ru'];
          const description = room.description[lang as 'en' | 'ru'];
          const time = room.time[lang as 'en' | 'ru'];
          const difficultyLabel = room.difficulty.toUpperCase();
          const statusLabel = progressStatus === 'completed'
            ? (lang === 'ru' ? 'Завершено' : 'Completed')
            : (lang === 'ru' ? 'В процессе' : 'In Progress');

          return (
            <div
              key={room.id}
              className={`bg-card-dark border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 ${
                isCompleted
                  ? 'border-emerald-500/50 bg-emerald-500/[0.03]'
                  : 'border-border-card'
              } ${isLocked ? 'opacity-40 pointer-events-none' : 'group hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl'}`}
            >
              <div className="relative aspect-video bg-card border-b border-border-subtle overflow-hidden">
                {room.image ? (
                  <>
                    <Image
                      src={room.image}
                      alt={title}
                      fill
                      className={`object-cover transition-transform duration-300 ${isCompleted ? 'opacity-60' : 'opacity-85'} ${isLocked ? '' : 'group-hover:scale-[1.03]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <Terminal size={32} className="text-neutral-700 group-hover:text-neutral-500 transition-colors" />
                  </div>
                )}
              </div>

              <div className={`p-5 flex-1 flex flex-col transition-all duration-300 ${isLocked ? '' : 'group-hover:-translate-y-1'}`}>
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
                      <span className={progressStatus === 'completed' ? 'text-emerald-300' : 'text-cyan-300'}>
                        {statusLabel}
                      </span>
                    </>
                  ) : null}
                </div>

                <h3 className={`text-base font-semibold transition-colors mb-2 ${isCompleted ? 'text-emerald-300' : 'text-neutral-100 group-hover:text-white'}`}>
                  {title}
                </h3>

                <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed mb-4">
                  {description}
                </p>

                <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
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
  );
}
