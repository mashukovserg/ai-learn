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
];
