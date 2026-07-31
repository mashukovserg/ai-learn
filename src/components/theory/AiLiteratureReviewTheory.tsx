"use client";

import React from 'react';
import Link from 'next/link';
import MiniReferenceWindow from '@/components/MiniReferenceWindow';

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
          {ru
            ? 'Поток отбора принято отчитывать в стиле PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses): идентификация → дедупликация → скрининг → приемлемость → включено. На каждом шаге фиксируют, сколько работ выбыло и почему. Такая воронка делает обзор проверяемым: рецензент видит не только итог, но и весь путь отсева.'
            : 'The selection flow is conventionally reported in PRISMA style (Preferred Reporting Items for Systematic Reviews and Meta-Analyses): identification → deduplication → screening → eligibility → included. At each step you record how many works dropped out and why. This funnel makes the review auditable: a reviewer sees not only the result but the entire path of exclusion.'}
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
    </>
  );
}
