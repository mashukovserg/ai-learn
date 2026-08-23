"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';
import Screenshot from '@/components/Screenshot';

export default function AgenticCostLatencyTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1 — the unit of cost is a run, not a request */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: Единица счёта — прогон, а не запрос'
            : 'Chapter 1: The Unit of Cost Is a Run, Not a Request'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Прайс-лист поставщика модели устроен просто: столько-то за миллион входных{' '}
                <Term id="token" lang={lang}>токенов</Term>, столько-то за миллион выходных. Отсюда легко сделать
                неверный вывод, что оценить стоимость фичи можно, прикинув длину запроса и ответа. Для чат-бота это
                почти работает. Для агента — нет, потому что агент решает задачу не одним обращением к модели, а
                десятком: прочитать файл, подумать, вызвать инструмент, посмотреть результат, поправить, проверить.
              </>
            ) : (
              <>
                A provider’s price list is simple: so much per million input{' '}
                <Term id="token" lang={lang}>tokens</Term>, so much per million output tokens. From that it is easy to
                draw the wrong conclusion — that you can price a feature by estimating the length of the request and the
                answer. For a chatbot this almost works. For an agent it does not, because an agent solves a task not
                with one call to the model but with a dozen: read a file, think, call a tool, look at the result, adjust,
                verify.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ключевая деталь в том, что каждый следующий шаг несёт с собой историю предыдущих. Результат вызова
                инструмента возвращается в{' '}
                <Term id="context-window" lang={lang}>контекстное окно</Term>, и на десятом шаге модель получает на
                вход весь путь: инструкции, описания инструментов, прочитанные файлы, вывод команд, свои прошлые
                рассуждения. Поэтому расход входных токенов растёт не линейно от числа шагов, а заметно быстрее: не
                «десять запросов по тысяче токенов», а «первый запрос тысяча, десятый — двадцать тысяч».
              </>
            ) : (
              <>
                The key detail is that each step carries the history of the previous ones. A tool call’s result returns
                into the{' '}
                <Term id="context-window" lang={lang}>context window</Term>, so at step ten the model receives the whole
                path as input: instructions, tool descriptions, files that were read, command output, its own earlier
                reasoning. Input token spend therefore grows not linearly with the number of steps but noticeably
                faster: not “ten requests of a thousand tokens” but “the first request a thousand, the tenth twenty
                thousand”.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда полезная единица измерения — стоимость одного прогона, то есть одной решённой задачи целиком, а
                не одного обращения к модели. Она отвечает на вопрос, который задаёт бизнес: сколько стоит закрыть один
                тикет, разобрать одно резюме, проверить один пул-реквест. Цена за миллион токенов на этот вопрос не
                отвечает, потому что не знает, сколько шагов агент сделает и сколько из них окажутся лишними.
              </>
            ) : (
              <>
                Hence a more useful unit: the cost of one run — one task solved end to end — rather than one call to the
                model. It answers the question the business actually asks: what does it cost to close one ticket, screen
                one résumé, review one pull request? A price per million tokens does not answer that, because it does not
                know how many steps the agent will take and how many of them will turn out to be wasted.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У прогонов есть неприятное свойство: они распределены неравномерно. Большинство задач закрывается за
                три-четыре шага, а меньшинство уходит в длинный цикл «поправил — сломал — поправил» и съедает больше,
                чем сто обычных вместе взятых. Поэтому средняя стоимость прогона мало о чём говорит, и планировать по
                ней бюджет — верный способ ошибиться в разы. Смотреть надо на распределение и на его правый хвост, а
                заодно понимать, какие задачи в этот хвост попадают.
              </>
            ) : (
              <>
                Runs have an inconvenient property: they are unevenly distributed. Most tasks close in three or four
                steps, while a minority slides into a long “fixed it — broke it — fixed it” loop and consumes more than a
                hundred ordinary runs combined. So the average cost of a run says little, and budgeting from it is a
                reliable way to be wrong by a multiple. What you look at is the distribution and its right-hand tail —
                and which kinds of task end up in that tail.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Дальше в комнате разберём это по частям: чем задержка отличается от той задержки, которую замечает
                человек; какие рычаги реально снижают стоимость и что каждый из них стоит взамен; как задать потолок
                расхода, чтобы длинный хвост не разорял; и как устроить учёт, при котором на вопрос «почему этот прогон
                стоил вдесятеро» есть ответ, а не догадка.
              </>
            ) : (
              <>
                The rest of the room takes this apart: how latency differs from the latency a human actually notices;
                which levers genuinely reduce cost and what each of them costs in return; how to set a spending ceiling
                so the long tail cannot ruin you; and how to keep records such that “why did this run cost ten times the
                usual” has an answer rather than a guess.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2 — latency people actually feel */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Задержка, которую замечает человек'
            : 'Chapter 2: The Latency a Human Actually Notices'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Когда ответ печатается на экране постепенно, человек оценивает скорость по началу, а не по концу.
                Пауза до первого символа воспринимается как «думает», а дальнейшая печать — уже как работа. Поэтому
                разделяют две величины: время до первого токена, или{' '}
                <Term id="ttft" lang={lang}>TTFT</Term>, и общее время ответа. Длинный ответ с быстрым началом
                ощущается отзывчивым, короткий с трёхсекундной паузой — нет, хотя по сумме секунд второй быстрее.
              </>
            ) : (
              <>
                When an answer streams onto the screen, a person judges speed by its beginning, not its end. The pause
                before the first character reads as “thinking”, and the typing that follows already reads as work. So two
                quantities are separated: time to first token, or{' '}
                <Term id="ttft" lang={lang}>TTFT</Term>, and total response time. A long answer that starts quickly feels
                responsive; a short one after a three-second pause does not, even though the second is faster in total
                seconds.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Разброс этой величины между моделями больше, чем обычно ожидают. Ниже — измерение независимой службы
                Artificial Analysis, которая гоняет один и тот же набор запросов через модели разных поставщиков и
                публикует результаты: столбик показывает секунды до первого токена ответа, а тёмная часть внутри него —
                время, потраченное моделью на «размышление» до начала печати.
              </>
            ) : (
              <>
                The spread of this quantity across models is wider than people usually expect. Below is a measurement by
                Artificial Analysis, an independent service that runs the same set of requests through models from
                different providers and publishes the results: each bar shows the seconds to the first answer token, and
                the dark portion inside it is the time the model spent “thinking” before it started printing.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/agentic-cost-latency/artificialanalysis-ttft.png"
            alt={ru
              ? 'Столбиковая диаграмма Artificial Analysis «Latency: Time To First Answer Token»: 25 моделей от 7,8 до 196,4 секунды до первого токена ответа, внутри столбиков выделено время размышления'
              : 'Artificial Analysis bar chart “Latency: Time To First Answer Token”: 25 models ranging from 7.8 to 196.4 seconds to the first answer token, with thinking time highlighted inside the bars'}
            width={994}
            height={515}
            caption={ru
              ? 'Время до первого токена ответа по 25 моделям, измерение Artificial Analysis (снимок сделан 7 августа 2026 года; значения меняются с выходом новых версий). Нажмите, чтобы рассмотреть.'
              : 'Time to first answer token across 25 models, measured by Artificial Analysis (captured on 7 August 2026; the values move as new versions ship). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Читать этот график стоит не как рейтинг, а как карту компромисса. Разница между левым и правым краем —
                больше чем в двадцать раз, и проходит она не по поставщикам, а по режиму работы: модели, которые
                рассуждают перед ответом, платят за это временем до первого токена, и тёмная доля внутри столбика
                показывает, что именно размышление, а не обработка запроса, составляет почти всё ожидание. Отсюда
                практическое правило: для шага, где рассуждение не нужно, режим рассуждения — чистый расход времени.
                Числа на графике устаревают за недели, а соотношение остаётся.
              </>
            ) : (
              <>
                Read this chart as a map of a trade-off rather than as a ranking. The gap between the left and right
                edges is more than twentyfold, and it does not run along provider lines but along mode of operation:
                models that reason before answering pay for it in time to first token, and the dark share inside each bar
                shows that it is the thinking, not the input processing, that accounts for nearly all of the wait. Hence a
                practical rule: for a step where reasoning is not needed, reasoning mode is pure time spent. The numbers
                on the chart go stale within weeks; the relationship does not.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У агента к этому добавляется своя арифметика. Его прогон — цепочка шагов, и шаги идут последовательно:
                модель не может решить, какой файл читать вторым, пока не увидела первый. Общее время такого прогона
                складывается из времени каждого шага, а не из времени самого долгого. Отсюда первый вывод, который
                часто пропускают: сократить число шагов почти всегда полезнее, чем ускорить один шаг.
              </>
            ) : (
              <>
                An agent adds its own arithmetic to this. Its run is a chain of steps, and the steps are sequential: the
                model cannot decide which file to read second until it has seen the first. The total time of such a run
                is the sum of every step, not the duration of the longest one. Hence a conclusion that is often missed:
                cutting the number of steps almost always beats speeding up a single step.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Не все шаги обязаны идти по очереди. Если агенту нужно прочитать пять файлов, между которыми нет
                зависимости, их читают одним заходом параллельно — и пять последовательных ожиданий превращаются в
                одно. Правило простое: последовательность нужна там, где следующий шаг зависит от результата
                предыдущего, и не нужна нигде больше. Это самый дешёвый выигрыш по времени в агентной системе, потому
                что он не требует ни другой модели, ни другого поставщика.
              </>
            ) : (
              <>
                Not every step has to wait its turn. If the agent needs to read five files with no dependency between
                them, they are read in one parallel batch — and five sequential waits collapse into one. The rule is
                simple: sequence is required where the next step depends on the previous result, and nowhere else. This
                is the cheapest time win available in an agentic system, because it needs neither a different model nor a
                different provider.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Мерить задержку средним — привычная ошибка. Если девять запросов ответили за секунду, а десятый за
                минуту, среднее выглядит приемлемо, но у каждого десятого пользователя опыт испорчен. Поэтому смотрят
                перцентили: <Term id="p95" lang={lang}>P95</Term> — время, в которое уложились 95% запросов, то есть
                граница для худших пяти процентов. Именно этот хвост замечают люди, и на нём ставят пороги. Для
                агентных прогонов хвост длиннее обычного, потому что его формируют те самые длинные циклы из первой
                главы.
              </>
            ) : (
              <>
                Measuring latency by the mean is a familiar mistake. If nine requests answer in a second and the tenth
                takes a minute, the average looks acceptable while every tenth user has a ruined experience. So you look
                at percentiles: <Term id="p95" lang={lang}>P95</Term> is the time within which 95% of requests completed —
                the boundary for the worst five percent. That tail is what people notice, and it is where thresholds are
                set. For agent runs the tail is longer than usual, because it is formed by exactly the long loops from
                the first chapter.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Наконец, часть задержки создаёте не вы. Поставщик ограничивает, сколько запросов и токенов один клиент
                может израсходовать в минуту, и при превышении отвечает отказом с кодом 429 — это{' '}
                <Term id="rate-limit" lang={lang}>лимит запросов</Term>. Для агента это штатная ситуация, а не поломка:
                правильная реакция — подождать и повторить с растущей паузой. Запуск десяти агентов параллельно упирается
                в этот потолок раньше, чем в бюджет, и выглядит это как необъяснимо выросшая задержка.
              </>
            ) : (
              <>
                Finally, part of the latency is not yours to create. The provider caps how many requests and tokens one
                client may consume per minute, and answers with a 429 refusal above that — a{' '}
                <Term id="rate-limit" lang={lang}>rate limit</Term>. For an agent this is a normal condition, not a
                breakage: the correct reaction is to wait and retry with a growing pause. Launching ten agents in
                parallel hits this ceiling before it hits the budget, and it shows up as inexplicably grown latency.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3 — the levers */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Четыре рычага и цена каждого'
            : 'Chapter 3: Four Levers and What Each One Costs'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первый рычаг — не звать дорогую модель на дешёвую работу. Внутри одной задачи шаги неодинаковы:
                определить язык файла, разобрать JSON, выбрать один вариант из трёх — простая работа; спроектировать
                миграцию или найти причину падения — сложная. Выбор исполнителя под шаг называют{' '}
                <Term id="model-routing" lang={lang}>маршрутизацией моделей</Term>. Цена этого рычага — усложнение
                системы: появляется место, где решается, кому отдать шаг, и это решение само может ошибаться.
              </>
            ) : (
              <>
                The first lever is not calling an expensive model for cheap work. Within a single task the steps are not
                equal: detecting a file’s language, parsing JSON, picking one option out of three is easy work; designing
                a migration or finding the cause of a failure is hard. Choosing the executor per step is called{' '}
                <Term id="model-routing" lang={lang}>model routing</Term>. The price of this lever is added complexity: a
                place appears where the assignment is decided, and that decision can itself be wrong.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй рычаг — не платить дважды за одно и то же. Агент на каждом шаге отправляет одно и то же начало:
                системные инструкции, описания инструментов, файлы проекта.{' '}
                <Term id="prompt-caching" lang={lang}>Кэширование промпта</Term> позволяет поставщику запомнить эту
                неизменную часть: повторное чтение из кэша стоит заметно дешевле обычных входных токенов и возвращается
                быстрее. Условие одно и жёсткое — совпадать должен точный префикс. Отсюда практическое следствие:
                стабильное кладут сверху, изменчивое дописывают снизу, и случайно вставленная в начало метка времени
                обнуляет весь выигрыш.
              </>
            ) : (
              <>
                The second lever is not paying twice for the same thing. At every step the agent sends the same opening:
                system instructions, tool descriptions, project files.{' '}
                <Term id="prompt-caching" lang={lang}>Prompt caching</Term> lets the provider retain that unchanging
                portion: a cache read costs noticeably less than regular input tokens and comes back faster. There is one
                strict condition — the prefix must match exactly. Hence the practical consequence: stable content goes on
                top, volatile content is appended at the bottom, and a timestamp accidentally placed at the start wipes
                out the entire gain.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Третий рычаг — отдать срочность там, где её никто не требует. Ночная переразметка архива, прогон
                оценочного набора, генерация описаний для каталога — работа, результат которой нужен к утру, а не через
                секунду. Для неё есть{' '}
                <Term id="batch-api" lang={lang}>пакетный режим</Term>: запросы отправляются списком, результат
                возвращается в течение оговорённого окна, и стоит это заметно меньше немедленного ответа. Обмен прямой:
                вы отдаёте время и получаете цену, поэтому в интерактивном пути этот рычаг неприменим.
              </>
            ) : (
              <>
                The third lever is giving up urgency where nobody demands it. An overnight re-labelling of an archive, an
                eval-set run, generating catalogue descriptions — work whose result is needed by morning, not in a
                second. For that there is a{' '}
                <Term id="batch-api" lang={lang}>batch mode</Term>: requests go as a list, results come back within an
                agreed window, and it costs noticeably less than an immediate answer. The trade is direct — you give up
                time and get price — which is why this lever does not apply on the interactive path.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Четвёртый рычаг — самый недооценённый: не класть в окно лишнее. Из первой главы известно, что вход
                каждого шага несёт всю историю, поэтому лишний файл, прочитанный на втором шаге, оплачивается ещё
                восемь раз. Работа с содержимым окна — отдельная дисциплина, и она разобрана в комнате{' '}
                <Link href={`/${lang}/rooms/context-engineering-101`} className="text-accent-400 hover:underline">
                  Контекст-инжиниринг
                </Link>
                ; здесь важна её денежная сторона. Цена рычага в том, что урезать легко, а недодать контекста — значит
                получить больше шагов, то есть заплатить ровно за то, что экономили.
              </>
            ) : (
              <>
                The fourth lever is the most underrated: do not put anything superfluous into the window. From the first
                chapter we know that each step’s input carries the whole history, so a redundant file read at step two is
                paid for another eight times. Handling the contents of the window is a discipline of its own, covered in
                the{' '}
                <Link href={`/${lang}/rooms/context-engineering-101`} className="text-accent-400 hover:underline">
                  Context Engineering
                </Link>{' '}
                room; what matters here is its monetary side. The lever’s price is that trimming is easy, but starving
                the agent of context means more steps — paying for exactly what you were trying to save.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Порядок применения стоит выбирать по соотношению выигрыша и риска, а не по интересности. Кэширование
                префикса и параллельные независимые вызовы почти ничего не ломают и дают эффект сразу. Урезание
                контекста требует замера: сначала посмотреть, что реально лежит в окне, потом резать. Маршрутизация
                моделей меняет качество и требует проверки на своём наборе задач. Пакетный режим доступен ровно там, где
                ответ не ждут в реальном времени, и нигде больше.
              </>
            ) : (
              <>
                The order of application should follow the ratio of gain to risk, not how interesting each lever is.
                Prefix caching and parallel independent calls break almost nothing and pay off immediately. Trimming
                context requires measurement: first look at what is actually in the window, then cut. Model routing
                changes quality and needs validation on your own task set. Batch mode is available exactly where the
                answer is not awaited in real time, and nowhere else.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4 — budgets and caps */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Потолок расхода как часть конструкции'
            : 'Chapter 4: A Spending Ceiling as Part of the Design'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Агент, оставленный без ограничений, ведёт себя как настойчивый исполнитель без чувства времени: он
                будет пробовать, пока не получится или пока не кончатся деньги. Причём чаще всего дорогой прогон — это
                не сложная задача, а зациклившаяся: агент правит одно, ломает другое, возвращается, правит снова.
                Поэтому <Term id="token-budget" lang={lang}>бюджет токенов</Term> задают не как отчётную величину, а как
                часть конструкции: потолок на прогон вместе с лимитом шагов и лимитом времени.
              </>
            ) : (
              <>
                An agent with no limits behaves like a persistent worker with no sense of time: it will keep trying until
                it succeeds or the money runs out. And an expensive run is usually not a hard task but a looping one: the
                agent fixes one thing, breaks another, comes back, fixes again. So a{' '}
                <Term id="token-budget" lang={lang}>token budget</Term> is set not as a reporting figure but as part of
                the design: a ceiling per run alongside a step limit and a wall-clock limit.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Одного потолка мало — важно, что происходит при его достижении. Молчаливая остановка бесполезна:
                человек увидит недоделанную работу и не поймёт, была ли она невозможной или просто оборвалась.
                Полезная остановка оставляет после себя пакет: сколько израсходовано, на каком шаге прервались, что
                уже сделано, что осталось, и сохранённая трасса. Это тот же принцип передачи решения человеку,{' '}
                <Term id="human-in-the-loop" lang={lang}>human-in-the-loop</Term>, только поводом служит не риск, а
                исчерпанный бюджет.
              </>
            ) : (
              <>
                A ceiling alone is not enough — what matters is what happens when it is reached. A silent stop is
                useless: a human sees unfinished work and cannot tell whether it was impossible or simply cut off. A
                useful stop leaves a package behind: how much was spent, at which step it broke off, what is already
                done, what remains, and the saved trace. This is the same principle of handing the decision to a human,{' '}
                <Term id="human-in-the-loop" lang={lang}>human-in-the-loop</Term>, except the trigger is an exhausted
                budget rather than a risk.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отдельно ограничивают бесплодные попытки. Если две итерации подряд не улучшили результат — тесты падают
                так же, ошибка та же, — продолжать смысла мало: агент, скорее всего, крутит один и тот же неверный
                подход. Знакомая по надёжности конструкция здесь работает буквально:{' '}
                <Term id="circuit-breaker" lang={lang}>предохранитель</Term> размыкает цепь, когда попытки перестали
                давать эффект. Ограничение по числу шагов ловит не то же самое, что ограничение по токенам: длинный
                файл выбирает бюджет за три шага, а бесплодный цикл — за тридцать дешёвых.
              </>
            ) : (
              <>
                Fruitless attempts are limited separately. If two iterations in a row did not improve the result — the
                same tests fail, the same error — continuing rarely helps: the agent is most likely spinning the same
                wrong approach. A construct familiar from reliability engineering applies literally here: a{' '}
                <Term id="circuit-breaker" lang={lang}>circuit breaker</Term> opens the circuit once attempts stop having
                an effect. A step limit does not catch the same thing as a token limit: one long file exhausts the budget
                in three steps, while a fruitless loop takes thirty cheap ones.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'agent · сводка прогона' : 'agent · run summary'}
            lines={[
              { cmd: 'agent run --task PR-412 --budget 120k --max-steps 20', comment: ru ? '# потолки заданы до старта' : '# ceilings set before the start' },
              { out: ru ? '● шаг 4/20 · кэш префикса: попадание (18.4k токенов)' : '● step 4/20 · prefix cache: hit (18.4k tokens)', tone: 'ok' },
              { out: ru ? '● шаг 9/20 · тесты падают так же, как на шаге 7' : '● step 9/20 · tests fail the same way as at step 7', tone: 'warn' },
              { out: ru ? '● шаг 10/20 · две попытки без улучшения — предохранитель разомкнут' : '● step 10/20 · two attempts with no improvement — circuit breaker opened', tone: 'warn' },
              { out: '' },
              { out: ru ? 'остановлено: 61k / 120k токенов, 10 из 20 шагов, 4 мин 12 с' : 'stopped: 61k / 120k tokens, 10 of 20 steps, 4m12s' },
              { out: ru ? 'сделано: ветка fix/pr-412, 2 файла, тесты красные' : 'done: branch fix/pr-412, 2 files, tests red' },
              { out: ru ? 'передано человеку · трасса: runs/2026-08-07/pr-412.jsonl' : 'handed to a human · trace: runs/2026-08-07/pr-412.jsonl', tone: 'link' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В такой сводке видно сразу три вещи, ради которых всё и делалось. Прогон остановился по правилу, а не
                по счёту: истрачено 61k из 120k, значит потолок сработал не как ограничитель, а как страховка, и
                реальной причиной остановки стал предохранитель. Работа не потеряна — ветка и файлы на месте, человеку
                досталось состояние, а не пустота. И есть трасса, по которой можно понять, что происходило на шагах
                7–9, вместо того чтобы гадать по итоговой цифре.
              </>
            ) : (
              <>
                A summary like this shows three things at once, which is the whole point. The run stopped by a rule, not
                by the invoice: 61k of 120k spent, so the ceiling acted as insurance rather than as the limiter, and the
                actual reason for stopping was the breaker. The work is not lost — the branch and files are there, and the
                human inherits a state rather than a void. And there is a trace, so you can find out what happened at
                steps 7–9 instead of guessing from a total.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Уровней потолка обычно три, и путать их не стоит. Потолок прогона защищает от одной зациклившейся
                задачи. Дневной или недельный лимит проекта защищает от ситуации, когда таких задач стало сто. Лимит
                поставщика — тот самый rate limit — вообще не ваш и срабатывает по своим правилам. Первые два вы
                задаёте сами исходя из того, сколько стоит польза от задачи; третий остаётся учитывать при
                планировании параллельного запуска.
              </>
            ) : (
              <>
                There are usually three levels of ceiling, and they should not be conflated. The per-run ceiling protects
                against one looping task. A daily or weekly project limit protects against the case where there are a
                hundred such tasks. The provider’s limit — the rate limit — is not yours at all and fires by its own
                rules. You set the first two yourself, based on what the task’s benefit is worth; the third is something
                to account for when planning parallel runs.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5 — observability */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Учёт, который отвечает на вопрос «почему так дорого»'
            : 'Chapter 5: Records That Answer “Why Was This So Expensive”'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Счёт от поставщика в конце месяца — худший из возможных отчётов: он говорит, сколько потрачено, и не
                говорит ничего о том, на что. Ответ даёт{' '}
                <Term id="tracing" lang={lang}>трассировка</Term> — запись прогона по шагам, где у каждого вызова
                модели и инструмента есть своё время, число токенов и результат. Она превращает вопрос «почему этот
                прогон стоил вдесятеро» в конкретный ответ вида «тридцать перечитываний одного файла на шаге семь».
              </>
            ) : (
              <>
                The provider’s month-end invoice is the worst possible report: it says how much was spent and nothing
                about what on. The answer comes from{' '}
                <Term id="tracing" lang={lang}>tracing</Term> — a step-by-step record of the run where every model and
                tool call carries its own duration, token count, and result. It turns “why did this run cost ten times
                the usual” into a concrete answer like “thirty re-reads of one file at step seven”.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы записи были полезны, каждому прогону нужен идентификатор и разметка: какая задача, какая модель,
                какая версия промпта, попал ли префикс в кэш. Разметка нужна ровно затем, чтобы можно было сравнивать
                срезы: этот тип задач против того, вчерашняя версия промпта против сегодняшней. Без разметки данные
                есть, а ответов нет — вы видите поток чисел, но не можете отнести его ни к какому решению.
              </>
            ) : (
              <>
                For the records to be useful, every run needs an identifier and labels: which task, which model, which
                prompt version, whether the prefix hit the cache. The labels exist precisely so that slices can be
                compared: this task type against that one, yesterday’s prompt version against today’s. Without labels you
                have data and no answers — a stream of numbers you cannot attribute to any decision.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Постоянных величин, за которыми стоит следить, немного — четыре. Стоимость одного прогона и число шагов
                на прогон отвечают за деньги: первая говорит, сколько стоит польза, вторая объясняет, откуда взялась
                первая. Доля попаданий в кэш префикса показывает, работает ли самый дешёвый рычаг из третьей главы, — её
                падение обычно означает, что кто-то добавил изменчивую строку в начало промпта. P95 по времени прогона
                отвечает за то, что чувствует человек. Средние значения на такие панели не ставят: они прячут хвост,
                ради которого панель и открывают.
              </>
            ) : (
              <>
                There are not many quantities worth watching continuously — four. Cost per run and steps per run account
                for the money: the first says what the benefit costs, the second explains where the first came from. The
                prefix cache hit rate shows whether the cheapest lever from chapter three is actually working — a drop
                usually means somebody added a volatile line to the top of the prompt. P95 of run duration accounts for
                what a human feels. Averages do not go on these panels: they hide the very tail the panel is opened for.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Последний шаг замыкает круг с релизным контуром: стоимость становится обязательной проверкой наравне с
                тестами. Правило формулируется как регрессия, а не как абсолют — «средняя стоимость прогона на наборе
                задач не выросла больше чем на четверть относительно прошлого замера». Абсолютный порог быстро
                устаревает вместе с ценами, а сравнение с прошлым замером ловит именно то, что нужно: правку, которая
                тихо сделала фичу дороже. Как такая проверка встраивается в{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term>, разобрано в комнате{' '}
                <Link href={`/${lang}/rooms/agentic-release-control`} className="text-accent-400 hover:underline">
                  Релизный контур для агентного кода
                </Link>
                .
              </>
            ) : (
              <>
                The last step closes the circle with release control: cost becomes a mandatory check alongside tests. The
                rule is phrased as a regression rather than an absolute — “average cost per run on the task set has not
                grown by more than a quarter against the previous measurement”. An absolute threshold ages quickly along
                with prices, while a comparison against the previous measurement catches exactly what matters: a change
                that quietly made the feature more expensive. How such a check is wired into a{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term> is covered in the{' '}
                <Link href={`/${lang}/rooms/agentic-release-control`} className="text-accent-400 hover:underline">
                  Release Control for Agent-Written Code
                </Link>{' '}
                room.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
