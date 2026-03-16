import { LucideIcon, Book, Cpu, BarChart3, Settings, Database } from 'lucide-react';
import { ROOM_SKILL_MAPPINGS } from './skillMappings';
import { ROOM_TASKS, ROOMS_METADATA } from './rooms';

export type RoleId = 'foundational' | 'ml-engineer' | 'data-scientist' | 'ai-pm' | 'mlops';

export interface SkillAxis {
  name: string;
  slug: string;
}

export interface Role {
  id: RoleId;
  name: { en: string; ru: string };
  icon: LucideIcon;
  color: string;
  accentColor: string;
  skills: SkillAxis[];
}

export const ROLES: Role[] = [
  {
    id: 'foundational',
    name: { en: 'Foundational', ru: 'Основы' },
    icon: Book,
    color: 'emerald',
    accentColor: '#10b981',
    skills: [
      { name: 'Python Programming', slug: 'python' },
      { name: 'Math & Statistics', slug: 'math' },
      { name: 'Data Wrangling', slug: 'data-wrangling' },
      { name: 'ML Fundamentals', slug: 'ml-basics' },
      { name: 'Deep Learning Basics', slug: 'dl-basics' },
      { name: 'AI Ethics', slug: 'ethics' },
    ],
  },
  {
    id: 'ml-engineer',
    name: { en: 'ML Engineer', ru: 'ML-инженер' },
    icon: Cpu,
    color: 'blue',
    accentColor: '#3b82f6',
    skills: [
      { name: 'Model Development', slug: 'model-dev' },
      { name: 'Feature Engineering', slug: 'feature-eng' },
      { name: 'Model Deployment', slug: 'deployment' },
      { name: 'ML System Design', slug: 'system-design' },
      { name: 'Experiment Tracking', slug: 'tracking' },
      { name: 'Performance Optimization', slug: 'optimization' },
    ],
  },
  {
    id: 'data-scientist',
    name: { en: 'Data Scientist', ru: 'Data Scientist' },
    icon: BarChart3,
    color: 'red',
    accentColor: '#ef4444',
    skills: [
      { name: 'Statistical Analysis', slug: 'stats' },
      { name: 'Data Visualization', slug: 'viz' },
      { name: 'NLP', slug: 'nlp' },
      { name: 'Computer Vision', slug: 'cv' },
      { name: 'Time Series Analysis', slug: 'time-series' },
      { name: 'Research Methodology', slug: 'research' },
    ],
  },
  {
    id: 'ai-pm',
    name: { en: 'AI Product Manager', ru: 'AI Product Manager' },
    icon: Settings,
    color: 'purple',
    accentColor: '#a855f7',
    skills: [
      { name: 'AI Capabilities Assessment', slug: 'assessment' },
      { name: 'Data Strategy', slug: 'strategy' },
      { name: 'Product Metrics', slug: 'metrics' },
      { name: 'Stakeholder Communication', slug: 'communication' },
      { name: 'Risk & Ethics Governance', slug: 'governance' },
      { name: 'Market Analysis', slug: 'market' },
    ],
  },
  {
    id: 'mlops',
    name: { en: 'MLOps Engineer', ru: 'MLOps-инженер' },
    icon: Database,
    color: 'orange',
    accentColor: '#f97316',
    skills: [
      { name: 'CI/CD for ML', slug: 'cicd' },
      { name: 'Model Monitoring', slug: 'monitoring' },
      { name: 'Data Pipelines', slug: 'pipelines' },
      { name: 'Infrastructure & Cloud', slug: 'cloud' },
      { name: 'Containerization', slug: 'docker' },
      { name: 'Versioning & Reproducibility', slug: 'versioning' },
    ],
  },
];

// ---------- Pre-computed role styles (avoids dynamic Tailwind classes) ----------

export interface RoleStyle {
  text: string;
  bg10: string;
  border30: string;
  solid: string;
  shadow: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function makeStyles(hex: string): RoleStyle {
  const [r, g, b] = hexToRgb(hex);
  return {
    text: hex,
    bg10: `rgba(${r},${g},${b},0.1)`,
    border30: `rgba(${r},${g},${b},0.3)`,
    solid: hex,
    shadow: `0 0 15px rgba(${r},${g},${b},0.1)`,
  };
}

export const ROLE_STYLES: Record<RoleId, RoleStyle> = Object.fromEntries(
  ROLES.map(r => [r.id, makeStyles(r.accentColor)])
) as Record<RoleId, RoleStyle>;

// ---------- Progress-based skill calculation ----------

function getRoomCompletionFraction(roomId: string): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(`progress:${roomId}`);
    if (!raw) return 0;
    const ids: number[] = JSON.parse(raw);
    const tasks = ROOM_TASKS[roomId];
    if (!tasks || tasks.length === 0) return 0;
    return Math.min(1, ids.length / tasks.length);
  } catch {
    return 0;
  }
}

/** Calculate real skill scores for a role based on localStorage progress. Returns 0-100 per skill slug. */
export function calculateSkillScores(roleId: RoleId): Record<string, number> {
  const role = ROLES.find(r => r.id === roleId);
  if (!role) return {};

  const scores: Record<string, number> = {};

  for (const skill of role.skills) {
    let weightedSum = 0;
    let totalWeight = 0;

    for (const [roomId, mappings] of Object.entries(ROOM_SKILL_MAPPINGS)) {
      const mapping = mappings.find(m => m.skillSlug === skill.slug);
      if (!mapping) continue;
      const completion = getRoomCompletionFraction(roomId);
      weightedSum += completion * mapping.weight;
      totalWeight += mapping.weight;
    }

    scores[skill.slug] = totalWeight > 0
      ? Math.round((weightedSum / totalWeight) * 100)
      : 0;
  }

  return scores;
}

/** Average of all skill scores for a role, 0-100. */
export function calculateTotalScore(roleId: RoleId): number {
  const scores = calculateSkillScores(roleId);
  const values = Object.values(scores);
  if (values.length === 0) return 0;
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export interface SkillRecommendation {
  roomId: string;
  title: { en: string; ru: string };
  weight: number;
  completionPercent: number;
  status: 'not-started' | 'in-progress' | 'completed';
}

/** Returns rooms relevant to a skill with completion status. */
export function getSkillRecommendations(skillSlug: string): SkillRecommendation[] {
  const recommendations: SkillRecommendation[] = [];

  for (const [roomId, mappings] of Object.entries(ROOM_SKILL_MAPPINGS)) {
    const mapping = mappings.find(m => m.skillSlug === skillSlug);
    if (!mapping) continue;

    const meta = ROOMS_METADATA.find(r => r.id === roomId);
    if (!meta) continue;

    const fraction = getRoomCompletionFraction(roomId);
    const completionPercent = Math.round(fraction * 100);

    let status: SkillRecommendation['status'] = 'not-started';
    if (completionPercent >= 100) status = 'completed';
    else if (completionPercent > 0) status = 'in-progress';

    recommendations.push({
      roomId,
      title: meta.title,
      weight: mapping.weight,
      completionPercent,
      status,
    });
  }

  // Sort by weight descending (most impactful rooms first)
  return recommendations.sort((a, b) => b.weight - a.weight);
}

/** Check whether any rooms map to skills for the given role. */
export function roleHasContent(roleId: RoleId): boolean {
  const role = ROLES.find(r => r.id === roleId);
  if (!role) return false;
  const roleSlugs = new Set(role.skills.map(s => s.slug));
  return Object.values(ROOM_SKILL_MAPPINGS).some(mappings =>
    mappings.some(m => roleSlugs.has(m.skillSlug))
  );
}
