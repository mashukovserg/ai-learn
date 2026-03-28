import { LocalizedTask } from '../types';

export const aiRagTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Какую главную проблему решает технология RAG (Retrieval-Augmented Generation)?', 
        en: 'What primary problem does RAG (Retrieval-Augmented Generation) technology solve?' 
      },
      options: [
        { ru: 'Увеличивает скорость генерации текста', en: 'Increases text generation speed' },
        { ru: 'Позволяет ИИ опираться на актуальные внешние данные и снижает риск галлюцинаций', en: 'Allows AI to rely on up-to-date external data and reduces the risk of hallucinations' },
        { ru: 'Уменьшает размер модели в 10 раз', en: 'Reduces the model size by 10x' }
      ],
      answer: { ru: 'Позволяет ИИ опираться на актуальные внешние данные и снижает риск галлюцинаций', en: 'Allows AI to rely on up-to-date external data and reduces the risk of hallucinations' },
      explanation: { 
        ru: 'Правильно! RAG — это способ "заземлить" ИИ на факты, подключая его к вашей базе документов в реальном времени.', 
        en: 'Correct! RAG is a way to "ground" the AI in facts by connecting it to your document database in real-time.' 
      }
    },
    {
      id: 2,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите шаги стандартного RAG-пайплайна.', 
        en: 'Sort the steps of a standard RAG pipeline.' 
      },
      initialItems: [
        { ru: 'Генерация ответа с учетом контекста', en: 'Generate response with context' },
        { ru: 'Поиск релевантных фрагментов в векторной БД', en: 'Retrieve relevant fragments from Vector DB' },
        { ru: 'Входящий запрос пользователя', en: 'User query' },
        { ru: 'Превращение запроса в вектор (эмбеддинг)', en: 'Turn query into vector (embedding)' }
      ],
      correctOrder: [
        { ru: 'Входящий запрос пользователя', en: 'User query' },
        { ru: 'Превращение запроса в вектор (эмбеддинг)', en: 'Turn query into vector (embedding)' },
        { ru: 'Поиск релевантных фрагментов в векторной БД', en: 'Retrieve relevant fragments from Vector DB' },
        { ru: 'Генерация ответа с учетом контекста', en: 'Generate response with context' }
      ],
      explanation: { 
        ru: 'Верно! Сначала мы понимаем смысл вопроса через математику векторов, находим нужные данные и только потом просим ИИ ответить.', 
        en: 'Correct! First, we understand the meaning of the question via vector math, find the relevant data, and only then ask the AI to respond.' 
      },
      answer: ''
    },
    {
      id: 3,
      type: 'categorize',
      question: { 
        ru: 'Распределите задачи по наиболее подходящим методам адаптации ИИ.', 
        en: 'Assign tasks to the most suitable AI adaptation methods.' 
      },
      categorize: {
        buckets: [
          { ru: 'RAG (Поиск)', en: 'RAG (Retrieval)' },
          { ru: 'Fine-tuning (Дообучение)', en: 'Fine-tuning' }
        ],
        items: [
          { ru: 'Ответы на вопросы по базе свежих законов', en: 'Answering questions based on fresh legal updates' },
          { ru: 'Изменение тона общения на "саркастичный"', en: 'Changing communication tone to "sarcastic"' },
          { ru: 'Доступ к личным медицинским картам пациентов', en: 'Accessing private patient medical records' },
          { ru: 'Специализация модели на написании кода на редком языке', en: 'Specializing the model for a rare programming language' }
        ],
        correctMapping: {
          'Ответы на вопросы по базе свежих законов': 'RAG (Поиск)',
          'Answering questions based on fresh legal updates': 'RAG (Retrieval)',
          'Изменение тона общения на "саркастичный"': 'Fine-tuning (Дообучение)',
          'Changing communication tone to "sarcastic"': 'Fine-tuning',
          'Доступ к личным медицинским картам пациентов': 'RAG (Поиск)',
          'Accessing private patient medical records': 'RAG (Retrieval)',
          'Специализация модели на написании кода на редком языке': 'Fine-tuning (Дообучение)',
          'Specializing the model for a rare programming language': 'Fine-tuning'
        }
      },
      explanation: { 
        ru: 'Правильно! RAG идеален для динамических данных и фактов, а Fine-tuning — для изменения поведения, стиля и глубоких навыков модели.', 
        en: 'Correct! RAG is ideal for dynamic data and facts, while Fine-tuning is for changing behavior, style, and deep model skills.' 
      },
      answer: ''
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем заключается проблема "Lost in the Middle" в контексте RAG?', 
        en: 'What is the "Lost in the Middle" problem in the context of RAG?' 
      },
      options: [
        { ru: 'Модель забывает вопрос пользователя посередине генерации', en: 'The model forgets the user\'s question mid-generation' },
        { ru: 'Модель лучше всего учитывает информацию в начале и конце контекста, игнорируя факты в середине', en: 'The model considers information at the beginning and end of the context best, ignoring facts in the middle' },
        { ru: 'Векторная база данных теряет данные, загруженные в середине дня', en: 'The vector database loses data uploaded in the middle of the day' }
      ],
      answer: { ru: 'Модель лучше всего учитывает информацию в начале и конце контекста, игнорируя факты в середине', en: 'The model considers information at the beginning and end of the context best, ignoring facts in the middle' },
      explanation: { 
        ru: 'Верно. Именно поэтому в продвинутых RAG-системах используют Reranking, чтобы самые важные факты всегда оказывались "на виду" у модели.', 
        en: 'Correct. This is why advanced RAG systems use Reranking to ensure the most important facts are always "visible" to the model.' 
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: { 
        ru: 'Какую функцию выполняет Reranker в современном RAG-пайплайне?', 
        en: 'What function does a Reranker perform in a modern RAG pipeline?' 
      },
      options: [
        { ru: 'Удаляет дубликаты из базы данных', en: 'Removes duplicates from the database' },
        { ru: 'Проводит более точную вторичную проверку релевантности найденных чанков', en: 'Performs a more accurate secondary relevance check of the retrieved chunks' },
        { ru: 'Переводит запрос пользователя на другие языки', en: 'Translates the user\'s query into other languages' }
      ],
      answer: { ru: 'Проводит более точную вторичную проверку релевантности найденных чанков', en: 'Performs a more accurate secondary relevance check of the retrieved chunks' },
      explanation: { 
        ru: 'Точно! Поиск в векторной базе быстрый, но грубый. Реранкер — это "второе сито", которое оставляет только самое важное.', 
        en: 'Exactly! Vector database retrieval is fast but coarse. A reranker acts as a "second sieve" that keeps only the most important parts.' 
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: { 
        ru: 'Миссия: Проектирование корпоративного ИИ-поиска', 
        en: 'Mission: Designing Corporate AI Search' 
      },
      answer: '',
      explanation: { 
        ru: 'Для юридической компании с длинными документами идеален гибридный подход: чанкинг по 500-1000 токенов для точности и гибридный поиск (векторный + BM25), чтобы находить и смысл, и точные термины/даты.', 
        en: 'For a law firm with long documents, the hybrid approach is ideal: 500-1000 token chunking for precision and hybrid search (vector + BM25) to find both meaning and exact terms/dates.' 
      },
      scenario: {
        brief: {
          ru: 'Вы — техлид в юридической компании. Задача: создать систему поиска по архиву из 100,000 судебных дел (по 50-100 стр каждая). Юристы жалуются на галлюцинации и требуют точности до абзаца.',
          en: 'You are a tech lead at a law firm. Task: build a search system for an archive of 100,000 court cases (50-100 pages each). Lawyers complain about hallucinations and demand paragraph-level precision.'
        },
        constraints: [
          { ru: 'Минимизация галлюцинаций', en: 'Minimize hallucinations' },
          { ru: 'Бюджет ограничен: нельзя прогонять всё через GPT-4o целиком', en: 'Limited budget: cannot run everything through GPT-4o' },
          { ru: 'Точность цитирования источников', en: 'Source citation accuracy' }
        ],
        choices: [
          {
            text: { ru: 'Загрузка документов целиком и поиск по метаданным', en: 'Upload documents in full and search by metadata' },
            outcome: { ru: 'Система находит файлы, но не может ответить на вопросы по их содержанию без галлюцинаций. Юристы недовольны.', en: 'The system finds files but cannot answer questions about their content without hallucinations. Lawyers are unhappy.' },
            score: 20
          },
          {
            text: { ru: 'Чанкинг (500 токенов) + Векторная база + Реранкер', en: 'Chunking (500 tokens) + Vector DB + Reranker' },
            outcome: { ru: 'Отличный результат! Чанкинг позволяет находить конкретные абзацы, а Реранкер гарантирует, что в контекст попадут только самые важные факты.', en: 'Great result! Chunking allows finding specific paragraphs, and the Reranker ensures only the most important facts reach the context.' },
            score: 95
          },
          {
            text: { ru: 'Полный файн-тюнинг модели на всех судебных делах', en: 'Full fine-tuning of the model on all court cases' },
            outcome: { ru: 'Слишком дорого и долго. Как только появится новое дело, модель придется переобучать заново. Плохо масштабируемое решение.', en: 'Too expensive and time-consuming. As soon as a new case appears, the model must be retrained. Poorly scalable solution.' },
            score: 30
          }
        ],
        passingScore: 50
      }
    }
  ];
