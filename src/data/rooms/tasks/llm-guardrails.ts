import { LocalizedTask } from '../types';

export const llmGuardrailsTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: {
        ru: 'Какое из определений лучше всего описывает Guardrails в контексте LLM?',
        en: 'Which definition best describes Guardrails in the context of LLMs?'
      },
      options: [
        { ru: 'Увеличение размера контекстного окна', en: 'Increasing context window size' },
        { ru: 'Система фильтрации и контроля ввода/вывода для обеспечения безопасности и качества', en: 'A system of input/output filtering and control to ensure safety and quality' },
        { ru: 'Метод обучения модели на больших данных', en: 'A method of training models on big data' }
      ],
      answer: { ru: 'Система фильтрации и контроля ввода/вывода для обеспечения безопасности и качества', en: 'A system of input/output filtering and control to ensure safety and quality' },
      explanation: {
        ru: 'Верно. Guardrails — это "защитный слой" между пользователем и моделью.',
        en: 'Correct. Guardrails act as a "protective layer" between the user and the model.'
      }
    },
    {
      id: 2,
      type: 'categorize',
      question: {
        ru: 'Разделите типы проверок по этапам их выполнения.',
        en: 'Categorize check types by their execution stage.'
      },
      answer: '',
      explanation: {
        ru: 'Input guardrails защищают саму модель, а Output guardrails защищают пользователя от некорректных ответов.',
        en: 'Input guardrails protect the model itself, while Output guardrails protect the user from inappropriate responses.'
      },
      categorize: {
        items: [
          { ru: 'Детекция PII (персональные данные)', en: 'PII detection (personal data)' },
          { ru: 'Проверка на галлюцинации', en: 'Hallucination check' },
          { ru: 'Детекция джейлбрейков', en: 'Jailbreak detection' },
          { ru: 'Проверка формата JSON', en: 'JSON format validation' },
          { ru: 'Фильтрация токсичности в запросе', en: 'Toxicity filtering in the query' },
          { ru: 'Проверка на соответствие фактам', en: 'Fact-checking the output' }
        ],
        buckets: [
          { ru: 'Input Guardrail', en: 'Input Guardrail' },
          { ru: 'Output Guardrail', en: 'Output Guardrail' }
        ],
        correctMapping: {
          'Детекция PII (персональные данные)': 'Input Guardrail',
          'PII detection (personal data)': 'Input Guardrail',
          'Детекция джейлбрейков': 'Input Guardrail',
          'Jailbreak detection': 'Input Guardrail',
          'Фильтрация токсичности в запросе': 'Input Guardrail',
          'Toxicity filtering in the query': 'Input Guardrail',
          'Проверка на галлюцинации': 'Output Guardrail',
          'Hallucination check': 'Output Guardrail',
          'Проверка формата JSON': 'Output Guardrail',
          'JSON format validation': 'Output Guardrail',
          'Проверка на соответствие фактам': 'Output Guardrail',
          'Fact-checking the output': 'Output Guardrail'
        }
      }
    },
    {
      id: 3,
      type: 'sorting',
      question: {
        ru: 'Упорядочите шаги обработки запроса в защищенной системе.',
        en: 'Order the request processing steps in a secured system.'
      },
      initialItems: [
        { ru: 'Output Guardrail (валидация ответа)', en: 'Output Guardrail (response validation)' },
        { ru: 'LLM (генерация)', en: 'LLM (generation)' },
        { ru: 'Input Guardrail (фильтрация запроса)', en: 'Input Guardrail (query filtering)' },
        { ru: 'Пользователь получает ответ', en: 'User receives response' },
        { ru: 'Пользователь отправляет запрос', en: 'User sends a query' }
      ],
      correctOrder: [
        { ru: 'Пользователь отправляет запрос', en: 'User sends a query' },
        { ru: 'Input Guardrail (фильтрация запроса)', en: 'Input Guardrail (query filtering)' },
        { ru: 'LLM (генерация)', en: 'LLM (generation)' },
        { ru: 'Output Guardrail (валидация ответа)', en: 'Output Guardrail (response validation)' },
        { ru: 'Пользователь получает ответ', en: 'User receives response' }
      ],
      answer: '',
      explanation: {
        ru: 'Именно такая последовательность обеспечивает максимальную безопасность системы на всех этапах.',
        en: 'This sequence ensures maximum system security at all stages.'
      }
    },
    {
      id: 4,
      type: 'input',
      question: {
        ru: 'Как называется специализированная модель от компании Meta, предназначенная для детекции опасного контента (Input/Output)?',
        en: 'What is the name of the specialized model from Meta designed for detecting hazardous content (Input/Output)?'
      },
      answer: 'LlamaGuard',
      hint: { ru: 'Llama...', en: 'Llama...' },
      explanation: {
        ru: 'Верно! LlamaGuard — это легковесная версия Llama, обученная классифицировать запросы и ответы по категориям безопасности.',
        en: 'Correct! LlamaGuard is a lightweight version of Llama trained to classify queries and responses by safety categories.'
      }
    },
    {
      id: 5,
      type: 'mentor',
      question: { ru: 'Дилемма безопасности vs Латентности', en: 'Safety vs Latency Dilemma' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Твой заказчик хочет проверять каждый ответ LLM через другую "модель-судью" (LLM-as-a-judge) на 10 категорий безопасности. Это добавит 3-5 секунд к каждому ответу. Что посоветуешь?',
          en: 'Your client wants to check every LLM response via another "judge model" (LLM-as-a-judge) for 10 safety categories. This adds 3-5 seconds to every response. What is your advice?'
        },
        userOptions: [
          {
            text: { ru: 'Согласиться: безопасность превыше всего, пользователи подождут.', en: 'Agree: safety first, users can wait.' },
            reaction: {
              ru: 'В продакшне задержка в 5 секунд может убить UX. Пользователи просто уйдут к конкурентам.',
              en: 'In production, a 5-second delay can kill UX. Users will simply switch to competitors.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'Использовать легковесные guard-модели (LlamaGuard) или классификаторы для базовой фильтрации, а тяжелую LLM-судью — выборочно.', en: 'Use lightweight guard models (LlamaGuard) or classifiers for basic filtering, and a heavy LLM judge only selectively.' },
            reaction: {
              ru: 'Именно. Нужен баланс: быстрые проверки на лету и глубокий аудит там, где риск действительно высок.',
              en: 'Exactly. You need balance: fast on-the-fly checks and deep auditing where the risk is truly high.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Решение: каскадные фильтры (Regex -> Fast Classifier -> LlamaGuard). Это минимизирует задержку для безопасных запросов.',
              en: 'Solution: cascaded filters (Regex -> Fast Classifier -> LlamaGuard). This minimizes latency for safe queries.'
            }
          }
        ]
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: {
        ru: 'Миссия: Защита HR-бота',
        en: 'Mission: Protecting an HR Bot'
      },
      answer: '',
      explanation: {
        ru: 'Для HR-бота критически важна защита PII. Анонимизация данных перед отправкой в LLM и использование специализированных guard-моделей — лучший способ соблюсти GDPR и защитить приватность.',
        en: 'For an HR bot, PII protection is critical. Data anonymization before sending to the LLM and using specialized guard models is the best way to comply with GDPR and protect privacy.'
      },
      scenario: {
        brief: {
          ru: 'Вы создаете ИИ-ассистента для HR-департамента. Бот помогает анализировать резюме и проводить первичный скрининг. Какие меры безопасности вы внедрите в первую очередь?',
          en: 'You are building an AI assistant for an HR department. The bot helps analyze resumes and conduct initial screening. Which safety measures will you implement first?'
        },
        constraints: [
          { ru: 'Система работает с резюме (имена, телефоны, адреса)', en: 'System handles resumes (names, phones, addresses)' },
          { ru: 'Нужно исключить предвзятость (bias) по полу и возрасту', en: 'Bias by gender and age must be eliminated' },
          { ru: 'Данные не должны утечь во внешний лог провайдера API', en: 'Data must not leak into the external API provider\'s logs' }
        ],
        choices: [
          {
            text: { ru: 'Просто добавить в промпт: "Будь честным и не раскрывай данные".', en: 'Just add to the prompt: "Be honest and don\'t disclose data".' },
            outcome: {
              ru: 'Слабая защита. Промпт-инъекция легко заставит бота выдать все данные. Провал по безопасности.',
              en: 'Weak protection. A prompt injection can easily force the bot to reveal all data. Security failure.'
            },
            score: 15
          },
          {
            text: { ru: 'Внедрить PII-маскирование (анонимизацию) на входе и использовать LlamaGuard для фильтрации ответов.', en: 'Implement PII masking (anonymization) on input and use LlamaGuard to filter responses.' },
            outcome: {
              ru: 'Отлично! Вы защитили персональные данные еще до попадания в модель и добавили слой контроля на выходе. Это профессиональный стандарт.',
              en: 'Excellent! You protected personal data before it even reached the model and added a control layer on the output. This is a professional standard.'
            },
            score: 95
          },
          {
            text: { ru: 'Отключить боту доступ к интернету.', en: 'Disable internet access for the bot.' },
            outcome: {
              ru: 'Это не поможет против утечки данных через API-запросы провайдеру или логи системы. Вы не решили проблему PII.',
              en: 'This won\'t help against data leaks via API requests to providers or system logs. You haven\'t solved the PII issue.'
            },
            score: 25
          }
        ],
        passingScore: 60
      }
    }
  ];
