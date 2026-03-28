import { LocalizedTask } from '../types';

export const aiHistoryTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: {
        ru: 'Какое главное допущение лежало в основе Символического ИИ (GOFAI)?',
        en: 'What was the main assumption behind Symbolic AI (GOFAI)?'
      },
      options: [
        { ru: 'Интеллект — это способность быстро перемножать матрицы', en: 'Intelligence is the ability to multiply matrices quickly' },
        { ru: 'Интеллект сводится к дедукции, и весь мир можно описать строгими правилами логики', en: 'Intelligence is deduction, and the whole world can be described by strict logic rules' },
        { ru: 'Интеллект возникает только при наличии огромных объемов данных', en: 'Intelligence only emerges when massive amounts of data are present' }
      ],
      answer: {
        ru: 'Интеллект сводится к дедукции, и весь мир можно описать строгими правилами логики',
        en: 'Intelligence is deduction, and the whole world can be described by strict logic rules'
      },
      explanation: {
        ru: 'Верно. Ранние исследователи верили, что логика и правила "если-то" способны описать здравый смысл.',
        en: 'Correct. Early researchers believed logic and "if-then" rules could encapsulate common sense.'
      }
    },
    {
      id: 2,
      type: 'multiple-select',
      question: {
        ru: 'Какие факторы привели к наступлению "AI-зим" (AI Winters) в 1970-х и 1980-х?',
        en: 'What factors led to the "AI Winters" in the 1970s and 1980s?'
      },
      options: [
        { ru: 'Недостаток вычислительных мощностей (памяти и скорости процессоров)', en: 'Lack of computational power (memory and CPU speed)' },
        { ru: 'Отсутствие больших наборов данных (интернета еще не было)', en: 'Lack of large datasets (the internet did not exist yet)' },
        { ru: 'Восстание машин и страх Терминатора', en: 'A machine uprising and fear of the Terminator' },
        { ru: 'Разочарование инвесторов и правительств, ведущее к сокращению финансирования', en: 'Disillusionment of investors and governments, leading to funding cuts' }
      ],
      answer: [
        { ru: 'Недостаток вычислительных мощностей (памяти и скорости процессоров)', en: 'Lack of computational power (memory and CPU speed)' },
        { ru: 'Отсутствие больших наборов данных (интернета еще не было)', en: 'Lack of large datasets (the internet did not exist yet)' },
        { ru: 'Разочарование инвесторов и правительств, ведущее к сокращению финансирования', en: 'Disillusionment of investors and governments, leading to funding cuts' }
      ],
      explanation: {
        ru: 'Правильно. Разрыв между обещаниями ученых и реальными физическими ограничениями того времени привел к "зиме".',
        en: 'Correct. The gap between scientific promises and the physical limitations of the era led to the "winter".'
      }
    },
    {
      id: 3,
      type: 'input',
      question: { 
        ru: 'Как называлось соревнование 2012 года, где победила нейросеть AlexNet, ознаменовав начало революции глубокого обучения?', 
        en: 'What was the name of the 2012 competition where the AlexNet neural network won, marking the start of the deep learning revolution?' 
      },
      answer: 'ImageNet',
      explanation: { 
        ru: 'Верно! Победа на ImageNet стала "большим взрывом" современного ИИ.', 
        en: 'Correct! The victory at ImageNet became the "big bang" of modern AI.' 
      }
    },
    {
      id: 4,
      type: 'sorting',
      question: {
        ru: 'Расположите подходы к обработке текста (от старых к новым).',
        en: 'Sort the approaches to text processing (from oldest to newest).'
      },
      initialItems: [
        { ru: 'Трансформеры (параллельное внимание ко всему тексту)', en: 'Transformers (parallel attention to all text)' },
        { ru: 'Символический ИИ (жесткие логические правила)', en: 'Symbolic AI (rigid logic rules)' },
        { ru: 'Большие Языковые Модели (GPT)', en: 'Large Language Models (GPT)' },
        { ru: 'Рекуррентные нейросети (RNN/LSTM - чтение слово за словом)', en: 'Recurrent Neural Nets (RNN/LSTM - word by word reading)' }
      ],
      correctOrder: [
        { ru: 'Символический ИИ (жесткие логические правила)', en: 'Symbolic AI (rigid logic rules)' },
        { ru: 'Рекуррентные нейросети (RNN/LSTM - чтение слово за словом)', en: 'Recurrent Neural Nets (RNN/LSTM - word by word reading)' },
        { ru: 'Трансформеры (параллельное внимание ко всему тексту)', en: 'Transformers (parallel attention to all text)' },
        { ru: 'Большие Языковые Модели (GPT)', en: 'Large Language Models (GPT)' }
      ],
      answer: '',
      explanation: {
        ru: 'Отлично. Эволюция шла от правил к последовательным сетям, а затем к распараллеленным трансформерам.',
        en: 'Great. The evolution went from rules to sequential nets, and then to parallelized transformers.'
      }
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем заключалось главное новшество архитектуры Трансформер, представленной в 2017 году?', 
        en: 'What was the main innovation of the Transformer architecture introduced in 2017?' 
      },
      options: [
        { ru: 'Она стала читать текст задом наперед', en: 'It started reading text backwards' },
        { ru: 'Она отказалась от последовательного чтения в пользу "механизма внимания" (Attention), обрабатывая весь текст сразу', en: 'It abandoned sequential reading in favor of the "Attention" mechanism, processing the whole text at once' },
        { ru: 'Она использовала квантовые процессоры', en: 'It used quantum processors' }
      ],
      answer: { ru: 'Она отказалась от последовательного чтения в пользу "механизма внимания" (Attention), обрабатывая весь текст сразу', en: 'It abandoned sequential reading in favor of the "Attention" mechanism, processing the whole text at once' },
      explanation: {
        ru: 'Правильно! Именно это позволило распараллелить вычисления на GPU и тренировать модели на всём интернете.',
        en: 'Correct! This is exactly what allowed parallelization on GPUs and training models on the entire internet.'
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: { ru: 'Парадигма Software 2.0', en: 'The Software 2.0 Paradigm' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Андрей Карпатый называет современные нейросети "Software 2.0". В "Software 1.0" программист пишет алгоритм решения задачи. А что делает программист в "Software 2.0"?',
          en: 'Andrej Karpathy calls modern neural nets "Software 2.0". In "Software 1.0", a programmer writes the problem-solving algorithm. What does a programmer do in "Software 2.0"?'
        },
        userOptions: [
          {
            text: { ru: 'Просто нажимает кнопку и ИИ всё делает сам.', en: 'Just presses a button and AI does everything itself.' },
            reaction: { 
              ru: 'Не совсем. Инженерия никуда не ушла, просто она переместилась на другой уровень абстракции.', 
              en: 'Not exactly. Engineering hasn\'t disappeared; it just moved to a different level of abstraction.' 
            },
            isCorrect: false
          },
          {
            text: { ru: 'Пишет оптимизатор, собирает качественные данные и позволяет модели самой найти веса (алгоритм).', en: 'Writes an optimizer, collects high-quality data, and lets the model find the weights (the algorithm) itself.' },
            reaction: { 
              ru: 'Именно! Мы больше не пишем логику руками. Мы задаем цель и даем данные, а математика (градиентный спуск) находит решение.', 
              en: 'Exactly! We no longer write the logic by hand. We define the goal and provide data, while mathematics (gradient descent) finds the solution.' 
            },
            isCorrect: true
          }
        ]
      }
    },
    {
      id: 7,
      type: 'timeline',
      question: {
        ru: 'Ключевые вехи на пути к современному ИИ.',
        en: 'Key milestones on the path to modern AI.'
      },
      answer: '',
      explanation: {
        ru: 'Эта последовательность показывает путь от веры в логические правила (1956) к триумфу глубокого обучения (2012), архитектурному прорыву трансформеров (2017) и их массовому признанию (2022).',
        en: 'This sequence shows the path from faith in logic rules (1956) to the triumph of deep learning (2012), the architectural breakthrough of transformers (2017), and their mass adoption (2022).'
      },
      timeline: {
        events: [
          { label: { ru: 'Дартмут 1956', en: 'Dartmouth 1956' }, year: '1956' },
          { label: { ru: 'AlexNet 2012', en: 'AlexNet 2012' }, year: '2012' },
          { label: { ru: 'Transformer 2017', en: 'Transformer 2017' }, year: '2017' },
          { label: { ru: 'ChatGPT 2022', en: 'ChatGPT 2022' }, year: '2022' }
        ],
        correctOrder: [
          { ru: 'Дартмут 1956', en: 'Dartmouth 1956' },
          { ru: 'AlexNet 2012', en: 'AlexNet 2012' },
          { ru: 'Transformer 2017', en: 'Transformer 2017' },
          { ru: 'ChatGPT 2022', en: 'ChatGPT 2022' }
        ]
      }
    },
    {
      id: 8,
      type: 'categorize',
      question: {
        ru: 'Разделите концепции между классическим (GOFAI) и современным (Deep Learning) ИИ.',
        en: 'Categorize concepts between classic (GOFAI) and modern (Deep Learning) AI.'
      },
      answer: '',
      explanation: {
        ru: 'Классический ИИ полагался на жесткую логику и ручное описание правил. Современный ИИ (Deep Learning) обучается на данных, используя нейросети и вероятности.',
        en: 'Classic AI relied on rigid logic and manual rule definitions. Modern AI (Deep Learning) learns from data using neural networks and probabilities.'
      },
      categorize: {
        items: [
          { ru: 'Экспертные системы', en: 'Expert Systems' },
          { ru: 'Нейронные сети', en: 'Neural Networks' },
          { ru: 'Жесткие правила "Если-То"', en: 'Rigid If-Then rules' },
          { ru: 'Распознавание паттернов', en: 'Pattern Recognition' },
          { ru: 'Логический вывод (Дедукция)', en: 'Deductive Reasoning' },
          { ru: 'Обратное распространение ошибки', en: 'Backpropagation' }
        ],
        buckets: [
          { ru: 'Символический ИИ (GOFAI)', en: 'Symbolic AI (GOFAI)' },
          { ru: 'Глубокое обучение (Deep Learning)', en: 'Deep Learning' }
        ],
        correctMapping: {
          'Экспертные системы': 'Символический ИИ (GOFAI)',
          'Expert Systems': 'Symbolic AI (GOFAI)',
          'Нейронные сети': 'Глубокое обучение (Deep Learning)',
          'Neural Networks': 'Deep Learning',
          'Жесткие правила "Если-То"': 'Символический ИИ (GOFAI)',
          'Rigid If-Then rules': 'Symbolic AI (GOFAI)',
          'Распознавание паттернов': 'Глубокое обучение (Deep Learning)',
          'Pattern Recognition': 'Deep Learning',
          'Логический вывод (Дедукция)': 'Символический ИИ (GOFAI)',
          'Deductive Reasoning': 'Symbolic AI (GOFAI)',
          'Обратное распространение ошибки': 'Глубокое обучение (Deep Learning)',
          'Backpropagation': 'Deep Learning'
        }
      }
    },
    {
      id: 9,
      type: 'scenario',
      question: {
        ru: 'Миссия: Выживание в AI-зиму (1974)',
        en: 'Mission: Surviving the AI Winter (1974)'
      },
      answer: '',
      explanation: {
        ru: 'В период "зимы" критически важно сохранять фундаментальные исследования, несмотря на отсутствие быстрого коммерческого результата. Те, кто продолжал развивать теорию нейросетей в 70-80х, заложили основу для революции 2012 года.',
        en: 'During an AI Winter, it is critical to preserve fundamental research despite the lack of immediate commercial results. Those who continued developing neural network theory in the 70s and 80s laid the foundation for the 2012 revolution.'
      },
      scenario: {
        brief: {
          ru: 'Вы — руководитель лаборатории ИИ в 1974 году. После отчета Лайтхилла правительство резко сокращает финансирование. Ваши алгоритмы "экспертных систем" не справляются с реальным миром, а компьютеры слишком медленные. Что предпримете?',
          en: 'You are an AI lab director in 1974. Following the Lighthill report, the government is slashing funding. Your "expert system" algorithms are failing in the real world, and computers are too slow. What do you do?'
        },
        constraints: [
          { ru: 'Бюджет сокращен на 80%', en: 'Budget cut by 80%' },
          { ru: 'Общественное разочарование в ИИ', en: 'Public disillusionment with AI' },
          { ru: 'Доступные компьютеры имеют всего несколько мегабайт памяти', en: 'Available computers have only a few megabytes of memory' }
        ],
        choices: [
          {
            text: { ru: 'Закрыть лабораторию и заняться классической базой данных', en: 'Close the lab and move into classical databases' },
            outcome: {
              ru: 'Вы сохранили карьеру инженера, но история ИИ в вашем институте остановилась на 30 лет.',
              en: 'You saved your engineering career, but AI history at your institute stopped for 30 years.'
            },
            score: 30
          },
          {
            text: { ru: 'Продолжать обещать "разум через 2 года", чтобы удержать гранты', en: 'Keep promising "reasoning in 2 years" to keep the grants' },
            outcome: {
              ru: 'Ложь вскроется через год. Репутация лаборатории уничтожена, финансирование закрыто навсегда. Вы приблизили вторую AI-зиму.',
              en: 'The lie will be exposed in a year. The lab\'s reputation is destroyed, funding is cut forever. You accelerated the second AI Winter.'
            },
            score: 10
          },
          {
            text: { ru: 'Сфокусироваться на фундаментальной математике и теории нейросетей "в стол", ожидая роста мощностей', en: 'Focus on fundamental math and neural network theory in private, waiting for compute to catch up' },
            outcome: {
              ru: 'Верная стратегия. Вы сохранили ядро команды. Ваши теоретические наработки станут базой для "коннекционистов" будущего. Вы — один из тех, кто не дал науке умереть.',
              en: 'Correct strategy. You preserved the core team. Your theoretical work will become the foundation for future connectionists. You are one of those who kept the science alive.'
            },
            score: 95
          }
        ],
        passingScore: 60
      }
    },
    {
      id: 10,
      type: 'sorting',
      question: {
        ru: 'Упорядочите архитектуры по их способности работать с длинным текстом.',
        en: 'Sort architectures by their ability to handle long text.'
      },
      initialItems: [
        { ru: 'RNN', en: 'RNN' },
        { ru: 'LSTM', en: 'LSTM' },
        { ru: 'Transformer', en: 'Transformer' },
        { ru: 'Logic Rules', en: 'Logic Rules' }
      ],
      correctOrder: [
        { ru: 'Logic Rules', en: 'Logic Rules' },
        { ru: 'RNN', en: 'RNN' },
        { ru: 'LSTM', en: 'LSTM' },
        { ru: 'Transformer', en: 'Transformer' }
      ],
      answer: '',
      explanation: {
        ru: 'Именно прогресс в работе с контекстом позволил перейти от простых фраз к написанию целых книг и сложных программ.',
        en: 'It was the progress in context handling that allowed the shift from simple phrases to writing entire books and complex programs.'
      }
    }
  ];
