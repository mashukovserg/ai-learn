"use client";

import React from 'react';
import Term from '@/components/Term';

export default function AiExistentialRiskTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: What existential risk means */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Что такое экзистенциальный риск' : 'Chapter 1: What Existential Risk Means'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Разговор о рисках ИИ обычно ведут на языке катастроф: сколько людей пострадает, насколько
                велик ущерб. Ник Бостром в работе 2013 года предложил другую рамку. Экзистенциальная
                катастрофа у него — не та, где много жертв, а та, что <strong>необратимо обрушивает
                долгосрочный потенциал человечества</strong>. Определяющие признаки — необратимость и потеря
                будущего, а не число погибших. Из этого следует неочевидное: под определение попадают
                сценарии, где человечество выживает целиком, но навсегда застревает.
              </>
            ) : (
              <>
                Discussions of AI risk usually run in the language of disaster: how many people are harmed,
                how large the damage. Nick Bostrom&apos;s 2013 paper proposed a different frame. For him an
                existential catastrophe is not one with many casualties but one that{' '}
                <strong>irreversibly collapses humanity&apos;s long-term potential</strong>. The defining
                marks are irreversibility and a lost future, not a body count. That has a non-obvious
                consequence: the definition covers scenarios where humanity survives entirely but is stuck
                forever.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Бостром различает четыре класса. <strong>Вымирание</strong> — вид полностью исчезает.{' '}
                <strong>Вечная стагнация</strong> — цивилизация выживает, но никогда не достигает
                технологической зрелости, то есть уровня возможностей, близкого к практически достижимому
                максимуму. <strong>Ущербная реализация</strong> — зрелость достигнута, но будущее устроено
                так, что теряет почти всю ценность. <strong>Последующее крушение</strong> — хорошее будущее
                построено, а затем разрушено. Классы различаются не масштабом ущерба, а тем, в какой момент
                и каким образом теряется потенциал.
              </>
            ) : (
              <>
                Bostrom distinguishes four classes. <strong>Extinction</strong> — the species disappears
                entirely. <strong>Permanent stagnation</strong> — civilisation survives but never reaches
                technological maturity, meaning a level of capability close to what is feasibly achievable.{' '}
                <strong>Flawed realisation</strong> — maturity is reached, but the future is arranged so that
                it loses almost all value. <strong>Subsequent ruination</strong> — a good future is built and
                then destroyed. The classes differ not by scale of damage but by when and how the potential
                is lost.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сам Бостром отмечает границу своего понятия: первые два класса описываются фактами, а
                <strong> два последних определяются через ценность</strong> будущего — а значит, требуют
                суждения о том, что делает будущее хорошим. Понятие экзистенциального риска поэтому отчасти
                оценочное, и разногласия здесь возможны по существу, а не по недоразумению.
              </>
            ) : (
              <>
                Bostrom himself marks the boundary of his concept: the first two classes are stated as facts,
                while <strong>the latter two are defined through the value</strong> of the future — and so
                require a judgement about what makes a future good. The notion of existential risk is
                therefore partly evaluative, and disagreement here can be substantive rather than a
                misunderstanding.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: Why it is treated as a priority */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Аргумент о приоритете и правило maxipok' : 'Chapter 2: The Priority Argument and the Maxipok Rule'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Почему из всех проблем именно эта должна быть приоритетной? Аргумент Бострома строится на
                ожидаемой ценности. Если будущее человечества потенциально огромно, то даже небольшое
                снижение вероятности его потери даёт колоссальный выигрыш в ожидании — больший, чем почти
                любое прямое благо, которое можно сделать сегодня. Отсюда практическое правило, которое
                Бостром называет <strong>maxipok</strong>: максимизируй вероятность приемлемого исхода, где
                приемлемым считается любой исход, избегающий экзистенциальной катастрофы.
              </>
            ) : (
              <>
                Why should this problem outrank the others? Bostrom&apos;s argument runs on expected value.
                If humanity&apos;s future is potentially vast, then even a small reduction in the probability
                of losing it yields an enormous gain in expectation — larger than almost any direct good
                achievable today. Hence the practical rule Bostrom calls <strong>maxipok</strong>: maximise
                the probability of an OK outcome, where an OK outcome is any outcome that avoids existential
                catastrophe.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Maxipok полезно отличать от известного принципа <strong>maximin</strong> — «выбирай действие
                с лучшим худшим случаем». Разница практическая: полностью устранить экзистенциальный риск
                невозможно, поэтому худший случай всегда остаётся катастрофическим, и maximin парализует
                выбор — все варианты выглядят одинаково плохо. Maxipok работает с вероятностями и потому
                годится для расстановки приоритетов. Сам Бостром подчёркивает, что это эвристика, а не
                абсолютный принцип: другие моральные цели никуда не исчезают.
              </>
            ) : (
              <>
                Maxipok is worth distinguishing from the familiar <strong>maximin</strong> principle — &quot;choose
                the action with the best worst case&quot;. The difference is practical: existential risk cannot be
                eliminated entirely, so the worst case always stays catastrophic and maximin paralyses choice —
                every option looks equally bad. Maxipok works with probabilities and is therefore usable for
                prioritisation. Bostrom stresses it is a rule of thumb rather than a principle of absolute
                validity: other moral ends do not disappear.
              </>
            )}
          </p>
          <div className="bg-accent-500/5 border-l-4 border-accent-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">{ru ? 'Где проходит спор' : 'Where the dispute sits'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru
                ? 'Заметьте, что этот аргумент — о приоритетах, а не о вероятности конкретной технологии. Можно принять рассуждение об ожидаемой ценности и всё равно спорить о том, насколько велик риск именно от ИИ. Это две независимые дискуссии, и их полезно не смешивать.'
                : 'Note that this argument is about priorities, not about the probability of any particular technology. One can accept the expected-value reasoning and still dispute how large the risk from AI specifically is. These are two independent discussions, and it helps to keep them apart.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: The basic AI x-risk case as a chain */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Базовый аргумент об AI-риске — три посылки' : 'Chapter 3: The Basic AI Risk Case — Three Premises'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В 2022 году Кэтья Грейс из AI Impacts сделала то, что редко делают в этом споре: аккуратно
                выписала базовый аргумент по шагам, чтобы его можно было проверять по частям. В её изложении
                он состоит из трёх посылок. Первая: сверхчеловеческие ИИ-системы вероятно будут{' '}
                <strong>целенаправленными</strong> — к этому подталкивают экономические стимулы, обучение
                может породить целенаправленность непреднамеренно, а аргументы о когерентности предполагают
                усиление этого свойства.
              </>
            ) : (
              <>
                In 2022 Katja Grace of AI Impacts did something rarely done in this debate: she wrote the
                basic case out step by step so it could be checked piece by piece. In her rendering it has
                three premises. First: superhuman AI systems will likely be <strong>goal-directed</strong> —
                economic incentives push that way, training may produce goal-directedness unintentionally,
                and coherence arguments suggest the property strengthens.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вторая посылка: такая система вероятно получит <strong>катастрофически невыровненные
                цели</strong> — полезные цели без разрушительных побочных эффектов трудно специфицировать, а
                обучение даёт не то, что задумано. Третья: невыровненная целенаправленная система вероятно{' '}
                <strong>получит контроль</strong> над будущим человечества — быстро, за счёт превосходства в
                способностях, или постепенно, накапливая влияние. Цепочка идёт от свойства системы к её целям
                и затем к последствиям.
              </>
            ) : (
              <>
                Second premise: such a system will probably have <strong>catastrophically misaligned
                goals</strong> — useful goals without destructive side effects are hard to specify, and
                training does not deliver what was intended. Third: a misaligned goal-directed system will
                likely <strong>gain control</strong> of humanity&apos;s future — rapidly, through superior
                capability, or gradually, by accumulating influence. The chain runs from a property of the
                system to its goals and then to the consequences.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Такая форма записи важнее, чем кажется. Аргумент-цепочка <strong>не сильнее своего слабейшего
                звена</strong>: если рушится любая одна посылка, вывод не следует — даже если остальные
                безупречны. Отсюда практическое следствие для любого спора о будущем: продуктивный вопрос —
                не «согласны ли вы, что ИИ опасен», а «какую именно посылку вы оспариваете».
              </>
            ) : (
              <>
                This form of presentation matters more than it seems. A chain argument is{' '}
                <strong>no stronger than its weakest link</strong>: if any single premise fails, the
                conclusion does not follow — even if the rest are impeccable. Hence a practical consequence
                for any argument about the future: the productive question is not &quot;do you agree AI is
                dangerous&quot; but &quot;which premise are you disputing&quot;.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4: Counterarguments by premise */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Контраргументы по посылкам' : 'Chapter 4: Counterarguments by Premise'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Грейс собрала около шестнадцати возражений и — что существенно — разложила их по посылкам,
                которые они атакуют. Против <strong>первой</strong> посылки: под «целенаправленностью»
                понимают разные вещи, и стимулы толкают скорее к псевдоагентности, чем к максимизации
                полезности; к тому же сила этого давления конечна, а порог опасности эмпирически неизвестен.
              </>
            ) : (
              <>
                Grace assembled roughly sixteen objections and — importantly — sorted them by the premise
                they attack. Against the <strong>first</strong> premise: &quot;goal-directedness&quot; names
                several different things, and incentives push toward pseudo-agency rather than utility
                maximisation; besides, the strength of that pressure is finite while the danger threshold is
                empirically unknown.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Против <strong>второй</strong> посылки — о целях: небольшие расхождения в функции полезности
                могут не быть катастрофическими, поскольку человеческие ценности сами занимают целую область,
                а не точку; обученные системы во многом воспроизводят обучающие данные, так что расхождение
                может остаться малым; ценность, возможно, не так хрупка, как принято считать — рассуждение о
                хрупкости смешивает пропуск целой ценности с небольшим отклонением от неё, а обучение обычно
                даёт второе. Наконец, экономические стимулы могут поощрять краткосрочные цели, тогда как
                захват будущего требует длинного горизонта.
              </>
            ) : (
              <>
                Against the <strong>second</strong> premise, about goals: small differences in a utility
                function may not be catastrophic, since human values themselves occupy a region rather than a
                point; trained systems largely reproduce their training data, so the divergence may stay
                small; value may not be as fragile as assumed — the fragility argument conflates omitting a
                value entirely with perturbing it slightly, and training usually produces the latter.
                Finally, economic incentives may favour short-term goals, whereas seizing the future requires
                a long horizon.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Против <strong>третьей</strong> посылки — о контроле: успех человечества обеспечен не
                индивидуальным интеллектом, а коллективным знанием, координацией и культурным наследованием,
                и у системы нет автоматического доступа к этому ресурсу; во многих задачах мало «запаса
                высоты» для радикального превосходства; системе, которой не доверяют, тяжелее действовать,
                даже если она способнее; связка людей с неагентными инструментами может не уступать
                агентной системе; темп роста способностей неоднозначен, а ключевые понятия — «контроль»,
                «власть», «выравнивание» — определены расплывчато.
              </>
            ) : (
              <>
                Against the <strong>third</strong> premise, about control: human success rests not on
                individual intelligence but on collective knowledge, coordination, and cultural inheritance,
                and a system has no automatic access to that resource; many domains lack the headroom for
                dramatic superiority; a system nobody trusts is handicapped even when it is more capable;
                humans combined with non-agentic tools may match an agentic system; the rate of capability
                growth is ambiguous, and key notions — &quot;control&quot;, &quot;power&quot;,
                &quot;alignment&quot; — are vaguely defined.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: How to argue productively */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Как спорить о будущем продуктивно' : 'Chapter 5: How to Argue About the Future Productively'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отдельного внимания заслуживает возражение, которое бьёт не по звену, а по всей конструкции:
                та же логика, применённая к <strong>корпорациям</strong>, даёт вывод, который мы отвергаем.
                Корпорации целенаправленны, их цели плохо согласованы с человеческими ценностями, они умнее и
                мощнее отдельного человека — но захвата будущего не произошло. Приём называется «аргумент
                доказывает слишком много». Он не опровергает вывод: он показывает, что рассуждению не хватает
                посылки, объясняющей, чем ИИ отличается от корпорации.
              </>
            ) : (
              <>
                One objection deserves separate attention because it strikes the whole construction rather
                than a link: the same logic applied to <strong>corporations</strong> yields a conclusion we
                reject. Corporations are goal-directed, their goals sit poorly with human values, and they
                are smarter and more powerful than any individual — yet no seizure of the future occurred.
                The move is called &quot;the argument proves too much&quot;. It does not refute the
                conclusion: it shows the reasoning lacks a premise explaining how AI differs from a
                corporation.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Здесь важна честность в обе стороны, и Грейс её соблюдает: она прямо оговаривает, что
                собранные возражения <strong>не доказывают безопасность</strong>. Ослабленный аргумент
                оставляет вывод под вопросом, а не опровергает его — слабый довод в пользу утверждения не
                делает утверждение ложным. Симметрично работает и обратное: серьёзность темы не является
                доводом против разбора аргументов.
              </>
            ) : (
              <>
                Honesty is required in both directions here, and Grace maintains it: she states explicitly
                that the objections she collected <strong>do not establish safety</strong>. A weakened
                argument leaves the conclusion open rather than refuting it — a weak case for a claim does
                not make the claim false. The reverse holds symmetrically: the seriousness of a topic is no
                argument against scrutinising the reasoning.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Практический навык, который стоит унести из этой комнаты, шире темы ИИ. Столкнувшись с
                утверждением о будущем, разложите его на посылки; выясните, какую из них оспаривает
                собеседник; спросите, что конкретно изменило бы его оценку. Часто обнаруживается, что стороны
                спорят о разных звеньях и потому не могут сойтись, обмениваясь примерами. Локализация
                разногласия не решает вопрос, но превращает бесплодный обмен мнениями в проверяемую задачу.
              </>
            ) : (
              <>
                The practical skill worth taking from this room is broader than AI. When you meet a claim
                about the future, break it into premises; find out which one your counterpart disputes; ask
                what specifically would change their estimate. Often it turns out the sides are arguing about
                different links and therefore cannot converge by trading examples. Locating the disagreement
                does not settle the question, but it turns a fruitless exchange of opinions into a checkable
                task.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-5 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
              {ru ? 'Источники' : 'Sources'}
            </p>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>
                Bostrom, N. (2013). &quot;Existential Risk Prevention as Global Priority&quot;.{' '}
                <em>Global Policy</em> 4(1), 15–31.{' '}
                <a
                  href="https://doi.org/10.1111/1758-5899.12002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1111/1758-5899.12002
                </a>
              </li>
              <li>
                Grace, K. (2022). &quot;Counterarguments to the basic AI x-risk case&quot;. AI Impacts, 31{' '}
                {ru ? 'августа' : 'August'} 2022.{' '}
                <a
                  href="https://aiimpacts.org/counterarguments-to-the-basic-ai-x-risk-case/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  aiimpacts.org
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-accent-500/5 border-l-4 border-accent-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">{ru ? 'Куда дальше' : 'Where to Go Next'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru
                ? 'Сама идея сингулярности, лагеря спорящих и физические ограничения разобраны в комнате «Сингулярность в AI-дебатах». Техническая сторона — как вообще пытаются выравнивать модели — в комнате «Выравнивание AI».'
                : 'The singularity idea itself, the opposing camps, and physical limits are covered in the "Singularity in AI Debates" room. The technical side — how alignment is actually attempted — is in the "AI Alignment" room.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
