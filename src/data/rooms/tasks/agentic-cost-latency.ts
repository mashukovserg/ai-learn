import { LocalizedTask } from '../types';

export const agenticCostLatencyTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему для агента единицей счёта берут прогон (одну решённую задачу целиком), а не отдельное обращение к модели?',
      en: 'Why is an agent’s cost measured per run (one task solved end to end) rather than per individual model call?'
    },
    options: [
      { ru: 'Каждый следующий шаг несёт с собой историю предыдущих: результат вызова инструмента возвращается в контекстное окно, поэтому расход растёт быстрее, чем число шагов', en: 'Each step carries the history of the previous ones: a tool call’s result returns into the context window, so spend grows faster than the step count' },
      { ru: 'Поставщики выставляют счёт за прогоны, а не за токены', en: 'Providers bill for runs rather than for tokens' },
      { ru: 'Обращения к модели внутри одного прогона тарифицируются по сниженной ставке', en: 'Model calls inside a single run are billed at a reduced rate' }
    ],
    answer: {
      ru: 'Каждый следующий шаг несёт с собой историю предыдущих: результат вызова инструмента возвращается в контекстное окно, поэтому расход растёт быстрее, чем число шагов',
      en: 'Each step carries the history of the previous ones: a tool call’s result returns into the context window, so spend grows faster than the step count'
    },
    explanation: {
      ru: 'Верно. Не «десять запросов по тысяче токенов», а «первый запрос тысяча, десятый — двадцать тысяч». Прогон отвечает на вопрос бизнеса: сколько стоит закрыть один тикет.',
      en: 'Correct. Not “ten requests of a thousand tokens” but “the first request a thousand, the tenth twenty thousand”. A run answers the business question: what does it cost to close one ticket.'
    }
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Каким сокращением обозначают время от отправки запроса до появления первого токена ответа? (четыре латинские буквы)',
      en: 'Which abbreviation denotes the time from sending a request to the appearance of the first answer token? (four letters)'
    },
    answer: ['ttft', 'time to first token'],
    hint: {
      ru: 'Расшифровывается как «время до первого токена».',
      en: 'It stands for “time to first token”.'
    },
    explanation: {
      ru: 'TTFT. Общее время ответа и TTFT — разные величины: длинный ответ с быстрым началом ощущается отзывчивым, короткий с трёхсекундной паузой — нет.',
      en: 'TTFT. Total response time and TTFT are different quantities: a long answer that starts quickly feels responsive, a short one after a three-second pause does not.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'На диаграмме Artificial Analysis время до первого токена различается между моделями более чем в двадцать раз, а внутри столбиков выделена доля «размышления». Что из этого следует для выбора модели под шаг?',
      en: 'On the Artificial Analysis chart, time to first token differs across models by more than twentyfold, and the “thinking” share is highlighted inside the bars. What follows from that when picking a model for a step?'
    },
    options: [
      { ru: 'Разница проходит по режиму работы, а не по поставщику: почти всё ожидание даёт размышление, поэтому на шаге, где рассуждение не нужно, режим рассуждения — чистый расход времени', en: 'The difference runs along mode of operation, not provider: nearly all of the wait comes from thinking, so on a step that needs no reasoning, reasoning mode is pure time spent' },
      { ru: 'Модели одного поставщика всегда быстрее моделей другого, поэтому выбирают поставщика, а не модель', en: 'One provider’s models are always faster than another’s, so you pick the provider rather than the model' },
      { ru: 'Время до первого токена определяется длиной ответа, поэтому его сокращают, ограничивая вывод', en: 'Time to first token is determined by the length of the answer, so you shorten it by capping the output' }
    ],
    answer: {
      ru: 'Разница проходит по режиму работы, а не по поставщику: почти всё ожидание даёт размышление, поэтому на шаге, где рассуждение не нужно, режим рассуждения — чистый расход времени',
      en: 'The difference runs along mode of operation, not provider: nearly all of the wait comes from thinking, so on a step that needs no reasoning, reasoning mode is pure time spent'
    },
    explanation: {
      ru: 'Верно. График читают как карту компромисса, а не как рейтинг: конкретные числа устаревают за недели, а соотношение между режимами остаётся.',
      en: 'Correct. The chart is a map of a trade-off, not a ranking: the specific numbers go stale within weeks, while the relationship between modes does not.'
    }
  },
  {
    id: 4,
    type: 'multiple-select',
    question: {
      ru: 'Выберите верные утверждения про измерение задержки агентного прогона.',
      en: 'Select the correct statements about measuring the latency of an agent run.'
    },
    options: [
      { ru: 'Среднее прячет хвост: девять быстрых ответов и один минутный дают приемлемое среднее при испорченном опыте каждого десятого', en: 'The mean hides the tail: nine fast answers and one that takes a minute give an acceptable average while every tenth user has a ruined experience' },
      { ru: 'P95 — время, в которое уложились 95% запросов, то есть граница для худших пяти процентов', en: 'P95 is the time within which 95% of requests completed — the boundary for the worst five percent' },
      { ru: 'Шаги прогона идут последовательно, поэтому общее время складывается из времени каждого шага, а не равно самому долгому', en: 'The steps of a run are sequential, so total time is the sum of every step rather than the duration of the longest one' },
      { ru: 'Ускорить один шаг почти всегда полезнее, чем сократить число шагов', en: 'Speeding up a single step almost always beats cutting the number of steps' },
      { ru: 'Отказ с кодом 429 от поставщика — поломка, требующая немедленной эскалации к человеку', en: 'A 429 refusal from the provider is a breakage requiring immediate escalation to a human' }
    ],
    answer: [
      { ru: 'Среднее прячет хвост: девять быстрых ответов и один минутный дают приемлемое среднее при испорченном опыте каждого десятого', en: 'The mean hides the tail: nine fast answers and one that takes a minute give an acceptable average while every tenth user has a ruined experience' },
      { ru: 'P95 — время, в которое уложились 95% запросов, то есть граница для худших пяти процентов', en: 'P95 is the time within which 95% of requests completed — the boundary for the worst five percent' },
      { ru: 'Шаги прогона идут последовательно, поэтому общее время складывается из времени каждого шага, а не равно самому долгому', en: 'The steps of a run are sequential, so total time is the sum of every step rather than the duration of the longest one' }
    ],
    explanation: {
      ru: 'Два оставшихся утверждения перевёрнуты. Сократить число шагов почти всегда полезнее, чем ускорить один шаг. А 429 — штатная ситуация лимита запросов: правильная реакция — подождать и повторить с растущей паузой.',
      en: 'The two remaining statements are inverted. Cutting the number of steps almost always beats speeding one up. And a 429 is the normal rate-limit condition: the correct reaction is to wait and retry with a growing pause.'
    }
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Расставьте рычаги в порядке применения — по соотношению выигрыша и риска, от самого безопасного к самому узкому по применимости.',
      en: 'Order the levers by application — by the ratio of gain to risk, from the safest to the narrowest in applicability.'
    },
    initialItems: [
      { ru: 'Маршрутизация моделей: меняет качество, поэтому требует проверки на своём наборе задач', en: 'Model routing: it changes quality, so it needs validation on your own task set' },
      { ru: 'Кэширование префикса и параллельные независимые вызовы: почти ничего не ломают, эффект сразу', en: 'Prefix caching and parallel independent calls: they break almost nothing and pay off immediately' },
      { ru: 'Пакетный режим: доступен ровно там, где ответ не ждут в реальном времени', en: 'Batch mode: available exactly where the answer is not awaited in real time' },
      { ru: 'Урезание содержимого окна: сначала замер, что реально лежит в окне, потом резать', en: 'Trimming the window contents: first measure what is actually in the window, then cut' }
    ],
    correctOrder: [
      { ru: 'Кэширование префикса и параллельные независимые вызовы: почти ничего не ломают, эффект сразу', en: 'Prefix caching and parallel independent calls: they break almost nothing and pay off immediately' },
      { ru: 'Урезание содержимого окна: сначала замер, что реально лежит в окне, потом резать', en: 'Trimming the window contents: first measure what is actually in the window, then cut' },
      { ru: 'Маршрутизация моделей: меняет качество, поэтому требует проверки на своём наборе задач', en: 'Model routing: it changes quality, so it needs validation on your own task set' },
      { ru: 'Пакетный режим: доступен ровно там, где ответ не ждут в реальном времени', en: 'Batch mode: available exactly where the answer is not awaited in real time' }
    ],
    answer: '',
    explanation: {
      ru: 'Порядок выбирают по соотношению выигрыша и риска, а не по интересности. Урезать легко, но недодать контекста — значит получить больше шагов, то есть заплатить ровно за то, что экономили.',
      en: 'The order follows the ratio of gain to risk, not how interesting each lever is. Trimming is easy, but starving the agent of context means more steps — paying for exactly what you were trying to save.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Инженер добавил в начало системного промпта строку с текущей датой и временем. Доля попаданий в кэш префикса упала почти до нуля. Почему?',
      en: 'An engineer added a line with the current date and time to the top of the system prompt. The prefix cache hit rate fell to almost zero. Why?'
    },
    options: [
      { ru: 'Кэш работает только для точного совпадения префикса, а меняющаяся строка в начале делает префикс новым на каждом запросе', en: 'The cache only matches an exact prefix, and a changing line at the start makes the prefix new on every request' },
      { ru: 'Даты и время запрещено передавать в системном промпте по требованиям поставщиков', en: 'Providers forbid passing dates and times in the system prompt' },
      { ru: 'Кэш хранит только текст без чисел, поэтому числовые строки его сбрасывают', en: 'The cache stores only text without numbers, so numeric lines reset it' }
    ],
    answer: {
      ru: 'Кэш работает только для точного совпадения префикса, а меняющаяся строка в начале делает префикс новым на каждом запросе',
      en: 'The cache only matches an exact prefix, and a changing line at the start makes the prefix new on every request'
    },
    explanation: {
      ru: 'Верно. Отсюда практическое правило: стабильное кладут сверху, изменчивое дописывают снизу. Повторное чтение из кэша стоит заметно дешевле обычных входных токенов и возвращается быстрее — терять это из-за одной строки обидно.',
      en: 'Correct. Hence the practical rule: stable content on top, volatile content appended at the bottom. A cache read costs noticeably less than regular input tokens and comes back faster — losing that to a single line is an expensive accident.'
    }
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Потолки расхода бывают трёх уровней. Разложите ситуации по тому, какой уровень их закрывает.',
      en: 'Spending ceilings come at three levels. Sort the situations by the level that covers each.'
    },
    answer: '',
    explanation: {
      ru: 'Потолок прогона защищает от одной зациклившейся задачи. Дневной лимит проекта — от ситуации, когда таких задач стало сто. Лимит поставщика вообще не ваш и срабатывает по своим правилам — его учитывают при планировании параллельного запуска.',
      en: 'The per-run ceiling protects against one looping task. The daily project limit protects against a hundred such tasks. The provider’s limit is not yours at all and fires by its own rules — you account for it when planning parallel runs.'
    },
    categorize: {
      items: [
        { ru: 'Одна задача ушла в цикл «поправил — сломал — поправил» и тратит больше сотни обычных', en: 'One task slid into a “fixed it — broke it — fixed it” loop and spends more than a hundred ordinary ones' },
        { ru: 'Агент остановлен после двух попыток без улучшения и передал работу человеку', en: 'The agent stopped after two attempts with no improvement and handed the work to a human' },
        { ru: 'За сутки очередь задач разрослась, и суммарный расход команды вышел за согласованный', en: 'Over a day the task queue grew and the team’s total spend went past what was agreed' },
        { ru: 'Нужно заранее знать, во сколько обойдётся неделя работы фичи', en: 'You need to know in advance what a week of the feature will cost' },
        { ru: 'Ответ пришёл с кодом 429, хотя бюджет далеко не исчерпан', en: 'The response came back as a 429 although the budget is nowhere near exhausted' },
        { ru: 'Десять агентов запущены параллельно и упёрлись в потолок раньше, чем в деньги', en: 'Ten agents launched in parallel hit a ceiling before they hit the money' }
      ],
      buckets: [
        { ru: 'Потолок прогона', en: 'Per-run ceiling' },
        { ru: 'Лимит проекта', en: 'Project limit' },
        { ru: 'Лимит поставщика', en: 'Provider limit' }
      ],
      correctMapping: {
        'One task slid into a “fixed it — broke it — fixed it” loop and spends more than a hundred ordinary ones': 'Per-run ceiling',
        'The agent stopped after two attempts with no improvement and handed the work to a human': 'Per-run ceiling',
        'Over a day the task queue grew and the team’s total spend went past what was agreed': 'Project limit',
        'You need to know in advance what a week of the feature will cost': 'Project limit',
        'The response came back as a 429 although the budget is nowhere near exhausted': 'Provider limit',
        'Ten agents launched in parallel hit a ceiling before they hit the money': 'Provider limit'
      }
    }
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Агент упёрся в потолок расхода и остановился. Что должно остаться после такой остановки, чтобы она была полезной?',
      en: 'The agent hit its spending ceiling and stopped. What must remain after such a stop for it to be useful?'
    },
    options: [
      { ru: 'Пакет: сколько израсходовано, на каком шаге прервались, что уже сделано, что осталось, и сохранённая трасса', en: 'A package: how much was spent, at which step it broke off, what is already done, what remains, and the saved trace' },
      { ru: 'Пустая ветка: незаконченную работу удаляют, чтобы она не мешала следующему прогону', en: 'An empty branch: unfinished work is deleted so it does not interfere with the next run' },
      { ru: 'Только строка в логе с итоговым числом израсходованных токенов', en: 'Only a log line with the final token count' }
    ],
    answer: {
      ru: 'Пакет: сколько израсходовано, на каком шаге прервались, что уже сделано, что осталось, и сохранённая трасса',
      en: 'A package: how much was spent, at which step it broke off, what is already done, what remains, and the saved trace'
    },
    explanation: {
      ru: 'Верно. Молчаливая остановка бесполезна: человек увидит недоделанную работу и не поймёт, была ли она невозможной или просто оборвалась. Это тот же human-in-the-loop, только поводом служит исчерпанный бюджет, а не риск.',
      en: 'Correct. A silent stop is useless: a human sees unfinished work and cannot tell whether it was impossible or simply cut off. This is the same human-in-the-loop, except the trigger is an exhausted budget rather than a risk.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем задавать лимит шагов, если уже задан лимит токенов?',
      en: 'Why set a step limit when a token limit is already in place?'
    },
    options: [
      { ru: 'Они ловят разное: длинный файл выбирает бюджет за три шага, а бесплодный цикл — за тридцать дешёвых', en: 'They catch different things: one long file exhausts the budget in three steps, while a fruitless loop takes thirty cheap ones' },
      { ru: 'Лимит шагов дублирует лимит токенов и нужен только для отчётности', en: 'The step limit duplicates the token limit and exists only for reporting' },
      { ru: 'Лимит токенов работает только у части поставщиков, поэтому нужен запасной', en: 'The token limit works only with some providers, so a backup is needed' }
    ],
    answer: {
      ru: 'Они ловят разное: длинный файл выбирает бюджет за три шага, а бесплодный цикл — за тридцать дешёвых',
      en: 'They catch different things: one long file exhausts the budget in three steps, while a fruitless loop takes thirty cheap ones'
    },
    explanation: {
      ru: 'Верно. Отдельно к ним добавляют предохранитель по бесплодным попыткам: если две итерации подряд не улучшили результат, агент, скорее всего, крутит один и тот же неверный подход.',
      en: 'Correct. On top of both sits a circuit breaker on fruitless attempts: if two iterations in a row did not improve the result, the agent is most likely spinning the same wrong approach.'
    }
  },
  {
    id: 10,
    type: 'input',
    question: {
      ru: 'Как называется пошаговая запись прогона, где у каждого вызова модели и инструмента есть своё время, число токенов и результат? (одно слово)',
      en: 'What is the name for a step-by-step record of a run where every model and tool call carries its own duration, token count, and result? (one word)'
    },
    answer: ['трассировка', 'tracing', 'трассировку', 'трассировки'],
    hint: {
      ru: 'Отдельный шаг такой записи принято называть спаном.',
      en: 'An individual step in that record is conventionally called a span.'
    },
    explanation: {
      ru: 'Трассировка. Она превращает вопрос «почему этот прогон стоил вдесятеро» в конкретный ответ вида «тридцать перечитываний одного файла на шаге семь». Счёт от поставщика на этот вопрос не отвечает.',
      en: 'Tracing. It turns “why did this run cost ten times the usual” into a concrete answer like “thirty re-reads of one file at step seven”. The provider’s invoice does not answer that question.'
    }
  },
  {
    id: 11,
    type: 'mentor',
    question: { ru: 'Перевести всё на самую дешёвую модель', en: 'Move everything to the cheapest model' },
    answer: '',
    explanation: {
      ru: 'Дешёвая модель на сложном шаге экономит на обращении и проигрывает на числе шагов: разбирается дольше, ошибается чаще, каждая новая итерация тащит всю историю. Рычаг называется маршрутизацией: исполнитель выбирается под шаг, а не под всю задачу.',
      en: 'A cheap model on a hard step saves on the call and loses on the step count: it takes longer to work things out, errs more often, and every extra iteration drags the whole history along. The lever is called routing: the executor is chosen per step, not per task.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега приносит расчёт: «Самая дешёвая модель в десять раз дешевле той, что стоит у нас сейчас. Переводим на неё весь агентный контур и сокращаем счёт в десять раз». Что ответите?',
        en: 'A colleague brings a calculation: “The cheapest model is ten times cheaper than the one we run now. Let us move the whole agent loop onto it and cut the bill tenfold.” What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Согласиться: цена за токен ниже в десять раз, значит и счёт упадёт в десять раз.', en: 'Agree: the price per token is ten times lower, so the bill drops tenfold.' },
          reaction: {
            ru: 'Нет, расчёт считает не ту величину. Единица счёта у агента — прогон, а не обращение: на сложном шаге дешёвая модель делает больше итераций, и каждая тащит в окно всю историю предыдущих. Счёт может вырасти при вдесятеро меньшей цене за токен.',
            en: 'No — the calculation measures the wrong quantity. An agent’s unit of cost is the run, not the call: on a hard step a cheap model takes more iterations, and each one drags the whole prior history into the window. The bill can grow even at a tenfold lower price per token.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Разделить шаги: дешёвая модель на классификацию и извлечение, дорогая на рассуждение и генерацию кода; проверить решение на своём наборе задач по стоимости прогона, а не по цене за токен.', en: 'Split the steps: the cheap model for classification and extraction, the expensive one for reasoning and code generation; validate the change on your own task set by cost per run, not by price per token.' },
          reaction: {
            ru: 'Именно. Стоимость падает не за счёт качества, а за счёт того, что дорогая модель перестаёт делать дешёвую работу. И перед маршрутизацией стоит применить рычаги, которые ничего не ломают: кэш префикса и параллельные независимые вызовы.',
            en: 'Exactly. Cost falls not by sacrificing quality but by stopping the expensive model from doing cheap work. And before routing, apply the levers that break nothing: prefix caching and parallel independent calls.'
          },
          isCorrect: true
        },
        {
          text: { ru: 'Отказаться от идеи: стоимость агентного контура снижать нельзя без потери качества.', en: 'Reject the idea: an agent loop’s cost cannot be reduced without losing quality.' },
          reaction: {
            ru: 'Слишком категорично. Кэширование префикса и параллельные независимые вызовы снижают расход, не касаясь качества вовсе, а урезание лишнего из окна часто улучшает результат заодно.',
            en: 'Too categorical. Prefix caching and parallel independent calls cut spend without touching quality at all, and trimming the redundant parts of the window often improves the result as a side effect.'
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
      ru: 'Миссия: счёт вырос втрое за неделю',
      en: 'Mission: the bill tripled in a week'
    },
    answer: '',
    explanation: {
      ru: 'Счёт говорит, сколько потрачено, и ничего — на что. Ответ даёт трассировка: разрез по шагам и по разметке показывает, где ушёл расход. Гадать по итоговой цифре и менять модель наугад — способ потратить неделю и не узнать причину.',
      en: 'The invoice says how much was spent and nothing about what on. Tracing gives the answer: slicing by step and by label shows where the spend went. Guessing from the total and swapping models at random is a way to burn a week and never learn the cause.'
    },
    scenario: {
      brief: {
        ru: 'Расход на агентный контур вырос втрое за неделю. Число закрытых задач не изменилось, тип задач тот же, тарифы поставщика не менялись. За неделю команда выкатила три правки промпта и один новый инструмент. Что делаете первым?',
        en: 'Spend on the agent loop tripled in a week. The number of closed tasks is unchanged, the task mix is the same, provider prices did not move. Over that week the team shipped three prompt edits and one new tool. What is your first move?'
      },
      constraints: [
        { ru: 'Трассы прогонов сохраняются с разметкой по задаче, модели и версии промпта', en: 'Run traces are stored with labels for task, model, and prompt version' },
        { ru: 'Тарифы поставщика за неделю не менялись', en: 'Provider prices did not change during the week' },
        { ru: 'Объём задач остался прежним', en: 'Task volume stayed the same' }
      ],
      choices: [
        {
          text: { ru: 'Сравнить срезы трасс до и после правок: стоимость прогона, число шагов и долю попаданий в кэш префикса по версиям промпта', en: 'Compare trace slices before and after the edits: cost per run, steps per run, and prefix cache hit rate by prompt version' },
          outcome: {
            ru: 'Верно. Разметка существует ровно для таких сравнений. Втрое при том же объёме — почти наверняка либо выросло число шагов, либо обнулился кэш префикса: правка, вставившая изменчивую строку в начало промпта, даёт ровно такую картину.',
            en: 'Correct. The labels exist precisely for comparisons like this. A threefold rise at constant volume almost certainly means either the step count grew or the prefix cache went to zero: an edit that inserted a volatile line at the top of the prompt produces exactly this picture.'
          },
          score: 95
        },
        {
          text: { ru: 'Перевести контур на самую дешёвую модель и посмотреть, упадёт ли счёт', en: 'Move the loop to the cheapest model and see whether the bill drops' },
          outcome: {
            ru: 'Наугад и в неверную сторону. Причина не найдена, а на сложных шагах дешёвая модель добавит итераций, каждая из которых тащит всю историю. Счёт может не упасть, зато качество изменится, и разбираться придётся уже в двух изменениях сразу.',
            en: 'A blind move in the wrong direction. The cause is still unknown, and on hard steps a cheap model adds iterations, each dragging the whole history along. The bill may not drop, quality will change, and now you have two changes to untangle instead of one.'
          },
          score: 15
        },
        {
          text: { ru: 'Поднять дневной лимит проекта, чтобы задачи перестали упираться в потолок, и вернуться к вопросу позже', en: 'Raise the daily project limit so tasks stop hitting the ceiling, and come back to the question later' },
          outcome: {
            ru: 'Лимит здесь работает как сигнализация, и вы её отключаете. Потолок проекта нужен как раз для случая, когда расход поехал: подняв его без разбора, вы теряете единственное, что сейчас удерживает счёт.',
            en: 'The limit is acting as an alarm here, and you are switching it off. A project ceiling exists precisely for the case where spend runs away: raising it without investigating removes the only thing currently holding the bill down.'
          },
          score: 10
        },
        {
          text: { ru: 'Дождаться счёта за месяц: по нему будет виднее, разовый это всплеск или тренд', en: 'Wait for the monthly invoice: it will show more clearly whether this is a one-off spike or a trend' },
          outcome: {
            ru: 'Счёт за месяц — худший из доступных отчётов: он говорит, сколько потрачено, и ничего о том, на что. Трассы с разметкой уже есть, и ответ можно получить за час, а не за три недели.',
            en: 'A monthly invoice is the worst report available: it says how much was spent and nothing about what on. Labelled traces already exist, and the answer is an hour away rather than three weeks.'
          },
          score: 25
        }
      ],
      passingScore: 60
    }
  }
];
