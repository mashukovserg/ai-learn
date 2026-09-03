"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';
import Screenshot from '@/components/Screenshot';

type LocalizedText = { ru: string; en: string };

const SOURCES: { authors: string; title: string; venue?: string; note: LocalizedText; href: string; label: string }[] = [
  {
    authors: 'Becker J., Rush N., Barnes E., Rein D.',
    title: 'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity',
    venue: 'METR, arXiv:2507.09089, 2025',
    note: {
      ru: '16 опытных разработчиков, 246 задач, рандомизированный эксперимент: с ИИ на 19% медленнее при ожидании ускорения на 24% до и ощущении ускорения на 20% после',
      en: '16 experienced developers, 246 tasks, a randomised trial: 19% slower with AI, against a 24% expected speedup before and a 20% perceived speedup after',
    },
    href: 'https://arxiv.org/abs/2507.09089',
    label: 'arxiv.org/abs/2507.09089',
  },
  {
    authors: 'DORA (Google Cloud).',
    title: 'Accelerate State of DevOps Report 2024',
    note: {
      ru: 'рост внедрения ИИ на 25% связан со снижением пропускной способности поставки на 1,5% и стабильности поставки на 7,2%',
      en: 'a 25% increase in AI adoption is associated with a 1.5% decrease in delivery throughput and a 7.2% decrease in delivery stability',
    },
    href: 'https://dora.dev/research/2024/dora-report/',
    label: 'dora.dev/research/2024',
  },
  {
    authors: 'GitClear.',
    title: 'AI Copilot Code Quality: 2025 Look Back at 12 Months of Data',
    note: {
      ru: '211 млн изменённых строк за 2020–2024; доля повторяющихся блоков выросла с 8,3% до 12,3% изменённых строк, доля перемещённых (рефакторинг) строк упала с 25% до менее 10%',
      en: '211 million changed lines across 2020–2024; duplicated blocks rose from 8.3% to 12.3% of changed lines, moved (refactored) lines fell from 25% to under 10%',
    },
    href: 'https://www.gitclear.com/ai_assistant_code_quality_2025_research',
    label: 'gitclear.com',
  },
  {
    authors: 'SmartBear / Cisco Systems.',
    title: 'Best Practices for Peer Code Review',
    note: {
      ru: 'не более 200–400 строк за одно ревью, 70–90% дефектов находится в этом диапазоне, не быстрее 500 строк в час, не дольше 60 минут подряд',
      en: 'no more than 200–400 lines per review, 70–90% of defects found within that range, no faster than 500 lines per hour, no longer than 60 minutes at a stretch',
    },
    href: 'https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/',
    label: 'smartbear.com',
  },
  {
    authors: 'Google.',
    title: 'Engineering Practices — Small CLs',
    note: {
      ru: '100 строк — обычно разумный размер изменения, 1000 — обычно слишком много; ревьюер вправе отклонить изменение только за размер',
      en: '100 lines is usually a reasonable change size, 1,000 is usually too large; a reviewer may reject a change for size alone',
    },
    href: 'https://google.github.io/eng-practices/review/developer/small-cls.html',
    label: 'google.github.io/eng-practices',
  },
  {
    authors: 'Nygard M.',
    title: 'Documenting Architecture Decisions',
    venue: 'Cognitect blog, 2011',
    note: {
      ru: 'исходное описание формата ADR: контекст, решение, статус, последствия; записи не правят, а заменяют',
      en: 'the original description of the ADR format: context, decision, status, consequences; records are superseded rather than edited',
    },
    href: 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions',
    label: 'cognitect.com',
  },
  {
    authors: 'GitHub Docs.',
    title: 'About code owners',
    note: {
      ru: 'файл CODEOWNERS: сопоставление путей и ответственных, автоматическое назначение ревьюеров, обязательное одобрение при защите ветки',
      en: 'the CODEOWNERS file: paths mapped to owners, automatic reviewer assignment, mandatory approval under branch protection',
    },
    href: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners',
    label: 'docs.github.com',
  },
];

function RefLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-accent-400 hover:underline break-all">
      {children}
    </a>
  );
}

export default function AgenticTeamProtocolsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1 — why written agreements */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: У кода больше нет автора, который помнит'
            : 'Chapter 1: The Code No Longer Has an Author Who Remembers'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Пока код писали люди, у каждой странной строки был тот, кого можно спросить. Он мог уйти в отпуск или
                уволиться, но обычно помнил, почему сделал так. Когда код пишет{' '}
                <Term id="agent" lang={lang}>агент</Term>, этот человек исчезает дважды. Сессия агента закрывается и не
                помнит ничего — у неё нет вчера. А человек, который её вёл, часто не может объяснить diff, потому что
                читал не diff, а рассказ агента о нём. Объём кода растёт, а память о том, зачем он такой, падает.
              </>
            ) : (
              <>
                While people wrote the code, every odd line had someone you could ask. They might be on holiday or
                gone, but they usually remembered why they did it that way. When an{' '}
                <Term id="agent" lang={lang}>agent</Term> writes the code, that person disappears twice. The agent
                session closes and remembers nothing — it has no yesterday. And the human who drove it often cannot
                explain the diff, because what they read was not the diff but the agent’s account of it. The volume of
                code goes up; the memory of why it looks like this goes down.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Насколько ненадёжно ощущение «всё в порядке», показал эксперимент METR летом 2025 года. 16 опытных
                разработчиков открытых проектов решали 246 задач в своих же репозиториях; половину — с ИИ-инструментами,
                половину — без, по жребию. До начала они ожидали ускорения на 24%; после — были уверены, что стали
                быстрее на 20%. Замер показал, что с ИИ они были медленнее на 19%. Разрыв между ощущением и результатом
                — сорок процентных пунктов. Команда, которая опирается на «мне кажется, стало лучше», опирается на
                самый ненадёжный из имеющихся приборов.
              </>
            ) : (
              <>
                How unreliable the feeling that “it is fine” can be was shown by the METR experiment in summer 2025.
                Sixteen experienced open-source developers worked through 246 tasks in their own repositories, half with
                AI tools and half without, assigned by lot. Before starting they expected a 24% speedup; afterwards they
                were sure they had been 20% faster. The measurement showed they had been 19% slower with AI. The gap
                between the feeling and the result is forty percentage points. A team that leans on “I think it got
                better” is leaning on the least reliable instrument it has.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На уровне организаций та же картина. Отчёт DORA за 2024 год, построенный на опросе нескольких тысяч
                специалистов, связал рост внедрения ИИ на 25% со снижением пропускной способности поставки на 1,5% и
                стабильности поставки — доли изменений, которые не пришлось откатывать или срочно чинить, — на 7,2%.
                Исследование GitClear на 211 миллионах изменённых строк за 2020–2024 годы добавляет механику: доля
                повторяющихся блоков выросла с 8,3% до 12,3% изменённых строк, а доля перемещённых строк — след
                рефакторинга — упала с 25% до менее 10%. Кода становится больше, повторов больше, наведения порядка
                меньше.
              </>
            ) : (
              <>
                At the organisation level the picture is the same. The 2024 DORA report, built on a survey of several
                thousand practitioners, linked a 25% increase in AI adoption to a 1.5% drop in delivery throughput and
                a 7.2% drop in delivery stability — the share of changes that did not have to be rolled back or
                hot-fixed. The GitClear study of 211 million changed lines across 2020–2024 adds the mechanics:
                duplicated blocks rose from 8.3% to 12.3% of changed lines, while moved lines — the footprint of
                refactoring — fell from 25% to under 10%. More code, more repetition, less tidying up.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ни одна из этих цифр не говорит «не используйте агентов». Они говорят, что устные договорённости
                перестали справляться. Договорённость «мы так обычно делаем» держится, пока её автор в комнате; с
                агентами появляется второй отсутствующий автор, и держаться уже не на ком. То, что записано и
                продолжает действовать в отсутствие обоих, называется протоколом. В этой комнате их четыре: что должен
                нести пул-реквест, как его читают, как передают незаконченную работу и кто меняет общие правила.
              </>
            ) : (
              <>
                None of these figures says “stop using agents”. They say that verbal agreements have stopped coping. An
                agreement of the “this is how we usually do it” kind holds while its author is in the room; with agents
                there is a second absent author, and nobody is left to hold it up. What is written down and keeps
                working in the absence of both is called a protocol. This room has four: what a pull request must
                carry, how it is read, how unfinished work is handed on, and who changes the shared rules.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Под всеми четырьмя лежит одно правило, и его стоит записать первым. За изменение отвечает человек,
                который открыл пул-реквест и нажал «слить», — независимо от того, кто набрал строки. У инструмента
                нет ответственности: его нельзя спросить через месяц и нельзя разбудить ночью. Фраза «это не я, это
                агент» в командном разговоре не принимается — ровно так же, как никогда не принималась фраза «это
                автодополнение». Кто вправе нажать «слить» и какие проверки стоят перед кнопкой — разобрано в комнате{' '}
                <Link href={`/${lang}/rooms/agentic-release-control`} className="text-accent-400 hover:underline">
                  AC-205
                </Link>
                ; здесь речь о том, что происходит между людьми до и после этой кнопки.
              </>
            ) : (
              <>
                Under all four lies one rule, and it is worth writing down first. The change is owned by the person
                who opened the pull request and pressed merge — regardless of who typed the lines. A tool carries no
                accountability: it cannot be asked a month later and cannot be paged at night. “It was not me, it was
                the agent” is not accepted in a team conversation — exactly as “it was autocomplete” never was. Who may
                press merge and which checks stand in front of the button is covered in{' '}
                <Link href={`/${lang}/rooms/agentic-release-control`} className="text-accent-400 hover:underline">
                  AC-205
                </Link>
                ; this room is about what happens between people before and after that button.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2 — the PR template */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Что должен нести пул-реквест от агента'
            : 'Chapter 2: What an Agent-Written Pull Request Must Carry'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ревьюер открывает изменение и видит <Term id="diff" lang={lang}>diff</Term>: сорок файлов, шестьсот
                строк, зелёные проверки. Чего он не видит — намерения. Что просили сделать? Почему тронут файл
                конфигурации? Кто-нибудь запускал это руками или «зелёное» означает только, что тесты, которые агент сам
                же написал, проходят? Без ответов ревью начинается с допроса автора, а автор отвечает по памяти о
                разговоре с агентом. Чтобы допрос не повторялся на каждом изменении, ответы записывают заранее — в{' '}
                <Term id="pr-template" lang={lang}>шаблон пул-реквеста</Term>, который платформа подставляет в описание
                каждого нового изменения.
              </>
            ) : (
              <>
                The reviewer opens the change and sees the <Term id="diff" lang={lang}>diff</Term>: forty files, six
                hundred lines, green checks. What they do not see is the intent. What was asked? Why is the configuration
                file touched? Did anyone run this by hand, or does “green” only mean that the tests the agent wrote for
                itself pass? Without answers the review starts as an interrogation of the author, and the author answers
                from memory of a conversation with the agent. So that the interrogation does not repeat on every change,
                the answers are written in advance — into a{' '}
                <Term id="pr-template" lang={lang}>pull request template</Term> that the platform inserts into the
                description of every new change.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для кода, написанного агентом, шаблон требует четыре поля. Первое — задача так, как она была
                поставлена: ссылка на тикет или сам контракт из{' '}
                <Link href={`/${lang}/rooms/agent-coding-foundations`} className="text-accent-400 hover:underline">
                  AC-101
                </Link>
                , чтобы ревьюер мог сравнить сделанное с заказанным. Второе — что изменилось, словами человека: не
                пересказ агента, скопированный из чата, а три-пять предложений автора, который сам прочитал diff. Третье
                — что проверено и как: какие команды автор прогнал сам, на какой машине, что увидел. Четвёртое — что
                не проверено и где известные пробелы. Четвёртое поле важнее третьего: ревьюер ищет проблемы там, куда
                ему указали, а не там, где автор уверен.
              </>
            ) : (
              <>
                For agent-written code the template requires four fields. First, the task as it was given: a link to
                the ticket or the contract itself from{' '}
                <Link href={`/${lang}/rooms/agent-coding-foundations`} className="text-accent-400 hover:underline">
                  AC-101
                </Link>
                , so the reviewer can compare what was done with what was ordered. Second, what changed, in the human’s
                words: not the agent’s summary pasted from the chat, but three to five sentences by an author who read
                the diff themselves. Third, what was verified and how: which commands the author ran, on which machine,
                what they saw. Fourth, what was not verified and where the known gaps are. The fourth field matters more
                than the third: a reviewer looks for problems where they are pointed, not where the author is confident.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'repo · шаблон пул-реквеста' : 'repo · pull request template'}
            lines={[
              { cmd: 'cat .github/pull_request_template.md' },
              { out: '## Task as given', tone: 'dir' },
              { out: ru ? '<!-- ссылка на тикет или контракт задачи -->' : '<!-- link to the ticket or the task contract -->' },
              { out: '## What changed (in your own words, not the agent’s)', tone: 'dir' },
              { out: '## Verified by me — commands and what I saw', tone: 'dir' },
              { out: ru ? '<!-- «тесты зелёные» без команды не принимается -->' : '<!-- “tests are green” without the command is not accepted -->' },
              { out: '## Not verified / known gaps', tone: 'dir' },
              { out: ru ? '<!-- пустое поле означает «не думал», а не «пробелов нет» -->' : '<!-- an empty field means “did not think about it”, not “no gaps” -->', tone: 'warn' },
              { out: '## Size', tone: 'dir' },
              { out: ru ? '<!-- одна задача = один PR; больше 400 строк — сначала разрезать -->' : '<!-- one task = one PR; above 400 lines, split first -->' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Шаблон выше умещается на экран, и в этом его смысл: он не документ, а перечень вопросов, на которые
                автор отвечает до того, как их зададут. Обратите внимание на предупреждение в четвёртом поле. Пустое
                «не проверено» — самый частый способ обойти шаблон, поэтому команда договаривается читать пустоту как
                «автор не думал об этом», и такой пул-реквест возвращается без чтения кода. Пятое поле, размер, вводит
                число, к которому мы сейчас перейдём.
              </>
            ) : (
              <>
                The template above fits on one screen, and that is the point: it is not a document but a list of
                questions the author answers before they are asked. Note the warning in the fourth field. An empty “not
                verified” is the most common way around the template, so the team agrees to read emptiness as “the
                author did not think about it”, and such a pull request is returned without the code being read. The
                fifth field, size, introduces a number we turn to next.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Про размер изменения давно есть измерения, и агенты их не отменили. Исследование SmartBear на команде
                Cisco показало: в диапазоне 200–400 строк ревьюеры находят 70–90% дефектов, а дальше доля резко падает;
                скорость выше 500 строк в час и сессия дольше 60 минут тоже роняют результат. Руководство Google по
                ревью называет 100 строк обычно разумным размером, 1000 — обычно слишком большим, и прямо разрешает
                ревьюеру отклонить изменение только за размер. Агент легко выдаёт 1500 строк за вечер. Значит, резать
                — работа автора до открытия пул-реквеста, а не ревьюера после; как разрезать одну пачку правок на
                отдельные коммиты, показано в{' '}
                <Link href={`/${lang}/rooms/git-safety-net`} className="text-accent-400 hover:underline">
                  AC-105
                </Link>
                .
              </>
            ) : (
              <>
                Change size has been measured for a long time, and agents have not repealed the measurements. The
                SmartBear study on a Cisco team showed that in the 200–400 line range reviewers find 70–90% of defects,
                after which the share drops sharply; a pace above 500 lines per hour and a session longer than 60 minutes
                also hurt the result. Google’s review guide calls 100 lines a usually reasonable size and 1,000 usually
                too large, and explicitly lets a reviewer reject a change for size alone. An agent easily produces 1,500
                lines in an evening. So cutting is the author’s job before the pull request is opened, not the reviewer’s
                after; how to cut one batch of edits into separate commits is shown in{' '}
                <Link href={`/${lang}/rooms/git-safety-net`} className="text-accent-400 hover:underline">
                  AC-105
                </Link>
                .
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/agentic-team-protocols/google-small-cls.png"
            alt={ru
              ? 'Страница «Small CLs» из руководства Google по инженерным практикам: восемь причин писать маленькие изменения, пункт о праве ревьюера отклонить изменение только за размер и раздел «What is Small?»'
              : 'The “Small CLs” page from Google’s engineering practices guide: eight reasons to write small changes, the note that a reviewer may reject a change for size alone, and the “What is Small?” section'}
            width={1280}
            height={1250}
            caption={ru
              ? 'Руководство Google по ревью, страница «Small CLs» (google.github.io/eng-practices), снимок от 03.09.2026.'
              : 'Google’s code review guide, the “Small CLs” page (google.github.io/eng-practices), captured 2026-09-03.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На снимке — та самая страница, на которую ссылается абзац выше. Восемь пунктов списка написаны про
                людей задолго до агентов, но каждый усиливается, когда автор не читал всех строк: маленькое изменение
                быстрее ревьюится, реже несёт ошибку и проще откатывается. Обратите внимание на выделенную фразу под
                списком: ревьюер вправе отклонить изменение только за размер. Для команды с агентами это готовое
                основание правила «одна задача — один пул-реквест»: его не нужно защищать в споре, достаточно сослаться
                на документ.
              </>
            ) : (
              <>
                The capture shows the very page the paragraph above refers to. The eight items in the list were written
                about people long before agents, but each one gets stronger when the author has not read every line: a
                small change is reviewed faster, carries a bug less often, and is easier to roll back. Note the bold
                sentence under the list: a reviewer may reject a change for size alone. For a team with agents that is
                a ready-made basis for the “one task — one pull request” rule: it does not need defending in an
                argument, pointing at the document is enough.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Последняя договорённость этой главы — пометка. Многие команды помечают изменения, сделанные с агентом,
                меткой вроде <code className="text-sm">ai-assisted</code>. Цель не в том, чтобы кого-то стыдить, а в
                двух практических вещах: ревьюер знает, что автор мог не читать каждую строку, и включает рубрику из
                следующей главы полностью; а команда через квартал может посчитать, отличаются ли такие изменения по
                откатам и времени ревью. Без метки этот вопрос не имеет ответа.
              </>
            ) : (
              <>
                The last agreement in this chapter is a label. Many teams mark changes made with an agent with a label
                such as <code className="text-sm">ai-assisted</code>. The goal is not to shame anyone but two practical
                things: the reviewer knows the author may not have read every line and applies the rubric from the next
                chapter in full; and a quarter later the team can count whether such changes differ in rollbacks and
                review time. Without the label that question has no answer.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3 — the review rubric */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Рубрика ревью — что проверяет человек, чего не проверит CI'
            : 'Chapter 3: The Review Rubric — What a Human Checks That CI Cannot'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Проверки в <Term id="ci-cd" lang={lang}>CI</Term> отвечают на вопрос «запускается ли код». Ревью
                отвечает на другой: «должен ли этот код существовать». Две ревьюера без договорённости смотрят на
                разное — один на стиль, другой на тесты, третий на то, что первым попалось на глаза, — и один и тот же
                пул-реквест у них получает разные судьбы. <Term id="review-rubric" lang={lang}>Рубрика</Term> — короткий
                список вопросов в фиксированном порядке, который каждый ревьюер задаёт каждому изменению. Порядок не
                случаен: от дешёвого к дорогому, чтобы ревью могло закончиться раньше, чем начнётся чтение логики.
              </>
            ) : (
              <>
                Checks in <Term id="ci-cd" lang={lang}>CI</Term> answer the question “does the code run”. Review answers
                a different one: “should this code exist”. Two reviewers without an agreement look at different things —
                one at style, another at tests, a third at whatever caught the eye first — and the same pull request gets
                different fates from them. A <Term id="review-rubric" lang={lang}>rubric</Term> is a short list of
                questions in a fixed order that every reviewer puts to every change. The order is not accidental: from
                cheap to expensive, so that the review can end before the reading of the logic begins.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первый вопрос: совпадает ли diff с задачей — и нет ли в нём лишнего. Агенты охотно делают «полезное»
                сверх заказа: попутный рефакторинг, переименование, удалённый «устаревший» тест, поправленная
                конфигурация. Каждое такое добавление — отдельное изменение без своего ревью, и оно возвращается
                автору с просьбой вынести в отдельный пул-реквест. Второй вопрос — три файла-сигнала, знакомые по{' '}
                <Link href={`/${lang}/rooms/git-safety-net`} className="text-accent-400 hover:underline">
                  AC-105
                </Link>
                : конфигурация проверок, тесты и зависимости. Новая зависимость, ослабленное утверждение в тесте,
                пропущенный тест — это то, что делает зелёный CI бессмысленным, и находится оно за минуту.
              </>
            ) : (
              <>
                The first question: does the diff match the task — and is there anything extra. Agents readily do
                “helpful” things beyond the order: a refactor along the way, a rename, a deleted “obsolete” test, an
                adjusted configuration. Each such addition is a separate change with no review of its own, and it goes
                back to the author with a request to move it into a separate pull request. The second question is the
                three signal files familiar from{' '}
                <Link href={`/${lang}/rooms/git-safety-net`} className="text-accent-400 hover:underline">
                  AC-105
                </Link>
                : the checks configuration, the tests, and the dependencies. A new dependency, a loosened assertion, a
                skipped test — these are what make a green CI meaningless, and they take a minute to find.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'review · пул-реквест 412' : 'review · pull request 412'}
            lines={[
              { cmd: 'gh pr diff 412 --stat | tail -5' },
              { out: ' src/billing/invoice.ts          | 148 ++++++++++---' },
              { out: ' src/billing/invoice.test.ts     |  31 +++--' },
              { out: ' package.json                    |   1 +', tone: 'warn' },
              { out: ' 3 files changed, 152 insertions(+), 28 deletions(-)' },
              { cmd: 'gh pr diff 412 | grep -n "^[-+].*\\(skip\\|only\\|toBeTruthy\\)"' },
              { out: ru ? '412:-  it(\'rounds to the cent on split invoices\', () => {' : '412:-  it(\'rounds to the cent on split invoices\', () => {', tone: 'bad' },
              { out: ru ? '412:+  it.skip(\'rounds to the cent on split invoices\', () => {' : '412:+  it.skip(\'rounds to the cent on split invoices\', () => {', tone: 'bad' },
              { out: '' },
              { out: ru ? '→ вернуть: новая зависимость без обоснования, отключён тест округления' : '→ return: unexplained new dependency, the rounding test was switched off', tone: 'warn' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На экране выше ревью закончилось на втором вопросе, и это нормальный исход. Строка в{' '}
                <code className="text-sm">package.json</code> не упомянута в описании, а тест на округление стал{' '}
                <code className="text-sm">it.skip</code> — вероятно, потому что агент не смог заставить его пройти. Оба
                факта видны без чтения логики счёта. Если файлы-сигналы чисты, идёт третий вопрос: перепроверить одно
                из утверждений в поле «проверено» своими руками — не все, одно. Это дёшево, и это единственный способ
                узнать, чему в этом поле верить.
              </>
            ) : (
              <>
                On the screen above the review ended at the second question, and that is a normal outcome. The line in{' '}
                <code className="text-sm">package.json</code> is not mentioned in the description, and the rounding test
                became <code className="text-sm">it.skip</code> — probably because the agent could not make it pass. Both
                facts are visible without reading the invoice logic. If the signal files are clean, the third question
                follows: re-run one of the claims from the “verified” field with your own hands — not all of them, one.
                It is cheap, and it is the only way to learn what in that field to trust.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Четвёртый вопрос — дубли: не написал ли агент то, что в репозитории уже есть. Агент не знает, что
                форматирование дат лежит в <code className="text-sm">lib/format.ts</code>, и напишет своё; цифры
                GitClear про рост повторов — именно об этом. Этот вопрос стоит ближе к концу, потому что требует знать
                репозиторий, а не только читать diff. Пятый шаг — решение, и у него три исхода: одобрить, вернуть с
                перечнем по пунктам рубрики или «слишком большое — разделить». Третий исход ревьюер вправе выбрать, не
                читая код вовсе.
              </>
            ) : (
              <>
                The fourth question is duplicates: did the agent write something the repository already has. The agent
                does not know that date formatting lives in <code className="text-sm">lib/format.ts</code> and will
                write its own; the GitClear figures on rising repetition are about exactly this. This question sits
                near the end because it requires knowing the repository, not just reading the diff. The fifth step is
                the decision, with three outcomes: approve, return with a list keyed to the rubric items, or “too large
                — split”. The reviewer may pick the third without reading the code at all.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Два правила о людях. Первое: ревью делает человек, который не вёл агента. Водитель читал рассказ агента
                о сделанном и смотрит на diff через этот рассказ — тот самый разрыв в сорок пунктов из главы 1. Его
                одобрение не считается, даже если платформа его допускает. Второе: у важных путей есть владельцы,
                записанные в файле <Term id="codeowners" lang={lang}>CODEOWNERS</Term>; платформа сама назначает их
                ревьюерами, а вместе с <Term id="branch-protection" lang={lang}>защитой ветки</Term> их одобрение
                становится обязательным. Так изменение в миграциях или в конфигурации проверок не пройдёт мимо того,
                кто за них отвечает, и об этом не нужно помнить.
              </>
            ) : (
              <>
                Two rules about people. First: the review is done by a human who did not drive the agent. The driver
                read the agent’s account of what was done and sees the diff through that account — the very forty-point
                gap from Chapter 1. Their approval does not count, even if the platform allows it. Second: important
                paths have owners recorded in a <Term id="codeowners" lang={lang}>CODEOWNERS</Term> file; the platform
                assigns them as reviewers on its own, and together with{' '}
                <Term id="branch-protection" lang={lang}>branch protection</Term> their approval becomes mandatory. A
                change to migrations or to the checks configuration then cannot slip past the person responsible, and
                nobody has to remember that.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4 — handoff and decision log */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Передача работы — сессия закрывается, запись остаётся'
            : 'Chapter 4: Handing Work On — the Session Closes, the Record Stays'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вечер, задача сделана наполовину, миграция падает в CI, а завтра вас нет. Всё, что агент знал о задаче,
                лежит в его <Term id="context-window" lang={lang}>окне контекста</Term> — и исчезнет, когда вы закроете
                сессию. Всё, что знаете вы, к утру наполовину сотрётся. Коллега, который подхватит задачу, начнёт с
                нуля: заново прочитает diff, заново наступит на ловушки, заново найдёт причину падения. Единственное,
                что переживает ночь, — короткий текст, написанный человеком перед уходом. Команда называет его{' '}
                <Term id="handoff-note" lang={lang}>запиской о передаче</Term>.
              </>
            ) : (
              <>
                Evening, the task is half done, the migration fails in CI, and you are away tomorrow. Everything the agent
                knew about the task sits in its <Term id="context-window" lang={lang}>context window</Term> — and will
                vanish when you close the session. Everything you know will be half erased by morning. The colleague who
                picks the task up will start from zero: read the diff again, step on the traps again, find the cause of
                the failure again. The only thing that survives the night is a short text written by a human before
                leaving. The team calls it a <Term id="handoff-note" lang={lang}>handoff note</Term>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В записке четыре части, и все они про состояние прямо сейчас. Что сделано и что нет. Что падает и на
                чём — с точным текстом ошибки, а не «миграция не работает». Следующий шаг — тот, который вы сделали бы
                утром сами. И ловушки: что уже пробовали и почему не сработало, чтобы коллега не потратил на это ещё
                полдня. Плюс команды для воспроизведения. Отличие записки от итога, который агент напишет по просьбе,
                — в пометках: «проверено мной» против «предполагаю». В пересказе агента «кажется» и «проверено»
                выглядят одинаково, а падающая миграция легко превращается в «требует небольшой доработки». Итог агента
                годится как черновик; записку пишет человек.
              </>
            ) : (
              <>
                The note has four parts, all about the state right now. What is done and what is not. What fails and
                where — with the exact error text, not “the migration does not work”. The next step — the one you would
                take yourself in the morning. And the traps: what was already tried and why it did not work, so the
                colleague does not spend another half day on it. Plus the commands to reproduce. What sets the note
                apart from the summary an agent will write on request is the marks: “verified by me” versus “I
                assume”. In an agent’s account “probably” and “verified” look alike, and a failing migration easily
                turns into “needs a small follow-up”. The agent’s summary serves as a draft; the note is written by a
                human.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Место для записки — одно, условленное. Обычно это описание пул-реквеста: оно уже привязано к ветке,
                видно всем и не потеряется в чате. Правило простое: пул-реквест, у которого к концу дня нет записки,
                считается брошенным, и его вправе подхватить любой. Это звучит жёстко, но именно жёсткость делает
                правило проверяемым — и снимает вопрос «можно ли трогать чужую ветку». Записка живёт до закрытия
                задачи; после слияния она никому не нужна.
              </>
            ) : (
              <>
                The note has one agreed place. Usually it is the pull-request description: it is already tied to the
                branch, visible to everyone, and will not get lost in chat. The rule is simple: a pull request without a
                note by the end of the day counts as abandoned, and anyone may pick it up. That sounds harsh, but the
                harshness is what makes the rule checkable — and removes the question “may I touch someone else’s
                branch”. The note lives until the task closes; after the merge nobody needs it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Есть второй вид записи, который, наоборот, нужен всегда. Код показывает, что сделано, но не почему.
                Через год кто-то — человек или агент, читающий репозиторий, — увидит странное место и «починит» его, не
                зная, что оно было выбрано намеренно: очередь сообщений вместо прямого вызова, своя таблица вместо
                внешнего сервиса. Для этого существует{' '}
                <Term id="decision-record" lang={lang}>запись о решении</Term> — формат, который Майкл Найгард описал в
                2011 году: короткий файл с контекстом, самим решением, статусом и последствиями. Записи лежат в
                репозитории, рядом с кодом, потому что именно там их прочитает агент.
              </>
            ) : (
              <>
                There is a second kind of record that, on the contrary, is always needed. Code shows what was done but
                not why. A year on, someone — a person or an agent reading the repository — will see an odd spot and
                “fix” it without knowing it was chosen on purpose: a message queue instead of a direct call, a table of
                one’s own instead of an external service. That is what a{' '}
                <Term id="decision-record" lang={lang}>decision record</Term> is for — the format Michael Nygard
                described in 2011: a short file with the context, the decision itself, its status, and the consequences.
                The records live in the repository, next to the code, because that is where an agent will read them.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'repo · журнал решений' : 'repo · decision log'}
            lines={[
              { cmd: 'ls docs/adr' },
              { out: '0006-postgres-over-document-store.md', tone: 'dir' },
              { out: '0007-reject-orm-switch.md', tone: 'dir' },
              { out: '0008-outbox-queue-for-emails.md', tone: 'dir' },
              { cmd: 'head -6 docs/adr/0008-outbox-queue-for-emails.md' },
              { out: '# 8. Send emails through an outbox table, not directly from the request' },
              { out: ru ? 'Status: accepted, 2026-06-12 · supersedes ADR-0004' : 'Status: accepted, 2026-06-12 · supersedes ADR-0004', tone: 'ok' },
              { out: ru ? 'Context: прямые вызовы почтового API теряли письма при таймауте запроса' : 'Context: direct mail-API calls lost emails when the request timed out' },
              { out: ru ? 'Decision: запись в таблицу outbox, отдельный воркер отправляет и помечает' : 'Decision: write to an outbox table, a separate worker sends and marks' },
              { out: ru ? 'Consequences: письмо уходит с задержкой до 30 с; нужна ретрай-политика воркера' : 'Consequences: emails go out with up to 30 s delay; the worker needs a retry policy' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Обратите внимание на строку статуса: запись 0008 не правит запись 0004, а заменяет её. Журнал решений
                ценен историей — через год спросят не только «почему outbox», но и «почему раньше было иначе и почему
                ушли». Правка на месте стирает первую половину ответа, удаление — обе. Отсюда правило: записи не
                редактируют задним числом, устаревшую помечают заменённой и пишут рядом новую. И ещё одно следствие для
                команд с агентами: решение из журнала — готовая строка для общего файла правил, о котором следующая
                глава.
              </>
            ) : (
              <>
                Note the status line: record 0008 does not edit record 0004 — it supersedes it. A decision log is
                valuable for its history: a year on, people will ask not only “why the outbox” but “why was it different
                before, and why did we leave”. Editing in place erases the first half of the answer; deleting erases
                both. Hence the rule: records are not edited after the fact; an outdated one is marked superseded and a
                new one is written next to it. And one more consequence for teams with agents: a logged decision is a
                ready-made line for the shared rules file, which the next chapter is about.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5 — who changes the rules */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Кто меняет правила — общий файл как командный договор'
            : 'Chapter 5: Who Changes the Rules — the Shared File as a Team Contract'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У репозитория есть файл, который читает каждый агент каждого участника команды при каждом запуске:{' '}
                <code className="text-sm">AGENTS.md</code>, <code className="text-sm">CLAUDE.md</code> или их аналог.
                Как устроить такой файл — какие знания в него класть и как не раздуть — разобрано в{' '}
                <Link href={`/${lang}/rooms/context-engineering-101`} className="text-accent-400 hover:underline">
                  AC-204
                </Link>
                . Здесь другой вопрос: кто вправе его менять. Строка, добавленная одним человеком, завтра меняет
                поведение агентов у всех. Это общая конфигурация, а не личная заметка, и обращаться с ней надо как с
                конфигурацией проверок: у неё есть владелец, а изменение проходит ревью.
              </>
            ) : (
              <>
                A repository has a file that every agent of every teammate reads on every run:{' '}
                <code className="text-sm">AGENTS.md</code>, <code className="text-sm">CLAUDE.md</code>, or their
                equivalent. How to build such a file — what knowledge to put in it and how not to bloat it — is covered
                in{' '}
                <Link href={`/${lang}/rooms/context-engineering-101`} className="text-accent-400 hover:underline">
                  AC-204
                </Link>
                . The question here is different: who may change it. A line added by one person changes tomorrow’s
                agent behaviour for everyone. It is shared configuration, not a personal note, and it must be handled
                like the checks configuration: it has an owner, and a change goes through review.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Четыре правила про файл правил. Первое: изменение идёт через пул-реквест с ревью владельца, записанного
                в CODEOWNERS, а не внутри коммита агента вместе с двадцатью другими файлами. Второе: файл вынесен из
                зоны записи агента — тем же способом, каким в{' '}
                <Link href={`/${lang}/rooms/github-actions-ci`} className="text-accent-400 hover:underline">
                  AC-206
                </Link>{' '}
                агенту закрыты <code className="text-sm">.github/workflows</code>. Агент может предложить правило в
                описании пул-реквеста; вписать его может только человек. Третье: у каждой строки есть причина и дата —
                «после инцидента 2026-05-03 с удалённой миграцией» — потому что правило без причины некому защитить при
                следующей чистке. Четвёртое: чистка есть, и она регулярна.
              </>
            ) : (
              <>
                Four rules about the rules file. First: a change goes through a pull request reviewed by the owner
                recorded in CODEOWNERS, not inside an agent’s commit alongside twenty other files. Second: the file sits
                outside the agent’s write zone — by the same mechanism that closes{' '}
                <code className="text-sm">.github/workflows</code> to the agent in{' '}
                <Link href={`/${lang}/rooms/github-actions-ci`} className="text-accent-400 hover:underline">
                  AC-206
                </Link>
                . The agent may propose a rule in a pull-request description; only a human may write it in. Third: every
                line has a reason and a date — “after the 2026-05-03 incident with the deleted migration” — because a
                rule without a reason has nobody to defend it at the next pruning. Fourth: there is a pruning, and it
                is regular.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чистка нужна из-за экономики окна. Файл, который каждый пополняет и никто не сокращает, растёт, пока
                агенты не перестают его соблюдать — не из упрямства, а потому что важная строка тонет среди
                сорока необязательных. Раз в квартал команда проходит по файлу и задаёт каждому правилу один вопрос:
                сработало ли оно хоть раз — поймало ли ревью то, о чём оно предупреждает, или предотвратило ли
                повторение инцидента? Правило, которое ни разу не сработало, удаляют. Правило, которое срабатывает
                постоянно, — кандидат в автоматическую проверку: то, что можно проверить скриптом, не должно жить
                текстом.
              </>
            ) : (
              <>
                Pruning is needed because of window economics. A file everyone adds to and nobody trims grows until
                agents stop following it — not out of stubbornness, but because the important line drowns among forty
                optional ones. Once a quarter the team walks through the file and puts one question to each rule: did
                it ever fire — did a review catch what it warns about, or did it prevent an incident from recurring? A
                rule that never fired is removed. A rule that fires constantly is a candidate for an automated check:
                what a script can verify should not live as text.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Так замыкается петля между четырьмя протоколами. Ревью по рубрике находит повторяющиеся проблемы —
                агент снова написал свой форматер дат, снова тронул конфигурацию. Повтор становится строкой в файле
                правил с причиной и датой. Решение из журнала — «отправляем письма через outbox» — становится там же
                строкой «не вызывать почтовый API напрямую». А записка о передаче, которую забыли написать, становится
                поводом обсудить, почему правило про неё не работает. Ни один из протоколов не живёт сам по себе.
              </>
            ) : (
              <>
                That closes the loop between the four protocols. Review by the rubric finds recurring problems — the
                agent wrote its own date formatter again, touched the configuration again. The recurrence becomes a
                line in the rules file with a reason and a date. A logged decision — “emails go through the outbox” —
                becomes a line there too: “do not call the mail API directly”. And a handoff note that was not written
                becomes a reason to discuss why the rule about it does not work. None of the protocols lives on its
                own.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Работают ли протоколы, команда узнаёт по четырём числам, которые она уже собирает или может начать
                собирать за неделю: медианный размер пул-реквеста в строках; время от открытия до первого ответа
                ревьюера (руководство Google просит ответить в течение одного рабочего дня); доля пул-реквестов,
                возвращённых за «лишнее в diff»; и доля изменений, откаченных в течение недели после слияния — та
                самая стабильность из отчёта DORA. Первые три говорят о скорости и дисциплине, четвёртое — о том, не
                покупается ли скорость ценой откатов. Если четвёртое растёт, а протоколы соблюдаются, значит, проблема
                не в дисциплине, и пора в следующую комнату — про инциденты.
              </>
            ) : (
              <>
                Whether the protocols work, the team learns from four numbers it already collects or can start
                collecting within a week: the median pull-request size in lines; the time from opening to the first
                reviewer response (Google’s guide asks for a reply within one business day); the share of pull requests
                returned for “extra changes in the diff”; and the share of changes rolled back within a week of merging
                — the very stability from the DORA report. The first three speak of speed and discipline, the fourth of
                whether speed is being bought with rollbacks. If the fourth grows while the protocols are followed, the
                problem is not discipline, and it is time for the next room — the one about incidents.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">{ru ? 'Источники' : 'Sources'}</h2>
        <p className="max-w-3xl text-neutral-300 leading-relaxed mb-5">
          {ru
            ? 'Все числа и названные документы в этой комнате опираются на источники ниже; ссылки проверены 03.09.2026. Шаблон пул-реквеста, порядок рубрики и четыре части записки о передаче — обобщение командной практики, а не выдержка из одного стандарта: подстраивайте их под свой репозиторий, сохраняя проверяемость.'
            : 'Every number and named document in this room rests on the sources below; the links were checked on 2026-09-03. The pull-request template, the rubric order, and the four parts of the handoff note are a generalisation of team practice rather than an extract from a single standard — adapt them to your repository while keeping them checkable.'}
        </p>
        <div className="bg-deep border border-border-subtle rounded-[1.35rem] p-5">
          <ul className="text-sm text-neutral-400 space-y-3">
            {SOURCES.map((source) => (
              <li key={source.href}>
                {source.authors} {source.title}{source.venue ? ` (${source.venue})` : ''}{' — '}
                {ru ? source.note.ru : source.note.en}.{' '}
                <RefLink href={source.href}>{source.label}</RefLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
