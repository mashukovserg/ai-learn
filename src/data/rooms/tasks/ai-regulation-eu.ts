import { LocalizedTask } from '../types';

export const aiRegulationEuTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: {
        ru: 'В чем заключается основной принцип EU AI Act?',
        en: 'What is the core principle of the EU AI Act?'
      },
      options: [
        { ru: 'Полный запрет любых нейросетей в Европе', en: 'Total ban on any neural networks in Europe' },
        { ru: 'Риск-ориентированный подход: регулирование зависит от степени риска системы', en: 'Risk-based approach: regulation depends on the level of system risk' },
        { ru: 'ИИ разрешен только государственным компаниям', en: 'AI is allowed only for state-owned companies' }
      ],
      answer: { ru: 'Риск-ориентированный подход: регулирование зависит от степени риска системы', en: 'Risk-based approach: regulation depends on the level of system risk' },
      explanation: {
        ru: 'Верно. ЕС делит системы на 4 уровня риска: неприемлемый, высокий, ограниченный и минимальный.',
        en: 'Correct. The EU divides systems into 4 risk levels: unacceptable, high, limited, and minimal.'
      }
    },
    {
      id: 2,
      type: 'categorize',
      question: {
        ru: 'Распределите системы ИИ по уровням риска согласно EU AI Act.',
        en: 'Categorize AI systems by risk level according to the EU AI Act.'
      },
      answer: '',
      explanation: {
        ru: 'Социальный скоринг и манипуляция поведением — запрещены. Медицина и критическая инфраструктура — высокий риск. Спам-фильтры — минимальный.',
        en: 'Social scoring and behavior manipulation are prohibited. Medicine and critical infrastructure are high-risk. Spam filters are minimal-risk.'
      },
      categorize: {
        items: [
          { ru: 'Социальный скоринг граждан', en: 'Social scoring of citizens' },
          { ru: 'Медицинская диагностика по КТ', en: 'Medical diagnostics via CT' },
          { ru: 'Спам-фильтр в почте', en: 'Email spam filter' },
          { ru: 'Удаленная биометрия в общественных местах', en: 'Remote biometrics in public spaces' },
          { ru: 'Оценка кредитоспособности (скоринг)', en: 'Creditworthiness assessment (scoring)' },
          { ru: 'Видеоигра со встроенным ИИ', en: 'Video game with built-in AI' }
        ],
        buckets: [
          { ru: 'Неприемлемый (Prohibited)', en: 'Unacceptable (Prohibited)' },
          { ru: 'Высокий (High Risk)', en: 'High Risk' },
          { ru: 'Минимальный (Minimal Risk)', en: 'Minimal Risk' }
        ],
        correctMapping: {
          'Социальный скоринг граждан': 'Неприемлемый (Prohibited)',
          'Social scoring of citizens': 'Unacceptable (Prohibited)',
          'Удаленная биометрия в общественных местах': 'Неприемлемый (Prohibited)',
          'Remote biometrics in public spaces': 'Unacceptable (Prohibited)',
          'Медицинская диагностика по КТ': 'Высокий (High Risk)',
          'Medical diagnostics via CT': 'High Risk',
          'Оценка кредитоспособности (скоринг)': 'Высокий (High Risk)',
          'Creditworthiness assessment (scoring)': 'High Risk',
          'Спам-фильтр в почте': 'Минимальный (Minimal Risk)',
          'Email spam filter': 'Minimal Risk',
          'Видеоигра со встроенным ИИ': 'Минимальный (Minimal Risk)',
          'Video game with built-in AI': 'Minimal Risk'
        }
      }
    },
    {
      id: 3,
      type: 'input',
      question: {
        ru: 'Как называется эффект, при котором европейские стандарты становятся глобальными из-за экстерриториальности закона?',
        en: 'What is the effect called where European standards become global due to the law\'s extra-territorial reach?'
      },
      answer: 'Эффект Брюсселя',
      hint: { ru: 'Brussels ...', en: 'Brussels ...' },
      explanation: {
        ru: 'Да! Эффект Брюсселя (Brussels Effect) заставляет компании во всем мире соблюдать правила ЕС, чтобы сохранить доступ к рынку.',
        en: 'Yes! The Brussels Effect forces companies worldwide to comply with EU rules to maintain market access.'
      }
    },
    {
      id: 4,
      type: 'sorting',
      question: {
        ru: 'Упорядочите шаги вывода на рынок системы ИИ высокого риска (High-Risk AI).',
        en: 'Order the steps for launching a High-Risk AI system on the market.'
      },
      initialItems: [
        { ru: 'Оценка соответствия (Conformity Assessment)', en: 'Conformity Assessment' },
        { ru: 'Регистрация в базе данных ЕС (EU Database)', en: 'Registration in the EU Database' },
        { ru: 'Создание системы управления качеством', en: 'Quality Management System setup' },
        { ru: 'Нанесение маркировки CE (CE Marking)', en: 'Affixing CE Marking' }
      ],
      correctOrder: [
        { ru: 'Создание системы управления качеством', en: 'Quality Management System setup' },
        { ru: 'Оценка соответствия (Conformity Assessment)', en: 'Conformity Assessment' },
        { ru: 'Регистрация в базе данных ЕС (EU Database)', en: 'Registration in the EU Database' },
        { ru: 'Нанесение маркировки CE (CE Marking)', en: 'Affixing CE Marking' }
      ],
      answer: '',
      explanation: {
        ru: 'Процесс в ЕС более формализован и требует серьезной подготовки документации до релиза.',
        en: 'The EU process is more formal and requires significant documentation prep before release.'
      }
    },
    {
      id: 5,
      type: 'mentor',
      question: { ru: 'Этика против Инноваций', en: 'Ethics vs Innovation' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Штрафы по EU AI Act достигают €35 млн или 7% мирового оборота компании. Твоя команда хочет запустить ИИ-систему для найма сотрудников. Что ты потребуешь от них в первую очередь?',
          en: 'Fines under the EU AI Act reach €35 million or 7% of a company\'s global turnover. Your team wants to launch an AI hiring system. What will you demand from them first?'
        },
        userOptions: [
          {
            text: { ru: 'Запустить как можно скорее, чтобы опередить конкурентов.', en: 'Launch as fast as possible to beat competitors.' },
            reaction: {
              ru: 'Опасно. Системы найма (HR) относятся к категории высокого риска. Без оценки соответствия и прозрачности алгоритмов вы рискуете получить катастрофический штраф.',
              en: 'Dangerous. Hiring (HR) systems are categorized as high-risk. Without conformity assessment and algorithmic transparency, you risk a catastrophic fine.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'Провести технический аудит на наличие предвзятости (bias) и подготовить документацию для сертификации.', en: 'Conduct a technical bias audit and prepare documentation for certification.' },
            reaction: {
              ru: 'Именно. Высокорисковые системы должны быть свободны от дискриминации и иметь подробную техническую документацию. Это входной билет на рынок ЕС.',
              en: 'Exactly. High-risk systems must be discrimination-free and have detailed technical documentation. This is the entry ticket to the EU market.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Золотое правило: "Прозрачность важнее скорости". В ЕС вы должны уметь объяснить решение ИИ.',
              en: 'Golden rule: "Transparency over speed." In the EU, you must be able to explain the AI\'s decision.'
            }
          }
        ]
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: {
        ru: 'Миссия: Основание ИИ-стартапа в ЕС',
        en: 'Mission: Founding an AI Startup in the EU'
      },
      answer: '',
      explanation: {
        ru: 'Разработчики моделей общего назначения (GPAI) должны раскрывать детали обучения и соблюдать авторское право ЕС. Для стартапа важно выбрать поставщика API, который уже соответствует этим нормам.',
        en: 'GPAI (General-Purpose AI) developers must disclose training details and follow EU copyright law. For a startup, it\'s vital to pick an API provider that is already compliant.'
      },
      scenario: {
        brief: {
          ru: 'Вы открываете ИИ-стартап в Берлине. Вы используете мощную американскую LLM через API. Законодательство ЕС требует от разработчиков таких моделей (GPAI) прозрачности обучающих данных. Что вы проверите у своего провайдера API?',
          en: 'You are launching an AI startup in Berlin. You use a powerful US LLM via API. EU law requires developers of such models (GPAI) to ensure training data transparency. What will you check with your API provider?'
        },
        constraints: [
          { ru: 'Бизнес зарегистрирован в Германии', en: 'Business is registered in Germany' },
          { ru: 'Штрафы исчисляются от оборота материнской компании', en: 'Fines are calculated based on the parent company\'s turnover' },
          { ru: 'Нужна гарантия соблюдения авторского права ЕС (Copyright)', en: 'Need guarantee of compliance with EU Copyright law' }
        ],
        choices: [
          {
            text: { ru: 'Ничего не проверять — это ответственность американцев.', en: 'Check nothing — it\'s the Americans\' responsibility.' },
            outcome: {
              ru: 'Неверно. Вы, как импортер сервиса в ЕС, несете солидарную ответственность. Вы не сможете использовать этот API легально.',
              en: 'Incorrect. As an importer of the service into the EU, you share liability. You won\'t be able to use this API legally.'
            },
            score: 10
          },
          {
            text: { ru: 'Запросить Summary об обучающих данных и отчет о соответствии EU AI Act.', en: 'Request a Summary of training data and a compliance report for the EU AI Act.' },
            outcome: {
              ru: 'Верно! Крупные провайдеры (OpenAI, Anthropic) создают специальные европейские "комплаенс-пакеты" для своих клиентов. Наличие такого отчета — ваш юридический щит.',
              en: 'Correct! Large providers (OpenAI, Anthropic) create special European "compliance packages" for their clients. Having such a report is your legal shield.'
            },
            score: 95
          },
          {
            text: { ru: 'Попросить программистов переписать модель с нуля самостоятельно.', en: 'Ask programmers to rewrite the model from scratch on their own.' },
            outcome: {
              ru: 'Это разорит ваш стартап еще до релиза. Обучение frontier-модели стоит сотни миллионов долларов.',
              en: 'This will bankrupt your startup before release. Training a frontier model costs hundreds of millions of dollars.'
            },
            score: 20
          }
        ],
        passingScore: 60
      }
    }
  ];
