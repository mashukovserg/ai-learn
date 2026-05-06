import { LocalizedTask } from '../types';

export const agenticTestingLoopTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему классическое написание тестов после кода (Test-After) неэффективно для агентов?',
      en: 'Why is classic test-after coding inefficient for agents?'
    },
    options: [
      {
        ru: 'Агенты не умеют писать тесты.',
        en: 'Agents don\'t know how to write tests.'
      },
      {
        ru: 'Без заранее написанных тестов агент не имеет объективного критерия завершения и может "дрейфовать" в бесконечном цикле.',
        en: 'Without pre-written tests, the agent has no objective completion criterion and may "drift" in an infinite loop.'
      },
      {
        ru: 'Тесты замедляют работу модели.',
        en: 'Tests slow down the model.'
      }
    ],
    answer: {
      ru: 'Без заранее написанных тестов агент не имеет объективного критерия завершения и может "дрейфовать" в бесконечном цикле.',
      en: 'Without pre-written tests, the agent has no objective completion criterion and may "drift" in an infinite loop.'
    },
    explanation: {
      ru: 'В агентной разработке тесты — это не просто проверка, а "маяк", по которому модель понимает, что задача выполнена успешно.',
      en: 'In agentic development, tests are not just a check; they are a "beacon" that helps the model understand the task is completed successfully.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    question: {
      ru: 'Расположите этапы "Агентного TDD цикла" в правильном порядке.',
      en: 'Order the stages of the "Agentic TDD loop" correctly.'
    },
    initialItems: [
      {
        ru: 'Запуск тестов и фиксация ошибки (Observe)',
        en: 'Run tests and record failure (Observe)'
      },
      {
        ru: 'Написание минимального кода для прохождения (Act)',
        en: 'Write minimal code to pass (Act)'
      },
      {
        ru: 'Создание спецификации и тест-кейса (Plan)',
        en: 'Create specification and test case (Plan)'
      },
      {
        ru: 'Рефакторинг и верификация (Refine)',
        en: 'Refactor and verify (Refine)'
      }
    ],
    correctOrder: [
      {
        ru: 'Создание спецификации и тест-кейса (Plan)',
        en: 'Create specification and test case (Plan)'
      },
      {
        ru: 'Запуск тестов и фиксация ошибки (Observe)',
        en: 'Run tests and record failure (Observe)'
      },
      {
        ru: 'Написание минимального кода для прохождения (Act)',
        en: 'Write minimal code to pass (Act)'
      },
      {
        ru: 'Рефакторинг и верификация (Refine)',
        en: 'Refactor and verify (Refine)'
      }
    ],
    answer: '',
    explanation: {
      ru: 'Цикл начинается с плана и теста, затем мы видим "красный" статус, пишем код до "зеленого" и полируем результат.',
      en: 'The loop starts with a plan and a test, then we see a "red" status, write code until "green," and polish the result.'
    }
  },
  {
    id: 3,
    type: 'categorize',
    question: {
      ru: 'Классифицируйте тесты по их роли в агентном цикле.',
      en: 'Classify tests by their role in the agentic loop.'
    },
    categorize: {
      items: [
        {
          ru: 'Unit-тесты (Логика функции)',
          en: 'Unit tests (Function logic)'
        },
        {
          ru: 'Интеграционные (Связь модулей)',
          en: 'Integration tests (Module wiring)'
        },
        {
          ru: 'Snapshot-тесты (UI компоненты)',
          en: 'Snapshot tests (UI components)'
        },
        {
          ru: 'E2E-тесты (Бизнес-сценарии)',
          en: 'E2E tests (Business scenarios)'
        }
      ],
      buckets: [
        { ru: 'Быстрая обратная связь', en: 'Fast Feedback' },
        { ru: 'Проверка надежности', en: 'Confidence Check' }
      ],
      correctMapping: {
        'Unit-тесты (Логика функции)': 'Быстрая обратная связь',
        'Unit tests (Function logic)': 'Fast Feedback',
        'Интеграционные (Связь модулей)': 'Быстрая обратная связь',
        'Integration tests (Module wiring)': 'Fast Feedback',
        'Snapshot-тесты (UI компоненты)': 'Проверка надежности',
        'Snapshot tests (UI components)': 'Confidence Check',
        'E2E-тесты (Бизнес-сценарии)': 'Проверка надежности',
        'E2E tests (Business scenarios)': 'Confidence Check'
      }
    },
    answer: '',
    explanation: {
      ru: 'Агентам нужны быстрые тесты для коротких итераций и тяжелые тесты для финальной приемки.',
      en: 'Agents need fast tests for short iterations and heavy tests for final acceptance.'
    }
  },
  {
    id: 4,
    type: 'scenario',
    question: {
      ru: 'Что должен сделать агент, если тесты упали с непонятной системной ошибкой?',
      en: 'What should the agent do if tests fail with an obscure system error?'
    },
    scenario: {
      brief: {
        ru: 'Агент написал код, запустил тесты, но вместо логической ошибки получил "Exit code 137 (OOM)" или "Segmentation fault".',
        en: 'The agent wrote code and ran tests, but instead of a logic error, it got "Exit code 137 (OOM)" or "Segmentation fault".'
      },
      constraints: [
        {
          ru: 'Нельзя бесконечно пытаться переписать тот же код.',
          en: 'Cannot infinitely try to rewrite the same code.'
        },
        {
          ru: 'Нужно найти первопричину в окружении.',
          en: 'Must find the root cause in the environment.'
        }
      ],
      choices: [
        {
          text: {
            ru: 'Попробовать переписать функцию еще 5 раз другим способом.',
            en: 'Try rewriting the function 5 more times in a different way.'
          },
          outcome: {
            ru: 'Цикл зацикливается, бюджет тает, ошибка остается.',
            en: 'The loop spins, the budget melts, the error remains.'
          },
          score: 0
        },
        {
          text: {
            ru: 'Использовать инструменты исследования (ls, cat, ps) для проверки состояния системы и зависимостей.',
            en: 'Use discovery tools (ls, cat, ps) to check system state and dependencies.'
          },
          outcome: {
            ru: 'Агент обнаруживает конфликт версий или нехватку памяти и запрашивает помощь или исправляет конфиг.',
            en: 'The agent discovers a version conflict or memory shortage and requests help or fixes the config.'
          },
          score: 10
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Триаж (Triage) ошибок — важнейший навык агента. Не всегда проблема в коде, иногда она в инфраструктуре.',
      en: 'Error triage is a critical agent skill. The problem isn\'t always in the code; sometimes it\'s in the infrastructure.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "Self-Healing Loop" (Петля самоисцеления)?',
      en: 'What is a "Self-Healing Loop"?'
    },
    options: [
      {
        ru: 'Когда агент сам идет в отпуск после багов.',
        en: 'When an agent takes a vacation after finding bugs.'
      },
      {
        ru: 'Автоматический цикл, в котором агент получает лог ошибки теста, анализирует его и исправляет свой же код до прохождения теста.',
        en: 'An automated loop where the agent receives a test error log, analyzes it, and fixes its own code until the test passes.'
      },
      {
        ru: 'Механизм автоматической перезагрузки сервера.',
        en: 'A mechanism for automatic server reboot.'
      }
    ],
    answer: {
      ru: 'Автоматический цикл, в котором агент получает лог ошибки теста, анализирует его и исправляет свой же код до прохождения теста.',
      en: 'An automated loop where the agent receives a test error log, analyzes it, and fixes its own code until the test passes.'
    },
    explanation: {
      ru: 'Самоисцеление — это святой грааль агентной разработки. Оно превращает ошибки из препятствий в данные для следующего шага.',
      en: 'Self-healing is the holy grail of agentic development. It turns errors from obstacles into data for the next step.'
    }
  },
  {
    id: 6,
    type: 'multiple-select',
    question: {
      ru: 'Какие данные НЕОБХОДИМО передать агенту в сообщении об ошибке теста для эффективного фикса?',
      en: 'What data MUST be passed to the agent in a test failure message for an effective fix?'
    },
    options: [
      {
        ru: 'Полный Stack Trace.',
        en: 'Full Stack Trace.'
      },
      {
        ru: 'Ожидаемое vs Фактическое значение (Diff).',
        en: 'Expected vs Actual value (Diff).'
      },
      {
        ru: 'Имя разработчика, написавшего тест.',
        en: 'Name of the developer who wrote the test.'
      },
      {
        ru: 'Контекст (код самого теста).',
        en: 'Context (the test code itself).'
      }
    ],
    answer: [
      {
        ru: 'Полный Stack Trace.',
        en: 'Full Stack Trace.'
      },
      {
        ru: 'Ожидаемое vs Фактическое значение (Diff).',
        en: 'Expected vs Actual value (Diff).'
      },
      {
        ru: 'Контекст (код самого теста).',
        en: 'Context (the test code itself).'
      }
    ],
    explanation: {
      ru: 'Агенту нужно понимать не только ГДЕ упало, но и ПОЧЕМУ. Код теста — лучший источник условий задачи.',
      en: 'The agent needs to understand not just WHERE it failed, but WHY. The test code is the best source for task conditions.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "Flaky tests" и почему они опасны для агентов?',
      en: 'What are "flaky tests" and why are they dangerous for agents?'
    },
    options: [
      {
        ru: 'Тесты, которые всегда падают.',
        en: 'Tests that always fail.'
      },
      {
        ru: 'Нестабильные тесты, которые то проходят, то падают без изменений в коде.',
        en: 'Unstable tests that pass or fail without any code changes.'
      },
      {
        ru: 'Тесты, написанные на старых языках программирования.',
        en: 'Tests written in old programming languages.'
      }
    ],
    answer: {
      ru: 'Нестабильные тесты, которые то проходят, то падают без изменений в коде.',
      en: 'Unstable tests that pass or fail without any code changes.'
    },
    explanation: {
      ru: 'Flaky-тесты подрывают доверие агента к обратной связи. Агент может бесконечно "чинить" работающий код, думая, что он сломан.',
      en: 'Flaky tests undermine the agent\'s trust in feedback. The agent might infinitely "fix" working code, thinking it\'s broken.'
    }
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Как правильно настроить цикл тестирования для нового компонента?',
      en: 'How to correctly set up a testing loop for a new component?'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Мы начинаем разработку модуля аутентификации. Агент готов писать код. Что сделаем первым делом?',
        en: 'We are starting development on an auth module. The agent is ready to write code. What do we do first?'
      },
      userOptions: [
        {
          text: {
            ru: 'Попросим агента сначала написать тесты на основные сценарии (Login, Logout).',
            en: 'Ask the agent to write tests for core scenarios (Login, Logout) first.'
          },
          reaction: {
            ru: 'Именно! Test-First подход задает границы. А что если агент застрянет на исправлении одного и того же теста?',
            en: 'Exactly! A Test-First approach sets boundaries. What if the agent gets stuck fixing the same test?'
          },
          isCorrect: true,
          deepening: {
            ru: 'Нужно ограничить количество попыток (Max Retries) и настроить эскалацию на человека.',
            en: 'We need to limit retries (Max Retries) and set up human escalation.'
          }
        },
        {
          text: {
            ru: 'Пусть пишет код, а тесты добавим потом, когда все заработает.',
            en: 'Let it write code, and we\'ll add tests later when it works.'
          },
          reaction: {
            ru: 'Это ловушка. Без тестов мы не сможем автоматически проверить, не сломал ли агент что-то другое.',
            en: 'That\'s a trap. Without tests, we can\'t automatically check if the agent broke something else.'
          },
          isCorrect: false
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Тесты — это фундамент автономности. Без них агент — просто быстрый генератор случайного кода.',
      en: 'Tests are the foundation of autonomy. Without them, an agent is just a fast random code generator.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Какова роль "Regression Testing" в агентном цикле?',
      en: 'What is the role of "Regression Testing" in the agentic loop?'
    },
    options: [
      {
        ru: 'Проверка, что новые изменения не сломали старую функциональность.',
        en: 'Ensuring that new changes haven\'t broken old functionality.'
      },
      {
        ru: 'Удаление старого кода из проекта.',
        en: 'Removing old code from the project.'
      },
      {
        ru: 'Тестирование производительности системы.',
        en: 'Testing system performance.'
      }
    ],
    answer: {
      ru: 'Проверка, что новые изменения не сломали старую функциональность.',
      en: 'Ensuring that new changes haven\'t broken old functionality.'
    },
    explanation: {
      ru: 'Регрессия критична для агентов, так как они могут случайно изменить поведение в неожиданных местах при правке локальной задачи.',
      en: 'Regression is critical for agents because they might accidentally change behavior in unexpected places while fixing a local task.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Как "Тестовое покрытие" (Code Coverage) помогает управлять агентом?',
      en: 'How does "Code Coverage" help manage an agent?'
    },
    options: [
      {
        ru: 'Никак, это просто цифра для отчетов.',
        en: 'It doesn\'t; it\'s just a number for reports.'
      },
      {
        ru: 'Оно показывает "белые пятна" — участки кода, которые агент изменил, но не покрыл тестами, что является риском.',
        en: 'It shows "blind spots" — areas the agent changed but didn\'t cover with tests, which is a risk.'
      },
      {
        ru: 'Оно автоматически исправляет ошибки в коде.',
        en: 'It automatically fixes bugs in code.'
      }
    ],
    answer: {
      ru: 'Оно показывает "белые пятна" — участки кода, которые агент изменил, но не покрыл тестами, что является риском.',
      en: 'It shows "blind spots" — areas the agent changed but didn\'t cover with tests, which is a risk.'
    },
    explanation: {
      ru: 'Высокое покрытие дает уверенность в том, что агент не оставил за собой "бомб замедленного действия".',
      en: 'High coverage gives confidence that the agent hasn\'t left "time bombs" behind.'
    }
  }
];
