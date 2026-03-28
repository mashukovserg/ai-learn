import { LocalizedTask } from '../types';

export const aiResearchTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Какую главную академическую проблему решает использование ИИ-агентов в исследованиях?', 
        en: 'What main academic problem does the use of AI agents in research solve?' 
      },
      options: [
        { ru: 'Недостаток вычислительных мощностей у университетов', en: 'Lack of computational power at universities' },
        { ru: 'Информационный шум и неспособность человека прочитать тысячи ежедневно публикуемых статей', en: 'Information noise and human inability to read thousands of daily published papers' },
        { ru: 'Дороговизна лабораторного оборудования', en: 'The high cost of laboratory equipment' }
      ],
      answer: { ru: 'Информационный шум и неспособность человека прочитать тысячи ежедневно публикуемых статей', en: 'Information noise and human inability to read thousands of daily published papers' },
      explanation: { 
        ru: 'Верно! Агенты помогают преодолеть "исследовательский тупик", вызванный гигантским объемом публикаций.', 
        en: 'Correct! Agents help overcome the "research bottleneck" caused by the massive volume of publications.' 
      }
    },
    {
      id: 2,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите шаги "Автономного цикла исследования" (поиск и фильтрация).', 
        en: 'Sort the steps of the "Autonomous Research Loop" (search and filtering).' 
      },
      initialItems: [
        { ru: 'Семантическое переранжирование (Semantic Reranking) абстрактов', en: 'Semantic Reranking of abstracts' },
        { ru: 'Формулирование и расширение базового запроса (Query Expansion)', en: 'Formulation and expansion of the base query' },
        { ru: 'Скачивание метаданных сотен статей через API', en: 'Downloading metadata of hundreds of papers via API' },
        { ru: 'Чтение полных PDF-текстов только топовых релевантных статей', en: 'Reading full PDF texts of only the top relevant papers' }
      ],
      correctOrder: [
        { ru: 'Формулирование и расширение базового запроса (Query Expansion)', en: 'Formulation and expansion of the base query' },
        { ru: 'Скачивание метаданных сотен статей через API', en: 'Downloading metadata of hundreds of papers via API' },
        { ru: 'Семантическое переранжирование (Semantic Reranking) абстрактов', en: 'Semantic Reranking of abstracts' },
        { ru: 'Чтение полных PDF-текстов только топовых релевантных статей', en: 'Reading full PDF texts of only the top relevant papers' }
      ],
      explanation: { 
        ru: 'Правильно! ИИ сначала "забрасывает широкую сеть", затем умно фильтрует шум, и только потом читает полные тексты.', 
        en: 'Correct! The AI first "casts a wide net," then smartly filters noise, and only then reads full texts.' 
      },
      answer: ''
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем заключается алгоритм "Снежный ком" (Recursive Summarization) при работе с сотнями статей?', 
        en: 'What is the "Snowball" algorithm (Recursive Summarization) when working with hundreds of papers?' 
      },
      options: [
        { ru: 'ИИ читает все статьи одновременно в одном гигантском промпте', en: 'The AI reads all papers simultaneously in one giant prompt' },
        { ru: 'Каждая статья сжимается отдельно (атомарно), а затем ИИ пишет финальный обзор на основе этих сжатых выжимок', en: 'Each paper is compressed individually (atomically), and then the AI writes a final review based on these dense summaries' },
        { ru: 'ИИ просто берет случайные предложения из каждой статьи', en: 'The AI just takes random sentences from each paper' }
      ],
      answer: { ru: 'Каждая статья сжимается отдельно (атомарно), а затем ИИ пишет финальный обзор на основе этих сжатых выжимок', en: 'Each paper is compressed individually (atomically), and then the AI writes a final review based on these dense summaries' },
      explanation: { 
        ru: 'Правильно! Это позволяет обойти ограничение контекстного окна и сохранить точность фактов.', 
        en: 'Correct! This bypasses the context window limit and preserves factual accuracy.' 
      }
    },
    {
      id: 4,
      type: 'multiple-select',
      question: { 
        ru: 'Для чего ИИ-исследователю нужен инструмент Code Interpreter?', 
        en: 'Why does an AI researcher need the Code Interpreter tool?' 
      },
      options: [
        { ru: 'Для извлечения сырых данных из PDF-таблиц', en: 'To extract raw data from PDF tables' },
        { ru: 'Для самостоятельного пересчета p-value и проверки математики авторов статьи', en: 'To independently recalculate p-values and verify the authors\' math' },
        { ru: 'Для взлома серверов научных журналов', en: 'To hack scientific journal servers' },
        { ru: 'Для создания красивых 3D-графиков', en: 'To create beautiful 3D graphs' }
      ],
      answer: [
        { ru: 'Для извлечения сырых данных из PDF-таблиц', en: 'To extract raw data from PDF tables' },
        { ru: 'Для самостоятельного пересчета p-value и проверки математики авторов статьи', en: 'To independently recalculate p-values and verify the authors\' math' }
      ],
      explanation: { 
        ru: 'Верно! Code Interpreter превращает языковую модель (которая плохо считает) в строгого математического аудитора.', 
        en: 'Correct! Code Interpreter turns a language model (which is bad at math) into a strict mathematical auditor.' 
      }
    },
    {
      id: 5,
      type: 'input',
      question: { 
        ru: 'Какая метрика (идентификатор) используется в жестких гейтах агентов для проверки того, что научная статья реально существует, а не выдумана ИИ?', 
        en: 'What metric (identifier) is used in strict agent gates to verify that a scientific paper actually exists and wasn\'t hallucinated by AI?' 
      },
      answer: 'DOI',
      hint: { ru: 'Три буквы: Digital Object Identifier.', en: 'Three letters: Digital Object Identifier.' },
      explanation: { 
        ru: 'Правильно! Проверка по DOI через CrossRef гарантированно убивает "призрачные ссылки".', 
        en: 'Correct! Verifying via DOI through CrossRef guarantees killing "ghost references".' 
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: { ru: 'Этика соавторства', en: 'Ethics of Co-authorship' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Твой агент провел фантастическую работу: нашел 200 статей, проанализировал данные и написал отличный черновик обзора. Ты отправляешь статью в Nature. Укажешь ли ты агента (например, GPT-4) в качестве соавтора?',
          en: 'Your agent did fantastic work: found 200 papers, analyzed data, and wrote a great draft review. You are submitting to Nature. Do you list the agent (e.g., GPT-4) as a co-author?'
        },
        userOptions: [
          {
            text: { ru: 'Да, это честно, ведь он сделал 80% работы.', en: 'Yes, it is fair, since it did 80% of the work.' },
            reaction: { 
              ru: 'Академическое сообщество против. Соавторство означает юридическую и моральную ответственность за написанное. ИИ не может пойти в тюрьму за фальсификацию данных.', 
              en: 'The academic community disagrees. Co-authorship implies legal and moral responsibility. AI cannot go to jail for data falsification.' 
            },
            isCorrect: false
          },
          {
            text: { ru: 'Нет, ИИ не может быть соавтором. Я опишу его роль в методологии (раздел Methods), чтобы обеспечить прозрачность.', en: 'No, AI cannot be a co-author. I will describe its role in the methodology section to ensure transparency.' },
            reaction: { 
              ru: 'Абсолютно верно! Это текущий золотой стандарт. ИИ — это инструмент (как микроскоп), а ответственность за выводы всегда несет человек.', 
              en: 'Absolutely correct! This is the current gold standard. AI is a tool (like a microscope), and the human always bears responsibility for the conclusions.' 
            },
            isCorrect: true
          }
        ]
      }
    }
  ];
