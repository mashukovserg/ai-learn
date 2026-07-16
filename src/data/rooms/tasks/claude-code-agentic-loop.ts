import { LocalizedTask } from '../types';

export const claudeCodeAgenticLoopTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Из каких трех основных фаз состоит агентный цикл Claude Code?',
      en: 'What are the three main phases of the Claude Code agentic loop?'
    },
    options: [
      { ru: 'Планирование, Написание кода, Релиз', en: 'Planning, Coding, Release' },
      { ru: 'Сбор контекста, Действие, Верификация', en: 'Gather Context, Take Action, Verify Results' },
      { ru: 'Чтение, Редактирование, Удаление', en: 'Read, Edit, Delete' },
      { ru: 'Запрос, Ответ, Оплата', en: 'Request, Response, Payment' }
    ],
    answer: {
      ru: 'Сбор контекста, Действие, Верификация',
      en: 'Gather Context, Take Action, Verify Results'
    },
    explanation: {
      ru: 'Этот цикл повторяется непрерывно, пока цель не будет достигнута или агент не запросит помощь.',
      en: 'This loop repeats continuously until the goal is achieved or the agent requests help.'
    }
  },
  {
    id: 2,
    type: 'categorize',
    question: {
      ru: 'Распределите действия агента по фазам цикла:',
      en: 'Distribute agent actions by cycle phases:'
    },
    answer: '',
    explanation: {
      ru: 'Агент сначала изучает среду, затем меняет её, и обязательно проверяет результат изменения.',
      en: 'The agent first studies the environment, then changes it, and must verify the result of the change.'
    },
    categorize: {
      items: [
        { ru: 'Чтение файла test.py', en: 'Reading test.py' },
        { ru: 'Запуск npm test', en: 'Running npm test' },
        { ru: 'Применение патча к коду', en: 'Applying a code patch' },
        { ru: 'Поиск по кодовой базе', en: 'Searching the codebase' },
        { ru: 'Проверка статус-кода API', en: 'Checking API status code' }
      ],
      buckets: [
        { ru: 'Сбор контекста', en: 'Gather Context' },
        { ru: 'Действие', en: 'Take Action' },
        { ru: 'Верификация', en: 'Verify' }
      ],
      correctMapping: {
        'Reading test.py': 'Gather Context',
        'Running npm test': 'Verify',
        'Applying a code patch': 'Take Action',
        'Searching the codebase': 'Gather Context',
        'Checking API status code': 'Verify',
      }
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Что происходит, когда Claude Code достигает лимита контекстного окна?',
      en: 'What happens when Claude Code reaches the context window limit?'
    },
    options: [
      { ru: 'Он прекращает работу и требует перезагрузки', en: 'It stops working and requires a restart' },
      { ru: 'Он автоматически сжимает (compact) историю сообщений, сохраняя суть', en: 'It automatically compacts the message history, preserving the essence' },
      { ru: 'Он удаляет все файлы в проекте', en: 'It deletes all files in the project' },
      { ru: 'Он переключается на Haiku', en: 'It switches to Haiku' }
    ],
    answer: {
      ru: 'Он автоматически сжимает (compact) историю сообщений, сохраняя суть',
      en: 'It automatically compacts the message history, preserving the essence'
    },
    explanation: {
      ru: 'Функция auto-compact позволяет продолжать длинные сессии без потери критического контекста.',
      en: 'The auto-compact feature allows long sessions to continue without losing critical context.'
    }
  },
  {
    id: 4,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Восстановите логический порядок работы агента при исправлении бага:',
      en: 'Restore the logical order of agent work when fixing a bug:'
    },
    initialItems: [
      { ru: 'Запустить тесты для проверки фикса', en: 'Run tests to verify the fix' },
      { ru: 'Прочитать логи ошибки', en: 'Read error logs' },
      { ru: 'Внести изменения в файл', en: 'Apply changes to the file' },
      { ru: 'Найти место возникновения ошибки', en: 'Locate the bug source' }
    ],
    correctOrder: [
      { ru: 'Прочитать логи ошибки', en: 'Read error logs' },
      { ru: 'Найти место возникновения ошибки', en: 'Locate the bug source' },
      { ru: 'Внести изменения в файл', en: 'Apply changes to the file' },
      { ru: 'Запустить тесты для проверки фикса', en: 'Run tests to verify the fix' }
    ],
    explanation: {
      ru: 'Агент всегда идет от анализа проблемы к действию и проверке.',
      en: 'The agent always moves from problem analysis to action and verification.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Почему агенту Claude Code нужны "инструменты" (tools)?',
      en: 'Why does the Claude Code agent need "tools"?'
    },
    options: [
      { ru: 'Чтобы лучше понимать человеческий язык', en: 'To better understand human language' },
      { ru: 'Для взаимодействия с внешним миром: файловой системой, терминалом и сетью', en: 'To interact with the outside world: file system, terminal, and network' },
      { ru: 'Чтобы снизить стоимость токенов', en: 'To reduce token costs' },
      { ru: 'Для генерации картинок', en: 'To generate images' }
    ],
    answer: {
      ru: 'Для взаимодействия с внешним миром: файловой системой, терминалом и сетью',
      en: 'To interact with the outside world: file system, terminal, and network'
    },
    explanation: {
      ru: 'Сама по себе LLM — это "мозг в банке". Инструменты — это её руки в вашей системе.',
      en: 'An LLM is a "brain in a jar." Tools are its hands in your system.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Какую модель Andrew Brown называет "Goldilocks" (Златовласка) — идеально сбалансированной для кодинга?',
      en: 'Which model does Andrew Brown call "Goldilocks" — perfectly balanced for coding?'
    },
    options: [
      { ru: 'Claude Opus (Слишком медленная/умная)', en: 'Claude Opus (Too slow/smart)' },
      { ru: 'Claude Sonnet (То что нужно)', en: 'Claude Sonnet (Just right)' },
      { ru: 'Claude Haiku (Слишком быстрая/простая)', en: 'Claude Haiku (Too fast/simple)' }
    ],
    answer: {
      ru: 'Claude Sonnet (То что нужно)',
      en: 'Claude Sonnet (Just right)'
    },
    explanation: {
      ru: 'Sonnet обеспечивает лучший баланс скорости, интеллекта и стоимости для ежедневных задач.',
      en: 'Sonnet provides the best balance of speed, intelligence, and cost for daily tasks.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что произойдет, если вы прервете цикл агента (Ctrl+C)?',
      en: 'What happens if you interrupt the agentic loop (Ctrl+C)?'
    },
    options: [
      { ru: 'Все изменения в файлах откатятся автоматически', en: 'All file changes will be rolled back automatically' },
      { ru: 'Агент остановится и будет ждать вашего фидбека или новой команды', en: 'The agent will stop and wait for your feedback or a new command' },
      { ru: 'Сессия будет безвозвратно удалена', en: 'The session will be permanently deleted' },
      { ru: 'Ваш аккаунт заблокируют', en: 'Your account will be banned' }
    ],
    answer: {
      ru: 'Агент остановится и будет ждать вашего фидбека или новой команды',
      en: 'The agent will stop and wait for your feedback or a new command'
    },
    explanation: {
      ru: 'Вы всегда контролируете цикл и можете вмешаться, если видите, что агент "пошел не туда".',
      en: 'You always control the loop and can intervene if you see the agent "going the wrong way."'
    }
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Самокоррекция агента',
      en: 'Agent Self-Correction'
    },
    answer: '',
    scenario: {
      brief: {
      ru: 'Агент внес изменения в код, запустил тесты, и они провалились с ошибкой синтаксиса. Что он должен сделать в следующей итерации цикла?',
      en: 'The agent applied code changes, ran tests, and they failed with a syntax error. What should it do in the next loop iteration?'
    },
      constraints: [
      { ru: 'Нельзя игнорировать ошибку тестов', en: 'Cannot ignore test failure' },
      { ru: 'Нужно исправить причину провала', en: 'Must fix the root cause of the failure' }
    ],
      choices: [
      {
        text: { ru: 'Удалить файл с ошибкой', en: 'Delete the file with the error' },
        outcome: { ru: 'Плохо. Проблема не решена.', en: 'Bad. Problem not solved.' },
        score: 0
      },
      {
        text: { ru: 'Прочитать файл, найти синтаксическую ошибку и применить новый паттерн исправления', en: 'Read the file, locate the syntax error, and apply a new fix pattern' },
        outcome: { ru: 'Верно. Это пример верификации и возврата к фазе сбора контекста.', en: 'Correct. This is an example of verification and returning to context gathering.' },
        score: 10
      },
      {
        text: { ru: 'Запросить у пользователя правильный код', en: 'Ask the user for the correct code' },
        outcome: { ru: 'Приемлемо, но агент должен сначала попробовать сам.', en: 'Acceptable, but the agent should try itself first.' },
        score: 5
      }
    ],
      passingScore: 8
    },
    explanation: {
      ru: 'Агентный цикл ценен способностью анализировать свои ошибки через фазу верификации.',
      en: 'The agentic loop is valuable for its ability to analyze its own mistakes through the verification phase.'
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Ментор о контексте',
      en: 'Mentor on Context'
    },
    answer: '',
    explanation: { ru: 'Замедление вызвано переполнением контекстного окна: чем больше файлов и истории в сессии, тем чаще нужна «упаковка» (compacting) и тем дороже каждый шаг. Дробите задачу на небольшие этапы.', en: 'The slowdown comes from context-window overflow: the more files and history in a session, the more often compacting is needed and the more each step costs. Split work into small stages.' },
    dialogue: {
      mentorMessage: {
      ru: 'Я хочу, чтобы Claude Code написал тесты для всего моего огромного проекта сразу. Почему он может начать тормозить?',
      en: 'I want Claude Code to write tests for my entire massive project at once. Why might it start slowing down?'
    },
      userOptions: [
      {
        text: { ru: 'Потому что у него мало памяти на моем компьютере', en: 'Because it has low memory on my computer' },
        reaction: { ru: 'Не совсем. Claude Code работает в облаке, но контекстное окно ограничено.', en: 'Not exactly. Claude Code runs in the cloud, but the context window is limited.' },
        isCorrect: false
      },
      {
        text: { ru: 'Потому что при обработке всего проекта контекстное окно переполняется и требуется частая "упаковка" (compacting) истории', en: 'Because when processing the entire project, the context window overflows and requires frequent history "compacting"' },
        reaction: { ru: 'Верно! Чем больше файлов и истории в сессии, тем больше токенов тратится на каждый шаг.', en: 'Correct! The more files and history in a session, the more tokens are spent on each step.' },
        isCorrect: true,
        deepening: { ru: 'Разбиение задачи на мелкие этапы помогает экономить контекст.', en: 'Breaking the task into small stages helps save context.' }
      }
    ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "RAG" в контексте сбора данных агентом?',
      en: 'What is "RAG" in the context of agent context gathering?'
    },
    options: [
      { ru: 'Способ удаления старых файлов', en: 'A way to delete old files' },
      { ru: 'Retrieval Augmented Generation — извлечение нужных данных из базы для обогащения запроса', en: 'Retrieval Augmented Generation — retrieving necessary data from a DB to enrich the prompt' },
      { ru: 'Автоматический генератор README', en: 'An automatic README generator' },
      { ru: 'Протокол общения между агентами', en: 'A communication protocol between agents' }
    ],
    answer: {
      ru: 'Retrieval Augmented Generation — извлечение нужных данных из базы для обогащения запроса',
      en: 'Retrieval Augmented Generation — retrieving necessary data from a DB to enrich the prompt'
    },
    explanation: {
      ru: 'Когда агент ищет информацию в вашей кодовой базе, он по сути выполняет локальный RAG.',
      en: 'When the agent searches for information in your codebase, it is essentially performing a local RAG.'
    }
  }
];
