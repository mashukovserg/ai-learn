"use client";

import { Search, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    if (segments.length <= 1) return `/${locale}`;
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  return (
    <header className="h-14 border-b border-[#282828] bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex items-center gap-3 bg-[#171717] px-3 py-1.5 rounded-md border border-[#282828] w-80">
        <Search size={16} className="text-neutral-600" />
        <input
          type="text"
          placeholder={lang === 'ru' ? "Поиск комнат..." : "Search rooms..."}
          className="bg-transparent border-none outline-none text-sm w-full text-neutral-300 placeholder:text-neutral-600"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 bg-[#171717] p-0.5 rounded-md border border-[#282828]">
          <Link
            href={redirectedPathname('ru')}
            className={`px-2.5 py-1 text-xs font-medium rounded ${lang === 'ru' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            RU
          </Link>
          <Link
            href={redirectedPathname('en')}
            className={`px-2.5 py-1 text-xs font-medium rounded ${lang === 'en' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            EN
          </Link>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
          <Zap size={14} />
          <span className="font-medium">450 {lang === 'ru' ? 'очков' : 'pts'}</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs text-neutral-600">{lang === 'ru' ? 'Серия' : 'Streak'}</span>
          <span className="text-sm font-medium text-neutral-400">5 {lang === 'ru' ? 'дн.' : 'days'}</span>
        </div>
      </div>
    </header>
  );
}
