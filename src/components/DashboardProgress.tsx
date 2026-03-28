"use client";

import { useEffect, useState } from 'react';
import { getCompletedRoomCount } from '@/hooks/useProgress';
import { useLang } from '@/hooks/useLang';

export default function DashboardProgress({ totalRooms }: { totalRooms: number }) {
  const lang = useLang();
  const [completedRooms, setCompletedRooms] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompletedRooms(getCompletedRoomCount());
  }, []);

  const progressPercent = totalRooms > 0 ? Math.round((completedRooms / totalRooms) * 100) : 0;

  return (
    <div className="flex items-center gap-6 w-full">
      <div className="flex-1 min-w-0">
        <div className="mt-3 max-w-md">
          <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
            <span>{lang === 'ru' ? 'Прогресс пути' : 'Path progress'}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-1.5 bg-[#202a23] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-lime-300 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
      <span className="text-xs text-neutral-400 shrink-0">
        {completedRooms}/{totalRooms}
      </span>
    </div>
  );
}
