// Programmatic room cover: category gradient + room icon.
// Replaces per-room image assets on the room page (same visual language
// as the catalog card covers).
import { createElement } from 'react';
import { getCoverTone, getRoomIcon } from './roomVisuals';

interface RoomCoverProps {
  /** English category name — drives the gradient tone (see getCoverTone) */
  categoryEn: string;
  /** Icon name from room metadata (ICON_MAP key) */
  icon?: string;
  /** Localized category label shown as a chip */
  categoryLabel?: string;
}

export default function RoomCover({ categoryEn, icon, categoryLabel }: RoomCoverProps) {
  const tone = getCoverTone(categoryEn);

  return (
    <div className={`relative h-28 md:h-32 overflow-hidden rounded-xl border border-border-card bg-gradient-to-br ${tone.visualClassName}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 px-5 pb-4 flex items-end justify-between gap-4">
        <div className={`rounded-[1.15rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm ${tone.iconColorClass}`}>
          {createElement(getRoomIcon(icon), { size: 26, strokeWidth: 1.9 })}
        </div>
        {categoryLabel && (
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-100 backdrop-blur-sm">
            {categoryLabel}
          </div>
        )}
      </div>
    </div>
  );
}
