// Shared room visuals: icon mapping and category cover tones.
// Used by the rooms catalog and the room page header so both render
// the same programmatic covers (no image assets needed).
import React from 'react';
import {
  Bot,
  Brain,
  ClipboardCheck,
  Cpu,
  Database,
  Eye,
  FileCode,
  Globe,
  Image as ImageIcon,
  Library,
  MessageSquare,
  Microscope,
  Palette,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Waves,
  Wrench,
} from 'lucide-react';

export type RoomIconComponent = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

export const ICON_MAP: Record<string, RoomIconComponent> = {
  Bot,
  Brain,
  Terminal,
  Waves,
  Rocket,
  Sparkles,
  MessageSquare,
  Eye,
  ClipboardCheck,
  Image: ImageIcon,
  TrendingUp,
  Shield,
  Cpu,
  FileCode,
  Users,
  ShieldCheck,
  Palette,
  Search,
  Database,
  ShieldAlert,
  Scale,
  Globe,
  Wrench,
  RefreshCw,
  Microscope,
  Library,
};

export function getRoomIcon(iconName?: string): RoomIconComponent {
  return (iconName && ICON_MAP[iconName]) || Terminal;
}

export interface CoverTone {
  visualClassName: string;
  iconColorClass: string;
}

// Category → cover gradient. Only hues that are remapped for the light (saas)
// theme in globals.css may be used here (emerald, cyan, amber, violet, rose) —
// unmapped hues wash out on light backgrounds.
export function getCoverTone(category: string): CoverTone {
  if (category === 'Agent Coding') {
    return {
      visualClassName: 'from-cyan-500/25 via-sky-500/10 to-card',
      iconColorClass: 'text-cyan-200',
    };
  }
  if (category === 'Ideas') {
    return {
      visualClassName: 'from-violet-500/25 via-purple-500/10 to-card',
      iconColorClass: 'text-violet-200',
    };
  }
  if (category === 'Practice') {
    return {
      visualClassName: 'from-amber-500/25 via-orange-500/10 to-card',
      iconColorClass: 'text-amber-200',
    };
  }
  if (category === 'Architecture') {
    return {
      visualClassName: 'from-accent-500/25 via-lime-500/10 to-card',
      iconColorClass: 'text-accent-200',
    };
  }
  return {
    visualClassName: 'from-rose-500/25 via-rose-400/10 to-card',
    iconColorClass: 'text-rose-300',
  };
}
