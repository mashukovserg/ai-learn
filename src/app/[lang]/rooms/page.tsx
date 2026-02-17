import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Users, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import RoomStatusBadge from '@/components/RoomStatusBadge';

export default async function RoomsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  const rooms = [
    {
      id: 'llm-landscape',
      title: lang === 'ru' ? 'Ландшафт LLM' : 'The LLM Landscape',
      description: lang === 'ru'
        ? 'Изучите экосистему 2025 года: OpenAI, Anthropic, DeepSeek и битву за лидерство в рейтинге ELO.'
        : 'Explore the ecosystem of 2025: OpenAI, Anthropic, DeepSeek and the battle for the top ELO score.',
      difficulty: 'Beginner' as const,
      users: 1240,
      time: lang === 'ru' ? '1 ч' : '1h',
      category: lang === 'ru' ? 'Основы' : 'Foundations',
    },
    {
      id: 'llm-mechanics',
      title: lang === 'ru' ? 'Как мыслят LLM' : 'How LLMs Think',
      description: lang === 'ru'
        ? 'Погрузитесь в токены, предсказание следующего токена, контекстные окна и температуру.'
        : 'Dive into tokens, next-token prediction, context windows, and temperature.',
      difficulty: 'Beginner' as const,
      users: 980,
      time: lang === 'ru' ? '45 мин' : '45m',
      category: lang === 'ru' ? 'Основы' : 'Foundations',
    },
    {
      id: 'ai-history',
      title: lang === 'ru' ? 'История AI' : 'History of AI',
      description: lang === 'ru'
        ? 'Как AI прошел путь от раздела Computer Science к глобальному феномену с реальными последствиями.'
        : 'How AI moved from a Computer Science subfield to a global, high-consequence phenomenon.',
      difficulty: 'Beginner' as const,
      users: 540,
      time: lang === 'ru' ? '1 ч' : '1h',
      category: lang === 'ru' ? 'Основы' : 'Foundations',
    },
    {
      id: 'prompting-101',
      title: lang === 'ru' ? 'Основы промптинга' : 'Prompting 101',
      description: lang === 'ru'
        ? 'Системные промпты, few-shot/zero-shot техники и борьба с галлюцинациями.'
        : 'System prompts, few-shot/zero-shot techniques, and hallucination mitigation.',
      difficulty: 'Beginner' as const,
      users: 0,
      time: lang === 'ru' ? '1 ч' : '1h',
      category: lang === 'ru' ? 'Основы' : 'Foundations',
    },
    {
      id: 'native-multimodality',
      title: lang === 'ru' ? 'Нативная мультимодальность' : 'Native Multimodality',
      description: lang === 'ru'
        ? 'Как модели "видят" и "слышат": image patches, спектрограммы и аудио-токены.'
        : 'How models "see" and "hear": image patches, spectrograms, and audio tokens.',
      difficulty: 'Intermediate' as const,
      users: 0,
      time: lang === 'ru' ? '1.5 ч' : '1.5h',
      category: lang === 'ru' ? 'Архитектура' : 'Architecture',
    },
    {
      id: 'prompt-evals',
      title: lang === 'ru' ? 'Prompt Evaluation & Evals' : 'Prompt Evaluation & Evals',
      description: lang === 'ru'
        ? 'Как строить eval-наборы, выбирать метрики и ставить release gate для LLM-фичей.'
        : 'How to build eval sets, choose metrics, and define release gates for LLM features.',
      difficulty: 'Beginner' as const,
      users: 460,
      time: lang === 'ru' ? '55 мин' : '55m',
      category: lang === 'ru' ? 'Практика' : 'Practice',
    },
    {
      id: 'ai-image-creation',
      title: lang === 'ru' ? 'AI для создания изображений' : 'AI for Image Creation',
      description: lang === 'ru'
        ? 'Промпты, композиция, negative prompt, seed и практики коммерческого использования.'
        : 'Prompts, composition, negative prompts, seed control, and commercial-use practices.',
      difficulty: 'Beginner' as const,
      users: 460,
      time: lang === 'ru' ? '50 мин' : '50m',
      category: lang === 'ru' ? 'Практика' : 'Practice',
    },
  ];

  const lockedRooms = new Set(['prompting-101', 'native-multimodality']);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
          <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
            {lang === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <ChevronRight size={13} />
          <span className="text-neutral-300">{lang === 'ru' ? 'Комнаты' : 'Rooms'}</span>
        </nav>

        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">{lang === 'ru' ? 'Все комнаты' : 'All Rooms'}</h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Каждая комната — это интерактивный урок с теорией и практическими заданиями. Проходите комнаты по порядку или выбирайте интересную тему.'
            : 'Each room is an interactive lesson with theory and hands-on tasks. Follow them in order or pick a topic that interests you.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms.map((room) => {
          const isLocked = lockedRooms.has(room.id);

          return (
            <div
              key={room.id}
              className={`bg-[#171717] border border-[#282828] rounded-lg overflow-hidden flex flex-col transition-colors ${
                isLocked ? 'opacity-40' : 'hover:border-neutral-600 group'
              }`}
            >
              <div className="h-24 bg-[#1a1a1a] relative flex items-center justify-center border-b border-[#282828]">
                {room.id === 'llm-landscape' ? (
                  <>
                    <Image
                      src="/images/llm-landscape-network.png"
                      alt={lang === 'ru' ? 'Миниатюра комнаты Ландшафт LLM' : 'LLM Landscape room thumbnail'}
                      fill
                      className="object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
                  </>
                ) : (
                  <Terminal size={32} className="text-neutral-800 group-hover:text-neutral-600 transition-colors" />
                )}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
                  {room.category}
                </div>
                <div className="absolute top-3 right-3">
                  {isLocked
                    ? <span className="px-2 py-0.5 rounded text-[10px] font-medium text-neutral-500 bg-white/5">{lang === 'ru' ? 'Скоро' : 'Coming Soon'}</span>
                    : <RoomStatusBadge roomId={room.id} lang={lang} />
                  }
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {room.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
                    {room.difficulty}
                  </span>
                </div>

                <p className="text-neutral-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {room.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#282828] flex items-center justify-between">
                  <div className="flex gap-4">
                    {room.users > 0 && (
                      <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                        <Users size={13} />
                        <span>{room.users}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                      <Clock size={13} />
                      <span>{room.time}</span>
                    </div>
                  </div>

                  {!isLocked && (
                    <Link
                      href={`/${lang}/rooms/${room.id}`}
                      className="p-1.5 rounded-md text-neutral-600 hover:text-neutral-200 hover:bg-white/5 transition-colors"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
