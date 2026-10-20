import { LocalizedTask } from '../types';

export const claudeCodeProWorkflowTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'categorize',
    question: {
      ru: 'Подберите режим прав для каждой ситуации.',
      en: 'Match each situation to a permission mode.'
    },
    answer: '',
    categorize: {
      items: [
        { ru: 'Код незнаком, сначала нужно разобраться и предложить подход', en: 'The code is unfamiliar; first understand it and propose an approach' },
        { ru: 'Вы не можете заранее сказать, какие файлы изменятся', en: 'You cannot say in advance which files will change' },
        { ru: 'Итерации над кодом, который вы всё равно просматриваете', en: 'Iterating on code you review anyway' },
        { ru: 'Длинная задача, в которой постоянные вопросы утомляют', en: 'A long task where constant questions become tiring' },
        { ru: 'Скрипт в CI, где некому отвечать на вопросы', en: 'A CI script where nobody is there to answer questions' }
      ],
      buckets: [
        { ru: 'plan', en: 'plan' },
        { ru: 'acceptEdits', en: 'acceptEdits' },
        { ru: 'auto', en: 'auto' },
        { ru: 'dontAsk', en: 'dontAsk' }
      ],
      correctMapping: {
        'The code is unfamiliar; first understand it and propose an approach': 'plan',
        'You cannot say in advance which files will change': 'plan',
        'Iterating on code you review anyway': 'acceptEdits',
        'A long task where constant questions become tiring': 'auto',
        'A CI script where nobody is there to answer questions': 'dontAsk'
      }
    },
    explanation: {
      ru: 'Незнакомый код и неясный объём правок — повод начать с плана; просматриваемые итерации — acceptEdits; долгие задачи — auto с фоновым классификатором; CI — dontAsk, где всё, что требует вопроса, просто запрещено.',
      en: 'Unfamiliar code and an unclear scope of edits call for a plan first; reviewed iterations — acceptEdits; long tasks — auto with its background classifier; CI — dontAsk, where anything that would need a question is simply denied.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите уровни настроек Claude Code по приоритету — от высшего к низшему:',
      en: 'Arrange the Claude Code settings levels by precedence — from highest to lowest:'
    },
    initialItems: [
      { ru: 'Пользовательские (~/.claude/settings.json)', en: 'User (~/.claude/settings.json)' },
      { ru: 'Управляемые настройки организации', en: 'The organization\'s managed settings' },
      { ru: 'Общие проектные (.claude/settings.json)', en: 'Shared project (.claude/settings.json)' },
      { ru: 'Командная строка (--settings)', en: 'Command line (--settings)' },
      { ru: 'Локальные проектные (.claude/settings.local.json)', en: 'Local project (.claude/settings.local.json)' }
    ],
    correctOrder: [
      { ru: 'Управляемые настройки организации', en: 'The organization\'s managed settings' },
      { ru: 'Командная строка (--settings)', en: 'Command line (--settings)' },
      { ru: 'Локальные проектные (.claude/settings.local.json)', en: 'Local project (.claude/settings.local.json)' },
      { ru: 'Общие проектные (.claude/settings.json)', en: 'Shared project (.claude/settings.json)' },
      { ru: 'Пользовательские (~/.claude/settings.json)', en: 'User (~/.claude/settings.json)' }
    ],
    explanation: {
      ru: 'Managed → --settings → local → project → user. Командные проектные настройки сильнее ваших пользовательских, а ваши локальные проектные — сильнее командных; управляемые не переопределяет ничто.',
      en: 'Managed → --settings → local → project → user. The team\'s project settings beat your user settings, your local project settings beat the team\'s, and nothing overrides managed settings.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Что продолжает действовать даже в режиме bypassPermissions?',
      en: 'What still applies even in bypassPermissions mode?'
    },
    options: [
      { ru: 'Правила разрешения (allow)', en: 'Allow rules' },
      { ru: 'Правила запрета (deny)', en: 'Deny rules' },
      { ru: 'Режим планирования', en: 'Plan mode' },
      { ru: 'Ничего: в этом режиме нет никаких ограничений', en: 'Nothing: this mode has no restrictions at all' }
    ],
    answer: {
      ru: 'Правила запрета (deny)',
      en: 'Deny rules'
    },
    explanation: {
      ru: 'Правила запрета действуют в любом режиме, включая bypassPermissions. Поэтому запрет — надёжный способ отгородить то, что агент не должен трогать никогда.',
      en: 'Deny rules apply in every mode, including bypassPermissions. That makes a deny rule a reliable way to fence off what the agent must never touch.'
    }
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Агент показал план и спрашивает, как действовать дальше. Что делают клавиши Ctrl+G?',
      en: 'The agent presented a plan and asks how to proceed. What does Ctrl+G do?'
    },
    options: [
      { ru: 'Одобряют план и запускают правки', en: 'Approve the plan and start the edits' },
      { ru: 'Открывают план в вашем текстовом редакторе, чтобы поправить его вручную', en: 'Open the plan in your text editor so you can edit it by hand' },
      { ru: 'Удаляют план и выходят из режима планирования', en: 'Delete the plan and leave plan mode' },
      { ru: 'Коммитят план в git', en: 'Commit the plan to git' }
    ],
    answer: {
      ru: 'Открывают план в вашем текстовом редакторе, чтобы поправить его вручную',
      en: 'Open the plan in your text editor so you can edit it by hand'
    },
    explanation: {
      ru: 'Ctrl+G даёт поправить план руками до начала работы. Одобрение — отдельный выбор с указанием следующего режима, а выход без одобрения — повторное Shift+Tab.',
      en: 'Ctrl+G lets you fix the plan by hand before work starts. Approval is a separate choice that also picks the next mode, and leaving without approval is another Shift+Tab.'
    }
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Что верно про режим планирования? (выберите все подходящие)',
      en: 'Which statements about plan mode are true? (select all that apply)'
    },
    options: [
      { ru: 'Правки исходников заблокированы, пока вы не одобрите план', en: 'Source edits are blocked until you approve the plan' },
      { ru: 'План хранится на диске и возвращается в контекст после сжатия', en: 'The plan is stored on disk and re-injected into the context after compaction' },
      { ru: 'При одобрении вы выбираете, в каком режиме агент продолжит', en: 'On approval you choose the mode the agent continues in' },
      { ru: 'В режиме планирования агент не может запускать никаких команд', en: 'In plan mode the agent cannot run any commands' },
      { ru: 'План автоматически коммитится в git', en: 'The plan is automatically committed to git' }
    ],
    answer: [
      { ru: 'Правки исходников заблокированы, пока вы не одобрите план', en: 'Source edits are blocked until you approve the plan' },
      { ru: 'План хранится на диске и возвращается в контекст после сжатия', en: 'The plan is stored on disk and re-injected into the context after compaction' },
      { ru: 'При одобрении вы выбираете, в каком режиме агент продолжит', en: 'On approval you choose the mode the agent continues in' }
    ],
    explanation: {
      ru: 'В режиме планирования агент читает файлы и запускает команды для изучения проекта, но не правит исходники. План переживает сжатие контекста, а одобрение переводит сессию в выбранный режим. В git план сам по себе не попадает.',
      en: 'In plan mode the agent reads files and runs commands to study the project but does not edit the source. The plan survives context compaction, and approval switches the session to the chosen mode. The plan does not go into git on its own.'
    }
  },
  {
    id: 6,
    type: 'input',
    question: {
      ru: 'Какой командой со слешем внутри сессии можно скопировать её историю в новую сессию с новым ID, оставив оригинал нетронутым?',
      en: 'Which slash command inside a session copies its history into a new session with a new ID, leaving the original untouched?'
    },
    answer: ['/branch', 'branch'],
    hint: {
      ru: 'Слово из словаря git: так называют ответвление.',
      en: 'A word from git vocabulary: it names a fork-off.'
    },
    explanation: {
      ru: '/branch копирует историю в новую сессию и переключает вас в неё; из командной строки то же делает флаг --fork-session вместе с -c или -r.',
      en: '/branch copies the history into a new session and switches you into it; from the command line, the --fork-session flag together with -c or -r does the same.'
    }
  },
  {
    id: 7,
    type: 'scenario',
    question: {
      ru: 'Подсказки, которые не выключаются',
      en: 'Tips That Will Not Turn Off'
    },
    answer: '',
    explanation: {
      ru: 'Командные проектные настройки сильнее пользовательских, а локальные проектные — сильнее командных. Личная поправка для одного проекта — это .claude/settings.local.json.',
      en: 'The team\'s project settings beat user settings, and local project settings beat the team\'s. A personal override for one project goes in .claude/settings.local.json.'
    },
    scenario: {
      brief: {
        ru: 'Вы записали "spinnerTipsEnabled": false в ~/.claude/settings.json, но в одном рабочем проекте подсказки под индикатором всё равно появляются. В командном .claude/settings.json этого проекта стоит true. Что сделать?',
        en: 'You wrote "spinnerTipsEnabled": false in ~/.claude/settings.json, but in one work project the spinner tips still appear. The project\'s team .claude/settings.json has true. What do you do?'
      },
      constraints: [
        { ru: 'Коллегам подсказки нравятся — у них ничего менять нельзя', en: 'Your colleagues like the tips — nothing may change for them' },
        { ru: 'Организация этот ключ не задаёт', en: 'The organization does not set this key' }
      ],
      choices: [
        {
          text: { ru: 'Записать false в .claude/settings.local.json этого проекта', en: 'Write false in this project\'s .claude/settings.local.json' },
          outcome: { ru: 'Верно: локальный проектный уровень выше командного, файл не попадает в git, и коллег это не затронет.', en: 'Correct: the local project level is above the team\'s, the file stays out of git, and your colleagues are not affected.' },
          score: 10
        },
        {
          text: { ru: 'Поменять true на false в командном .claude/settings.json и закоммитить', en: 'Change true to false in the team .claude/settings.json and commit' },
          outcome: { ru: 'Подсказки пропадут, но у всей команды — а коллеги хотели их оставить.', en: 'The tips disappear, but for the whole team — and your colleagues wanted to keep them.' },
          score: 3
        },
        {
          text: { ru: 'Ещё раз записать false в ~/.claude/settings.json', en: 'Write false in ~/.claude/settings.json once more' },
          outcome: { ru: 'Ничего не изменится: пользовательский уровень ниже проектного, и командное значение снова победит.', en: 'Nothing changes: the user level is below the project level, and the team value wins again.' },
          score: 0
        }
      ],
      passingScore: 9
    }
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Ментор о хуках',
      en: 'Mentor on Hooks'
    },
    answer: '',
    explanation: {
      ru: 'То, что должно происходить всегда, оформляют хуком: его выполняет обвязка, а не модель. Инструкции в CLAUDE.md оставляют для того, что требует суждения.',
      en: 'What must always happen goes into a hook: the harness runs it, not the model. CLAUDE.md instructions are left for things that require judgment.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Я написал в CLAUDE.md: «после каждой правки запускай форматтер». Обычно агент так и делает, но иногда забывает — особенно в длинных сессиях. Как добиться, чтобы форматтер запускался всегда?',
        en: 'I wrote in CLAUDE.md: "run the formatter after every edit." Usually the agent does, but sometimes it forgets — especially in long sessions. How do I make the formatter run every time?'
      },
      userOptions: [
        {
          text: { ru: 'Настроить хук PostToolUse, который запускает форматтер после правок', en: 'Set up a PostToolUse hook that runs the formatter after edits' },
          reaction: { ru: 'Верно. Хук выполняет обвязка, а не модель, поэтому он срабатывает после каждой правки без исключений.', en: 'Correct. The harness runs the hook, not the model, so it fires after every edit without exception.' },
          isCorrect: true,
          deepening: { ru: 'Положите хук в командный .claude/settings.json — тогда он заработает у всех, кто работает с репозиторием.', en: 'Put the hook in the team .claude/settings.json — then it works for everyone who works with the repository.' }
        },
        {
          text: { ru: 'Написать правило в CLAUDE.md заглавными буквами и повторить трижды', en: 'Write the rule in CLAUDE.md in capitals and repeat it three times' },
          reaction: { ru: 'Это всё ещё просьба к модели. Она может снова забыть, особенно после сжатия длинной истории.', en: 'It is still a request to the model. It can forget again, especially after a long history is compacted.' },
          isCorrect: false
        },
        {
          text: { ru: 'Напоминать агенту в каждом сообщении', en: 'Remind the agent in every message' },
          reaction: { ru: 'Работает, пока вы сами не забудете, и тратит контекст. Детерминированное поведение даёт только хук.', en: 'Works until you forget yourself, and it wastes context. Only a hook gives deterministic behaviour.' },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Агент выбрал неудачный подход и успел переписать три файла. Ни этот код, ни этот разговор вам не нужны. Что выбрать в меню /rewind на сообщении с задачей?',
      en: 'The agent took a bad approach and has already rewritten three files. You need neither this code nor this conversation. What do you pick in the /rewind menu on the message with the task?'
    },
    options: [
      { ru: 'Восстановить только разговор', en: 'Restore conversation' },
      { ru: 'Восстановить код и разговор', en: 'Restore code and conversation' },
      { ru: 'Сжать разговор начиная с этой точки', en: 'Summarize from here' },
      { ru: 'Восстановить только код', en: 'Restore code' }
    ],
    answer: {
      ru: 'Восстановить код и разговор',
      en: 'Restore code and conversation'
    },
    explanation: {
      ru: 'Нужно вернуть и файлы, и разговор к моменту до неудачной попытки. После этого исходное сообщение вернётся в поле ввода, и задачу можно сформулировать точнее.',
      en: 'Both the files and the conversation must go back to before the failed attempt. After that, the original message returns to the input field, and the task can be phrased more precisely.'
    }
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Что /rewind, скорее всего, НЕ вернёт? (выберите все подходящие)',
      en: 'What will /rewind most likely NOT bring back? (select all that apply)'
    },
    options: [
      { ru: 'Файл, удалённый командой rm через Bash', en: 'A file deleted with rm through Bash' },
      { ru: 'Запись, которую агент сделал в рабочую базу данных', en: 'A record the agent wrote to a production database' },
      { ru: 'Правки субагента в файлах, которых основной агент не касался', en: 'A subagent\'s edits to files the main agent never touched' },
      { ru: 'Правку файла, сделанную инструментом Edit в этой сессии', en: 'A file edit made with the Edit tool in this session' }
    ],
    answer: [
      { ru: 'Файл, удалённый командой rm через Bash', en: 'A file deleted with rm through Bash' },
      { ru: 'Запись, которую агент сделал в рабочую базу данных', en: 'A record the agent wrote to a production database' },
      { ru: 'Правки субагента в файлах, которых основной агент не касался', en: 'A subagent\'s edits to files the main agent never touched' }
    ],
    explanation: {
      ru: 'Чекпоинты покрывают правки файловых инструментов основной сессии. Команды оболочки, внешние системы и, как правило, правки субагентов остаются вне отката — для них нужны git и права.',
      en: 'Checkpoints cover edits made by the main session\'s file tools. Shell commands, external systems, and usually subagent edits stay outside rollback — they need git and permissions.'
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Как строка состояния Claude Code получает данные о сессии?',
      en: 'How does the Claude Code status line get session data?'
    },
    options: [
      { ru: 'Модель каждый раз генерирует строку и тратит на неё токены', en: 'The model generates the line each time and spends tokens on it' },
      { ru: 'Claude Code запускает ваш скрипт, передаёт ему JSON на стандартный ввод и показывает то, что скрипт напечатает', en: 'Claude Code runs your script, passes it JSON on standard input, and displays whatever the script prints' },
      { ru: 'Скрипт сам читает JSONL-файл сессии раз в минуту', en: 'The script reads the session JSONL file itself once a minute' },
      { ru: 'Данные приходят из консоли claude.ai по сети', en: 'The data comes over the network from the claude.ai console' }
    ],
    answer: {
      ru: 'Claude Code запускает ваш скрипт, передаёт ему JSON на стандартный ввод и показывает то, что скрипт напечатает',
      en: 'Claude Code runs your script, passes it JSON on standard input, and displays whatever the script prints'
    },
    explanation: {
      ru: 'Скрипт работает локально и не тратит токены; он перезапускается по событиям — новое сообщение, завершение /compact, смена режима прав.',
      en: 'The script runs locally and spends no tokens; it re-runs on events — a new message, /compact finishing, a permission mode change.'
    }
  }
];
