import { LocalizedTask } from '../types';

export const aiRegulationRuTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'input',
      question: {
        ru: 'В какой конкретный день и год Минцифры опубликовало проект федерального закона о государственном регулировании ИИ?',
        en: 'On what specific day and year did the Ministry of Digital Development publish the draft federal law on AI regulation?'
      },
      answer: '18 марта 2026',
      explanation: {
        ru: 'Верно! Это поворотный момент от "мягкого" подхода к прямому государственному регулированию.',
        en: 'Correct! This is a turning point from a "soft" approach to direct state regulation.'
      }
    },
    {
      id: 2,
      type: 'multiple-select',
      question: {
        ru: 'Между какими четырьмя субъектами распределяется ответственность за вред, согласно законопроекту?',
        en: 'Between which four subjects is the liability for harm distributed, according to the draft law?'
      },
      options: [
        { ru: 'Разработчик модели', en: 'Model developer' },
        { ru: 'Оператор системы', en: 'System operator' },
        { ru: 'Владелец сервиса', en: 'Service owner' },
        { ru: 'Конечный пользователь', en: 'End user' },
        { ru: 'Производитель видеокарты', en: 'GPU manufacturer' }
      ],
      answer: [
        { ru: 'Разработчик модели', en: 'Model developer' },
        { ru: 'Оператор системы', en: 'System operator' },
        { ru: 'Владелец сервиса', en: 'Service owner' },
        { ru: 'Конечный пользователь', en: 'End user' }
      ],
      explanation: {
        ru: 'Правильно. Ответственность распределяется соразмерно степени вины каждого участника цепочки.',
        en: 'Correct. Liability is distributed proportionately to the degree of fault of each participant in the chain.'
      }
    },
    {
      id: 3,
      type: 'categorize',
      question: {
        ru: 'Разделите меры регулирования по их направленности.',
        en: 'Categorize regulatory measures by their focus.'
      },
      answer: '',
      explanation: {
        ru: 'Маркировка — это про прозрачность для пользователя, сертификация — про безопасность критических систем.',
        en: 'Marking is about transparency for the user, while certification is about the security of critical systems.'
      },
      categorize: {
        items: [
          { ru: 'Машиночитаемые метки в метаданных', en: 'Machine-readable tags in metadata' },
          { ru: 'Сертификат ФСТЭК и ФСБ', en: 'FSTEC and FSB certificate' },
          { ru: 'Уголовная ответственность (до 6 лет)', en: 'Criminal liability (up to 6 years)' },
          { ru: 'Обязательное страхование ответственности', en: 'Mandatory liability insurance' },
          { ru: 'Видимая плашка на видеохостингах', en: 'Visible tag on video platforms' },
          { ru: 'Запрет иностранного ИИ на объектах КИИ', en: 'Ban on foreign AI at CII sites' }
        ],
        buckets: [
          { ru: 'Прозрачность и контент', en: 'Transparency & Content' },
          { ru: 'Безопасность и КИИ', en: 'Security & CII' }
        ],
        correctMapping: {
          'Машиночитаемые метки в метаданных': 'Прозрачность и контент',
          'Machine-readable tags in metadata': 'Transparency & Content',
          'Видимая плашка на видеохостингах': 'Прозрачность и контент',
          'Visible tag on video platforms': 'Transparency & Content',
          'Сертификат ФСТЭК и ФСБ': 'Безопасность и КИИ',
          'FSTEC and FSB certificate': 'Security & CII',
          'Уголовная ответственность (до 6 лет)': 'Безопасность и КИИ',
          'Criminal liability (up to 6 years)': 'Security & CII',
          'Обязательное страхование ответственности': 'Безопасность и КИИ',
          'Mandatory liability insurance': 'Security & CII',
          'Запрет иностранного ИИ на объектах КИИ': 'Безопасность и КИИ',
          'Ban on foreign AI at CII sites': 'Security & CII'
        }
      }
    },
    {
      id: 4,
      type: 'sorting',
      question: {
        ru: 'Упорядочите хронологию регулирования ИИ в России от прошлого к будущему.',
        en: 'Order the chronology of AI regulation in Russia from past to future.'
      },
      initialItems: [
        { ru: 'Вступление в силу поправок (сентябрь 2027)', en: 'Amendments enter into force (Sept 2027)' },
        { ru: 'Опубликование проекта ФЗ (март 2026)', en: 'Publication of the Draft Law (March 2026)' },
        { ru: 'Концепция развития регулирования 2020 года', en: '2020 Regulation Development Concept' },
        { ru: 'Поручение Григоренко собрать предложения (декабрь 2025)', en: 'Grigorenko order to collect proposals (Dec 2025)' }
      ],
      correctOrder: [
        { ru: 'Концепция развития регулирования 2020 года', en: '2020 Regulation Development Concept' },
        { ru: 'Поручение Григоренко собрать предложения (декабрь 2025)', en: 'Grigorenko order to collect proposals (Dec 2025)' },
        { ru: 'Опубликование проекта ФЗ (март 2026)', en: 'Publication of the Draft Law (March 2026)' },
        { ru: 'Вступление в силу поправок (сентябрь 2027)', en: 'Amendments enter into force (Sept 2027)' }
      ],
      answer: '',
      explanation: {
        ru: 'Этот путь показывает переход от мягкого саморегулирования к жесткой законодательной базе.',
        en: 'This path shows the transition from soft self-regulation to a rigid legislative framework.'
      }
    },
    {
      id: 5,
      type: 'mentor',
      question: { ru: 'Принцип "Традиционных ценностей"', en: 'The "Traditional Values" Principle' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Законопроект марта 2026 года обязывает учитывать "традиционные российские духовно-нравственные ценности" при разработке ИИ. Как ты считаешь, на каком этапе жизненного цикла продукта это требование станет критичным?',
          en: 'The March 2026 draft law mandates considering "traditional Russian spiritual and moral values" during AI development. At which stage of the product lifecycle do you think this requirement will become critical?'
        },
        userOptions: [
          {
            text: { ru: 'Только на этапе маркетинга и PR, чтобы "понравиться" регулятору.', en: 'Only at the marketing and PR stage to "please" the regulator.' },
            reaction: {
              ru: 'Это опасно. Размытые формулировки закона могут быть использованы при аудите самой модели. Если ИИ-ассистент начнет давать советы, противоречащие этим ценностям, к владельцу сервиса могут возникнуть вопросы.',
              en: 'This is dangerous. Vague legal wording can be used during model auditing. If an AI assistant gives advice contradicting these values, the service owner may face legal scrutiny.'
            },
            isCorrect: false
          },
          {
            text: { ru: 'На этапе обучения и настройки фильтров (Guardrails): это требует ред-тиминга модели на соответствие ценностям до релиза.', en: 'At the training and filtering stage (Guardrails): this requires red-teaming the model for value compliance before release.' },
            reaction: {
              ru: 'Именно. Это превращает "идеологическое" требование в техническую задачу для инженеров — разработку специфических "ценностных" фильтров и проверку наборов данных.',
              en: 'Exactly. This turns an "ideological" requirement into a technical task for engineers — developing specific "value" filters and checking datasets.'
            },
            isCorrect: true,
            deepening: {
              ru: 'Фактически, это означает необходимость создания локального набора "социальных конституций" для ИИ (Constitutional AI), адаптированных под национальное законодательство.',
              en: 'Effectively, this means the need to create local "social constitutions" for AI (Constitutional AI) adapted to national legislation.'
            }
          }
        ]
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: {
        ru: 'Миссия: Комплаенс-офицер в ИИ-стартапе',
        en: 'Mission: Compliance Officer at an AI Startup'
      },
      answer: '',
      explanation: {
        ru: 'В ситуации 2026 года лучшая стратегия — начать внедрение маркировки и инвентаризацию рисков уже сейчас, не дожидаясь 2027 года, так как отдельные законы (маркировка видео) могут быть приняты раньше.',
        en: 'In the 2026 situation, the best strategy is to start implementing marking and risk inventory now, without waiting for 2027, as individual laws (video marking) may be passed sooner.'
      },
      scenario: {
        brief: {
          ru: 'Вы — комплаенс-офицер в стартапе, который создает AI-видеоредакторы для блогеров. Сегодня 18 марта 2026 года, и вы только что прочитали новый законопроект Минцифры. Что сделаете на ближайшем спринт-планировании?',
          en: 'You are the compliance officer at a startup creating AI video editors for bloggers. It is March 18, 2026, and you just read the new draft law. What do you do at the next sprint planning?'
        },
        constraints: [
          { ru: 'У вас 100k активных пользователей в РФ', en: 'You have 100k active users in Russia' },
          { ru: 'Видео генерируются на ваших серверах', en: 'Videos are generated on your servers' },
          { ru: 'Штрафы для юрлиц за отсутствие маркировки — до 500 тыс. руб. за эпизод', en: 'Fines for legal entities for lack of marking — up to 500k rubles per episode' }
        ],
        choices: [
          {
            text: { ru: 'Ждать сентября 2027 года: "Закон вступит в силу нескоро, успеем".', en: 'Wait until September 2027: "The law won\'t be in effect for a long time, we have time".' },
            outcome: {
              ru: 'Рискованно. Законопроект о маркировке видео в Госдуме идет по ускоренному треку. Вы рискуете получить штрафы уже к лету 2026 года.',
              en: 'Risky. The video marking bill is on a fast track in the Duma. You risk facing fines as early as summer 2026.'
            },
            score: 20
          },
          {
            text: { ru: 'Поставить задачу инженерам на внедрение машиночитаемых меток в метаданные и видимого вотермарка.', en: 'Task the engineers to implement machine-readable metadata tags and visible watermarks.' },
            outcome: {
              ru: 'Правильно! Вы проактивно решаете инженерную задачу до того, как она превратится в юридический кризис. Это защитит и вас, и ваших пользователей.',
              en: 'Correct! You are proactively solving an engineering task before it turns into a legal crisis. This protects both you and your users.'
            },
            score: 95
          },
          {
            text: { ru: 'Удалить всех российских пользователей, чтобы не попасть под закон.', en: 'Remove all Russian users to avoid falling under the law.' },
            outcome: {
              ru: 'Это радикальное решение уничтожит ваш локальный рынок и доходы. Инвесторы не будут в восторге от потери 40% аудитории из-за решаемой задачи.',
              en: 'This radical decision will destroy your local market and revenue. Investors won\'t be thrilled about losing 40% of the audience over a solvable task.'
            },
            score: 30
          }
        ],
        passingScore: 60
      }
    }
  ];
