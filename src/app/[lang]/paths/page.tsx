import Link from 'next/link';
import { GraduationCap, Brain, BookOpen, ArrowRight, Lock, Cpu } from 'lucide-react';
import { PATHS_METADATA } from '@/data/rooms';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  Brain,
  BookOpen,
  Cpu,
};

export default async function PathsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const l = lang as 'en' | 'ru';

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">{lang === 'ru' ? 'Пути обучения' : 'Learning Paths'}</h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Структурированные треки, разработанные для того, чтобы превратить вас из новичка в эксперта по ИИ.'
            : 'Structured tracks designed to take you from a complete beginner to an AI expert.'}
        </p>
      </div>

      <div className="grid gap-4">
        {PATHS_METADATA.map((path) => {
          const Icon = ICON_MAP[path.icon] || GraduationCap;

          return (
            <div
              key={path.id}
              className={`group bg-input border rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 transition-colors ${path.unlocked ? 'border-border-subtle hover:border-emerald-500/35' : 'border-border-subtle opacity-50 cursor-not-allowed'}`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                path.unlocked ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25' : 'bg-white/5 text-neutral-400'
              }`}>
                <Icon size={28} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h2 className="text-lg font-semibold text-neutral-200">{path.title[l]}</h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
                    {path.difficulty[l]}
                  </span>
                  {!path.unlocked && <Lock size={13} className="text-neutral-600" />}
                </div>
                <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">{path.description[l]}</p>
              </div>

              <div className="flex flex-col items-end gap-4">
                {path.unlocked ? (
                  <Link
                    href={`/${lang}/paths/${path.id}`}
                    className="px-5 py-2 bg-emerald-300 text-emerald-950 text-sm font-semibold rounded-md flex items-center gap-2 hover:bg-emerald-200 transition-colors shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_10px_24px_-12px_rgba(52,211,153,0.45)]"
                  >
                    {lang === 'ru' ? 'Начать путь' : 'Start Path'} <ArrowRight size={16} />
                  </Link>
                ) : (
                  <button className="px-5 py-2 bg-white/5 text-neutral-600 text-sm font-medium rounded-md flex items-center gap-2 cursor-not-allowed">
                    {lang === 'ru' ? 'Заблокировано' : 'Locked'} <Lock size={16} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
