import Link from 'next/link';
import { ChevronLeft, Play } from 'lucide-react';
import { getRoomsByPath, PATHS_METADATA } from '@/data/rooms';

export default async function AgentCodingPathPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const l = lang as 'en' | 'ru';
  const rooms = getRoomsByPath('agent-coding');
  const pathMeta = PATHS_METADATA.find((p) => p.id === 'agent-coding')!;

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
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">{pathMeta.title[l]}</h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">{pathMeta.description[l]}</p>
      </div>

      <div className="space-y-3 relative">
        <div className="absolute left-[27px] top-8 bottom-8 w-px bg-muted" />

        {rooms.map((room) => (
          <div key={room.id} className="flex gap-6 items-start relative">
            <div className="mt-1 w-14 h-14 rounded-lg flex items-center justify-center shrink-0 z-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              <Play size={24} fill="currentColor" />
            </div>

            <div className="flex-1 bg-input border rounded-lg p-5 transition-colors border-emerald-500/35">
              <div className="mb-1.5">
                <h3 className="text-base font-semibold text-neutral-200 mb-1">{room.title[l]}</h3>
                <p className="text-neutral-500 text-sm">{room.description[l]}</p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/${lang}/rooms/${room.id}`}
                  className="px-4 py-1.5 rounded-md text-sm font-medium transition-colors bg-emerald-300 text-emerald-950 hover:bg-emerald-200"
                >
                  {lang === 'ru' ? 'Начать' : 'Start'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
