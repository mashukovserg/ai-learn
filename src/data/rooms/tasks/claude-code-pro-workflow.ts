import { LocalizedTask } from '../types';

export const claudeCodeProWorkflowTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'В чем ключевое преимущество режима "/plan" в Claude Code?',
      en: 'What is the key advantage of the "/plan" mode in Claude Code?'
    },
    options: [
      { ru: 'Он дешевле в 2 раза', en: 'It is 50% cheaper' },
      { ru: 'Он позволяет просмотреть и утвердить список действий до того, как агент начнет менять файлы', en: 'It allows you to review and approve the list of actions before the agent starts changing files' },
      { ru: 'Он автоматически пишет тесты', en: 'It automatically writes tests' },
      { ru: 'Он работает без интернета', en: 'It works offline' }
    ],
    answer: {
      ru: 'Он позволяет просмотреть и утвердить список действий до того, как агент начнет менять файлы',
      en: 'It allows you to review and approve the list of actions before the agent starts changing files'
    },
    explanation: {
      ru: 'План дает вам контроль над архитектурными решениями агента до внесения изменений.',
      en: 'A plan gives you control over the agent\'s architectural decisions before changes are made.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Какая команда позволяет вернуть сессию к определенному моменту в прошлом?',
      en: 'Which command allows you to restore a session to a specific point in the past?'
    },
    options: [
      { ru: '/back', en: '/back' },
      { ru: '/rewind', en: '/rewind' },
      { ru: '/undo', en: '/undo' },
      { ru: '/history', en: '/history' }
    ],
    answer: {
      ru: '/rewind',
      en: '/rewind'
    },
    explanation: {
      ru: 'Rewind — это "чекпоинт", позволяющий откатить неудачную ветку диалога и попробовать другой путь.',
      en: 'Rewind is a "checkpoint" allowing you to roll back a failed dialogue branch and try another path.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Какой язык программирования можно использовать для кастомизации "Status Line" в Claude Code CLI?',
      en: 'Which programming language can be used to customize the "Status Line" in Claude Code CLI?'
    },
    options: [
      { ru: 'Только Bash', en: 'Bash only' },
      { ru: 'Любой язык, поддерживаемый вашей системой (через shebang)', en: 'Any language supported by your system (via shebang)' },
      { ru: 'Только JavaScript', en: 'JavaScript only' }
    ],
    answer: {
      ru: 'Любой язык, поддерживаемый вашей системой (через shebang)',
      en: 'Any language supported by your system (via shebang)'
    },
    explanation: {
      ru: 'Скрипт status-line.sh может вызывать Python, Node.js или обычный Bash для вывода нужной телеметрии.',
      en: 'The status-line.sh script can invoke Python, Node.js, or plain Bash to output desired telemetry.'
    }
  },
  {
    id: 4,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите уровни настроек (scopes) Claude Code в порядке приоритета (от высшего к низшему):',
      en: 'Arrange Claude Code setting scopes in order of priority (from highest to lowest):'
    },
    initialItems: [
      { ru: 'Project Settings (в репозитории)', en: 'Project Settings (in repo)' },
      { ru: 'Managed Settings (DevOps/IT)', en: 'Managed Settings (DevOps/IT)' },
      { ru: 'Local Settings (не в гите)', en: 'Local Settings (not in git)' },
      { ru: 'User Settings (глобальные для юзера)', en: 'User Settings (global user)' }
    ],
    correctOrder: [
      { ru: 'Managed Settings (DevOps/IT)', en: 'Managed Settings (DevOps/IT)' },
      { ru: 'User Settings (глобальные для юзера)', en: 'User Settings (global user)' },
      { ru: 'Project Settings (в репозитории)', en: 'Project Settings (in repo)' },
      { ru: 'Local Settings (не в гите)', en: 'Local Settings (not in git)' }
    ],
    explanation: {
      ru: 'Настройки организации (Managed) имеют высший приоритет, а локальные — низший.',
      en: 'Organization settings (Managed) have the highest priority, while local ones have the lowest.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "auto compact buffer" (22%) в настройках контекста?',
      en: 'What is the "auto compact buffer" (22%) in context settings?'
    },
    options: [
      { ru: 'Скидка на токены', en: 'A token discount' },
      { ru: 'Резервируемое место в памяти для суммаризации истории при приближении к лимиту', en: 'Reserved space in memory for history summarization when approaching limits' },
      { ru: 'Скорость сжатия файлов на диске', en: 'File compression speed on disk' },
      { ru: 'Объем кэша для Haiku', en: 'Cache size for Haiku' }
    ],
    answer: {
      ru: 'Резервируемое место в памяти для суммаризации истории при приближении к лимиту',
      en: 'Reserved space in memory for history summarization when approaching limits'
    },
    explanation: {
      ru: 'Это обеспечивает "запас хода" для модели, чтобы она могла корректно сжать контекст, не "забыв" задачу.',
      en: 'This ensures "headroom" for the model to correctly compress context without "forgetting" the task.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Как Andrew Brown рекомендует следить за расходами при использовании подписки (Subscription)?',
      en: 'How does Andrew Brown recommend tracking costs when using a Subscription?'
    },
    options: [
      { ru: 'Считать токены вручную в Excel', en: 'Counting tokens manually in Excel' },
      { ru: 'Использовать сторонний инструмент CC Usage (анализатор JSONL-логов)', en: 'Using the CC Usage community tool (JSONL log analyzer)' },
      { ru: 'Каждые 5 минут проверять личный кабинет', en: 'Checking the dashboard every 5 minutes' },
      { ru: 'Никак, подписка безлимитная', en: 'No need, subscription is unlimited' }
    ],
    answer: {
      ru: 'Использовать сторонний инструмент CC Usage (анализатор JSONL-логов)',
      en: 'Using the CC Usage community tool (JSONL log analyzer)'
    },
    explanation: {
      ru: 'Claude Code сохраняет логи каждой сессии в JSONL, которые можно анализировать для понимания реального потребления.',
      en: 'Claude Code saves logs of each session in JSONL, which can be analyzed to understand real consumption.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Какое сочетание клавиш переключает режимы разрешений (Shift Tab)?',
      en: 'Which key combination toggles permission modes (Shift Tab)?'
    },
    options: [
      { ru: 'Default -> Plan -> Accept Edits', en: 'Default -> Plan -> Accept Edits' },
      { ru: 'Read -> Write -> Execute', en: 'Read -> Write -> Execute' },
      { ru: 'Sonnet -> Opus -> Haiku', en: 'Sonnet -> Opus -> Haiku' },
      { ru: 'Terminal -> VS Code -> Web', en: 'Terminal -> VS Code -> Web' }
    ],
    answer: {
      ru: 'Default -> Plan -> Accept Edits',
      en: 'Default -> Plan -> Accept Edits'
    },
    explanation: {
      ru: 'Это быстрый способ переключиться между "спрашивай разрешение", "сначала план" и "правь без спроса".',
      en: 'This is a fast way to switch between "ask permission," "plan first," and "edit without asking."'
    }
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Управление зависшей сессией',
      en: 'Managing a Frozen Session'
    },
    answer: '',
    explanation: {
      ru: 'Сессии Claude Code персистентны и привязаны к ID, хранящимся в ~/.claude/projects.',
      en: 'Claude Code sessions are persistent and linked to IDs stored in ~/.claude/projects.'
    },
    scenario: {
      brief: {
        ru: 'Вы запустили Claude Code в WSL2, и среда полностью замерзла (freeze). Что делать согласно опыту Andrew Brown?',
        en: 'You launched Claude Code in WSL2, and the environment completely froze. What should you do according to Andrew Brown\'s experience?'
      },
      constraints: [
        { ru: 'Нужно продолжить работу над задачей', en: 'Must continue working on the task' },
        { ru: 'Нельзя потерять контекст предыдущих 30 минут', en: 'Cannot lose the previous 30 minutes of context' }
      ],
      choices: [
        {
          text: { ru: 'Удалить папку .claude и начать заново', en: 'Delete the .claude folder and start over' },
          outcome: { ru: 'Контекст потерян. Плохо.', en: 'Context lost. Bad.' },
          score: 0
        },
        {
          text: { ru: 'Перезапустить WSL и использовать команду /resume с ID сессии', en: 'Restart WSL and use the /resume command with the session ID' },
          outcome: { ru: 'Верно. Claude Code сохраняет сессии на диске, их всегда можно возобновить.', en: 'Correct. Claude Code saves sessions on disk; they can always be resumed.' },
          score: 10
        },
        {
          text: { ru: 'Ждать 5 часов до сброса лимитов', en: 'Wait 5 hours for the limit reset' },
          outcome: { ru: 'Это не поможет при зависании системы.', en: 'This won\'t help with a system freeze.' },
          score: 2
        }
      ],
      passingScore: 9
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Ментор о сессиях',
      en: 'Mentor on Sessions'
    },
    answer: '',
    explanation: {
      ru: 'Это называется Remote Control или Cross-Surface Resuming.',
      en: 'This is called Remote Control or Cross-Surface Resuming.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Я начал сложную задачу в веб-интерфейсе Claude Code, но теперь хочу продолжить её в терминале у себя на компьютере. Это возможно?',
        en: 'I started a complex task in the Claude Code web UI, but now I want to continue it in my local terminal. Is this possible?'
      },
      userOptions: [
        {
          text: { ru: 'Нет, веб и локальный CLI никак не связаны', en: 'No, web and local CLI are not connected' },
          reaction: { ru: 'Ошибаетесь. Они используют общую инфраструктуру Anthropic.', en: 'Wrong. They share the Anthropic infrastructure.' },
          isCorrect: false
        },
        {
          text: { ru: 'Да, вы можете возобновить (resume) веб-сессию в локальном CLI, если авторизованы под тем же аккаунтом', en: 'Yes, you can resume a web session in the local CLI if logged into the same account' },
          reaction: { ru: 'Верно! Это один из самых мощных сценариев использования Claude Code.', en: 'Correct! This is one of the most powerful Claude Code use cases.' },
          isCorrect: true,
          deepening: { ru: 'Это называется Remote Control или Cross-Surface Resuming.', en: 'This is called Remote Control or Cross-Surface Resuming.' }
        }
      ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем Andrew Brown рекомендует сохранять план в отдельный файл (save to file)?',
      en: 'Why does Andrew Brown recommend saving the plan to a separate file?'
    },
    options: [
      { ru: 'Чтобы он не "исчез" после выполнения и на нем можно было итерироваться', en: 'So it doesn\'t "vanish" after execution and can be iterated upon' },
      { ru: 'Для налоговой отчетности', en: 'For tax reporting' },
      { ru: 'Чтобы показать инвесторам', en: 'To show to investors' },
      { ru: 'Чтобы агент не забыл код', en: 'So the agent doesn\'t forget the code' }
    ],
    answer: {
      ru: 'Чтобы он не "исчез" после выполнения и на нем можно было итерироваться',
      en: 'So it doesn\'t "vanish" after execution and can be iterated upon'
    },
    explanation: {
      ru: 'Диалоговое окно может очиститься, но файл с планом останется надежной точкой опоры для проекта.',
      en: 'The dialogue window may clear, but the plan file remains a reliable reference point for the project.'
    }
  }
];
