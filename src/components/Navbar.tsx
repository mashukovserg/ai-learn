"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import { Search, Zap, Menu, Terminal, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useLang } from '@/hooks/useLang';
import { useTheme } from '@/hooks/useTheme';
import { ROOMS_METADATA } from '@/data/rooms/metadata';

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const lang = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const l = lang as 'ru' | 'en';
    return ROOMS_METADATA.filter((r) => {
      const title = r.title[l].toLowerCase();
      const desc = r.description[l].toLowerCase();
      const cat = r.category[l].toLowerCase();
      return title.includes(q) || desc.includes(q) || cat.includes(q) || r.id.includes(q);
    }).slice(0, 8);
  }, [query, lang]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect -- intentional: reset search UI on route change */
  useEffect(() => {
    setOpen(false);
    setQuery('');
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    if (segments.length <= 1) return `/${locale}`;
    segments[1] = locale;
    return segments.join('/') || `/${locale}`;
  };

  const difficultyColor = (d: string) =>
    d === 'Beginner' ? 'text-accent-400' : d === 'Intermediate' ? 'text-yellow-400' : 'text-red-400';

  return (
    <header className="h-16 border-b border-border-card bg-card/90 backdrop-blur-sm sticky top-0 z-10 flex items-center gap-3 px-4 md:px-6 lg:px-10">
      <button
        type="button"
        onClick={onMenuClick}
        className="md:hidden p-2 -ml-1 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-base transition-colors shrink-0"
        aria-label={lang === 'ru' ? 'Открыть меню' : 'Open menu'}
      >
        <Menu size={20} />
      </button>
      <div ref={wrapperRef} className="relative flex-1 min-w-0 max-w-[26rem]">
        <div className="flex items-center gap-3 bg-base px-3.5 py-2 rounded-lg border border-border-card">
          <Search size={15} className="text-neutral-600" />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => query.trim() && setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') { setOpen(false); }
              if (e.key === 'Enter' && results.length > 0) {
                router.push(`/${lang}/rooms/${results[0].id}`);
                setOpen(false);
                setQuery('');
              }
            }}
            placeholder={lang === 'ru' ? "Поиск комнат..." : "Search rooms..."}
            className="bg-transparent border-none outline-none text-sm w-full text-neutral-300 placeholder:text-neutral-600"
          />
        </div>

        {open && query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-card border border-border-card rounded-lg shadow-xl overflow-hidden z-50">
            {results.length === 0 ? (
              <div className="px-4 py-3 text-sm text-neutral-500">
                {lang === 'ru' ? 'Ничего не найдено' : 'No results found'}
              </div>
            ) : (
              results.map((room) => (
                <Link
                  key={room.id}
                  href={`/${lang}/rooms/${room.id}`}
                  onClick={() => { setOpen(false); setQuery(''); }}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-200 truncate">{room.title[lang as 'ru' | 'en']}</p>
                    <p className="text-xs text-neutral-500 truncate">{room.category[lang as 'ru' | 'en']}</p>
                  </div>
                  <span className={`text-xs font-medium shrink-0 ${difficultyColor(room.difficulty)}`}>
                    {room.difficulty}
                  </span>
                </Link>
              ))
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-5 ml-auto shrink-0">
        <div className="flex items-center gap-1 bg-base p-0.5 rounded-lg border border-border-card">
          <button
            type="button"
            onClick={() => setTheme('terminal')}
            title={lang === 'ru' ? 'Тема «Терминал»' : 'Terminal theme'}
            className={`px-2 py-1 rounded-md transition-colors ${theme === 'terminal' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Terminal size={14} />
          </button>
          <button
            type="button"
            onClick={() => setTheme('saas')}
            title={lang === 'ru' ? 'Тема «SaaS»' : 'SaaS theme'}
            className={`px-2 py-1 rounded-md transition-colors ${theme === 'saas' ? 'bg-white/10 text-neutral-200' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Sun size={14} />
          </button>
        </div>

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
