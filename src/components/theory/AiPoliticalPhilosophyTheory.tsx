"use client";

import React from 'react';
import Term from '@/components/Term';

const SourceLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-accent-300 underline decoration-accent-500/40 underline-offset-4 hover:text-accent-200">
    {children}
  </a>
);

export default function AiPoliticalPhilosophyTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Когда технология становится политической' : 'Chapter 1: When Technology Becomes Political'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Политическая философия спрашивает не только, что государству разрешено делать, но и кто вправе устанавливать обязательные правила, как распределяются выгоды и риски и почему гражданин должен принять решение, с которым не согласен. ИИ входит в эту область задолго до появления «робота-президента». Модель найма сортирует доступ к работе, рекомендательная система распределяет видимость политической речи, кредитный скоринг — возможности, а генеративный помощник — внимание и знание. Во всех случаях техническая классификация меняет положение людей относительно друг друга. Поэтому первый вопрос комнаты не «умен ли алгоритм?», а «какие отношения власти он создаёт или укрепляет?».</>
            ) : (
              <>Political philosophy asks not only what states may do, but who may set binding rules, how benefits and risks are distributed, and why a citizen should accept a decision they reject. AI enters this domain long before any “robot president” appears. A hiring model sorts access to work, a recommender distributes the visibility of political speech, a credit score distributes opportunity, and a generative assistant distributes attention and knowledge. In each case a technical classification changes how people stand in relation to one another. The first question in this room is therefore not “is the algorithm intelligent?” but “what relations of power does it create or reinforce?”</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Полезно различать способность и полномочие. Система может точнее чиновника предсказывать риск мошенничества — это эпистемическое преимущество. Но из точности не следует право отказать человеку в пособии без объяснения или апелляции. Здесь возникает <Term id="political-legitimacy" lang={lang}>политическая легитимность</Term>: основания считать осуществление власти оправданным для тех, кто ей подчинён. Эффективность отвечает на вопрос «достигает ли система цели?», легитимность — «кто выбрал цель, по каким правилам и перед кем отвечает?». Хорошая технология может служить нелегитимному порядку; справедливая процедура может отвергнуть эффективный, но неприемлемый инструмент.</>
            ) : (
              <>It helps to distinguish capacity from authority. A system may predict benefit fraud more accurately than an official; that is an epistemic advantage. Accuracy does not by itself create a right to deny someone support without explanation or appeal. This is where <Term id="political-legitimacy" lang={lang}>political legitimacy</Term> enters: reasons for regarding an exercise of power as justified to those subject to it. Efficiency asks “does the system achieve its objective?” Legitimacy asks “who chose the objective, under what rules, and accountable to whom?” A good technology can serve an illegitimate order; a fair procedure can reject an efficient but unacceptable tool.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Эта рамка не объявляет всякое влияние политическим насилием. Важны масштаб, зависимость и возможность выхода. Рекомендация фильма и автоматический отказ в визе обе классифицируют человека, но ставки, обязательность и путь оспаривания различаются. Чем сильнее решение влияет на права и базовые возможности и чем труднее от него отказаться, тем сильнее требование публичного контроля. Этот принцип проявился и в <SourceLink href="https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence">Рамочной конвенции Совета Европы об ИИ</SourceLink>: она связывает жизненный цикл систем с правами человека, демократией и верховенством права, а не только с качеством модели.</>
            ) : (
              <>This framework does not call every influence political coercion. Scale, dependence, and the possibility of exit matter. A film recommendation and an automated visa refusal both classify a person, but their stakes, binding force, and routes of challenge differ. The more a decision affects rights and basic opportunities, and the harder it is to escape, the stronger the demand for public control. The same principle appears in the <SourceLink href="https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence">Council of Europe Framework Convention on AI</SourceLink>, which connects the whole system lifecycle to human rights, democracy, and the rule of law rather than model quality alone.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? <>Отсюда рабочая единица анализа — не модель сама по себе, а социотехнический институт: модель, данные, оператор, правило применения, организация и способ защиты. Одна и та же модель может помогать врачу подготовить заключение или автоматически закрывать доступ к лечению; политическое значение задаёт не архитектура, а место системы в цепочке решения. Этот сдвиг защищает от двух упрощений: считать нейтральным всё техническое и, наоборот, приписывать алгоритму самостоятельную волю там, где власть сохранили люди и организации.</> : <>The proper unit of analysis is therefore not the model alone but a sociotechnical institution: model, data, operator, deployment rule, organization, and remedy. The same model can help a doctor prepare an opinion or automatically close access to treatment; its political meaning comes from its place in the decision chain, not its architecture. This shift avoids two simplifications: treating everything technical as neutral, and attributing independent will to an algorithm where people and organizations still hold the power.</>}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Свобода — отсутствие вмешательства или господства?' : 'Chapter 2: Freedom — Non-interference or Non-domination?'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Классическая либеральная традиция часто начинает со свободы как защищённой сферы выбора. В знаменитом различении Исайи Берлина негативная свобода означает отсутствие чужого вмешательства, а позитивная — способность быть автором собственной жизни. ИИ усложняет обе стороны. Фильтр может не запрещать читать политический текст, но сделать его практически невидимым. Персональный помощник может расширить способность действовать — перевести документ, подготовить обращение, объяснить закон — и одновременно незаметно сузить набор вариантов, если оптимизирует поведение под интересы платформы. Поэтому формального «кнопка не заблокирована» недостаточно для оценки свободы.</>
            ) : (
              <>The classical liberal tradition often begins with freedom as a protected sphere of choice. In Isaiah Berlin’s influential distinction, negative liberty is freedom from another’s interference, while positive liberty concerns the capacity to be the author of one’s life. AI complicates both. A filter need not forbid access to political writing; it can make the writing practically invisible. A personal assistant can expand agency by translating a document, drafting an appeal, or explaining a law, while quietly narrowing the menu of options if it optimizes behaviour for the platform’s interests. A formal claim that “the button was never disabled” is therefore insufficient to assess freedom.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Республиканская традиция добавляет третью линзу: свободу как <Term id="non-domination" lang={lang}>не-господство</Term>. Несвободен не только тот, кому уже помешали, но и тот, кто живёт под произвольной властью другого. Добрый хозяин может никогда не вмешаться в жизнь зависимого человека, однако сама неконтролируемая способность вмешаться создаёт господство. Для ИИ это различие особенно важно: платформа может сегодня не понижать политические сообщения, работодатель — не использовать чувствительный признак, государство — не объединять базы наблюдения. Если правила можно односторонне поменять, а затронутые не могут потребовать обоснования, отсутствие сегодняшнего вреда ещё не означает свободы.</>
            ) : (
              <>The republican tradition adds a third lens: freedom as <Term id="non-domination" lang={lang}>non-domination</Term>. A person is unfree not only when interference has occurred, but when they live under another’s arbitrary power. A benevolent master may never interfere with a dependent person, yet the uncontrolled capacity to interfere still constitutes domination. This distinction is especially useful for AI. A platform may not demote political posts today, an employer may not use a sensitive attribute, and a state may not combine surveillance databases. If the rules can be changed unilaterally and affected people cannot demand justification, the absence of present harm does not yet amount to freedom.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Практический тест свободы состоит из четырёх вопросов: знает ли человек, что система влияет на выбор; может ли он отказаться без чрезмерной цены; способен ли понять существенную логику; и есть ли институт, который ограничивает произвольное изменение правил? Простая персонализация музыки обычно проходит тест легче, чем профилирование получателей социальных выплат. Это не потому, что государственный алгоритм обязательно хуже частного, а потому, что зависимость выше и выход труднее. Политическая философия переводит разговор от абстрактной «этичности алгоритма» к устройству отношений: кто зависит, кто может вмешаться и кто контролирует контролёра.</>
            ) : (
              <>A practical freedom test has four questions: does the person know the system shapes their options; can they refuse without an excessive cost; can they understand the consequential logic; and is there an institution that constrains arbitrary rule changes? Music personalization will usually pass more easily than profiling welfare recipients. This is not because a public-sector algorithm is necessarily worse than a private one, but because dependence is greater and exit is harder. Political philosophy moves the discussion from an abstract “ethical algorithm” to the structure of relationships: who depends, who may intervene, and who controls the controller.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? <>При этом помощь и патернализм различаются не намерением разработчика, а контролем пользователя. Помощник может предлагать безопасный вариант, если человек видит рекомендацию как рекомендацию, способен узнать её основания и выбрать иначе. Патерналистская система скрывает альтернативы или делает отказ настолько дорогим, что формальный выбор теряет смысл. В политическом дизайне важна не максимальная автономия в любой ситуации, а пропорциональность: чем сильнее ограничение, тем серьёзнее должны быть публичная цель, доказательство необходимости и защита от произвола.</> : <>Assistance and paternalism differ not by the developer’s good intention but by the user’s control. An assistant may recommend a safer option when the person can recognize it as advice, learn its reasons, and choose otherwise. A paternalistic system hides alternatives or makes refusal so costly that formal choice loses meaning. Political design does not demand maximal autonomy in every situation; it demands proportionality. The stronger the restriction, the stronger the public objective, evidence of necessity, and safeguards against arbitrariness must be.</>}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Справедливость — кому достаются выгоды и риски' : 'Chapter 3: Justice — Who Receives the Benefits and Risks'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Для утилитаризма привлекательна система, которая увеличивает суммарное благополучие: быстрее ставит диагнозы, дешевле распределяет услуги, предотвращает больше нарушений. Но сумма может скрыть распределение. Если автоматизация приносит большой выигрыш большинству и систематически ошибается на небольшой уязвимой группе, агрегат всё ещё может выглядеть положительно. Деонтологическая критика напоминает, что у людей есть права и статус, которые нельзя просто обменять на общий прирост эффективности. ИИ делает старый конфликт наглядным: оптимизационная функция легко считает среднее, но политическое сообщество должно решить, какие потери вообще допустимо складывать с чужими выгодами.</>
            ) : (
              <>A utilitarian may favour a system that increases total welfare: it diagnoses faster, distributes services more cheaply, or prevents more violations. Yet a total can conceal its distribution. If automation greatly benefits a majority while systematically failing a small vulnerable group, the aggregate may still look positive. A deontological objection reminds us that persons have rights and standing that cannot simply be traded for an overall efficiency gain. AI makes this old conflict visible: an objective function can readily calculate an average, but a political community must decide which losses may be balanced against benefits enjoyed by someone else.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Джон Ролз предлагает мысленный эксперимент первоначального положения: выбирать принципы общества за «завесой неведения», не зная своего класса, здоровья, происхождения или талантов. Применяя его к ИИ, мы не знаем, окажемся ли владельцем модели, работником, чей труд автоматизируют, человеком из плохо представленной в данных группы или получателем решения. Такая перспектива не выдаёт готовый закон, но меняет бремя доказательства. Недостаточно показать рост среднего качества. Нужно спросить, приемлем ли порядок для тех, кому достанется худшая позиция, и улучшает ли неравенство их положение, а не только положение победителей.</>
            ) : (
              <>John Rawls asks us to choose principles of society from an original position behind a “veil of ignorance,” without knowing our class, health, background, or talents. Applied to AI, we do not know whether we will own a model, lose work to automation, belong to a group poorly represented in the data, or receive a consequential automated decision. The device does not output a ready-made statute, but it changes the burden of proof. Showing an increase in average performance is not enough. We must ask whether the arrangement is acceptable to those who receive the worst position and whether inequality improves their prospects rather than merely those of the winners.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Современная политика ИИ добавляет материальные слои: кто контролирует вычисления и данные, чей труд размечает обучающие наборы, какие языки получают качественные модели, кто потребляет энергию и где остаётся экологическая цена. Рекомендация <SourceLink href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics">ЮНЕСКО по этике ИИ</SourceLink> связывает справедливость с недискриминацией, разнообразием, доступностью выгод и оценкой воздействия в течение жизненного цикла. Это полезнее узкого теста «одинакова ли точность по группам»: политическая справедливость рассматривает не только выход модели, но и институт производства — собственность, труд, инфраструктуру и распределение права определять цели.</>
            ) : (
              <>Contemporary AI politics adds material layers: who controls compute and data, whose labour labels training sets, which languages receive capable models, who consumes energy, and where environmental costs remain. The <SourceLink href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics">UNESCO Recommendation on the Ethics of AI</SourceLink> connects fairness with non-discrimination, diversity, access to benefits, and lifecycle impact assessment. This is broader than asking whether accuracy is equal across groups. Political justice examines not only model outputs but the institution of production: ownership, labour, infrastructure, and the distribution of authority to define the goals.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? <>Разные теории справедливости могут рекомендовать разные решения, и это ожидаемо. Утилитарист может принять небольшой неравный риск ради большого общего выигрыша; сторонник строгих прав поставит предел даже выгодной агрегации; ролзианец спросит, оправдано ли неравенство перед наименее обеспеченным. Задача команды — не спрятать выбор за метрикой fairness, а назвать нормативное правило, показать распределение последствий и указать, кто уполномочен разрешить конфликт между правилами. Метрика измеряет выбранное понятие справедливости, но не выбирает его за общество.</> : <>Different theories of justice may recommend different decisions, and that is expected. A utilitarian may accept a small unequal risk for a large general gain; a rights theorist may set a limit even on beneficial aggregation; a Rawlsian asks whether inequality is justifiable to the least advantaged. A team should not hide this choice behind a fairness metric. It should name the normative rule, show the distribution of consequences, and identify who is authorized to resolve conflicts between rules. A metric measures a chosen conception of fairness; it does not choose one for society.</>}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Легитимность, публичный разум и право на спор' : 'Chapter 4: Legitimacy, Public Reason, and the Right to Disagree'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>В плюралистическом обществе разумные люди не совпадут в религии, морали или представлении о хорошей жизни. Поэтому Ролз связывает легитимное применение политической власти с <Term id="public-reason" lang={lang}>публичным разумом</Term>: при решении фундаментальных вопросов гражданам предлагают основания, доступные как политические аргументы, а не требуют принять конкретное мировоззрение. Для ИИ это означает, что фраза «так решила модель» не является публичным основанием. Не является им и ссылка на коммерческую тайну. Обоснование должно связывать цель, релевантные признаки, правило решения и допустимые ограничения с нормами, которые затронутый может проверить и оспорить.</>
            ) : (
              <>In a pluralist society, reasonable people will not converge on religion, morality, or a single conception of the good life. Rawls therefore connects legitimate political power with <Term id="public-reason" lang={lang}>public reason</Term>: on fundamental questions, citizens should be offered reasons available as political arguments rather than required to accept one worldview. For AI, “the model decided” is not a public reason. Neither is an appeal to trade secrecy. A justification must connect the objective, relevant features, decision rule, and acceptable constraints to norms that an affected person can inspect and contest.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Юрген Хабермас переносит центр тяжести с правильного результата на условия обсуждения: норма претендует на легитимность, когда затронутые могли бы участвовать в свободном и равном обсуждении. Реальное участие никогда не идеально, но идея обнаруживает подмены. Фокус-группа из удобных пользователей, краудсорсинговая разметка и опрос в интерфейсе ещё не демократия: неизвестно, кого исключили, кто задал варианты и как ответы повлияли на решение. Участие становится политически значимым, когда есть представительство затронутых, информация, время для возражения, влияние на итог и отчёт о том, почему часть требований отклонена.</>
            ) : (
              <>Jürgen Habermas shifts attention from a correct outcome to the conditions of discussion: a norm can claim legitimacy when those affected could participate in free and equal deliberation. Actual participation is never ideal, but the idea exposes substitutes. A convenient user focus group, crowdsourced labels, and an in-product poll are not yet democracy: we do not know who was excluded, who framed the options, or how answers changed the decision. Participation becomes politically meaningful when affected groups are represented, receive information and time to object, can influence the outcome, and can see why some demands were rejected.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Отсюда практический принцип <Term id="contestability" lang={lang}>оспоримости</Term>. Объяснение сообщает, как получен результат; оспоримость даёт возможность добиться пересмотра результата или самого правила. Она требует уведомления об использовании ИИ, понятного основания решения, доступа к значимым данным, компетентного адресата жалобы и реального средства исправления. Именно такой переход от прозрачности к средству защиты закрепляет Рамочная конвенция Совета Европы: информации должно быть достаточно, чтобы оспорить решение и использование системы, а жалобу — возможно подать ответственному органу. Кнопка «узнать больше» без полномочия изменить исход — информирование, но не контроль.</>
            ) : (
              <>This yields the practical principle of <Term id="contestability" lang={lang}>contestability</Term>. An explanation tells someone how an outcome arose; contestability gives them a route to revise the outcome or the rule itself. It requires notice that AI was used, an intelligible reason, access to consequential data, a competent recipient for complaints, and an effective remedy. The Council of Europe Convention makes this move from transparency to remedy: information should be sufficient to challenge both a decision and the use of the system, while a complaint must reach a responsible authority. A “learn more” button with no power to change the outcome informs, but does not control.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? <>Оспоримость проверяет и качество участия после запуска. До внедрения невозможно предвидеть все группы и виды ущерба; жалобы показывают, где публичное обоснование не выдерживает реального опыта. Поэтому апелляция — не аварийная заплатка, а канал обучения института. Но этот канал работает только при обратной связи: повторяющиеся жалобы должны менять данные, пороги или само правило, а не закрываться индивидуальными исключениями. Так несогласный становится участником управления, а не источником шума для службы поддержки.</> : <>Contestability also tests the quality of participation after deployment. No pre-launch process can foresee every affected group and form of harm; complaints reveal where a public justification fails against lived experience. Appeal is therefore not an emergency patch but a channel through which an institution learns. The channel works only with feedback: recurring complaints must change data, thresholds, or the rule itself rather than disappear into individual exceptions. The dissenter then becomes a participant in governance, not noise for customer support.</>}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Демократическое управление ИИ' : 'Chapter 5: Democratic Governance of AI'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Демократии сталкиваются с двойной задачей. Они должны управлять системами, применяемыми государством, и одновременно ограничивать частную инфраструктурную власть: модели, облака, рекламные рынки и платформы, от которых зависит публичная сфера. Выбор между «регулировать» и «не регулировать» слишком груб. Нужна карта институтов: парламент задаёт права и пределы, независимый регулятор проверяет соблюдение, суд предоставляет средство защиты, аудиторы исследуют систему, гражданское общество представляет затронутых, а разработчик отвечает за документацию и исправление. «Человек в контуре» не заменяет эту цепочку, если человек лишь нажимает кнопку без времени, данных и полномочий.</>
            ) : (
              <>Democracies face a double task. They must govern systems used by the state while constraining private infrastructural power: models, clouds, advertising markets, and platforms on which the public sphere depends. The choice between “regulate” and “do not regulate” is too crude. We need an institutional map: legislatures define rights and limits, independent regulators inspect compliance, courts provide remedies, auditors investigate systems, civil society represents affected groups, and developers remain responsible for documentation and repair. A “human in the loop” cannot replace this chain when the human merely clicks approve without time, evidence, or authority.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Демократический контроль не требует голосовать за каждый параметр модели. Решения различаются по уровню. Инженеры могут выбирать архитектуру в пределах публично установленных ограничений; организация — процедуру тестирования; регулятор — стандарты доказательности; граждане и их представители — цели, права и красные линии. Ошибка технократии — представить ценностный выбор как чистую оптимизацию. Обратная ошибка — вынести технический вопрос на плебисцит без знаний и вариантов. Хорошее управление соединяет экспертизу с подотчётностью: специалист объясняет последствия, но не получает автоматического права определять общественную цель.</>
            ) : (
              <>Democratic control does not require a vote on every model parameter. Decisions operate at different levels. Engineers may choose architecture within publicly established constraints; an organization may choose a testing procedure; a regulator may set evidentiary standards; citizens and representatives determine objectives, rights, and red lines. Technocracy errs by presenting value choices as pure optimization. The reverse error is to send a technical question to a plebiscite without knowledge or meaningful options. Good governance joins expertise to accountability: the expert explains consequences but does not thereby acquire the right to define the public objective.</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>Финальный аудит объединяет пять традиций. Утилитарный вопрос: каковы совокупные последствия? Либеральный: какие права и сферы выбора защищены? Республиканский: есть ли произвольная власть и зависимость? Ролзианский: что получит человек в худшей позиции? Делиберативный: могли ли затронутые участвовать и получить публичное обоснование? Ни одна линза не решает всё, но вместе они не дают разговору схлопнуться до accuracy и compliance. В отчёте <SourceLink href="https://www.unesco.org/en/articles/artificial-intelligence-and-democracy">ЮНЕСКО об ИИ и демократии</SourceLink> та же проблема рассматривается через публичную дискуссию, политику данных и алгоритмическое управление. Политическая философия превращает эти темы в проверяемый вопрос: кто вправе решить — и что должен получить несогласный?</>
            ) : (
              <>A final audit combines five traditions. The utilitarian asks about aggregate consequences. The liberal asks which rights and spheres of choice are protected. The republican looks for arbitrary power and dependence. The Rawlsian asks what happens to the person in the worst position. The deliberative democrat asks whether affected people could participate and receive a public justification. No lens settles everything, but together they prevent the debate from collapsing into accuracy and compliance. A <SourceLink href="https://www.unesco.org/en/articles/artificial-intelligence-and-democracy">UNESCO report on AI and democracy</SourceLink> similarly examines public conversation, data politics, and algorithmic governance. Political philosophy turns those themes into a testable question: who may decide, and what is owed to the dissenter?</>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? <>Итогом аудита должен быть не философский ярлык, а карта ответственности. В ней названы цель, затронутые группы, допустимые основания, распределение выгод и ошибок, владелец каждого решения, процедура участия и путь пересмотра. Такая карта допускает честный вывод «систему пока нельзя легитимно применять», даже если демо впечатляет. Она допускает и положительный вывод, когда автоматизация расширяет возможности, остаётся под контролем и исправляет ошибки. Политическая философия здесь не тормоз инноваций, а язык, на котором общество задаёт им условия.</> : <>The audit should end not with a philosophical label but with a map of responsibility. It names the objective, affected groups, admissible reasons, distribution of benefits and errors, owner of each decision, participation procedure, and route of review. Such a map allows the honest conclusion that a system cannot yet be deployed legitimately even when its demo is impressive. It also allows a positive conclusion when automation expands capability, remains under control, and repairs mistakes. Political philosophy is not a brake on innovation here; it is the language in which a society sets innovation’s terms.</>}
          </p>
        </div>
      </section>
    </div>
  );
}
