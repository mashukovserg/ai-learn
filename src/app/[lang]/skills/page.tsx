import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SkillsMatrix from '@/components/SkillsMatrix';

export default async function SkillsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
        <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
          {lang === 'ru' ? 'Главная' : 'Home'}
        </Link>
        <ChevronRight size={13} />
        <span className="text-neutral-300">{lang === 'ru' ? 'Матрица компетенций' : 'Skills Matrix'}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3 text-white">
          {lang === 'ru' ? 'Матрица AI компетенций' : 'AI Skills Matrix'}
        </h1>
        <p className="text-neutral-500 max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Проанализируйте свои текущие навыки и постройте план развития для целевой роли в индустрии ИИ. Матрица обновляется в реальном времени на основе пройденных модулей.'
            : 'Analyze your current skills and build a development plan for your target role in the AI industry. The matrix updates in real-time based on completed modules.'}
        </p>
      </div>

      <SkillsMatrix lang={lang} />
    </div>
  );
}
