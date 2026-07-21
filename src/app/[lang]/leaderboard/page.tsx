'use client';

import { useLang } from '@/hooks/useLang';
import { Trophy } from 'lucide-react';
import Link from 'next/link';

export default function LeaderboardPage() {
  const lang = useLang() as 'ru' | 'en';

  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mx-auto mb-6">
        <Trophy size={28} className="text-accent-400" />
      </div>
      <h1 className="text-2xl font-semibold mb-3 text-neutral-200">
        {lang === 'ru' ? 'Таблица лидеров' : 'Leaderboard'}
      </h1>
      <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
        {lang === 'ru'
          ? 'Скоро здесь появится рейтинг участников по очкам, стрикам и пройденным комнатам. Продолжайте учиться, чтобы занять первые места.'
          : 'A ranking of learners by points, streaks, and rooms completed is coming soon. Keep learning to claim the top spots.'}
      </p>
      <Link
        href={`/${lang}/rooms`}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500/10 text-accent-300 border border-accent-500/20 rounded-lg text-sm font-medium hover:bg-accent-500/20 transition-colors"
      >
        {lang === 'ru' ? 'Перейти к комнатам' : 'Browse Rooms'}
      </Link>
    </div>
  );
}
