import { LocalizedTask } from '../types';

export const aiAlignmentLimitsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Чем, по Шустеру и Килову, техническая надёжность отличается от безопасности?',
      en: 'For Schuster and Kilov, how does technical reliability differ from safety?',
    },
    options: [
      { ru: 'Надёжная система может быть опасной: безопасность требует приемлемости для всех затронутых', en: 'A reliable system can still be dangerous: safety requires acceptability to everyone affected' },
      { ru: 'Это синонимы, различие терминологическое', en: 'They are synonyms; the difference is terminological' },
      { ru: 'Надёжность важнее безопасности', en: 'Reliability matters more than safety' },
      { ru: 'Безопасность — это надёжность плюс скорость работы', en: 'Safety is reliability plus performance' },
    ],
    answer: { ru: 'Надёжная система может быть опасной: безопасность требует приемлемости для всех затронутых', en: 'A reliable system can still be dangerous: safety requires acceptability to everyone affected' },
    explanation: {
      ru: 'Пример статьи — безупречно надёжная система распознавания лиц в руках авторитарного государства. Безопасность оценивается с точки зрения тех, кого решения затрагивают.',
      en: 'The paper\'s example is a flawlessly reliable face-recognition system in authoritarian hands. Safety is judged from the standpoint of those affected by the decisions.',
    },
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Что такое обоснованное моральное разногласие?',
      en: 'What is reasonable moral disagreement?',
    },
    options: [
      { ru: 'Устойчивое расхождение разумных и информированных людей в ценностных вопросах', en: 'Persistent divergence of reasonable, informed people on questions of value' },
      { ru: 'Спор, вызванный нехваткой фактов у одной из сторон', en: 'A dispute caused by one side lacking facts' },
      { ru: 'Разногласие, которое исчезает после разъяснения терминов', en: 'Disagreement that dissolves once terms are clarified' },
      { ru: 'Любой конфликт мнений в интернете', en: 'Any clash of opinions online' },
    ],
    answer: { ru: 'Устойчивое расхождение разумных и информированных людей в ценностных вопросах', en: 'Persistent divergence of reasonable, informed people on questions of value' },
    explanation: {
      ru: 'Ключевое свойство: оно не рассасывается от добавления фактов, потому что касается самих ценностей, а не информации.',
      en: 'Its key property: it does not dissolve when facts are added, because it concerns the values themselves, not information.',
    },
  },
  {
    id: 3,
    type: 'categorize',
    question: {
      ru: 'Разложите основания принять спорное решение по двум видам',
      en: 'Sort the reasons for accepting a controversial decision into the two kinds',
    },
    answer: '',
    categorize: {
      items: [
        { ru: '«Система судит об этом лучше меня» — как диагноз врача', en: 'The system judges this better than I do — like a doctor\'s diagnosis' },
        { ru: '«Решение произвела справедливая процедура» — как честные выборы', en: 'A fair procedure produced the decision — like an honest election' },
        { ru: 'Доверие к экспертизе, подтверждённой независимым критерием', en: 'Trust in expertise validated by an independent standard' },
        { ru: 'Участие затронутых в принятии решения', en: 'Participation of the affected in the decision' },
      ],
      buckets: [
        { ru: 'Эпистемическое основание', en: 'Epistemic reason' },
        { ru: 'Политическое основание', en: 'Political reason' },
      ],
      correctMapping: {
        'The system judges this better than I do — like a doctor\'s diagnosis': 'Epistemic reason',
        'A fair procedure produced the decision — like an honest election': 'Political reason',
        'Trust in expertise validated by an independent standard': 'Epistemic reason',
        'Participation of the affected in the decision': 'Political reason',
      },
    },
    explanation: {
      ru: 'Эпистемическая линия — про правильность суждения (врач), политическая — про легитимность процедуры (выборы). Двойной вызов: методы выравнивания не дают ни того, ни другого.',
      en: 'The epistemic line concerns correctness of judgment (the doctor); the political line concerns legitimacy of procedure (the election). The dual challenge: alignment methods supply neither.',
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Где ломается аналогия между обучением морали и распознаванием речи?',
      en: 'Where does the analogy between learning morality and speech recognition break?',
    },
    options: [
      { ru: 'За разметкой речи стоит независимый факт, к которому агрегация сходится; у морально спорных вопросов его нет', en: 'Speech labels track an independent fact that aggregation converges on; morally contested questions have none available' },
      { ru: 'Речь размечает меньше людей, чем мораль', en: 'Fewer people label speech than morality' },
      { ru: 'Распознавание речи не использует нейросети', en: 'Speech recognition does not use neural networks' },
      { ru: 'Аналогия не ломается — задачи одинаковы', en: 'It does not break — the tasks are identical' },
    ],
    answer: { ru: 'За разметкой речи стоит независимый факт, к которому агрегация сходится; у морально спорных вопросов его нет', en: 'Speech labels track an independent fact that aggregation converges on; morally contested questions have none available' },
    explanation: {
      ru: 'Система распознавания определяет, что реально произнесено, а не что сказал бы типичный разметчик. Для спорной морали доступного внешнего факта, играющего эту роль, нет.',
      en: 'A recognizer determines what was actually said, not what a typical annotator would say. For contested morality no available external fact plays that role.',
    },
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: {
      ru: 'Почему «мудрость толпы» не работает для морально спорных вопросов?',
      en: 'Why does the "wisdom of the crowd" fail for morally contested questions?',
    },
    options: [
      { ru: 'Расхождение суждений здесь — не случайный шум вокруг истины, а само содержание спора', en: 'The divergence of judgments is not random noise around a truth but the very content of the dispute' },
      { ru: 'Толпа всегда ошибается в любых вопросах', en: 'Crowds are always wrong about everything' },
      { ru: 'В моральных опросах участвует слишком мало людей', en: 'Too few people take part in moral surveys' },
      { ru: 'Она работает — статья это подтверждает', en: 'It works — the paper confirms it' },
    ],
    answer: { ru: 'Расхождение суждений здесь — не случайный шум вокруг истины, а само содержание спора', en: 'The divergence of judgments is not random noise around a truth but the very content of the dispute' },
    explanation: {
      ru: 'Усреднение работает, когда ошибки случайны и гасят друг друга — как при угадывании веса быка. При обоснованном разногласии усреднение фиксирует распределение мнений, а не открывает истину.',
      en: 'Averaging works when errors are random and cancel out — like guessing an ox\'s weight. Under reasonable disagreement it records a distribution of opinions rather than revealing a truth.',
    },
  },
  {
    id: 6,
    type: 'sorting',
    question: {
      ru: 'Восстановите ход аргумента о двойном вызове',
      en: 'Reconstruct the dual-challenge argument in order',
    },
    answer: '',
    initialItems: [
      { ru: 'Данный метод выравнивания не даёт ни одного из двух оснований', en: 'The alignment method supplies neither kind of reason' },
      { ru: 'Морально спорное решение системы требует основания для принятия', en: 'A system\'s morally controversial decision needs a reason to be accepted' },
      { ru: 'Значит, у обоснованно несогласного нет причин принять вывод', en: 'So the reasonable dissenter has no reason to accept the output' },
      { ru: 'Основания бывают двух видов: эпистемические и политические', en: 'Reasons come in two kinds: epistemic and political' },
    ],
    correctOrder: [
      { ru: 'Морально спорное решение системы требует основания для принятия', en: 'A system\'s morally controversial decision needs a reason to be accepted' },
      { ru: 'Основания бывают двух видов: эпистемические и политические', en: 'Reasons come in two kinds: epistemic and political' },
      { ru: 'Данный метод выравнивания не даёт ни одного из двух оснований', en: 'The alignment method supplies neither kind of reason' },
      { ru: 'Значит, у обоснованно несогласного нет причин принять вывод', en: 'So the reasonable dissenter has no reason to accept the output' },
    ],
    explanation: {
      ru: 'Требование → классификация оснований → провал метода по обеим линиям → вывод. Оспаривать аргумент — значит атаковать конкретную посылку этой цепочки.',
      en: 'Requirement → classification of reasons → the method\'s failure on both lines → conclusion. Disputing the argument means attacking a specific premise of this chain.',
    },
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: {
      ru: 'В чём политическая проблема краудсорсинга моральных суждений?',
      en: 'What is the political problem with crowdsourcing moral judgments?',
    },
    options: [
      { ru: 'Выборка крауд-воркеров — не легитимная процедура: она не уполномочена затронутыми и не подотчётна им', en: 'A crowdworker sample is not a legitimate procedure: it is neither authorized by nor accountable to the affected' },
      { ru: 'Крауд-воркерам слишком мало платят', en: 'Crowdworkers are underpaid' },
      { ru: 'Опросы проводятся только на английском', en: 'The surveys run only in English' },
      { ru: 'Политической проблемы нет — участие людей делает процесс демократичным', en: 'There is none — human participation makes the process democratic' },
    ],
    answer: { ru: 'Выборка крауд-воркеров — не легитимная процедура: она не уполномочена затронутыми и не подотчётна им', en: 'A crowdworker sample is not a legitimate procedure: it is neither authorized by nor accountable to the affected' },
    explanation: {
      ru: 'Участие само по себе не создаёт легитимности. У процедуры есть облик демократии — голоса, агрегация — но нет её сути: справедливого участия именно затронутых.',
      en: 'Participation alone creates no legitimacy. The procedure has democracy\'s guise — votes, aggregation — without its substance: fair participation of the actually affected.',
    },
  },
  {
    id: 8,
    type: 'multiple-select',
    question: {
      ru: 'Что статья признаёт за конституционным ИИ, а что ставит ему в вину? (выберите верные утверждения)',
      en: 'What does the paper credit constitutional AI with, and what does it charge it with? (select the true statements)',
    },
    options: [
      { ru: 'Достоинство: ценности сделаны явными — виден предмет выравнивания', en: 'Credit: the values are made explicit — you can see what the system is aligned to' },
      { ru: 'Проблема: конституция предпосылается, а не обосновывается', en: 'Charge: the constitution is presupposed, not justified' },
      { ru: 'Проблема: состав конституции выбрала компания, а не процедура с участием затронутых', en: 'Charge: the constitution\'s content was chosen by a company, not by a procedure involving the affected' },
      { ru: 'Достоинство: конституция доказывает моральную истинность принципов', en: 'Credit: the constitution proves its principles morally true' },
      { ru: 'Проблема: явные принципы хуже неявных', en: 'Charge: explicit principles are worse than implicit ones' },
    ],
    answer: [
      { ru: 'Достоинство: ценности сделаны явными — виден предмет выравнивания', en: 'Credit: the values are made explicit — you can see what the system is aligned to' },
      { ru: 'Проблема: конституция предпосылается, а не обосновывается', en: 'Charge: the constitution is presupposed, not justified' },
      { ru: 'Проблема: состав конституции выбрала компания, а не процедура с участием затронутых', en: 'Charge: the constitution\'s content was chosen by a company, not by a procedure involving the affected' },
    ],
    explanation: {
      ru: 'Статья честно фиксирует выигрыш в прозрачности относительно RLHF — и показывает, что явность принципов не решает ни эпистемическую, ни политическую проблему.',
      en: 'The paper honestly records the transparency gain over RLHF — and shows that explicitness solves neither the epistemic nor the political problem.',
    },
  },
  {
    id: 9,
    type: 'mentor',
    question: {
      ru: 'Коллега говорит: «RLHF же обучается на людях — значит, это демократично». Что ответить?',
      en: 'A colleague says: "RLHF learns from people — so it is democratic." How do you respond?',
    },
    answer: '',
    explanation: {
      ru: 'Участие людей — не то же самое, что легитимная процедура. Асессоры-подрядчики никем не уполномочены и не совпадают с затронутыми.',
      en: 'Human participation is not the same as a legitimate procedure. Contracted raters are authorized by no one and do not coincide with the affected.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Смотри: RLHF буквально обучается на предпочтениях живых людей. Чем это не демократия в миниатюре? По-моему, вопрос легитимности закрыт.',
        en: 'Look: RLHF literally learns from the preferences of real people. How is that not democracy in miniature? To me the legitimacy question is settled.',
      },
      userOptions: [
        {
          text: {
            ru: 'Участие людей — не то же, что легитимная процедура: асессоры никем не уполномочены, никому не подотчётны и не совпадают с теми, кого решения затронут.',
            en: 'Human participation is not a legitimate procedure: the raters are authorized by no one, accountable to no one, and are not the people the decisions will affect.',
          },
          reaction: {
            ru: 'Именно. Это то, что статья называет «обликом демократии»: голоса и агрегация есть, а справедливой процедуры с участием затронутых нет.',
            en: 'Exactly. That is what the paper calls the "guise of democracy": votes and aggregation without a fair procedure involving the affected.',
          },
          isCorrect: true,
          deepening: {
            ru: 'Полезный тест: спросить, перед кем асессоры отвечают за свои суждения и кто их выбирал. У электората ответ есть, у выборки подрядчиков — нет.',
            en: 'A useful test: ask to whom the raters answer for their judgments and who chose them. An electorate has an answer; a contractor sample does not.',
          },
        },
        {
          text: {
            ru: 'Согласен: раз участвуют люди, процесс демократичен.',
            en: 'Agreed: people participate, so the process is democratic.',
          },
          reaction: {
            ru: 'По этой логике любой опрос в интернете — референдум. Легитимность создаёт справедливая процедура с участием затронутых, а не сам факт участия кого-то.',
            en: 'By that logic any online poll is a referendum. Legitimacy comes from a fair procedure involving the affected, not from someone participating.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Демократия тут вообще ни при чём — важна только точность модели.',
            en: 'Democracy is beside the point — only model accuracy matters.',
          },
          reaction: {
            ru: 'Для морально спорных решений «точность» не определена без ответа на вопрос, чьи ценности считать эталоном, — это и возвращает нас к легитимности.',
            en: 'For morally contested decisions "accuracy" is undefined until you say whose values set the standard — which brings legitimacy right back.',
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
      ru: 'Чего аргумент статьи НЕ утверждает?',
      en: 'What does the paper\'s argument NOT claim?',
    },
    options: [
      { ru: 'Что выравнивание в целом невозможно, а RLHF бесполезен для бесспорных случаев', en: 'That alignment is impossible in general and RLHF useless for uncontroversial cases' },
      { ru: 'Что краудсорсинг не делает систему моральным экспертом', en: 'That crowdsourcing does not make a system a moral expert' },
      { ru: 'Что у выборки крауд-воркеров нет политической легитимности', en: 'That a crowdworker sample lacks political legitimacy' },
      { ru: 'Что конституция в CAI предпосылается, а не обосновывается', en: 'That the CAI constitution is presupposed rather than justified' },
    ],
    answer: { ru: 'Что выравнивание в целом невозможно, а RLHF бесполезен для бесспорных случаев', en: 'That alignment is impossible in general and RLHF useless for uncontroversial cases' },
    explanation: {
      ru: 'Удар аргумента приходится на узкий класс: морально спорные решения с системным влиянием. Для бесспорных случаев — фактические ошибки, явный вред — методы работают и оправданы.',
      en: 'The blow lands on a narrow class: morally controversial decisions with systemic impact. For uncontroversial cases — factual errors, plain harms — the methods work and are warranted.',
    },
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: {
      ru: 'Какие два направления называет позитивная программа статьи?',
      en: 'Which two tracks make up the paper\'s positive programme?',
    },
    options: [
      { ru: 'Явные проверяемые обоснования решений и демократический контроль над системами', en: 'Explicit, checkable justifications of decisions and democratic oversight of the systems' },
      { ru: 'Больше данных и больше вычислений', en: 'More data and more compute' },
      { ru: 'Запрет ИИ в спорных областях и мораторий на исследования', en: 'Banning AI from contested domains and a research moratorium' },
      { ru: 'Передача всех ценностных решений компаниям-разработчикам', en: 'Handing all value decisions to the developer companies' },
    ],
    answer: { ru: 'Явные проверяемые обоснования решений и демократический контроль над системами', en: 'Explicit, checkable justifications of decisions and democratic oversight of the systems' },
    explanation: {
      ru: 'Обоснования отвечают на эпистемическую половину вызова (решение можно проверить и оспорить), демократический контроль — на политическую (затронутые влияют на ценностные настройки).',
      en: 'Justifications answer the epistemic half (a decision can be checked and challenged); democratic oversight answers the political half (the affected shape the value settings).',
    },
  },
  {
    id: 12,
    type: 'scenario',
    question: {
      ru: 'Миссия: спорная фича модерации',
      en: 'Mission: a contested moderation feature',
    },
    answer: '',
    explanation: {
      ru: 'Рабочий вопрос из главы 5: «почему затронутый должен принять это решение?» Честные ходы — сузить автономию системы, дать обоснование и канал оспаривания, вынести ценностный выбор в прозрачную политику.',
      en: 'The working question from chapter 5: "why should an affected person accept this decision?" The honest moves: narrow the system\'s autonomy, give justification with an appeal channel, put the value choice into a transparent policy.',
    },
    scenario: {
      brief: {
        ru: 'Команда добавляет автоматическую модерацию «токсичного» политического контента: модель, обученная через RLHF, будет скрывать посты без участия человека. На ревью вы замечаете: граница «токсичного» в политической речи — предмет обоснованного разногласия.',
        en: 'A team is adding automatic moderation of "toxic" political content: an RLHF-trained model will hide posts with no human in the loop. In review you note that the boundary of "toxic" political speech is a matter of reasonable disagreement.',
      },
      constraints: [
        { ru: 'Фича нужна бизнесу — «отменить всё» не вариант', en: 'The business needs the feature — "cancel everything" is not an option' },
        { ru: 'Затронуты авторы постов, которые в обучении не участвовали', en: 'The affected are post authors who took no part in the training' },
      ],
      choices: [
        {
          text: {
            ru: 'Выкатить как есть: модель обучена на человеческих предпочтениях, значит отражает ценности людей.',
            en: 'Ship as is: the model was trained on human preferences, so it reflects human values.',
          },
          outcome: {
            ru: 'Ровно позиция, разобранная в статье: предпочтения асессоров — ни экспертиза, ни мандат. Несогласным авторам нечего предъявить, кроме «модель так сочла».',
            en: 'Exactly the position the paper dismantles: rater preferences are neither expertise nor mandate. Dissenting authors get nothing beyond "the model deemed it so".',
          },
          score: 0,
          tags: ['ship-blind'],
        },
        {
          text: {
            ru: 'Сузить автономию в спорной зоне: явная опубликованная политика, авто-скрытие только для бесспорных случаев, для спорных — обоснование решения и канал оспаривания с человеком.',
            en: 'Narrow autonomy in the contested zone: an explicit published policy, auto-hide only for uncontroversial cases, and for contested ones a stated justification plus a human appeal channel.',
          },
          outcome: {
            ru: 'Оба трека программы статьи закрыты: ценностный выбор вынесен в проверяемую политику, у затронутых есть обоснование и способ оспорить. Фича живёт, технократия — нет.',
            en: 'Both tracks of the paper\'s programme are covered: the value choice sits in a checkable policy, and the affected get justification and a way to appeal. The feature ships; the technocracy does not.',
          },
          score: 100,
          tags: ['narrow-and-justify'],
        },
        {
          text: {
            ru: 'Заменить RLHF на конституционный ИИ — явные принципы решат проблему.',
            en: 'Swap RLHF for constitutional AI — explicit principles will solve it.',
          },
          outcome: {
            ru: 'Прозрачность вырастет, но конституцию по-прежнему выбирает компания: предпосылка вместо обоснования. Двойной тест не пройден, спорная зона осталась спорной.',
            en: 'Transparency improves, but the company still picks the constitution: presupposition instead of justification. The dual test is still failed; the contested zone stays contested.',
          },
          score: 40,
          tags: ['swap-method'],
        },
        {
          text: {
            ru: 'Провести опрос пользователей платформы и обучить модель на большинстве.',
            en: 'Poll the platform\'s users and train the model on the majority view.',
          },
          outcome: {
            ru: 'Шаг к участию, но усреднение мнений не открывает моральную истину, а опрос добровольцев — ещё не справедливая процедура. Меньшинство, которое модерация заденет сильнее всех, снова без оснований принять её.',
            en: 'A step toward participation, but averaging opinions reveals no moral truth, and a volunteer poll is not yet a fair procedure. The minority hit hardest by the moderation again has no reason to accept it.',
          },
          score: 30,
          tags: ['majority-poll'],
        },
      ],
      passingScore: 70,
    },
  },
];
