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
        ru: 'Работать итеративным циклом: цель → план → действие → проверка → доработка.',
        en: 'Use an iterative loop: goal → plan → act → verify → refine.',
      },
      {
        ru: 'Увеличивать размер модели и не менять инженерный процесс.',
        en: 'Only increase model size and keep the engineering process unchanged.',
      },
    ],
    answer: {
      ru: 'Работать итеративным циклом: цель → план → действие → проверка → доработка.',
      en: 'Use an iterative loop: goal → plan → act → verify → refine.',
    },
    explanation: {
      ru: 'Верно. Agent Coding — это управляемый процесс с проверками между шагами, а не попытка получить идеальный результат одним ответом.',
      en: 'Correct. Agent Coding is a controlled process with checks between steps, not trying to get a perfect result in one response.',
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
      ru: 'Точно. Function Calling позволяет связать ответ модели с конкретным инструментом и его параметрами. Чем строже JSON-схема — тем предсказуемее поведение агента.',
      en: 'Exactly. Function Calling connects model output to a concrete tool and its arguments. The stricter the JSON schema, the more predictable agent behavior becomes.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите обязательные компоненты контракта задачи (Task Contract) для coding-агента.',
      en: 'Select the mandatory components of a Task Contract for a coding agent.',
    },
    options: [
      {
        ru: 'Цель (goal) — что именно нужно сделать.',
        en: 'Goal — what exactly needs to be done.',
      },
      {
        ru: 'Ограничения (constraints) — что нельзя нарушать.',
        en: 'Constraints — what must not be violated.',
      },
      {
        ru: 'Формулировка "сделай лучше", без теста и метрик.',
        en: 'A vague request like "make it better" without tests or metrics.',
      },
      {
        ru: 'Критерии приёмки (acceptance_criteria) — как проверить завершение.',
        en: 'Acceptance criteria — how to verify completion.',
      },
      {
        ru: 'Правила эскалации (escalation) — когда передать задачу человеку.',
        en: 'Escalation rules — when to hand off to a human.',
      },
    ],
    answer: [
      {
        ru: 'Цель (goal) — что именно нужно сделать.',
        en: 'Goal — what exactly needs to be done.',
      },
      {
        ru: 'Ограничения (constraints) — что нельзя нарушать.',
        en: 'Constraints — what must not be violated.',
      },
      {
        ru: 'Критерии приёмки (acceptance_criteria) — как проверить завершение.',
        en: 'Acceptance criteria — how to verify completion.',
      },
      {
        ru: 'Правила эскалации (escalation) — когда передать задачу человеку.',
        en: 'Escalation rules — when to hand off to a human.',
      },
    ],
    explanation: {
      ru: 'Верно. Schema-first контракт включает goal, constraints, tools_allowed, escalation и acceptance_criteria. Формулировка "сделай лучше" не подходит, потому что не дает формального определения завершения.',
      en: 'Correct. A schema-first contract includes goal, constraints, tools_allowed, escalation, and acceptance_criteria. "Make it better" does not work because it provides no formal definition of done.',
    },
  },
  {
    id: 4,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите пять состояний замкнутого агентного цикла (closed-loop) в правильном порядке.',
      en: 'Order the five states of the closed-loop agent cycle correctly.',
    },
    initialItems: [
      { ru: 'Decide (продолжить / перепланировать / остановить)', en: 'Decide (continue / replan / stop)' },
      { ru: 'Execute (выполнить действие)', en: 'Execute (perform action)' },
      { ru: 'Plan (разбить задачу)', en: 'Plan (break down task)' },
      { ru: 'Validate (проверить против критериев)', en: 'Validate (check against criteria)' },
      { ru: 'Observe (зафиксировать результат)', en: 'Observe (record result)' },
    ],
    correctOrder: [
      { ru: 'Plan (разбить задачу)', en: 'Plan (break down task)' },
      { ru: 'Execute (выполнить действие)', en: 'Execute (perform action)' },
      { ru: 'Observe (зафиксировать результат)', en: 'Observe (record result)' },
      { ru: 'Validate (проверить против критериев)', en: 'Validate (check against criteria)' },
      { ru: 'Decide (продолжить / перепланировать / остановить)', en: 'Decide (continue / replan / stop)' },
    ],
    explanation: {
      ru: 'Правильно. Замкнутый цикл: Plan → Execute → Observe → Validate → Decide. Ключевое отличие от линейного pipeline — агент может вернуться к Plan на основе наблюдений.',
      en: 'Correct. The closed loop: Plan → Execute → Observe → Validate → Decide. Unlike a linear pipeline, the agent can return to Plan based on observations.',
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
            ru: 'Правильная стратегия: вы сохраняете скорость, но добавляете контроль качества и безопасность.',
            en: 'The right strategy: you keep speed while adding quality control and safety.',
          },
          deepening: {
            ru: 'Стандарт: автоматические проверки на каждом шаге и ручное подтверждение действий с высоким ущербом.',
            en: 'Standard: automated checks on each step and manual confirmation for high-impact actions.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Отключаем логи и проверку, чтобы выиграть по латентности.',
            en: 'Disable logs and checks to gain latency.',
          },
          reaction: {
            ru: 'Без логов и проверок вы теряете наблюдаемость и возможность локализовать проблему.',
            en: 'Without logs and checks, you lose observability and the ability to localize failures.',
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
      ru: 'Верно. Разделение ролей устраняет self-bias: Planner не видит деталей исполнения, Executor не определяет критерии успеха, Validator проверяет формально.',
      en: 'Correct. Role separation eliminates self-bias: Planner does not see execution details, Executor does not define success criteria, Validator checks formally.',
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
    type: 'categorize',
    question: {
      ru: 'Распределите действия по этапам recovery: Retry / Fallback / Rollback / Escalate.',
      en: 'Map each action to a recovery stage: Retry / Fallback / Rollback / Escalate.',
    },
    answer: '',
    explanation: {
      ru: 'Верно. Порядок recovery: сначала retry (повторить), затем fallback (альтернативный путь), затем rollback (откат), и только потом escalate (человеку).',
      en: 'Correct. Recovery order: first retry (repeat), then fallback (alternative path), then rollback (revert), and only then escalate (to human).',
    },
    categorize: {
      buckets: [
        { ru: 'Retry', en: 'Retry' },
        { ru: 'Fallback', en: 'Fallback' },
        { ru: 'Rollback', en: 'Rollback' },
        { ru: 'Escalate', en: 'Escalate' },
      ],
      items: [
        {
          ru: 'Повторить тот же шаг ещё раз (транзиентная ошибка).',
          en: 'Repeat the same step again (transient error).',
        },
        {
          ru: 'Переключиться на альтернативный инструмент.',
          en: 'Switch to an alternative tool.',
        },
        {
          ru: 'Откатить изменения к последнему стабильному состоянию.',
          en: 'Revert changes to the last stable state.',
        },
        {
          ru: 'Передать задачу человеку с полным контекстом проблемы.',
          en: 'Hand off to a human with full problem context.',
        },
      ],
      correctMapping: {
        'Повторить тот же шаг ещё раз (транзиентная ошибка).': 'Retry',
        'Repeat the same step again (transient error).': 'Retry',
        'Переключиться на альтернативный инструмент.': 'Fallback',
        'Switch to an alternative tool.': 'Fallback',
        'Откатить изменения к последнему стабильному состоянию.': 'Rollback',
        'Revert changes to the last stable state.': 'Rollback',
        'Передать задачу человеку с полным контекстом проблемы.': 'Escalate',
        'Hand off to a human with full problem context.': 'Escalate',
      },
    },
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем на каждом шаге агентного цикла фиксировать структурированный step_result?',
      en: 'Why record a structured step_result at each step of the agent loop?',
    },
    options: [
      {
        ru: 'Для красивого отчета руководству.',
        en: 'To produce a nice report for management.',
      },
      {
        ru: 'Для дебага (почему упал шаг), аналитики (где тратятся ресурсы) и улучшения (какие паттерны ошибок повторяются).',
        en: 'For debugging (why a step failed), analytics (where resources are spent), and improvement (which error patterns recur).',
      },
      {
        ru: 'Наблюдаемость не нужна — достаточно финального результата.',
        en: 'Observability is not needed — the final result is enough.',
      },
    ],
    answer: {
      ru: 'Для дебага (почему упал шаг), аналитики (где тратятся ресурсы) и улучшения (какие паттерны ошибок повторяются).',
      en: 'For debugging (why a step failed), analytics (where resources are spent), and improvement (which error patterns recur).',
    },
    explanation: {
      ru: 'Да. Без наблюдаемости агент — "чёрный ящик". Структурированные логи шагов позволяют строить дашборды, находить узкие места и системно улучшать агента.',
      en: 'Yes. Without observability, the agent is a "black box." Structured step logs enable dashboards, bottleneck detection, and systematic agent improvement.',
    },
  },
  {
    id: 9,
    type: 'timeline',
    question: {
      ru: 'Упорядочите контрольные точки жизненного цикла от спецификации до релиза.',
      en: 'Arrange lifecycle checkpoints from spec to release.',
    },
    answer: '',
    explanation: {
      ru: 'Правильно. Сначала спецификация и критерии, потом реализация через агентный цикл, затем проверки, и только потом контролируемый релиз.',
      en: 'Correct. First define the spec and criteria, then implement via agent loop, then run checks, and only then staged rollout.',
    },
    timeline: {
      events: [
        {
          label: {
            ru: 'Подготовить спецификацию и ограничения (Task Contract)',
            en: 'Prepare specification and constraints (Task Contract)',
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
            ru: 'Выполнить изменения через агентный цикл (Plan → Execute → Observe → Validate → Decide)',
            en: 'Implement changes via agent loop (Plan → Execute → Observe → Validate → Decide)',
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
            ru: 'Сделать поэтапный rollout с мониторингом и готовым rollback',
            en: 'Execute staged rollout with monitoring and ready rollback',
          },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        {
          ru: 'Подготовить спецификацию и ограничения (Task Contract)',
          en: 'Prepare specification and constraints (Task Contract)',
        },
        {
          ru: 'Сформировать acceptance-тесты и eval-набор',
          en: 'Define acceptance tests and eval set',
        },
        {
          ru: 'Выполнить изменения через агентный цикл (Plan → Execute → Observe → Validate → Decide)',
          en: 'Implement changes via agent loop (Plan → Execute → Observe → Validate → Decide)',
        },
        {
          ru: 'Запустить регрессионные и safety-проверки',
          en: 'Run regression and safety checks',
        },
        {
          ru: 'Сделать поэтапный rollout с мониторингом и готовым rollback',
          en: 'Execute staged rollout with monitoring and ready rollback',
        },
      ],
    },
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать стратегию при ошибке агента в production',
      en: 'Mission: choose a strategy when the agent fails in production',
    },
    answer: '',
    explanation: {
      ru: 'Правильная цепочка: retry → fallback → rollback → escalate. Canary-выкатка с автоматическими quality gates и быстрым rollback-планом ограничивает ущерб.',
      en: 'The correct chain: retry → fallback → rollback → escalate. Canary rollout with automated quality gates and a fast rollback plan limits blast radius.',
    },
    scenario: {
      brief: {
        ru: 'Coding-агент выкатил изменения на 10% трафика (canary). Мониторинг показывает рост ошибок 5xx. Тесты агента проходили локально. Что делать?',
        en: 'A coding agent deployed changes to 10% of traffic (canary). Monitoring shows a spike in 5xx errors. Agent tests passed locally. What should you do?',
      },
      constraints: [
        { ru: 'Время отката: не более 10 минут', en: 'Rollback time must stay under 10 minutes' },
        { ru: 'Нельзя потерять данные пользователей', en: 'User data must not be lost' },
      ],
      choices: [
        {
          text: {
            ru: 'Немедленный rollback на предыдущую стабильную версию, затем расследование причин.',
            en: 'Immediate rollback to the previous stable version, then investigate root causes.',
          },
          outcome: {
            ru: 'Правильно. Rollback ограничивает ущерб и даёт команде время для спокойного анализа.',
            en: 'Correct. Rollback limits damage and gives the team time for calm analysis.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Увеличить canary до 50% — возможно, ошибки уйдут при бОльшей выборке.',
            en: 'Increase canary to 50% — maybe errors will disappear with a larger sample.',
          },
          outcome: {
            ru: 'Опасно. Вы масштабируете проблему вместо того, чтобы её остановить.',
            en: 'Dangerous. You are scaling the problem instead of stopping it.',
          },
          score: 5,
        },
        {
          text: {
            ru: 'Подождать 30 минут — возможно, это транзиентная проблема.',
            en: 'Wait 30 minutes — maybe it is a transient issue.',
          },
          outcome: {
            ru: 'При росте 5xx на canary ожидание увеличивает ущерб пользователям.',
            en: 'With rising 5xx on canary, waiting increases user impact.',
          },
          score: 20,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 11,
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
      ru: 'Да. Самый быстрый эффект дает контроль количества шагов и вызовов, а не дорогая смена модели. Это часть контракта задачи.',
      en: 'Yes. The fastest win comes from controlling step and tool-call volume, not expensive model changes. This is part of the task contract.',
    },
  },
  {
    id: 12,
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
      ru: 'Верно. Rollback — стандартная операция локализации инцидента, а не признак провала. Он сокращает время воздействия и даёт пространство для анализа.',
      en: 'Correct. Rollback is a standard incident-containment operation, not a failure signal. It reduces user impact and gives room for analysis.',
    },
  },
  {
    id: 13,
    type: 'multiple-select',
    question: {
      ru: 'Выберите антипаттерны, которые делают агентную систему нестабильной.',
      en: 'Select the antipatterns that make an agent system unstable.',
    },
    options: [
      {
        ru: 'Один агент делает всё (нет разделения ролей).',
        en: 'One agent does everything (no role separation).',
      },
      {
        ru: 'Нет явных критериев завершения задачи.',
        en: 'No explicit task completion criteria.',
      },
      {
        ru: 'Строгая JSON-схема для каждого инструмента.',
        en: 'Strict JSON schema for each tool.',
      },
      {
        ru: 'Нет логирования шагов агента.',
        en: 'No step logging for the agent.',
      },
      {
        ru: 'Нет стратегии recovery (retry/fallback/rollback).',
        en: 'No recovery strategy (retry/fallback/rollback).',
      },
    ],
    answer: [
      {
        ru: 'Один агент делает всё (нет разделения ролей).',
        en: 'One agent does everything (no role separation).',
      },
      {
        ru: 'Нет явных критериев завершения задачи.',
        en: 'No explicit task completion criteria.',
      },
      {
        ru: 'Нет логирования шагов агента.',
        en: 'No step logging for the agent.',
      },
      {
        ru: 'Нет стратегии recovery (retry/fallback/rollback).',
        en: 'No recovery strategy (retry/fallback/rollback).',
      },
    ],
    explanation: {
      ru: 'Верно. Строгая JSON-схема — это хорошая практика, а не антипаттерн. Остальные четыре пункта делают систему непредсказуемой и невоспроизводимой.',
      en: 'Correct. A strict JSON schema is a good practice, not an antipattern. The other four points make the system unpredictable and non-reproducible.',
    },
  },
];
