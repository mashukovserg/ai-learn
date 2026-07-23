"use client";

import React from 'react';
import Term from '@/components/Term';

const PAPER_URL = 'https://doi.org/10.1007/s10462-024-10902-3';

export default function AiLiteratureReviewsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Инструменты и их пределы' : 'The Tools and Their Limits'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Обзор литературы — идеальный полигон для ИИ: работа огромная, рутинная в средней части и критически важная по результату. Эта комната опирается на масштабный обзор инструментов этой области (<a href={PAPER_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>): авторы проанализировали 21 систему полуавтоматизации систематических обзоров по 34 признакам и отдельно — 11 новых LLM-инструментов для поиска статей и академического письма.</>
              ) : (
                <>A literature review is an ideal proving ground for AI: the work is enormous, routine in its middle stretch, and critical in its outcome. This room draws on a large survey of the field&apos;s tools (<a href={PAPER_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>): the authors analyzed 21 systems for semi-automating systematic reviews across 34 features, plus 11 new LLM tools for finding papers and academic writing.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Если комната про метод Эбботта отвечала на вопрос «как думать» при работе с источниками, эта отвечает на вопрос «чем работать»: какие инструменты существуют, что именно в них автоматизировано, где проходит граница между полезной автоматизацией и опасной, и почему исследователи до сих пор массово сидят в Excel.'
                : 'If the Abbott method room answered "how to think" when working with sources, this one answers "what to work with": which tools exist, what exactly they automate, where the line runs between useful and dangerous automation, and why researchers still overwhelmingly work in Excel.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: What an SLR is and why it is expensive */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-info-400">
            {lang === 'ru' ? 'Глава 1: Что такое систематический обзор и почему он дорогой' : 'Chapter 1: What a Systematic Review Is and Why It Is Expensive'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <><Term id="slr" lang={lang}>Систематический обзор</Term> отличается от обычного «обзора литературы» так же, как перепись населения от прогулки по городу. Это строгая методология: найти и оценить всю релевантную литературу по конкретному вопросу, следуя заранее зафиксированному протоколу, который минимизирует предвзятость. Методология родилась в доказательной медицине 1990-х — там от полноты обзора зависели клинические рекомендации — и затем распространилась на социальные науки, инженерию, образование и менеджмент.</>
              ) : (
                <>A <Term id="slr" lang={lang}>systematic review</Term> differs from an ordinary &quot;literature review&quot; the way a census differs from a stroll through town. It is a rigorous methodology: find and appraise all relevant literature on a specific question, following a pre-registered protocol that minimizes bias. The methodology was born in 1990s evidence-based medicine — where clinical guidelines depended on the completeness of the review — and then spread to social sciences, engineering, education, and management.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Цена этой строгости высока. Типичный систематический обзор занимает больше года, требует команды доменных экспертов, платных подписок на базы данных и периодических обновлений, чтобы не устареть. При этом объём публикаций растёт с каждым годом — работы становится больше, а не меньше. Протокол состоит из шести стадий: планирование (вопросы и протокол), поиск (запросы и снежный ком), скрининг (фильтрация по критериям включения), извлечение и синтез данных, оценка качества исследований и отчёт. Каждая стадия — кандидат на автоматизацию, но, как мы увидим, ИИ распределён по ним крайне неравномерно.'
                : 'The price of this rigor is high. A typical systematic review takes more than a year, requires a team of domain experts, paid database subscriptions, and periodic updates to stay current. Meanwhile the volume of publications grows every year — the work is getting bigger, not smaller. The protocol has six stages: planning (questions and protocol), search (queries and snowballing), screening (filtering by inclusion criteria), data extraction and synthesis, quality assessment, and reporting. Every stage is a candidate for automation, but as we will see, AI is spread across them very unevenly.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: Where AI lives — screening and active learning */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">
            {lang === 'ru' ? 'Глава 2: Где живёт ИИ — скрининг и active learning' : 'Chapter 2: Where AI Lives — Screening and Active Learning'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Поиск выдаёт тысячи кандидатов, из которых релевантны единицы процентов. Скрининг — чтение заголовков и абстрактов с решением «включить/исключить» — самая монотонная стадия обзора, и именно здесь сосредоточен почти весь ИИ: из 21 инструмента в обзоре 19 применяют машинное обучение для скрининга и лишь 4 — для извлечения данных. Стадии планирования, оценки качества и отчёта исторически почти не получали поддержки.'
                : 'Search returns thousands of candidates, of which only a few percent are relevant. Screening — reading titles and abstracts and deciding include/exclude — is the most monotonous stage of a review, and it is where nearly all the AI is concentrated: of the 21 tools in the survey, 19 apply machine learning to screening and only 4 to data extraction. Planning, quality assessment, and reporting historically received almost no support.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Главный механизм скрининга — <Term id="active-learning" lang={lang}>active learning</Term>. Исследователь размечает небольшой набор seed-статей как релевантные и нерелевантные; классификатор обучается и ранжирует остальные по вероятности включения; человек проверяет верх списка, его решения дообучают модель — и цикл повторяется. Порог входа удивительно низкий: ASReview начинает с одной релевантной и одной нерелевантной статьи, Rayyan просит пять, Colandr — десять, SysRev — тридцать. Большинство инструментов дообучаются в реальном времени; некоторые (SysRev) — по расписанию, за ночь.</>
              ) : (
                <>The core screening mechanism is <Term id="active-learning" lang={lang}>active learning</Term>. The researcher labels a small set of seed papers as relevant or irrelevant; a classifier trains and ranks the rest by inclusion probability; the human reviews the top of the list, their decisions retrain the model — and the cycle repeats. The entry threshold is surprisingly low: ASReview starts with one relevant and one irrelevant paper, Rayyan asks for five, Colandr for ten, SysRev for thirty. Most tools retrain in real time; some (SysRev) run on a schedule, overnight.</>
              )}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-purple-400 font-bold mb-2">
                {lang === 'ru' ? 'Почему это экономит месяцы' : 'Why This Saves Months'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Ранжирование меняет порядок чтения: релевантные статьи всплывают наверх, и большинство находок случается в первой трети списка. Исследователь по-прежнему принимает каждое решение сам — модель лишь сортирует очередь. На корпусе в несколько тысяч абстрактов это превращает месяцы чтения в недели.'
                  : 'Ranking changes the reading order: relevant papers float to the top, and most finds happen in the first third of the list. The researcher still makes every decision — the model only sorts the queue. On a corpus of several thousand abstracts, this turns months of reading into weeks.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: 21 tools under the microscope */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-rose-400">
            {lang === 'ru' ? 'Глава 3: 21 инструмент под микроскопом' : 'Chapter 3: 21 Tools Under the Microscope'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Авторы обзора оценили инструменты по 34 признакам: 23 общих (импорт ссылок, коллаборация, дедупликация, PRISMA-отчёты, цена) и 11 связанных с ИИ (задача, подход, представление текста, минимальные требования, пред- и пост-скрининговая поддержка). Главный вывод неожиданно отрезвляющий: внутри большинства инструментов работает ИИ прошлого поколения. Самый частый классификатор — SVM, метод 1990-х; половина систем всё ещё представляет текст как «мешок слов» (Bag of Words), и лишь новейшие перешли на эмбеддинги вроде SciBERT и Sentence-BERT (<a href={PAPER_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>).</>
              ) : (
                <>The survey&apos;s authors scored the tools on 34 features: 23 general ones (reference import, collaboration, deduplication, PRISMA reporting, price) and 11 AI-related ones (task, approach, text representation, minimum requirements, pre- and post-screening support). The headline finding is soberingly unexpected: most tools run last-generation AI inside. The most common classifier is the SVM, a 1990s method; half the systems still represent text as a Bag of Words, and only the newest have moved to embeddings like SciBERT and Sentence-BERT (<a href={PAPER_URL} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>).</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Выбор инструмента зависит от задачи. Вне биомедицины выделяется ASReview: открытый код, локальный запуск и выбор классификаторов от логистической регрессии до нейросетей. В биомедицине сильны Covidence, EPPI-Reviewer и Rayyan — с готовыми классификаторами рандомизированных контролируемых испытаний (RCT) и подсветкой PICO-элементов. Для исследовательских проектов интересны Iris.ai с интерактивными тематическими картами и Colandr, где пользователь задаёт собственные категории для классификации. Показательные пробелы: ни один инструмент не умеет сам подтягивать ссылки из библиографических баз, лишь 4 из 21 открывают код, и только один поддерживает «живой обзор» с автодобавлением новых статей.'
                : 'Tool choice depends on the task. Outside biomedicine, ASReview stands out: open source, local execution, and a choice of classifiers from logistic regression to neural networks. In biomedicine, Covidence, EPPI-Reviewer, and Rayyan are strong — with pre-built classifiers for randomized controlled trials (RCTs) and PICO element highlighting. For exploratory projects, Iris.ai with its interactive topic maps and Colandr, where users define their own classification categories, are interesting. Telling gaps: no tool can automatically fetch references from bibliographic databases, only 4 of 21 release their code, and just one supports a "living review" that auto-adds new papers.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4: The new generation — LLM tools */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-warning-400">
            {lang === 'ru' ? 'Глава 4: Новое поколение — LLM-инструменты' : 'Chapter 4: The New Generation — LLM Tools'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>С 2023 года параллельно классическим SLR-системам выросло новое семейство: инструменты на больших языковых моделях. Обзор выделяет 11 систем в двух категориях. Поисковики (Elicit, Consensus, Scite, Scispace, Perplexity, EvidenceHunt) принимают вопрос на естественном языке и возвращают релевантные статьи с выжимками — вместо булевых запросов по ключевым словам. Писательские ассистенты (Jenni.ai, Silatus, Textero.ai) генерируют черновик академического текста по описанию и итеративно дорабатывают его вместе с пользователем.</>
              ) : (
                <>Since 2023, a new family has grown alongside classic SLR systems: tools built on large language models. The survey identifies 11 systems in two categories. Search engines (Elicit, Consensus, Scite, Scispace, Perplexity, EvidenceHunt) take a natural language question and return relevant papers with summaries — replacing boolean keyword queries. Writing assistants (Jenni.ai, Silatus, Textero.ai) generate a draft of academic text from a description and refine it iteratively with the user.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Технически почти все они — обёртки над OpenAI API, усиленные <Term id="rag" lang={lang}>RAG</Term>: модель сначала находит релевантные фрагменты в базе научных статей, а затем отвечает, опираясь на них, что снижает выдумывание фактов. Важная деталь: эти инструменты не покрывают стадии систематического обзора — они не ведут протокол, не считают критерии включения, не строят PRISMA-диаграммы. Авторы обзора оценивают их трезво: писательские ассистенты пока полезнее студентам с эссе, чем исследователям с обзорами. Но их функции — естественно-языковой поиск и черновики текста — почти наверняка будут встроены в SLR-инструменты следующего поколения.</>
              ) : (
                <>Technically, almost all of them are wrappers over the OpenAI API, reinforced with <Term id="rag" lang={lang}>RAG</Term>: the model first retrieves relevant passages from a database of scientific papers and then answers grounded in them, which reduces fact invention. A key detail: these tools do not cover the stages of a systematic review — they keep no protocol, track no inclusion criteria, build no PRISMA diagrams. The survey&apos;s authors judge them soberly: writing assistants are currently more useful to students with essays than to researchers with reviews. But their capabilities — natural language search and text drafting — will almost certainly be built into next-generation SLR tools.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5: Three challenges */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            {lang === 'ru' ? 'Глава 5: Три вызова — интеллект, удобство, оценка' : 'Chapter 5: Three Challenges — Intelligence, Usability, Evaluation'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Первый вызов — обновить интеллект внутри инструментов. Прямолинейная замена SVM на LLM не работает: языковые модели слабее в узких доменах, склонны к <Term id="hallucination" lang={lang}>галлюцинациям</Term>, а их решения трудно объяснить — для методологии, чей смысл в воспроизводимости, это дисквалифицирующие свойства. Перспективные направления — RAG поверх проверяемых баз статей и графы знаний (ORKG, CS-KG), которые описывают миллионы работ машиночитаемыми связями «метод — задача — материал» и позволяют искать по концептам, а не по словам.</>
              ) : (
                <>The first challenge is upgrading the intelligence inside the tools. A straight swap of SVM for an LLM does not work: language models are weaker in narrow domains, prone to <Term id="hallucination" lang={lang}>hallucinations</Term>, and hard to explain — disqualifying traits for a methodology whose whole point is reproducibility. The promising directions are RAG over verifiable paper databases and knowledge graphs (ORKG, CS-KG), which describe millions of works through machine-readable method–task–material links and enable concept-level rather than word-level search.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Второй вызов — удобство. Большинство исследователей до сих пор ведут обзоры в Excel и Zotero, а не в специализированных системах. Опрос 81 исследователя называет причины отказа от инструментов: плохая usability (43%), нехватка функций (37%), несовместимость с рабочим процессом (37%). По шкале SUS инструменты набирают 66–77 баллов — оценка «удовлетворительно», не более. Третий вызов — оценка: в поле нет стандартных бенчмарков, инструменты тестируются на маленьких закрытых датасетах, и сравнить их между собой честно почти невозможно.'
                : 'The second challenge is usability. Most researchers still run reviews in Excel and Zotero rather than specialized systems. A survey of 81 researchers lists the reasons for abandoning tools: poor usability (43%), missing functionality (37%), workflow incompatibility (37%). On the SUS scale the tools score 66–77 — a "satisfactory" grade, no more. The third challenge is evaluation: the field has no standard benchmarks, tools are tested on small private datasets, and comparing them fairly is nearly impossible.'}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-cyan-400 font-bold mb-2">
                {lang === 'ru' ? 'Метрики: почему полнота дороже точности' : 'Metrics: Why Recall Beats Precision'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'В скрининге ошибки неравноценны: лишняя статья стоит десять минут чтения, пропущенная — дыру в обзоре, которую никто не заметит. Поэтому вместо F1-меры, уравнивающей точность и полноту, предлагается F2, взвешенная в пользу полноты, и метрика WSS (Work Saved over Sampling) — сколько ручной работы сэкономил инструмент при заданном уровне полноты.'
                  : 'Screening errors are not symmetric: an extra paper costs ten minutes of reading, a missed one leaves a hole in the review that nobody notices. Hence the proposal to replace the F1 score, which weighs precision and recall equally, with F2, weighted toward recall, and WSS (Work Saved over Sampling) — how much manual work the tool saved at a given recall level.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: Trust, transparency, human-in-the-loop */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 6: Доверие, прозрачность и человек в контуре' : 'Chapter 6: Trust, Transparency, and the Human in the Loop'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Показательно, каким был первый критерий отбора инструментов в обзоре: система должна полуавтоматизировать работу, сохраняя за пользователем финальное решение. <Term id="human-in-the-loop" lang={lang}>Human-in-the-loop</Term> — не временное ограничение, а осознанная позиция поля: ошибка в обзоре тиражируется дальше — в статьи, метаанализы и, в худшем случае, в клинические рекомендации и политику. Авторы разбирают и регуляторный контекст: по классификации европейского AI Act типичный SLR-инструмент попадает в категорию ограниченного риска, где главное требование — прозрачность.</>
              ) : (
                <>It is telling what the survey&apos;s first inclusion criterion was: a system must semi-automate the work while keeping the final decision with the user. <Term id="human-in-the-loop" lang={lang}>Human-in-the-loop</Term> is not a temporary limitation but the field&apos;s deliberate stance: an error in a review propagates onward — into papers, meta-analyses, and at worst clinical guidelines and policy. The authors also examine the regulatory context: under the European AI Act&apos;s classification, a typical SLR tool falls into the limited-risk category, where the central requirement is transparency.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'С прозрачностью в поле плохо: большинство моделей — чёрные ящики, обучающие данные закрыты, код открывают 4 инструмента из 21. Авторы предлагают набор практик по трём осям — производительность (публиковать бенчмарки и код оценки), удобство (тестировать на реальных пользователях стандартными опросниками), прозрачность (открывать данные, модели, объяснять решения и честно описывать ограничения). Мост к методу Эбботта очевиден: инструменты ускоряют руки — поиск, сортировку, извлечение, — но суждение о том, что включить и чему верить, остаётся невоспроизводимым вкладом человека.'
                : 'Transparency in the field is poor: most models are black boxes, training data is closed, and 4 tools out of 21 release code. The authors propose practices along three axes — performance (publish benchmarks and evaluation code), usability (test with real users using standard questionnaires), transparency (open data and models, explain decisions, state limitations honestly). The bridge to the Abbott method is plain: tools speed up the hands — searching, sorting, extracting — while the judgment about what to include and what to trust remains the human\'s irreplaceable contribution.'}
            </p>
          </div>
        </div>
      </section>

      {/* Practitioner's summary */}
      <section>
        <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-heading">
            {lang === 'ru' ? 'Итог для практика' : 'Practitioner’s Summary'}
          </h3>
          <ul className="text-neutral-300 leading-relaxed space-y-3 list-disc list-inside">
            <li>{lang === 'ru' ? 'ИИ в обзорах литературы сегодня — это прежде всего скрининг через active learning: модель сортирует очередь чтения, человек принимает решения.' : 'AI in literature reviews today means, above all, screening via active learning: the model sorts the reading queue, the human makes the decisions.'}</li>
            <li>{lang === 'ru' ? 'Выбирайте инструмент под задачу: ASReview вне биомедицины (открытый код, выбор моделей), Covidence/EPPI-Reviewer/Rayyan — для биомедицинских обзоров с RCT.' : 'Pick the tool for the task: ASReview outside biomedicine (open source, model choice), Covidence/EPPI-Reviewer/Rayyan for biomedical reviews with RCTs.'}</li>
            <li>{lang === 'ru' ? 'LLM-поисковики (Elicit, Consensus, Scite) хороши для разведки поля, но не заменяют протокол систематического обзора.' : 'LLM search engines (Elicit, Consensus, Scite) are good for scouting a field but do not replace a systematic review protocol.'}</li>
            <li>{lang === 'ru' ? 'Оценивайте скрининг метриками, взвешенными в пользу полноты (F2, WSS): пропущенная статья дороже лишней.' : 'Evaluate screening with recall-weighted metrics (F2, WSS): a missed paper costs more than an extra one.'}</li>
            <li>{lang === 'ru' ? 'Требуйте прозрачности: открытые данные, документированные ограничения и возможность перепроверить каждое решение модели.' : 'Demand transparency: open data, documented limitations, and the ability to recheck every model decision.'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
