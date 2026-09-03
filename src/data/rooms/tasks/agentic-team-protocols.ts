import { LocalizedTask } from '../types';

export const agenticTeamProtocolsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Чем командный протокол отличается от «мы так обычно делаем»?',
      en: 'What separates a team protocol from “this is how we usually do it”?'
    },
    options: [
      { ru: 'Протокол записан и продолжает действовать, когда автора договорённости нет рядом, а сессия агента уже закрыта', en: 'A protocol is written down and keeps working when the person who agreed it is away and the agent session is already closed' },
      { ru: 'Протокол хранится в голове тимлида, который отвечает на вопросы', en: 'A protocol lives in the head of the team lead, who answers questions' },
      { ru: 'Протокол — это набор настроек агента, одинаковый у всех', en: 'A protocol is a set of agent settings that everyone shares' }
    ],
    answer: {
      ru: 'Протокол записан и продолжает действовать, когда автора договорённости нет рядом, а сессия агента уже закрыта',
      en: 'A protocol is written down and keeps working when the person who agreed it is away and the agent session is already closed'
    },
    explanation: {
      ru: 'Верно. Устная договорённость держится, пока её автор в комнате. С агентами появляется второй отсутствующий автор — сессия, у которой к вечеру нет памяти. Протокол — то, что переживает обоих.',
      en: 'Correct. A verbal agreement holds while its author is in the room. With agents there is a second absent author — the session, which has no memory by the evening. A protocol is what outlives both.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Коллега отвечает на замечание в ревью: «Это не я писал, это агент». Как команда решает вопрос об ответственности за код?',
      en: 'A colleague answers a review comment with “I did not write that, the agent did”. How does the team settle who is accountable for the code?'
    },
    options: [
      { ru: 'За изменение отвечает человек, который открыл пул-реквест и нажал «слить», — независимо от того, кто набрал строки', en: 'The change is owned by the person who opened the pull request and pressed merge — regardless of who typed the lines' },
      { ru: 'За изменение отвечает поставщик модели, чей агент его написал', en: 'The change is owned by the model provider whose agent wrote it' },
      { ru: 'Ответственность делится поровну между всеми, кто участвовал в обсуждении', en: 'Accountability is split evenly between everyone who took part in the discussion' }
    ],
    answer: {
      ru: 'За изменение отвечает человек, который открыл пул-реквест и нажал «слить», — независимо от того, кто набрал строки',
      en: 'The change is owned by the person who opened the pull request and pressed merge — regardless of who typed the lines'
    },
    explanation: {
      ru: 'Верно. У инструмента нет ответственности: его нельзя спросить через месяц и нельзя разбудить ночью. Фраза «это агент» не принимается — точно так же, как не принимается «это автодополнение».',
      en: 'Correct. A tool carries no accountability: it cannot be asked a month later and cannot be paged at night. “The agent did it” is not accepted — just as “autocomplete did it” is not.'
    }
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите четыре поля, которые шаблон пул-реквеста требует от изменения, написанного агентом.',
      en: 'Select the four fields the pull-request template requires from an agent-written change.'
    },
    options: [
      { ru: 'Задача так, как она была поставлена, — ссылка на тикет или сам контракт', en: 'The task as it was given — a link to the ticket or the contract itself' },
      { ru: 'Что изменилось, словами человека, а не пересказом агента', en: 'What changed, in the human’s own words rather than the agent’s summary' },
      { ru: 'Что проверено и как: какие команды прогнаны самим автором', en: 'What was verified and how: which commands the author ran themselves' },
      { ru: 'Что не проверено и известные пробелы', en: 'What was not verified and the known gaps' },
      { ru: 'Полная расшифровка диалога с агентом', en: 'The full transcript of the conversation with the agent' },
      { ru: 'Название и версия модели, которая писала код', en: 'The name and version of the model that wrote the code' }
    ],
    answer: [
      { ru: 'Задача так, как она была поставлена, — ссылка на тикет или сам контракт', en: 'The task as it was given — a link to the ticket or the contract itself' },
      { ru: 'Что изменилось, словами человека, а не пересказом агента', en: 'What changed, in the human’s own words rather than the agent’s summary' },
      { ru: 'Что проверено и как: какие команды прогнаны самим автором', en: 'What was verified and how: which commands the author ran themselves' },
      { ru: 'Что не проверено и известные пробелы', en: 'What was not verified and the known gaps' }
    ],
    explanation: {
      ru: 'Четыре поля отвечают на вопросы ревьюера: что просили, что сделали, чему можно верить, где искать. Расшифровка диалога и версия модели — не мусор, но они не заменяют ни одного из четырёх ответов.',
      en: 'The four fields answer the reviewer’s questions: what was asked, what was done, what can be trusted, where to look. The transcript and the model version are not junk, but they replace none of the four answers.'
    }
  },
  {
    id: 4,
    type: 'input',
    question: {
      ru: 'По исследованию Cisco и SmartBear, после какого размера изменения (в строках кода) доля найденных на ревью дефектов резко падает? (число)',
      en: 'According to the Cisco and SmartBear study, beyond what change size (in lines of code) does the share of defects found in review drop sharply? (a number)'
    },
    answer: ['400', '400 строк', '400 lines', '400 loc', '400 LOC'],
    hint: {
      ru: 'Верхняя граница диапазона, который в теории назван рабочим для одного ревью.',
      en: 'The upper bound of the range the theory calls workable for one review.'
    },
    explanation: {
      ru: '400 строк. В диапазоне 200–400 строк ревьюеры находили 70–90% дефектов; дальше внимание расходится, и это не зависит от того, кто написал код — человек или агент.',
      en: '400 lines. In the 200–400 line range reviewers found 70–90% of defects; beyond it attention thins out, and that does not depend on whether a human or an agent wrote the code.'
    }
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Восстановите порядок рубрики ревью агентского изменения — от первого вопроса к решению.',
      en: 'Restore the order of the review rubric for an agent-written change — from the first question to the decision.'
    },
    initialItems: [
      { ru: 'Перепроверить одно из утверждений «проверено» своими руками', en: 'Re-run one of the “verified” claims with your own hands' },
      { ru: 'Совпадает ли diff с задачей — нет ли лишнего', en: 'Does the diff match the task — is there anything extra' },
      { ru: 'Вынести решение: одобрить, вернуть или «слишком большое — разделить»', en: 'Decide: approve, return, or “too large — split”' },
      { ru: 'Три файла-сигнала: конфигурация проверок, тесты, зависимости', en: 'The three signal files: checks configuration, tests, dependencies' },
      { ru: 'Поискать дубли: не написал ли агент то, что в репозитории уже есть', en: 'Look for duplicates: did the agent rewrite something the repository already has' }
    ],
    correctOrder: [
      { ru: 'Совпадает ли diff с задачей — нет ли лишнего', en: 'Does the diff match the task — is there anything extra' },
      { ru: 'Три файла-сигнала: конфигурация проверок, тесты, зависимости', en: 'The three signal files: checks configuration, tests, dependencies' },
      { ru: 'Перепроверить одно из утверждений «проверено» своими руками', en: 'Re-run one of the “verified” claims with your own hands' },
      { ru: 'Поискать дубли: не написал ли агент то, что в репозитории уже есть', en: 'Look for duplicates: did the agent rewrite something the repository already has' },
      { ru: 'Вынести решение: одобрить, вернуть или «слишком большое — разделить»', en: 'Decide: approve, return, or “too large — split”' }
    ],
    answer: '',
    explanation: {
      ru: 'Порядок идёт от дешёвого к дорогому. Лишнее в diff и опасные файлы видны за минуту и часто заканчивают ревью раньше, чем начнётся чтение логики; дубли требуют знать репозиторий, поэтому они ближе к концу.',
      en: 'The order runs from cheap to expensive. Extra changes and dangerous files are visible within a minute and often end the review before the logic is read; duplicates require knowing the repository, so they sit near the end.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Почему одобрение человека, который сам вёл агента, не считается ревью?',
      en: 'Why does approval from the person who drove the agent not count as a review?'
    },
    options: [
      { ru: 'Он читал рассказ агента о том, что сделано, и оценивает результат через этот рассказ, а не через diff', en: 'They read the agent’s account of what was done and judge the result through that account rather than through the diff' },
      { ru: 'У него нет прав на слияние в защищённую ветку', en: 'They lack merge rights on the protected branch' },
      { ru: 'Правила площадки запрещают одобрять собственный пул-реквест', en: 'The platform’s rules forbid approving your own pull request' }
    ],
    answer: {
      ru: 'Он читал рассказ агента о том, что сделано, и оценивает результат через этот рассказ, а не через diff',
      en: 'They read the agent’s account of what was done and judge the result through that account rather than through the diff'
    },
    explanation: {
      ru: 'Верно. В исследовании METR разработчики были уверены, что стали быстрее на 20%, а замер показал, что стали медленнее на 19%. Собственное ощущение «всё хорошо» ненадёжно, поэтому вторая пара глаз должна не видеть переписку с агентом.',
      en: 'Correct. In the METR study developers were convinced they had become 20% faster, while the measurement showed they had become 19% slower. One’s own sense that “it is fine” is unreliable, so the second pair of eyes must not have seen the conversation with the agent.'
    }
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'У команды три места для записей. Разложите записи по тому, куда каждая из них попадает.',
      en: 'The team keeps records in three places. Sort each record by where it belongs.'
    },
    answer: '',
    explanation: {
      ru: 'Записка о передаче — про состояние прямо сейчас и живёт до закрытия задачи. Журнал решений — про «почему» и живёт всегда. Файл правил — про то, как действует каждый агент каждого участника команды.',
      en: 'A handoff note is about the state right now and lives until the task closes. The decision log is about “why” and lives forever. The rules file is about how every agent of every teammate behaves.'
    },
    categorize: {
      items: [
        { ru: 'Миграция падает на Node 22, причина не найдена, следующий шаг — прогнать её отдельно', en: 'The migration fails on Node 22, cause not found, next step is to run it on its own' },
        { ru: 'Из двух вариантов агент трижды ломал первый — второй работает, ссылка на ветку', en: 'Of the two options the agent broke the first three times — the second works, link to the branch' },
        { ru: 'В марте выбрали PostgreSQL вместо документной базы, потому что отчёты требуют соединений таблиц', en: 'In March PostgreSQL was chosen over a document store because the reports need table joins' },
        { ru: 'Переход на другой ORM отклонён: выигрыш меньше стоимости миграции', en: 'A switch to another ORM was rejected: the gain is smaller than the migration cost' },
        { ru: 'Агент не правит файлы в .github/workflows', en: 'The agent does not edit files under .github/workflows' },
        { ru: 'Каждый пул-реквест несёт четыре поля шаблона', en: 'Every pull request carries the four template fields' }
      ],
      buckets: [
        { ru: 'Записка о передаче', en: 'Handoff note' },
        { ru: 'Журнал решений', en: 'Decision log' },
        { ru: 'Файл правил', en: 'Rules file' }
      ],
      correctMapping: {
        'The migration fails on Node 22, cause not found, next step is to run it on its own': 'Handoff note',
        'Of the two options the agent broke the first three times — the second works, link to the branch': 'Handoff note',
        'In March PostgreSQL was chosen over a document store because the reports need table joins': 'Decision log',
        'A switch to another ORM was rejected: the gain is smaller than the migration cost': 'Decision log',
        'The agent does not edit files under .github/workflows': 'Rules file',
        'Every pull request carries the four template fields': 'Rules file'
      }
    }
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Решение из журнала устарело: команда переходит с одной очереди сообщений на другую. Что делают с прежней записью?',
      en: 'A logged decision is now outdated: the team is moving from one message queue to another. What happens to the old record?'
    },
    options: [
      { ru: 'Её не трогают, а рядом пишут новую запись с пометкой, что она заменяет прежнюю', en: 'It is left untouched, and a new record is written next to it marking that it supersedes the old one' },
      { ru: 'Её правят на месте, чтобы журнал отражал текущее положение дел', en: 'It is edited in place so the log reflects the current state of affairs' },
      { ru: 'Её удаляют, чтобы агент не прочитал устаревшее решение', en: 'It is deleted so an agent does not read an outdated decision' }
    ],
    answer: {
      ru: 'Её не трогают, а рядом пишут новую запись с пометкой, что она заменяет прежнюю',
      en: 'It is left untouched, and a new record is written next to it marking that it supersedes the old one'
    },
    explanation: {
      ru: 'Верно. Журнал решений ценен историей: через год кто-то спросит, почему выбрали первую очередь и почему от неё ушли. Правка на месте стирает первую половину ответа, удаление — обе.',
      en: 'Correct. A decision log is valuable for its history: a year on, someone will ask why the first queue was chosen and why the team left it. Editing in place erases the first half of the answer; deleting erases both.'
    }
  },
  {
    id: 9,
    type: 'multiple-select',
    question: {
      ru: 'Выберите правила, по которым команда меняет общий файл правил для агентов.',
      en: 'Select the rules by which the team changes the shared rules file for agents.'
    },
    options: [
      { ru: 'Изменение идёт через пул-реквест с ревью владельца файла, а не внутри коммита агента', en: 'A change goes through a pull request reviewed by the file’s owner, not inside an agent’s commit' },
      { ru: 'У каждого правила записаны причина и дата', en: 'Every rule carries a reason and a date' },
      { ru: 'Файл вынесен из зоны записи агента', en: 'The file sits outside the agent’s write zone' },
      { ru: 'Правила, которые ни разу не сработали, регулярно удаляют', en: 'Rules that never fire are removed on a regular schedule' },
      { ru: 'Любой агент дописывает правило, когда находит его полезным', en: 'Any agent appends a rule whenever it finds one useful' },
      { ru: 'Однажды принятое правило остаётся навсегда', en: 'Once adopted, a rule stays forever' }
    ],
    answer: [
      { ru: 'Изменение идёт через пул-реквест с ревью владельца файла, а не внутри коммита агента', en: 'A change goes through a pull request reviewed by the file’s owner, not inside an agent’s commit' },
      { ru: 'У каждого правила записаны причина и дата', en: 'Every rule carries a reason and a date' },
      { ru: 'Файл вынесен из зоны записи агента', en: 'The file sits outside the agent’s write zone' },
      { ru: 'Правила, которые ни разу не сработали, регулярно удаляют', en: 'Rules that never fire are removed on a regular schedule' }
    ],
    explanation: {
      ru: 'Файл правил читает каждый агент каждого участника, поэтому это общая конфигурация, а не личная заметка. Отсюда владелец, ревью, причина с датой и чистка: правило без причины некому защитить, а разросшийся файл перестают соблюдать.',
      en: 'Every agent of every teammate reads the rules file, so it is shared configuration rather than a personal note. Hence the owner, the review, the reason with a date, and the pruning: a rule without a reason has nobody to defend it, and a bloated file stops being followed.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Какая из метрик комнаты говорит, удерживают ли протоколы стабильность поставки, а не только её скорость?',
      en: 'Which of the room’s metrics tells whether the protocols hold delivery stability rather than only its speed?'
    },
    options: [
      { ru: 'Доля изменений, откаченных в течение недели после слияния', en: 'The share of changes rolled back within a week of merging' },
      { ru: 'Число пул-реквестов, открытых за день', en: 'The number of pull requests opened per day' },
      { ru: 'Число строк, которые агенты сгенерировали за месяц', en: 'The number of lines the agents generated in a month' }
    ],
    answer: {
      ru: 'Доля изменений, откаченных в течение недели после слияния',
      en: 'The share of changes rolled back within a week of merging'
    },
    explanation: {
      ru: 'Верно. Отчёт DORA за 2024 год связал рост внедрения ИИ на 25% со снижением стабильности поставки на 7,2%. Число пул-реквестов и строк измеряет объём, а откаты — то, сколько объёма пришлось вернуть.',
      en: 'Correct. The 2024 DORA report linked a 25% rise in AI adoption to a 7.2% drop in delivery stability. Pull-request and line counts measure volume; rollbacks measure how much of that volume had to be undone.'
    }
  },
  {
    id: 11,
    type: 'mentor',
    question: { ru: 'Одобрить до обеда', en: 'Approve before lunch' },
    answer: '',
    explanation: {
      ru: 'Зелёные проверки говорят, что код запускается, а не что он должен существовать. 1800 строк не читаются одним ревью, и ревью водителя агента не считается. Протокол даёт готовый ответ: разделить, заполнить четыре поля, перепроверить одно утверждение.',
      en: 'Green checks say the code runs, not that it should exist. 1,800 lines cannot be read in one review, and the agent driver’s review does not count. The protocol supplies the answer: split, fill in the four fields, re-run one claim.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега пишет: «Агент за вечер сделал всю фичу — 1800 строк, все проверки зелёные. Я сам всё просмотрел, пул-реквест открыт, одобри, пожалуйста, до обеда». Что ответите?',
        en: 'A colleague writes: “The agent did the whole feature in one evening — 1,800 lines, all checks green. I looked through everything myself, the pull request is open, please approve before lunch.” What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Одобрить: проверки зелёные, автор всё просмотрел, задерживать нет причин.', en: 'Approve: the checks are green, the author looked through everything, there is no reason to hold it.' },
          reaction: {
            ru: 'Нет. Проверки подтверждают, что код запускается, а не что он делает то, что просили, и ничего сверх. Автор вёл агента и смотрит на diff через его рассказ — это как раз тот случай, ради которого нужна вторая пара глаз.',
            en: 'No. The checks confirm that the code runs, not that it does what was asked and nothing beyond. The author drove the agent and sees the diff through its account — exactly the case the second pair of eyes exists for.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Попросить разрезать изменение на пул-реквесты размером с задачу, заполнить четыре поля шаблона и назвать, какие проверки автор прогнал сам; после этого читать по рубрике.', en: 'Ask for the change to be cut into task-sized pull requests with the four template fields filled in and the checks the author ran themselves named; then read by the rubric.' },
          reaction: {
            ru: 'Именно. 1800 строк — за пределами того, что одно ревью находит; разрезание по коммитам — работа автора, а не ревьюера. Поля шаблона превращают «я всё просмотрел» в перечень, который можно перепроверить.',
            en: 'Exactly. 1,800 lines are beyond what one review can find; cutting by commits is the author’s job, not the reviewer’s. The template fields turn “I looked through everything” into a list that can be re-checked.'
          },
          isCorrect: true
        },
        {
          text: { ru: 'Отклонить: изменения, написанные агентом, в этот репозиторий не принимаются.', en: 'Reject: agent-written changes are not accepted into this repository.' },
          reaction: {
            ru: 'Мимо цели. Протоколы нужны, чтобы принимать такие изменения безопасно, а не чтобы их запрещать; запрет к тому же не проверяем — автор просто перестанет об этом говорить.',
            en: 'Off target. The protocols exist so that such changes can be accepted safely, not so they can be banned; a ban is also uncheckable — the author will simply stop mentioning it.'
          },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 12,
    type: 'scenario',
    question: {
      ru: 'Миссия: конец дня, задача не закрыта',
      en: 'Mission: end of day, the task is not finished'
    },
    answer: '',
    explanation: {
      ru: 'Сессия агента закроется и унесёт контекст; человек к утру забудет половину. Единственное, что переживёт ночь, — записка о передаче в условленном месте: состояние, следующий шаг, ловушки, команды для воспроизведения — словами человека, с пометкой, что проверено им самим.',
      en: 'The agent session will close and take its context with it; the human will have forgotten half by morning. The only thing that survives the night is a handoff note in the agreed place: state, next step, traps, commands to reproduce — in the human’s words, marking what they verified themselves.'
    },
    scenario: {
      brief: {
        ru: 'Вечер. Вы полдня вели агента над задачей: половина сделана, миграция падает в CI, причину вы нашли только что и ещё не проверили. Завтра вас нет, задачу подхватит коллега. Сессию агента вы сейчас закроете. Что делаете первым?',
        en: 'Evening. You spent half a day driving an agent on a task: half is done, the migration fails in CI, you found the likely cause just now and have not checked it yet. You are away tomorrow, and a colleague will pick the task up. You are about to close the agent session. What is your first move?'
      },
      constraints: [
        { ru: 'У команды есть условленное место для записок о передаче — описание пул-реквеста', en: 'The team has an agreed place for handoff notes — the pull-request description' },
        { ru: 'Контекст сессии агента после закрытия недоступен', en: 'The agent session’s context is unavailable after it closes' },
        { ru: 'Коллега не участвовал в задаче и не видел переписку', en: 'The colleague was not on the task and has not seen the conversation' }
      ],
      choices: [
        {
          text: { ru: 'Написать записку о передаче в описание пул-реквеста: что сделано, что падает и на чём, предполагаемая причина с пометкой «не проверено», следующий шаг и команды для воспроизведения', en: 'Write a handoff note into the pull-request description: what is done, what fails and where, the suspected cause marked “not verified”, the next step, and the commands to reproduce' },
          outcome: {
            ru: 'Верно. Коллега утром начинает с того места, где вы остановились, и знает, чему верить: пометка «не проверено» бережёт его от того, чтобы принять вашу догадку за факт. Записка в условленном месте — единственное, что переживёт закрытие сессии.',
            en: 'Correct. In the morning the colleague starts where you stopped and knows what to trust: the “not verified” mark keeps them from taking your guess for a fact. A note in the agreed place is the only thing that survives the session closing.'
          },
          score: 95
        },
        {
          text: { ru: 'Попросить агента написать итог сессии и вставить его в описание как есть', en: 'Ask the agent to write a session summary and paste it into the description as is' },
          outcome: {
            ru: 'Половина дела. Итог агента — пересказ, в котором «проверено» и «кажется» неотличимы, а падающая миграция может быть описана как «требует небольшой доработки». Записку пишет человек и помечает, что проверял сам; итог агента годится как черновик.',
            en: 'Half the job. An agent’s summary is an account in which “verified” and “probably” look alike, and the failing migration may come out as “needs a small follow-up”. The human writes the note and marks what they checked themselves; the agent’s summary serves as a draft.'
          },
          score: 40
        },
        {
          text: { ru: 'Закрыть сессию, а утром позвонить коллеге и рассказать по памяти', en: 'Close the session and call the colleague in the morning to explain from memory' },
          outcome: {
            ru: 'К утру контекст сессии исчез, а половина деталей — команды, названия файлов, что именно падало — стёрлась и у вас. Устная передача не переживает ни ночь, ни отпуск, ни второго коллегу, которому тоже понадобится эта задача.',
            en: 'By morning the session context is gone, and half the details — commands, file names, what exactly failed — have faded for you too. A verbal handoff survives neither a night, nor a holiday, nor the second colleague who will also need this task.'
          },
          score: 15
        },
        {
          text: { ru: 'Сделать force-push незаконченной ветки в main, чтобы коллега точно её увидел', en: 'Force-push the unfinished branch to main so the colleague is sure to see it' },
          outcome: {
            ru: 'Худший ход. Незаконченная работа с падающей миграцией попадает в общую ветку, откуда её увидят все и, возможно, выкатят. Видимость обеспечивает описание пул-реквеста, а не слияние.',
            en: 'The worst move. Unfinished work with a failing migration lands on the shared branch, where everyone sees it and someone may deploy it. Visibility comes from the pull-request description, not from merging.'
          },
          score: 5
        }
      ],
      passingScore: 60
    }
  }
];
