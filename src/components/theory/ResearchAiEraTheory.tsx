"use client";

import React from 'react';
import Term from '@/components/Term';

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
              <p className="text-neutral-100 leading-relaxed font-medium underline decoration-accent-500/50 decoration-2 underline-offset-4">
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
          </div>
        </div>
      </section>

      {/* Chapter 1: Puzzle, not topic */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
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
            <div className="bg-card border-l-4 border-blue-500 p-5 rounded-r-lg">
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
          <h2 className="text-2xl font-bold mb-6 text-purple-400">
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
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-purple-400 font-bold mb-2">
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
          <h2 className="text-2xl font-bold mb-6 text-rose-400">
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
          </div>
        </div>
      </section>

      {/* Chapter 4: Three search modes */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-amber-400">
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
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <h4 className="text-amber-400 font-bold mb-3">
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
          </div>
        </div>
      </section>

      {/* Chapter 5: Evaluating AI-generated knowledge */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
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
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-cyan-400 font-bold mb-2">
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
            {lang === 'ru' ? 'Итог для практика' : 'Practitioner’s Summary'}
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
