import { LocalizedTask } from '../types';

export const aiPoliticalPhilosophyTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: { ru: 'Какой вопрос превращает анализ ИИ из технического в политико-философский?', en: 'Which question turns an AI analysis from technical into political-philosophical?' },
    options: [
      { ru: 'Какие отношения власти система создаёт, кто им подчинён и почему?', en: 'What relations of power does the system create, who is subject to them, and why?' },
      { ru: 'Сколько параметров у модели?', en: 'How many parameters does the model have?' },
      { ru: 'Какой язык программирования использован?', en: 'Which programming language was used?' },
      { ru: 'Работает ли интерфейс в тёмной теме?', en: 'Does the interface work in dark mode?' },
    ],
    answer: { ru: 'Какие отношения власти система создаёт, кто им подчинён и почему?', en: 'What relations of power does the system create, who is subject to them, and why?' },
    explanation: { ru: 'Политическая философия исследует полномочие, зависимость, распределение и основания принятия обязательных решений — не только техническую способность системы.', en: 'Political philosophy studies authority, dependence, distribution, and reasons for accepting binding decisions — not merely technical capability.' },
  },
  {
    id: 2,
    type: 'categorize',
    question: { ru: 'Разделите утверждения об эффективности и легитимности', en: 'Separate claims about efficiency from claims about legitimacy' },
    answer: '',
    categorize: {
      items: [
        { ru: 'Модель снизила среднее время обработки заявления', en: 'The model reduced average application processing time' },
        { ru: 'Правило отказа утверждено уполномоченным органом', en: 'The rejection rule was approved by an authorized body' },
        { ru: 'Точность обнаружения нарушений выросла', en: 'Violation-detection accuracy increased' },
        { ru: 'Затронутый может потребовать обоснование и пересмотр', en: 'An affected person can demand reasons and review' },
      ],
      buckets: [
        { ru: 'Эффективность', en: 'Efficiency' },
        { ru: 'Легитимность', en: 'Legitimacy' },
      ],
      correctMapping: {
        'The model reduced average application processing time': 'Efficiency',
        'The rejection rule was approved by an authorized body': 'Legitimacy',
        'Violation-detection accuracy increased': 'Efficiency',
        'An affected person can demand reasons and review': 'Legitimacy',
      },
    },
    explanation: { ru: 'Скорость и точность описывают достижение цели. Полномочие, обоснование и пересмотр описывают право применять власть.', en: 'Speed and accuracy describe achieving an objective. Authorization, justification, and review describe a right to exercise power.' },
  },
  {
    id: 3,
    type: 'multiple-select',
    question: { ru: 'Какие признаки указывают на господство, даже если система пока никому не навредила?', en: 'Which signs indicate domination even if the system has not yet harmed anyone?' },
    options: [
      { ru: 'Правила можно односторонне и непрозрачно изменить', en: 'Rules can be changed unilaterally and opaquely' },
      { ru: 'Люди сильно зависят от решения и не имеют реалистичного выхода', en: 'People strongly depend on the decision and have no realistic exit' },
      { ru: 'Затронутые не могут потребовать обоснования', en: 'Affected people cannot demand a justification' },
      { ru: 'Система использует современную архитектуру', en: 'The system uses a modern architecture' },
      { ru: 'Среднее время ответа меньше секунды', en: 'Average response time is under one second' },
    ],
    answer: [
      { ru: 'Правила можно односторонне и непрозрачно изменить', en: 'Rules can be changed unilaterally and opaquely' },
      { ru: 'Люди сильно зависят от решения и не имеют реалистичного выхода', en: 'People strongly depend on the decision and have no realistic exit' },
      { ru: 'Затронутые не могут потребовать обоснования', en: 'Affected people cannot demand a justification' },
    ],
    explanation: { ru: 'Не-господство требует не доброй воли владельца системы, а институционального ограничения произвольной власти.', en: 'Non-domination requires institutional constraints on arbitrary power, not merely the system owner’s goodwill.' },
  },
  {
    id: 4,
    type: 'sorting',
    question: { ru: 'Поставьте шаги мысленного эксперимента Ролза в рабочем порядке', en: 'Put the steps of the Rawlsian thought experiment in working order' },
    answer: '',
    initialItems: [
      { ru: 'Проверить положение группы, которой достался худший исход', en: 'Inspect the position of the group receiving the worst outcome' },
      { ru: 'Скрыть своё будущее место за завесой неведения', en: 'Hide your future position behind the veil of ignorance' },
      { ru: 'Сравнить возможные правила распределения выгод и рисков', en: 'Compare possible rules for distributing benefits and risks' },
      { ru: 'Выбрать правило, не зная, владельцем модели или затронутым человеком вы окажетесь', en: 'Choose a rule without knowing whether you will own the model or be affected by it' },
    ],
    correctOrder: [
      { ru: 'Скрыть своё будущее место за завесой неведения', en: 'Hide your future position behind the veil of ignorance' },
      { ru: 'Сравнить возможные правила распределения выгод и рисков', en: 'Compare possible rules for distributing benefits and risks' },
      { ru: 'Выбрать правило, не зная, владельцем модели или затронутым человеком вы окажетесь', en: 'Choose a rule without knowing whether you will own the model or be affected by it' },
      { ru: 'Проверить положение группы, которой достался худший исход', en: 'Inspect the position of the group receiving the worst outcome' },
    ],
    explanation: { ru: 'Завеса неведения убирает возможность подогнать принцип под своё известное преимущество и направляет внимание на худшую позицию.', en: 'The veil blocks tailoring a principle to one’s known advantage and directs attention to the worst position.' },
  },
  {
    id: 5,
    type: 'mentor',
    question: { ru: 'Советник предлагает выбрать систему только по среднему качеству', en: 'An adviser proposes selecting a system by average quality alone' },
    answer: '',
    explanation: { ru: 'Среднее качество важно, но не показывает распределение ошибок, защищённость прав и положение наиболее уязвимых.', en: 'Average quality matters, but it does not reveal the distribution of errors, protection of rights, or the position of the most vulnerable.' },
    dialogue: {
      mentorMessage: { ru: 'Новая модель повышает точность решений о пособиях с 82% до 91%. Зачем обсуждать философию — цифра ведь лучше?', en: 'The new model raises benefit-decision accuracy from 82% to 91%. Why discuss philosophy when the number is clearly better?' },
      userOptions: [
        {
          text: { ru: 'Нужно проверить, на ком остаются ошибки, какие права поставлены на кон и доступна ли апелляция.', en: 'We must check who still bears the errors, which rights are at stake, and whether appeal is available.' },
          reaction: { ru: 'Верно. Совокупный выигрыш не снимает вопроса о распределении риска и статусе человека.', en: 'Correct. An aggregate gain does not settle the distribution of risk or the person’s standing.' },
          isCorrect: true,
          deepening: { ru: 'Ролзианская проверка особенно внимательно смотрит на тех, кто может оказаться в худшей позиции.', en: 'A Rawlsian test pays special attention to those who may occupy the worst position.' },
        },
        {
          text: { ru: 'Согласиться: более высокая средняя точность автоматически делает решение справедливым.', en: 'Agree: higher average accuracy automatically makes the decision just.' },
          reaction: { ru: 'Среднее может вырасти одновременно с ухудшением результата для небольшой зависимой группы.', en: 'The average can improve while outcomes worsen for a small dependent group.' },
          isCorrect: false,
        },
        {
          text: { ru: 'Отказаться от любых моделей независимо от результатов.', en: 'Reject every model regardless of its results.' },
          reaction: { ru: 'Это тоже обходит анализ. Политическая философия сравнивает институты, а не запрещает технологию по определению.', en: 'That also avoids the analysis. Political philosophy compares institutions; it does not ban technology by definition.' },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: { ru: 'Что из перечисленного является публичным обоснованием решения?', en: 'Which of the following is a public justification for a decision?' },
    options: [
      { ru: 'Цель, значимые основания и ограничения решения объяснены через общие политические нормы', en: 'The objective, consequential reasons, and constraints are explained through shared political norms' },
      { ru: 'Модель так решила', en: 'The model decided so' },
      { ru: 'Алгоритм является коммерческой тайной', en: 'The algorithm is a trade secret' },
      { ru: 'Разработчики уверены, что поступили правильно', en: 'The developers are confident they did the right thing' },
    ],
    answer: { ru: 'Цель, значимые основания и ограничения решения объяснены через общие политические нормы', en: 'The objective, consequential reasons, and constraints are explained through shared political norms' },
    explanation: { ru: 'Публичный разум требует основания, которое затронутый может понять как политический аргумент, проверить и оспорить.', en: 'Public reason requires a justification the affected person can understand as a political argument, inspect, and challenge.' },
  },
  {
    id: 7,
    type: 'categorize',
    question: { ru: 'Отделите прозрачность от оспоримости', en: 'Distinguish transparency from contestability' },
    answer: '',
    categorize: {
      items: [
        { ru: 'Уведомление о том, что использовался ИИ', en: 'Notice that AI was used' },
        { ru: 'Описание значимых факторов решения', en: 'Description of consequential decision factors' },
        { ru: 'Жалоба рассматривается компетентным независимым адресатом', en: 'A complaint is reviewed by a competent independent body' },
        { ru: 'Ошибочное решение можно отменить и исправить последствия', en: 'An erroneous decision can be reversed and its consequences repaired' },
      ],
      buckets: [
        { ru: 'Прозрачность', en: 'Transparency' },
        { ru: 'Оспоримость', en: 'Contestability' },
      ],
      correctMapping: {
        'Notice that AI was used': 'Transparency',
        'Description of consequential decision factors': 'Transparency',
        'A complaint is reviewed by a competent independent body': 'Contestability',
        'An erroneous decision can be reversed and its consequences repaired': 'Contestability',
      },
    },
    explanation: { ru: 'Прозрачность позволяет узнать и понять; оспоримость добавляет полномочие потребовать пересмотра и средство исправления.', en: 'Transparency enables awareness and understanding; contestability adds authority to demand review and an effective remedy.' },
  },
  {
    id: 8,
    type: 'multiple-select',
    question: { ru: 'Что делает участие затронутых политически содержательным, а не декоративным?', en: 'What makes participation by affected people politically meaningful rather than decorative?' },
    options: [
      { ru: 'Представлены группы, на которые лягут последствия', en: 'Groups that will bear the consequences are represented' },
      { ru: 'Участники получают информацию и время для возражения', en: 'Participants receive information and time to object' },
      { ru: 'Есть понятная связь между обсуждением и итоговым решением', en: 'There is a clear link between deliberation and the final decision' },
      { ru: 'Компания собрала как можно больше кликов в опросе', en: 'The company collected as many poll clicks as possible' },
      { ru: 'Все варианты ответа заранее сформулировал поставщик системы', en: 'The system provider framed every available response in advance' },
    ],
    answer: [
      { ru: 'Представлены группы, на которые лягут последствия', en: 'Groups that will bear the consequences are represented' },
      { ru: 'Участники получают информацию и время для возражения', en: 'Participants receive information and time to object' },
      { ru: 'Есть понятная связь между обсуждением и итоговым решением', en: 'There is a clear link between deliberation and the final decision' },
    ],
    explanation: { ru: 'Количество участников само по себе не создаёт демократической легитимности: важны включение, условия обсуждения и реальное влияние.', en: 'Participant count alone creates no democratic legitimacy: inclusion, deliberative conditions, and real influence matter.' },
  },
  {
    id: 9,
    type: 'scenario',
    question: { ru: 'Миссия: ИИ-модерация политической речи', en: 'Mission: AI Moderation of Political Speech' },
    answer: '',
    explanation: { ru: 'Наиболее легитимный вариант соединяет публичные правила, узкую автоматизацию бесспорных случаев, участие затронутых и эффективную апелляцию.', en: 'The most legitimate option combines public rules, narrow automation of clear cases, participation by affected groups, and effective appeal.' },
    scenario: {
      brief: { ru: 'Городская платформа хочет автоматически скрывать «токсичные» политические сообщения перед выборами. Модель точна в среднем, но граница токсичности спорна, а ошибки могут лишить кандидатов аудитории.', en: 'A city platform wants to automatically hide “toxic” political posts before an election. The model is accurate on average, but toxicity is contested and errors may deprive candidates of an audience.' },
      constraints: [
        { ru: 'Решение влияет на политическое участие', en: 'The decision affects political participation' },
        { ru: 'Разумные люди расходятся в границах допустимой речи', en: 'Reasonable people disagree about the boundaries of acceptable speech' },
        { ru: 'До выборов осталось мало времени', en: 'Little time remains before the election' },
      ],
      choices: [
        {
          text: { ru: 'Полностью автоматизировать скрытие: высокая средняя точность достаточна.', en: 'Fully automate hiding: high average accuracy is sufficient.' },
          outcome: { ru: 'Эффективность подменяет легитимность. Спорную норму определяет поставщик, а ошибочно затронутые не получают защиты.', en: 'Efficiency substitutes for legitimacy. The provider defines a contested norm and wrongly affected speakers receive no remedy.' },
          score: 15,
          tags: ['technocracy'],
        },
        {
          text: { ru: 'Отказаться от любой модерации: свобода означает отсутствие правил.', en: 'Reject all moderation: freedom means having no rules.' },
          outcome: { ru: 'Этот вариант игнорирует угрозы и координированные атаки, которые тоже могут лишать других реальной возможности участвовать.', en: 'This ignores threats and coordinated attacks that can also deprive others of a real ability to participate.' },
          score: 35,
          tags: ['laissez-faire'],
        },
        {
          text: { ru: 'Опубликовать узкие правила, автоматически обрабатывать только бесспорные случаи, спорные передавать человеку и дать быструю независимую апелляцию; после выборов провести аудит с участием затронутых.', en: 'Publish narrow rules, automate only clear cases, send disputed cases to a human, provide rapid independent appeal, and run a post-election audit with affected groups.' },
          outcome: { ru: 'Решение признаёт разногласие, ограничивает произвол и соединяет экспертизу с публичным правилом, участием и средством защиты.', en: 'The design recognizes disagreement, constrains arbitrary power, and joins expertise with a public rule, participation, and remedy.' },
          score: 95,
          tags: ['legitimacy', 'contestability', 'proportionality'],
        },
      ],
      passingScore: 70,
    },
  },
];
