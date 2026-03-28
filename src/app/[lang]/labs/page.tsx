"use client";

import { use } from 'react';
import Link from 'next/link';
import { ChevronRight, FlaskConical } from 'lucide-react';

export default function LabsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = use(props.params);

  return (
    <div className="max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
          {lang === 'ru' ? 'Главная' : 'Home'}
        </Link>
        <ChevronRight size={14} />
        <span className="text-neutral-300">{lang === 'ru' ? 'Лаборатории' : 'Labs'}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">
          {lang === 'ru' ? 'Лаборатории' : 'Labs'}
        </h1>
        <p className="text-neutral-500 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Интерактивные инструменты для экспериментов с AI-моделями.'
            : 'Interactive tools for experimenting with AI models.'}
        </p>
      </div>

      <Link
        href={`/${lang}/labs/prompt-compare`}
        className="block bg-input border border-border-subtle rounded-xl p-6 hover:border-emerald-500/30 transition-colors group"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
            <FlaskConical size={22} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-200 group-hover:text-emerald-300 transition-colors">
              {lang === 'ru' ? 'Сравнение промптов' : 'Prompt Compare'}
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              {lang === 'ru'
                ? 'Отправьте один промпт двум моделям и сравните ответы бок о бок.'
                : 'Send the same prompt to two models and compare responses side by side.'}
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs text-neutral-600">
              <span className="px-2 py-0.5 bg-card rounded border border-border-emphasis">Groq</span>
              <span className="px-2 py-0.5 bg-card rounded border border-border-emphasis">Llama 3.3</span>
              <span className="px-2 py-0.5 bg-card rounded border border-border-emphasis">Llama 4 Scout</span>
              <span className="px-2 py-0.5 bg-card rounded border border-border-emphasis">Qwen 3</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
