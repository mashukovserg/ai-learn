import { LocalizedTask } from '../types';

export const taxonomyMatchingTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему точное строковое сравнение плохо подходит для сопоставления вакансий с профессиями?',
      en: 'Why is exact string comparison a poor fit for matching vacancies to professions?',
    },
    options: [
      {
        ru: 'Названия «многие к одному», зашумлены и на другом языке, поэтому побуквенных совпадений почти не бывает.',
        en: 'Titles are many-to-one, noisy, and in another language, so character-identical matches almost never occur.',
      },
      {
        ru: 'Потому что в справочнике слишком мало профессий.',
        en: 'Because the catalog has too few professions.',
      },
      {
        ru: 'Потому что у вакансий вообще нет названий должностей.',
        en: 'Because vacancies have no job titles at all.',
      },
    ],
    answer: {
      ru: 'Названия «многие к одному», зашумлены и на другом языке, поэтому побуквенных совпадений почти не бывает.',
      en: 'Titles are many-to-one, noisy, and in another language, so character-identical matches almost never occur.',
    },
    explanation: {
      ru: 'Верно. Десятки написаний сводятся к одной профессии, тексты зашумлены грейдом и локацией, а вакансии и справочник на разных языках — точное сравнение почти всегда даёт ноль.',
      en: 'Correct. Dozens of spellings collapse to one profession, texts are noisy with grade and location, and vacancies and catalog are in different languages — exact comparison almost always returns zero.',
    },
  },
  {
    id: 2,
    type: 'multiple-select',
    question: {
      ru: 'Почему высокая доля «нет совпадения» для этого справочника — нормальный результат? Выберите все верные причины.',
      en: 'Why is a high "no-match" rate for this catalog a normal result? Select all that apply.',
    },
    options: [
      {
        ru: 'Справочник узкий и кураторский, поэтому массовые вакансии не сопоставляются ни с чем.',
        en: 'The catalog is narrow and curated, so mass-market vacancies match nothing.',
      },
      {
        ru: 'Покрытие измеряют на золотом наборе, а не обещают заранее.',
        en: 'Coverage is measured on a gold set, not promised in advance.',
      },
      {
        ru: 'Вакансии вне таксономии кладут в явный бакет «нет совпадения».',
        en: 'Out-of-taxonomy vacancies go into an explicit no-match bucket.',
      },
      {
        ru: 'Высокая доля «нет совпадения» всегда означает, что матчер сломан.',
        en: 'A high no-match rate always means the matcher is broken.',
      },
    ],
    answer: [
      {
        ru: 'Справочник узкий и кураторский, поэтому массовые вакансии не сопоставляются ни с чем.',
        en: 'The catalog is narrow and curated, so mass-market vacancies match nothing.',
      },
      {
        ru: 'Покрытие измеряют на золотом наборе, а не обещают заранее.',
        en: 'Coverage is measured on a gold set, not promised in advance.',
      },
      {
        ru: 'Вакансии вне таксономии кладут в явный бакет «нет совпадения».',
        en: 'Out-of-taxonomy vacancies go into an explicit no-match bucket.',
      },
    ],
    explanation: {
      ru: 'Узкий приоритетный справочник по определению оставляет массовый рынок (водители, официанты, продавцы) без пары. Правильность мерят точностью на совпавших, а не сырым покрытием.',
      en: 'A narrow, curated catalog by definition leaves the mass market (drivers, waiters, sales clerks) unpaired. Correctness is judged by precision on matched pairs, not by raw coverage.',
    },
  },
  {
    id: 3,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите слои каскада матчинга в порядке «дёшево → точно».',
      en: 'Order the matching cascade layers from "cheap → precise".',
    },
    initialItems: [
      { ru: 'Семантический поиск на эмбеддингах', en: 'Semantic retrieval with embeddings' },
      { ru: 'Нормализация названий', en: 'Normalize the titles' },
      { ru: 'Оценка на золотом наборе', en: 'Evaluate on a gold set' },
      { ru: 'Лексический матч (exact / fuzzy / alias)', en: 'Lexical match (exact / fuzzy / alias)' },
      { ru: 'LLM-адъюдикация спорного диапазона', en: 'LLM adjudication of the ambiguous band' },
    ],
    correctOrder: [
      { ru: 'Нормализация названий', en: 'Normalize the titles' },
      { ru: 'Лексический матч (exact / fuzzy / alias)', en: 'Lexical match (exact / fuzzy / alias)' },
      { ru: 'Семантический поиск на эмбеддингах', en: 'Semantic retrieval with embeddings' },
      { ru: 'LLM-адъюдикация спорного диапазона', en: 'LLM adjudication of the ambiguous band' },
      { ru: 'Оценка на золотом наборе', en: 'Evaluate on a gold set' },
    ],
    explanation: {
      ru: 'Сначала дешёвая нормализация, затем быстрая точная лексика, затем широкая семантика, дорогая LLM — только для хвоста, и в конце оценка на золотом наборе.',
      en: 'First cheap normalization, then fast precise lexical, then broad semantic, the expensive LLM only for the tail, and finally evaluation on the gold set.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Отнесите каждый приём к слою: лексическому или семантическому.',
      en: 'Assign each technique to its layer: lexical or semantic.',
    },
    answer: '',
    explanation: {
      ru: 'Лексика сравнивает символы и слова (exact, fuzzy, alias). Семантика сравнивает смысл через эмбеддинги, cosine similarity и top-K поиск.',
      en: 'Lexical compares characters and words (exact, fuzzy, alias). Semantic compares meaning via embeddings, cosine similarity, and top-K retrieval.',
    },
    categorize: {
      buckets: [
        { ru: 'Лексический', en: 'Lexical' },
        { ru: 'Семантический', en: 'Semantic' },
      ],
      items: [
        { ru: 'Точное совпадение', en: 'Exact match' },
        { ru: 'Нечёткое совпадение (rapidfuzz)', en: 'Fuzzy match (rapidfuzz)' },
        { ru: 'Совпадение по алиасам', en: 'Alias match' },
        { ru: 'Косинусное сходство', en: 'Cosine similarity' },
        { ru: 'Мультиязычные эмбеддинги', en: 'Multilingual embeddings' },
        { ru: 'Поиск top-K кандидатов', en: 'Top-K retrieval' },
      ],
      correctMapping: {
        'Exact match': 'Lexical',
        'Fuzzy match (rapidfuzz)': 'Lexical',
        'Alias match': 'Lexical',
        'Cosine similarity': 'Semantic',
        'Multilingual embeddings': 'Semantic',
        'Top-K retrieval': 'Semantic',
      },
    },
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Что решает мультиязычная модель эмбеддингов в этой задаче?',
      en: 'What does a multilingual embedding model solve in this task?',
    },
    options: [
      {
        ru: 'Кладёт разные языки в одно векторное пространство, поэтому русская профессия и английская вакансия сравниваются напрямую, без перевода.',
        en: 'It places different languages in one vector space, so a Russian profession and an English vacancy compare directly, without translation.',
      },
      {
        ru: 'Сначала переводит каждую вакансию на русский язык.',
        en: 'It first translates every vacancy into Russian.',
      },
      {
        ru: 'Убирает необходимость в пороге близости.',
        en: 'It removes the need for a similarity threshold.',
      },
    ],
    answer: {
      ru: 'Кладёт разные языки в одно векторное пространство, поэтому русская профессия и английская вакансия сравниваются напрямую, без перевода.',
      en: 'It places different languages in one vector space, so a Russian profession and an English vacancy compare directly, without translation.',
    },
    explanation: {
      ru: 'Именно так. Модели вроде LaBSE или multilingual-e5 держат RU и EN в общем пространстве, поэтому машинный перевод не нужен — сравнение идёт по смыслу.',
      en: 'Exactly. Models like LaBSE or multilingual-e5 keep RU and EN in a shared space, so machine translation is unnecessary — comparison happens by meaning.',
    },
  },
  {
    id: 6,
    type: 'input',
    question: {
      ru: 'Введите название Python-библиотеки для нечёткого (fuzzy) сравнения строк, которую использует лексический слой.',
      en: 'Enter the name of the Python library for fuzzy string matching used by the lexical layer.',
    },
    answer: ['rapidfuzz'],
    hint: {
      ru: 'Упоминается в главе 3; «быстрое» нечёткое сравнение.',
      en: 'Mentioned in Chapter 3; "rapid" fuzzy matching.',
    },
    explanation: {
      ru: 'Верно. rapidfuzz даёт нечёткое совпадение, прощающее опечатки и мелкие различия, — основа лексического слоя вместе с exact и alias матчем.',
      en: 'Correct. rapidfuzz provides fuzzy matching that forgives typos and small differences — the backbone of the lexical layer alongside exact and alias match.',
    },
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Классифицируйте теги из вакансий: навык, роль или инструмент.',
      en: 'Classify the vacancy tags: skill, role, or tool.',
    },
    answer: '',
    explanation: {
      ru: 'Навыки — что человек умеет (financial reporting, food safety); роли — название должности (accountant, sales representative); инструменты — конкретные программы (AutoCAD, Excel).',
      en: 'Skills are what a person can do (financial reporting, food safety); roles are the job title (accountant, sales representative); tools are specific software (AutoCAD, Excel).',
    },
    categorize: {
      buckets: [
        { ru: 'Навык', en: 'Skill' },
        { ru: 'Роль', en: 'Role' },
        { ru: 'Инструмент', en: 'Tool' },
      ],
      items: [
        { ru: 'financial reporting', en: 'financial reporting' },
        { ru: 'food safety', en: 'food safety' },
        { ru: 'accountant', en: 'accountant' },
        { ru: 'sales representative', en: 'sales representative' },
        { ru: 'AutoCAD', en: 'AutoCAD' },
        { ru: 'Excel', en: 'Excel' },
      ],
      correctMapping: {
        'financial reporting': 'Skill',
        'food safety': 'Skill',
        'accountant': 'Role',
        'sales representative': 'Role',
        'AutoCAD': 'Tool',
        'Excel': 'Tool',
      },
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать стратегию матчинга для арабо/англоязычного портала рынка труда',
      en: 'Mission: choose the matching strategy for a labor-market portal',
    },
    answer: '',
    explanation: {
      ru: 'При ограничениях «точность прежде всего» и «только офлайн» выигрывает локальный каскад: лексика плюс мультиязычные эмбеддинги, авто-присвоение только выше высокого порога.',
      en: 'Under precision-first and offline-only constraints, the local cascade wins: lexical plus multilingual embeddings, auto-assign only above a high threshold.',
    },
    scenario: {
      brief: {
        ru: 'Нужно сопоставить англоязычные вакансии с русским справочником из 154 профессий. Требования: точность прежде всего (precision-first) и работа только офлайн — внешние API запрещены политикой данных.',
        en: 'You must match English vacancies to a Russian catalog of 154 professions. Requirements: precision-first, and offline only — external APIs are forbidden by data policy.',
      },
      constraints: [
        { ru: 'Внешние API запрещены (только локально)', en: 'External APIs forbidden (local only)' },
        { ru: 'Точность важнее охвата', en: 'Precision matters more than coverage' },
      ],
      choices: [
        {
          text: {
            ru: 'Локальные мультиязычные эмбеддинги + лексический каскад; авто-присвоение только выше высокого порога, остальное — в no-match или на ревью.',
            en: 'Local multilingual embeddings + a lexical cascade; auto-assign only above a high threshold, the rest to no-match or review.',
          },
          outcome: {
            ru: 'Верно. Каскад локален (офлайн соблюдён), высокий порог держит точность, кросс-язык решают мультиязычные эмбеддинги без перевода.',
            en: 'Correct. The cascade is local (offline respected), the high threshold keeps precision, and multilingual embeddings handle cross-language without translation.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Просто нечётко (fuzzy) сопоставить каждое название с ближайшей профессией и принять лучший вариант без порога.',
            en: 'Just fuzzy-match every title to the nearest profession and accept the best option with no threshold.',
          },
          outcome: {
            ru: 'Точность рухнет: без порога каждой вакансии, включая внетаксономические, припишут профессию, а кросс-язык лексика вообще не поймает.',
            en: 'Precision collapses: with no threshold every vacancy, including out-of-taxonomy ones, gets a profession, and lexical matching misses cross-language entirely.',
          },
          score: 20,
        },
        {
          text: {
            ru: 'Отправлять каждую вакансию во внешний облачный LLM-API для перевода и матчинга.',
            en: 'Send every vacancy to an external cloud LLM API to translate and match.',
          },
          outcome: {
            ru: 'Нарушает ключевое ограничение: внешние API запрещены. Технически возможно, но противоречит политике данных портала.',
            en: 'Violates the key constraint: external APIs are forbidden. Technically possible, but against the portal\'s data policy.',
          },
          score: 15,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Коллега: «покрытие всего 30%, матчер сломан». Что ответить?',
      en: 'A colleague: "coverage is only 30%, the matcher is broken." What is the right reply?',
    },
    answer: '',
    explanation: {
      ru: 'Для узкого кураторского справочника низкое покрытие ожидаемо. Оценивать надо точность на золотом наборе среди совпавших, а не сырое покрытие; занижать пороги ради цифры вредно.',
      en: 'For a narrow curated catalog, low coverage is expected. Judge precision on the gold set among matched pairs, not raw coverage; lowering thresholds to inflate the number is harmful.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега смотрит на отчёт: сопоставилось только 30% вакансий, и делает вывод, что пайплайн не работает. Как ответите?',
        en: 'A colleague looks at the report: only 30% of vacancies matched, and concludes the pipeline is failing. How do you respond?',
      },
      userOptions: [
        {
          text: {
            ru: 'Согласиться: 30% — это провал, надо занизить все пороги, чтобы совпадений стало больше.',
            en: 'Agree: 30% is a failure, lower all thresholds so more matches appear.',
          },
          reaction: {
            ru: 'Занижение порога поднимет покрытие, но обрушит точность: появятся ложные пары, включая внетаксономические вакансии. Это противоречит стратегии precision-first.',
            en: 'Lowering the threshold raises coverage but wrecks precision: false pairs appear, including out-of-taxonomy vacancies. That contradicts the precision-first strategy.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Объяснить: узкий справочник закономерно оставляет массовые вакансии без пары; судить надо по точности на золотом наборе, а не по сырому покрытию.',
            en: 'Explain: a narrow catalog naturally leaves mass-market vacancies unpaired; judge by precision on the gold set, not by raw coverage.',
          },
          reaction: {
            ru: 'Точно. 30% может быть здоровым результатом, если среди совпавших точность высокая. Сырое покрытие само по себе ничего не говорит о качестве.',
            en: 'Exactly. 30% can be a healthy result if precision among matched pairs is high. Raw coverage alone says nothing about quality.',
          },
          deepening: {
            ru: 'Реалистичное покрытие такого справочника — грубо 20–40%. Ключевой вопрос не «сколько совпало», а «сколько из совпавших верно» — это меряет золотой набор.',
            en: 'Realistic coverage for such a catalog is roughly 20–40%. The key question is not "how many matched" but "how many of the matches are correct" — which the gold set measures.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Немедленно перевести весь матчинг на самый большой LLM для каждой вакансии.',
            en: 'Immediately switch the whole matching to the biggest LLM for every vacancy.',
          },
          reaction: {
            ru: 'Дорого и не по адресу: проблема не в слабости моделей, а в узости справочника. LLM применяют только к спорному хвосту, а не ко всему потоку.',
            en: 'Expensive and off-target: the issue is not weak models but a narrow catalog. The LLM is applied only to the ambiguous tail, not the whole stream.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Что входит в выход матчера и его оценку? Выберите все верные пункты.',
      en: 'What belongs in the matcher\'s output and evaluation? Select all that apply.',
    },
    options: [
      {
        ru: 'Золотой набор размеченных вручную пар для измерения precision и recall.',
        en: 'A gold set of hand-labeled pairs to measure precision and recall.',
      },
      {
        ru: 'Явный бакет «нет совпадения» для внетаксономических вакансий.',
        en: 'An explicit no-match bucket for out-of-taxonomy vacancies.',
      },
      {
        ru: 'Метод совпадения (lexical / semantic / llm) для каждой вакансии.',
        en: 'The match method (lexical / semantic / llm) for each vacancy.',
      },
      {
        ru: 'Гарантия, что каждая вакансия получит профессию.',
        en: 'A guarantee that every vacancy receives a profession.',
      },
    ],
    answer: [
      {
        ru: 'Золотой набор размеченных вручную пар для измерения precision и recall.',
        en: 'A gold set of hand-labeled pairs to measure precision and recall.',
      },
      {
        ru: 'Явный бакет «нет совпадения» для внетаксономических вакансий.',
        en: 'An explicit no-match bucket for out-of-taxonomy vacancies.',
      },
      {
        ru: 'Метод совпадения (lexical / semantic / llm) для каждой вакансии.',
        en: 'The match method (lexical / semantic / llm) for each vacancy.',
      },
    ],
    explanation: {
      ru: 'Правильные три: золотой набор, бакет no-match и метка метода (плюс runner-up для ревью). Гарантия совпадения для каждой вакансии противоречит идее no-match.',
      en: 'The correct three: a gold set, a no-match bucket, and a method label (plus a runner-up for review). Guaranteeing a match for every vacancy contradicts the no-match idea.',
    },
  },
];
