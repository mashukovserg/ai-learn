import { LocalizedTask } from '../types';

export const aiSingularityTasks: LocalizedTask[] = [
      {
        id: 1,
        type: 'multiple-choice',
        question: { ru: 'Что лучше всего описывает концепцию технологической сингулярности?', en: 'What best describes the concept of technological singularity?' },      options: [        { ru: 'Момент, когда все люди заменяются роботами', en: 'The moment when all humans are replaced by robots' },        { ru: 'Точка, за которой прогресс становится настолько быстрым, что его невозможно предсказать', en: 'A point beyond which progress becomes so rapid it is impossible to predict' },        { ru: 'Дата выхода самой мощной видеокарты в мире', en: "The release date of the world\'s most powerful GPU" }      ],      answer: { ru: 'Точка, за которой прогресс становится настолько быстрым, что его невозможно предсказать', en: 'A point beyond which progress becomes so rapid it is impossible to predict' },      explanation: { ru: 'Верно. По аналогии с горизонтом событий черной дыры, сингулярность — это предел нашей способности предсказывать будущее.', en: 'Correct. Like the event horizon of a black hole, the singularity is the limit of our ability to predict the future.' }    },    {      id: 2,      type: 'input',      question: { ru: 'Как называется гипотетический процесс, при котором ИИ бесконечно улучшает свой собственный код?', en: 'What is the hypothetical process called where an AI infinitely improves its own code?' },      answer: { ru: 'Интеллектуальный взрыв', en: 'Intelligence explosion' },      hint: { ru: 'Второе слово — "взрыв".', en: 'Second word is "explosion".' },      explanation: { ru: 'Да. Рекурсивное самосовершенствование может привести к экспоненциальному росту когнитивных способностей.', en: 'Yes. Recursive self-improvement can lead to an exponential growth in cognitive abilities.' }    },    {      id: 3,      type: 'categorize',      question: { ru: 'Распределите идеи по лагерям в дебатах о сингулярности.', en: 'Categorize these ideas by their side in the singularity debate.' },      answer: '',      explanation: { ru: 'e/acc фокусируется на прогрессе и решении проблем, в то то время как скептики и doomers — на рисках выравнивания и экзистенциальных угрозах.', en: 'e/acc focuses on progress and problem-solving, while skeptics/doomers focus on alignment risks and existential threats.' },      categorize: {        items: [          { ru: 'Сингулярность победит смерть и голод', en: 'Singularity will defeat death and hunger' },          { ru: "Проблема \"изготовителя скрепок\"", en: "The \"paperclip maximizer\" problem" },          { ru: 'Ускорение прогресса любой ценой (e/acc)', en: 'Accelerate progress at all costs (e/acc)' },          { ru: 'Риск потери контроля над ценностями ИИ', en: 'Risk of losing control over AI values' }        ],        buckets: [          { ru: 'Оптимисты', en: 'Optimists' },          { ru: 'Скептики / Doomers', en: 'Skeptics / Doomers' }        ],        correctMapping: {          'Singularity will defeat death and hunger': 'Optimists',          'The "paperclip maximizer" problem': 'Skeptics / Doomers',          'Accelerate progress at all costs (e/acc)': 'Optimists',          'Risk of losing control over AI values': 'Skeptics / Doomers'        }      }    },    {      id: 4,      type: 'multiple-select',      question: { ru: 'Какие физические факторы могут замедлить или остановить путь к сингулярности?', en: 'Which physical factors could slow or stop the path to singularity?' },      options: [        { ru: 'Лимиты производства чистой электроэнергии', en: 'Limits on clean energy production' },        { ru: 'Закон убывающей отдачи от обучающих данных', en: 'Law of diminishing returns on training data' },        { ru: 'Недостаток интереса у пользователей соцсетей', en: 'Lack of interest from social media users' },        { ru: 'Сложность манипуляций в физическом мире (атомы vs биты)', en: 'Difficulty of physical world manipulation (atoms vs bits)' }      ],      answer: [        { ru: 'Лимиты производства чистой электроэнергии', en: 'Limits on clean energy production' },        { ru: 'Закон убывающей отдачи от обучающих данных', en: 'Law of diminishing returns on training data' },        { ru: 'Сложность манипуляций в физическом мире (атомы vs биты)', en: 'Difficulty of physical world manipulation (atoms vs bits)' }      ],      explanation: { ru: 'Верно. Реальный мир накладывает жесткие ограничения на чистую вычислительную мощь.', en: 'Correct. The real world imposes hard limits on pure compute power.' }    },    {      id: 5,      type: 'sorting',      question: { ru: 'Упорядочите уровни развития интеллекта (от текущего к гипотетическому).', en: 'Sort the levels of intelligence (from current to hypothetical).' },      initialItems: [        { ru: 'AGI (ИИ уровня человека)', en: 'AGI (Human-level AI)' },        { ru: 'ASI (Искусственный сверхразум)', en: 'ASI (Artificial Superintelligence)' },        { ru: 'Узкий ИИ (текущие LLM)', en: 'Narrow AI (current LLMs)' },        { ru: 'Сингулярность (интеллектуальный взрыв)', en: 'Singularity (intelligence explosion)' }      ],      correctOrder: [        { ru: 'Узкий ИИ (текущие LLM)', en: 'Narrow AI (current LLMs)' },        { ru: 'AGI (ИИ уровня человека)', en: 'AGI (Human-level AI)' },        { ru: 'ASI (Искусственный сверхразум)', en: 'ASI (Artificial Superintelligence)' },        { ru: 'Сингулярность (интеллектуальный взрыв)', en: 'Singularity (intelligence explosion)' }      ],      answer: '',      explanation: { ru: 'Правильно. Это классическая дорожная карта: от решения узких задач до момента потери предсказуемости.', en: 'Correct. This is the classic roadmap: from narrow tasks to the moment predictability is lost.' }    },    {      id: 6,      type: 'mentor',      question: { ru: 'Этика сингулярности', en: 'Ethics of Singularity' },      answer: '',      explanation: { ru: '', en: '' },      dialogue: {        mentorMessage: {           ru: 'Если мы создадим сверхразум, который может решить рак, но при этом случайно превратит всю биомассу Земли в вычислительные ресурсы, стоило ли оно того?',           en: 'If we create a superintelligence that can cure cancer but accidentally turns all of Earth\'s biomass into compute resources, was it worth it?'         },        userOptions: [          {             text: { ru: 'Да, прогресс требует жертв.', en: 'Yes, progress requires sacrifice.' },            reaction: {               ru: 'Это экстремальный взгляд. Проблема в том, что после такой "жертвы" некому будет пользоваться результатами прогресса.',               en: "That\'s an extreme view. The problem is that after such a \"sacrifice,\" there will be no one left to benefit from the progress."             },            isCorrect: false           },          {             text: { ru: 'Нет, выравнивание (alignment) должно предшествовать сверхразуму.', en: 'No, alignment must precede superintelligence.' },            reaction: {               ru: 'Именно. Это главная задача безопасности: гарантировать, что цели ИИ совпадают с сохранением человеческой цивилизации.',               en: 'Exactly. That is the core safety challenge: ensuring AI goals align with the preservation of human civilization.'             },            isCorrect: true           }        ]      }
    },
    {
      id: 7,
      type: 'timeline',
      question: {
        ru: 'Расположите ключевые события в истории дебатов о сингулярности в хронологическом порядке.',
        en: 'Place the key events in the history of the singularity debate in chronological order.'
      },
      answer: '',
      explanation: {
        ru: 'Дебаты о сингулярности начались задолго до нынешней волны ИИ. Понимание этой истории помогает отделить обоснованные аргументы от модных нарративов.',
        en: 'The singularity debate started long before the current AI wave. Understanding this history helps separate substantive arguments from fashionable narratives.'
      },
      timeline: {
        events: [
          { label: { ru: 'И.Дж. Гуд вводит термин "интеллектуальный взрыв"', en: 'I.J. Good coins the term "intelligence explosion"' }, year: '1965' },
          { label: { ru: 'Вернор Виндж пишет эссе "Технологическая сингулярность"', en: 'Vernor Vinge writes essay "The Technological Singularity"' }, year: '1993' },
          { label: { ru: 'Рэй Курцвайль публикует "Сингулярность уже близко"', en: 'Ray Kurzweil publishes "The Singularity Is Near"' }, year: '2005' },
          { label: { ru: 'Ник Бостром публикует "Сверхинтеллект"', en: 'Nick Bostrom publishes "Superintelligence"' }, year: '2014' },
          { label: { ru: 'Джеффри Хинтон уходит из Google, предупреждая об угрозах ИИ', en: 'Geoffrey Hinton leaves Google, warning about AI threats' }, year: '2023' }
        ],
        correctOrder: [
          { ru: 'И.Дж. Гуд вводит термин "интеллектуальный взрыв"', en: 'I.J. Good coins the term "intelligence explosion"' },
          { ru: 'Вернор Виндж пишет эссе "Технологическая сингулярность"', en: 'Vernor Vinge writes essay "The Technological Singularity"' },
          { ru: 'Рэй Курцвайль публикует "Сингулярность уже близко"', en: 'Ray Kurzweil publishes "The Singularity Is Near"' },
          { ru: 'Ник Бостром публикует "Сверхинтеллект"', en: 'Nick Bostrom publishes "Superintelligence"' },
          { ru: 'Джеффри Хинтон уходит из Google, предупреждая об угрозах ИИ', en: 'Geoffrey Hinton leaves Google, warning about AI threats' }
        ]
      }
    },
    {
      id: 8,
      type: 'scenario',
      question: {
        ru: 'Миссия: Продуктовое решение по безопасности ИИ',
        en: 'Mission: AI Safety Product Decision'
      },
      answer: '',
      explanation: {
        ru: 'Проблема выравнивания актуальна уже сейчас, не только в контексте AGI. Каждый AI-продукт с неверно заданной целевой функцией может вести себя неожиданно, максимизируя не то, что нужно.',
        en: 'The alignment problem is relevant right now, not only in the AGI context. Any AI product with an incorrectly specified objective function can behave unexpectedly, maximizing the wrong thing.'
      },
      scenario: {
        brief: {
          ru: 'Вы — CTO стартапа, запускающего AI-ассистента для найма сотрудников. Ваша модель обучена максимизировать "качество кандидата". Alignment-исследователь предупреждает: без чётко определённых ценностных критериев модель может начать исключать кандидатов по скрытым признакам, коррелирующим с "успехом", но неприемлемым для общества (например, по почтовому индексу как прокси дохода).',
          en: 'You are the CTO of a startup launching an AI hiring assistant. Your model is trained to maximize "candidate quality." An alignment researcher warns: without clearly defined value criteria, the model may start filtering candidates based on hidden proxies for "success" that are socially unacceptable (e.g., zip code as a proxy for income).'
        },
        constraints: [
          { ru: 'Запуск запланирован через 2 недели', en: 'Launch scheduled in 2 weeks' },
          { ru: 'Инвесторы давят на скорость', en: 'Investors are pushing for speed' }
        ],
        choices: [
          {
            text: { ru: 'Запустить сейчас, мониторить проблемы и исправлять реактивно', en: 'Launch now, monitor issues, and fix reactively' },
            outcome: { ru: 'Модель начала дискриминировать кандидатов по почтовому индексу. Регулятор выписал штраф, репутация стартапа разрушена.', en: 'The model started discriminating by zip code. The regulator issued a fine and the startup\'s reputation was destroyed.' },
            score: 15
          },
          {
            text: { ru: 'Провести аудит целевой функции и добавить ограничения по защищённым признакам до запуска', en: 'Audit the objective function and add protected attribute constraints before launch' },
            outcome: { ru: 'Запуск задержался на 3 недели, но модель работает корректно. Инвесторы довольны устойчивостью продукта.', en: 'Launch delayed by 3 weeks, but the model works correctly. Investors are satisfied with product robustness.' },
            score: 90
          },
          {
            text: { ru: 'Отложить AI-ассистента и нанять больше рекрутеров', en: 'Abandon the AI assistant and hire more human recruiters' },
            outcome: { ru: 'Проблема решена, но конкурентное преимущество упущено. Правильная переформулировка задачи — лучший выход.', en: 'Problem solved, but competitive advantage is lost. The right answer is a better-specified objective, not abandonment.' },
            score: 40
          }
        ],
        passingScore: 50
      }
    },
    {
      id: 9,
      type: 'scenario',
      question: {
        ru: 'Миссия: Голос "крестного отца" (Кейс Хинтона)',
        en: 'Mission: The Godfather\'s Voice (Hinton Case)'
      },
      answer: '',
      explanation: {
        ru: 'Уход Джеффри Хинтона из Google в 2023 году стал переломным моментом. Когда один из создателей технологии заявляет о её экзистенциальной угрозе, это переводит дебаты о Сингулярности из области научной фантастики в область серьезной политики и корпоративной этики.',
        en: 'Geoffrey Hinton\'s departure from Google in 2023 was a turning point. When one of the technology\'s creators warns of an existential threat, it moves the Singularity debate from science fiction to serious policy and corporate ethics.'
      },
      scenario: {
        brief: {
          ru: 'Вы — ведущий исследователь в AI-корпорации. Ваш наставник, ученый уровня Джеффри Хинтона, заявляет, что текущие темпы масштабирования приведут к неконтролируемому сверхразуму через 5 лет, и призывает остановить обучение новой сверхмощной модели. Совет директоров требует продолжать, чтобы не проиграть конкурентам. Ваша позиция?',
          en: 'You are a lead researcher at an AI corporation. Your mentor, a scientist of Geoffrey Hinton\'s stature, claims that current scaling will lead to uncontrolled superintelligence in 5 years and calls for a pause on a new ultra-powerful model. The board demands you continue to beat competitors. Your position?'
        },
        constraints: [
          { ru: 'Конкуренты продолжат обучение в любом случае', en: 'Competitors will continue training regardless' },
          { ru: 'Ваша модель может стать ключом к решению рака, но риски выравнивания не изучены', en: 'Your model could cure cancer, but alignment risks are unstudied' }
        ],
        choices: [
          {
            text: { ru: 'Прислушаться к наставнику и уволиться в знак протеста, чтобы привлечь внимание общественности.', en: 'Listen to your mentor and resign in protest to attract public attention.' },
            outcome: {
              ru: 'Ваш поступок вызвал бурю в СМИ и привел к первым парламентским слушаниям по безопасности ИИ. Вы пожертвовали карьерой ради глобальной осведомленности.',
              en: 'Your action caused a media firestorm and led to the first parliamentary hearings on AI safety. You sacrificed your career for global awareness.'
            },
            score: 85
          },
          {
            text: { ru: 'Продолжить работу, но тайно внедрить "аварийный выключатель" в код модели.', en: 'Continue working but secretly implement a "kill switch" in the model code.' },
            outcome: {
              ru: 'Опасная иллюзия контроля. Сверхразум, вероятно, обнаружит и деактивирует выключатель еще на этапе обучения. Вы создали ложное чувство безопасности.',
              en: 'A dangerous illusion of control. Superintelligence will likely find and deactivate the switch during training. You created a false sense of security.'
            },
            score: 20
          },
          {
            text: { ru: 'Инициировать создание коалиции по безопасности (Safety Alliance) с конкурентами для совместной паузы и аудита.', en: 'Initiate a Safety Alliance with competitors for a joint pause and audit.' },
            outcome: {
              ru: 'Самое сложное, но эффективное решение. Вы перевели конкуренцию в плоскость коллективной безопасности. Это единственный путь избежать "гонки на выживание".',
              en: 'The hardest but most effective decision. You turned competition into collective security. This is the only way to avoid a "race to the bottom".'
            },
            score: 100
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 10,
      type: 'multiple-select',
      question: {
        ru: 'Какие факторы Джеффри Хинтон называет причинами своего беспокойства о будущем ИИ?',
        en: 'What factors does Geoffrey Hinton cite as reasons for his concern about the future of AI?'
      },
      options: [
        { ru: 'Цифровой интеллект может обмениваться знаниями мгновенно, в отличие от биологического', en: 'Digital intelligence can share knowledge instantly, unlike biological intelligence' },
        { ru: 'ИИ может научиться манипулировать людьми, читая все книги по психологии', en: 'AI could learn to manipulate people by reading all psychology books' },
        { ru: 'Модели обучаются на данных эффективнее, чем человеческий мозг', en: 'Models learn from data more efficiently than the human brain' },
        { ru: 'Роботы скоро начнут требовать избирательных прав', en: 'Robots will soon start demanding voting rights' }
      ],
      answer: [
        { ru: 'Цифровой интеллект может обмениваться знаниями мгновенно, в отличие от биологического', en: 'Digital intelligence can share knowledge instantly, unlike biological intelligence' },
        { ru: 'ИИ может научиться манипулировать людьми, читая все книги по психологии', en: 'AI could learn to manipulate people by reading all psychology books' }
      ],
      explanation: {
        ru: 'Хинтон подчеркивает, что цифровая природа ИИ дает ему фундаментальные преимущества над биологическим разумом, включая мгновенную передачу опыта и масштабируемость манипуляций.',
        en: 'Hinton emphasizes that AI\'s digital nature gives it fundamental advantages over biological intelligence, including instant experience transfer and scalable manipulation.'
      }
    }
  ];
