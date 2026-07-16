import { LocalizedTask } from '../types';

export const promptContractsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что является основной проблемой "рыхлых" (vague) промптов в агентной разработке?',
      en: 'What is the primary problem with "loose" (vague) prompts in agentic development?'
    },
    options: [
      {
        ru: 'Агенту становится скучно выполнять задачу',
        en: 'The agent gets bored performing the task'
      },
      {
        ru: 'Растет "дрейф" (drift) — агент начинает предлагать решения, выходящие за рамки архитектуры проекта',
        en: 'Increased "drift" — the agent begins proposing solutions that fall outside the project architecture'
      },
      {
        ru: 'Модель тратит слишком мало токенов',
        en: 'The model uses too few tokens'
      }
    ],
    answer: {
      ru: 'Растет "дрейф" (drift) — агент начинает предлагать решения, выходящие за рамки архитектуры проекта',
      en: 'Increased "drift" — the agent begins proposing solutions that fall outside the project architecture'
    },
    explanation: {
      ru: 'Без четких границ (контракта) агент склонен к галлюцинациям в сторону "удобных" для него, но неправильных для проекта решений.',
      en: 'Without clear boundaries (a contract), an agent is prone to hallucinating "convenient" solutions that may be wrong for the project.'
    }
  },
  {
    id: 2,
    type: 'multiple-select',
    question: {
      ru: 'Выберите три ключевых компонента сильного промпт-контракта:',
      en: 'Select three key components of a strong prompt contract:'
    },
    options: [
      {
        ru: 'Схема выходных данных (JSON Schema / Type definition)',
        en: 'Output schema (JSON Schema / Type definition)'
      },
      {
        ru: 'Список запрещенных действий (Negative constraints)',
        en: 'List of prohibited actions (Negative constraints)'
      },
      {
        ru: 'Вежливое приветствие модели',
        en: 'Polite greeting to the model'
      },
      {
        ru: 'Критерии завершения (Definition of Done)',
        en: 'Completion criteria (Definition of Done)'
      }
    ],
    answer: [
      {
        ru: 'Схема выходных данных (JSON Schema / Type definition)',
        en: 'Output schema (JSON Schema / Type definition)'
      },
      {
        ru: 'Список запрещенных действий (Negative constraints)',
        en: 'List of prohibited actions (Negative constraints)'
      },
      {
        ru: 'Критерии завершения (Definition of Done)',
        en: 'Completion criteria (Definition of Done)'
      }
    ],
    explanation: {
      ru: 'Структура, ограничения и критерии готовности превращают промпт в исполняемую спецификацию.',
      en: 'Structure, constraints, and readiness criteria turn a prompt into an executable specification.'
    }
  },
  {
    id: 3,
    type: 'sorting',
    question: {
      ru: 'Расположите элементы промпта в порядке убывания их влияния на стабильность агента (от самого важного к менее критичному).',
      en: 'Order the prompt elements by their impact on agent stability (from most critical to least critical).'
    },
    initialItems: [
      {
        ru: 'Примеры (Few-shot)',
        en: 'Examples (Few-shot)'
      },
      {
        ru: 'Схема Function Calling / API контракты',
        en: 'Function Calling Schema / API Contracts'
      },
      {
        ru: 'Технические ограничения и Negative Constraints',
        en: 'Technical Boundaries and Negative Constraints'
      },
      {
        ru: 'Описание бизнес-цели (Intent)',
        en: 'Business Goal Description (Intent)'
      }
    ],
    correctOrder: [
      {
        ru: 'Технические ограничения и Negative Constraints',
        en: 'Technical Boundaries and Negative Constraints'
      },
      {
        ru: 'Схема Function Calling / API контракты',
        en: 'Function Calling Schema / API Contracts'
      },
      {
        ru: 'Описание бизнес-цели (Intent)',
        en: 'Business Goal Description (Intent)'
      },
      {
        ru: 'Примеры (Few-shot)',
        en: 'Examples (Few-shot)'
      }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала мы задаем "стены" (что нельзя), затем "инструменты" (как можно), и только потом "цель" и "примеры".',
      en: 'First we set the "walls" (what is forbidden), then "tools" (how to act), and only then the "goal" and "examples".'
    }
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Классифицируйте фразы в промпте по их полезности для контракта.',
      en: 'Classify prompt phrases by their utility for the contract.'
    },
    categorize: {
      items: [
        {
          ru: 'Выход должен строго соответствовать интерфейсу IRoomTask',
          en: 'Output must strictly match the IRoomTask interface'
        },
        {
          ru: 'Сделай код красивым и современным',
          en: 'Make the code beautiful and modern'
        },
        {
          ru: 'Запрещено использовать внешние библиотеки вне package.json',
          en: 'Forbidden to use external libraries outside of package.json'
        },
        {
          ru: 'Постарайся не допускать ошибок',
          en: 'Try not to make any mistakes'
        }
      ],
      buckets: [
        { ru: 'Контрактные (Strong)', en: 'Contractual (Strong)' },
        { ru: 'Vibecode (Weak)', en: 'Vibecode (Weak)' }
      ],
      correctMapping: {
        'Output must strictly match the IRoomTask interface': 'Contractual (Strong)',
        'Make the code beautiful and modern': 'Vibecode (Weak)',
        'Forbidden to use external libraries outside of package.json': 'Contractual (Strong)',
        'Try not to make any mistakes': 'Vibecode (Weak)',
      }
    },
    answer: '',
    explanation: {
      ru: 'Контракт требует измеримых или проверяемых условий. "Красиво" и "постарайся" — это шум (vibecode).',
      en: 'A contract requires measurable or verifiable conditions. "Beautiful" and "try" are just noise (vibecode).'
    }
  },
  {
    id: 5,
    type: 'scenario',
    question: {
      ru: 'Какое действие в промпт-контракте будет наиболее эффективным при ошибке JSON?',
      en: 'Which action in the prompt contract will be most effective upon a JSON error?'
    },
    scenario: {
      brief: {
        ru: 'Ваш системный промпт требует JSON. Агент выдал валидный JSON, но пропустил обязательное поле "priority".',
        en: 'Your system prompt requires JSON. The agent produced valid JSON but missed the mandatory "priority" field.'
      },
      constraints: [
        {
          ru: 'Нельзя просто проигнорировать ошибку',
          en: 'Cannot simply ignore the error'
        },
        {
          ru: 'Нужно минимизировать потребление токенов при исправлении',
          en: 'Minimize token usage during the fix'
        }
      ],
      choices: [
        {
          text: {
            ru: 'Отправить всю историю заново и попросить "быть внимательнее"',
            en: 'Resend the entire history and ask to "be more careful"'
          },
          outcome: {
            ru: 'Агент извиняется, но может снова ошибиться, потратив много токенов.',
            en: 'The agent apologizes but might fail again, wasting many tokens.'
          },
          score: 0
        },
        {
          text: {
            ru: 'Отправить сообщение об ошибке валидации с указанием пропущенного поля',
            en: 'Send a validation error message specifying the missing field'
          },
          outcome: {
            ru: 'Агент мгновенно исправляет JSON, понимая конкретную причину сбоя.',
            en: 'The agent instantly fixes the JSON, understanding the specific reason for the failure.'
          },
          score: 100
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Явная обратная связь по схеме (error loop) — самый быстрый способ исправления дрейфа.',
      en: 'Explicit schema feedback (error loop) is the fastest way to correct drift.'
    }
  },
  {
    id: 6,
    type: 'timeline',
    question: {
      ru: 'Как правильно изменять промпт-контракт в работающей системе?',
      en: 'How to correctly modify a prompt contract in a live system?'
    },
    timeline: {
      events: [
        {
          label: {
            ru: 'Изменение промпта в коде',
            en: 'Modify prompt in code'
          },
          year: 'Step 1'
        },
        {
          label: {
            ru: 'Запуск регрессионных тестов (Prompt Evals)',
            en: 'Run regression tests (Prompt Evals)'
          },
          year: 'Step 2'
        },
        {
          label: {
            ru: 'Анализ стоимости и задержки (Latency)',
            en: 'Analyze cost and latency'
          },
          year: 'Step 3'
        },
        {
          label: {
            ru: 'Деплой новой версии контракта',
            en: 'Deploy new contract version'
          },
          year: 'Step 4'
        }
      ],
      correctOrder: [
        {
          ru: 'Изменение промпта в коде',
          en: 'Modify prompt in code'
        },
        {
          ru: 'Запуск регрессионных тестов (Prompt Evals)',
          en: 'Run regression tests (Prompt Evals)'
        },
        {
          ru: 'Анализ стоимости и задержки (Latency)',
          en: 'Analyze cost and latency'
        },
        {
          ru: 'Деплой новой версии контракта',
          en: 'Deploy new contract version'
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Промпты — это код. Они требуют такого же цикла тестирования и анализа перед деплоем.',
      en: 'Prompts are code. They require the same cycle of testing and analysis before deployment.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Какое из этих утверждений о Negative Constraints верно?',
      en: 'Which of these statements about Negative Constraints is true?'
    },
    options: [
      {
        ru: 'Они не работают, модели их игнорируют',
        en: 'They don\'t work; models ignore them'
      },
      {
        ru: 'Они сужают пространство поиска решений, предотвращая опасные или неэффективные пути',
        en: 'They narrow the solution search space, preventing dangerous or inefficient paths'
      },
      {
        ru: 'Их нужно писать только капсом, чтобы модель поняла',
        en: 'They must be written in ALL CAPS for the model to understand'
      }
    ],
    answer: {
      ru: 'Они сужают пространство поиска решений, предотвращая опасные или неэффективные пути',
      en: 'They narrow the solution search space, preventing dangerous or inefficient paths'
    },
    explanation: {
      ru: 'Указание границ "от противного" часто работает стабильнее, чем простое описание позитивной цели.',
      en: 'Defining boundaries "by contradiction" often works more stably than just describing a positive goal.'
    }
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'С чего лучше начать контракт для задачи рефакторинга?',
      en: 'Where is the best place to start a contract for a refactoring task?'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Привет! Мы пишем промпт для агента, который должен обновить импорты. С чего начнем контракт?',
        en: 'Hi! We are writing a prompt for an agent to update imports. Where do we start the contract?'
      },
      userOptions: [
        {
          text: {
            ru: 'С жесткого запрета на изменение логики функций (Strict Logic Freeze)',
            en: 'With a strict prohibition on changing function logic (Strict Logic Freeze)'
          },
          reaction: {
            ru: 'Точно. Ограничение области воздействия — основа контракта. А как мы опишем формат ответа?',
            en: 'Exactly. Limiting the impact area is the core of the contract. How should we describe the response format?'
          },
          isCorrect: true,
          deepening: {
            ru: 'Лучше всего задать JSON-схему с полями filePath и changeDiff.',
            en: 'The best way is to define a JSON schema with filePath and changeDiff fields.'
          }
        },
        {
          text: {
            ru: 'С описания того, как сильно мы ценим работу агента',
            en: 'By describing how much we value the agent\'s work'
          },
          reaction: {
            ru: 'Лесть не поможет стабильности. Нам нужны жесткие границы.',
            en: 'Flattery won\'t help stability. We need hard boundaries.'
          },
          isCorrect: false
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Контракт = Ограничения + Структура. Без этого агент превращается в непредсказуемый чат-бот.',
      en: 'Contract = Constraints + Structure. Without this, an agent turns into an unpredictable chatbot.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Каким образом строгий промпт-контракт снижает риск переполнения контекста?',
      en: 'How does a strict prompt contract reduce the risk of context overflow?'
    },
    options: [
      {
        ru: 'Он заставляет модель говорить меньше "вежливых" слов',
        en: 'It forces the model to use fewer "polite" words'
      },
      {
        ru: 'Он ограничивает агента только необходимыми данными, предотвращая лишний шум',
        en: 'It restricts the agent to only necessary data, preventing extra noise'
      },
      {
        ru: 'Контракт автоматически сжимает текст через GZIP',
        en: 'The contract automatically compresses text via GZIP'
      }
    ],
    answer: {
      ru: 'Он ограничивает агента только необходимыми данными, предотвращая лишний шум',
      en: 'It restricts the agent to only necessary data, preventing extra noise'
    },
    explanation: {
      ru: 'Меньше "шума" в ответе — больше места для полезной логики в следующих итерациях.',
      en: 'Less "noise" in the response means more space for useful logic in subsequent iterations.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Какое из перечисленных свойств НЕ является характеристикой хорошего промпт-контракта?',
      en: 'Which of the following is NOT a characteristic of a good prompt contract?'
    },
    options: [
      {
        ru: 'Детерминированность (ожидаемость формата)',
        en: 'Determinism (predictability of format)'
      },
      {
        ru: 'Адаптивность (способность меняться под настроение модели)',
        en: 'Adaptability (ability to change based on the model\'s mood)'
      },
      {
        ru: 'Проверяемость (возможность автоматической валидации)',
        en: 'Verifiability (possibility of automatic validation)'
      }
    ],
    answer: {
      ru: 'Адаптивность (способность меняться под настроение модели)',
      en: 'Adaptability (ability to change based on the model\'s mood)'
    },
    explanation: {
      ru: 'Контракт должен быть стабильным. Если он "адаптируется" под ошибки модели, он перестает быть контрактом.',
      en: 'A contract must be stable. If it "adapts" to model errors, it ceases to be a contract.'
    }
  }
];
