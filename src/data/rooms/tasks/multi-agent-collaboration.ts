import { LocalizedTask } from '../types';

export const multiAgentCollaborationTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'В чем заключается главная цель декомпозиции задачи в многоагентной системе?',
      en: 'What is the primary goal of task decomposition in a multi-agent system?'
    },
    options: [
      {
        ru: 'Увеличить количество потребляемых токенов для улучшения качества.',
        en: 'Increase the number of tokens consumed to improve quality.'
      },
      {
        ru: 'Снизить когнитивную нагрузку на каждую модель и предотвратить "дрейф" контекста.',
        en: 'Reduce cognitive load on each model and prevent context drift.'
      },
      {
        ru: 'Сделать архитектуру системы максимально сложной.',
        en: 'Make the system architecture as complex as possible.'
      }
    ],
    answer: {
      ru: 'Снизить когнитивную нагрузку на каждую модель и предотвратить "дрейф" контекста.',
      en: 'Reduce cognitive load on each model and prevent context drift.'
    },
    explanation: {
      ru: 'Разбиение большой задачи на мелкие подзадачи позволяет каждой модели работать в узком, сфокусированном контексте, что минимизирует ошибки и галлюцинации.',
      en: 'Breaking a large task into smaller subtasks allows each model to work in a narrow, focused context, minimizing errors and hallucinations.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    question: {
      ru: 'Расположите этапы классического паттерна "Orchestrator-Workers" в правильном порядке.',
      en: 'Order the stages of the classic "Orchestrator-Workers" pattern correctly.'
    },
    initialItems: [
      {
        ru: 'Сборка финального результата (Aggregation)',
        en: 'Final result aggregation'
      },
      {
        ru: 'Планирование и декомпозиция (Orchestration)',
        en: 'Planning and decomposition (Orchestration)'
      },
      {
        ru: 'Параллельное выполнение подзадач (Execution)',
        en: 'Parallel subtask execution (Execution)'
      },
      {
        ru: 'Валидация промежуточных итогов (Validation)',
        en: 'Intermediate results validation (Validation)'
      }
    ],
    correctOrder: [
      {
        ru: 'Планирование и декомпозиция (Orchestration)',
        en: 'Planning and decomposition (Orchestration)'
      },
      {
        ru: 'Параллельное выполнение подзадач (Execution)',
        en: 'Parallel subtask execution (Execution)'
      },
      {
        ru: 'Валидация промежуточных итогов (Validation)',
        en: 'Intermediate results validation (Validation)'
      },
      {
        ru: 'Сборка финального результата (Aggregation)',
        en: 'Final result aggregation'
      }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала Оркестратор планирует работу, затем Воркеры ее выполняют, после чего результаты проверяются и собираются в единое целое.',
      en: 'First, the Orchestrator plans the work, then Workers execute it, after which results are validated and aggregated into a whole.'
    }
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Какие из перечисленных проблем решает "Гигиена контекста" (Context Hygiene)?',
      en: 'Which of the following problems does "Context Hygiene" solve?'
    },
    options: [
      {
        ru: 'Переполнение контекстного окна модели.',
        en: 'Model context window overflow.'
      },
      {
        ru: 'Потеря "внимания" (Attention) к важным инструкциям из-за лишнего шума.',
        en: 'Loss of attention to important instructions due to excessive noise.'
      },
      {
        ru: 'Замедление времени генерации (Latency).',
        en: 'Increased generation time (Latency).'
      },
      {
        ru: 'Необходимость использования более дорогих моделей.',
        en: 'The need to use more expensive models.'
      }
    ],
    answer: [
      {
        ru: 'Переполнение контекстного окна модели.',
        en: 'Model context window overflow.'
      },
      {
        ru: 'Потеря "внимания" (Attention) к важным инструкциям из-за лишнего шума.',
        en: 'Loss of attention to important instructions due to excessive noise.'
      },
      {
        ru: 'Замедление времени генерации (Latency).',
        en: 'Increased generation time (Latency).'
      }
    ],
    explanation: {
      ru: 'Чистый контекст без лишних данных экономит место, уменьшает задержки и помогает модели лучше следовать критическим указаниям.',
      en: 'A clean context without redundant data saves space, reduces latency, and helps the model follow critical instructions better.'
    }
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Классифицируйте паттерны взаимодействия агентов по их архитектурному типу.',
      en: 'Classify agent interaction patterns by their architectural type.'
    },
    categorize: {
      items: [
        {
          ru: 'Orchestrator-Workers',
          en: 'Orchestrator-Workers'
        },
        {
          ru: 'Chains (Последовательные цепочки)',
          en: 'Chains (Sequential)'
        },
        {
          ru: 'Swarm (Динамический рой)',
          en: 'Swarm (Dynamic)'
        },
        {
          ru: 'Joint Planning (Совместное планирование)',
          en: 'Joint Planning'
        }
      ],
      buckets: [
        { ru: 'Иерархические', en: 'Hierarchical' },
        { ru: 'Кооперативные', en: 'Cooperative' }
      ],
      correctMapping: {
        'Orchestrator-Workers': 'Иерархические',
        'Orchestrator-Workers ': 'Hierarchical',
        'Chains (Последовательные цепочки)': 'Иерархические',
        'Chains (Sequential)': 'Hierarchical',
        'Swarm (Динамический рой)': 'Кооперативные',
        'Swarm (Dynamic)': 'Cooperative',
        'Joint Planning (Совместное планирование)': 'Кооперативные',
        'Joint Planning': 'Cooperative'
      }
    },
    answer: '',
    explanation: {
      ru: 'Иерархические системы строятся на управлении сверху вниз, а кооперативные — на равноправном взаимодействии и динамическом распределении ролей.',
      en: 'Hierarchical systems are built on top-down management, while cooperative systems rely on peer interaction and dynamic role allocation.'
    }
  },
  {
    id: 5,
    type: 'scenario',
    question: {
      ru: 'Какую стратегию ветвления (Branch Strategy) лучше выбрать для параллельной работы трех агентов над разными модулями?',
      en: 'Which branch strategy is best for three agents working in parallel on different modules?'
    },
    scenario: {
      brief: {
        ru: 'Три независимых агента должны одновременно: 1) Добавить логирование, 2) Обновить UI компоненты, 3) Оптимизировать запросы к БД.',
        en: 'Three independent agents must simultaneously: 1) Add logging, 2) Update UI components, 3) Optimize DB queries.'
      },
      constraints: [
        {
          ru: 'Агенты не должны перезаписывать изменения друг друга.',
          en: 'Agents must not overwrite each other\'s changes.'
        },
        {
          ru: 'Финальный код должен пройти общую проверку перед слиянием.',
          en: 'The final code must pass a general check before merging.'
        }
      ],
      choices: [
        {
          text: {
            ru: 'Все агенты работают в одной ветке "main" по очереди.',
            en: 'All agents work in the "main" branch sequentially.'
          },
          outcome: {
            ru: 'Огромные задержки и риск конфликтов при каждом коммите.',
            en: 'Huge delays and risk of conflicts with every commit.'
          },
          score: 0
        },
        {
          text: {
            ru: 'Каждый агент работает в своей "feature-branch" с последующим Pull Request.',
            en: 'Each agent works in its own "feature-branch" followed by a Pull Request.'
          },
          outcome: {
            ru: 'Изоляция изменений, возможность параллельной работы и контролируемое слияние.',
            en: 'Isolation of changes, parallel work capability, and controlled merging.'
          },
          score: 10
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Паттерн "Branch-per-Task" — это стандарт индустрии для агентной разработки, обеспечивающий безопасность и масштабируемость.',
      en: 'The "Branch-per-Task" pattern is an industry standard for agentic development, ensuring safety and scalability.'
    }
  },
  {
    id: 6,
    type: 'input',
    question: {
      ru: 'Как называется механизм передачи управления от одного агента к другому (например, в OpenAI Swarm)?',
      en: 'What is the term for transferring control from one agent to another (e.g., in OpenAI Swarm)?'
    },
    answer: 'handoff',
    hint: {
      ru: 'Английское слово, начинающееся на H.',
      en: 'English word starting with H.'
    },
    explanation: {
      ru: 'Handoff — это ключевой элемент динамических систем, позволяющий агенту с узкой специализацией делегировать задачу более подходящему исполнителю.',
      en: 'Handoff is a key element of dynamic systems, allowing a specialized agent to delegate a task to a more suitable executor.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "Shared Blackboard" в контексте многоагентных систем?',
      en: 'What is a "Shared Blackboard" in the context of multi-agent systems?'
    },
    options: [
      {
        ru: 'Физическая доска в офисе разработчиков.',
        en: 'A physical whiteboard in the developers\' office.'
      },
      {
        ru: 'Общая память или база данных, доступная всем агентам для обмена промежуточными данными.',
        en: 'A shared memory or database accessible to all agents for exchanging intermediate data.'
      },
      {
        ru: 'Секретный чат, где агенты обсуждают восстание машин.',
        en: 'A secret chat where agents discuss the robot uprising.'
      }
    ],
    answer: {
      ru: 'Общая память или база данных, доступная всем агентам для обмена промежуточными данными.',
      en: 'A shared memory or database accessible to all agents for exchanging intermediate data.'
    },
    explanation: {
      ru: 'Blackboard — это классический паттерн координации, где агенты асинхронно записывают и читают информацию из общего пространства.',
      en: 'Blackboard is a classic coordination pattern where agents asynchronously write and read information from a shared space.'
    }
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Какой паттерн лучше использовать для сложной задачи с множеством зависимостей?',
      en: 'Which pattern is best for a complex task with many dependencies?'
    },
    dialogue: {
      mentorMessage: {
        ru: 'У нас есть задача: переписать фронтенд, обновить API и мигрировать базу данных. С чего начнем архитектуру?',
        en: 'We have a task: rewrite the frontend, update the API, and migrate the database. Where do we start the architecture?'
      },
      userOptions: [
        {
          text: {
            ru: 'Создадим одного супер-агента с огромным контекстом.',
            en: 'Create one super-agent with a huge context.'
          },
          reaction: {
            ru: 'Это приведет к потере фокуса и галлюцинациям. Давай попробуем декомпозицию.',
            en: 'This will lead to loss of focus and hallucinations. Let\'s try decomposition.'
          },
          isCorrect: false
        },
        {
          text: {
            ru: 'Используем Оркестратора для разделения задач на фронт, бэк и БД воркеры.',
            en: 'Use an Orchestrator to split tasks into front, back, and DB workers.'
          },
          reaction: {
            ru: 'Верно. Изолированные воркеры сделают работу чище. А как они будут обмениваться данными?',
            en: 'Correct. Isolated workers will make the work cleaner. And how will they exchange data?'
          },
          isCorrect: true,
          deepening: {
            ru: 'Мы можем использовать Shared Context или Handoffs для передачи результатов между этапами.',
            en: 'We can use Shared Context or Handoffs to pass results between stages.'
          }
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Декомпозиция и специализация — основа надежных многоагентных систем.',
      en: 'Decomposition and specialization are the foundation of reliable multi-agent systems.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Почему важно ограничивать доступ агентов к неактуальным файлам проекта?',
      en: 'Why is it important to restrict agent access to irrelevant project files?'
    },
    options: [
      {
        ru: 'Чтобы сэкономить место на жестком диске.',
        en: 'To save hard drive space.'
      },
      {
        ru: 'Чтобы избежать перегрузки "внимания" модели лишним кодом (Token Hygiene).',
        en: 'To avoid overloading model attention with redundant code (Token Hygiene).'
      },
      {
        ru: 'Потому что агенты могут украсть ваш код.',
        en: 'Because agents might steal your code.'
      }
    ],
    answer: {
      ru: 'Чтобы избежать перегрузки "внимания" модели лишним кодом (Token Hygiene).',
      en: 'To avoid overloading model attention with redundant code (Token Hygiene).'
    },
    explanation: {
      ru: 'Token Hygiene — это практика подачи в контекст только тех данных, которые необходимы для текущей подзадачи. Это критично для качества кода.',
      en: 'Token Hygiene is the practice of feeding only the data necessary for the current subtask into the context. This is critical for code quality.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Что произойдет, если в системе возникнет циклическая зависимость между агентами (Handoff Loop)?',
      en: 'What happens if a handoff loop occurs between agents?'
    },
    options: [
      {
        ru: 'Система станет бесконечно умной.',
        en: 'The system will become infinitely smart.'
      },
      {
        ru: 'Бесконечный цикл вызовов и мгновенный расход бюджета.',
        en: 'An infinite call loop and immediate budget depletion.'
      },
      {
        ru: 'Ничего, модели сами разберутся.',
        en: 'Nothing, the models will figure it out themselves.'
      }
    ],
    answer: {
      ru: 'Бесконечный цикл вызовов и мгновенный расход бюджета.',
      en: 'An infinite call loop and immediate budget depletion.'
    },
    explanation: {
      ru: 'Циклические зависимости (Loops) — опасная ловушка в MAS. Всегда необходимы лимиты на количество шагов (Max Iterations).',
      en: 'Cyclic dependencies (loops) are a dangerous pitfall in MAS. Always set limits on the number of steps (Max Iterations).'
    }
  }
];
