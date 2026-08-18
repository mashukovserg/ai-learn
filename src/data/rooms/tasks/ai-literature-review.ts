import { LocalizedTask } from '../types';

export const aiLiteratureReviewTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Какой новый класс ошибок ИИ добавляет в литературный обзор и делает центральным риском?',
      en: 'What new class of error does AI add to a literature review, making it the central risk?',
    },
    options: [
      {
        ru: 'Галлюцинированные ссылки — безупречно отформатированные цитаты на статьи, которых не существует.',
        en: 'Hallucinated references — flawlessly formatted citations to papers that do not exist.',
      },
      {
        ru: 'Слишком медленный поиск по базам данных.',
        en: 'Searching databases too slowly.',
      },
      {
        ru: 'Невозможность прочитать аннотацию статьи.',
        en: 'An inability to read a paper\'s abstract.',
      },
    ],
    answer: {
      ru: 'Галлюцинированные ссылки — безупречно отформатированные цитаты на статьи, которых не существует.',
      en: 'Hallucinated references — flawlessly formatted citations to papers that do not exist.',
    },
    explanation: {
      ru: 'Верно. Модель ускоряет поиск, но может выдумать правдоподобную ссылку с реальным автором и валидным на вид DOI для несуществующей работы. Опасна именно внешняя безупречность.',
      en: 'Correct. The model speeds up search but can fabricate a plausible reference with a real author and a valid-looking DOI for a nonexistent work. The surface perfection is exactly what makes it dangerous.',
    },
  },
  {
    id: 2,
    type: 'multiple-select',
    question: {
      ru: 'Какие признаки указывают, что ссылку могли галлюцинировать? Выберите все верные.',
      en: 'Which signs suggest a citation may be hallucinated? Select all that apply.',
    },
    options: [
      {
        ru: 'DOI не разрешается или ведёт к совсем другой статье.',
        en: 'The DOI does not resolve or points to a different article.',
      },
      {
        ru: 'Журнал и год публикации не сходятся между собой.',
        en: 'The venue and publication year do not match.',
      },
      {
        ru: 'Цитируемое утверждение не удаётся найти в самом тексте статьи.',
        en: 'The quoted claim cannot be found in the actual text of the paper.',
      },
      {
        ru: 'Статья опубликована раньше 2020 года.',
        en: 'The paper was published before 2020.',
      },
    ],
    answer: [
      {
        ru: 'DOI не разрешается или ведёт к совсем другой статье.',
        en: 'The DOI does not resolve or points to a different article.',
      },
      {
        ru: 'Журнал и год публикации не сходятся между собой.',
        en: 'The venue and publication year do not match.',
      },
      {
        ru: 'Цитируемое утверждение не удаётся найти в самом тексте статьи.',
        en: 'The quoted claim cannot be found in the actual text of the paper.',
      },
    ],
    explanation: {
      ru: 'Первые три — классические красные флаги из главы 4. Возраст статьи сам по себе ни о чём не говорит: старая работа может быть абсолютно настоящей.',
      en: 'The first three are the classic red flags from Chapter 4. A paper\'s age alone means nothing: an old work can be perfectly real.',
    },
  },
  {
    id: 3,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите шаги строгого обзора в правильном порядке — от постановки вопроса к синтезу.',
      en: 'Order the steps of a rigorous review correctly — from framing the question to synthesis.',
    },
    initialItems: [
      { ru: 'Проверить существование каждой ссылки', en: 'Verify each citation exists' },
      { ru: 'Сформулировать точный вопрос (PICO)', en: 'Frame a precise question (PICO)' },
      { ru: 'Записать критерии включения и исключения', en: 'Record inclusion and exclusion criteria' },
      { ru: 'Синтезировать доказательства в темы', en: 'Synthesize the evidence into themes' },
      { ru: 'Скрининг и дедупликация находок', en: 'Screen and deduplicate the hits' },
    ],
    correctOrder: [
      { ru: 'Сформулировать точный вопрос (PICO)', en: 'Frame a precise question (PICO)' },
      { ru: 'Записать критерии включения и исключения', en: 'Record inclusion and exclusion criteria' },
      { ru: 'Скрининг и дедупликация находок', en: 'Screen and deduplicate the hits' },
      { ru: 'Проверить существование каждой ссылки', en: 'Verify each citation exists' },
      { ru: 'Синтезировать доказательства в темы', en: 'Synthesize the evidence into themes' },
    ],
    explanation: {
      ru: 'Сначала точный вопрос, затем критерии до поиска, потом скрининг с дедупликацией, потом проверка ссылок и только в конце — синтез. Критерии обязательно фиксируют до того, как смотреть результаты.',
      en: 'First the precise question, then criteria before searching, then screening with deduplication, then citation verification, and synthesis only at the end. Criteria are always fixed before looking at results.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Что ИИ может черновить, а что обязан проверить человек? Разложите по двум корзинам.',
      en: 'What can AI draft, and what must a human verify? Sort into two buckets.',
    },
    answer: '',
    explanation: {
      ru: 'ИИ хорош в генерации черновиков: запросы, краткие пересказы аннотаций, наброски тем. Но существование ссылки, наличие цитаты в тексте и финальное решение о включении держит человек.',
      en: 'AI is good at drafting: queries, short abstract summaries, theme sketches. But a citation\'s existence, whether a quote is in the text, and the final inclusion decision stay with the human.',
    },
    categorize: {
      buckets: [
        { ru: 'ИИ может черновить', en: 'AI can draft' },
        { ru: 'Человек обязан проверить', en: 'Human must verify' },
      ],
      items: [
        { ru: 'Черновик поисковых запросов', en: 'Draft search queries' },
        { ru: 'Краткий пересказ аннотации', en: 'Summarize an abstract' },
        { ru: 'Наброски тем для синтеза', en: 'Suggest synthesis themes' },
        { ru: 'Существование DOI и статьи', en: 'That a DOI and paper exist' },
        { ru: 'Наличие цитаты в тексте', en: 'That a quote is in the text' },
        { ru: 'Финальное решение о включении', en: 'The final inclusion decision' },
      ],
      correctMapping: {
        'Draft search queries': 'AI can draft',
        'Summarize an abstract': 'AI can draft',
        'Suggest synthesis themes': 'AI can draft',
        'That a DOI and paper exist': 'Human must verify',
        'That a quote is in the text': 'Human must verify',
        'The final inclusion decision': 'Human must verify',
      },
    },
  },
  {
    id: 5,
    type: 'input',
    question: {
      ru: 'Введите пятибуквенную аббревиатуру стандарта отчётности о потоке отбора (идентификация → скрининг → приемлемость → включено).',
      en: 'Enter the five-letter acronym for the reporting standard for the selection flow (identification → screening → eligibility → included).',
    },
    answer: ['PRISMA'],
    hint: {
      ru: 'Глава 3; Preferred Reporting Items for Systematic Reviews and Meta-Analyses.',
      en: 'Chapter 3; Preferred Reporting Items for Systematic Reviews and Meta-Analyses.',
    },
    explanation: {
      ru: 'Верно. PRISMA описывает воронку отбора и сколько работ выбыло на каждом шаге, что делает обзор проверяемым.',
      en: 'Correct. PRISMA describes the selection funnel and how many works dropped at each step, making the review auditable.',
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем дедуплицировать находки перед скринингом?',
      en: 'Why deduplicate the hits before screening?',
    },
    options: [
      {
        ru: 'Разные базы возвращают одну статью с чуть разными метаданными; без дедупликации работу посчитают дважды и раздуют её вес в синтезе.',
        en: 'Different databases return one paper with slightly different metadata; without dedup the work is counted twice and its weight in the synthesis is inflated.',
      },
      {
        ru: 'Чтобы удалить все рецензируемые статьи и оставить только препринты.',
        en: 'To delete all peer-reviewed articles and keep only preprints.',
      },
      {
        ru: 'Чтобы гарантировать, что каждая найденная статья попадёт в итог.',
        en: 'To guarantee every found paper makes it into the final result.',
      },
    ],
    answer: {
      ru: 'Разные базы возвращают одну статью с чуть разными метаданными; без дедупликации работу посчитают дважды и раздуют её вес в синтезе.',
      en: 'Different databases return one paper with slightly different metadata; without dedup the work is counted twice and its weight in the synthesis is inflated.',
    },
    explanation: {
      ru: 'Именно так. Дедупликация сливает дубликаты, чтобы каждую работу просмотреть один раз и не завысить её влияние на выводы.',
      en: 'Exactly. Deduplication merges duplicates so each work is screened once and its influence on the conclusions is not overstated.',
    },
  },
  {
    id: 7,
    type: 'scenario',
    question: {
      ru: 'Миссия: агент вернул 200 находок, а до дедлайна два дня',
      en: 'Mission: the agent returned 200 hits and the deadline is two days away',
    },
    answer: '',
    explanation: {
      ru: 'Под давлением дедлайна выигрывает дисциплина процесса: дедупликация, двухпроходный скрининг по заранее записанным критериям и проверка каждой ссылки перед цитированием. Скорость ИИ не отменяет верификацию.',
      en: 'Under deadline pressure, process discipline wins: deduplication, two-pass screening against pre-recorded criteria, and verifying every citation before citing it. AI speed does not cancel verification.',
    },
    scenario: {
      brief: {
        ru: 'Поисковый агент выдал 200 находок по вашему вопросу. До сдачи обзора два дня. Соблазн — сразу вставить лучшие ссылки в текст. Что делать?',
        en: 'A search agent produced 200 hits for your question. The review is due in two days. The temptation is to paste the best references straight into the text. What do you do?',
      },
      constraints: [
        { ru: 'Точность и воспроизводимость важнее объёма', en: 'Accuracy and reproducibility matter more than volume' },
        { ru: 'Каждая ссылка в тексте должна существовать', en: 'Every citation in the text must exist' },
      ],
      choices: [
        {
          text: {
            ru: 'Дедуплицировать, прогнать двухпроходный скрининг по записанным критериям, проверить каждую оставшуюся ссылку и только потом синтезировать.',
            en: 'Deduplicate, run two-pass screening against the recorded criteria, verify each surviving citation, then synthesize.',
          },
          outcome: {
            ru: 'Верно. Это и есть протокол: воронка отбора сокращает 200 до управляемого числа, а проверка ссылок исключает «призраков» ещё до цитирования.',
            en: 'Correct. This is the protocol: the selection funnel cuts 200 down to a manageable number, and citation verification removes the ghosts before citing.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Вставить 40 самых релевантных ссылок как есть — они хорошо отформатированы, значит настоящие.',
            en: 'Paste the 40 most relevant references as-is — they are well formatted, so they must be real.',
          },
          outcome: {
            ru: 'Опасно: форматирование не доказывает существование. Часть ссылок может оказаться галлюцинированной, и обзор развалится на проверке.',
            en: 'Dangerous: formatting does not prove existence. Some references may be hallucinated, and the review collapses under scrutiny.',
          },
          score: 15,
        },
        {
          text: {
            ru: 'Занизить критерии, чтобы включить как можно больше из 200 и выглядеть исчерпывающе.',
            en: 'Loosen the criteria to include as many of the 200 as possible and look exhaustive.',
          },
          outcome: {
            ru: 'Это подрывает строгость: ошибочно включённые работы отравляют выводы, а критерии, переписанные под результат, ломают воспроизводимость.',
            en: 'This undermines rigor: wrongly included works poison the conclusions, and criteria rewritten to fit the result break reproducibility.',
          },
          score: 20,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Коллега: «ИИ выдал 40 идеально оформленных ссылок — вставим их в библиографию». Что ответить?',
      en: 'A colleague: "the AI gave us 40 perfectly formatted references — let\'s drop them into the bibliography." What is the right reply?',
    },
    answer: '',
    explanation: {
      ru: 'Идеальное форматирование не доказывает, что работа существует. Каждую ссылку нужно проверить — разрешить DOI, подтвердить издание, авторов и наличие цитаты — до попадания в список литературы.',
      en: 'Perfect formatting does not prove a work exists. Each reference must be verified — resolve the DOI, confirm the venue, authors, and the quote — before it enters the bibliography.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега радуется: ИИ вернул 40 аккуратно оформленных ссылок и предлагает сразу вставить их в библиографию. Как ответите?',
        en: 'A colleague is pleased: the AI returned 40 neatly formatted references and suggests pasting them straight into the bibliography. How do you respond?',
      },
      userOptions: [
        {
          text: {
            ru: 'Согласиться: раз оформлено аккуратно и по стандарту, значит ссылки настоящие.',
            en: 'Agree: since they are neatly formatted to the standard, the references must be real.',
          },
          reaction: {
            ru: 'Опасная логика. Именно безупречное оформление и делает галлюцинированную ссылку незаметной. Форматирование ничего не говорит о существовании работы.',
            en: 'Dangerous logic. It is precisely the flawless formatting that makes a hallucinated reference invisible. Formatting says nothing about whether the work exists.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Объяснить: прежде чем цитировать, проверим каждую ссылку — разрешим DOI, подтвердим издание, авторов и что цитата реально есть в тексте.',
            en: 'Explain: before citing, verify each reference — resolve the DOI, confirm the venue, the authors, and that the quote is really in the text.',
          },
          reaction: {
            ru: 'Точно. Правило простое: ни одна ссылка не попадает в список литературы, пока человек не подтвердил её существование и содержание.',
            en: 'Exactly. The rule is simple: no citation enters the bibliography until a human has confirmed its existence and content.',
          },
          deepening: {
            ru: 'На проверке можно поймать типичные дефекты: DOI ведёт в никуда, автор пришит к чужому названию, статья отозвана. Быстрая выборочная сверка на первых нескольких ссылках часто уже вскрывает проблему.',
            en: 'Verification catches the usual defects: a DOI leading nowhere, an author stitched to someone else\'s title, a retracted paper. A quick spot-check on the first few references often already exposes the problem.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Вставить все 40, а проверку отложить на «когда-нибудь после сдачи».',
            en: 'Paste all 40 now and postpone verification to "sometime after submission."',
          },
          reaction: {
            ru: 'Так «призраки» попадают прямо в опубликованный текст. Проверка ссылок — часть самого обзора, а не необязательный постскриптум.',
            en: 'That lets ghosts into the published text. Citation verification is part of the review itself, not an optional postscript.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Чем синтез отличается от простого пересказа статей?',
      en: 'How does synthesis differ from simply summarizing papers?',
    },
    options: [
      {
        ru: 'Синтез сравнивает работы между собой, группирует их в темы и показывает согласие и противоречие, а не пересказывает по одной.',
        en: 'Synthesis compares works against each other, groups them into themes, and shows agreement and conflict, rather than retelling one by one.',
      },
      {
        ru: 'Синтез — это просто более длинный пересказ каждой статьи по очереди.',
        en: 'Synthesis is just a longer retelling of each paper in turn.',
      },
      {
        ru: 'Синтез усредняет расходящиеся результаты в одно гладкое утверждение.',
        en: 'Synthesis averages diverging results into one smooth statement.',
      },
    ],
    answer: {
      ru: 'Синтез сравнивает работы между собой, группирует их в темы и показывает согласие и противоречие, а не пересказывает по одной.',
      en: 'Synthesis compares works against each other, groups them into themes, and shows agreement and conflict, rather than retelling one by one.',
    },
    explanation: {
      ru: 'Верно. Опора синтеза — таблица доказательств; расхождения показывают явно, а не усредняют, чтобы не переобещать.',
      en: 'Correct. Its backbone is an evidence table; disagreements are shown explicitly rather than averaged away, to avoid over-claiming.',
    },
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Что входит в журнал аудита воспроизводимого обзора? Выберите все верные пункты.',
      en: 'What belongs in the audit trail of a reproducible review? Select all that apply.',
    },
    options: [
      {
        ru: 'Поисковые запросы и даты, когда их выполняли.',
        en: 'The search queries and the dates they were run.',
      },
      {
        ru: 'Список опрошенных баз данных.',
        en: 'The list of databases queried.',
      },
      {
        ru: 'Решения о включении и исключении с причинами.',
        en: 'Inclusion and exclusion decisions with their reasons.',
      },
      {
        ru: 'Личное мнение рецензента о характере каждого автора.',
        en: 'The reviewer\'s personal opinion of each author\'s character.',
      },
    ],
    answer: [
      {
        ru: 'Поисковые запросы и даты, когда их выполняли.',
        en: 'The search queries and the dates they were run.',
      },
      {
        ru: 'Список опрошенных баз данных.',
        en: 'The list of databases queried.',
      },
      {
        ru: 'Решения о включении и исключении с причинами.',
        en: 'Inclusion and exclusion decisions with their reasons.',
      },
    ],
    explanation: {
      ru: 'Первые три (плюс статус проверки каждой ссылки) делают обзор воспроизводимым. Личные оценки авторов к журналу аудита не относятся.',
      en: 'The first three (plus each citation\'s verification status) make the review reproducible. Personal judgments of authors do not belong in the audit trail.',
    },
  },
  {
    id: 11,
    type: 'sorting',
    question: {
      ru: 'Восстановите порядок шести стадий систематического обзора.',
      en: 'Reconstruct the order of the six stages of a systematic review.',
    },
    initialItems: [
      { ru: 'Скрининг по критериям включения', en: 'Screening by inclusion criteria' },
      { ru: 'Планирование: вопросы и протокол', en: 'Planning: questions and protocol' },
      { ru: 'Отчёт о результатах', en: 'Reporting the findings' },
      { ru: 'Поиск: запросы и снежный ком', en: 'Search: queries and snowballing' },
      { ru: 'Оценка качества исследований', en: 'Quality assessment of the studies' },
      { ru: 'Извлечение и синтез данных', en: 'Data extraction and synthesis' },
    ],
    correctOrder: [
      { ru: 'Планирование: вопросы и протокол', en: 'Planning: questions and protocol' },
      { ru: 'Поиск: запросы и снежный ком', en: 'Search: queries and snowballing' },
      { ru: 'Скрининг по критериям включения', en: 'Screening by inclusion criteria' },
      { ru: 'Извлечение и синтез данных', en: 'Data extraction and synthesis' },
      { ru: 'Оценка качества исследований', en: 'Quality assessment of the studies' },
      { ru: 'Отчёт о результатах', en: 'Reporting the findings' },
    ],
    answer: '',
    explanation: {
      ru: 'Планирование → поиск → скрининг → извлечение и синтез → оценка качества → отчёт. Заранее зафиксированный порядок и протокол — то, что отличает систематический обзор от обычного.',
      en: 'Planning → search → screening → extraction and synthesis → quality assessment → reporting. The pre-registered order and protocol are what distinguish a systematic review from an ordinary one.',
    },
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: {
      ru: 'На какой стадии систематического обзора сегодня сосредоточен почти весь ИИ?',
      en: 'Which stage of the systematic review concentrates nearly all the AI today?',
    },
    options: [
      { ru: 'Планирование: модели формулируют исследовательские вопросы', en: 'Planning: models formulate the research questions' },
      { ru: 'Скрининг: классификаторы ранжируют статьи по вероятной релевантности', en: 'Screening: classifiers rank papers by likely relevance' },
      { ru: 'Оценка качества: модели проверяют строгость методологии статей', en: 'Quality assessment: models check the methodological rigor of papers' },
      { ru: 'Отчёт: модели автоматически пишут финальный текст обзора', en: 'Reporting: models automatically write the final review text' },
    ],
    answer: {
      ru: 'Скрининг: классификаторы ранжируют статьи по вероятной релевантности',
      en: 'Screening: classifiers rank papers by likely relevance',
    },
    explanation: {
      ru: 'Из 21 инструмента в обзоре 19 применяют ИИ именно к скринингу и лишь 4 — к извлечению данных. Планирование, оценка качества и отчёт почти не автоматизированы.',
      en: 'Of the 21 tools in the survey, 19 apply AI to screening and only 4 to data extraction. Planning, quality assessment, and reporting are barely automated.',
    },
  },
  {
    id: 13,
    type: 'timeline',
    question: {
      ru: 'Восстановите цикл active learning при скрининге.',
      en: 'Reconstruct the active learning cycle in screening.',
    },
    answer: '',
    explanation: {
      ru: 'Разметка seed-статей → обучение классификатора → ранжирование корпуса → проверка верха списка человеком → дообучение. Цикл повторяется, и финальное решение каждый раз остаётся за человеком.',
      en: 'Label seed papers → train the classifier → rank the corpus → human reviews the top of the list → retrain. The cycle repeats, and the final decision stays with the human every time.',
    },
    timeline: {
      events: [
        {
          label: { ru: 'Разметить небольшой набор seed-статей', en: 'Label a small set of seed papers' },
          year: 'Step 1',
        },
        {
          label: { ru: 'Обучить классификатор на разметке', en: 'Train the classifier on the labels' },
          year: 'Step 2',
        },
        {
          label: { ru: 'Ранжировать корпус по вероятности релевантности', en: 'Rank the corpus by relevance probability' },
          year: 'Step 3',
        },
        {
          label: { ru: 'Проверить верх списка вручную', en: 'Review the top of the list manually' },
          year: 'Step 4',
        },
        {
          label: { ru: 'Дообучить модель на новых решениях и повторить', en: 'Retrain on the new decisions and repeat' },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        { ru: 'Разметить небольшой набор seed-статей', en: 'Label a small set of seed papers' },
        { ru: 'Обучить классификатор на разметке', en: 'Train the classifier on the labels' },
        { ru: 'Ранжировать корпус по вероятности релевантности', en: 'Rank the corpus by relevance probability' },
        { ru: 'Проверить верх списка вручную', en: 'Review the top of the list manually' },
        { ru: 'Дообучить модель на новых решениях и повторить', en: 'Retrain on the new decisions and repeat' },
      ],
    },
  },
  {
    id: 14,
    type: 'categorize',
    question: {
      ru: 'Распределите инструменты по поколениям.',
      en: 'Categorize the tools by generation.',
    },
    answer: '',
    explanation: {
      ru: 'Классические SLR-инструменты ведут протокол обзора и используют active learning для скрининга. LLM-поисковики и ассистенты отвечают на естественном языке через RAG, но стадий систематического обзора не покрывают.',
      en: 'Classic SLR tools maintain the review protocol and use active learning for screening. LLM search engines and assistants answer in natural language via RAG but do not cover the systematic review stages.',
    },
    categorize: {
      items: [
        { ru: 'ASReview', en: 'ASReview' },
        { ru: 'Rayyan', en: 'Rayyan' },
        { ru: 'Covidence', en: 'Covidence' },
        { ru: 'Elicit', en: 'Elicit' },
        { ru: 'Consensus', en: 'Consensus' },
        { ru: 'Jenni.ai', en: 'Jenni.ai' },
      ],
      buckets: [
        { ru: 'Классический SLR-инструмент', en: 'Classic SLR tool' },
        { ru: 'LLM-инструмент нового поколения', en: 'New-generation LLM tool' },
      ],
      correctMapping: {
        'ASReview': 'Classic SLR tool',
        'Rayyan': 'Classic SLR tool',
        'Covidence': 'Classic SLR tool',
        'Elicit': 'New-generation LLM tool',
        'Consensus': 'New-generation LLM tool',
        'Jenni.ai': 'New-generation LLM tool',
      },
    },
  },
  {
    id: 15,
    type: 'mentor',
    question: {
      ru: 'Инструмент отсеял 90% статей — можно доверять?',
      en: 'The tool filtered out 90% of the papers — can you trust it?',
    },
    answer: '',
    explanation: {
      ru: 'В скрининге пропущенная статья дороже лишней, поэтому качество отсева проверяют выборочной ручной проверкой отклонённых и метриками, взвешенными в пользу полноты.',
      en: 'In screening a missed paper costs more than an extra one, so the filtering is checked by manually sampling the rejected papers and using recall-weighted metrics.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега использует SLR-инструмент: из 6000 найденных статей классификатор пометил 5400 как нерелевантные. Коллега рад: «Осталось прочитать всего 600!» — и собирается исключить отсеянное не глядя. Что бы вы посоветовали?',
        en: 'A colleague uses an SLR tool: of 6,000 retrieved papers, the classifier marked 5,400 as irrelevant. The colleague is thrilled: "Only 600 left to read!" — and plans to drop the rejected ones without looking. What would you advise?',
      },
      userOptions: [
        {
          text: {
            ru: 'Всё в порядке: раз инструмент обучен на seed-статьях, его отсеву можно доверять — на то он и ИИ.',
            en: 'It is fine: the tool was trained on seed papers, so its filtering can be trusted — that is what AI is for.',
          },
          reaction: {
            ru: 'Рискованно. Вспомните: цена ошибок в скрининге несимметрична. Лишняя статья в списке — десять минут чтения. А чем обернётся релевантная статья, тихо застрявшая в отсеянных 5400?',
            en: 'Risky. Recall that screening errors are asymmetric. An extra paper on the list costs ten minutes of reading. What does a relevant paper quietly stuck among the rejected 5,400 cost?',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Проверить выборку из отсеянных вручную и убедиться, что полнота высокая: пропущенная статья — дыра в обзоре, которую никто не заметит.',
            en: 'Manually check a sample of the rejected papers and confirm recall is high: a missed paper is a hole in the review that nobody will notice.',
          },
          reaction: {
            ru: 'Верно. Именно поэтому инструменты проектируют по принципу human-in-the-loop, а качество скрининга меряют метриками с упором на полноту (F2, WSS), а не на точность. Модель сортирует очередь — отвечает за результат человек.',
            en: 'Correct. This is why the tools are designed human-in-the-loop, and screening quality is measured with recall-weighted metrics (F2, WSS) rather than precision. The model sorts the queue — the human answers for the result.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Практический приём: проверьте случайную выборку из отклонённых (например, 200 статей). Если релевантных там нет — отсеву можно верить; если нашлись — дообучите модель и повторите цикл.',
            en: 'A practical technique: check a random sample of the rejected papers (say, 200). If none are relevant, the filtering can be trusted; if some turn up, retrain the model and repeat the cycle.',
          },
        },
      ],
    },
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: {
      ru: 'Почему для оценки скрининга предлагают метрику F2 вместо привычной F1?',
      en: 'Why is the F2 score proposed for evaluating screening instead of the usual F1?',
    },
    options: [
      { ru: 'F2 быстрее вычисляется на больших корпусах статей', en: 'F2 is faster to compute on large paper corpora' },
      { ru: 'F2 взвешена в пользу полноты: пропущенная релевантная статья дороже лишней включённой', en: 'F2 is weighted toward recall: a missed relevant paper costs more than an extra included one' },
      { ru: 'F2 учитывает качество журналов, в которых опубликованы статьи', en: 'F2 accounts for the quality of the journals where papers appeared' },
      { ru: 'F2 является требованием европейского AI Act для исследовательских инструментов', en: 'F2 is required by the European AI Act for research tools' },
    ],
    answer: {
      ru: 'F2 взвешена в пользу полноты: пропущенная релевантная статья дороже лишней включённой',
      en: 'F2 is weighted toward recall: a missed relevant paper costs more than an extra included one',
    },
    explanation: {
      ru: 'F1 уравнивает точность и полноту, но в скрининге ошибки несимметричны. F2 усиливает вес полноты; дополняющая метрика WSS показывает, сколько ручной работы инструмент сэкономил при заданной полноте.',
      en: 'F1 weighs precision and recall equally, but screening errors are asymmetric. F2 boosts the weight of recall; the complementary WSS metric shows how much manual work the tool saved at a given recall level.',
    },
  },
  {
    id: 17,
    type: 'multiple-select',
    question: {
      ru: 'Что мешает просто заменить старые классификаторы в SLR-инструментах на LLM? Выберите все верные.',
      en: 'What prevents simply swapping the old classifiers in SLR tools for LLMs? Select all that apply.',
    },
    options: [
      { ru: 'Галлюцинации: модель может уверенно выдумать факты и ссылки', en: 'Hallucinations: the model can confidently invent facts and references' },
      { ru: 'Слабость в узких доменах: LLM обучены на общих данных', en: 'Weakness in narrow domains: LLMs are trained on general data' },
      { ru: 'Непрозрачность: решения модели трудно объяснить и воспроизвести', en: 'Opacity: model decisions are hard to explain and reproduce' },
      { ru: 'AI Act запрещает использовать LLM в научных инструментах', en: 'The AI Act prohibits using LLMs in research tools' },
      { ru: 'LLM принципиально не способны обрабатывать научные тексты', en: 'LLMs are fundamentally incapable of processing scientific text' },
    ],
    answer: [
      { ru: 'Галлюцинации: модель может уверенно выдумать факты и ссылки', en: 'Hallucinations: the model can confidently invent facts and references' },
      { ru: 'Слабость в узких доменах: LLM обучены на общих данных', en: 'Weakness in narrow domains: LLMs are trained on general data' },
      { ru: 'Непрозрачность: решения модели трудно объяснить и воспроизвести', en: 'Opacity: model decisions are hard to explain and reproduce' },
    ],
    explanation: {
      ru: 'Для методологии, чей смысл — воспроизводимость и минимизация предвзятости, выдуманные факты и необъяснимые решения дисквалифицируют инструмент. Ответы на это — RAG поверх проверяемых баз и графы знаний. AI Act исследовательские инструменты не запрещает, а научные тексты LLM обрабатывать умеют.',
      en: 'For a methodology whose point is reproducibility and bias minimization, invented facts and unexplainable decisions disqualify a tool. The answers are RAG over verifiable databases and knowledge graphs. The AI Act does not ban research tools, and LLMs can certainly process scientific text.',
    },
  },
  {
    id: 18,
    type: 'input',
    question: {
      ru: 'Какой механизм позволяет LLM-инструментам отвечать, опираясь на найденные научные статьи, снижая выдумывание фактов? (аббревиатура или полное название)',
      en: 'Which mechanism lets LLM tools answer grounded in retrieved scientific papers, reducing fact invention? (abbreviation or full name)',
    },
    answer: ['rag', 'retrieval-augmented generation', 'retrieval augmented generation'],
    hint: { ru: 'Три буквы; модель сначала находит фрагменты документов, потом генерирует ответ.', en: 'Three letters; the model first retrieves document passages, then generates the answer.' },
    explanation: {
      ru: 'RAG (Retrieval-Augmented Generation): модель получает найденные фрагменты источников в контекст и отвечает с опорой на них. Почти все 11 LLM-инструментов из обзора построены на этой схеме.',
      en: 'RAG (Retrieval-Augmented Generation): retrieved source passages are placed into the model\'s context, and it answers grounded in them. Nearly all 11 LLM tools in the survey are built on this scheme.',
    },
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: {
      ru: 'Каким был первый критерий включения инструментов в обзор Bolaños et al. — и почему это принципиально?',
      en: 'What was the first inclusion criterion for tools in the Bolaños et al. survey — and why does it matter?',
    },
    options: [
      {
        ru: 'Инструмент должен быть бесплатным, чтобы обеспечить равный доступ исследователей',
        en: 'The tool must be free, to give researchers equal access',
      },
      {
        ru: 'Инструмент должен полуавтоматизировать работу, сохраняя финальное решение за человеком',
        en: 'The tool must semi-automate the work while keeping the final decision with the human',
      },
      {
        ru: 'Инструмент должен использовать большие языковые модели последнего поколения',
        en: 'The tool must use latest-generation large language models',
      },
      {
        ru: 'Инструмент должен полностью автоматизировать хотя бы одну стадию обзора',
        en: 'The tool must fully automate at least one review stage',
      },
    ],
    answer: {
      ru: 'Инструмент должен полуавтоматизировать работу, сохраняя финальное решение за человеком',
      en: 'The tool must semi-automate the work while keeping the final decision with the human',
    },
    explanation: {
      ru: 'Human-in-the-loop — осознанная позиция поля, а не техническое ограничение: ошибка обзора тиражируется в статьи, метаанализы и рекомендации, поэтому ответственность за каждое решение остаётся на исследователе.',
      en: 'Human-in-the-loop is the field\'s deliberate stance, not a technical limitation: review errors propagate into papers, meta-analyses, and guidelines, so responsibility for every decision stays with the researcher.',
    },
  },
  {
    id: 20,
    type: 'scenario',
    question: {
      ru: 'Выберите инструментальную стратегию для обзора',
      en: 'Choose a tooling strategy for a review',
    },
    answer: '',
    explanation: {
      ru: 'Под небиомедицинский обзор с нулевым бюджетом и требованием воспроизводимости лучше всего подходит открытый инструмент с active learning и выборочной проверкой отсеянного; LLM-поисковик полезен как разведка, но не как протокол.',
      en: 'For a non-biomedical review with zero budget and a reproducibility requirement, an open tool with active learning plus sampled checks of the rejected pile fits best; an LLM search engine helps as scouting, not as protocol.',
    },
    scenario: {
      brief: {
        ru: 'Вы делаете систематический обзор по теме «ИИ в школьном образовании» (не биомедицина). После поиска — 4200 абстрактов. Бюджета на подписки нет, обзор пойдёт в журнал, который требует воспроизводимую методологию и PRISMA-отчётность.',
        en: 'You are running a systematic review on "AI in school education" (not biomedicine). The search returned 4,200 abstracts. There is no subscription budget, and the target journal demands reproducible methodology and PRISMA reporting.',
      },
      constraints: [
        { ru: 'Бюджет на инструменты — ноль', en: 'Tool budget is zero' },
        { ru: 'Методология должна быть воспроизводимой и документированной', en: 'The methodology must be reproducible and documented' },
        { ru: 'Пропуск релевантных статей недопустим', en: 'Missing relevant papers is unacceptable' },
      ],
      choices: [
        {
          text: {
            ru: 'Прогнать все 4200 абстрактов через чат с LLM: «отбери релевантные» — и включить то, что она назовёт.',
            en: 'Run all 4,200 abstracts through an LLM chat: "pick the relevant ones" — and include whatever it names.',
          },
          outcome: {
            ru: 'Быстро, но невоспроизводимо: у чата нет протокола, решения необъяснимы, а галлюцинации могут добавить несуществующие статьи. Журнал с требованием PRISMA такой скрининг не примет.',
            en: 'Fast but irreproducible: a chat has no protocol, its decisions are unexplainable, and hallucinations can add nonexistent papers. A PRISMA-demanding journal will not accept such screening.',
          },
          score: 15,
          tags: ['llm-chat'],
        },
        {
          text: {
            ru: 'ASReview: открытый код, локальный запуск, active learning; разметить seed-статьи, ранжировать корпус, проверить выборку из отсеянных.',
            en: 'ASReview: open source, local execution, active learning; label seed papers, rank the corpus, check a sample of the rejected.',
          },
          outcome: {
            ru: 'Соответствует всем ограничениям: бесплатно, воспроизводимо (открытый код и документированные настройки), полнота контролируется выборочной проверкой. Именно такой сценарий авторы обзора называют сильной стороной ASReview вне биомедицины.',
            en: 'Meets every constraint: free, reproducible (open code and documented settings), recall controlled via sampled checks. This is exactly the scenario the survey highlights as ASReview\'s strength outside biomedicine.',
          },
          score: 95,
          tags: ['asreview'],
        },
        {
          text: {
            ru: 'Covidence: платная подписка, зато готовый RCT-классификатор и полная PRISMA-поддержка.',
            en: 'Covidence: a paid subscription, but a ready RCT classifier and full PRISMA support.',
          },
          outcome: {
            ru: 'Инструмент сильный, но мимо задачи: RCT-классификатор заточен под биомедицину, а подписка нарушает нулевой бюджет. PRISMA-диаграмму можно построить и бесплатными средствами.',
            en: 'A strong tool, but off-target: the RCT classifier is biomedical, and the subscription breaks the zero budget. A PRISMA diagram can be produced with free means.',
          },
          score: 40,
          tags: ['covidence'],
        },
        {
          text: {
            ru: 'Прочитать все 4200 абстрактов вручную в Excel — как делает большинство исследователей.',
            en: 'Read all 4,200 abstracts manually in Excel — as most researchers do.',
          },
          outcome: {
            ru: 'Воспроизводимо и без пропусков по вине модели, но месяцы монотонной работы уйдут на то, что active learning сократил бы в разы при том же контроле человеком.',
            en: 'Reproducible and free of model-caused misses, but months of monotonous work go into what active learning would cut severalfold with the same human control.',
          },
          score: 45,
          tags: ['manual'],
        },
      ],
      passingScore: 70,
    },
  },
];
