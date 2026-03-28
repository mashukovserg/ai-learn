import { LocalizedTask } from '../types';

export const nativeMultimodalityTasks: LocalizedTask[] = [
    {
      id: 1,
      type: 'multiple-choice',
      question: { 
        ru: 'В чем заключается главное отличие "нативной" мультимодальности от "модульной"?', 
        en: 'What is the main difference between "native" and "modular" multimodality?' 
      },
      options: [
        { ru: 'Нативная модель использует внешние инструменты для перевода звука в текст', en: 'A native model uses external tools to translate sound into text' },
        { ru: 'Нативная модель обучается на разных типах данных одновременно в рамках одной архитектуры', en: 'A native model is trained on different types of data simultaneously within a single architecture' },
        { ru: 'Нативная модель работает только на мощных GPU от NVIDIA', en: 'A native model only works on powerful NVIDIA GPUs' }
      ],
      answer: { ru: 'Нативная модель обучается на разных типах данных одновременно в рамках одной архитектуры', en: 'A native model is trained on different types of data simultaneously within a single architecture' },
      explanation: { 
        ru: 'Верно! В нативной модели нет разделения на "текстовый" и "визуальный" мозг — всё обрабатывается единым механизмом внимания.', 
        en: 'Correct! In a native model, there is no separation between "textual" and "visual" brains—everything is processed by a single attention mechanism.' 
      }
    },
    {
      id: 2,
      type: 'input',
      question: { 
        ru: 'Как называются квадратные фрагменты (например, 16x16 пикселей), на которые ИИ разбивает изображение?', 
        en: 'What are the square fragments (e.g., 16x16 pixels) called that the AI breaks an image into?' 
      },
      answer: { ru: 'Патчи', en: 'Patches' },
      hint: { ru: 'Английское слово, начинающееся на "П".', en: 'English word starting with "P".' },
      explanation: { 
        ru: 'Правильно! Image Patches — это "визуальные токены", которые позволяют трансформеру анализировать картинку по частям.', 
        en: 'Correct! Image Patches are "visual tokens" that allow the transformer to analyze an image piece by piece.' 
      }
    },
    {
      id: 3,
      type: 'multiple-select',
      question: { 
        ru: 'Выберите преимущества нативной обработки аудио перед старым подходом (перевод в текст через ASR).', 
        en: 'Select the advantages of native audio processing over the old approach (ASR to text).' 
      },
      options: [
        { ru: 'Понимание интонаций, сарказма и эмоций', en: 'Understanding intonation, sarcasm, and emotion' },
        { ru: 'Резкое снижение задержки (Latency) до уровня человеческой реакции', en: 'Dramatic reduction in latency to the level of human reaction' },
        { ru: 'Способность слышать фоновые звуки (лай собаки, шум машин)', en: 'Ability to hear background sounds (dog barking, traffic noise)' },
        { ru: 'Модель начинает лучше считать цифры в уме', en: 'The model starts counting numbers better in its head' }
      ],
      answer: [
        { ru: 'Понимание интонаций, сарказма и эмоций', en: 'Understanding intonation, sarcasm, and emotion' },
        { ru: 'Резкое снижение задержки (Latency) до уровня человеческой реакции', en: 'Dramatic reduction in latency to the level of human reaction' },
        { ru: 'Способность слышать фоновые звуки (лай собаки, шум машин)', en: 'Ability to hear background sounds (dog barking, traffic noise)' }
      ],
      explanation: { 
        ru: 'Верно! Нативный звук позволяет ИИ воспринимать не только "что" сказано, но и "как", что критично для живого общения.', 
        en: 'Correct! Native sound allows the AI to perceive not just "what" is said, but "how," which is critical for live communication.' 
      }
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: { 
        ru: 'Что дает модели механизм "пространственного внимания" (Spatial Attention)?', 
        en: 'What does the "Spatial Attention" mechanism provide to the model?' 
      },
      options: [
        { ru: 'Понимание расположения объектов на картинке друг относительно друга', en: 'Understanding the relative position of objects in an image' },
        { ru: 'Возможность предсказывать погоду по спутниковым снимкам', en: 'Ability to predict weather from satellite imagery' },
        { ru: 'Ускорение рендеринга 3D-графики', en: 'Accelerating 3D graphics rendering' }
      ],
      answer: { ru: 'Понимание расположения объектов на картинке друг относительно друга', en: 'Understanding the relative position of objects in an image' },
      explanation: { 
        ru: 'Точно! Модель анализирует связи между всеми патчами одновременно, что позволяет ей понимать геометрию и композицию кадра.', 
        en: 'Exactly! The model analyzes the links between all patches simultaneously, allowing it to understand the geometry and composition of the frame.' 
      }
    },
    {
      id: 5,
      type: 'categorize',
      question: { 
        ru: 'Классифицируйте характеристики мультимодальных систем.', 
        en: 'Classify characteristics of multimodal systems.' 
      },
      answer: '',
      explanation: { 
        ru: 'Нативные системы работают быстрее и понимают нюансы (эмоции, шум), в то время как модульные теряют информацию при переводе в текст.', 
        en: 'Native systems work faster and understand nuances (emotions, noise), while modular systems lose information during translation to text.' 
      },
      categorize: {
        buckets: [
          { ru: 'Нативная (GPT-4o)', en: 'Native (GPT-4o)' },
          { ru: 'Модульная (ASR + LLM)', en: 'Modular (ASR + LLM)' }
        ],
        items: [
          { ru: 'Задержка ответа 250-300 мс', en: 'Response latency 250-300 ms' },
          { ru: 'Потеря интонации и тембра голоса', en: 'Loss of intonation and voice timbre' },
          { ru: 'Прямое восприятие пикселей патчами', en: 'Direct perception of pixels via patches' },
          { ru: 'Описание картинки словами перед анализом', en: 'Describing an image with words before analysis' }
        ],
        correctMapping: {
          'Задержка ответа 250-300 мс': 'Нативная (GPT-4o)',
          'Response latency 250-300 ms': 'Native (GPT-4o)',
          'Потеря интонации и тембра голоса': 'Модульная (ASR + LLM)',
          'Loss of intonation and voice timbre': 'Modular (ASR + LLM)',
          'Прямое восприятие пикселей патчами': 'Нативная (GPT-4o)',
          'Direct perception of pixels via patches': 'Native (GPT-4o)',
          'Описание картинки словами перед анализом': 'Модульная (ASR + LLM)',
          'Describing an image with words before analysis': 'Modular (ASR + LLM)'
        }
      }
    },
    {
      id: 6,
      type: 'scenario',
      question: { 
        ru: 'Миссия: Проектирование ИИ-ассистента', 
        en: 'Mission: Designing an AI Assistant' 
      },
      answer: '',
      explanation: { 
        ru: 'Для работы в реальном времени с видео и аудио идеальна нативная мультимодальность с поддержкой interleaving, так как она обеспечивает минимальную задержку и глубокое понимание контекста окружения.', 
        en: 'For real-time work with video and audio, native multimodality with interleaving support is ideal, as it provides minimal latency and deep understanding of the environmental context.' 
      },
      scenario: {
        brief: {
          ru: 'Вы проектируете ассистента для слабовидящих людей. Система должна через камеру очков описывать мир и понимать голосовые команды пользователя в шумном городе.', 
          en: 'You are designing an assistant for visually impaired people. The system must use a camera to describe the world and understand user voice commands in a noisy city.' 
        },
        constraints: [
          { ru: 'Минимальная задержка реакции', en: 'Minimal response latency' },
          { ru: 'Работа в шумной среде', en: 'Working in noisy environments' }
        ],
        choices: [
          {
            text: { ru: 'Модульная система: ASR + Image captioning + LLM', en: 'Modular system: ASR + Image captioning + LLM' },
            outcome: { ru: 'Слишком медленно. Пока текст переводится, пользователь уже может столкнуться с препятствием.', en: 'Too slow. By the time text is translated, the user might already hit an obstacle.' },
            score: 30
          },
          {
            text: { ru: 'Нативная мультимодальная модель с Interleaving', en: 'Native multimodal model with Interleaving' },
            outcome: { ru: 'Идеально! Минимальная задержка позволяет реагировать мгновенно, а нативный звук помогает слышать голос сквозь шум.', en: 'Perfect! Minimal latency allows instant reaction, and native audio helps hear the voice through noise.' },
            score: 100
          },
          {
            text: { ru: 'Текстовая LLM с ручным вводом описаний', en: 'Text-only LLM with manual descriptions' },
            outcome: { ru: 'Бесполезно для данной задачи.', en: 'Useless for this task.' },
            score: 0
          }
        ],
        passingScore: 50
      }
    }
    ];
