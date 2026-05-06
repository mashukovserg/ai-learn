import { LocalizedTask } from '../types';

export const agenticUiDeliveryTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'В чем главная сложность для агента при генерации UI компонентов?',
      en: 'What is the primary challenge for an agent when generating UI components?'
    },
    options: [
      {
        ru: 'Агенты не умеют подбирать цвета.',
        en: 'Agents don\'t know how to pick colors.'
      },
      {
        ru: 'Отсутствие "глаз" — агент не видит финальный рендер и может создавать визуально некорректные, но синтаксически верные компоненты.',
        en: 'Lack of "eyes" — the agent doesn\'t see the final render and can create visually incorrect but syntactically valid components.'
      },
      {
        ru: 'Агенты пишут слишком много CSS.',
        en: 'Agents write too much CSS.'
      }
    ],
    answer: {
      ru: 'Отсутствие "глаз" — агент не видит финальный рендер и может создавать визуально некорректные, но синтаксически верные компоненты.',
      en: 'Lack of "eyes" — the agent doesn\'t see the final render and can create visually incorrect but syntactically valid components.'
    },
    explanation: {
      ru: 'Пока агент не подключен к системе компьютерного зрения (Vision), он работает "вслепую", полагаясь только на текстовые спецификации и код.',
      en: 'Until an agent is connected to a Vision system, it works "blindly," relying solely on text specifications and code.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    question: {
      ru: 'Расположите этапы воркфлоу "Design-to-Code" для агента в правильном порядке.',
      en: 'Order the stages of an agentic "Design-to-Code" workflow correctly.'
    },
    initialItems: [
      {
        ru: 'Настройка адаптивности (Responsive pass)',
        en: 'Responsive adjustments (Responsive pass)'
      },
      {
        ru: 'Анализ спецификации или скриншота (Discovery)',
        en: 'Spec or screenshot analysis (Discovery)'
      },
      {
        ru: 'Проверка доступности (Accessibility/a11y check)',
        en: 'Accessibility check (a11y check)'
      },
      {
        ru: 'Создание базовой структуры JSX/HTML (Skeleton)',
        en: 'Base JSX/HTML structure creation (Skeleton)'
      }
    ],
    correctOrder: [
      {
        ru: 'Анализ спецификации или скриншота (Discovery)',
        en: 'Spec or screenshot analysis (Discovery)'
      },
      {
        ru: 'Создание базовой структуры JSX/HTML (Skeleton)',
        en: 'Base JSX/HTML structure creation (Skeleton)'
      },
      {
        ru: 'Настройка адаптивности (Responsive pass)',
        en: 'Responsive adjustments (Responsive pass)'
      },
      {
        ru: 'Проверка доступности (Accessibility/a11y check)',
        en: 'Accessibility check (a11y check)'
      }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала понимаем задачу, строим структуру, затем адаптируем под разные экраны и в конце проверяем доступность для всех пользователей.',
      en: 'First understand the task, build the structure, then adapt for different screens, and finally verify accessibility for all users.'
    }
  },
  {
    id: 3,
    type: 'categorize',
    question: {
      ru: 'Классифицируйте UI-инструкции по их эффективности для агента.',
      en: 'Classify UI instructions by their effectiveness for an agent.'
    },
    categorize: {
      items: [
        {
          ru: 'Используй отступ 16px (p-4)',
          en: 'Use 16px padding (p-4)'
        },
        {
          ru: 'Сделай кнопку "красивой"',
          en: 'Make the button "beautiful"'
        },
        {
          ru: 'Цвет текста должен быть #262626',
          en: 'Text color should be #262626'
        },
        {
          ru: 'Добавь немного "воздуха"',
          en: 'Add some "breathing room"'
        }
      ],
      buckets: [
        { ru: 'Конкретные (Strong)', en: 'Concrete (Strong)' },
        { ru: 'Субъективные (Weak)', en: 'Subjective (Weak)' }
      ],
      correctMapping: {
        'Используй отступ 16px (p-4)': 'Конкретные (Strong)',
        'Use 16px padding (p-4)': 'Concrete (Strong)',
        'Сделай кнопку "красивой"': 'Субъективные (Weak)',
        'Make the button "beautiful"': 'Subjective (Weak)',
        'Цвет текста должен быть #262626': 'Конкретные (Strong)',
        'Text color should be #262626': 'Concrete (Strong)',
        'Добавь немного "воздуха"': 'Субъективные (Weak)',
        'Add some "breathing room"': 'Subjective (Weak)'
      }
    },
    answer: '',
    explanation: {
      ru: 'Агенты лучше работают с цифрами и токенами дизайн-системы, чем с метафорами.',
      en: 'Agents perform better with numbers and design system tokens than with metaphors.'
    }
  },
  {
    id: 4,
    type: 'multiple-select',
    question: {
      ru: 'Какие инструменты помогают агенту верифицировать UI без визуального контакта?',
      en: 'Which tools help an agent verify UI without visual contact?'
    },
    options: [
      {
        ru: 'Линтеры (ESLint) для проверки структуры JSX.',
        en: 'Linters (ESLint) to check JSX structure.'
      },
      {
        ru: 'Тесты доступности (pa11y, axe-core).',
        en: 'Accessibility tests (pa11y, axe-core).'
      },
      {
        ru: 'Snapshot-тестирование (Jest Snapshots).',
        en: 'Snapshot testing (Jest Snapshots).'
      },
      {
        ru: 'Генератор случайных цветов.',
        en: 'Random color generator.'
      }
    ],
    answer: [
      {
        ru: 'Линтеры (ESLint) для проверки структуры JSX.',
        en: 'Linters (ESLint) to check JSX structure.'
      },
      {
        ru: 'Тесты доступности (pa11y, axe-core).',
        en: 'Accessibility tests (pa11y, axe-core).'
      },
      {
        ru: 'Snapshot-тестирование (Jest Snapshots).',
        en: 'Snapshot testing (Jest Snapshots).'
      }
    ],
    explanation: {
      ru: 'Автоматические тесты дают агенту текстовый фидбек, который заменяет визуальную проверку.',
      en: 'Automated tests provide text feedback that replaces visual inspection for the agent.'
    }
  },
  {
    id: 5,
    type: 'scenario',
    question: {
      ru: 'Как агент должен обрабатывать отсутствие нужного компонента в дизайн-системе?',
      en: 'How should an agent handle a missing component in the design system?'
    },
    scenario: {
      brief: {
        ru: 'Задание: Добавить "Date Picker". В текущей библиотеке компонентов проекта его нет.',
        en: 'Task: Add a "Date Picker." It is missing from the project\'s current component library.'
      },
      constraints: [
        {
          ru: 'Нельзя подключать тяжелые внешние библиотеки без разрешения.',
          en: 'Do not add heavy external libraries without permission.'
        },
        {
          ru: 'Компонент должен выглядеть консистентно с остальным UI.',
          en: 'The component must look consistent with the rest of the UI.'
        }
      ],
      choices: [
        {
          text: {
            ru: 'Написать кастомный компонент с нуля, используя существующие Tailwind-токены проекта.',
            en: 'Write a custom component from scratch using existing Tailwind tokens.'
          },
          outcome: {
            ru: 'Высокая консистентность и отсутствие лишних зависимостей.',
            en: 'High consistency and no extra dependencies.'
          },
          score: 10
        },
        {
          text: {
            ru: 'Установить первую попавшуюся библиотеку из npm.',
            en: 'Install the first npm library found.'
          },
          outcome: {
            ru: 'Риск нарушения безопасности, раздувание бандла и визуальный диссонанс.',
            en: 'Risk of security issues, bundle bloat, and visual dissonance.'
          },
          score: 0
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Использование дизайн-токенов (цвета, отступы) позволяет агенту создавать новые элементы, которые "вписываются" в проект автоматически.',
      en: 'Using design tokens (colors, spacing) allows an agent to create new elements that "fit" into the project automatically.'
    }
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое "Component Consistency" в контексте агентной разработки?',
      en: 'What is "Component Consistency" in agentic development?'
    },
    options: [
      {
        ru: 'Когда все компоненты написаны на одном языке.',
        en: 'When all components are written in the same language.'
      },
      {
        ru: 'Соблюдение агентом единых правил именования, структуры пропсов и использования общих атомарных компонентов.',
        en: 'The agent adhering to unified naming rules, prop structures, and shared atomic components.'
      },
      {
        ru: 'Когда агент всегда использует только <div>.',
        en: 'When an agent only ever uses <div>.'
      }
    ],
    answer: {
      ru: 'Соблюдение агентом единых правил именования, структуры пропсов и использования общих атомарных компонентов.',
      en: 'The agent adhering to unified naming rules, prop structures, and shared atomic components.'
    },
    explanation: {
      ru: 'Консистентность важна для поддержки кода людьми. Агент должен переиспользовать существующее, а не плодить дубликаты.',
      en: 'Consistency is critical for human maintainability. The agent must reuse existing code rather than spawning duplicates.'
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Как агент может проверить "отзывчивость" (Responsiveness) своего кода?',
      en: 'How can an agent verify the responsiveness of its code?'
    },
    options: [
      {
        ru: 'Никак, это невозможно без браузера.',
        en: 'It can\'t; it\'s impossible without a browser.'
      },
      {
        ru: 'Через проверку наличия адаптивных классов (например, sm:, md:, lg: в Tailwind) и логики медиа-запросов.',
        en: 'By checking for responsive classes (e.g., sm:, md:, lg: in Tailwind) and media query logic.'
      },
      {
        ru: 'Спросив другую модель, выглядит ли код "адаптивно".',
        en: 'By asking another model if the code looks "responsive."'
      }
    ],
    answer: {
      ru: 'Через проверку наличия адаптивных классов (например, sm:, md:, lg: в Tailwind) и логики медиа-запросов.',
      en: 'By checking for responsive classes (e.g., sm:, md:, lg: in Tailwind) and media query logic.'
    },
    explanation: {
      ru: 'Анализ кода позволяет агенту убедиться, что он предусмотрел поведение для разных брейкпоинтов.',
      en: 'Code analysis allows an agent to ensure it has accounted for different breakpoints.'
    }
  },
  {
    id: 8,
    type: 'mentor',
    question: {
      ru: 'Как внедрить a11y-стандарты в работу агента?',
      en: 'How to embed a11y standards into an agent\'s workflow?'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Наш агент создал форму, но она недоступна для скринридеров. Как мы это исправим системно?',
        en: 'Our agent created a form, but it is inaccessible to screen readers. How do we fix this systemically?'
      },
      userOptions: [
        {
          text: {
            ru: 'Добавим в системный промпт требование: "Всегда использовать семантичный HTML и ARIA-атрибуты".',
            en: 'Add a requirement to the system prompt: "Always use semantic HTML and ARIA attributes."'
          },
          reaction: {
            ru: 'Хорошее начало. Но агент может забыть. Что еще?',
            en: 'Good start. But the agent might forget. What else?'
          },
          isCorrect: true,
          deepening: {
            ru: 'Нужно добавить автоматический a11y-линтер в CI/CD цикл агента.',
            en: 'We need to add an automated a11y linter to the agent\'s CI/CD loop.'
          }
        },
        {
          text: {
            ru: 'Будем сами дописывать атрибуты за агентом.',
            en: 'We will manually add the attributes after the agent.'
          },
          reaction: {
            ru: 'Это не масштабируется. Мы хотим автономности.',
            en: 'This doesn\'t scale. We want autonomy.'
          },
          isCorrect: false
        }
      ]
    },
    answer: '',
    explanation: {
      ru: 'Сочетание строгих инструкций и автоматических проверок — лучший способ гарантировать качество UI.',
      en: 'A combination of strict instructions and automated checks is the best way to guarantee UI quality.'
    }
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: {
      ru: 'Почему использование "Magic Numbers" (например, margin-left: 13px) вредно при агентной генерации?',
      en: 'Why is using "magic numbers" (e.g., margin-left: 13px) harmful in agentic generation?'
    },
    options: [
      {
        ru: 'Потому что 13 — несчастливое число.',
        en: 'Because 13 is an unlucky number.'
      },
      {
        ru: 'Это нарушает сетку проекта и делает UI непредсказуемым; агент должен использовать переменные темы.',
        en: 'It breaks the project grid and makes UI unpredictable; the agent should use theme variables.'
      },
      {
        ru: 'Агенты не умеют считать до 13.',
        en: 'Agents don\'t know how to count to 13.'
      }
    ],
    answer: {
      ru: 'Это нарушает сетку проекта и делает UI непредсказуемым; агент должен использовать переменные темы.',
      en: 'It breaks the project grid and makes UI unpredictable; the agent should use theme variables.'
    },
    explanation: {
      ru: 'Дизайн-система — это "рельсы" для агента. Без них он начинает импровизировать, разрушая визуальную целостность.',
      en: 'A design system provides "rails" for the agent. Without them, it begins to improvise, destroying visual integrity.'
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Какова роль Vision-моделей в будущем UI Delivery?',
      en: 'What is the role of Vision models in the future of UI delivery?'
    },
    options: [
      {
        ru: 'Они заменят дизайнеров.',
        en: 'They will replace designers.'
      },
      {
        ru: 'Они позволят агентам видеть результат рендеринга и исправлять визуальные баги через обратную связь (Visual Feedback Loop).',
        en: 'They will allow agents to see the rendered result and fix visual bugs via a Visual Feedback Loop.'
      },
      {
        ru: 'Они нужны только для генерации картинок.',
        en: 'They are only needed for image generation.'
      }
    ],
    answer: {
      ru: 'Они позволят агентам видеть результат рендеринга и исправлять визуальные баги через обратную связь (Visual Feedback Loop).',
      en: 'They will allow agents to see the rendered result and fix visual bugs via a Visual Feedback Loop.'
    },
    explanation: {
      ru: 'Visual Feedback Loop закрывает пробел между кодом и реальностью, делая агентов полноценными фронтенд-разработчиками.',
      en: 'A Visual Feedback Loop closes the gap between code and reality, making agents full-fledged frontend developers.'
    }
  }
];
