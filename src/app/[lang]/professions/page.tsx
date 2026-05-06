"use client";

import React, { use, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import AIProfessionCard from '@/components/AIProfessionCard';
import { PROFESSIONS, ProfessionDifficulty, ProfessionStatus } from '@/data/professions';

type DifficultyFilter = 'all' | ProfessionDifficulty;
type StatusFilter = 'all' | ProfessionStatus;

export default function ProfessionsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(props.params);
  const [query, setQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const filteredProfessions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return PROFESSIONS.filter((profession) => {
      const title = profession.title[lang as 'en' | 'ru'].toLowerCase();
      const description = profession.description[lang as 'en' | 'ru'].toLowerCase();
      const highlights = profession.highlights.map((item) => item[lang as 'en' | 'ru'].toLowerCase());

      const matchesQuery = normalizedQuery.length === 0
        || title.includes(normalizedQuery)
        || description.includes(normalizedQuery)
        || highlights.some((item) => item.includes(normalizedQuery));

      const matchesDifficulty = difficultyFilter === 'all' || profession.difficulty === difficultyFilter;
      const matchesStatus = statusFilter === 'all' || profession.status === statusFilter;

      return matchesQuery && matchesDifficulty && matchesStatus;
    });
  }, [difficultyFilter, lang, query, statusFilter]);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-10">
        <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-600">
          <Link href={`/${lang}`} className="transition-colors hover:text-neutral-300">
            {lang === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span className="text-neutral-300">{lang === 'ru' ? 'Профессии AI' : 'AI Professions'}</span>
        </nav>

        <h1 className="mb-3 text-3xl font-semibold text-neutral-100 md:text-4xl">
          {lang === 'ru' ? 'Профессии в AI' : 'AI Professions'}
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
          {lang === 'ru'
            ? 'Изучите ключевые роли в AI и найдите трек, который ближе вашему способу мышления: инженерия, research, безопасность, продукт или leadership.'
            : 'Explore the major roles in AI and find the track that fits how you think best: engineering, research, security, product, or leadership.'}
        </p>
      </div>

      <section className="mb-8 rounded-[1.75rem] border border-border-card bg-card-dark p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px_220px]">
          <label className="flex items-center gap-3 rounded-xl border border-border-card bg-base px-4 py-3">
            <Search size={18} className="text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={lang === 'ru' ? 'Поиск профессий...' : 'Search professions...'}
              className="w-full bg-transparent text-sm text-neutral-200 outline-none placeholder:text-neutral-600"
            />
          </label>

          <select
            value={difficultyFilter}
            onChange={(event) => setDifficultyFilter(event.target.value as DifficultyFilter)}
            className="rounded-xl border border-border-card bg-base px-4 py-3 text-sm text-neutral-300 outline-none"
          >
            <option value="all">{lang === 'ru' ? 'Любая сложность' : 'Any difficulty'}</option>
            <option value="Beginner">{lang === 'ru' ? 'База' : 'Easy'}</option>
            <option value="Intermediate">{lang === 'ru' ? 'Средний' : 'Intermediate'}</option>
            <option value="Advanced">{lang === 'ru' ? 'Продвинутый' : 'Advanced'}</option>
          </select>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
            className="rounded-xl border border-border-card bg-base px-4 py-3 text-sm text-neutral-300 outline-none"
          >
            <option value="all">{lang === 'ru' ? 'Любой тип роли' : 'Any role type'}</option>
            <option value="Core">{lang === 'ru' ? 'Базовая роль' : 'Core Role'}</option>
            <option value="Specialized">{lang === 'ru' ? 'Специализация' : 'Specialized'}</option>
            <option value="Leadership">{lang === 'ru' ? 'Лидерство' : 'Leadership'}</option>
          </select>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProfessions.map((profession) => (
          <AIProfessionCard key={profession.id} profession={profession} />
        ))}
      </section>

      {filteredProfessions.length === 0 && (
        <div className="mt-8 rounded-2xl border border-border-card bg-card-dark p-8 text-center">
          <p className="text-base text-neutral-300">
            {lang === 'ru'
              ? 'По текущим фильтрам ничего не найдено. Попробуйте убрать часть ограничений.'
              : 'No professions matched the current filters. Try relaxing the search or filters.'}
          </p>
        </div>
      )}
    </div>
  );
}
