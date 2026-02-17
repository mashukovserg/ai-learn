import Link from 'next/link';
import { GraduationCap, Brain, ArrowRight, Lock } from 'lucide-react';

export default async function PathsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  const paths = [
    {
      id: 'beginner',
      title: lang === 'ru' ? 'Основы AI' : 'AI Foundations',
      description: lang === 'ru'
        ? 'Идеальная точка входа. Изучите историю, терминологию и основные концепции LLM.'
        : 'The perfect starting point. Learn the history, the terminology, and the core concepts of LLMs.',
      icon: GraduationCap,
      rooms: 3,
      difficulty: lang === 'ru' ? 'Новичок' : 'Beginner',
      unlocked: true,
    },
    {
      id: 'intermediate',
      title: lang === 'ru' ? 'Глубокое погружение в ML' : 'ML Deep Dive',
      description: lang === 'ru'
        ? 'Выйдите за рамки чат-бота. Изучите обучение с учителем, классификацию и архитектуры нейросетей.'
        : 'Go beyond the chat box. Explore supervised learning, classification, and neural network architectures.',
      icon: Brain,
      rooms: 5,
      difficulty: lang === 'ru' ? 'Средний' : 'Intermediate',
      unlocked: false,
    },
  ];

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
        {paths.map((path) => (
          <div
            key={path.id}
            className={`group bg-[#171717] border rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 transition-colors ${path.unlocked ? 'border-[#282828] hover:border-emerald-500/35' : 'border-[#282828] opacity-50 cursor-not-allowed'}`}
          >
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
              path.unlocked ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25' : 'bg-white/5 text-neutral-400'
            }`}>
              <path.icon size={28} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5">
                <h2 className="text-lg font-semibold text-neutral-200">{path.title}</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
                  {path.difficulty}
                </span>
                {!path.unlocked && <Lock size={13} className="text-neutral-600" />}
              </div>
              <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">{path.description}</p>
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
        ))}
      </div>
    </div>
  );
}
