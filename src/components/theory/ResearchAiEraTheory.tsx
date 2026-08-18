"use client";

import React from 'react';
import Term from '@/components/Term';
import Screenshot from '@/components/Screenshot';

const BOOK_URL = 'https://press.uchicago.edu/ucp/books/book/chicago/D/bo18508006.html';

export default function ResearchAiEraTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Метод Эбботта: от библиотеки к агентам' : 'The Abbott Method: From the Library to Agents'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>В 2014 году социолог Эндрю Эбботт опубликовал руководство по работе с библиотечными и интернет-источниками (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014</a>). Его главный тезис звучал полемично уже тогда: исследование — это конструирование ответа, а не находка готового. Источники не содержат ответа, который ждёт, пока его обнаружат; исследователь создаёт ответ, многократно перестраивая вопрос, доказательства, концепты и текст.</>
              ) : (
                <>In 2014 the sociologist Andrew Abbott published a manual on working with library and internet materials (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014</a>). His central claim was polemical even then: research is the construction of an answer, not the discovery of one. Sources do not contain an answer waiting to be found; the researcher creates the answer by repeatedly reshaping the question, the evidence, the concepts, and the text.</>
              )}
            </p>
            <div className="bg-card border-l-4 border-accent-500 p-5 rounded-r-lg">
              <p className="text-neutral-100 leading-relaxed font-medium">
                {lang === 'ru'
                  ? '«Поиск информации — на самом деле лишь малая часть исследования».'
                  : '"Finding things is actually a rather small part of research."'}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mt-3">
                {lang === 'ru' ? (
                  <>Эта мысль открывает книгу — с неё начинается первая страница (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014: 1</a>; в оригинале: &quot;finding things is actually a rather small part of research&quot;). Всё остальное руководство объясняет, из чего состоит бо́льшая часть: постановка вопроса, отбор, чтение, организация, анализ и письмо.</>
                ) : (
                  <>This thought opens the book — it appears on the very first page (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014: 1</a>). The rest of the manual explains what the larger part consists of: framing the question, selecting, reading, organizing, analyzing, and writing.</>
                )}
              </p>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Тогда это была критика наивного поиска по ключевым словам. В 2026 году аргумент стал сильнее, а не устарел: «лёгкий поиск» — уже не Google, а deep-research-агенты, которые находят, суммируют и синтезируют литературу за минуты. Чем дешевле извлечение и первичный синтез, тем ценнее то, что автоматизировать не удалось: постановка загадки, различение концептов, оценка объяснений и решение «когда достаточно». Эта комната переводит метод Эбботта на язык работы с ИИ.'
                : 'Back then it was a critique of naive keyword search. In 2026 the argument has grown stronger, not obsolete: "easy search" is no longer Google but deep-research agents that retrieve, summarize, and synthesize literature in minutes. The cheaper retrieval and first-pass synthesis become, the more valuable what resists automation: framing the puzzle, distinguishing concepts, weighing explanations, and deciding when enough is enough. This room translates the Abbott method into the language of working with AI.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Стоит сразу снять возможное недоразумение. Речь не о том, что инструментами пользоваться не надо или что найденное машиной хуже найденного руками. Речь о том, где в этой работе принимаются решения. Агент отвечает на заданный ему вопрос; он не спрашивает, тот ли это вопрос. Он собирает то, что похоже на запрос; он не сообщает, что за пределами запроса лежала работа, которая изменила бы саму постановку. Он излагает найденное ровным тоном; он не отмечает, какое утверждение держится на одном препринте, а какое — на двадцати воспроизведённых экспериментах. Все эти решения остаются за человеком не потому, что модель слаба, а потому, что они требуют знания, зачем вы вообще это делаете.'
                : 'It is worth clearing up a possible misreading straight away. The point is not that you should avoid the tools, or that what a machine finds is worse than what you find by hand. The point is where the decisions in this work get made. An agent answers the question it was given; it does not ask whether that was the right question. It gathers what resembles the query; it does not report that just outside the query lay the work that would have changed how you framed the problem. It reports what it found in an even tone; it does not mark which claim rests on a single preprint and which on twenty replicated experiments. Those decisions stay with the human not because the model is weak, but because they require knowing why you are doing this at all.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Дальше комната идёт по порядку самой работы. Сначала — чем исследовательский вопрос отличается от темы и почему без этого различия агент выдаёт справку. Потом — как менялось узкое место научного труда и что осталось человеку на этот раз. Затем — две подготовительные процедуры, которые окупаются до первого запроса: перевод темы в загадку и сборка словаря. Дальше — три режима работы с материалом и способ собрать ядро литературы по ссылкам, а не по запросам. И наконец — пять вопросов, которые Эбботт адресовал первоисточнику и которые почти без изменений применимы к ответу агента.'
                : 'From here the room follows the order of the work itself. First, how a research question differs from a topic, and why without that distinction an agent returns a briefing. Then, how the bottleneck of scholarly work has shifted, and what is left to the human this time. Next, the two preparatory procedures that pay off before the first query: turning a topic into a puzzle, and assembling a vocabulary. Then the three modes of working with material, and how to assemble the core literature by following references rather than issuing queries. And finally, the five questions Abbott addressed to a primary source, which apply almost unchanged to an agent’s answer.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: Puzzle, not topic */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 1: Загадка вместо темы' : 'Chapter 1: A Puzzle, Not a Topic'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Эбботт иллюстрирует тезис обманчиво простым вопросом: сколько в Америке юристов? Ответов несколько, и все «правильные»: можно считать выпускников юридических школ, сдавших экзамен на адвокатскую лицензию, действующих обладателей лицензии или людей, которые прямо сейчас работают юристами. Ни одно из чисел не является ответом само по себе. Верное число определяется вопросом исследования: проекту о лицензионных сборах нужна одна совокупность, проекту о доступности юридической помощи — другая. Источник становится релевантным только по отношению к конкретному вопросу.</>
              ) : (
                <>Abbott illustrates the claim with a deceptively simple question: how many lawyers are there in America? Several answers exist, all of them &quot;correct&quot;: you can count law school graduates, people who passed the bar exam, current license holders, or people working as lawyers right now. No single number is the answer by itself. The right number is determined by the research question: a project on licensing fees needs one population, a project on access to legal help needs another. A source becomes relevant only in relation to a specific question.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Отсюда центральное различение: тема против загадки. «Расскажи про открытые модели» — тема; она расширяется бесконечно, и у неё нет критерия завершения. <Term id="empirical-puzzle" lang={lang}>Эмпирическая загадка</Term> — вопрос «почему наблюдается неожиданный факт X?»: почему санкции на чипы ускорили китайские лаборатории вместо того, чтобы замедлить? Загадка задаёт правило остановки — проект закончен, когда загадка объяснена, — и требует минимум двух конкурирующих объяснений. Если с самого начала допускается только одно объяснение, доказательства превращаются в иллюстрацию, а исследование — в подгонку.</>
              ) : (
                <>Hence the central distinction: topic versus puzzle. &quot;Tell me about open models&quot; is a topic; it expands forever and has no completion criterion. An <Term id="empirical-puzzle" lang={lang}>empirical puzzle</Term> is a question of the form &quot;why is surprising fact X the case?&quot;: why did chip sanctions accelerate Chinese labs instead of slowing them down? A puzzle supplies a stopping rule — the project ends when the puzzle is explained — and demands at least two competing explanations. If only one explanation is allowed from the start, evidence becomes illustration and research becomes confirmation.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'На практике тему легко принять за загадку, потому что она умеет надевать вопросительный знак. «Как ИИ влияет на занятость?» выглядит вопросом, но проверка простая: попробуйте назвать факт, который сделал бы ответ неверным. Если такого факта нет — перед вами тема, и любой собранный материал ей подойдёт. Загадка устроена иначе: «почему массового всплеска безработицы не видно в данных, хотя модели уже пишут код?» можно опровергнуть — например, показав, что всплеск есть, просто он спрятан в статистике неполной занятости. Именно возможность ошибиться и делает работу исследованием, а не сбором подтверждений.'
                : 'In practice a topic is easy to mistake for a puzzle, because it knows how to put on a question mark. "How does AI affect employment?" looks like a question, but the test is simple: try to name a fact that would make the answer wrong. If no such fact exists, you have a topic, and any material you gather will fit it. A puzzle works differently: "why is no mass unemployment spike visible in the data even though models already write code?" can be refuted — by showing, for instance, that the spike is there and merely hidden inside underemployment figures. It is the possibility of being wrong that makes the work research rather than a collection of confirmations.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Разница видна и в том, что вы получаете на выходе. Отправьте агенту тему — вернётся связный обзор, в котором всё сказанное верно и ничего не утверждается: такой текст нельзя оспорить, потому что он ни на чём не настаивает. Отправьте загадку вместе с двумя объяснениями — и тот же агент начнёт работать как инструмент: он ищет то, что различает версии, а не то, что просто относится к области. Разбор конкретной процедуры такого перевода — в третьей главе; здесь достаточно запомнить порядок. Сначала формулируется, что именно не сходится, потом появляются кандидаты в объяснения, и только потом открывается чат.'
                : 'The difference also shows in what you get back. Send an agent a topic and you receive a coherent overview in which everything said is true and nothing is claimed: such a text cannot be disputed, because it insists on nothing. Send a puzzle together with two explanations and the same agent starts working as an instrument: it looks for what discriminates between the versions rather than for what merely belongs to the area. The concrete procedure for that translation comes in Chapter 3; here it is enough to remember the order. First state exactly what does not add up, then produce candidate explanations, and only then open the chat.'}
            </p>
            <div className="bg-card border-l-4 border-info-500 p-5 rounded-r-lg">
              <p className="text-neutral-200 leading-relaxed font-medium">
                {lang === 'ru'
                  ? '«Расскажи про X» — не исследование.'
                  : '"Tell me about X" is not research.'}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mt-3">
                {lang === 'ru'
                  ? 'Это запрос на пересказ. Исследование начинается с противоречия, аномалии или объяснительного пробела — с чего-то, что не сходится. Хороший тест на загадку: она формулируется в двух предложениях, неспециалист может её повторить, слушатель искренне удивляется, а ответ проверяем доказательствами.'
                  : 'That is a request for a summary. Research begins with a contradiction, an anomaly, or an explanatory gap — something that does not add up. A good puzzle test: it fits in two sentences, a non-expert can repeat it, the listener is genuinely surprised, and the answer can be checked against evidence.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: History of bottlenecks */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 2: История узких мест — от дефицита к изобилию' : 'Chapter 2: A History of Bottlenecks — From Scarcity to Abundance'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'С точки зрения истории науки каждая крупная информационная технология сдвигала узкое место научной работы, автоматизируя один слой и делая ценнее следующий. Библиотеки решили доступ к книгам — узким местом стала навигация по ним. Библиографические базы решили доступ к статьям — узким местом стал отбор. Веб-поиск решил извлечение документов — узким местом стала перегрузка: сильные и слабые материалы стали выглядеть одинаково. ИИ-агенты решают первичный синтез — они читают, сопоставляют и пересказывают быстрее любого аспиранта.'
                : 'From the history of science perspective, every major information technology has shifted the bottleneck of scholarly work, automating one layer and making the next one more valuable. Libraries solved access to books — navigation became the bottleneck. Bibliographic databases solved access to papers — selection became the bottleneck. Web search solved document retrieval — the bottleneck became overload: strong and weak material began to look identical. AI agents solve first-pass synthesis — they read, compare, and summarize faster than any graduate student.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Что остаётся, когда синтез дешевеет до нуля? Осторожнее сказать так: суждение не стало дефицитным ресурсом — оно всегда им было. Тезис Эбботта в том и состоял, что «библиотечная» модель исследования — найти источники — неверно описывает саму работу: исследователь развивает идею итерациями суждения, а поиск лишь обслуживает этот процесс. Пока поиск был трудным, его легко было принимать за суть профессии; автоматизация сняла эту маскировку. Исследователей по-прежнему различает умение сформулировать настоящую загадку, увидеть концептуальные различения, взвесить конкурирующие объяснения, определить достаточность доказательств и собрать оригинальный аргумент. В этом смысле ИИ не сделал метод Эбботта устаревшим, а подтвердил его: феноменология исследования 2014 года стала буквальным описанием разделения труда между человеком и машиной.'
                : 'What remains when synthesis costs nothing? The careful way to put it: judgment did not become the scarce resource — it always was. Abbott\'s point was precisely that the library-science model of research — finding sources — misdescribes the work itself: a researcher develops an idea through iterated judgment, and search merely serves that process. While searching was hard, it was easy to mistake it for the substance of the profession; automation stripped that disguise away. What distinguishes researchers is still the ability to formulate a genuine puzzle, recognize conceptual distinctions, weigh competing explanations, decide when evidence is sufficient, and construct an original argument. In this sense AI did not date Abbott\'s method — it vindicated it: the 2014 phenomenology of research became a literal description of the division of labor between human and machine.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'У этого сдвига есть неочевидное свойство: решённый слой не исчезает, а уходит в фон. Никто сегодня не считает достижением то, что нужную книгу удалось найти в каталоге, — хотя когда-то это и было работой. Стоит присмотреться, что именно уходило в фон каждый раз: навигацию, отбор и извлечение можно записать как процедуру — правило каталогизации, набор фильтров, поисковый запрос. Ровно то, что поддаётся записи в виде процедуры, рано или поздно и автоматизируется. Оставшаяся часть сопротивляется такой записи: нет процедуры, которая выведет загадку из набора фактов или скажет, какое из двух объяснений весомее. Отсюда практическое следствие: проект, где закрыты все автоматизируемые шаги — источники собраны, пересказы получены, файлы разложены, — может при этом не содержать ни одного собственного утверждения.'
                : 'The shift has a less obvious property: a solved layer does not disappear, it recedes into the background. Nobody today counts finding the right book in the catalog as an achievement — though once that was the work. It is worth looking at what receded each time: navigation, selection, and retrieval can all be written down as a procedure — a cataloging rule, a set of filters, a query. Whatever can be written as a procedure eventually gets automated. The remaining part resists that form: no procedure derives a puzzle from a set of facts or says which of two explanations weighs more. Hence a practical consequence: a project in which every automatable step is complete — sources collected, summaries obtained, files organized — may still contain not a single claim of its own.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Из этой истории стоит извлечь не утешение, а рабочую подсказку. Утешением было бы прочитать её как обещание: суждение не автоматизируется, значит, исследователю ничего не грозит. Но это ровно та ошибка, которую совершали считавшие сутью профессии поиск: своё занятие они тоже описывали как незаменимое. Подсказка в другом — новое узкое место каждый раз возникает там, где предыдущая автоматизация незаметно теряла информацию. Веб-поиск выдавал документы, но терял различие между сильным и слабым материалом, и работой стал отбор. Пересказ агента выдаёт содержание, но теряет то, чем одно утверждение обеспечено лучше другого: в ровной прозе одиночный препринт и многократно проверенная работа занимают по одному предложению. Поэтому отчёт агента — сырьё: в нём сделана та часть работы, которую можно было сделать, не зная вашего вопроса.'
                : 'What this history offers is not reassurance but a working hint. The reassuring reading would be: judgment cannot be automated, so the researcher is safe. That is precisely the mistake made by those who took search to be the substance of the profession — they too described their occupation as irreplaceable. The hint lies elsewhere: each new bottleneck forms where the previous automation quietly dropped information. Web search delivered documents but lost the difference between strong and weak material, and selection became the work. An agent\'s summary delivers content but loses how well one claim is supported compared with another: in even prose, a lone preprint and a much-replicated study each occupy one sentence. That is why an agent report is raw material: the part of the work it completed is the part that could be done without knowing your question.'}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-heading font-bold mb-2">
                {lang === 'ru' ? 'Сдвиг узкого места' : 'The Bottleneck Shift'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Старое узкое место: найти релевантную литературу. Новое узкое место: задать хороший вопрос и оценить знание, сгенерированное ИИ. Исследователь всё больше становится оркестратором, а не поисковиком: он ставит задачи, проверяет результаты и решает, что делать дальше.'
                  : 'Old bottleneck: finding relevant literature. New bottleneck: asking good questions and evaluating AI-generated knowledge. The researcher increasingly becomes an orchestrator rather than a searcher: setting tasks, checking results, and deciding what happens next.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Puzzle before prompt */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 3: Puzzle before prompt — словарь до запроса' : 'Chapter 3: Puzzle Before Prompt — Vocabulary Before the Query'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Рабочая процедура перевода темы в загадку выглядит так. Сначала — карта ситуации: кто действует (люди, организации), что они делают (действия, конфликты), когда (периоды, переломные точки), где (места, масштабы) и в каких терминах сами участники описывают происходящее. Затем в этой карте ищется аномалия — то, что противоречит ожиданиям. Наконец, к аномалии подбираются минимум два правдоподобных объяснения. Только после этого имеет смысл открывать чат с ИИ: агент, получивший загадку и альтернативы, работает как исследовательский инструмент; агент, получивший тему, — как энциклопедия.'
                : 'The working procedure for turning a topic into a puzzle looks like this. First, map the situation: who acts (people, organizations), what they do (actions, conflicts), when (periods, turning points), where (places, scales), and in what terms the participants themselves describe it. Then look for an anomaly in that map — something that contradicts expectations. Finally, attach at least two plausible explanations to the anomaly. Only then does it make sense to open a chat with an AI: an agent given a puzzle and alternatives works as a research instrument; an agent given a topic works as an encyclopedia.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Вторая подготовительная работа — <Term id="controlled-vocabulary" lang={lang}>контролируемый словарь</Term>. Ключевое слово — не концепт: один концепт живёт под несколькими словами, одно слово покрывает несколько концептов. В литературе об ИИ то, что вы называете «reasoning», встречается как «test-time compute», «inference-time scaling» и «System 2»; поиск по одному термину пропустит половину поля. Для каждого важного концепта фиксируются предпочтительный термин, синонимы, более широкие и узкие понятия, смежные концепты и исторические названия. Этот словарь улучшает всё сразу: поисковые запросы, промпты агентам и — главное — собственное мышление, потому что нестабильные термины означают нестабильный аргумент.</>
              ) : (
                <>The second piece of preparation is a <Term id="controlled-vocabulary" lang={lang}>controlled vocabulary</Term>. A keyword is not a concept: one concept lives under several words, and one word covers several concepts. In the AI literature, what you call &quot;reasoning&quot; appears as &quot;test-time compute,&quot; &quot;inference-time scaling,&quot; and &quot;System 2&quot;; searching one term misses half the field. For every important concept, record the preferred term, synonyms, broader and narrower notions, related concepts, and historical labels. This vocabulary improves everything at once: search queries, agent prompts, and — above all — your own thinking, because unstable terms mean an unstable argument.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Как эта процедура выглядит на живом примере, видно на аномалии из первой главы — про ограничения на чипы и ускорившиеся китайские лаборатории. Карта ситуации: кто действует — лаборатории, регуляторы, производители оборудования; что происходит — ограничения с одной стороны, выпуски моделей с другой; когда — «до» и «после» введения ограничений; в каких словах — одни участники говорят о вынужденной независимости, другие о дефиците. Аномалия здесь не в самом факте, а в направлении эффекта: оно обратно ожидаемому. Дальше нужны две версии: например, что ограничения перенесли усилия с наращивания вычислений на эффективность их использования, — либо что ускорение началось до ограничений и причина приписана неверно. Обе версии пока не выводы, а кандидаты. Зато из них уже видно, что искать: доказательства, которые эти версии различают, — скажем, то, что происходило до введения ограничений.'
                : 'How the procedure looks in practice can be seen on the anomaly from Chapter 1 — chip restrictions and Chinese labs that sped up. Map the situation: who acts — labs, regulators, equipment makers; what happens — restrictions on one side, model releases on the other; when — before and after the restrictions came in; in what words — some participants speak of forced independence, others of shortage. The anomaly is not the fact itself but the direction of the effect: it runs opposite to expectation. Two versions are then needed: say, that the restrictions moved effort from adding compute to using it efficiently — or that the acceleration began before the restrictions and the cause has been misassigned. Neither version is a conclusion yet; both are candidates. But together they already show what to look for: evidence that tells them apart — what was happening, say, before the restrictions came in.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Есть причина делать эту работу до запроса, а не после. Ошибку в ссылке видно: она не открывается. Пропущенную половину поля не видно никак — агент, которому дали один термин, вернёт связный отчёт с источниками, и ничто в нём не сообщит, что рядом лежит литература, называющая тот же концепт иначе. Отсутствие не оставляет следа. Отсюда второе: словарь не составляется один раз и не замирает. Чтение возвращает новые имена того же концепта, а иногда и обратное открытие — два слова, которые вы считали синонимами, оказываются разными концептами. Такое различение само по себе результат: оно способно изменить формулировку загадки, и тогда прежние запросы приходится переписывать. Поэтому у Эбботта задачи исследования — проектирование, поиск, чтение, анализ, письмо — идут не по очереди, а одновременно (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014</a>): порядок «сначала загадка, потом словарь» говорит, что чему готовит, а не в каком месяце что делать.</>
              ) : (
                <>There is a reason to do this work before the query rather than after. A broken reference is visible: it does not open. A missed half of the field is visible in no way at all — an agent given a single term returns a coherent report with sources, and nothing in it reports that a body of literature next door calls the same concept something else. An absence leaves no trace. Hence the second point: the vocabulary is not compiled once and then frozen. Reading brings back new names for the same concept, and sometimes the reverse discovery — two words you treated as synonyms turn out to be different concepts. That distinction is a result in itself: it can change how the puzzle is stated, and then earlier queries have to be rewritten. This is why in Abbott the tasks of research — design, search, reading, analysis, writing — run simultaneously rather than in turn (<a href={BOOK_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Abbott 2014</a>): the order &quot;puzzle first, then vocabulary&quot; says what prepares what, not what to do in which month.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4: Three search modes */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 4: Три режима поиска и цепочки цитирований' : 'Chapter 4: Three Search Modes and Citation Chains'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Эбботт различает три режима работы с материалом, и выбор режима — само по себе исследовательское решение. Сканирование — быстрый просмотр большого списка ради нескольких конкретных сигналов: имён, дат, формулировок. Браузинг — медленный осмотр ограниченной, качественной коллекции с готовностью к неожиданным находкам. Грубая сила (brute force) — полное прочтение ограниченного корпуса, когда важна большая часть материала или пропуск одного элемента разрушит ключевое утверждение.'
                : 'Abbott distinguishes three modes of working with material, and choosing the mode is itself a research decision. Scanning is a fast pass over a long list for a few specific signals: names, dates, phrasings. Browsing is a slower inspection of a bounded, high-quality collection, open to unexpected finds. Brute force is reading a bounded corpus completely, used when most of the material matters or when missing one item would break a key claim.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>В эпоху ИИ у режимов появились точные аналоги: сканирование — быстрый поиск и фильтрация; браузинг — deep-research-агент по ограниченному, проверенному пулу источников; brute force — собственное чтение центрального корпуса, которое не делегируется. Важно, почему браузинг нельзя отдать машине целиком: он работает через <Term id="prepared-serendipity" lang={lang}>подготовленную серендипность</Term>. Предварительное чтение раскладывает в памяти «аттракторы» — имена, споры, термины, — и когда один из них всплывает в неожиданном месте, исследователь распознаёт связь. Агент, который показывает только то, что вы явно запросили, отрезает именно эту периферию.</>
              ) : (
                <>In the AI era the modes have exact counterparts: scanning is quick search and filtering; browsing is a deep-research agent run over a bounded, vetted pool of sources; brute force is reading the central corpus yourself — the part that cannot be delegated. It matters why browsing cannot be fully handed to a machine: it works through <Term id="prepared-serendipity" lang={lang}>prepared serendipity</Term>. Prior reading places &quot;attractors&quot; in memory — names, disputes, terms — and when one surfaces in an unexpected place, the researcher recognizes a connection. An agent that shows only what you explicitly asked for cuts off exactly that periphery.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Остаётся практический вопрос: как выбрать режим для конкретной пачки материала. Решение сводится к двум величинам, которые видно заранее. Первая — плотность полезного: какая доля списка вообще относится к вашей загадке. Вторая — цена пропуска: что случится с текстом, если один элемент останется непрочитанным. Длинный список с низкой плотностью и терпимой ценой пропуска — работа для сканирования; небольшой набор, где важен почти каждый элемент, а одна потеря обрушит ключевое утверждение, — работа для полного чтения. Браузинг занимает середину: его плотность заранее неизвестна, и именно поэтому имеет смысл смотреть шире запроса. Сигналы, по которым сканирование отбирает, берутся не из воздуха — это термины, имена и формулировки из словаря, собранного до поиска; без него сканирование вырождается в пролистывание.'
                : 'A practical question remains: how to pick the mode for a particular batch of material. The decision reduces to two quantities you can estimate in advance. The first is the density of what is useful: what share of the list bears on your puzzle at all. The second is the cost of missing: what happens to your text if one item goes unread. A long list with low density and a tolerable cost of missing is work for scanning; a small set where nearly every item matters and one omission would collapse a key claim is work for reading in full. Browsing sits in between: its density is unknown in advance, which is precisely why it pays to look wider than the query. And the signals scanning selects on do not come from nowhere — they are the terms, names, and phrasings of the vocabulary assembled before the search; without it, scanning degrades into page-flipping.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Отсюда следует то, что легко упустить: режим — свойство не источника, а вашего отношения к нему на текущем шаге. Одна и та же статья сканируется в первую неделю по заголовку и аннотации, а через месяц, когда выясняется, что на ней держится половина аргумента, читается целиком. Ошибка в назначении режима стоит по-разному в обе стороны, и обе видны в готовом тексте. Полное чтение длинного сырого потока съедает недели, предназначенные анализу и письму, а объём прочитанного сам по себе не превращается в аргумент. Сканирование центрального корпуса даёт противоположный дефект: утверждения выглядят обоснованными ровно до того момента, когда кто-то открывает оригинал и спрашивает о деталях, которых вы не видели. Поэтому распределение материала по режимам стоит пересматривать по ходу проекта, а не фиксировать в начале.'
                : 'This leads to something easy to miss: the mode is a property not of the source but of your relation to it at the current step. The same paper is scanned in the first week by title and abstract, and read in full a month later, when it turns out that half the argument rests on it. Misassigning the mode costs differently in each direction, and both failures show up in the finished text. Reading a long raw stream in full eats the weeks meant for analysis and writing, and the volume read does not turn into an argument by itself. Scanning the central corpus produces the opposite defect: the claims look well founded right up to the moment someone opens the original and asks about details you never saw. So the allocation of material across modes is worth revisiting as the project goes, not fixing at the start.'}
            </p>
            <div className="bg-warning-500/10 border border-warning-500/20 rounded-lg p-6">
              <h4 className="text-heading font-bold mb-3">
                {lang === 'ru' ? 'Цепочки цитирований против одиночного запроса' : 'Citation Chains Versus a Single Query'}
              </h4>
              <p className="text-neutral-300 leading-relaxed text-sm">
                {lang === 'ru' ? (
                  <>Надёжный способ собрать ядро литературы — <Term id="citation-chaining" lang={lang}>цепочка цитирований</Term>: выберите 5–10 сильных seed-источников, пройдите по их спискам литературы назад (кто на них повлиял) и по индексам цитирований вперёд (кто их развил). Для статей об ИИ это прямое движение по arXiv и Semantic Scholar. Повторяющиеся имена, работы и термины и есть карта поля — её не выдаст ни один одиночный запрос, даже адресованный агенту.</>
                ) : (
                  <>The reliable way to assemble the core literature is <Term id="citation-chaining" lang={lang}>citation chaining</Term>: pick 5–10 strong seed sources, walk their reference lists backward (who influenced them) and citation indexes forward (who built on them). For AI papers this means moving through arXiv and Semantic Scholar directly. The recurring names, works, and terms are the map of the field — no single query, even one addressed to an agent, will produce it.</>
                )}
              </p>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Посмотреть, как это выглядит, можно на любой странице статьи в Semantic Scholar. Ниже — карточка работы «Attention is All you Need» (Vaswani et al., 2017), той самой, что ввела трансформер. Обратите внимание на строку вкладок под аннотацией: обе стороны движения выложены рядом как обычные ссылки.'
                : 'You can see what this looks like on any paper page in Semantic Scholar. Below is the record for "Attention is All you Need" (Vaswani et al., 2017), the paper that introduced the transformer. Look at the row of tabs under the abstract: both directions of travel are laid out side by side as ordinary links.'}
            </p>
            <Screenshot
              src="/images/rooms/research-ai-era/semantic-scholar-citations-references.png"
              alt={lang === 'ru'
                ? 'Страница статьи «Attention is All you Need» в Semantic Scholar: заголовок, авторы, краткое содержание TLDR и строка вкладок со счётчиками — 189 200 Citations и 41 References.'
                : 'The "Attention is All you Need" paper page on Semantic Scholar: title, authors, a TLDR summary, and a tab row with counters — 189,200 Citations and 41 References.'}
              width={1670}
              height={760}
              caption={lang === 'ru'
                ? 'Semantic Scholar, страница статьи Vaswani et al. (2017). Захват 18.08.2026. Нажмите, чтобы рассмотреть.'
                : 'Semantic Scholar, paper page for Vaswani et al. (2017). Captured 2026-08-18. Tap to view larger.'}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Два числа в этой строке — это и есть два направления. «41 References» ведёт назад, к работам, на которых статья стоит: их немного, список конечен, и его можно прочитать целиком. «189 200 Citations» ведёт вперёд, к тем, кто на неё сослался: их столько, что читать подряд бессмысленно. Асимметрия здесь не случайна, и она задаёт разную тактику. Назад идут за основанием — что нужно знать, чтобы понять эту работу. Вперёд идут за развитием — но по такому объёму движутся не подряд, а срезами: по годам, по подполям, по числу собственных цитирований.'
                : 'The two numbers in that row are the two directions. "41 References" leads backward, to the work the paper stands on: there are few, the list is finite, and you can read all of it. "189,200 Citations" leads forward, to everyone who cited it: so many that reading straight through is pointless. The asymmetry is not accidental, and it dictates different tactics. Backward you go for the foundation — what you need to know to understand this paper. Forward you go for the development — but at that volume you move in slices, not in sequence: by year, by subfield, by how often each citing work is itself cited.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Стоит сразу отметить и границы этой картины. Счётчик цитирований измеряет внимание, а не качество: работу цитируют и чтобы опереться на неё, и чтобы возразить. Сам Semantic Scholar раскладывает цитирования по типам — фоновые, методологические, результатные, — и это полезнее общего числа, но раскладка автоматическая и ошибается. И покрытие у любого индекса неполное: то, что вышло вне отслеживаемых площадок, в счётчик не попадёт. Поэтому цепочка даёт карту поля, но не рейтинг работ; ранжирует их по-прежнему читатель.'
                : 'It is worth marking the limits of this picture straight away. A citation counter measures attention, not quality: a paper is cited both to build on it and to argue against it. Semantic Scholar itself breaks citations down by type — background, methods, results — which is more useful than the total, but the breakdown is automatic and it makes mistakes. And no index has complete coverage: whatever appeared outside the venues it tracks never reaches the counter. So the chain gives you a map of the field, not a ranking of the work; ranking is still the reader’s job.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5: Evaluating AI-generated knowledge */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 5: Оценка знания, сгенерированного ИИ' : 'Chapter 5: Evaluating AI-Generated Knowledge'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>К первоисточнику Эбботт предлагает пять вопросов: кто автор и от чьего имени он говорит; какова провенансность — где и в какой среде документ возник; как он был произведён и отредактирован; какова механика выживания — что было отобрано и что потерялось по дороге; каковы цели создателя и кто предполагаемая аудитория. Эти же вопросы почти без изменений применимы к ответу deep-research-агента: «автор» — модель с определённой процедурой обучения; «провенанс» — обучающие данные и найденные источники; «производство» — промпт, инструменты и параметры; «выживание» — что модель отфильтровала и чего не увидела; «цели» — на что её оптимизировали.</>
              ) : (
                <>For a primary source Abbott proposes five questions: who is the author and on whose behalf do they speak; what is the provenance — where and in what setting did the document arise; how was it produced and edited; what are the mechanics of survival — what was selected and what was lost along the way; and what were the creator’s aims and intended audience. The same questions apply almost unchanged to a deep-research agent’s answer: the &quot;author&quot; is a model with a specific training procedure; &quot;provenance&quot; is the training data and retrieved sources; &quot;production&quot; is the prompt, tools, and parameters; &quot;survival&quot; is what the model filtered out or never saw; &quot;aims&quot; are what it was optimized for.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>У Эбботта есть и точная параллель тихой порчи данных: OCR-ошибки, которые незаметно искажают оцифрованные корпуса. Их современный родственник — <Term id="hallucination" lang={lang}>галлюцинации</Term>: правдоподобные, уверенно поданные и не существующие факты или ссылки. Обе проблемы лечатся одинаково — проверкой следствий по оригиналу. Правило цитирования Эбботта переносится дословно: не выдавайте источник за лично проверенный, если не открывали оригинал; факт, взятый из пересказа агента, — это цитирование через вторичный источник, и честный текст это указывает.</>
              ) : (
                <>Abbott also offers an exact parallel for silent data corruption: OCR errors that quietly distort digitized corpora. Their modern relative is the <Term id="hallucination" lang={lang}>hallucination</Term>: a plausible, confidently delivered fact or reference that does not exist. Both problems have the same cure — checking consequential claims against the original. Abbott’s citation rule transfers verbatim: do not present a source as personally verified unless you opened the original; a fact taken from an agent’s summary is a citation through a secondary source, and an honest text says so.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Пять вопросов адресованы первоисточнику. Но бо́льшая часть прочитанного — чужие изложения чужих данных: обзоры, статьи, отчёты, а теперь и сводки агентов. Для них нужен другой набор проверок, и Эбботт предлагает три сигнала, которые работают только вместе. Первый — экспертиза автора именно в этом вопросе, а не в смежной области и не вообще: известное имя из другой темы не переносит свою надёжность на новую. Второй — повторное появление работы в библиографиях сильных источников: если независимые авторы возвращаются к ней, поле уже её проверило. Третий — рецензируемость и репутация издания в своей специальности, то есть был ли между черновиком и публикацией кто-то, кто мог сказать «нет».'
                : 'The five questions are addressed to a primary source. But most of what you read is someone else’s account of someone else’s data: reviews, articles, reports, and now agent summaries. These call for a different set of checks, and Abbott offers three signals that work only in combination. The first is the author’s expertise on this exact question, not on an adjacent field and not in general: a known name from another subject does not carry its reliability over to a new one. The second is the work’s repeated appearance in the bibliographies of strong sources: if independent authors keep returning to it, the field has already tested it. The third is peer review and the venue’s reputation within its specialty — whether anyone stood between the draft and the publication who could say no.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Два соблазнительных сигнала в этот список не входят. Позиция в поисковой выдаче измеряет популярность и структуру ссылок, а не отношение работы к вашему вопросу: она отвечает на «что чаще открывают», а вы спрашиваете «что объясняет мою аномалию». Новизна тоже не сигнал качества: работа десятилетней давности бывает точнее свежей, если методология в ней описана аккуратнее. Из той же логики следует осторожность с популярным приёмом — попросить второго агента перепроверить первого. Совпадение двух ответов выглядит как подтверждение, но оба агента остаются вторичными источниками и могли опираться на один и тот же пересказ; согласие тогда измеряет общий источник, а не факт. Триангуляция полезна, чтобы заметить расхождение, но снять сомнение по ключевому утверждению может только открытый оригинал.'
                : 'Two tempting signals are not on that list. A result’s position in search rankings measures popularity and link structure, not the work’s bearing on your question: it answers "what do people open most often," while you are asking "what explains my anomaly." Recency is not a quality signal either: a ten-year-old paper can be more precise than a fresh one if its methodology is described more carefully. The same logic recommends caution with a popular move — asking a second agent to double-check the first. Two matching answers look like confirmation, but both agents remain secondary sources and may have drawn on the same retelling; their agreement then measures a shared source, not a fact. Triangulation is useful for noticing disagreement, but only an opened original can settle a doubt about a key claim.'}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-heading font-bold mb-2">
                {lang === 'ru' ? 'Правило остановки' : 'The Stopping Rule'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Когда прекращать широкий поиск? Эбботт даёт эмпирическую границу: если примерно две трети важных ссылок в каждом новом сильном источнике вам уже знакомы — ядро собрано, дальше только точечное закрытие пробелов. Если незнакома больше трети — поле ещё не освоено. Правило работает и для отчётов агентов: попросите список источников и посчитайте знакомые.'
                  : 'When do you stop broad searching? Abbott gives an empirical boundary: if roughly two-thirds of the important references in each new strong source are already familiar, the core is assembled — only targeted gap-filling remains. If more than a third are unfamiliar, the field is not yet mastered. The rule works for agent reports too: ask for the source list and count the familiar ones.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: The researcher as orchestrator */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 6: Исследователь-оркестратор' : 'Chapter 6: The Researcher as Orchestrator'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Роль исследователя смещается от поиска к оркестровке, и у оркестратора есть собственный инструментарий. Центральный — crosswalk: таблица, где строки — вопросы исследования, а столбцы — источники и анализы. Каждый вопрос должен опираться хотя бы на один источник; каждый серьёзный источник — отвечать хотя бы на один вопрос. Пустая строка — сигнал, что вопрос повис в воздухе; пустой столбец — что источник копится «на всякий случай». По мере работы crosswalk превращается из инструмента управления проектом в карту финального аргумента. Делегируя <Term id="agent" lang={lang}>агентам</Term> сбор и первичный синтез, оркестратор оставляет за собой саму таблицу: что спрашивать, чему верить, когда остановиться.</>
              ) : (
                <>The researcher’s role shifts from searching to orchestration, and the orchestrator has tools of their own. The central one is the crosswalk: a table whose rows are research questions and whose columns are sources and analyses. Every question must rest on at least one source; every serious source must answer at least one question. An empty row signals a question hanging in the air; an empty column signals a source hoarded &quot;just in case.&quot; As work proceeds, the crosswalk turns from a project-management tool into a map of the final argument. Delegating retrieval and first-pass synthesis to <Term id="agent" lang={lang}>agents</Term>, the orchestrator keeps the table itself: what to ask, what to trust, when to stop.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Таблица полезна ровно настолько, насколько честно заполнены её клетки. Клетка — не галочка «источник относится к вопросу», а короткая запись: что именно этот источник говорит по этому вопросу и насколько уверенно. Отсюда различение, которое галочки уничтожают: пустая клетка «смотрел, по этому вопросу ничего нет» и пустая клетка «ещё не смотрел» — разные состояния, и только первое закрывает пробел. Второе различение важнее: клетка должна помнить, откуда взято утверждение — из оригинала, который вы открыли, или из пересказа агента. Это то же различие, что и в правиле цитирования из предыдущей главы, но записанное там, где принимаются решения. Когда приходит время писать, строки с непроверенными клетками и есть список того, что нужно либо открыть, либо честно пометить как заимствование из вторичного источника.'
                : 'The table is useful exactly to the degree that its cells are filled in honestly. A cell is not a checkmark meaning "this source relates to this question" but a short note: what this particular source says about this particular question, and how confidently. That yields a distinction checkmarks destroy: an empty cell meaning "looked, nothing here on this question" and an empty cell meaning "have not looked yet" are different states, and only the first closes a gap. The second distinction matters more: the cell should remember where a claim came from — an original you opened, or an agent’s retelling. This is the same distinction as the citation rule in the previous chapter, but recorded where the decisions are made. When it is time to write, the rows with unverified cells are the list of what must either be opened or honestly marked as taken from a secondary source.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'У оркестровки есть цена, которую легко не заметить, обещая себе ускорение. Делегирование не убирает работу, а переносит её: с чтения — на постановку задачи и проверку результата. Проверка при этом стоит не одинаково: утверждение, на котором держится раздел, требует открытого оригинала, а фоновая деталь — нет. Поэтому чем больше отдано агентам, тем тщательнее приходится решать, что именно проверять; удвоение числа запусков не удваивает скорость проекта. Отсюда же видно, что не делегируется вовсе: центральный корпус, который вы читаете сами, и ключевые утверждения, которые вы сверяете с оригиналом. Правило двух третей из предыдущей главы говорит, когда освоено поле; crosswalk говорит о другом — какие пробелы всё ещё держат ваш аргумент. Второй вопрос агент за вас не решит, потому что аргумент пока существует только у вас.'
                : 'Orchestration has a cost that is easy to overlook while promising yourself a speedup. Delegation does not remove work; it moves it — from reading to specifying the task and checking the result. And checking is not uniformly expensive: a claim that holds up a section calls for an opened original, a background detail does not. So the more is handed to agents, the more carefully you have to decide what exactly gets verified; doubling the number of runs does not double the speed of the project. The same reasoning marks out what is not delegated at all: the central corpus you read yourself, and the key claims you check against originals. The two-thirds rule from the previous chapter says when the field is mastered; the crosswalk says something else — which gaps still hold up your argument. An agent cannot settle the second question for you, because so far the argument exists only in your head.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Последний урок Эбботта — этический, и автоматизация его только заостряет: исследование требует сомнения и сочувствия одновременно. Сомнения — к данным, инструментам и собственным предвзятостям: не использует ли исследователь источники лишь для подтверждения любимой версии? Сочувствия — к людям за данными: они не иллюстрации теорий и не объекты для сегодняшних оценок. Правило Эбботта стоит применять и к материалам, собранным агентом за секунды: пишите о других так, как вы хотели бы, чтобы исследовали ваши собственные записи, ошибки и обстоятельства.'
                : 'Abbott’s final lesson is ethical, and automation only sharpens it: research demands doubt and sympathy at once. Doubt toward data, tools, and one’s own biases: is the researcher using sources merely to confirm a favored view? Sympathy toward the people behind the data: they are not illustrations of theories or objects of present-day judgment. Abbott’s rule applies equally to material an agent collected in seconds: write about others as you would want your own records, mistakes, and circumstances to be researched.'}
            </p>
          </div>
        </div>
      </section>

      {/* Engineer's summary */}
      <section>
        <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-heading">
            {lang === 'ru' ? 'Итог для практика (краткий блок)' : 'Practitioner’s Summary (short block)'}
          </h3>
          <ul className="text-neutral-300 leading-relaxed space-y-3 list-disc list-inside">
            <li>{lang === 'ru' ? 'Загадка до промпта: пока нет «почему X?» и двух конкурирующих объяснений, агент выдаёт энциклопедическую справку, а не исследование.' : 'Puzzle before prompt: until you have a "why X?" and two competing explanations, an agent produces an encyclopedia entry, not research.'}</li>
            <li>{lang === 'ru' ? 'Словарь до поиска: синонимы, широкие/узкие и исторические термины умножают полноту и запросов, и промптов.' : 'Vocabulary before search: synonyms, broader/narrower and historical terms multiply the recall of both queries and prompts.'}</li>
            <li>{lang === 'ru' ? 'Выбирайте режим осознанно: сканирование для длинных списков, агент для ограниченного пула, собственное чтение для центрального корпуса.' : 'Choose the mode deliberately: scan long lists, run agents over a bounded pool, read the central corpus yourself.'}</li>
            <li>{lang === 'ru' ? 'Проверяйте ответы агентов пятью вопросами к источнику и не цитируйте не открытый вами оригинал как проверенный.' : 'Vet agent answers with the five source questions, and never cite an original you did not open as verified.'}</li>
            <li>{lang === 'ru' ? 'Останавливайтесь по правилу двух третей и ведите crosswalk — суждение, а не поиск, теперь главный вклад исследователя.' : 'Stop by the two-thirds rule and keep a crosswalk — judgment, not search, is now the researcher’s main contribution.'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
