import Link from 'next/link';
import { ArrowRight, Clock, Bot, Brain, Waves, Terminal, TrendingUp, Search, MessageSquare, Eye, ClipboardCheck, Image, Shield, Sparkles } from 'lucide-react';
import { getDictionary } from "@/dictionaries/get-dictionary";
import DashboardProgress from '@/components/DashboardProgress';
import WelcomeLine from '@/components/WelcomeLine';
import { ROOMS_METADATA } from '@/data/rooms';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Bot, Brain, Waves, Terminal, TrendingUp, Search, MessageSquare, Eye, ClipboardCheck, Image, Shield, Sparkles,
};

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'ru');

  // Use the first 3 rooms from our metadata for the dashboard
  const featuredRooms = ROOMS_METADATA.slice(0, 3);
  const totalRooms = ROOMS_METADATA.length;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome — compact */}
      <WelcomeLine welcomeText={dict.dashboard.welcome} />

      {/* Continue learning — primary CTA */}
      <section className="bg-gradient-to-br from-input via-[#151d18] to-input border border-emerald-500/25 rounded-xl p-5 mb-9">
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
            <DashboardProgress totalRooms={totalRooms} />
          </div>

          <div className="flex items-center gap-3">
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
          {featuredRooms.map((room) => {
            const Icon = (room.icon && ICON_MAP[room.icon]) || Bot;
            const title = room.title[lang as 'en' | 'ru'];
            const description = room.description[lang as 'en' | 'ru'];
            const time = room.time[lang as 'en' | 'ru'];

            return (
              <Link key={room.id} href={`/${lang}/rooms/${room.id}`} className="flex items-center gap-3 bg-input border border-border-subtle rounded-lg px-3.5 py-3 hover:border-emerald-500/35 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-16px_rgba(16,185,129,0.55)] transition-all group">
                <div className="w-9 h-9 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors truncate">
                      {title}
                    </h4>
                    <span className="text-[10px] text-neutral-600 shrink-0">
                      {room.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 truncate">{description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center gap-1 text-[11px] text-neutral-600">
                    <Clock size={12} /> {time}
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
        className="flex items-center justify-between bg-input border border-border-subtle rounded-lg px-4 py-2.5 hover:border-emerald-500/35 transition-colors group"
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