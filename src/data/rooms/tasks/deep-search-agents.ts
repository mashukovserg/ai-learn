import { LocalizedTask } from '../types';

export const deepSearchAgentsTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: {
        ru: 'Что лучше всего описывает «глубокий поиск» в агенте?',
        en: 'What best describes deep search in an agent?'
      },
      options: [
        { ru: 'Один быстрый ответ без проверки источников', en: 'A single fast answer without source checks' },
        { ru: 'Многошаговый цикл: план поиска, сбор источников, проверка и синтез с цитированием', en: 'A multi-step loop: search plan, source collection, verification, and citation-backed synthesis' },
        { ru: 'Дообучение весов модели прямо во время чата', en: 'Retraining the model weights directly during the chat' }
      ],
      answer: {
        ru: 'Многошаговый цикл: план поиска, сбор источников, проверка и синтез с цитированием',
        en: 'A multi-step loop: search plan, source collection, verification, and citation-backed synthesis'
      },
      explanation: {
        ru: 'Верно. Глубокий поиск отличается именно итеративной проверкой и ссылками на источники, а не одношот-ответом.',
        en: 'Correct. Deep search is defined by iterative verification and sources, not by a one-shot answer.'
      }
    },
    {
      id: 2,
      type: 'sorting',
      question: {
        ru: 'Упорядочите типичный конвейер глубокого поиска.',
        en: 'Sort a typical deep-search pipeline.'
      },
      initialItems: [
        { ru: 'Синтез ответа с ссылками и уровнем уверенности', en: 'Synthesize answer with citations and confidence level' },
        { ru: 'Формулировка цели и критериев успеха', en: 'Define objective and success criteria' },
        { ru: 'Первая волна поиска по подзапросам', en: 'First retrieval wave across sub-queries' },
        { ru: 'Проверка надёжности источников и поиск конфликтов', en: 'Assess source reliability and detect conflicts' },
        { ru: 'Уточняющий поиск по пробелам в данных', en: 'Run follow-up search to close information gaps' }
      ],
      correctOrder: [
        { ru: 'Формулировка цели и критериев успеха', en: 'Define objective and success criteria' },
        { ru: 'Первая волна поиска по подзапросам', en: 'First retrieval wave across sub-queries' },
        { ru: 'Проверка надёжности источников и поиск конфликтов', en: 'Assess source reliability and detect conflicts' },
        { ru: 'Уточняющий поиск по пробелам в данных', en: 'Run follow-up search to close information gaps' },
        { ru: 'Синтез ответа с ссылками и уровнем уверенности', en: 'Synthesize answer with citations and confidence level' }
      ],
      answer: '',
      explanation: {
        ru: 'Правильно. Сначала агент задаёт рамку задачи, потом ищет, проверяет, закрывает пробелы и только затем формирует итог.',
        en: 'Correct. The agent first frames the task, then searches, verifies, closes gaps, and only then produces the final output.'
      }
    },
    {
      id: 3,
      type: 'multiple-select',
      question: {
        ru: 'Какие критерии качества обязательны перед финальным ответом глубокого поиска?',
        en: 'Which quality gates are required before a deep-search final answer?'
      },
      options: [
        { ru: 'Ключевые факты подтверждены минимум двумя независимыми источниками', en: 'Key facts are confirmed by at least two independent sources' },
        { ru: 'У каждого важного факта есть ссылка и дата публикации', en: 'Each important fact includes a link and publication date' },
        { ru: 'Противоречащие источники явно отмечены', en: 'Conflicting sources are explicitly flagged' },
        { ru: 'Если данных не хватает, агент явно указывает неопределённость', en: 'If data is insufficient, the agent explicitly states uncertainty' },
        { ru: 'Источники можно не показывать, если ответ звучит уверенно', en: 'Sources can be omitted if the answer sounds confident' }
      ],
      answer: [
        { ru: 'Ключевые факты подтверждены минимум двумя независимыми источниками', en: 'Key facts are confirmed by at least two independent sources' },
        { ru: 'У каждого важного факта есть ссылка и дата публикации', en: 'Each important fact includes a link and publication date' },
        { ru: 'Противоречащие источники явно отмечены', en: 'Conflicting sources are explicitly flagged' },
        { ru: 'Если данных не хватает, агент явно указывает неопределённость', en: 'If data is insufficient, the agent explicitly states uncertainty' }
      ],
      explanation: {
        ru: 'Верно. Хороший глубокий поиск оценивается по проверяемости и прозрачности, а не по уверенному тону.',
        en: 'Correct. Good deep search is measured by verifiability and transparency, not by confident tone.'
      }
    },
    {
      id: 4,
      type: 'input',
      question: {
        ru: 'Как называется метрика общей задержки от отправки запроса до финального ответа?',
        en: 'What is the metric for end-to-end delay from request submission to final answer?'
      },
      answer: ['latency', 'задержка'],
      hint: {
        ru: 'Подсказка: в системах часто пишут P95 ___',
        en: 'Hint: in systems this is often tracked as P95 ___'
      },
      explanation: {
        ru: 'Да. Latency (задержка) особенно важна в глубоком поиске, потому что агент выполняет несколько раундов поиска и проверки.',
        en: 'Yes. Latency is critical in deep search because the agent runs multiple retrieval and verification rounds.'
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: {
        ru: 'Когда агенту нужно остановить глубокий поиск?',
        en: 'When should an agent stop deep search?'
      },
      options: [
        { ru: 'Сразу после первой найденной ссылки', en: 'Immediately after finding the first link' },
        { ru: 'Когда выполнены критерии качества, а новые запросы почти не меняют вывод', en: 'When quality gates are met and additional searches no longer materially change the conclusion' },
        { ru: 'Только когда полностью закончился лимит токенов', en: 'Only when the token limit is fully exhausted' }
      ],
      answer: {
        ru: 'Когда выполнены критерии качества, а новые запросы почти не меняют вывод',
        en: 'When quality gates are met and additional searches no longer materially change the conclusion'
      },
      explanation: {
        ru: 'Правильно. Это баланс между качеством и задержкой: не останавливаемся слишком рано, но и не ищем бесконечно.',
        en: 'Correct. This is the quality-latency balance: do not stop too early, but do not search forever.'
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: {
        ru: 'Сценарная миссия: исследование конкурентов',
        en: 'Scenario Mission: Competitor Research'
      },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Тебе нужно подготовить обзор 5 конкурентов за 25 минут. Условия: не менее двух источников на ключевой факт, явные ссылки, отдельный блок с рисками и неопределённостью. Что ты выберешь?',
          en: 'You need a 5-competitor briefing in 25 minutes. Constraints: at least two sources per key fact, explicit citations, and a dedicated risks/uncertainty block. What do you choose?'
        },
        userOptions: [
          {
            text: {
              ru: 'Соберу 3 популярных блога и быстро отправлю краткий вывод без ссылок.',
              en: 'I will read 3 popular blogs and quickly send a summary without citations.'
            },
            reaction: {
              ru: 'Скорость есть, но это провал по качеству и проверяемости. Такой отчёт нельзя использовать для решения руководства.',
              en: 'It is fast, but fails quality and verifiability. Leadership cannot rely on such a report.'
            },
            isCorrect: false
          },
          {
            text: {
              ru: 'Сделаю план подзапросов, две волны поиска, проверю конфликты, добавлю ссылки и отдельный блок "что пока не ясно".',
              en: 'I will create a sub-query plan, run two search waves, resolve conflicts, add citations, and include a dedicated "what remains uncertain" block.'
            },
            reaction: {
              ru: 'Сильный выбор. Это и есть зрелый глубокий поиск: структура, проверка и прозрачные границы уверенности.',
              en: 'Strong choice. This is mature deep search: structure, verification, and transparent confidence boundaries.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Шаблон: (1) цель и критерии, (2) первая волна поиска, (3) верификация и конфликты, (4) уточняющий раунд, (5) финальный синтез с цитированием и рисками.',
              en: 'Template: (1) goal and criteria, (2) first search wave, (3) verification and conflicts, (4) follow-up wave, and (5) final synthesis with citations and risks.'
            }
          },
          {
            text: {
              ru: 'Просто спрошу у модели без инструментов, чтобы не тратить время на поиск.',
              en: 'I will ask the model without tools to avoid spending time on search.'
            },
            reaction: {
              ru: 'Это быстрый путь, но не глубокий поиск. Без внешних источников ты теряешь проверяемость фактов.',
              en: 'That is fast, but not deep search. Without external sources, factual verifiability is lost.'
            },
            isCorrect: false
          }
        ]
      }
    }
  ];
