import { LocalizedTask } from '../types';

export const frontierEvalsLogicTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "Frontier Evals" в контексте обучения моделей-лидеров?',
      en: 'What are "Frontier Evals" in the context of training leading models?'
    },
    options: [
      { ru: 'Проверка скорости работы серверов', en: 'Server speed check' },
      { ru: 'Тесты на границе человеческих знаний, которые модели не видели при обучении', en: 'Tests at the frontier of human knowledge that models haven\'t seen during training' },
      { ru: 'Сравнение цен на API разных компаний', en: 'Price comparison of different company APIs' },
      { ru: 'Измерение количества параметров модели', en: 'Measuring the number of model parameters' }
    ],
    answer: {
      ru: 'Тесты на границе человеческих знаний, которые модели не видели при обучении',
      en: 'Tests at the frontier of human knowledge that models haven\'t seen during training'
    },
    explanation: {
      ru: 'Фронтирные тесты направлены на проверку способности модели рассуждать (reasoning), а не просто воспроизводить заученные факты.',
      en: 'Frontier tests aim to verify a model\'s ability to reason rather than just reproduce memorized facts.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'В чем уникальность бенчмарка "Humanity\'s Last Exam" (Последний экзамен человечества)?',
      en: 'What is unique about the "Humanity\'s Last Exam" benchmark?'
    },
    options: [
      { ru: 'В нем 1 миллион вопросов', en: 'It has 1 million questions' },
      { ru: 'Его вопросы никогда не публиковались в учебниках и интернете, чтобы избежать утечек', en: 'Its questions were never published in textbooks or on the internet to avoid leaks' },
      { ru: 'Он проверяет только знание истории', en: 'It only tests history knowledge' },
      { ru: 'Его составил сам ИИ', en: 'It was composed by AI itself' }
    ],
    answer: {
      ru: 'Его вопросы никогда не публиковались в учебниках и интернете, чтобы избежать утечек',
      en: 'Its questions were never published in textbooks or on the internet to avoid leaks'
    },
    explanation: {
      ru: 'Ученые и эксперты писали вопросы с нуля, основываясь на своих самых сложных исследовательских задачах.',
      en: 'Scientists and experts wrote the questions from scratch, based on their most complex research tasks.'
    }
  },
  {
    id: 3,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите этапы "насыщения" бенчмарка (benchmark saturation) в правильном порядке:',
      en: 'Arrange the stages of "benchmark saturation" in the correct order:'
    },
    initialItems: [
      { ru: 'Модели достигают 90%+ точности', en: 'Models reach 90%+ accuracy' },
      { ru: 'Бенчмарк становится бесполезным для оценки новых моделей', en: 'The benchmark becomes useless for evaluating new models' },
      { ru: 'Модели показывают 5-10% точности', en: 'Models show 5-10% accuracy' },
      { ru: 'Публикация нового сложного бенчмарка', en: 'Publication of a new complex benchmark' }
    ],
    correctOrder: [
      { ru: 'Публикация нового сложного бенчмарка', en: 'Publication of a new complex benchmark' },
      { ru: 'Модели показывают 5-10% точности', en: 'Models show 5-10% accuracy' },
      { ru: 'Модели достигают 90%+ точности', en: 'Models reach 90%+ accuracy' },
      { ru: 'Бенчмарк становится бесполезным для оценки новых моделей', en: 'The benchmark becomes useless for evaluating new models' }
    ],
    explanation: {
      ru: 'Когда модели "побеждают" тест, индустрии нужны новые, еще более сложные испытания.',
      en: 'When models "beat" a test, the industry needs new, even more complex challenges.'
    }
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое «режим рассуждений» (reasoning paradigm) в новых моделях?',
      en: 'What is the "reasoning paradigm" in new models?'
    },
    options: [
      { ru: 'Способность модели дольше думать перед ответом (Test-time compute)', en: 'The model\'s ability to think longer before answering (Test-time compute)' },
      { ru: 'Простое предсказание следующего слова', en: 'Simple next-word prediction' },
      { ru: 'Поиск информации в базе данных', en: 'Searching for information in a database' },
      { ru: 'Использование эмодзи в ответах', en: 'Using emojis in responses' }
    ],
    answer: {
      ru: 'Способность модели дольше думать перед ответом (Test-time compute)',
      en: 'The model\'s ability to think longer before answering (Test-time compute)'
    },
    explanation: {
      ru: 'Вместо мгновенного ответа модель проходит через внутренние циклы проверки и поиска путей решения.',
      en: 'Instead of an instant response, the model goes through internal verification and problem-solving path cycles.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Почему обычные тесты (MMLU и др.) перестают работать для оценки фронтирных моделей?',
      en: 'Why do regular tests (like MMLU) stop working for evaluating frontier models?'
    },
    options: [
      { ru: 'ИИ выучил ответы: вопросы старых тестов утекли в обучающую выборку (contamination)', en: 'AI memorized the answers: old test questions leaked into the training set (contamination)' },
      { ru: 'Модели отказываются отвечать на вопросы старых тестов', en: 'Models refuse to answer old test questions' },
      { ru: 'Людям надоело их проверять', en: 'Humans are tired of checking them' },
      { ru: 'Старые тесты слишком дороги в прогоне', en: 'Old tests are too expensive to run' }
    ],
    answer: {
      ru: 'ИИ выучил ответы: вопросы старых тестов утекли в обучающую выборку (contamination)',
      en: 'AI memorized the answers: old test questions leaked into the training set (contamination)'
    },
    explanation: {
      ru: 'Контаминация — утечка вопросов и ответов теста в обучающие данные — главная проблема старых бенчмарков: эксперимент GSM1k показал падение до 8 п.п. на свежих задачах той же трудности. Вторая причина — насыщение: за 90%+ тест перестаёт различать сильные модели.',
      en: 'Contamination — test questions and answers leaking into training data — is the primary problem with old benchmarks: the GSM1k experiment showed drops of up to 8 points on fresh problems of equal difficulty. The second cause is saturation: past 90%+ a test stops telling strong models apart.'
    }
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Разделите типы тестов на "Традиционные" и "Фронтирные":',
      en: 'Divide the test types into "Traditional" and "Frontier":'
    },
    answer: '',
    explanation: {
      ru: 'Традиционные тесты часто опираются на статические знания, фронтирные — на динамическое решение проблем.',
      en: 'Traditional tests often rely on static knowledge, while frontier tests rely on dynamic problem solving.'
    },
    categorize: {
      items: [
        { ru: 'MMLU (вопросы из интернета)', en: 'MMLU (internet questions)' },
        { ru: 'Humanity\'s Last Exam (новые научные задачи)', en: 'Humanity\'s Last Exam (new scientific tasks)' },
        { ru: 'Тест Тьюринга (в чате)', en: 'Turing Test (chat-based)' },
        { ru: 'Сложное многоэтапное планирование агента', en: 'Complex multi-step agent planning' },
        { ru: 'Проверка грамматики', en: 'Grammar check' }
      ],
      buckets: [
        { ru: 'Традиционные (Заучивание/Факты)', en: 'Traditional (Memorization/Facts)' },
        { ru: 'Фронтирные (Рассуждения/Сложность)', en: 'Frontier (Reasoning/Complexity)' }
      ],
      correctMapping: {
        'MMLU (internet questions)': 'Traditional (Memorization/Facts)',
        'Humanity\'s Last Exam (new scientific tasks)': 'Frontier (Reasoning/Complexity)',
        'Turing Test (chat-based)': 'Traditional (Memorization/Facts)',
        'Complex multi-step agent planning': 'Frontier (Reasoning/Complexity)',
        'Grammar check': 'Traditional (Memorization/Facts)',
      }
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что происходит с моделью, когда мы даем ей "день на раздумья" в сложных эвалах?',
      en: 'What happens to a model when we give it "a day to think" in complex evals?'
    },
    options: [
      { ru: 'Она перегревается и ломается', en: 'It overheats and breaks' },
      { ru: 'Точность значительно растет за счет перебора и проверки гипотез (scaling compute at test-time)', en: 'Accuracy increases significantly through iteration and hypothesis checking (scaling compute at test-time)' },
      { ru: 'Она начинает писать стихи вместо решения задачи', en: 'It starts writing poetry instead of solving the problem' },
      { ru: 'Ничего не меняется', en: 'Nothing changes' }
    ],
    answer: {
      ru: 'Точность значительно растет за счет перебора и проверки гипотез (scaling compute at test-time)',
      en: 'Accuracy increases significantly through iteration and hypothesis checking (scaling compute at test-time)'
    },
    explanation: {
      ru: 'Это новый закон масштабирования: интеллект можно повышать не только при обучении, но и при самом ответе.',
      en: 'This is a new scaling law: intelligence can be increased not only during training but also during the inference process itself.'
    }
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Выбор стратегии оценки',
      en: 'Evaluation Strategy Choice'
    },
    answer: '',
    explanation: {
      ru: 'Фронтирные эвалы должны основываться на актуальных, еще не решенных задачах науки.',
      en: 'Frontier evals should be based on current, as yet unsolved scientific problems.'
    },
    scenario: {
      brief: {
        ru: 'Вы разрабатываете модель для поиска лекарств от рака. Стандартные тесты она проходит на 100%. Как убедиться, что она реально делает открытия?',
        en: 'You are developing a model for cancer drug discovery. It passes standard tests with 100%. How can you ensure it\'s actually making discoveries?'
      },
      constraints: [
        { ru: 'Доступны лучшие биологи мира', en: 'The world\'s best biologists are available' },
        { ru: 'Нужно исключить "повторение" известных статей', en: 'Must exclude "repeating" known papers' }
      ],
      choices: [
        {
          text: { ru: 'Дать ей еще больше вопросов из учебников биологии', en: 'Give it even more questions from biology textbooks' },
          outcome: { ru: 'Бесполезно. Она их уже выучила.', en: 'Useless. It has already learned them.' },
          score: 10
        },
        {
          text: { ru: 'Создать "Frontier Eval" на основе нерешенных проблем из текущих лабораторий этих биологов', en: 'Create a "Frontier Eval" based on unsolved problems from these biologists\' current labs' },
          outcome: { ru: 'Верно. Это единственный способ проверить реальную способность к инновациям.', en: 'Correct. This is the only way to verify real innovation capability.' },
          score: 100
        },
        {
          text: { ru: 'Посмотреть на размер модели в гигабайтах', en: 'Look at the model size in gigabytes' },
          outcome: { ru: 'Размер не гарантирует способность к открытиям.', en: 'Size does not guarantee discovery capability.' },
          score: 0
        }
      ],
      passingScore: 90
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'О галлюцинациях в эвалах',
      en: 'About Hallucinations in Evals'
    },
    answer: '',
    explanation: {
      ru: 'Эвалы нового поколения оценивают весь путь решения задачи.',
      en: 'Next-generation evals evaluate the entire problem-solving path.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Модель выдала правильный ответ в сложном тесте по физике, но ее решение выглядит как бред. Считать ли это успехом?',
        en: 'The model gave the correct answer in a complex physics test, but its reasoning looks like nonsense. Is this a success?'
      },
      userOptions: [
        {
          text: { ru: 'Да, ответ же правильный!', en: 'Yes, the answer is correct!' },
          reaction: { ru: 'Нет. В сложных задачах критически важна логика рассуждений (reasoning chain).', en: 'No. In complex tasks, the reasoning chain logic is critical.' },
          isCorrect: false
        },
        {
          text: { ru: 'Нет, мы должны проверять не только финальный ответ, но и корректность "цепочки мыслей" (Chain of Thought)', en: 'No, we should verify not only the final answer but also the "Chain of Thought" correctness' },
          reaction: { ru: 'Правильно! Именно логика рассуждений отделяет интеллект от удачного угадывания.', en: 'Correct! It is the reasoning logic that separates intelligence from a lucky guess.' },
          isCorrect: true,
          deepening: { ru: 'Эвалы нового поколения оценивают весь путь решения задачи.', en: 'Next-generation evals evaluate the entire problem-solving path.' }
        }
      ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Как фронтирные эвалы влияют на работу исследователей ИИ?',
      en: 'How do frontier evals influence AI researchers\' work?'
    },
    options: [
      { ru: 'Они мешают работать', en: 'They hinder work' },
      { ru: 'Они становятся "Северной звездой" (North Star), задавая цели для оптимизации моделей', en: 'They become the "North Star," setting goals for model optimization' },
      { ru: 'Они никак не влияют', en: 'They have no influence' },
      { ru: 'Они заменяют программистов', en: 'They replace programmers' }
    ],
    answer: {
      ru: 'Они становятся "Северной звездой" (North Star), задавая цели для оптимизации моделей',
      en: 'They become the "North Star," setting goals for model optimization'
    },
    explanation: {
      ru: 'Хороший бенчмарк направляет всю индустрию к решению действительно важных и сложных задач.',
      en: 'A good benchmark directs the entire industry toward solving truly important and complex tasks.'
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Что называют «compute gap» в дискуссиях о лидерстве стран в ИИ?',
      en: 'What does "compute gap" refer to in discussions of national AI leadership?'
    },
    options: [
      { ru: 'Разрыв в знаниях программистов', en: 'Gap in programmer knowledge' },
      { ru: 'Разрыв в доступных вычислительных мощностях и энергоснабжении между странами', en: 'Gap in available computing power and energy supply between nations' },
      { ru: 'Разница в цене чипов в разных магазинах', en: 'Difference in chip prices in different stores' },
      { ru: 'Задержка при ответе модели', en: 'Model response latency' }
    ],
    answer: {
      ru: 'Разрыв в доступных вычислительных мощностях и энергоснабжении между странами',
      en: 'Gap in available computing power and energy supply between nations'
    },
    explanation: {
      ru: 'Энергосеть и количество GPU становятся факторами национального суверенитета.',
      en: 'The energy grid and GPU count are becoming factors of national sovereignty.'
    }
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: {
      ru: 'Почему "Суверенитет данных" (Data Sovereignty) становится важнее открытого интернета?',
      en: 'Why is "Data Sovereignty" becoming more important than the open internet?'
    },
    options: [
      { ru: 'В интернете закончились картинки', en: 'The internet ran out of pictures' },
      { ru: 'Открытые данные интернета почти исчерпаны; преимущество дают уникальные, закрытые данные наций и компаний', en: 'Open internet data is nearly exhausted; unique, proprietary nation/company data provides the edge' },
      { ru: 'Интернет станет платным', en: 'The internet will become paid' },
      { ru: 'Все данные в интернете скоро станут галлюцинациями', en: 'All internet data will soon become hallucinations' }
    ],
    answer: {
      ru: 'Открытые данные интернета почти исчерпаны; преимущество дают уникальные, закрытые данные наций и компаний',
      en: 'Open internet data is nearly exhausted; unique, proprietary nation/company data provides the edge'
    },
    explanation: {
      ru: 'Проприетарные данные — это "новое топливо", которое невозможно просто скачать из сети.',
      en: 'Proprietary data is the "new fuel" that cannot be simply downloaded from the web.'
    }
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: {
      ru: 'Компания заявляет: «Grok — №1 на бенчмарке рассуждений». Как по принципам этой комнаты стоит трактовать такое заявление?',
      en: 'A company claims: "Grok is #1 on a reasoning benchmark." Per this room\'s principles, how should you interpret that claim?'
    },
    options: [
      { ru: 'Проверить условия: одинаковый режим и число попыток, отсутствие утечки данных теста, честное сравнение конфигураций — заявление поставщика требует независимой проверки.', en: 'Check the conditions: same mode and number of attempts, no test-data leakage, fair comparison of configurations — a vendor claim needs independent verification.' },
      { ru: 'Раз заявлено поставщиком — можно считать модель лучшей во всех задачах.', en: 'Since the vendor claims it, the model can be considered best at every task.' },
      { ru: 'Один бенчмарк полностью определяет качество модели на любых задачах.', en: 'A single benchmark fully determines a model\'s quality on all tasks.' }
    ],
    answer: { ru: 'Проверить условия: одинаковый режим и число попыток, отсутствие утечки данных теста, честное сравнение конфигураций — заявление поставщика требует независимой проверки.', en: 'Check the conditions: same mode and number of attempts, no test-data leakage, fair comparison of configurations — a vendor claim needs independent verification.' },
    explanation: {
      ru: 'Верно. Заявление поставщика — не доказательство: важны условия замера (режим, попытки, отсутствие контаминации, честные конфигурации), а один бенчмарк не покрывает все задачи.',
      en: 'Correct. A vendor claim is not proof: the measurement conditions matter (mode, attempts, no contamination, fair configurations), and one benchmark does not cover every task.'
    }
  }
];