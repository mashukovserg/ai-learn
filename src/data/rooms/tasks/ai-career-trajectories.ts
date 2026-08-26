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
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'В открытой карьерной рамке Dropbox software-инженеры проходят уровни IC1–IC7. Какой диапазон та же рамка отводит ML-инженерам этой компании?',
      en: 'In the public Dropbox career framework, software engineers run from IC1 to IC7. What range does the same framework give that company’s ML engineers?'
    },
    options: [
      { ru: 'IC1–IC5', en: 'IC1–IC5' },
      { ru: 'Тот же IC1–IC7', en: 'The same IC1–IC7' },
      { ru: 'M3–M7', en: 'M3–M7' },
      { ru: 'Уровней у ML-инженеров рамка не задаёт', en: 'The framework sets no levels for ML engineers' }
    ],
    answer: { ru: 'IC1–IC5', en: 'IC1–IC5' },
    explanation: {
      ru: 'Верно. У ML-инженеров в рамке Dropbox уровни IC1–IC5, тогда как у software-инженеров — IC1–IC7, а у менеджеров отдельная ветка M3–M7. Это и есть главный вывод главы 1: потолок лестницы зависит от специальности и от компании, поэтому титул сам по себе никуда не переносится.',
      en: 'Correct. ML engineers run IC1–IC5 in the Dropbox framework, while software engineers run IC1–IC7 and managers sit on a separate M3–M7 branch. That is the point of Chapter 1: the ceiling depends on the speciality and the company, so a title on its own does not transfer anywhere.'
    }
  },
  {
    id: 8,
    type: 'multiple-select',
    question: {
      ru: 'Через какие оси рамка Dropbox формулирует ожидания уровня? Выберите все подходящие.',
      en: 'Which axes does the Dropbox framework use to state level expectations? Select all that apply.'
    },
    options: [
      { ru: 'Scope — размер задачи', en: 'Scope — the size of the problem' },
      { ru: 'Collaborative reach — насколько далеко расходится круг согласования', en: 'Collaborative reach — how far the circle of agreement extends' },
      { ru: 'Levers for impact — чем именно вы двигаете результат', en: 'Levers for impact — what you actually move the result with' },
      { ru: 'Количество освоенных инструментов и фреймворков', en: 'The number of tools and frameworks learned' },
      { ru: 'Стаж в годах', en: 'Years of experience' }
    ],
    answer: [
      { ru: 'Scope — размер задачи', en: 'Scope — the size of the problem' },
      { ru: 'Collaborative reach — насколько далеко расходится круг согласования', en: 'Collaborative reach — how far the circle of agreement extends' },
      { ru: 'Levers for impact — чем именно вы двигаете результат', en: 'Levers for impact — what you actually move the result with' }
    ],
    explanation: {
      ru: 'Да, это три оси из главы 2: scope, collaborative reach и levers for impact. Ни количество инструментов, ни стаж в рамке уровнем не считаются — инструменты это способ, а не мера.',
      en: 'Yes — those are the three axes from Chapter 2: scope, collaborative reach, and levers for impact. Neither the tool count nor years of service is a level in the framework: tools are a means, not a measure.'
    }
  },
  {
    id: 9,
    type: 'input',
    question: {
      ru: 'Сколько архетипов staff-инженера описывает Уилл Ларсон? Ответьте числом.',
      en: 'How many staff-engineer archetypes does Will Larson describe? Answer with a number.'
    },
    answer: ['4', 'четыре', 'four'],
    hint: {
      ru: 'Они перечислены в главе 2: двое годами работают с одними людьми, двое перемещаются от пожара к пожару.',
      en: 'They are listed in Chapter 2: two work with the same people for years, two bounce from fire to fire.'
    },
    explanation: {
      ru: 'Верно, четыре: Tech Lead, Architect, Solver и Right Hand. Первые двое годами работают с одними людьми над одними проблемами, вторые двое переходят от пожара к пожару — это разные рабочие недели, а не разные ступеньки.',
      en: 'Correct — four: Tech Lead, Architect, Solver, and Right Hand. The first two work with the same people on the same problems for years, the latter two move from fire to fire: different working weeks, not different rungs.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Как Чарити Мейджорс описывает переход инженера в менеджмент?',
      en: 'How does Charity Majors describe an engineer’s move into management?'
    },
    options: [
      { ru: 'Как смену профессии, а не повышение', en: 'As a change of profession, not a promotion' },
      { ru: 'Как повышение, закрепляющее senior-статус', en: 'As a promotion that locks in senior status' },
      { ru: 'Как финальную ступень IC-трека', en: 'As the final rung of the IC track' },
      { ru: 'Как способ ускорить рост инженерных навыков', en: 'As a way to accelerate the growth of engineering skills' }
    ],
    answer: { ru: 'Как смену профессии, а не повышение', en: 'As a change of profession, not a promotion' },
    explanation: {
      ru: 'Верно: «Management is NOT a promotion. It is a change of profession». Из этого следует и обратное — возврат в IC-трек не понижение, терять нечего. Инженерные навыки, по её же наблюдению, за время в менеджменте тупеют, поэтому она и предлагает маятник: туда и обратно, а не в одну сторону.',
      en: 'Correct: "Management is NOT a promotion. It is a change of profession." The converse follows — returning to the IC track is not a demotion, because there is nothing to give up. Engineering skills decay while you manage, by her own account, which is why she proposes the pendulum: back and forth, not one way.'
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'В эксперименте PNAS (2025) школьникам дали GPT Base и GPT Tutor. Что произошло с группой GPT Base после того, как доступ к помощнику убрали?',
      en: 'In the PNAS (2025) experiment students were given GPT Base and GPT Tutor. What happened to the GPT Base group after access to the assistant was removed?'
    },
    options: [
      { ru: 'Она написала контрольную на 17% хуже тех, у кого доступа не было вообще', en: 'It scored 17% below students who had never had access at all' },
      { ru: 'Она сохранила преимущество, полученное на тренировке', en: 'It kept the advantage it had gained during practice' },
      { ru: 'Она написала контрольную так же, как группа GPT Tutor', en: 'It scored the same as the GPT Tutor group' },
      { ru: 'Она написала контрольную на 48% лучше контрольной группы', en: 'It scored 48% above the control group' }
    ],
    answer: {
      ru: 'Она написала контрольную на 17% хуже тех, у кого доступа не было вообще',
      en: 'It scored 17% below students who had never had access at all'
    },
    hint: {
      ru: 'Глава 5: +48% и +127% — это результаты тренировочных сессий, пока помощник был под рукой. Контрольную писали без него.',
      en: 'Chapter 5: +48% and +127% are the practice-session results, measured while the assistant was available. The exam was written without it.'
    },
    explanation: {
      ru: 'Верно. +48% (GPT Base) и +127% (GPT Tutor) — прирост оценок на тренировке, пока помощник был доступен. Когда доступ убрали, группа GPT Base оказалась на 17% ниже тех, кто не пользовался помощником вовсе. У GPT Tutor этот провал в основном исчез, и единственная разница между версиями была в том, отдавал помощник готовый ответ или подсказку.',
      en: 'Correct. +48% (GPT Base) and +127% (GPT Tutor) are the grade gains during practice, while the assistant was available. Once access was removed, the GPT Base group came out 17% below students who had never used an assistant. For GPT Tutor that drop largely disappeared — and the only difference between the versions was whether the assistant returned a finished answer or a hint.'
    }
  },
  {
    id: 12,
    type: 'categorize',
    question: {
      ru: 'Разложите ситуации по тому, что вы передаёте модели: механическую работу (когнитивная разгрузка) или само решение (когнитивный долг).',
      en: 'Sort the situations by what you are handing to the model: mechanical work (cognitive offloading) or the decision itself (cognitive debt).'
    },
    categorize: {
      items: [
        { ru: 'Переименовать поле во всех файлах проекта', en: 'Rename a field across every file in the project' },
        { ru: 'Вспомнить забытый синтаксис знакомой конструкции', en: 'Look up forgotten syntax for a construct you know' },
        { ru: 'Выбрать схему хранения данных, не разобравшись в вариантах', en: 'Pick a data storage scheme without working through the options' },
        { ru: 'Принять сгенерированный код, который вы не сможете объяснить завтра', en: 'Accept generated code you could not explain tomorrow' }
      ],
      buckets: [
        { ru: 'Когнитивная разгрузка', en: 'Cognitive offloading' },
        { ru: 'Когнитивный долг', en: 'Cognitive debt' }
      ],
      correctMapping: {
        'Rename a field across every file in the project': 'Cognitive offloading',
        'Look up forgotten syntax for a construct you know': 'Cognitive offloading',
        'Pick a data storage scheme without working through the options': 'Cognitive debt',
        'Accept generated code you could not explain tomorrow': 'Cognitive debt',
      }
    },
    answer: '',
    explanation: {
      ru: 'Разделитель из главы 5 — не сложность задачи, а то, отдаёте вы работу или суждение. Переименование и забытый синтаксис — механика, которую вы и так понимаете: это разгрузка. Выбор схемы хранения и приём необъяснимого кода отдают модели решение, и основание, по которому оно выбрано, к вам не возвращается — это долг, который вернётся при первой поломке.',
      en: 'The dividing line from Chapter 5 is not how hard the task is, but whether you hand over work or judgement. A rename and forgotten syntax are mechanics you already understand: that is offloading. Choosing a storage scheme and accepting unexplainable code hand the decision to the model, and the reasoning behind it never reaches you — that is debt, and it comes due at the first breakage.'
    }
  }
];
