import { LocalizedTask } from '../types';

export const scalingHypothesisTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-select',
      question: { 
        ru: 'Выберите три основных фактора гипотезы масштабирования.', 
        en: 'Select the three main factors of the scaling hypothesis.' 
      },
      options: [
        { ru: 'Вычисления (Compute)', en: 'Compute' },
        { ru: 'Данные (Data)', en: 'Data' },
        { ru: 'Параметры (Parameters)', en: 'Parameters' },
        { ru: 'Цвет интерфейса', en: 'UI Color' }
      ],
      answer: [
        { ru: 'Вычисления (Compute)', en: 'Compute' },
        { ru: 'Данные (Data)', en: 'Data' },
        { ru: 'Параметры (Parameters)', en: 'Parameters' }
      ],
      explanation: { 
        ru: 'Верно! Именно эти три ресурса определяют качество современной модели.', 
        en: 'Correct! These three resources determine the quality of a modern model.' 
      }
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: { 
        ru: 'Что такое "эмерджентные способности"?', 
        en: 'What are "emergent abilities"?' 
      },
      options: [
        { ru: 'Способности, которые исчезают с ростом модели', en: 'Abilities that disappear as the model grows' },
        { ru: 'Навыки, которые внезапно проявляются только при достижении определенного масштаба', en: 'Skills that suddenly appear only when a certain scale is reached' },
        { ru: 'Запрограммированные вручную функции', en: 'Manually programmed functions' }
      ],
      answer: { ru: 'Навыки, которые внезапно проявляются только при достижении определенного масштаба', en: 'Skills that suddenly appear only when a certain scale is reached' },
      explanation: { 
        ru: 'Правильно! Это одна из самых интригующих загадок современного ИИ.', 
        en: 'Correct! This is one of the most intriguing mysteries of modern AI.' 
      }
    },
    {
      id: 3,
      type: 'input',
      question: { 
        ru: 'Как называется проект (и вид антилопы), давший имя законам оптимального масштабирования в 2022 году?', 
        en: 'What is the name of the project (and a species of antelope) that gave its name to the optimal scaling laws in 2022?' 
      },
      answer: 'Chinchilla',
      explanation: { 
        ru: 'Верно! Законы "Шиншиллы" изменили подход к распределению ресурсов при обучении.', 
        en: 'Correct! Chinchilla laws changed the approach to resource allocation during training.' 
      }
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: { 
        ru: 'Согласно законам Chinchilla, если мы увеличиваем количество параметров модели в 10 раз, что мы должны сделать с объемом данных?', 
        en: 'According to Chinchilla laws, if we increase the number of model parameters by 10x, what should we do with the data volume?' 
      },
      options: [
        { ru: 'Оставить без изменений', en: 'Leave it unchanged' },
        { ru: 'Также пропорционально увеличить', en: 'Increase it proportionally' },
        { ru: 'Уменьшить, чтобы сэкономить память', en: 'Decrease it to save memory' }
      ],
      answer: { ru: 'Также пропорционально увеличить', en: 'Increase it proportionally' },
      explanation: { 
        ru: 'Правильно! Оптимальная модель требует баланса между размером и данными.', 
        en: 'Correct! An optimal model requires a balance between size and data.' 
      }
    },
    {
      id: 5,
      type: 'mentor',
      question: { ru: 'Природа эмерджентности', en: 'The nature of emergence' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Представь, что мы увеличиваем модель в 100 раз. Она просто станет лучше запоминать факты или в ней может "проснуться" что-то качественно новое?',
          en: 'Imagine we increase a model by 100x. Will it just get better at memorizing facts, or could something qualitatively new "wake up" inside it?'
        },
        userOptions: [
          {
            text: { ru: 'Это просто статистика, она просто станет точнее.', en: 'It\'s just statistics, it will just become more accurate.' },
            reaction: { 
              ru: 'Многие так думали. Но практика показала, что при достижении определенного масштаба (Scale) у моделей внезапно появляются навыки, которым их не обучали — например, логический вывод или перевод с редких языков.', 
              en: 'Many thought so. But practice has shown that upon reaching a certain Scale, models suddenly develop skills they weren\'t trained for — like logical inference or translating rare languages.' 
            },
            isCorrect: false
          },
          {
            text: { ru: 'Масштаб может привести к фазовому переходу, как в физике.', en: 'Scale can lead to a phase transition, like in physics.' },
            reaction: { 
              ru: 'Именно! Это и есть эмерджентность. Как вода превращается в пар при 100 градусах, так и нейросеть при достижении миллиардов параметров начинает проявлять способности, которых не было на малых весах.', 
              en: 'Exactly! That is emergence. Just as water turns into steam at 100 degrees, a neural network, upon reaching billions of parameters, begins to show abilities that weren\'t present at smaller scales.' 
            },
            isCorrect: true,
            deepening: {
              ru: 'Это ставит перед нами вопрос: если мы продолжим масштабировать, какие еще способности "проснутся" завтра? Мы пока не умеем предсказывать момент появления новых навыков.',
              en: 'This poses a question: if we continue to scale, what other abilities will "wake up" tomorrow? We don\'t yet know how to predict the moment new skills appear.'
            }
          }
        ]
      }
    },
    {
      id: 6,
      type: 'categorize',
      question: {
        ru: 'Распределите ресурсы по трем столпам масштабирования.',
        en: 'Categorize resources into the three pillars of scaling.'
      },
      answer: '',
      explanation: {
        ru: 'Эффективное масштабирование требует баланса между "мозгами" (параметры), "едой" (данные) и "энергией для раздумий" (вычисления).',
        en: 'Effective scaling requires a balance between "brains" (parameters), "food" (data), and "thinking energy" (compute).'
      },
      categorize: {
        items: [
          { ru: 'Количество связей (весов)', en: 'Number of connections (weights)' },
          { ru: 'Общий объем терабайт текста', en: 'Total terabytes of text' },
          { ru: 'Количество видеокарт H100', en: 'Number of H100 GPUs' },
          { ru: 'Архитектура слоев модели', en: 'Model layer architecture' },
          { ru: 'Миллиарды токенов из книг', en: 'Billions of tokens from books' },
          { ru: 'Срок аренды облачного кластера', en: 'Cloud cluster rental duration' }
        ],
        buckets: [
          { ru: 'Параметры (Parameters)', en: 'Parameters' },
          { ru: 'Данные (Data)', en: 'Data' },
          { ru: 'Вычисления (Compute)', en: 'Compute' }
        ],
        correctMapping: {
          'Количество связей (весов)': 'Параметры (Parameters)',
          'Number of connections (weights)': 'Parameters',
          'Общий объем терабайт текста': 'Данные (Data)',
          'Total terabytes of text': 'Data',
          'Количество видеокарт H100': 'Вычисления (Compute)',
          'Number of H100 GPUs': 'Compute',
          'Архитектура слоев модели': 'Параметры (Parameters)',
          'Model layer architecture': 'Parameters',
          'Миллиарды токенов из книг': 'Данные (Data)',
          'Billions of tokens from books': 'Data',
          'Срок аренды облачного кластера': 'Вычисления (Compute)',
          'Cloud cluster rental duration': 'Compute'
        }
      }
    },
    {
      id: 7,
      type: 'scenario',
      question: {
        ru: 'Миссия: Оптимальное обучение (Chinchilla)',
        en: 'Mission: Optimal Training (Chinchilla)'
      },
      answer: '',
      explanation: {
        ru: 'Согласно законам Chinchilla, большинство моделей 2020-2021 годов были "недокормлены" данными. Оптимальная стратегия — вкладывать ресурсы в большее количество качественных данных, а не просто в раздувание количества параметров.',
        en: 'According to Chinchilla laws, most 2020-2021 models were "data-starved." The optimal strategy is to invest in more high-quality data rather than just bloating the parameter count.'
      },
      scenario: {
        brief: {
          ru: 'У вас фиксированный бюджет на электричество и GPU. Вы планируете обучить модель на 70 миллиардов параметров (70B). Ваши инженеры предлагают два варианта использования оставшегося бюджета. Что выберете?',
          en: 'You have a fixed budget for electricity and GPUs. You plan to train a 70-billion parameter model (70B). Your engineers suggest two ways to spend the remaining budget. What do you choose?'
        },
        constraints: [
          { ru: 'Бюджет ограничен и уже почти исчерпан', en: 'Budget is limited and nearly exhausted' },
          { ru: 'Цель: максимальное качество ответов при фиксированном размере', en: 'Goal: maximum response quality at a fixed size' },
          { ru: 'Соблюдение законов оптимального масштабирования', en: 'Adherence to optimal scaling laws' }
        ],
        choices: [
          {
            text: { ru: 'Увеличить модель до 175B, используя те же данные.', en: 'Increase model to 175B using the same data.' },
            outcome: {
              ru: 'Модель стала больше, но она "недообучена". Вы потратили деньги на "большой, но пустой мозг". Эффективность на токен упала.',
              en: 'The model is larger, but "undertrained." You spent money on a "big but empty brain." Per-token efficiency dropped.'
            },
            score: 20
          },
          {
            text: { ru: 'Остаться на 70B, но увеличить объем обучающих данных в 3 раза.', en: 'Stay at 70B but triple the training data volume.' },
            outcome: {
              ru: 'Идеально! Вы следуете Chinchilla Optimality. Модель 70B, обученная на огромном массиве данных, часто побеждает гигантов вроде 175B, работая при этом быстрее и дешевле.',
              en: 'Perfect! You followed Chinchilla Optimality. A 70B model trained on a massive dataset often beats 175B giants while being faster and cheaper.'
            },
            score: 95
          },
          {
            text: { ru: 'Потратить остаток бюджета на разработку нового интерфейса.', en: 'Spend the remaining budget on a new UI.' },
            outcome: {
              ru: 'Интерфейс красивый, но модель осталась посредственной. Конкуренты с лучшими весами быстро вытеснят вас с рынка.',
              en: 'The UI is nice, but the model remains mediocre. Competitors with better weights will quickly push you out of the market.'
            },
            score: 30
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 8,
      type: 'sorting',
      question: {
        ru: 'Упорядочите модели по объему вычислений (Compute), затраченных на их обучение (от меньшего к большему).',
        en: 'Sort models by training compute (from smallest to largest).'
      },
      initialItems: [
        { ru: 'GPT-2 (2019)', en: 'GPT-2 (2019)' },
        { ru: 'GPT-3 (2020)', en: 'GPT-3 (2020)' },
        { ru: 'GPT-4 (2023)', en: 'GPT-4 (2023)' },
        { ru: 'Llama 3.1 405B (2024)', en: 'Llama 3.1 405B (2024)' }
      ],
      correctOrder: [
        { ru: 'GPT-2 (2019)', en: 'GPT-2 (2019)' },
        { ru: 'GPT-3 (2020)', en: 'GPT-3 (2020)' },
        { ru: 'GPT-4 (2023)', en: 'GPT-4 (2023)' },
        { ru: 'Llama 3.1 405B (2024)', en: 'Llama 3.1 405B (2024)' }
      ],
      answer: '',
      explanation: {
        ru: 'Каждое новое поколение frontier-моделей требует на 1-2 порядка больше вычислений, чем предыдущее. Это и есть наглядная демонстрация закона масштабирования.',
        en: 'Each new generation of frontier models requires 1-2 orders of magnitude more compute than the previous one. This is a clear demonstration of the scaling law.'
      }
    },
    {
      id: 9,
      type: 'timeline',
      question: {
        ru: 'Ключевые открытия в области масштабирования ИИ.',
        en: 'Key breakthroughs in AI scaling.'
      },
      answer: '',
      explanation: {
        ru: 'История масштабирования — это путь от понимания важности параметров к осознанию критической роли данных и бесконечных вычислений.',
        en: 'The history of scaling is a path from understanding parameters to realizing the critical role of data and infinite compute.'
      },
      timeline: {
        events: [
          { label: { ru: 'Статья OpenAI про Scaling Laws для GPT-2', en: 'OpenAI paper on Scaling Laws for GPT-2' }, year: '2020' },
          { label: { ru: 'Релиз GPT-3 (доказательство силы масштаба)', en: 'GPT-3 release (proving scale power)' }, year: '2020' },
          { label: { ru: 'Законы Chinchilla (баланс данных и параметров)', en: 'Chinchilla Laws (data/parameter balance)' }, year: '2022' },
          { label: { ru: 'Эпоха супер-кластеров (100k+ H100)', en: 'Era of super-clusters (100k+ H100)' }, year: '2024' }
        ],
        correctOrder: [
          { ru: 'Статья OpenAI про Scaling Laws для GPT-2', en: 'OpenAI paper on Scaling Laws for GPT-2' },
          { ru: 'Релиз GPT-3 (доказательство силы масштаба)', en: 'GPT-3 release (proving scale power)' },
          { ru: 'Законы Chinchilla (баланс данных и параметров)', en: 'Chinchilla Laws (data/parameter balance)' },
          { ru: 'Эпоха супер-кластеров (100k+ H100)', en: 'Era of super-clusters (100k+ H100)' }
        ]
      }
    },
    {
      id: 10,
      type: 'multiple-select',
      question: {
        ru: 'Какие из следующих утверждений об эмерджентных способностях верны?',
        en: 'Which of the following statements about emergent abilities are correct?'
      },
      options: [
        { ru: 'Эмерджентные способности появляются постепенно по мере роста модели', en: 'Emergent abilities appear gradually as the model grows' },
        { ru: 'Цепочечное рассуждение (chain-of-thought) — пример эмерджентной способности', en: 'Chain-of-thought reasoning is an example of an emergent ability' },
        { ru: 'Момент появления новых эмерджентных способностей можно точно предсказать', en: 'The exact moment new emergent abilities appear can be accurately predicted' },
        { ru: 'Навыки, которым модель не обучали явно, могут появиться при достижении порога масштаба', en: 'Skills the model was never explicitly trained for can appear upon reaching a scale threshold' },
        { ru: 'Эмерджентность — одна из причин, почему масштабирование сложно полностью контролировать', en: 'Emergence is one reason why scaling is difficult to fully control' }
      ],
      answer: [
        { ru: 'Цепочечное рассуждение (chain-of-thought) — пример эмерджентной способности', en: 'Chain-of-thought reasoning is an example of an emergent ability' },
        { ru: 'Навыки, которым модель не обучали явно, могут появиться при достижении порога масштаба', en: 'Skills the model was never explicitly trained for can appear upon reaching a scale threshold' },
        { ru: 'Эмерджентность — одна из причин, почему масштабирование сложно полностью контролировать', en: 'Emergence is one reason why scaling is difficult to fully control' }
      ],
      explanation: {
        ru: 'Верно. Эмерджентность — скачкообразный, а не постепенный процесс, и момент её появления непредсказуем. Именно это делает масштабирование одновременно мощным и непредсказуемым инструментом.',
        en: 'Correct. Emergence is a step-change, not a gradual process, and its timing is unpredictable. This is precisely what makes scaling both a powerful and hard-to-control tool.'
      }
    }
  ];
