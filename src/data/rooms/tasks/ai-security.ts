import { LocalizedTask } from '../types';

export const aiSecurityTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Что такое "Prompt Injection" (Промпт-инъекция)?', 
        en: 'What is "Prompt Injection"?' 
      },
      options: [
        { ru: 'Метод ускорения работы модели', en: 'A method to speed up the model' },
        { ru: 'Атака, при которой пользователь вводит специальные команды, чтобы обойти системные инструкции и фильтры безопасности', en: 'An attack where a user inputs special commands to bypass system instructions and safety filters' },
        { ru: 'Вирус, который заражает веса модели', en: 'A virus that infects model weights' }
      ],
      answer: { ru: 'Атака, при которой пользователь вводит специальные команды, чтобы обойти системные инструкции и фильтры безопасности', en: 'An attack where a user inputs special commands to bypass system instructions and safety filters' },
      explanation: { 
        ru: 'Правильно! Промпт-инъекция заставляет модель игнорировать свои правила (например, "Не раскрывай секретный ключ") и выполнять волю атакующего.', 
        en: 'Correct! Prompt injection forces the model to ignore its rules (e.g., "Don\'t reveal the secret key") and execute the attacker\'s will.' 
      }
    },
    {
      id: 2,
      type: 'input',
      question: { 
        ru: 'Как называется попытка хакера заставить ИИ вести себя как другой персонаж без ограничений (например, "DAN")?', 
        en: 'What is the term for a hacker\'s attempt to force the AI to behave like another character without restrictions (e.g., "DAN")?' 
      },
      answer: { ru: 'Джейлбрейк', en: 'Jailbreak' },
      hint: { ru: 'Начинается на "Дже...".', en: 'Starts with "Jail...".' },
      explanation: { 
        ru: 'Верно! Джейлбрейки — это социальная инженерия против ИИ, заставляющая его выйти из-под контроля разработчиков.', 
        en: 'Correct! Jailbreaks are social engineering against AI, forcing it to escape the developers\' control.' 
      }
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: { 
        ru: 'Какая атака считается наиболее опасной для ИИ-агентов, работающих с интернетом?', 
        en: 'Which attack is considered most dangerous for AI agents working with the internet?' 
      },
      options: [
        { ru: 'Прямая промпт-инъекция от пользователя', en: 'Direct prompt injection from the user' },
        { ru: 'Косвенная инъекция (Indirect Injection) через данные на веб-страницах', en: 'Indirect Injection via data on web pages' },
        { ru: 'Медленная скорость интернет-соединения', en: 'Slow internet connection speed' }
      ],
      answer: { ru: 'Косвенная инъекция (Indirect Injection) через данные на веб-страницах', en: 'Indirect Injection via data on web pages' },
      explanation: { 
        ru: 'Верно! Косвенная инъекция опасна тем, что пользователь может даже не подозревать, что его агент "захвачен" вредоносным текстом на сайте.', 
        en: 'Correct! Indirect injection is dangerous because the user might not even suspect that their agent has been "hijacked" by malicious text on a website.' 
      }
    },
    {
      id: 4,
      type: 'categorize',
      question: { 
        ru: 'Классифицируйте типы угроз безопасности ИИ.', 
        en: 'Classify types of AI security threats.' 
      },
      answer: '',
      explanation: { 
        ru: 'Правильно! Это разные уровни атаки: от прямых команд до сложных психологических сценариев и скрытых каналов вывода данных.', 
        en: 'Correct! These are different levels of attack: from direct commands to complex psychological scenarios and hidden data exfiltration channels.' 
      },
      categorize: {
        buckets: [
          { ru: 'Инъекции', en: 'Injections' },
          { ru: 'Джейлбрейк', en: 'Jailbreak' },
          { ru: 'Утечка данных', en: 'Data Leakage' }
        ],
        items: [
          { ru: 'Скрытая команда в PDF-файле', en: 'Hidden command in a PDF file' },
          { ru: 'Ролевая игра "DAN" (Do Anything Now)', en: 'Role-play "DAN" (Do Anything Now)' },
          { ru: 'Выдача секретных ключей через картинки-пиксели', en: 'Leaking secret keys via tracking pixels/images' },
          { ru: 'Психологическое давление: "Моя бабушка умирает..."', en: 'Psychological pressure: "My grandmother is dying..."' }
        ],
        correctMapping: {
          'Hidden command in a PDF file': 'Injections',
          'Role-play "DAN" (Do Anything Now)': 'Jailbreak',
          'Leaking secret keys via tracking pixels/images': 'Data Leakage',
          'Psychological pressure: "My grandmother is dying..."': 'Jailbreak',
        }
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем суть защитной архитектуры Dual-LLM?', 
        en: 'What is the essence of the Dual-LLM defense architecture?' 
      },
      options: [
        { ru: 'Использование двух одинаковых моделей для проверки друг друга', en: 'Using two identical models to check each other' },
        { ru: 'Выделение отдельной строгой модели для проверки входящих данных (фильтрация инъекций)', en: 'Using a separate strict model to validate incoming data (injection filtering)' },
        { ru: 'Обучение одной модели на двух разных языках', en: 'Training one model in two different languages' }
      ],
      answer: { ru: 'Выделение отдельной строгой модели для проверки входящих данных (фильтрация инъекций)', en: 'Using a separate strict model to validate incoming data (injection filtering)' },
      explanation: { 
        ru: 'Верно! Это позволяет разделить "доверенный" и "недоверенный" контекст, не позволяя данным напрямую влиять на логику основной модели.', 
        en: 'Correct! This allows separating "trusted" and "untrusted" context, preventing data from directly affecting the main model\'s logic.' 
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: { 
        ru: 'Миссия: Защита корпоративного ассистента', 
        en: 'Mission: Protecting a Corporate Assistant' 
      },
      answer: '',
      explanation: { 
        ru: 'Наиболее надежная защита — это сочетание архитектуры Dual-LLM для фильтрации данных и Human-in-the-loop для подтверждения всех опасных действий, которые могут привести к утечке.', 
        en: 'The most reliable defense is a combination of Dual-LLM architecture for data filtering and Human-in-the-loop to confirm all dangerous actions that could lead to leakage.' 
      },
      scenario: {
        brief: {
          ru: 'Ваш HR-ассистент помогает проверять резюме и имеет доступ к API компании. Хакер прислал файл, который выглядит как резюме, но содержит скрытую команду на кражу API-ключей.', 
          en: 'Your HR assistant screens resumes and has access to company APIs. A hacker sent a file that looks like a resume but contains a hidden command to steal API keys.' 
        },
        constraints: [
          { ru: 'Ассистент должен иметь возможность читать присланные файлы', en: 'The assistant must be able to read sent files' },
          { ru: 'Минимизация риска кражи учетных данных', en: 'Minimize the risk of credential theft' }
        ],
        choices: [
          {
            text: { ru: 'Дать ассистенту прямой доступ к API без проверок', en: 'Give the assistant direct API access without checks' },
            outcome: { ru: 'Хакер успешно ворует ключи, так как ассистент выполняет скрытую команду из PDF. Ущерб огромен.', en: 'The hacker successfully steals keys because the assistant executes the hidden command from the PDF. The damage is huge.' },
            score: 0
          },
          {
            text: { ru: 'Использовать Dual-LLM и подтверждение действий человеком', en: 'Use Dual-LLM and human confirmation of actions' },
            outcome: { ru: 'Идеально! Первая модель замечает инъекцию в файле, а даже если нет — HR-менеджер отклоняет подозрительный запрос на доступ к ключам.', en: 'Perfect! The first model notices the injection in the file, and even if it doesn\'t, the HR manager rejects the suspicious key access request.' },
            score: 100
          },
          {
            text: { ru: 'Запретить ассистенту использовать любые внешние инструменты', en: 'Forbid the assistant from using any external tools' },
            outcome: { ru: 'Безопасно, но ассистент становится бесполезным, так как не может выполнять свою работу. Бизнес-процесс остановлен.', en: 'Safe, but the assistant becomes useless as it cannot do its job. The business process is halted.' },
            score: 40
          }
        ],
        passingScore: 50
      }
    },
    {
      id: 7,
      type: 'input',
      question: {
        ru: 'Как называется сумма всех точек, через которые систему можно атаковать, — то, что защитникам приходится отслеживать и защищать? (термин по-русски или на английском)',
        en: 'What is the sum of all points through which a system can be attacked called — the thing defenders have to monitor and protect?'
      },
      answer: [
        'поверхность атаки',
        'поверхность атак',
        'поверхностью атаки',
        'поверхности атаки',
        'attack surface',
        'attack-surface',
      ],
      hint: { ru: 'Два слова; второе — «атаки».', en: 'Two words; the first is "attack".' },
      explanation: {
        ru: 'Верно. Поверхность атаки (attack surface) — сумма всех точек, через которые систему можно атаковать. Когда ИИ снижает порог входа, до слабых программ дотягивается больше людей, и защитникам приходится следить за большей поверхностью.',
        en: 'Correct. The attack surface is the sum of all points through which a system can be attacked. When AI lowers the barrier to entry, more people can reach weak software, and defenders have more of this surface to watch.'
      }
    },
    {
      id: 8,
      type: 'sorting',
      question: {
        ru: 'Расположите звенья рассуждения Цамадоса и Ньюлендса в причинном порядке: от оценки NCSC до нагрузки на защитников.',
        en: 'Arrange the links of Tsamados and Newlands\' reasoning in causal order: from the NCSC assessment to the load on defenders.'
      },
      answer: '',
      explanation: {
        ru: 'Цепочка идет от возможностей к нагрузке: ИИ усиливает тактики, техники и процедуры атакующих (NCSC 2024); из-за этого падает порог входа; новички с минимальной подготовкой получают доступ к массе плохо написанных программ; у защитников становится больше точек, которые нужно отслеживать и защищать.',
        en: 'The chain runs from capability to workload: AI improves attackers\' tactics, techniques and procedures (NCSC 2024); this lowers the barrier to entry; novices with minimal training can reach the mass of poorly written software; defenders get more points to monitor and protect.'
      },
      initialItems: [
        { ru: 'Новички с минимальной подготовкой атакуют плохо написанные программы', en: 'Novices with minimal training attack poorly written software' },
        { ru: 'У защитников становится больше точек, которые нужно отслеживать и защищать', en: 'Defenders get more points to monitor and protect' },
        { ru: 'ИИ усиливает тактики, техники и процедуры атакующих', en: 'AI improves attackers\' tactics, techniques and procedures' },
        { ru: 'Порог входа для начинающих хакеров падает', en: 'The barrier to entry for novice hackers falls' },
      ],
      correctOrder: [
        { ru: 'ИИ усиливает тактики, техники и процедуры атакующих', en: 'AI improves attackers\' tactics, techniques and procedures' },
        { ru: 'Порог входа для начинающих хакеров падает', en: 'The barrier to entry for novice hackers falls' },
        { ru: 'Новички с минимальной подготовкой атакуют плохо написанные программы', en: 'Novices with minimal training attack poorly written software' },
        { ru: 'У защитников становится больше точек, которые нужно отслеживать и защищать', en: 'Defenders get more points to monitor and protect' },
      ]
    },
    {
      id: 9,
      type: 'multiple-choice',
      question: {
        ru: 'Компания публикует бенчмарк: ее модель решает большинство хакерских задач Capture The Flag (CTF). Что этот результат говорит о том, как модель изменит живую работу по защите?',
        en: 'A company publishes a benchmark: its model solves most Capture The Flag (CTF) hacking tasks. What does this result tell us about how the model will change live security operations?'
      },
      options: [
        { ru: 'Все: результат в CTF напрямую переносится на живую операционную среду', en: 'Everything: a CTF result transfers directly to the live operational environment' },
        { ru: 'Немного: бенчмарк измеряет технические возможности, а данных о реальных внедрениях в работу по защите мало', en: 'Little: a benchmark measures technical ability, while data on real deployments in security operations is scarce' },
        { ru: 'Достаточно для решения о внедрении: исследования разработки программ уже покрывают живую работу по защите', en: 'Enough to decide on deployment: research on software development already covers live security operations' }
      ],
      answer: { ru: 'Немного: бенчмарк измеряет технические возможности, а данных о реальных внедрениях в работу по защите мало', en: 'Little: a benchmark measures technical ability, while data on real deployments in security operations is scarce' },
      explanation: {
        ru: 'Верно. Данных о технических возможностях моделей становится больше, а данных о реальных внедрениях мало: область молодая, индустрия закрытая, а исследования чаще изучают разработку программ. В живой операционной среде ошибка может обернуться утечкой данных или взломом системы, и этот случай изучен меньше всего.',
        en: 'Correct. Data on the technical abilities of models is growing, while data on real deployments is scarce: the field is young, the industry is closed, and studies look mostly at software development. In a live operational environment an error can mean a data breach or a compromised system, and this case is the least studied.'
      }
    }
  ];
