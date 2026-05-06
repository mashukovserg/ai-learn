import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  Briefcase,
  Database,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

export interface LocalizedText {
  en: string;
  ru: string;
}

export type ProfessionDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProfessionStatus = 'Core' | 'Specialized' | 'Leadership';

export interface ProfessionCard {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  difficulty: ProfessionDifficulty;
  status: ProfessionStatus;
  progress: number;
  featured?: boolean;
  icon: LucideIcon;
  iconColorClass: string;
  visualClassName: string;
  href: string;
  relatedLabel: LocalizedText;
  highlights: LocalizedText[];
}

export const PROFESSIONS: ProfessionCard[] = [
  {
    id: 'ai-engineer',
    title: { en: 'AI Engineer', ru: 'AI Engineer' },
    description: {
      en: 'Build AI-powered product features, connect models to real user workflows, and keep quality measurable in production.',
      ru: 'Стройте AI-фичи для продукта, подключайте модели к реальным пользовательским сценариям и держите качество измеримым в продакшне.',
    },
    difficulty: 'Intermediate',
    status: 'Core',
    progress: 18,
    featured: true,
    icon: Sparkles,
    iconColorClass: 'text-fuchsia-200',
    visualClassName: 'from-fuchsia-500/25 via-rose-500/10 to-card',
    href: '/rooms/ai-career-trajectories',
    relatedLabel: { en: 'Career roadmap', ru: 'Карта карьеры' },
    highlights: [
      { en: 'LLMs / RAG', ru: 'LLMs / RAG' },
      { en: 'API integration', ru: 'API integration' },
      { en: 'Quality loops', ru: 'Циклы качества' },
    ],
  },
  {
    id: 'ml-engineer',
    title: { en: 'ML Engineer', ru: 'ML Engineer' },
    description: {
      en: 'Train, adapt, evaluate, and ship machine-learning systems with an emphasis on model performance and deployment realism.',
      ru: 'Обучайте, адаптируйте, оценивайте и выпускайте ML-системы с упором на производительность моделей и реалистичный деплой.',
    },
    difficulty: 'Intermediate',
    status: 'Core',
    progress: 12,
    icon: Brain,
    iconColorClass: 'text-emerald-200',
    visualClassName: 'from-emerald-500/25 via-lime-500/10 to-card',
    href: '/rooms/fine-tuning-101',
    relatedLabel: { en: 'Model adaptation', ru: 'Адаптация моделей' },
    highlights: [
      { en: 'Fine-tuning', ru: 'Fine-tuning' },
      { en: 'Evaluation', ru: 'Evaluation' },
      { en: 'Serving', ru: 'Serving' },
    ],
  },
  {
    id: 'mlops-engineer',
    title: { en: 'MLOps Engineer', ru: 'MLOps Engineer' },
    description: {
      en: 'Own the platform layer: pipelines, monitoring, versioning, model release discipline, and dependable inference infrastructure.',
      ru: 'Владейте платформенным слоем: пайплайны, мониторинг, версионирование, дисциплина релиза моделей и надежная inference-инфраструктура.',
    },
    difficulty: 'Intermediate',
    status: 'Specialized',
    progress: 9,
    icon: Database,
    iconColorClass: 'text-cyan-200',
    visualClassName: 'from-cyan-500/25 via-sky-500/10 to-card',
    href: '/rooms/agentic-testing-loop',
    relatedLabel: { en: 'Operational loops', ru: 'Операционные циклы' },
    highlights: [
      { en: 'Pipelines', ru: 'Pipelines' },
      { en: 'Monitoring', ru: 'Monitoring' },
      { en: 'Versioning', ru: 'Versioning' },
    ],
  },
  {
    id: 'research-scientist',
    title: { en: 'Research Scientist', ru: 'Research Scientist' },
    description: {
      en: 'Investigate new methods, run rigorous experiments, and turn unanswered questions into credible research direction.',
      ru: 'Исследуйте новые методы, проводите строгие эксперименты и превращайте вопросы без готового ответа в убедительное research-направление.',
    },
    difficulty: 'Advanced',
    status: 'Specialized',
    progress: 6,
    icon: Search,
    iconColorClass: 'text-violet-200',
    visualClassName: 'from-violet-500/25 via-indigo-500/10 to-card',
    href: '/rooms/ai-research',
    relatedLabel: { en: 'Research workflows', ru: 'Research workflows' },
    highlights: [
      { en: 'Experiments', ru: 'Эксперименты' },
      { en: 'Benchmarks', ru: 'Benchmarks' },
      { en: 'Papers', ru: 'Papers' },
    ],
  },
  {
    id: 'ai-product-manager',
    title: { en: 'AI Product Manager', ru: 'AI Product Manager' },
    description: {
      en: 'Translate model capability into roadmap decisions, user value, metrics, and realistic release scope.',
      ru: 'Переводите возможности моделей в решения по roadmap, пользовательскую ценность, метрики и реалистичный объем релиза.',
    },
    difficulty: 'Intermediate',
    status: 'Core',
    progress: 14,
    icon: Briefcase,
    iconColorClass: 'text-amber-200',
    visualClassName: 'from-amber-500/25 via-orange-500/10 to-card',
    href: '/rooms/chatgpt-moment',
    relatedLabel: { en: 'Product context', ru: 'Продуктовый контекст' },
    highlights: [
      { en: 'Use cases', ru: 'Use cases' },
      { en: 'Metrics', ru: 'Метрики' },
      { en: 'Roadmap', ru: 'Roadmap' },
    ],
  },
  {
    id: 'ai-security-engineer',
    title: { en: 'AI Security Engineer', ru: 'AI Security Engineer' },
    description: {
      en: 'Protect AI systems from prompt injection, unsafe outputs, data leakage, and weak operational controls.',
      ru: 'Защищайте AI-системы от prompt injection, небезопасных ответов, утечек данных и слабых операционных контролей.',
    },
    difficulty: 'Advanced',
    status: 'Specialized',
    progress: 10,
    icon: ShieldCheck,
    iconColorClass: 'text-rose-200',
    visualClassName: 'from-rose-500/25 via-red-500/10 to-card',
    href: '/rooms/ai-security',
    relatedLabel: { en: 'Security patterns', ru: 'Паттерны безопасности' },
    highlights: [
      { en: 'Guardrails', ru: 'Guardrails' },
      { en: 'Threat models', ru: 'Threat models' },
      { en: 'Policy checks', ru: 'Policy checks' },
    ],
  },
  {
    id: 'data-scientist',
    title: { en: 'Data Scientist', ru: 'Data Scientist' },
    description: {
      en: 'Turn data into insight, build analytical models, and frame evidence that supports better product and business decisions.',
      ru: 'Превращайте данные в инсайты, стройте аналитические модели и формулируйте доказательства для лучших продуктовых и бизнес-решений.',
    },
    difficulty: 'Beginner',
    status: 'Core',
    progress: 7,
    icon: LineChart,
    iconColorClass: 'text-lime-200',
    visualClassName: 'from-lime-500/25 via-emerald-500/10 to-card',
    href: '/rooms/embeddings-101',
    relatedLabel: { en: 'Data and vectors', ru: 'Данные и векторы' },
    highlights: [
      { en: 'Statistics', ru: 'Статистика' },
      { en: 'Experiment reads', ru: 'Чтение экспериментов' },
      { en: 'Decision support', ru: 'Поддержка решений' },
    ],
  },
  {
    id: 'ai-leadership',
    title: { en: 'Head of AI / Director', ru: 'Head of AI / Director' },
    description: {
      en: 'Shape AI strategy, organization design, platform bets, and the operating model for multiple teams.',
      ru: 'Формируйте AI-стратегию, дизайн организации, платформенные ставки и operating model для нескольких команд.',
    },
    difficulty: 'Advanced',
    status: 'Leadership',
    progress: 4,
    icon: Users,
    iconColorClass: 'text-indigo-200',
    visualClassName: 'from-indigo-500/25 via-blue-500/10 to-card',
    href: '/rooms/ai-career-trajectories',
    relatedLabel: { en: 'Leadership branch', ru: 'Leadership-ветка' },
    highlights: [
      { en: 'Org design', ru: 'Org design' },
      { en: 'Hiring', ru: 'Hiring' },
      { en: 'Strategy', ru: 'Стратегия' },
    ],
  },
];
