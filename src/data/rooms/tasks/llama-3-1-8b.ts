import { LocalizedTask } from '../types';

export const llama31_8bTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Когда Meta выпустила семейство моделей Llama 3.1?',
      en: 'When did Meta release the Llama 3.1 family of models?',
    },
    options: [
      { ru: 'Февраль 2023', en: 'February 2023' },
      { ru: 'Июль 2024', en: 'July 2024' },
      { ru: 'Декабрь 2024', en: 'December 2024' },
      { ru: 'Март 2025', en: 'March 2025' },
    ],
    answer: { ru: 'Июль 2024', en: 'July 2024' },
    explanation: {
      ru: 'Верно! Llama 3.1 вышла 23 июля 2024 года — в составе семейства 8B, 70B и 405B. Именно эта серия впервые принесла открытым моделям окно контекста 128K и догнала закрытые модели на многих бенчмарках.',
      en: 'Correct! Llama 3.1 was released on July 23, 2024 — as a family of 8B, 70B, and 405B variants. This release was the first time open-weights models got a 128K context window and caught up with closed models on many benchmarks.',
    },
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Под какой лицензией выпущена Llama 3.1?',
      en: 'Under what licence is Llama 3.1 released?',
    },
    options: [
      { ru: 'MIT (никаких ограничений)', en: 'MIT (no restrictions)' },
      { ru: 'Apache 2.0', en: 'Apache 2.0' },
      { ru: 'Llama Community License — открытые веса с условиями для очень крупных компаний', en: 'Llama Community License — open weights with conditions for very large companies' },
      { ru: 'Полностью проприетарная: только через API', en: 'Fully proprietary: API-only access' },
    ],
    answer: {
      ru: 'Llama Community License — открытые веса с условиями для очень крупных компаний',
      en: 'Llama Community License — open weights with conditions for very large companies',
    },
    explanation: {
      ru: 'Верно! Это не MIT/Apache, но и не проприетарная лицензия. Веса можно свободно скачивать, дообучать и использовать коммерчески. Главное ограничение: компании с >700M активных пользователей в месяц должны запросить отдельную лицензию у Meta.',
      en: 'Correct! It is not MIT/Apache, but also not proprietary. Weights can be freely downloaded, fine-tuned, and used commercially. The main restriction: companies with >700M monthly active users must request a separate licence from Meta.',
    },
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется механизм внимания, который использует Llama 3.1, чтобы экономить память при больших окнах контекста? (трёхбуквенная аббревиатура)',
      en: 'What is the attention mechanism Llama 3.1 uses to save memory at large context windows called? (three-letter abbreviation)',
    },
    answer: 'GQA',
    hint: { ru: 'Grouped-Query ...', en: 'Grouped-Query ...' },
    explanation: {
      ru: 'Верно! GQA (Grouped-Query Attention) — компромисс между обычным multi-head attention и multi-query attention: несколько query-голов делят одну пару key/value. Это резко уменьшает размер KV-кэша на длинных контекстах, не теряя качества.',
      en: 'Correct! GQA (Grouped-Query Attention) is a compromise between standard multi-head attention and multi-query attention: several query heads share one key/value pair. This drastically shrinks the KV cache on long contexts without losing quality.',
    },
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Распределите факты о Llama 3.1 8B по категориям: что относится к "Открытости экосистемы", а что к "Архитектуре модели"?',
      en: 'Categorize facts about Llama 3.1 8B: which belong to "Ecosystem Openness" vs "Model Architecture"?',
    },
    answer: '',
    explanation: {
      ru: 'Открытость — это про то, что выложено наружу и как этим можно пользоваться (веса, лицензия, экосистема инструментов). Архитектура — это конкретные технические решения внутри модели: GQA, RoPE, SwiGLU, окно контекста.',
      en: 'Openness is about what is published and how it can be used (weights, licence, tooling ecosystem). Architecture is about specific technical choices inside the model: GQA, RoPE, SwiGLU, context window.',
    },
    categorize: {
      items: [
        { ru: 'Веса опубликованы на Hugging Face', en: 'Weights published on Hugging Face' },
        { ru: 'Окно контекста 128K токенов через RoPE-скейлинг', en: '128K-token context window via RoPE scaling' },
        { ru: 'Grouped-Query Attention уменьшает KV-кэш', en: 'Grouped-Query Attention shrinks the KV cache' },
        { ru: 'Можно дообучать и использовать в коммерческих продуктах', en: 'Can be fine-tuned and used in commercial products' },
        { ru: 'Поддержка в Ollama, vLLM, llama.cpp из коробки', en: 'Out-of-the-box support in Ollama, vLLM, llama.cpp' },
        { ru: 'Активации SwiGLU и нормализация RMSNorm', en: 'SwiGLU activations and RMSNorm normalization' },
      ],
      buckets: [
        { ru: 'Открытость экосистемы', en: 'Ecosystem Openness' },
        { ru: 'Архитектура модели', en: 'Model Architecture' },
      ],
      correctMapping: {
        'Weights published on Hugging Face': 'Ecosystem Openness',
        '128K-token context window via RoPE scaling': 'Model Architecture',
        'Grouped-Query Attention shrinks the KV cache': 'Model Architecture',
        'Can be fine-tuned and used in commercial products': 'Ecosystem Openness',
        'Out-of-the-box support in Ollama, vLLM, llama.cpp': 'Ecosystem Openness',
        'SwiGLU activations and RMSNorm normalization': 'Model Architecture',
      },
    },
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Выберите настоящие причины, почему Llama 3.1 8B стала любимой моделью для локального инференса.',
      en: 'Select the real reasons Llama 3.1 8B became the favourite model for local inference.',
    },
    options: [
      { ru: 'В 4-битной квантизации помещается на потребительскую GPU с 8–24 ГБ VRAM', en: 'In 4-bit quantization it fits on a consumer GPU with 8–24 GB VRAM' },
      { ru: 'Лицензия достаточно либеральна для большинства коммерческих продуктов', en: 'The licence is permissive enough for most commercial products' },
      { ru: 'Есть качественная instruction-tuned версия, готовая к использованию', en: 'There is a strong instruction-tuned variant, ready to use' },
      { ru: 'Поддерживается во всех популярных runtime: Ollama, vLLM, llama.cpp', en: 'Supported by every popular runtime: Ollama, vLLM, llama.cpp' },
      { ru: 'Это самая быстрая закрытая (proprietary) модель в мире', en: 'It is the fastest closed-source model in the world' },
    ],
    answer: [
      { ru: 'В 4-битной квантизации помещается на потребительскую GPU с 8–24 ГБ VRAM', en: 'In 4-bit quantization it fits on a consumer GPU with 8–24 GB VRAM' },
      { ru: 'Лицензия достаточно либеральна для большинства коммерческих продуктов', en: 'The licence is permissive enough for most commercial products' },
      { ru: 'Есть качественная instruction-tuned версия, готовая к использованию', en: 'There is a strong instruction-tuned variant, ready to use' },
      { ru: 'Поддерживается во всех популярных runtime: Ollama, vLLM, llama.cpp', en: 'Supported by every popular runtime: Ollama, vLLM, llama.cpp' },
    ],
    explanation: {
      ru: 'Верно! Llama 3.1 8B — это именно открытая модель: проприетарной её называть нельзя. Четыре первых пункта вместе и сделали её стандартом для локального инференса: достаточно маленькая, достаточно «свободная», готовая к диалогу, и поддерживается всем, что вы установите.',
      en: 'Correct! Llama 3.1 8B is precisely an open-weights model — calling it proprietary is wrong. The first four reasons together made it the standard for local inference: small enough, free enough, ready for chat, and supported by anything you install.',
    },
  },
  {
    id: 6,
    type: 'scenario',
    question: {
      ru: 'Выбор LLM для приватного ассистента в стартапе',
      en: 'Choosing an LLM for a private startup assistant',
    },
    answer: '',
    explanation: {
      ru: 'Главные ограничения — приватность, отсутствие постоянной оплаты за токены и поддержка русского и английского. Llama 3.1 8B через Ollama / vLLM решает все три: данные не уходят в чужой API, после железа платежей нет, и модель из коробки знает оба языка. 70B на одной игровой GPU не помещается, GPT-4 API нарушает privacy и съест бюджет, а самостоятельное обучение с нуля — это инженерное самоубийство.',
      en: 'The key constraints are privacy, no recurring per-token bills, and bilingual (Russian + English) support. Llama 3.1 8B via Ollama / vLLM solves all three: data never leaves your network, hardware is a one-time cost, and the model handles both languages out of the box. A 70B model will not fit on one gaming GPU, GPT-4 API breaks privacy and burns budget, and pre-training from scratch is engineering suicide.',
    },
    scenario: {
      brief: {
        ru: 'Вы — техлид стартапа из 6 человек. Команде нужен внутренний ассистент: отвечает на вопросы по внутренней документации, помогает писать письма клиентам, работает на русском и английском. Данные нельзя отправлять во внешние API. Бюджет на «железо» — одна GPU стоимостью до $2000. Менеджер хочет «решение, которое не сожрёт нас за полгода счетами OpenAI».',
        en: 'You are the tech lead of a 6-person startup. The team needs an internal assistant: it should answer questions about internal docs, help write customer emails, and work in both Russian and English. Data must not leave the company network. Hardware budget: a single GPU under $2,000. The CEO wants "something that does not eat us alive in OpenAI bills over six months".',
      },
      constraints: [
        { ru: 'Никаких внешних API — данные не должны покидать сеть', en: 'No external APIs — data must stay inside the network' },
        { ru: 'Бюджет на GPU: $2000 (одна карта)', en: 'GPU budget: $2,000 (single card)' },
        { ru: 'Поддержка русского и английского', en: 'Russian and English support' },
        { ru: 'Без ежемесячной оплаты за токены', en: 'No monthly per-token billing' },
      ],
      choices: [
        {
          text: {
            ru: 'Llama 3.1 8B Instruct в 4-битной квантизации через Ollama на RTX 4090',
            en: 'Llama 3.1 8B Instruct in 4-bit quantization via Ollama on an RTX 4090',
          },
          outcome: {
            ru: 'Идеальный выбор. RTX 4090 (24GB VRAM) с запасом тянет Q4-квантизованную 8B-модель — 50+ токенов/сек. Данные не уходят наружу, лицензия позволяет коммерческое использование, оба языка поддерживаются. После покупки железа — никаких токен-биллов.',
            en: 'Ideal choice. An RTX 4090 (24 GB VRAM) handles a Q4-quantized 8B model with room to spare — 50+ tokens/sec. Data stays in-house, the licence allows commercial use, both languages are supported. After the hardware purchase — no token bills.',
          },
          score: 95,
          tags: ['privacy', 'cost-efficient', 'multilingual'],
        },
        {
          text: {
            ru: 'Llama 3.1 70B на той же RTX 4090 без квантизации',
            en: 'Llama 3.1 70B on the same RTX 4090 with no quantization',
          },
          outcome: {
            ru: 'Не запустится. 70B в fp16 требует ~140GB VRAM, на 24GB не помещается даже Q4 (нужно ~40GB). Можно было бы взять 70B на двух картах по $2000+ каждая — но это уже выходит за бюджет, и для внутреннего ассистента overkill.',
            en: 'Will not run. 70B in fp16 needs ~140 GB VRAM; even Q4 (~40 GB) does not fit into 24 GB. You could run 70B on two $2,000+ cards — but that breaks budget and is overkill for an internal assistant.',
          },
          score: 10,
          tags: ['hardware-mismatch', 'over-engineered'],
        },
        {
          text: {
            ru: 'GPT-4o через OpenAI API — быстро интегрировать и не возиться с инфраструктурой',
            en: 'GPT-4o via the OpenAI API — quick to integrate, no infrastructure work',
          },
          outcome: {
            ru: 'Качество великолепное, но нарушены два ключевых требования: данные уходят к OpenAI (нельзя), и платить вы будете каждый месяц, пока продукт жив. Внутренний ассистент с 6 пользователями съест $200–500/мес, и это масштабируется с активностью.',
            en: 'Quality is excellent, but it breaks two key requirements: data leaves the company to OpenAI (not allowed), and you keep paying every month for the lifetime of the product. An internal assistant for 6 users will burn $200–500/month, scaling with activity.',
          },
          score: 25,
          tags: ['privacy-violation', 'recurring-cost'],
        },
        {
          text: {
            ru: 'Обучить свою LLM с нуля на собственных данных',
            en: 'Pre-train your own LLM from scratch on internal data',
          },
          outcome: {
            ru: 'Катастрофическая идея для стартапа из 6 человек. Pre-training даже маленькой модели стоит десятки тысяч долларов и требует терабайтов данных. Вы получите модель хуже Llama 3.1 8B, потратив весь бюджет компании на обучение.',
            en: 'Catastrophic idea for a 6-person startup. Pre-training even a small model costs tens of thousands of dollars and needs terabytes of data. You will end up with a model worse than Llama 3.1 8B and the company budget gone.',
          },
          score: 5,
          tags: ['unrealistic', 'budget-suicide'],
        },
      ],
      passingScore: 60,
    },
  },
  {
    id: 7,
    type: 'mentor',
    question: {
      ru: 'Llama 3.1 8B галлюцинирует на ваших данных',
      en: 'Llama 3.1 8B is hallucinating on your data',
    },
    answer: '',
    explanation: { ru: '', en: '' },
    dialogue: {
      mentorMessage: {
        ru: 'Вы развернули Llama 3.1 8B локально, но она уверенно «выдумывает» факты про вашу внутреннюю документацию: называет несуществующие пункты регламента и придумывает ссылки. Что вы будете делать?',
        en: 'You have deployed Llama 3.1 8B locally, but it confidently "invents" facts about your internal documentation: it cites non-existent policy clauses and makes up links. What will you do?',
      },
      userOptions: [
        {
          text: {
            ru: 'Перейти на GPT-4 API — закрытая модель умнее, она не будет галлюцинировать.',
            en: 'Switch to the GPT-4 API — a closed model is smarter and will not hallucinate.',
          },
          reaction: {
            ru: 'Это не решение. Любая LLM (в том числе GPT-4) галлюцинирует, если ей не дать твоих фактов в контексте. Плюс вы теряете именно то, ради чего выбирали open-source: приватность и отсутствие токен-биллов.',
            en: 'That is not a fix. Any LLM (including GPT-4) hallucinates if you do not give it your facts in context. And you give up the very reason you chose open-source: privacy and no token bills.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Добавить RAG: при каждом запросе подтягивать релевантные фрагменты из ваших документов в промпт.',
            en: 'Add RAG: on every request, retrieve relevant chunks from your documents into the prompt.',
          },
          reaction: {
            ru: 'Отличный первый ход. RAG даёт модели актуальные факты прямо в контекст — она перестаёт «угадывать» и начинает «цитировать». Для большинства задач с внутренней документацией этого достаточно, без всякого дообучения.',
            en: 'Great first move. RAG gives the model fresh facts directly in context — it stops "guessing" and starts "quoting". For most internal-documentation tasks this is enough, no fine-tuning needed.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Правило: если галлюцинации связаны с фактами (что написано в документе) — это работа для RAG. Если галлюцинации связаны с форматом/стилем (модель отвечает не так, как вам нужно) — это работа для файн-тюнинга через LoRA. Часто нужны оба.',
            en: 'Rule of thumb: hallucinations about facts (what the document says) are a RAG job. Hallucinations about format/style (the model answers in the wrong shape) are a fine-tuning job (LoRA). Often you need both.',
          },
        },
        {
          text: {
            ru: 'Сделать LoRA-файн-тюнинг на 50 примерах "вопрос-ответ" из документации.',
            en: 'Run LoRA fine-tuning on 50 question–answer pairs from the docs.',
          },
          reaction: {
            ru: 'Контр-интуитивно, но это плохая идея ПРОТИВ галлюцинаций. Файн-тюнинг хорошо подходит для стиля и формата, но «впекать» в веса фактическую базу знаний неэффективно: документы меняются, а перезапускать обучение под каждое обновление дорого. Для фактов всегда сначала пробуйте RAG.',
            en: 'Counter-intuitive, but a bad fix FOR hallucinations. Fine-tuning is great for style and format, but baking factual knowledge into weights is inefficient: docs change, and retraining for every update is expensive. For facts, try RAG first.',
          },
          isCorrect: false,
        },
      ],
    },
  },
];
