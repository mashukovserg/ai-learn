import { LocalizedTask } from '../types';

export const aiExistentialRiskTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что, по определению Бострома, считается экзистенциальной катастрофой?',
      en: 'By Bostrom\'s definition, what counts as an existential catastrophe?',
    },
    options: [
      { ru: 'Не только вымирание, но и любое необратимое обрушение долгосрочного потенциала человечества', en: 'Not only extinction, but any irreversible collapse of humanity\'s long-term potential' },
      { ru: 'Только полное вымирание человеческого вида', en: 'Only the complete extinction of the human species' },
      { ru: 'Любая катастрофа, где погибает более миллиарда человек', en: 'Any disaster killing more than a billion people' },
      { ru: 'Экономический кризис планетарного масштаба', en: 'An economic crisis on a planetary scale' },
    ],
    answer: { ru: 'Не только вымирание, но и любое необратимое обрушение долгосрочного потенциала человечества', en: 'Not only extinction, but any irreversible collapse of humanity\'s long-term potential' },
    explanation: {
      ru: 'Ключевой признак — необратимость и потеря потенциала, а не число жертв. Поэтому в определение попадают сценарии, где человечество выживает, но навсегда застревает.',
      en: 'The defining marks are irreversibility and lost potential, not a body count. That is why scenarios where humanity survives but is permanently stuck also qualify.',
    },
  },
  {
    id: 2,
    type: 'categorize',
    question: {
      ru: 'Разложите сценарии по четырём классам экзистенциального риска',
      en: 'Sort the scenarios into Bostrom\'s four classes of existential risk',
    },
    answer: '',
    categorize: {
      items: [
        { ru: 'Вид полностью исчезает', en: 'The species disappears entirely' },
        { ru: 'Цивилизация выживает, но никогда не достигает технологической зрелости', en: 'Civilisation survives but never reaches technological maturity' },
        { ru: 'Зрелость достигнута, но будущее устроено так, что теряет почти всю ценность', en: 'Maturity is reached, but the future is arranged so that it loses almost all value' },
        { ru: 'Хорошее будущее построено, но затем разрушено', en: 'A good future is built and then destroyed' },
      ],
      buckets: [
        { ru: 'Вымирание', en: 'Extinction' },
        { ru: 'Вечная стагнация', en: 'Permanent stagnation' },
        { ru: 'Ущербная реализация', en: 'Flawed realisation' },
        { ru: 'Последующее крушение', en: 'Subsequent ruination' },
      ],
      correctMapping: {
        'The species disappears entirely': 'Extinction',
        'Civilisation survives but never reaches technological maturity': 'Permanent stagnation',
        'Maturity is reached, but the future is arranged so that it loses almost all value': 'Flawed realisation',
        'A good future is built and then destroyed': 'Subsequent ruination',
      },
    },
    explanation: {
      ru: 'Четыре класса различаются не масштабом ущерба, а тем, в какой момент и каким образом теряется потенциал.',
      en: 'The four classes differ not by scale of damage but by when and how the potential is lost.',
    },
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Как называется предложенное Бостромом правило «максимизируй вероятность приемлемого исхода»? (одно слово латиницей)',
      en: 'What is the name of Bostrom\'s rule "maximise the probability of an OK outcome"? (one word)',
    },
    answer: 'maxipok',
    hint: {
      ru: 'Сокращение от maximise probability of an OK outcome.',
      en: 'A contraction of "maximise probability of an OK outcome".',
    },
    explanation: {
      ru: 'Maxipok. Бостром подчёркивает, что это эвристика для расстановки приоритетов, а не абсолютный принцип.',
      en: 'Maxipok. Bostrom stresses it is a rule of thumb for prioritisation, not a principle of absolute validity.',
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Чем maxipok отличается от принципа maximin?',
      en: 'How does maxipok differ from the maximin principle?',
    },
    options: [
      { ru: 'Maximin требует выбирать действие с лучшим худшим случаем, а полностью устранить экзистенциальный риск невозможно', en: 'Maximin picks the action with the best worst case, but existential risk cannot be eliminated entirely' },
      { ru: 'Maxipok применяется только к природным катастрофам', en: 'Maxipok applies only to natural disasters' },
      { ru: 'Maximin учитывает вероятности, а maxipok их игнорирует', en: 'Maximin accounts for probabilities while maxipok ignores them' },
      { ru: 'Между ними нет содержательной разницы', en: 'There is no substantive difference between them' },
    ],
    answer: { ru: 'Maximin требует выбирать действие с лучшим худшим случаем, а полностью устранить экзистенциальный риск невозможно', en: 'Maximin picks the action with the best worst case, but existential risk cannot be eliminated entirely' },
    explanation: {
      ru: 'Худший случай всегда остаётся катастрофическим, поэтому maximin парализует выбор. Maxipok работает с вероятностями и потому пригоден для приоритизации.',
      en: 'The worst case always stays catastrophic, so maximin paralyses choice. Maxipok works with probabilities and therefore remains usable for prioritisation.',
    },
  },
  {
    id: 5,
    type: 'sorting',
    question: {
      ru: 'Восстановите три посылки базового аргумента об AI-риске в логическом порядке',
      en: 'Put the three premises of the basic AI x-risk case in logical order',
    },
    answer: '',
    initialItems: [
      { ru: 'Такая система вероятно получит катастрофически невыровненные цели', en: 'Such a system will probably have catastrophically misaligned goals' },
      { ru: 'Сверхчеловеческие ИИ-системы вероятно будут целенаправленными', en: 'Superhuman AI systems will likely be goal-directed' },
      { ru: 'Невыровненная целенаправленная система вероятно получит контроль над будущим человечества', en: 'A misaligned goal-directed system will likely control humanity\'s future' },
    ],
    correctOrder: [
      { ru: 'Сверхчеловеческие ИИ-системы вероятно будут целенаправленными', en: 'Superhuman AI systems will likely be goal-directed' },
      { ru: 'Такая система вероятно получит катастрофически невыровненные цели', en: 'Such a system will probably have catastrophically misaligned goals' },
      { ru: 'Невыровненная целенаправленная система вероятно получит контроль над будущим человечества', en: 'A misaligned goal-directed system will likely control humanity\'s future' },
    ],
    explanation: {
      ru: 'Цепочка идёт от свойства системы к её целям и затем к последствиям. Каждое звено опирается на предыдущее.',
      en: 'The chain runs from a property of the system to its goals and then to the consequences. Each link rests on the previous one.',
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Что следует из того, что базовый аргумент устроен как цепочка посылок?',
      en: 'What follows from the basic case being structured as a chain of premises?',
    },
    options: [
      { ru: 'Аргумент не сильнее своего слабейшего звена — опровержение одной посылки рвёт вывод', en: 'The argument is no stronger than its weakest link — refuting one premise breaks the conclusion' },
      { ru: 'Чем больше посылок, тем надёжнее вывод', en: 'The more premises there are, the more reliable the conclusion' },
      { ru: 'Посылки можно проверять только все сразу', en: 'The premises can only be tested all at once' },
      { ru: 'Порядок посылок не имеет значения', en: 'The order of the premises does not matter' },
    ],
    answer: { ru: 'Аргумент не сильнее своего слабейшего звена — опровержение одной посылки рвёт вывод', en: 'The argument is no stronger than its weakest link — refuting one premise breaks the conclusion' },
    explanation: {
      ru: 'Поэтому продуктивный спор начинается с вопроса «какую именно посылку вы оспариваете», а не с общего «согласны или нет».',
      en: 'That is why a productive disagreement starts with "which premise are you disputing", not with a blanket "do you agree".',
    },
  },
  {
    id: 7,
    type: 'multiple-select',
    question: {
      ru: 'Какие контраргументы Грейс направлены против третьей посылки — что система получит контроль? (выберите все подходящие)',
      en: 'Which of Grace\'s counterarguments target the third premise — that the system would gain control? (select all that apply)',
    },
    options: [
      { ru: 'Успех человечества обеспечен коллективным знанием, а не индивидуальным интеллектом', en: 'Human success comes from collective knowledge, not individual intelligence' },
      { ru: 'Во многих задачах мало «запаса высоты» для радикального превосходства', en: 'Many domains lack the headroom for dramatic superiority' },
      { ru: 'Системе, которой не доверяют, тяжелее действовать, даже если она способнее', en: 'A system nobody trusts is handicapped even when it is more capable' },
      { ru: 'Небольшие расхождения в функции полезности могут не быть катастрофическими', en: 'Small differences in utility functions may not be catastrophic' },
      { ru: 'Экономические стимулы могут поощрять краткосрочные цели', en: 'Economic incentives may favour short-term goals' },
    ],
    answer: [
      { ru: 'Успех человечества обеспечен коллективным знанием, а не индивидуальным интеллектом', en: 'Human success comes from collective knowledge, not individual intelligence' },
      { ru: 'Во многих задачах мало «запаса высоты» для радикального превосходства', en: 'Many domains lack the headroom for dramatic superiority' },
      { ru: 'Системе, которой не доверяют, тяжелее действовать, даже если она способнее', en: 'A system nobody trusts is handicapped even when it is more capable' },
    ],
    explanation: {
      ru: 'Три выбранных возражения бьют по механизму захвата контроля. Оставшиеся два относятся ко второй посылке — о целях системы.',
      en: 'The three selected objections attack the mechanism of gaining control. The other two belong to the second premise, about the system\'s goals.',
    },
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: {
      ru: 'Возражение «ценность может быть не такой хрупкой» направлено против того, что…',
      en: 'The objection "maybe value is not fragile" targets the claim that…',
    },
    options: [
      { ru: 'Малейшее отклонение целей от человеческих ведёт к катастрофе', en: 'Even a tiny divergence of goals from human values leads to catastrophe' },
      { ru: 'Системы будут целенаправленными', en: 'Systems will be goal-directed' },
      { ru: 'Интеллект даёт решающее преимущество', en: 'Intelligence confers a decisive advantage' },
      { ru: 'Экзистенциальный риск заслуживает приоритета', en: 'Existential risk deserves priority' },
    ],
    answer: { ru: 'Малейшее отклонение целей от человеческих ведёт к катастрофе', en: 'Even a tiny divergence of goals from human values leads to catastrophe' },
    explanation: {
      ru: 'Грейс замечает, что рассуждение о хрупкости смешивает пропуск целой ценности с небольшим отклонением, а обучение обычно даёт второе.',
      en: 'Grace notes the fragility argument conflates omitting a value entirely with perturbing it slightly, and training usually produces the latter.',
    },
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Коллега прочитал разбор контраргументов и заключил, что риск опровергнут. Что ответить?',
      en: 'A colleague reads the counterarguments and concludes the risk is refuted. How do you respond?',
    },
    answer: '',
    explanation: {
      ru: 'Контраргументы показывают, что аргумент не герметичен, а не что вывод ложен. Это разные утверждения.',
      en: 'The counterarguments show the argument is not airtight, not that its conclusion is false. Those are different claims.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Смотри: у базового аргумента шестнадцать возражений. Значит, тема закрыта и волноваться не о чем. Согласен?',
        en: 'Look: the basic case has sixteen objections against it. So the topic is closed and there is nothing to worry about. Agree?',
      },
      userOptions: [
        {
          text: {
            ru: 'Возражения показывают, что аргумент не герметичен, — но это не то же самое, что доказать безопасность. Автор разбора прямо это оговаривает.',
            en: 'The objections show the argument is not airtight — which is not the same as establishing safety. The author of the review says so explicitly.',
          },
          reaction: {
            ru: 'Верно. Ослабленный аргумент оставляет вывод под вопросом, а не опровергает его: слабый довод в пользу утверждения не делает утверждение ложным.',
            en: 'Right. A weakened argument leaves the conclusion open rather than refuting it: a weak case for a claim does not make the claim false.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Полезная проверка: спросить, что именно изменилось бы в вашей оценке риска, если бы конкретное возражение оказалось верным.',
            en: 'A useful check: ask what exactly would change in your risk estimate if a particular objection turned out to be correct.',
          },
        },
        {
          text: {
            ru: 'Согласен: раз возражений много, вопрос решён.',
            en: 'Agreed: with that many objections, the question is settled.',
          },
          reaction: {
            ru: 'Количество возражений само по себе ничего не решает — важна их сила и то, какие посылки они затрагивают.',
            en: 'The number of objections settles nothing by itself — what matters is their strength and which premises they touch.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Наоборот: любые возражения тут неуместны, тема слишком серьёзная.',
            en: 'On the contrary: objections are out of place here, the topic is too serious.',
          },
          reaction: {
            ru: 'Серьёзность темы — довод в пользу более строгого разбора, а не в пользу запрета на возражения.',
            en: 'The seriousness of a topic argues for more rigorous scrutiny, not for a ban on objections.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'В чём смысл проверки «аргумент доказывает слишком много» на примере корпораций?',
      en: 'What is the point of the "proves too much" test using corporations?',
    },
    options: [
      { ru: 'Та же логика, применённая к корпорациям, даёт вывод, который мы отвергаем, — значит в рассуждении чего-то не хватает', en: 'The same logic applied to corporations yields a conclusion we reject, so something is missing from the reasoning' },
      { ru: 'Корпорации опаснее ИИ-систем', en: 'Corporations are more dangerous than AI systems' },
      { ru: 'Корпорации доказывают неизбежность катастрофы', en: 'Corporations prove catastrophe is inevitable' },
      { ru: 'Аналогии в философии запрещены', en: 'Analogies are not permitted in philosophy' },
    ],
    answer: { ru: 'Та же логика, применённая к корпорациям, даёт вывод, который мы отвергаем, — значит в рассуждении чего-то не хватает', en: 'The same logic applied to corporations yields a conclusion we reject, so something is missing from the reasoning' },
    explanation: {
      ru: 'Приём не опровергает вывод напрямую: он показывает, что аргументу нужна дополнительная посылка, объясняющая, чем ИИ отличается от корпорации.',
      en: 'The move does not refute the conclusion directly: it shows the argument needs an extra premise explaining how AI differs from a corporation.',
    },
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Почему Бостром признаёт понятие экзистенциального риска отчасти оценочным?',
      en: 'Why does Bostrom concede that the concept of existential risk is partly evaluative?',
    },
    options: [
      { ru: 'Два из четырёх классов определяются через ценность будущего, а не описательно', en: 'Two of the four classes are defined through the value of the future rather than descriptively' },
      { ru: 'Потому что вероятности нельзя измерить', en: 'Because probabilities cannot be measured' },
      { ru: 'Потому что риск касается только далёкого будущего', en: 'Because the risk concerns only the distant future' },
      { ru: 'Потому что понятие введено недавно', en: 'Because the concept was introduced recently' },
    ],
    answer: { ru: 'Два из четырёх классов определяются через ценность будущего, а не описательно', en: 'Two of the four classes are defined through the value of the future rather than descriptively' },
    explanation: {
      ru: 'Вымирание и стагнацию можно описать фактами. «Ущербная реализация» и «последующее крушение» требуют суждения о том, что делает будущее ценным, — и здесь возможны разногласия.',
      en: 'Extinction and stagnation can be stated as facts. "Flawed realisation" and "subsequent ruination" require a judgement about what makes a future valuable — and there disagreement is possible.',
    },
  },
  {
    id: 12,
    type: 'scenario',
    question: {
      ru: 'Миссия: найти точку разногласия в споре о риске',
      en: 'Mission: locate the crux of a disagreement about risk',
    },
    answer: '',
    explanation: {
      ru: 'Продуктивный спор начинается с локализации: какую посылку оспаривает собеседник и что изменило бы его оценку.',
      en: 'A productive disagreement starts with localisation: which premise the other side disputes and what would change their estimate.',
    },
    scenario: {
      brief: {
        ru: 'Два инженера спорят о рисках ИИ третий час. Один считает угрозу серьёзной, другой — преувеличенной. Они обмениваются примерами и цитатами, но не приближаются к согласию.',
        en: 'Two engineers have argued about AI risk for three hours. One considers the threat serious, the other overblown. They trade examples and quotes without getting closer to agreement.',
      },
      constraints: [
        { ru: 'Цель — понять разногласие, а не победить в споре', en: 'The goal is to understand the disagreement, not to win the argument' },
        { ru: 'Времени мало, нужен один результативный ход', en: 'Time is short; one effective move is needed' },
      ],
      choices: [
        {
          text: {
            ru: 'Разложить аргумент на три посылки и спросить, какую именно каждый считает слабой и что изменило бы его оценку.',
            en: 'Break the argument into its three premises and ask which one each considers weak, and what would change their estimate.',
          },
          outcome: {
            ru: 'Выясняется, что первый спорит о целенаправленности, а второй — о механизме контроля. Спор шёл о разных посылках; теперь ясно, какие факты вообще релевантны.',
            en: 'It turns out one disputes goal-directedness while the other disputes the control mechanism. They were arguing about different premises; now it is clear which evidence is even relevant.',
          },
          score: 100,
          tags: ['locate-crux'],
        },
        {
          text: {
            ru: 'Найти опрос экспертов и принять среднюю оценку вероятности как ответ.',
            en: 'Find an expert survey and adopt the average probability estimate as the answer.',
          },
          outcome: {
            ru: 'Число получено, но разногласие не разобрано: непонятно, из-за какой посылки оценки расходились, и спор возобновится на следующем примере.',
            en: 'A number is obtained, but the disagreement is untouched: it stays unclear which premise drove the divergence, and the argument resumes at the next example.',
          },
          score: 40,
          tags: ['appeal-to-average'],
        },
        {
          text: {
            ru: 'Собрать побольше ярких примеров в пользу своей стороны.',
            en: 'Collect more vivid examples supporting your own side.',
          },
          outcome: {
            ru: 'Обмен примерами продолжается ещё час. Примеры иллюстрируют позиции, но не показывают, какая посылка спорна.',
            en: 'The exchange of examples continues for another hour. Examples illustrate positions but never reveal which premise is contested.',
          },
          score: 10,
          tags: ['example-trading'],
        },
        {
          text: {
            ru: 'Объявить вопрос неразрешимым и закрыть тему.',
            en: 'Declare the question unresolvable and drop it.',
          },
          outcome: {
            ru: 'Разногласие сохраняется целиком, хотя часть посылок вполне поддаётся эмпирической проверке.',
            en: 'The disagreement survives intact, even though several premises are quite amenable to empirical testing.',
          },
          score: 0,
          tags: ['give-up'],
        },
      ],
      passingScore: 70,
    },
  },
];
