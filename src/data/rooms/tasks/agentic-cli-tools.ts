import { LocalizedTask } from '../types';

export const agenticCliToolsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Какое утверждение лучше описывает роль CLI в agent coding?',
      en: 'Which statement best describes CLI in agent coding?',
    },
    options: [
      {
        ru: 'CLI нужен только для запуска одной команды в конце релиза.',
        en: 'CLI is only needed to run a single command at the end of release.',
      },
      {
        ru: 'CLI — это управляемый контур исследования, изменения и проверки с наблюдаемыми шагами.',
        en: 'CLI is a controlled loop of discovery, change, and validation with observable steps.',
      },
      {
        ru: 'CLI можно пропустить, если модель выдала длинное объяснение.',
        en: 'CLI can be skipped if the model produced a long explanation.',
      },
    ],
    answer: {
      ru: 'CLI — это управляемый контур исследования, изменения и проверки с наблюдаемыми шагами.',
      en: 'CLI is a controlled loop of discovery, change, and validation with observable steps.',
    },
    explanation: {
      ru: 'Верно. В agent coding терминал фиксирует трассу действий и позволяет повторять инженерный цикл без скрытых шагов.',
      en: 'Correct. In agent coding, the terminal provides an auditable action trace and repeatable engineering flow.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите команду, которую в проекте рекомендуют для быстрого поиска по коду вместо `grep`.',
      en: 'Enter the command recommended in this project for fast code search instead of `grep`.',
    },
    answer: 'rg',
    hint: {
      ru: 'Это сокращение от ripgrep.',
      en: 'It is short for ripgrep.',
    },
    explanation: {
      ru: 'Точно. `rg` быстрее в больших репозиториях и подходит как базовый инструмент исследования.',
      en: 'Exactly. `rg` is faster on large repositories and is a baseline discovery tool.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите безопасные практики для CLI-цикла coding-агента.',
      en: 'Select safe practices for a coding-agent CLI loop.',
    },
    options: [
      {
        ru: 'Сначала читать и анализировать, потом применять изменения.',
        en: 'Read and analyze first, then apply modifications.',
      },
      {
        ru: 'Покрывать изменения проверкой: `eslint`, `tsc`, тесты.',
        en: 'Validate changes with checks: `eslint`, `tsc`, tests.',
      },
      {
        ru: 'Выполнять деструктивные команды без подтверждения.',
        en: 'Execute destructive commands without confirmation.',
      },
      {
        ru: 'Ограничивать область изменений и документировать шаги.',
        en: 'Limit edit scope and document execution steps.',
      },
    ],
    answer: [
      {
        ru: 'Сначала читать и анализировать, потом применять изменения.',
        en: 'Read and analyze first, then apply modifications.',
      },
      {
        ru: 'Покрывать изменения проверкой: `eslint`, `tsc`, тесты.',
        en: 'Validate changes with checks: `eslint`, `tsc`, tests.',
      },
      {
        ru: 'Ограничивать область изменений и документировать шаги.',
        en: 'Limit edit scope and document execution steps.',
      },
    ],
    explanation: {
      ru: 'Да. Безопасный CLI-процесс держится на контроле области изменений и обязательной валидации перед релизом.',
      en: 'Yes. A safe CLI process relies on bounded edits and mandatory validation before release.',
    },
  },
  {
    id: 4,
    type: 'sorting',
    question: {
      ru: 'Расположите базовый CLI-цикл для agent coding в правильном порядке.',
      en: 'Arrange the baseline CLI loop for agent coding in correct order.',
    },
    initialItems: [
      { ru: 'Проверить через quality gates', en: 'Validate via quality gates' },
      { ru: 'Применить изменение', en: 'Apply change' },
      { ru: 'Собрать контекст (поиск/чтение)', en: 'Gather context (search/read)' },
      { ru: 'Сформулировать план и критерии', en: 'Define plan and acceptance criteria' },
      { ru: 'Решить выпуск/откат', en: 'Decide release/rollback' },
    ],
    correctOrder: [
      { ru: 'Собрать контекст (поиск/чтение)', en: 'Gather context (search/read)' },
      { ru: 'Сформулировать план и критерии', en: 'Define plan and acceptance criteria' },
      { ru: 'Применить изменение', en: 'Apply change' },
      { ru: 'Проверить через quality gates', en: 'Validate via quality gates' },
      { ru: 'Решить выпуск/откат', en: 'Decide release/rollback' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Такой порядок сокращает риск случайных правок и упрощает контроль результата.',
      en: 'Correct. This order reduces accidental changes and keeps outcomes controllable.',
    },
  },
  {
    id: 5,
    type: 'mentor',
    question: {
      ru: 'Агент предлагает удалить директорию с логами. Как действовать безопасно?',
      en: 'The agent suggests deleting a logs directory. What is the safe action?',
    },
    answer: '',
    explanation: {
      ru: 'Безопасная стратегия: сначала проверить область воздействия и подтвердить необходимость удаления.',
      en: 'Safe handling means checking impact scope first and confirming deletion necessity.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'В отчете есть команда удаления, но не указано, какие сервисы зависят от этих файлов. Что выбираем?',
        en: 'The report includes a deletion command, but it does not show which services depend on those files. What do we choose?',
      },
      userOptions: [
        {
          text: {
            ru: 'Сразу выполнить удаление и посмотреть, что сломается.',
            en: 'Run deletion immediately and see what breaks.',
          },
          reaction: {
            ru: 'Это рискованно: вы создаете инцидент до проверки воздействия.',
            en: 'That is risky: you create an incident before impact verification.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Собрать зависимости, проверить через dry run и только после подтверждения запускать изменение.',
            en: 'Collect dependencies, run a dry run, and execute only after confirmation.',
          },
          reaction: {
            ru: 'Правильно. Так вы удерживаете контроль и уменьшаете вероятность необратимых ошибок.',
            en: 'Correct. This keeps control and reduces the chance of irreversible errors.',
          },
          deepening: {
            ru: 'Для risk-команд нужен явный gate: контекст, проверка, подтверждение, затем выполнение.',
            en: 'Risk commands require an explicit gate: context, validation, approval, then execution.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Отключить логи безопасности, чтобы ускорить процесс.',
            en: 'Disable safety logs to speed up execution.',
          },
          reaction: {
            ru: 'Без логов расследование инцидента станет дольше и дороже.',
            en: 'Without logs, incident investigation becomes slower and more expensive.',
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
      ru: 'Распределите действия по фазам CLI-цикла: Discover / Change / Verify.',
      en: 'Map activities to CLI phases: Discover / Change / Verify.',
    },
    answer: '',
    explanation: {
      ru: 'Отлично. Такое разделение удерживает прозрачность шага и снижает хаос в агентном цикле.',
      en: 'Great. This phase split keeps each step explicit and reduces loop chaos.',
    },
    categorize: {
      buckets: [
        { ru: 'Discover', en: 'Discover' },
        { ru: 'Change', en: 'Change' },
        { ru: 'Verify', en: 'Verify' },
      ],
      items: [
        {
          ru: 'Найти все упоминания API-метода и затронутые файлы.',
          en: 'Find all mentions of an API method and affected files.',
        },
        {
          ru: 'Внести patch и обновить сигнатуру функции.',
          en: 'Apply a patch and update a function signature.',
        },
        {
          ru: 'Запустить `npx eslint` и `npx tsc --noEmit`.',
          en: 'Run `npx eslint` and `npx tsc --noEmit`.',
        },
        {
          ru: 'Сравнить ожидаемое поведение с фактическим diff.',
          en: 'Compare expected behavior with the actual diff.',
        },
      ],
      correctMapping: {
        'Find all mentions of an API method and affected files.': 'Discover',
        'Apply a patch and update a function signature.': 'Change',
        'Run `npx eslint` and `npx tsc --noEmit`.': 'Verify',
        'Compare expected behavior with the actual diff.': 'Verify',
      },
    },
  },
  {
    id: 7,
    type: 'timeline',
    question: {
      ru: 'Упорядочите этапы CLI-процесса от задачи до релиза.',
      en: 'Arrange CLI workflow checkpoints from task to release.',
    },
    answer: '',
    explanation: {
      ru: 'Да. Сначала рамка задачи, затем изменения и проверка, и только после этого controlled release.',
      en: 'Yes. First frame the task, then change and validate, and only then move to controlled release.',
    },
    timeline: {
      events: [
        {
          label: {
            ru: 'Получить критерии приемки и ограничения',
            en: 'Collect acceptance criteria and constraints',
          },
          year: 'Step 1',
        },
        {
          label: {
            ru: 'Собрать контекст через поиск и чтение файлов',
            en: 'Gather context via search and file reads',
          },
          year: 'Step 2',
        },
        {
          label: {
            ru: 'Применить минимальный patch',
            en: 'Apply minimal patch',
          },
          year: 'Step 3',
        },
        {
          label: {
            ru: 'Прогнать quality checks и зафиксировать результат',
            en: 'Run quality checks and record outcome',
          },
          year: 'Step 4',
        },
        {
          label: {
            ru: 'Решить rollout или rollback',
            en: 'Decide rollout or rollback',
          },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        {
          ru: 'Получить критерии приемки и ограничения',
          en: 'Collect acceptance criteria and constraints',
        },
        {
          ru: 'Собрать контекст через поиск и чтение файлов',
          en: 'Gather context via search and file reads',
        },
        {
          ru: 'Применить минимальный patch',
          en: 'Apply minimal patch',
        },
        {
          ru: 'Прогнать quality checks и зафиксировать результат',
          en: 'Run quality checks and record outcome',
        },
        {
          ru: 'Решить rollout или rollback',
          en: 'Decide rollout or rollback',
        },
      ],
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать безопасную стратегию CLI-выкатки в production',
      en: 'Mission: choose a safe CLI rollout strategy for production',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия сочетает ограниченную выкатку, quality gate и быстрый rollback-план.',
      en: 'The best strategy combines staged rollout, quality gates, and a fast rollback path.',
    },
    scenario: {
      brief: {
        ru: 'Нужно выкатить изменение конфигурации, подготовленное через CLI-цикл агента, без критичной деградации сервиса.',
        en: 'You need to release a configuration change prepared via an agent CLI loop without critical service degradation.',
      },
      constraints: [
        { ru: 'Критичные регрессии недопустимы', en: 'Critical regressions are unacceptable' },
        { ru: 'Rollback должен занимать не более 10 минут', en: 'Rollback must stay under 10 minutes' },
      ],
      choices: [
        {
          text: {
            ru: 'Выкатить сразу на 100% без доп.проверок, чтобы ускорить релиз.',
            en: 'Roll out to 100% immediately without extra checks to speed delivery.',
          },
          outcome: {
            ru: 'Высокий риск инцидента: нет точки остановки до массового воздействия.',
            en: 'High incident risk: there is no stop point before full impact.',
          },
          score: 15,
        },
        {
          text: {
            ru: 'Canary 10% + quality gates (`eslint`, `tsc`, smoke) + наблюдение метрик + auto-rollback.',
            en: '10% canary + quality gates (`eslint`, `tsc`, smoke) + metric monitoring + auto-rollback.',
          },
          outcome: {
            ru: 'Сбалансированный подход: радиус ошибки ограничен, качество контролируется до масштабирования.',
            en: 'Balanced approach: blast radius is bounded and quality is controlled before scaling.',
          },
          score: 96,
        },
        {
          text: {
            ru: 'Отключить проверку типов и логирование на первую неделю.',
            en: 'Disable type checks and logging for the first week.',
          },
          outcome: {
            ru: 'Краткосрочно быстрее, но деградации обнаруживаются поздно, а расследование усложняется.',
            en: 'Faster short-term, but degradations are detected late and investigations become harder.',
          },
          score: 30,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Какой первый рычаг обычно быстрее всего снижает стоимость CLI-цикла агента?',
      en: 'Which first lever usually reduces agent CLI loop cost fastest?',
    },
    options: [
      {
        ru: 'Увеличить число шагов, чтобы агент сделал больше попыток.',
        en: 'Increase step count so the agent can try more attempts.',
      },
      {
        ru: 'Задать stop-критерии и лимит на количество команд в цикле.',
        en: 'Set explicit stop criteria and a command-budget per loop.',
      },
      {
        ru: 'Отключить проверки перед merge.',
        en: 'Disable checks before merge.',
      },
    ],
    answer: {
      ru: 'Задать stop-критерии и лимит на количество команд в цикле.',
      en: 'Set explicit stop criteria and a command-budget per loop.',
    },
    explanation: {
      ru: 'Верно. Ограничение шагов и чёткая остановка обычно дают самый быстрый эффект по стоимости и задержке.',
      en: 'Correct. Step limits and explicit stop conditions usually deliver the fastest cost/latency impact.',
    },
  },
  {
    id: 10,
    type: 'input',
    question: {
      ru: 'Введите режим проверки команды, который запускают перед рискованным изменением без фактического применения.',
      en: 'Enter the command-check mode used before risky changes without applying them.',
    },
    answer: ['dry run', 'dryrun'],
    hint: {
      ru: 'Два английских слова.',
      en: 'Two English words.',
    },
    explanation: {
      ru: 'Точно. Dry run снижает риск и позволяет увидеть эффект команды до реального изменения.',
      en: 'Exactly. A dry run lowers risk by previewing command impact before real mutation.',
    },
  },
];
