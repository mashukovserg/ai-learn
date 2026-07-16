import { LocalizedTask } from '../types';

export const promptEvalsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что в теории названо главной ловушкой AI-разработки?',
      en: 'What does the theory call the main trap of AI development?',
    },
    options: [
      {
        ru: '«Вайб-чек»: задать несколько вопросов, увидеть адекватные ответы и решить, что всё работает.',
        en: 'The "vibe check": asking a few questions, seeing decent answers, and deciding it works.',
      },
      {
        ru: 'Слишком частый запуск автоматических тестов.',
        en: 'Running automated tests too often.',
      },
      {
        ru: 'Использование слишком мощной модели для простых задач.',
        en: 'Using an overly powerful model for simple tasks.',
      },
    ],
    answer: {
      ru: '«Вайб-чек»: задать несколько вопросов, увидеть адекватные ответы и решить, что всё работает.',
      en: 'The "vibe check": asking a few questions, seeing decent answers, and deciding it works.',
    },
    explanation: {
      ru: 'Верно. Несколько удачных ответов ничего не говорят о качестве системы в целом — без систематического измерения любое изменение промпта может незаметно сломать то, что работало.',
      en: 'Correct. A few good answers say nothing about overall system quality — without systematic measurement, any prompt change can silently break what used to work.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называется систематический способ измерения качества ответов LLM (английский термин из теории)?',
      en: 'What is the systematic way of measuring LLM answer quality called (the English term from the theory)?',
    },
    answer: ['evals', 'эвалы', 'evals (оценки)'],
    hint: {
      ru: 'Сокращение от английского evaluations.',
      en: 'Short for "evaluations".',
    },
    explanation: {
      ru: 'Точно. Evals — систематическая оценка качества ответов. Без них нельзя быть уверенным, что новая версия промпта или модели не вызвала регрессию.',
      en: 'Exactly. Evals are the systematic evaluation of answer quality. Without them you cannot be sure a new prompt or model version has not caused a regression.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите три типа эвалов, описанных в теории.',
      en: 'Select the three eval types described in the theory.',
    },
    options: [
      {
        ru: 'Детерминированные проверки (Python/Regex)',
        en: 'Deterministic checks (Python/Regex)',
      },
      {
        ru: 'LLM-as-a-Judge (модель оценивает модель)',
        en: 'LLM-as-a-Judge (a model grades a model)',
      },
      {
        ru: 'Human-in-the-loop (разметка экспертами)',
        en: 'Human-in-the-loop (expert labeling)',
      },
      {
        ru: '«Вайб-чек» на нескольких вопросах',
        en: 'A "vibe check" on a few questions',
      },
    ],
    answer: [
      {
        ru: 'Детерминированные проверки (Python/Regex)',
        en: 'Deterministic checks (Python/Regex)',
      },
      {
        ru: 'LLM-as-a-Judge (модель оценивает модель)',
        en: 'LLM-as-a-Judge (a model grades a model)',
      },
      {
        ru: 'Human-in-the-loop (разметка экспертами)',
        en: 'Human-in-the-loop (expert labeling)',
      },
    ],
    explanation: {
      ru: 'Верно: детерминированные проверки, LLM-судья и human-in-the-loop. «Вайб-чек» — не тип эвалов, а ловушка, от которой эвалы защищают.',
      en: 'Correct: deterministic checks, LLM-as-a-Judge, and human-in-the-loop. The "vibe check" is not an eval type — it is the trap evals protect against.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Отнесите каждую проверку к её типу эвалов.',
      en: 'Assign each check to its eval type.',
    },
    answer: '',
    explanation: {
      ru: 'Детерминированные проверки — простые правила (JSON, длина). LLM-судья оценивает тон и качество по шкале. Human-in-the-loop — эксперты и эталонный набор данных.',
      en: 'Deterministic checks are simple rules (JSON, length). The LLM judge scores tone and quality on a scale. Human-in-the-loop means experts and the ground-truth dataset.',
    },
    categorize: {
      buckets: [
        { ru: 'Детерминированные', en: 'Deterministic' },
        { ru: 'LLM-as-a-Judge', en: 'LLM-as-a-Judge' },
        { ru: 'Human-in-the-loop', en: 'Human-in-the-loop' },
      ],
      items: [
        { ru: 'Regex-проверка, что ответ содержит JSON', en: 'A regex check that the answer contains JSON' },
        { ru: 'Проверка, что длина текста в пределах нормы', en: 'A check that text length is within limits' },
        { ru: 'GPT-4o ставит ответу оценку тона от 1 до 5', en: 'GPT-4o scores the answer tone on a 1-5 scale' },
        { ru: 'Эксперты вручную размечают ответы', en: 'Experts hand-label the responses' },
        { ru: 'Создание эталонного набора данных', en: 'Creating the ground-truth dataset' },
      ],
      correctMapping: {
        'A regex check that the answer contains JSON': 'Deterministic',
        'A check that text length is within limits': 'Deterministic',
        'GPT-4o scores the answer tone on a 1-5 scale': 'LLM-as-a-Judge',
        'Experts hand-label the responses': 'Human-in-the-loop',
        'Creating the ground-truth dataset': 'Human-in-the-loop',
      },
    },
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое Release Gate?',
      en: 'What is a Release Gate?',
    },
    options: [
      {
        ru: 'Порог качества, который промпт обязан пройти перед выходом в продакшен.',
        en: 'A quality threshold a prompt must pass before going to production.',
      },
      {
        ru: 'Кнопка экстренного отключения модели в продакшене.',
        en: 'An emergency kill switch for a production model.',
      },
      {
        ru: 'Стадия обучения модели на новых данных.',
        en: 'A stage of training the model on new data.',
      },
    ],
    answer: {
      ru: 'Порог качества, который промпт обязан пройти перед выходом в продакшен.',
      en: 'A quality threshold a prompt must pass before going to production.',
    },
    explanation: {
      ru: 'Верно. Пример из теории: «точность извлечения данных > 95% при 0% галлюцинаций в критических полях». Пока порог не пройден — релиза нет.',
      en: 'Correct. The theory example: "data extraction accuracy > 95% with 0% hallucinations in critical fields". No release until the threshold is passed.',
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Вы нашли ошибку в ответе бота в чате. Что говорит «главный секрет» из теории?',
      en: 'You found a wrong bot answer in chat. What does the theory\'s "main secret" say to do?',
    },
    options: [
      {
        ru: 'Добавить этот запрос в eval set как новый тест-кейс — набор тестов должен расти с каждым найденным багом.',
        en: 'Add that query to the eval set as a new test case — the eval set must grow with every bug found.',
      },
      {
        ru: 'Удалить неудачный запрос из логов, чтобы не портить метрики.',
        en: 'Delete the failing query from the logs so it does not hurt the metrics.',
      },
      {
        ru: 'Сразу заменить модель на более мощную.',
        en: 'Immediately switch to a more powerful model.',
      },
    ],
    answer: {
      ru: 'Добавить этот запрос в eval set как новый тест-кейс — набор тестов должен расти с каждым найденным багом.',
      en: 'Add that query to the eval set as a new test case — the eval set must grow with every bug found.',
    },
    explanation: {
      ru: 'Именно. Каждый найденный баг превращается в тест: так eval set постепенно накрывает реальные слабые места системы, и регрессия по этому месту больше не пройдёт незамеченной.',
      en: 'Exactly. Every bug becomes a test: the eval set gradually covers the system\'s real weak spots, and a regression there can no longer slip through unnoticed.',
    },
  },
  {
    id: 7,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите этапы взросления процесса оценки промпта в правильном порядке.',
      en: 'Order the stages of maturing a prompt evaluation process.',
    },
    initialItems: [
      { ru: 'Установить Release Gate перед продакшеном', en: 'Set a Release Gate before production' },
      { ru: '«Вайб-чек» на нескольких вопросах', en: 'A "vibe check" on a few questions' },
      { ru: 'Пополнять eval set каждым найденным багом', en: 'Grow the eval set with every bug found' },
      { ru: 'Построить eval set и измерять качество числами', en: 'Build an eval set and measure quality with numbers' },
    ],
    correctOrder: [
      { ru: '«Вайб-чек» на нескольких вопросах', en: 'A "vibe check" on a few questions' },
      { ru: 'Построить eval set и измерять качество числами', en: 'Build an eval set and measure quality with numbers' },
      { ru: 'Установить Release Gate перед продакшеном', en: 'Set a Release Gate before production' },
      { ru: 'Пополнять eval set каждым найденным багом', en: 'Grow the eval set with every bug found' },
    ],
    explanation: {
      ru: 'Правильно: все начинают с «вайб-чека», затем переходят к измеримым эвалам, ставят Release Gate перед продакшеном и дальше растят набор тестов на реальных багах.',
      en: 'Correct: everyone starts with a vibe check, then moves to measurable evals, sets a Release Gate before production, and keeps growing the test set from real bugs.',
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать стратегию оценки тона для саппорт-бота',
      en: 'Mission: choose a tone-evaluation strategy for a support bot',
    },
    answer: '',
    explanation: {
      ru: 'Для оценки тона тысяч ответов в день подходит LLM-судья: он масштабируется и оценивает по критериям. Эксперты — золотой стандарт, но дорогой и медленный: их сила — эталонный набор, а не поток.',
      en: 'For scoring the tone of thousands of daily answers, an LLM judge fits: it scales and grades by criteria. Experts are the gold standard but expensive and slow — their strength is the ground-truth set, not the stream.',
    },
    scenario: {
      brief: {
        ru: 'Саппорт-бот отвечает клиентам тысячи раз в день. Нужно регулярно оценивать тон и дружелюбие ответов, не раздувая бюджет и не замедляя релизы.',
        en: 'A support bot answers customers thousands of times a day. You need to regularly evaluate answer tone and friendliness without inflating the budget or slowing releases.',
      },
      constraints: [
        { ru: 'Тысячи ответов в день', en: 'Thousands of answers per day' },
        { ru: 'Критерии субъективные: тон, дружелюбие', en: 'Subjective criteria: tone, friendliness' },
      ],
      choices: [
        {
          text: {
            ru: 'LLM-as-a-Judge: более мощная модель оценивает ответы по шкале 1–5 по критериям тона и дружелюбия.',
            en: 'LLM-as-a-Judge: a more powerful model scores answers 1-5 against tone and friendliness criteria.',
          },
          outcome: {
            ru: 'Верно. Судья-модель масштабируется на тысячи ответов и умеет оценивать субъективные критерии — ровно её сценарий из теории.',
            en: 'Correct. A judge model scales to thousands of answers and can grade subjective criteria — exactly its scenario from the theory.',
          },
          score: 90,
        },
        {
          text: {
            ru: 'Эксперты вручную читают каждый ответ бота.',
            en: 'Experts manually read every bot answer.',
          },
          outcome: {
            ru: 'Золотой стандарт качества, но дорого и медленно для тысяч ответов в день. Экспертов стоит использовать точечно — для эталонного набора.',
            en: 'The gold standard for quality, but expensive and slow at thousands of answers a day. Use experts selectively — for the ground-truth set.',
          },
          score: 35,
        },
        {
          text: {
            ru: 'Ограничиться «вайб-чеком» раз в неделю.',
            en: 'Stick to a weekly "vibe check".',
          },
          outcome: {
            ru: 'Это и есть главная ловушка: несколько вопросов не измеряют качество, и регрессии тона пройдут незамеченными.',
            en: 'That is the main trap: a few questions do not measure quality, and tone regressions will slip through unnoticed.',
          },
          score: 10,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Коллега хочет релизить после «вайб-чека»',
      en: 'A colleague wants to release after a "vibe check"',
    },
    answer: '',
    explanation: {
      ru: 'Несколько удачных ответов не защищают от регрессий. Перед продакшеном нужны eval set с числовыми метриками и Release Gate; иначе, по формуле теории, это алхимия, а не инженерия.',
      en: 'A few good answers do not protect against regressions. Production needs an eval set with numeric metrics and a Release Gate; otherwise, per the theory\'s formula, it is alchemy, not engineering.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега: «Я задал боту пять вопросов, ответы выглядят отлично — выкатываем новый промпт в продакшен». Что ответите?',
        en: 'A colleague says: "I asked the bot five questions, the answers look great — let\'s ship the new prompt to production." How do you respond?',
      },
      userOptions: [
        {
          text: {
            ru: 'Согласиться: если ответы выглядят хорошо, значит промпт работает.',
            en: 'Agree: if the answers look good, the prompt works.',
          },
          reaction: {
            ru: 'Это «вайб-чек» — главная ловушка AI-разработки. Пять вопросов не говорят, что стало с остальными сценариями: новая версия могла сломать то, что работало.',
            en: 'That is the "vibe check" — the main trap of AI development. Five questions say nothing about the other scenarios: the new version may have broken what used to work.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Предложить прогнать промпт через eval set и выпускать только после прохождения Release Gate.',
            en: 'Suggest running the prompt through the eval set and shipping only after it passes the Release Gate.',
          },
          reaction: {
            ru: 'Именно. Числовые метрики на наборе тестов покажут регрессии, а Release Gate не пустит в продакшен версию ниже порога качества.',
            en: 'Exactly. Numeric metrics on the test set reveal regressions, and the Release Gate keeps any version below the quality bar out of production.',
          },
          deepening: {
            ru: 'Формула из теории: если качество промпта не измеряется числами — это не инженерия ПО, а алхимия.',
            en: 'The theory\'s formula: if prompt quality is not measured with numbers, it is not software engineering — it is alchemy.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Запретить любые изменения промптов, чтобы ничего не сломать.',
            en: 'Forbid all prompt changes so nothing breaks.',
          },
          reaction: {
            ru: 'Слишком жёстко: улучшения нужны. Эвалы существуют ровно для того, чтобы менять промпты безопасно — с измеримым контролем регрессий.',
            en: 'Too rigid: improvements are needed. Evals exist precisely so prompts can change safely — with measurable regression control.',
          },
          isCorrect: false,
        },
      ],
    },
  },
];
