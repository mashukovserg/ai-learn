import { LocalizedTask } from '../types';

export const gitSafetyNetTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему при работе с агентом собственная память перестаёт работать как система контроля изменений?',
      en: 'Why does your own memory stop working as a change-control system when an agent writes the code?',
    },
    options: [
      {
        ru: 'Агент меняет за минуту десяток файлов, половину из которых человек видит впервые.',
        en: 'The agent changes a dozen files in a minute, half of which the human sees for the first time.',
      },
      {
        ru: 'Агент шифрует изменения, и прочитать их без специального инструмента нельзя.',
        en: 'The agent encrypts its changes, so they cannot be read without a special tool.',
      },
      {
        ru: 'Git запрещает смотреть изменения, сделанные не человеком.',
        en: 'Git forbids inspecting changes that were not made by a human.',
      },
    ],
    answer: {
      ru: 'Агент меняет за минуту десяток файлов, половину из которых человек видит впервые.',
      en: 'The agent changes a dozen files in a minute, half of which the human sees for the first time.',
    },
    explanation: {
      ru: 'Верно. Объём и скорость изменений превышают то, что можно удержать в голове, поэтому нужен внешний механизм сравнения и возврата.',
      en: 'Correct. The volume and speed of changes exceed what memory can hold, so you need an external mechanism for comparison and return.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите название построчного сравнения двух состояний кода, по которому проверяют, что изменение сделало на самом деле.',
      en: 'Enter the name of the line-by-line comparison of two code states used to check what a change actually did.',
    },
    answer: ['diff', 'дифф', 'диф'],
    hint: {
      ru: 'Четыре латинские буквы; строки со знаком «минус» удалены, со знаком «плюс» добавлены.',
      en: 'Four letters; “minus” lines were removed, “plus” lines were added.',
    },
    explanation: {
      ru: 'Да. Diff — механическое сравнение состояний, поэтому ему верят больше, чем отчёту агента о собственной работе.',
      en: 'Yes. A diff is a mechanical comparison of states, which is why it is trusted more than the agent’s own summary.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Какие файлы в карте изменения (списке затронутых файлов) требуют отдельного внимания всегда?',
      en: 'Which files in the change map (the list of touched files) always deserve extra attention?',
    },
    options: [
      {
        ru: 'Конфигурация автоматических проверок.',
        en: 'The configuration of automated checks.',
      },
      {
        ru: 'Файлы тестов.',
        en: 'Test files.',
      },
      {
        ru: 'Файлы зависимостей проекта.',
        en: 'Project dependency files.',
      },
      {
        ru: 'Файл README с описанием проекта.',
        en: 'The README file describing the project.',
      },
    ],
    answer: [
      {
        ru: 'Конфигурация автоматических проверок.',
        en: 'The configuration of automated checks.',
      },
      {
        ru: 'Файлы тестов.',
        en: 'Test files.',
      },
      {
        ru: 'Файлы зависимостей проекта.',
        en: 'Project dependency files.',
      },
    ],
    explanation: {
      ru: 'Точно. Правки в проверках, тестах и зависимостях меняют не поведение продукта, а правила, по которым это поведение оценивают.',
      en: 'Exactly. Edits to checks, tests, and dependencies do not change product behavior — they change the rules by which behavior is judged.',
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Почему удалённые строки в diff читают внимательнее добавленных?',
      en: 'Why are removed lines in a diff read more carefully than added ones?',
    },
    options: [
      {
        ru: 'Удалённый код исчезает молча — вместе с проверками и условиями, добавленными когда-то после инцидента.',
        en: 'Removed code disappears quietly — along with checks and conditions someone added after an incident.',
      },
      {
        ru: 'Git показывает удалённые строки не полностью, поэтому их надо восстанавливать вручную.',
        en: 'Git shows removed lines only partially, so they must be reconstructed by hand.',
      },
      {
        ru: 'Добавленный код всегда безопасен и не требует проверки.',
        en: 'Added code is always safe and needs no review.',
      },
    ],
    answer: {
      ru: 'Удалённый код исчезает молча — вместе с проверками и условиями, добавленными когда-то после инцидента.',
      en: 'Removed code disappears quietly — along with checks and conditions someone added after an incident.',
    },
    explanation: {
      ru: 'Верно. Добавленное разберёт ревью и поймают тесты, а удалённое не оставляет следа — агент просто не знает истории, которой нет в коде.',
      en: 'Correct. Added code gets reviewed and tested; removed code leaves no trace — the agent simply does not know history that is not written in the code.',
    },
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Расположите шаги рабочего цикла с агентом в правильном порядке.',
      en: 'Arrange the steps of the working cycle with an agent in the correct order.',
    },
    initialItems: [
      { ru: 'Прочитать diff и понять, что агент сделал на самом деле', en: 'Read the diff and understand what the agent actually did' },
      { ru: 'Убедиться, что текущее состояние закоммичено — есть точка возврата', en: 'Make sure the current state is committed — the return point exists' },
      { ru: 'Разложить результат на коммиты по смыслу', en: 'Split the result into commits by meaning' },
      { ru: 'Отдать задачу агенту', en: 'Hand the task to the agent' },
    ],
    correctOrder: [
      { ru: 'Убедиться, что текущее состояние закоммичено — есть точка возврата', en: 'Make sure the current state is committed — the return point exists' },
      { ru: 'Отдать задачу агенту', en: 'Hand the task to the agent' },
      { ru: 'Прочитать diff и понять, что агент сделал на самом деле', en: 'Read the diff and understand what the agent actually did' },
      { ru: 'Разложить результат на коммиты по смыслу', en: 'Split the result into commits by meaning' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Точка возврата создаётся до задачи, а не после: чинить поверх поломки дороже, чем вернуться к сохранённому состоянию.',
      en: 'Correct. The return point is created before the task, not after: patching on top of breakage costs more than returning to a saved state.',
    },
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Распределите ситуации по подходящему инструменту отмены.',
      en: 'Map each situation to the right undo tool.',
    },
    answer: '',
    explanation: {
      ru: 'Отлично. Инструмент выбирают по вопросу «где сейчас находится то, что нужно убрать»: в рабочих файлах, в локальном коммите или уже в общей ветке.',
      en: 'Great. The tool is chosen by asking where the thing you want to remove currently lives: in working files, in a local commit, or already on a shared branch.',
    },
    categorize: {
      buckets: [
        { ru: 'Правки только в файлах', en: 'Edits only in files' },
        { ru: 'Коммит только локально', en: 'Commit is local only' },
        { ru: 'Коммит уже в общей ветке', en: 'Commit is on a shared branch' },
      ],
      items: [
        {
          ru: 'Агент нагородил в файлах, ничего не сохранено, результат не нужен — вернуть файлы к последнему коммиту.',
          en: 'The agent made a mess in files, nothing is saved, the result is unwanted — return files to the last commit.',
        },
        {
          ru: 'Незавершённую работу надо отложить на полку, чтобы переключиться на срочную задачу.',
          en: 'Unfinished work has to be parked on a shelf to switch to an urgent task.',
        },
        {
          ru: 'Нужно сдвинуть свою ветку назад на два коммита, которые никто ещё не забирал.',
          en: 'Your branch needs to move back two commits that nobody has pulled yet.',
        },
        {
          ru: 'Изменение уже забрали другие, и его надо отменить, не переписывая общую историю.',
          en: 'Others have already pulled the change, and it must be undone without rewriting shared history.',
        },
      ],
      correctMapping: {
        'The agent made a mess in files, nothing is saved, the result is unwanted — return files to the last commit.': 'Edits only in files',
        'Unfinished work has to be parked on a shelf to switch to an urgent task.': 'Edits only in files',
        'Your branch needs to move back two commits that nobody has pulled yet.': 'Commit is local only',
        'Others have already pulled the change, and it must be undone without rewriting shared history.': 'Commit is on a shared branch',
      },
    },
  },
  {
    id: 7,
    type: 'input',
    question: {
      ru: 'Введите название локального журнала, по которому находят коммит, потерянный после жёсткого сброса.',
      en: 'Enter the name of the local journal used to find a commit lost after a hard reset.',
    },
    answer: ['reflog', 'git reflog', 'рефлог'],
    hint: {
      ru: 'Одно слово; записи живут около девяноста дней.',
      en: 'One word; entries live for about ninety days.',
    },
    explanation: {
      ru: 'Да. Reflog помнит, куда указывала ветка в последние дни, поэтому «потерянный» коммит почти всегда возвращается по хешу.',
      en: 'Yes. The reflog remembers where the branch pointed over recent days, so a “lost” commit can almost always be restored by its hash.',
    },
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Как поступить, если агент принёс переименование модуля и новую функцию одной пачкой?',
      en: 'What do you do when the agent delivers a module rename and a new function as one batch?',
    },
    answer: '',
    explanation: {
      ru: 'Правильный путь: разложить пачку на отдельные коммиты по смыслу, чтобы неудачную часть можно было отменить, не теряя удачную.',
      en: 'The right path: split the batch into separate commits by meaning, so the failed part can be undone without losing the good part.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Агент за один заход переименовал модуль по всему проекту и добавил новую функцию. Всё это лежит в рабочих файлах. Что делаем?',
        en: 'In one pass the agent renamed a module across the project and added a new function. All of it sits in the working files. What do we do?',
      },
      userOptions: [
        {
          text: {
            ru: 'Сохранить всё одним коммитом — так быстрее, а разбираться будем, если что-то сломается.',
            en: 'Save everything in one commit — it is faster, and we will sort it out if something breaks.',
          },
          reaction: {
            ru: 'Тогда отменить функцию, сохранив переименование, уже нельзя: коммит отменяется целиком.',
            en: 'Then you cannot undo the function while keeping the rename: a commit is reverted as a whole.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Собрать два коммита через индекс: отдельно переименование, отдельно новая функция.',
            en: 'Assemble two commits through the staging area: the rename separately, the new function separately.',
          },
          reaction: {
            ru: 'Верно. Границы коммитов задают, какими кусками получится отступать, и выбирают их заранее.',
            en: 'Correct. Commit boundaries define the chunks you can retreat in, and they are chosen in advance.',
          },
          deepening: {
            ru: 'В индекс можно класть не только целые файлы, но и отдельные куски внутри файла, подтверждая каждый по отдельности.',
            en: 'The staging area accepts not only whole files but individual chunks inside a file, confirmed one at a time.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Ничего не коммитить до конца дня, чтобы не засорять историю мелкими записями.',
            en: 'Commit nothing until the end of the day so the history stays free of small entries.',
          },
          reaction: {
            ru: 'Опасно: незакоммиченный результат живёт до следующего переключения ветки и легко теряется целиком.',
            en: 'Risky: an uncommitted result lives until the next branch switch and is easily lost in full.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем нужен worktree, если ветка на задачу уже создана?',
      en: 'Why use a worktree when a branch per task already exists?',
    },
    options: [
      {
        ru: 'Он даёт второй рабочей копии отдельную папку, поэтому параллельные агенты не перетирают файлы друг друга.',
        en: 'It gives a second working copy its own folder, so parallel agents do not overwrite each other’s files.',
      },
      {
        ru: 'Он делает коммиты меньше по размеру и ускоряет сборку проекта.',
        en: 'It makes commits smaller and speeds up the project build.',
      },
      {
        ru: 'Он заменяет ветки: с worktree ветки больше не нужны.',
        en: 'It replaces branches: with a worktree you no longer need them.',
      },
    ],
    answer: {
      ru: 'Он даёт второй рабочей копии отдельную папку, поэтому параллельные агенты не перетирают файлы друг друга.',
      en: 'It gives a second working copy its own folder, so parallel agents do not overwrite each other’s files.',
    },
    explanation: {
      ru: 'Верно. Ветка решает вопрос истории, worktree — вопрос файлов: одна история репозитория, несколько независимых рабочих директорий.',
      en: 'Correct. A branch solves the history question, a worktree solves the file question: one repository history, several independent working directories.',
    },
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: агент сломал ветку, которую уже забрали коллеги',
      en: 'Mission: the agent broke a branch teammates have already pulled',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия: отменить изменение обратным коммитом (revert), не переписывая общую историю, и сохранить след ошибки в журнале.',
      en: 'Best strategy: undo the change with a revert commit, without rewriting shared history, keeping the trace of the mistake in the log.',
    },
    scenario: {
      brief: {
        ru: 'Коммит агента попал в основную ветку и сломал сборку. Двое коллег уже подтянули её к себе.',
        en: 'The agent’s commit landed on the main branch and broke the build. Two teammates have already pulled it.',
      },
      constraints: [
        { ru: 'Копии репозитория у коллег должны остаться согласованными', en: 'Teammates’ repository copies must stay consistent' },
        { ru: 'Причина поломки должна остаться видимой в истории', en: 'The cause of the breakage must stay visible in history' },
      ],
      choices: [
        {
          text: {
            ru: 'Сдвинуть основную ветку назад жёстким сбросом и запушить перезаписью.',
            en: 'Move the main branch back with a hard reset and force-push over it.',
          },
          outcome: {
            ru: 'История переписана: у коллег локальные копии расходятся с общей, и разбираться придётся всем.',
            en: 'History is rewritten: teammates’ local copies diverge from the shared one, and everyone pays for it.',
          },
          score: 15,
        },
        {
          text: {
            ru: 'Сделать обратный коммит (revert), проверить сборку и отдельно завести задачу на исправление.',
            en: 'Create a revert commit, verify the build, and file a separate task for the fix.',
          },
          outcome: {
            ru: 'История растёт, а не переписывается: сборка чинится сразу, а ошибка и её отмена остаются видимыми.',
            en: 'History grows instead of being rewritten: the build is fixed immediately while the mistake and its undo stay visible.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Попросить агента дописать исправление поверх, не отменяя сломанный коммит.',
            en: 'Ask the agent to patch a fix on top without undoing the broken commit.',
          },
          outcome: {
            ru: 'Основная ветка остаётся сломанной, пока правка не сойдётся, и все работают на нестабильной базе.',
            en: 'The main branch stays broken until the patch lands, and everyone keeps working on an unstable base.',
          },
          score: 40,
        },
      ],
      passingScore: 70,
    },
  },
];
