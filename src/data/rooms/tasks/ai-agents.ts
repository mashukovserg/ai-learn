import { LocalizedTask } from '../types';

export const aiAgentsTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Что превращает обычную LLM в автономного агента?', 
        en: 'What turns an ordinary LLM into an autonomous agent?' 
      },
      options: [
        { ru: 'Увеличение количества параметров', en: 'Increasing the number of parameters' },
        { ru: 'Доступ к внешним инструментам и цикл обратной связи (рассуждение + действие)', en: 'Access to external tools and a feedback loop (reasoning + action)' },
        { ru: 'Перевод интерфейса на темную тему', en: 'Changing the UI to dark mode' }
      ],
      answer: { ru: 'Доступ к внешним инструментам и цикл обратной связи (рассуждение + действие)', en: 'Access to external tools and a feedback loop (reasoning + action)' },
      explanation: { 
        ru: 'Правильно! Агент — это модель, которая может не только говорить, но и взаимодействовать с миром через API, код или браузер, корректируя свои действия на основе результата.', 
        en: 'Correct! An agent is a model that can not only talk but also interact with the world via APIs, code, or a browser, adjusting its actions based on the results.' 
      }
    },
    {
      id: 2,
      type: 'input',
      question: { 
        ru: 'Как называется механизм, позволяющий модели выдавать структурированные данные (например, JSON) для вызова внешних функций?', 
        en: 'What is the name of the mechanism that allows a model to output structured data (e.g., JSON) to call external functions?' 
      },
      answer: 'Function Calling',
      hint: { ru: 'По-английски: вызов функций.', en: 'In English: calling functions.' },
      explanation: { 
        ru: 'Верно! Function Calling — это стандарт, по которому модель понимает, какие инструменты ей доступны и как составить запрос к ним.', 
        en: 'Correct! Function Calling is the standard by which the model understands which tools are available and how to format requests to them.' 
      }
    },
    {
      id: 3,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите шаги цикла ReAct (Reason + Act).', 
        en: 'Sort the steps of the ReAct (Reason + Act) loop.' 
      },
      initialItems: [
        { ru: 'Действие (Action): вызов инструмента', en: 'Action: call a tool' },
        { ru: 'Наблюдение (Observation): результат выполнения', en: 'Observation: execution result' },
        { ru: 'Мысль (Thought): планирование шага', en: 'Thought: planning the step' },
        { ru: 'Финальный ответ', en: 'Final Answer' }
      ],
      correctOrder: [
        { ru: 'Мысль (Thought): планирование шага', en: 'Thought: planning the step' },
        { ru: 'Действие (Action): вызов инструмента', en: 'Action: call a tool' },
        { ru: 'Наблюдение (Observation): результат выполнения', en: 'Observation: execution result' },
        { ru: 'Финальный ответ', en: 'Final Answer' }
      ],
      explanation: { 
        ru: 'Правильно! В цикле ReAct модель сначала формулирует план (Thought), затем действует (Action), получает результат (Observation) и повторяет цикл до победного конца.', 
        en: 'Correct! In the ReAct loop, the model first formulates a plan (Thought), then acts (Action), receives a result (Observation), and repeats the cycle until the goal is met.' 
      },
      answer: ''
    },
    {
      id: 4,
      type: 'categorize',
      question: { 
        ru: 'Распределите архитектурные паттерны агентов по их описаниям.', 
        en: 'Match agent architectural patterns to their descriptions.' 
      },
      answer: '',
      explanation: { 
        ru: 'Верно! ReAct — это про "диалог внутри одной головы", а MAS — про разделение обязанностей между разными моделями.', 
        en: 'Correct! ReAct is about "dialogue inside one head," while MAS is about dividing responsibilities between different models.' 
      },
      categorize: {
        buckets: [
          { ru: 'Цикл ReAct', en: 'ReAct Loop' },
          { ru: 'Многоагентность (MAS)', en: 'Multi-Agent (MAS)' }
        ],
        items: [
          { ru: 'Последовательный внутренний диалог (Thought -> Action -> Observation)', en: 'Sequential inner dialogue (Thought -> Action -> Observation)' },
          { ru: 'Паттерн "Критик-Исполнитель": одна модель пишет, другая проверяет', en: '"Critic-Executor" pattern: one model writes, another checks' },
          { ru: 'Иерархия с оркестратором и несколькими воркерами', en: 'Hierarchy with an orchestrator and several workers' },
          { ru: 'Адаптация плана на основе обратной связи от одного инструмента', en: 'Adapting the plan based on feedback from a single tool' }
        ],
        correctMapping: {
          'Последовательный внутренний диалог (Thought -> Action -> Observation)': 'Цикл ReAct',
          'Sequential inner dialogue (Thought -> Action -> Observation)': 'ReAct Loop',
          'Паттерн "Критик-Исполнитель": одна модель пишет, другая проверяет': 'Многоагентность (MAS)',
          '"Critic-Executor" pattern: one model writes, another checks': 'Multi-Agent (MAS)',
          'Иерархия с оркестратором и несколькими воркерами': 'Многоагентность (MAS)',
          'Hierarchy with an orchestrator and several workers': 'Multi-Agent (MAS)',
          'Адаптация плана на основе обратной связи от одного инструмента': 'Цикл ReAct',
          'Adapting the plan based on feedback from a single tool': 'ReAct Loop'
        }
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: { 
        ru: 'Почему в цикле ReAct этап "Мысль" (Thought) критически важен?', 
        en: 'Why is the "Thought" stage critically important in the ReAct loop?' 
      },
      options: [
        { ru: 'Это просто вежливое вступление для пользователя', en: 'It\'s just a polite intro for the user' },
        { ru: 'Без него точность выполнения сложных задач падает с 85-90% до 40%', en: 'Without it, accuracy on complex tasks drops from 85-90% to 40%' },
        { ru: 'Это позволяет модели тратить меньше токенов на ответ', en: 'It allows the model to spend fewer tokens on the response' }
      ],
      answer: { ru: 'Без него точность выполнения сложных задач падает с 85-90% до 40%', en: 'Without it, accuracy on complex tasks drops from 85-90% to 40%' },
      explanation: { 
        ru: 'Точно. Если модель сразу "прыгает" в действие без планирования, она чаще ошибается. Когнитивная пауза (Thought) резко повышает качество.', 
        en: 'Exactly. If the model "jumps" straight to action without planning, it fails more often. A cognitive pause (Thought) drastically improves quality.' 
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: { 
        ru: 'Миссия: Проектирование автономного исследователя', 
        en: 'Mission: Designing an Autonomous Researcher' 
      },
      answer: '',
      explanation: { 
        ru: 'Для автономного агента, работающего длительное время, критически важна семантическая память (Vector DB) для хранения находок и изоляция (Sandbox) для безопасного выполнения инструментов.', 
        en: 'For an autonomous agent working over long periods, semantic memory (Vector DB) for storing findings and isolation (Sandbox) for safe tool execution are critically important.' 
      },
      scenario: {
        brief: {
          ru: 'Вам нужно создать агента, который в течение недели будет изучать рынок и присылать отчет. Агент должен помнить прошлые находки и безопасно использовать инструменты поиска и анализа.', 
          en: 'You need to create an agent that studies the market for a week and sends a report. The agent must remember past findings and safely use search and analysis tools.' 
        },
        constraints: [
          { ru: 'Долгосрочная память', en: 'Long-term memory' },
          { ru: 'Изоляция выполнения инструментов', en: 'Tool execution isolation' }
        ],
        choices: [
          {
            text: { ru: 'Использовать только окно контекста и локальный запуск', en: 'Use context window only and local execution' },
            outcome: { ru: 'Агент быстро переполняет память и начинает всё забывать, а локальный запуск создает риск безопасности для вашего ПК.', en: 'The agent quickly overflows memory and starts forgetting everything, while local execution poses a security risk to your PC.' },
            score: 10
          },
          {
            text: { ru: 'RAG-память (Vector DB) + Изолированный Docker (Sandbox)', en: 'RAG-memory (Vector DB) + Isolated Docker (Sandbox)' },
            outcome: { ru: 'Превосходно! Агент может хранить бесконечно много знаний в базе данных и безопасно выполнять код в песочнице.', en: 'Excellent! The agent can store infinite knowledge in the database and safely execute code in the sandbox.' },
            score: 100
          },
          {
            text: { ru: 'Ежедневное переобучение (Fine-tuning) модели на новых данных', en: 'Daily fine-tuning of the model on new data' },
            outcome: { ru: 'Слишком дорого и неэффективно для краткосрочной задачи. RAG справится с этим гораздо лучше и дешевле.', en: 'Too expensive and inefficient for a short-term task. RAG would handle this much better and cheaper.' },
            score: 20
          }
        ],
        passingScore: 50
      }
    }
  ];
