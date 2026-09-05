"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Screenshot from '@/components/Screenshot';

export default function SearchRetrievalToSynthesisTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: The list of documents as an interface */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Список документов как интерфейс' : 'Chapter 1: The List of Documents as an Interface'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                За четверть века веб-поиск закрепил одну форму ответа: ранжированный список ссылок. Вы вводите
                запрос, система возвращает документы, отсортированные по оценке релевантности, и на этом её
                работа заканчивается. Дальше начинается ваша: прочитать заголовки и сниппеты, открыть три-четыре
                вкладки, сопоставить, отбросить рекламное, заметить дату публикации, решить, кому верить.
                Интерфейс закреплял разделение труда — машина ранжирует, человек судит.
              </>
            ) : (
              <>
                For a quarter of a century, web search settled on one shape of answer: a ranked list of links.
                You type a query, the system returns documents sorted by an estimate of relevance, and there its
                job ends. Yours begins: read the titles and snippets, open three or four tabs, compare, discard
                the advertising, notice the publication date, decide whom to trust. The interface encoded a
                division of labour — the machine ranks, the human judges.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Это разделение было не столько замыслом, сколько следствием технической скромности. Система не
                умела ответить на вопрос — она умела найти документы, в которых ответ, вероятно, содержится.
                Чираг Шах и Эмили Бендер называют такое устройство <strong>системой доступа к информации</strong>{' '}
                и подчёркивают: её выход — не утверждение о мире, а указание на то, где утверждения о мире
                находятся (<a href="https://doi.org/10.1145/3498366.3505816" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">Shah &amp; Bender 2022</a>). Ответственность за само утверждение оставалась на источнике и на читателе.
              </>
            ) : (
              <>
                That division was less a design philosophy than a consequence of technical modesty. The system
                could not answer a question; it could find documents in which an answer probably sits. Chirag
                Shah and Emily Bender call such a system an <strong>information access system</strong> and press
                the point: its output is not a claim about the world but a pointer to where claims about the
                world live (<a href="https://doi.org/10.1145/3498366.3505816" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">Shah &amp; Bender 2022</a>). Responsibility for the claim itself stayed with the source and the reader.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У этого устройства есть побочные продукты, которые трудно заметить, пока они на месте. Список
                показывает разброс: если пять первых результатов противоречат друг другу, вы видите спорность
                вопроса ещё до того, как прочли хоть один документ. Список показывает{' '}
                <Term id="provenance" lang={lang}>происхождение сведений</Term>: домен, автор и дата — часть
                ответа, а не метаданные о нём. Список допускает{' '}
                <Term id="serendipity" lang={lang}>серендипность</Term>: четвёртая ссылка, за которой вы не шли,
                переопределяет сам вопрос.
              </>
            ) : (
              <>
                This arrangement has by-products that are hard to notice while they are still in place. A list
                displays spread: if the first five results contradict each other, you see that the question is
                contested before reading a single document. A list displays{' '}
                <Term id="provenance" lang={lang}>provenance</Term>: domain, author and date are part of the
                answer, not metadata about it. A list permits{' '}
                <Term id="serendipity" lang={lang}>serendipity</Term> — the fourth link, the one you were not
                looking for, redefines the question itself.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Наконец, список работает как тренажёр. Каждый акт поиска заставляет практиковать микронавыки:
                оценить авторитетность домена, распознать рекламную вставку, переформулировать запрос после
                неудачи, сравнить две версии события. Информационная грамотность здесь — не отдельный предмет, а
                побочный эффект ежедневного пользования. Поэтому смена формы ответа затрагивает больше, чем
                удобство: она меняет то, чему интерфейс каждый день учит миллиард людей.
              </>
            ) : (
              <>
                Finally, a list works as a training ground. Every act of search rehearses micro-skills: judge a
                domain&apos;s authority, recognise an ad slot, reformulate after a failed query, compare two
                versions of an event. Information literacy here is not a school subject but a side effect of
                daily use. So changing the shape of the answer touches more than ergonomics: it changes what the
                interface teaches a billion people every day.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: An answer instead of a list */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Ответ вместо списка' : 'Chapter 2: An Answer Instead of a List'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <Term id="generative-search" lang={lang}>Генеративный поиск</Term> устроен как конвейер из трёх
                шагов. Запрос превращается в одно или несколько поисковых обращений; найденные фрагменты
                документов складываются в контекст языковой модели; модель пишет связный текст, опираясь на этот
                контекст. Механика извлечения — та же <Term id="rag" lang={lang}>RAG</Term>, что разобрана в
                комнате <Link href={`/${lang}/rooms/ai-rag`} className="text-accent-400 hover:underline">«RAG: Подключение к реальности»</Link>. Новое здесь не в извлечении, а в том, что выдаётся
                наружу: наружу выдаётся текст.
              </>
            ) : (
              <>
                <Term id="generative-search" lang={lang}>Generative search</Term> is a three-step pipeline. The
                query is turned into one or more retrieval calls; the retrieved document fragments are loaded
                into a language model&apos;s context; the model writes a coherent text grounded in that context.
                The retrieval mechanics are the same <Term id="rag" lang={lang}>RAG</Term> covered in the
                <Link href={`/${lang}/rooms/ai-rag`} className="text-accent-400 hover:underline">&quot;RAG: Connecting to Reality&quot;</Link> room. What is new is not the retrieval but what leaves
                the system: what leaves the system is prose.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сегодня это три разные продуктовые формы. <Term id="ai-overviews" lang={lang}>AI Overviews</Term> у Google ставит сгенерированный блок над
                органическими ссылками — список никуда не делся, но потерял первый экран. Perplexity строит
                продукт вокруг ответа: ссылки присутствуют как чипы-сноски внутри абзаца. ChatGPT Search
                встраивает веб в диалог, где обращение к поиску — один из шагов рассуждения. Компании разные,
                перемена общая: единица выдачи перестала быть документом.
              </>
            ) : (
              <>
                Today this comes in three product shapes. Google&apos;s <Term id="ai-overviews" lang={lang}>AI Overviews</Term> places a generated block
                above the organic links — the list is still there, but it lost the first screen. Perplexity
                builds the product around the answer: sources appear as citation chips inside the paragraph.
                ChatGPT Search folds the web into a dialogue where a search call is one step of reasoning.
                Different companies, one shared change: the unit of output is no longer a document.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для пользователя исчезает ровно та работа, которую раньше делал он сам, — сопоставление.
                Формулировка, на которую уходило десять минут и семь вкладок, приходит за десять секунд. Выгода
                реальна, и отрицать её бессмысленно. Но платит за неё слой происхождения. В списке утверждение и
                его источник — один объект: ссылка и есть документ. В синтезе это два объекта, соединённые
                решением модели, и связь между ними приходится проверять отдельным действием.
              </>
            ) : (
              <>
                What disappears for the user is exactly the work the user used to do: comparison. A formulation
                that cost ten minutes and seven tabs arrives in ten seconds. The gain is real and there is no
                point denying it. But the provenance layer pays for it. In a list, the claim and its source are
                one object: the link is the document. In a synthesis they are two objects joined by a
                model&apos;s decision, and the join has to be checked as a separate action.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Меняется и форма ответа. Список показывал разногласие самой вёрсткой: три источника — три
                позиции, видимые одновременно. Синтез говорит одним голосом, и разногласие попадает в текст,
                только если модель решила его упомянуть. При этом уверенная интонация не связана с надёжностью
                содержания: беглость — свойство генератора, а не признак подтверждённости утверждения. К этому
                различию мы вернёмся в четвёртой главе, где оно измерено.
              </>
            ) : (
              <>
                The shape of the answer changes too. A list showed disagreement through layout: three sources,
                three positions, visible at once. A synthesis speaks in one voice, and disagreement reaches the
                text only if the model chose to mention it. Meanwhile a confident register says nothing about
                the reliability of the content: fluency is a property of the generator, not a sign that a claim
                is supported. We return to that distinction in chapter 4, where it has been measured.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3: The diagnosis written before ChatGPT */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Диагноз, поставленный до ChatGPT' : 'Chapter 3: The Diagnosis Written Before ChatGPT'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Статья <a href="https://doi.org/10.1145/3498366.3505816" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">«Situating Search»</a> вышла в марте 2022 года на конференции CHIIR — за восемь месяцев до
                публичного запуска ChatGPT. Шах и Бендер разбирали тогда ещё гипотетическое предложение:
                заменить выдачу документов языковой моделью, отвечающей напрямую. Для чтения спора сегодня это
                существенно. Перед нами не реакция на популярный продукт, а разбор идеи, сделанный до того, как
                у идеи появились пользователи, выручка и инерция.
              </>
            ) : (
              <>
                <a href="https://doi.org/10.1145/3498366.3505816" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">&quot;Situating Search&quot;</a> appeared in March 2022 at the CHIIR conference — eight months
                before ChatGPT&apos;s public launch. Shah and Bender were analysing a then-hypothetical
                proposal: replace the document list with a language model that answers directly. That matters
                for how the debate reads today. This is not a reaction to a popular product but an analysis of
                an idea, written before the idea had users, revenue and momentum.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Их возражение состоит из трёх частей. Первая — прозрачность и происхождение: когда ответ
                синтезирован, пропадает возможность спросить, откуда взято конкретное утверждение; система не
                «знает», а собирает, но выдаёт результат в форме знания. Вторая — интерактивность: поиск был
                циклом «запрос → просмотр → переформулировка», и проверку выполнял именно цикл; ответ с первого
                раза этот цикл обрывает. Третья — серендипность: то, чего вы не искали, до вас больше не
                доходит.
              </>
            ) : (
              <>
                Their objection has three parts. First, transparency and provenance: when an answer is
                synthesised, you lose the ability to ask where a particular claim came from; the system does not
                &quot;know&quot; but assembles, while presenting the result in the form of knowledge. Second,
                interactivity: search was a loop — query, scan, reformulate — and the loop was what performed
                verification; a right-first-time answer cuts the loop short. Third, serendipity: what you were
                not looking for no longer reaches you.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Под этим лежит аргумент из более ранней работы — «On the Dangers of Stochastic Parrots» (FAccT
                2021). Языковая модель моделирует распределение форм языка, а не связь языка с миром; связность
                текста создаётся статистикой, а осмысленность достраивает читатель. Отсюда практическое
                следствие для поиска: беглый, хорошо построенный ответ считывается как компетентный, хотя
                беглость — единственное, что здесь действительно гарантировано.
              </>
            ) : (
              <>
                Underneath sits an argument from an earlier paper — &quot;On the Dangers of Stochastic
                Parrots&quot; (FAccT 2021). A language model models the distribution of linguistic form, not the
                link between language and the world; coherence comes from statistics, and the reader supplies
                the meaning. The practical consequence for search: a fluent, well-built answer reads as
                competent, although fluency is the only thing actually guaranteed.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В 2024 году Шах и Бендер выпустили конструктивное продолжение в <a href="https://doi.org/10.1145/3649468" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">ACM Transactions on the Web</a>:
                какими должны быть хорошие инструменты доступа к информации и здоровый веб. Их критерии —
                сохранённая связь утверждения с источником, поддержка пользовательского цикла вместо его
                сокращения, явное разделение того, что система нашла, и того, что она сформулировала сама.
                Позиция авторов, таким образом, не «запретить», а «спроектировать иначе» — и по этим критериям
                конкретные продукты можно оценивать по отдельности.
              </>
            ) : (
              <>
                In 2024 Shah and Bender published a constructive sequel in <a href="https://doi.org/10.1145/3649468" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">ACM Transactions on the Web</a>: what
                good information-access tools and a healthy web would look like. Their criteria — keep the link
                between claim and source intact, support the user&apos;s loop instead of shortening it, and mark
                clearly what the system found versus what it composed itself. Their position is therefore not
                &quot;ban it&quot; but &quot;design it differently&quot; — and by those criteria individual
                products can be judged one at a time.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4: What the measurements show */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Что показали измерения' : 'Chapter 4: What the Measurements Show'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Позицию можно разделять или отвергать; полезнее посмотреть, что удалось измерить. Первое
                измерение — <Term id="verifiability" lang={lang}>проверяемость</Term>. Лю, Чжан и Лян (EMNLP
                Findings, 2023) вручную разметили ответы четырёх генеративных поисковых систем и получили две
                цифры: в среднем лишь около <strong>51,5 %</strong> сгенерированных предложений полностью
                подтверждаются приставленными к ним ссылками, и лишь около <strong>74,5 %</strong> ссылок
                действительно подтверждают предложение, к которому приставлены.
              </>
            ) : (
              <>
                You may share the position or reject it; it is more useful to look at what has been measured.
                The first measurement is <Term id="verifiability" lang={lang}>verifiability</Term>. Liu, Zhang
                and Liang (EMNLP Findings, 2023) hand-annotated answers from four generative search engines and
                arrived at two numbers: on average only about <strong>51.5%</strong> of generated sentences are
                fully supported by the citations attached to them, and only about <strong>74.5%</strong> of
                citations actually support the sentence they are attached to.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отдельного внимания заслуживает их наблюдение о корреляции: ответы, которые пользователи
                оценивали как более полезные и беглые, в среднем оказывались <strong>менее</strong> проверяемыми.
                Это переворачивает бытовую эвристику «выглядит убедительно — значит надёжно». И это объясняет,
                почему наличие сносок само по себе проблему не закрывает: типичный отказ выглядит как
                правдоподобная фраза с почти релевантной ссылкой, а не как заметная глазу ошибка.
              </>
            ) : (
              <>
                Their correlation finding deserves separate attention: answers that users rated as more useful
                and more fluent were on average <strong>less</strong> verifiable. That inverts the everyday
                heuristic &quot;looks convincing, therefore reliable&quot;. It also explains why the presence of
                footnotes does not close the problem: the typical failure looks like a plausible sentence with
                an almost-relevant citation, not like a visible error.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второе измерение — разнообразие. Шарма, Ляо и Сяо (CHI 2024) сравнили обычный поиск с поиском на
                базе языковой модели в задачах, где важна позиция, и обнаружили: генеративный интерфейс усиливает
                избирательное восприятие — люди чаще запрашивают и получают подтверждение уже имеющегося мнения.
                Эффект растёт, когда модель сама склоняется к какой-то точке зрения. Смещение переехало из
                ранжирования в синтез — туда, где его труднее заметить, потому что оно не выглядит как порядок
                ссылок.
              </>
            ) : (
              <>
                The second measurement is diversity. Sharma, Liao and Xiao (CHI 2024) compared conventional
                search with LLM-powered search on opinion-laden tasks and found that the generative interface
                strengthens selective exposure — people more often query for, and receive, confirmation of the
                view they already hold. The effect grows when the model itself leans toward a position. Bias
                moved from ranking into synthesis — where it is harder to notice, because it no longer looks
                like an order of links.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Третье измерение — поведение. Чжоу и Ли (2024) изучали, почему пользователи переходят от
                поисковых систем к генеративным. Ведущие мотивы — воспринимаемая экономия усилий и удобство
                готовой формулировки, а не уверенность в точности. Для спора это важная деталь: переход
                происходит не потому, что люди сочли синтез более надёжным, а потому, что он дешевле по усилиям.
                Значит, вопрос проверяемости остаётся практическим — он не решится сам собой по мере привыкания
                пользователей.
              </>
            ) : (
              <>
                The third measurement is behaviour. Zhou and Li (2024) studied why users switch from search
                engines to generative AI. The leading motives are perceived effort saving and the convenience of
                a ready formulation — not confidence in accuracy. That detail matters for the debate: the switch
                is not happening because people judged synthesis more reliable, but because it is cheaper in
                effort. So verifiability stays a practical question — it will not resolve itself as users grow
                accustomed.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: Who pays for the source */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Кто платит за источник' : 'Chapter 5: Who Pays for the Source'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У сдвига есть слой, невидимый из интерфейса, — экономика источников. Шах и Уэст (<a href="https://arxiv.org/abs/2402.11707" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">arXiv:2402.11707</a>,
                2024) описывают петлю обратной связи: синтез отвечает на вопрос на месте, клик по источнику не
                происходит, источник теряет трафик, а вместе с ним рекламу, подписки и мотивацию публиковать.
                Вопрос здесь не о справедливости, а об устойчивости: генеративный поиск питается текстами,
                производство которых он же и обесценивает.
              </>
            ) : (
              <>
                The shift has a layer invisible from the interface: the economics of sources. Shah and West
                (<a href="https://arxiv.org/abs/2402.11707" target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">arXiv:2402.11707</a>, 2024) describe a feedback loop — the synthesis answers the question in place,
                the click to the source never happens, the source loses traffic and with it advertising,
                subscriptions and the incentive to publish. The question is not fairness but sustainability:
                generative search feeds on texts whose production it devalues.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Посмотреть на эту петлю можно нейтральным инструментом. Публичная статистика Wikimedia
                показывает просмотры страниц английской Википедии с разбивкой по типу обращения: людьми
                («User») и автоматикой («Spider», «Automated»). Ниже — снимок этой панели за последние два
                года; обратите внимание не на абсолютные величины, а на две линии сразу.
              </>
            ) : (
              <>
                This loop can be inspected with a neutral instrument. Wikimedia&apos;s public statistics show
                page views of English Wikipedia split by the type of request: humans (&quot;User&quot;) and
                automation (&quot;Spider&quot;, &quot;Automated&quot;). Below is a capture of that dashboard
                over the last two years; watch the two lines together rather than the absolute values.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/search-retrieval-to-synthesis/wikimedia-pageviews-by-agent-type.png"
            alt={
              ru
                ? 'Панель Wikimedia Statistics: просмотры страниц английской Википедии за два года с разбивкой по типу обращения — люди, поисковые обходчики и автоматические клиенты.'
                : 'Wikimedia Statistics dashboard: two years of English Wikipedia page views split by agent type — users, spiders, and automated clients.'
            }
            width={1383}
            height={868}
            caption={
              ru
                ? 'Wikimedia Statistics, метрика «Total page views» с фильтром по типу обращения. Нажмите, чтобы рассмотреть.'
                : 'Wikimedia Statistics, the "Total page views" metric filtered by agent type. Tap to view larger.'
            }
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Как это читать. Человеческая линия за два года дрейфует вниз — примерно с 7,6 до 6,7 млрд
                просмотров в месяц, без обвала, но и без возврата. Линия автоматических обращений за тот же
                период выросла с величин около 0,8 млрд до пиков около 3 млрд. И сразу оговорка, без которой
                график сработает против нас: резкие переходы между «Spider» и «Automated» в середине периода
                выглядят как следствие переклассификации агентов в самом инструменте, а не как реальный скачок
                трафика. Поэтому опираться стоит на человеческую линию и на общий рост нечеловеческих
                обращений, а не на распределение между двумя ботовыми категориями.
              </>
            ) : (
              <>
                How to read it. The human line drifts down over two years — from roughly 7.6 to 6.7 billion
                monthly views, no collapse but no recovery either. The automated line over the same period grew
                from around 0.8 billion to peaks near 3 billion. And immediately the caveat without which the
                chart works against us: the sharp handovers between &quot;Spider&quot; and &quot;Automated&quot;
                mid-period look like a reclassification of agents inside the instrument rather than a real jump
                in traffic. So lean on the human line and on the overall growth of non-human requests, not on
                how the two bot categories divide between themselves.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Что этот график доказывает и чего не доказывает. Он показывает, что состав обращений к
                крупному источнику меняется: доля людей снижается, доля машин растёт. Он{' '}
                <strong>не</strong> доказывает, что причина — именно генеративный поиск: на человеческую линию
                влияют и мобильные привычки, и изменения в самой поисковой выдаче, и сезонность. Полезен он
                тем, что делает механизм наблюдаемым: у источника действительно появляется читатель, который
                не кликает и не возвращается.
              </>
            ) : (
              <>
                What the chart proves and what it does not. It shows that the composition of requests to a major
                source is changing: the human share falls, the machine share rises. It does <strong>not</strong>{' '}
                prove that generative search is the cause: the human line is also moved by mobile habits, by
                changes in search results themselves, and by seasonality. Its value is making the mechanism
                observable — a source really is acquiring a reader that does not click and does not come back.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вторая петля — качество подложки. Когда доля синтетического текста в вебе растёт, следующие
                модели обучаются на выходе предыдущих. Даже без резких эффектов деградации это сужает
                разнообразие: редкие формулировки, локальные данные и нишевые источники представлены слабее, чем
                усреднённая версия консенсуса. Поиск начинает всё лучше отвечать на типичное и всё хуже — на
                редкое, хотя именно редкое чаще всего и заставляет человека искать.
              </>
            ) : (
              <>
                The second loop is substrate quality. As the share of synthetic text on the web grows, the next
                generation of models trains on the output of the previous one. Even without dramatic degradation
                effects, this narrows diversity: rare phrasings, local data and niche sources are represented
                more weakly than an averaged version of the consensus. Search gets steadily better at the
                typical and worse at the rare — although it is usually the rare that makes a person search at
                all.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Третья петля — стимулы тех, кто публикует. Если трафик приносит не человек, а обходчик, выгодной
                становится оптимизация под извлечение: короткие фактические блоки, разметка, повторение
                утверждений в удобной для цитирования форме. Тексты, рассчитанные на чтение — с оговорками,
                контекстом и признанием разногласия, — проигрывают текстам, рассчитанным на цитирование. Форма
                ответа наверху постепенно меняет форму источника внизу.
              </>
            ) : (
              <>
                The third loop is publisher incentives. If your traffic comes from a crawler rather than a
                person, optimising for extraction pays: short factual blocks, structured markup, claims repeated
                in citation-friendly form. Texts written to be read — with caveats, context and acknowledged
                disagreement — lose to texts written to be quoted. The shape of the answer at the top gradually
                reshapes the source at the bottom.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ни одна из трёх петель не делает генеративный поиск невозможным. Все три делают его зависимым от
                решений, которые сегодня принимаются вне поля зрения пользователя: платит ли поисковая система
                за доступ к источникам, отдаёт ли трафик, показывает ли ссылки так, чтобы по ним переходили.
                Отсюда полезная привычка — читать продуктовые изменения (расширение сгенерированного блока,
                свёрнутые в сноску ссылки) как экономические решения, а не только как решения дизайна.
              </>
            ) : (
              <>
                None of the three loops makes generative search impossible. All three make it dependent on
                decisions currently taken outside the user&apos;s view: whether the search platform pays for
                access to sources, whether it passes traffic on, whether it displays links in a way that gets
                them clicked. Hence a useful habit — read product changes (a growing generated block, links
                folded into a footnote) as economic decisions, not only as design ones.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6: How to search when search answers */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Как искать, когда поиск отвечает' : 'Chapter 6: How to Search When Search Answers'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Практический вывод из четвёртой главы формулируется одной фразой: относитесь к синтезированному
                ответу как к гипотезе и указателю, а не как к ответу. Гипотеза — потому что предложение может
                быть правдоподобным и при этом неподтверждённым, и по виду эти два случая не различаются.
                Указатель — потому что главная ценность выдачи часто в том, какие источники она подняла, а не в
                том, как она их пересказала.
              </>
            ) : (
              <>
                The practical upshot of chapter 4 fits in one sentence: treat a synthesised answer as a
                hypothesis and an index, not as an answer. A hypothesis, because a sentence can be plausible and
                unsupported at the same time, and the two cases look identical. An index, because the real value
                of the output is often which sources it surfaced, not how it paraphrased them.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда протокол, который стоит выполнять по порядку. Сначала сформулируйте, какое именно
                утверждение вам нужно проверить — обычно оно одно, а не весь абзац. Затем откройте не меньше двух
                процитированных источников: не для чтения целиком, а чтобы найти в них ту самую фразу. Сверьте
                связку «утверждение → ссылка»: подтверждает ли источник именно это, а не соседнее. Задайте
                опровергающий запрос, сформулированный так, чтобы найти сильное возражение. И только затем
                формулируйте вывод, отметив, что осталось непроверенным.
              </>
            ) : (
              <>
                Hence a protocol worth running in order. First, state which claim exactly you need to check — it
                is usually one claim, not the whole paragraph. Then open at least two cited sources: not to read
                them end to end, but to locate that specific sentence in them. Check the claim-to-citation join:
                does the source support this claim or a neighbouring one? Then issue a disconfirming query,
                phrased to surface the strongest objection. Only after that write your conclusion, noting what
                stayed unverified.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отдельный навык — знать, когда синтез не подходит вовсе. Свежие события: модель отвечает по
                тому, что успело попасть в индекс. Первичные документы: закон, стандарт или протокол нужно
                читать в оригинале, а не в пересказе. Спорные темы: там, где важен разброс позиций, список
                показывает то, что синтез усредняет, — и здесь же работает эффект{' '}
                <Term id="echo-chamber" lang={lang}>эхо-камеры</Term> из четвёртой главы. Право и медицина: цена
                ошибки в цитировании превышает выигрыш во времени.
              </>
            ) : (
              <>
                A separate skill is knowing when synthesis does not fit at all. Breaking events: the model
                answers from whatever made it into the index. Primary documents: a law, a standard or a protocol
                must be read in the original, not in paraphrase. Contested topics: where the spread of positions
                is the point, a list shows what a synthesis averages away — and this is exactly where the{' '}
                <Term id="echo-chamber" lang={lang}>echo chamber</Term> effect from chapter 4 operates. Law and
                medicine: the cost of a citation error exceeds the time saved.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                И о честной стороне сделки. Генеративный поиск заметно снижает порог входа в незнакомую область:
                он выдаёт словарь, карту подтем и имена, с которыми дальше можно работать обычным поиском. Для
                новичка это компенсирует часть той информационной грамотности, которую он ещё не наработал.
                Разумная стратегия — использовать синтез там, где он силён (ориентация, терминология, первый
                набросок структуры), и возвращаться к списку там, где нужна ответственность за конкретное
                утверждение.
              </>
            ) : (
              <>
                And the honest side of the bargain. Generative search markedly lowers the entry barrier to an
                unfamiliar field: it hands you a vocabulary, a map of subtopics and the names you can then work
                with in ordinary search. For a newcomer that offsets part of the information literacy they have
                not yet built. The sensible strategy is to use synthesis where it is strong — orientation,
                terminology, a first draft of structure — and return to the list wherever responsibility for a
                specific claim is required.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-5 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
              {ru ? 'Источники' : 'Sources'}
            </p>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>
                Shah, C. &amp; Bender, E. M. (2022). &quot;Situating Search&quot;. <em>CHIIR &apos;22</em>,
                221–232.{' '}
                <a
                  href="https://doi.org/10.1145/3498366.3505816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1145/3498366.3505816
                </a>
              </li>
              <li>
                Shah, C. &amp; Bender, E. M. (2024). &quot;Envisioning Information Access Systems: What Makes
                for Good Tools and a Healthy Web?&quot;. <em>ACM Transactions on the Web</em> 18(3).{' '}
                <a
                  href="https://doi.org/10.1145/3649468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1145/3649468
                </a>
              </li>
              <li>
                Bender, E. M., Gebru, T., McMillan-Major, A. &amp; Shmitchell, S. (2021). &quot;On the Dangers
                of Stochastic Parrots: Can Language Models Be Too Big?&quot;. <em>FAccT &apos;21</em>, 610–623.{' '}
                <a
                  href="https://doi.org/10.1145/3442188.3445922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1145/3442188.3445922
                </a>
              </li>
              <li>
                Liu, N. F., Zhang, T. &amp; Liang, P. (2023). &quot;Evaluating Verifiability in Generative
                Search Engines&quot;. <em>Findings of EMNLP 2023</em>.{' '}
                <a
                  href="https://arxiv.org/abs/2304.09848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  arxiv.org/abs/2304.09848
                </a>
              </li>
              <li>
                Sharma, N., Liao, Q. V. &amp; Xiao, Z. (2024). &quot;Generative Echo Chamber? Effects of
                LLM-Powered Search Systems on Diverse Information Seeking&quot;. <em>CHI &apos;24</em>.{' '}
                <a
                  href="https://doi.org/10.1145/3613904.3642459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1145/3613904.3642459
                </a>
              </li>
              <li>
                Shah, C. &amp; West, J. (2024). &quot;Search Engines Post-ChatGPT: How Generative Artificial
                Intelligence Could Make Search Less Reliable&quot;.{' '}
                <a
                  href="https://arxiv.org/abs/2402.11707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  arxiv.org/abs/2402.11707
                </a>
              </li>
              <li>
                Zhou, T. &amp; Li, S. (2024). &quot;Understanding user switch of information seeking: From
                search engines to generative AI&quot;.{' '}
                <em>Journal of Librarianship and Information Science</em>.{' '}
                <a
                  href="https://doi.org/10.1177/09610006241244800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
                >
                  doi.org/10.1177/09610006241244800
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-accent-500/5 border-l-4 border-accent-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">{ru ? 'Куда дальше' : 'Where to Go Next'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru ? (
                <>
                  Механика извлечения, на которой стоит генеративный поиск, — в комнате{' '}
                  <Link href={`/${lang}/rooms/ai-rag`} className="text-accent-400 hover:underline">«RAG: Подключение к реальности»</Link>. Практика цитирования и калибровки доверия — в{' '}
                  <Link href={`/${lang}/rooms/research-grounding`} className="text-accent-400 hover:underline">«Исследования и заземление (grounding)»</Link>. Как агент планирует подзапросы и
                  собирает ответ с ссылками — в <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-400 hover:underline">«Глубокий поиск в AI-агентах»</Link>. Строгий
                  протокол проверки источников для академической работы — в{' '}
                  <Link href={`/${lang}/rooms/ai-literature-review`} className="text-accent-400 hover:underline">«Литературный обзор в эпоху ИИ»</Link>.
                </>
              ) : (
                <>
                  The retrieval mechanics generative search stands on are in the{' '}
                  <Link href={`/${lang}/rooms/ai-rag`} className="text-accent-400 hover:underline">&quot;RAG: Connecting to Reality&quot;</Link> room. Citation practice and trust calibration are
                  in <Link href={`/${lang}/rooms/research-grounding`} className="text-accent-400 hover:underline">&quot;Research &amp; Grounding&quot;</Link>. How an agent plans sub-queries and
                  assembles a cited answer is in <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-400 hover:underline">&quot;Deep Search in AI Agents&quot;</Link>. The
                  rigorous source-verification protocol for academic work is in{' '}
                  <Link href={`/${lang}/rooms/ai-literature-review`} className="text-accent-400 hover:underline">&quot;Literature Review in the AI Era&quot;</Link>.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
