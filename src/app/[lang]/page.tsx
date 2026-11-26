import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from "@/dictionaries/get-dictionary";
import DashboardContinue from '@/components/DashboardContinue';
import WelcomeLine from '@/components/WelcomeLine';
import { toLang } from '@/types/lang';

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const lang = toLang((await props.params).lang);
  const dict = await getDictionary(lang);
  const d = dict.dashboard;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome — compact */}
      <WelcomeLine welcomeText={d.welcome} />

      <DashboardContinue
        lang={lang}
        labels={{
          currentPath: d.currentPath,
          startHere: d.startHere,
          next: d.next,
          pathProgress: d.pathProgress,
          continue: d.continue,
          start: d.start,
          pathDone: d.pathDone,
          pickNextPath: d.pickNextPath,
          upcoming: d.upcoming,
          viewAll: d.viewAll,
        }}
      />

      {/* All paths — compact */}
      <Link
        href={`/${lang}/paths`}
        className="flex items-center justify-between bg-input border border-border-subtle rounded-lg px-4 py-2.5 hover:border-accent-500/35 transition-colors group"
      >
        <div>
          <h3 className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors">
            {d.pathTitle}
          </h3>
          <p className="text-xs text-neutral-500">{d.pathDesc}</p>
        </div>
        <ArrowRight size={14} className="text-neutral-700 group-hover:text-neutral-400 transition-colors shrink-0" />
      </Link>
    </div>
  );
}
