import { LocalizedTask } from '../types';

export const localModels101Tasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что вы на самом деле получаете, скачивая модель с открытыми весами?',
      en: 'What do you actually get when you download an open-weights model?',
    },
    options: [
      {
        ru: 'Готовые обученные параметры; обучающие данные и пайплайн обычно остаются закрытыми.',
        en: 'The finished trained parameters; the training data and pipeline usually stay closed.',
      },
      {
        ru: 'Полный набор обучающих данных и код обучения.',
        en: 'The full training dataset and the training code.',
      },
      {
        ru: 'Право использовать модель в любом коммерческом продукте без ограничений.',
        en: 'The right to use the model in any commercial product without restrictions.',
      },
    ],
    answer: {
      ru: 'Готовые обученные параметры; обучающие данные и пайплайн обычно остаются закрытыми.',
      en: 'The finished trained parameters; the training data and pipeline usually stay closed.',
    },
    explanation: {
      ru: 'Верно. Открытые веса — результат обучения, а не его рецепт: данные и пайплайн не публикуются, а лицензия может ограничивать использование.',
      en: 'Correct. Open weights are the result of training, not the recipe: data and pipeline are not published, and the license may restrict usage.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Введите название инструмента командной строки, который запускает локальную модель за пару команд (установка → pull → run).',
      en: 'Enter the name of the command-line tool that runs a local model in a couple of commands (install → pull → run).',
    },
    answer: 'ollama',
    hint: {
      ru: 'Название созвучно слову «лама».',
      en: 'The name sounds like "llama".',
    },
    explanation: {
      ru: 'Точно. Ollama — самый простой путь к первому локальному запуску: от установки до первого ответа около пяти минут.',
      en: 'Exactly. Ollama is the easiest path to a first local run: about five minutes from install to first answer.',
    },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: {
      ru: 'Выберите обоснованные причины выбрать локальную модель вместо облачного API.',
      en: 'Select the valid reasons to choose a local model over a cloud API.',
    },
    options: [
      {
        ru: 'Приватность: данные не покидают ваш компьютер или периметр компании.',
        en: 'Privacy: data never leaves your computer or company perimeter.',
      },
      {
        ru: 'Работа офлайн: модель отвечает без интернета.',
        en: 'Offline work: the model answers without internet access.',
      },
      {
        ru: 'Локальная модель 8B всегда умнее облачных фронтирных моделей.',
        en: 'A local 8B model is always smarter than frontier cloud models.',
      },
      {
        ru: 'Контроль затрат при больших объёмах: заплатить за железо один раз вместо оплаты каждого токена.',
        en: 'Cost control at volume: pay for hardware once instead of paying per token.',
      },
      {
        ru: 'Контроль поведения: модель не обновится без вашего ведома и её можно дообучить.',
        en: 'Behavior control: the model will not silently update and can be fine-tuned.',
      },
    ],
    answer: [
      {
        ru: 'Приватность: данные не покидают ваш компьютер или периметр компании.',
        en: 'Privacy: data never leaves your computer or company perimeter.',
      },
      {
        ru: 'Работа офлайн: модель отвечает без интернета.',
        en: 'Offline work: the model answers without internet access.',
      },
      {
        ru: 'Контроль затрат при больших объёмах: заплатить за железо один раз вместо оплаты каждого токена.',
        en: 'Cost control at volume: pay for hardware once instead of paying per token.',
      },
      {
        ru: 'Контроль поведения: модель не обновится без вашего ведома и её можно дообучить.',
        en: 'Behavior control: the model will not silently update and can be fine-tuned.',
      },
    ],
    explanation: {
      ru: 'Верно. Четыре реальные причины: приватность, офлайн, затраты и контроль. Про «всегда умнее» — наоборот: фронтирные облачные модели заметно сильнее любой модели, помещающейся на ноутбук.',
      en: 'Correct. Four real reasons: privacy, offline, cost, and control. "Always smarter" is backwards: frontier cloud models are noticeably stronger than anything that fits on a laptop.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Распределите семейства открытых моделей по компаниям, которые их выпускают.',
      en: 'Match each open model family to the company that releases it.',
    },
    answer: '',
    explanation: {
      ru: 'Верно. Llama — Meta, Qwen — Alibaba, Gemma — Google, Phi — Microsoft. Эти четыре семейства плюс Mistral и DeepSeek — ядро открытой экосистемы.',
      en: 'Correct. Llama is Meta, Qwen is Alibaba, Gemma is Google, Phi is Microsoft. These four families plus Mistral and DeepSeek form the core of the open ecosystem.',
    },
    categorize: {
      buckets: [
        { ru: 'Meta', en: 'Meta' },
        { ru: 'Alibaba', en: 'Alibaba' },
        { ru: 'Google', en: 'Google' },
        { ru: 'Microsoft', en: 'Microsoft' },
      ],
      items: [
        { ru: 'Llama', en: 'Llama' },
        { ru: 'Qwen', en: 'Qwen' },
        { ru: 'Gemma', en: 'Gemma' },
        { ru: 'Phi', en: 'Phi' },
      ],
      correctMapping: {
        'Llama': 'Meta',
        'Qwen': 'Alibaba',
        'Gemma': 'Google',
        'Phi': 'Microsoft',
      },
    },
  },
  {
    id: 5,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите шаги первого локального запуска через Ollama в правильном порядке.',
      en: 'Order the steps of a first local run with Ollama correctly.',
    },
    initialItems: [
      { ru: 'Проверить работу тестовым вопросом в чате', en: 'Verify it works with a test question in the chat' },
      { ru: 'Установить Ollama с официального сайта', en: 'Install Ollama from the official site' },
      { ru: 'Запустить модель командой запуска (run)', en: 'Start the model with the run command' },
      { ru: 'Скачать модель командой скачивания (pull)', en: 'Download a model with the pull command' },
    ],
    correctOrder: [
      { ru: 'Установить Ollama с официального сайта', en: 'Install Ollama from the official site' },
      { ru: 'Скачать модель командой скачивания (pull)', en: 'Download a model with the pull command' },
      { ru: 'Запустить модель командой запуска (run)', en: 'Start the model with the run command' },
      { ru: 'Проверить работу тестовым вопросом в чате', en: 'Verify it works with a test question in the chat' },
    ],
    explanation: {
      ru: 'Правильно: установка → pull → run → проверка. Весь путь занимает около пяти минут.',
      en: 'Correct: install → pull → run → verify. The whole journey takes about five minutes.',
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Что делает квантизация с моделью?',
      en: 'What does quantization do to a model?',
    },
    options: [
      {
        ru: 'Снижает точность чисел в весах: модель занимает меньше памяти ценой небольшой потери качества.',
        en: 'Lowers the numeric precision of the weights: the model takes less memory at the cost of a small quality loss.',
      },
      {
        ru: 'Увеличивает число параметров, чтобы модель стала умнее.',
        en: 'Increases the parameter count to make the model smarter.',
      },
      {
        ru: 'Шифрует веса модели для защиты от копирования.',
        en: 'Encrypts the model weights to protect against copying.',
      },
    ],
    answer: {
      ru: 'Снижает точность чисел в весах: модель занимает меньше памяти ценой небольшой потери качества.',
      en: 'Lowers the numeric precision of the weights: the model takes less memory at the cost of a small quality loss.',
    },
    explanation: {
      ru: 'Да. Q8 почти не теряет качества при вдвое меньшей памяти, Q4 экономит ещё больше ценой лёгкой деградации ответов.',
      en: 'Yes. Q8 loses almost no quality at half the memory; Q4 saves even more at the cost of slight answer degradation.',
    },
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Сопоставьте объём видеопамяти (VRAM) с моделью, которая в него помещается.',
      en: 'Match each VRAM budget to the model that fits in it.',
    },
    answer: '',
    explanation: {
      ru: 'Верно. 8 ГБ — модель 7–8B в Q4; 16 ГБ — 8B без сжатия; 30B+ требуют 24 ГБ и больше даже в Q4.',
      en: 'Correct. 8 GB fits a 7–8B model in Q4; 16 GB fits an 8B uncompressed; 30B+ models need 24 GB or more even in Q4.',
    },
    categorize: {
      buckets: [
        { ru: '8 ГБ', en: '8 GB' },
        { ru: '16 ГБ', en: '16 GB' },
        { ru: '24+ ГБ', en: '24+ GB' },
      ],
      items: [
        { ru: 'Модель 7–8B в квантизации Q4', en: 'A 7-8B model in Q4 quantization' },
        { ru: 'Модель 8B без сжатия', en: 'An 8B model uncompressed' },
        { ru: 'Модель класса 30B+ в Q4', en: 'A 30B+ class model in Q4' },
      ],
      correctMapping: {
        'A 7-8B model in Q4 quantization': '8 GB',
        'An 8B model uncompressed': '16 GB',
        'A 30B+ class model in Q4': '24+ GB',
      },
    },
  },
  {
    id: 8,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать архитектуру ассистента для частной клиники',
      en: 'Mission: choose the assistant architecture for a private clinic',
    },
    answer: '',
    explanation: {
      ru: 'Лучший выбор — локальная модель с RAG по документам клиники: данные пациентов не покидают периметр, а качества модели 8B достаточно для суммаризации и поиска по записям.',
      en: 'The best choice is a local model with RAG over the clinic documents: patient data never leaves the perimeter, and an 8B model is good enough for summarization and record search.',
    },
    scenario: {
      brief: {
        ru: 'Частная клиника хочет ассистента, который отвечает на вопросы врачей по внутренним протоколам и историям болезни. Юристы запрещают передавать данные пациентов третьим лицам. Бюджет ограничен, но на один сервер с видеокартой хватает.',
        en: 'A private clinic wants an assistant that answers doctors\' questions about internal protocols and patient records. Legal forbids sharing patient data with third parties. The budget is limited but covers one server with a GPU.',
      },
      constraints: [
        { ru: 'Данные пациентов не должны покидать инфраструктуру клиники', en: 'Patient data must not leave the clinic infrastructure' },
        { ru: 'Бюджет: один сервер с видеокартой', en: 'Budget: one server with a GPU' },
      ],
      choices: [
        {
          text: {
            ru: 'Локальная открытая модель на сервере клиники + RAG по внутренним документам.',
            en: 'A local open model on the clinic server + RAG over internal documents.',
          },
          outcome: {
            ru: 'Правильно. Данные остаются в периметре, задачи (поиск, суммаризация) по силам модели 7–9B, бюджет соблюдён.',
            en: 'Correct. Data stays inside the perimeter, the tasks (search, summarization) suit a 7-9B model, and the budget holds.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Отправлять запросы с данными пациентов в облачный API фронтирной модели — она умнее.',
            en: 'Send requests with patient data to a frontier cloud API — it is smarter.',
          },
          outcome: {
            ru: 'Нарушение ключевого ограничения: данные пациентов уходят третьей стороне. Качество модели не оправдывает юридический риск.',
            en: 'This violates the key constraint: patient data goes to a third party. Model quality does not justify the legal risk.',
          },
          score: 10,
        },
        {
          text: {
            ru: 'Отказаться от ИИ: слишком рискованно для медицины.',
            en: 'Reject AI entirely: too risky for medicine.',
          },
          outcome: {
            ru: 'Слишком осторожно. Локальный запуск решает проблему приватности — отказ лишает врачей полезного инструмента без необходимости.',
            en: 'Overly cautious. Local deployment solves the privacy problem — refusing denies doctors a useful tool without need.',
          },
          score: 35,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Локальная модель отвечает слабее ChatGPT. Что посоветовать?',
      en: 'The local model answers worse than ChatGPT. What is the right advice?',
    },
    answer: '',
    explanation: {
      ru: 'Разрыв между моделью 8B и фронтирной облачной ожидаем. Рабочая стратегия — подбирать инструмент под задачу и эскалировать сложное в облако, когда данные позволяют.',
      en: 'The gap between an 8B model and a frontier cloud model is expected. The working strategy is to match the tool to the task and escalate hard cases to the cloud when data allows.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега скачал модель 8B, сравнил ответы с ChatGPT и разочарован: «локальные модели — игрушка». Как ответите?',
        en: 'A colleague downloaded an 8B model, compared answers with ChatGPT, and is disappointed: "local models are a toy." How do you respond?',
      },
      userOptions: [
        {
          text: {
            ru: 'Согласиться: локальные модели бесполезны, работать нужно только с облаком.',
            en: 'Agree: local models are useless, only the cloud is worth using.',
          },
          reaction: {
            ru: 'Слишком категорично. Для суммаризации, черновиков и работы с приватными данными класс 7–9B справляется хорошо — вопрос в правильных ожиданиях.',
            en: 'Too categorical. For summarization, drafts, and private-data work the 7-9B class does well — it is a matter of right expectations.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Объяснить разрыв размером моделей и предложить гибрид: локальная — для потока и приватного, облачная — для сложного.',
            en: 'Explain the gap by model size and suggest a hybrid: local for volume and private data, cloud for hard cases.',
          },
          reaction: {
            ru: 'Точно. Модель на ноутбуке в сотни раз меньше фронтирной — сравнивать их в лоб некорректно. Гибридная схема берёт лучшее от обоих миров.',
            en: 'Exactly. A laptop model is hundreds of times smaller than a frontier one — head-to-head comparison is unfair. The hybrid pattern takes the best of both worlds.',
          },
          deepening: {
            ru: 'На практике схема «локальная для потока, облачная для сложного» встречается чаще чистых крайностей. Ключевой фильтр — можно ли отправлять данные наружу.',
            en: 'In practice, "local for volume, cloud for hard cases" is more common than either extreme. The key filter is whether the data may leave the perimeter.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Посоветовать срочно купить несколько видеокарт и запустить модель 70B.',
            en: 'Advise urgently buying several GPUs and running a 70B model.',
          },
          reaction: {
            ru: 'Дорогое решение до постановки задачи. Сначала стоит понять, какие задачи нужны, — возможно, 8B хватает, а сложное дешевле эскалировать в облако.',
            en: 'An expensive fix before defining the problem. First identify the tasks — 8B may suffice, and escalating hard cases to the cloud can be cheaper.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 10,
    type: 'timeline',
    question: {
      ru: 'Расставьте вехи открытых моделей в хронологическом порядке.',
      en: 'Arrange the open-model milestones in chronological order.',
    },
    answer: '',
    explanation: {
      ru: 'Правильно: LLaMA (февраль 2023) → Llama 2 (июль 2023) → Mistral 7B (сентябрь 2023) → Llama 3.1 (июль 2024) → DeepSeek-R1 (январь 2025).',
      en: 'Correct: LLaMA (February 2023) → Llama 2 (July 2023) → Mistral 7B (September 2023) → Llama 3.1 (July 2024) → DeepSeek-R1 (January 2025).',
    },
    timeline: {
      events: [
        {
          label: { ru: 'LLaMA — первая версия от Meta', en: 'LLaMA — the first version from Meta' },
          year: '02.2023',
        },
        {
          label: { ru: 'Llama 2 — первый официальный открытый релиз', en: 'Llama 2 — the first official open release' },
          year: '07.2023',
        },
        {
          label: { ru: 'Mistral 7B — маленькая модель обгоняет вдвое большие', en: 'Mistral 7B — a small model beats ones twice its size' },
          year: '09.2023',
        },
        {
          label: { ru: 'Llama 3.1 — новая планка качества открытых моделей', en: 'Llama 3.1 — a new quality bar for open models' },
          year: '07.2024',
        },
        {
          label: { ru: 'DeepSeek-R1 — открытая рассуждающая модель', en: 'DeepSeek-R1 — an open reasoning model' },
          year: '01.2025',
        },
      ],
      correctOrder: [
        { ru: 'LLaMA — первая версия от Meta', en: 'LLaMA — the first version from Meta' },
        { ru: 'Llama 2 — первый официальный открытый релиз', en: 'Llama 2 — the first official open release' },
        { ru: 'Mistral 7B — маленькая модель обгоняет вдвое большие', en: 'Mistral 7B — a small model beats ones twice its size' },
        { ru: 'Llama 3.1 — новая планка качества открытых моделей', en: 'Llama 3.1 — a new quality bar for open models' },
        { ru: 'DeepSeek-R1 — открытая рассуждающая модель', en: 'DeepSeek-R1 — an open reasoning model' },
      ],
    },
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Согласно исследованиям по безопасности из главы 6, почему специалисты запускают модели локально для чувствительной работы?',
      en: 'According to the security research in Chapter 6, why do practitioners run models locally for sensitive work?',
    },
    options: [
      {
        ru: 'Ради контроля, приватности и воспроизводимости: данные остаются в периметре, а версия модели зафиксирована — при том что фронтирные облачные модели всё ещё сильнее в рассуждениях.',
        en: 'For control, privacy, and reproducibility: data stays inside the perimeter and the model version is pinned — even though frontier cloud models still lead on reasoning.',
      },
      {
        ru: 'Потому что локальные модели способнее фронтирных облачных на любых задачах безопасности.',
        en: 'Because local models are more capable than frontier cloud models on every security task.',
      },
      {
        ru: 'Потому что локальный запуск снимает необходимость получать разрешение перед тестированием системы.',
        en: 'Because running locally removes the need to get authorization before testing a system.',
      },
    ],
    answer: {
      ru: 'Ради контроля, приватности и воспроизводимости: данные остаются в периметре, а версия модели зафиксирована — при том что фронтирные облачные модели всё ещё сильнее в рассуждениях.',
      en: 'For control, privacy, and reproducibility: data stays inside the perimeter and the model version is pinned — even though frontier cloud models still lead on reasoning.',
    },
    explanation: {
      ru: 'Верно. Литература называет мотивами приватность, офлайн-работу, затраты, воспроизводимость, кастомизацию и прозрачность — и специально оговаривает, что локальные модели не способнее фронтирных. Разрешение владельца системы нужно всегда, локальный запуск его не отменяет.',
      en: 'Correct. The literature cites privacy, offline work, cost, reproducibility, customization, and transparency — and explicitly notes local models are not more capable than frontier ones. Authorization from the system owner is always required; running locally does not remove it.',
    },
  },
];
