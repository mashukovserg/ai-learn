import { Terminal, Users, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface RoomCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Hard';
  users: number;
  time: string;
  category: string;
}

export default function RoomCard({ id, title, description, difficulty, users, time, category }: RoomCardProps) {
  const difficultyColor = {
    Beginner: 'text-neutral-400 bg-white/5',
    Intermediate: 'text-neutral-400 bg-white/5',
    Hard: 'text-neutral-400 bg-white/5',
  }[difficulty];

  return (
    <div className="bg-[#171717] border border-[#282828] rounded-lg overflow-hidden hover:border-neutral-600 transition-colors group flex flex-col h-full">
      <div className="h-28 bg-[#1a1a1a] relative flex items-center justify-center border-b border-[#282828]">
        <Terminal size={36} className="text-neutral-800 group-hover:text-neutral-600 transition-colors" />
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-medium uppercase text-neutral-500 bg-white/5">
          {category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">{title}</h3>
          <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>

        <p className="text-neutral-500 text-sm line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-[#282828] flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <Users size={13} />
              <span>{users}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <Clock size={13} />
              <span>{time}</span>
            </div>
          </div>

          <Link
            href={`/rooms/${id}`}
            className="p-1.5 rounded-md text-neutral-600 hover:text-neutral-200 hover:bg-white/5 transition-colors"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
