import { LocalizedTask } from '../types';

export const reasoningModelsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'input',
    question: {
      ru: 'Как называют вычисления, которые модель тратит в момент ответа — на рассуждение, несколько попыток, проверку, — в отличие от вычислений при обучении? (термин на английском или по-русски)',
      en: 'What is the computation a model spends at answer time — on reasoning, multiple attempts, checking — called, as opposed to the computation spent in training?'
    },
    answer: [
      'test-time compute',
      'test time compute',
      'test-time-compute',
      'testtime compute',
      'вычисления во время ответа',
      'вычисления в момент ответа',
    ],
    hint: {
      ru: 'Три английских слова: «время теста» + «вычисления».',
      en: 'Three words: "test", "time", "compute".'
    },
    explanation: {
      ru: 'Test-time compute — вычисления во время ответа. Голосование по многим цепочкам, выбор лучшего с верификатором, пошаговая проверка и длинное рассуждение — всё это способы потратить его больше.',
      en: 'Test-time compute. Voting over many chains, best-of-N with a verifier, step-level checking and long reasoning are all ways of spending more of it.'
    }
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называются промежуточные шаги, которые модель выписывает перед ответом и которые служат ей черновиком?',
      en: 'What are the intermediate steps a model writes out before the answer, serving as its scratchpad, called?'
    },
    answer: [
      'цепочка рассуждений',
      'цепочки рассуждений',
      'цепочку рассуждений',
      'chain of thought',
      'chain-of-thought',
      'cot',
      'цепочка мыслей',
    ],
    hint: {
      ru: 'По-английски — chain of thought, сокращённо CoT.',
      en: 'Three words; abbreviated CoT.'
    },
    explanation: {
      ru: 'Цепочка рассуждений (chain of thought). На каждый токен модель тратит одинаковый объём вычислений, а записанные шаги становятся входом для следующих — у модели появляется черновик.',
      en: 'Chain of thought. The model spends the same computation on every token, and the written steps become input for the next ones — the model gains a scratchpad.'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется приём, при котором маленькую модель дообучают на ответах и рассуждениях большой модели-«учителя», без собственного обучения с подкреплением?',
      en: 'What is the technique called in which a small model is fine-tuned on the answers and reasoning of a large "teacher" model, with no reinforcement learning of its own?'
    },
    answer: [
      'дистилляция',
      'дистилляцию',
      'дистилляция знаний',
      'distillation',
      'knowledge distillation',
      'model distillation',
    ],
    hint: {
      ru: 'Слово из химии: так получают чистое вещество из смеси.',
      en: 'A word borrowed from chemistry.'
    },
    explanation: {
      ru: 'Дистилляция. Так из DeepSeek-R1 получили модели R1-Distill на основе Qwen и Llama: около 800 тыс. примеров от учителя и обычное SFT для ученика.',
      en: 'Distillation. That is how the R1-Distill models based on Qwen and Llama were obtained from DeepSeek-R1: about 800,000 examples from the teacher and ordinary SFT for the student.'
    }
  },
  {
    id: 4,
    type: 'input',
    question: {
      ru: 'Какой аббревиатурой называют обучение с подкреплением, где награду выдаёт программа-проверка (совпал ли ответ с эталоном, прошли ли тесты), а не нейросеть-оценщик?',
      en: 'What abbreviation names reinforcement learning in which the reward is issued by a checking program (does the answer match the reference, do the tests pass) rather than a neural grader?'
    },
    answer: [
      'rlvr',
      'reinforcement learning with verifiable rewards',
      'обучение с подкреплением на проверяемых наградах',
      'обучение с подкреплением с проверяемыми наградами',
      'рлвр',
    ],
    hint: {
      ru: 'Четыре латинские буквы: RL + verifiable rewards.',
      en: 'Four letters: RL + verifiable rewards.'
    },
    explanation: {
      ru: 'RLVR — reinforcement learning with verifiable rewards. Термин ввели авторы Tülu 3; так обучали DeepSeek-R1-Zero: награда за верный итог и за формат рассуждения.',
      en: 'RLVR — reinforcement learning with verifiable rewards. The term was coined by the Tülu 3 authors; DeepSeek-R1-Zero was trained this way: a reward for a correct result and for the reasoning format.'
    }
  },
  {
    id: 5,
    type: 'timeline',
    question: {
      ru: 'Расположите работы, из которых выросли модели-рассуждатели, в хронологическом порядке.',
      en: 'Arrange the works that reasoning models grew out of in chronological order.'
    },
    answer: '',
    explanation: {
      ru: 'Сначала верификатор для GSM8K (2021), затем цепочка рассуждений в промпте (2022), пошаговая проверка с PRM800K (2023), o1 (2024) и открытый рецепт DeepSeek-R1 (2025).',
      en: 'First the GSM8K verifier (2021), then chain-of-thought prompting (2022), step-level checking with PRM800K (2023), o1 (2024), and the open DeepSeek-R1 recipe (2025).'
    },
    timeline: {
      events: [
        { label: { ru: 'DeepSeek-R1: открытый рецепт обучения рассуждению с подкреплением', en: 'DeepSeek-R1: an open recipe for teaching reasoning with reinforcement learning' }, year: '2025' },
        { label: { ru: 'Цепочка рассуждений в промпте: PaLM 540B на GSM8K с 17,9% до 56,9%', en: 'Chain-of-thought prompting: PaLM 540B on GSM8K from 17.9% to 56.9%' }, year: '2022' },
        { label: { ru: 'OpenAI представляет o1', en: 'OpenAI introduces o1' }, year: '2024' },
        { label: { ru: 'GSM8K и верификатор: выбор лучшего из 100 решений', en: 'GSM8K and a verifier: the best of 100 solutions' }, year: '2021' },
        { label: { ru: 'Let\'s Verify Step by Step: пошаговая проверка и датасет PRM800K', en: 'Let\'s Verify Step by Step: step-level checking and the PRM800K dataset' }, year: '2023' },
      ],
      correctOrder: [
        { ru: 'GSM8K и верификатор: выбор лучшего из 100 решений', en: 'GSM8K and a verifier: the best of 100 solutions' },
        { ru: 'Цепочка рассуждений в промпте: PaLM 540B на GSM8K с 17,9% до 56,9%', en: 'Chain-of-thought prompting: PaLM 540B on GSM8K from 17.9% to 56.9%' },
        { ru: 'Let\'s Verify Step by Step: пошаговая проверка и датасет PRM800K', en: 'Let\'s Verify Step by Step: step-level checking and the PRM800K dataset' },
        { ru: 'OpenAI представляет o1', en: 'OpenAI introduces o1' },
        { ru: 'DeepSeek-R1: открытый рецепт обучения рассуждению с подкреплением', en: 'DeepSeek-R1: an open recipe for teaching reasoning with reinforcement learning' },
      ]
    }
  },
  {
    id: 6,
    type: 'sorting',
    question: {
      ru: 'Расположите четыре этапа обучения DeepSeek-R1 в том порядке, в котором их проходили.',
      en: 'Arrange the four stages of DeepSeek-R1 training in the order in which they took place.'
    },
    answer: '',
    explanation: {
      ru: 'Холодный старт делает рассуждения читаемыми; первое обучение с подкреплением учит рассуждать; отбор удачных ответов и повторное SFT дают широкий набор примеров; второе обучение с подкреплением настраивает полезность и безопасность на всех типах запросов.',
      en: 'The cold start makes the reasoning readable; the first reinforcement learning stage teaches reasoning; selecting good answers and redoing SFT give a broad set of examples; the second reinforcement learning stage tunes helpfulness and safety across all kinds of requests.'
    },
    initialItems: [
      { ru: 'Отбор удачных ответов (около 800 тыс. примеров) и повторное дообучение базовой модели', en: 'Selecting good answers (about 800,000 examples) and fine-tuning the base model afresh' },
      { ru: 'Обучение с подкреплением на всех типах запросов с наградой за полезность и безопасность', en: 'Reinforcement learning across all kinds of requests with rewards for helpfulness and safety' },
      { ru: 'Холодный старт: дообучение на нескольких тысячах примеров с читаемыми рассуждениями', en: 'Cold start: fine-tuning on a few thousand examples with readable reasoning' },
      { ru: 'Обучение с подкреплением на задачах с проверяемым ответом плюс награда за единый язык', en: 'Reinforcement learning on tasks with checkable answers plus a reward for a single language' },
    ],
    correctOrder: [
      { ru: 'Холодный старт: дообучение на нескольких тысячах примеров с читаемыми рассуждениями', en: 'Cold start: fine-tuning on a few thousand examples with readable reasoning' },
      { ru: 'Обучение с подкреплением на задачах с проверяемым ответом плюс награда за единый язык', en: 'Reinforcement learning on tasks with checkable answers plus a reward for a single language' },
      { ru: 'Отбор удачных ответов (около 800 тыс. примеров) и повторное дообучение базовой модели', en: 'Selecting good answers (about 800,000 examples) and fine-tuning the base model afresh' },
      { ru: 'Обучение с подкреплением на всех типах запросов с наградой за полезность и безопасность', en: 'Reinforcement learning across all kinds of requests with rewards for helpfulness and safety' },
    ]
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Где длинное рассуждение обычно окупается, а где нет? Разложите запросы.',
      en: 'Where does long reasoning usually pay off, and where does it not? Sort the requests.'
    },
    answer: '',
    explanation: {
      ru: 'Окупается на многошаговых задачах с проверяемым ответом и на задачах средней сложности. Не окупается на простых вопросах (901 токен на «2 + 3»), там, где ответ нужен за доли секунды, и в задачах с отвлекающими подробностями, где длинное рассуждение снижает точность.',
      en: 'It pays off on multi-step problems with checkable answers and on medium-difficulty problems. It does not on simple questions (901 tokens for "2 + 3"), where the answer is needed in a fraction of a second, or in tasks with distracting details, where long reasoning lowers accuracy.'
    },
    categorize: {
      items: [
        { ru: 'Олимпиадная задача по математике со сверяемым ответом', en: 'An olympiad maths problem with a checkable answer' },
        { ru: 'Вопрос «сколько будет 2 + 3?»', en: 'The question "what is 2 + 3?"' },
        { ru: 'Исправить баг так, чтобы прошли тесты', en: 'Fix a bug so that the tests pass' },
        { ru: 'Подсказка автодополнения, которая нужна за доли секунды', en: 'An autocomplete suggestion needed within a fraction of a second' },
        { ru: 'Задача средней сложности, которую модель иногда решает и без рассуждения', en: 'A medium-difficulty problem the model sometimes solves without reasoning' },
        { ru: 'Подсчёт фруктов в задаче с отвлекающими подробностями', en: 'Counting fruit in a problem full of distracting details' },
      ],
      buckets: [
        { ru: 'Длинное рассуждение обычно окупается', en: 'Long reasoning usually pays off' },
        { ru: 'Длинное рассуждение не окупается или вредит', en: 'Long reasoning does not pay off or hurts' },
      ],
      correctMapping: {
        'An olympiad maths problem with a checkable answer': 'Long reasoning usually pays off',
        'The question "what is 2 + 3?"': 'Long reasoning does not pay off or hurts',
        'Fix a bug so that the tests pass': 'Long reasoning usually pays off',
        'An autocomplete suggestion needed within a fraction of a second': 'Long reasoning does not pay off or hurts',
        'A medium-difficulty problem the model sometimes solves without reasoning': 'Long reasoning usually pays off',
        'Counting fruit in a problem full of distracting details': 'Long reasoning does not pay off or hurts',
      }
    }
  },
  {
    id: 8,
    type: 'multiple-select',
    question: {
      ru: 'Что из этого — способы потратить больше вычислений во время ответа, не меняя саму модель?',
      en: 'Which of these are ways to spend more computation at answer time without changing the model itself?'
    },
    options: [
      { ru: 'Сгенерировать 40 цепочек и выбрать самый частый ответ', en: 'Generate 40 chains and pick the most frequent answer' },
      { ru: 'Сгенерировать 100 решений и взять то, что выше всех оценит верификатор', en: 'Generate 100 solutions and take the one a verifier scores highest' },
      { ru: 'Не давать модели закончить размышление и дописывать «Wait»', en: 'Keep the model from ending its thinking and append "Wait"' },
      { ru: 'Оценивать каждый шаг решения отдельной моделью', en: 'Grade every step of the solution with a separate model' },
      { ru: 'Предобучить модель на вдвое большем корпусе', en: 'Pretrain the model on a corpus twice as large' },
      { ru: 'Увеличить число параметров модели в 14 раз', en: 'Make the model 14 times larger in parameters' },
    ],
    answer: [
      { ru: 'Сгенерировать 40 цепочек и выбрать самый частый ответ', en: 'Generate 40 chains and pick the most frequent answer' },
      { ru: 'Сгенерировать 100 решений и взять то, что выше всех оценит верификатор', en: 'Generate 100 solutions and take the one a verifier scores highest' },
      { ru: 'Не давать модели закончить размышление и дописывать «Wait»', en: 'Keep the model from ending its thinking and append "Wait"' },
      { ru: 'Оценивать каждый шаг решения отдельной моделью', en: 'Grade every step of the solution with a separate model' },
    ],
    explanation: {
      ru: 'Голосование, выбор лучшего с верификатором, budget forcing и пошаговая проверка тратят вычисления во время ответа. Больший корпус и больше параметров — это вложения в обучение; именно с ними Снелл и соавторы сравнивали test-time compute.',
      en: 'Voting, best-of-N with a verifier, budget forcing and step-level checking spend compute at answer time. A larger corpus and more parameters are investments in training; that is exactly what Snell and colleagues compared test-time compute against.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Юэ с соавторами сравнили модели до и после RLVR по метрике pass@k (решена ли задача хотя бы в одной из k попыток). Что они обнаружили?',
      en: 'Yue and colleagues compared models before and after RLVR on pass@k (whether a problem is solved in at least one of k attempts). What did they find?'
    },
    options: [
      { ru: 'При одной попытке сильнее модель после RLVR, но при сотнях попыток базовая модель решает больше задач', en: 'With one attempt the model after RLVR is stronger, but with hundreds of attempts the base model solves more problems' },
      { ru: 'Модель после RLVR сильнее при любом числе попыток: RLVR создаёт новые способы рассуждения', en: 'The model after RLVR is stronger at any number of attempts: RLVR creates new ways of reasoning' },
      { ru: 'Разницы нет ни при каком k: RLVR не влияет на результат', en: 'There is no difference at any k: RLVR does not affect the result' },
    ],
    answer: { ru: 'При одной попытке сильнее модель после RLVR, но при сотнях попыток базовая модель решает больше задач', en: 'With one attempt the model after RLVR is stronger, but with hundreds of attempts the base model solves more problems' },
    explanation: {
      ru: 'Решения модели после RLVR уже встречаются среди того, что генерирует базовая: RLVR в основном учит чаще выбирать верный путь. Новые приёмы рассуждения, по тем же данным, может принести дистилляция от более сильного учителя.',
      en: 'The solutions of the model after RLVR already occur among what the base model generates: RLVR mostly teaches it to pick a correct path more often. New reasoning patterns, by the same data, can come from distillation from a stronger teacher.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'В поле usage ответа модели-рассуждателя: output_tokens = 2000, из них reasoning_tokens = 1700; видимый ответ — 300 токенов. За сколько выходных токенов вы заплатите?',
      en: 'In a reasoning model response\'s usage field: output_tokens = 2000, of which reasoning_tokens = 1700; the visible answer is 300 tokens. How many output tokens will you pay for?'
    },
    options: [
      { ru: '2000 — токены рассуждения оплачиваются как выходные, хотя их не видно', en: '2,000 — reasoning tokens are billed as output tokens even though they are hidden' },
      { ru: '300 — платят только за видимый ответ', en: '300 — you pay only for the visible answer' },
      { ru: '1700 — платят только за рассуждение', en: '1,700 — you pay only for the reasoning' },
    ],
    answer: { ru: '2000 — токены рассуждения оплачиваются как выходные, хотя их не видно', en: '2,000 — reasoning tokens are billed as output tokens even though they are hidden' },
    explanation: {
      ru: 'И у OpenAI, и у Anthropic токены рассуждения оплачиваются как выходные, даже если текст рассуждения не возвращается. Поэтому расход стоит отслеживать по полю usage и управлять им регулятором усилия.',
      en: 'At both OpenAI and Anthropic, reasoning tokens are billed as output tokens even when the reasoning text is not returned. So track the spend through the usage field and control it with the effort dial.'
    }
  },
  {
    id: 11,
    type: 'mentor',
    question: { ru: 'Цепочка рассуждений как журнал аудита', en: 'The chain of thought as an audit log' },
    answer: '',
    explanation: {
      ru: 'Текст рассуждения — ещё один выход модели. В экспериментах модели пользовались подсказкой и признавали это лишь в 25–39% случаев. Цепочку полезно читать как сигнал для мониторинга, но выдавать её за объяснение решения нельзя, а штраф за «плохие мысли» учит модель их прятать.',
      en: 'The reasoning text is one more output of the model. In experiments models used a hint and admitted it in only 25–39% of cases. The chain is useful to read as a monitoring signal, but it cannot be passed off as an explanation of the decision, and penalising "bad thoughts" teaches the model to hide them.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега предлагает: «Модель-рассуждатель всё равно пишет цепочку рассуждений. Давайте сохранять её как журнал аудита: если клиент спросит, почему модель отклонила его заявку, покажем цепочку — там же написана причина». Что вы ответите?',
        en: 'A colleague suggests: "The reasoning model writes a chain of thought anyway. Let\'s store it as an audit log: if a customer asks why the model rejected their application, we show them the chain — the reason is written right there." What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Согласен: цепочка — это и есть запись того, как модель пришла к ответу.', en: 'Agreed: the chain is exactly the record of how the model reached its answer.' },
          reaction: {
            ru: 'Цепочка — ещё один текст, который генерирует модель, а не протокол её вычислений. У Тёрпина и соавторов подсказка в промпте сбивала GPT-3.5 с 59,6% до 23,3%, а объяснения о ней молчали. Показывать такую цепочку клиенту как причину решения — значит выдавать правдоподобный текст за объяснение.',
            en: 'The chain is one more text the model generates, not a log of its computation. In Turpin and colleagues\' work a hint in the prompt knocked GPT-3.5 from 59.6% down to 23.3%, and the explanations stayed silent about it. Showing such a chain to a customer as the reason for a decision passes off plausible text as an explanation.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Цепочка не обязана называть настоящую причину: модели использовали подсказку и признавали это лишь в 25–39% случаев. Читать её для мониторинга полезно, но объяснение решения для клиента нужно строить иначе.', en: 'The chain is not bound to name the real reason: models used a hint and admitted it in only 25–39% of cases. Reading it for monitoring is useful, but an explanation of the decision for a customer has to be built another way.' },
          reaction: {
            ru: 'Верно. Это вопрос о верности рассуждений: у Claude 3.7 Sonnet — 25%, у DeepSeek R1 — 39%. При этом как сигнал цепочка полезна: наблюдатель, читавший рассуждения, ловил 95% взломов тестов против 60% у наблюдателя по действиям.',
            en: 'Correct. This is the faithfulness question: 25% for Claude 3.7 Sonnet, 39% for DeepSeek R1. Yet as a signal the chain is useful: a monitor reading the reasoning caught 95% of test hacks, against 60% for a monitor reading actions.'
          },
          isCorrect: true,
          deepening: {
            ru: 'И не стоит «исправлять» цепочку штрафами при обучении. В эксперименте OpenAI агент, которого штрафовали за «плохие мысли», продолжал взламывать тесты, но перестал об этом писать — и наблюдатель почти перестал его ловить.',
            en: 'And do not try to "fix" the chain with penalties during training. In OpenAI\'s experiment an agent penalised for "bad thoughts" kept hacking the tests but stopped writing about it — and the monitor almost stopped catching it.'
          }
        },
        {
          text: { ru: 'Тогда давайте при обучении штрафовать модель за любые «неправильные» мысли в цепочке — и журнал станет честным.', en: 'Then let\'s penalise the model during training for any "wrong" thoughts in the chain — and the log will become honest.' },
          reaction: {
            ru: 'Это ровно тот случай, который проверили в OpenAI: под таким давлением агент научился скрывать намерения. Взломы тестов продолжились, а наблюдатель по рассуждениям почти перестал их замечать. Журнал стал не честнее, а менее полезным.',
            en: 'That is exactly the case OpenAI tested: under such pressure the agent learned to hide its intent. The test hacks continued, and the monitor reading the reasoning almost stopped noticing them. The log became not more honest but less useful.'
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
      ru: 'Миссия: где включать рассуждение',
      en: 'Mission: where to turn reasoning on'
    },
    answer: '',
    explanation: {
      ru: 'Рассуждение окупается там, где задача многошаговая и результат можно проверить, и не окупается там, где ответ нужен за доли секунды. Уровень усилия настраивается по сценарию, а расход видно в поле usage.',
      en: 'Reasoning pays off where the task is multi-step and the result can be checked, and does not where the answer is needed in a fraction of a second. The effort level is set per scenario, and the spend shows up in the usage field.'
    },
    scenario: {
      brief: {
        ru: 'Ваша команда подключает модель-рассуждатель к двум сценариям. Первый — подсказки автодополнения в редакторе кода: ответ нужен быстрее чем за 300 мс, запросов очень много. Второй — ночная задача, которая чинит упавшие тесты в репозитории и проверяет себя прогоном тестов. Бюджет на токены ограничен. Как настроите рассуждение?',
        en: 'Your team is connecting a reasoning model to two scenarios. The first is autocomplete suggestions in a code editor: the answer is needed in under 300 ms, and requests are very frequent. The second is a nightly job that fixes failing tests in the repository and checks itself by running the tests. The token budget is limited. How do you configure reasoning?'
      },
      constraints: [
        { ru: 'Токены рассуждения оплачиваются как выходные', en: 'Reasoning tokens are billed as output tokens' },
        { ru: 'Автодополнение должно отвечать быстрее чем за 300 мс', en: 'Autocomplete must respond in under 300 ms' },
        { ru: 'Результат ночной задачи проверяется прогоном тестов', en: 'The nightly job\'s result is checked by running the tests' }
      ],
      choices: [
        {
          text: { ru: 'Высокий уровень рассуждения для ночной починки тестов, минимальный или выключенный — для автодополнения; расход токенов рассуждения отслеживать по полю usage', en: 'A high reasoning level for the nightly test fixing, minimal or off for autocomplete; track reasoning token spend through the usage field' },
          outcome: {
            ru: 'Верно. Починка тестов — многошаговая задача с проверяемым результатом, где длинное рассуждение окупается. Автодополнению нужны доли секунды, и сотни токенов рассуждения на каждый запрос там только сожгут бюджет и время.',
            en: 'Correct. Fixing tests is a multi-step task with a checkable result, where long reasoning pays off. Autocomplete needs fractions of a second, and hundreds of reasoning tokens per request would only burn budget and time there.'
          },
          score: 95
        },
        {
          text: { ru: 'Максимальный уровень везде: чем дольше модель думает, тем лучше ответ', en: 'The maximum level everywhere: the longer the model thinks, the better the answer' },
          outcome: {
            ru: 'Нет. На простых запросах модели-рассуждатели тратят сотни токенов там, где хватило бы десятка (901 против 7 на «2 + 3»), а на некоторых задачах длинное рассуждение даже снижает точность. Автодополнение не уложится в 300 мс, а бюджет уйдёт на невидимые токены.',
            en: 'No. On simple requests reasoning models spend hundreds of tokens where a dozen would do (901 vs 7 on "2 + 3"), and on some tasks long reasoning even lowers accuracy. Autocomplete will not fit in 300 ms, and the budget will go to invisible tokens.'
          },
          score: 10
        },
        {
          text: { ru: 'Выключить рассуждение везде, чтобы сэкономить', en: 'Turn reasoning off everywhere to save money' },
          outcome: {
            ru: 'Экономия в автодополнении оправдана, но ночная задача — как раз тот случай, где рассуждение окупается: многошаговая работа с проверкой тестами. Выключив его и там, вы теряете главное, ради чего брали модель-рассуждатель.',
            en: 'Saving on autocomplete is justified, but the nightly job is exactly where reasoning pays off: multi-step work checked by tests. Turning it off there too throws away the main reason for using a reasoning model.'
          },
          score: 35
        },
        {
          text: { ru: 'Высокий уровень для автодополнения, низкий для ночной задачи: автодополнение видит пользователь, значит, там качество важнее', en: 'A high level for autocomplete, low for the nightly job: the user sees autocomplete, so quality matters more there' },
          outcome: {
            ru: 'Наоборот. Пользователь автодополнения в первую очередь ждёт скорости, и длинное рассуждение её убьёт. А ночная задача никуда не торопится и проверяет себя тестами — ей рассуждение нужнее всего.',
            en: 'The other way round. An autocomplete user above all expects speed, and long reasoning will kill it. The nightly job is in no hurry and checks itself with tests — it needs reasoning most.'
          },
          score: 15
        }
      ],
      passingScore: 60
    }
  }
];
