import Link from 'next/link';
import { ArrowRight, Users, Clock, Bot, Brain, Waves } from 'lucide-react';
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'ru');

  const rooms = [
    {
      id: "llm-landscape",
      title: lang === 'ru' ? "Ландшафт LLM" : "The LLM Landscape",
      description: lang === 'ru'
        ? "Экосистема 2025: OpenAI, Anthropic, DeepSeek и рейтинг ELO."
        : "The 2025 ecosystem: OpenAI, Anthropic, DeepSeek and ELO rankings.",
      difficulty: lang === 'ru' ? "Новичок" : "Beginner",
      users: 1240,
      time: dict.room.time,
      category: lang === 'ru' ? "Основы" : "Foundations",
      icon: "landscape",
    },
    {
      id: "llm-mechanics",
      title: lang === 'ru' ? "Как мыслят LLM" : "How LLMs Think",
      description: lang === 'ru'
        ? "Токены, предсказание следующего токена, контекстные окна и температура."
        : "Tokens, next-token prediction, context windows, and temperature.",
      difficulty: lang === 'ru' ? "Новичок" : "Beginner",
      users: 980,
      time: lang === 'ru' ? "45 мин" : "45m",
      category: lang === 'ru' ? "Основы" : "Foundations",
      icon: "thinking",
    },
    {
      id: "audio-tokens",
      title: lang === 'ru' ? "Аудио-токены" : "Audio Tokens",
      description: lang === 'ru'
        ? "Как модели 'слышат': спектрограммы и аудио-токены."
        : "How models 'hear': spectrograms and audio tokens.",
      difficulty: lang === 'ru' ? "Средний" : "Intermediate",
      users: 850,
      time: "2h",
      category: lang === 'ru' ? "Архитектура" : "Architecture",
      icon: "audio",
    },
  ] as const;

  const completedRooms = 1;
  const totalRooms = 6;
  const progressPercent = Math.round((completedRooms / totalRooms) * 100);
  const roomIcons = {
    landscape: Bot,
    thinking: Brain,
    audio: Waves,
  } as const;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome — compact */}
      <p className="text-xs text-neutral-500 mb-5">
        {dict.dashboard.welcome}, Satoshi
      </p>

      {/* Continue learning — primary CTA */}
      <section className="bg-gradient-to-br from-[#171717] via-[#151d18] to-[#171717] border border-emerald-500/25 rounded-xl p-5 mb-9">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-emerald-300/80 mb-1.5">
              {lang === 'ru' ? 'Текущий путь' : 'Current path'}
            </p>
            <h2 className="text-base font-semibold text-neutral-200 mb-1">
              {lang === 'ru' ? 'Основы AI' : 'AI Foundations'}
            </h2>
            <p className="text-sm text-neutral-500">
              {lang === 'ru' ? 'Следующее: Как мыслят LLM' : 'Next: How LLMs Think'}
            </p>
            <div className="mt-3 max-w-md">
              <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
                <span>{lang === 'ru' ? 'Прогресс пути' : 'Path progress'}</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="h-1.5 bg-[#202a23] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-lime-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 shrink-0">
              {completedRooms}/{totalRooms}
            </span>
            <Link
              href={`/${lang}/rooms/llm-mechanics`}
              className="px-5 py-2.5 bg-emerald-300 text-emerald-950 text-sm font-semibold rounded-md hover:bg-emerald-200 transition-colors shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_10px_24px_-12px_rgba(52,211,153,0.45)] flex items-center gap-1.5 shrink-0"
            >
              {dict.dashboard.continue} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended rooms */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-neutral-400">
            {dict.dashboard.featured}
          </h3>
          <Link href={`/${lang}/rooms`} className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
            {dict.dashboard.viewAll}
          </Link>
        </div>

        <div className="space-y-2">
          {rooms.map((room) => {
            const Icon = roomIcons[room.icon];
            return (
              <Link key={room.id} href={`/${lang}/rooms/${room.id}`} className="flex items-center gap-3 bg-[#171717] border border-[#282828] rounded-lg px-3.5 py-3 hover:border-emerald-500/35 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-16px_rgba(16,185,129,0.55)] transition-all group">
                <div className="w-9 h-9 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors truncate">
                      {room.title}
                    </h4>
                    <span className="text-[10px] text-neutral-600 shrink-0">
                      {room.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 truncate">{room.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center gap-1 text-[11px] text-neutral-600">
                    <Users size={12} /> {room.users}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-600">
                    <Clock size={12} /> {room.time}
                  </span>
                  <ArrowRight size={14} className="text-neutral-700 group-hover:text-neutral-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Curriculum link — compact */}
      <Link
        href={`/${lang}/paths`}
        className="flex items-center justify-between bg-[#171717] border border-[#282828] rounded-lg px-4 py-2.5 hover:border-emerald-500/35 transition-colors group"
      >
        <div>
          <h3 className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors">
            {dict.dashboard.pathTitle}
          </h3>
          <p className="text-xs text-neutral-500">{dict.dashboard.pathDesc}</p>
        </div>
        <ArrowRight size={14} className="text-neutral-700 group-hover:text-neutral-400 transition-colors shrink-0" />
      </Link>
    </div>
  );
}
