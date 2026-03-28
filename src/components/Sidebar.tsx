"use client";

import Link from 'next/link';
import { Home, BookOpen, Layout, Terminal, Settings, PanelLeftClose, PanelLeftOpen, LogIn, LogOut, FlaskConical } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useLang } from '@/hooks/useLang';

export default function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const lang = useLang();
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  const initials = user?.login ? user.login.slice(0, 2).toUpperCase() : '??';
  const displayName = user?.login ?? (lang === 'ru' ? 'Гость' : 'Guest');
  const level = Math.floor((user?.points ?? 0) / 100) + 1;

  const menuItems = [
    { icon: Home, label: lang === 'ru' ? 'Панель управления' : 'Dashboard', href: `/${lang}` },
    { icon: BookOpen, label: lang === 'ru' ? 'Пути обучения' : 'Learning Paths', href: `/${lang}/paths` },
    { icon: Layout, label: lang === 'ru' ? 'Все комнаты' : 'All Rooms', href: `/${lang}/rooms` },
    { icon: FlaskConical, label: lang === 'ru' ? 'Лаборатории' : 'Labs', href: `/${lang}/labs` },
    { icon: Settings, label: lang === 'ru' ? 'Профиль' : 'Profile', href: `/${lang}/settings` },
  ];

  return (
    <aside
      className={`h-screen bg-card border-r border-border-card flex flex-col sticky top-0 transition-[width] duration-300 ease-out ${
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
            className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-base transition-colors"
            aria-label="Collapse sidebar"
          >
            <PanelLeftClose size={16} />
          </button>
        )}
        {collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute top-4 right-2 p-1.5 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-base transition-colors"
            aria-label="Expand sidebar"
          >
            <PanelLeftOpen size={16} />
          </button>
        )}
      </div>

      <nav className={`${collapsed ? 'px-2 py-2' : 'px-3 py-2'} flex-1`}>
        {menuItems.map((item) => {
          const isExactDashboard = item.href === `/${lang}`;
          const isActive = isExactDashboard ? pathname === item.href : pathname?.startsWith(`${item.href}/`) || pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg transition-colors mb-1 text-sm ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-500/20'
                  : 'text-neutral-500 hover:text-neutral-200 hover:bg-base border border-transparent'
              }`}
              title={item.label}
            >
              <item.icon size={18} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={`${collapsed ? 'p-2' : 'p-4'} border-t border-border-card`}>
        {isAuthenticated ? (
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-2`}>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-neutral-400 text-xs font-medium">
              {initials}
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-300 truncate">{displayName}</p>
                <p className="text-xs text-neutral-600">{lang === 'ru' ? `Ур. ${level}` : `Lvl ${level}`}</p>
              </div>
            )}
            {!collapsed && (
              <button
                type="button"
                onClick={() => logout()}
                className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-base transition-colors"
                title={lang === 'ru' ? 'Выйти' : 'Logout'}
              >
                <LogOut size={14} />
              </button>
            )}
          </div>
        ) : (
          <Link
            href={`/${lang}/login`}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg text-sm text-neutral-500 hover:text-neutral-200 hover:bg-base transition-colors`}
          >
            <LogIn size={18} />
            {!collapsed && <span className="font-medium">{lang === 'ru' ? 'Войти' : 'Sign in'}</span>}
          </Link>
        )}
      </div>
    </aside>
  );
}
