import { LocalizedTask } from '../types';

export const researchAiEraTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'mentor',
    question: {
      ru: 'Отчёт агента — это уже исследование?',
      en: 'Is an agent report already research?',
    },
    answer: '',
    explanation: {
      ru: 'Отчёт агента — первичный синтез, сырьё для исследования. Исследованием его делают загадка, конкурирующие объяснения и суждение исследователя.',
      en: 'An agent report is first-pass synthesis, raw material for research. What makes it research is a puzzle, competing explanations, and the researcher\'s judgment.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега запустил deep-research-агента по теме «влияние ИИ на занятость», получил отчёт на 20 страниц с 40 источниками и говорит: «Исследование готово, осталось оформить». Что бы вы ему ответили?',
        en: 'A colleague ran a deep-research agent on "the impact of AI on employment," got a 20-page report with 40 sources, and says: "The research is done, I just need to format it." What would you tell them?',
      },
      userOptions: [
        {
          text: {
            ru: 'Готово: 40 источников — более чем достаточная база, агенты сейчас ищут лучше людей.',
            en: 'It is done: 40 sources are more than enough, and agents now search better than humans.',
          },
          reaction: {
            ru: 'Агент действительно ищет быстрее. Но вспомните тезис Эбботта: источники не содержат готового ответа. Что в этом отчёте отвечает на вопрос «почему»? Какие объяснения конкурируют между собой?',
            en: 'The agent does search faster. But recall Abbott\'s thesis: sources do not contain a finished answer. What in this report answers a "why" question? Which explanations compete with each other?',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Это первичный синтез по теме, а не исследование: нет загадки, нет конкурирующих объяснений, и никто не оценивал качество источников.',
            en: 'That is first-pass synthesis on a topic, not research: there is no puzzle, no competing explanations, and nobody evaluated source quality.',
          },
          reaction: {
            ru: 'Именно. «Влияние ИИ на занятость» — тема, она расширяется бесконечно. Исследование началось бы с аномалии: например, «почему массового всплеска безработицы не видно в данных, хотя модели уже пишут код?» — и минимум двух объяснений, которые отчёт помог бы различить.',
            en: 'Exactly. "The impact of AI on employment" is a topic; it expands forever. Research would start from an anomaly — say, "why is no mass unemployment spike visible in the data even though models already write code?" — and at least two explanations the report would help distinguish.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Эбботт сформулировал это до эпохи агентов: исследование — конструирование ответа. Чем дешевле первичный синтез, тем ценнее то, что осталось человеку: постановка загадки и суждение.',
            en: 'Abbott said it before the agent era: research is the construction of an answer. The cheaper first-pass synthesis gets, the more valuable what remains human: framing the puzzle and judgment.',
          },
        },
      ],
    },
  },
  {
    id: 2,
    type: 'sorting',
    question: {
      ru: 'Расставьте узкие места научной работы в историческом порядке их решения.',
      en: 'Order the bottlenecks of scholarly work by when technology solved them.',
    },
    initialItems: [
      { ru: 'Извлечение документов — веб-поиск', en: 'Document retrieval — web search' },
      { ru: 'Доступ к книгам — библиотеки', en: 'Access to books — libraries' },
      { ru: 'Первичный синтез литературы — ИИ-агенты', en: 'First-pass synthesis of literature — AI agents' },
      { ru: 'Доступ к статьям — библиографические базы', en: 'Access to papers — bibliographic databases' },
    ],
    correctOrder: [
      { ru: 'Доступ к книгам — библиотеки', en: 'Access to books — libraries' },
      { ru: 'Доступ к статьям — библиографические базы', en: 'Access to papers — bibliographic databases' },
      { ru: 'Извлечение документов — веб-поиск', en: 'Document retrieval — web search' },
      { ru: 'Первичный синтез литературы — ИИ-агенты', en: 'First-pass synthesis of literature — AI agents' },
    ],
    answer: '',
    explanation: {
      ru: 'Каждая технология автоматизирует один слой работы и делает ценнее следующий. После автоматизации синтеза дефицитным ресурсом становится суждение.',
      en: 'Each technology automates one layer of work and makes the next more valuable. Once synthesis is automated, judgment becomes the scarce resource.',
    },
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Что превращает вопрос в эмпирическую загадку, а не тему?',
      en: 'What turns a question into an empirical puzzle rather than a topic?',
    },
    options: [
      {
        ru: 'Вопрос сформулирован максимально широко, чтобы не упустить ни один источник',
        en: 'The question is phrased as broadly as possible so no source is missed',
      },
      {
        ru: 'Вопрос спрашивает «почему наблюдается неожиданный факт X» и допускает минимум два конкурирующих объяснения',
        en: 'The question asks "why is surprising fact X the case" and allows at least two competing explanations',
      },
      {
        ru: 'Вопрос касается недавних событий, по которым ещё мало литературы',
        en: 'The question concerns recent events with little existing literature',
      },
      {
        ru: 'Вопрос содержит точные ключевые слова для поисковых систем',
        en: 'The question contains precise keywords for search engines',
      },
    ],
    answer: {
      ru: 'Вопрос спрашивает «почему наблюдается неожиданный факт X» и допускает минимум два конкурирующих объяснения',
      en: 'The question asks "why is surprising fact X the case" and allows at least two competing explanations',
    },
    explanation: {
      ru: 'Загадка даёт критерий остановки (проект закончен, когда аномалия объяснена) и защищает от подгонки: если допущено лишь одно объяснение, доказательства превращаются в иллюстрацию.',
      en: 'A puzzle provides a stopping rule (the project ends when the anomaly is explained) and guards against confirmation: with only one explanation allowed, evidence becomes illustration.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Распределите запросы: что из этого тема, а что — эмпирическая загадка?',
      en: 'Categorize the queries: which are topics and which are empirical puzzles?',
    },
    answer: '',
    explanation: {
      ru: 'Загадку отличает аномалия и вопрос «почему»: она удивляет и проверяема. Тема лишь называет область — у неё нет критерия завершения.',
      en: 'A puzzle is marked by an anomaly and a "why" question: it surprises and can be checked. A topic merely names an area — it has no completion criterion.',
    },
    categorize: {
      items: [
        { ru: 'История нейросетей', en: 'The history of neural networks' },
        { ru: 'Почему санкции на чипы ускорили китайские лаборатории, а не замедлили?', en: 'Why did chip sanctions accelerate Chinese labs instead of slowing them?' },
        { ru: 'Всё о больших языковых моделях', en: 'Everything about large language models' },
        { ru: 'Почему цены на токены упали в 100 раз, а счета компаний за инференс выросли?', en: 'Why did token prices fall 100x while companies\' inference bills grew?' },
        { ru: 'Обзор регулирования ИИ', en: 'An overview of AI regulation' },
        { ru: 'Почему открытые модели догнали закрытые за месяцы, хотя бюджеты меньше на порядок?', en: 'Why did open models catch up with closed ones in months despite budgets an order of magnitude smaller?' },
      ],
      buckets: [
        { ru: 'Тема', en: 'Topic' },
        { ru: 'Эмпирическая загадка', en: 'Empirical puzzle' },
      ],
      correctMapping: {
        'The history of neural networks': 'Topic',
        'Why did chip sanctions accelerate Chinese labs instead of slowing them?': 'Empirical puzzle',
        'Everything about large language models': 'Topic',
        'Why did token prices fall 100x while companies\' inference bills grew?': 'Empirical puzzle',
        'An overview of AI regulation': 'Topic',
        'Why did open models catch up with closed ones in months despite budgets an order of magnitude smaller?': 'Empirical puzzle',
      },
    },
  },
  {
    id: 5,
    type: 'scenario',
    question: {
      ru: 'Выберите режим поиска под задачу',
      en: 'Choose a search mode for the task',
    },
    answer: '',
    explanation: {
      ru: 'Режим выбирается по цене пропуска: сканировать длинные малоценные списки, отдавать агенту ограниченный проверенный пул, читать центральный корпус самому.',
      en: 'The mode follows the cost of missing something: scan long low-yield lists, hand a bounded vetted pool to an agent, read the central corpus yourself.',
    },
    scenario: {
      brief: {
        ru: 'Вы пишете обзор по безопасности LLM-агентов. У вас есть: список из 800 заголовков свежих arXiv-статей за год, 30 проверенных ключевых работ, на которые все ссылаются, и подозрение, что в соседних областях (безопасность ПО, человеко-машинное взаимодействие) есть полезные идеи.',
        en: 'You are writing a review of LLM agent security. You have: a list of 800 fresh arXiv titles from the past year, 30 vetted key works everyone cites, and a hunch that neighboring fields (software security, human-computer interaction) hold useful ideas.',
      },
      constraints: [
        { ru: 'Пропуск одной из 30 ключевых работ обесценит обзор', en: 'Missing one of the 30 key works would sink the review' },
        { ru: 'На проект три недели', en: 'The project has three weeks' },
      ],
      choices: [
        {
          text: {
            ru: 'Все 800 заголовков и 30 ключевых работ отдать deep-research-агенту одним запросом: пусть сам разберётся.',
            en: 'Hand all 800 titles and the 30 key works to a deep-research agent in one query and let it sort things out.',
          },
          outcome: {
            ru: 'Агент вернёт гладкий пересказ, но 30 центральных работ вы будете знать в его изложении, а не в оригинале — пять вопросов к источнику задать будет не к чему. Пропуски в пересказе не заметить.',
            en: 'The agent returns a smooth summary, but you will know the 30 central works through its retelling, not the originals — there is nothing to ask the five source questions of. Gaps in the retelling go unnoticed.',
          },
          score: 30,
          tags: ['delegate-all'],
        },
        {
          text: {
            ru: 'Прочитать все 800 статей целиком, чтобы ничего не пропустить.',
            en: 'Read all 800 papers in full so nothing is missed.',
          },
          outcome: {
            ru: 'Brute force по низкоценному списку: три недели уйдут на чтение целиком, а на письмо и анализ времени не останется. Полное чтение оправдано для центрального корпуса, а не для сырого потока.',
            en: 'Brute force on a low-yield list: three weeks go to reading, leaving nothing for analysis and writing. Full reading is justified for the central corpus, not the raw stream.',
          },
          score: 20,
          tags: ['brute-force-all'],
        },
        {
          text: {
            ru: 'Сканировать 800 заголовков по сигналам из словаря; 30 ключевых работ прочитать самому; по соседним областям запустить агента на ограниченном пуле обзоров.',
            en: 'Scan the 800 titles for vocabulary signals; read the 30 key works yourself; run an agent over a bounded pool of reviews from the neighboring fields.',
          },
          outcome: {
            ru: 'Каждый режим на своём месте: сканирование для длинного списка, brute force для центрального корпуса (цена пропуска высока), браузинг через агента — для соседних областей, где нужны неожиданные связи.',
            en: 'Each mode where it belongs: scanning for the long list, brute force for the central corpus (the cost of missing is high), agent-assisted browsing for neighboring fields where unexpected connections matter.',
          },
          score: 95,
          tags: ['mixed-modes'],
        },
        {
          text: {
            ru: 'Сузить обзор до 30 ключевых работ и не смотреть ни свежие статьи, ни соседние области.',
            en: 'Narrow the review to the 30 key works and skip both fresh papers and neighboring fields.',
          },
          outcome: {
            ru: 'Надёжно, но обзор устареет в момент выхода: за год поле сместилось, а соседние области — главный источник свежих идей. Подготовленная серендипность не сработает там, куда вы не заглянули.',
            en: 'Safe, but the review is dated on arrival: the field moved within the year, and neighboring areas are the main source of fresh ideas. Prepared serendipity cannot fire where you never looked.',
          },
          score: 45,
          tags: ['narrow-only'],
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 6,
    type: 'multiple-select',
    question: {
      ru: 'Какие сигналы качества вторичного источника Эбботт рекомендует использовать? Выберите все верные.',
      en: 'Which quality signals for a secondary source does Abbott recommend? Select all that apply.',
    },
    options: [
      { ru: 'Экспертиза автора именно в этом вопросе', en: 'The author\'s expertise on this exact question' },
      { ru: 'Повторное появление работы в библиографиях сильных источников', en: 'Repeated appearance in the bibliographies of strong sources' },
      { ru: 'Рецензируемость и репутация издания в своей специальности', en: 'Peer review and the venue\'s reputation within its specialty' },
      { ru: 'Позиция в поисковой выдаче', en: 'Position in search engine results' },
      { ru: 'Новизна: чем свежее источник, тем он качественнее', en: 'Recency: the newer the source, the higher its quality' },
    ],
    answer: [
      { ru: 'Экспертиза автора именно в этом вопросе', en: 'The author\'s expertise on this exact question' },
      { ru: 'Повторное появление работы в библиографиях сильных источников', en: 'Repeated appearance in the bibliographies of strong sources' },
      { ru: 'Рецензируемость и репутация издания в своей специальности', en: 'Peer review and the venue\'s reputation within its specialty' },
    ],
    explanation: {
      ru: 'Сигналы работают только вместе. Ранжирование поисковика измеряет популярность, а не релевантность вашему вопросу; новизна не равна качеству — старая работа может быть точнее новой.',
      en: 'Signals work only in combination. Search ranking measures popularity, not relevance to your question; recency is not quality — an older work may be more precise than a newer one.',
    },
  },
  {
    id: 7,
    type: 'input',
    question: {
      ru: 'Как называется метод сборки ядра литературы: от seed-источников назад по спискам литературы и вперёд по индексам цитирований? (английский термин или русский перевод)',
      en: 'What is the method of assembling the core literature called: from seed sources backward through reference lists and forward through citation indexes?',
    },
    answer: ['citation chaining', 'цепочка цитирований', 'цепочки цитирований', 'chaining'],
    hint: { ru: 'Глава 4; движение по «цепочке» ссылок в обе стороны.', en: 'Chapter 4; moving along a "chain" of references in both directions.' },
    explanation: {
      ru: 'Citation chaining (цепочка цитирований): повторяющиеся в цепочках имена, работы и термины образуют карту поля, которую не выдаст ни один одиночный запрос.',
      en: 'Citation chaining: the names, works, and terms that recur across chains form a map of the field that no single query can produce.',
    },
  },
  {
    id: 8,
    type: 'timeline',
    question: {
      ru: 'Восстановите порядок исследовательского цикла по Эбботту.',
      en: 'Reconstruct the order of Abbott\'s research cycle.',
    },
    answer: '',
    explanation: {
      ru: 'Загадка → словарь → seed-источники → цепочки цитирований → остановка и письмо. Порядок не жёсткий (исследование нелинейно), но каждый шаг готовит следующий.',
      en: 'Puzzle → vocabulary → seed sources → citation chains → stopping and writing. The order is not rigid (research is nonlinear), but each step prepares the next.',
    },
    timeline: {
      events: [
        {
          label: { ru: 'Сформулировать эмпирическую загадку и два объяснения', en: 'Formulate the empirical puzzle and two explanations' },
          year: 'Step 1',
        },
        {
          label: { ru: 'Построить контролируемый словарь концептов', en: 'Build a controlled vocabulary of concepts' },
          year: 'Step 2',
        },
        {
          label: { ru: 'Отобрать 5–10 сильных seed-источников', en: 'Select 5–10 strong seed sources' },
          year: 'Step 3',
        },
        {
          label: { ru: 'Пройти цепочки цитирований назад и вперёд', en: 'Run citation chains backward and forward' },
          year: 'Step 4',
        },
        {
          label: { ru: 'Остановиться по правилу двух третей и писать', en: 'Stop by the two-thirds rule and write' },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        { ru: 'Сформулировать эмпирическую загадку и два объяснения', en: 'Formulate the empirical puzzle and two explanations' },
        { ru: 'Построить контролируемый словарь концептов', en: 'Build a controlled vocabulary of concepts' },
        { ru: 'Отобрать 5–10 сильных seed-источников', en: 'Select 5–10 strong seed sources' },
        { ru: 'Пройти цепочки цитирований назад и вперёд', en: 'Run citation chains backward and forward' },
        { ru: 'Остановиться по правилу двух третей и писать', en: 'Stop by the two-thirds rule and write' },
      ],
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'По правилу остановки Эбботта широкий поиск можно прекращать, когда…',
      en: 'By Abbott\'s stopping rule, broad searching can end when…',
    },
    options: [
      {
        ru: 'собрано не меньше 100 источников',
        en: 'at least 100 sources have been collected',
      },
      {
        ru: 'примерно две трети важных ссылок в каждом новом сильном источнике уже знакомы',
        en: 'roughly two-thirds of the important references in each new strong source are already familiar',
      },
      {
        ru: 'deep-research-агент перестаёт находить новые статьи по запросу',
        en: 'the deep-research agent stops finding new papers for the query',
      },
      {
        ru: 'закончилось время, отведённое на поиск в плане проекта',
        en: 'the time allocated to searching in the project plan runs out',
      },
    ],
    answer: {
      ru: 'примерно две трети важных ссылок в каждом новом сильном источнике уже знакомы',
      en: 'roughly two-thirds of the important references in each new strong source are already familiar',
    },
    explanation: {
      ru: 'Признак зрелости ядра — сходимость сети цитирований, а не количество собранного. Дальше — только точечное закрытие пробелов под нужды текста. Правило применимо и к отчётам агентов: посчитайте знакомые источники в списке.',
      en: 'The sign of a mature core is the convergence of the citation network, not the amount collected. What remains is targeted gap-filling for the text. The rule applies to agent reports too: count the familiar sources in the list.',
    },
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Оцените ответ deep-research-агента',
      en: 'Evaluate a deep-research agent\'s answer',
    },
    answer: '',
    explanation: {
      ru: 'Пять вопросов к источнику (автор, провенанс, производство, выживание, цели) применимы к ответу агента; ключевые факты проверяются по оригиналам, непроверенные помечаются как цитирование через вторичный источник.',
      en: 'The five source questions (author, provenance, production, survival, aims) apply to an agent\'s answer; consequential facts are checked against originals, unchecked ones are flagged as cited through a secondary source.',
    },
    scenario: {
      brief: {
        ru: 'Агент вернул отчёт: «Согласно исследованиям, 47% рабочих задач будут автоматизированы к 2030 году». Приведены три ссылки, одна из них — на страницу, которая не открывается. Отчёт нужен вам как основа раздела в статье.',
        en: 'The agent returned a report: "According to research, 47% of work tasks will be automated by 2030." Three references are given; one link does not open. You need the report as the basis of a section in your article.',
      },
      constraints: [
        { ru: 'Число 47% станет ключевым утверждением раздела', en: 'The 47% figure will be the section\'s key claim' },
        { ru: 'Дедлайн статьи — через неделю', en: 'The article deadline is in one week' },
      ],
      choices: [
        {
          text: {
            ru: 'Вставить утверждение с тремя ссылками как есть: агент уже проверил источники.',
            en: 'Insert the claim with all three references as is: the agent already checked the sources.',
          },
          outcome: {
            ru: 'Агент не «проверял» — он синтезировал. Мёртвая ссылка может быть галлюцинацией, а 47% — чужим пересказом с потерянным контекстом (какие задачи? какая методология?). Ключевое утверждение раздела повисает на непроверенном факте.',
            en: 'The agent did not "check" — it synthesized. The dead link may be a hallucination, and 47% may be a retelling with lost context (which tasks? what methodology?). The section\'s key claim rests on an unverified fact.',
          },
          score: 10,
          tags: ['trust-as-is'],
        },
        {
          text: {
            ru: 'Открыть оригиналы: найти первоисточник числа 47%, проверить методологию и год, мёртвую ссылку отследить по названию; в тексте цитировать оригинал.',
            en: 'Open the originals: find the primary source of the 47% figure, check its methodology and year, trace the dead link by title; cite the original in the text.',
          },
          outcome: {
            ru: 'Это пять вопросов к источнику в действии: автор, провенанс, производство, выживание, цели. Ключевое утверждение получает первоисточник с методологией, а мёртвая ссылка либо находится, либо честно исключается.',
            en: 'The five source questions in action: author, provenance, production, survival, aims. The key claim gets a primary source with methodology, and the dead link is either traced or honestly dropped.',
          },
          score: 95,
          tags: ['verify-originals'],
        },
        {
          text: {
            ru: 'Убрать число и написать обтекаемо: «многие исследователи ожидают значительной автоматизации».',
            en: 'Drop the figure and write vaguely: "many researchers expect significant automation."',
          },
          outcome: {
            ru: 'Риск галлюцинации снят, но вместе с содержанием: «многие» и «значительной» — количественные утверждения без опоры, по Эбботту они тоже требуют доказательств. Раздел теряет ключевое утверждение вместо того, чтобы его проверить.',
            en: 'The hallucination risk is gone — along with the substance: "many" and "significant" are quantity claims without support, and by Abbott they need evidence too. The section loses its key claim instead of verifying it.',
          },
          score: 40,
          tags: ['hedge'],
        },
        {
          text: {
            ru: 'Попросить другого агента перепроверить отчёт первого и сравнить их выводы.',
            en: 'Ask a second agent to double-check the first agent\'s report and compare their conclusions.',
          },
          outcome: {
            ru: 'Полезная триангуляция, но оба агента — вторичные источники с похожими слепыми зонами: они могли прочитать один и тот же пересказ. Совпадение их выводов не заменяет открытый оригинал для ключевого утверждения.',
            en: 'Useful triangulation, but both agents are secondary sources with similar blind spots: they may have read the same retelling. Their agreement does not substitute for opening the original behind a key claim.',
          },
          score: 55,
          tags: ['second-agent'],
        },
      ],
      passingScore: 70,
    },
  },
];
