import { LocalizedTask } from '../types';

export const localRagDocsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему в задаче «поиск по договорам под NDA» выбирается локальная модель, а не облачный чат?',
      en: 'Why does the "search over NDA contracts" task call for a local model rather than a cloud chat?'
    },
    options: [
      { ru: 'Локальные модели всегда отвечают точнее облачных', en: 'Local models always answer more accurately than cloud ones' },
      { ru: 'Каждый загруженный в облако файл покидает вашу машину, а для NDA это прямое нарушение', en: 'Every file uploaded to the cloud leaves your machine, and for an NDA that is a direct violation' },
      { ru: 'Облачные сервисы не умеют читать PDF', en: 'Cloud services cannot read PDFs' }
    ],
    answer: {
      ru: 'Каждый загруженный в облако файл покидает вашу машину, а для NDA это прямое нарушение',
      en: 'Every file uploaded to the cloud leaves your machine, and for an NDA that is a direct violation'
    },
    explanation: {
      ru: 'Верно. Локальная модель здесь выбирается не из идеологии: весь пайплайн работает на вашем железе, и данные никуда не уходят — облако запрещено самими условиями задачи.',
      en: 'Correct. The local model is chosen not out of ideology: the whole pipeline runs on your hardware and the data never leaves — the cloud is forbidden by the task itself.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    question: {
      ru: 'Восстановите порядок шагов RAG-пайплайна — от папки с документами до ответа.',
      en: 'Restore the order of the RAG pipeline steps — from a folder of documents to an answer.'
    },
    initialItems: [
      { ru: 'Найти фрагменты с ближайшими векторами', en: 'Find the fragments with the closest vectors' },
      { ru: 'Разбить документы на чанки', en: 'Split the documents into chunks' },
      { ru: 'Сгенерировать ответ по найденному', en: 'Generate the answer from what was found' },
      { ru: 'Построить эмбеддинги документов и сохранить в базу', en: 'Embed the documents and store them in the database' },
      { ru: 'Построить эмбеддинг вопроса', en: 'Embed the question' }
    ],
    correctOrder: [
      { ru: 'Разбить документы на чанки', en: 'Split the documents into chunks' },
      { ru: 'Построить эмбеддинги документов и сохранить в базу', en: 'Embed the documents and store them in the database' },
      { ru: 'Построить эмбеддинг вопроса', en: 'Embed the question' },
      { ru: 'Найти фрагменты с ближайшими векторами', en: 'Find the fragments with the closest vectors' },
      { ru: 'Сгенерировать ответ по найденному', en: 'Generate the answer from what was found' }
    ],
    answer: '',
    explanation: {
      ru: 'Именно так: сначала фаза индексации (чанки → эмбеддинги → база), потом фаза запроса (эмбеддинг вопроса → поиск → генерация по найденному).',
      en: 'Exactly: first the indexing phase (chunks → embeddings → database), then the query phase (embed the question → search → generate from what was found).'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется приём, при котором модель отвечает по найденным фрагментам документов и показывает источники? (аббревиатура)',
      en: 'What is the name of the technique where the model answers from retrieved document fragments and shows its sources? (abbreviation)'
    },
    answer: 'RAG',
    explanation: {
      ru: 'RAG — Retrieval-Augmented Generation: модель отвечает не из своей памяти, а по фрагментам, которые система нашла под конкретный вопрос.',
      en: 'RAG — Retrieval-Augmented Generation: the model answers not from its own memory but from the fragments the system found for the specific question.'
    }
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Разложите шаги по фазам: что происходит один раз при индексации, а что — при каждом запросе?',
      en: 'Sort the steps by phase: what happens once at indexing time, and what happens on every query?'
    },
    answer: '',
    explanation: {
      ru: 'Индексация выполняется один раз и готовит базу (чанки, эмбеддинги документов, сохранение). Фаза запроса повторяется с каждым вопросом: эмбеддинг вопроса, поиск похожих фрагментов, генерация ответа.',
      en: 'Indexing runs once and prepares the database (chunks, document embeddings, storage). The query phase repeats with every question: embed the question, find similar fragments, generate the answer.'
    },
    categorize: {
      items: [
        { ru: 'Разбиение документов на чанки', en: 'Splitting documents into chunks' },
        { ru: 'Эмбеддинг вопроса', en: 'Embedding the question' },
        { ru: 'Сохранение векторов в базу', en: 'Storing vectors in the database' },
        { ru: 'Поиск ближайших фрагментов', en: 'Finding the closest fragments' },
        { ru: 'Эмбеддинги документов', en: 'Embedding the documents' },
        { ru: 'Генерация ответа по найденному', en: 'Generating the answer from what was found' }
      ],
      buckets: [
        { ru: 'Индексация (один раз)', en: 'Indexing (once)' },
        { ru: 'Запрос (каждый раз)', en: 'Query (every time)' }
      ],
      correctMapping: {
        'Splitting documents into chunks': 'Indexing (once)',
        'Embedding the question': 'Query (every time)',
        'Storing vectors in the database': 'Indexing (once)',
        'Finding the closest fragments': 'Query (every time)',
        'Embedding the documents': 'Indexing (once)',
        'Generating the answer from what was found': 'Query (every time)'
      }
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Ваш архив смешанный: русские заметки и английские статьи. Чем опасна англоязычная модель эмбеддингов вроде all-MiniLM?',
      en: 'Your archive is mixed: Russian notes and English papers. What is the danger of an English-only embedding model like all-MiniLM?'
    },
    options: [
      { ru: 'Она откажется индексировать русские файлы и выдаст ошибку', en: 'It will refuse to index the Russian files and throw an error' },
      { ru: 'Она молча даст плохой поиск: вектора русского текста живут в другой части пространства, и русский вопрос не находит английские фрагменты', en: 'It will silently give bad search: Russian-text vectors live in a different part of the space, and a Russian question fails to find English fragments' },
      { ru: 'Она будет работать вдвое медленнее', en: 'It will run twice as slowly' }
    ],
    answer: {
      ru: 'Она молча даст плохой поиск: вектора русского текста живут в другой части пространства, и русский вопрос не находит английские фрагменты',
      en: 'It will silently give bad search: Russian-text vectors live in a different part of the space, and a Russian question fails to find English fragments'
    },
    explanation: {
      ru: 'Верно. Ошибки не будет — будет тихо плохой поиск. Для смешанных корпусов нужна многоязычная модель, выравнивающая языки в одном пространстве: multilingual-e5 или bge-m3; сверять кандидатов удобно по рейтингу MTEB.',
      en: 'Correct. There is no error message — just quietly bad search. Mixed corpora need a multilingual model that aligns languages in one space: multilingual-e5 or bge-m3; the MTEB leaderboard is the place to compare candidates.'
    }
  },
  {
    id: 6,
    type: 'multiple-select',
    question: {
      ru: 'Что верно про две модели в RAG-пайплайне? (несколько ответов)',
      en: 'Which statements about the two models in a RAG pipeline are true? (multiple answers)'
    },
    options: [
      { ru: 'Модель эмбеддингов отвечает за то, найдутся ли нужные фрагменты', en: 'The embedding model decides whether the right fragments are found' },
      { ru: 'Генеративная модель пишет ответ по найденным фрагментам', en: 'The generative model writes the answer from the found fragments' },
      { ru: 'Хороший генератор исправляет ошибки поиска', en: 'A good generator fixes retrieval mistakes' },
      { ru: 'Ошибка поиска не лечится генератором: он уверенно ответит не по тем местам', en: 'A retrieval mistake cannot be fixed by the generator: it will confidently answer from the wrong places' }
    ],
    answer: [
      { ru: 'Модель эмбеддингов отвечает за то, найдутся ли нужные фрагменты', en: 'The embedding model decides whether the right fragments are found' },
      { ru: 'Генеративная модель пишет ответ по найденным фрагментам', en: 'The generative model writes the answer from the found fragments' },
      { ru: 'Ошибка поиска не лечится генератором: он уверенно ответит не по тем местам', en: 'A retrieval mistake cannot be fixed by the generator: it will confidently answer from the wrong places' }
    ],
    explanation: {
      ru: 'Две модели выбираются по отдельности, и качество поиска — фундамент: если ретрив принес не те фрагменты, даже отличный генератор ответит не по тем местам.',
      en: 'The two models are chosen separately, and retrieval quality is the foundation: if retrieval brings the wrong fragments, even an excellent generator answers from the wrong places.'
    }
  },
  {
    id: 7,
    type: 'mentor',
    question: { ru: 'Смена модели эмбеддингов', en: 'Changing the embedding model' },
    answer: '',
    explanation: {
      ru: 'Вопрос и документы должны кодироваться одной и той же моделью эмбеддингов: вектора разных моделей живут в разных пространствах. Поменяли модель — переиндексируете весь архив.',
      en: 'The question and the documents must be encoded by the same embedding model: vectors from different models live in different spaces. Change the model — reindex the whole archive.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Вы проиндексировали архив моделью bge-m3, а потом решили кодировать вопросы новой, более сильной моделью — «база-то уже готова». Что произойдет с поиском?',
        en: 'You indexed the archive with bge-m3, then decided to encode questions with a new, stronger model — "the database is already built anyway." What happens to search?'
      },
      userOptions: [
        {
          text: { ru: 'Поиск станет лучше: новая модель сильнее.', en: 'Search improves: the new model is stronger.' },
          reaction: {
            ru: 'Нет. Вектора разных моделей живут в разных пространствах — сравнивать вектор вопроса от одной модели с векторами документов от другой бессмысленно, поиск развалится.',
            en: 'No. Vectors from different models live in different spaces — comparing a question vector from one model with document vectors from another is meaningless; search falls apart.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Поиск развалится: вопрос и документы обязаны кодироваться одной моделью, смена модели означает полную переиндексацию.', en: 'Search falls apart: question and documents must be encoded by one model; changing it means a full reindex.' },
          reaction: {
            ru: 'Именно. Это железное правило пайплайна: одна модель эмбеддингов для вопроса и документов. Новая модель — значит, заново индексируете весь архив.',
            en: 'Exactly. It is the iron rule of the pipeline: one embedding model for both the question and the documents. New model — reindex the entire archive.'
          },
          isCorrect: true
        }
      ]
    }
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Ответы системы стали плохими. Что по теории проверять первым?',
      en: 'The system\'s answers turned bad. According to the theory, what do you check first?'
    },
    options: [
      { ru: 'Сразу заменить генеративную модель на более крупную', en: 'Immediately swap the generative model for a bigger one' },
      { ru: 'Посмотреть, какие именно фрагменты нашлись под вопрос — в девяти случаях из десяти проблема в поиске', en: 'Look at which fragments were actually retrieved for the question — nine times out of ten the problem is in retrieval' },
      { ru: 'Увеличить окно контекста генератора', en: 'Increase the generator\'s context window' }
    ],
    answer: {
      ru: 'Посмотреть, какие именно фрагменты нашлись под вопрос — в девяти случаях из десяти проблема в поиске',
      en: 'Look at which fragments were actually retrieved for the question — nine times out of ten the problem is in retrieval'
    },
    explanation: {
      ru: 'Верно. Частые причины — слишком крупные чанки (вектор «размылся»), слишком мелкие (мысль разрезана) или англоязычные эмбеддинги на русском корпусе. Генератор винят в последнюю очередь.',
      en: 'Correct. Common causes: chunks too large (the vector gets "smeared"), too small (a thought cut in the middle), or English-only embeddings on a Russian corpus. Blame the generator last.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем RAG-система показывает источники рядом с ответом?',
      en: 'Why does a RAG system show sources next to the answer?'
    },
    options: [
      { ru: 'Это главный механизм доверия: каждое утверждение можно проверить в указанном файле на указанной странице', en: 'It is the main trust mechanism: every claim can be checked in the named file at the named page' },
      { ru: 'Чтобы интерфейс выглядел солиднее', en: 'To make the interface look more serious' },
      { ru: 'Источники нужны только для отчетности перед юристами', en: 'Sources are only needed for legal reporting' }
    ],
    answer: {
      ru: 'Это главный механизм доверия: каждое утверждение можно проверить в указанном файле на указанной странице',
      en: 'It is the main trust mechanism: every claim can be checked in the named file at the named page'
    },
    explanation: {
      ru: 'Верно. Система без источников — это не поиск по документам, а пересказ по памяти модели, со всеми её галлюцинациями.',
      en: 'Correct. A system without sources is not document search but a retelling from the model\'s memory — hallucinations included.'
    }
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: архив интервью под соглашением о конфиденциальности',
      en: 'Mission: an interview archive under a confidentiality agreement'
    },
    answer: '',
    explanation: {
      ru: 'Чувствительные данные — только локально: собеседники доверили записи лично вам. Локальный RAG дает поиск по смыслу без передачи данных третьим лицам; отказ от инструментов — ложная дилемма.',
      en: 'Sensitive data stays local: the interviewees trusted you personally with the recordings. Local RAG gives semantic search without handing data to third parties; refusing tools altogether is a false dilemma.'
    },
    scenario: {
      brief: {
        ru: 'Вы — исследователь. У вас 200 расшифровок интервью, каждое взято под личное обещание конфиденциальности. Нужно быстро находить, кто и что говорил по темам. Как организуете поиск?',
        en: 'You are a researcher. You have 200 interview transcripts, each taken under a personal promise of confidentiality. You need to quickly find who said what on which topics. How do you set up search?'
      },
      constraints: [
        { ru: 'Передавать записи третьим лицам нельзя', en: 'Recordings must not be handed to third parties' },
        { ru: 'Архив смешанный: русский и английский', en: 'The archive is mixed: Russian and English' },
        { ru: 'Из железа — обычный ноутбук', en: 'Hardware: an ordinary laptop' }
      ],
      choices: [
        {
          text: { ru: 'Загрузить расшифровки в облачный AI-сервис — так быстрее всего', en: 'Upload the transcripts to a cloud AI service — fastest option' },
          outcome: {
            ru: 'Данные ушли на чужие серверы. Обещание конфиденциальности нарушено, и отвечаете за это вы — независимо от того, «утекло» что-то или нет.',
            en: 'The data went to someone else\'s servers. The confidentiality promise is broken, and you are the one responsible — whether or not anything "leaks."'
          },
          score: 10
        },
        {
          text: { ru: 'Собрать локальный RAG: многоязычные эмбеддинги (bge-m3) + генератор через Ollama, всё на своей машине', en: 'Build local RAG: multilingual embeddings (bge-m3) + a generator via Ollama, all on your own machine' },
          outcome: {
            ru: 'Верно. Поиск по смыслу работает на обеих языках корпуса, ответы приходят с источниками, а данные не покидают ноутбук. В Q4 модели умещаются в память обычной машины.',
            en: 'Correct. Semantic search works across both languages of the corpus, answers come with sources, and the data never leaves the laptop. In Q4 the models fit an ordinary machine\'s memory.'
          },
          score: 95
        },
        {
          text: { ru: 'Не использовать AI вообще — искать по файлам глазами и Ctrl+F', en: 'Use no AI at all — search files by eye and Ctrl+F' },
          outcome: {
            ru: 'Конфиденциальность цела, но задача не решена: Ctrl+F не находит перефразированное, а 200 расшифровок глазами — недели работы. Ложная дилемма: локальный вариант существует.',
            en: 'Confidentiality is intact but the task is unsolved: Ctrl+F cannot find paraphrases, and reading 200 transcripts takes weeks. A false dilemma: the local option exists.'
          },
          score: 40
        }
      ],
      passingScore: 60
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Где локальный RAG честно проигрывает облачным моделям?',
      en: 'Where does local RAG honestly lose to cloud models?'
    },
    options: [
      { ru: 'В сложном рассуждении поверх найденного: маленькая модель хуже сводит противоречивые фрагменты и пишет длинную аналитику', en: 'At complex reasoning over the retrieved text: a small model is worse at reconciling contradictory fragments and writing long analysis' },
      { ru: 'В скорости ответа на любой вопрос', en: 'At answer speed for any question' },
      { ru: 'В умении показывать источники', en: 'At showing sources' }
    ],
    answer: {
      ru: 'В сложном рассуждении поверх найденного: маленькая модель хуже сводит противоречивые фрагменты и пишет длинную аналитику',
      en: 'At complex reasoning over the retrieved text: a small model is worse at reconciling contradictory fragments and writing long analysis'
    },
    explanation: {
      ru: 'Верно. Рабочее правило: чувствительные данные — только локально; публичные данные и сложная аналитика — можно и в облако. Инструмент следует за ограничениями задачи.',
      en: 'Correct. The working rule: sensitive data — local only; public data and heavy analysis — the cloud is fine. The tool follows the constraints of the task.'
    }
  }
];
