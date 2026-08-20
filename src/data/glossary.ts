export interface GlossaryTerm {
  id: string;
  term: { ru: string; en: string };
  definition: { ru: string; en: string };
}

export const GLOSSARY: Record<string, GlossaryTerm> = {
  'value-alignment': {
    id: 'value-alignment',
    term: { ru: 'Выравнивание ценностей', en: 'Value Alignment' },
    definition: {
      ru: 'Выравнивание ценностей (value alignment) — задача сделать так, чтобы поведение ИИ-системы соответствовало человеческим ценностям, а у затронутых её решениями были основания эти решения принять. Техническая сторона — методы вроде RLHF и конституционного ИИ; нормативная — вопрос, чьи именно ценности и почему им следовать при обоснованном разногласии.',
      en: 'Value alignment is the task of making an AI system\'s behaviour match human values — and giving those affected by its decisions reason to accept them. The technical side covers methods like RLHF and constitutional AI; the normative side asks whose values, and why they should be followed under reasonable disagreement.'
    }
  },
  'context-engineering': {
    id: 'context-engineering',
    term: { ru: 'Контекст-инжиниринг', en: 'Context Engineering' },
    definition: {
      ru: 'Контекст-инжиниринг — дисциплина управления всем информационным окружением агента: что и когда попадает в контекстное окно (инструкции, память, инструменты, подгружаемые знания, история диалога). Главный принцип — минимальный объём максимально полезной информации. Промпт-инжиниринг сегодня рассматривается как её часть.',
      en: 'Context engineering is the discipline of managing an agent\'s entire information environment: what enters the context window and when (instructions, memory, tools, retrieved knowledge, dialogue history). The core principle is the minimal volume of maximally useful information. Prompt engineering is now viewed as a subset of it.'
    }
  },
  'context-rot': {
    id: 'context-rot',
    term: { ru: 'Context rot', en: 'Context rot' },
    definition: {
      ru: 'Context rot («гниение контекста») — деградация качества ответов агента по мере того, как контекст распухает и устаревает: мёртвые ссылки, дубли и шум конкурируют с задачей за внимание модели. Лечится регулярной гигиеной: аудит, чистка, вынос деталей в файлы, подгружаемые по требованию.',
      en: 'Context rot is the degradation of an agent\'s output quality as its context bloats and goes stale: dead references, duplicates, and noise compete with the actual task for the model\'s attention. The cure is regular hygiene: audits, cleanup, and moving details into files loaded on demand.'
    }
  },
  'ripgrep': {
    id: 'ripgrep',
    term: { ru: 'ripgrep (rg)', en: 'ripgrep (rg)' },
    definition: {
      ru: 'ripgrep — консольная утилита рекурсивного поиска по коду, вызывается командой `rg`. На больших репозиториях заметно быстрее `grep`, по умолчанию уважает `.gitignore` и пропускает бинарные файлы, поэтому выдаёт меньше мусора и берётся как базовый инструмент discovery-фазы. В систему не входит: ставится отдельно (`brew install ripgrep`, `sudo apt install ripgrep`). Если установить нельзя, тот же результат дают `grep -r` и `git grep`.',
      en: 'ripgrep is a command-line recursive code search tool, invoked as `rg`. On large repositories it is noticeably faster than `grep`, respects `.gitignore` by default, and skips binary files, so it returns less noise — which is why it is the baseline discovery tool. It does not ship with the OS: install it separately (`brew install ripgrep`, `sudo apt install ripgrep`). If you cannot install it, `grep -r` and `git grep` give the same result.'
    }
  },
  'entity-resolution': {
    id: 'entity-resolution',
    term: { ru: 'Разрешение сущностей', en: 'Entity Resolution' },
    definition: {
      ru: 'Разрешение сущностей (entity resolution) — задача свести множество разных представлений одного объекта (например, десятки написаний одной должности) к единой канонической записи. Главная сложность — связь «многие к одному» и зашумлённые данные; решается каскадом лексических и семантических методов с явным исходом «нет совпадения».',
      en: 'Entity resolution is the task of collapsing many different representations of the same object (for example, dozens of spellings of one job title) into a single canonical record. The core challenge is the many-to-one relationship and noisy data; it is solved with a cascade of lexical and semantic methods, with an explicit "no match" outcome.'
    }
  },
  'cosine-similarity': {
    id: 'cosine-similarity',
    term: { ru: 'Косинусное сходство', en: 'Cosine Similarity' },
    definition: {
      ru: 'Косинусное сходство — мера близости двух векторов (эмбеддингов) по углу между ними: значение около 1 означает близкий смысл, около 0 — несвязанный. В матчинге по нему оценивают, насколько название вакансии семантически близко к профилю профессии.',
      en: 'Cosine similarity measures how close two vectors (embeddings) are by the angle between them: a value near 1 means similar meaning, near 0 means unrelated. In matching it scores how semantically close a vacancy title is to a profession profile.'
    }
  },
  'fuzzy-matching': {
    id: 'fuzzy-matching',
    term: { ru: 'Нечёткое совпадение', en: 'Fuzzy Matching' },
    definition: {
      ru: 'Нечёткое совпадение (fuzzy matching) — сравнение строк, устойчивое к опечаткам и мелким различиям: оно возвращает степень похожести, а не только «равно / не равно». В лексическом слое реализуется библиотеками вроде rapidfuzz.',
      en: 'Fuzzy matching compares strings in a way that tolerates typos and small differences: it returns a degree of similarity rather than just equal / not-equal. In the lexical layer it is implemented with libraries like rapidfuzz.'
    }
  },
  'precision': {
    id: 'precision',
    term: { ru: 'Точность (Precision)', en: 'Precision' },
    definition: {
      ru: 'Точность (precision) — доля верных среди сделанных присвоений: из всех пар, которые матчер назначил, сколько правильных. Стратегия precision-first держит точность высокой ценой охвата.',
      en: 'Precision is the share of correct assignments among those made: of all the pairs the matcher assigned, how many are right. A precision-first strategy keeps precision high at the cost of coverage.'
    }
  },
  'recall': {
    id: 'recall',
    term: { ru: 'Полнота (Recall)', en: 'Recall' },
    definition: {
      ru: 'Полнота (recall) — доля найденных верных пар из всех существующих: сколько правильных совпадений матчер вообще обнаружил. Полнота и точность обычно в противофазе: рост одной снижает другую.',
      en: 'Recall is the share of correct pairs found out of all that exist: how many of the true matches the matcher discovered at all. Recall and precision usually trade off: raising one lowers the other.'
    }
  },
  'gold-set': {
    id: 'gold-set',
    term: { ru: 'Золотой набор', en: 'Gold Set' },
    definition: {
      ru: 'Золотой набор (gold set) — небольшой набор пар, размеченных вручную как эталон, на котором измеряют точность и полноту и калибруют пороги. Без него качество матчинга нельзя измерить объективно.',
      en: 'A gold set is a small set of hand-labeled reference pairs used to measure precision and recall and calibrate thresholds. Without it, matching quality cannot be measured objectively.'
    }
  },
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
  'quality-gate': {
    id: 'quality-gate',
    term: { ru: 'Quality gate', en: 'Quality Gate' },
    definition: {
      ru: 'Quality gate — блокирующее условие перед выпуском: сборка, линтеры, тесты, проверки безопасности. Это не один общий тест, а набор независимых проверок, и любая непройденная останавливает слияние ветки или выкат в прод.',
      en: 'A quality gate is a blocking condition before release: build, linters, tests, security checks. It is not one big test but a set of independent checks — any failing check stops the merge or the rollout.'
    }
  },
  'branch-protection': {
    id: 'branch-protection',
    term: { ru: 'Защита ветки', en: 'Branch Protection' },
    definition: {
      ru: 'Правило репозитория, которое запрещает пушить напрямую в основную ветку и требует, чтобы перечисленные проверки закончились успехом, а изменение прошло ревью. Именно защита ветки делает quality gate не обходимым.',
      en: 'A repository rule that forbids pushing straight to the main branch and requires the listed checks to pass and the change to be reviewed. Branch protection is what makes a quality gate impossible to bypass.'
    }
  },
  'canary-release': {
    id: 'canary-release',
    term: { ru: 'Canary (канареечный выпуск)', en: 'Canary Release' },
    definition: {
      ru: 'Canary — выкат, при котором новая версия сначала получает небольшую долю трафика. Её метрики сравнивают с остальной частью; выкат расширяют только при отсутствии деградации, а при плохих сигналах трафик возвращают на прежнюю версию.',
      en: 'A canary release routes a small share of traffic to the new version first. Its metrics are compared against the rest of the fleet; the rollout expands only if nothing degrades, and traffic returns to the previous version when signals look bad.'
    }
  },
  'feature-flag': {
    id: 'feature-flag',
    term: { ru: 'Feature flag (фича-флаг)', en: 'Feature Flag' },
    definition: {
      ru: 'Feature flag — переключатель, который управляет поведением кода без нового деплоя. Функция уезжает в прод выключенной, включается для части пользователей и выключается одним изменением конфигурации, поэтому откат стоит дёшево.',
      en: 'A feature flag is a switch that controls code behavior without a new deployment. A feature ships to production turned off, is enabled for a subset of users, and is turned off again by a single config change — which makes rollback cheap.'
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
  'mcp': {
    id: 'mcp',
    term: { ru: 'MCP', en: 'MCP' },
    definition: {
      ru: 'Model Context Protocol — открытый стандарт для подключения AI-моделей к внешним инструментам и данным через единый протокол. Часто сравнивают с «USB-C для AI».',
      en: 'Model Context Protocol — an open standard for connecting AI models to external tools and data through a unified protocol. Often called "USB-C for AI".'
    }
  },
  'mcp-server': {
    id: 'mcp-server',
    term: { ru: 'MCP Server', en: 'MCP Server' },
    definition: {
      ru: 'Серверный компонент MCP, который предоставляет инструменты (tools), ресурсы (resources) и шаблоны промптов (prompts) для AI-модели через стандартизированный интерфейс.',
      en: 'The server-side MCP component that exposes tools, resources, and prompt templates to an AI model through a standardized interface.'
    }
  },
  'json-rpc': {
    id: 'json-rpc',
    term: { ru: 'JSON-RPC', en: 'JSON-RPC' },
    definition: {
      ru: 'JSON-RPC 2.0 — легковесный протокол удалённого вызова процедур поверх JSON. Поддерживает запросы, ответы и уведомления. Используется в MCP и LSP.',
      en: 'JSON-RPC 2.0 — a lightweight remote procedure call protocol over JSON. Supports requests, responses, and notifications. Used in MCP and LSP.'
    }
  },
  'lsp': {
    id: 'lsp',
    term: { ru: 'LSP', en: 'LSP' },
    definition: {
      ru: 'Language Server Protocol — протокол между IDE и языковым сервером для подсветки, автодополнения и диагностики кода. MCP заимствует ту же идею «один протокол — много клиентов».',
      en: 'Language Server Protocol — a protocol between an IDE and a language server for highlighting, autocompletion, and code diagnostics. MCP borrows the same "one protocol — many clients" idea.'
    }
  },
  'mcp-inspector': {
    id: 'mcp-inspector',
    term: { ru: 'MCP Inspector', en: 'MCP Inspector' },
    definition: {
      ru: 'Интерактивный инструмент для отладки MCP-серверов прямо в браузере: позволяет вызывать tools, читать resources и проверять prompts без написания клиентского кода.',
      en: 'An interactive tool for debugging MCP servers in the browser: lets you call tools, read resources, and verify prompts without writing client code.'
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
  'rope': {
    id: 'rope',
    term: { ru: 'RoPE', en: 'RoPE' },
    definition: {
      ru: 'Rotary Position Embeddings — способ закодировать позицию токена через поворот его вектора. Главное преимущество: RoPE можно «растянуть» постфактум, продолжая обучение на длинных последовательностях — именно так Llama 3.1 достигла окна контекста в 128K токенов.',
      en: 'Rotary Position Embeddings — a way to encode a token\'s position by rotating its vector. Key advantage: RoPE can be "stretched" after the fact by continuing training on longer sequences — this is how Llama 3.1 reached a 128K-token context window.',
    },
  },
  'gqa': {
    id: 'gqa',
    term: { ru: 'GQA', en: 'GQA' },
    definition: {
      ru: 'Grouped-Query Attention — механизм внимания, в котором несколько query-голов делят одну пару ключ/значение (Key/Value). Качество почти не страдает по сравнению с обычным multi-head attention, но KV-кэш в разы меньше — это критично для длинных контекстов и инференса на скромном железе.',
      en: 'Grouped-Query Attention — an attention mechanism where several query heads share a single Key/Value pair. Quality is nearly identical to standard multi-head attention, but the KV cache is several times smaller — critical for long contexts and inference on modest hardware.',
    },
  },
  'open-weights': {
    id: 'open-weights',
    term: { ru: 'Открытые веса', en: 'Open Weights' },
    definition: {
      ru: 'Открытые веса (open weights) — модель, чьи обученные параметры можно скачать и запустить на своём железе. Важно: это не то же самое, что open source — обучающие данные и пайплайн обучения обычно не публикуются, а лицензия может ограничивать коммерческое использование.',
      en: 'Open weights — a model whose trained parameters can be downloaded and run on your own hardware. Important: this is not the same as open source — the training data and training pipeline are usually not published, and the license may restrict commercial use.',
    },
  },
  'quantization': {
    id: 'quantization',
    term: { ru: 'Квантизация', en: 'Quantization' },
    definition: {
      ru: 'Квантизация — сжатие весов модели за счёт снижения точности чисел (например, с 16 бит до 4–8 бит на параметр). Модель занимает в 2–4 раза меньше памяти и работает быстрее ценой небольшой потери качества. Популярные уровни: Q8 (почти без потерь) и Q4 (заметная экономия, лёгкая деградация).',
      en: 'Quantization — compressing model weights by lowering numeric precision (for example, from 16 bits down to 4–8 bits per parameter). The model takes 2–4x less memory and runs faster at the cost of a small quality loss. Common levels: Q8 (nearly lossless) and Q4 (big savings, slight degradation).',
    },
  },
  'vram': {
    id: 'vram',
    term: { ru: 'VRAM', en: 'VRAM' },
    definition: {
      ru: 'VRAM (видеопамять) — память видеокарты, в которую при локальном запуске загружаются веса модели и KV-кэш. Именно объём VRAM определяет, какая модель поместится: 8 ГБ хватает на 7–8B в Q4, 16 ГБ — на 8B без сжатия. На Mac с Apple Silicon роль VRAM играет объединённая память.',
      en: 'VRAM (video memory) — the GPU memory that holds the model weights and KV cache when running locally. VRAM capacity determines which model fits: 8 GB handles a 7–8B model in Q4, 16 GB fits an 8B model uncompressed. On Apple Silicon Macs, unified memory plays the role of VRAM.',
    },
  },
  'transient-failure': {
    id: 'transient-failure',
    term: { ru: 'Транзиентный сбой', en: 'Transient Failure' },
    definition: {
      ru: 'Транзиентный сбой — временная ошибка, которая проходит сама: сеть на секунду пропала, сервис был перегружен, API ответил слишком поздно. Такие сбои не чинят, а пережидают: повтор через небольшую паузу часто оказывается успешным. Противоположность — постоянный сбой, при котором повторять бесполезно и нужна другая стратегия восстановления.',
      en: 'A transient failure is a temporary error that goes away on its own: the network dropped for a second, a service was overloaded, an API answered too late. Such failures are not fixed but waited out: a retry after a short pause often succeeds. The opposite is a permanent failure, where retrying is pointless and a different recovery strategy is needed.',
    },
  },
  'circuit-breaker': {
    id: 'circuit-breaker',
    term: { ru: 'Circuit Breaker', en: 'Circuit Breaker' },
    definition: {
      ru: 'Circuit Breaker («предохранитель») — паттерн отказоустойчивости: после серии отказов зависимость временно помечается как нерабочая, и запросы сразу идут в обход, не тратя время на заведомо мёртвое соединение. Через паузу система осторожно проверяет, ожил ли сервис. Название — от электрического автомата, который размыкает цепь при перегрузке.',
      en: 'Circuit Breaker is a fault-tolerance pattern: after a series of failures, a dependency is temporarily marked as broken and requests immediately route around it instead of wasting time on a connection known to be dead. After a pause, the system carefully probes whether the service has recovered. The name comes from the electrical breaker that opens a circuit on overload.',
    },
  },
  'graceful-degradation': {
    id: 'graceful-degradation',
    term: { ru: 'Плавная деградация', en: 'Graceful Degradation' },
    definition: {
      ru: 'Плавная деградация (graceful degradation) — свойство системы при отказе части компонентов терять качество, а не падать целиком: показать сохранённую копию вместо живого поиска, отдать упрощённый ответ вместо ошибки. Пользователь получает худший, но рабочий результат — и часто вообще не замечает сбоя.',
      en: 'Graceful degradation is a system property: when some components fail, the system loses quality instead of collapsing entirely — it shows a saved copy instead of live search, or a simplified answer instead of an error. The user gets a worse but working result, and often does not notice the failure at all.',
    },
  },
  'fault-tolerance': {
    id: 'fault-tolerance',
    term: { ru: 'Отказоустойчивость', en: 'Fault Tolerance' },
    definition: {
      ru: 'Отказоустойчивость (fault tolerance) — способность системы продолжать работу, когда отдельные её компоненты отказывают. Достигается избыточностью (дублирование сервисов, резервные копии) и стратегиями восстановления вроде retry, fallback и rollback. Проектируется из допущения, что отказы неизбежны: вопрос не «если», а «когда».',
      en: 'Fault tolerance is a system\'s ability to keep working when individual components fail. It is achieved through redundancy (duplicated services, backups) and recovery strategies like retry, fallback, and rollback. It is designed on the assumption that failures are inevitable: the question is not "if" but "when."',
    },
  },
  'diff': {
    id: 'diff',
    term: { ru: 'Diff (различия)', en: 'Diff' },
    definition: {
      ru: 'Diff — построчное сравнение двух состояний кода: что было и что стало. Строки со знаком «−» удалены, со знаком «+» добавлены, остальные показаны как контекст. Diff, а не описание словами, — единица ревью: именно по нему видно, что изменение сделало на самом деле, включая то, о чём автор не упомянул.',
      en: 'A diff is a line-by-line comparison of two code states: what was there and what is there now. Lines marked “−” were removed, lines marked “+” were added, the rest is context. The diff — not a prose description — is the unit of review: it shows what a change actually did, including the parts the author never mentioned.',
    },
  },
  'commit': {
    id: 'commit',
    term: { ru: 'Коммит', en: 'Commit' },
    definition: {
      ru: 'Коммит — сохранённое состояние репозитория с автором, временем и сообщением. Два свойства делают его полезным в агентной работе: к любому коммиту можно вернуться, и он задаёт гранулярность отката. Один коммит на одно осмысленное изменение позволяет отменить неудачную часть, не теряя удачную.',
      en: 'A commit is a saved repository state with an author, a timestamp, and a message. Two properties make it useful in agent work: any commit can be returned to, and it sets the granularity of undo. One commit per meaningful change lets you drop the part that failed without losing the part that worked.',
    },
  },
  'staging-area': {
    id: 'staging-area',
    term: { ru: 'Индекс (staging area)', en: 'Staging Area' },
    definition: {
      ru: 'Индекс — промежуточная зона между рабочими файлами и коммитом: сюда командой add кладут именно те изменения, которые войдут в следующий коммит. Благодаря индексу из большой пачки правок агента можно собрать несколько отдельных коммитов вместо одного общего.',
      en: 'The staging area sits between your working files and the commit: `add` puts exactly the changes that will go into the next commit there. Thanks to it, a large batch of agent edits can be assembled into several separate commits instead of one lump.',
    },
  },
  'revert': {
    id: 'revert',
    term: { ru: 'Revert (обратный коммит)', en: 'Revert' },
    definition: {
      ru: 'Revert создаёт новый коммит, который отменяет изменения указанного старого, не стирая историю. Это безопасный способ отката для веток, которые уже видели другие: их локальные копии остаются согласованными, а в истории видно и ошибку, и её отмену.',
      en: 'Revert creates a new commit that undoes the changes of an earlier one without erasing history. It is the safe way to roll back a branch other people have already pulled: their local copies stay consistent, and the history shows both the mistake and its undo.',
    },
  },
  'reflog': {
    id: 'reflog',
    term: { ru: 'Reflog', en: 'Reflog' },
    definition: {
      ru: 'Reflog — локальный журнал того, куда указывала ветка в последние дни, включая состояния, потерянные после жёсткого сброса или неудачного rebase. Пока запись жива (по умолчанию около 90 дней), «удалённый» коммит можно найти по её хешу и вернуть.',
      en: 'The reflog is a local journal of where a branch pointed over recent days, including states lost to a hard reset or a failed rebase. While an entry survives (about 90 days by default), a “deleted” commit can be found by its hash and brought back.',
    },
  },
  'worktree': {
    id: 'worktree',
    term: { ru: 'Worktree', en: 'Worktree' },
    definition: {
      ru: 'Worktree — дополнительная рабочая копия того же репозитория в отдельной папке со своей веткой. Один репозиторий, несколько независимых рабочих директорий: два агента работают параллельно и не перетирают файлы друг друга, а переключение между задачами не требует прятать незавершённые правки.',
      en: 'A worktree is an extra working copy of the same repository in its own folder, on its own branch. One repository, several independent working directories: two agents can work in parallel without overwriting each other’s files, and switching tasks no longer requires stashing unfinished edits.',
    },
  },
  'ci-cd': {
    id: 'ci-cd',
    term: { ru: 'CI/CD', en: 'CI/CD' },
    definition: {
      ru: 'CI (непрерывная интеграция) — автоматическая сборка и проверка каждого изменения на чистой машине, независимо от того, что установлено у автора. CD — продолжение того же конвейера до выкладки. Смысл CI прост: «у меня работает» перестаёт быть аргументом, потому что проверку выполняет нейтральная сторона.',
      en: 'CI (continuous integration) is the automatic build and check of every change on a clean machine, regardless of what the author has installed locally. CD extends the same pipeline to delivery. The point of CI is simple: “works on my machine” stops being an argument, because a neutral party runs the check.',
    },
  },
  'gh-cli': {
    id: 'gh-cli',
    term: { ru: 'gh (GitHub CLI)', en: 'gh (GitHub CLI)' },
    definition: {
      ru: 'gh — официальный консольный клиент GitHub: показывает статус проверок пул-реквеста, логи прогонов и артефакты прямо в терминале, текстом. Ставится отдельно (brew install gh / sudo apt install gh) и один раз просит войти через gh auth login. Прав не добавляет: работает от имени вошедшего аккаунта и упирается в те же правила репозитория, что и веб-интерфейс.',
      en: 'gh is the official GitHub command-line client: it shows pull request check status, run logs, and artifacts right in the terminal, as text. It is installed separately (brew install gh / sudo apt install gh) and asks you to sign in once with gh auth login. It grants no extra rights: it acts as the signed-in account and hits the same repository rules as the web interface.',
    },
  },
  'workflow': {
    id: 'workflow',
    term: { ru: 'Workflow (GitHub Actions)', en: 'Workflow (GitHub Actions)' },
    definition: {
      ru: 'Workflow — описанный в YAML сценарий автоматизации, который лежит в репозитории в папке .github/workflows. В нём заданы события-триггеры (push, пул-реквест, расписание, ручной запуск), набор задач (jobs) и шаги внутри каждой. Workflow — это код: он проходит ревью и меняется вместе с проектом.',
      en: 'A workflow is a YAML automation script stored in the repository under .github/workflows. It defines trigger events (push, pull request, schedule, manual run), a set of jobs, and the steps inside each. A workflow is code: it goes through review and evolves with the project.',
    },
  },
  'runner': {
    id: 'runner',
    term: { ru: 'Runner', en: 'Runner' },
    definition: {
      ru: 'Runner — машина, на которой выполняется задача workflow. Хостится либо платформой (свежая виртуалка на каждый запуск), либо самой командой (self-hosted). Ключевое свойство — чистота: runner не знает про локальные настройки разработчика, поэтому ловит зависимости, которые «работают» только потому, что были установлены вручную.',
      en: 'A runner is the machine that executes a workflow job. It is either hosted by the platform (a fresh virtual machine per run) or by the team itself (self-hosted). Its key property is cleanliness: a runner knows nothing about a developer’s local setup, so it catches dependencies that “work” only because someone installed them by hand.',
    },
  },
  'matrix-build': {
    id: 'matrix-build',
    term: { ru: 'Матричная сборка', en: 'Matrix Build' },
    definition: {
      ru: 'Матрица — способ запустить одну и ту же задачу в нескольких вариантах окружения сразу: разные версии языка, операционные системы, наборы зависимостей. Задача описывается один раз, а CI разворачивает её в набор параллельных запусков, и падение видно точечно — в конкретной комбинации.',
      en: 'A matrix runs the same job across several environment variants at once: different language versions, operating systems, dependency sets. The job is written once, and CI expands it into a set of parallel runs, so a failure is pinpointed to a specific combination.',
    },
  },
  'build-artifact': {
    id: 'build-artifact',
    term: { ru: 'Артефакт сборки', en: 'Build Artifact' },
    definition: {
      ru: 'Артефакт — файл, сохранённый прогоном CI и доступный после его окончания: отчёт о покрытии, лог тестов, скриншоты упавших проверок, собранный пакет. Артефакты превращают закончившийся запуск из строчки «failed» в материал для разбора, который можно скачать и посмотреть.',
      en: 'An artifact is a file saved by a CI run and downloadable after it finishes: a coverage report, a test log, screenshots of failed checks, a built package. Artifacts turn a finished run from a bare “failed” line into evidence you can download and inspect.',
    },
  },
  'ci-secrets': {
    id: 'ci-secrets',
    term: { ru: 'Секреты CI', en: 'CI Secrets' },
    definition: {
      ru: 'Секреты — токены, ключи и пароли, которые CI хранит в зашифрованном виде и подставляет в задачу как переменные окружения. В логах они маскируются, в исходном коде их нет. Правило разделения простое: workflow ссылается на имя секрета, а значение известно только платформе.',
      en: 'Secrets are tokens, keys, and passwords that CI stores encrypted and injects into a job as environment variables. They are masked in logs and absent from source code. The separation rule is simple: the workflow references a secret by name, while the value is known only to the platform.',
    },
  },
  'human-in-the-loop': {
    id: 'human-in-the-loop',
    term: { ru: 'Human-in-the-Loop', en: 'Human-in-the-Loop' },
    definition: {
      ru: 'Human-in-the-Loop («человек в контуре») — принцип, при котором автоматическая система в определённых точках передаёт решение человеку: когда автоматическое восстановление исчерпано, действие необратимо или уверенность низкая. Качество передачи решает всё: вместе с задачей человек должен получить полный контекст — что система пыталась сделать и что именно пошло не так.',
      en: 'Human-in-the-Loop is the principle of an automated system handing the decision to a human at defined points: when automated recovery is exhausted, an action is irreversible, or confidence is low. The quality of the handoff decides everything: along with the task, the human must receive the full context — what the system was trying to do and what exactly went wrong.',
    },
  },
  'generative-search': {
    id: 'generative-search',
    term: { ru: 'Генеративный поиск', en: 'Generative search' },
    definition: {
      ru: 'Генеративный поиск — способ выдачи, при котором система отвечает связным текстом, собранным языковой моделью из найденных документов, вместо ранжированного списка ссылок. Механика извлечения та же, что в RAG; отличается единица выдачи: не документ, а утверждение. Продуктовые формы — AI Overviews, Perplexity, ChatGPT Search.',
      en: 'Generative search is a mode of output where the system answers with coherent prose composed by a language model from retrieved documents, instead of returning a ranked list of links. The retrieval mechanics are the same as in RAG; what differs is the unit of output — a claim rather than a document. Product forms include AI Overviews, Perplexity, and ChatGPT Search.',
    },
  },
  'provenance': {
    id: 'provenance',
    term: { ru: 'Происхождение сведений', en: 'Provenance' },
    definition: {
      ru: 'Происхождение сведений (provenance) — возможность проследить, из какого источника взято конкретное утверждение. В списочной выдаче происхождение встроено в саму форму: ссылка и есть документ. В сгенерированном ответе утверждение и ссылка производятся разными процессами, поэтому их соответствие становится отдельным проверяемым фактом.',
      en: 'Provenance is the ability to trace a specific claim back to the source it came from. In a list of results, provenance is built into the form itself: the link is the document. In a generated answer the claim and the citation are produced by different processes, so their correspondence becomes a separate fact that has to be checked.',
    },
  },
  'verifiability': {
    id: 'verifiability',
    term: { ru: 'Проверяемость', en: 'Verifiability' },
    definition: {
      ru: 'Проверяемость в генеративном поиске — измеримое свойство пары «утверждение и приставленная к нему ссылка». Измеряется с двух сторон: доля предложений, полностью подтверждённых своими ссылками, и доля ссылок, которые действительно подтверждают своё предложение. В работе 2023 года эти доли составили около 51,5 % и 74,5 %, причём более беглые ответы оказались в среднем менее проверяемыми.',
      en: 'Verifiability in generative search is a measurable property of the pair "claim and the citation attached to it". It is measured from two directions: the share of sentences fully supported by their citations, and the share of citations that actually support their sentence. A 2023 study put these at roughly 51.5% and 74.5%, with more fluent answers proving on average less verifiable.',
    },
  },
  'serendipity': {
    id: 'serendipity',
    term: { ru: 'Серендипность', en: 'Serendipity' },
    definition: {
      ru: 'Серендипность — свойство поисковой выдачи приводить пользователя к тому, чего он не искал: соседняя ссылка меняет постановку самого вопроса. В списке она возникает как побочный эффект формы — видны результаты, о которых вы не спрашивали. Шах и Бендер называют её утрату одним из трёх последствий перехода к сгенерированному ответу.',
      en: 'Serendipity is the property of search results leading a user to what they were not looking for: an adjacent link reframes the question itself. In a list it arises as a side effect of the form — you see results you did not ask about. Shah and Bender name its loss as one of the three consequences of moving to a generated answer.',
    },
  },
  'echo-chamber': {
    id: 'echo-chamber',
    term: { ru: 'Эхо-камера', en: 'Echo chamber' },
    definition: {
      ru: 'Эхо-камера — ситуация, в которой человек преимущественно получает подтверждение уже имеющейся позиции. В поиске она возникает через избирательное восприятие: запрос формулируется под ожидаемый ответ. Исследование CHI 2024 показало, что генеративный интерфейс усиливает этот эффект сильнее обычного поиска, а смещение при этом переезжает из порядка ссылок в текст синтеза, где его труднее заметить.',
      en: 'An echo chamber is a situation where a person predominantly receives confirmation of the view they already hold. In search it arises through selective exposure: the query is phrased around the expected answer. A CHI 2024 study found that a generative interface amplifies the effect more than conventional search, with the bias moving from the order of links into the synthesised text, where it is harder to notice.',
    },
  },
  'empirical-puzzle': {
    id: 'empirical-puzzle',
    term: { ru: 'Эмпирическая загадка', en: 'Empirical puzzle' },
    definition: {
      ru: 'Эмпирическая загадка — вопрос вида «почему наблюдается неожиданный факт X?», в отличие от темы, которая просто называет область. Разница практическая: у темы нет критерия завершения и она расширяется бесконечно, а загадка задаёт правило остановки — работа закончена, когда загадка объяснена. Настоящая загадка требует минимум двух конкурирующих объяснений; если с самого начала допускается одно, доказательства превращаются в иллюстрацию.',
      en: 'An empirical puzzle is a question of the form "why is surprising fact X the case?", as opposed to a topic, which merely names an area. The difference is practical: a topic has no completion criterion and expands forever, while a puzzle supplies a stopping rule — the work ends when the puzzle is explained. A real puzzle demands at least two competing explanations; if only one is allowed from the start, evidence becomes illustration.',
    },
  },
  'controlled-vocabulary': {
    id: 'controlled-vocabulary',
    term: { ru: 'Контролируемый словарь', en: 'Controlled vocabulary' },
    definition: {
      ru: 'Контролируемый словарь — заранее составленный список того, как один и тот же концепт называют в литературе. Нужен потому, что ключевое слово не равно концепту: один концепт живёт под несколькими словами, одно слово покрывает несколько концептов. Для каждого понятия фиксируют предпочтительный термин, синонимы, более широкие и узкие понятия, смежные концепты и исторические названия. Улучшает и поисковые запросы, и промпты агентам, и собственный аргумент — нестабильные термины означают нестабильные выводы.',
      en: 'A controlled vocabulary is a list, prepared in advance, of the ways one concept is named across the literature. It is needed because a keyword is not a concept: one concept lives under several words, and one word covers several concepts. For each notion you record the preferred term, synonyms, broader and narrower notions, related concepts, and historical labels. It improves search queries, agent prompts, and the argument itself — unstable terms mean unstable conclusions.',
    },
  },
  'prepared-serendipity': {
    id: 'prepared-serendipity',
    term: { ru: 'Подготовленная серендипность', en: 'Prepared serendipity' },
    definition: {
      ru: 'Подготовленная серендипность — механизм, благодаря которому неожиданная находка вообще опознаётся как находка. Предварительное чтение раскладывает в памяти «аттракторы» — имена, споры, термины; когда один из них всплывает в неожиданном месте, исследователь видит связь, которую неподготовленный читатель пропустит. Отсюда практическое следствие: агент, показывающий только запрошенное, отрезает именно ту периферию, из которой такие находки и приходят. Серендипность описывает свойство самой выдачи, подготовленная серендипность — готовность читателя его использовать.',
      en: 'Prepared serendipity is the mechanism by which an unexpected find is recognised as a find at all. Prior reading places "attractors" in memory — names, disputes, terms; when one surfaces in an unexpected place, the researcher sees a connection an unprepared reader would miss. The practical consequence: an agent that shows only what was asked for cuts off exactly the periphery such finds come from. Compare serendipity as a property of the results themselves.',
    },
  },
  'citation-chaining': {
    id: 'citation-chaining',
    term: { ru: 'Цепочка цитирований', en: 'Citation chaining' },
    definition: {
      ru: 'Цепочка цитирований — способ собрать ядро литературы по полю, двигаясь не запросами, а ссылками. Берут 5–10 сильных стартовых работ и идут по их спискам литературы назад (кто на них повлиял) и по индексам цитирований вперёд (кто их развил). Повторяющиеся имена, работы и термины и образуют карту поля — её не даст ни один одиночный запрос, даже адресованный агенту.',
      en: 'Citation chaining is a way of assembling the core literature of a field by following references rather than issuing queries. You take 5–10 strong seed works and walk their reference lists backward (who influenced them) and citation indexes forward (who built on them). The recurring names, works, and terms form the map of the field — no single query, even one addressed to an agent, will produce it.',
    },
  },
  'slr': {
    id: 'slr',
    term: { ru: 'Систематический обзор (SLR)', en: 'Systematic review (SLR)' },
    definition: {
      ru: 'Систематический обзор отличается от обычного обзора литературы примерно так же, как перепись от прогулки по городу: задача — найти и оценить всю релевантную литературу по конкретному вопросу, следуя протоколу, зафиксированному до начала поиска. Протокол минимизирует предвзятость и делает результат воспроизводимым. Методология выросла в доказательной медицине 1990-х и разошлась по социальным наукам, инженерии и образованию. Цена строгости высока: типичный обзор занимает больше года и требует команды.',
      en: 'A systematic review differs from an ordinary literature review roughly as a census differs from a stroll through town: the task is to find and appraise all relevant literature on a specific question, following a protocol fixed before the search begins. The protocol minimises bias and makes the result reproducible. The methodology grew out of 1990s evidence-based medicine and spread to the social sciences, engineering, and education. The price of that rigour is high: a typical review takes over a year and needs a team.',
    },
  },
  'active-learning': {
    id: 'active-learning',
    term: { ru: 'Active learning', en: 'Active learning' },
    definition: {
      ru: 'Active learning — цикл, в котором модель и человек обучают друг друга по ходу работы. Исследователь размечает небольшой стартовый набор примеров; классификатор обучается и ранжирует остальные по вероятности оказаться нужными; человек проверяет верх списка, и его решения дообучают модель — дальше цикл повторяется. В скрининге литературы это меняет не объём чтения, а его порядок: релевантные работы всплывают наверх, решение по каждой по-прежнему принимает человек.',
      en: 'Active learning is a loop in which the model and the human train each other as the work proceeds. The researcher labels a small seed set of examples; a classifier trains and ranks the rest by how likely they are to be wanted; the human reviews the top of the list, and those decisions retrain the model — then the cycle repeats. In literature screening it changes not the volume of reading but its order: relevant work floats to the top, while every decision still belongs to the human.',
    },
  },
  'benchmark-contamination': {
    id: 'benchmark-contamination',
    term: { ru: 'Контаминация бенчмарка', en: 'Benchmark contamination' },
    definition: {
      ru: 'Контаминация — попадание вопросов и ответов теста в обучающие данные модели. Модели учатся на корпусах, собранных из интернета, а вопросы популярных бенчмарков лежат в этом интернете годами — модель воспроизводит ответ по памяти, и тест засчитывает это как рассуждение. Снаружи оба случая неотличимы; ловится контаминация только свежими задачами той же трудности (как в эксперименте GSM1k) или закрытым набором вопросов.',
      en: 'Contamination is test questions and answers ending up in a model’s training data. Models train on corpora scraped from the internet, and the questions of popular benchmarks have been sitting on that internet for years — the model reproduces the answer from memory, and the test scores it as reasoning. From outside the two cases are indistinguishable; contamination is caught only with fresh problems of equal difficulty (as in the GSM1k experiment) or with a private question set.',
    },
  },
  'test-time-compute': {
    id: 'test-time-compute',
    term: { ru: 'Test-time compute', en: 'Test-time compute' },
    definition: {
      ru: 'Test-time compute — вычисления, которые модель тратит на размышления в момент ответа: раскладывает задачу на шаги, проверяет гипотезы, ловит собственные ошибки. Это второй закон роста в дополнение к масштабированию обучения: точность на трудных задачах растёт с бюджетом размышлений, но растут и цена, и время — у результата теперь всегда есть сноска, сколько модель думала и сколько это стоило.',
      en: 'Test-time compute is the computation a model spends thinking at answer time: breaking the problem into steps, checking hypotheses, catching its own mistakes. It is a second growth law alongside training-time scaling: accuracy on hard tasks grows with the thinking budget — but so do cost and latency, so every result now carries a footnote for how long the model thought and what that cost.',
    },
  },
};
