'use client';

import { useLang } from '@/hooks/useLang';
import { Swords } from 'lucide-react';
import Link from 'next/link';

export default function CompetePage() {
  const lang = useLang() as 'ru' | 'en';

  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mx-auto mb-6">
        <Swords size={28} className="text-accent-400" />
      </div>
      <h1 className="text-2xl font-semibold mb-3 text-neutral-200">
        {lang === 'ru' ? 'Соревнования' : 'Compete'}
      </h1>
      <p className="text-neutral-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
        {lang === 'ru'
          ? 'Скоро здесь появятся тематические челленджи и соревнования между участниками. Проходите комнаты, набирайте очки и готовьтесь к запуску.'
          : 'Themed challenges and head-to-head competitions are coming soon. Complete rooms, earn points, and get ready for launch.'}
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
