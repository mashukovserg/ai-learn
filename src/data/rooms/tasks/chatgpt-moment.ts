import { LocalizedTask } from '../types';

export const chatgptMomentTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'input',
      question: { 
        ru: 'В каком месяце и году состоялся публичный релиз ChatGPT?', 
        en: 'In which month and year was ChatGPT publicly released?' 
      },
      answer: { ru: 'Ноябрь 2022', en: 'November 2022' },
      explanation: { 
        ru: 'Верно! 30 ноября 2022 года мир изменился навсегда.', 
        en: 'Correct! November 30, 2022, is the date that changed everything.' 
      }
    },
    {
      id: 2,
      type: 'input',
      question: { 
        ru: 'Как называется метод обучения, ставший "секретным соусом" успеха ChatGPT?', 
        en: 'What is the name of the training method that became the "secret sauce" of ChatGPT\'s success?' 
      },
      answer: 'RLHF',
      explanation: { 
        ru: 'Правильно! Reinforcement Learning from Human Feedback позволил "выровнять" модель под ожидания людей. Без него модель была бы просто предсказателем следующего слова без понимания инструкций.', 
        en: 'Correct! Reinforcement Learning from Human Feedback enabled alignment with human expectations. Without it, the model would just be a next-word predictor without understanding instructions.' 
      }
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: { 
        ru: 'За сколько дней ChatGPT набрала первый миллион пользователей?', 
        en: 'How many days did it take for ChatGPT to reach its first million users?' 
      },
      options: [
        { ru: '5 дней', en: '5 days' },
        { ru: '30 дней', en: '30 days' },
        { ru: '10 месяцев', en: '10 months' }
      ],
      answer: { ru: '5 дней', en: '5 days' },
      explanation: { 
        ru: 'Верно! Это был беспрецедентный рост в истории потребительских продуктов. Люди мгновенно осознали полезность инструмента.', 
        en: 'Correct! This was unprecedented growth in the history of consumer products. People instantly recognized the utility of the tool.' 
      }
    },
    {
      id: 4,
      type: 'multiple-select',
      question: { 
        ru: 'Какие из этих сфер испытали фундаментальный кризис и трансформацию сразу после выхода ChatGPT?', 
        en: 'Which of these fields experienced a fundamental crisis and transformation immediately after ChatGPT\'s release?' 
      },
      options: [
        { 
          ru: 'Академическое образование (из-за неспособности традиционных эссе проверять реальные знания)', 
          en: 'Academic Education (due to the inability of traditional essays to verify real knowledge)' 
        },
        { 
          ru: 'Разработка ПО (из-за резкого снижения порога входа и автоматизации написания шаблонного кода)', 
          en: 'Software Development (due to the sharp drop in entry barriers and automation of boilerplate code)' 
        },
        { 
          ru: 'Интернет-поиск (из-за экзистенциальной угрозы рекламной бизнес-модели "синих ссылок")', 
          en: 'Web Search (due to the existential threat to the "blue links" advertising business model)' 
        },
        { 
          ru: 'Тяжелая промышленность и добыча ресурсов', 
          en: 'Heavy Industry and Resource Extraction' 
        }
      ],
      answer: [
        { 
          ru: 'Академическое образование (из-за неспособности традиционных эссе проверять реальные знания)', 
          en: 'Academic Education (due to the inability of traditional essays to verify real knowledge)' 
        },
        { 
          ru: 'Разработка ПО (из-за резкого снижения порога входа и автоматизации написания шаблонного кода)', 
          en: 'Software Development (due to the sharp drop in entry barriers and automation of boilerplate code)' 
        },
        { 
          ru: 'Интернет-поиск (из-за экзистенциальной угрозы рекламной бизнес-модели "синих ссылок")', 
          en: 'Web Search (due to the existential threat to the "blue links" advertising business model)' 
        }
      ],
      explanation: { 
        ru: 'Правильно! Эти области столкнулись с необходимостью полностью пересмотреть свои базовые процессы. Google объявил "Code Red", университеты вернулись к устным экзаменам, а программисты начали превращаться из "писателей кода" в его "редакторов и архитекторов".', 
        en: 'Correct! These areas had to completely rethink their core processes. Google declared a "Code Red," universities returned to oral exams, and programmers began transforming from "code writers" into "editors and architects."' 
      }
    },
    {
      id: 5,
      type: 'mentor',
      question: { ru: 'Природа "Ага!" момента', en: 'Nature of the "Aha!" moment' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Как ты думаешь, почему именно чат-интерфейс сделал ChatGPT таким популярным, если сама технология (GPT-3) существовала уже два года?',
          en: 'Why do you think the chat interface made ChatGPT so popular, even though the underlying technology (GPT-3) had existed for two years?'
        },
        userOptions: [
          {
            text: { ru: 'Потому что людям нравится переписываться.', en: 'Because people like texting.' },
            reaction: { 
              ru: 'Это часть правды. Но главное в том, что чат — это естественный способ взаимодействия. Нам не нужно учить команды, мы просто говорим, что нам нужно, и модель нас понимает благодаря RLHF.', 
              en: 'That\'s part of the truth. But the main thing is that chat is a natural way of interacting. We don\'t need to learn commands; we just say what we need, and the model understands us thanks to RLHF.' 
            },
            isCorrect: true
          },
          {
            text: { ru: 'Это было просто удачное время и маркетинг.', en: 'It was just lucky timing and marketing.' },
            reaction: { 
              ru: 'Маркетинг помог, но без качественного изменения в "послушности" модели (instruction following), она бы осталась игрушкой для гиков. Чат сделал мощь ИИ доступной домохозяйкам и школьникам.', 
              en: 'Marketing helped, but without a qualitative change in "instruction following," it would have remained a toy for geeks. Chat made the power of AI accessible to everyone, from parents to students.' 
            },
            isCorrect: false
          }
        ]
      }
    },
    {
      id: 6,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем заключалась главная причина "Красного кода" (Code Red) в Google после выхода ChatGPT?', 
        en: 'What was the primary reason for Google\'s "Code Red" after ChatGPT\'s release?' 
      },
      options: [
        { ru: 'ИИ начал писать код лучше программистов Google', en: 'AI started writing code better than Google programmers' },
        { ru: 'Угроза рекламной бизнес-модели "синих ссылок"', en: 'Threat to the "blue links" advertising business model' },
        { ru: 'OpenAI купила домен google.com', en: 'OpenAI bought the google.com domain' }
      ],
      answer: { ru: 'Угроза рекламной бизнес-модели "синих ссылок"', en: 'Threat to the "blue links" advertising business model' },
      explanation: { 
        ru: 'Правильно! Прямые ответы ИИ позволяют пользователю не кликать по ссылкам, что лишает Google доходов от поисковой рекламы.', 
        en: 'Correct! Direct AI answers allow users to avoid clicking links, depriving Google of search advertising revenue.' 
      }
    },
    {
      id: 7,
      type: 'timeline',
      question: {
        ru: 'Хронология взрывного роста ChatGPT и последующих событий.',
        en: 'Timeline of ChatGPT explosive growth and subsequent events.'
      },
      answer: '',
      explanation: {
        ru: 'ChatGPT показал беспрецедентную скорость адаптации, набрав 100 млн пользователей всего за 2 месяца, что заставило всю индустрию переключиться в режим экстренной гонки.',
        en: 'ChatGPT showed unprecedented adoption speed, reaching 100M users in just 2 months, forcing the entire industry into an emergency race.'
      },
      timeline: {
        events: [
          { label: { ru: 'Релиз ChatGPT (Research Preview)', en: 'ChatGPT Release (Research Preview)' }, year: 'Ноя 2022' },
          { label: { ru: '1 миллион пользователей', en: '1 million users' }, year: 'Дек 2022' },
          { label: { ru: '100 миллионов пользователей', en: '100 million users' }, year: 'Янв 2023' },
          { label: { ru: 'Релиз GPT-4', en: 'GPT-4 Release' }, year: 'Мар 2023' }
        ],
        correctOrder: [
          { ru: 'Релиз ChatGPT (Research Preview)', en: 'ChatGPT Release (Research Preview)' },
          { ru: '1 миллион пользователей', en: '1 million users' },
          { ru: '100 миллионов пользователей', en: '100 million users' },
          { ru: 'Релиз GPT-4', en: 'GPT-4 Release' }
        ]
      }
    },
    {
      id: 8,
      type: 'categorize',
      question: {
        ru: 'Распределите действия по этапам процесса RLHF.',
        en: 'Categorize actions by RLHF pipeline stages.'
      },
      answer: '',
      explanation: {
        ru: 'RLHF состоит из обучения на примерах (SFT), создания шкалы оценки (Reward Model) и автоматической оптимизации (PPO).',
        en: 'RLHF consists of learning from examples (SFT), creating a scoring scale (Reward Model), and automated optimization (PPO).'
      },
      categorize: {
        items: [
          { ru: 'Написание идеальных ответов людьми', en: 'Writing ideal responses by humans' },
          { ru: 'Ранжирование ответов от лучшего к худшему', en: 'Ranking responses from best to worst' },
          { ru: 'Максимизация оценки от виртуального критика', en: 'Maximizing score from a virtual critic' },
          { ru: 'Демонстрация формата "Вопрос-Ответ"', en: 'Demonstrating Q&A format' },
          { ru: 'Тренировка нейросети-судьи', en: 'Training a judge neural network' },
          { ru: 'Тонкая настройка через штрафы и поощрения', en: 'Fine-tuning via penalties and rewards' }
        ],
        buckets: [
          { ru: 'SFT (Примеры)', en: 'SFT (Examples)' },
          { ru: 'Reward Model (Оценка)', en: 'Reward Model (Scoring)' },
          { ru: 'PPO (Оптимизация)', en: 'PPO (Optimization)' }
        ],
        correctMapping: {
          'Написание идеальных ответов людьми': 'SFT (Примеры)',
          'Writing ideal responses by humans': 'SFT (Examples)',
          'Ранжирование ответов от лучшего к худшему': 'Reward Model (Оценка)',
          'Ranking responses from best to worst': 'Reward Model (Scoring)',
          'Максимизация оценки от виртуального критика': 'PPO (Оптимизация)',
          'Maximizing score from a virtual critic': 'PPO (Optimization)',
          'Демонстрация формата "Вопрос-Ответ"': 'SFT (Примеры)',
          'Demonstrating Q&A format': 'SFT (Examples)',
          'Тренировка нейросети-судьи': 'Reward Model (Оценка)',
          'Training a judge neural network': 'Reward Model (Scoring)',
          'Тонкая настройка через штрафы и поощрения': 'PPO (Оптимизация)',
          'Fine-tuning via penalties and rewards': 'PPO (Optimization)'
        }
      }
    },
    {
      id: 9,
      type: 'scenario',
      question: {
        ru: 'Миссия: Ответ на "Code Red"',
        en: 'Mission: Responding to "Code Red"'
      },
      answer: '',
      explanation: {
        ru: 'В ситуации экзистенциальной угрозы лучшая стратегия — признать сдвиг парадигмы и интегрировать новую технологию в основной продукт, несмотря на риск для старой бизнес-модели. Медлительность в такие моменты ведет к потере лидерства.',
        en: 'In an existential threat situation, the best strategy is to acknowledge the paradigm shift and integrate the new tech into the core product, despite risks to the old business model. Sluggishness leads to loss of leadership.'
      },
      scenario: {
        brief: {
          ru: 'Вы — вице-президент по продукту в крупной поисковой компании в декабре 2022 года. Популярность ChatGPT растет на 20% в неделю. Ваши инженеры говорят, что у вас есть похожая технология, но она иногда ошибается. Что решите на совете директоров?',
          en: 'You are a VP of Product at a major search company in December 2022. ChatGPT adoption is growing 20% weekly. Your engineers say you have similar tech, but it occasionally makes mistakes. What do you tell the board?'
        },
        constraints: [
          { ru: 'Ваша выручка на 80% зависит от рекламы в поиске', en: 'Your revenue is 80% search ad dependent' },
          { ru: 'Репутация бренда строится на точности данных', en: 'Brand reputation is built on data accuracy' },
          { ru: 'Инвесторы требуют немедленного ответа на успех OpenAI', en: 'Investors demand immediate response to OpenAI success' }
        ],
        choices: [
          {
            text: { ru: 'Игнорировать: "Это просто хайп, люди скоро вернутся к синим ссылкам".', en: 'Ignore it: "It&apos;s just hype, people will soon return to blue links".' },
            outcome: {
              ru: 'Через полгода ваша доля рынка начинает падать, талантливые инженеры уходят в стартапы. Вы безнадежно отстали.',
              en: 'Six months later your market share drops, talent leaves for startups. You are hopelessly behind.'
            },
            score: 15
          },
          {
            text: { ru: 'Запустить "безопасную" версию в закрытом тесте для 1% пользователей без интеграции в поиск.', en: 'Launch a "safe" version in closed beta for 1% of users, no search integration.' },
            outcome: {
              ru: 'Рынок воспринимает это как слабость и нерешительность. Microsoft успевает интегрировать ИИ в Bing раньше вас.',
              en: 'The market sees this as weakness and indecision. Microsoft integrates AI into Bing before you can.'
            },
            score: 45
          },
          {
            text: { ru: 'Объявить Code Red: мобилизовать ресурсы и начать глубокую интеграцию генеративного ответа в основной поиск.', en: 'Declare Code Red: mobilize resources and start deep integration of generative answers into core search.' },
            outcome: {
              ru: 'Рискованно для текущей выручки, но это единственный путь выживания. Вы принимаете бой и сохраняете статус технологического лидера.',
              en: 'Risky for current revenue, but the only path to survival. You join the fight and maintain tech leadership status.'
            },
            score: 90
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 10,
      type: 'sorting',
      question: {
        ru: 'Упорядочите сервисы по времени достижения 1 миллиона пользователей (от самого быстрого).',
        en: 'Sort services by time taken to reach 1 million users (fastest first).'
      },
      initialItems: [
        { ru: 'Netflix (3.5 года)', en: 'Netflix (3.5 years)' },
        { ru: 'Twitter (2 года)', en: 'Twitter (2 years)' },
        { ru: 'Instagram (2.5 месяца)', en: 'Instagram (2.5 months)' },
        { ru: 'ChatGPT (5 дней)', en: 'ChatGPT (5 days)' }
      ],
      correctOrder: [
        { ru: 'ChatGPT (5 дней)', en: 'ChatGPT (5 days)' },
        { ru: 'Instagram (2.5 месяца)', en: 'Instagram (2.5 months)' },
        { ru: 'Twitter (2 года)', en: 'Twitter (2 years)' },
        { ru: 'Netflix (3.5 года)', en: 'Netflix (3.5 years)' }
      ],
      answer: '',
      explanation: {
        ru: 'ChatGPT установил абсолютный исторический рекорд, показав, насколько востребованным оказался доступный и понятный интерфейс к мощному ИИ.',
        en: 'ChatGPT set an absolute historical record, demonstrating the massive demand for an accessible and clear interface to powerful AI.'
      }
    }
  ];
