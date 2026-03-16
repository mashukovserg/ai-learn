"use client";

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Clock, ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import RoomStatusBadge from '@/components/RoomStatusBadge';
import { ROOMS_METADATA, ROOM_TASKS } from '@/data/rooms';
import { useProgress } from '@/hooks/useProgress';

export default function RoomsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(props.params);
  const lockedRooms = new Set<string>([]);

  return (
    <div className="max-w-5xl mx-auto">
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

      <div className="grid grid-cols-1 gap-4">
        {ROOMS_METADATA.map((room) => {
          // Inside the map, we use the hook logic
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { completedIds } = useProgress(room.id);
          const isCompleted = completedIds.size > 0 && completedIds.size >= (ROOM_TASKS[room.id]?.length || 0);
          
          const isLocked = lockedRooms.has(room.id);
          const title = room.title[lang as 'en' | 'ru'];
          const description = room.description[lang as 'en' | 'ru'];
          const category = room.category[lang as 'en' | 'ru'];
          const time = room.time[lang as 'en' | 'ru'];

          return (
            <div
              key={room.id}
              className={`bg-[#171717] border rounded-lg overflow-hidden flex flex-col transition-all duration-300 ${
                isCompleted 
                  ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.05)] bg-emerald-500/[0.02]' 
                  : 'border-[#282828] hover:border-neutral-600'
              } ${isLocked ? 'opacity-40 pointer-events-none' : 'group'}`}
            >
              <div className="h-24 bg-[#1a1a1a] relative flex items-center justify-center border-b border-[#282828]">
                {room.image ? (
                  <>
                    <Image
                      src={room.image}
                      alt={title}
                      fill
                      className={`object-cover transition-opacity duration-500 ${isCompleted ? 'opacity-40' : 'opacity-75'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
                  </>
                ) : (
                  <Terminal size={32} className="text-neutral-800 group-hover:text-neutral-600 transition-colors" />
                )}
                
                {isCompleted && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-emerald-500 rounded-full p-1 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                      <CheckCircle2 size={24} className="text-black" />
                    </div>
                  </div>
                )}

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
                  {category}
                </div>
                <div className="absolute top-3 right-3">
                  {isLocked
                    ? <span className="px-2 py-0.5 rounded text-[10px] font-medium text-neutral-500 bg-white/5">{lang === 'ru' ? 'Скоро' : 'Coming Soon'}</span>
                    : <RoomStatusBadge roomId={room.id} lang={lang} />
                  }
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-sm font-semibold transition-colors ${isCompleted ? 'text-emerald-400' : 'text-neutral-200 group-hover:text-white'}`}>
                    {title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${isCompleted ? 'text-emerald-500/70 bg-emerald-500/5' : 'text-neutral-500 bg-white/5'}`}>
                    {room.difficulty}
                  </span>
                </div>

                <p className="text-neutral-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {description}
                </p>

                <div className={`mt-auto pt-4 border-t flex items-center justify-between ${isCompleted ? 'border-emerald-500/10' : 'border-[#282828]'}`}>
                  <div className="flex gap-4">
                    <div className={`flex items-center gap-1.5 text-xs ${isCompleted ? 'text-emerald-500/50' : 'text-neutral-600'}`}>
                      <Clock size={13} />
                      <span>{time}</span>
                    </div>
                  </div>

                  {!isLocked && (
                    <Link
                      href={`/${lang}/rooms/${room.id}`}
                      className={`p-1.5 rounded-md transition-colors ${
                        isCompleted 
                          ? 'text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20' 
                          : 'text-neutral-600 hover:text-neutral-200 hover:bg-white/5'
                      }`}
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
    </div>
  );
}
