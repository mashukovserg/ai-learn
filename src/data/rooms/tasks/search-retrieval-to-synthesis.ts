import { LocalizedTask } from '../types';

export const searchRetrievalToSynthesisTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'В чём состоит основное возражение Шаха и Бендер против замены выдачи документов сгенерированным ответом?',
      en: 'What is Shah and Bender\'s core objection to replacing the document list with a generated answer?',
    },
    options: [
      { ru: 'Исчезают прозрачность и происхождение сведений, обрывается цикл проверки и пропадает серендипность', en: 'Transparency and provenance vanish, the verification loop is cut short, and serendipity disappears' },
      { ru: 'Языковые модели работают слишком медленно для веб-масштаба', en: 'Language models are too slow to run at web scale' },
      { ru: 'Сгенерированные ответы всегда содержат фактические ошибки', en: 'Generated answers always contain factual errors' },
      { ru: 'Поисковые системы теряют доход от рекламы', en: 'Search engines lose advertising revenue' },
    ],
    answer: { ru: 'Исчезают прозрачность и происхождение сведений, обрывается цикл проверки и пропадает серендипность', en: 'Transparency and provenance vanish, the verification loop is cut short, and serendipity disappears' },
    explanation: {
      ru: 'Возражение из «Situating Search» (2022) состоит из трёх частей: происхождение конкретного утверждения перестаёт быть проверяемым, цикл «запрос → просмотр → переформулировка» больше не выполняет проверку, а то, чего вы не искали, до вас не доходит. Претензия адресована форме выдачи, а не скорости или отдельным ошибкам.',
      en: 'The objection in "Situating Search" (2022) has three parts: the provenance of a specific claim stops being checkable, the query-scan-reformulate loop no longer performs verification, and what you were not looking for never reaches you. The charge is against the shape of the output, not against speed or isolated errors.',
    },
  },
  {
    id: 2,
    type: 'timeline',
    question: {
      ru: 'Расположите работы и события спора о генеративном поиске в хронологическом порядке.',
      en: 'Place the papers and events of the generative-search debate in chronological order.',
    },
    answer: '',
    explanation: {
      ru: 'Ключевая деталь хронологии: «Situating Search» вышла в марте 2022 года — за восемь месяцев до публичного запуска ChatGPT. Диагноз был поставлен до того, как у идеи появились пользователи и выручка, а эмпирические измерения появились уже после.',
      en: 'The key detail of the chronology: "Situating Search" appeared in March 2022 — eight months before ChatGPT\'s public launch. The diagnosis came before the idea had users and revenue; the empirical measurements arrived afterwards.',
    },
    timeline: {
      events: [
        { label: { ru: '«On the Dangers of Stochastic Parrots» на конференции FAccT', en: '"On the Dangers of Stochastic Parrots" at the FAccT conference' }, year: '2021' },
        { label: { ru: '«Situating Search» Шаха и Бендер на конференции CHIIR', en: 'Shah and Bender\'s "Situating Search" at the CHIIR conference' }, year: '2022-03' },
        { label: { ru: 'Публичный запуск ChatGPT', en: 'Public launch of ChatGPT' }, year: '2022-11' },
        { label: { ru: 'Оценка проверяемости генеративных поисковых систем (Findings of EMNLP)', en: 'Evaluation of verifiability in generative search engines (Findings of EMNLP)' }, year: '2023' },
        { label: { ru: '«Generative Echo Chamber?» на конференции CHI', en: '"Generative Echo Chamber?" at the CHI conference' }, year: '2024' },
      ],
      correctOrder: [
        { ru: '«On the Dangers of Stochastic Parrots» на конференции FAccT', en: '"On the Dangers of Stochastic Parrots" at the FAccT conference' },
        { ru: '«Situating Search» Шаха и Бендер на конференции CHIIR', en: 'Shah and Bender\'s "Situating Search" at the CHIIR conference' },
        { ru: 'Публичный запуск ChatGPT', en: 'Public launch of ChatGPT' },
        { ru: 'Оценка проверяемости генеративных поисковых систем (Findings of EMNLP)', en: 'Evaluation of verifiability in generative search engines (Findings of EMNLP)' },
        { ru: '«Generative Echo Chamber?» на конференции CHI', en: '"Generative Echo Chamber?" at the CHI conference' },
      ],
    },
  },
  {
    id: 3,
    type: 'categorize',
    question: {
      ru: 'Разложите последствия перехода от списка к синтезу на потери и приобретения',
      en: 'Sort the consequences of moving from list to synthesis into losses and gains',
    },
    answer: '',
    categorize: {
      items: [
        { ru: 'Видимый разброс позиций между источниками', en: 'The visible spread of positions between sources' },
        { ru: 'Прямая связь утверждения с его источником', en: 'The direct link between a claim and its source' },
        { ru: 'Серендипность — то, чего вы не искали', en: 'Serendipity — what you were not looking for' },
        { ru: 'Резкое снижение порога входа в незнакомую область', en: 'A sharply lower entry barrier to an unfamiliar field' },
        { ru: 'Готовая формулировка вместо семи открытых вкладок', en: 'A ready formulation instead of seven open tabs' },
        { ru: 'Словарь и карта подтем для дальнейшего поиска', en: 'A vocabulary and a map of subtopics for further search' },
      ],
      buckets: [
        { ru: 'Что теряется', en: 'What is lost' },
        { ru: 'Что приобретается', en: 'What is gained' },
      ],
      correctMapping: {
        'The visible spread of positions between sources': 'What is lost',
        'The direct link between a claim and its source': 'What is lost',
        'Serendipity — what you were not looking for': 'What is lost',
        'A sharply lower entry barrier to an unfamiliar field': 'What is gained',
        'A ready formulation instead of seven open tabs': 'What is gained',
        'A vocabulary and a map of subtopics for further search': 'What is gained',
      },
    },
    explanation: {
      ru: 'Сделка симметрична, и честный разбор учитывает обе стороны. Теряется слой происхождения и видимое разногласие; приобретается скорость и низкий порог входа в незнакомую область.',
      en: 'The trade is symmetric, and an honest account keeps both sides. What is lost is the provenance layer and visible disagreement; what is gained is speed and a low entry barrier to an unfamiliar field.',
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Какие две цифры получили Лю, Чжан и Лян (EMNLP Findings, 2023), измеряя проверяемость генеративных поисковых систем?',
      en: 'Which two numbers did Liu, Zhang and Liang (EMNLP Findings, 2023) obtain when measuring verifiability in generative search engines?',
    },
    options: [
      { ru: 'Около 51,5 % предложений полностью подтверждены своими ссылками; около 74,5 % ссылок подтверждают своё предложение', en: 'About 51.5% of sentences are fully supported by their citations; about 74.5% of citations support their sentence' },
      { ru: 'Около 95 % предложений подтверждены; около 99 % ссылок корректны', en: 'About 95% of sentences are supported; about 99% of citations are correct' },
      { ru: 'Около 12 % предложений подтверждены; около 20 % ссылок корректны', en: 'About 12% of sentences are supported; about 20% of citations are correct' },
      { ru: 'Около 51,5 % ответов содержат галлюцинации; около 74,5 % пользователей их не замечают', en: 'About 51.5% of answers contain hallucinations; about 74.5% of users fail to notice them' },
    ],
    answer: { ru: 'Около 51,5 % предложений полностью подтверждены своими ссылками; около 74,5 % ссылок подтверждают своё предложение', en: 'About 51.5% of sentences are fully supported by their citations; about 74.5% of citations support their sentence' },
    explanation: {
      ru: 'Обе цифры измеряют связку «утверждение → ссылка» с двух сторон: доля подтверждённых предложений и доля работающих ссылок. Отсюда следует, что сноска в интерфейсе сама по себе не означает подтверждения.',
      en: 'Both numbers measure the claim-to-citation join from two directions: the share of supported sentences and the share of citations that work. It follows that a footnote in the interface does not by itself mean support.',
    },
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Какие из утверждений получены в цитируемых исследованиях как измеренные результаты? (выберите все верные)',
      en: 'Which of these statements are measured findings from the cited studies? (select all that apply)',
    },
    options: [
      { ru: 'Более беглые и полезные на вид ответы в среднем менее проверяемы', en: 'Answers that look more fluent and useful are on average less verifiable' },
      { ru: 'Генеративный интерфейс усиливает избирательное восприятие сильнее обычного поиска', en: 'A generative interface strengthens selective exposure more than conventional search does' },
      { ru: 'Пользователи переходят на генеративный поиск ради экономии усилий, а не из уверенности в точности', en: 'Users switch to generative search to save effort, not out of confidence in accuracy' },
      { ru: 'Языковые модели полностью заменят поисковые системы к 2030 году', en: 'Language models will fully replace search engines by 2030' },
      { ru: 'Наличие сносок в ответе гарантирует, что утверждение подтверждено', en: 'The presence of citations in an answer guarantees the claim is supported' },
    ],
    answer: [
      { ru: 'Более беглые и полезные на вид ответы в среднем менее проверяемы', en: 'Answers that look more fluent and useful are on average less verifiable' },
      { ru: 'Генеративный интерфейс усиливает избирательное восприятие сильнее обычного поиска', en: 'A generative interface strengthens selective exposure more than conventional search does' },
      { ru: 'Пользователи переходят на генеративный поиск ради экономии усилий, а не из уверенности в точности', en: 'Users switch to generative search to save effort, not out of confidence in accuracy' },
    ],
    explanation: {
      ru: 'Первые три — результаты Лю и соавторов (2023), Шармы и соавторов (2024) и Чжоу с Ли (2024) соответственно. Прогноз о замене поиска к 2030 году никем не измерялся, а гарантия подтверждения сносками прямо опровергается цифрой 74,5 %.',
      en: 'The first three come from Liu et al. (2023), Sharma et al. (2024) and Zhou and Li (2024) respectively. The 2030 replacement forecast was measured by no one, and the claim that citations guarantee support is directly refuted by the 74.5% figure.',
    },
  },
  {
    id: 6,
    type: 'input',
    question: {
      ru: 'Как называется свойство списочной выдачи, благодаря которому до вас доходит то, чего вы не искали?',
      en: 'What is the property of list-based results called, thanks to which you encounter what you were not looking for?',
    },
    answer: { ru: 'Серендипность', en: 'Serendipity' },
    hint: { ru: 'Серен...', en: 'Seren...' },
    explanation: {
      ru: 'Серендипность — одна из трёх потерь, которые называют Шах и Бендер. Четвёртая ссылка, за которой вы не шли, способна переопределить сам вопрос; синтезированный ответ такой возможности не даёт.',
      en: 'Serendipity is one of the three losses Shah and Bender name. The fourth link, the one you were not heading for, can redefine the question itself; a synthesised answer offers no such opening.',
    },
  },
  {
    id: 7,
    type: 'sorting',
    question: {
      ru: 'Расставьте шаги протокола проверки синтезированного ответа в правильном порядке',
      en: 'Put the steps for verifying a synthesised answer in the right order',
    },
    answer: '',
    initialItems: [
      { ru: 'Сверить связку «утверждение → ссылка»: подтверждает ли источник именно это', en: 'Check the claim-to-citation join: does the source support this exact claim' },
      { ru: 'Сформулировать конкретное утверждение, которое нужно проверить', en: 'State the specific claim that needs checking' },
      { ru: 'Сформулировать вывод, отметив, что осталось непроверенным', en: 'Write the conclusion, noting what stayed unverified' },
      { ru: 'Открыть не меньше двух процитированных источников и найти в них нужную фразу', en: 'Open at least two cited sources and locate the relevant sentence in them' },
      { ru: 'Задать опровергающий запрос, чтобы найти сильное возражение', en: 'Issue a disconfirming query to surface the strongest objection' },
    ],
    correctOrder: [
      { ru: 'Сформулировать конкретное утверждение, которое нужно проверить', en: 'State the specific claim that needs checking' },
      { ru: 'Открыть не меньше двух процитированных источников и найти в них нужную фразу', en: 'Open at least two cited sources and locate the relevant sentence in them' },
      { ru: 'Сверить связку «утверждение → ссылка»: подтверждает ли источник именно это', en: 'Check the claim-to-citation join: does the source support this exact claim' },
      { ru: 'Задать опровергающий запрос, чтобы найти сильное возражение', en: 'Issue a disconfirming query to surface the strongest objection' },
      { ru: 'Сформулировать вывод, отметив, что осталось непроверенным', en: 'Write the conclusion, noting what stayed unverified' },
    ],
    explanation: {
      ru: 'Порядок неслучаен: сначала сужаем предмет проверки до одного утверждения, потом достаём источники, потом проверяем именно связку, затем ищем возражение — и только в конце фиксируем вывод вместе с границами его надёжности.',
      en: 'The order is deliberate: first narrow the object of checking to a single claim, then pull the sources, then test the join itself, then look for an objection — and only at the end record the conclusion together with the limits of its reliability.',
    },
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Коллега говорит: «Perplexity показывает ссылки под каждым абзацем — значит, проблема с происхождением решена». Что ответить?',
      en: 'A colleague says: "Perplexity shows citations under every paragraph — so the provenance problem is solved." How do you respond?',
    },
    answer: '',
    explanation: {
      ru: 'Наличие сносок и подтверждённость утверждения — разные вещи. Измерение Лю и соавторов показывает, что около четверти ссылок не подтверждают предложение, к которому приставлены, а около половины предложений подтверждены не полностью.',
      en: 'The presence of citations and the support of a claim are different things. Liu et al. measured that about a quarter of citations do not support the sentence they are attached to, and about half of the sentences are not fully supported.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Смотри: у каждого абзаца стоят чипы-сноски, любой источник открывается в один клик. Происхождение восстановлено, спор Шаха и Бендер устарел. Разве нет?',
        en: 'Look: every paragraph carries citation chips, and any source opens in one click. Provenance is restored, so the Shah and Bender argument is out of date. Isn\'t it?',
      },
      userOptions: [
        {
          text: {
            ru: 'Сноска показывает, что источник был рядом, а не что он подтверждает фразу. По измерению 2023 года около 74,5 % ссылок подтверждают своё предложение и около 51,5 % предложений подтверждены полностью — связку всё равно надо проверять руками.',
            en: 'A citation shows the source was nearby, not that it supports the sentence. The 2023 measurement found about 74.5% of citations support their sentence and about 51.5% of sentences are fully supported — the join still has to be checked by hand.',
          },
          reaction: {
            ru: 'Да, именно так. Интерфейс восстановил вид происхождения, но не гарантию: предложение и ссылка производятся разными процессами, и их соответствие остаётся проверяемым утверждением, а не свойством продукта.',
            en: 'Yes, exactly. The interface restored the appearance of provenance, not the guarantee: the sentence and the citation are produced by different processes, and their correspondence stays a claim to be checked rather than a property of the product.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Практический тест занимает минуту: откройте две ссылки и найдите в них ту самую фразу. Типичный отказ выглядит не как явная ошибка, а как правдоподобное предложение с почти релевантным источником.',
            en: 'The practical test takes a minute: open two citations and find that exact sentence inside them. The typical failure does not look like an obvious error but like a plausible sentence with an almost-relevant source.',
          },
        },
        {
          text: {
            ru: 'Согласен: раз ссылки есть, проверка больше не нужна.',
            en: 'Agreed: once citations are there, verification is no longer needed.',
          },
          reaction: {
            ru: 'Тогда мы принимаем на веру именно то, что было измерено и оказалось ненадёжным. Сноска — элемент интерфейса; подтверждённость — свойство пары «утверждение и источник», и совпадают они далеко не всегда.',
            en: 'Then we are taking on trust precisely what was measured and found unreliable. A citation is an interface element; support is a property of the claim-source pair, and the two coincide far less often than one would hope.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Ссылки вообще ничего не дают — пользоваться генеративным поиском не стоит.',
            en: 'Citations add nothing at all — generative search should not be used.',
          },
          reaction: {
            ru: 'Это перегиб в другую сторону. Ссылки дают вход в источники и превращают ответ в указатель — что и есть его сильная сторона. Проблема в том, чтобы принимать сноску за доказательство, а не в том, чтобы её иметь.',
            en: 'That overshoots the other way. Citations give an entry point into the sources and turn the answer into an index — which is its genuine strength. The problem is treating a citation as proof, not having one.',
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
      ru: 'Какую петлю обратной связи описывают Шах и Уэст (2024)?',
      en: 'Which feedback loop do Shah and West (2024) describe?',
    },
    options: [
      { ru: 'Синтез снимает клик по источнику → источник теряет трафик и мотивацию публиковать → подложка, которой питается синтез, беднеет', en: 'Synthesis removes the click to the source → the source loses traffic and the incentive to publish → the substrate that feeds the synthesis grows poorer' },
      { ru: 'Чем больше пользователей, тем точнее модель, поэтому качество ответов растёт само собой', en: 'The more users, the more accurate the model, so answer quality improves by itself' },
      { ru: 'Поисковые системы платят авторам за каждое цитирование, поэтому источников становится больше', en: 'Search platforms pay authors per citation, so the number of sources grows' },
      { ru: 'Рост числа источников снижает качество ранжирования', en: 'A growing number of sources degrades ranking quality' },
    ],
    answer: { ru: 'Синтез снимает клик по источнику → источник теряет трафик и мотивацию публиковать → подложка, которой питается синтез, беднеет', en: 'Synthesis removes the click to the source → the source loses traffic and the incentive to publish → the substrate that feeds the synthesis grows poorer' },
    explanation: {
      ru: 'Вопрос здесь об устойчивости, а не о справедливости: генеративный поиск питается текстами, производство которых он же и обесценивает. Рядом работают ещё две петли — рост доли синтетического текста в обучающих данных и смещение стимулов публикаторов в сторону оптимизации под извлечение.',
      en: 'The issue is sustainability rather than fairness: generative search feeds on texts whose production it devalues. Two further loops run alongside it — the growing share of synthetic text in training data, and publisher incentives shifting toward optimising for extraction.',
    },
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Какую позицию заняли Шах и Бендер в работе 2024 года в ACM Transactions on the Web?',
      en: 'What position did Shah and Bender take in their 2024 ACM Transactions on the Web paper?',
    },
    options: [
      { ru: 'Спроектировать инструменты иначе: сохранить связь утверждения с источником, поддержать цикл пользователя и разделять найденное и сформулированное', en: 'Design the tools differently: keep the claim-source link, support the user\'s loop, and separate what was found from what was composed' },
      { ru: 'Запретить генеративный поиск законодательно', en: 'Ban generative search by law' },
      { ru: 'Признать спор исчерпанным, поскольку продукты уже выпущены', en: 'Declare the debate settled, since the products have already shipped' },
      { ru: 'Сосредоточиться на увеличении размера моделей для повышения точности', en: 'Focus on scaling model size to raise accuracy' },
    ],
    answer: { ru: 'Спроектировать инструменты иначе: сохранить связь утверждения с источником, поддержать цикл пользователя и разделять найденное и сформулированное', en: 'Design the tools differently: keep the claim-source link, support the user\'s loop, and separate what was found from what was composed' },
    explanation: {
      ru: 'Работа 2024 года — конструктивное продолжение критики 2022 года: она формулирует критерии хороших инструментов доступа к информации, по которым конкретные продукты можно оценивать по отдельности.',
      en: 'The 2024 paper is the constructive sequel to the 2022 critique: it states criteria for good information-access tools, by which individual products can be judged one at a time.',
    },
  },
  {
    id: 11,
    type: 'scenario',
    question: {
      ru: 'Миссия: справка по спорной теме за час',
      en: 'Mission: a brief on a contested topic in one hour',
    },
    answer: '',
    explanation: {
      ru: 'Рабочее правило из шестой главы: синтезированный ответ — гипотеза и указатель. Спорная тема — как раз тот случай, где список показывает разброс позиций, который синтез усредняет, а эффект эхо-камеры усиливается, если запрос сформулирован под уже имеющееся мнение.',
      en: 'The working rule from chapter 6: a synthesised answer is a hypothesis and an index. A contested topic is exactly the case where a list shows the spread of positions that a synthesis averages away, and the echo-chamber effect grows if the query is phrased around the view you already hold.',
    },
    scenario: {
      brief: {
        ru: 'Руководство просит к концу дня справку на две страницы: влияет ли удалённая работа на продуктивность команд. Генеративный поиск за минуту выдал уверенный связный текст с пятью сносками и однозначным выводом. До дедлайна — час.',
        en: 'Management wants a two-page brief by end of day: does remote work affect team productivity? Generative search produced a confident, coherent text with five citations and an unambiguous conclusion in under a minute. You have an hour until the deadline.',
      },
      constraints: [
        { ru: 'Час на всё — прочитать пять статей целиком невозможно', en: 'One hour in total — reading five papers end to end is impossible' },
        { ru: 'Тема спорная: у исследований расходятся выводы', en: 'The topic is contested: studies reach diverging conclusions' },
      ],
      choices: [
        {
          text: {
            ru: 'Отправить текст почти как есть: сноски на месте, вывод сформулирован чётко.',
            en: 'Send the text almost as is: the citations are in place and the conclusion is clearly stated.',
          },
          outcome: {
            ru: 'Ровно тот случай, который измерили Лю и соавторы: часть предложений подтверждена не полностью, часть ссылок относится к соседнему утверждению. Однозначность вывода по спорной теме — сигнал, что разброс позиций был усреднён.',
            en: 'Exactly the case Liu et al. measured: some sentences are not fully supported and some citations belong to a neighbouring claim. An unambiguous conclusion on a contested topic signals that the spread of positions was averaged away.',
          },
          score: 0,
          tags: ['ship-as-is'],
        },
        {
          text: {
            ru: 'Взять ответ как указатель: выделить два ключевых утверждения, открыть их источники и найти в них нужные фразы, задать опровергающий запрос, показать в справке разброс позиций и отметить непроверенное.',
            en: 'Treat the answer as an index: isolate the two key claims, open their sources and locate the relevant sentences, issue a disconfirming query, present the spread of positions in the brief and flag what stayed unverified.',
          },
          outcome: {
            ru: 'Протокол из шестой главы отработан целиком и укладывается в час. Руководство получает справку, в которой видно, что спорно, что подтверждено и где границы надёжности.',
            en: 'The chapter-6 protocol runs in full and fits inside the hour. Management gets a brief that shows what is contested, what is supported, and where the limits of reliability lie.',
          },
          score: 100,
          tags: ['index-and-verify'],
        },
        {
          text: {
            ru: 'Отказаться от генеративного поиска и час искать вручную по ссылкам.',
            en: 'Drop generative search and spend the hour searching manually through links.',
          },
          outcome: {
            ru: 'Проверяемость высокая, но час уйдёт на ориентацию в незнакомой области — ровно на то, где синтез действительно силён. За дедлайн справка не успеет или окажется поверхностной.',
            en: 'Verifiability is high, but the hour goes into orienting yourself in an unfamiliar field — precisely where synthesis is genuinely strong. The brief either misses the deadline or comes out shallow.',
          },
          score: 45,
          tags: ['manual-only'],
        },
        {
          text: {
            ru: 'Переспросить ту же систему ещё двумя запросами и объединить три ответа.',
            en: 'Re-query the same system twice more and merge the three answers.',
          },
          outcome: {
            ru: 'Объём вырос, независимость проверки — нет: три ответа опираются на пересекающийся набор источников и одну и ту же формулировку запроса. Именно так эффект эхо-камеры из четвёртой главы принимают за подтверждение.',
            en: 'The volume grows, the independence of the check does not: three answers rest on an overlapping source set and the same query framing. This is precisely how the chapter-4 echo-chamber effect gets mistaken for confirmation.',
          },
          score: 25,
          tags: ['self-confirm'],
        },
      ],
      passingScore: 70,
    },
  },
];
