"use client";

import { Search, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useLang } from '@/hooks/useLang';

export default function Navbar() {
  const lang = useLang();
  const pathname = usePathname();
  const { user } = useAuth();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    if (segments.length <= 1) return `/${locale}`;
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  return (
    <header className="h-16 border-b border-border-card bg-card/90 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-4 md:px-6 lg:px-10">
      <div className="flex items-center gap-3 bg-base px-3.5 py-2 rounded-lg border border-border-card w-[min(26rem,60vw)]">
        <Search size={15} className="text-neutral-600" />
        <input
          type="text"
          placeholder={lang === 'ru' ? "Поиск комнат..." : "Search rooms..."}
          className="bg-transparent border-none outline-none text-sm w-full text-neutral-300 placeholder:text-neutral-600"
        />
      </div>

      <div className="flex items-center gap-4 md:gap-5">
        <div className="flex items-center gap-1 bg-base p-0.5 rounded-lg border border-border-card">
          <Link
            href={redirectedPathname('ru')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${lang === 'ru' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            RU
          </Link>
          <Link
            href={redirectedPathname('en')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${lang === 'en' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            EN
          </Link>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
          <Zap size={14} />
          <span className="font-medium tracking-tight">{user?.points ?? 0} {lang === 'ru' ? 'очков' : 'pts'}</span>
        </div>

        <div className="hidden sm:flex flex-col items-end">
          <span className="text-xs text-neutral-600">{lang === 'ru' ? 'Серия' : 'Streak'}</span>
          <span className="text-sm font-medium text-neutral-400 tracking-tight">{user?.streak_days ?? 0} {lang === 'ru' ? 'дн.' : 'days'}</span>
        </div>
      </div>
    </header>
  );
}
