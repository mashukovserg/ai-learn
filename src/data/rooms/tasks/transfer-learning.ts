import { LocalizedTask } from '../types';

export const transferLearningTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'input',
    question: {
      ru: 'Как называется подход, при котором модель сначала учат на большой общей задаче, а потом переиспользуют выученное для другой, более узкой? (термин на английском или по-русски)',
      en: 'What is the approach called in which a model is first trained on a large general task and what it learned is then reused for another, narrower one?'
    },
    answer: [
      'transfer learning',
      'transfer-learning',
      'перенос обучения',
      'трансферное обучение',
      'обучение с переносом',
    ],
    hint: {
      ru: 'Два английских слова: «перенос» и «обучение».',
      en: 'Two words: "transfer" and "learning".'
    },
    explanation: {
      ru: 'Transfer learning (перенос обучения): общая задача даёт много дешёвых данных, целевая обычно маленькая, и с нуля на ней ничего хорошего не выучить. Схему записывают как «pretrain → adapt».',
      en: 'Transfer learning: the general task supplies plenty of cheap data, the target task is usually small, and nothing good can be learned on it from scratch. The scheme is written as "pretrain → adapt".'
    }
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называется первый этап, на котором модель учат предсказывать следующее или пропущенное слово по огромному корпусу — без ручной разметки?',
      en: 'What is the first stage called, in which a model is trained to predict the next or a masked word over a huge corpus — with no human labelling?'
    },
    answer: [
      'предобучение',
      'pretraining',
      'pre-training',
      'pre training',
      'претрейнинг',
      'предварительное обучение',
    ],
    hint: {
      ru: 'По-английски — pre + training.',
      en: 'pre + training.'
    },
    explanation: {
      ru: 'Предобучение (pretraining). Текст сам служит ключом ответов, поэтому любой текст становится обучающим примером; итог — базовая модель, которую потом адаптируют.',
      en: 'Pretraining. The text itself is the answer key, so any text becomes a training example; the result is a base model that is adapted afterwards.'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как одним термином называют всё обучение после предобучения — SFT на инструкциях, RLHF, RL на задачах с проверяемым ответом, — которое превращает «продолжателя текстов» в ассистента?',
      en: 'What single term covers all the training after pretraining — SFT on instructions, RLHF, RL on tasks with verifiable answers — that turns a "text continuer" into an assistant?'
    },
    answer: [
      'post-training',
      'post training',
      'posttraining',
      'пост-обучение',
      'постобучение',
      'пост обучение',
      'пост-тренинг',
      'посттренинг',
    ],
    hint: {
      ru: 'По-английски — post + training.',
      en: 'post + training.'
    },
    explanation: {
      ru: 'Post-training (пост-обучение). Формально это тоже перенос обучения: веса предобученной модели сдвигаются под новую цель — вести себя как ассистент.',
      en: 'Post-training. Formally this is transfer learning too: the pretrained weights shift toward a new goal — behaving like an assistant.'
    }
  },
  {
    id: 4,
    type: 'timeline',
    question: {
      ru: 'Расположите работы, из которых сложилась парадигма «pretrain → adapt», в хронологическом порядке.',
      en: 'Arrange the works that built the "pretrain → adapt" paradigm in chronological order.'
    },
    answer: '',
    explanation: {
      ru: 'Сначала зрение (Йосински и др., 2014), затем язык (BERT, 2018), затем промпт без обновления весов (GPT-3, 2020), дешёвое дообучение (LoRA, 2021), post-training как продукт (InstructGPT, 2022) и вывод о «поверхностном выравнивании» (LIMA, 2023).',
      en: 'Vision first (Yosinski et al., 2014), then language (BERT, 2018), then prompting with no weight updates (GPT-3, 2020), cheap fine-tuning (LoRA, 2021), post-training as a product (InstructGPT, 2022), and the "superficial alignment" finding (LIMA, 2023).'
    },
    timeline: {
      events: [
        { label: { ru: 'LIMA: 1000 примеров делают из базовой модели ассистента', en: 'LIMA: 1,000 examples turn a base model into an assistant' }, year: '2023' },
        { label: { ru: 'Йосински и др.: нижние слои сети для ImageNet учат общие признаки', en: 'Yosinski et al.: the lower layers of an ImageNet network learn general features' }, year: '2014' },
        { label: { ru: 'LoRA: основные веса заморожены, учится низкоранговая добавка', en: 'LoRA: base weights frozen, a low-rank add-on is trained' }, year: '2021' },
        { label: { ru: 'BERT: предобучение на пропущенных словах', en: 'BERT: pretraining on masked words' }, year: '2018' },
        { label: { ru: 'InstructGPT: модель 1,3B после post-training предпочитают GPT-3 175B', en: 'InstructGPT: a 1.3B model after post-training is preferred to 175B GPT-3' }, year: '2022' },
        { label: { ru: 'GPT-3: few-shot в промпте без обновления весов', en: 'GPT-3: few-shot prompting with no weight updates' }, year: '2020' },
      ],
      correctOrder: [
        { ru: 'Йосински и др.: нижние слои сети для ImageNet учат общие признаки', en: 'Yosinski et al.: the lower layers of an ImageNet network learn general features' },
        { ru: 'BERT: предобучение на пропущенных словах', en: 'BERT: pretraining on masked words' },
        { ru: 'GPT-3: few-shot в промпте без обновления весов', en: 'GPT-3: few-shot prompting with no weight updates' },
        { ru: 'LoRA: основные веса заморожены, учится низкоранговая добавка', en: 'LoRA: base weights frozen, a low-rank add-on is trained' },
        { ru: 'InstructGPT: модель 1,3B после post-training предпочитают GPT-3 175B', en: 'InstructGPT: a 1.3B model after post-training is preferred to 175B GPT-3' },
        { ru: 'LIMA: 1000 примеров делают из базовой модели ассистента', en: 'LIMA: 1,000 examples turn a base model into an assistant' },
      ]
    }
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Расположите этапы жизни современной модели-ассистента в том порядке, в котором они происходят.',
      en: 'Arrange the stages in the life of a modern assistant model in the order in which they happen.'
    },
    answer: '',
    explanation: {
      ru: 'Корпус собирают и чистят до обучения; предобучение даёт базовую модель; post-training обычно идёт от SFT к обучению с подкреплением; промпт пользователя работает уже с готовыми весами и ничего в них не меняет.',
      en: 'The corpus is collected and cleaned before training; pretraining yields the base model; post-training usually goes from SFT to reinforcement learning; the user\'s prompt works with the finished weights and changes nothing in them.'
    },
    initialItems: [
      { ru: 'Промпт пользователя с примерами', en: 'The user\'s prompt with examples' },
      { ru: 'SFT на примерах инструкций и ответов', en: 'SFT on examples of instructions and answers' },
      { ru: 'Курирование корпуса: дедупликация, фильтры качества, пропорции доменов', en: 'Corpus curation: deduplication, quality filters, domain proportions' },
      { ru: 'Обучение с подкреплением: RLHF или задачи с проверяемым ответом', en: 'Reinforcement learning: RLHF or tasks with verifiable answers' },
      { ru: 'Предобучение на предсказании слов', en: 'Pretraining on word prediction' },
    ],
    correctOrder: [
      { ru: 'Курирование корпуса: дедупликация, фильтры качества, пропорции доменов', en: 'Corpus curation: deduplication, quality filters, domain proportions' },
      { ru: 'Предобучение на предсказании слов', en: 'Pretraining on word prediction' },
      { ru: 'SFT на примерах инструкций и ответов', en: 'SFT on examples of instructions and answers' },
      { ru: 'Обучение с подкреплением: RLHF или задачи с проверяемым ответом', en: 'Reinforcement learning: RLHF or tasks with verifiable answers' },
      { ru: 'Промпт пользователя с примерами', en: 'The user\'s prompt with examples' },
    ]
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Разделите способы адаптации: какие меняют веса модели (все или добавку к ним), а какие — только вход?',
      en: 'Sort the adaptation methods: which change the model\'s weights (all of them or an add-on), and which change only the input?'
    },
    answer: '',
    explanation: {
      ru: 'Полное дообучение, LoRA, SFT и RLHF меняют веса — все или обучаемую добавку. Few-shot примеры и просьба рассуждать по шагам меняют только вход: веса остаются прежними, и промпт выбирает из уже выученного.',
      en: 'Full fine-tuning, LoRA, SFT and RLHF change weights — all of them or a trainable add-on. Few-shot examples and a request to reason step by step change only the input: the weights stay the same, and the prompt selects from what was already learned.'
    },
    categorize: {
      items: [
        { ru: 'Полное дообучение (full fine-tuning)', en: 'Full fine-tuning' },
        { ru: 'LoRA-адаптер', en: 'A LoRA adapter' },
        { ru: 'Три примера «вход → ответ» в промпте', en: 'Three "input → answer" examples in the prompt' },
        { ru: 'SFT на тысяче диалогов', en: 'SFT on a thousand dialogues' },
        { ru: 'Просьба в промпте рассуждать по шагам', en: 'Asking in the prompt to reason step by step' },
        { ru: 'RLHF на оценках людей', en: 'RLHF on human ratings' },
      ],
      buckets: [
        { ru: 'Меняет веса', en: 'Changes weights' },
        { ru: 'Меняет только вход', en: 'Changes only the input' },
      ],
      correctMapping: {
        'Full fine-tuning': 'Changes weights',
        'A LoRA adapter': 'Changes weights',
        'Three "input → answer" examples in the prompt': 'Changes only the input',
        'SFT on a thousand dialogues': 'Changes weights',
        'Asking in the prompt to reason step by step': 'Changes only the input',
        'RLHF on human ratings': 'Changes weights',
      }
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Две копии одной предобученной модели дообучили на разных задачах, а потом взяли точки на прямой между их весами. Что показал этот эксперимент (Нейшабур и др., 2020)?',
      en: 'Two copies of one pretrained model were fine-tuned on different tasks, and then points on the straight line between their weights were taken. What did this experiment (Neyshabur et al., 2020) show?'
    },
    options: [
      { ru: 'Между ними высокий барьер: дообученные модели разбегаются в разные области ландшафта', en: 'There is a high barrier between them: fine-tuned models scatter into different regions of the landscape' },
      { ru: 'Потери на всём пути остаются низкими: обе модели лежат в одном «бассейне» исходной модели', en: 'The loss stays low all along the path: both models lie in the same "basin" as the original model' },
      { ru: 'Промежуточные модели возвращаются к случайной инициализации', en: 'The intermediate models revert to a random initialisation' },
    ],
    answer: { ru: 'Потери на всём пути остаются низкими: обе модели лежат в одном «бассейне» исходной модели', en: 'The loss stays low all along the path: both models lie in the same "basin" as the original model' },
    explanation: {
      ru: 'Дообучение — это в основном локальное движение из точки, куда модель привело предобучение. У моделей, обученных с нуля, такой общей низины нет: между ними барьер, даже если обе начинали из одной и той же случайной точки.',
      en: 'Fine-tuning is mostly local movement from the point where pretraining brought the model. Models trained from scratch share no such valley: there is a barrier between them, even when both started from the very same random point.'
    }
  },
  {
    id: 8,
    type: 'multiple-select',
    question: {
      ru: 'Что из этого крупные лаборатории действительно делают с корпусом для предобучения?',
      en: 'Which of these do large labs actually do with a pretraining corpus?'
    },
    options: [
      { ru: 'Удаляют дубликаты', en: 'Remove duplicates' },
      { ru: 'Фильтруют тексты отдельным классификатором качества', en: 'Filter texts with a separate quality classifier' },
      { ru: 'Повышают долю кода и математики', en: 'Upweight code and maths' },
      { ru: 'Добавляют синтетические данные', en: 'Add synthetic data' },
      { ru: 'Берут равномерную случайную выборку интернета без фильтров', en: 'Take a uniform random sample of the internet with no filters' },
      { ru: 'Размечают весь корпус по готовой онтологии знаний', en: 'Label the whole corpus against a ready-made ontology of knowledge' },
    ],
    answer: [
      { ru: 'Удаляют дубликаты', en: 'Remove duplicates' },
      { ru: 'Фильтруют тексты отдельным классификатором качества', en: 'Filter texts with a separate quality classifier' },
      { ru: 'Повышают долю кода и математики', en: 'Upweight code and maths' },
      { ru: 'Добавляют синтетические данные', en: 'Add synthetic data' },
    ],
    explanation: {
      ru: 'Смесь данных подбирают под цели: дедупликация, фильтры качества, пропорции доменов, синтетика. Готовой онтологии нет, но и «реального распределения текстов» тоже нет — цели у подбора прагматические.',
      en: 'The data mixture is tuned to goals: deduplication, quality filters, domain proportions, synthetic data. There is no ready-made ontology, but there is no "real distribution of texts" either — the goals of the selection are pragmatic.'
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: { ru: 'Научить модель каталогу через дообучение', en: 'Teaching a model the catalogue through fine-tuning' },
    answer: '',
    explanation: {
      ru: 'По LIMA знания почти целиком приходят из предобучения, а тысяча примеров в основном выбирает режим и стиль. Формат ответа можно закрепить дообучением, а новые факты надёжнее подавать во входе — через контекст или RAG.',
      en: 'Per LIMA, knowledge comes almost entirely from pretraining, while a thousand examples mostly select mode and style. The answer format can be fixed by fine-tuning, while new facts are more reliably supplied in the input — through the context or RAG.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега предлагает: «В LIMA тысячи примеров хватило, чтобы сделать ассистента. Давайте дообучим модель на тысяче пар “вопрос — ответ” по нашему новому каталогу из 5000 товаров — и она будет знать каталог». Что вы ответите?',
        en: 'A colleague suggests: "In LIMA a thousand examples were enough to make an assistant. Let\'s fine-tune the model on a thousand question–answer pairs about our new 5,000-product catalogue — and it will know the catalogue." What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Согласен: если тысячи примеров хватило на ассистента, хватит и на каталог.', en: 'Agreed: if a thousand examples were enough for an assistant, they are enough for a catalogue.' },
          reaction: {
            ru: 'Здесь вывод LIMA перевёрнут. Тысяча примеров сработала потому, что знания уже были в модели после предобучения, а дообучение выбрало стиль и формат. Новых фактов о 5000 товаров в модели нет, и тысяча пар их надёжно не впечатает.',
            en: 'This turns LIMA\'s conclusion upside down. A thousand examples worked because the knowledge was already in the model after pretraining, and fine-tuning selected style and format. The model has no facts about 5,000 products, and a thousand pairs will not reliably imprint them.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'LIMA говорит об обратном: дообучение в основном выбирает стиль. Формат ответов можно дообучить, а сам каталог подавать во входе — через контекст или RAG.', en: 'LIMA says the opposite: fine-tuning mostly selects style. The answer format can be fine-tuned, while the catalogue itself goes into the input — through the context or RAG.' },
          reaction: {
            ru: 'Верно. По гипотезе поверхностного выравнивания знания почти целиком приходят из предобучения. Адаптация сдвигает модель локально — внутри того же «бассейна» — и выбирает режим, а факты, которых в модели нет, надёжнее давать ей во входе.',
            en: 'Correct. Under the superficial alignment hypothesis, knowledge comes almost entirely from pretraining. Adaptation moves the model locally — within the same "basin" — and selects a mode, while facts the model lacks are more reliably given to it in the input.'
          },
          isCorrect: true,
          deepening: {
            ru: 'Та же граница у промпта: он выбирает из уже выученного. Если нужной способности или факта в модели нет, никакие токены инструкции их не создадут — нужен вход с данными или другое обучение.',
            en: 'The prompt has the same boundary: it selects from what was already learned. If the capability or fact is not in the model, no instruction tokens will create it — you need input with the data, or different training.'
          }
        },
        {
          text: { ru: 'Нужно полное дообучение вместо LoRA: тогда модель точно запомнит все товары.', en: 'We need full fine-tuning instead of LoRA: then the model will definitely memorise every product.' },
          reaction: {
            ru: 'Глубина вмешательства не меняет сути: и полное дообучение обычно сдвигает веса лишь немного от предобученной точки. Задача «знать 5000 актуальных фактов» решается подачей данных во входе, а не более дорогой ступенью лестницы.',
            en: 'The depth of intervention does not change the point: full fine-tuning too usually shifts the weights only slightly from the pretrained point. The task "know 5,000 current facts" is solved by supplying data in the input, not by a more expensive rung of the ladder.'
          },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Какое утверждение о галлюцинациях соответствует формальным результатам, разобранным в комнате?',
      en: 'Which statement about hallucinations matches the formal results discussed in the room?'
    },
    options: [
      { ru: 'Полностью устранить их нельзя, но частоту можно снижать; оценки, которые поощряют угадывание вместо «не знаю», её поддерживают', en: 'They cannot be eliminated completely, but their rate can be reduced; evaluations that reward guessing over "I don\'t know" keep it up' },
      { ru: 'Раз они неустранимы, модель ошибается в каждом ответе', en: 'Since they cannot be eliminated, the model errs in every answer' },
      { ru: 'Post-training с RLHF устраняет их полностью', en: 'Post-training with RLHF eliminates them completely' },
    ],
    answer: { ru: 'Полностью устранить их нельзя, но частоту можно снижать; оценки, которые поощряют угадывание вместо «не знаю», её поддерживают', en: 'They cannot be eliminated completely, but their rate can be reduced; evaluations that reward guessing over "I don\'t know" keep it up' },
    explanation: {
      ru: '«Неустранимы в принципе» не значит «всегда». Сюй и др. (2024) доказывают, что полностью устранить галлюцинации нельзя; Калаи и др. (2025) показывают, что их поддерживает система оценки, где угадывание выгоднее отказа. Модель, которая умеет говорить «не знаю», ошибается заметно реже.',
      en: '"Impossible to eliminate in principle" does not mean "always". Xu et al. (2024) prove that hallucinations cannot be eliminated completely; Kalai et al. (2025) show that they are sustained by grading in which guessing pays better than abstaining. A model that can say "I don\'t know" errs noticeably less often.'
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Можно ли дообучить закрытую модель, если её веса вам недоступны?',
      en: 'Can you fine-tune a closed model if its weights are not available to you?'
    },
    options: [
      { ru: 'Нет: без весов на руках дообучение невозможно', en: 'No: without the weights in hand, fine-tuning is impossible' },
      { ru: 'Да, если провайдер это предлагает: веса остаются у него, а вы получаете идентификатор новой модели', en: 'Yes, if the provider offers it: the weights stay with the provider, and you get the identifier of a new model' },
      { ru: 'Только промптом: он и есть дообучение закрытой модели', en: 'Only through the prompt: that is what fine-tuning a closed model is' },
    ],
    answer: { ru: 'Да, если провайдер это предлагает: веса остаются у него, а вы получаете идентификатор новой модели', en: 'Yes, if the provider offers it: the weights stay with the provider, and you get the identifier of a new model' },
    explanation: {
      ru: 'Модели Gemini дообучают в облаке Google, и веса для этого не нужны. Но доступность решает провайдер: OpenAI с мая 2026 года сворачивает свою платформу дообучения. «Невозможно» — слишком сильно, «всегда доступно» — тоже. Промпт веса не меняет и дообучением не является.',
      en: 'Gemini models are fine-tuned in Google\'s cloud, with no weights needed. But the provider decides availability: since May 2026 OpenAI has been winding down its fine-tuning platform. "Impossible" is too strong, and so is "always available". A prompt does not change weights and is not fine-tuning.'
    }
  },
];
