import Link from 'next/link';
import { ChevronLeft, CheckCircle2, Circle, Play } from 'lucide-react';

export default async function BeginnerPathPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  const rooms = [
    {
      id: 'llm-landscape',
      title: lang === 'ru' ? 'Ландшафт LLM' : 'The LLM Landscape',
      description: lang === 'ru'
        ? 'Узнайте главных игроков 2025 года и то, как ранжируются модели.'
        : 'Understand the big players of 2025 and how models are ranked.',
      status: 'Completed',
      points: 100,
    },
    {
      id: 'llm-mechanics',
      title: lang === 'ru' ? 'Как мыслят LLM' : 'How LLMs Think',
      description: lang === 'ru'
        ? 'Погрузитесь в предсказание следующего токена и контекстные окна.'
        : 'Dive into next-token prediction, context windows, and tokens.',
      status: 'Active',
      points: 150,
    },
    {
      id: 'ai-history',
      title: lang === 'ru' ? 'История AI' : 'History of AI',
      description: lang === 'ru'
        ? 'Переход от AI как части Computer Science к глобальному consequential-феномену.'
        : 'The shift from AI as part of Computer Science to a global consequential phenomenon.',
      status: 'Active',
      points: 120,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href={`/${lang}/paths`}
        className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors mb-8 text-sm"
      >
        <ChevronLeft size={16} />
        {lang === 'ru' ? 'Назад ко всем путям' : 'Back to All Paths'}
      </Link>

      <div className="mb-12">
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">{lang === 'ru' ? 'Основы AI' : 'AI Foundations'}</h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Этот путь разработан, чтобы дать вам твердое понимание современной эры ИИ.'
            : 'This path is designed to give you a rock-solid understanding of the modern AI era.'}
        </p>
      </div>

      <div className="space-y-3 relative">
        <div className="absolute left-[27px] top-8 bottom-8 w-px bg-[#282828]" />

        {rooms.map((room) => (
          <div key={room.id} className="flex gap-6 items-start relative">
            <div className={`mt-1 w-14 h-14 rounded-lg flex items-center justify-center shrink-0 z-10 ${
              room.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25' :
              room.status === 'Active' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' :
              'bg-[#1a1a1a] border border-[#282828] text-neutral-700'
            }`}>
              {room.status === 'Completed' ? <CheckCircle2 size={24} /> :
               room.status === 'Active' ? <Play size={24} fill="currentColor" /> :
               <Circle size={24} />}
            </div>

            <div className={`flex-1 bg-[#171717] border rounded-lg p-5 transition-colors ${
              room.status === 'Locked' ? 'border-[#282828] opacity-50' :
              room.status === 'Active' ? 'border-emerald-500/35' :
              'border-[#282828] hover:border-emerald-500/25'
            }`}>
              <div className="mb-1.5">
                <h3 className="text-base font-semibold text-neutral-200 mb-1">{room.title}</h3>
                <p className="text-neutral-500 text-sm">{room.description}</p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/${lang}/rooms/${room.id}`}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    room.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 border border-emerald-500/25'
                      : 'bg-emerald-300 text-emerald-950 hover:bg-emerald-200'
                  }`}
                >
                  {room.status === 'Completed' ? (lang === 'ru' ? 'Повторить' : 'Review') : (lang === 'ru' ? 'Начать' : 'Start')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
