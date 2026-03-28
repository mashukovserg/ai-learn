"use client";

import React from 'react';
import { Search, Workflow, Layers, Zap, Target, Microscope, FileText, BarChart3, ShieldCheck, Scale, History, ShieldAlert, Database, FileDigit } from 'lucide-react';

export default function AiResearchTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Microscope className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 1: Исследовательский тупик — Проблема объемов' : 'Chapter 1: The Research Bottleneck — The Volume Problem'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed text-lg">
              {lang === 'ru'
                ? 'Каждый день в мире публикуются тысячи научных статей. Обычный человек физически не способен прочитать даже 1% материалов в своей узкой области. Это создает информационный шум, в котором легко пропустить прорывную идею. Исследователь в области медицины или ИИ должен прочитывать десятки статей в неделю, чтобы просто оставаться на месте. Это приводит к кризису воспроизводимости: мы тратим ресурсы на то, что уже было открыто или опровергнуто.'
                : 'Thousands of scientific papers are published every day. A human is physically unable to read even 1% of the materials in their niche field. This creates information noise where breakthrough ideas are easily missed. A researcher in medicine or AI must read dozens of papers per week just to stay current. This leads to a reproducibility crisis: we waste resources on things that have already been discovered or refuted.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Исторически наука двигалась вперед благодаря одиночкам-энциклопедистам, которые могли держать в голове все достижения своей эпохи. Сегодня это физически невозможно. Объем знаний человечества удваивается каждые несколько лет. Здесь на сцену выходят ИИ-исследователи — автономные агенты, способные анализировать десятки тысяч страниц за считанные минуты.'
                : 'Historically, science moved forward thanks to lone polymaths who could hold all the achievements of their era in their heads. Today, this is physically impossible. The volume of human knowledge doubles every few years. This is where AI researchers come in—autonomous agents capable of analyzing tens of thousands of pages in minutes.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Использование ИИ в исследованиях — это не просто быстрый "гугл". Это переход от линейного чтения к параллельному активному синтезу. Мы превращаем языковую модель из пассивного читателя в проактивного "навигатора", который строит сложные цепочки рассуждений, ищет неочевидные связи между работами из разных областей знаний и формулирует новые гипотезы на основе гигантских объемов данных.'
                : 'Using AI in research is not just a fast "Google." It is a transition from linear reading to parallel active synthesis. We are transforming the language model from a passive reader into a proactive "navigator" that builds complex reasoning chains, finds non-obvious connections between works from different fields of knowledge, and formulates new hypotheses based on gigantic datasets.'}
            </p>
            <div className="bg-card border border-border-emphasis rounded-xl p-6 my-6">
               <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><History size={18} /> {lang === 'ru' ? 'Эволюция ИИ в науке:' : 'Evolution of AI in Science:'}</h4>
               <p className="text-neutral-400 leading-relaxed">
                 {lang === 'ru'
                   ? 'Раньше мы использовали ИИ исключительно как утилитарный инструмент: для перевода текстов, исправления грамматики или быстрого форматирования библиографии. Сегодня парадигма изменилась: агенты могут самостоятельно формулировать сложные поисковые запросы к базам (например, arXiv, Semantic Scholar, PubMed), парсить PDF-файлы, извлекать многомерные таблицы данных и даже писать код для проверки статистической значимости результатов авторов.'
                   : 'Previously, we used AI strictly as a utilitarian tool: for text translation, grammar correction, or quick bibliography formatting. Today, the paradigm has shifted: agents can independently formulate complex search queries for databases (e.g., arXiv, Semantic Scholar, PubMed), parse PDFs, extract multidimensional data tables, and even write code to verify the statistical significance of authors\' results.'}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Automated Literature Search */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Search className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 2: Автономный поиск и протокол PRISMA' : 'Chapter 2: Automated Search and the PRISMA Protocol'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Агент-исследователь не должен просто "гуглить" первую пришедшую в голову фразу. Качественный поиск должен быть систематическим, воспроизводимым и прозрачным. В академической среде золотым стандартом для систематических обзоров является протокол PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses). Современные ИИ-агенты программируются так, чтобы имитировать этот строгий человеческий протокол.'
                : 'A researcher agent shouldn\'t just "Google" the first phrase that comes to mind. High-quality search must be systematic, reproducible, and transparent. In academia, the gold standard for systematic reviews is the PRISMA protocol (Preferred Reporting Items for Systematic Reviews and Meta-Analyses). Modern AI agents are programmed to mimic this strict human protocol.'}
            </p>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-border-card bg-card">
                <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><Target size={16} /> Multi-step Query Expansion (Многошаговое расширение запроса)</h4>
                <p className="text-neutral-400 leading-relaxed">
                  {lang === 'ru' 
                    ? 'Агент берет вашу базовую идею (например, "лечение диабета 2 типа") и программно расширяет её до 20-30 вариаций поисковых запросов. Он использует специализированные онтологии (как MeSH в медицине), чтобы учесть все возможные синонимы, аббревиатуры и смежные термины. Затем он отправляет эти запросы через API в arXiv или PubMed, скачивает метаданные тысяч статей и применяет первичные фильтры (например, отсекает работы старше 5 лет или статьи без рецензирования).' 
                    : 'The agent takes your baseline idea (e.g., "type 2 diabetes treatment") and programmatically expands it into 20-30 search query variations. It uses specialized ontologies (like MeSH in medicine) to account for all possible synonyms, abbreviations, and related terms. It then sends these queries via API to arXiv or PubMed, downloads metadata for thousands of papers, and applies initial filters (e.g., discarding works older than 5 years or un-peer-reviewed papers).'}
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border-card bg-card">
                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Layers size={16} /> Semantic Reranking (Семантическое переранжирование)</h4>
                <p className="text-neutral-400 leading-relaxed">
                  {lang === 'ru' 
                    ? 'Ключевой поиск выдаст много "мусора", где ваши термины упоминаются вскользь. На втором этапе в дело вступает ИИ: он берет абстракты (аннотации) всех найденных 500+ статей и пропускает их через модель-векторизатор (Embedding model) или LLM-судью. Он оценивает каждую аннотацию на смысловое соответствие вашей конкретной задаче, выставляя скор от 0 до 1. Это позволяет отсеять 90% нерелевантного шума еще до того, как система начнет скачивать и читать полные тексты (PDF).' 
                    : 'Keyword search will return a lot of "garbage" where your terms are mentioned in passing. In the second stage, AI steps in: it takes the abstracts of all 500+ found papers and runs them through an Embedding model or an LLM-judge. It scores each abstract based on semantic relevance to your specific task, assigning a score from 0 to 1. This filters out 90% of irrelevant noise before the system even begins downloading and reading full texts (PDFs).'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Recursive Summarization — Synthesizing Giants */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Workflow className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 3: Рекурсивный синтез — Как сжать библиотеку' : 'Chapter 3: Recursive Synthesis — Compressing a Library'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed text-lg">
              {lang === 'ru'
                ? 'Главное "узкое горлышко" любой LLM — это лимит контекстного окна. Даже при окне в 1 миллион токенов вы не можете просто "впихнуть" текст 100 сложных научных статей в один промпт и попросить модель написать обзор. Модель "потеряется" в деталях, забудет начало и сгенерирует поверхностный ответ. Архитектурное решение этой проблемы — алгоритм "Снежный ком" (Recursive Summarization).'
                : 'The main "bottleneck" of any LLM is the context window limit. Even with a 1-million-token window, you cannot simply "shove" the text of 100 complex scientific papers into a single prompt and ask the model to write a review. The model will get "lost" in the details, forget the beginning, and generate a superficial answer. The architectural solution to this problem is the "Snowball" algorithm (Recursive Summarization).'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-black/40 p-6 rounded-xl border border-border-card relative overflow-hidden">
                 <h4 className="font-bold text-emerald-500 mb-3 flex items-center gap-2"><FileDigit size={16}/> {lang === 'ru' ? 'Шаг 1: Атомарное сжатие' : 'Step 1: Atomic Compression'}</h4>
                 <p className="text-neutral-400 leading-relaxed">
                   {lang === 'ru'
                     ? 'Каждая статья из топ-50 обрабатывается изолированно. LLM извлекает из 20-страничного PDF только самое важное: гипотезу, размер выборки, методологию, численные результаты и выводы. Мы убираем всё "воду", вступления и ссылки. Огромная статья превращается в плотный JSON-объект на 300 слов.'
                     : 'Each paper from the top 50 is processed in isolation. The LLM extracts only the most important parts from a 20-page PDF: hypothesis, sample size, methodology, numerical results, and conclusions. We remove all the "fluff," introductions, and references. A huge paper turns into a dense, 300-word JSON object.'}
                 </p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-border-card relative overflow-hidden">
                 <h4 className="font-bold text-blue-500 mb-3 flex items-center gap-2"><Database size={16}/> {lang === 'ru' ? 'Шаг 2: Тематическая кластеризация' : 'Step 2: Thematic Clustering'}</h4>
                 <p className="text-neutral-400 leading-relaxed">
                   {lang === 'ru'
                     ? 'Имея 50 плотных саммари, ИИ начинает группировать их по темам или выявленным трендам (например, "Группа статей о влиянии на экономику", "Группа об архитектурных ограничениях"). Затем отдельный LLM-вызов пишет связную сводку уже по каждой группе, ссылаясь на атомарные саммари.'
                     : 'Armed with 50 dense summaries, the AI groups them by topics or identified trends (e.g., "Papers on economic impact," "Papers on architectural limitations"). Then, a separate LLM call writes a coherent review for each group, referencing the atomic summaries.'}
                 </p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Итогом этого многоуровневого пайплайна становится глубокий аналитический обзор, который действительно учитывает данные из сотен источников, но при этом является структурированным, легко читаемым и логичным. Это позволяет живому исследователю увидеть "всю картину целиком", не утопая в формулах каждой отдельной публикации.'
                : 'The result of this multi-level pipeline is a deep analytical review that genuinely accounts for data from hundreds of sources while remaining structured, highly readable, and logical. This allows a human researcher to see the "big picture" without drowning in the formulas of each individual publication.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4: Code Interpreter for Data Analysis */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <BarChart3 className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 4: Проверка расчетов — ИИ как строгий лаборант' : 'Chapter 4: Verifying Calculations — AI as a Strict Lab Assistant'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Настоящее исследование — это работа с жесткими цифрами, а не только с текстом. К сожалению, даже в престижных рецензируемых журналах регулярно встречаются ошибки в расчетах, p-hacking или прямые манипуляции с данными. Языковые модели сами по себе плохи в математике, но если дать им инструмент Code Interpreter (возможность писать и выполнять код), они превращаются в беспощадных аудиторов.'
                : 'Real research is about working with hard numbers, not just text. Unfortunately, even in prestigious peer-reviewed journals, calculation errors, p-hacking, or outright data manipulation regularly occur. Language models alone are bad at math, but if you give them a Code Interpreter tool (the ability to write and execute code), they become ruthless auditors.'}
            </p>
            <div className="bg-card p-6 rounded-xl border border-border-card my-6">
               <h4 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                 <FileText className="text-emerald-500" size={18} />
                 {lang === 'ru' ? 'Сценарий автономного аудита данных:' : 'Autonomous Data Audit Scenario:'}
               </h4>
               <ol className="space-y-4 text-neutral-400 list-decimal ml-5">
                  <li>
                    <strong className="text-emerald-300">{lang === 'ru' ? 'Извлечение (Extraction):' : 'Extraction:'}</strong>{' '}
                    {lang === 'ru' ? 'Агент использует инструменты компьютерного зрения, чтобы вытащить сырые цифры из PDF-таблицы или даже оцифровать графики.' : 'The agent uses computer vision tools to pull raw numbers from a PDF table or even digitize graphs.'}
                  </li>
                  <li>
                    <strong className="text-emerald-300">{lang === 'ru' ? 'Программирование (Coding):' : 'Coding:'}</strong>{' '}
                    {lang === 'ru' ? 'ИИ пишет скрипт на Python (используя pandas и scipy), чтобы заново вычислить средние значения, p-value и доверительные интервалы на основе извлеченных данных.' : 'The AI writes a Python script (using pandas and scipy) to recalculate means, p-values, and confidence intervals based on the extracted data.'}
                  </li>
                  <li>
                    <strong className="text-emerald-300">{lang === 'ru' ? 'Верификация (Verification):' : 'Verification:'}</strong>{' '}
                    {lang === 'ru' ? 'Сравнивает результат работы своего кода с тем выводом, который автор написал в статье. Если скрипт показывает p=0.08, а автор заявляет о "статистически значимом" p<0.05 — ИИ бьет тревогу и помечает статью как сомнительную.' : 'It compares the output of its code with the conclusion the author wrote in the text. If the script shows p=0.08, but the author claims a "statistically significant" p<0.05—the AI sounds the alarm and flags the paper as suspicious.'}
                  </li>
               </ol>
            </div>
            <p className="text-neutral-500 italic leading-relaxed">
              {lang === 'ru'
                ? 'Этот инженерный подход радикально повышает уровень доверия к синтезируемой научной информации. Мы больше не верим авторам на слово; агент перепроверяет их математику на лету.'
                : 'This engineering approach radically increases the level of trust in synthesized scientific information. We no longer take authors at their word; the agent double-checks their math on the fly.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5: Citations and Citation Hallucinations */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-red-400">
            <Zap className="text-red-500" />
            {lang === 'ru' ? 'Глава 5: Дисциплина цитирования — Борьба с призраками' : 'Chapter 5: Citation Discipline — Fighting Ghosts'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Главный враг ИИ-исследователя — вымышленные ссылки (Citation Hallucinations). Базовые модели обладают пугающей способностью придумывать названия статей, которые звучат абсолютно правдоподобно, комбинируя реальные фамилии ученых и популярные термины. Если такой "призрак" попадет в итоговый отчет, репутация исследователя будет разрушена.'
                : 'The main enemy of an AI researcher is Citation Hallucinations. Base models possess a terrifying ability to invent paper titles that sound absolutely plausible, combining real scientists\' names with popular terms. If such a "ghost" makes its way into a final report, the researcher\'s reputation is destroyed.'}
            </p>
            <div className="grid grid-cols-1 gap-6">
               <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                  <h5 className="text-red-400 font-bold mb-2 flex items-center gap-2"><ShieldAlert size={16} /> {lang === 'ru' ? 'Анатомия галлюцинации' : 'Anatomy of a Hallucination'}</h5>
                  <p className="text-neutral-400 leading-relaxed">
                    {lang === 'ru' 
                      ? 'Модель статистически "знает", что ученый X часто пишет про нейросети, а ученый Y про медицину. На вопрос о нейросетях в медицине она генерирует статью "Deep Learning in Oncology" за авторством X и Y, придумывает год (2021) и том журнала. Выглядит идеально, но статьи не существует.' 
                      : 'The model statistically "knows" that scientist X often writes about neural nets, and scientist Y about medicine. Asked about neural nets in medicine, it generates a paper "Deep Learning in Oncology" authored by X and Y, invents a year (2021) and a journal volume. It looks perfect, but the paper does not exist.'}
                  </p>
               </div>
               <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <h5 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><ShieldCheck size={16} /> {lang === 'ru' ? 'Решение: DOI Verification Gate' : 'Solution: DOI Verification Gate'}</h5>
                  <p className="text-neutral-400 leading-relaxed">
                    {lang === 'ru' 
                      ? 'Чтобы победить это, в агентов встраивают жесткий "гейт": для каждого утверждения модель обязана предоставить цифровой идентификатор объекта (DOI) или прямую ссылку. Перед выдачей ответа пользователю, невидимый скрипт пингует базу CrossRef по этому DOI. Если DOI не существует или ведет на статью с другим названием — утверждение безжалостно удаляется из финального ответа.' 
                      : 'To defeat this, a strict "gate" is built into agents: for every claim, the model must provide a Digital Object Identifier (DOI) or a direct link. Before presenting the answer to the user, an invisible script pings the CrossRef database with this DOI. If the DOI doesn\'t exist or points to a differently named paper—the claim is ruthlessly deleted from the final response.'}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: Ethics and the Future of Authorship */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Scale className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 6: Этика ИИ-соавторства' : 'Chapter 6: The Ethics of AI Co-authorship'}
          </h2>
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed text-lg">
              {lang === 'ru'
                ? 'Кто является автором прорывной научной статьи, если 80% рутинного анализа, парсинга данных и первичного синтеза провел кремниевый агент? Этот вопрос сейчас активно обсуждается в журналах уровня Nature и Science.'
                : 'Who is the author of a breakthrough scientific paper if 80% of the routine analysis, data parsing, and initial synthesis was conducted by a silicon agent? This question is currently heavily debated in journals like Nature and Science.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Академический консенсус таков: ИИ не может быть автором, потому что авторство подразумевает моральную и юридическую ответственность за написанное. Если в статье обнаружен плагиат или подделка данных, нельзя подать в суд на алгоритм. Однако, участие ИИ должно быть полностью прозрачно задекларировано в методологии.'
                : 'The academic consensus is: AI cannot be an author, because authorship implies moral and legal responsibility for the text. If a paper contains plagiarism or faked data, you cannot sue an algorithm. However, AI involvement must be fully and transparently declared in the methodology section.'}
            </p>
            <div className="bg-blue-500/5 border-l-4 border-blue-500 p-6 my-6">
               <h4 className="font-bold text-white mb-2">{lang === 'ru' ? 'Золотое правило исследователя будущего:' : 'The Golden Rule for the Researcher of the Future:'}</h4>
               <p className="text-neutral-300 leading-relaxed italic">
                 {lang === 'ru'
                   ? '"Мы используем ИИ для расширения горизонтов поиска и ускорения рутины, но финальная оценка доказательств, синтез смыслов и выводы всегда остаются за человеком. ИИ-агент — это не замена ученого, это его когнитивный экзоскелет для работы в бездонном океане данных."'
                   : '"We use AI to expand our search horizons and speed up routine tasks, but the final evaluation of evidence, synthesis of meaning, and conclusions always remain with the human. An AI agent is not a replacement for a scientist; it is their cognitive exoskeleton for working in a bottomless ocean of data."'}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thought */}
      <section className="bg-emerald-500/10 p-10 rounded-2xl border border-emerald-500/20 text-center mt-12">
         <h3 className="text-3xl font-bold text-white mb-4">{lang === 'ru' ? 'Вы стали ИИ-исследователем' : 'You Have Become an AI Researcher'}</h3>
         <p className="text-neutral-300 leading-relaxed italic text-lg max-w-3xl mx-auto">
           {lang === 'ru'
             ? 'Поздравляем! Вы завершили изучение самых современных методик работы с научной информацией. Теперь вы умеете строить системы, которые не просто "говорят", а умеют методично искать, проверять, сомневаться в цифрах и помогать человечеству находить истину гораздо быстрее.'
             : 'Congratulations! You have completed your study of the most modern methods for working with scientific information. Now you know how to build systems that don\'t just "talk," but systematically search, verify, question numbers, and help humanity find the truth much faster.'}
         </p>
      </section>
    </div>
  );
}
