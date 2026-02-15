"use client";

import Link from 'next/link';
import { Home, BookOpen, Layout, Terminal, Trophy, Settings, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function Sidebar({
  lang,
  collapsed,
  onToggle,
}: {
  lang: string;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const menuItems = [
    { icon: Home, label: lang === 'ru' ? 'Панель управления' : 'Dashboard', href: `/${lang}` },
    { icon: BookOpen, label: lang === 'ru' ? 'Пути обучения' : 'Learning Paths', href: `/${lang}/paths` },
    { icon: Layout, label: lang === 'ru' ? 'Все комнаты' : 'All Rooms', href: `/${lang}/rooms` },
    { icon: Terminal, label: lang === 'ru' ? 'Соревнования' : 'Compete', href: `/${lang}/compete` },
    { icon: Trophy, label: lang === 'ru' ? 'Таблица лидеров' : 'Leaderboard', href: `/${lang}/leaderboard` },
    { icon: Settings, label: lang === 'ru' ? 'Настройки' : 'Settings', href: `/${lang}/settings` },
  ];

  return (
    <aside
      className={`h-screen bg-[#171717] border-r border-[#282828] flex flex-col sticky top-0 transition-[width] duration-300 ease-out ${
        collapsed ? 'w-[64px]' : 'w-[208px]'
      }`}
    >
      <div className={`${collapsed ? 'px-3 py-4' : 'px-4 py-4'} flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        <h1 className={`text-lg font-semibold text-neutral-200 flex items-center ${collapsed ? 'justify-center' : 'gap-2.5'} tracking-tight`}>
          <Terminal size={20} className="text-neutral-400" />
          {!collapsed && 'AI-Learn'}
        </h1>
        {!collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 transition-colors"
            aria-label="Collapse sidebar"
          >
            <PanelLeftClose size={16} />
          </button>
        )}
        {collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute top-4 right-2 p-1.5 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 transition-colors"
            aria-label="Expand sidebar"
          >
            <PanelLeftOpen size={16} />
          </button>
        )}
      </div>

      <nav className={`${collapsed ? 'px-2 py-2' : 'px-3 py-2'} flex-1`}>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2 text-neutral-500 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-colors mb-0.5 text-sm`}
            title={item.label}
          >
            <item.icon size={18} />
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className={`${collapsed ? 'p-2' : 'p-4'} border-t border-[#282828]`}>
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-2`}>
          <div className="w-8 h-8 rounded-full bg-[#282828] flex items-center justify-center text-neutral-400 text-xs font-medium">
            SM
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-neutral-300">Satoshi</p>
              <p className="text-xs text-neutral-600">{lang === 'ru' ? 'Ур. 1' : 'Lvl 1'}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
