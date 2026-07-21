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
    // Curriculum order: what an LLM is -> how it works -> where it came from ->
    // what it means for a career; then hands-on (open models), then applied use
    // (embeddings, grounding), with the Advanced research room last.
    roomIds: [
      'llm-landscape',
      'llm-mechanics',
      'ai-history',
      'ai-career-trajectories',
      'local-models-101',
      'llama-3-1-8b',
      'fine-tuning-101',
      'embeddings-101',
      'research-grounding',
      'ai-regulation-ru',
      'ai-regulation-eu',
      'ai-research',
    ],
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
    // Chronological: origins -> the ChatGPT break -> what followed -> the
    // forward-looking debates (scaling, then singularity as the far horizon).
    roomIds: [
      'ai-history',
      'chatgpt-moment',
      'post-chatgpt-history',
      'scaling-hypothesis',
      'ai-singularity',
    ],
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
    roomIds: [
      'local-models-101',
      'llama-3-1-8b',
      'fine-tuning-101',
      'embeddings-101',
    ],
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
    // What an agent is -> how it searches -> how it reaches tools -> how many
    // agents are coordinated.
    roomIds: [
      'ai-agents',
      'deep-search-agents',
      'mcp-tool-ecosystems',
      'agentic-swarm-management',
    ],
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
    // Module A (AC-101..104) — the foundations; then how the agent actually
    // works in practice (Claude Code loop, CLI, context engineering); then
    // Module B quality loops (testing, UI delivery); then the advanced tail.
    roomIds: [
      'agent-coding-foundations',      // AC-101
      'agentic-coding-tools',          // AC-102
      'prompt-contracts',              // AC-103
      'multi-agent-collaboration',     // AC-104
      'claude-code-agentic-loop',      // how the loop runs
      'agentic-cli-tools',             // AC-201
      'context-engineering-101',       // AC-204
      'agentic-testing-loop',          // AC-202
      'agentic-ui-delivery',           // AC-203
      'mcp-tool-ecosystems',
      'claude-code-pro-workflow',      // Advanced
    ],
  },
];
