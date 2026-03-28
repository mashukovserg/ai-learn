import { LocalizedTask } from '../types';

export const postChatgptHistoryTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем ключевое отличие "открытых" (open-weight) моделей от закрытых API в 2023-2024 годах?', 
        en: 'What is the key difference between "open-weight" models and closed APIs in 2023-2024?' 
      },
      options: [
        { ru: 'Открытые модели всегда умнее закрытых', en: 'Open models are always smarter than closed ones' },
        { ru: 'Открытые модели можно запустить на своих серверах, обеспечивая полную приватность данных', en: 'Open models can be run on your own servers, ensuring full data privacy' },
        { ru: 'Закрытые API работают только по выходным', en: 'Closed APIs only work on weekends' }
      ],
      answer: { ru: 'Открытые модели можно запустить на своих серверах, обеспечивая полную приватность данных', en: 'Open models can be run on your own servers, ensuring full data privacy' },
      explanation: { 
        ru: 'Верно! Это главная причина, почему многие корпорации выбирают LLaMA или Mistral — контроль над данных.', 
        en: 'Correct! This is the main reason many enterprises choose LLaMA or Mistral — control over data.' 
      }
    },
    {
      id: 2,
      type: 'categorize',
      question: { ru: 'Распределите компании по их основному подходу (Закрытый API vs Открытые веса).', en: 'Categorize companies by their primary approach (Closed API vs Open-Weight).' },
      answer: '',
      explanation: { ru: 'OpenAI и Anthropic сделали ставку на безопасность и закрытость, а Meta и Mistral — на открытое сообщество.', en: 'OpenAI and Anthropic bet on safety and closed access, while Meta and Mistral bet on the open community.' },
      categorize: {
        items: [
          { ru: 'OpenAI (GPT-4)', en: 'OpenAI (GPT-4)' },
          { ru: 'Meta (LLaMA)', en: 'Meta (LLaMA)' },
          { ru: 'Mistral AI', en: 'Mistral AI' },
          { ru: 'Anthropic (Claude)', en: 'Anthropic (Claude)' }
        ],
        buckets: [
          { ru: 'Закрытые (Closed API)', en: 'Closed API' },
          { ru: 'Открытые (Open-Weight)', en: 'Open-Weight' }
        ],
        correctMapping: {
          'OpenAI (GPT-4)': 'Closed API',
          'Meta (LLaMA)': 'Open-Weight',
          'Mistral AI': 'Open-Weight',
          'Anthropic (Claude)': 'Closed API'
        }
      }
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: { 
        ru: 'Что такое "Обучение на этапе вывода" (Inference-Time Compute), реализованное в моделях вроде OpenAI o1?', 
        en: 'What is "Inference-Time Compute," as seen in models like OpenAI o1?' 
      },
      options: [
        { ru: 'Модель гуглит ответ в Википедии', en: 'The model googles the answer on Wikipedia' },
        { ru: 'Модель тратит время на создание скрытой цепочки рассуждений перед тем, как выдать ответ', en: 'The model spends time generating a hidden chain of thought before giving an answer' },
        { ru: 'Пользователь платит больше за каждый токен', en: 'The user pays more for each token' }
      ],
      answer: { ru: 'Модель тратит время на создание скрытой цепочки рассуждений перед тем, как выдать ответ', en: 'The model spends time generating a hidden chain of thought before giving an answer' },
      explanation: { 
        ru: 'Правильно! Это переход от "Системы 1" (быстрый инстинкт) к "Системе 2" (медленное логическое рассуждение).', 
        en: 'Correct! This is a shift from "System 1" (fast instinct) to "System 2" (slow logical reasoning).' 
      }
    },
    {
      id: 4,
      type: 'input',
      question: { 
        ru: 'Какая китайская лаборатория потрясла мир в начале 2025 года, создав модель уровня GPT-4 при крошечном бюджете на обучение, доказав важность алгоритмической оптимизации?', 
        en: 'Which Chinese lab shocked the world in early 2025 by creating a GPT-4 level model on a tiny training budget, proving the importance of algorithmic optimization?' 
      },
      answer: 'DeepSeek',
      hint: { ru: 'Начинается на Deep...', en: 'Starts with Deep...' },
      explanation: { 
        ru: 'Да! Их прорыв показал, что санкции на железо можно обойти с помощью гениальной математики.', 
        en: 'Yes! Their breakthrough showed that hardware sanctions can be bypassed with brilliant math.' 
      }
    },
    {
      id: 5,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите хронологию смещения фокуса в индустрии (от прошлого к будущему).', 
        en: 'Sort the chronological shift in industry focus (from past to future).' 
      },
      initialItems: [
        { ru: 'Модели Рассуждений (Reasoning Models, медленное мышление)', en: 'Reasoning Models (slow thinking)' },
        { ru: 'Простые Чат-боты (Ответ-вопрос)', en: 'Simple Chatbots (Q&A)' },
        { ru: 'Автономные Агенты (использование инструментов, планирование)', en: 'Autonomous Agents (tool use, planning)' }
      ],
      correctOrder: [
        { ru: 'Простые Чат-боты (Ответ-вопрос)', en: 'Simple Chatbots (Q&A)' },
        { ru: 'Автономные Агенты (использование инструментов, планирование)', en: 'Autonomous Agents (tool use, planning)' },
        { ru: 'Модели Рассуждений (Reasoning Models, медленное мышление)', en: 'Reasoning Models (slow thinking)' }
      ],
      answer: '',
      explanation: { 
        ru: 'Эволюция шла от простых разговоров к действиям (агенты), а затем к глубокому обдумыванию планов (рассуждения).', 
        en: 'The evolution went from simple conversations to actions (agents), and then to deep planning (reasoning).' 
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: { ru: 'Что значит "У нас нет рва"?', en: 'What does "We have no moat" mean?' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'В 2023 году утек внутренний документ Google, озаглавленный "У нас нет рва (moat), и у OpenAI тоже". О какой угрозе (или "рве") для гигантов шла речь?',
          en: 'In 2023, an internal Google document leaked, titled "We Have No Moat, And Neither Does OpenAI." What threat (or lack of a "moat") were they talking about?'
        },
        userOptions: [
          {
            text: { ru: 'Они боялись, что правительство США закроет все ИИ-лаборатории.', en: 'They feared the US government would shut down all AI labs.' },
            reaction: { 
              ru: 'Нет, речь шла не о регуляторах. Угроза исходила от энтузиастов и сообщества.', 
              en: 'No, it wasn\'t about regulators. The threat came from enthusiasts and the community.' 
            },
            isCorrect: false
          },
          {
            text: { ru: 'Они поняли, что сообщество Open-Source развивается быстрее корпораций, и бесплатные открытые модели вскоре догонят дорогие закрытые.', en: 'They realized the Open-Source community was moving faster than corporations, and free open models would soon catch up to expensive closed ones.' },
            reaction: { 
              ru: 'Именно! Отсутствие "рва" означает, что коммерческие компании не могут вечно удерживать монополию только за счет огромных вычислительных мощностей.', 
              en: 'Exactly! Having no "moat" means commercial companies cannot forever maintain a monopoly purely through massive compute power.' 
            },
            isCorrect: true
          }
        ]
      }
    }
  ];
