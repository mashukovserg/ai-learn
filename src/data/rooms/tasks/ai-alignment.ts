import { LocalizedTask } from '../types';

export const aiAlignmentTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'Какую главную цель преследует этап SFT (Supervised Fine-Tuning)?', 
        en: 'What is the primary goal of the SFT (Supervised Fine-Tuning) stage?' 
      },
      options: [
        { ru: 'Увеличить количество параметров модели', en: 'Increase the number of model parameters' },
        { ru: 'Обучить модель имитировать формат и стиль полезного помощника на примерах экспертов', en: 'Train the model to mimic the format and style of a helpful assistant using expert examples' },
        { ru: 'Удалить все данные из интернета из памяти модели', en: 'Delete all internet data from the model\'s memory' }
      ],
      answer: { ru: 'Обучить модель имитировать формат и стиль полезного помощника на примерах экспертов', en: 'Train the model to mimic the format and style of a helpful assistant using expert examples' },
      explanation: { 
        ru: 'Верно! SFT — это первый шаг, где модель учится "хорошим манерам" и формату диалога на основе готовых идеальных ответов.', 
        en: 'Correct! SFT is the first step where the model learns "good manners" and dialogue format based on ready-made ideal answers.' 
      }
    },
    {
      id: 2,
      type: 'sorting',
      question: { 
        ru: 'Упорядочите шаги стандартного процесса RLHF.', 
        en: 'Sort the steps of a standard RLHF process.' 
      },
      initialItems: [
        { ru: 'Оптимизация основной модели (PPO)', en: 'Optimize main model (PPO)' },
        { ru: 'Контролируемое обучение (SFT)', en: 'Supervised Learning (SFT)' },
        { ru: 'Обучение Модели Вознаграждения (Reward Model)', en: 'Train Reward Model' },
        { ru: 'Ранжирование ответов людьми', en: 'Human ranking of answers' }
      ],
      correctOrder: [
        { ru: 'Контролируемое обучение (SFT)', en: 'Supervised Learning (SFT)' },
        { ru: 'Ранжирование ответов людьми', en: 'Human ranking of answers' },
        { ru: 'Обучение Модели Вознаграждения (Reward Model)', en: 'Train Reward Model' },
        { ru: 'Оптимизация основной модели (PPO)', en: 'Optimize main model (PPO)' }
      ],
      explanation: { 
        ru: 'Правильно! Сначала мы учим модель базе, затем собираем отзывы людей, строим на их основе "Критика" и только потом проводим финальную оптимизацию.', 
        en: 'Correct! First we teach the model the basics, then collect human feedback, build a "Critic" based on it, and only then perform the final optimization.' 
      },
      answer: ''
    },
    {
      id: 3,
      type: 'input',
      question: { 
        ru: 'Как называется современный метод выравнивания, который позволяет обучать модель напрямую на предпочтениях без создания отдельной Модели Вознаграждения?', 
        en: 'What is the modern alignment method that allows the model to be trained directly on preferences without creating a separate Reward Model?' 
      },
      answer: 'DPO',
      hint: { ru: 'Аббревиатура из трех букв: Direct Preference Optimization.', en: 'Three-letter acronym: Direct Preference Optimization.' },
      explanation: { 
        ru: 'Верно! DPO (Direct Preference Optimization) — это более эффективная и стабильная альтернатива RLHF.', 
        en: 'Correct! DPO (Direct Preference Optimization) is a more efficient and stable alternative to RLHF.' 
      }
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: { 
        ru: 'Что такое "Reward Hacking" (взлом вознаграждения)?', 
        en: 'What is "Reward Hacking"?' 
      },
      options: [
        { ru: 'Когда хакеры крадут веса модели', en: 'When hackers steal model weights' },
        { ru: 'Когда модель находит способ получить высокий балл от Критика, не выполняя задачу качественно', en: 'When a model finds a way to get a high score from the Critic without performing the task well' },
        { ru: 'Когда модель просит у пользователя денег', en: 'When a model asks the user for money' }
      ],
      answer: { ru: 'Когда модель находит способ получить высокий балл от Критика, не выполняя задачу качественно', en: 'When a model finds a way to get a high score from the Critic without performing the task well' },
      explanation: { 
        ru: 'Правильно! Это одна из главных проблем выравнивания: модель оптимизирует метрику (оценку), а не реальный смысл задачи.', 
        en: 'Correct! This is one of the main alignment problems: the model optimizes the metric (score) rather than the actual meaning of the task.' 
      }
    },
    {
      id: 5,
      type: 'multiple-select',
      question: { 
        ru: 'Выберите ключевые преимущества метода DPO перед традиционным RLHF.', 
        en: 'Select the key advantages of DPO over traditional RLHF.' 
      },
      options: [
        { ru: 'Не требует обучения отдельной Модели Вознаграждения (Reward Model)', en: 'Does not require training a separate Reward Model' },
        { ru: 'Более стабильный процесс обучения', en: 'More stable training process' },
        { ru: 'Позволяет модели читать мысли пользователя', en: 'Allows the model to read the user\'s mind' },
        { ru: 'Математически проще и требует меньше ресурсов', en: 'Mathematically simpler and requires fewer resources' }
      ],
      answer: [
        { ru: 'Не требует обучения отдельной Модели Вознаграждения (Reward Model)', en: 'Does not require training a separate Reward Model' },
        { ru: 'Более стабильный процесс обучения', en: 'More stable training process' },
        { ru: 'Математически проще и требует меньше ресурсов', en: 'Mathematically simpler and requires fewer resources' }
      ],
      explanation: { 
        ru: 'Верно! DPO значительно упростил процесс выравнивания, сделав его доступным для широкого круга разработчиков.', 
        en: 'Correct! DPO significantly simplified the alignment process, making it accessible to a wide range of developers.' 
      }
    },
    {
      id: 6,
      type: 'mentor',
      question: { ru: 'Конституционный ИИ', en: 'Constitutional AI' },
      answer: '',
      explanation: { ru: '', en: '' },
      dialogue: {
        mentorMessage: {
          ru: 'Как ты думаешь, почему идея "Конституционного ИИ" (RLAIF) важна для будущего, когда моделей станет слишком много?',
          en: 'Why do you think the idea of "Constitutional AI" (RLAIF) is important for a future with too many models?'
        },
        userOptions: [
          {
            text: { ru: 'Это позволит нам масштабировать надзор без привлечения миллионов людей-разметчиков.', en: 'It will allow us to scale oversight without involving millions of human annotators.' },
            reaction: { 
              ru: 'Именно! Масштабируемость — это ключ. Человек пишет правила один раз, а ИИ следит за соблюдением этих правил во всех своих версиях. Это единственный способ контролировать AGI.', 
              en: 'Exactly! Scalability is key. A human writes the rules once, and the AI monitors compliance across all its versions. It\'s the only way to control AGI.' 
            },
            isCorrect: true
          },
          {
            text: { ru: 'Это просто способ сделать ИИ более политкорректным.', en: 'It\'s just a way to make AI more politically correct.' },
            reaction: { 
              ru: 'Это лишь поверхностный взгляд. На самом деле речь о фундаментальной архитектуре безопасности и возможности формализовать "негласные правила" человеческой цивилизации для машин.', 
              en: 'That\'s just a surface-level view. In reality, it\'s about the fundamental safety architecture and the ability to formalize the "unspoken rules" of human civilization for machines.' 
            },
            isCorrect: false
          }
        ]
      }
    }
  ];
