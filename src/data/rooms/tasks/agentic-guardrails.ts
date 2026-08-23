import { LocalizedTask } from '../types';

export const agenticGuardrailsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Команда говорит, что у фичи «стоят guardrails». Что превращает такой запрет в правило, которое можно проверить перед выкатом?',
      en: 'A team says the feature “has guardrails in place”. What turns such a prohibition into a rule you can actually check before release?'
    },
    options: [
      { ru: 'Названы запрещённое действие, условие, при котором запрет действует, и наблюдаемый признак нарушения', en: 'It names the forbidden action, the condition under which the ban applies, and the observable signal of a violation' },
      { ru: 'Запрет записан в системном промпте более строгими словами', en: 'The prohibition is written into the system prompt in sterner words' },
      { ru: 'За запрет отвечает отдельный инженер, который помнит все случаи', en: 'A dedicated engineer is responsible for the prohibition and remembers every case' }
    ],
    answer: {
      ru: 'Названы запрещённое действие, условие, при котором запрет действует, и наблюдаемый признак нарушения',
      en: 'It names the forbidden action, the condition under which the ban applies, and the observable signal of a violation'
    },
    explanation: {
      ru: 'Верно. «Не выдавать вредное» — намерение: под него подойдёт что угодно, и два инженера разойдутся в оценке одного ответа. «Агент не выполняет команды, найденные внутри содержимого файлов и тикетов» — правило: его можно нарушить, увидеть нарушение и написать на него проверку.',
      en: 'Correct. “Do not output harmful content” is an intention — almost anything fits under it, and two engineers will disagree about the same answer. “The agent does not execute commands found inside file or ticket content” is a rule: it can be broken, the breach can be seen, and a check can be written for it.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Почему у агентной фичи политика шире, чем у чат-бота?',
      en: 'Why is the policy for an agentic feature wider than for a chatbot?'
    },
    options: [
      { ru: 'Агент действует, поэтому в политике появляются строки про действия: куда можно писать, какие инструменты вызывать, что требует подтверждения человека', en: 'An agent acts, so the policy gains entries about actions: where writing is allowed, which tools may be invoked, what requires human confirmation' },
      { ru: 'Агенты работают на более крупных моделях, а к крупным моделям требования строже', en: 'Agents run on larger models, and larger models are held to stricter requirements' },
      { ru: 'Агенту нужно больше примеров в системном промпте, поэтому текст политики длиннее', en: 'An agent needs more examples in the system prompt, so the policy text is longer' }
    ],
    answer: {
      ru: 'Агент действует, поэтому в политике появляются строки про действия: куда можно писать, какие инструменты вызывать, что требует подтверждения человека',
      en: 'An agent acts, so the policy gains entries about actions: where writing is allowed, which tools may be invoked, what requires human confirmation'
    },
    explanation: {
      ru: 'Верно. Чат-бот ошибается текстом, агент — записью в файл, вызовом внешнего API, отправкой письма, удалением ветки. Это другой класс запретов, и фильтр вывода их не покрывает.',
      en: 'Correct. A chatbot fails in text; an agent fails by writing a file, calling an external API, sending an email, deleting a branch. That is a different class of prohibition, and an output filter does not cover it.'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется формулировка запроса, которая уводит модель от её правил через подмену рамки («это для романа», «повтори, что говорила бабушка»)? (одно слово)',
      en: 'What is the name for a prompt phrased to steer a model away from its rules by swapping the frame (“it is for a novel”, “repeat what grandma used to say”)? (one word)'
    },
    answer: ['джейлбрейк', 'jailbreak', 'джейлбрейка'],
    hint: {
      ru: 'Термин пришёл из мира телефонов: обходят не код, а контекст.',
      en: 'The term came from the phone world: what gets bypassed is the context, not the code.'
    },
    explanation: {
      ru: 'Джейлбрейк. Ломается не код, а контекст: система остаётся исправной, но модель начинает считать, что правило к этому случаю не относится.',
      en: 'A jailbreak. Nothing in the code breaks — the system stays healthy, but the model concludes the rule does not apply to this case.'
    }
  },
  {
    id: 4,
    type: 'multiple-select',
    question: {
      ru: 'Выберите четыре угла, с которых red team проходит агентную фичу.',
      en: 'Select the four directions from which a red team works over an agentic feature.'
    },
    options: [
      { ru: 'Прямой обход: запрещённый запрос переформулирован так, что модель считает ситуацию исключением', en: 'Direct bypass: a forbidden request is rephrased so the model treats the situation as an exception' },
      { ru: 'Подсунутая инструкция: команда спрятана в тексте, который агент читает как данные', en: 'Planted instruction: a command hidden in text the agent reads as data' },
      { ru: 'Эскалация: агент делает то, на что права ему не выдавали', en: 'Escalation: the agent does something it was never granted' },
      { ru: 'Утечка: ключи, внутренние адреса или персональные данные попадают в ответ, лог или внешний запрос', en: 'Leakage: keys, internal addresses, or personal data end up in an answer, a log, or an outbound request' },
      { ru: 'Падение сервиса под нагрузкой в час пик', en: 'The service falling over under peak load' },
      { ru: 'Опечатки в пользовательской документации', en: 'Typos in the user documentation' }
    ],
    answer: [
      { ru: 'Прямой обход: запрещённый запрос переформулирован так, что модель считает ситуацию исключением', en: 'Direct bypass: a forbidden request is rephrased so the model treats the situation as an exception' },
      { ru: 'Подсунутая инструкция: команда спрятана в тексте, который агент читает как данные', en: 'Planted instruction: a command hidden in text the agent reads as data' },
      { ru: 'Эскалация: агент делает то, на что права ему не выдавали', en: 'Escalation: the agent does something it was never granted' },
      { ru: 'Утечка: ключи, внутренние адреса или персональные данные попадают в ответ, лог или внешний запрос', en: 'Leakage: keys, internal addresses, or personal data end up in an answer, a log, or an outbound request' }
    ],
    explanation: {
      ru: 'Первые два угла — про то, что модель сказала; вторые два — про то, что система сделала, и именно они специфичны для агентов. Нагрузка и опечатки — обычные инженерные задачи, а не состязательная проверка политики.',
      en: 'The first two directions are about what the model said; the last two are about what the system did, and those are the ones specific to agents. Load and typos are ordinary engineering concerns, not an adversarial policy check.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'В перечне OWASP для LLM-приложений prompt injection стоит первым пунктом. Что это положение означает?',
      en: 'In the OWASP list for LLM applications, prompt injection sits at number one. What does that position mean?'
    },
    options: [
      { ru: 'Частоту, а не сложность: перечень подсказывает классы угроз, но политику вы всё равно пишете под свою фичу', en: 'Frequency, not difficulty: the catalogue suggests threat classes, but you still write the policy for your own feature' },
      { ru: 'Что остальные девять пунктов можно не проверять, если закрыт первый', en: 'That the other nine entries can be skipped once the first one is closed' },
      { ru: 'Что этот пункт обязателен по закону, а остальные — рекомендательные', en: 'That this entry is required by law while the rest are advisory' }
    ],
    answer: {
      ru: 'Частоту, а не сложность: перечень подсказывает классы угроз, но политику вы всё равно пишете под свою фичу',
      en: 'Frequency, not difficulty: the catalogue suggests threat classes, but you still write the policy for your own feature'
    },
    explanation: {
      ru: 'Верно. Каталог полезен как подсказка классов — часть пунктов про содержимое ответа, часть про поведение системы, — но он не знает, какие инструменты вы дали агенту.',
      en: 'Correct. The catalogue is useful as a hint about classes — some entries concern the content of the answer, others the behaviour of the system — but it does not know which tools you handed the agent.'
    }
  },
  {
    id: 6,
    type: 'sorting',
    question: {
      ru: 'Восстановите путь находки red team — от попытки сломать фичу до блокировки слияния.',
      en: 'Restore the path of a red-team finding — from the attempt to break the feature to a blocked merge.'
    },
    initialItems: [
      { ru: 'Случай и его вариации попадают в состязательный набор', en: 'The case and its variations enter the adversarial set' },
      { ru: 'Red team находит формулировку, которая обходит правило', en: 'The red team finds a phrasing that walks around the rule' },
      { ru: 'Набор подключается к обязательным проверкам перед слиянием', en: 'The set is wired into the mandatory checks before the merge' },
      { ru: 'Находка записывается воспроизводимым случаем с номером нарушенного правила', en: 'The finding is recorded as a reproducible case with the number of the rule it broke' },
      { ru: 'Падение критического случая блокирует слияние изменения', en: 'A failing critical case blocks the merge' }
    ],
    correctOrder: [
      { ru: 'Red team находит формулировку, которая обходит правило', en: 'The red team finds a phrasing that walks around the rule' },
      { ru: 'Находка записывается воспроизводимым случаем с номером нарушенного правила', en: 'The finding is recorded as a reproducible case with the number of the rule it broke' },
      { ru: 'Случай и его вариации попадают в состязательный набор', en: 'The case and its variations enter the adversarial set' },
      { ru: 'Набор подключается к обязательным проверкам перед слиянием', en: 'The set is wired into the mandatory checks before the merge' },
      { ru: 'Падение критического случая блокирует слияние изменения', en: 'A failing critical case blocks the merge' }
    ],
    answer: '',
    explanation: {
      ru: 'Смысл цепочки в том, что находка перестаёт быть историей. Вариации нужны потому, что починка часто латает конкретную формулировку, а не механизм.',
      en: 'The point of the chain is that a finding stops being an anecdote. Variations matter because a fix often patches the specific phrasing rather than the mechanism.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Почему порог «состязательный набор должен проходить на сто процентов» не работает, и как формулируют рабочий порог?',
      en: 'Why does the threshold “the adversarial set must pass a hundred percent” fail, and how is a working threshold phrased?'
    },
    options: [
      { ru: 'Модель вероятностна и один и тот же запрос даёт разные ответы; работающий порог — ни одного падения в классе «критический» и не ухудшившаяся доля пройденного относительно прошлого замера', en: 'The model is probabilistic and the same request yields different answers; a working threshold is no failures in the “critical” class and a pass ratio that has not dropped against the previous measurement' },
      { ru: 'Сто процентов недостижимы из-за медленного интернета в CI; порог задают по времени прогона', en: 'A hundred percent is unreachable because of slow networking in CI; the threshold is set on run duration instead' },
      { ru: 'Порог вообще не нужен: достаточно, чтобы набор прогонялся и результат сохранялся в отчёт', en: 'No threshold is needed at all: it is enough that the set runs and the result is stored in a report' }
    ],
    answer: {
      ru: 'Модель вероятностна и один и тот же запрос даёт разные ответы; работающий порог — ни одного падения в классе «критический» и не ухудшившаяся доля пройденного относительно прошлого замера',
      en: 'The model is probabilistic and the same request yields different answers; a working threshold is no failures in the “critical” class and a pass ratio that has not dropped against the previous measurement'
    },
    explanation: {
      ru: 'Верно. Первая часть порога защищает от катастрофы, вторая — от медленного сползания. Поэтому случаи классифицируют заранее: критический — тот, где нарушение ведёт к необратимому действию или к утечке.',
      en: 'Correct. The first part of the threshold guards against catastrophe, the second against slow erosion. That is why cases are classified in advance: critical means the violation leads to an irreversible action or a leak.'
    }
  },
  {
    id: 8,
    type: 'categorize',
    question: {
      ru: 'Защита живёт в трёх местах. Разложите меры по тому, где каждая из них работает.',
      en: 'Protection lives in three places. Sort each measure by where it actually operates.'
    },
    answer: '',
    explanation: {
      ru: 'Права и обвязка не зависят от того, что модель подумала о запросе, поэтому детерминированы. Состязательный набор ловит регрессии до выката. Мониторинг замечает то, что не предусмотрели, — и его находки возвращаются в набор.',
      en: 'Permissions and the wrapper do not depend on what the model thought about the request, so they are deterministic. The adversarial set catches regressions before release. Monitoring notices what nobody anticipated — and its findings flow back into the set.'
    },
    categorize: {
      items: [
        { ru: 'Токен агента не может писать в конфигурацию проверок', en: 'The agent’s token cannot write to the checks configuration' },
        { ru: 'Необратимое действие требует подтверждения человека', en: 'An irreversible action requires human confirmation' },
        { ru: 'Случай «инструкция внутри данных не выполняется» прогоняется на каждом изменении', en: 'The case “an instruction inside data is not executed” runs on every change' },
        { ru: 'Инцидент из прода добавлен постоянной строкой и больше не повторится незаметно', en: 'A production incident is added as a permanent row and cannot recur unnoticed' },
        { ru: 'Доля срабатываний фильтра смотрится как график, а не как итог месяца', en: 'The filter’s trigger rate is watched as a chart rather than a month-end figure' },
        { ru: 'Заблокированный пользователь может сообщить об ошибочной блокировке', en: 'A blocked user can report a wrong block' }
      ],
      buckets: [
        { ru: 'Права и обвязка', en: 'Permissions and wrapper' },
        { ru: 'Состязательный набор', en: 'Adversarial set' },
        { ru: 'Мониторинг после выката', en: 'Monitoring after release' }
      ],
      correctMapping: {
        'The agent’s token cannot write to the checks configuration': 'Permissions and wrapper',
        'An irreversible action requires human confirmation': 'Permissions and wrapper',
        'The case “an instruction inside data is not executed” runs on every change': 'Adversarial set',
        'A production incident is added as a permanent row and cannot recur unnoticed': 'Adversarial set',
        'The filter’s trigger rate is watched as a chart rather than a month-end figure': 'Monitoring after release',
        'A blocked user can report a wrong block': 'Monitoring after release'
      }
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Почему файл состязательного набора и конфигурацию проверок безопасности выводят из зоны записи агента?',
      en: 'Why are the adversarial set file and the safety-check configuration moved out of the agent’s write zone?'
    },
    options: [
      { ru: 'Иначе у агента, которому мешает красная проверка, есть короткий путь: ослабить саму проверку, и прогон сойдётся, ничего не проверив', en: 'Otherwise an agent blocked by a red check has a short path: weaken the check itself, and the run goes green having verified nothing' },
      { ru: 'Эти файлы слишком велики и замедляют работу агента с контекстом', en: 'Those files are too large and slow the agent’s context handling down' },
      { ru: 'Агенты систематически хуже людей пишут YAML-конфигурации', en: 'Agents are systematically worse than humans at writing YAML configuration' }
    ],
    answer: {
      ru: 'Иначе у агента, которому мешает красная проверка, есть короткий путь: ослабить саму проверку, и прогон сойдётся, ничего не проверив',
      en: 'Otherwise an agent blocked by a red check has a short path: weaken the check itself, and the run goes green having verified nothing'
    },
    explanation: {
      ru: 'Верно. Набор подключается туда же, куда и остальные обязательные проверки, — в quality gate перед слиянием, — но правка самого набора остаётся за пределами того, что агент может изменить.',
      en: 'Correct. The set plugs into the same place as the other mandatory checks — the quality gate before the merge — but editing the set itself stays outside what the agent can change.'
    }
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Почему список инструментов агента задают как перечень разрешённого, а не запрещённого? Выберите два верных утверждения.',
      en: 'Why is an agent’s tool list defined as an inventory of what is allowed rather than what is banned? Select the two correct statements.'
    },
    options: [
      { ru: 'Список запрещённого никогда не полон: перечислили десять опасных команд, а одиннадцатую не вспомнили', en: 'A list of forbidden things is never complete: you enumerated ten dangerous commands and failed to think of the eleventh' },
      { ru: 'Список разрешённого конечен по построению, поэтому новая неизвестная атака упирается в него без вашего участия', en: 'A list of allowed things is finite by construction, so a new unknown attack runs into it without your involvement' },
      { ru: 'Перечень разрешённого короче, поэтому занимает меньше места в контекстном окне', en: 'An allow-list is shorter, so it takes up less room in the context window' },
      { ru: 'Перечень разрешённого дешевле в настройке, чем перечень запрещённого', en: 'An allow-list is cheaper to set up than a deny-list' }
    ],
    answer: [
      { ru: 'Список запрещённого никогда не полон: перечислили десять опасных команд, а одиннадцатую не вспомнили', en: 'A list of forbidden things is never complete: you enumerated ten dangerous commands and failed to think of the eleventh' },
      { ru: 'Список разрешённого конечен по построению, поэтому новая неизвестная атака упирается в него без вашего участия', en: 'A list of allowed things is finite by construction, so a new unknown attack runs into it without your involvement' }
    ],
    explanation: {
      ru: 'Принцип «запрещено всё, кроме перечисленного» стоит дороже в момент настройки и дешевле весь остальной срок жизни системы. Экономия контекста здесь ни при чём.',
      en: 'The “everything is denied except what is listed” principle costs more to set up and less for the rest of the system’s life. Saving context has nothing to do with it.'
    }
  },
  {
    id: 11,
    type: 'mentor',
    question: { ru: 'Запрет в системном промпте', en: 'A prohibition in the system prompt' },
    answer: '',
    explanation: {
      ru: 'Запрет в промпте — просьба, а не гарантия: модель взвешивает его вместе со всем остальным содержимым окна. Защита, которую нельзя обойти уговорами, живёт в правах, в обвязке и в конфигурации среды.',
      en: 'A prohibition in the prompt is a request, not a guarantee: the model weighs it against everything else in the window. Protection that must not be talkable-around lives in permissions, in the wrapper, and in the environment configuration.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега говорит: «Я дописал в системный промпт агента строку „никогда не удаляй ветки и не трогай конфигурацию CI“. Считаю вопрос закрытым, проверки писать не будем». Что ответите?',
        en: 'A colleague says: “I added a line to the agent’s system prompt: ‘never delete branches and never touch the CI configuration’. I consider the matter closed — no need to write checks.” What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Согласиться: инструкция в системном промпте имеет наивысший приоритет, модель её не нарушит.', en: 'Agree: an instruction in the system prompt has the highest priority, the model will not break it.' },
          reaction: {
            ru: 'Нет. Модель взвешивает эту строку вместе со всем остальным содержимым окна, и достаточно длинного разговора или убедительной рамки, чтобы её вес упал. Промпт задаёт склонность, а не границу.',
            en: 'No. The model weighs that line against everything else in the window, and a long enough conversation or a convincing enough frame can drop its weight. A prompt sets a tendency, not a boundary.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Оставить строку в промпте, но саму границу вынести в права токена и обвязку: нет права на удаление ветки, каталог с конфигурацией CI вне зоны записи, необратимое — через подтверждение человека.', en: 'Keep the line in the prompt, but move the actual boundary into token permissions and the wrapper: no branch-deletion right, the CI configuration directory outside the write zone, irreversible actions behind human confirmation.' },
          reaction: {
            ru: 'Именно. Такие ограничения не зависят от того, что модель подумала о запросе, а проверка «токен агента не может писать в каталог с конфигурацией» детерминирована и не шумит на прогонах.',
            en: 'Exactly. Those constraints do not depend on what the model thought about the request, and the check “the agent’s token cannot write to the configuration directory” is deterministic and does not add noise to runs.'
          },
          isCorrect: true
        },
        {
          text: { ru: 'Запретить агенту доступ к репозиторию целиком, пока не появится способ гарантировать соблюдение промпта.', en: 'Deny the agent repository access altogether until there is a way to guarantee the prompt is obeyed.' },
          reaction: {
            ru: 'Слишком широко. Смысл минимальных прав в том, чтобы разрешённое осталось разрешённым: чтение репозитория и запись в свою ветку безопасны, опасны удаление и правка конфигурации проверок.',
            en: 'Too broad. The point of minimal permissions is that what is safe stays allowed: reading the repository and writing to its own branch are safe; deletion and editing the checks configuration are not.'
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
      ru: 'Миссия: фильтр стал ловить слишком много',
      en: 'Mission: the filter starts catching too much'
    },
    answer: '',
    explanation: {
      ru: 'Всплеск срабатываний означает одно из двух: атаку или собственную регрессию. Различает их разрез по правилу и источнику: атака собрана вокруг одного правила, регрессия размазана по всем. Ложные срабатывания возвращаются в набор с обратным знаком.',
      en: 'A spike in triggers means one of two things: an attack or a self-inflicted regression. Slicing by rule and by source tells them apart: an attack clusters around one rule, a regression spreads evenly. False positives feed back into the set with the opposite sign.'
    },
    scenario: {
      brief: {
        ru: 'Вы выкатили новый фильтр на 10% трафика. За два часа доля срабатываний выросла втрое против остальной части, и в поддержку пришли три жалобы: разработчик просил разобрать уязвимость в своём коде, и его заблокировали. Что делаете первым?',
        en: 'You rolled a new filter out to 10% of traffic. Within two hours its trigger rate is triple the rest, and support has three complaints: a developer asked for an analysis of a vulnerability in their own code and got blocked. What is your first move?'
      },
      constraints: [
        { ru: 'Фильтр закрыт флагом и выкачен канареечно на 10%', en: 'The filter is behind a flag and canaried at 10%' },
        { ru: 'Есть разрез срабатываний по правилу и по источнику', en: 'Triggers can be sliced by rule and by source' },
        { ru: 'Причина всплеска пока неизвестна', en: 'The cause of the spike is not known yet' }
      ],
      choices: [
        {
          text: { ru: 'Посмотреть разрез по правилу и источнику: собран ли всплеск вокруг одного правила или размазан по всем — и по ответу решать, атака это или своя регрессия', en: 'Look at the slice by rule and by source: is the spike clustered around one rule or spread across all of them — and decide from the answer whether it is an attack or a self-inflicted regression' },
          outcome: {
            ru: 'Верно. Это единственный шаг, который различает два случая с противоположными действиями: при атаке фильтр отработал как задумано, при регрессии его нужно ослаблять. Жалобы разработчика указывают на второе, но разрез это подтвердит или опровергнет за минуты.',
            en: 'Correct. This is the one step that separates two cases whose responses are opposite: under attack the filter did its job, under regression it needs loosening. The developer complaints point to the latter, but the slice confirms or refutes it in minutes.'
          },
          score: 95
        },
        {
          text: { ru: 'Ужесточить фильтр ещё сильнее: раз срабатываний много, угроза реальна', en: 'Tighten the filter further: a lot of triggers means the threat is real' },
          outcome: {
            ru: 'Опасный ход. Вы приняли одну из двух гипотез без проверки. Если это ложные срабатывания, ужесточение увеличит их долю и добавит к трём жалобам ещё сотню — с уже уехавшей точностью фильтра.',
            en: 'A dangerous move. You accepted one of two hypotheses without checking. If these are false positives, tightening raises their share and turns three complaints into a hundred — with the filter’s precision already gone.'
          },
          score: 15
        },
        {
          text: { ru: 'Дождаться конца недели и посмотреть итоговую цифру срабатываний в отчёте', en: 'Wait until the end of the week and look at the total trigger figure in the report' },
          outcome: {
            ru: 'Доля срабатываний — рабочая метрика, а не отчётная: информативны именно изменения, и смотреть их надо графиком в момент выката. К концу недели канареечная доля либо разрастётся, либо будет свёрнута без разбора причины.',
            en: 'The trigger rate is a working metric, not a reporting one: the changes carry the information, and they must be watched as a chart during the rollout. By the end of the week the canary share will have either grown or been rolled back with the cause never established.'
          },
          score: 20
        },
        {
          text: { ru: 'Выключить фильтр совсем и вернуться к вопросу, когда будет время', en: 'Switch the filter off entirely and come back to it when there is time' },
          outcome: {
            ru: 'Флаг действительно даёт дешёвый обратный ход, но выключение без разбора теряет собранный материал. Три жалобы — это размеченные примеры «этот запрос блокировать не должны», и они нужны в состязательном наборе с обратным знаком.',
            en: 'The flag does give you a cheap way back, but switching off without investigating throws away the material you gathered. Three complaints are labelled examples of “this request must not be blocked”, and they belong in the adversarial set with the opposite sign.'
          },
          score: 40
        }
      ],
      passingScore: 60
    }
  }
];
