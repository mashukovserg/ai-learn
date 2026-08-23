import { LocalizedTask } from '../types';

export const opencodeTerminalAgentTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Чем OpenCode устроен иначе, чем закрытые коммерческие CLI-агенты?',
      en: 'How is OpenCode built differently from closed commercial CLI agents?'
    },
    options: [
      { ru: 'Он работает только в браузере, без терминала', en: 'It runs only in the browser, without a terminal' },
      { ru: 'Его исходный код открыт (MIT), а модель подключается от любого поставщика по API-ключу', en: 'Its source code is open (MIT), and the model is plugged in from any provider via an API key' },
      { ru: 'Он не использует LLM вообще — только статический анализ', en: 'It uses no LLM at all — only static analysis' },
      { ru: 'Он обучает собственную фундаментальную модель', en: 'It trains its own foundation model' }
    ],
    answer: {
      ru: 'Его исходный код открыт (MIT), а модель подключается от любого поставщика по API-ключу',
      en: 'Its source code is open (MIT), and the model is plugged in from any provider via an API key'
    },
    explanation: {
      ru: 'OpenCode — открытый проект под лицензией MIT: код агента можно читать и менять, а модель он не навязывает — подключается любой поставщик по ключу.',
      en: 'OpenCode is an MIT-licensed open project: the agent code can be read and modified, and it does not impose a model — any provider connects via a key.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Чем встроенный агент plan отличается от агента build?',
      en: 'How does the built-in plan agent differ from the build agent?'
    },
    options: [
      { ru: 'Plan работает на более слабой модели', en: 'Plan runs on a weaker model' },
      { ru: 'Plan ограничен в правах: правки файлов и команды оболочки требуют подтверждения', en: 'Plan is permission-restricted: file edits and shell commands require confirmation' },
      { ru: 'Plan умеет только рисовать диаграммы', en: 'Plan can only draw diagrams' },
      { ru: 'Plan — платный, build — бесплатный', en: 'Plan is paid, build is free' }
    ],
    answer: {
      ru: 'Plan ограничен в правах: правки файлов и команды оболочки требуют подтверждения',
      en: 'Plan is permission-restricted: file edits and shell commands require confirmation'
    },
    explanation: {
      ru: 'Разница между build и plan — в правах, а не в модели: у plan правки файлов и bash-команды по умолчанию стоят в режиме «спросить разрешение».',
      en: 'The build/plan difference is permissions, not the model: for plan, file edits and bash commands default to "ask permission" mode.'
    }
  },
  {
    id: 3,
    type: 'categorize',
    question: {
      ru: 'Разложите команды OpenCode по их назначению.',
      en: 'Sort the OpenCode commands by what they are for.'
    },
    answer: '',
    categorize: {
      items: [
        { ru: '/init', en: '/init' },
        { ru: '/undo', en: '/undo' },
        { ru: '/timeline', en: '/timeline' },
        { ru: '/review', en: '/review' },
        { ru: '/agents', en: '/agents' }
      ],
      buckets: [
        { ru: 'Правила проекта', en: 'Project rules' },
        { ru: 'Машина времени сессии', en: 'Session time machine' },
        { ru: 'Проверка изменений', en: 'Reviewing changes' },
        { ru: 'Смена агента', en: 'Switching agents' }
      ],
      correctMapping: {
        '/init': 'Project rules',
        '/undo': 'Session time machine',
        '/timeline': 'Session time machine',
        '/review': 'Reviewing changes',
        '/agents': 'Switching agents'
      }
    },
    explanation: {
      ru: '/init создаёт файл правил проекта; /undo и /timeline двигают сессию назад и по сообщениям; /review проверяет изменения; /agents переключает активного агента.',
      en: '/init creates the project rules file; /undo and /timeline move the session back and across messages; /review checks changes; /agents switches the active agent.'
    }
  },
  {
    id: 4,
    type: 'input',
    question: {
      ru: 'Как называется файл с правилами проекта, который создаёт команда /init? (введите имя файла)',
      en: 'What is the name of the project rules file that the /init command creates? (enter the file name)'
    },
    answer: ['agents.md', 'agents md', 'agents'],
    hint: {
      ru: 'Открытая конвенция: то же место в проекте, что у CLAUDE.md, но название нейтральное к инструменту.',
      en: 'An open convention: the same role in a project as CLAUDE.md, but the name is tool-neutral.'
    },
    explanation: {
      ru: '/init осматривает репозиторий и создаёт AGENTS.md — открытый, независимый от конкретного инструмента формат файла правил, который читают многие агенты.',
      en: '/init inspects the repository and creates AGENTS.md — an open, tool-independent rules file format that many agents read.'
    }
  },
  {
    id: 5,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Восстановите порядок аккуратного цикла работы с OpenCode в новом репозитории:',
      en: 'Restore the order of a careful OpenCode working cycle in a fresh repository:'
    },
    initialItems: [
      { ru: 'Переключиться в build и внести изменения', en: 'Switch to build and make the changes' },
      { ru: '/review — проверить, что именно изменилось', en: '/review — check what actually changed' },
      { ru: '/init — создать AGENTS.md с правилами проекта', en: '/init — create AGENTS.md with the project rules' },
      { ru: 'Закоммитить результат (или откатить через /undo)', en: 'Commit the result (or roll back via /undo)' },
      { ru: 'Обсудить подход в агенте plan', en: 'Discuss the approach in the plan agent' }
    ],
    correctOrder: [
      { ru: '/init — создать AGENTS.md с правилами проекта', en: '/init — create AGENTS.md with the project rules' },
      { ru: 'Обсудить подход в агенте plan', en: 'Discuss the approach in the plan agent' },
      { ru: 'Переключиться в build и внести изменения', en: 'Switch to build and make the changes' },
      { ru: '/review — проверить, что именно изменилось', en: '/review — check what actually changed' },
      { ru: 'Закоммитить результат (или откатить через /undo)', en: 'Commit the result (or roll back via /undo)' }
    ],
    explanation: {
      ru: 'Сначала правила (/init), потом обсуждение без правок (plan), потом изменения (build), потом проверка (/review) — и только затем фиксация в git или откат.',
      en: 'Rules first (/init), then discussion without edits (plan), then changes (build), then verification (/review) — and only then a git commit or a rollback.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'В строке состояния OpenCode видно «58.3K (29%)». Что это означает?',
      en: 'The OpenCode status bar shows "58.3K (29%)". What does it mean?'
    },
    options: [
      { ru: 'Стоимость сессии в рублях и скидка', en: 'Session cost and a discount' },
      { ru: 'Занято 58,3 тыс. токенов — 29% контекстного окна модели', en: '58.3K tokens used — 29% of the model context window' },
      { ru: 'Количество строк кода в проекте', en: 'Lines of code in the project' },
      { ru: 'Число загруженных файлов и прогресс индексации', en: 'Files loaded and indexing progress' }
    ],
    answer: {
      ru: 'Занято 58,3 тыс. токенов — 29% контекстного окна модели',
      en: '58.3K tokens used — 29% of the model context window'
    },
    explanation: {
      ru: 'Счётчик в правом нижнем углу — это заполненность контекстного окна: сколько токенов заняла история сессии и какая это доля от лимита модели.',
      en: 'The counter in the bottom-right corner is context-window usage: how many tokens the session history occupies and what share of the model limit that is.'
    }
  },
  {
    id: 7,
    type: 'mentor',
    question: {
      ru: 'Ментор об агентах',
      en: 'Mentor on Agents'
    },
    answer: '',
    explanation: {
      ru: 'Агенты в OpenCode — это профили прав и промптов поверх той же сессии; переключение — Tab или /agents.',
      en: 'OpenCode agents are permission-and-prompt profiles over the same session; switch with Tab or /agents.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Я хочу, чтобы агент сначала обсудил со мной план и ничего не трогал в файлах, а потом уже правил код. Мне придётся ставить второй инструмент?',
        en: 'I want the agent to first discuss a plan with me without touching any files, and only then edit the code. Do I need to install a second tool?'
      },
      userOptions: [
        {
          text: { ru: 'Да, для планирования нужен отдельный CLI', en: 'Yes, planning needs a separate CLI' },
          reaction: { ru: 'Не нужен: в OpenCode это решается переключением агента внутри той же сессии.', en: 'No need: in OpenCode this is solved by switching agents inside the same session.' },
          isCorrect: false
        },
        {
          text: { ru: 'Нет: переключитесь в агента plan (Tab или /agents), обсудите подход, затем вернитесь в build', en: 'No: switch to the plan agent (Tab or /agents), discuss the approach, then return to build' },
          reaction: { ru: 'Верно. Plan ограничен в правах — правки требуют подтверждения, поэтому в нём безопасно думать вслух.', en: 'Correct. Plan is permission-restricted — edits require confirmation, so it is safe to think out loud in it.' },
          isCorrect: true,
          deepening: { ru: 'Модель при этом может остаться той же: агент — это набор прав и промпт, а не отдельная модель.', en: 'The model can stay the same: an agent is a permission set and a prompt, not a separate model.' }
        },
        {
          text: { ru: 'Просто попросить «не трогай файлы» в промпте — этого достаточно', en: 'Just ask "don\'t touch files" in the prompt — that is enough' },
          reaction: { ru: 'Просьба в промпте — пожелание, а не гарантия. Права агента plan ограничены на уровне системы разрешений.', en: 'A request in the prompt is a wish, not a guarantee. The plan agent\'s rights are limited at the permission-system level.' },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Незакоммиченная работа',
      en: 'Uncommitted Work'
    },
    answer: '',
    explanation: {
      ru: 'Агент честно сообщил об ограничении среды; правильная реакция — восстановить git и зафиксировать работу, а не продолжать накапливать риск.',
      en: 'The agent honestly reported an environment limitation; the right reaction is to restore git and commit the work, not keep piling up risk.'
    },
    scenario: {
      brief: {
        ru: 'OpenCode внёс правки в два файла документации и сообщил: «git недоступен на этой машине (macOS предлагает установить Command Line Tools через xcode-select), поэтому изменение пока не закоммичено». Что делать?',
        en: 'OpenCode edited two documentation files and reported: "git is currently unavailable on this machine (macOS is prompting to install Command Line Tools via xcode-select), so this change is uncommitted for now." What do you do?'
      },
      constraints: [
        { ru: 'Правки нужные — терять их нельзя', en: 'The edits are wanted — losing them is not an option' },
        { ru: 'Впереди ещё несколько задач в этой же сессии', en: 'Several more tasks are coming in this same session' }
      ],
      choices: [
        {
          text: { ru: 'Продолжить давать агенту новые задачи — коммит «как-нибудь потом»', en: 'Keep giving the agent new tasks — commit "sometime later"' },
          outcome: { ru: 'Незакоммиченная работа копится и живёт до первой случайности: сбой, чистка рабочей директории, синхронизация веток.', en: 'Uncommitted work accumulates and survives only until the first accident: a crash, a working-tree cleanup, a branch sync.' },
          score: 2
        },
        {
          text: { ru: 'Установить Command Line Tools (xcode-select --install), затем закоммитить накопленные правки', en: 'Install the Command Line Tools (xcode-select --install), then commit the accumulated edits' },
          outcome: { ru: 'Верно: сначала восстановить инструмент фиксации, потом зафиксировать работу — и только после этого продолжать.', en: 'Correct: first restore the commit tool, then commit the work — and only then continue.' },
          score: 10
        },
        {
          text: { ru: 'Скопировать изменённые файлы в отдельную папку «на всякий случай» и работать дальше без git', en: 'Copy the changed files to a separate "just in case" folder and keep working without git' },
          outcome: { ru: 'Копия спасает содержимое, но не историю: без git нет ни диффов, ни отката, ни возможности разобраться, что и когда менялось.', en: 'A copy saves the content but not the history: without git there are no diffs, no rollback, no way to trace what changed and when.' },
          score: 4
        }
      ],
      passingScore: 9
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'В подписи агента видно «Plan · Big Pickle · OpenCode Zen». Что такое Big Pickle?',
      en: 'The agent label reads "Plan · Big Pickle · OpenCode Zen". What is Big Pickle?'
    },
    options: [
      { ru: 'Название терминала, в котором запущен OpenCode', en: 'The name of the terminal OpenCode runs in' },
      { ru: 'Модель под кодовым именем, доступная через шлюз OpenCode Zen', en: 'A model under a codename, available through the OpenCode Zen gateway' },
      { ru: 'Встроенный агент для работы с базами данных', en: 'A built-in agent for database work' },
      { ru: 'Плагин для проверки орфографии', en: 'A spell-checking plugin' }
    ],
    answer: {
      ru: 'Модель под кодовым именем, доступная через шлюз OpenCode Zen',
      en: 'A model under a codename, available through the OpenCode Zen gateway'
    },
    explanation: {
      ru: 'Подпись читается так: агент (Plan) · модель (Big Pickle) · источник модели (шлюз OpenCode Zen). Big Pickle — модель, выпущенная под кодовым именем для слепой оценки.',
      en: 'The label reads: agent (Plan) · model (Big Pickle) · model source (the OpenCode Zen gateway). Big Pickle is a model released under a codename for blind evaluation.'
    }
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Что из перечисленного верно про OpenCode? (выберите все подходящие)',
      en: 'Which of the following is true about OpenCode? (select all that apply)'
    },
    options: [
      { ru: 'Исходный код открыт под лицензией MIT', en: 'The source code is open under the MIT license' },
      { ru: 'Модель подключается от любого поставщика по API-ключу', en: 'A model from any provider connects via an API key' },
      { ru: '/undo откатывает не только сообщение, но и правки файлов', en: '/undo rolls back not just the message but also file edits' },
      { ru: 'OpenCode обучает собственную фундаментальную модель', en: 'OpenCode trains its own foundation model' },
      { ru: 'Работать можно только с одной фиксированной моделью', en: 'Only one fixed model can be used' }
    ],
    answer: [
      { ru: 'Исходный код открыт под лицензией MIT', en: 'The source code is open under the MIT license' },
      { ru: 'Модель подключается от любого поставщика по API-ключу', en: 'A model from any provider connects via an API key' },
      { ru: '/undo откатывает не только сообщение, но и правки файлов', en: '/undo rolls back not just the message but also file edits' }
    ],
    explanation: {
      ru: 'OpenCode — открытый агент (MIT) с подключаемыми моделями и git-чекпоинтами для отката. Своей фундаментальной модели у проекта нет, и одной моделью он не ограничен — команда лишь курирует список проверенных через OpenCode Zen.',
      en: 'OpenCode is an open agent (MIT) with pluggable models and git checkpoints for rollback. The project has no foundation model of its own and is not limited to a single model — the team merely curates a verified list via OpenCode Zen.'
    }
  }
];
