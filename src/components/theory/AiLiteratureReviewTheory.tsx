"use client";

import React from 'react';
import Link from 'next/link';
import MiniReferenceWindow from '@/components/MiniReferenceWindow';
import Term from '@/components/Term';

const TOOLS_SURVEY_URL = 'https://doi.org/10.1007/s10462-024-10902-3';

export default function AiLiteratureReviewTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <>
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Литературный обзор, когда поиск делает агент' : 'Literature Review When the Search Runs as an Agent'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Литературный обзор — это структурированная карта того, что уже известно по конкретному вопросу, а не куча ссылок. Различают повествовательный обзор (narrative review), где автор свободно рассказывает о поле, и систематический обзор (systematic review), где каждый шаг отбора зафиксирован и воспроизводим. Цель одна: получить защищаемую, честную сводку доказательств, на которую можно опереться в решении или в собственной статье.'
            : 'A literature review is a structured map of what is already known about a specific question — not a pile of links. We distinguish a narrative review, where the author freely surveys a field, from a systematic review, where every selection step is recorded and reproducible. The goal is the same: a defensible, honest summary of the evidence you can lean on for a decision or your own paper.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              ИИ радикально ускоряет первую половину работы. Агент раскладывает вопрос на подзапросы и проходит несколько баз за минуты — это ровно та механика, которую мы разбирали в{' '}
              <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                комнате про глубокий поиск в агентах
              </Link>
              . Скорость реальна, но роль исследователя смещается: раньше главным трудом был «найти», теперь — «оценить и проверить».
            </>
          ) : (
            <>
              AI radically speeds up the first half of the work. An agent decomposes the question into sub-queries and sweeps several databases in minutes — exactly the mechanics we covered in the{' '}
              <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                Deep Search in AI Agents room
              </Link>
              . The speed is real, but the researcher&apos;s role shifts: the hard part used to be &laquo;find&raquo;, now it is &laquo;judge and verify&raquo;.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Вместе со скоростью приходит новый класс ошибок. Языковая модель умеет выдумывать ссылки, которые выглядят идеально: правдоподобные авторы, аккуратное название, валидный на вид DOI — но статьи не существует. Такая галлюцинированная ссылка не «плохо отформатирована», она безупречна внешне и именно поэтому опасна. Это центральный риск, вокруг которого построена вся комната.'
            : 'With speed comes a new class of error. A language model can fabricate references that look perfect: plausible authors, a tidy title, a valid-looking DOI — for a paper that does not exist. Such a hallucinated citation is not &laquo;badly formatted&raquo;; it is flawless on the surface, which is exactly why it is dangerous. This is the central risk the whole room is built around.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Практическая позиция проста: относитесь к ИИ как к очень быстрому ассистенту, каждое утверждение которого не проверено, пока вы его не проверили. Модель отлично генерирует черновики запросов, кластеры тем и первые формулировки, но не является источником истины о том, что́ на самом деле опубликовано. Остальная часть комнаты — это протокол, который сохраняет скорость ИИ и возвращает строгость обзора.'
            : 'The practical stance is simple: treat AI as a very fast assistant whose every claim is unverified until you have verified it. The model is excellent at drafting queries, clustering themes, and first formulations, but it is not a source of truth about what is actually published. The rest of the room is a protocol that keeps the AI speed and restores the rigor of the review.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Полезно сразу зафиксировать разделение труда. ИИ берёт на себя рутину: широкий охват баз, черновики запросов, первичную сортировку сотен аннотаций. Человек оставляет за собой суждение: какие критерии считать границей, какое исследование действительно отвечает на вопрос и какой ссылке можно верить. Обзор проваливается не там, где мало текста, а там, где это суждение подменили скоростью.'
            : 'It helps to fix the division of labor up front. AI takes the routine: broad database coverage, draft queries, a first sort through hundreds of abstracts. The human keeps the judgment: which criteria mark the boundary, which study truly answers the question, and which citation can be trusted. A review fails not where there is too little text, but where that judgment was replaced by speed.'}
        </p>
        <p className="text-neutral-400 leading-relaxed">
          {ru
            ? 'Ориентир качества на весь курс: строгий обзор воспроизводим. Другой человек, повторив ваши записанные шаги — те же запросы, те же критерии, те же даты, — должен прийти к тому же набору включённых работ.'
            : 'The quality anchor for the whole course: a rigorous review is reproducible. Another person repeating your recorded steps — the same queries, the same criteria, the same dates — should arrive at the same set of included studies.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Что такое систематический обзор и почему он дорогой' : 'What a Systematic Review Is and Why It Is Expensive'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              <Term id="slr" lang={lang}>Систематический обзор</Term> отличается от обычного обзора литературы примерно так же, как перепись населения от прогулки по городу. Прогулка даёт впечатление, перепись — счёт по правилам, которые записаны заранее и одинаковы для всех. Задача систематического обзора — найти и оценить всю релевантную литературу по конкретному вопросу, следуя протоколу, зафиксированному до начала поиска. Методология выросла в доказательной медицине 1990-х, где от полноты обзора зависели клинические рекомендации, и оттуда разошлась по социальным наукам, инженерии, образованию и менеджменту.
            </>
          ) : (
            <>
              A <Term id="slr" lang={lang}>systematic review</Term> differs from an ordinary literature review roughly as a census differs from a stroll through town. The stroll gives an impression; the census counts by rules written down in advance and applied the same way to everyone. The task of a systematic review is to find and appraise all relevant literature on a specific question, following a protocol fixed before the search begins. The methodology grew out of 1990s evidence-based medicine, where clinical guidelines depended on the completeness of the review, and spread from there to the social sciences, engineering, education, and management.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Цена этой строгости высока. Типичный систематический обзор занимает больше года, требует команды доменных экспертов, платных подписок на базы данных и периодических обновлений, чтобы не устареть к моменту публикации. При этом объём публикаций растёт с каждым годом: работы становится больше, а не меньше. Именно это сочетание — обязательная полнота при растущем корпусе — и делает обзор первым кандидатом на автоматизацию среди всех исследовательских жанров.'
            : 'The price of that rigor is high. A typical systematic review takes more than a year, requires a team of domain experts, paid database subscriptions, and periodic updates so it is not already stale by publication. Meanwhile the volume of publications grows every year: the work gets bigger, not smaller. It is that combination — mandatory completeness over a growing corpus — that makes the review the first candidate for automation among all research genres.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Протокол принято раскладывать на шесть стадий: планирование (вопросы и сам протокол), поиск (запросы и снежный ком по ссылкам), скрининг (фильтрация по критериям включения), извлечение и синтез данных, оценка качества исследований и отчёт. Деление полезно не само по себе — оно показывает, что «обзор» это не одна работа, а шесть разных, с разной ценой ошибки. Ошибка на стадии планирования делает бессмысленными все последующие; ошибка на стадии отчёта портит только отчёт.'
            : 'The protocol is conventionally split into six stages: planning (the questions and the protocol itself), search (queries and snowballing through references), screening (filtering by inclusion criteria), data extraction and synthesis, quality assessment, and reporting. The split is useful not for its own sake — it shows that a review is not one job but six different ones, with different costs of error. A mistake at the planning stage makes every later stage meaningless; a mistake at the reporting stage spoils only the report.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Каждая из шести стадий — кандидат на автоматизацию, но распределение помощи оказалось крайне неравномерным, и это стоит держать в голове, читая следующие главы. Автоматизировали не то, что важнее всего, а то, что проще всего формализовать: массовую однотипную сортировку. Стадии, где решение зависит от понимания предметной области — постановка вопроса, оценка качества исследований, — почти не получили поддержки. Поэтому «инструмент для систематических обзоров» на практике почти всегда означает «инструмент для одной стадии обзора».'
            : 'Each of the six stages is a candidate for automation, but the help turned out to be distributed very unevenly, and that is worth holding in mind while reading the chapters that follow. What got automated was not the most important part but the most formalizable one: bulk, uniform sorting. The stages where the decision depends on understanding the subject matter — framing the question, appraising study quality — received almost no support. So "a tool for systematic reviews" in practice almost always means "a tool for one stage of a review".'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'От вопроса к протоколу: декомпозиция и триаж' : 'From Question to Protocol: Decomposition and Triage'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Хороший обзор начинается с точного вопроса, а не с темы. «Влияние ИИ на образование» — это тема, по ней невозможно решить, какие статьи включать. Рамка вроде PICO (Population, Intervention, Comparison, Outcome — популяция, вмешательство, сравнение, исход) превращает расплывчатую тему в проверяемый вопрос с ясными границами: у кого, что именно, по сравнению с чем и какой измеряемый результат.'
            : 'A good review starts with a precise question, not a topic. &laquo;The impact of AI on education&raquo; is a topic; you cannot decide which papers to include from it. A frame like PICO (Population, Intervention, Comparison, Outcome) turns a vague topic into a testable question with clear boundaries: in whom, doing what, compared to what, and with which measurable outcome.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Дальше вопрос раскладывается на подзапросы. Поиск агента ровно настолько хорош, насколько хороши подзапросы: нужно перечислить фасеты вопроса, синонимы и альтернативные термины (например, «LLM», «большая языковая модель», «foundation model»). Именно здесь окупается этап планирования из глубокого поиска — без него агент найдёт только очевидное и пропустит работы, названные иначе.'
            : 'Next the question is decomposed into sub-queries. An agent search is only as good as its sub-queries: you must enumerate the facets of the question, synonyms, and alternative terms (for example &laquo;LLM&raquo;, &laquo;large language model&raquo;, &laquo;foundation model&raquo;). This is where the planning step from deep search pays off — without it the agent finds only the obvious and misses work phrased differently.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Критерии включения и исключения пишутся до поиска, а не после. Диапазон дат, язык, тип исследования, наличие рецензирования — всё это фиксируется заранее. Порядок важен: если критерии придумывать уже глядя на результаты, легко бессознательно отобрать то, что подтверждает вашу гипотезу. Записанный заранее критерий защищает и от самообмана, и от обвинения в подтасовке. Хорошая практика — заранее описать и стоп-правила: какие типы работ (мнения, реклама, отозванные статьи) отсекаются автоматически.'
            : 'Inclusion and exclusion criteria are written before searching, not after. Date range, language, study type, peer-review status — all fixed in advance. Order matters: if you invent criteria while looking at the results, it is easy to unconsciously select what confirms your hypothesis. A criterion recorded ahead of time protects both against self-deception and against the charge of cherry-picking. A good practice is to define stop-rules in advance too: which kinds of work (opinion pieces, marketing, retracted papers) are cut automatically.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Наконец — триаж источников. Препринт, рецензируемая статья и пост в блоге не равны как доказательства, даже если говорят одно и то же. Каждую находку ранжируют по релевантности и надёжности и записывают, почему её оставили или отбросили. Этот журнал решений — половина будущей воспроизводимости.'
            : 'Finally, source triage. A preprint, a peer-reviewed article, and a blog post are not equal as evidence, even when they say the same thing. Each hit is ranked by relevance and reliability, and you record why it was kept or dropped. That decision log is half of your future reproducibility.'}
        </p>
        <p className="text-neutral-400 leading-relaxed">
          {ru
            ? 'Короткий блок: протокол — это контракт с вашим будущим «я» и с рецензентами. Всё, что в нём записано до поиска, потом невозможно тихо переписать под удобный результат.'
            : 'Short block: the protocol is a contract with your future self and with reviewers. Anything recorded in it before the search cannot later be quietly rewritten to fit a convenient result.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Систематический скрининг и дедупликация' : 'Systematic Screening and Deduplication'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Несколько баз данных вернут одну и ту же статью с чуть разными метаданными: где-то иначе написано имя автора, где-то отличается год препринта и публикации. Дедупликация (deduplication) сливает эти дубликаты, чтобы каждую работу вы просмотрели один раз и не посчитали дважды в итоговом синтезе. Пропущенный дубликат искусственно раздувает вес одного исследования.'
            : 'Several databases will return the same article with slightly different metadata: an author name spelled differently here, a preprint-versus-publication year differing there. Deduplication merges these duplicates so you screen each study once and never count it twice in the final synthesis. A missed duplicate artificially inflates the weight of a single study.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Скрининг идёт в два прохода. Сначала по названию и аннотации — быстро и дёшево; здесь отсеивается большинство нерелевантного. Затем по полному тексту — медленно и внимательно, на соответствие критериям приемлемости (eligibility). Разделять проходы важно: читать целиком сотни статей нереально, а решать по одному заголовку — ненадёжно.'
            : 'Screening happens in two passes. First by title and abstract — fast and cheap; most of the irrelevant material is filtered here. Then by full text — slow and careful, against the eligibility criteria. Separating the passes matters: reading hundreds of papers in full is unrealistic, while deciding on a title alone is unreliable.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Поток отбора принято отчитывать в стиле{' '}
              <a href="https://www.prisma-statement.org/prisma-2020-statement" target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">PRISMA</a>{' '}
              (Preferred Reporting Items for Systematic Reviews and Meta-Analyses): идентификация → дедупликация → скрининг → приемлемость → включено. На каждом шаге фиксируют, сколько работ выбыло и почему. Такая воронка делает обзор проверяемым: рецензент видит не только итог, но и весь путь отсева.
            </>
          ) : (
            <>
              The selection flow is conventionally reported in{' '}
              <a href="https://www.prisma-statement.org/prisma-2020-statement" target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">PRISMA</a>{' '}
              style (Preferred Reporting Items for Systematic Reviews and Meta-Analyses): identification → deduplication → screening → eligibility → included. At each step you record how many works dropped out and why. This funnel makes the review auditable: a reviewer sees not only the result but the entire path of exclusion.
            </>
          )}
        </p>
        <pre className="bg-base border border-border-subtle rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto my-4">
{ru
  ? `Идентифицировано в базах: 420
   -> После дедупликации: 300
   -> Скрининг по названию/аннотации: 300 (исключено 240)
   -> Полный текст на приемлемость: 60 (исключено 45)
   -> Включено в синтез: 15`
  : `Identified across databases: 420
   -> After deduplication: 300
   -> Title/abstract screening: 300 (240 excluded)
   -> Full-text eligibility: 60 (45 excluded)
   -> Included in synthesis: 15`}
        </pre>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Ещё одна опора строгости — фиксировать причину каждого исключения, а не только факт. «Не тот тип исследования», «нет полного текста», «дубликат» — короткая метка у каждой выбывшей работы превращает воронку в проверяемый документ. Где возможно, спорные решения дублируют два человека: расхождение между ними — сигнал, что критерий сформулирован нечётко и его стоит уточнить.'
            : 'Another pillar of rigor is recording the reason for each exclusion, not just the fact. &laquo;Wrong study type&raquo;, &laquo;no full text&raquo;, &laquo;duplicate&raquo; — a short label on every dropped work turns the funnel into an auditable document. Where possible, contested decisions are made by two reviewers: a disagreement between them signals that a criterion is vaguely worded and worth sharpening.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Где помогает ИИ, а где нет. Агент неплохо делает предварительный скрининг и кластеризацию похожих работ, размечает очевидные исключения. Но пограничные решения о приемлемости остаются за человеком: одно ошибочно включённое исследование тихо отравляет все выводы ниже по потоку, и заметить это потом почти невозможно.'
            : 'Where AI helps and where it does not. An agent is decent at pre-screening and clustering similar work, and at flagging obvious exclusions. But borderline eligibility calls stay with the human: a single wrongly included study quietly poisons every downstream conclusion, and it is almost impossible to notice later.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Где живёт ИИ: скрининг и active learning' : 'Where the AI Lives: Screening and Active Learning'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Поиск выдаёт тысячи кандидатов, из которых релевантны единицы процентов. Чтение заголовков и аннотаций с решением «включить или исключить» — самая монотонная стадия обзора: одно и то же действие, повторённое тысячу раз, где внимание садится задолго до конца списка. Неудивительно, что именно сюда и стянулась почти вся автоматизация.'
            : 'A search returns thousands of candidates, of which only a few percent are relevant. Reading titles and abstracts and deciding include-or-exclude is the most monotonous stage of a review: the same action repeated a thousand times, with attention flagging long before the list ends. It is no surprise that almost all the automation collected here.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Механизм называется <Term id="active-learning" lang={lang}>active learning</Term>, и устроен он как разговор, а не как разовая настройка. Исследователь размечает небольшой стартовый набор статей — эти нужны, эти нет. Классификатор обучается на них и переставляет весь оставшийся список по вероятности оказаться нужным. Человек читает верх списка, и каждое его решение возвращается в модель как новый пример; та переставляет очередь заново. Порог входа низкий: одни системы стартуют с одной релевантной и одной нерелевантной статьи, другие просят пять, десять или тридцать.
            </>
          ) : (
            <>
              The mechanism is called <Term id="active-learning" lang={lang}>active learning</Term>, and it works like a conversation rather than a one-off setup. The researcher labels a small seed set of papers — these are wanted, these are not. A classifier trains on them and reorders the entire remaining list by how likely each item is to be wanted. The human reads the top of the list, and every decision returns to the model as a new example; the model reorders the queue again. The entry threshold is low: some systems start from one relevant and one irrelevant paper, others ask for five, ten, or thirty.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Важно, что именно меняется. Объём чтения не сокращается по волшебству — меняется порядок. Релевантные работы всплывают наверх, и большинство находок случается в первой трети списка, поэтому у исследователя появляется обоснованная точка остановки: когда несколько десятков подряд оказываются пустыми, вероятность, что дальше прячется нужное, падает. Решение по каждой статье при этом по-прежнему принимает человек — модель сортирует очередь, а не выносит вердикт.'
            : 'What matters is exactly what changes. The volume of reading does not shrink by magic — the order does. Relevant work floats to the top, and most finds happen in the first third of the list, which gives the researcher a defensible stopping point: when several dozen in a row come back empty, the chance that something needed is still hiding further down drops. The decision on each paper still belongs to the human — the model sorts the queue, it does not deliver a verdict.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'У этого удобства есть цена, о которой стоит знать заранее. Модель учится на ваших первых решениях, а значит, наследует и вашу первоначальную рамку: если стартовый набор случайно оказался однобоким, ранжирование будет уверенно поднимать наверх то же самое и опускать всё непохожее. Это тот же риск, который в главе про протокол закрывается заранее записанными критериями. Отсюда практика: стартовый набор собирают намеренно разнородным, а часть отклонённого списка выборочно перечитывают вручную — не ради полноты, а чтобы проверить, не выучила ли модель вашу слепую зону.'
            : 'This convenience has a cost worth knowing in advance. The model learns from your first decisions, which means it inherits your initial frame: if the seed set happened to be one-sided, the ranking will confidently keep lifting more of the same and pushing anything unlike it down. This is the same risk the protocol chapter closes with criteria written in advance. Hence the practice: assemble the seed set deliberately varied, and spot-read part of the rejected list by hand — not for completeness, but to check whether the model has learned your blind spot.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Ландшафт инструментов: что внутри' : 'The Tool Landscape: What Is Inside'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Большой обзор этой области (<a href={TOOLS_SURVEY_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>) разобрал 21 систему полуавтоматизации систематических обзоров по 34 признакам: 23 общих (импорт ссылок, совместная работа, дедупликация, отчёты в стиле PRISMA, цена) и 11 связанных с ИИ (какая задача решается, каким подходом, как представлен текст, что требуется на входе, есть ли поддержка до и после скрининга). Такая сетка позволяет сравнивать инструменты не по обещаниям, а по одинаковым вопросам.
            </>
          ) : (
            <>
              A large survey of this field (<a href={TOOLS_SURVEY_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Bolaños et al. 2024</a>) examined 21 systems for semi-automating systematic reviews across 34 features: 23 general ones (reference import, collaboration, deduplication, PRISMA-style reporting, price) and 11 AI-related ones (which task is solved, by which approach, how text is represented, what is required as input, whether there is pre- and post-screening support). A grid like that lets you compare tools by identical questions rather than by their promises.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Первый вывод отрезвляет: почти вся автоматизация сосредоточена на одной стадии. Из 21 инструмента 19 применяют машинное обучение к скринингу и лишь 4 — к извлечению данных. Планирование, оценка качества и отчёт исторически почти не получали поддержки. Второй вывод касается того, что работает внутри: самый частый классификатор — SVM, метод 1990-х; половина систем всё ещё представляет текст как «мешок слов», и только новейшие перешли на эмбеддинги вроде SciBERT и Sentence-BERT.'
            : 'The first finding is sobering: almost all the automation sits on a single stage. Of the 21 tools, 19 apply machine learning to screening and only 4 to data extraction. Planning, quality assessment, and reporting historically received almost no support. The second finding concerns what runs inside: the most common classifier is the SVM, a 1990s method; half the systems still represent text as a bag of words, and only the newest have moved to embeddings such as SciBERT and Sentence-BERT.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Выбор инструмента поэтому зависит не от общего рейтинга, а от задачи. Вне биомедицины выделяется ASReview: открытый код, локальный запуск и выбор классификаторов от логистической регрессии до нейросетей. В биомедицине сильны Covidence, EPPI-Reviewer и Rayyan — с готовыми классификаторами рандомизированных контролируемых испытаний и подсветкой элементов PICO, той самой рамки из главы о протоколе. Для разведки поля интересны Iris.ai с интерактивными тематическими картами и Colandr, где пользователь задаёт собственные категории классификации.'
            : 'Tool choice therefore depends not on an overall ranking but on the task. Outside biomedicine, ASReview stands out: open source, local execution, and a choice of classifiers from logistic regression to neural networks. In biomedicine, Covidence, EPPI-Reviewer, and Rayyan are strong — with ready-made classifiers for randomized controlled trials and highlighting of PICO elements, the same frame introduced in the protocol chapter. For scouting a field, Iris.ai with its interactive topic maps and Colandr, where the user defines their own classification categories, are worth a look.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Показательны и пробелы, потому что они очерчивают, какая часть работы остаётся ручной. Ни один инструмент не умеет сам подтягивать ссылки из библиографических баз — импорт делает человек. Лишь 4 из 21 открывают исходный код, то есть в остальных случаях проверить, как принято решение, невозможно в принципе. И только один поддерживает «живой обзор» с автоматическим добавлением новых статей, хотя устаревание — главная причина, по которой обзоры приходится обновлять. Совпадение этих трёх пробелов с тремя вызовами, о которых пойдёт речь ниже, не случайно.'
            : 'The gaps are telling too, because they mark out which part of the work stays manual. No tool fetches references from bibliographic databases on its own — the import is done by a human. Only 4 of 21 release their source code, meaning that in the rest it is impossible in principle to check how a decision was made. And just one supports a living review with new papers added automatically, even though going out of date is the main reason reviews have to be updated at all. That these three gaps match the three challenges discussed below is not a coincidence.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Новое поколение: LLM-инструменты' : 'The New Generation: LLM Tools'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'С 2023 года рядом с классическими системами выросло другое семейство — инструменты на больших языковых моделях. Их делят на две группы. Поисковики (Elicit, Consensus, Scite, Scispace, Perplexity, EvidenceHunt) принимают вопрос на обычном языке и возвращают релевантные статьи с выжимками — вместо булевых запросов по ключевым словам. Писательские ассистенты (Jenni.ai, Silatus, Textero.ai) генерируют черновик академического текста по описанию и дорабатывают его вместе с пользователем.'
            : 'Since 2023 a different family has grown up alongside the classic systems — tools built on large language models. They fall into two groups. Search engines (Elicit, Consensus, Scite, Scispace, Perplexity, EvidenceHunt) take a question in ordinary language and return relevant papers with summaries, instead of boolean keyword queries. Writing assistants (Jenni.ai, Silatus, Textero.ai) generate a draft of academic text from a description and refine it together with the user.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Технически почти все они — обёртки над внешним API языковой модели, усиленные <Term id="rag" lang={lang}>RAG</Term>: система сначала находит релевантные фрагменты в базе научных статей, а затем формулирует ответ, опираясь на них. Это заметно снижает выдумывание фактов по сравнению с моделью без поиска, но не убирает его: подобранный фрагмент может быть пересказан неточно, а сама подборка — оказаться неполной.
            </>
          ) : (
            <>
              Technically almost all of them are wrappers over an external language-model API, reinforced with <Term id="rag" lang={lang}>RAG</Term>: the system first retrieves relevant passages from a database of scientific papers, then composes an answer grounded in them. This noticeably reduces fact invention compared with a model that does not retrieve, but it does not remove it: a retrieved passage can be paraphrased inaccurately, and the retrieval itself can be incomplete.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Ключевое ограничение легко упустить за удобством интерфейса: эти инструменты не покрывают стадии систематического обзора. Они не ведут протокол, не считают критерии включения и не строят диаграмму отбора. Разница практическая: поисковик на языковой модели отвечает на ваш вопрос, а систематический обзор требует показать, сколько работ было найдено, сколько отсеяно и почему. Первое нельзя предъявить вместо второго — там, где нужна воронка PRISMA из предыдущих глав, гладкий ответ с пятью ссылками её не заменяет.'
            : 'The key limitation is easy to miss behind a convenient interface: these tools do not cover the stages of a systematic review. They keep no protocol, track no inclusion criteria, and build no selection diagram. The difference is practical: a language-model search engine answers your question, whereas a systematic review has to show how many works were found, how many were excluded, and why. The first cannot be submitted in place of the second — where the PRISMA funnel from the earlier chapters is required, a smooth answer with five citations does not replace it.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Трезвая оценка авторов обзора: писательские ассистенты пока полезнее студентам с эссе, чем исследователям с обзорами. Но границу стоит проводить по стадиям, а не по инструментам. Естественно-языковой поиск хорошо работает как разведка — быстро очертить незнакомое поле, найти стартовые работы для цепочки цитирований. Он плохо работает как доказательство полноты. Эти функции почти наверняка встроят в системы следующего поколения, и тогда вопрос «чем работать» снова сведётся к вопросу «на какой стадии».'
            : 'The survey authors judge it soberly: writing assistants are for now more useful to students with essays than to researchers with reviews. But the line is better drawn by stage than by tool. Natural-language search works well as reconnaissance — quickly outlining an unfamiliar field, finding seed works for a citation chain. It works poorly as evidence of completeness. These capabilities will almost certainly be built into the next generation of systems, at which point the question of which tool to use will again reduce to the question of which stage.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Проверка ссылок: как ловить «призраков»' : 'Verifying Citations: Catching Ghosts'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Фирменная ошибка ИИ в обзоре — галлюцинированная ссылка: цитата, которая читается гладко, отформатирована идеально и при этом поддельна. Модель может пришить реального автора к названию, которого он никогда не писал, соединить настоящий журнал с несуществующей статьёй или сгенерировать DOI, ведущий в никуда. Опасность именно в правдоподобии: такую ссылку легко пропустить в список литературы.'
            : 'The signature AI error in a review is the hallucinated reference: a citation that reads smoothly, is formatted perfectly, and is nonetheless fake. The model may stitch a real author to a title they never wrote, join a genuine journal to a nonexistent article, or generate a DOI that leads nowhere. The danger is precisely the plausibility: such a reference is easy to wave into the bibliography.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Проверка — это конкретная последовательность, а не общее «доверие». Разрешите DOI и убедитесь, что он ведёт к заявленной работе. Подтвердите, что статья действительно существует в этом издании и за этот год. Проверьте, что перечисленные авторы её и вправду написали. И, наконец, откройте текст и убедитесь, что цитируемое утверждение в нём реально есть, а не приписано модели.'
            : 'Verification is a concrete sequence, not a general feeling of &laquo;trust&raquo;. Resolve the DOI and confirm it points to the claimed work. Confirm the article actually exists in that venue and that year. Check that the listed authors really wrote it. And finally, open the text and confirm the quoted claim is genuinely there, not something the model attributed to it.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Красные флаги стоит знать наизусть: DOI не разрешается или ведёт к другой статье; журнал и год не сходятся; цитату не удаётся найти в самом тексте; ссылка подозрительно идеально подтверждает именно вашу гипотезу. Последнее коварно — модель охотно «находит» ровно то, что вы хотели услышать.'
            : 'The red flags are worth memorizing: a DOI that does not resolve or points to a different article; a venue and year that do not match; a quote you cannot find in the actual text; a reference that suspiciously and perfectly confirms your exact hypothesis. The last is insidious — the model happily &laquo;finds&raquo; precisely what you wanted to hear.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Отдельно — отзывы и версии. Настоящая статья может быть отозвана (retracted) или заменена более новой версией. Сослаться на отозванное исследование — тоже провал строгости, хотя формально статья «существует». Поэтому проверка включает не только «есть ли работа», но и «в силе ли она сейчас».'
            : 'Separately — retractions and versions. A real article may be retracted or superseded by a newer version. Citing a retracted study is also a rigor failure, even though the paper formally &laquo;exists&raquo;. So verification covers not only &laquo;does the work exist&raquo; but also &laquo;is it still standing&raquo;.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'На практике проверку удобно встроить в рабочий процесс: держать отдельный столбец «статус проверки» у каждой ссылки и не переносить её в чистовик, пока статус не стал «подтверждена». Быстрая выборочная сверка первых же ссылок часто вскрывает системную проблему — если модель выдумала одну, рядом почти наверняка есть и другие.'
            : 'In practice it is convenient to build verification into the workflow: keep a separate &laquo;verification status&raquo; column for each reference and never move it into the clean draft until the status reads &laquo;confirmed&raquo;. A quick spot-check of the very first references often reveals a systemic problem — if the model invented one, others are almost certainly nearby.'}
        </p>
        <MiniReferenceWindow
          title={ru ? 'Правило ссылок' : 'Citation rule'}
          label={ru ? 'ПРАВИЛО' : 'RULE'}
          content={
            ru
              ? 'Ни одна ссылка не попадает в список литературы, пока человек не подтвердил, что работа существует и говорит именно то, что вы утверждаете.'
              : 'No citation enters the bibliography until a human has confirmed the work exists and says exactly what you claim it says.'
          }
        />
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Синтез, таблицы доказательств и журнал аудита' : 'Synthesis, Evidence Tables, and the Audit Trail'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Синтез — это не пересказ. Пересказ идёт по статьям по очереди; синтез сравнивает работы между собой, группирует их в темы и взвешивает согласие и противоречие. Опора синтеза — таблица доказательств (evidence table): по строке на исследование, по столбцам — дизайн, выборка, ключевой результат и оценка качества. Такая таблица превращает груду статей в сопоставимую картину.'
            : 'Synthesis is not a summary. A summary walks through papers one by one; synthesis compares works against each other, groups them into themes, and weighs agreement and conflict. Its backbone is an evidence table: one row per study, columns for design, sample, key finding, and quality rating. That table turns a heap of papers into a comparable picture.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Главная дисциплина синтеза — не переобещать. Разделяйте то, что доказательства действительно поддерживают, и то, что вам хотелось бы из них вывести. Указывайте размеры эффекта и ограничения, а там, где исследования расходятся, показывайте расхождение явно, а не усредняйте его в одно гладкое утверждение. Это прямое эхо критериев качества из глубокого поиска: факты, выводы и предположения должны быть разделены.'
            : 'The core discipline of synthesis is not to over-claim. Separate what the evidence genuinely supports from what you would like to derive from it. State effect sizes and limitations, and where studies disagree, show the disagreement explicitly instead of averaging it into one smooth statement. This directly echoes the quality gates from deep search: facts, conclusions, and assumptions must be kept apart.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Журнал аудита (audit trail) — это то, что делает обзор воспроизводимым. В нём записаны поисковые запросы и даты, список опрошенных баз, решения о включении и исключении с причинами и статус проверки каждой ссылки. Если через полгода кто-то спросит «почему эта работа не вошла?», ответ есть в журнале, а не в памяти.'
            : 'The audit trail is what makes the review reproducible. It records the search queries and dates, the list of databases queried, the inclusion and exclusion decisions with reasons, and the verification status of each citation. If six months later someone asks &laquo;why was this work left out?&raquo;, the answer is in the log, not in memory.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Хороший синтез не только собирает известное, но и обнажает пробелы: вопросы, по которым доказательств почти нет, и места, где сильные исследования противоречат друг другу. Именно эти пробелы часто становятся вкладом обзора — они показывают, куда двигать следующее исследование. Поэтому синтез заканчивают не гладким выводом «всё ясно», а честной картой того, что известно уверенно, что спорно и что ещё предстоит выяснить.'
            : 'A good synthesis does not only gather what is known — it exposes the gaps: questions with almost no evidence, and places where strong studies contradict each other. These gaps are often the review\'s real contribution: they show where the next study should go. So a synthesis ends not with a smooth &laquo;all clear&raquo; conclusion, but with an honest map of what is known confidently, what is contested, and what remains to be established.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              ИИ участвует и в написании: модель может набросать таблицу доказательств или первый абзац синтеза. Но каждое утверждение и каждую ссылку в финале держит человек. Механику самого извлечения источников, на которую опирается весь обзор, разбирает{' '}
              <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                комната про глубокий поиск в агентах
              </Link>
              {' '}— возвращайтесь туда за деталями по планированию подзапросов и верификации на этапе поиска.
            </>
          ) : (
            <>
              AI takes part in the write-up too: the model can draft an evidence table or a first synthesis paragraph. But every claim and every citation in the final text is owned by the human. The mechanics of the retrieval itself, on which the whole review rests, are covered in the{' '}
              <Link href={`/${lang}/rooms/deep-search-agents`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                Deep Search in AI Agents room
              </Link>
              {' '}— return there for the details on sub-query planning and search-time verification.
            </>
          )}
        </p>
        <p className="text-neutral-400 leading-relaxed">
          {ru
            ? 'Короткий блок: скорость берём у ИИ, доверие — у процесса. Агент находит и черновит, протокол и человек отвечают за то, что попадёт в текст.'
            : 'Short block: take speed from the AI, trust from the process. The agent finds and drafts; the protocol and the human are accountable for what reaches the text.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Три вызова: интеллект, удобство, оценка' : 'Three Challenges: Intelligence, Usability, Evaluation'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Первый вызов — обновить то, что работает внутри инструментов. Прямая замена SVM на языковую модель не решает задачу: в узких доменах такие модели слабее, склонны к <Term id="hallucination" lang={lang}>галлюцинациям</Term>, а их решения трудно объяснить. Для методологии, весь смысл которой в воспроизводимости, необъяснимое решение — дисквалифицирующее свойство: обзор, где нельзя показать, почему работа исключена, перестаёт быть систематическим. Перспективные направления — RAG поверх проверяемых баз статей и графы знаний, которые описывают работы машиночитаемыми связями «метод — задача — материал» и позволяют искать по концептам, а не по словам.
            </>
          ) : (
            <>
              The first challenge is upgrading what runs inside the tools. Swapping an SVM for a language model does not by itself solve the problem: in narrow domains such models are weaker, prone to <Term id="hallucination" lang={lang}>hallucinations</Term>, and their decisions are hard to explain. For a methodology whose entire point is reproducibility, an unexplainable decision is a disqualifying trait: a review that cannot show why a work was excluded stops being systematic. The promising directions are RAG over verifiable paper databases and knowledge graphs, which describe works through machine-readable method–task–material links and allow search by concept rather than by word.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Второй вызов — удобство, и он объясняет неожиданный факт: большинство исследователей до сих пор ведут обзоры в Excel и Zotero, а не в специализированных системах. Опрос 81 исследователя называет причины отказа: плохая usability (43%), нехватка функций (37%), несовместимость с рабочим процессом (37%). По шкале SUS инструменты набирают 66–77 баллов — «удовлетворительно», не более. Вывод неприятный, но полезный: инструмент, который не встроился в чужой процесс, не используется, каким бы точным ни был его классификатор.'
            : 'The second challenge is usability, and it explains a surprising fact: most researchers still run reviews in Excel and Zotero rather than in specialized systems. A survey of 81 researchers lists the reasons for abandoning tools: poor usability (43%), missing functionality (37%), workflow incompatibility (37%). On the SUS scale the tools score 66–77 — satisfactory, no more. The conclusion is unwelcome but useful: a tool that does not fit into someone else&apos;s process goes unused, however accurate its classifier.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Третий вызов — оценка. В поле нет стандартных бенчмарков: инструменты тестируются на маленьких закрытых наборах данных, и сравнить их между собой честно почти невозможно. Практическое следствие для читателя обзора инструментов простое — заявленная точность одной системы и заявленная точность другой измерены на разном материале, поэтому сопоставлять эти числа напрямую нельзя. Проверяемым остаётся только то, что можно воспроизвести на своих данных.'
            : 'The third challenge is evaluation. The field has no standard benchmarks: tools are tested on small private datasets, and comparing them fairly is nearly impossible. The practical consequence for anyone reading a tool comparison is simple — one system&apos;s reported accuracy and another&apos;s were measured on different material, so those numbers cannot be set against each other directly. What stays checkable is only what you can reproduce on your own data.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Отдельно стоит понять, почему в скрининге меряют не тем, чем обычно. Ошибки здесь неравноценны: лишняя статья стоит десяти минут чтения, а пропущенная оставляет в обзоре дыру, которую никто не заметит — именно потому, что её там нет. Поэтому вместо F1-меры, уравнивающей точность и полноту, предлагают F2, взвешенную в пользу полноты, и метрику WSS (Work Saved over Sampling) — сколько ручной работы инструмент сэкономил при заданном уровне полноты. Логика та же, что в главе о протоколе: строгость обзора определяется не тем, что в него попало, а тем, что вы можете предъявить о выбывшем.'
            : 'It is worth understanding separately why screening is measured with unusual metrics. The errors are not symmetric here: an extra paper costs ten minutes of reading, while a missed one leaves a hole in the review that nobody notices — precisely because it is not there. Hence the proposal to replace the F1 score, which weighs precision and recall equally, with F2, weighted toward recall, and with WSS (Work Saved over Sampling) — how much manual work the tool saved at a given level of recall. The logic is the same as in the protocol chapter: the rigor of a review is set not by what made it in, but by what you can account for among what dropped out.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Доверие, прозрачность и человек в контуре' : 'Trust, Transparency, and the Human in the Loop'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Показательно, каким был первый критерий отбора инструментов в самом обзоре: система должна полуавтоматизировать работу, сохраняя финальное решение за пользователем. <Term id="human-in-the-loop" lang={lang}>Human-in-the-loop</Term> здесь не временное ограничение до появления моделей получше, а осознанная позиция поля. Причина в том, куда уходит ошибка: неверно исключённая работа не остаётся внутри обзора, а тиражируется дальше — в статьи, метаанализы и, в худшем случае, в клинические рекомендации и политику.
            </>
          ) : (
            <>
              It is telling what the survey&apos;s own first inclusion criterion was: a system must semi-automate the work while keeping the final decision with the user. <Term id="human-in-the-loop" lang={lang}>Human-in-the-loop</Term> here is not a temporary limitation pending better models but the field&apos;s deliberate stance. The reason lies in where an error goes: a wrongly excluded work does not stay inside the review, it propagates onward — into papers, meta-analyses, and at worst into clinical guidelines and policy.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'С прозрачностью в поле пока плохо, и это не абстрактная претензия. Большинство моделей — чёрные ящики, обучающие данные закрыты, исходный код открывают 4 инструмента из 21. Сложите это с требованием воспроизводимости из первой главы, и получится противоречие: обзор обязан быть повторяемым, но часть решений в нём принимает система, устройство которой проверить нельзя. Пока это противоречие не снято, ответственность за каждое включение и исключение остаётся на человеке, даже если очередь ему отсортировала модель.'
            : 'Transparency in the field is poor so far, and that is not an abstract complaint. Most models are black boxes, training data is closed, and 4 tools out of 21 release their source code. Combine that with the reproducibility requirement from the first chapter and you get a contradiction: a review is obliged to be repeatable, yet part of its decisions are made by a system whose workings cannot be inspected. Until that contradiction is resolved, responsibility for every inclusion and exclusion stays with the human, even when a model sorted the queue for them.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Авторы обзора предлагают набор практик по трём осям. Производительность: публиковать бенчмарки и код оценки, чтобы заявленные числа можно было перепроверить. Удобство: тестировать на реальных пользователях стандартными опросниками, а не на разработчиках. Прозрачность: открывать данные и модели, объяснять решения и честно описывать ограничения. Заметьте, что это те же требования, которые обзор предъявляет к научной статье, — просто адресованные инструменту.'
            : 'The survey authors propose a set of practices along three axes. Performance: publish benchmarks and evaluation code so reported numbers can be rechecked. Usability: test with real users using standard questionnaires, not with the developers. Transparency: open the data and models, explain decisions, and state limitations honestly. Note that these are the same demands a review makes of a scientific paper — simply addressed to a tool.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Сведём это с остальной комнатой. Инструменты ускоряют руки: поиск, сортировку очереди, извлечение полей, оформление отчёта. Ни один из них не берёт на себя то, ради чего обзор делается, — решение, что считать доказательством и где проходит граница вопроса. Отсюда рабочее правило: инструмент выбирают под стадию, а ответственность за результат не делится между человеком и системой. Она остаётся целиком у того, чьё имя стоит под обзором.'
            : 'Let us tie this back to the rest of the room. Tools speed up the hands: searching, sorting the queue, extracting fields, formatting the report. None of them takes on what the review exists for — deciding what counts as evidence and where the boundary of the question runs. Hence a working rule: pick the tool for the stage, and do not split responsibility for the result between the human and the system. It stays entirely with whoever&apos;s name is on the review.'}
        </p>
      </div>

      <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Итог для практика (краткий блок)' : 'Practitioner’s Summary (short block)'}
        </h2>
        <ul className="text-neutral-300 leading-relaxed space-y-3 list-disc list-inside">
          <li>{ru ? 'Протокол пишется до поиска: вопрос, критерии включения и стоп-правила. Всё, что записано заранее, потом нельзя тихо переписать под удобный результат.' : 'The protocol is written before the search: the question, the inclusion criteria, and the stop-rules. Anything recorded in advance cannot later be quietly rewritten to fit a convenient result.'}</li>
          <li>{ru ? 'ИИ в обзорах сегодня — прежде всего скрининг через active learning: модель сортирует очередь чтения, человек принимает каждое решение.' : 'AI in reviews today means, above all, screening via active learning: the model sorts the reading queue, the human makes every decision.'}</li>
          <li>{ru ? 'Выбирайте инструмент под стадию, а не по общему рейтингу: ASReview вне биомедицины, Covidence/EPPI-Reviewer/Rayyan — для биомедицинских обзоров.' : 'Pick the tool for the stage, not by an overall ranking: ASReview outside biomedicine, Covidence/EPPI-Reviewer/Rayyan for biomedical reviews.'}</li>
          <li>{ru ? 'LLM-поисковики хороши для разведки поля, но не заменяют протокол: они не ведут учёт отсева и не строят воронку PRISMA.' : 'LLM search engines are good for scouting a field but do not replace the protocol: they keep no record of exclusions and build no PRISMA funnel.'}</li>
          <li>{ru ? 'Оценивайте скрининг метриками, взвешенными в пользу полноты (F2, WSS): пропущенная статья дороже лишней.' : 'Evaluate screening with recall-weighted metrics (F2, WSS): a missed paper costs more than an extra one.'}</li>
          <li>{ru ? 'Ни одна ссылка не попадает в список литературы, пока человек не подтвердил, что работа существует и говорит именно то, что вы утверждаете.' : 'No citation enters the bibliography until a human has confirmed the work exists and says exactly what you claim it says.'}</li>
        </ul>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Источники и стандарты' : 'Sources and Standards'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Рекомендации этой комнаты по скринингу и отчётности опираются на два признанных методологических стандарта, а разбор инструментов — на обзор поля 2024 года. Ссылки ведут на первоисточники с постоянными идентификаторами (DOI) — их существование можно проверить самостоятельно, ровно так, как учит глава о проверке ссылок.'
            : 'This room\'s guidance on screening and reporting follows two established methodological standards, and its survey of the tools draws on a 2024 review of the field. The links point to primary sources with permanent identifiers (DOI) — you can verify their existence yourself, exactly as the chapter on verifying citations teaches.'}
        </p>
        <div className="bg-deep border border-border-subtle rounded-lg p-5 my-4">
          <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
            {ru ? 'Источники' : 'Sources'}
          </p>
          <ul className="text-sm text-neutral-400 space-y-3">
            <li>
              Page, M. J., et al. (2021).{' '}
              {ru
                ? '«The PRISMA 2020 statement: an updated guideline for reporting systematic reviews» — стандарт отчётности и потоковая диаграмма отбора.'
                : '"The PRISMA 2020 statement: an updated guideline for reporting systematic reviews" — the reporting standard and selection flow diagram.'}{' '}
              <em>BMJ</em> 372:n71.{' '}
              <a
                href="https://doi.org/10.1136/bmj.n71"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
              >
                doi.org/10.1136/bmj.n71
              </a>
              {' · '}
              <a
                href="https://www.prisma-statement.org/prisma-2020-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
              >
                prisma-statement.org
              </a>
            </li>
            <li>
              Higgins, J. P. T., et al. (eds.).{' '}
              {ru
                ? 'Cochrane Handbook for Systematic Reviews of Interventions (актуальная версия 6.x) — подробная методология скрининга, дедупликации и синтеза.'
                : 'Cochrane Handbook for Systematic Reviews of Interventions (current version 6.x) — the detailed methodology for screening, deduplication, and synthesis.'}{' '}
              <a
                href="https://training.cochrane.org/handbook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
              >
                training.cochrane.org/handbook
              </a>
            </li>
            <li>
              Bolaños, F., Salatino, A., Osborne, F., &amp; Motta, E. (2024).{' '}
              {ru
                ? '«Artificial intelligence for literature reviews: opportunities and challenges» — разбор 21 системы полуавтоматизации обзоров по 34 признакам и 11 LLM-инструментов; источник данных для глав об инструментах и вызовах.'
                : '"Artificial intelligence for literature reviews: opportunities and challenges" — an analysis of 21 review-automation systems across 34 features plus 11 LLM tools; the data source for the chapters on tools and challenges.'}{' '}
              <em>Artificial Intelligence Review</em> 57:259.{' '}
              <a
                href={TOOLS_SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300"
              >
                doi.org/10.1007/s10462-024-10902-3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
