import { LocalizedTask } from '../types';

export const contextEngineering101Tasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Какой контекст считается хорошим с точки зрения контекст-инжиниринга?',
      en: 'From a context-engineering standpoint, what makes context good?',
    },
    options: [
      { ru: 'Минимальный объём максимально полезной информации', en: 'The minimal volume of maximally useful information' },
      { ru: 'Максимально полный — чем больше информации, тем лучше', en: 'The most complete one — the more information, the better' },
      { ru: 'Только история диалога без вспомогательных файлов', en: 'Only the dialogue history, no auxiliary files' },
      { ru: 'Только системные инструкции, всё остальное — лишнее', en: 'Only system instructions, everything else is excess' },
    ],
    answer: { ru: 'Минимальный объём максимально полезной информации', en: 'The minimal volume of maximally useful information' },
    explanation: {
      ru: 'Главный принцип дисциплины: не «сколько влезет», а минимум максимально полезного. Каждый лишний токен конкурирует с задачей за внимание модели.',
      en: 'The core principle of the discipline: not "as much as fits" but the minimum of the most useful. Every extra token competes with the task for the model\'s attention.',
    },
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое context rot?',
      en: 'What is context rot?',
    },
    options: [
      { ru: 'Деградация качества ответов по мере распухания и устаревания контекста', en: 'Degradation of output quality as context bloats and goes stale' },
      { ru: 'Физическое повреждение файлов памяти на диске', en: 'Physical corruption of memory files on disk' },
      { ru: 'Удаление старых сообщений пользователем', en: 'The user deleting old messages' },
      { ru: 'Аппаратное ограничение длины контекстного окна', en: 'A hardware limit on context window length' },
    ],
    answer: { ru: 'Деградация качества ответов по мере распухания и устаревания контекста', en: 'Degradation of output quality as context bloats and goes stale' },
    explanation: {
      ru: 'Context rot — именно про качество: мёртвые ссылки, дубли и шум в распухшем контексте ухудшают ответы, даже если лимит окна ещё не достигнут.',
      en: 'Context rot is precisely about quality: dead references, duplicates, and noise in a bloated context degrade answers even before the window limit is reached.',
    },
  },
  {
    id: 3,
    type: 'sorting',
    question: {
      ru: 'Расставьте слои контекста от самого стабильного к самому волатильному',
      en: 'Order the context layers from the most stable to the most volatile',
    },
    answer: '',
    initialItems: [
      { ru: 'Вывод инструмента (живёт внутри задачи)', en: 'Tool output (lives inside a task)' },
      { ru: 'Системные инструкции (загружены всегда)', en: 'System instructions (always loaded)' },
      { ru: 'Тематический файл (читается по запросу)', en: 'Topic file (read on demand)' },
      { ru: 'Индекс памяти (загружен всегда, короткий)', en: 'Memory index (always loaded, short)' },
    ],
    correctOrder: [
      { ru: 'Системные инструкции (загружены всегда)', en: 'System instructions (always loaded)' },
      { ru: 'Индекс памяти (загружен всегда, короткий)', en: 'Memory index (always loaded, short)' },
      { ru: 'Тематический файл (читается по запросу)', en: 'Topic file (read on demand)' },
      { ru: 'Вывод инструмента (живёт внутри задачи)', en: 'Tool output (lives inside a task)' },
    ],
    explanation: {
      ru: 'Слоистая модель идёт от стабильного к волатильному: инструкции и индекс живут всегда, тематические файлы подгружаются по запросу, а вывод инструмента — самый короткоживущий слой внутри одной задачи.',
      en: 'The layered model runs from stable to volatile: instructions and the index are always present, topic files load on demand, and tool output is the shortest-lived layer inside a single task.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Разложите знания по артефактам: куда оформить каждый пункт?',
      en: 'Sort the knowledge into artifacts: where does each item belong?',
    },
    answer: '',
    categorize: {
      items: [
        { ru: '«Никогда не коммитить напрямую в main»', en: 'Never commit directly to main' },
        { ru: '«Шрифт проекта — IBM Plex»', en: 'Project font is IBM Plex' },
        { ru: 'Процедура релиза из шести шагов', en: 'Six-step release procedure' },
        { ru: 'Ревьюер PRD со своим workflow и инструментами', en: 'PRD reviewer with its own workflow and tools' },
      ],
      buckets: [
        { ru: 'Файл-конституция', en: 'Constitution file' },
        { ru: 'Индекс памяти', en: 'Memory index' },
        { ru: 'Скилл', en: 'Skill' },
        { ru: 'Агент', en: 'Agent' },
      ],
      correctMapping: {
        'Never commit directly to main': 'Constitution file',
        'Project font is IBM Plex': 'Memory index',
        'Six-step release procedure': 'Skill',
        'PRD reviewer with its own workflow and tools': 'Agent',
      },
    },
    explanation: {
      ru: 'Постоянное правило → конституция; проверенный короткий факт → индекс памяти; повторяемая процедура → скилл; автономная роль со своим workflow → агент.',
      en: 'A standing rule → constitution; a verified short fact → memory index; a repeatable procedure → skill; an autonomous role with its own workflow → agent.',
    },
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'В каких случаях скилл создавать НЕ стоит? (выберите все подходящие)',
      en: 'When should you NOT create a skill? (select all that apply)',
    },
    options: [
      { ru: 'Задача одноразовая', en: 'The task is one-off' },
      { ru: 'Инструкция занимает пару строк', en: 'The instruction is a couple of lines long' },
      { ru: 'Процедура быстро меняется', en: 'The procedure changes quickly' },
      { ru: 'Процедура повторяется из сессии в сессию', en: 'The procedure repeats across sessions' },
      { ru: 'Нужно одинаковое качество выполнения от раза к разу', en: 'You need consistent execution quality every time' },
    ],
    answer: [
      { ru: 'Задача одноразовая', en: 'The task is one-off' },
      { ru: 'Инструкция занимает пару строк', en: 'The instruction is a couple of lines long' },
      { ru: 'Процедура быстро меняется', en: 'The procedure changes quickly' },
    ],
    explanation: {
      ru: 'Скилл окупается на повторяемых, стабильных процедурах. Одноразовое проще сказать в чате, пару строк — держать правилом, а быстро меняющееся устареет раньше, чем окупится.',
      en: 'A skill pays off on repeatable, stable procedures. One-off things are easier said in chat, two-liners belong as a rule, and a fast-changing procedure goes stale before it pays off.',
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Что важнее всего сообщить в описании (description) скилла?',
      en: 'What is the most important thing a skill\'s description must convey?',
    },
    options: [
      { ru: 'Когда его вызывать', en: 'When to invoke it' },
      { ru: 'Полный текст процедуры', en: 'The full text of the procedure' },
      { ru: 'Имя автора скилла', en: 'The author of the skill' },
      { ru: 'Список всех файлов проекта', en: 'A list of all project files' },
    ],
    answer: { ru: 'Когда его вызывать', en: 'When to invoke it' },
    explanation: {
      ru: 'По описанию агент решает, применять ли скилл без явного вызова. Поэтому описание отвечает на вопрос «когда», а не только «что делает».',
      en: 'The agent decides whether to apply a skill without an explicit call based on its description. So the description answers "when", not just "what it does".',
    },
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Какой тест проходит строка, претендующая на место в постоянно загружаемом контексте?',
      en: 'What test must a line pass to earn a place in always-loaded context?',
    },
    options: [
      { ru: 'Улучшает ли она заметную долю сессий', en: 'Whether it improves a meaningful share of sessions' },
      { ru: 'Короче ли она восьмидесяти символов', en: 'Whether it is shorter than eighty characters' },
      { ru: 'Написана ли она по-английски', en: 'Whether it is written in English' },
      { ru: 'Добавлена ли она за последнюю неделю', en: 'Whether it was added within the last week' },
    ],
    answer: { ru: 'Улучшает ли она заметную долю сессий', en: 'Whether it improves a meaningful share of sessions' },
    explanation: {
      ru: 'Это ROI-тест: постоянная загрузка стоит внимания в каждой сессии, поэтому строка обязана окупаться — регулярно влиять на качество, а не лежать «на всякий случай».',
      en: 'This is the ROI test: always-on loading costs attention in every session, so a line must pay for itself — regularly affect quality rather than sit there "just in case".',
    },
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Коллега предлагает сложить всю документацию в постоянно загружаемый файл. Что ответить?',
      en: 'A teammate suggests putting all documentation into an always-loaded file. How do you respond?',
    },
    answer: '',
    explanation: {
      ru: 'Постоянный контекст — дорогой ресурс: каждый токен конкурирует с задачей за внимание. Детали должны подгружаться по требованию.',
      en: 'Always-loaded context is an expensive resource: every token competes with the task for attention. Details should load on demand.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Окно же огромное — давай просто положим всю документацию проекта в постоянно загружаемый файл, и агент всегда всё будет знать. Что скажешь?',
        en: 'The window is huge — let\'s just put all the project docs into an always-loaded file so the agent always knows everything. What do you say?',
      },
      userOptions: [
        {
          text: {
            ru: 'Каждый токен постоянного контекста конкурирует с задачей за внимание — шум деградирует ответы. Детали лучше выносить в файлы, подгружаемые по требованию.',
            en: 'Every token of always-loaded context competes with the task for attention — noise degrades answers. Details belong in files loaded on demand.',
          },
          reaction: {
            ru: 'Именно. Большое окно не отменяет экономику внимания: постоянная загрузка — для правил и карты, детали — по запросу.',
            en: 'Exactly. A big window does not cancel attention economics: always-on loading is for rules and the map; details come on demand.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Практический фильтр — ROI-тест: строка остаётся в постоянном контексте, только если улучшает заметную долю сессий.',
            en: 'The practical filter is the ROI test: a line stays in always-loaded context only if it improves a meaningful share of sessions.',
          },
        },
        {
          text: {
            ru: 'Согласен — окна теперь большие, влезет всё.',
            en: 'Agreed — windows are big now, everything will fit.',
          },
          reaction: {
            ru: '«Влезет» не значит «поможет»: распухший контекст протухает, и качество ответов падает — это context rot.',
            en: '"Fits" is not "helps": bloated context goes stale and answer quality drops — that is context rot.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Можно, главное — красиво отформатировать файл.',
            en: 'Sure, as long as the file is nicely formatted.',
          },
          reaction: {
            ru: 'Форматирование не снижает стоимость токенов: каждый из них всё равно конкурирует с задачей за внимание модели.',
            en: 'Formatting does not reduce token cost: each one still competes with the task for the model\'s attention.',
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
      ru: 'Принцип «карта, а не книга» для индекса памяти означает…',
      en: 'The "map, not a book" principle for the memory index means…',
    },
    options: [
      { ru: 'Индекс указывает, где лежат детали, а не содержит их', en: 'The index points to where details live rather than containing them' },
      { ru: 'Индекс должен содержать все детали проекта', en: 'The index must contain every project detail' },
      { ru: 'Индекс оформляется только диаграммой', en: 'The index must be drawn as a diagram' },
      { ru: 'Индекс ведётся только на английском языке', en: 'The index must be kept in English only' },
    ],
    answer: { ru: 'Индекс указывает, где лежат детали, а не содержит их', en: 'The index points to where details live rather than containing them' },
    explanation: {
      ru: 'Индекс — короткая карта знаний со ссылками на тематические файлы. Детали живут в файлах, которые читаются по требованию и не тратят постоянный бюджет окна.',
      en: 'The index is a short map of knowledge with links to topic files. Details live in files read on demand, without spending the always-on window budget.',
    },
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: индекс памяти проекта распух и протух',
      en: 'Mission: the project memory index is bloated and stale',
    },
    answer: '',
    explanation: {
      ru: 'Правильный ход — цикл гигиены: аудит против реального состояния проекта, удаление мёртвого, вынос деталей в тематические файлы. Индекс снова становится картой.',
      en: 'The right move is the hygiene cycle: audit against the real project state, delete the dead entries, move details into topic files. The index becomes a map again.',
    },
    scenario: {
      brief: {
        ru: 'Индекс памяти перерос лимит инструмента: хвост файла больше не загружается. Внутри — записи об удалённых файлах, дубли правил из конституции и длинные описания, которым место в тематических файлах.',
        en: 'The memory index outgrew the tool limit: the file\'s tail no longer loads. Inside are entries about deleted files, duplicates of constitution rules, and long descriptions that belong in topic files.',
      },
      constraints: [
        { ru: 'Индекс должен снова стать коротким — невидимый хвост недопустим', en: 'The index must become short again — an invisible tail is unacceptable' },
        { ru: 'Проверенные знания нельзя потерять', en: 'Verified knowledge must not be lost' },
      ],
      choices: [
        {
          text: {
            ru: 'Продолжить дописывать новые факты в конец индекса.',
            en: 'Keep appending new facts to the end of the index.',
          },
          outcome: {
            ru: 'Всё новое попадает в невидимый хвост: знания записываются, но агент их никогда не видит. Проблема усугубляется молча.',
            en: 'Everything new lands in the invisible tail: knowledge gets written but the agent never sees it. The problem silently worsens.',
          },
          score: 0,
          tags: ['append-blindly'],
        },
        {
          text: {
            ru: 'Провести аудит: сверить записи с реальным состоянием проекта, мёртвое удалить, дубли конституции убрать, детали унести в тематические файлы, в индексе оставить короткую карту со ссылками.',
            en: 'Run an audit: check entries against the real project state, delete dead ones, drop constitution duplicates, move details into topic files, keep the index as a short map with links.',
          },
          outcome: {
            ru: 'Индекс снова умещается в лимит и работает как карта. Детали доступны по требованию, ничего не потеряно.',
            en: 'The index fits the limit again and works as a map. Details stay reachable on demand; nothing is lost.',
          },
          score: 100,
          tags: ['audit-cleanup'],
        },
        {
          text: {
            ru: 'Завести рядом второй индекс-файл и писать в него.',
            en: 'Start a second index file next to it and write there.',
          },
          outcome: {
            ru: 'Карта дробится: второй файл не загружается автоматически, а знания расползаются по двум местам с дублями.',
            en: 'The map fragments: the second file does not auto-load, and knowledge sprawls across two places with duplicates.',
          },
          score: 20,
          tags: ['second-index'],
        },
        {
          text: {
            ru: 'Перенести содержимое индекса целиком в длинный архивный файл «на всякий случай».',
            en: 'Move the whole index into one long archive file "just in case".',
          },
          outcome: {
            ru: 'Архив без карты не работает: искать в нём нечем, а мёртвые записи сохранены вместе с живыми. Delete > archive.',
            en: 'An archive without a map does not work: there is no way to navigate it, and dead entries are preserved alongside live ones. Delete > archive.',
          },
          score: 10,
          tags: ['archive-all'],
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Что делает compaction при приближении к лимиту контекстного окна?',
      en: 'What does compaction do as the context window limit approaches?',
    },
    options: [
      { ru: 'Сжимает историю диалога в краткое резюме, сохраняя важное', en: 'Compresses the dialogue history into a brief summary, keeping what matters' },
      { ru: 'Удаляет системные инструкции', en: 'Deletes the system instructions' },
      { ru: 'Физически увеличивает контекстное окно', en: 'Physically enlarges the context window' },
      { ru: 'Блокирует новые сообщения пользователя', en: 'Blocks new user messages' },
    ],
    answer: { ru: 'Сжимает историю диалога в краткое резюме, сохраняя важное', en: 'Compresses the dialogue history into a brief summary, keeping what matters' },
    explanation: {
      ru: 'Compaction — это суммаризация самого волатильного слоя (истории), чтобы освободить окно, не потеряв суть. Стабильные слои — инструкции и память — при этом не трогаются.',
      en: 'Compaction summarizes the most volatile layer (history) to free the window without losing the essence. Stable layers — instructions and memory — stay untouched.',
    },
  },
  {
    id: 12,
    type: 'input',
    question: {
      ru: 'Как называется деградация качества ответов из-за распухшего и устаревшего контекста? (термин из двух английских слов)',
      en: 'What is the term for output-quality degradation caused by bloated, stale context? (two English words)',
    },
    answer: 'context rot',
    hint: {
      ru: 'Контекст «гниёт».',
      en: 'The context "rots".',
    },
    explanation: {
      ru: 'Context rot. Лечится не увеличением окна, а гигиеной: аудитом, чисткой и выносом деталей в подгружаемые по требованию файлы.',
      en: 'Context rot. The cure is not a bigger window but hygiene: audits, cleanup, and moving details into files loaded on demand.',
    },
  },
];
