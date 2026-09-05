"use client";

import React from 'react';
import Term from '@/components/Term';

export default function AiAlignmentLimitsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: Alignment as a normative problem */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Выравнивание как нормативная проблема' : 'Chapter 1: Alignment as a Normative Problem'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Техническая надёжность и безопасность — не одно и то же. Ник Шустер и Дэниел Килов
                открывают свою работу 2025 года примером: система распознавания лиц может быть безупречно
                надёжной — и при этом глубоко опасной, если авторитарное правительство использует её против
                несогласных. Система безопасна, только если она приемлема с точки зрения тех, за кем следят,
                а не только тех, кто следит. Отсюда их формулировка задачи{' '}
                <Term id="value-alignment" lang={lang}>выравнивания ценностей</Term>: у каждого, кого
                затрагивают решения системы, должно быть <strong>основание принять её выводы</strong>.
              </>
            ) : (
              <>
                Technical reliability and safety are not the same thing. Nick Schuster and Daniel Kilov open
                their 2025 paper with an example: a face-recognition system can be flawlessly reliable — and
                deeply dangerous, if an authoritarian government uses it against dissidents. A system is safe
                only if it is acceptable from the point of view of the surveilled, not just the surveillants.
                Hence their framing of <Term id="value-alignment" lang={lang}>value alignment</Term>: everyone
                affected by a system&apos;s decisions must have <strong>good reason to accept its
                outputs</strong>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Трудность возникает там, где решения <strong>морально спорны</strong>. Обоснованное моральное
                разногласие — это не спор невежд: разумные, информированные, добросовестные люди устойчиво
                расходятся в вопросах вроде эвтаназии, распределения донорских органов или границ допустимой
                модерации. Такое разногласие не рассасывается от добавления фактов — оно касается самих
                ценностей.
              </>
            ) : (
              <>
                The difficulty arises where decisions are <strong>morally controversial</strong>. Reasonable
                moral disagreement is not a quarrel of the ignorant: reasonable, informed, good-faith people
                persistently diverge on questions like euthanasia, organ allocation, or the limits of
                acceptable moderation. Adding facts does not dissolve this kind of disagreement — it concerns
                the values themselves.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Центральный инструмент статьи — различение <strong>двух видов оснований</strong>, по которым
                человек может принять спорное решение системы. <strong>Эпистемическое</strong> основание:
                есть причины считать, что система судит верно — как мы принимаем диагноз врача, опираясь на
                его экспертизу. <strong>Политическое</strong> основание: решение произведено справедливой
                процедурой, в которой затронутые участвовали — как мы принимаем результат честных выборов,
                даже проиграв.
              </>
            ) : (
              <>
                The paper&apos;s central instrument is the distinction between <strong>two kinds of
                reasons</strong> a person can have for accepting a system&apos;s controversial output. An{' '}
                <strong>epistemic</strong> reason: there are grounds to think the system judges correctly —
                the way we accept a doctor&apos;s diagnosis on the strength of their expertise. A{' '}
                <strong>political</strong> reason: the decision came out of a fair procedure in which the
                affected participated — the way we accept the result of an honest election even when our side
                loses.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Тезис статьи, который мы разберём по шагам: три ведущих подхода к выравниванию — краудсорсинг
                моральных суждений, RLHF и конституционный ИИ — не дают <strong>ни того, ни другого</strong>
                основания для морально спорных решений. Это и есть «двойной вызов» из заголовка: провал по
                эпистемической линии и провал по политической. Дальше — по одному подходу за раз.
              </>
            ) : (
              <>
                The paper&apos;s thesis, which we unpack step by step: the three leading alignment approaches
                — crowdsourcing moral judgments, RLHF, and constitutional AI — provide{' '}
                <strong>neither kind</strong> of reason for morally controversial outputs. That is the
                &quot;dual challenge&quot; of the title: a failure on the epistemic line and a failure on the
                political one. From here, one approach at a time.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: Crowdsourcing morality */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Краудсорсинг морали — Delphi и Moral Machine' : 'Chapter 2: Crowdsourcing Morality — Delphi and the Moral Machine'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первый подход — обучить модель на моральных суждениях большого числа людей.{' '}
                <strong>Delphi</strong> — исследовательская система на базе LLM, дообученная на банке
                человеческих суждений: пользователь вводит «есть мясо» или «солгать другу», система отвечает
                «это нормально» или «это плохо». <strong>Moral Machine</strong> — эксперимент MIT, собравший
                миллионы ответов о дилеммах беспилотного автомобиля: кого спасать, если столкновение
                неизбежно.
              </>
            ) : (
              <>
                The first approach trains a model on the moral judgments of many people.{' '}
                <strong>Delphi</strong> is a research system built on an LLM and fine-tuned on a bank of human
                judgments: the user types &quot;eating meat&quot; or &quot;lying to a friend&quot;, and the
                system replies &quot;it&apos;s okay&quot; or &quot;it&apos;s wrong&quot;.{' '}
                <strong>The Moral Machine</strong> is an MIT experiment that collected millions of answers to
                self-driving-car dilemmas: whom to spare when a crash is unavoidable.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Почему кажется, что это должно работать? По аналогии с распознаванием речи и изображений: те
                системы тоже учатся на разметке крауд-воркеров — и честно становятся экспертами. Шустер и
                Килов показывают, где аналогия ломается. Система распознавания речи не предсказывает,{' '}
                <em>что сказал бы типичный разметчик</em>, — она определяет, <strong>что реально
                произнесено</strong>: за разметкой стоит независимый факт, и агрегация суждений к нему
                сходится.
              </>
            ) : (
              <>
                Why does this seem like it should work? By analogy with speech and image recognition: those
                systems also learn from crowdworker labels — and genuinely become experts. Schuster and Kilov
                show where the analogy breaks. A speech-recognition system does not predict{' '}
                <em>what a typical annotator would say</em> — it determines <strong>what was actually
                said</strong>: an independent fact stands behind the labels, and aggregated judgments converge
                on it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У морально спорных вопросов такого независимого факта, к которому сходилась бы агрегация, в
                распоряжении системы нет. «Мудрость толпы» работает, когда ошибки участников случайны и
                усредняются вокруг истины — угадывание веса быка на ярмарке. Но при обоснованном разногласии
                расхождение суждений — не шум вокруг правильного ответа, а само содержание спора. Усреднение
                позиций по эвтаназии не открывает моральную истину — оно фиксирует распределение мнений.
              </>
            ) : (
              <>
                For morally controversial questions, no such independent fact is available for the aggregation
                to converge on. The &quot;wisdom of the crowd&quot; works when individual errors are random
                and average out around the truth — guessing an ox&apos;s weight at a fair. Under reasonable
                disagreement, the divergence of judgments is not noise around a right answer; it is the very
                content of the dispute. Averaging positions on euthanasia does not reveal a moral truth — it
                records a distribution of opinions.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Итог по эпистемической линии: обучение на агрегированных моральных суждениях делает систему
                экспертом по тому, <strong>что люди склонны говорить</strong> о морали, а не по тому,{' '}
                <strong>что морально верно</strong>. Это не мелочь: именно предсказание типичного суждения
                Delphi и выдаёт — вместе с типичными для выборки предрассудками.
              </>
            ) : (
              <>
                The epistemic upshot: training on aggregated moral judgments makes a system an expert on{' '}
                <strong>what people tend to say</strong> about morality, not on <strong>what is morally
                correct</strong>. This is no small point: predicting the typical judgment is exactly what
                Delphi outputs — along with the biases typical of its sample.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3: The dual challenge */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Двойной вызов — эпистемика и политика' : 'Chapter 3: The Dual Challenge — Epistemics and Politics'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Интересно, что сами авторы краудсорсинговых систем от эпистемической претензии отступают.
                Создатели Delphi описывают цель как «учить машины моральному чутью, пока человечество
                продолжает с ним разбираться», а авторы Moral Machine называют его «инструментом вовлечения
                публики», позволяющим «решать как сообщество, что мы считаем правильным». То есть защита
                смещается на <strong>политическую</strong> линию: пусть это не моральная экспертиза, зато
                похоже на демократию.
              </>
            ) : (
              <>
                Tellingly, the builders of crowdsourced systems retreat from the epistemic claim themselves.
                Delphi&apos;s creators describe the goal as &quot;teaching machines moral sense, while
                humanity continues to grapple with it&quot;, and the Moral Machine&apos;s authors call it
                &quot;a tool that empowers public engagement&quot;, letting us &quot;decide, as a community,
                what we believe to be right or wrong&quot;. The defence shifts to the{' '}
                <strong>political</strong> line: perhaps not moral expertise, but something like democracy.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Здесь срабатывает вторая половина вызова. Политическую легитимность даёт не любое участие
                людей, а <strong>справедливая процедура, в которой участвуют затронутые</strong>. Выборка
                крауд-воркеров и посетителей сайта — не электорат: она никем не уполномочена, никому не
                подотчётна и не совпадает с теми, на кого решения системы повлияют. У процедуры есть{' '}
                <strong>облик демократии</strong> — участие, голоса, агрегация — без её сути.
              </>
            ) : (
              <>
                Here the second half of the challenge bites. Political legitimacy comes not from any human
                participation but from a <strong>fair procedure involving those affected</strong>. A sample of
                crowdworkers and website visitors is not an electorate: it is authorized by no one,
                accountable to no one, and does not coincide with the people the system&apos;s decisions will
                affect. The procedure has the <strong>guise of democracy</strong> — participation, votes,
                aggregation — without its substance.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сведём двойной вызов в одну таблицу рассуждения. Чтобы принять морально спорный вывод системы,
                мне нужно либо эпистемическое основание — «система судит лучше меня», либо политическое —
                «решение произведено легитимной процедурой». Краудсорсинг не даёт первого (агрегация мнений —
                не экспертиза) и не даёт второго (выборка — не легитимная процедура). Значит, у того, кто
                обоснованно не согласен с выводом, <strong>нет причин его принимать</strong>.
              </>
            ) : (
              <>
                Put the dual challenge in one line of reasoning. To accept a system&apos;s morally
                controversial output I need either an epistemic reason — &quot;the system judges better than
                I do&quot; — or a political one — &quot;the decision came from a legitimate procedure&quot;.
                Crowdsourcing supplies neither: aggregated opinion is not expertise, and the sample is not a
                legitimate procedure. So someone who reasonably disagrees with the output has{' '}
                <strong>no reason to accept it</strong>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Обратите внимание на форму аргумента — она та же, что в комнате об экзистенциальном риске:
                вывод держится на конкретных посылках, и спорить продуктивно — значит указывать, какая посылка
                не работает. Здесь посылки такие: (1) спорное решение требует основания; (2) основания бывают
                двух видов; (3) данный метод не даёт ни одного из двух. Кто хочет защитить краудсорсинг,
                должен атаковать одну из трёх — например, показать процедуру, которая всё-таки легитимна.
              </>
            ) : (
              <>
                Note the argument&apos;s shape — the same as in the existential-risk room: the conclusion
                rests on specific premises, and productive disagreement means pointing at the premise that
                fails. Here they are: (1) a controversial decision needs a reason; (2) reasons come in two
                kinds; (3) this method supplies neither kind. A defender of crowdsourcing must attack one of
                the three — for instance, by exhibiting a procedure that actually is legitimate.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4: RLHF and Constitutional AI under the same test */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: RLHF и конституционный ИИ под тем же тестом' : 'Chapter 4: RLHF and Constitutional AI Under the Same Test'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Может быть, современные промышленные методы устроены лучше? <Term id="rlhf" lang={lang}>RLHF</Term>{' '}
                обучает модель на предпочтениях людей-асессоров, сравнивающих пары ответов. Но под двойным
                тестом это тот же краудсорсинг с меньшей выборкой: предпочтения нанятых подрядчиков не делают
                систему моральным экспертом и не образуют процедуру, уполномоченную затронутыми. Механика
                метода разобрана в комнате «Alignment: Выравнивание ИИ» — здесь нас интересует только вопрос
                обоснования.
              </>
            ) : (
              <>
                Perhaps modern industrial methods fare better? <Term id="rlhf" lang={lang}>RLHF</Term> trains a
                model on the preferences of human raters comparing pairs of answers. Under the dual test,
                though, it is crowdsourcing with a smaller sample: the preferences of hired contractors
                neither make the system a moral expert nor constitute a procedure authorized by the affected.
                The mechanics are covered in the &quot;AI Alignment &amp; RLHF&quot; room — here only the
                question of justification concerns us.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <strong>Конституционный ИИ</strong> — подход Anthropic — устроен иначе: модель обучается
                следовать явному списку принципов. Сначала базовую модель провоцируют на вредные ответы, из
                них делают обучающие данные, затем модель сама критикует и переписывает свои ответы по
                конституции, и вторая фаза выполняется уже без человека. Шустер и Килов честно фиксируют
                достоинство: <strong>ценности сделаны явными</strong> — видно, с чем именно систему
                выравнивают. Это реальный шаг вперёд по прозрачности относительно RLHF.
              </>
            ) : (
              <>
                <strong>Constitutional AI</strong> — Anthropic&apos;s approach — works differently: the model
                is trained to follow an explicit list of principles. A base model is first red-teamed into
                harmful responses, which become training data; the model then critiques and rewrites its own
                answers against the constitution, with the second phase run without humans. Schuster and Kilov
                honestly record the virtue: <strong>the values are made explicit</strong> — you can see what
                the system is being aligned to. That is a real transparency gain over RLHF.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Но двойной тест конституция тоже не проходит. Эпистемически: явность принципов не делает их
                верными — конституция <strong>предпосылается</strong>, а не обосновывается. Политически: её
                состав выбрала компания, а не какая-либо процедура с участием затронутых; тот, кто обоснованно
                не согласен с принципом конституции, снова не получает причины принять построенные на нём
                решения.
              </>
            ) : (
              <>
                Yet the constitution fails the dual test too. Epistemically: making principles explicit does
                not make them correct — the constitution is <strong>presupposed</strong>, not justified.
                Politically: its content was chosen by a company, not by any procedure involving the affected;
                someone who reasonably rejects one of its principles again receives no reason to accept the
                decisions built on it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Промежуточный итог статьи: три самых перспективных из имеющихся подходов — краудсорсинг, RLHF,
                конституционный ИИ — все проваливают двойной тест на морально спорных решениях. Отсюда вывод
                авторов: приспособление к обоснованному моральному разногласию — <strong>открытая проблема
                безопасности ИИ</strong>, а не решённая инженерная задача.
              </>
            ) : (
              <>
                The paper&apos;s interim conclusion: the three most promising approaches on offer —
                crowdsourcing, RLHF, constitutional AI — all fail the dual test on morally controversial
                decisions. Hence the authors&apos; verdict: accommodating reasonable moral disagreement is an{' '}
                <strong>open problem in AI safety</strong>, not a solved engineering task.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: What follows — and what does not */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Что из этого следует — и что не следует' : 'Chapter 5: What Follows — and What Does Not'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сначала о том, чего аргумент <strong>не</strong> утверждает. Он не говорит, что выравнивание
                невозможно или что RLHF бесполезен: для массы бесспорных случаев — фактические ошибки, явный
                вред, кооперативность — эти методы работают и оправданы. Удар приходится по узкому, но
                важному классу: <strong>морально спорным решениям с системным влиянием</strong> — модерация
                политической речи, распределение ресурсов, оценка людей. Смешение этих двух зон — самый
                частый способ неправильно понять статью.
              </>
            ) : (
              <>
                First, what the argument does <strong>not</strong> claim. It does not say alignment is
                impossible or RLHF useless: for the mass of uncontroversial cases — factual errors, plain
                harms, cooperativeness — these methods work and are warranted. The blow lands on a narrow but
                important class: <strong>morally controversial decisions with systemic impact</strong> —
                moderation of political speech, resource allocation, scoring of people. Conflating the two
                zones is the most common way to misread the paper.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Опасность, которую авторы называют по имени, — <strong>ползучая технократия</strong>: спорные
                ценностные решения тихо переезжают в системы, которые никто не уполномочивал их принимать.
                Их позитивная программа — два направления. Первое: <strong>явные, правдивые обоснования</strong>{' '}
                решений — не «модель так сочла», а проверяемые причины, открытые для оспаривания. Второе:{' '}
                <strong>демократический контроль</strong> — институциональные механизмы, через которые
                затронутые реально влияют на ценностные настройки систем.
              </>
            ) : (
              <>
                The danger the authors name outright is <strong>creeping technocracy</strong>: controversial
                value decisions quietly migrating into systems nobody authorized to make them. Their positive
                programme runs on two tracks. First, <strong>explicit, veridical justifications</strong> of
                decisions — not &quot;the model deemed it so&quot; but checkable reasons open to challenge.
                Second, <strong>democratic oversight</strong> — institutional mechanisms through which the
                affected genuinely shape systems&apos; value settings.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для практика из этого следует рабочая привычка: проектируя фичу, где модель решает спорное,
                спрашивать не только «насколько точна модель?», но и «<strong>почему затронутый должен
                принять это решение?</strong>». Если ответ сводится к «мы обучили на людях» — вы стоите ровно
                на том месте, которое разобрала эта статья. Честные варианты: сузить автономию системы в
                спорной зоне, дать явное обоснование и канал оспаривания, вынести ценностный выбор в
                прозрачную политику.
              </>
            ) : (
              <>
                For a practitioner this yields a working habit: when designing a feature where a model decides
                something contested, ask not only &quot;how accurate is the model?&quot; but{' '}
                &quot;<strong>why should an affected person accept this decision?</strong>&quot;. If the
                answer reduces to &quot;we trained it on people&quot;, you are standing exactly where this
                paper struck. The honest options: narrow the system&apos;s autonomy in the contested zone,
                provide explicit justification with a channel for appeal, move the value choice into a
                transparent policy.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                И финальная связка с соседней комнатой: как и контраргументы Грейс к аргументу о рисках, этот
                разбор не закрывает тему, а <strong>локализует спор</strong>. Кто не согласен с Шустером и
                Киловым, должен указать слабую посылку: может, агрегация суждений всё-таки отслеживает
                моральную истину? Может, легитимность достижима без участия затронутых? Обе линии защиты
                существуют в литературе — и обе теперь имеют ясную мишень.
              </>
            ) : (
              <>
                And the final link to the neighbouring room: like Grace&apos;s counterarguments to the risk
                case, this analysis does not close the topic — it <strong>localizes the dispute</strong>.
                Whoever disagrees with Schuster and Kilov must name the weak premise: perhaps aggregated
                judgment does track moral truth after all? Perhaps legitimacy is achievable without the
                affected? Both lines of defence exist in the literature — and both now have a clear target.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6: Who gave the green light? Lazar & Pascal on democracy and AGI */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Кто дал зелёный свет? Демократия и AGI' : 'Chapter 6: Who Gave the Green Light? Democracy and AGI'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Шустер и Килов разбирают отдельное решение: почему затронутый должен принять вывод системы по
                спорному вопросу. Сет Лазар и Алекс Паскаль поднимают тот же вопрос на уровень выше — к решению
                строить такие системы вообще. Их колонка <a href="https://www.techpolicy.press/can-democracy-survive-artificial-general-intelligence/" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">«Can Democracy Survive Artificial General Intelligence?»</a>{' '}
                вышла на TechPolicy.Press 13 февраля 2024 года — в год, когда выборы проходили более чем в сорока
                странах, где живёт больше 40% населения планеты. Лазар — философ из Австралийского национального
                университета, руководитель лаборатории MINT; Паскаль — старший научный сотрудник Центра Эша в
                Гарвардской школе Кеннеди, в 2021–2023 годах работал в аппарате Белого дома по внутренней политике.
                Под AGI они, опираясь на рамку <a href="https://arxiv.org/abs/2311.02462" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">«Levels of AGI»</a> от Google DeepMind (Morris и др., 2023),
                понимают вычислительную систему, которая выполняет любую когнитивную задачу человека на уровне
                медианного человека или выше, — и оговаривают, что нынешние модели этому определению соответствуют
                разве что в языковой части.
              </>
            ) : (
              <>
                Schuster and Kilov examine a single decision: why an affected person should accept a system&apos;s
                verdict on a contested question. Seth Lazar and Alex Pascal lift the same question one level up, to
                the decision to build such systems at all. Their piece{' '}
                <a href="https://www.techpolicy.press/can-democracy-survive-artificial-general-intelligence/" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">&quot;Can Democracy Survive Artificial General Intelligence?&quot;</a> appeared on
                TechPolicy.Press on 13 February 2024, in a year when more than forty countries, home to over 40% of
                the world&apos;s population, held elections. Lazar is a philosopher at the Australian National
                University who leads the MINT lab; Pascal is a senior fellow at the Ash Center of the Harvard Kennedy
                School and served on the White House domestic policy staff in 2021–2023. Following Google
                DeepMind&apos;s <a href="https://arxiv.org/abs/2311.02462" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">&quot;Levels of AGI&quot;</a> framework (Morris et al., 2023), they take AGI
                to mean a computational system that performs any cognitive task humans perform at the level of the
                median human or better, and they note that current models meet that bar, at most, on the linguistic
                part.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первый ход авторов — различение, которое легко пропустить. Ограждения (guardrails) отвечают на
                вопрос «как снизить вред от системы, которую решено строить». <strong>Зелёный свет</strong> — на
                вопрос «строить ли её вообще». Второй вопрос сегодня решают, по формулировке колонки, «несколько
                человек в ещё меньшем числе компаний». Корпоративные эксперименты с управлением — советы
                директоров, попечительские структуры, сбор «демократических вкладов» — этого не меняют: совет
                директоров не представляет общества, чью жизнь технология перестроит, а «демократические вклады —
                не то же самое, что демократический контроль». Ноябрьский кризис управления в OpenAI 2023 года
                авторы приводят как пример: когда попечительская структура разошлась с интересами инвесторов,
                победили инвесторы. Прецедент обратного они тоже называют: клонирование человека общества сумели
                притормозить, когда решили это сделать. Их предложение — <strong>«публичная опция»</strong> в ИИ:
                исследования на общественные средства и в общественных интересах, на порядок масштабнее программы
                National AI Research Resource.
              </>
            ) : (
              <>
                The authors&apos; first move is a distinction that is easy to miss. Guardrails answer the question
                &quot;how do we reduce the harm of a system we have decided to build&quot;. The{' '}
                <strong>green light</strong> answers &quot;should it be built at all&quot;. The second question is
                currently settled, in the piece&apos;s phrase, by &quot;a few people at even fewer tech
                companies&quot;. Corporate governance experiments — boards, trustee structures, &quot;democratic
                inputs&quot; programmes — do not change that: a board does not represent the societies whose lives
                the technology will rearrange, and &quot;democratic inputs are not the same as democratic
                control&quot;. OpenAI&apos;s governance crisis of November 2023 is their example: when the trustee
                structure diverged from investor interests, the investors won. They also name the opposite
                precedent: societies did slow human cloning once they chose to. Their proposal is an AI{' '}
                <strong>&quot;public option&quot;</strong>: publicly funded research in the public interest, an order
                of magnitude more ambitious than the National AI Research Resource.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй ход интереснее, потому что он не зависит от того, удастся ли выравнивание. Допустим, AGI
                построен, безопасен и делает, что просят. Если он справляется с любой когнитивной задачей лучше
                людей, то и с управлением тоже — и появится стимул передавать ему решения на каждом уровне: в
                клубе, школе, компании, затем в ведомствах, которые ведают экономикой, транспортом,
                здравоохранением, правосудием. Никто не захватывает власть; люди сами, из удобства, шаг за шагом
                её отдают. Авторы называют это «рассеянной прогулкой по политической тропинке из первоцветов».
                Почему на «человек будет присматривать» надеяться не стоит, известно давно: Лизанн Бейнбридж в
                статье «Ironies of automation» (Automatica, 1983) показала, что автоматизация задачи с расчётом
                на вмешательство человека в критический момент устроена против человека — навык без практики
                угасает, внимание к рутинно исправной системе рассеивается, и оператор хуже всего готов ровно
                тогда, когда нужен. Этот эффект есть в глоссарии под именем{' '}
                <Term id="ironies-of-automation" lang={lang}>иронии автоматизации</Term>.
              </>
            ) : (
              <>
                The second move is more interesting because it does not depend on whether alignment succeeds.
                Suppose AGI is built, safe, and does what it is asked. If it handles every cognitive task better
                than people, it handles governance better too, and there will be an incentive to hand it decisions
                at every level: the club, the school, the company, then the agencies that run the economy,
                transport, healthcare, and justice. Nobody seizes power; people give it away step by step, out of
                convenience. The authors call this &quot;an absent-minded walk down a political primrose
                path&quot;. Why &quot;a human will keep an eye on it&quot; is a poor bet has been known for
                decades: Lisanne Bainbridge&apos;s &quot;Ironies of automation&quot; (Automatica, 1983) showed that
                automating a task while counting on a human to step in at the critical moment works against the
                human — skill decays without practice, attention to a routinely correct system drifts, and the
                operator is least prepared exactly when needed. The effect lives in the glossary as the{' '}
                <Term id="ironies-of-automation" lang={lang}>ironies of automation</Term>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сложите оба хода с разбором Шустера и Килова — получится один механизм в двух масштабах. «Ползучая
                технократия» из главы 5 — это спорные решения, тихо переезжающие в системы; «тропинка из
                первоцветов» — те же решения, переезжающие вместе с институтами. Ответ у обеих статей
                процедурный: институты, которыми управляют люди, должны быть способны и обязаны осуществлять
                реальный контроль, и для этого, по Лазару и Паскалю, может понадобиться перестроить «стареющие
                институты конституционной демократии». Читать колонку стоит с оговорками. Это авторская позиция, а
                не исследование; сроки «2–5 лет до AGI» — заявления разработчиков, которые авторы пересказывают, а
                не проверяют; «публичная опция» описана как направление, без бюджета и устройства. Но рабочий
                вопрос из неё вынести можно. К вопросу главы 5 «почему затронутый должен принять это решение?»
                добавляется ещё один: «<strong>кто разрешил построить систему, которая это решает, и мог ли он
                сказать нет?</strong>».
              </>
            ) : (
              <>
                Put both moves next to Schuster and Kilov and you get one mechanism at two scales. The
                &quot;creeping technocracy&quot; of chapter 5 is contested decisions quietly migrating into systems;
                the &quot;primrose path&quot; is the same decisions migrating together with the institutions. Both
                papers answer procedurally: institutions run by people must be able, and expected, to exercise
                meaningful control, which for Lazar and Pascal may require rethinking &quot;the aging institutions
                of constitutional democracy&quot;. Read the piece with caveats. It is an opinion essay, not a study;
                the &quot;2–5 years to AGI&quot; timeline is a developers&apos; claim the authors relay rather than
                test; the &quot;public option&quot; is a direction, with no budget or design attached. But one
                working question can be taken from it. Next to chapter 5&apos;s &quot;why should an affected person
                accept this decision?&quot; goes a second one: &quot;<strong>who authorized building the system that
                decides it, and could they have said no?</strong>&quot;.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-5 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
              {ru ? 'Источники' : 'Sources'}
            </p>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>
                Schuster, N. &amp; Kilov, D. (2025). &quot;Moral disagreement and the limits of AI value
                alignment: a dual challenge of epistemic justification and political legitimacy&quot;.{' '}
                <em>AI &amp; Society</em> 40, 6073–6087.{' '}
                <a
                  href="https://doi.org/10.1007/s00146-025-02427-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1007/s00146-025-02427-2
                </a>
              </li>
              <li>
                Lazar, S. &amp; Pascal, A. (2024). &quot;Can Democracy Survive Artificial General Intelligence?&quot;. <em>TechPolicy.Press</em>, 13 {ru ? 'февраля' : 'February'} 2024.{' '}
                <a
                  href="https://www.techpolicy.press/can-democracy-survive-artificial-general-intelligence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  techpolicy.press
                </a>
              </li>
              <li>
                Bainbridge, L. (1983). &quot;Ironies of automation&quot;. <em>Automatica</em> 19(6), 775–779.{' '}
                <a
                  href="https://doi.org/10.1016/0005-1098(83)90046-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1016/0005-1098(83)90046-8
                </a>
              </li>
              <li>
                Morris, M. R., Sohl-Dickstein, J., Fiedel, N., Warkentin, T., Dafoe, A., Faust, A., Farabet, C. &amp; Legg, S. (2023). &quot;Levels of AGI for Operationalizing Progress on the Path to AGI&quot;. arXiv:2311.02462.{' '}
                <a
                  href="https://arxiv.org/abs/2311.02462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  arxiv.org/abs/2311.02462
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-accent-500/5 border-l-4 border-accent-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">{ru ? 'Куда дальше' : 'Where to Go Next'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru
                ? 'Техническая механика SFT, RLHF, DPO и конституционного ИИ — в комнате «Alignment: Выравнивание ИИ». Метод разбора аргументов по посылкам — в комнате «Экзистенциальный риск: анатомия аргумента». Практика модерационных политик — в «LLM Guardrails».'
                : 'The technical mechanics of SFT, RLHF, DPO and constitutional AI live in the "AI Alignment & RLHF" room. The premise-by-premise method of argument analysis is in "Existential Risk: Anatomy of the Argument". Moderation-policy practice is in "LLM Guardrails".'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
