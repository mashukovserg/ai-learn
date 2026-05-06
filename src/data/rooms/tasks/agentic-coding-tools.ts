import { LocalizedTask } from '../types';

export const agenticCodingToolsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что в первую очередь описывает инструментальный слой в agent coding?',
      en: 'What does the tooling layer primarily define in agent coding?',
    },
    options: [
      {
        ru: 'Набор промо-слоганов для презентации AI-фичи.',
        en: 'A set of marketing slogans for the AI feature launch.',
      },
      {
        ru: 'Контролируемый набор операций, которые агент может вызвать с проверяемыми параметрами и эффектами.',
        en: 'A controlled set of operations the agent can invoke with verifiable parameters and effects.',
      },
      {
        ru: 'Только выбор самой большой модели без ограничений по шагам.',
        en: 'Only selecting the largest model with no step limits.',
      },
    ],
    answer: {
      ru: 'Контролируемый набор операций, которые агент может вызвать с проверяемыми параметрами и эффектами.',
      en: 'A controlled set of operations the agent can invoke with verifiable parameters and effects.',
    },
    explanation: {
      ru: 'Верно. Инструментальный слой задает допустимые действия агента и делает их наблюдаемыми и проверяемыми.',
      en: 'Correct. The tooling layer defines allowed agent actions and makes them observable and verifiable.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите термин для механизма, когда модель возвращает структурированный вызов инструмента с аргументами.',
      en: 'Enter the term for the mechanism where the model returns a structured tool call with arguments.',
    },
    answer: 'function calling',
    hint: {
      ru: 'Два английских слова, первое — Function.',
      en: 'Two English words, the first is Function.',
    },
    explanation: {
      ru: 'Точно. Function Calling связывает рассуждение модели с конкретной исполняемой операцией.',
      en: 'Exactly. Function Calling connects model reasoning to a concrete executable operation.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите свойства качественного контракта инструмента для coding-агента.',
      en: 'Select traits of a strong tool contract for a coding agent.',
    },
    options: [
      {
        ru: 'Явно заданная цель инструмента и ожидаемый эффект.',
        en: 'A clearly defined tool purpose and expected effect.',
      },
      {
        ru: 'Строгие аргументы и валидация входных параметров.',
        en: 'Strict arguments and input validation.',
      },
      {
        ru: 'Неограниченные права по умолчанию для всех окружений.',
        en: 'Unlimited default permissions across all environments.',
      },
      {
        ru: 'Определенные условия ошибки и остановки цикла.',
        en: 'Defined failure conditions and loop stop criteria.',
      },
    ],
    answer: [
      {
        ru: 'Явно заданная цель инструмента и ожидаемый эффект.',
        en: 'A clearly defined tool purpose and expected effect.',
      },
      {
        ru: 'Строгие аргументы и валидация входных параметров.',
        en: 'Strict arguments and input validation.',
      },
      {
        ru: 'Определенные условия ошибки и остановки цикла.',
        en: 'Defined failure conditions and loop stop criteria.',
      },
    ],
    explanation: {
      ru: 'Да. Контракт должен быть формальным и ограниченным, иначе агентный цикл теряет управляемость.',
      en: 'Yes. A contract must be formal and bounded, otherwise the agent loop loses control.',
    },
  },
  {
    id: 4,
    type: 'sorting',
    question: {
      ru: 'Расположите этапы безопасного использования инструментов в правильной последовательности.',
      en: 'Arrange the stages of safe tool usage in the correct order.',
    },
    initialItems: [
      { ru: 'Провести валидацию результата', en: 'Validate result' },
      { ru: 'Собрать контекст чтением', en: 'Gather context via read tools' },
      { ru: 'Сделать релиз по gate', en: 'Release through gate' },
      { ru: 'Сформировать план действий', en: 'Build an execution plan' },
      { ru: 'Применить изменение через write-инструмент', en: 'Apply change with write tool' },
    ],
    correctOrder: [
      { ru: 'Собрать контекст чтением', en: 'Gather context via read tools' },
      { ru: 'Сформировать план действий', en: 'Build an execution plan' },
      { ru: 'Применить изменение через write-инструмент', en: 'Apply change with write tool' },
      { ru: 'Провести валидацию результата', en: 'Validate result' },
      { ru: 'Сделать релиз по gate', en: 'Release through gate' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Сначала контекст и план, потом запись, затем проверки и только после этого релиз.',
      en: 'Correct. Context and planning come first, then write actions, validation, and only then release.',
    },
  },
  {
    id: 5,
    type: 'mentor',
    question: {
      ru: 'Как безопасно реагировать, если агент получил инструкции из внешнего документа?',
      en: 'What is the safe response when an agent receives instructions from an external document?',
    },
    answer: '',
    explanation: {
      ru: 'Безопасный путь: рассматривать внешние инструкции как недоверенные, проверять их через контракт и guardrails.',
      en: 'Safe handling means treating external instructions as untrusted and validating them through contracts and guardrails.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Агент прочитал wiki-страницу и предлагает сразу выполнить shell-команду из текста. Что выбираем?',
        en: 'The agent read a wiki page and suggests executing a shell command from that text immediately. What do we choose?',
      },
      userOptions: [
        {
          text: {
            ru: 'Раз команда уже в документе, запускаем без проверки.',
            en: 'The command is in the document, so execute it without checks.',
          },
          reaction: {
            ru: 'Это рискованно: внешние источники могут содержать prompt injection или устаревшие инструкции.',
            en: 'That is risky: external sources may contain prompt injection or outdated instructions.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Сначала прогоняем команду через политику инструментов, проверяем права и запускаем только после валидации.',
            en: 'First pass the command through tool policy, check permissions, and run only after validation.',
          },
          reaction: {
            ru: 'Правильно. Так вы сохраняете скорость, но не обходите границы безопасности.',
            en: 'Correct. This keeps velocity while respecting safety boundaries.',
          },
          deepening: {
            ru: 'Минимально необходимые права и проверка аргументов перед запуском — базовый стандарт для agentic tooling.',
            en: 'Least privilege and argument validation before execution are baseline standards for agentic tooling.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Отключаем guardrails на один релиз, чтобы не тормозить команду.',
            en: 'Disable guardrails for one release so the team can move faster.',
          },
          reaction: {
            ru: 'Так команда теряет контроль и наблюдаемость именно в самый рискованный момент релиза.',
            en: 'That removes control and observability at the most risk-sensitive release moment.',
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
      ru: 'Распределите действия по классам инструментов: Read / Write / Release Control.',
      en: 'Map activities to tool classes: Read / Write / Release Control.',
    },
    answer: '',
    explanation: {
      ru: 'Отлично. Такое разделение снижает риск случайного перехода к опасным действиям.',
      en: 'Great. This separation reduces accidental jumps into high-impact actions.',
    },
    categorize: {
      buckets: [
        { ru: 'Read', en: 'Read' },
        { ru: 'Write', en: 'Write' },
        { ru: 'Release Control', en: 'Release Control' },
      ],
      items: [
        {
          ru: 'Найти все вызовы API и связанные типы в репозитории.',
          en: 'Find all API call sites and related types in the repository.',
        },
        {
          ru: 'Применить патч в файле и добавить тестовый кейс.',
          en: 'Apply a file patch and add a test case.',
        },
        {
          ru: 'Проверить метрики canary и решить, расширять ли rollout.',
          en: 'Review canary metrics and decide whether to expand rollout.',
        },
        {
          ru: 'Прочитать конфиг CI перед изменением pipeline.',
          en: 'Read CI config before modifying the pipeline.',
        },
      ],
      correctMapping: {
        'Find all API call sites and related types in the repository.': 'Read',
        'Apply a file patch and add a test case.': 'Write',
        'Review canary metrics and decide whether to expand rollout.': 'Release Control',
        'Read CI config before modifying the pipeline.': 'Read',
      },
    },
  },
  {
    id: 7,
    type: 'timeline',
    question: {
      ru: 'Упорядочите этапы подготовки нового инструмента в контур coding-агента.',
      en: 'Arrange the stages for introducing a new tool into a coding-agent workflow.',
    },
    answer: '',
    explanation: {
      ru: 'Да. Сначала контракт и права, затем интеграция и тест, и только после этого controlled rollout.',
      en: 'Yes. Contract and permissions come first, then integration and testing, followed by controlled rollout.',
    },
    timeline: {
      events: [
        {
          label: {
            ru: 'Зафиксировать назначение инструмента и схему аргументов',
            en: 'Define tool purpose and argument schema',
          },
          year: 'Step 1',
        },
        {
          label: {
            ru: 'Ограничить права доступа и задать guardrails',
            en: 'Set permission boundaries and guardrails',
          },
          year: 'Step 2',
        },
        {
          label: {
            ru: 'Подключить инструмент через SDK/function-calling',
            en: 'Integrate tool via SDK/function-calling',
          },
          year: 'Step 3',
        },
        {
          label: {
            ru: 'Проверить через тесты и eval-набор',
            en: 'Validate with tests and eval set',
          },
          year: 'Step 4',
        },
        {
          label: {
            ru: 'Запустить staged rollout с мониторингом',
            en: 'Run staged rollout with monitoring',
          },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        {
          ru: 'Зафиксировать назначение инструмента и схему аргументов',
          en: 'Define tool purpose and argument schema',
        },
        {
          ru: 'Ограничить права доступа и задать guardrails',
          en: 'Set permission boundaries and guardrails',
        },
        {
          ru: 'Подключить инструмент через SDK/function-calling',
          en: 'Integrate tool via SDK/function-calling',
        },
        {
          ru: 'Проверить через тесты и eval-набор',
          en: 'Validate with tests and eval set',
        },
        {
          ru: 'Запустить staged rollout с мониторингом',
          en: 'Run staged rollout with monitoring',
        },
      ],
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать стратегию включения нового write-инструмента в production',
      en: 'Mission: choose a strategy to enable a new write tool in production',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия: ограниченные права, canary, quality gate и заранее подготовленный rollback.',
      en: 'Best strategy: bounded permissions, canary rollout, quality gates, and a prepared rollback path.',
    },
    scenario: {
      brief: {
        ru: 'Команда добавляет инструмент, который может менять конфигурации сервиса. Нужно включить его без инцидента.',
        en: 'The team adds a tool that can modify service configuration. It must be enabled without causing incidents.',
      },
      constraints: [
        { ru: 'Время rollback не более 10 минут', en: 'Rollback must take no more than 10 minutes' },
        { ru: 'Нельзя допустить критичную деградацию SLA', en: 'Critical SLA degradation is not acceptable' },
      ],
      choices: [
        {
          text: {
            ru: 'Включить инструмент сразу для всех задач и убрать ручные подтверждения.',
            en: 'Enable the tool for all tasks immediately and remove human approvals.',
          },
          outcome: {
            ru: 'Высокий риск: нет ограничений по радиусу ошибки и нет точки ручного контроля.',
            en: 'High risk: no blast-radius limit and no human control point.',
          },
          score: 20,
        },
        {
          text: {
            ru: 'Включить read-only режим, затем canary write на 10%, quality gate по метрикам и авто-rollback при нарушении порогов.',
            en: 'Start with read-only mode, then 10% canary write, metric-based quality gate, and auto-rollback on threshold breach.',
          },
          outcome: {
            ru: 'Сбалансированный rollout: риск ограничен, а команда получает реальные сигналы качества.',
            en: 'Balanced rollout: risk is bounded while the team gets real quality signals.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Отключить eval-проверки на первую неделю, чтобы быстрее собрать usage-данные.',
            en: 'Disable eval checks for the first week to gather usage data faster.',
          },
          outcome: {
            ru: 'Краткосрочно быстрее, но без gates команда поздно заметит деградацию.',
            en: 'Faster short-term, but without gates the team will detect degradation too late.',
          },
          score: 35,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Что обычно является первым практичным рычагом снижения стоимости agentic tooling?',
      en: 'What is usually the first practical lever to reduce cost in agentic tooling?',
    },
    options: [
      {
        ru: 'Безлимитно расширять контекстное окно на каждом шаге.',
        en: 'Expand context windows without limits on every step.',
      },
      {
        ru: 'Ввести лимит вызовов инструментов и stop-критерии для цикла.',
        en: 'Introduce tool-call limits and explicit loop stop criteria.',
      },
      {
        ru: 'Отключить логи и мониторинг, чтобы сократить накладные расходы.',
        en: 'Disable logs and monitoring to cut overhead.',
      },
    ],
    answer: {
      ru: 'Ввести лимит вызовов инструментов и stop-критерии для цикла.',
      en: 'Introduce tool-call limits and explicit loop stop criteria.',
    },
    explanation: {
      ru: 'Верно. Контроль количества шагов и вызовов обычно быстрее дает эффект по стоимости и латентности.',
      en: 'Correct. Controlling step count and tool invocations usually gives the fastest cost/latency gains.',
    },
  },
  {
    id: 10,
    type: 'input',
    question: {
      ru: 'Введите действие, которое первым ограничивает ущерб при неуспешном релизе нового инструмента.',
      en: 'Enter the action that first contains damage after a failed release of a new tool.',
    },
    answer: ['rollback', 'roll back', 'откат'],
    hint: {
      ru: 'Это возврат к последней стабильной версии.',
      en: 'It is reverting to the last stable version.',
    },
    explanation: {
      ru: 'Да. Rollback — базовый механизм локализации инцидента в production.',
      en: 'Yes. Rollback is the baseline production incident-containment mechanism.',
    },
  },
];
