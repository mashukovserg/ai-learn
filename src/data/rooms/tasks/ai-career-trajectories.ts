import { LocalizedTask } from '../types';

export const aiCareerTrajectoriesTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Какая ветка в комнате сильнее всего ориентирована на выпуск надежных AI-систем в продакшн?',
      en: 'Which branch in this room is most centered on shipping reliable AI systems to production?'
    },
    options: [
      {
        ru: 'Research-трек',
        en: 'Research track'
      },
      {
        ru: 'IC / platform-трек',
        en: 'IC / platform track'
      },
      {
        ru: 'Management-трек',
        en: 'Management track'
      }
    ],
    answer: {
      ru: 'IC / platform-трек',
      en: 'IC / platform track'
    },
    explanation: {
      ru: 'Верно. В теории этот путь описан как траектория для людей, которым нравится владение продакшном, отладка, компромиссы по производительности и измеримое улучшение пользовательского результата.',
      en: 'Correct. The theory describes this path as the one for people who enjoy production ownership, debugging, performance tradeoffs, and measurable user improvement.'
    }
  },
  {
    id: 2,
    type: 'multiple-select',
    question: {
      ru: 'Какие роли показаны как типичные развилки после senior IC-уровня?',
      en: 'Which roles are shown as common branches after senior IC level?'
    },
    options: [
      {
        ru: 'Research Scientist',
        en: 'Research Scientist'
      },
      {
        ru: 'ML Platform Engineer',
        en: 'ML Platform Engineer'
      },
      {
        ru: 'AI Product Manager',
        en: 'AI Product Manager'
      },
      {
        ru: 'Engineering Manager',
        en: 'Engineering Manager'
      },
      {
        ru: 'HR Partner',
        en: 'HR Partner'
      }
    ],
    answer: [
      {
        ru: 'Research Scientist',
        en: 'Research Scientist'
      },
      {
        ru: 'ML Platform Engineer',
        en: 'ML Platform Engineer'
      },
      {
        ru: 'AI Product Manager',
        en: 'AI Product Manager'
      },
      {
        ru: 'Engineering Manager',
        en: 'Engineering Manager'
      }
    ],
    explanation: {
      ru: 'Да. Именно эти четыре роли вынесены в блок развилок после senior AI Engineer. HR Partner в этой комнате не рассматривается как отдельная траектория.',
      en: 'Yes. Those four roles appear in the branch-point block after senior AI Engineer. HR Partner is not presented as a separate trajectory in this lesson.'
    }
  },
  {
    id: 3,
    type: 'sorting',
    question: {
      ru: 'Расположите основной IC-путь от более раннего этапа к более позднему.',
      en: 'Order the main IC path from the earlier stage to the later one.'
    },
    initialItems: [
      {
        ru: 'Staff / Principal AI Engineer',
        en: 'Staff / Principal AI Engineer'
      },
      {
        ru: 'AI Engineer',
        en: 'AI Engineer'
      },
      {
        ru: 'Senior AI Engineer',
        en: 'Senior AI Engineer'
      },
      {
        ru: 'Junior AI Builder',
        en: 'Junior AI Builder'
      }
    ],
    correctOrder: [
      {
        ru: 'Junior AI Builder',
        en: 'Junior AI Builder'
      },
      {
        ru: 'AI Engineer',
        en: 'AI Engineer'
      },
      {
        ru: 'Senior AI Engineer',
        en: 'Senior AI Engineer'
      },
      {
        ru: 'Staff / Principal AI Engineer',
        en: 'Staff / Principal AI Engineer'
      }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала идет база и узкие артефакты, затем продакшн-ответственность, потом system ownership и только после этого влияние на несколько команд.',
      en: 'The path starts with fundamentals and narrow artifacts, then moves to production responsibility, then system ownership, and only after that to multi-team leverage.'
    }
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Разложите роли по их основному типу фокуса.',
      en: 'Sort the roles by their primary type of focus.'
    },
    categorize: {
      items: [
        {
          ru: 'Research Scientist',
          en: 'Research Scientist'
        },
        {
          ru: 'ML Platform Engineer',
          en: 'ML Platform Engineer'
        },
        {
          ru: 'AI Product Manager',
          en: 'AI Product Manager'
        },
        {
          ru: 'Engineering Manager',
          en: 'Engineering Manager'
        }
      ],
      buckets: [
        {
          ru: 'Research depth',
          en: 'Research depth'
        },
        {
          ru: 'Systems at scale',
          en: 'Systems at scale'
        },
        {
          ru: 'Business and team leverage',
          en: 'Business and team leverage'
        }
      ],
      correctMapping: {
        'Research Scientist': 'Research depth',
        'ML Platform Engineer': 'Systems at scale',
        'AI Product Manager': 'Business and team leverage',
        'Engineering Manager': 'Business and team leverage',
      }
    },
    answer: '',
    explanation: {
      ru: 'Research Scientist идет в глубину методов. ML Platform Engineer строит системный рычаг. Product Manager и Engineering Manager усиливают влияние через roadmap, координацию и людей.',
      en: 'Research Scientist goes deeper on methods. ML Platform Engineer builds system leverage. Product Manager and Engineering Manager multiply impact through roadmap, coordination, and people.'
    }
  },
  {
    id: 5,
    type: 'mentor',
    question: {
      ru: 'Помогите ученику выбрать траекторию.',
      en: 'Help the learner choose a trajectory.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Я люблю статьи, долгие эксперименты и сложные гипотезы. При этом мне не очень интересны people-management и планирование roadmap. Какая ветка выглядит наиболее естественной?',
        en: 'I enjoy papers, long experiments, and difficult hypotheses. At the same time, I am not very interested in people management or roadmap planning. Which branch looks the most natural?'
      },
      userOptions: [
        {
          text: {
            ru: 'Скорее всего research-трек, потому что мотивация звучит как интерес к новизне и экспериментальной глубине.',
            en: 'Most likely the research track, because the motivation sounds aligned with novelty and experimental depth.'
          },
          reaction: {
            ru: 'Именно. В комнате research описан как путь для людей, которых по-настоящему интересуют нерешенные вопросы, гипотезы и строгая проверка идей.',
            en: 'Exactly. The room describes research as the path for people who are genuinely energized by unanswered questions, hypotheses, and rigorous experimental validation.'
          },
          isCorrect: true
        },
        {
          text: {
            ru: 'Лучше сразу идти в management, потому что senior-уровень все равно ведет к руководству людьми.',
            en: 'It is better to go straight into management, because senior level eventually leads to people leadership anyway.'
          },
          reaction: {
            ru: 'Не обязательно. Теория прямо говорит, что IC-лестница и research-лестница являются полноценными карьерными траекториями, а не ожиданием перед management.',
            en: 'Not necessarily. The theory explicitly says that the IC ladder and the research ladder are complete career paths, not just waiting rooms before management.'
          }
        },
        {
          text: {
            ru: 'Лучше выбрать AI Product Manager, потому что product-роль поможет читать больше статей.',
            en: 'Choose AI Product Manager, because a product role will help you read more papers.'
          },
          reaction: {
            ru: 'Скорее нет. Product-ветка в этой комнате описана как траектория для тех, кто любит переводить возможности моделей в roadmap, метрики и пользовательскую ценность.',
            en: 'Not really. The product branch in this room is described as the path for people who enjoy translating model capability into roadmap, metrics, and user value.'
          }
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Хороший выбор траектории начинается с источника энергии: новизна, надежная доставка систем или результат через команду.',
      en: 'A good trajectory choice starts with the source of energy: novelty, reliable system delivery, or impact through a team.'
    }
  },
  {
    id: 6,
    type: 'scenario',
    question: {
      ru: 'Выберите лучший первый годовой план перехода в AI.',
      en: 'Choose the strongest first-year plan for moving into AI.'
    },
    scenario: {
      brief: {
        ru: 'Вы backend-инженер и хотите перейти в AI за 12 месяцев. У вас есть работа на полный день, поэтому путь должен быть реалистичным, а результат - заметным для будущего работодателя.',
        en: 'You are a backend engineer who wants to move into AI within 12 months. You have a full-time job, so the path must be realistic and the result must be visible to a future employer.'
      },
      constraints: [
        {
          ru: 'Нельзя полностью уйти в учебу без практического результата.',
          en: 'You cannot disappear into study without a practical output.'
        },
        {
          ru: 'Нужно собрать хотя бы один публичный или демонстрируемый артефакт.',
          en: 'You need at least one public or demo-ready artifact.'
        },
        {
          ru: 'Важно сохранить инженерную дисциплину, а не только читать теорию.',
          en: 'You need engineering discipline, not just theory consumption.'
        }
      ],
      choices: [
        {
          text: {
            ru: 'Потратить почти весь год только на чтение статей и ждать идеальной математической базы перед первой практикой.',
            en: 'Spend almost the entire year only reading papers and wait for perfect mathematical foundations before touching practice.'
          },
          outcome: {
            ru: 'Глубина чтения растет, но к концу года у вас почти нет доказательства того, что вы умеете строить рабочие AI-системы.',
            en: 'Your reading depth increases, but by the end of the year you have almost no proof that you can build working AI systems.'
          },
          score: 24
        },
        {
          text: {
            ru: 'Пройти много разрозненных курсов по промптам и объявить себя AI-экспертом без реального проекта.',
            en: 'Take many disconnected prompt courses and declare yourself an AI expert without a real project.'
          },
          outcome: {
            ru: 'Возникает широкий, но поверхностный профиль без инженерного сигнала и без истории доставки.',
            en: 'You end up with a broad but shallow profile, without an engineering signal or a shipping story.'
          },
          score: 36
        },
        {
          text: {
            ru: 'Обновить Python и data-навыки, затем собрать один узкий AI-проект с eval-дисциплиной, измерениями и реальным деплоем или демонстрацией.',
            en: 'Refresh Python and data skills, then build one focused AI project with eval discipline, measurement, and a real deployment or demo.'
          },
          outcome: {
            ru: 'Это создает сильный переходный сигнал: у вас есть и инженерная база, и доказательство того, что вы умеете доводить AI-фичу до рабочего состояния.',
            en: 'This creates a strong transition signal: you now have both engineering foundations and evidence that you can carry an AI feature to a working state.'
          },
          score: 92
        },
        {
          text: {
            ru: 'Сразу попробовать перейти в management-роль, не выпустив ни одной AI-системы своими руками.',
            en: 'Try to jump straight into a management role before shipping a single AI system hands-on.'
          },
          outcome: {
            ru: 'Стратегический язык появляется, но без личного опыта построения систем он звучит неубедительно.',
            en: 'You gain strategic language, but without personal system-building experience it sounds unconvincing.'
          },
          score: 18
        }
      ],
      passingScore: 70
    },
    answer: '',
    explanation: {
      ru: 'Для первого перехода в AI сильнее всего работает комбинация из инженерной базы, узкого проекта, измерения качества и реального демонстрируемого результата.',
      en: 'For a first move into AI, the strongest combination is engineering foundations, one focused project, quality measurement, and a real demonstrable outcome.'
    }
  }
];
