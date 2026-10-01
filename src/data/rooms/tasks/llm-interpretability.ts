import { LocalizedTask } from '../types';

export const llmInterpretabilityTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'input',
    question: {
      ru: 'Как называется явление, при котором модель хранит больше признаков, чем у неё измерений, — каждый как почти независимое направление, пока признаки редко встречаются вместе?',
      en: 'What is the phenomenon called in which a model stores more features than it has dimensions — each as an almost independent direction, as long as the features rarely occur together?'
    },
    answer: ['суперпозиция', 'суперпозицию', 'superposition'],
    hint: { ru: 'Термин из физики: наложение состояний.', en: 'A term borrowed from physics.' },
    explanation: {
      ru: 'Суперпозиция. Её следствие — полисемантичные нейроны, поэтому модель не читается «по нейронам».',
      en: 'Superposition. Its consequence is polysemantic neurons, so the model cannot be read neuron by neuron.'
    }
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называется отдельная небольшая сеть, которая восстанавливает активации слоя через словарь признаков, из которых на каждом токене включены лишь немногие?',
      en: 'What is the separate small network called that reconstructs a layer\'s activations through a dictionary of features, only a few of which are active on each token?'
    },
    answer: ['sparse autoencoder', 'sae', 'sparse auto-encoder', 'разреженный автокодировщик', 'разреженный автоэнкодер'],
    hint: { ru: 'Аббревиатура из трёх букв: SAE.', en: 'Three-letter abbreviation: SAE.' },
    explanation: {
      ru: 'Sparse autoencoder (SAE). Так получены словари признаков для Claude 3 Sonnet, GPT-4 и открытый набор Gemma Scope.',
      en: 'A sparse autoencoder (SAE). Feature dictionaries for Claude 3 Sonnet, GPT-4 and the open Gemma Scope suite were built this way.'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется метод, при котором на активациях модели обучают маленький отдельный классификатор (зонд), чтобы проверить, хранится ли в них свойство?',
      en: 'What is the method called in which a small separate classifier (a probe) is trained on a model\'s activations to check whether they hold some property?'
    },
    answer: ['пробинг', 'probing', 'зондирование'],
    hint: { ru: 'От английского probe — зонд.', en: 'From "probe".' },
    explanation: {
      ru: 'Пробинг. Он показывает, что информацию можно извлечь, но не доказывает, что модель ею пользуется: для этого нужно вмешательство.',
      en: 'Probing. It shows that information can be extracted, but not that the model uses it: that takes an intervention.'
    }
  },
  {
    id: 4,
    type: 'categorize',
    question: {
      ru: 'Разложите объяснения: какие говорят об одном конкретном ответе, а какие — о модели в целом?',
      en: 'Sort the explanations: which concern one specific answer, and which concern the model as a whole?'
    },
    answer: '',
    explanation: {
      ru: 'Карта внимания или значимости для одного входа и граф атрибуции для одного промпта — локальные. Словарь признаков слоя, зонд на тысячах примеров и короткий список правил — глобальные.',
      en: 'An attention or saliency map for one input and an attribution graph for one prompt are local. A layer\'s feature dictionary, a probe trained on thousands of examples and a short list of rules are global.'
    },
    categorize: {
      items: [
        { ru: 'Карта внимания для одного промпта', en: 'An attention map for one prompt' },
        { ru: 'Словарь признаков SAE для слоя модели', en: 'An SAE feature dictionary for a model layer' },
        { ru: 'Граф атрибуции для промпта про Даллас', en: 'An attribution graph for the Dallas prompt' },
        { ru: 'Зонд, обученный на тысячах примеров', en: 'A probe trained on thousands of examples' },
        { ru: 'Карта значимости для одной картинки', en: 'A saliency map for one image' },
        { ru: 'Список из трёх правил CORELS', en: 'A three-rule CORELS list' },
      ],
      buckets: [
        { ru: 'Локальное: один ответ', en: 'Local: one answer' },
        { ru: 'Глобальное: модель в целом', en: 'Global: the model as a whole' },
      ],
      correctMapping: {
        'An attention map for one prompt': 'Local: one answer',
        'An SAE feature dictionary for a model layer': 'Global: the model as a whole',
        'An attribution graph for the Dallas prompt': 'Local: one answer',
        'A probe trained on thousands of examples': 'Global: the model as a whole',
        'A saliency map for one image': 'Local: one answer',
        'A three-rule CORELS list': 'Global: the model as a whole',
      }
    }
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Расположите шаги работы со словарём признаков в правильном порядке.',
      en: 'Arrange the steps of working with a feature dictionary in the right order.'
    },
    answer: '',
    explanation: {
      ru: 'Сначала активации, потом SAE, потом описание по примерам, и в конце — проверка вмешательством: без неё описание остаётся гипотезой.',
      en: 'Activations first, then the SAE, then a description from examples, and finally a check by intervention: without it the description remains a hypothesis.'
    },
    initialItems: [
      { ru: 'Зафиксировать признак и посмотреть, как меняется поведение модели', en: 'Clamp the feature and watch how the model\'s behaviour changes' },
      { ru: 'Обучить SAE восстанавливать активации через немногие признаки', en: 'Train an SAE to reconstruct the activations through a few features' },
      { ru: 'Собрать активации одного слоя на большом объёме текста', en: 'Collect activations of one layer over a large amount of text' },
      { ru: 'Прочитать тексты с наибольшей активацией и описать признак', en: 'Read the top-activating texts and describe the feature' },
    ],
    correctOrder: [
      { ru: 'Собрать активации одного слоя на большом объёме текста', en: 'Collect activations of one layer over a large amount of text' },
      { ru: 'Обучить SAE восстанавливать активации через немногие признаки', en: 'Train an SAE to reconstruct the activations through a few features' },
      { ru: 'Прочитать тексты с наибольшей активацией и описать признак', en: 'Read the top-activating texts and describe the feature' },
      { ru: 'Зафиксировать признак и посмотреть, как меняется поведение модели', en: 'Clamp the feature and watch how the model\'s behaviour changes' },
    ]
  },
  {
    id: 6,
    type: 'mentor',
    question: { ru: 'Карта внимания как доказательство', en: 'An attention map as proof' },
    answer: '',
    explanation: {
      ru: 'Веса внимания согласуются с важностью слов слабо и непоследовательно, а одно предсказание допускает разные распределения внимания. Карта — сигнал для проверки, а не доказательство.',
      en: 'Attention weights agree with word importance only weakly and inconsistently, and one prediction allows different attention distributions. A map is a signal to check, not proof.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега показывает тепловую карту внимания: «Смотри, модель смотрела на слово "долг" — значит, отказ дан из-за долга. Это и есть объяснение для клиента». Что ответите?',
        en: 'A colleague shows an attention heat map: "Look, the model attended to the word \'debt\' — so the refusal was because of the debt. That is the explanation for the customer." What do you answer?'
      },
      userOptions: [
        {
          text: { ru: 'Да, карта внимания прямо показывает причину ответа.', en: 'Yes, the attention map directly shows the reason for the answer.' },
          reaction: {
            ru: 'Внимание показывает, откуда перенесена информация, а не что с ней сделали. У Джейна и Уоллеса для того же предсказания находились совсем другие распределения внимания.',
            en: 'Attention shows where information was moved from, not what was done with it. Jain and Wallace found completely different attention distributions for the same prediction.'
          },
          isCorrect: false
        },
        {
          text: { ru: 'Карта внимания — сигнал, а не доказательство: её нужно проверять вмешательством, а объяснение отказа строить иначе.', en: 'An attention map is a signal, not proof: it has to be checked by intervention, and the refusal explanation built another way.' },
          reaction: {
            ru: 'Верно. Внимание даёт «одно из объяснений», и метод объяснения сам должен проходить проверки — как тест со случайными весами у Адебайо.',
            en: 'Correct. Attention gives "an explanation", and an explanation method must itself pass checks — like Adebayo\'s random-weights test.'
          },
          isCorrect: true
        },
        {
          text: { ru: 'Нужно просто взять карту с последнего слоя — она точнее.', en: 'Just take the map from the last layer — it is more accurate.' },
          reaction: {
            ru: 'Слой не меняет сути: значительная часть вычислений идёт вне внимания, через остаточный поток и другие блоки.',
            en: 'The layer does not change the point: much of the computation happens outside attention, through the residual stream and other blocks.'
          },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'Что сделали с моделью в эксперименте Golden Gate Claude?',
      en: 'What was done to the model in the Golden Gate Claude experiment?'
    },
    options: [
      { ru: 'Зафиксировали признак SAE «Золотые Ворота» на уровне в 10 раз выше его максимума', en: 'Clamped the SAE "Golden Gate Bridge" feature at 10 times its maximum' },
      { ru: 'Дообучили модель на текстах о мосте', en: 'Fine-tuned the model on texts about the bridge' },
      { ru: 'Добавили в системный промпт просьбу говорить о мосте', en: 'Added a request to talk about the bridge to the system prompt' },
    ],
    answer: { ru: 'Зафиксировали признак SAE «Золотые Ворота» на уровне в 10 раз выше его максимума', en: 'Clamped the SAE "Golden Gate Bridge" feature at 10 times its maximum' },
    explanation: {
      ru: 'Это управление признаком: вмешательство в активации во время работы модели, без изменения весов и промпта.',
      en: 'This is feature steering: an intervention in the activations while the model runs, with no change to weights or prompt.'
    }
  },
  {
    id: 8,
    type: 'multiple-select',
    question: {
      ru: 'Что показал эксперимент с Othello-GPT и последующие работы?',
      en: 'What did the Othello-GPT experiment and follow-up work show?'
    },
    options: [
      { ru: 'Состояние доски можно восстановить зондом по активациям', en: 'The board state can be recovered from the activations by a probe' },
      { ru: 'Изменение внутреннего представления меняло предсказанные ходы', en: 'Changing the internal representation changed the predicted moves' },
      { ru: 'С кодировкой «моя / соперника» линейный зонд достигает 99,6%', en: 'With a "mine / opponent\'s" encoding a linear probe reaches 99.6%' },
      { ru: 'Модели заранее дали правила игры', en: 'The model was given the rules of the game in advance' },
      { ru: 'Точность зонда сама по себе доказывает, что модель пользуется доской', en: 'Probe accuracy alone proves the model uses the board' },
    ],
    answer: [
      { ru: 'Состояние доски можно восстановить зондом по активациям', en: 'The board state can be recovered from the activations by a probe' },
      { ru: 'Изменение внутреннего представления меняло предсказанные ходы', en: 'Changing the internal representation changed the predicted moves' },
      { ru: 'С кодировкой «моя / соперника» линейный зонд достигает 99,6%', en: 'With a "mine / opponent\'s" encoding a linear probe reaches 99.6%' },
    ],
    explanation: {
      ru: 'Модель видела только ходы, без правил. Решающим было вмешательство: точность зонда показывает лишь, что информацию можно извлечь.',
      en: 'The model saw only moves, no rules. The intervention was decisive: probe accuracy only shows that information can be extracted.'
    }
  },
];
