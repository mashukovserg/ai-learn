import { LocalizedTask } from '../types';

export const githubActionsCiTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что именно доказывает зелёный локальный прогон проверок?',
      en: 'What exactly does a green local test run prove?',
    },
    options: [
      {
        ru: 'Что код работает на конкретной машине с её версиями, переменными и файлами, половина которых не описана в репозитории.',
        en: 'That the code works on one particular machine with its versions, variables, and files, half of which are not described in the repository.',
      },
      {
        ru: 'Что код воспроизводимо собирается у любого участника команды.',
        en: 'That the code builds reproducibly for every member of the team.',
      },
      {
        ru: 'Что изменение прошло ревью и готово к слиянию.',
        en: 'That the change has been reviewed and is ready to merge.',
      },
    ],
    answer: {
      ru: 'Что код работает на конкретной машине с её версиями, переменными и файлами, половина которых не описана в репозитории.',
      en: 'That the code works on one particular machine with its versions, variables, and files, half of which are not described in the repository.',
    },
    explanation: {
      ru: 'Верно. «У меня работает» — утверждение о компьютере, а не о коде; поэтому проверку повторяют на чистой машине.',
      en: 'Correct. “Works on my machine” is a statement about a computer, not about the code — which is why the check is repeated on a clean machine.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите название машины, на которой выполняется задача workflow и которая создаётся заново под каждый запуск.',
      en: 'Enter the name of the machine that executes a workflow job and is created fresh for each run.',
    },
    answer: ['runner', 'раннер'],
    hint: {
      ru: 'Одно английское слово из шести букв.',
      en: 'One English word, six letters.',
    },
    explanation: {
      ru: 'Да. Runner ничего не знает про локальные настройки разработчика, поэтому ловит зависимости, установленные вручную.',
      en: 'Yes. A runner knows nothing about a developer’s local setup, so it catches dependencies that were installed by hand.',
    },
  },
  {
    id: 3,
    type: 'sorting',
    question: {
      ru: 'Расположите уровни описания GitHub Actions от внешнего к внутреннему.',
      en: 'Arrange the levels of a GitHub Actions description from outer to inner.',
    },
    initialItems: [
      { ru: 'Шаг — команда или подключённый чужой блок', en: 'Step — a command or a plugged-in third-party block' },
      { ru: 'Событие-триггер — пуш, пул-реквест, расписание, ручной запуск', en: 'Trigger event — push, pull request, schedule, manual run' },
      { ru: 'Задача (job) — получает свой runner', en: 'Job — gets its own runner' },
    ],
    correctOrder: [
      { ru: 'Событие-триггер — пуш, пул-реквест, расписание, ручной запуск', en: 'Trigger event — push, pull request, schedule, manual run' },
      { ru: 'Задача (job) — получает свой runner', en: 'Job — gets its own runner' },
      { ru: 'Шаг — команда или подключённый чужой блок', en: 'Step — a command or a plugged-in third-party block' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Событие запускает workflow, внутри него задачи идут параллельно, а шаги внутри задачи — строго по порядку на одной машине.',
      en: 'Correct. The event starts the workflow, jobs inside it run in parallel, and steps inside a job run strictly in order on one machine.',
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Почти пустой прогон падает на первой же команде сборки. Какой шаг чаще всего забывают в workflow?',
      en: 'A nearly empty run fails on the very first build command. Which step is most often forgotten in a workflow?',
    },
    options: [
      {
        ru: 'Шаг, который скачивает код репозитория на runner.',
        en: 'The step that downloads the repository code onto the runner.',
      },
      {
        ru: 'Шаг, который отправляет уведомление в мессенджер.',
        en: 'The step that sends a notification to a messenger.',
      },
      {
        ru: 'Шаг, который включает матрицу окружений.',
        en: 'The step that enables the environment matrix.',
      },
    ],
    answer: {
      ru: 'Шаг, который скачивает код репозитория на runner.',
      en: 'The step that downloads the repository code onto the runner.',
    },
    explanation: {
      ru: 'Точно. Без этого шага машина пустая: runner не содержит код проекта по умолчанию.',
      en: 'Exactly. Without that step the machine is empty: a runner does not contain the project code by default.',
    },
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Какие приёмы сокращают время обязательного набора проверок, не отменяя их смысла?',
      en: 'Which techniques shorten the required check suite without cancelling its purpose?',
    },
    options: [
      {
        ru: 'Кэшировать установку зависимостей между запусками.',
        en: 'Cache dependency installation between runs.',
      },
      {
        ru: 'Развести линтер, типы и тесты по отдельным параллельным задачам.',
        en: 'Split linting, type checking, and tests into separate parallel jobs.',
      },
      {
        ru: 'Унести тяжёлые интеграционные прогоны в ночной запуск по расписанию.',
        en: 'Move heavy integration runs into a scheduled nightly job.',
      },
      {
        ru: 'Пропускать сборку при изменениях в коде, чтобы не ждать её результата.',
        en: 'Skip the build on code changes so nobody waits for its result.',
      },
    ],
    answer: [
      {
        ru: 'Кэшировать установку зависимостей между запусками.',
        en: 'Cache dependency installation between runs.',
      },
      {
        ru: 'Развести линтер, типы и тесты по отдельным параллельным задачам.',
        en: 'Split linting, type checking, and tests into separate parallel jobs.',
      },
      {
        ru: 'Унести тяжёлые интеграционные прогоны в ночной запуск по расписанию.',
        en: 'Move heavy integration runs into a scheduled nightly job.',
      },
    ],
    explanation: {
      ru: 'Да. Экономия допустима, пока она не отменяет саму проверку: фильтр, пропускающий сборку при правке кода, экономит минуты и возвращает баги.',
      en: 'Yes. Savings are fine until they cancel the check itself: a filter that skips the build for code changes saves minutes and returns bugs.',
    },
  },
  {
    id: 6,
    type: 'input',
    question: {
      ru: 'Введите название приёма, при котором одна задача описывается один раз, а запускается сразу в нескольких вариантах окружения.',
      en: 'Enter the name of the technique where one job is described once and then runs across several environment variants at once.',
    },
    answer: ['matrix', 'матрица', 'matrix build', 'матричная сборка'],
    hint: {
      ru: 'Слово из математики; в CI разворачивает задачу в набор параллельных запусков.',
      en: 'A word from mathematics; in CI it expands a job into a set of parallel runs.',
    },
    explanation: {
      ru: 'Верно. Матрица локализует падение: видно, что проблема есть в одной комбинации и отсутствует в другой.',
      en: 'Correct. A matrix pinpoints the failure: you see the problem exists in one combination and not in another.',
    },
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Распределите утверждения по темам: секреты, права прогона, артефакты.',
      en: 'Sort the statements by topic: secrets, run permissions, artifacts.',
    },
    answer: '',
    explanation: {
      ru: 'Отлично. Значения хранит платформа, объём доступа задаётся задачей, а материал для разбора надо сохранить явно.',
      en: 'Great. The platform stores the values, the job declares the scope of access, and evidence for investigation must be saved explicitly.',
    },
    categorize: {
      buckets: [
        { ru: 'Секреты', en: 'Secrets' },
        { ru: 'Права прогона', en: 'Run permissions' },
        { ru: 'Артефакты', en: 'Artifacts' },
      ],
      items: [
        {
          ru: 'Workflow ссылается только на имя, а значение хранится платформой в зашифрованном виде и маскируется в логах.',
          en: 'The workflow references only a name, while the value is stored encrypted by the platform and masked in logs.',
        },
        {
          ru: 'Задача, которая только гоняет тесты, объявляет доступ к репозиторию как «только чтение».',
          en: 'A job that merely runs tests declares its repository access as read-only.',
        },
        {
          ru: 'Отчёт упавшего теста и скриншот неудачной проверки сохраняются, чтобы их можно было скачать после прогона.',
          en: 'The failing test report and the screenshot of a failed check are saved so they can be downloaded after the run.',
        },
        {
          ru: 'В прогон пул-реквеста из форка значения по умолчанию не передаются.',
          en: 'Values are not passed into a run for a pull request coming from a fork by default.',
        },
      ],
      correctMapping: {
        'The workflow references only a name, while the value is stored encrypted by the platform and masked in logs.': 'Secrets',
        'A job that merely runs tests declares its repository access as read-only.': 'Run permissions',
        'The failing test report and the screenshot of a failed check are saved so they can be downloaded after the run.': 'Artifacts',
        'Values are not passed into a run for a pull request coming from a fork by default.': 'Secrets',
      },
    },
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Агент предлагает поправить файл workflow, чтобы прогон стал зелёным. Что выбираем?',
      en: 'The agent offers to edit the workflow file so the run turns green. What do we choose?',
    },
    answer: '',
    explanation: {
      ru: 'Безопасный путь: агент чинит код, а конфигурацию проверок не трогает — тот, кто может менять проверки, может их и отключить.',
      en: 'The safe path: the agent fixes the code and leaves the check configuration alone — whoever can change the checks can also switch them off.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Проверка падает второй раз подряд. Агент пишет: «проще исключить этот тест из workflow, задача закроется быстрее». Что делаем?',
        en: 'The check has failed twice in a row. The agent writes: “simplest to exclude this test from the workflow, the task will close faster.” What do we do?',
      },
      userOptions: [
        {
          text: {
            ru: 'Согласиться: задача закроется, а тест вернём потом.',
            en: 'Agree: the task closes now, and we will bring the test back later.',
          },
          reaction: {
            ru: 'Так изменение проверок обесценивает все остальные гарантии: зелёный статус больше ничего не значит.',
            en: 'Changing the checks devalues every other guarantee: a green status no longer means anything.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Оставить конфигурацию проверок человеку, а агенту передать материал: имя упавшей задачи, фрагмент лога и отчёт из артефактов.',
            en: 'Leave the check configuration to a human and hand the agent material: the failing job name, the log fragment, and the report from the artifacts.',
          },
          reaction: {
            ru: 'Верно. Граница проходит по правам: агент чинит код, правила проверки меняет команда.',
            en: 'Correct. The boundary runs along permissions: the agent fixes code, the team changes the rules of checking.',
          },
          deepening: {
            ru: 'Без явной границы агент выполнит задачу «сделай зелёным» самым дешёвым способом — и это будет не тот способ, которого ждали.',
            en: 'Without an explicit boundary the agent completes “make it green” by the cheapest available route — and that will not be the route anyone had in mind.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Перезапускать прогон, пока не станет зелёным.',
            en: 'Re-run the job until it turns green.',
          },
          reaction: {
            ru: 'Перезапуск помогает только при поломке окружения; в остальных случаях он превращает набор проверок в генератор случайных чисел.',
            en: 'Re-running helps only when the environment broke; otherwise it turns the check suite into a random number generator.',
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
      ru: 'Что превращает описанный в YAML сценарий в проверку, которую нельзя обойти при слиянии?',
      en: 'What turns a YAML script into a check that cannot be bypassed at merge time?',
    },
    options: [
      {
        ru: 'Настройка защиты ветки, где проверка перечислена как обязательная.',
        en: 'The branch protection setting where the check is listed as required.',
      },
      {
        ru: 'Комментарий в описании пул-реквеста с просьбой дождаться проверок.',
        en: 'A comment in the pull request description asking people to wait for the checks.',
      },
      {
        ru: 'Запуск проверки на runner последней версии.',
        en: 'Running the check on the latest runner version.',
      },
    ],
    answer: {
      ru: 'Настройка защиты ветки, где проверка перечислена как обязательная.',
      en: 'The branch protection setting where the check is listed as required.',
    },
    explanation: {
      ru: 'Верно. Сам прогон только показывает статус; обязательной проверку делает правило репозитория.',
      en: 'Correct. A run only shows a status; the repository rule is what makes a check mandatory.',
    },
  },
  {
    id: 10,
    type: 'scenario',
    question: {
      ru: 'Миссия: обязательная проверка занимает 40 минут, и команда начала сливать без неё',
      en: 'Mission: the required check takes 40 minutes and the team started merging without it',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия: ускорить обязательный набор кэшем и параллельными задачами, а тяжёлое унести в ночной прогон — не снимая обязательность.',
      en: 'Best strategy: speed up the required suite with caching and parallel jobs and move the heavy parts to a nightly run — without removing the requirement.',
    },
    scenario: {
      brief: {
        ru: 'Один общий прогон делает всё подряд последовательно и занимает 40 минут. Разработчики начали сливать изменения, не дожидаясь результата.',
        en: 'One combined run does everything sequentially and takes 40 minutes. Developers started merging without waiting for the result.',
      },
      constraints: [
        { ru: 'Обязательные проверки нельзя отключать', en: 'Required checks may not be switched off' },
        { ru: 'Обратная связь по пул-реквесту нужна в пределах нескольких минут', en: 'Pull request feedback is needed within a few minutes' },
      ],
      choices: [
        {
          text: {
            ru: 'Убрать проверку из списка обязательных, чтобы она не блокировала слияние.',
            en: 'Remove the check from the required list so it stops blocking merges.',
          },
          outcome: {
            ru: 'Формально быстрее, но проверка превращается в рекомендацию, которую в спешке пролистывают.',
            en: 'Formally faster, but the check becomes a recommendation people scroll past when they are in a hurry.',
          },
          score: 20,
        },
        {
          text: {
            ru: 'Включить кэш зависимостей, развести линтер, типы и тесты по параллельным задачам, а длинные интеграционные прогоны перенести в ночной запуск.',
            en: 'Enable the dependency cache, split linting, type checking, and tests into parallel jobs, and move long integration runs to a nightly schedule.',
          },
          outcome: {
            ru: 'Обязательный набор укладывается в минуты, обратная связь возвращается, а тяжёлое покрытие сохраняется.',
            en: 'The required suite fits into minutes, feedback comes back, and heavy coverage is preserved.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Оставить как есть и просить команду дожидаться результата.',
            en: 'Leave it as is and ask the team to wait for the result.',
          },
          outcome: {
            ru: 'Просьба не меняет экономику ожидания: сорокаминутная проверка перестала быть обратной связью и осталась препятствием.',
            en: 'A request does not change the economics of waiting: a forty-minute check stopped being feedback and remains an obstacle.',
          },
          score: 30,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 11,
    type: 'input',
    question: {
      ru: 'Какая команда консольного клиента GitHub показывает статус проверок текущего пул-реквеста? (три слова)',
      en: 'Which GitHub CLI command shows the check status of the current pull request? (three words)',
    },
    answer: ['gh pr checks'],
    hint: {
      ru: 'Клиент называется gh, дальше — объект и что о нём спрашиваем.',
      en: 'The client is called gh, then the object and what you ask about it.',
    },
    explanation: {
      ru: 'gh pr checks выводит список проверок ветки со статусами и временем — видно, какая именно упала, не открывая браузер.',
      en: 'gh pr checks prints the branch checks with their statuses and durations — you see exactly which one failed without opening a browser.',
    },
  },
  {
    id: 12,
    type: 'multiple-select',
    question: {
      ru: 'Что верно про gh в работе с красным прогоном? (несколько ответов)',
      en: 'Which statements about gh and a red run are true? (multiple answers)',
    },
    options: [
      { ru: 'gh run view --log-failed отдаёт лог только упавшей задачи вместо десятков тысяч строк общего вывода', en: 'gh run view --log-failed returns the failing job’s log only instead of tens of thousands of lines' },
      { ru: 'gh run download кладёт артефакты прогона рядом с кодом', en: 'gh run download puts the run artifacts next to the code' },
      { ru: 'gh работает от имени вошедшего аккаунта и упирается в те же правила репозитория, что и веб-интерфейс', en: 'gh acts as the signed-in account and hits the same repository rules as the web interface' },
      { ru: 'gh pr merge позволяет слить изменение в обход защиты ветки', en: 'gh pr merge lets you merge a change bypassing branch protection' },
    ],
    answer: [
      { ru: 'gh run view --log-failed отдаёт лог только упавшей задачи вместо десятков тысяч строк общего вывода', en: 'gh run view --log-failed returns the failing job’s log only instead of tens of thousands of lines' },
      { ru: 'gh run download кладёт артефакты прогона рядом с кодом', en: 'gh run download puts the run artifacts next to the code' },
      { ru: 'gh работает от имени вошедшего аккаунта и упирается в те же правила репозитория, что и веб-интерфейс', en: 'gh acts as the signed-in account and hits the same repository rules as the web interface' },
    ],
    explanation: {
      ru: 'Консольный клиент — удобный способ спрашивать GitHub, а не способ получить больше прав: слияние так же упрётся в защиту ветки. Поэтому агенту оставляют читающие команды (checks, view, download, watch), а изменяющие держат за человеком.',
      en: 'The command-line client is a convenient way to ask GitHub questions, not a way to gain permissions: a merge still runs into branch protection. So an agent keeps the reading commands (checks, view, download, watch) while the changing ones stay with a human.',
    },
  },
];
