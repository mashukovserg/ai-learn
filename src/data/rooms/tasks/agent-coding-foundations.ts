import { LocalizedTask } from '../types';

export const agentCodingFoundationsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что отличает агентную разработку от одноразового промпта?',
      en: 'What distinguishes agent coding from a single-shot prompt?',
    },
    options: [
      {
        ru: 'Один раз отправить запрос и сразу принять первый ответ в продакшен.',
        en: 'Send one prompt once and ship the first answer to production immediately.',
      },
      {
        ru: 'Работать итеративным циклом: цель -> план -> действие -> проверка -> доработка.',
        en: 'Use an iterative loop: goal -> plan -> act -> verify -> refine.',
      },
      {
        ru: 'Увеличивать размер модели и не менять инженерный процесс.',
        en: 'Only increase model size and keep the engineering process unchanged.',
      },
    ],
    answer: {
      ru: 'Работать итеративным циклом: цель -> план -> действие -> проверка -> доработка.',
      en: 'Use an iterative loop: goal -> plan -> act -> verify -> refine.',
    },
    explanation: {
      ru: 'Верно. Ключевая идея агентной разработки — управляемый цикл с проверками между шагами, а не попытка получить идеальный результат одним ответом.',
      en: 'Correct. The core idea of agent coding is a controlled loop with checks between steps, not trying to get a perfect result in one response.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите термин для механизма, когда модель возвращает структурированный вызов инструмента (JSON).',
      en: 'Enter the term for the mechanism where the model returns a structured tool call (JSON).',
    },
    answer: 'function calling',
    hint: {
      ru: 'Два английских слова: первое — Function.',
      en: 'Two words: the first is Function.',
    },
    explanation: {
      ru: 'Точно. Function Calling позволяет связать ответ модели с конкретным инструментом и его параметрами.',
      en: 'Exactly. Function Calling connects model output to a concrete tool and its arguments.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите признаки качественных критериев приемки для задачи coding-агента.',
      en: 'Select the traits of high-quality acceptance criteria for a coding-agent task.',
    },
    options: [
      {
        ru: 'Измеримый ожидаемый результат (что именно должно работать).',
        en: 'A measurable expected outcome (what exactly should work).',
      },
      {
        ru: 'Явные ограничения и границы (что делать нельзя).',
        en: 'Explicit constraints and boundaries (what must not be done).',
      },
      {
        ru: 'Формулировка "сделай лучше", без теста и метрик.',
        en: 'A vague request like “make it better” without tests or metrics.',
      },
      {
        ru: 'Проверка готовности через тесты, eval-набор или шаги верификации.',
        en: 'A done-check via tests, an eval set, or explicit verification steps.',
      },
    ],
    answer: [
      {
        ru: 'Измеримый ожидаемый результат (что именно должно работать).',
        en: 'A measurable expected outcome (what exactly should work).',
      },
      {
        ru: 'Явные ограничения и границы (что делать нельзя).',
        en: 'Explicit constraints and boundaries (what must not be done).',
      },
      {
        ru: 'Проверка готовности через тесты, eval-набор или шаги верификации.',
        en: 'A done-check via tests, an eval set, or explicit verification steps.',
      },
    ],
    explanation: {
      ru: 'Верно. Хорошие критерии приемки всегда проверяемы, ограничены и связаны с конкретным способом валидации.',
      en: 'Correct. Good acceptance criteria are always testable, bounded, and tied to a concrete validation method.',
    },
  },
  {
    id: 4,
    type: 'sorting',
    question: {
      ru: 'Расположите шаги базового агентного цикла в правильном порядке.',
      en: 'Order the steps of the basic agent loop correctly.',
    },
    initialItems: [
      { ru: 'План', en: 'Plan' },
      { ru: 'Уточнение и доработка', en: 'Refine' },
      { ru: 'Цель', en: 'Goal' },
      { ru: 'Наблюдение/тест', en: 'Observe/Test' },
      { ru: 'Действие', en: 'Act' },
    ],
    correctOrder: [
      { ru: 'Цель', en: 'Goal' },
      { ru: 'План', en: 'Plan' },
      { ru: 'Действие', en: 'Act' },
      { ru: 'Наблюдение/тест', en: 'Observe/Test' },
      { ru: 'Уточнение и доработка', en: 'Refine' },
    ],
    answer: '',
    explanation: {
      ru: 'Да. Такой порядок снижает риск хаотичных изменений: сначала рамка задачи, затем исполнение и контроль качества.',
      en: 'Yes. This order reduces chaotic changes: first frame the task, then execute and control quality.',
    },
  },
  {
    id: 5,
    type: 'mentor',
    question: {
      ru: 'Агент предложил спорный патч. Какой следующий шаг безопаснее?',
      en: 'The agent proposed a questionable patch. What is the safer next step?',
    },
    answer: '',
    explanation: {
      ru: 'В задачах с риском лучше комбинировать автоматическую проверку и человеческое подтверждение перед релизом.',
      en: 'For risky tasks, combine automated verification with human confirmation before release.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'В отчете агента есть неуверенные предположения, но дедлайн близко. Как действуем?',
        en: 'The agent report contains uncertain assumptions, but the deadline is close. How should we proceed?',
      },
      userOptions: [
        {
          text: {
            ru: 'Сразу выкатываем: если есть проблемы, разберемся позже.',
            en: 'Ship immediately and troubleshoot later if needed.',
          },
          reaction: {
            ru: 'Это повышает риск инцидента. Без проверки агент может закрепить ошибочное решение в продакшене.',
            en: 'That increases incident risk. Without validation, the agent can push a wrong decision to production.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Запускаем тесты и eval-проверку, подтверждаем человеком рискованные действия, только потом релиз.',
            en: 'Run tests and eval checks, require human confirmation for risky actions, then release.',
          },
          reaction: {
            ru: 'Это правильная стратегия: вы сохраняете скорость, но добавляете контроль качества и безопасность.',
            en: 'This is the right strategy: you keep speed while adding quality control and safety.',
          },
          deepening: {
            ru: 'Практический стандарт для agent coding: автоматические проверки на каждом шаге и ручное подтверждение действий с высоким ущербом.',
            en: 'A practical standard for agent coding: automated checks on each step and manual confirmation for high-impact actions.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Отключаем логи и проверку, чтобы выиграть по латентности.',
            en: 'Disable logs and checks to gain latency.',
          },
          reaction: {
            ru: 'Без логов и проверок вы теряете наблюдаемость и возможность быстро локализовать проблему.',
            en: 'Without logs and checks, you lose observability and the ability to localize failures quickly.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Распределите действия по ролям Planner / Executor / Validator.',
      en: 'Map each activity to Planner / Executor / Validator roles.',
    },
    answer: '',
    explanation: {
      ru: 'Верно. Разделение ролей помогает не смешивать планирование, выполнение и контроль в одном непрозрачном шаге.',
      en: 'Correct. Role separation keeps planning, execution, and validation from collapsing into one opaque step.',
    },
    categorize: {
      buckets: [
        { ru: 'Planner', en: 'Planner' },
        { ru: 'Executor', en: 'Executor' },
        { ru: 'Validator', en: 'Validator' },
      ],
      items: [
        {
          ru: 'Декомпозировать задачу в этапы и зафиксировать критерии приемки.',
          en: 'Decompose the task into stages and define acceptance criteria.',
        },
        {
          ru: 'Вызвать инструменты и внести изменения в код по текущему шагу.',
          en: 'Call tools and apply code changes for the current step.',
        },
        {
          ru: 'Запустить тесты и сравнить результат с критериями приемки.',
          en: 'Run tests and compare output against acceptance criteria.',
        },
        {
          ru: 'Решить, нужен ли rollback после неуспешного release gate.',
          en: 'Decide whether rollback is required after a failed release gate.',
        },
      ],
      correctMapping: {
        'Декомпозировать задачу в этапы и зафиксировать критерии приемки.': 'Planner',
        'Decompose the task into stages and define acceptance criteria.': 'Planner',
        'Вызвать инструменты и внести изменения в код по текущему шагу.': 'Executor',
        'Call tools and apply code changes for the current step.': 'Executor',
        'Запустить тесты и сравнить результат с критериями приемки.': 'Validator',
        'Run tests and compare output against acceptance criteria.': 'Validator',
        'Решить, нужен ли rollback после неуспешного release gate.': 'Validator',
        'Decide whether rollback is required after a failed release gate.': 'Validator',
      },
    },
  },
  {
    id: 7,
    type: 'timeline',
    question: {
      ru: 'Упорядочите контрольные точки жизненного цикла от спецификации до релиза.',
      en: 'Arrange lifecycle checkpoints from spec to release.',
    },
    answer: '',
    explanation: {
      ru: 'Отлично. Сначала спецификация и критерии, потом реализация и проверки, и только затем контролируемый релиз.',
      en: 'Great. First define the spec and criteria, then implementation and checks, and only then controlled release.',
    },
    timeline: {
      events: [
        {
          label: {
            ru: 'Подготовить спецификацию и ограничения',
            en: 'Prepare specification and constraints',
          },
          year: 'Step 1',
        },
        {
          label: {
            ru: 'Сформировать acceptance-тесты и eval-набор',
            en: 'Define acceptance tests and eval set',
          },
          year: 'Step 2',
        },
        {
          label: {
            ru: 'Выполнить изменения через агентный цикл',
            en: 'Implement changes via agent loop',
          },
          year: 'Step 3',
        },
        {
          label: {
            ru: 'Запустить регрессионные и safety-проверки',
            en: 'Run regression and safety checks',
          },
          year: 'Step 4',
        },
        {
          label: {
            ru: 'Сделать поэтапный rollout и мониторинг',
            en: 'Execute staged rollout and monitoring',
          },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        {
          ru: 'Подготовить спецификацию и ограничения',
          en: 'Prepare specification and constraints',
        },
        {
          ru: 'Сформировать acceptance-тесты и eval-набор',
          en: 'Define acceptance tests and eval set',
        },
        {
          ru: 'Выполнить изменения через агентный цикл',
          en: 'Implement changes via agent loop',
        },
        {
          ru: 'Запустить регрессионные и safety-проверки',
          en: 'Run regression and safety checks',
        },
        {
          ru: 'Сделать поэтапный rollout и мониторинг',
          en: 'Execute staged rollout and monitoring',
        },
      ],
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать стратегию релиза agent-coding фичи',
      en: 'Mission: choose a release strategy for an agent-coding feature',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия сочетает canary-выкатку, автоматические quality gates и быстрый rollback-план. Это снижает ущерб при ошибке и сохраняет темп поставки.',
      en: 'The best strategy combines canary rollout, automated quality gates, and a fast rollback plan. It limits blast radius while preserving delivery speed.',
    },
    scenario: {
      brief: {
        ru: 'Команда готовит релиз функции, где coding-агент меняет код по входным спецификациям. Нужно выпустить обновление без деградации качества и с контролем риска.',
        en: 'The team is preparing a release where a coding agent modifies code from input specs. You must ship without quality degradation and with controlled risk.',
      },
      constraints: [
        { ru: 'Время отката: не более 10 минут', en: 'Rollback time must stay under 10 minutes' },
        { ru: 'Критичные регрессии недопустимы', en: 'Critical regressions are not acceptable' },
      ],
      choices: [
        {
          text: {
            ru: 'Выкатить на 100% трафика сразу, без eval-гейта и ручного подтверждения.',
            en: 'Roll out to 100% traffic immediately without eval gate or human confirmation.',
          },
          outcome: {
            ru: 'Риск инцидента высокий: нет контрольной точки перед полным воздействием на пользователей.',
            en: 'Incident risk is high: there is no control point before full user impact.',
          },
          score: 15,
        },
        {
          text: {
            ru: 'Canary 10% + eval/тест-гейт + ручное подтверждение рискованных шагов + авто-rollback по метрикам.',
            en: 'Canary 10% + eval/test gate + human approval for risky actions + auto-rollback on metric breach.',
          },
          outcome: {
            ru: 'Сбалансированная стратегия: вы ограничиваете радиус ошибки и сохраняете управляемую скорость релиза.',
            en: 'Balanced strategy: you limit blast radius while keeping release speed under control.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Отложить релиз на неопределенный срок, пока не будет идеального результата.',
            en: 'Postpone release indefinitely until results are perfect.',
          },
          outcome: {
            ru: 'Риск инцидента ниже, но команда теряет темп и не получает производственную обратную связь.',
            en: 'Incident risk is lower, but the team loses momentum and misses production feedback.',
          },
          score: 45,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Какой первый рычаг обычно лучше всего снижает стоимость и задержку в агентном цикле?',
      en: 'Which first lever usually reduces cost and latency best in an agent loop?',
    },
    options: [
      {
        ru: 'Увеличить контекстное окно для каждого шага без ограничений.',
        en: 'Increase context window for every step without limits.',
      },
      {
        ru: 'Ввести бюджет на вызовы инструментов и чёткие stop-критерии до тюнинга моделей.',
        en: 'Introduce tool-call budget and explicit stop criteria before model tuning.',
      },
      {
        ru: 'Отключить eval-наборы и логи, чтобы ускорить релиз.',
        en: 'Disable eval sets and logs to speed up release.',
      },
    ],
    answer: {
      ru: 'Ввести бюджет на вызовы инструментов и чёткие stop-критерии до тюнинга моделей.',
      en: 'Introduce tool-call budget and explicit stop criteria before model tuning.',
    },
    explanation: {
      ru: 'Да. Самый быстрый практический эффект чаще дает контроль количества шагов и вызовов, а не дорогая смена модели.',
      en: 'Yes. The fastest practical win usually comes from controlling step and tool-call volume, not expensive model changes.',
    },
  },
  {
    id: 10,
    type: 'input',
    question: {
      ru: 'Введите действие, которое первым ограничивает ущерб при инциденте после релиза agent-coding фичи.',
      en: 'Enter the action that first contains damage during a post-release incident in an agent-coding feature.',
    },
    answer: ['rollback', 'roll back', 'откат'],
    hint: {
      ru: 'Это быстрый возврат к предыдущей стабильной версии.',
      en: 'It is the fast return to a previously stable version.',
    },
    explanation: {
      ru: 'Верно. Rollback сокращает время воздействия проблемы и дает команде пространство для спокойного разбора причин.',
      en: 'Correct. Rollback reduces user impact time and gives the team room to investigate root causes safely.',
    },
  },
];
