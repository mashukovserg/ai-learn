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
  {
    id: 9,
    type: 'input',
    question: {
      ru: 'Как называется программа исследований, которая разбирает модель изнутри как механизм — ищет признаки и схемы (circuits), связывающие их от входа к ответу? (два слова)',
      en: 'What is the research programme called that takes a model apart from the inside like a mechanism — looking for features and the circuits linking them from input to answer? (two words)'
    },
    answer: [
      'механистическая интерпретируемость',
      'механистической интерпретируемостью',
      'механистическую интерпретируемость',
      'mechanistic interpretability',
      'mech interp',
      'mechinterp',
    ],
    hint: {
      ru: 'Первое слово — от «механизм», второе — название этой комнаты.',
      en: 'The first word comes from "mechanism", the second is in this room\'s title.'
    },
    explanation: {
      ru: 'Механистическая интерпретируемость. Её исходные гипотезы сформулировали Ола и соавторы в «Zoom In»: признаки соответствуют направлениям, признаки связаны в схемы, похожие схемы возникают в разных моделях.',
      en: 'Mechanistic interpretability. Its starting hypotheses were set out by Olah and colleagues in "Zoom In": features correspond to directions, features are linked into circuits, and similar circuits arise in different models.'
    }
  },
  {
    id: 10,
    type: 'timeline',
    question: {
      ru: 'Расположите вехи интерпретируемости в хронологическом порядке.',
      en: 'Arrange the interpretability milestones in chronological order.'
    },
    answer: '',
    explanation: {
      ru: 'Зонды (2016) → проверки карт значимости (2018) → «Zoom In» и схемы (2020) → суперпозиция на игрушечных моделях (2022) → первый словарь признаков SAE (2023) → Golden Gate Claude (2024) → графы атрибуции (2025).',
      en: 'Probes (2016) → sanity checks for saliency maps (2018) → "Zoom In" and circuits (2020) → superposition in toy models (2022) → the first SAE feature dictionary (2023) → Golden Gate Claude (2024) → attribution graphs (2025).'
    },
    timeline: {
      events: [
        { label: { ru: 'Golden Gate Claude: модель с зафиксированным признаком открыта на сутки', en: 'Golden Gate Claude: a model with a clamped feature opened for a day' }, year: '2024' },
        { label: { ru: 'Линейные зонды как «термометры» в слоях сети', en: 'Linear probes as "thermometers" in network layers' }, year: '2016' },
        { label: { ru: 'Графы атрибуции: Dallas → Texas → Austin', en: 'Attribution graphs: Dallas → Texas → Austin' }, year: '2025' },
        { label: { ru: 'Тест со случайными весами для карт значимости', en: 'The random-weights test for saliency maps' }, year: '2018' },
        { label: { ru: 'Toy Models of Superposition', en: 'Toy Models of Superposition' }, year: '2022' },
        { label: { ru: '«Zoom In»: признаки, схемы, универсальность', en: '"Zoom In": features, circuits, universality' }, year: '2020' },
        { label: { ru: 'Первый словарь признаков SAE: 512 нейронов → 4096 признаков', en: 'The first SAE feature dictionary: 512 neurons → 4,096 features' }, year: '2023' },
      ],
      correctOrder: [
        { ru: 'Линейные зонды как «термометры» в слоях сети', en: 'Linear probes as "thermometers" in network layers' },
        { ru: 'Тест со случайными весами для карт значимости', en: 'The random-weights test for saliency maps' },
        { ru: '«Zoom In»: признаки, схемы, универсальность', en: '"Zoom In": features, circuits, universality' },
        { ru: 'Toy Models of Superposition', en: 'Toy Models of Superposition' },
        { ru: 'Первый словарь признаков SAE: 512 нейронов → 4096 признаков', en: 'The first SAE feature dictionary: 512 neurons → 4,096 features' },
        { ru: 'Golden Gate Claude: модель с зафиксированным признаком открыта на сутки', en: 'Golden Gate Claude: a model with a clamped feature opened for a day' },
        { ru: 'Графы атрибуции: Dallas → Texas → Austin', en: 'Attribution graphs: Dallas → Texas → Austin' },
      ]
    }
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Адебайо и соавторы строили карту значимости для обученной сети и для такой же сети со случайными весами. Что значит, если карта почти не изменилась?',
      en: 'Adebayo and colleagues built a saliency map for a trained network and for the same network with random weights. What does it mean if the map barely changed?'
    },
    options: [
      { ru: 'Метод описывает саму картинку, а не то, чему научилась модель', en: 'The method describes the picture itself, not what the model learned' },
      { ru: 'Модель настолько устойчива, что её веса не важны', en: 'The model is so robust that its weights do not matter' },
      { ru: 'Объяснение особенно надёжно, раз оно не зависит от весов', en: 'The explanation is especially reliable, since it does not depend on the weights' },
    ],
    answer: { ru: 'Метод описывает саму картинку, а не то, чему научилась модель', en: 'The method describes the picture itself, not what the model learned' },
    explanation: {
      ru: 'Если объяснение не меняется, когда модель сломана, оно не объясняет модель. Так часть популярных методов, например Guided Backprop, оказалась похожа на обычное выделение контуров; простые градиенты и GradCAM проверку прошли.',
      en: 'If an explanation does not change when the model is broken, it does not explain the model. That is how some popular methods, such as Guided Backprop, turned out to resemble plain edge detection; plain gradients and GradCAM passed the check.'
    }
  },
  {
    id: 12,
    type: 'scenario',
    question: {
      ru: 'Миссия: регулятор спрашивает про отказ в кредите',
      en: 'Mission: the regulator asks about a loan refusal'
    },
    answer: '',
    explanation: {
      ru: 'Сегодняшние методы не дают надёжного объяснения отдельного решения большой языковой модели. Для решений с высокой ценой ошибки разумнее понятная по устройству модель с явными причинами, а языковой модели — работа, где её ошибку легко заметить.',
      en: 'Today\'s methods do not give a reliable explanation of an individual decision by a large language model. For high-stakes decisions an understandable-by-design model with explicit reasons is the better choice, and the language model gets work where its mistakes are easy to spot.'
    },
    scenario: {
      brief: {
        ru: 'Банк использует большую языковую модель, которая читает анкету и выписку клиента и сама решает, одобрить ли кредит. Регулятор спрашивает, почему клиенту отказали, а сам клиент требует объяснения. Оценка кредитоспособности по регламенту ЕС об ИИ — система высокого риска. Что вы предложите?',
        en: 'A bank uses a large language model that reads a customer\'s application and statement and decides on its own whether to approve a loan. The regulator asks why the customer was refused, and the customer demands an explanation. Under the EU AI Act, creditworthiness assessment is a high-risk system. What do you propose?'
      },
      constraints: [
        { ru: 'Человек, затронутый решением, вправе получить объяснение роли ИИ в нём', en: 'A person affected by the decision is entitled to an explanation of the AI\'s role in it' },
        { ru: 'Графы атрибуции дают содержательный результат примерно для четверти промптов', en: 'Attribution graphs give a meaningful result for about a quarter of prompts' },
        { ru: 'Описания признаков генерируют модели, и они могут ошибаться', en: 'Feature explanations are generated by models and can be wrong' }
      ],
      choices: [
        {
          text: { ru: 'Перенести решение о кредите на понятную по устройству модель с явными причинами отказа, а языковой модели оставить черновик письма клиенту', en: 'Move the credit decision to an understandable-by-design model with explicit reasons for refusal, and leave the language model a draft of the letter to the customer' },
          outcome: {
            ru: 'Верно. Это аргумент Рудин: для решений с высокой ценой ошибки не объяснять чёрный ящик, а брать модель, причины которой видны сразу. Список из трёх правил CORELS показал на данных COMPAS сопоставимую точность. Ошибку в черновике письма человек заметит легко.',
            en: 'Correct. This is Rudin\'s argument: for high-stakes decisions, do not explain a black box — use a model whose reasons are visible from the start. A three-rule CORELS list showed comparable accuracy on the COMPAS data. A mistake in a letter draft is easy for a person to spot.'
          },
          score: 95
        },
        {
          text: { ru: 'Показать регулятору карту внимания модели на анкете клиента', en: 'Show the regulator the model\'s attention map over the customer\'s application' },
          outcome: {
            ru: 'Карта внимания — сигнал, а не объяснение: веса внимания слабо согласуются с важностью слов, и одному предсказанию соответствуют разные распределения внимания. Выдавать её за причину отказа нельзя.',
            en: 'An attention map is a signal, not an explanation: attention weights agree only weakly with word importance, and one prediction fits different attention distributions. It cannot be passed off as the reason for refusal.'
          },
          score: 15
        },
        {
          text: { ru: 'Обучить SAE на модели и показать регулятору описания самых активных признаков', en: 'Train an SAE on the model and show the regulator the explanations of the most active features' },
          outcome: {
            ru: 'Это исследовательский инструмент, а не объяснение отдельного решения. Словарь объясняет активации не полностью, описания признаков пишут модели и они ошибаются — как с признаком 1566, подписанным «Golden Gate» вместо «Golden» вообще.',
            en: 'That is a research tool, not an explanation of an individual decision. The dictionary does not fully explain the activations, and feature explanations are written by models and can be wrong — as with feature 1566, labelled "Golden Gate" instead of "Golden" in general.'
          },
          score: 35
        },
        {
          text: { ru: 'Попросить саму модель объяснить своё решение и передать этот текст клиенту', en: 'Ask the model itself to explain its decision and pass that text to the customer' },
          outcome: {
            ru: 'Текст объяснения — ещё один выход модели и не обязан называть настоящую причину. В экспериментах модели пользовались подсказкой и признавали это лишь в части случаев (комната о моделях-рассуждателях).',
            en: 'The explanation text is one more output of the model and is not bound to name the real reason. In experiments models used a hint and admitted it in only some cases (the reasoning models room).'
          },
          score: 10
        }
      ],
      passingScore: 60
    }
  },
];
