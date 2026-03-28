"use client";

import { use, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronRight, Globe2, RotateCcw } from 'lucide-react';
import SkillsMatrix from '@/components/SkillsMatrix';
import { ROOMS_METADATA } from '@/data/rooms';
import { useAuth } from '@/hooks/useAuth';

type StatusMessage = {
  kind: 'success' | 'error';
  text: string;
} | null;

function redirectPathWithLocale(pathname: string | null, locale: string): string {
  if (!pathname) return `/${locale}`;
  const segments = pathname.split('/');
  if (segments.length <= 1) return `/${locale}`;
  segments[1] = locale;
  return segments.join('/') || `/${locale}`;
}

export default function SettingsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = use(props.params);
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, refreshUser } = useAuth();

  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS_METADATA[0]?.id ?? '');
  const [isSavingLanguage, setIsSavingLanguage] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [status, setStatus] = useState<StatusMessage>(null);

  const roomOptions = useMemo(
    () => ROOMS_METADATA.map(room => ({ id: room.id, title: room.title[lang as 'en' | 'ru'] })),
    [lang],
  );

  const onSaveLanguage = async () => {
    setIsSavingLanguage(true);
    setStatus(null);

    document.cookie = `preferred-language=${selectedLanguage}; path=/; max-age=31536000; samesite=lax`;

    if (selectedLanguage !== lang) {
      router.push(redirectPathWithLocale(pathname, selectedLanguage));
      return;
    }

    setStatus({
      kind: 'success',
      text: lang === 'ru' ? 'Язык по умолчанию сохранен.' : 'Default language saved.',
    });
    setIsSavingLanguage(false);
  };

  const onResetRoomProgress = async () => {
    if (!selectedRoomId) return;

    setIsResetting(true);
    setStatus(null);

    try {
      localStorage.removeItem(`progress:${selectedRoomId}`);

      const res = await fetch(`/api/progress/${selectedRoomId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok && res.status !== 401) {
        throw new Error(`Failed to reset server progress (${res.status})`);
      }

      window.dispatchEvent(new CustomEvent('progress-updated'));
      await refreshUser();

      setStatus({
        kind: 'success',
        text: lang === 'ru'
          ? 'Прогресс по выбранной комнате сброшен.'
          : 'Selected room progress was reset.',
      });
    } catch {
      setStatus({
        kind: 'error',
        text: lang === 'ru'
          ? 'Не удалось сбросить прогресс. Попробуйте снова.'
          : 'Failed to reset progress. Please try again.',
      });
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
          {lang === 'ru' ? 'Главная' : 'Home'}
        </Link>
        <ChevronRight size={14} />
        <span className="text-neutral-300">{lang === 'ru' ? 'Профиль' : 'Profile'}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">
          {lang === 'ru' ? 'Профиль' : 'Profile'}
        </h1>
        <p className="text-neutral-500 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Следите за прогрессом, анализируйте навыки и управляйте персональными настройками обучения.'
            : 'Track progress, analyze your skills, and manage personal learning settings.'}
        </p>
      </div>

      <div className="space-y-5">
        <section id="skills-matrix">
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-neutral-200 mb-2">
              {lang === 'ru' ? 'Матрица навыков' : 'Skills Matrix'}
            </h2>
            <p className="text-sm text-neutral-500">
              {lang === 'ru'
                ? 'Матрица теперь доступна прямо в профиле и обновляется на основе завершённых комнат.'
                : 'The matrix is now available directly in your profile and updates from completed rooms.'}
            </p>
          </div>
          <SkillsMatrix />
        </section>

        <section className="bg-input border border-border-subtle rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-200 mb-2 flex items-center gap-2">
            <Globe2 size={18} className="text-emerald-400" />
            {lang === 'ru' ? 'Язык' : 'Language'}
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            {lang === 'ru'
              ? 'Выберите язык по умолчанию для автоматического редиректа с нелокализованных ссылок.'
              : 'Choose your default language for automatic redirects from non-localized links.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-neutral-200"
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
            <button
              type="button"
              onClick={onSaveLanguage}
              disabled={isSavingLanguage}
              className="px-4 py-2 rounded-md text-sm font-semibold bg-emerald-300 text-emerald-950 hover:bg-emerald-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {isSavingLanguage
                ? (lang === 'ru' ? 'Сохранение...' : 'Saving...')
                : (lang === 'ru' ? 'Сохранить язык' : 'Save language')}
            </button>
          </div>
        </section>

        <section className="bg-input border border-border-subtle rounded-xl p-6">
          <h2 className="text-lg font-semibold text-neutral-200 mb-2 flex items-center gap-2">
            <RotateCcw size={18} className="text-amber-400" />
            {lang === 'ru' ? 'Сброс прогресса комнаты' : 'Reset Room Progress'}
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            {lang === 'ru'
              ? 'Удаляет завершенные задания в выбранной комнате.'
              : 'Removes completed tasks in the selected room.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-neutral-200 sm:min-w-[260px]"
            >
              {roomOptions.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.title}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={onResetRoomProgress}
              disabled={isResetting || !selectedRoomId}
              className="px-4 py-2 rounded-md text-sm font-semibold bg-amber-300 text-amber-950 hover:bg-amber-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {isResetting
                ? (lang === 'ru' ? 'Сброс...' : 'Resetting...')
                : (lang === 'ru' ? 'Сбросить прогресс' : 'Reset progress')}
            </button>
          </div>

          {!isAuthenticated && (
            <p className="text-xs text-neutral-500 mt-3">
              {lang === 'ru'
                ? 'Вы не авторизованы: будет сброшен только локальный прогресс в этом браузере.'
                : 'You are not signed in: only local browser progress will be reset.'}
            </p>
          )}
        </section>
      </div>

      {status && (
        <div
          className={`mt-5 text-sm rounded-md px-4 py-3 border ${
            status.kind === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300'
              : 'bg-red-500/10 border-red-500/25 text-red-300'
          }`}
        >
          {status.text}
        </div>
      )}
    </div>
  );
}
