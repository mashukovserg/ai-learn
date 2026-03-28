import { LocalizedTask } from '../types';

export const aiImageCreationTasks: LocalizedTask[] = [
          {
            id: 1,
            type: 'multiple-choice',
            question: {
              ru: 'Какой процесс лежит в основе работы современных диффузионных моделей?',
              en: 'What process is at the heart of modern diffusion models?'
            },
            options: [
              { ru: 'Попиксельное копирование из базы данных', en: 'Pixel-by-pixel copying from a database' },
              { ru: 'Постепенное удаление шума из случайного сигнала (денойзинг)', en: 'Gradual noise removal from a random signal (denoising)' },
              { ru: 'Векторизация растровых набросков', en: 'Vectorization of raster sketches' }
            ],
            answer: {
              ru: 'Постепенное удаление шума из случайного сигнала (денойзинг)',
              en: 'Gradual noise removal from a random signal (denoising)'
            },
            explanation: {
              ru: 'Верно. Модель учится восстанавливать изображение из хаоса, ориентируясь на ваш промпт.',
              en: 'Correct. The model learns to reconstruct an image from chaos, guided by your prompt.'
            }
          },
          {
            id: 2,
            type: 'input',
            question: {
              ru: 'Как называется текстовое поле, куда вписывают то, чего НЕ должно быть на картинке?',
              en: 'What is the text field called where you describe what should NOT be in the image?'
            },
            answer: ['negative prompt', 'negative'],
            hint: {
              ru: 'По-английски: "Отрицательный промпт".',
              en: 'In English: "Negative prompt".'
            },
            explanation: {
              ru: 'Да. Negative prompt помогает убрать лишние детали, артефакты или нежелательные стили.',
              en: 'Yes. A negative prompt helps remove unnecessary details, artifacts, or unwanted styles.'
            }
          },
          {
            id: 3,
            type: 'multiple-select',
            question: {
              ru: 'Какие параметры помогают добиться повторяемости (воспроизводимости) генерации?',
              en: 'Which parameters help achieve repeatability (reproducibility) of generation?'
            },
            options: [
              { ru: 'Seed (зерно)', en: 'Seed' },
              { ru: 'Sampler (метод сэмплирования)', en: 'Sampler' },
              { ru: 'Текущая фаза Луны', en: 'Current moon phase' },
              { ru: 'Prompt и Negative prompt', en: 'Prompt and Negative prompt' }
            ],
            answer: [
              { ru: 'Seed (зерно)', en: 'Seed' },
              { ru: 'Sampler (метод сэмплирования)', en: 'Sampler' },
              { ru: 'Prompt и Negative prompt', en: 'Prompt and Negative prompt' }
            ],
            explanation: {
              ru: 'Верно. Seed позволяет зафиксировать начальный шум, а промпт и метод сэмплирования определяют путь к финалу.',
              en: 'Correct. Seed fixes the initial noise, while the prompt and sampler method define the path to the result.'
            }
          },
          {
            id: 4,
            type: 'sorting',
            question: {
              ru: 'Упорядочите технические шаги генерации в модели Latent Diffusion.',
              en: 'Order the technical steps of generation in a Latent Diffusion model.'
            },
            initialItems: [
              { ru: 'VAE Decoder разжимает латент в пиксели', en: 'VAE Decoder decodes latent into pixels' },
              { ru: 'Генерация случайного шума в латентном пространстве', en: 'Random noise generation in latent space' },
              { ru: 'U-Net убирает шум шаг за шагом (Denoising)', en: 'U-Net removes noise step by step (Denoising)' },
              { ru: 'Текстовый энкодер переводит промпт в векторы', en: 'Text encoder converts prompt into vectors' }
            ],
            correctOrder: [
              { ru: 'Текстовый энкодер переводит промпт в векторы', en: 'Text encoder converts prompt into vectors' },
              { ru: 'Генерация случайного шума в латентном пространстве', en: 'Random noise generation in latent space' },
              { ru: 'U-Net убирает шум шаг за шагом (Denoising)', en: 'U-Net removes noise step by step (Denoising)' },
              { ru: 'VAE Decoder разжимает латент в пиксели', en: 'VAE Decoder decodes latent into pixels' }
            ],
            answer: '',
            explanation: {
              ru: 'Процесс начинается с понимания текста, продолжается в сжатом "уме" модели и заканчивается превращением математики в видимые пиксели через VAE.',
              en: 'The process starts with understanding the text, continues in the model\'s compressed "mind," and ends with converting math into visible pixels via the VAE.'
            }
          },
          {
            id: 5,
            type: 'categorize',
            question: {
              ru: 'Разделите инструменты по их назначению в AI-графике.',
              en: 'Categorize tools by their purpose in AI graphics.'
            },
            answer: '',
            explanation: {
              ru: 'Промпты задают тему, LoRA добавляет детали, а ControlNet управляет структуру и позу.',
              en: 'Prompts set the subject, LoRAs add details, and ControlNet governs structure and pose.'
            },
            categorize: {
              items: [
                { ru: 'Карта глубины (Depth Map)', en: 'Depth Map' },
                { ru: 'Стиль конкретного аниме', en: 'Specific anime style' },
                { ru: 'Текстовое описание героя', en: 'Text description of hero' },
                { ru: 'Скелет позы (OpenPose)', en: 'OpenPose skeleton' },
                { ru: 'Лицо конкретного человека', en: 'Specific person\'s face' },
                { ru: 'Список негативных слов', en: 'Negative words list' }
              ],
              buckets: [
                { ru: 'Промпт (Prompt)', en: 'Prompt' },
                { ru: 'Плагин (LoRA)', en: 'Plugin (LoRA)' },
                { ru: 'Структура (ControlNet)', en: 'Structure (ControlNet)' }
              ],
              correctMapping: {
                'Текстовое описание героя': 'Промпт (Prompt)',
                'Text description of hero': 'Prompt',
                'Список негативных слов': 'Промпт (Prompt)',
                'Negative words list': 'Prompt',
                'Стиль конкретного аниме': 'Плагин (LoRA)',
                'Specific anime style': 'Plugin (LoRA)',
                'Лицо конкретного человека': 'Плагин (LoRA)',
                'Specific person\'s face': 'Plugin (LoRA)',
                'Карта глубины (Depth Map)': 'Структура (ControlNet)',
                'Depth Map': 'Structure (ControlNet)',
                'Скелет позы (OpenPose)': 'Структура (ControlNet)',
                'OpenPose skeleton': 'Structure (ControlNet)'
              }
            }
          },
          {
            id: 6,
            type: 'scenario',
            question: {
              ru: 'Миссия: Создание персонажа для комикса',
              en: 'Mission: Creating a Comic Book Character'
            },
            answer: '',
            explanation: {
              ru: 'Для согласованности персонажа в разных сценах необходимо фиксировать Seed и использовать LoRA. Текстовый промпт слишком изменчив, чтобы давать идентичное лицо каждый раз без этих инструментов.',
              en: 'To maintain character consistency across scenes, you must fix the Seed and use LoRAs. Text prompts are too volatile to produce the identical face every time without these tools.'
            },
            scenario: {
              brief: {
                ru: 'Вам нужно создать 10 страниц комикса про одного и того же рыцаря. Вы получили отличный результат на первой картинке, но на второй рыцарь выглядит как другой человек. Что сделаете?',
                en: 'You need to create 10 comic pages featuring the same knight. You got a great result on the first frame, but on the second, the knight looks like a different person. What do you do?'
              },
              constraints: [
                { ru: 'Лицо рыцаря должно быть узнаваемым', en: 'The knight\'s face must be recognizable' },
                { ru: 'Сцены и позы должны меняться', en: 'Scenes and poses must change' }
              ],
              choices: [
                {
                  text: { ru: 'Просто копировать промпт и надеяться на удачу.', en: 'Just copy the prompt and hope for the best.' },
                  outcome: {
                    ru: 'Результат будет разным каждый раз. Читатели не поймут, что это один герой. Провал задачи.',
                    en: 'The result will differ every time. Readers won\'t recognize the hero. Mission failed.'
                  },
                  score: 10
                },
                {
                  text: { ru: 'Использовать тот же Seed и добавить LoRA с лицом этого персонажа.', en: 'Use the same Seed and add a LoRA with the character\'s face.' },
                  outcome: {
                    ru: 'Идеально! Seed фиксирует базу, а LoRA гарантирует сходство черт лица даже при смене поз и окружения. Это профессиональный подход.',
                    en: 'Perfect! Seed locks the base, and LoRA guarantees facial feature similarity even as poses and environments change. Professional approach.'
                  },
                  score: 95
                },
                {
                  text: { ru: 'Написать в промпте "очень похожий на прошлую картинку".', en: 'Add "very similar to the last picture" to the prompt.' },
                  outcome: {
                    ru: 'Модель не имеет памяти о прошлых генерациях. Это "алхимия", которая не дает технического контроля. Рыцарь снова другой.',
                    en: 'The model has no memory of past generations. This is "alchemy" that offers no technical control. The knight is different again.'
                  },
                  score: 20
                }
              ],
              passingScore: 60
            }
          },
          {
            id: 7,
            type: 'timeline',
            question: {
              ru: 'Путь от первых опытов к современным моделям.',
              en: 'The journey from early experiments to modern models.'
            },
            answer: '',
            explanation: {
              ru: 'Индустрия прошла путь от специфических GAN до универсальных диффузионных систем, которые теперь могут работать даже на смартфонах.',
              en: 'The industry moved from task-specific GANs to universal diffusion systems that can now even run on smartphones.'
            },
            timeline: {
              events: [
                { label: { ru: 'StyleGAN (первые реалистичные лица)', en: 'StyleGAN (first realistic faces)' }, year: '2018' },
                { label: { ru: 'DALL-E 1 (понимание текста)', en: 'DALL-E 1 (text understanding)' }, year: '2021' },
                { label: { ru: 'Stable Diffusion 1.5 (революция Open-Source)', en: 'Stable Diffusion 1.5 (Open-Source revolution)' }, year: '2022' },
                { label: { ru: 'Flux / SDXL (фотореализм уровня 8к)', en: 'Flux / SDXL (8k level photorealism)' }, year: '2024' }
              ],
              correctOrder: [
                { ru: 'StyleGAN (первые реалистичные лица)', en: 'StyleGAN (first realistic faces)' },
                { ru: 'DALL-E 1 (понимание текста)', en: 'DALL-E 1 (text understanding)' },
                { ru: 'Stable Diffusion 1.5 (революция Open-Source)', en: 'Stable Diffusion 1.5 (Open-Source revolution)' },
                { ru: 'Flux / SDXL (фотореализм уровня 8к)', en: 'Flux / SDXL (8k level photorealism)' }
              ]
            }
          }
        ];
