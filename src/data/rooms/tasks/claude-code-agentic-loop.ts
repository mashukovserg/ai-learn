import { LocalizedTask } from '../types';

export const claudeCodeAgenticLoopTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'categorize',
    question: {
      ru: 'Разложите действия из сессии, которая добавила термин в глоссарий, по фазам цикла.',
      en: 'Sort the actions from the session that added a glossary term by the phases of the loop.'
    },
    answer: '',
    categorize: {
      items: [
        { ru: 'Прочитать тест комнаты перед правкой', en: 'Read the room test before editing' },
        { ru: 'Найти через grep точное название комнаты для ссылки', en: 'Find the exact room title for a link with grep' },
        { ru: 'Отредактировать src/data/glossary.ts', en: 'Edit src/data/glossary.ts' },
        { ru: 'Обновить тест под четыре снимка', en: 'Update the test for four captures' },
        { ru: 'Запустить npm run check-all', en: 'Run npm run check-all' },
        { ru: 'Открыть комнату в браузере на двух языках', en: 'Open the room in a browser in both languages' }
      ],
      buckets: [
        { ru: 'Сбор контекста', en: 'Gather context' },
        { ru: 'Действие', en: 'Take action' },
        { ru: 'Проверка', en: 'Verify results' }
      ],
      correctMapping: {
        'Read the room test before editing': 'Gather context',
        'Find the exact room title for a link with grep': 'Gather context',
        'Edit src/data/glossary.ts': 'Take action',
        'Update the test for four captures': 'Take action',
        'Run npm run check-all': 'Verify results',
        'Open the room in a browser in both languages': 'Verify results'
      }
    },
    explanation: {
      ru: 'Чтение и поиск — сбор контекста, даже если поиск случился посреди правок; правки файлов — действие; тесты и проверка страницы в браузере — два слоя проверки.',
      en: 'Reading and searching are context gathering, even when the search happens in the middle of editing; file edits are action; the tests and the browser check of the page are two layers of verification.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Что документация Claude Code называет агентной обвязкой (agentic harness)?',
      en: 'What does the Claude Code documentation call the agentic harness?'
    },
    options: [
      { ru: 'Саму языковую модель Claude', en: 'The Claude language model itself' },
      { ru: 'Слой вокруг модели, который даёт ей инструменты и управляет её контекстом', en: 'The layer around the model that gives it tools and manages its context' },
      { ru: 'Набор тестов, который агент запускает на этапе проверки', en: 'The test suite the agent runs during verification' },
      { ru: 'Расширение для IDE, через которое работает агент', en: 'The IDE extension the agent works through' }
    ],
    answer: {
      ru: 'Слой вокруг модели, который даёт ей инструменты и управляет её контекстом',
      en: 'The layer around the model that gives it tools and manages its context'
    },
    explanation: {
      ru: 'Модель рассуждает, инструменты действуют, а Claude Code — это обвязка вокруг модели: она предоставляет инструменты и решает, что попадает в контекст.',
      en: 'The model reasons, the tools act, and Claude Code is the harness around the model: it provides the tools and decides what goes into the context.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Агент решил отредактировать файл инструментом Edit. Как это происходит технически?',
      en: 'The agent decided to edit a file with the Edit tool. How does this happen technically?'
    },
    options: [
      { ru: 'Модель сама записывает изменения на диск', en: 'The model writes the changes to disk itself' },
      { ru: 'Модель формирует запрос — имя инструмента и аргументы, обвязка его выполняет, а результат возвращается в контекст модели', en: 'The model forms a request — a tool name and arguments, the harness executes it, and the result goes back into the model\'s context' },
      { ru: 'Агент показывает правку, а пользователь вручную копирует её в файл', en: 'The agent shows the edit and the user copies it into the file by hand' },
      { ru: 'IDE угадывает правку по тексту ответа модели', en: 'The IDE guesses the edit from the model\'s text reply' }
    ],
    answer: {
      ru: 'Модель формирует запрос — имя инструмента и аргументы, обвязка его выполняет, а результат возвращается в контекст модели',
      en: 'The model forms a request — a tool name and arguments, the harness executes it, and the result goes back into the model\'s context'
    },
    explanation: {
      ru: 'Это вызов функций: модель лишь формирует структурированный запрос, исполняет его обвязка, и результат становится новым наблюдением для следующего шага цикла.',
      en: 'This is function calling: the model only forms a structured request, the harness executes it, and the result becomes a new observation for the next step of the loop.'
    }
  },
  {
    id: 4,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Агента попросили починить упавшие тесты. Расставьте шаги в типичном порядке:',
      en: 'The agent was asked to fix failing tests. Put the steps in their typical order:'
    },
    initialItems: [
      { ru: 'Внести правку', en: 'Make the fix' },
      { ru: 'Найти файлы, связанные с ошибкой', en: 'Find the files related to the error' },
      { ru: 'Снова запустить тесты', en: 'Run the tests again' },
      { ru: 'Запустить тесты и увидеть, что падает', en: 'Run the tests and see what fails' },
      { ru: 'Прочитать код и понять причину', en: 'Read the code and understand the cause' }
    ],
    correctOrder: [
      { ru: 'Запустить тесты и увидеть, что падает', en: 'Run the tests and see what fails' },
      { ru: 'Найти файлы, связанные с ошибкой', en: 'Find the files related to the error' },
      { ru: 'Прочитать код и понять причину', en: 'Read the code and understand the cause' },
      { ru: 'Внести правку', en: 'Make the fix' },
      { ru: 'Снова запустить тесты', en: 'Run the tests again' }
    ],
    explanation: {
      ru: 'Сначала воспроизвести ошибку и найти причину (сбор контекста), затем поправить (действие), затем снова прогнать тесты (проверка). Если тесты упадут, цикл вернётся к поиску.',
      en: 'First reproduce the error and find the cause (gathering context), then fix it (action), then run the tests again (verification). If they fail, the loop goes back to searching.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Почему в журнале сессии на Linux поиск часто выглядит как команда Bash (grep, find), а не как вызов отдельного инструмента?',
      en: 'Why does a search in a Linux session log often look like a Bash command (grep, find) rather than a call to a dedicated tool?'
    },
    options: [
      { ru: 'Отдельных инструментов поиска в Claude Code не существует', en: 'Claude Code has no dedicated search tools at all' },
      { ru: 'На macOS, Linux и WSL инструменты Glob и Grep по умолчанию не входят в набор, и агент ищет через Bash', en: 'On macOS, Linux, and WSL the Glob and Grep tools are not in the default set, and the agent searches through Bash' },
      { ru: 'Так агент экономит токены: Bash не попадает в контекст', en: 'This saves tokens: Bash output does not enter the context' },
      { ru: 'Поиск через Bash никогда не требует разрешений', en: 'A Bash search never needs permissions' }
    ],
    answer: {
      ru: 'На macOS, Linux и WSL инструменты Glob и Grep по умолчанию не входят в набор, и агент ищет через Bash',
      en: 'On macOS, Linux, and WSL the Glob and Grep tools are not in the default set, and the agent searches through Bash'
    },
    explanation: {
      ru: 'На этих системах поиск идёт командами find и grep, за которыми стоят встроенные bfs и ugrep. Поэтому он выглядит как команда оболочки и проходит через правила для Bash.',
      en: 'On these systems search runs through find and grep, backed by built-in bfs and ugrep. That is why it looks like a shell command and goes through the rules for Bash.'
    }
  },
  {
    id: 6,
    type: 'multiple-select',
    question: {
      ru: 'Что загружается в контекстное окно ещё до вашего первого сообщения? (выберите все подходящие)',
      en: 'What is loaded into the context window before your first message? (select all that apply)'
    },
    options: [
      { ru: 'Файлы CLAUDE.md', en: 'CLAUDE.md files' },
      { ru: 'Начало файла автоматической памяти MEMORY.md', en: 'The start of the auto memory file MEMORY.md' },
      { ru: 'Имена инструментов MCP-серверов', en: 'The tool names of MCP servers' },
      { ru: 'Однострочные описания скиллов', en: 'One-line skill descriptions' },
      { ru: 'Полные тексты всех скиллов', en: 'The full text of every skill' },
      { ru: 'Содержимое всех файлов репозитория', en: 'The contents of every file in the repository' }
    ],
    answer: [
      { ru: 'Файлы CLAUDE.md', en: 'CLAUDE.md files' },
      { ru: 'Начало файла автоматической памяти MEMORY.md', en: 'The start of the auto memory file MEMORY.md' },
      { ru: 'Имена инструментов MCP-серверов', en: 'The tool names of MCP servers' },
      { ru: 'Однострочные описания скиллов', en: 'One-line skill descriptions' }
    ],
    explanation: {
      ru: 'При старте загружаются CLAUDE.md, начало автопамяти, сведения о среде и git, имена MCP-инструментов и описания скиллов. Полные тексты скиллов и схемы MCP подгружаются по требованию, а файлы проекта агент читает сам по ходу работы.',
      en: 'At startup the agent gets CLAUDE.md, the start of auto memory, environment and git info, MCP tool names, and skill descriptions. Full skill bodies and MCP schemas load on demand, and project files are read by the agent as it works.'
    }
  },
  {
    id: 7,
    type: 'input',
    question: {
      ru: 'Как называется автоматическое сжатие истории диалога при приближении к пределу контекстного окна? (одно слово)',
      en: 'What is the automatic compression of the conversation history near the context-window limit called? (one word)'
    },
    answer: ['компакция', 'автокомпакция', 'compaction', 'auto-compaction', 'autocompaction', 'compact'],
    hint: {
      ru: 'Команда, которая делает то же самое вручную, называется /compact.',
      en: 'The command that does the same thing by hand is called /compact.'
    },
    explanation: {
      ru: 'Компакция: сначала убираются старые выводы инструментов, затем история заменяется структурированным резюме. Корневой CLAUDE.md, автопамять и план после этого перечитываются с диска.',
      en: 'Compaction: old tool outputs are cleared first, then the history is replaced with a structured summary. The root CLAUDE.md, auto memory, and the plan are re-read from disk afterwards.'
    }
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Забытое правило',
      en: 'The Forgotten Rule'
    },
    answer: '',
    explanation: {
      ru: 'Ранние инструкции из сообщений могут потеряться при сжатии контекста, а CLAUDE.md перечитывается с диска. Постоянное правило должно жить в файле.',
      en: 'Early instructions from messages can be lost in compaction, while CLAUDE.md is re-read from disk. A persistent rule belongs in the file.'
    },
    scenario: {
      brief: {
        ru: 'В начале долгой сессии вы написали агенту: «не трогай файлы миграций». Через несколько часов работы, после автоматического сжатия контекста, агент правит миграцию. Как предотвратить такое в будущем?',
        en: 'At the start of a long session you told the agent, "don\'t touch the migration files." Several hours later, after an automatic context compaction, the agent edits a migration. How do you prevent this in the future?'
      },
      constraints: [
        { ru: 'Правило действует для всего проекта, а не для одной задачи', en: 'The rule applies to the whole project, not to one task' },
        { ru: 'Сессии в проекте обычно длинные', en: 'Sessions in this project are usually long' }
      ],
      choices: [
        {
          text: { ru: 'Записать правило в CLAUDE.md проекта', en: 'Write the rule into the project CLAUDE.md' },
          outcome: { ru: 'Верно: CLAUDE.md перечитывается с диска после сжатия, поэтому правило не потеряется ни в этой сессии, ни в следующих.', en: 'Correct: CLAUDE.md is re-read from disk after compaction, so the rule is not lost in this session or in the next ones.' },
          score: 10
        },
        {
          text: { ru: 'Повторять правило в каждом новом сообщении', en: 'Repeat the rule in every new message' },
          outcome: { ru: 'Сработает, пока вы не забудете, — и тратит контекст. Правило проекта должно жить в файле, а не в памяти человека.', en: 'Works until you forget — and it wastes context. A project rule should live in a file, not in a person\'s memory.' },
          score: 4
        },
        {
          text: { ru: 'Отключить сжатие и работать короткими сессиями без правил', en: 'Turn off compaction and work in short sessions without rules' },
          outcome: { ru: 'Сжатие не главная проблема: правило, которое существует только в разговоре, исчезнет и в новой сессии.', en: 'Compaction is not the main problem: a rule that exists only in the conversation is gone in a new session too.' },
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
      ru: 'Ментор о вмешательстве',
      en: 'Mentor on Stepping In'
    },
    answer: '',
    explanation: {
      ru: 'Esc останавливает агента сразу и сохраняет сделанное; уточнение с Enter встаёт в очередь и учитывается после текущих вызовов инструментов.',
      en: 'Esc stops the agent at once and keeps the work done; a correction sent with Enter is queued and taken into account after the current tool calls.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Агент начал переписывать модуль оплаты, хотя я просил только поправить текст ошибки. Он уже на середине. Что делать?',
        en: 'The agent started rewriting the payments module, though I only asked it to fix an error message. It is halfway through. What should I do?'
      },
      userOptions: [
        {
          text: { ru: 'Нажать Esc и объяснить, что нужна только правка текста', en: 'Press Esc and explain that only the message text needs changing' },
          reaction: { ru: 'Верно. Esc отменяет текущий вызов инструмента, сохраняет сделанное, и агент ждёт ваших указаний.', en: 'Correct. Esc cancels the running tool call, keeps the work done, and the agent waits for your instructions.' },
          isCorrect: true,
          deepening: { ru: 'Если лишние правки уже сделаны, их можно откатить через /rewind — для правок, сделанных инструментами редактирования.', en: 'If unwanted edits are already made, /rewind can roll them back — for edits made by the file-editing tools.' }
        },
        {
          text: { ru: 'Закрыть терминал и начать новую сессию', en: 'Close the terminal and start a new session' },
          reaction: { ru: 'Так вы потеряете контекст и не остановите проблему точечно. Остановить агента можно не выходя из сессии.', en: 'That loses the context and does not stop the problem precisely. You can stop the agent without leaving the session.' },
          isCorrect: false
        },
        {
          text: { ru: 'Дождаться конца хода, а потом попросить всё вернуть', en: 'Wait until the turn ends, then ask to undo everything' },
          reaction: { ru: 'Пока вы ждёте, агент продолжает лишнюю работу. Вмешаться можно в любой момент — для этого и есть Esc.', en: 'While you wait, the agent keeps doing unwanted work. You can step in at any moment — that is what Esc is for.' },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Агент удалил файл командой rm через Bash. Вернёт ли его /rewind?',
      en: 'The agent deleted a file with rm through Bash. Will /rewind bring it back?'
    },
    options: [
      { ru: 'Да, /rewind откатывает любые изменения в сессии', en: 'Yes, /rewind reverts any change made in the session' },
      { ru: 'Нет: чекпоинты отслеживают только правки, сделанные инструментами редактирования файлов', en: 'No: checkpoints track only edits made by the file-editing tools' },
      { ru: 'Да, но только если файл был закоммичен', en: 'Yes, but only if the file was committed' },
      { ru: 'Нет, /rewind откатывает только разговор, а не файлы', en: 'No, /rewind only rolls back the conversation, not files' }
    ],
    answer: {
      ru: 'Нет: чекпоинты отслеживают только правки, сделанные инструментами редактирования файлов',
      en: 'No: checkpoints track only edits made by the file-editing tools'
    },
    explanation: {
      ru: 'Изменения от команд оболочки (rm, mv, cp) в чекпоинты не попадают. Удалённый файл можно восстановить из git, если он был закоммичен, — поэтому git остаётся главной страховкой.',
      en: 'Changes made by shell commands (rm, mv, cp) are not checkpointed. A deleted file can be restored from git if it was committed — which is why git remains the main safety net.'
    }
  },
  {
    id: 11,
    type: 'multiple-select',
    question: {
      ru: 'Что верно про разобранную в главе 3 реальную сессию? (выберите все подходящие)',
      en: 'Which statements about the real session from chapter 3 are true? (select all that apply)'
    },
    options: [
      { ru: 'До первой правки кода агент сделал больше десяти вызовов инструментов', en: 'The agent made more than ten tool calls before the first code edit' },
      { ru: 'Проверка шла в два слоя: тесты и просмотр страницы в браузере', en: 'Verification came in two layers: tests and viewing the page in a browser' },
      { ru: 'Посреди правок агент вернулся к сбору контекста', en: 'In the middle of editing the agent went back to gathering context' },
      { ru: 'Правки заняли большую часть времени сессии', en: 'The edits took most of the session time' },
      { ru: 'Агент сначала правил файлы, а потом читал тест комнаты', en: 'The agent edited files first and read the room test afterwards' }
    ],
    answer: [
      { ru: 'До первой правки кода агент сделал больше десяти вызовов инструментов', en: 'The agent made more than ten tool calls before the first code edit' },
      { ru: 'Проверка шла в два слоя: тесты и просмотр страницы в браузере', en: 'Verification came in two layers: tests and viewing the page in a browser' },
      { ru: 'Посреди правок агент вернулся к сбору контекста', en: 'In the middle of editing the agent went back to gathering context' }
    ],
    explanation: {
      ru: 'Одиннадцать вызовов до первой правки, поиск названия комнаты посреди правок, два слоя проверки. Правки заняли меньше двух минут из шести, а тест агент прочитал заранее — поэтому и обновил его до запуска.',
      en: 'Eleven calls before the first edit, a room-title search in the middle of editing, two layers of verification. The edits took under two of the six minutes, and the agent read the test beforehand — which is why it updated it before running anything.'
    }
  }
];
