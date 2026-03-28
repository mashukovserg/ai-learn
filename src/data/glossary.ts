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
  'context-window': {
    id: 'context-window',
    term: { ru: 'Контекстное окно', en: 'Context Window' },
    definition: {
      ru: 'Контекстное окно — максимальный объём текста (в токенах), который модель может одновременно учитывать при генерации ответа. Всё, что не помещается в окно, не влияет на текущий шаг рассуждения.',
      en: 'A context window is the maximum amount of text (in tokens) a model can consider at once while generating a response. Content outside that window does not influence the current reasoning step.'
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
  'sdk': {
    id: 'sdk',
    term: { ru: 'SDK', en: 'SDK' },
    definition: {
      ru: 'Software Development Kit - набор библиотек, примеров и инструментов, который упрощает интеграцию API в приложение.',
      en: 'Software Development Kit - a package of libraries, examples, and tools that simplifies API integration in an application.'
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
  'code-red': {
    id: 'code-red',
    term: { ru: 'Красный код', en: 'Code Red' },
    definition: {
      ru: 'Внутренний режим экстренной мобилизации в компании, когда руководство считает угрозу стратегической и ускоряет принятие решений, запуск проектов и перераспределение ресурсов.',
      en: 'An internal emergency mobilization mode inside a company where leadership treats a threat as strategic and accelerates decisions, project launches, and resource reallocation.'
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
  'guardrails': {
    id: 'guardrails',
    term: { ru: 'Guardrails', en: 'Guardrails' },
    definition: {
      ru: 'Guardrails — набор технических и продуктовых ограничений для LLM-систем: фильтрация входа, проверка аргументов, ограничения прав, правила эскалации и блокирующие quality-gates перед релизом.',
      en: 'Guardrails are technical and product-level constraints for LLM systems: input filtering, argument validation, permission limits, escalation rules, and blocking quality gates before release.'
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
  },
  'lighthill-report': {
    id: 'lighthill-report',
    term: { ru: 'Отчет Лайтхилла', en: 'Lighthill Report' },
    definition: {
      ru: 'Критический отчет 1973 года в Великобритании, в котором физик Джеймс Лайтхилл заявил о провале текущих исследований ИИ. Это привело к резкому сокращению финансирования и началу первой "AI-зимы".',
      en: 'A critical 1973 report in the UK where physicist James Lighthill highlighted the failure of AI research. It led to drastic funding cuts and the first "AI Winter".'
    }
  },
  'geoffrey-hinton': {
    id: 'geoffrey-hinton',
    term: { ru: 'Джеффри Хинтон', en: 'Geoffrey Hinton' },
    definition: {
      ru: 'Ученый, известный как "крестный отец ИИ". Один из главных разработчиков метода обратного распространения ошибки и AlexNet. В 2023 году ушел из Google, чтобы открыто предупреждать о рисках бесконтрольного развития сверхразума.',
      en: 'A scientist known as the "Godfather of AI." A key developer of backpropagation and AlexNet. In 2023, he left Google to warn about the risks of uncontrolled superintelligence development.'
    }
  },
  'li-fei-fei': {
    id: 'li-fei-fei',
    term: { ru: 'Ли Фей-Фей', en: 'Li Fei-Fei' },
    definition: {
      ru: 'Профессор Стэнфорда, создательница ImageNet. Её работа доказала, что для прорыва в ИИ качественные данные важнее, чем сложные алгоритмы.',
      en: 'Stanford professor and creator of ImageNet. Her work proved that high-quality data is more critical for AI breakthroughs than complex algorithms.'
    }
  },
  'wordnet': {
    id: 'wordnet',
    term: { ru: 'WordNet', en: 'WordNet' },
    definition: {
      ru: 'Семантическая база данных английского языка, где слова объединены в иерархию по смыслу (синонимы, антонимы, "является частью").',
      en: 'A semantic database of the English language where words are grouped into a hierarchy by meaning (synonyms, antonyms, "is-a" relations).'
    }
  },
  'amt': {
    id: 'amt',
    term: { ru: 'Mechanical Turk', en: 'Mechanical Turk' },
    definition: {
      ru: 'Платформа Amazon для выполнения микрозадач людьми. Использовалась для ручной проверки миллионов картинок в ImageNet.',
      en: 'Amazon\'s crowdsourcing platform for micro-tasks. Used for human verification of millions of images in ImageNet.'
    }
  },
  'alexnet': {
    id: 'alexnet',
    term: { ru: 'AlexNet', en: 'AlexNet' },
    definition: {
      ru: 'Нейросеть, победившая в ImageNet 2012 с огромным отрывом. Она доказала эффективность глубокого обучения и использования GPU.',
      en: 'The neural network that won ImageNet 2012 by a huge margin, proving the effectiveness of deep learning and GPU acceleration.'
    }
  },
  'backpropagation': {
    id: 'backpropagation',
    term: { ru: 'Обратное распространение', en: 'Backpropagation' },
    definition: {
      ru: 'Основной алгоритм обучения нейросетей, позволяющий корректировать веса модели на основе ошибки в предсказании.',
      en: 'The fundamental algorithm for training neural networks by adjusting model weights based on prediction errors.'
    }
  },
  'nvidia': {
    id: 'nvidia',
    term: { ru: 'NVIDIA', en: 'NVIDIA' },
    definition: {
      ru: 'Технологическая компания, чьи графические процессоры (GPU) стали основным "двигателем" обучения современных ИИ-моделей.',
      en: 'A technology company whose Graphics Processing Units (GPUs) became the primary engine for training modern AI models.'
    }
  },
  'marvin-minsky': {
    id: 'marvin-minsky',
    term: { ru: 'Марвин Минский', en: 'Marvin Minsky' },
    definition: {
      ru: 'Один из отцов-основателей ИИ и лидер Символического подхода. Верил в возможность описать разум через логические правила.',
      en: 'One of the founding fathers of AI and a leader of the Symbolic approach. He believed intelligence could be described via logic rules.'
    }
  },
  'john-von-neumann': {
    id: 'john-von-neumann',
    term: { ru: 'Джон фон Нейман', en: 'John von Neumann' },
    definition: {
      ru: 'Математик и пионер вычислительной техники. Один из первых, кто обсуждал идею технологической сингулярности и ускоряющегося прогресса.',
      en: 'A mathematician and computing pioneer. One of the first to discuss technological singularity and accelerating progress.'
    }
  },
  'ij-good': {
    id: 'ij-good',
    term: { ru: 'И.Дж. Гуд', en: 'I.J. Good' },
    definition: {
      ru: 'Математик и криптоаналитик, сформулировавший идею "интеллектуального взрыва" и сверхинтеллектуальной машины в 1965 году.',
      en: 'A mathematician and cryptanalyst who formalized the "intelligence explosion" and the ultraintelligent machine idea in 1965.'
    }
  },
  'ray-kurzweil': {
    id: 'ray-kurzweil',
    term: { ru: 'Рэй Курцвайль', en: 'Ray Kurzweil' },
    definition: {
      ru: 'Футуролог и инженер, популяризировавший идею сингулярности в книге "Сингулярность уже близко". Известен прогнозами экспоненциального роста технологий.',
      en: 'A futurist and engineer who popularized singularity ideas in "The Singularity Is Near." Known for forecasts based on exponential technology growth.'
    }
  },
  'eliezer-yudkowsky': {
    id: 'eliezer-yudkowsky',
    term: { ru: 'Элиезер Юдковский', en: 'Eliezer Yudkowsky' },
    definition: {
      ru: 'Исследователь AI Safety, который популяризировал проблему выравнивания и мысленный эксперимент о "максимизаторе скрепок".',
      en: 'An AI Safety researcher who popularized alignment concerns and the "paperclip maximizer" thought experiment.'
    }
  },
  'nick-bostrom': {
    id: 'nick-bostrom',
    term: { ru: 'Ник Бостром', en: 'Nick Bostrom' },
    definition: {
      ru: 'Философ Оксфордского университета, автор книги "Сверхинтеллект", где подробно разобраны риски неконтролируемого AGI.',
      en: 'An Oxford philosopher and author of "Superintelligence," with a detailed analysis of uncontrolled AGI risks.'
    }
  },
  'andrej-karpathy': {
    id: 'andrej-karpathy',
    term: { ru: 'Андрей Карпатый', en: 'Andrej Karpathy' },
    definition: {
      ru: 'Известный AI-инженер, сооснователь OpenAI. Ввел термин "Software 2.0", описывающий программирование через обучение нейросетей.',
      en: 'Renowned AI engineer and OpenAI co-founder. Coined the term "Software 2.0" to describe programming through neural network training.'
    }
  },
  'transformer': {
    id: 'transformer',
    term: { ru: 'Трансформер', en: 'Transformer' },
    definition: {
      ru: 'Архитектура нейросетей, представленная в 2017 году. Позволяет модели смотреть на весь текст сразу, а не последовательно.',
      en: 'A neural network architecture introduced in 2017. It allows models to process entire sequences at once rather than sequentially.'
    }
  },
  'rnn': {
    id: 'rnn',
    term: { ru: 'RNN', en: 'RNN' },
    definition: {
      ru: 'Рекуррентные нейронные сети — старый тип архитектуры для текста, который читал слова по одному и часто забывал начало.',
      en: 'Recurrent Neural Networks — an older architecture for text that processed words one by one and often "forgot" the beginning.'
    }
  },
  'lstm': {
    id: 'lstm',
    term: { ru: 'LSTM', en: 'LSTM' },
    definition: {
      ru: 'Улучшенная версия RNN с "долгой краткосрочной памятью". Могла помнить более длинные контексты, но всё еще была медленной.',
      en: 'An improved version of RNN with "Long Short-Term Memory." It could handle longer context but remained slow due to sequential nature.'
    }
  },
  'self-attention': {
    id: 'self-attention',
    term: { ru: 'Self-Attention', en: 'Self-Attention' },
    definition: {
      ru: 'Механизм "самовнимания", позволяющий модели математически вычислять важность связи каждого слова с каждым другим.',
      en: 'A mechanism allowing the model to mathematically compute the importance of the relationship between every word in a sequence.'
    }
  },
  'latent-space': {
    id: 'latent-space',
    term: { ru: 'Латентное пространство', en: 'Latent Space' },
    definition: {
      ru: 'Сжатое математическое представление данных, где похожие концепции находятся близко друг к другу. В генерации изображений диффузия происходит именно здесь, а не в пикселях.',
      en: 'A compressed mathematical representation of data where similar concepts are close together. In image generation, diffusion happens here rather than in pixel space.'
    }
  },
  'vae': {
    id: 'vae',
    term: { ru: 'VAE', en: 'VAE' },
    definition: {
      ru: 'Variational Autoencoder — компонент модели, который сжимает картинку в латентный код и разжимает её обратно в пиксели после генерации.',
      en: 'Variational Autoencoder — a component that compresses an image into a latent code and decodes it back into pixels after generation.'
    }
  },
  'lora-image': {
    id: 'lora-image',
    term: { ru: 'LoRA (графика)', en: 'LoRA (Graphics)' },
    definition: {
      ru: 'Low-Rank Adaptation — легкий "микро-плагин" для модели, обучающий её конкретному персонажу, стилю или объекту без переобучения всей сети.',
      en: 'Low-Rank Adaptation — a lightweight "micro-plugin" for a model that teaches it a specific character, style, or object without retraining the entire network.'
    }
  },
  'fstec': {
    id: 'fstec',
    term: { ru: 'ФСТЭК', en: 'FSTEC' },
    definition: {
      ru: 'Федеральная служба по техническому и экспортному контролю — ведомство, отвечающее за защиту информации и сертификацию систем безопасности.',
      en: 'Federal Service for Technical and Export Control — the agency responsible for information protection and security system certification.',
    }
  },
  'fsb': {
    id: 'fsb',
    term: { ru: 'ФСБ', en: 'FSB' },
    definition: {
      ru: 'Федеральная служба безопасности — орган, курирующий вопросы криптографии и безопасности критической инфраструктуры.',
      en: 'Federal Security Service — the body overseeing cryptography and critical infrastructure security.',
    }
  },
  'gdpr': {
    id: 'gdpr',
    term: { ru: 'GDPR', en: 'GDPR' },
    definition: {
      ru: 'Общий регламент по защите данных — европейский стандарт приватности и обработки персональной информации.',
      en: 'General Data Protection Regulation — the European standard for privacy and personal information processing.',
    }
  },
  'sandbox': {
    id: 'sandbox',
    term: { ru: 'Песочница (ЭПР)', en: 'Sandbox (EPR)' },
    definition: {
      ru: 'Экспериментальный правовой режим, позволяющий тестировать новые технологии (например, беспилотники) в ограниченных условиях без соблюдения всех общих законов.',
      en: 'An experimental legal regime that allows testing new technologies (e.g., self-driving cars) in a limited environment without complying with all general laws.',
    }
  },
  'brussels-effect': {
    id: 'brussels-effect',
    term: { ru: 'Эффект Брюсселя', en: 'Brussels Effect' },
    definition: {
      ru: 'Явление, при котором стандарты Евросоюза де-факто становятся глобальными, так как международные компании предпочитают следовать самым строгим правилам для доступа на рынок ЕС.',
      en: 'A phenomenon where EU standards become de facto global standards as international companies choose to follow the strictest rules to maintain access to the EU market.',
    }
  },
  'conformity-assessment': {
    id: 'conformity-assessment',
    term: { ru: 'Оценка соответствия', en: 'Conformity Assessment' },
    definition: {
      ru: 'Обязательная процедура подтверждения того, что ИИ-система высокого риска отвечает всем требованиям безопасности, прозрачности и качества до выхода на рынок.',
      en: 'A mandatory process of demonstrating that a high-risk AI system meets all safety, transparency, and quality requirements before being placed on the market.',
    }
  },
};
