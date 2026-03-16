"use client";

import { useEffect, useState } from 'react';
import { getRoomProgress } from '@/hooks/useProgress';

export default function RoomStatusBadge({ roomId, lang }: { roomId: string; lang: string }) {
  const [status, setStatus] = useState<'not-started' | 'in-progress' | 'completed'>('not-started');

  useEffect(() => {
    setStatus(getRoomProgress(roomId));
  }, [roomId]);

  const labels = {
    'completed': lang === 'ru' ? 'Пройдено' : 'Completed',
    'in-progress': lang === 'ru' ? 'В процессе' : 'In Progress',
    'not-started': lang === 'ru' ? 'Не начато' : 'Not Started',
  };

  return (
    <span className="px-2 py-0.5 rounded text-[10px] font-medium text-neutral-500 bg-white/5">
      {labels[status]}
    </span>
  );
}
