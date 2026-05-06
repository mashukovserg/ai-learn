import { LocalizedTask } from '../types';

export const agenticSwarmManagementTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'В чем основное отличие "агента" от обычного чат-бота или ассистента в концепции Scale AI?',
      en: 'What is the primary difference between an "agent" and a regular chatbot or assistant in the Scale AI concept?'
    },
    options: [
      { ru: 'Агенты используют более вежливый тон', en: 'Agents use a more polite tone' },
      { ru: 'Агенты способны автономно выполнять сквозные рабочие процессы (end-to-end)', en: 'Agents are capable of autonomously performing end-to-end workflows' },
      { ru: 'Агенты работают только внутри браузера', en: 'Agents only work inside the browser' },
      { ru: 'Агенты требуют меньше вычислительных мощностей', en: 'Agents require less compute power' }
    ],
    answer: {
      ru: 'Агенты способны автономно выполнять сквозные рабочие процессы (end-to-end)',
      en: 'Agents are capable of autonomously performing end-to-end workflows'
    },
    explanation: {
      ru: 'Ассистент помогает вам сделать задачу, а агент берет задачу и выполняет ее целиком, используя инструменты и планирование.',
      en: 'An assistant helps you do a task, while an agent takes the task and executes it entirely using tools and planning.'
    }
  },
  {
    id: 2,
    type: 'sorting',
    answer: '',
    question: {
      ru: 'Расположите этапы эволюции работы с ИИ в порядке возрастания автономности (по Александру Вангу):',
      en: 'Arrange the stages of AI work evolution in increasing order of autonomy (per Alexandr Wang):'
    },
    initialItems: [
      { ru: 'Менеджмент роя агентов', en: 'Managing an agent swarm' },
      { ru: 'ИИ-ассистент (помощь в чате)', en: 'AI Assistant (chat help)' },
      { ru: 'Парное программирование / Работа с одним агентом', en: 'Pair programming / Working with a single agent' },
      { ru: 'Ручной труд без ИИ', en: 'Manual labor without AI' }
    ],
    correctOrder: [
      { ru: 'Ручной труд без ИИ', en: 'Manual labor without AI' },
      { ru: 'ИИ-ассистент (помощь в чате)', en: 'AI Assistant (chat help)' },
      { ru: 'Парное программирование / Работа с одним агентом', en: 'Pair programming / Working with a single agent' },
      { ru: 'Менеджмент роя агентов', en: 'Managing an agent swarm' }
    ],
    explanation: {
      ru: 'Эволюция идет от простых подсказок к управлению целыми группами автономных единиц.',
      en: 'Evolution moves from simple prompts to managing entire groups of autonomous units.'
    }
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: {
      ru: 'Что Александр Ванг называет "правилом 90/10" при развертывании агентов?',
      en: 'What does Alexandr Wang call the "90/10 rule" in agent deployment?'
    },
    options: [
      { ru: '90% агентов должны быть бесплатными', en: '90% of agents should be free' },
      { ru: 'Достичь 90% точности легко, но последние 10% требуют огромных усилий и участия человека', en: 'Getting to 90% accuracy is easy, but the final 10% requires immense effort and human oversight' },
      { ru: '90% задач должны выполняться людьми', en: '90% of tasks should be done by humans' },
      { ru: 'Только 10% компаний смогут внедрить агентов', en: 'Only 10% of companies will be able to implement agents' }
    ],
    answer: {
      ru: 'Достичь 90% точности легко, но последние 10% требуют огромных усилий и участия человека',
      en: 'Getting to 90% accuracy is easy, but the final 10% requires immense effort and human oversight'
    },
    explanation: {
      ru: 'Как и в беспилотных автомобилях, "краевые случаи" (edge cases) делают полную автономность крайне сложной задачей.',
      en: 'Just like in self-driving cars, edge cases make full autonomy an extremely difficult task.'
    }
  },
  {
    id: 4,
    type: 'scenario',
    question: {
      ru: 'Управление качеством в рое',
      en: 'Quality Management in a Swarm'
    },
    answer: '',
    scenario: {
      brief: {
      ru: 'Ваш рой агентов выполняет глубокий анализ 1000 кандидатов. Вы замечаете, что на этапе 90% прогресса агенты начали галлюцинировать в деталях опыта работы.',
      en: 'Your agent swarm is analyzing 1000 candidates. You notice that at 90% progress, agents started hallucinating work experience details.'
    },
      constraints: [
      { ru: 'Нужна 100% точность для финального отчета', en: '100% accuracy needed for the final report' },
      { ru: 'У вас есть 5 человеческих экспертов для аудита', en: 'You have 5 human experts for auditing' }
    ],
      choices: [
      {
        text: { ru: 'Остановить рой и заставить людей перепроверить все 1000 анкет', en: 'Stop the swarm and have humans re-verify all 1000 profiles' },
        outcome: { ru: 'Слишком медленно, вы теряете преимущество масштаба.', en: 'Too slow, you lose the advantage of scale.' },
        score: 2
      },
      {
        text: { ru: 'Внедрить "агента-критика" для проверки и направить только спорные случаи (edge cases) людям', en: 'Implement a "critic agent" for verification and route only edge cases to humans' },
        outcome: { ru: 'Оптимально. Вы используете рычаг ИИ и точечный контроль человека.', en: 'Optimal. You use AI leverage and targeted human control.' },
        score: 10
      },
      {
        text: { ru: 'Игнорировать галлюцинации, 90% — это достаточно хорошо', en: 'Ignore hallucinations, 90% is good enough' },
        outcome: { ru: 'Рискованно. Ошибки в данных разрушат доверие к системе.', en: 'Risky. Data errors will destroy trust in the system.' },
        score: -5
      }
    ],
      passingScore: 8
    },
    explanation: {
      ru: 'Концепция Scale AI — "человек в цикле" (Human-in-the-loop) для обработки самых сложных случаев.',
      en: 'The Scale AI concept is "Human-in-the-loop" for handling the most complex cases.'
    }
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Какую роль выполняет человек в режиме "Manager of Swarms"?',
      en: 'What role does a human play in "Manager of Swarms" mode?'
    },
    options: [
      { ru: 'Сам пишет весь код', en: 'Writes all the code themselves' },
      { ru: 'Формулирует видение, ставит задачи и исправляет ошибки в критических узлах', en: 'Formulates vision, sets tasks, and fixes errors in critical nodes' },
      { ru: 'Только оплачивает счета за API', en: 'Only pays API bills' },
      { ru: 'Заменяет собой все модели', en: 'Replaces all models' }
    ],
    answer: {
      ru: 'Формулирует видение, ставит задачи и исправляет ошибки в критических узлах',
      en: 'Formulates vision, sets tasks, and fixes errors in critical nodes'
    },
    explanation: {
      ru: 'Человек становится архитектором и контролером качества, делегируя рутину.',
      en: 'The human becomes an architect and quality controller, delegating routine.'
    }
  },
  {
    id: 6,
    type: 'categorize',
    question: {
      ru: 'Разделите задачи между Агентами и Менеджером (человеком):',
      en: 'Distribute tasks between Agents and the Manager (human):'
    },
    answer: '',
    explanation: {
      ru: 'Агенты берут на себя масштабируемую работу, человек — стратегию и сложные решения.',
      en: 'Agents take on scalable work, while humans handle strategy and complex decisions.'
    },
    categorize: {
      items: [
        { ru: 'Глубокий поиск информации', en: 'Deep information search' },
        { ru: 'Определение бизнес-стратегии', en: 'Defining business strategy' },
        { ru: 'Написание тестов для кода', en: 'Writing code tests' },
        { ru: 'Разрешение этических дилемм', en: 'Resolving ethical dilemmas' },
        { ru: 'Сбор данных из 50 источников', en: 'Gathering data from 50 sources' }
      ],
      buckets: [
        { ru: 'Агенты (Исполнение)', en: 'Agents (Execution)' },
        { ru: 'Менеджер (Видение/Контроль)', en: 'Manager (Vision/Control)' }
      ],
      correctMapping: {
        'Глубокий поиск информации': 'Агенты (Исполнение)',
        'Deep information search': 'Agents (Execution)',
        'Определение бизнес-стратегии': 'Менеджер (Видение/Контроль)',
        'Defining business strategy': 'Manager (Vision/Control)',
        'Написание тестов для кода': 'Агенты (Исполнение)',
        'Writing code tests': 'Agents (Execution)',
        'Разрешение этических дилемм': 'Менеджер (Видение/Контроль)',
        'Resolving ethical dilemmas': 'Manager (Vision/Control)',
        'Сбор данных из 50 источников': 'Агенты (Исполнение)',
        'Gathering data from 50 sources': 'Agents (Execution)'
      }
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что Александр Ванг считает "самым ценным ресурсом" в эпоху ИИ-агентов?',
      en: 'What does Alexandr Wang consider the "most valuable resource" in the era of AI agents?'
    },
    options: [
      { ru: 'Дешевое электричество', en: 'Cheap electricity' },
      { ru: 'Технические специалисты, которые "по-настоящему горят своим делом" (give a shit)', en: 'Technical experts who "really give a shit" about their work' },
      { ru: 'Бесплатные API-ключи', en: 'Free API keys' },
      { ru: 'Старые базы данных', en: 'Old databases' }
    ],
    answer: {
      ru: 'Технические специалисты, которые "по-настоящему горят своим делом" (give a shit)',
      en: 'Technical experts who "really give a shit" about their work'
    },
    explanation: {
      ru: 'Ванг утверждает, что капитал доступен, но людей с "экстремальным уровнем заботы" о качестве всегда не хватает.',
      en: 'Wang argues that capital is available, but people with an "extreme level of care" for quality are always in short supply.'
    }
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Как изменится "рычаг" (leverage) обычного специалиста с внедрением роев?',
      en: 'How will a regular specialist\'s "leverage" change with the implementation of swarms?'
    },
    options: [
      { ru: 'Он уменьшится, так как ИИ все заберет', en: 'It will decrease as AI takes everything' },
      { ru: 'Он останется прежним', en: 'It will stay the same' },
      { ru: 'Каждый специалист получит рычаг, сопоставимый с 10x или 100x инженером прошлого', en: 'Every specialist will get leverage comparable to a 10x or 100x engineer of the past' },
      { ru: 'Специалистам придется работать в 10 раз больше', en: 'Specialists will have to work 10 times harder' }
    ],
    answer: {
      ru: 'Каждый специалист получит рычаг, сопоставимый с 10x или 100x инженером прошлого',
      en: 'Every specialist will get leverage comparable to a 10x or 100x engineer of the past'
    },
    explanation: {
      ru: 'Агенты позволяют одному человеку управлять огромными объемами работы, как раньше это делали целые отделы.',
      en: 'Agents allow one person to manage massive amounts of work, as entire departments used to do.'
    }
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Диалог о делегировании',
      en: 'Delegation Dialogue'
    },
    answer: '',
    explanation: { ru: '', en: '' },
    dialogue: {
      mentorMessage: {
      ru: 'Я хочу поручить агенту написание годового отчета. С чего мне начать, чтобы не получить "галлюцинаторную кашу"?',
      en: 'I want to delegate writing an annual report to an agent. Where should I start to avoid getting "hallucinatory mush"?'
    },
      userOptions: [
      {
        text: { ru: 'Просто дай ему доступ к интернету и скажи "напиши круто"', en: 'Just give it internet access and say "write it great"' },
        reaction: { ru: 'Это путь к провалу. Агент не знает контекста вашей компании.', en: 'That\'s a path to failure. The agent doesn\'t know your company\'s context.' },
        isCorrect: false
      },
      {
        text: { ru: 'Подготовь "среду": дай доступ к проверенным данным компании и опиши четкий рубрикатор качества', en: 'Prepare an "environment": provide access to verified company data and define a clear quality rubric' },
        reaction: { ru: 'Верно! Качественная среда и четкие правила (constraints) — залог успеха агента.', en: 'Correct! A high-quality environment and clear constraints are the keys to an agent\'s success.' },
        isCorrect: true,
        deepening: { ru: 'Агенты эффективны там, где есть четкие данные и правила проверки.', en: 'Agents are effective where there is clear data and verification rules.' }
      }
    ]
    }
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'В чем заключается "Founder Mode" в управлении ИИ-системами?',
      en: 'What is "Founder Mode" in managing AI systems?'
    },
    options: [
      { ru: 'Никогда не использовать ИИ', en: 'Never use AI' },
      { ru: 'Глубокое погружение в детали и личный аудит качества на всех уровнях "фрактала"', en: 'Diving deep into details and personal quality auditing at all levels of the "fractal"' },
      { ru: 'Делегирование всех решений сторонним вендорам', en: 'Delegating all decisions to third-party vendors' },
      { ru: 'Использование только самых дорогих моделей', en: 'Using only the most expensive models' }
    ],
    answer: {
      ru: 'Глубокое погружение в детали и личный аудит качества на всех уровнях "фрактала"',
      en: 'Diving deep into details and personal quality auditing at all levels of the "fractal"'
    },
    explanation: {
      ru: 'Ванг считает, что стандарты качества задаются сверху: если менеджер не вникает в детали работы агентов, качество неизбежно упадет.',
      en: 'Wang believes quality standards are set from the top: if the manager doesn\'t dive into agent work details, quality will inevitably drop.'
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Зачем менеджеру роя нужна "агентная телеметрия"?',
      en: 'Why does a swarm manager need "agentic telemetry"?'
    },
    options: [
      { ru: 'Чтобы знать погоду на серверах', en: 'To know the weather on the servers' },
      { ru: 'Для мониторинга промежуточных шагов, вызовов инструментов и затрат токенов', en: 'To monitor intermediate steps, tool calls, and token costs' },
      { ru: 'Чтобы агенты работали быстрее', en: 'To make agents work faster' },
      { ru: 'Чтобы заменить человеческий аудит полностью', en: 'To replace human auditing completely' }
    ],
    answer: {
      ru: 'Для мониторинга промежуточных шагов, вызовов инструментов и затрат токенов',
      en: 'To monitor intermediate steps, tool calls, and token costs'
    },
    explanation: {
      ru: 'Телеметрия превращает "черный ящик" роя в прозрачный процесс, где можно найти и исправить ошибку на раннем этапе.',
      en: 'Telemetry turns a swarm\'s "black box" into a transparent process where errors can be found and fixed early.'
    }
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: {
      ru: 'Что произойдет согласно концепции "бесконечных рынков", когда базовые задачи будут автоматизированы?',
      en: 'What will happen according to the "infinite markets" concept when basic tasks are automated?'
    },
    options: [
      { ru: 'Экономика остановится', en: 'The economy will stop' },
      { ru: 'Спрос людей переключится на еще более сложные и амбибициозные проекты', en: 'Human demand will shift to even more complex and ambitious projects' },
      { ru: 'Все люди перестанут работать', en: 'All people will stop working' },
      { ru: 'ИИ заменит человеческие желания', en: 'AI will replace human desires' }
    ],
    answer: {
      ru: 'Спрос людей переключится на еще более сложные и амбибициозные проекты',
      en: 'Human demand will shift to even more complex and ambitious projects'
    },
    explanation: {
      ru: 'Исторически автоматизация не убирает работу, а повышает планку амбиций человечества.',
      en: 'Historically, automation hasn\'t eliminated work but has raised the bar for humanity\'s ambitions.'
    }
  }
];