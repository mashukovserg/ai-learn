import { LocalizedTask } from '../types';

export const agenticReleaseControlTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Агент показывает зелёный прогон тестов на своей машине. Почему это ещё не значит, что изменение можно выпускать?',
      en: 'The agent shows a green test run on its own machine. Why does that not mean the change is ready to ship?'
    },
    options: [
      { ru: 'Локальный прогон идёт в вашем окружении — с кешами, лишними пакетами и своей версией платформы; общий прогон стартует с чистого места и гоняет матрицу проверок', en: 'A local run happens in your environment — caches, stray packages, your platform version; a shared run starts clean and executes a whole matrix of checks' },
      { ru: 'Локальные тесты всегда написаны хуже, чем тесты в CI', en: 'Local tests are always written worse than the tests in CI' },
      { ru: 'Тесты, запущенные агентом, не считаются пройденными', en: 'Tests started by an agent do not count as passed' }
    ],
    answer: {
      ru: 'Локальный прогон идёт в вашем окружении — с кешами, лишними пакетами и своей версией платформы; общий прогон стартует с чистого места и гоняет матрицу проверок',
      en: 'A local run happens in your environment — caches, stray packages, your platform version; a shared run starts clean and executes a whole matrix of checks'
    },
    explanation: {
      ru: 'Верно. Отсюда классическое «но у меня работало»: незаявленная зависимость, другая тайм-зона, другая версия платформы. Часть проверок (матрица ОС, продакшен-сборка, сканер зависимостей) на ноутбуке просто не выполняют.',
      en: 'Correct. Hence the classic “but it worked for me”: an undeclared dependency, a different time zone, a different platform version. Some checks (an OS matrix, a production build, a dependency scanner) are simply never run on a laptop.'
    }
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называется набор обязательных блокирующих проверок, без прохождения которых изменение не сливается в основную ветку? (два слова, по-английски)',
      en: 'What is the name for the set of mandatory blocking checks a change must pass before it is merged into the main branch? (two words)'
    },
    answer: ['quality gate', 'quality gates'],
    hint: {
      ru: 'Ворота, а не оценка: либо открыты, либо нет.',
      en: 'A door, not a score: either open or shut.'
    },
    explanation: {
      ru: 'Quality gate — набор независимых условий (сборка, линтеры, тесты, проверка типов, сканер зависимостей). Любое из них блокирует слияние в одиночку.',
      en: 'A quality gate is a set of independent conditions (build, linters, tests, typecheck, dependency scanner). Any one of them blocks the merge on its own.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'На пул-реквесте из внешнего форка прогон не стартовал: статус «Action required», проверки ждут подтверждения мейнтейнера. Зачем так сделано?',
      en: 'On a pull request from an outside fork the run never started: the status reads “Action required” and the checks wait for a maintainer to approve them. Why is it built that way?'
    },
    options: [
      { ru: 'Запуск проверок тратит чужие вычислительные ресурсы и может дать присланному коду доступ к секретам сборки', en: 'Running the checks spends someone else’s compute and can give the submitted code access to build secrets' },
      { ru: 'GitHub так экономит место в логах', en: 'It is how GitHub saves space in the logs' },
      { ru: 'Проверки от внешних участников считаются менее точными', en: 'Checks from outside contributors are considered less accurate' }
    ],
    answer: {
      ru: 'Запуск проверок тратит чужие вычислительные ресурсы и может дать присланному коду доступ к секретам сборки',
      en: 'Running the checks spends someone else’s compute and can give the submitted code access to build secrets'
    },
    explanation: {
      ru: 'Верно. Поэтому право предложить изменение, право запустить проверки и право слить — три отдельных права. Иначе вредоносный пул-реквест стал бы способом добыть токены.',
      en: 'Correct. That is why proposing a change, starting the checks, and merging are three separate permissions. Otherwise a malicious pull request would become a way to harvest tokens.'
    }
  },
  {
    id: 4,
    type: 'sorting',
    question: {
      ru: 'Восстановите порядок релизного контура — от готового патча до полного выката.',
      en: 'Restore the order of the release path — from a finished patch to a full rollout.'
    },
    initialItems: [
      { ru: 'Расширить долю трафика до полного выката', en: 'Grow the traffic share to a full rollout' },
      { ru: 'Агент открывает ветку и пул-реквест', en: 'The agent opens a branch and a pull request' },
      { ru: 'Сравнить показатели канареечной доли с остальным трафиком', en: 'Compare the canary share metrics against the rest of the traffic' },
      { ru: 'Прогоняются обязательные проверки (quality gate)', en: 'The mandatory checks run (the quality gate)' },
      { ru: 'Человек читает изменение на ревью и подтверждает слияние', en: 'A human reads the change in review and approves the merge' },
      { ru: 'Новая версия получает небольшую долю трафика', en: 'The new version takes a small share of traffic' }
    ],
    correctOrder: [
      { ru: 'Агент открывает ветку и пул-реквест', en: 'The agent opens a branch and a pull request' },
      { ru: 'Прогоняются обязательные проверки (quality gate)', en: 'The mandatory checks run (the quality gate)' },
      { ru: 'Человек читает изменение на ревью и подтверждает слияние', en: 'A human reads the change in review and approves the merge' },
      { ru: 'Новая версия получает небольшую долю трафика', en: 'The new version takes a small share of traffic' },
      { ru: 'Сравнить показатели канареечной доли с остальным трафиком', en: 'Compare the canary share metrics against the rest of the traffic' },
      { ru: 'Расширить долю трафика до полного выката', en: 'Grow the traffic share to a full rollout' }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала предложение изменения, потом автоматический гейт, потом человеческое решение о слиянии — и только после этого осторожный выкат: сначала доля трафика, сравнение метрик, затем расширение.',
      en: 'First the proposal, then the automated gate, then the human merge decision — and only after that a careful rollout: a share of traffic first, a metric comparison, then expansion.'
    }
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Вам на ревью пришёл пул-реквест от агента. Что по теории смотрят в первую очередь? (несколько ответов)',
      en: 'An agent’s pull request lands in your review queue. According to the theory, what do you look at first? (multiple answers)'
    },
    options: [
      { ru: 'Список файлов: изменение осталось в заявленной области или расползлось на соседние модули', en: 'The file list: did the change stay inside the declared area or spread into neighbouring modules' },
      { ru: 'Соотношение кода и тестов, особенно удаление или ослабление существующих тестов', en: 'The code-to-tests ratio, especially deleted or weakened existing tests' },
      { ru: 'Опасные места: миграции базы, конфигурацию прав, работу с секретами, новые зависимости', en: 'The dangerous spots: database migrations, permission configuration, anything touching secrets, new dependencies' },
      { ru: 'Стиль кода и форматирование отступов', en: 'Code style and indentation' }
    ],
    answer: [
      { ru: 'Список файлов: изменение осталось в заявленной области или расползлось на соседние модули', en: 'The file list: did the change stay inside the declared area or spread into neighbouring modules' },
      { ru: 'Соотношение кода и тестов, особенно удаление или ослабление существующих тестов', en: 'The code-to-tests ratio, especially deleted or weakened existing tests' },
      { ru: 'Опасные места: миграции базы, конфигурацию прав, работу с секретами, новые зависимости', en: 'The dangerous spots: database migrations, permission configuration, anything touching secrets, new dependencies' }
    ],
    explanation: {
      ru: 'Стиль и отступы поправит линтер — на них тратят внимание в последнюю очередь. Самый тревожный дифф — ослабленный или удалённый тест: так зелёный прогон получают бесплатно.',
      en: 'Style and indentation are the linter’s job — they get attention last. The most alarming diff is a weakened or deleted test: that is how a green run is obtained for free.'
    }
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Каждый инструмент релизного контура отвечает на свой вопрос. Разложите вопросы по инструментам.',
      en: 'Each release-control instrument answers its own question. Sort the questions by instrument.'
    },
    answer: '',
    explanation: {
      ru: 'Quality gate решает, можно ли выпускать вообще. Canary — на ком проверить первыми и с чем сравнивать. Feature flag — как выключить поведение без нового выката. Откат — как вернуть систему в рабочее состояние.',
      en: 'The quality gate decides whether this may ship at all. The canary decides who tries it first and against what to compare. The feature flag decides how to switch behavior off without shipping again. The rollback decides how to get the system back to a working state.'
    },
    categorize: {
      items: [
        { ru: 'Прошли ли обязательные проверки перед слиянием', en: 'Did the mandatory checks pass before the merge' },
        { ru: 'Какая доля трафика получит новую версию первой', en: 'Which share of traffic gets the new version first' },
        { ru: 'Как выключить поведение без сборки и деплоя', en: 'How to switch behavior off with no build and no deploy' },
        { ru: 'Как быстро вернуть систему в рабочее состояние', en: 'How to bring the system back to a working state quickly' },
        { ru: 'С чем сравнивать метрики новой версии', en: 'What to compare the new version’s metrics against' },
        { ru: 'Что блокирует слияние ветки при провале одного условия', en: 'What blocks the merge when a single condition fails' }
      ],
      buckets: [
        { ru: 'Quality gate', en: 'Quality gate' },
        { ru: 'Canary', en: 'Canary' },
        { ru: 'Feature flag', en: 'Feature flag' },
        { ru: 'Откат', en: 'Rollback' }
      ],
      correctMapping: {
        'Did the mandatory checks pass before the merge': 'Quality gate',
        'Which share of traffic gets the new version first': 'Canary',
        'How to switch behavior off with no build and no deploy': 'Feature flag',
        'How to bring the system back to a working state quickly': 'Rollback',
        'What to compare the new version’s metrics against': 'Canary',
        'What blocks the merge when a single condition fails': 'Quality gate'
      }
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'На панели ошибок дашборда проведена красная линия на уровне 5%. Что она означает для канареечного выката?',
      en: 'The error panel on the dashboard carries a red line at 5%. What does it mean for a canary rollout?'
    },
    options: [
      { ru: 'Заранее заданный порог: пока доля ошибок под ним, выкат продолжается; пересекла — трафик возвращают на прежнюю версию', en: 'A threshold set in advance: while the error ratio stays below it the rollout continues; once it crosses, traffic goes back to the previous version' },
      { ru: 'Средний уровень ошибок за прошлый месяц', en: 'The average error level over the past month' },
      { ru: 'Отметку, после которой график перекрашивается в красный для наглядности', en: 'A mark after which the chart turns red for readability' }
    ],
    answer: {
      ru: 'Заранее заданный порог: пока доля ошибок под ним, выкат продолжается; пересекла — трафик возвращают на прежнюю версию',
      en: 'A threshold set in advance: while the error ratio stays below it the rollout continues; once it crosses, traffic goes back to the previous version'
    },
    explanation: {
      ru: 'Верно, и ключевое слово — «заранее». Порог, выбранный до выката, превращает обсуждение в правило. Смотреть метрики нужно достаточно долго: несколько минут спокойного графика ничего не доказывают.',
      en: 'Correct, and the key words are “in advance”. A threshold chosen before the rollout turns a discussion into a rule. The metrics also need a long enough window: a few calm minutes of a chart prove nothing.'
    }
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Чем feature flag отличается от canary?',
      en: 'How does a feature flag differ from a canary?'
    },
    options: [
      { ru: 'Canary управляет тем, какая версия кода обслуживает часть трафика; флаг управляет поведением внутри одной версии и переключается конфигурацией', en: 'A canary controls which version of the code serves part of the traffic; a flag controls behavior inside one version and is toggled by configuration' },
      { ru: 'Это два названия одного и того же приёма', en: 'They are two names for the same technique' },
      { ru: 'Флаг применяется только к фронтенду, canary — только к бэкенду', en: 'A flag applies only to the frontend and a canary only to the backend' }
    ],
    answer: {
      ru: 'Canary управляет тем, какая версия кода обслуживает часть трафика; флаг управляет поведением внутри одной версии и переключается конфигурацией',
      en: 'A canary controls which version of the code serves part of the traffic; a flag controls behavior inside one version and is toggled by configuration'
    },
    explanation: {
      ru: 'Верно. Код с флагом уезжает в прод выключенным и включается для части пользователей одним изменением конфигурации — без сборки и выката. Поэтому выключение флага и есть самый дешёвый обратный ход.',
      en: 'Correct. Flagged code ships to production switched off and is enabled for a subset of users by one configuration change — no build, no rollout. That is why switching a flag off is the cheapest way back.'
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: { ru: 'Право слияния для агента', en: 'Merge rights for the agent' },
    answer: '',
    explanation: {
      ru: 'Зелёные проверки — это факт из отчёта инструмента, а не решение о выпуске. Гейт проверяет то, что можно описать правилом; смысл изменения, его нужность и опасные места остаются человеку.',
      en: 'Green checks are a fact reported by a tool, not a release decision. The gate verifies what can be expressed as a rule; the meaning of the change, whether it is needed at all, and the dangerous spots stay with a human.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега предлагает: «Ревью тормозит поставку. Давайте выдадим агенту право сливать пул-реквест самому, если все обязательные проверки зелёные». Что ответите?',
        en: 'A colleague proposes: “Review slows delivery down. Let us give the agent the right to merge its own pull request whenever all the mandatory checks are green.” What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Согласиться: если гейт зелёный, изменение по определению безопасно.', en: 'Agree: if the gate is green, the change is safe by definition.' },
          reaction: {
            ru: 'Нет. Гейт ловит только то, что заранее описано правилом. Ненужную функцию, обход прав или ослабленный тест зелёный прогон не заметит — а тест агент мог поправить сам, чтобы прогон сошёлся.',
            en: 'No. The gate catches only what was described as a rule in advance. A green run will not notice an unnecessary feature, a permission bypass, or a weakened test — and the agent itself may have adjusted that test to make the run pass.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Оставить агенту предложение изменения и починку проверок, а слияние — за правилами репозитория и человеком; ускорять ревью размером пул-реквеста.', en: 'Let the agent propose the change and fix the checks, but keep the merge with the repository rules and a human; speed review up by making pull requests smaller.' },
          reaction: {
            ru: 'Именно. Агент работает внутри своей ветки, где ничего не ломает, а узость ревью лечится размером изменения и агентским ревью первым контуром — но не выдачей права слияния.',
            en: 'Exactly. The agent works inside its own branch where it breaks nothing, and the review bottleneck is treated with smaller changes and an agent review as a first pass — not by handing over merge rights.'
          },
          isCorrect: true
        },
        {
          text: { ru: 'Запретить агенту открывать пул-реквесты вообще, пока ревью не разгрузится.', en: 'Forbid the agent from opening pull requests at all until the review queue clears.' },
          reaction: {
            ru: 'Это лечит симптом ценой всей пользы. Предложение изменения — безопасная часть цикла: оно не меняет состояние основной ветки. Ограничивать нужно право слияния, а не право предлагать.',
            en: 'That treats the symptom at the cost of all the value. Proposing a change is the safe part of the loop: it does not change the state of the main branch. What should be limited is the right to merge, not the right to propose.'
          },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: ночной выкат поехал',
      en: 'Mission: the night rollout goes wrong'
    },
    answer: '',
    explanation: {
      ru: 'Сначала возвращают систему в рабочее состояние, потом ищут причину: расследование длится непредсказуемо долго, а пользователи страдают всё это время. Самый дешёвый обратный ход — выключить флаг.',
      en: 'First bring the system back to a working state, then look for the cause: an investigation takes an unpredictable amount of time while users suffer through all of it. The cheapest way back is switching the flag off.'
    },
    scenario: {
      brief: {
        ru: 'Ночью агент довёл изменение до канареечного выката: новая логика оформления заказа под feature flag получила 10% трафика. Через двадцать минут доля ошибок на канареечной части — 7,4% при заранее заданном пороге 5%. Вы дежурный инженер. Первый шаг?',
        en: 'Overnight the agent took a change to canary: new checkout logic behind a feature flag is serving 10% of traffic. Twenty minutes in, the error ratio on the canary share is 7.4% against a threshold of 5% set in advance. You are on call. First step?'
      },
      constraints: [
        { ru: 'Порог 5% был согласован до выката', en: 'The 5% threshold was agreed before the rollout' },
        { ru: 'Изменение закрыто feature flag', en: 'The change is behind a feature flag' },
        { ru: 'Причина ошибки пока неизвестна', en: 'The cause of the errors is not known yet' }
      ],
      choices: [
        {
          text: { ru: 'Выключить флаг, убедиться по метрикам, что показатели вернулись, и только потом разбираться в причине', en: 'Switch the flag off, confirm on the metrics that the numbers recovered, and only then investigate the cause' },
          outcome: {
            ru: 'Верно. Это самый дешёвый обратный ход: поведение исчезает мгновенно, деплой не нужен. Восстановление сервиса идёт первым, расследование — после, уже без давления времени.',
            en: 'Correct. This is the cheapest way back: the behavior disappears instantly, no deploy required. Restoring service comes first, the investigation after — with no time pressure.'
          },
          score: 95
        },
        {
          text: { ru: 'Оставить выкат и попросить агента найти и починить причину прямо в проде', en: 'Leave the rollout running and ask the agent to find and fix the cause straight in production' },
          outcome: {
            ru: 'Расследование длится непредсказуемо долго, и всё это время 10% пользователей получают ошибки. Порог был согласован заранее именно для того, чтобы не обсуждать это в момент инцидента.',
            en: 'The investigation takes an unpredictable amount of time, and 10% of users get errors throughout. The threshold was agreed in advance precisely so this is not debated during the incident.'
          },
          score: 15
        },
        {
          text: { ru: 'Сразу сделать revert коммита в основной ветке и запустить полный выкат предыдущей версии', en: 'Immediately revert the commit on the main branch and roll out the previous version in full' },
          outcome: {
            ru: 'Сработает, но это самый дорогой из доступных ходов: за откатом снова идут проверки и выкат, а флаг рядом выключается мгновенно. Начинать стоит с дешёвого шага.',
            en: 'It works, but it is the most expensive move available: a revert is followed by checks and a rollout all over again, while the flag right there switches off instantly. Start with the cheap step.'
          },
          score: 45
        }
      ],
      passingScore: 60
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Инцидент погашен. Какой вопрос разбора теория называет самым ценным?',
      en: 'The incident is over. Which question does the theory call the most valuable one in the review?'
    },
    options: [
      { ru: 'Что позволило изменению пройти гейт — ответ превращается в новую проверку', en: 'What let the change through the gate — the answer turns into a new check' },
      { ru: 'Кто именно допустил ошибку и какое взыскание применить', en: 'Who exactly made the mistake and what penalty to apply' },
      { ru: 'Можно ли было обойтись без выката в этот день', en: 'Whether the rollout could have been skipped that day' }
    ],
    answer: {
      ru: 'Что позволило изменению пройти гейт — ответ превращается в новую проверку',
      en: 'What let the change through the gate — the answer turns into a new check'
    },
    explanation: {
      ru: 'Верно. Недостающий тест, порог в метрике или дополнительное правило защиты ветки — так контур становится крепче. Разбор без поиска виноватого нужен из практичности: команда, которая наказывает за инциденты, получает меньше сообщений о них, а не меньше инцидентов.',
      en: 'Correct. A missing test, a metric threshold, or one more branch protection rule — that is how the layer gets stronger. Reviewing without hunting for a culprit is practical, not polite: a team that punishes people for incidents gets fewer incident reports, not fewer incidents.'
    }
  }
];
