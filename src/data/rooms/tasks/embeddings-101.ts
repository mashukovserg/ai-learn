import { LocalizedTask } from '../types';

export const embeddings101Tasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'input',
      question: {
        ru: 'Какая знаменитая модель эмбеддингов продемонстрировала, что king - man + woman ≈ queen?',
        en: 'Which famous embedding model demonstrated that king - man + woman ≈ queen?'
      },
      answer: 'Word2Vec',
      hint: { ru: 'Word...', en: 'Word...' },
      explanation: {
        ru: 'Верно! Word2Vec (2013, Google) стала прорывом, показав, что семантические отношения между словами можно выразить через арифметику векторов.',
        en: 'Correct! Word2Vec (2013, Google) was a breakthrough, showing that semantic relationships between words can be expressed through vector arithmetic.'
      }
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: {
        ru: 'Чем контекстуальные (transformer) эмбеддинги отличаются от статических (Word2Vec)?',
        en: 'How do contextual (transformer) embeddings differ from static (Word2Vec) embeddings?'
      },
      options: [
        { ru: 'Они всегда имеют меньшую размерность', en: 'They always have lower dimensionality' },
        { ru: 'Одно и то же слово получает разные векторы в зависимости от контекста', en: 'The same word gets different vectors depending on context' },
        { ru: 'Они работают только для английского языка', en: 'They only work for English' }
      ],
      answer: { ru: 'Одно и то же слово получает разные векторы в зависимости от контекста', en: 'The same word gets different vectors depending on context' },
      explanation: {
        ru: 'Верно! В Word2Vec слово «bank» всегда имеет один вектор. В transformer-эмбеддингах «bank» в «river bank» и «bank account» получат разные векторы.',
        en: 'Correct! In Word2Vec, "bank" always has one vector. In transformer embeddings, "bank" in "river bank" and "bank account" get different vectors.'
      }
    },
    {
      id: 3,
      type: 'timeline',
      question: {
        ru: 'Расположите подходы к представлению текста в хронологическом порядке.',
        en: 'Arrange text representation approaches in chronological order.'
      },
      answer: '',
      explanation: {
        ru: 'Правильная хронология: TF-IDF (1970-е) → Word2Vec (2013) → GloVe (2014) → BERT (2018) → text-embedding-3 (2024).',
        en: 'Correct chronology: TF-IDF (1970s) → Word2Vec (2013) → GloVe (2014) → BERT (2018) → text-embedding-3 (2024).'
      },
            timeline: {
        events: [
          { label: { ru: 'TF-IDF', en: 'TF-IDF' }, year: '1972' },
          { label: { ru: 'Word2Vec (Google)', en: 'Word2Vec (Google)' }, year: '2013' },
          { label: { ru: 'GloVe (Stanford)', en: 'GloVe (Stanford)' }, year: '2014' },
          { label: { ru: 'BERT (включает эмбеддинги)', en: 'BERT (includes embeddings)' }, year: '2018' },
          { label: { ru: 'text-embedding-3 (OpenAI)', en: 'text-embedding-3 (OpenAI)' }, year: '2024' }
        ],
        correctOrder: [
          { ru: 'TF-IDF', en: 'TF-IDF' },
          { ru: 'Word2Vec (Google)', en: 'Word2Vec (Google)' },
          { ru: 'GloVe (Stanford)', en: 'GloVe (Stanford)' },
          { ru: 'BERT (включает эмбеддинги)', en: 'BERT (includes embeddings)' },
          { ru: 'text-embedding-3 (OpenAI)', en: 'text-embedding-3 (OpenAI)' }
        ]
      }
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: {
        ru: 'Какая метрика сходства чаще всего используется для сравнения эмбеддингов?',
        en: 'Which similarity metric is most commonly used for comparing embeddings?'
      },
      options: [
        { ru: 'Евклидово расстояние', en: 'Euclidean distance' },
        { ru: 'Косинусное сходство', en: 'Cosine similarity' },
        { ru: 'Расстояние Хэмминга', en: 'Hamming distance' }
      ],
      answer: { ru: 'Косинусное сходство', en: 'Cosine similarity' },
      explanation: {
        ru: 'Верно! Косинусное сходство измеряет угол между векторами (от -1 до 1), фокусируясь на направлении — это лучше отражает семантическое сходство.',
        en: 'Correct! Cosine similarity measures the angle between vectors (-1 to 1), focusing on direction, which better captures semantic similarity.'
      }
    },
    {
      id: 5,
      type: 'categorize',
      question: {
        ru: 'Распределите векторные базы данных по типу: облачный сервис или self-hosted.',
        en: 'Categorize these vector databases by type: cloud-managed or self-hosted.'
      },
      answer: '',
      explanation: {
        ru: 'Pinecone — полностью облачный. Chroma, pgvector и Weaviate (Docker) — self-hosted. Qdrant и Weaviate также предлагают облачные варианты.',
        en: 'Pinecone is fully cloud-managed. Chroma, pgvector, and Weaviate (Docker) are self-hosted. Qdrant and Weaviate also offer cloud options.'
      },
      categorize: {
        items: [
          { ru: 'Pinecone', en: 'Pinecone' },
          { ru: 'Chroma', en: 'Chroma' },
          { ru: 'pgvector (расширение PostgreSQL)', en: 'pgvector (PostgreSQL extension)' },
          { ru: 'Qdrant Cloud', en: 'Qdrant Cloud' },
          { ru: 'Weaviate (Docker)', en: 'Weaviate (Docker)' },
          { ru: 'Pinecone Serverless', en: 'Pinecone Serverless' },
        ],
        buckets: [
          { ru: 'Облачный сервис', en: 'Cloud-managed' },
          { ru: 'Self-hosted', en: 'Self-hosted' },
        ],
        correctMapping: {
          'Pinecone': 'Cloud-managed',
          'Chroma': 'Self-hosted',
          'pgvector (PostgreSQL extension)': 'Self-hosted',
          'Qdrant Cloud': 'Cloud-managed',
          'Weaviate (Docker)': 'Self-hosted',
          'Pinecone Serverless': 'Cloud-managed',
        }
      }
    },
    {
      id: 6,
      type: 'sorting',
      question: {
        ru: 'Расположите этапы RAG-пайплайна в правильном порядке.',
        en: 'Sort the stages of a RAG pipeline in the correct order.'
      },
      initialItems: [
        { ru: 'Генерация ответа LLM', en: 'LLM generates answer' },
        { ru: 'Чанкинг документов', en: 'Chunk documents' },
        { ru: 'Эмбеддинг запроса', en: 'Embed query' },
        { ru: 'Поиск в векторной БД', en: 'Search vector DB' },
        { ru: 'Эмбеддинг чанков и сохранение', en: 'Embed chunks and store' },
        { ru: 'Инъекция контекста в промпт', en: 'Inject context into prompt' },
      ],
      correctOrder: [
        { ru: 'Чанкинг документов', en: 'Chunk documents' },
        { ru: 'Эмбеддинг чанков и сохранение', en: 'Embed chunks and store' },
        { ru: 'Эмбеддинг запроса', en: 'Embed query' },
        { ru: 'Поиск в векторной БД', en: 'Search vector DB' },
        { ru: 'Инъекция контекста в промпт', en: 'Inject context into prompt' },
        { ru: 'Генерация ответа LLM', en: 'LLM generates answer' },
      ],
      explanation: {
        ru: 'Правильно! Сначала индексация (чанкинг → эмбеддинг → хранение), затем при запросе: эмбеддинг → поиск → контекст → генерация.',
        en: 'Correct! First indexing (chunk → embed → store), then at query time: embed → search → context → generate.'
      },
      answer: ''
    },
    {
      id: 7,
      type: 'multiple-choice',
      question: {
        ru: 'Какая стратегия чанкинга лучше всего подходит для FAQ-документов?',
        en: 'Which chunking strategy works best for FAQ documents?'
      },
      options: [
        { ru: 'Фиксированный размер (512 токенов)', en: 'Fixed size (512 tokens)' },
        { ru: 'Семантический чанкинг (по вопрос-ответным парам)', en: 'Semantic chunking (by question-answer pairs)' },
        { ru: 'Весь документ целиком', en: 'Entire document as one chunk' }
      ],
      answer: { ru: 'Семантический чанкинг (по вопрос-ответным парам)', en: 'Semantic chunking (by question-answer pairs)' },
      explanation: {
        ru: 'Верно! Для FAQ идеально разбивать по парам вопрос-ответ — каждый чанк содержит самодостаточную единицу знания.',
        en: 'Correct! For FAQ, splitting by Q&A pairs is ideal — each chunk contains a self-contained knowledge unit.'
      }
    },
    {
      id: 8,
      type: 'multiple-select',
      question: {
        ru: 'Выберите ВСЕ причины, по которым нельзя смешивать разные модели эмбеддингов.',
        en: 'Select ALL reasons why you cannot mix different embedding models.'
      },
      options: [
        { ru: 'Разные модели создают векторы разной размерности', en: 'Different models produce vectors of different dimensions' },
        { ru: 'Семантическое пространство у разных моделей разное', en: 'The semantic space differs between models' },
        { ru: 'Это запрещено лицензией OpenAI', en: 'It is prohibited by OpenAI license' },
        { ru: 'Косинусное сходство между векторами разных моделей бессмысленно', en: 'Cosine similarity between vectors from different models is meaningless' }
      ],
      answer: [
        { ru: 'Разные модели создают векторы разной размерности', en: 'Different models produce vectors of different dimensions' },
        { ru: 'Семантическое пространство у разных моделей разное', en: 'The semantic space differs between models' },
        { ru: 'Косинусное сходство между векторами разных моделей бессмысленно', en: 'Cosine similarity between vectors from different models is meaningless' }
      ],
      explanation: {
        ru: 'Верно! Размерности, семантические пространства и метрики несовместимы между моделями. Лицензия тут ни при чём.',
        en: 'Correct! Dimensions, semantic spaces, and metrics are incompatible across models. Licensing has nothing to do with it.'
      }
    },
    {
      id: 9,
      type: 'input',
      question: {
        ru: 'Как называется техника, при которой сначала находят top-100 кандидатов быстрым bi-encoder, а затем переранжируют cross-encoder до top-5?',
        en: 'What is the technique called where you first find top-100 candidates with a fast bi-encoder, then re-score with a cross-encoder to get top-5?'
      },
      answer: { ru: 'Ре-ранкинг', en: 'Re-ranking' },
      hint: { ru: 'Re-...', en: 'Re-...' },
      explanation: {
        ru: 'Верно! Re-ranking — двухэтапная стратегия: быстрый поиск (bi-encoder) + точная переоценка (cross-encoder).',
        en: 'Correct! Re-ranking is a two-stage strategy: fast retrieval (bi-encoder) + precise re-scoring (cross-encoder).'
      }
    },
    {
      id: 10,
      type: 'scenario',
      question: {
        ru: 'Архитектура поиска для юридической платформы',
        en: 'Search architecture for a legal platform'
      },
      answer: '',
      explanation: {
        ru: 'Гибридный поиск (BM25 + эмбеддинги) с pgvector — оптимальный выбор: точное совпадение терминов + семантический поиск, без дополнительной инфраструктуры.',
        en: 'Hybrid search (BM25 + embeddings) with pgvector is optimal: exact term matching + semantic search, no extra infrastructure.'
      },
      scenario: {
        brief: {
          ru: 'Вы строите поисковую систему для юридической платформы с 500K документов (законы, судебные решения, договоры). Юристы ищут как по точным цитатам статей (\"п. 3 ст. 451 ГК РФ\"), так и по смыслу (\"ответственность за некачественный товар\"). У вас PostgreSQL в проде и бюджет $500/мес на инфраструктуру.',
          en: 'You are building a search system for a legal platform with 500K documents (laws, court decisions, contracts). Lawyers search both by exact article citations ("Section 451(3)") and by meaning ("liability for defective goods"). You have PostgreSQL in production and a $500/mo infrastructure budget.'
        },
        constraints: [
          { ru: 'Точность цитирования критична — неправильная статья закона недопустима', en: 'Citation accuracy is critical — wrong legal article is unacceptable' },
          { ru: 'Семантический поиск нужен для смысловых запросов', en: 'Semantic search needed for meaning-based queries' },
          { ru: 'Бюджет: $500/мес на инфраструктуру', en: 'Budget: $500/mo for infrastructure' },
          { ru: 'Уже есть PostgreSQL в продакшене', en: 'Already have PostgreSQL in production' },
        ],
        choices: [
          {
            text: { ru: 'Pinecone + Elasticsearch', en: 'Pinecone + Elasticsearch full-text search' },
            outcome: {
              ru: 'Две отдельные системы: Pinecone ($70/мес) + Elasticsearch ($200/мес) + синхронизация. Сложно, данные дублируются, бюджет почти исчерпан.',
              en: 'Two separate systems: Pinecone ($70/mo) + Elasticsearch ($200/mo) + data sync. Complex, data duplicated, budget nearly exhausted.'
            },
            score: 45,
            tags: ['over-engineered', 'dual-infrastructure'],
          },
          {
            text: { ru: 'pgvector + BM25 (гибридный поиск в PostgreSQL)', en: 'pgvector + BM25 (hybrid search in PostgreSQL)' },
            outcome: {
              ru: 'Идеально! pgvector добавляет векторный поиск в ваш PostgreSQL. BM25 обеспечивает точное совпадение цитат. Один запрос — оба типа поиска. Нет лишней инфраструктуры.',
              en: 'Perfect! pgvector adds vector search to your PostgreSQL. BM25 ensures exact citation matching. One query — both search types. No extra infrastructure.'
            },
            score: 95,
            tags: ['pragmatic', 'hybrid-search', 'cost-efficient'],
          },
          {
            text: { ru: 'Только эмбеддинги (OpenAI + Chroma)', en: 'Embeddings only (OpenAI API + Chroma)' },
            outcome: {
              ru: 'Семантический поиск работает, но при поиске \"п. 3 ст. 451 ГК РФ\" эмбеддинги не гарантируют точного совпадения. Юристы получают \"похожие\" статьи.',
              en: 'Semantic search works, but searching "Section 451(3)" doesn\'t guarantee exact matches. Lawyers get "similar" articles instead.'
            },
            score: 35,
            tags: ['missing-exact-match', 'trust-issue'],
          },
          {
            text: { ru: 'Полнотекстовый поиск без эмбеддингов', en: 'Full-text search without embeddings' },
            outcome: {
              ru: 'Точные цитаты находятся, но \"ответственность за бракованный товар\" не находит \"дефектная продукция\". Юристы перебирают синонимы вручную.',
              en: 'Exact citations work, but "liability for defective goods" misses "faulty products". Lawyers must manually try synonyms.'
            },
            score: 40,
            tags: ['no-semantics', 'poor-recall'],
          },
        ],
        passingScore: 50,
      }
    },
  ];
