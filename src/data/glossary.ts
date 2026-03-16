export interface GlossaryTerm {
  id: string;
  term: { ru: string; en: string };
  definition: { ru: string; en: string };
}

export const GLOSSARY: Record<string, GlossaryTerm> = {
  'llm': {
    id: 'llm',
    term: { ru: 'LLM', en: 'LLM' },
    definition: { 
      ru: 'Large Language Model (Большая языковая модель) — нейросеть, обученная на огромных массивах текста для предсказания следующего слова.', 
      en: 'Large Language Model — a neural network trained on massive amounts of text to predict the next token.' 
    }
  },
  'token': {
    id: 'token',
    term: { ru: 'Токен', en: 'Token' },
    definition: { 
      ru: 'Токен — базовая единица текста для ИИ: это может быть часть слова, целое слово или отдельный символ. Модель читает и генерирует именно токены; их количество напрямую влияет на стоимость запроса, скорость ответа и объем контекста.', 
      en: 'A token is the basic unit of text for AI: it can be a subword fragment, a full word, or a single character. Models read and generate tokens, and token count directly affects request cost, response speed, and available context length.' 
    }
  },
  'bpe': {
    id: 'bpe',
    term: { ru: 'BPE', en: 'BPE' },
    definition: { 
      ru: 'Byte Pair Encoding — алгоритм токенизации, который объединяет наиболее часто встречающиеся пары символов в один фрагмент.', 
      en: 'Byte Pair Encoding — a tokenization algorithm that merges the most frequent pairs of characters into a single unit.' 
    }
  },
  'rag': {
    id: 'rag',
    term: { ru: 'RAG', en: 'RAG' },
    definition: { 
      ru: 'Retrieval-Augmented Generation — метод, позволяющий ИИ искать факты во внешних базах данных перед генерацией ответа.', 
      en: 'Retrieval-Augmented Generation — a method that allows AI to retrieve facts from external databases before generating a response.' 
    }
  },
  'rlhf': {
    id: 'rlhf',
    term: { ru: 'RLHF', en: 'RLHF' },
    definition: { 
      ru: 'Reinforcement Learning from Human Feedback — обучение модели на основе оценок и предпочтений людей.', 
      en: 'Reinforcement Learning from Human Feedback — training a model based on human rankings and preferences.' 
    }
  },
  'embeddings': {
    id: 'embeddings',
    term: { ru: 'Эмбеддинги', en: 'Embeddings' },
    definition: { 
      ru: 'Математическое представление смысла текста в виде вектора (набора чисел).', 
      en: 'A mathematical representation of text meaning as a vector (a set of numbers).' 
    }
  },
  'agent': {
    id: 'agent',
    term: { ru: 'Агент', en: 'Agent' },
    definition: { 
      ru: 'Автономная система на базе ИИ, которая может планировать действия и использовать инструменты для достижения цели.', 
      en: 'An autonomous system based on AI that can plan actions and use tools to achieve a goal.' 
    }
  },
  'hallucination': {
    id: 'hallucination',
    term: { ru: 'Галлюцинация', en: 'Hallucination' },
    definition: { 
      ru: 'Ситуация, когда ИИ уверенно выдает ложную или вымышленную информацию за правду.', 
      en: 'A situation where an AI confidently presents false or invented information as truth.' 
    }
  },
  'sft': {
    id: 'sft',
    term: { ru: 'SFT', en: 'SFT' },
    definition: { 
      ru: 'Supervised Fine-Tuning — обучение модели на готовых примерах "вопрос-ответ", написанных экспертами.', 
      en: 'Supervised Fine-Tuning — training a model on expert-written "question-answer" pairs.' 
    }
  },
  'dpo': {
    id: 'dpo',
    term: { ru: 'DPO', en: 'DPO' },
    definition: { 
      ru: 'Direct Preference Optimization — современный метод настройки ИИ напрямую на предпочтениях человека без промежуточных моделей.', 
      en: 'Direct Preference Optimization — a method to align AI directly on human preferences without reward models.' 
    }
  },
  'ppo': {
    id: 'ppo',
    term: { ru: 'PPO', en: 'PPO' },
    definition: { 
      ru: 'Proximal Policy Optimization — алгоритм обучения с подкреплением, используемый в RLHF для стабильной настройки модели.', 
      en: 'Proximal Policy Optimization — a reinforcement learning algorithm used in RLHF for stable model tuning.' 
    }
  },
  'orchestrator': {
    id: 'orchestrator',
    term: { ru: 'Оркестратор', en: 'Orchestrator' },
    definition: { 
      ru: 'Агент верхнего уровня, который распределяет задачи между другими специализированными агентами.', 
      en: 'A top-level agent that coordinates and assigns tasks to other specialized agents.' 
    }
  },
  'function-calling': {
    id: 'function-calling',
    term: { ru: 'Function Calling', en: 'Function Calling' },
    definition: { 
      ru: 'Способность модели выдавать структурированные данные (JSON) для автоматического вызова внешних программ.', 
      en: 'The model\'s ability to output structured data (JSON) to automatically call external tools.' 
    }
  },
  'vector-db': {
    id: 'vector-db',
    term: { ru: 'Векторная БД', en: 'Vector DB' },
    definition: { 
      ru: 'База данных, которая хранит информацию в виде чисел (векторов) для быстрого поиска по смыслу, а не по словам.', 
      en: 'A database that stores information as vectors for fast semantic searching instead of keyword matching.' 
    }
  },
  'chunking': {
    id: 'chunking',
    term: { ru: 'Чанкинг', en: 'Chunking' },
    definition: { 
      ru: 'Процесс разбиения длинных документов на маленькие фрагменты (чанки) для лучшей обработки моделью.', 
      en: 'The process of breaking down long documents into small fragments (chunks) for better model processing.' 
    }
  },
  'prompt-injection': {
    id: 'prompt-injection',
    term: { ru: 'Промпт-инъекция', en: 'Prompt Injection' },
    definition: { 
      ru: 'Атака, заставляющая ИИ игнорировать свои правила и выполнять команды злоумышленника.', 
      en: 'An attack that forces the AI to ignore its instructions and follow the attacker\'s commands.' 
    }
  },
  'multimodality': {
    id: 'multimodality',
    term: { ru: 'Мультимодальность', en: 'Multimodality' },
    definition: { 
      ru: 'Способность модели одновременно работать с разными типами данных: текстом, изображениями, видео и звуком.', 
      en: 'The ability of a model to simultaneously process different types of data: text, images, video, and sound.' 
    }
  },
  'scaling-laws': {
    id: 'scaling-laws',
    term: { ru: 'Законы масштабирования', en: 'Scaling Laws' },
    definition: { 
      ru: 'Эмпирические правила, согласно которым способности ИИ предсказуемо растут при увеличении данных, вычислений и размера модели.', 
      en: 'Empirical rules stating that AI capabilities grow predictably with increases in data, compute, and model size.' 
    }
  },
  'parameters': {
    id: 'parameters',
    term: { ru: 'Параметры', en: 'Parameters' },
    definition: { 
      ru: 'Внутренние переменные ("веса") нейросети, которые настраиваются во время обучения. Чем их больше, тем потенциально сложнее задачи может решать модель.', 
      en: 'Internal variables ("weights") of a neural network adjusted during training. More parameters generally mean more complex problem-solving capabilities.' 
    }
  },
  'evals': {
    id: 'evals',
    term: { ru: 'Эвалюация (Evals)', en: 'Evals' },
    definition: { 
      ru: 'Система тестов и метрик для измерения качества, точности и безопасности ответов ИИ.', 
      en: 'A system of tests and metrics used to measure the quality, accuracy, and safety of AI responses.' 
    }
  },
  'inference': {
    id: 'inference',
    term: { ru: 'Инференс', en: 'Inference' },
    definition: {
      ru: 'Инференс (inference) — этап использования уже обученной модели для получения ответа на запрос. Это не обучение, а применение готовых весов.',
      en: 'Inference is the stage where a trained model is used to produce an answer to a prompt. It is model usage, not training.'
    }
  },
  'softmax': {
    id: 'softmax',
    term: { ru: 'Softmax', en: 'Softmax' },
    definition: {
      ru: 'Softmax — математический шаг, который превращает сырые баллы модели (logits) в вероятности по всем кандидатам. После него можно сравнивать варианты как распределение: чем выше вероятность, тем чаще токен будет выбран при генерации.',
      en: 'Softmax is a mathematical step that converts the model\'s raw scores (logits) into probabilities across all candidates. After this normalization, token choices can be compared as a probability distribution for decoding.'
    }
  }
};
