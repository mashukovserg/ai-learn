import { LocalizedTask } from '../types';

export const llmLandscapeTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: {
        ru: 'Что лучше всего описывает модель после обучения?',
        en: 'What best describes a model after training?'
      },
      options: [
        { ru: 'Набор жестких правил "если А, то Б"', en: 'A set of rigid "if A, then B" rules' },
        { ru: 'Статический файл весов, полученный в результате обучения', en: 'A static file of weights produced by training' },
        { ru: 'База данных с готовыми ответами на любые вопросы', en: 'A database with pre-written answers for all questions' }
      ],
      answer: { ru: 'Статический файл весов, полученный в результате обучения', en: 'A static file of weights produced by training' },
      explanation: {
        ru: 'Верно. Модель — это застывший результат обучения, а не набор ручных правил.',
        en: 'Correct. A model is a frozen training artifact, not a hand-written rule system.'
      }
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: {
        ru: 'Что делает модель в момент ответа на ваш вопрос?',
        en: 'What does the model do when answering your prompt?'
      },
      options: [
        { ru: 'Ищет готовый ответ в скрытой базе данных', en: 'Looks up a prepared answer in a hidden database' },
        { ru: 'Достраивает наиболее вероятное продолжение на основе статистических паттернов', en: 'Completes the most likely continuation based on statistical patterns' },
        { ru: 'Автоматически переобучается на вашем сообщении', en: 'Automatically retrains on your message' }
      ],
      answer: {
        ru: 'Достраивает наиболее вероятное продолжение на основе статистических паттернов',
        en: 'Completes the most likely continuation based on statistical patterns'
      },
      explanation: {
        ru: 'Правильно. На инференсе модель предсказывает продолжение, а не извлекает готовый факт из таблицы.',
        en: 'Correct. During inference, the model predicts continuations rather than retrieving a ready-made fact from a table.'
      }
    },
    {
      id: 3,
      type: 'input',
      question: {
        ru: 'Как часто называется формат файла весов модели?',
        en: 'What file format is often used for model weights?'
      },
      answer: ['.safetensors', 'safetensors'],
      hint: {
        ru: 'Подсказка: формат часто упоминают с точкой в начале.',
        en: 'Hint: this format is often written with a leading dot.'
      },
      explanation: {
        ru: 'Верно. Часто используется формат `.safetensors`.',
        en: 'Correct. `.safetensors` is commonly used.'
      }
    },
    {
      id: 4,
      type: 'sorting',
      question: {
        ru: 'Упорядочите упрощенную цепочку генерации ответа.',
        en: 'Sort the simplified response-generation flow.'
      },
      initialItems: [
        { ru: 'GPU прогоняет токены через веса модели', en: 'GPU runs tokens through model weights' },
        { ru: 'Пользователь отправляет запрос', en: 'User sends a prompt' },
        { ru: 'В чате появляется итоговый ответ', en: 'Final answer appears in the chat' },
        { ru: 'Модель оценивает вероятности следующих токенов', en: 'Model evaluates probabilities of next tokens' }
      ],
      correctOrder: [
        { ru: 'Пользователь отправляет запрос', en: 'User sends a prompt' },
        { ru: 'GPU прогоняет токены через веса модели', en: 'GPU runs tokens through model weights' },
        { ru: 'Модель оценивает вероятности следующих токенов', en: 'Model evaluates probabilities of next tokens' },
        { ru: 'В чате появляется итоговый ответ', en: 'Final answer appears in the chat' }
      ],
      answer: '',
      explanation: {
        ru: 'Отлично. Сначала ввод, затем вычисление по весам, потом выбор токенов и финальный ответ.',
        en: 'Great. Input comes first, then weight-based computation, token selection, and final output.'
      }
    },
    {
      id: 5,
      type: 'multiple-select',
      question: {
        ru: 'Какие факторы в 2026 влияют на практический результат AI-систем, кроме качества самой модели?',
        en: 'Which factors in 2026 shape practical AI outcomes beyond model capability itself?'
      },
      options: [
        { ru: 'Доступ к вычислениям (compute access)', en: 'Compute access' },
        { ru: 'Экономика инференса (стоимость ответа)', en: 'Inference economics (cost per response)' },
        { ru: 'Качество интеграции в продукт', en: 'Integration quality in product workflows' },
        { ru: 'Регуляторные ограничения', en: 'Regulatory constraints' },
        { ru: 'Цвет кнопки в интерфейсе', en: 'Button color in the UI' }
      ],
      answer: [
        { ru: 'Доступ к вычислениям (compute access)', en: 'Compute access' },
        { ru: 'Экономика инференса (стоимость ответа)', en: 'Inference economics (cost per response)' },
        { ru: 'Качество интеграции в продукт', en: 'Integration quality in product workflows' },
        { ru: 'Регуляторные ограничения', en: 'Regulatory constraints' }
      ],
      explanation: {
        ru: 'Верно. На практике важны не только веса, но и инфраструктура, экономика и контекст внедрения.',
        en: 'Correct. In practice, outcomes depend not only on weights but also on infrastructure, economics, and deployment context.'
      }
    },
    {
      id: 6,
      type: 'multiple-choice',
      question: {
        ru: 'Что обычно выбирают для самого быстрого запуска MVP с минимальной DevOps-нагрузкой?',
        en: 'What is typically chosen for the fastest MVP launch with minimal DevOps overhead?'
      },
      options: [
        { ru: 'Закрытый API (например, GPT/Claude/Gemini)', en: 'Closed API (for example GPT/Claude/Gemini)' },
        { ru: 'Open-weight модель на собственной инфраструктуре', en: 'Open-weight model on your own infrastructure' },
        { ru: 'Полное обучение модели с нуля', en: 'Training a full model from scratch' }
      ],
      answer: { ru: 'Закрытый API (например, GPT/Claude/Gemini)', en: 'Closed API (for example GPT/Claude/Gemini)' },
      explanation: {
        ru: 'Правильно. Закрытые API обычно дают самый быстрый time-to-market.',
        en: 'Correct. Closed APIs usually provide the shortest time-to-market.'
      }
    },
    {
      id: 7,
      type: 'multiple-select',
      question: {
        ru: 'Какие преимущества обычно дают open-weight модели?',
        en: 'Which benefits are typically associated with open-weight models?'
      },
      options: [
        { ru: 'Данные могут не покидать ваш сервер', en: 'Data can remain on your own servers' },
        { ru: 'Никто не может отозвать вам доступ к весам', en: 'No one can revoke your access to the weights' },
        { ru: 'Можно дообучать модель под свою нишу', en: 'You can fine-tune the model for your niche' },
        { ru: 'Не нужна инфраструктура и сопровождение', en: 'No infrastructure or maintenance is needed' }
      ],
      answer: [
        { ru: 'Данные могут не покидать ваш сервер', en: 'Data can remain on your own servers' },
        { ru: 'Никто не может отозвать вам доступ к весам', en: 'No one can revoke your access to the weights' },
        { ru: 'Можно дообучать модель под свою нишу', en: 'You can fine-tune the model for your niche' }
      ],
      explanation: {
        ru: 'Верно. Контроль и приватность — главные плюсы open-weight подхода.',
        en: 'Correct. Control and privacy are key strengths of the open-weight approach.'
      }
    },
    {
      id: 8,
      type: 'multiple-choice',
      question: {
        ru: 'Чем “open-weight” обычно отличается от “open-source” в контексте LLM?',
        en: 'How does “open-weight” typically differ from “open-source” for LLMs?'
      },
      options: [
        { ru: 'Open-weight означает, что открыты веса, но не обязательно данные и полный рецепт обучения', en: 'Open-weight means weights are available, but training data and full recipe may remain closed' },
        { ru: 'Open-weight означает, что модель запрещено запускать локально', en: 'Open-weight means local deployment is prohibited' },
        { ru: 'Open-weight означает, что модель автоматически бесплатна для любого коммерческого использования', en: 'Open-weight means the model is automatically free for all commercial use' }
      ],
      answer: {
        ru: 'Open-weight означает, что открыты веса, но не обязательно данные и полный рецепт обучения',
        en: 'Open-weight means weights are available, but training data and full recipe may remain closed'
      },
      explanation: {
        ru: 'Точно. Открытые веса не всегда означают полностью открытый процесс разработки.',
        en: 'Exactly. Open weights do not always imply a fully open development pipeline.'
      }
    },
    {
      id: 9,
      type: 'multiple-choice',
      question: {
        ru: 'Какой шаг указан первым в enterprise-чеклисте раздела?',
        en: 'Which step is listed first in the enterprise checklist section?'
      },
      options: [
        { ru: 'Сразу выбрать самую дорогую модель', en: 'Immediately choose the most expensive model' },
        { ru: 'Классифицировать workload: где важнее качество, а где цена', en: 'Classify workloads: where quality matters more and where cost matters more' },
        { ru: 'Полностью отказаться от on-prem и VPC', en: 'Completely avoid on-prem and VPC options' }
      ],
      answer: {
        ru: 'Классифицировать workload: где важнее качество, а где цена',
        en: 'Classify workloads: where quality matters more and where cost matters more'
      },
      explanation: {
        ru: 'Верно. Без классификации задач невозможно выбрать рациональную архитектуру.',
        en: 'Correct. Without workload classification, rational architecture decisions are impossible.'
      }
    },
    {
      id: 10,
      type: 'multiple-choice',
      question: {
        ru: 'Какое соответствие “модель → best-fit” совпадает с разделом “Market Pattern 2026”?',
        en: 'Which “model → best-fit” mapping matches the “2026 Market Pattern” section?'
      },
      options: [
        { ru: 'OpenAI → Best Generalist; Claude → Long-form writing; Gemini → Multimodal', en: 'OpenAI → Best Generalist; Claude → Long-form writing; Gemini → Multimodal' },
        { ru: 'OpenAI → EU + On-prem; Claude → Cost/Performance; Gemini → Best Generalist', en: 'OpenAI → EU + On-prem; Claude → Cost/Performance; Gemini → Best Generalist' },
        { ru: 'Mistral → Best Generalist; Gemini → Long-form writing; DeepSeek → Multimodal', en: 'Mistral → Best Generalist; Gemini → Long-form writing; DeepSeek → Multimodal' }
      ],
      answer: {
        ru: 'OpenAI → Best Generalist; Claude → Long-form writing; Gemini → Multimodal',
        en: 'OpenAI → Best Generalist; Claude → Long-form writing; Gemini → Multimodal'
      },
      explanation: {
        ru: 'Верно. Это соответствие прямо зафиксировано в блоке “Рыночный паттерн 2026”.',
        en: 'Correct. This mapping is explicitly listed in the “2026 Market Pattern” block.'
      }
    },
    {
      id: 11,
      type: 'mentor',
      question: {
        ru: 'Сценарная миссия: AI-помощник для банка',
        en: 'Scenario Mission: AI Assistant for a Bank'
      },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Ты проектируешь AI-помощника для банка. Условия: 100k запросов в день, P95 latency <= 2.5s, данные клиентов (PII) не должны выходить за пределы VPC, бюджет <= $0.02 за запрос. Какую архитектуру выберешь?',
          en: 'You are designing an AI assistant for a bank. Constraints: 100k requests/day, P95 latency <= 2.5s, customer PII must stay inside VPC, and budget <= $0.02 per query. Which architecture do you choose?'
        },
        userOptions: [
          {
            text: {
              ru: 'Один закрытый frontier API для всех запросов: просто и быстро.',
              en: 'Use one closed frontier API for all requests: simple and fast.'
            },
            reaction: {
              ru: 'Быстрый старт — да, но риск по комплаенсу высокий: часть PII-трафика уйдёт во внешнюю инфраструктуру. Также сложно удержать стоимость при большом объёме.',
              en: 'Fast launch, yes, but compliance risk is high: part of the PII traffic leaves your boundary. Cost control at high volume is also difficult.'
            },
            isCorrect: false
          },
          {
            text: {
              ru: 'Гибридный роутинг: закрытый frontier API для сложных non-PII кейсов + open-weight/efficient модель в VPC для PII и массовых FAQ.',
              en: 'Use hybrid routing: a closed frontier API for complex non-PII cases + an open-weight/efficient model in VPC for PII and high-volume FAQ.'
            },
            reaction: {
              ru: 'Это сильное архитектурное решение. Ты разделил workload по риску и экономике: качество сохраняется там, где нужно reasoning, а PII и массовый трафик остаются под контролем.',
              en: 'This is a strong architecture decision. You split workloads by risk and economics: quality is preserved for reasoning-heavy tasks, while PII and high-volume traffic stay controlled.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Финальный шаблон миссии: (1) классифицируй трафик по PII/сложности, (2) зафиксируй routing-правила, (3) добавь fallback и eval-gates, (4) ежемесячно пересматривай TCO и качество.',
              en: 'Mission template: (1) classify traffic by PII/complexity, (2) define routing rules, (3) add fallback and eval gates, and (4) review TCO and quality monthly.'
            }
          },
          {
            text: {
              ru: 'Обучить собственную модель с нуля и отказаться от всех внешних API.',
              en: 'Train an in-house model from scratch and avoid all external APIs.'
            },
            reaction: {
              ru: 'Для этой задачи это слишком дорого и долго. Time-to-market и операционные риски будут неоправданно высокими относительно цели миссии.',
              en: 'For this scenario, this is too expensive and too slow. Time-to-market and operational risks are disproportionate to the mission goal.'
            },
            isCorrect: false
          }
        ]
      }
    },
    {
      id: 12,
      type: 'categorize',
      question: {
        ru: 'Распределите модели по их происхождению.',
        en: 'Categorize these models by their origin.'
      },
      answer: '',
      explanation: {
        ru: 'GPT-4o и o1 — OpenAI (США), Claude — Anthropic (США), Gemini — Google DeepMind (США), DeepSeek — DeepSeek (Китай), Mistral — Mistral AI (Европа/Франция).',
        en: 'GPT-4o and o1 — OpenAI (USA), Claude — Anthropic (USA), Gemini — Google DeepMind (USA), DeepSeek — DeepSeek (China), Mistral — Mistral AI (Europe/France).'
      },
      categorize: {
        items: [
          { ru: 'GPT-4o', en: 'GPT-4o' },
          { ru: 'Claude', en: 'Claude' },
          { ru: 'Gemini', en: 'Gemini' },
          { ru: 'DeepSeek-V3', en: 'DeepSeek-V3' },
          { ru: 'Mistral Large', en: 'Mistral Large' },
          { ru: 'o1', en: 'o1' },
        ],
        buckets: [
          { ru: 'США', en: 'USA' },
          { ru: 'Китай', en: 'China' },
          { ru: 'Европа', en: 'Europe' },
        ],
        correctMapping: {
          'GPT-4o': 'USA',
          'Claude': 'USA',
          'Gemini': 'USA',
          'DeepSeek-V3': 'China',
          'Mistral Large': 'Europe',
          'o1': 'USA',
        }
      }
    },
    {
      id: 13,
      type: 'scenario',
      question: {
        ru: 'Выбор модели для стартапа',
        en: 'Model selection for a startup'
      },
      answer: '',
      explanation: {
        ru: 'Лучшая стратегия для стартапа — начать с frontier API для скорости и валидации, затем оптимизировать: добавить open-weight модели для рутинных задач и кэширование для снижения затрат.',
        en: 'The best startup strategy is to start with a frontier API for speed and validation, then optimize: add open-weight models for routine tasks and caching to reduce costs.'
      },
      scenario: {
        brief: {
          ru: 'Вы — CTO стартапа, создающего AI-ассистента для юристов. MVP нужно выпустить за 3 месяца. У вас команда из 4 инженеров, $50K бюджета на инфраструктуру, и инвесторы ожидают 1000 платящих пользователей к запуску.',
          en: 'You are the CTO of a startup building an AI assistant for lawyers. You need to ship an MVP in 3 months. You have a team of 4 engineers, $50K infrastructure budget, and investors expect 1,000 paying users at launch.'
        },
        constraints: [
          { ru: 'Бюджет: $50K на инфраструктуру за первые 6 месяцев', en: 'Budget: $50K infrastructure for first 6 months' },
          { ru: 'Время: MVP через 3 месяца', en: 'Timeline: MVP in 3 months' },
          { ru: 'Юридические документы содержат конфиденциальные данные клиентов', en: 'Legal documents contain confidential client data' },
          { ru: 'Ответы должны быть точными — ошибки в юридическом контексте недопустимы', en: 'Answers must be accurate — errors in legal context are unacceptable' },
        ],
        choices: [
          {
            text: { ru: 'Обучить собственную модель на юридических данных с нуля', en: 'Train a custom model on legal data from scratch' },
            outcome: {
              ru: 'Через 3 месяца у вас есть незавершенная модель, бюджет исчерпан на GPU, MVP не готов. Инвесторы разочарованы.',
              en: 'After 3 months you have an unfinished model, budget burned on GPUs, no MVP. Investors are disappointed.'
            },
            score: 15,
            tags: ['over-engineering', 'budget-risk'],
          },
          {
            text: { ru: 'Использовать frontier API (Claude/GPT-4o) + RAG на юридических документах', en: 'Use a frontier API (Claude/GPT-4o) + RAG on legal documents' },
            outcome: {
              ru: 'MVP готов за 2 месяца. Качество высокое благодаря RAG-грounding. Расходы на API предсказуемы. Данные клиентов проходят через внешний API — нужен DPA и анализ рисков.',
              en: 'MVP ships in 2 months. Quality is high thanks to RAG grounding. API costs are predictable. Client data passes through external API — need DPA and risk analysis.'
            },
            score: 75,
            tags: ['fast-mvp', 'compliance-check-needed'],
          },
          {
            text: {
              ru: 'Frontier API для сложных запросов + open-weight модель (Mistral/Llama) для рутины + RAG + кэширование частых паттернов',
              en: 'Frontier API for complex queries + open-weight model (Mistral/Llama) for routine tasks + RAG + caching of frequent patterns'
            },
            outcome: {
              ru: 'MVP за 3 месяца с оптимальной архитектурой. Конфиденциальные данные обрабатываются локальной моделью, сложные кейсы идут через frontier API. Расходы снижены на 40% благодаря кэшированию.',
              en: 'MVP in 3 months with optimal architecture. Confidential data processed by local model, complex cases routed to frontier API. Costs reduced 40% via caching.'
            },
            score: 95,
            tags: ['hybrid-routing', 'cost-optimized', 'privacy-aware'],
          },
          {
            text: { ru: 'Подождать и выбрать модель позже, а сейчас сделать UI без AI', en: 'Wait and choose a model later, build UI without AI for now' },
            outcome: {
              ru: 'У вас красивый интерфейс, но нет ценности продукта. Пользователи не понимают, зачем платить за "ещё одну юридическую CRM". Метрику в 1000 пользователей достичь невозможно.',
              en: 'You have a nice UI but no product value. Users don\'t understand why they should pay for "yet another legal CRM." The 1,000 user target is unreachable.'
            },
            score: 25,
            tags: ['no-value-prop', 'missed-deadline'],
          },
        ],
        passingScore: 60,
      }
    }
  ];
