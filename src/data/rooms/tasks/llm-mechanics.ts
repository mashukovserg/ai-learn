import { LocalizedTask } from '../types';

export const llmMechanicsTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'input',
      question: { ru: 'Как называется алгоритм сжатия текста, который объединяет частые пары символов в один токен?', en: 'What is the name of the text compression algorithm that merges frequent character pairs into a single token?' },
      answer: 'BPE',
      hint: { ru: 'Три буквы: Byte Pair Encoding.', en: 'Three letters: Byte Pair Encoding.' },
      explanation: {
        ru: 'Верно! BPE (Byte Pair Encoding) позволяет эффективно представлять редкие слова, разбивая их на частые фрагменты.',
        en: 'Correct! BPE (Byte Pair Encoding) allows for efficient representation of rare words by breaking them into frequent fragments.',
      },
    },
    {
      id: 2,
      type: 'sorting',
      question: { ru: 'Упорядочите шаги цикла генерации токена.', en: 'Sort the steps of the token generation loop.' },
      initialItems: [
        { ru: 'Выбор токена на основе вероятностей', en: 'Select token based on probabilities' },
        { ru: 'Токенизация входящего текста', en: 'Tokenize input text' },
        { ru: 'Расчет баллов (logits) для всех токенов словаря', en: 'Compute scores (logits) for all vocabulary tokens' },
        { ru: 'Добавление выбранного токена в историю контекста', en: 'Append selected token to context history' }
      ],
      correctOrder: [
        { ru: 'Токенизация входящего текста', en: 'Tokenize input text' },
        { ru: 'Расчет баллов (logits) для всех токенов словаря', en: 'Compute scores (logits) for all vocabulary tokens' },
        { ru: 'Выбор токена на основе вероятностей', en: 'Select token based on probabilities' },
        { ru: 'Добавление выбранного токена в историю контекста', en: 'Append selected token to context history' }
      ],
      explanation: {
        ru: 'Правильно! Процесс всегда начинается с перевода текста в числа, затем идет математический расчет вероятностей и финальный выбор.',
        en: 'Correct! The process always begins by translating text into numbers, followed by mathematical probability calculation and the final choice.'
      },
      answer: ''
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: { 
        ru: 'Какую температуру лучше всего использовать для задачи написания строгого программного кода?', 
        en: 'What temperature is best suited for writing strict programming code?' 
      },
      options: [
        { ru: 'T = 0.0', en: 'T = 0.0' },
        { ru: 'T = 0.8', en: 'T = 0.8' },
        { ru: 'T = 2.0', en: 'T = 2.0' }
      ],
      answer: { ru: 'T = 0.0', en: 'T = 0.0' },
      explanation: { 
        ru: 'Верно. Для задач, где важна точность и соблюдение синтаксиса, используется "жадный поиск" при нулевой температуре.', 
        en: 'Correct. For tasks where precision and syntax compliance are critical, "greedy search" at zero temperature is used.' 
      }
    },
    {
      id: 4,
      type: 'multiple-select',
      question: { 
        ru: 'Почему модели с длинным контекстом (1M+ токенов) всё равно могут ошибаться при анализе больших документов?', 
        en: 'Why might models with long contexts (1M+ tokens) still make mistakes when analyzing large documents?' 
      },
      options: [
        { ru: 'Эффект "Lost in the Middle" (потеря фокуса в середине текста)', en: 'The "Lost in the Middle" effect (loss of focus in the middle of the text)' },
        { ru: 'Модель перегревается от большого объема данных', en: 'The model overheats from the large data volume' },
        { ru: 'Накопление вычислительных шумов при каждом новом токене', en: 'Accumulation of computational noise with each new token' },
        { ru: 'Физические ограничения видеопамяти при работе с KV-Cache', en: 'Physical VRAM limitations when working with KV-Cache' }
      ],
      answer: [
        { ru: 'Эффект "Lost in the Middle" (потеря фокуса в середине текста)', en: 'The "Lost in the Middle" effect (loss of focus in the middle of the text)' },
        { ru: 'Накопление вычислительных шумов при каждом новом токене', en: 'Accumulation of computational noise with each new token' }
      ],
      explanation: { 
        ru: 'Правильно. Даже при наличии большого окна внимания, архитектура трансформеров склонна лучше "помнить" информацию в начале и в конце промпта.', 
        en: 'Correct. Even with a large attention window, the Transformer architecture tends to better "remember" information at the beginning and end of the prompt.' 
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: {
        ru: 'Какую роль выполняет шаг Softmax после вычисления logits?',
        en: 'What does the Softmax step do after logits are computed?'
      },
      options: [
        { ru: 'Преобразует сырые баллы в вероятности по словарю токенов', en: 'Converts raw scores into token probability distribution' },
        { ru: 'Сжимает модель, уменьшая количество параметров', en: 'Compresses the model by reducing parameters' },
        { ru: 'Удаляет редкие слова из контекста', en: 'Removes rare words from context' }
      ],
      answer: {
        ru: 'Преобразует сырые баллы в вероятности по словарю токенов',
        en: 'Converts raw scores into token probability distribution'
      },
      explanation: {
        ru: 'Верно. Logits — это сырые баллы, а Softmax переводит их в вероятности, с которыми уже работает декодер.',
        en: 'Correct. Logits are raw scores, and Softmax turns them into probabilities used by the decoder.'
      }
    },
    {
      id: 6,
      type: 'input',
      question: {
        ru: 'Как называется sampling-стратегия, где выбирается минимальный набор токенов с суммарной вероятностью p?',
        en: 'What is the sampling strategy called where the smallest token set covering cumulative probability p is selected?'
      },
      answer: ['top-p', 'topp', 'nucleus', 'nucleus sampling'],
      hint: {
        ru: 'Подсказка: часто называют nucleus sampling.',
        en: 'Hint: it is often called nucleus sampling.'
      },
      explanation: {
        ru: 'Да. Это top-p (nucleus) sampling: гибкий способ ограничить хвост вероятностей.',
        en: 'Yes. This is top-p (nucleus) sampling: a flexible way to limit the low-probability tail.'
      }
    },
    {
      id: 7,
      type: 'multiple-choice',
      question: {
        ru: 'Что чаще всего означает эффект "Lost in the Middle"?',
        en: 'What does the "Lost in the Middle" effect usually mean?'
      },
      options: [
        { ru: 'Модель сильнее опирается на начало и конец длинного контекста, чем на середину', en: 'The model relies more on beginning/end than middle in long context' },
        { ru: 'Модель перестает понимать токены из-за перегрева GPU', en: 'The model stops understanding tokens because of GPU overheating' },
        { ru: 'Модель автоматически переключается на другой язык', en: 'The model automatically switches to another language' }
      ],
      answer: {
        ru: 'Модель сильнее опирается на начало и конец длинного контекста, чем на середину',
        en: 'The model relies more on beginning/end than middle in long context'
      },
      explanation: {
        ru: 'Верно. Поэтому критичные инструкции полезно дублировать ближе к концу промпта.',
        en: 'Correct. That is why critical constraints are often repeated near the end of the prompt.'
      }
    },
    {
      id: 8,
      type: 'mentor',
      question: { ru: 'Практика декодинга', en: 'Decoding Practice' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'У тебя два типа запросов: (1) юридические ответы клиентам, (2) креативные слоганы для маркетинга. Что лучше сделать с настройками декодинга?',
          en: 'You have two request types: (1) legal customer responses, (2) creative marketing slogans. What is the best decoding setup?'
        },
        userOptions: [
          {
            text: { ru: 'Поставить высокую температуру для всех задач, чтобы ответы были интереснее.', en: 'Use high temperature for all tasks to make outputs more interesting.' },
            reaction: {
              ru: 'Это рискованно: для юридических ответов вырастут вариативность и вероятность фактических ошибок.',
              en: 'This is risky: legal responses will become more variable and fact errors more likely.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'Поставить температуру 0.0 для всех задач без исключений.', en: 'Use temperature 0.0 for all tasks with no exceptions.' },
            reaction: {
              ru: 'Для строгих задач хорошо, но маркетинг станет слишком шаблонным и потеряет вариативность.',
              en: 'Good for strict tasks, but marketing output will become too rigid and repetitive.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'Разделить режимы: low-temperature для юридических ответов и более высокий temperature/top-p для креатива.', en: 'Split modes: low temperature for legal responses and higher temperature/top-p for creative work.' },
            reaction: {
              ru: 'Именно. Декодинг нужно настраивать под бизнес-задачу, а не выбирать один режим на всё.',
              en: 'Exactly. Decoding must be tuned to business goals, not forced into one global mode.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Шаблон решения: routing по типу запроса + отдельные параметры декодинга + eval-гейты качества для каждого режима.',
              en: 'Solution template: route by request type + separate decoding configs + quality eval gates per mode.'
            }
          }
        ]
      }
    },
    {
      id: 9,
      type: 'scenario',
      question: {
        ru: 'Лаборатория: сравнение моделей на открытом промпте',
        en: 'Lab: comparing models on an open-ended prompt'
      },
      answer: '',
      explanation: {
        ru: 'Чем меньше контекста в запросе, тем сильнее проявляется дефолтный стиль конкретной модели. Чёткий промпт сближает ответы разных моделей, размытый — разводит. Маленькая модель не "хуже" — она кодирует менее детализированную карту связей между токенами, поэтому отвечает компактнее.',
        en: 'The less context in the prompt, the more each model\'s default style shows through. A precise prompt makes different models converge; a vague one makes them diverge. A smaller model is not "worse" — it encodes a less detailed map of token relationships, so it responds more concisely.'
      },
      scenario: {
        brief: {
          ru: 'Откройте Prompt Lab (Лаборатории → Сравнение промптов). Введите незавершённую фразу «американцы это» без системного промпта. Выберите модель A — Llama 3.3 70B, модель B — Llama 4 Scout 17B. Нажмите «Сравнить» и изучите результаты: текст ответов, количество токенов и латентность. Теперь выберите стратегию для продакшна.',
          en: 'Open the Prompt Lab (Labs → Prompt Compare). Enter the incomplete phrase "americans are" with no system prompt. Pick model A — Llama 3.3 70B, model B — Llama 4 Scout 17B. Hit "Compare" and study the results: response text, token counts, and latency. Now choose a production strategy.'
        },
        constraints: [
          { ru: 'Вы платите $0.05 за 1K выходных токенов', en: 'You pay $0.05 per 1K output tokens' },
          { ru: 'SLA требует ответ за < 2 секунды', en: 'SLA requires response in < 2 seconds' },
          { ru: 'Задача — классифицировать входящие сообщения в чате поддержки (короткие ответы)', en: 'Task — classify incoming support chat messages (short answers needed)' }
        ],
        choices: [
          {
            text: { ru: 'Всегда использовать большую модель (70B) — она умнее и даёт более полные ответы', en: 'Always use the larger model (70B) — it is smarter and gives more complete answers' },
            outcome: { ru: 'Для классификации развёрнутый ответ не нужен. Вы переплачиваете за токены и рискуете не вписаться в SLA по латентности. "Больше" не значит "лучше" для каждой задачи.', en: 'Classification does not need verbose responses. You overpay for tokens and risk missing the latency SLA. "Bigger" does not mean "better" for every task.' },
            score: 20,
            tags: ['cost', 'latency']
          },
          {
            text: { ru: 'Всегда использовать маленькую модель (17B) — она дешевле и быстрее', en: 'Always use the smaller model (17B) — it is cheaper and faster' },
            outcome: { ru: 'Для простой классификации это разумно, но "всегда" — опасное слово. Есть задачи (суммаризация, анализ), где маленькая модель упустит нюансы. Стратегия должна зависеть от задачи.', en: 'For simple classification this is reasonable, but "always" is a dangerous word. There are tasks (summarization, analysis) where the small model will miss nuances. Strategy should depend on the task.' },
            score: 55,
            tags: ['cost', 'quality']
          },
          {
            text: { ru: 'Разделить: маленькая модель для классификации и коротких ответов, большая — для сложных задач с анализом', en: 'Split: small model for classification and short answers, large model for complex analytical tasks' },
            outcome: { ru: 'Верная стратегия. Вы видели в эксперименте, что модели по-разному реагируют на один промпт. Маленькая модель экономит токены и время на простых задачах. Большая нужна там, где важна глубина и структура. Это называется model routing.', en: 'Correct strategy. You saw in the experiment that models react differently to the same prompt. The small model saves tokens and time on simple tasks. The large one is needed where depth and structure matter. This is called model routing.' },
            score: 95,
            tags: ['cost', 'quality', 'latency']
          },
          {
            text: { ru: 'Не важно какую модель выбрать — они дают одинаковые ответы на одинаковый промпт', en: 'It does not matter which model to choose — they give identical answers to the same prompt' },
            outcome: { ru: 'Вы только что видели в эксперименте, что это не так. Одинаковый промпт порождает разные ответы у моделей разного размера — по объёму, стилю и скорости. Модель не копирует шаблон, а генерирует продолжение на основе своих весов.', en: 'You just saw in the experiment that this is not true. The same prompt produces different responses from different-sized models — in length, style, and speed. The model does not copy a template; it generates a continuation based on its weights.' },
            score: 5,
            tags: ['quality']
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 10,
      type: 'multiple-choice',
      question: {
        ru: 'Вы ввели незавершённую фразу в LLM и получили развёрнутый текст без ссылок на источники. Что на самом деле сделала модель?',
        en: 'You entered an incomplete phrase into an LLM and received a detailed text with no source references. What did the model actually do?'
      },
      options: [
        { ru: 'Нашла релевантную статью в своей базе данных и процитировала её', en: 'Found a relevant article in its database and quoted it' },
        { ru: 'Сгенерировала наиболее вероятное продолжение на основе паттернов, усвоенных при обучении', en: 'Generated the most probable continuation based on patterns learned during training' },
        { ru: 'Отправила запрос в поисковую систему и пересказала результат', en: 'Sent a query to a search engine and paraphrased the result' },
        { ru: 'Скопировала ответ из обучающего набора данных', en: 'Copied the answer from the training dataset' }
      ],
      answer: {
        ru: 'Сгенерировала наиболее вероятное продолжение на основе паттернов, усвоенных при обучении',
        en: 'Generated the most probable continuation based on patterns learned during training'
      },
      explanation: {
        ru: 'Модель — это функция продолжения, а не база данных и не поисковик. Она не хранит статьи и не ищет информацию. Незаконченная фраза — это просто последовательность токенов, для которой модель вычисляет наиболее вероятное продолжение на основе весов, усвоенных при обучении на больших текстовых корпусах.',
        en: 'A model is a continuation function, not a database or a search engine. It does not store articles or look up information. An incomplete phrase is just a token sequence for which the model computes the most probable continuation based on weights learned from large text corpora during training.'
      }
    },
    {
      id: 11,
      type: 'categorize',
      question: {
        ru: 'Разделите сущности по их роли в процессе обработки текста моделью.',
        en: 'Categorize entities by their role in the model text-processing flow.'
      },
      answer: '',
      explanation: {
        ru: 'Токены — это то, что видит модель. Позиции — это порядок слов. Внимание (Attention) — это связи между словами.',
        en: 'Tokens are what the model sees. Positions define word order. Attention handles relationships between words.'
      },
      categorize: {
        items: [
          { ru: 'BPE-фрагменты', en: 'BPE fragments' },
          { ru: 'Синусоидальные метки', en: 'Sinusoidal labels' },
          { ru: 'Матрица Q, K, V', en: 'Q, K, V matrices' },
          { ru: 'Словарный индекс', en: 'Vocabulary index' },
          { ru: 'Порядковый номер в окне', en: 'Context window index' },
          { ru: 'Веса значимости связей', en: 'Significance weights' }
        ],
        buckets: [
          { ru: 'Токены (Tokens)', en: 'Tokens' },
          { ru: 'Позиции (Positions)', en: 'Positions' },
          { ru: 'Внимание (Attention)', en: 'Attention' }
        ],
        correctMapping: {
          'BPE-фрагменты': 'Токены (Tokens)',
          'BPE fragments': 'Tokens',
          'Словарный индекс': 'Токены (Tokens)',
          'Vocabulary index': 'Tokens',
          'Синусоидальные метки': 'Позиции (Positions)',
          'Sinusoidal labels': 'Positions',
          'Порядковый номер в окне': 'Позиции (Positions)',
          'Context window index': 'Positions',
          'Матрица Q, K, V': 'Внимание (Attention)',
          'Q, K, V matrices': 'Attention',
          'Веса значимости связей': 'Внимание (Attention)',
          'Significance weights': 'Attention'
        }
      }
    },
    {
      id: 12,
      type: 'sorting',
      question: {
        ru: 'Упорядочите стратегии генерации от самой предсказуемой (детерминированной) к самой случайной.',
        en: 'Order generation strategies from most predictable (deterministic) to most random.'
      },
      initialItems: [
        { ru: 'Sampling (T=1.5)', en: 'Sampling (T=1.5)' },
        { ru: 'Greedy Search (T=0)', en: 'Greedy Search (T=0)' },
        { ru: 'Sampling (T=0.7)', en: 'Sampling (T=0.7)' },
        { ru: 'Beam Search (k=5)', en: 'Beam Search (k=5)' }
      ],
      correctOrder: [
        { ru: 'Greedy Search (T=0)', en: 'Greedy Search (T=0)' },
        { ru: 'Beam Search (k=5)', en: 'Beam Search (k=5)' },
        { ru: 'Sampling (T=0.7)', en: 'Sampling (T=0.7)' },
        { ru: 'Sampling (T=1.5)', en: 'Sampling (T=1.5)' }
      ],
      answer: '',
      explanation: {
        ru: 'При T=0 модель всегда выбирает топ-1 вариант. Beam Search ищет несколько путей. Высокая температура размывает вероятности, делая выбор почти случайным.',
        en: 'At T=0, the model always picks the top-1 option. Beam Search explores multiple paths. High temperature flattens probabilities, making the choice nearly random.'
      }
    },
    {
      id: 13,
      type: 'scenario',
      question: {
        ru: 'Миссия: Борьба с зацикливанием (Repetition Penalty)',
        en: 'Mission: Fighting Loops (Repetition Penalty)'
      },
      answer: '',
      explanation: {
        ru: 'Если модель зацикливается, увеличение штрафа за повторы (Repetition Penalty) заставляет её искать новые токены, снижая логиты уже использованных слов.',
        en: 'If a model gets stuck in a loop, increasing Repetition Penalty forces it to find new tokens by lowering the logits of already used words.'
      },
      scenario: {
        brief: {
          ru: 'Ваш чат-бот для техподдержки при ответе на длинные вопросы начинает повторять одну и ту же фразу "Я понимаю вашу проблему, я понимаю вашу проблему...". Температура уже стоит 0.2. Что измените в настройках?',
          en: 'Your support chatbot starts repeating the same phrase "I understand your problem, I understand your problem..." when answering long queries. Temperature is already set to 0.2. What do you change in the settings?'
        },
        constraints: [
          { ru: 'Нельзя сильно повышать температуру (нужна точность)', en: 'Cannot raise temperature significantly (need precision)' },
          { ru: 'Нужно прервать бесконечный цикл', en: 'Must break the infinite loop' }
        ],
        choices: [
          {
            text: { ru: 'Поставить T=1.2', en: 'Set T=1.2' },
            outcome: {
              ru: 'Цикл прерван, но бот начал нести бред и путать факты. Пользователи недовольны качеством поддержки.',
              en: 'Loop broken, but the bot started hallucinating and mixing up facts. Users are unhappy with support quality.'
            },
            score: 30
          },
          {
            text: { ru: 'Включить Repetition Penalty = 1.1 и снизить Top-P до 0.9.', en: 'Enable Repetition Penalty = 1.1 and lower Top-P to 0.9.' },
            outcome: {
              ru: 'Идеально! Штраф за повторы "выталкивает" модель из цикла, а ограничение Top-P отсекает совсем маловероятные и странные слова.',
              en: 'Perfect! Repetition penalty pushes the model out of the loop, while Top-P filtering cuts off highly improbable and weird tokens.'
            },
            score: 95
          },
          {
            text: { ru: 'Увеличить размер контекстного окна в 2 раза.', en: 'Double the context window size.' },
            outcome: {
              ru: 'Это никак не поможет против зацикливания, зато увеличит стоимость каждого запроса. Ошибка в архитектуре решения.',
              en: 'This does nothing against looping but increases the cost per query. Architectural mistake.'
            },
            score: 10
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 14,
      type: 'timeline',
      question: {
        ru: 'Эволюция контекстного окна в популярных моделях.',
        en: 'Evolution of context windows in popular models.'
      },
      answer: '',
      explanation: {
        ru: 'Размер "памяти" LLM вырос от нескольких страниц текста до целых библиотек всего за 5 лет.',
        en: 'LLM "memory" size grew from a few text pages to entire libraries in just 5 years.'
      },
      timeline: {
        events: [
          { label: { ru: 'GPT-2: 1024 токена', en: 'GPT-2: 1024 tokens' }, year: '2019' },
          { label: { ru: 'GPT-3: 2048 токенов', en: 'GPT-3: 2048 tokens' }, year: '2020' },
          { label: { ru: 'Claude 2: 100k токенов', en: 'Claude 2: 100k tokens' }, year: '2023' },
          { label: { ru: 'Gemini 1.5: 1M+ токенов', en: 'Gemini 1.5: 1M+ tokens' }, year: '2024' }
        ],
        correctOrder: [
          { ru: 'GPT-2: 1024 токена', en: 'GPT-2: 1024 tokens' },
          { ru: 'GPT-3: 2048 токенов', en: 'GPT-3: 2048 tokens' },
          { ru: 'Claude 2: 100k токенов', en: 'Claude 2: 100k tokens' },
          { ru: 'Gemini 1.5: 1M+ токенов', en: 'Gemini 1.5: 1M+ tokens' }
        ]
      }
    }
  ];
