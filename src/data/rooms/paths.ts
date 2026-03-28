import { PathMetadata } from './types';

export const PATHS_METADATA: PathMetadata[] = [
  {
    id: 'beginner',
    title: { ru: 'Основы AI', en: 'AI Foundations' },
    description: {
      ru: 'Идеальная точка входа. Изучите историю, терминологию и основные концепции LLM.',
      en: 'The perfect starting point. Learn the history, the terminology, and the core concepts of LLMs.',
    },
    icon: 'GraduationCap',
    difficulty: { ru: 'Новичок', en: 'Beginner' },
    unlocked: true,
  },
  {
    id: 'ideas-history',
    title: { ru: 'Идеи и споры об ИИ', en: 'Ideas and Debates in AI' },
    description: {
      ru: 'Как менялись представления об интеллекте, мышлении и автоматизации: от ранних идей до современных дебатов о рисках и роли AI.',
      en: 'How ideas about intelligence, reasoning, and automation evolved: from early concepts to modern debates on AI risk and societal impact.',
    },
    icon: 'BookOpen',
    difficulty: { ru: 'Новичок', en: 'Beginner' },
    unlocked: true,
  },
  {
    id: 'intermediate',
    title: { ru: 'Практический ML: от данных к моделям', en: 'Practical ML: From Data to Models' },
    description: {
      ru: 'Путь для тех, кто хочет понимать, как ML-системы строятся в реальности: подготовка данных, обучение, оценка качества и выбор архитектуры.',
      en: 'A track for learners who want to understand how ML systems are built in practice: data preparation, training, evaluation, and architecture choices.',
    },
    icon: 'Brain',
    difficulty: { ru: 'Средний', en: 'Intermediate' },
    unlocked: false,
  },
  {
    id: 'agentic-systems',
    title: { ru: 'Агентские системы', en: 'Agentic Systems' },
    description: {
      ru: 'От простых чат-ботов к автономным исполнителям. Изучите, как строить системы, которые "делают", а не просто "говорят".',
      en: 'From simple chatbots to autonomous executors. Learn how to build systems that "do" rather than just "talk".',
    },
    icon: 'Cpu',
    difficulty: { ru: 'Продвинутый', en: 'Advanced' },
    unlocked: true,
  },
  {
    id: 'agent-coding',
    title: { ru: 'Агентная разработка', en: 'Agent Coding' },
    description: {
      ru: 'Путь про инженерную работу с coding-агентами: чёткая постановка задач, проверяемые критерии качества, guardrails и безопасные релизы.',
      en: 'A path focused on engineering with coding agents: clear task framing, measurable quality criteria, guardrails, and safe releases.',
    },
    icon: 'Cpu',
    difficulty: { ru: 'Новичок', en: 'Beginner' },
    unlocked: true,
  },
];
