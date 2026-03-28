import { LocalizedTask } from '../types';

export const fineTuning101Tasks: LocalizedTask[] = [
          {
            id: 1,
    
      type: 'input',
      question: {
        ru: 'Как называется метод, который "замораживает" основные веса модели и добавляет маленькие обучаемые адаптеры?',
        en: 'What is the method called that "freezes" the base model weights and adds small trainable adapters?'
      },
      answer: 'LoRA',
      hint: { ru: 'Аббревиатура из 4 букв: Low-Rank ...', en: '4-letter abbreviation: Low-Rank ...' },
      explanation: {
        ru: 'Верно! LoRA (Low-Rank Adaptation) обучает только 0.1-1% параметров, снижая стоимость файн-тюнинга в 100+ раз.',
        en: 'Correct! LoRA (Low-Rank Adaptation) trains only 0.1-1% of parameters, reducing fine-tuning cost by 100x+.'
      }
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: {
        ru: 'Что делает QLoRA перед применением LoRA-адаптеров?',
        en: 'What does QLoRA do before applying LoRA adapters?'
      },
      options: [
        { ru: 'Удаляет 50% слоев модели', en: 'Removes 50% of model layers' },
        { ru: 'Квантизирует (сжимает) веса модели с 16-бит до 4-бит', en: 'Quantizes (compresses) model weights from 16-bit to 4-bit' },
        { ru: 'Увеличивает размер модели вдвое для лучшего обучения', en: 'Doubles the model size for better training' }
      ],
      answer: { ru: 'Квантизирует (сжимает) веса модели с 16-бит до 4-бит', en: 'Quantizes (compresses) model weights from 16-bit to 4-bit' },
      explanation: {
        ru: 'Правильно! Квантизация позволяет уместить 65B модель на одной GPU с 48GB памяти.',
        en: 'Correct! Quantization allows fitting a 65B model on a single GPU with 48GB memory.'
      }
    },
    {
      id: 3,
      type: 'categorize',
      question: {
        ru: 'Распределите задачи по оптимальному подходу к адаптации модели.',
        en: 'Categorize these tasks by the optimal model adaptation approach.'
      },
      answer: '',
      explanation: {
        ru: 'Промптинг для быстрых задач с хорошим baseline, RAG для задач с актуальными/внутренними данными, файн-тюнинг для задач, требующих нового стиля или формата.',
        en: 'Prompting for quick tasks with good baseline, RAG for tasks needing fresh/internal data, fine-tuning for tasks requiring a new style or format.'
      },
      categorize: {
        items: [
          { ru: 'Суммаризация email-ов в 3 пулях', en: 'Summarize emails into 3 bullets' },
          { ru: 'Ответы по внутренней документации компании', en: 'Answering questions from internal company docs' },
          { ru: 'Генерация JSON в строгом формате вашего API', en: 'Generating JSON in your strict API format' },
          { ru: 'Перевод текста с учетом актуального сленга', en: 'Translation with up-to-date slang awareness' },
          { ru: 'Классификация тикетов поддержки в вашем стиле', en: 'Classifying support tickets in your style' },
          { ru: 'Поиск по свежим научным статьям', en: 'Searching recent scientific papers' },
        ],
        buckets: [
          { ru: 'Промптинг', en: 'Prompting' },
          { ru: 'RAG', en: 'RAG' },
          { ru: 'Файн-тюнинг', en: 'Fine-Tuning' },
        ],
        correctMapping: {
          'Summarize emails into 3 bullets': 'Prompting',
          'Answering questions from internal company docs': 'RAG',
          'Generating JSON in your strict API format': 'Fine-Tuning',
          'Translation with up-to-date slang awareness': 'RAG',
          'Classifying support tickets in your style': 'Fine-Tuning',
          'Searching recent scientific papers': 'RAG',
        }
      }
    },
    {
      id: 4,
      type: 'multiple-select',
      question: {
        ru: 'Выберите признаки переобучения (overfitting) при файн-тюнинге.',
        en: 'Select the signs of overfitting during fine-tuning.'
      },
      options: [
        { ru: 'Loss на eval-данных начинает расти', en: 'Eval loss starts increasing' },
        { ru: 'Модель идеально отвечает на примеры из обучающего набора', en: 'Model perfectly answers training set examples' },
        { ru: 'Модель плохо обобщает на новые вопросы', en: 'Model generalizes poorly to new questions' },
        { ru: 'Скорость обучения увеличивается', en: 'Training speed increases' }
      ],
      answer: [
        { ru: 'Loss на eval-данных начинает расти', en: 'Eval loss starts increasing' },
        { ru: 'Модель идеально отвечает на примеры из обучающего набора', en: 'Model perfectly answers training set examples' },
        { ru: 'Модель плохо обобщает на новые вопросы', en: 'Model generalizes poorly to new questions' }
      ],
      explanation: {
        ru: 'Верно! Три классических признака overfitting. Скорость обучения — это гиперпараметр, а не признак переобучения.',
        en: 'Correct! Three classic signs of overfitting. Training speed is a hyperparameter, not a sign of overfitting.'
      }
    },
    {
      id: 5,
      type: 'input',
      question: {
        ru: 'Как называется проблема, при которой модель "забывает" общие знания после агрессивного файн-тюнинга?',
        en: 'What is the problem called when a model "forgets" its general knowledge after aggressive fine-tuning?'
      },
      answer: { ru: 'Катастрофическое забывание', en: 'Catastrophic forgetting' },
      hint: { ru: 'Два слова: "Катастрофическое ..."', en: 'Two words: "Catastrophic ..."' },
      explanation: {
        ru: 'Верно! Catastrophic Forgetting — одна из главных причин, почему LoRA предпочтительнее полного файн-тюнинга: она не трогает основные веса.',
        en: 'Correct! Catastrophic Forgetting is a key reason why LoRA is preferred over full fine-tuning: it doesn\'t touch the base weights.'
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: {
        ru: 'Адаптация модели для медицинского стартапа',
        en: 'Model adaptation for a medical startup'
      },
      answer: '',
      explanation: {
        ru: 'Для медицинского стартапа оптимален гибридный подход: RAG для доступа к актуальным медицинским данным + LoRA для калибровки стиля и формата ответов. Полный файн-тюнинг избыточен для стартапа, а чистый промптинг не обеспечит нужную консистентность.',
        en: 'For a medical startup, the hybrid approach is optimal: RAG for access to current medical data + LoRA to calibrate answer style and format. Full fine-tuning is overkill for a startup, and pure prompting won\'t provide the needed consistency.'
      },
      scenario: {
        brief: {
          ru: 'Вы — техлид медицинского стартапа. Задача: создать ассистента для врачей, который помогает интерпретировать результаты анализов и предлагает дифференциальный диагноз. У вас 2000 размеченных примеров от практикующих врачей, бюджет $5K на ML-инфраструктуру и дедлайн — 6 недель.',
          en: 'You are the tech lead of a medical startup. Task: build an assistant for doctors that helps interpret test results and suggests differential diagnoses. You have 2,000 labeled examples from practicing physicians, a $5K ML infrastructure budget, and a 6-week deadline.'
        },
        constraints: [
          { ru: 'Ответы должны соответствовать актуальным медицинским протоколам', en: 'Answers must align with current medical protocols' },
          { ru: 'Галлюцинации абсолютно недопустимы (жизни пациентов)', en: 'Hallucinations are absolutely unacceptable (patient lives at stake)' },
          { ru: 'Бюджет: $5K на ML-инфраструктуру', en: 'Budget: $5K for ML infrastructure' },
          { ru: 'Формат ответа: структурированный отчет с разделами', en: 'Answer format: structured report with sections' },
        ],
        choices: [
          {
            text: { ru: 'Полный файн-тюнинг Llama 70B на медицинских данных', en: 'Full fine-tune Llama 70B on medical data' },
            outcome: {
              ru: 'Бюджет $5K — недостаточен для полного файн-тюнинга 70B модели (нужно 8x A100). Вы сможете обучить только 2 эпохи за 6 недель, и нет гарантии, что не произойдет catastrophic forgetting. Проект задерживается.',
              en: 'The $5K budget is insufficient for full fine-tuning a 70B model (needs 8x A100). You can only train 2 epochs in 6 weeks, with no guarantee against catastrophic forgetting. Project delayed.'
            },
            score: 20,
            tags: ['over-budget', 'catastrophic-forgetting-risk'],
          },
          {
            text: { ru: 'Промптинг frontier API (Claude/GPT-4o) с детальным системным промптом', en: 'Prompt a frontier API (Claude/GPT-4o) with a detailed system prompt' },
            outcome: {
              ru: 'MVP готов за 2 недели. Качество ответов хорошее, но формат ответов непостоянен: иногда модель отклоняется от структуры. Галлюцинации редки, но без RAG модель не имеет доступа к последним протоколам. Нужна доработка.',
              en: 'MVP ready in 2 weeks. Answer quality is good, but format is inconsistent: the model sometimes deviates from the structure. Hallucinations are rare but without RAG the model lacks access to latest protocols. Needs iteration.'
            },
            score: 55,
            tags: ['fast-start', 'inconsistent-format', 'no-grounding'],
          },
          {
            text: {
              ru: 'RAG на медицинских базах данных + LoRA на 2000 примерах для калибровки формата + eval-набор из 200 примеров',
              en: 'RAG on medical databases + LoRA on 2,000 examples for format calibration + eval set of 200 examples'
            },
            outcome: {
              ru: 'Идеальный баланс. RAG обеспечивает доступ к актуальным протоколам и снижает галлюцинации. LoRA калибрует формат отчета на ваших 2000 примерах ($50 на обучение). Eval-набор позволяет объективно измерять качество. Готово за 5 недель, уложились в бюджет.',
              en: 'Perfect balance. RAG provides access to current protocols and reduces hallucinations. LoRA calibrates report format on your 2,000 examples ($50 training cost). Eval set enables objective quality measurement. Done in 5 weeks, within budget.'
            },
            score: 95,
            tags: ['hybrid-approach', 'cost-efficient', 'eval-driven'],
          },
          {
            text: { ru: 'Использовать GPT-4o без изменений — врачи сами разберутся', en: 'Use GPT-4o as-is — doctors will figure it out themselves' },
            outcome: {
              ru: 'Без специализации модель выдает общие медицинские советы. Врачи получают нестандартизированные ответы, которые нельзя интегрировать в рабочий процесс. Стартап теряет доверие первых пользователей.',
              en: 'Without specialization, the model gives generic medical advice. Doctors receive non-standardized answers that can\'t be integrated into workflows. Startup loses trust of early users.'
            },
            score: 15,
            tags: ['no-customization', 'trust-loss'],
          },
        ],
        passingScore: 50,
      }
    },
    {
      id: 7,
      type: 'multiple-choice',
      question: {
        ru: 'Какой минимальный размер датасета рекомендуется для файн-тюнинга с LoRA?',
        en: 'What is the minimum recommended dataset size for fine-tuning with LoRA?'
      },
      options: [
        { ru: '10 примеров', en: '10 examples' },
        { ru: '500 примеров', en: '500 examples' },
        { ru: '100 000 примеров', en: '100,000 examples' }
      ],
      answer: { ru: '500 примеров', en: '500 examples' },
      explanation: {
        ru: 'Верно! 500 — практический минимум для LoRA. 1000+ дает лучшие результаты. Исследование LIMA показало, что качество данных важнее количества.',
        en: 'Correct! 500 is the practical minimum for LoRA. 1,000+ gives better results. The LIMA study showed data quality matters more than quantity.'
      }
    },
    {
      id: 8,
      type: 'mentor',
      question: { ru: 'Промпт стал слишком длинным', en: 'The prompt has become too long' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Ваш системный промпт вырос до 3000 токенов — он содержит формат ответа, 20 правил стиля и 15 примеров. Каждый API-вызов тратит эти токены. Что будете делать?',
          en: 'Your system prompt has grown to 3,000 tokens — it contains the answer format, 20 style rules, and 15 examples. Every API call spends these tokens. What will you do?'
        },
        userOptions: [
          {
            text: { ru: 'Сократить промпт — убрать примеры и оставить только правила.', en: 'Shorten the prompt — remove examples and keep only rules.' },
            reaction: {
              ru: 'Это быстрое решение, но качество может пострадать. Без примеров модель хуже понимает, чего вы хотите. Вы можете потерять именно ту консистентность, ради которой добавляли примеры.',
              en: 'That\'s a quick fix, but quality may suffer. Without examples, the model has a weaker understanding of what you want. You might lose the consistency you added those examples for.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'Файн-тюнинг через LoRA: "запечь" стиль и формат в веса модели, убрав из промпта.', en: 'Fine-tune via LoRA: "bake" the style and format into model weights, removing them from the prompt.' },
            reaction: {
              ru: 'Отлично. Это классический сценарий, когда файн-тюнинг оправдан: промпт раздут, стиль стабилен, и у вас есть примеры для обучения. После LoRA промпт сократится до 200 токенов, а качество сохранится или улучшится.',
              en: 'Excellent. This is a classic scenario where fine-tuning is justified: the prompt is bloated, the style is stable, and you have training examples. After LoRA, the prompt shrinks to 200 tokens while quality stays the same or improves.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Правило: если ваш промпт стабилен >2 недели и содержит >2000 токенов инструкций, файн-тюнинг через LoRA почти всегда выгоднее — и по стоимости (меньше токенов на вызов), и по качеству (консистентность).',
              en: 'Rule: if your prompt has been stable for >2 weeks and contains >2,000 tokens of instructions, LoRA fine-tuning is almost always better — both in cost (fewer tokens per call) and quality (consistency).'
            }
          }
        ]
      }
    },
    {
      id: 9,
      type: 'input',
      question: {
        ru: 'Какой параметр в конфигурации LoRA отвечает за масштабирование (scaling) обновлений весов? Обычно его значение = 2 × r.',
        en: 'Which LoRA configuration parameter controls the scaling of weight updates? Its value is typically set to 2 × r.'
      },
      answer: 'lora_alpha',
      hint: { ru: 'lora_...', en: 'lora_...' },
      explanation: {
        ru: 'Верно! lora_alpha — скейлинг-фактор LoRA. Итоговое обновление весов = (lora_alpha / r) × B×A. Обычно ставят lora_alpha = 2×r.',
        en: 'Correct! lora_alpha is the LoRA scaling factor. The final weight update = (lora_alpha / r) × B×A. Typically set to 2×r.'
      }
    },
    {
      id: 10,
      type: 'multiple-choice',
      question: {
        ru: 'Почему LoRA-адаптер занимает всего несколько мегабайт?',
        en: 'Why does a LoRA adapter take up only a few megabytes?'
      },
      options: [
        { ru: 'Он сжимает всю модель в архив', en: 'It compresses the entire model into an archive' },
        { ru: 'Сохраняются только маленькие низкоранговые матрицы B и A, а не вся модель', en: 'Only the small low-rank matrices B and A are saved, not the entire model' },
        { ru: 'Он удаляет неиспользуемые слои модели', en: 'It removes unused model layers' }
      ],
      answer: { ru: 'Сохраняются только маленькие низкоранговые матрицы B и A, а не вся модель', en: 'Only the small low-rank matrices B and A are saved, not the entire model' },
      explanation: {
        ru: 'Верно! При r=16 и d=4096 это 2×(4096×16) = 131K параметров на слой вместо 4096×4096 = 16.7M. Поэтому адаптер весит мегабайты, а не гигабайты.',
        en: 'Correct! With r=16 and d=4096, that\'s 2×(4096×16) = 131K parameters per layer instead of 4096×4096 = 16.7M. That\'s why the adapter is megabytes, not gigabytes.'
      }
    },
    {
      id: 11,
      type: 'input',
      question: {
        ru: 'В каком формате файлов нужны данные для файн-тюнинга через OpenAI API?',
        en: 'What file format is required for fine-tuning data via the OpenAI API?'
      },
      answer: 'JSONL',
      hint: { ru: 'JSON + одна буква...', en: 'JSON + one letter...' },
      explanation: {
        ru: 'Верно! JSONL (JSON Lines) — каждая строка файла содержит один JSON-объект с полем messages (массив ролей system/user/assistant).',
        en: 'Correct! JSONL (JSON Lines) — each line contains one JSON object with a messages field (array of system/user/assistant roles).'
      }
    },
    {
      id: 12,
      type: 'multiple-choice',
      question: {
        ru: 'Почему файн-тюненная 7B модель может превзойти 70B модель с промпт-инжинирингом на специфической задаче?',
        en: 'Why can a fine-tuned 7B model outperform a 70B model with prompt engineering on a specific task?'
      },
      options: [
        { ru: '7B модель быстрее, поэтому даёт лучшие ответы', en: '7B model is faster, so it gives better answers' },
        { ru: 'Файн-тюнинг «впечатывает» задачу в веса — модели не нужно тратить контекст на инструкции', en: 'Fine-tuning "bakes" the task into weights — the model doesn\'t need to spend context on instructions' },
        { ru: '7B модели имеют более современную архитектуру', en: '7B models have a more modern architecture' }
      ],
      answer: { ru: 'Файн-тюнинг «впечатывает» задачу в веса — модели не нужно тратить контекст на инструкции', en: 'Fine-tuning "bakes" the task into weights — the model doesn\'t need to spend context on instructions' },
      explanation: {
        ru: 'Верно! Маленькая специализированная модель может превзойти большую универсальную на узкой задаче, потому что знания «запечены» в веса, а не передаются через промпт каждый раз.',
        en: 'Correct! A small specialized model can outperform a large general one on a narrow task because the knowledge is "baked" into weights, not passed via prompt every time.'
      }
    },
  ];
