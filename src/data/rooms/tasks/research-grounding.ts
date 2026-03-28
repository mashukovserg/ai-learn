import { LocalizedTask } from '../types';

export const researchGroundingTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Почему языковые модели склонны к галлюцинациям даже при ответах на простые вопросы?', 
        en: 'Why are language models prone to hallucinations even when answering simple questions?' 
      },
      options: [
        { ru: 'У них слишком маленькая база данных', en: 'They have a database that is too small' },
        { ru: 'Они не ищут информацию в памяти, а статистически предсказывают следующее слово', en: 'They do not look up information in memory, but statistically predict the next word' },
        { ru: 'Разработчики специально добавляют шум для разнообразия', en: 'Developers intentionally add noise for variety' }
      ],
      answer: { ru: 'Они не ищут информацию в памяти, а статистически предсказывают следующее слово', en: 'They do not look up information in memory, but statistically predict the next word' },
      explanation: { 
        ru: 'Верно! Модель обязана генерировать ответ, даже если ее веса не содержат точной фактологии.', 
        en: 'Correct! The model is forced to generate an answer even if its weights lack exact factual data.' 
      }
    },
    {
      id: 2,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите фазы процесса RAG (Retrieval-Augmented Generation).', 
        en: 'Sort the phases of the RAG (Retrieval-Augmented Generation) process.' 
      },
      initialItems: [
        { ru: 'Генерация ответа на основе фактов (Generate)', en: 'Answer generation based on facts (Generate)' },
        { ru: 'Пользовательский запрос', en: 'User query' },
        { ru: 'Вставка найденных фактов в системный промпт (Augment)', en: 'Injection of found facts into system prompt (Augment)' },
        { ru: 'Поиск релевантных фрагментов в базе (Retrieve)', en: 'Search for relevant fragments in the DB (Retrieve)' }
      ],
      correctOrder: [
        { ru: 'Пользовательский запрос', en: 'User query' },
        { ru: 'Поиск релевантных фрагментов в базе (Retrieve)', en: 'Search for relevant fragments in the DB (Retrieve)' },
        { ru: 'Вставка найденных фактов в системный промпт (Augment)', en: 'Injection of found facts into system prompt (Augment)' },
        { ru: 'Генерация ответа на основе фактов (Generate)', en: 'Answer generation based on facts (Generate)' }
      ],
      explanation: { 
        ru: 'Правильно! Сначала поиск, потом обогащение промпта, и только затем генерация.', 
        en: 'Correct! First retrieval, then prompt augmentation, and finally generation.' 
      },
      answer: ''
    },
    {
      id: 3,
      type: 'multiple-select',
      question: { 
        ru: 'В каких точках конвейер RAG чаще всего дает сбой?', 
        en: 'At what points does the RAG pipeline most commonly fail?' 
      },
      options: [
        { ru: 'Слепой поиск (база данных не вернула нужный документ)', en: 'Blind retrieval (the database did not return the needed document)' },
        { ru: 'Потеря в середине (модель проигнорировала факты из середины длинного промпта)', en: 'Lost in the middle (the model ignored facts from the middle of a long prompt)' },
        { ru: 'Слишком высокая температура процессора', en: 'CPU temperature is too high' },
        { ru: 'Ложное цитирование (ссылка на несуществующий факт в документе)', en: 'Citation hallucination (referencing a non-existent fact in the document)' }
      ],
      answer: [
        { ru: 'Слепой поиск (база данных не вернула нужный документ)', en: 'Blind retrieval (the database did not return the needed document)' },
        { ru: 'Потеря в середине (модель проигнорировала факты из середины длинного промпта)', en: 'Lost in the middle (the model ignored facts from the middle of a long prompt)' },
        { ru: 'Ложное цитирование (ссылка на несуществующий факт в документе)', en: 'Citation hallucination (referencing a non-existent fact in the document)' }
      ],
      explanation: { 
        ru: 'Верно. Это классические проблемы заземления, с которыми борются инженеры.', 
        en: 'Correct. These are the classic grounding problems engineers fight against.' 
      }
    },
    {
      id: 4,
      type: 'input',
      question: { 
        ru: 'Как называется эффект, когда модель хуже обращает внимание на факты, расположенные не в начале и не в конце длинного контекста?', 
        en: 'What is the effect called when a model pays less attention to facts located neither at the beginning nor at the end of a long context?' 
      },
      answer: ['lost in the middle', 'потеря в середине'],
      hint: { ru: 'Английский термин из трех слов: Lost ...', en: 'Three word term: Lost ...' },
      explanation: { 
        ru: 'Правильно. Это известная архитектурная слабость внимания в трансформерах.', 
        en: 'Correct. This is a known architectural weakness of attention in transformers.' 
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: { 
        ru: 'Что должна делать надежно "заземленная" система, если она не нашла релевантной информации в предоставленных ей документах?', 
        en: 'What should a reliably "grounded" system do if it finds no relevant information in the provided documents?' 
      },
      options: [
        { ru: 'Использовать общие знания из своих весов, чтобы ответить', en: 'Use general knowledge from its weights to answer' },
        { ru: 'Честно отказаться от ответа ("Я не знаю")', en: 'Honestly refuse to answer ("I don\'t know")' },
        { ru: 'Выдумать наиболее вероятный источник', en: 'Invent the most likely source' }
      ],
      answer: { ru: 'Честно отказаться от ответа ("Я не знаю")', en: 'Honestly refuse to answer ("I don\'t know")' },
      explanation: { 
        ru: 'Верно. В энтерпрайз-задачах отказ от ответа лучше, чем галлюцинация.', 
        en: 'Correct. In enterprise tasks, refusing to answer is better than hallucinating.' 
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: { ru: 'UX и доверие', en: 'UX and Trust' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Вы проектируете интерфейс юридического ИИ. Модель нашла ответ, но только в одном, старом документе 2018 года. Как лучше отобразить этот ответ пользователю?',
          en: 'You are designing the UI for a legal AI. The model found an answer, but only in one old document from 2018. How should you display this answer to the user?'
        },
        userOptions: [
          {
            text: { ru: 'Показать ответ крупным шрифтом как абсолютно точный, добавив зеленую галочку.', en: 'Show the answer in large font as absolutely accurate, adding a green checkmark.' },
            reaction: { 
              ru: 'Опасно! Пользователь слепо доверится ответу, не зная, что источник слабый. Это плохая калибровка доверия.', 
              en: 'Dangerous! The user will blindly trust the answer, not knowing the source is weak. This is poor trust calibration.' 
            },
            isCorrect: false
          },
          {
            text: { ru: 'Отобразить ответ с желтой иконкой предупреждения ("Низкое доверие: единственный устаревший источник").', en: 'Display the answer with a yellow warning icon ("Low trust: single outdated source").' },
            reaction: { 
              ru: 'Именно! Интерфейс должен явно транслировать уровень уверенности системы, чтобы человек мог принять окончательное решение.', 
              en: 'Exactly! The UI must explicitly broadcast the system\'s confidence level so the human can make the final call.' 
            },
            isCorrect: true
          }
        ]
      }
    }
  ];
