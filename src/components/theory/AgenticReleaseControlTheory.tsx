"use client";

import React from 'react';
import Image from 'next/image';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function AgenticReleaseControlTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: «У меня всё зелёно» — ещё не релиз'
            : 'Chapter 1: “It Is Green on My Machine” Is Not a Release'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Агент закончил работу и показывает зелёный прогон тестов. Это приятный момент, но он говорит
                ровно одно: на той машине, с теми файлами и с той версией зависимостей, которые оказались рядом,
                команда завершилась без ошибки. Пользователь же получит не вашу машину, а собранный артефакт на
                чужом железе. Между этими двумя состояниями лежит отдельный контур работы, и именно он решает,
                увидит ли кто-нибудь сделанное изменение.
              </>
            ) : (
              <>
                The agent finishes its work and shows a green test run. That is a pleasant moment, but it states
                exactly one fact: on that machine, with those files and that particular set of installed
                dependencies, the command exited without an error. Your users will not get your machine — they get
                a built artifact running on someone else’s hardware. Between those two states sits a separate
                layer of work, and it is the layer that decides whether anyone ever sees the change.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Локальный прогон почти всегда добрее к вам, чем общий. На вашей машине остались собранные кеши,
                переменные окружения, скачанные модели, случайно доустановленный пакет и та версия Node или
                Python, которую вы поставили полгода назад. Общий прогон стартует с пустого места: чистая
                файловая система, только объявленные зависимости, фиксированная версия платформы. Разница между
                этими двумя мирами и есть самая частая причина фразы «но у меня работало».
              </>
            ) : (
              <>
                A local run is almost always kinder to you than a shared one. Your machine still holds build
                caches, environment variables, downloaded models, a package you installed by accident, and the
                version of Node or Python you set up six months ago. A shared run starts from an empty place: a
                clean filesystem, only the declared dependencies, a pinned platform version. The gap between those
                two worlds is the most common source of the phrase “but it worked for me”.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'локально · CI' : 'local · CI'}
            lines={[
              { cmd: 'npm test', comment: ru ? '# на своей машине' : '# on your own machine' },
              { out: ru ? '✓ 128 тестов пройдено  (2.4s)' : '✓ 128 tests passed  (2.4s)', tone: 'ok' },
              { out: '' },
              { cmd: 'git push origin fix/date-format', prompt: '$' },
              { out: ru ? '● CI: установка зависимостей из lock-файла…' : '● CI: installing dependencies from the lock file…' },
              { out: ru ? '✗ 3 теста упали: TZ=UTC против Europe/Moscow' : '✗ 3 tests failed: TZ=UTC vs Europe/Moscow', tone: 'bad' },
              { out: ru ? '✗ проверка типов: пакет не объявлен в package.json' : '✗ typecheck: package not declared in package.json', tone: 'bad' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второе отличие — объём. Локально запускают то, что относится к задаче: пару файлов тестов, иногда
                линтер. Общий прогон гоняет матрицу: разные операционные системы, разные версии среды, сборку
                продакшен-профиля, проверку зависимостей на уязвимости, миграции базы. Часть этих проверок
                физически невозможно выполнить на ноутбуке за разумное время, и именно они ловят ошибки, которые
                не видит ни человек, ни агент во время работы над задачей.
              </>
            ) : (
              <>
                The second difference is scope. Locally you run what relates to the task: a couple of test files,
                sometimes a linter. The shared run executes a matrix: different operating systems, different
                runtime versions, a production build, a dependency vulnerability scan, database migrations. Some of
                those checks simply cannot run on a laptop in reasonable time, and they are exactly the ones that
                catch the failures neither a human nor an agent notices while working on the task.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда важное для агентной разработки различие: «проверка прошла» и «изменение разрешено» — разные
                события. Первое — факт из отчёта инструмента. Второе — решение системы, у которой есть правила:
                какие проверки обязательны, кто может их запускать, кто подтверждает результат. Дальше в комнате
                мы разберём этот контур по частям — обязательные проверки и права, ревью изменения, осторожный
                выкат и откат. Всё это одинаково работает и для человека, и для агента; разница лишь в том, что
                агент производит изменения быстрее и нагружает контур сильнее.
              </>
            ) : (
              <>
                Hence a distinction that matters for agentic development: “the check passed” and “the change is
                allowed” are different events. The first is a fact reported by a tool. The second is a decision made
                by a system with rules: which checks are mandatory, who may start them, who confirms the result.
                The rest of this room takes that layer apart — required checks and permissions, reviewing the
                change, a careful rollout, and the way back. All of it works the same for a human and for an agent;
                the only difference is that an agent produces changes faster and puts more load on the layer.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Кто вправе запускать проверки и сливать изменения'
            : 'Chapter 2: Who May Start the Checks and Merge the Change'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Набор обязательных проверок перед слиянием называют{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term>. Слово «gate» здесь точное: это не оценка
                качества и не отчёт, а ворота, которые либо открыты, либо нет. Обычно гейт собирают из независимых
                условий: сборка, линтеры, юнит-тесты, проверка типов, сканер зависимостей. Каждое условие способно
                заблокировать слияние в одиночку, и это сознательный выбор — так отказ одной проверки не тонет в
                общем «в целом всё неплохо».
              </>
            ) : (
              <>
                The set of mandatory checks before a merge is called a{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term>. The word “gate” is precise: it is not a
                quality score or a report but a door that is either open or shut. A gate is usually assembled from
                independent conditions: build, linters, unit tests, typecheck, dependency scanner. Any single
                condition can block the merge on its own, and that is deliberate — one failing check never drowns
                in an overall “looks fine on average”.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы гейт что-то значил, его нельзя обойти. За это отвечает{' '}
                <Term id="branch-protection" lang={lang}>защита ветки</Term>: правило репозитория, которое
                запрещает пушить напрямую в основную ветку и требует, чтобы перечисленные проверки закончились
                успехом. Права на запуск проверок тоже раздают не всем. Ниже — реальный прогон в открытом
                репозитории Next.js для пул-реквеста от внешнего участника: сборка не стартовала вообще, статус
                «Action required», и в жёлтой рамке написано, что запуск ждёт подтверждения мейнтейнера.
              </>
            ) : (
              <>
                For a gate to mean anything, it must not be bypassable. That is what{' '}
                <Term id="branch-protection" lang={lang}>branch protection</Term> is for: a repository rule that
                forbids pushing straight to the main branch and requires the listed checks to finish successfully.
                The right to start the checks is not handed to everyone either. Below is a real run in the public
                Next.js repository for a pull request from an outside contributor: the build never started, the
                status reads “Action required”, and the amber banner says the run is waiting for a maintainer to
                approve it.
              </>
            )}
          </p>
          <figure className="my-6">
            <div className="rounded-xl border-2 border-accent-400/60 overflow-hidden">
              <Image
                src="/images/rooms/agentic-release-control/github-workflow-awaiting-approval.png"
                alt={ru
                  ? 'Страница прогона GitHub Actions со статусом Action required и предупреждением, что workflow ожидает подтверждения мейнтейнера в пул-реквесте'
                  : 'GitHub Actions run page with the status Action required and a banner saying the workflow is awaiting approval from a maintainer in the pull request'}
                width={1440}
                height={388}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-neutral-500 mt-2">
              {ru
                ? 'Прогон build_and_test.yml для пул-реквеста из внешнего форка в vercel/next.js (скриншот страницы GitHub Actions; имя автора пул-реквеста скрыто)'
                : 'A build_and_test.yml run for a pull request from an outside fork in vercel/next.js (screenshot of the GitHub Actions page; the author’s handle is blurred)'}
            </figcaption>
          </figure>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Причина такого правила простая и очень близкая к теме агентов. Прогон проверок — это чужие
                вычислительные ресурсы, а иногда и доступ к секретам сборки. Если бы любой присланный код
                автоматически исполнялся в среде проекта, отправка вредоносного пул-реквеста стала бы способом
                добыть токены. Поэтому право запустить проверки выдаётся отдельно от права предложить изменение,
                а право слить — отдельно от обоих. Три разных права вместо одного общего доверия.
              </>
            ) : (
              <>
                The reason for that rule is simple and very close to the agent theme. Running the checks means
                spending someone else’s compute and sometimes granting access to build secrets. If any submitted
                code executed automatically inside the project environment, sending a malicious pull request would
                become a way to harvest tokens. So the right to start the checks is granted separately from the
                right to propose a change, and the right to merge separately from both. Three distinct
                permissions instead of one blanket trust.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для агента отсюда следует рабочая конфигурация прав. Агент открывает ветку и пул-реквест, читает
                отчёты проверок, чинит найденное и обновляет описание — всё это безопасно, потому что не меняет
                состояние основной ветки. Кнопка слияния остаётся за правилами репозитория и человеком. Такое
                разделение снимает главный страх «агент сам себе выпишет разрешение»: даже полностью автономный
                цикл упирается в ворота, которые он не открывает.
              </>
            ) : (
              <>
                For an agent this yields a working permission setup. The agent opens a branch and a pull request,
                reads the check reports, fixes what they found, and updates the description — all of it safe,
                because none of it changes the state of the main branch. The merge button stays with the repository
                rules and a human. That split removes the central fear of “the agent will write itself a
                permission slip”: even a fully autonomous loop ends at a gate it cannot open.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Ревью агентского изменения' : 'Chapter 3: Reviewing an Agent’s Change'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Проверки ловят то, что можно описать правилом. Всё остальное ловит человек на ревью — и это место
                стало узким сразу, как только агенты научились писать код быстро. Один инженер за вечер прочитает
                несколько сотен строк осмысленно; агент за то же время произведёт несколько тысяч. Если очередь
                растёт, ревью превращается в формальность, и тогда контур качества держится на одних автоматических
                проверках, которые про смысл изменения ничего не знают.
              </>
            ) : (
              <>
                Checks catch whatever can be expressed as a rule. Everything else is caught by a human in review —
                and that spot became the bottleneck as soon as agents learned to write code quickly. In an evening
                one engineer can read a few hundred lines with real attention; an agent produces a few thousand in
                the same time. When the queue grows, review turns into a formality, and the quality layer rests on
                automated checks alone, which know nothing about the meaning of the change.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Поэтому первое требование к агенту — размер изменения. Пул-реквест на два файла читается за
                несколько минут, на сорок файлов — не читается вовсе. Ниже настоящий пул-реквест в репозитории
                Next.js: две вкладки с числами наверху («Checks 2», «Files changed 2»), сводка «+41 −1», слева
                список из двух файлов, справа сам дифф. Обратите внимание, что один из двух файлов — новый файл
                тестов.
              </>
            ) : (
              <>
                Hence the first requirement for an agent: the size of the change. A two-file pull request is read
                in a few minutes; a forty-file one is not read at all. Below is a real pull request in the Next.js
                repository: tabs with counts at the top (“Checks 2”, “Files changed 2”), a “+41 −1” summary, a
                two-file list on the left, and the diff itself on the right. Note that one of the two files is a
                new test file.
              </>
            )}
          </p>
          <figure className="my-6">
            <div className="rounded-xl border-2 border-accent-400/60 overflow-hidden">
              <Image
                src="/images/rooms/agentic-release-control/github-pr-files-changed.png"
                alt={ru
                  ? 'Вкладка Files changed пул-реквеста на GitHub: сводка +41 −1, список из двух изменённых файлов и дифф нового файла тестов'
                  : 'The Files changed tab of a GitHub pull request: a +41 −1 summary, a list of two changed files, and the diff of a new test file'}
                width={1440}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-neutral-500 mt-2">
              {ru
                ? 'Вкладка Files changed пул-реквеста в vercel/next.js (скриншот GitHub; имя автора скрыто)'
                : 'The Files changed tab of a pull request in vercel/next.js (GitHub screenshot; the author’s handle is blurred)'}
            </figcaption>
          </figure>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Такой экран задаёт порядок чтения. Сначала смотрят на список файлов: изменение осталось внутри
                заявленной области или расползлось на соседние модули. Потом на соотношение кода и тестов: правка
                поведения без единого нового теста — сигнал, а удаление или ослабление существующего теста — самый
                тревожный вид диффа, потому что так зелёный прогон получают бесплатно. Затем на опасные места:
                миграции базы, конфигурация прав, работа с секретами, новые зависимости. И только в конце — на стиль
                и мелочи, которые всё равно поправит линтер.
              </>
            ) : (
              <>
                That screen dictates a reading order. Start with the file list: did the change stay inside the
                declared area or spread into neighbouring modules. Then the code-to-tests ratio: a behavior change
                without a single new test is a signal, and deleting or weakening an existing test is the most
                alarming kind of diff, because it is how a green run is obtained for free. Then the dangerous
                spots: database migrations, permission configuration, anything touching secrets, new dependencies.
                And only at the end — style and small things the linter will fix anyway.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Агента можно поставить и вторым контуром ревью: он быстро находит повторы, забытые обработки
                ошибок, несогласованные имена и расхождение кода с описанием пул-реквеста. Но у такого ревьюера
                есть слепая зона: он оценивает текст изменения, а не намерение продукта, и охотно соглашается с
                автором. Поэтому агентское ревью полезно ставить перед человеческим как фильтр, а не вместо него
                как замену. Человеческое ревью остаётся местом, где решают, нужно ли это изменение вообще.
              </>
            ) : (
              <>
                An agent can also serve as a second review pass: it quickly finds duplication, forgotten error
                handling, inconsistent naming, and drift between the code and the pull request description. But
                such a reviewer has a blind spot: it judges the text of the change rather than the product intent,
                and it agrees with the author readily. So an agent review works well placed before the human one as
                a filter, not instead of it as a replacement. Human review stays the place where someone decides
                whether the change is needed at all.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Выкат — canary, флаги и метрики' : 'Chapter 4: Rollout — Canary, Flags, and Metrics'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                После слияния изменение ещё не обязано доехать до всех сразу. Осторожный выкат устроен так: новую
                версию сначала получает небольшая доля трафика, её показатели сравнивают с остальной частью, и
                только при отсутствии ухудшения долю увеличивают. Этот приём называют{' '}
                <Term id="canary-release" lang={lang}>canary</Term>. Смысл в том, чтобы цена ошибки считалась не в
                масштабе «все пользователи», а в масштабе «первые пять процентов».
              </>
            ) : (
              <>
                After the merge, a change is still not obliged to reach everyone at once. A careful rollout works
                like this: a small share of traffic gets the new version first, its numbers are compared against
                the rest, and the share grows only if nothing got worse. The technique is called a{' '}
                <Term id="canary-release" lang={lang}>canary</Term>. The point is that the cost of a mistake is
                measured at the scale of “the first five percent” rather than “all users”.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сравнивать нужно по заранее выбранным показателям, иначе решение превращается в спор о вкусах.
                Ниже — публичный демонстрационный дашборд Grafana для одного сервиса. На нём видны три величины,
                которых почти всегда достаточно: частота запросов, доля ошибок и время ответа по перцентилям
                P50 / P95 / P99.
              </>
            ) : (
              <>
                The comparison has to run on metrics chosen in advance, otherwise the decision turns into an
                argument about taste. Below is a public Grafana demo dashboard for a single service. It shows the
                three quantities that are almost always enough: request rate, error ratio, and response time by the
                P50 / P95 / P99 percentiles.
              </>
            )}
          </p>
          <figure className="my-6">
            <div className="rounded-xl border-2 border-accent-400/60 overflow-hidden">
              <Image
                src="/images/rooms/agentic-release-control/grafana-service-metrics.png"
                alt={ru
                  ? 'Дашборд Grafana для сервиса: графики частоты запросов, доли ошибок с красной линией порога 5% и времени ответа по перцентилям P50, P95, P99'
                  : 'A Grafana service dashboard: charts of request rate, error ratio with a red 5% threshold line, and response time by the P50, P95, and P99 percentiles'}
                width={1440}
                height={836}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-neutral-500 mt-2">
              {ru
                ? 'Демонстрационный дашборд сервиса на публичном стенде play.grafana.org (скриншот Grafana)'
                : 'A demo service dashboard on the public play.grafana.org sandbox (Grafana screenshot)'}
            </figcaption>
          </figure>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На панели ошибок проведена красная линия на уровне пяти процентов — это порог, заданный до выката,
                а не после. Такая линия и есть переход от обсуждения к правилу: пока фактическая доля ошибок под
                ней, выкат продолжается; пересекла — трафик возвращают на прежнюю версию. Перцентили отвечают на
                вопрос, кому стало хуже: P50 описывает типичного пользователя, P99 — самых неудачливых, и именно
                они первыми чувствуют деградацию. Смотреть показатели нужно достаточно долго, чтобы через выборку
                прошли редкие сценарии; несколько минут спокойного графика ничего не доказывают.
              </>
            ) : (
              <>
                The error panel carries a red line at five percent — a threshold set before the rollout, not after.
                That line is what turns a discussion into a rule: while the actual error ratio stays below it, the
                rollout continues; once it crosses, traffic goes back to the previous version. Percentiles answer
                the question of who got hurt: P50 describes the typical user, P99 the unluckiest ones, and they
                feel a degradation first. The metrics have to be watched long enough for rare scenarios to pass
                through the sample; a few calm minutes of a chart prove nothing.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Рядом с canary работает второй инструмент — <Term id="feature-flag" lang={lang}>feature flag</Term>.
                Различие простое: canary управляет тем, какая версия кода обслуживает часть трафика, а флаг
                управляет поведением внутри одной версии. Код уезжает в прод выключенным и включается изменением
                конфигурации — для десяти процентов, для одной команды, для внутренних сотрудников. Выключение
                тоже стоит одно изменение конфигурации, без сборки и без выката. Для агентной разработки это
                ключевой рычаг: чем дешевле обратный ход, тем спокойнее можно отдавать агенту следующий шаг.
              </>
            ) : (
              <>
                A second instrument works next to the canary — the{' '}
                <Term id="feature-flag" lang={lang}>feature flag</Term>. The distinction is simple: a canary
                controls which version of the code serves part of the traffic, while a flag controls behavior
                inside one version. The code ships to production switched off and is enabled by a configuration
                change — for ten percent, for one team, for internal staff. Switching it off costs one
                configuration change too, with no build and no rollout. For agentic development this is the key
                lever: the cheaper the way back, the more calmly you can hand the agent the next step.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Инцидент, откат и бюджет автономии' : 'Chapter 5: Incident, Rollback, and the Autonomy Budget'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Когда показатели поехали, первым делом возвращают систему в рабочее состояние, а не ищут причину.
                Порядок именно такой, потому что расследование длится непредсказуемо долго, а пользователи страдают
                всё это время. Откат — штатная операция обслуживания, а не признание поражения: команда, которая
                откатывается за две минуты, теряет меньше, чем команда, которая полчаса героически чинит прод.
              </>
            ) : (
              <>
                When the numbers go bad, the first move is to return the system to a working state, not to look for
                the cause. The order is exactly that, because an investigation takes an unpredictable amount of
                time while users suffer through all of it. A rollback is a routine maintenance operation, not an
                admission of defeat: a team that rolls back in two minutes loses less than a team that heroically
                repairs production for half an hour.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Обратных ходов обычно несколько, и они стоят по-разному. Самый дешёвый — выключить флаг: поведение
                исчезает мгновенно, деплой не нужен. Следующий — вернуть трафик на предыдущую версию, если выкат
                шёл канареечно. Самый дорогой — откат самого изменения в репозитории, потому что за ним снова
                следуют проверки и выкат. Отдельная сложность — миграции базы: данные, изменённые новой версией,
                возвратом кода не отменяются, и продумывать обратный шаг нужно до выката, а не после.
              </>
            ) : (
              <>
                There is usually more than one way back, and they cost differently. The cheapest is switching a flag
                off: the behavior disappears instantly, no deploy needed. Next is returning traffic to the previous
                version, if the rollout was a canary. The most expensive is reverting the change in the repository,
                because checks and a rollout follow it all over again. Database migrations are a separate
                difficulty: data already modified by the new version is not undone by reverting code, so the way
                back has to be designed before the rollout, not after.
              </>
            )}
          </p>
          <Terminal
            title={ru ? 'инцидент · откат' : 'incident · rollback'}
            lines={[
              { out: ru ? '! доля ошибок 7.4% при пороге 5%' : '! error ratio 7.4% against a 5% threshold', tone: 'bad' },
              { cmd: 'flags disable checkout-new-validation', comment: ru ? '# шаг 1: самый дешёвый ход' : '# step 1: the cheapest move' },
              { out: ru ? '✓ флаг выключен, поведение вернулось к прежнему' : '✓ flag off, behavior back to the previous one', tone: 'ok' },
              { cmd: 'watch metrics --service checkout --window 15m', comment: ru ? '# шаг 2: убедиться' : '# step 2: confirm' },
              { out: ru ? '✓ доля ошибок 0.6%, P99 в норме' : '✓ error ratio 0.6%, P99 back to normal', tone: 'ok' },
              { cmd: 'git revert 4f0a061', comment: ru ? '# шаг 3: убрать причину из основной ветки' : '# step 3: remove the cause from main' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                После восстановления начинается разбор. Полезный разбор отвечает на четыре вопроса: что именно
                увидели пользователи, какой сигнал первым показал проблему, сколько времени прошло от сигнала до
                отката и что позволило изменению пройти гейт. Последний вопрос — самый ценный, потому что ответ на
                него превращается в новую проверку: недостающий тест, порог в метрике, дополнительное правило в
                защите ветки. Разбор без поиска виноватого нужен не из вежливости, а из практичности: команда,
                которая наказывает за инциденты, получает не меньше инцидентов, а меньше сообщений о них.
              </>
            ) : (
              <>
                Once service is restored, the review begins. A useful review answers four questions: what exactly
                users saw, which signal showed the problem first, how long it took from that signal to the
                rollback, and what let the change through the gate. The last one is the most valuable, because its
                answer turns into a new check: a missing test, a metric threshold, one more branch protection rule.
                Reviewing without hunting for a culprit is not about politeness but about practicality: a team that
                punishes people for incidents gets fewer incident reports, not fewer incidents.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Здесь и сходится вся комната. Автономия агента упирается не в его сообразительность, а в стоимость
                ошибки: сколько людей увидят плохое изменение, как быстро его получится убрать и что останется
                после отката. Гейт ограничивает круг того, что вообще проходит; canary ограничивает число
                пострадавших; флаг делает обратный ход мгновенным; разбор превращает каждый инцидент в новое
                правило. Чем крепче этот контур, тем больше шагов можно отдать агенту — не потому, что ему стали
                больше доверять, а потому, что цена его ошибки стала маленькой.
              </>
            ) : (
              <>
                This is where the whole room comes together. An agent’s autonomy is limited not by its cleverness
                but by the cost of a mistake: how many people see a bad change, how fast it can be removed, and
                what remains after the rollback. The gate limits what gets through at all; the canary limits how
                many people are affected; the flag makes the way back instant; the review turns every incident into
                a new rule. The stronger that layer, the more steps you can delegate to an agent — not because it
                earned more trust, but because its mistakes became cheap.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
