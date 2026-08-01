"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function GithubActionsCiTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 1: Чистая машина против «у меня работает»'
            : 'Chapter 1: A Clean Machine Against “Works on My Machine”'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Локальный прогон проверок доказывает меньше, чем кажется. Он доказывает, что код работает на машине,
                где стоит нужная версия языка, лежат подтянутые полгода назад зависимости, живут переменные
                окружения, о которых уже никто не помнит, и есть файл конфигурации, который однажды создали руками
                и забыли добавить в репозиторий. Половина этих условий в репозитории не описана. Поэтому «у меня
                работает» — утверждение не о коде, а о конкретном компьютере.
              </>
            ) : (
              <>
                A local test run proves less than it seems. It proves the code works on a machine that has the right
                language version, dependencies pulled six months ago, environment variables nobody remembers, and a
                config file somebody once created by hand and never added to the repository. Half of those conditions
                are not described in the repository at all. So “works on my machine” is a statement about a
                particular computer, not about the code.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                <Term id="ci-cd" lang={lang}>Непрерывная интеграция</Term> убирает это допущение простым способом:
                каждое изменение собирается и проверяется на чистой машине, которая не знает ничего про твои
                локальные настройки. Такая машина называется <Term id="runner" lang={lang}>runner</Term>, и в
                типичном случае она создаётся заново под каждый запуск, а после его окончания уничтожается. Всё, что
                нужно для сборки, runner берёт из репозитория — значит, если чего-то там нет, проверка честно
                падает, а не проходит по случайности.
              </>
            ) : (
              <>
                <Term id="ci-cd" lang={lang}>Continuous integration</Term> removes that assumption in a simple way:
                every change is built and checked on a clean machine that knows nothing about your local setup. That
                machine is called a <Term id="runner" lang={lang}>runner</Term>, and in the typical case it is created
                fresh for each run and destroyed when the run ends. Everything needed for the build comes from the
                repository — so if something is missing there, the check honestly fails instead of passing by
                accident.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Для агентной разработки у этого свойства есть отдельная ценность. Агент работает в среде, которую
                сам же и подготовил: доустановил пакет, поправил переменную, создал временный файл. Его «всё
                зелено» описывает эту среду, а не проект. Нейтральный прогон на чистой машине — единственный способ
                отделить настоящее изменение от следов сеанса. Это та же логика, что и в контрактах инструментов:
                результат проверяет не тот, кто его произвёл.
              </>
            ) : (
              <>
                For agentic development this property carries extra value. The agent works inside an environment it
                shaped itself: it installed an extra package, tweaked a variable, created a temporary file. Its “all
                green” describes that environment, not the project. A neutral run on a clean machine is the only way
                to separate the real change from the residue of a session. It is the same logic as in tool
                contracts: the party that produced a result is not the party that validates it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Второе, что даёт CI, — общий язык для команды. Пока проверки живут в головах, каждый ревьюер спорит
                со своим набором ожиданий: один требует тесты, другой смотрит стиль, третий вспоминает про сборку
                под продакшен. Когда проверки описаны файлом в репозитории, спор смещается с людей на правила:
                видно, что именно обязательно, и видно, кто это менял. Дальше эти правила становятся условием
                слияния — но чтобы дойти до этого, сначала нужно научиться их писать.
              </>
            ) : (
              <>
                The second thing CI provides is a shared language for the team. While checks live in people’s heads,
                every reviewer argues from a private set of expectations: one demands tests, another looks at style,
                a third remembers the production build. Once the checks are written as a file in the repository, the
                argument moves from people to rules: what is mandatory is visible, and so is who changed it. Later
                those rules become a merge condition — but to get there you first have to be able to write them.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Стоит сразу назвать и цену. Каждый запуск занимает минуты машинного времени, которое оплачивается,
                и минуты человеческого ожидания, которое дороже. Проверка, идущая сорок минут, перестаёт быть
                обратной связью и превращается в препятствие: люди начинают сливать изменения, не дождавшись
                результата. Поэтому дальше в этой комнате две темы идут вместе — как описать проверки и как
                удержать их быстрыми, потому что медленный CI отключают первым.
              </>
            ) : (
              <>
                It is worth naming the cost right away. Every run consumes machine minutes, which are billed, and
                human waiting minutes, which are more expensive. A check that takes forty minutes stops being
                feedback and becomes an obstacle: people start merging without waiting for the result. So this room
                keeps two subjects together — how to describe the checks and how to keep them fast — because slow CI
                is the first thing a team switches off.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 2: Анатомия workflow — триггеры, задачи, шаги'
            : 'Chapter 2: Workflow Anatomy — Triggers, Jobs, Steps'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Сценарий автоматизации в GitHub Actions называется{' '}
                <Term id="workflow" lang={lang}>workflow</Term> и лежит в самом репозитории — в папке
                .github/workflows, в виде YAML-файла. Это важная деталь, а не мелочь хранения: проверки едут вместе
                с кодом, проходят ревью как код и меняются в том же пул-реквесте, что и поведение, которое они
                проверяют. Файлов может быть несколько: отдельно быстрая проверка на каждый пуш, отдельно ночной
                тяжёлый прогон.
              </>
            ) : (
              <>
                An automation script in GitHub Actions is called a{' '}
                <Term id="workflow" lang={lang}>workflow</Term> and lives inside the repository itself — in the
                .github/workflows folder, as a YAML file. That is a meaningful detail, not a storage trivia: checks
                travel with the code, get reviewed as code, and change in the same pull request as the behavior they
                verify. There can be several files: a fast check on every push, a heavy nightly run separately.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Внутри файла три уровня. Верхний — события, на которые workflow запускается: пуш в ветку,
                пул-реквест, расписание, ручной запуск кнопкой. Средний — задачи (jobs); каждая получает свой
                runner и по умолчанию выполняется параллельно с остальными. Нижний — шаги внутри задачи; они идут
                строго по порядку на одной машине и либо выполняют команду, либо подключают готовый чужой блок.
                Ниже — минимальный, но настоящий файл такой проверки.
              </>
            ) : (
              <>
                The file has three levels. The top one is the events that start the workflow: a push to a branch, a
                pull request, a schedule, a manual button. The middle one is jobs; each gets its own runner and by
                default runs in parallel with the others. The bottom one is steps inside a job; they run strictly in
                order on one machine and either execute a command or plug in a ready-made block written by someone
                else. Below is a minimal but real file of such a check.
              </>
            )}
          </p>
          <Terminal
            title="cat .github/workflows/ci.yml"
            lines={[
              { cmd: 'cat .github/workflows/ci.yml' },
              { out: 'name: CI' },
              { out: 'on:', tone: 'link' },
              { out: '  pull_request:' },
              { out: '  push:' },
              { out: '    branches: [main]' },
              { out: 'jobs:', tone: 'link' },
              { out: '  check:' },
              { out: '    runs-on: ubuntu-latest' },
              { out: '    steps:' },
              { out: '      - uses: actions/checkout@v4' },
              { out: '      - uses: actions/setup-node@v4' },
              { out: '        with: { node-version: 20, cache: npm }' },
              { out: '      - run: npm ci' },
              { out: '      - run: npm run lint' },
              { out: '      - run: npm test' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Читается сверху вниз. Проверка запускается на каждый пул-реквест и на каждый пуш в основную ветку.
                Одна задача выполняется на свежей Ubuntu. Первый шаг скачивает код репозитория на runner — без него
                машина пустая, и это самая частая ошибка новичка. Второй ставит нужную версию языка и включает кэш
                зависимостей. Дальше три обычные команды, те же самые, что разработчик набирает у себя. В этом и
                смысл: CI не изобретает свои проверки, он выполняет проектные на нейтральной машине.
              </>
            ) : (
              <>
                It reads top to bottom. The check runs on every pull request and every push to the main branch. One
                job executes on a fresh Ubuntu. The first step downloads the repository code onto the runner —
                without it the machine is empty, and forgetting it is the classic beginner mistake. The second
                installs the language version and enables the dependency cache. Then three ordinary commands, the
                same ones a developer types locally. That is the point: CI does not invent its own checks, it runs
                the project’s checks on a neutral machine.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Про чужие блоки — те, что подключаются словом uses, — нужно сказать отдельно. Это код, который
                выполняется в твоём репозитории с доступом к его содержимому, и версию ему задаёшь ты. Ссылка на
                подвижную метку вроде «v4» означает доверие к тому, что автор блока никогда не выпустит вредное
                обновление. В чувствительных репозиториях поэтому фиксируют не метку, а точный хеш коммита: тогда
                выполняется ровно то, что однажды проверили, а обновление становится осознанным изменением в
                пул-реквесте.
              </>
            ) : (
              <>
                The third-party blocks — the ones plugged in with “uses” — deserve a separate word. That is code
                executed inside your repository with access to its contents, and you choose its version. Referencing
                a moving tag like “v4” means trusting that the block’s author will never publish a malicious update.
                Sensitive repositories therefore pin an exact commit hash instead of a tag: then exactly what was
                once reviewed is what runs, and an upgrade becomes a deliberate change in a pull request.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 3: Скорость и стоимость — кэш, матрица, фильтры'
            : 'Chapter 3: Speed and Cost — Cache, Matrix, Filters'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Свежая машина на каждый запуск — сильное свойство, но у него есть обратная сторона: всё, что было
                скачано в прошлый раз, скачивается заново. Установка зависимостей часто занимает больше времени,
                чем сами тесты. Поэтому первое, что делают с медленным CI, — включают кэш: результат установки
                сохраняется между запусками и подкладывается на новую машину. Ключом кэша служит файл со списком
                зависимостей: изменился он — кэш пересобирается, не изменился — переиспользуется.
              </>
            ) : (
              <>
                A fresh machine per run is a strong property with a downside: everything downloaded last time is
                downloaded again. Installing dependencies often takes longer than the tests themselves. So the first
                thing done to slow CI is enabling a cache: the result of installation is stored between runs and
                restored onto the new machine. The cache key is the dependency lockfile: if it changed, the cache is
                rebuilt; if not, it is reused.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Второй рычаг — разделение работы. Линтер, типы и тесты не обязаны идти друг за другом на одной
                машине: разнесённые по отдельным задачам, они выполняются параллельно, и общее время равно самой
                долгой из них, а не сумме. У этого есть и диагностическая польза: в списке проверок сразу видно,
                что именно упало, без чтения общего лога. Ниже — как выглядит результат такого разделения.
              </>
            ) : (
              <>
                The second lever is splitting the work. Linting, type checking, and tests do not have to run one
                after another on the same machine: placed in separate jobs, they execute in parallel, and total time
                equals the slowest one rather than the sum. There is a diagnostic benefit too: the check list shows
                immediately what failed, with no need to read a combined log. Below is what the result of such a
                split looks like.
              </>
            )}
          </p>
          <Terminal
            title="ci · run 482"
            lines={[
              { out: '✓ lint            22s', tone: 'ok' },
              { out: '✓ typecheck       41s', tone: 'ok' },
              { out: '✗ test (node 18)  1m 12s — 2 failed', tone: 'bad' },
              { out: '✓ test (node 20)  1m 09s', tone: 'ok' },
              { out: '– build           skipped: docs-only change', tone: 'dim' },
              {
                out: lang === 'ru'
                  ? 'итого 1m 14s (параллельно) · было 3m 24s (последовательно)'
                  : 'total 1m 14s (parallel) · was 3m 24s (sequential)',
                tone: 'warn',
              },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Тесты здесь запущены дважды — на двух версиях среды. Это{' '}
                <Term id="matrix-build" lang={lang}>матрица</Term>: задача описана один раз, а CI разворачивает её в
                набор параллельных запусков по перечисленным вариантам. Падение локализовано точно: проблема есть на
                восемнадцатой версии и отсутствует на двадцатой, и это уже половина диагноза. Последняя строка
                списка — пропущенная задача: правила запуска решили, что для изменения только в документации
                собирать проект незачем. Такие фильтры по путям экономят больше всего минут в больших репозиториях.
              </>
            ) : (
              <>
                The tests here ran twice — on two environment versions. That is a{' '}
                <Term id="matrix-build" lang={lang}>matrix</Term>: the job is described once and CI expands it into a
                set of parallel runs across the listed variants. The failure is pinpointed: the problem exists on
                version 18 and not on 20, which is already half the diagnosis. The last line of the list is a skipped
                job: the trigger rules decided that a docs-only change does not need a build. Path filters like that
                save the most minutes in large repositories.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                У ускорения есть граница, за которую заходить не стоит. Экономия не должна отменять сам смысл
                проверки: фильтр, который пропускает сборку при правке кода, а не документации, экономит минуты и
                возвращает баги. Матрица, разросшаяся до двенадцати комбинаций, съедает бюджет минут ради
                уверенности, которую никто не спрашивал. Разумный ориентир — держать обязательный набор проверок в
                пределах нескольких минут, а всё тяжёлое (полный набор комбинаций, длинные интеграционные прогоны)
                уносить в ночной запуск по расписанию.
              </>
            ) : (
              <>
                Acceleration has a boundary worth respecting. Savings must not cancel the point of the check: a
                filter that skips the build for code changes rather than docs saves minutes and returns bugs. A
                matrix grown to twelve combinations eats the minute budget for confidence nobody asked for. A
                sensible target is to keep the required set of checks within a few minutes and move everything heavy
                — the full combination set, long integration runs — into a scheduled nightly run.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 4: Секреты, права и почему агент не правит workflow'
            : 'Chapter 4: Secrets, Permissions, and Why the Agent Does Not Edit Workflows'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Проверке почти всегда нужно что-то, чего нет в открытом коде: токен для публикации пакета, ключ к
                тестовой базе, доступ к сервису уведомлений. Класть такие значения в репозиторий нельзя — он
                копируется, форкается и индексируется. Для этого существуют{' '}
                <Term id="ci-secrets" lang={lang}>секреты CI</Term>: платформа хранит значение в зашифрованном виде
                и подставляет его в задачу как переменную окружения, а в логах маскирует. Workflow ссылается только
                на имя, само значение в коде не появляется.
              </>
            ) : (
              <>
                A check almost always needs something the open code does not contain: a token to publish a package, a
                key to a test database, access to a notification service. Such values cannot live in the repository —
                it is cloned, forked, and indexed. That is what{' '}
                <Term id="ci-secrets" lang={lang}>CI secrets</Term> are for: the platform stores the value encrypted,
                injects it into the job as an environment variable, and masks it in logs. The workflow references
                only the name; the value itself never appears in code.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Рядом живёт вторая, менее заметная сущность — токен самого прогона. Каждый запуск получает
                автоматический доступ к репозиторию, и объём этого доступа настраивается. По умолчанию его часто
                оставляют шире, чем нужно: проверке, которая просто гоняет тесты, не требуется право писать в
                репозиторий, менять пул-реквесты или публиковать пакеты. Правило то же, что и для инструментов
                агента, — минимально необходимые права. Задача объявляет, что ей нужно только чтение, и этим
                закрывает целый класс возможных злоупотреблений.
              </>
            ) : (
              <>
                Next to it lives a second, less visible entity — the token of the run itself. Every run gets
                automatic access to the repository, and the scope of that access is configurable. By default it is
                often left wider than necessary: a check that merely runs tests does not need permission to write to
                the repository, modify pull requests, or publish packages. The rule is the same as for agent tools —
                least privilege. A job declaring that it needs read access only closes an entire class of possible
                abuse.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Отсюда следует правило, которое стоит держать явным при работе с агентом: файлы в .github/workflows
                агент не правит. Причина не в недоверии, а в устройстве системы. Тот, кто может менять проверки,
                может их и отключить, а изменение проверок обесценивает все остальные гарантии сразу. Заодно это
                защищает от сюжета, знакомого по главе про безопасность инструментов: инструкция, найденная агентом
                в чужом тексте, не должна превращаться в правку конфигурации, которая выполняется с правами
                репозитория.
              </>
            ) : (
              <>
                From this follows a rule worth keeping explicit when working with an agent: the agent does not edit
                files in .github/workflows. The reason is not distrust but system design. Whoever can change the
                checks can also switch them off, and changing the checks devalues every other guarantee at once. It
                also protects against a plot familiar from the tool-security chapter: an instruction the agent found
                in someone else’s text must never turn into a configuration edit executed with repository
                permissions.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Особая осторожность нужна с проверками пул-реквестов из форков — то есть от людей вне команды. Здесь
                платформа намеренно урезает права: секреты в такой прогон по умолчанию не передаются, потому что
                иначе любой желающий мог бы прислать пул-реквест с кодом, который просто напечатает токен. Правило
                простое: чем менее доверенный источник изменения, тем меньше прав у прогона. Полный набор прав
                оставляют для кода, который уже прошёл ревью и попал в основную ветку.
              </>
            ) : (
              <>
                Special care is needed for checks on pull requests from forks — that is, from people outside the
                team. Here the platform deliberately trims permissions: secrets are not passed into such runs by
                default, because otherwise anyone could send a pull request whose code simply prints the token. The
                rule is plain: the less trusted the source of a change, the fewer permissions its run gets. The full
                permission set is reserved for code that has already passed review and landed on the main branch.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 5: От прогона к решению — артефакты, обязательные проверки, красный CI'
            : 'Chapter 5: From a Run to a Decision — Artifacts, Required Checks, Red CI'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Прогон заканчивается, машина уничтожается, и вместе с ней исчезает всё, что она произвела. Если
                упавший тест оставил отчёт, а неудачная проверка интерфейса — скриншот, их нужно сохранить явно:
                такие файлы называются <Term id="build-artifact" lang={lang}>артефактами</Term> и скачиваются со
                страницы прогона после его окончания. Без них разбор упирается в чтение лога, а с ними красная
                проверка превращается в материал, который можно открыть и посмотреть — в том числе отдать агенту.
              </>
            ) : (
              <>
                A run ends, the machine is destroyed, and everything it produced disappears with it. If a failing
                test wrote a report and a failing UI check captured a screenshot, they must be saved explicitly: such
                files are called <Term id="build-artifact" lang={lang}>artifacts</Term> and are downloaded from the
                run page after it finishes. Without them, investigation is limited to reading the log; with them, a
                red check becomes material you can open and inspect — including handing it to an agent.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Сам по себе прогон ничего не запрещает: он лишь показывает статус в пул-реквесте. Обязательным его
                делает настройка репозитория — <Term id="branch-protection" lang={lang}>защита ветки</Term>, где
                перечислено, какие проверки должны закончиться успехом до слияния. Именно эта связка превращает
                описанный в YAML сценарий в настоящий{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term>. Пока проверка не отмечена обязательной, она
                остаётся рекомендацией, которую в спешке пролистывают.
              </>
            ) : (
              <>
                A run by itself forbids nothing: it only shows a status on the pull request. What makes it mandatory
                is a repository setting — <Term id="branch-protection" lang={lang}>branch protection</Term>, which
                lists the checks that must succeed before a merge. That pairing is what turns a YAML script into a
                real <Term id="quality-gate" lang={lang}>quality gate</Term>. Until a check is marked required, it
                stays a recommendation people scroll past when they are in a hurry.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Красный CI требует разбора, а не рефлекса. Полезно различать три причины. Первая — изменение
                действительно сломало поведение: чинится кодом. Вторая — проверка нестабильна и падает через раз:
                чинится тестом, а не повторным запуском. Третья — сломалось окружение: недоступен внешний сервис,
                кончились минуты, обновился базовый образ. Кнопка «перезапустить» помогает только в третьем случае,
                и именно поэтому она опасна: привычка перезапускать до зелёного превращает набор проверок в
                генератор случайных чисел.
              </>
            ) : (
              <>
                Red CI calls for diagnosis, not reflex. It helps to separate three causes. First, the change really
                broke behavior: fixed in code. Second, the check is unstable and fails every other time: fixed in the
                test, not by re-running. Third, the environment broke: an external service is down, minutes ran out,
                the base image was updated. The “re-run” button helps only in the third case, and that is exactly why
                it is dangerous: the habit of re-running until green turns a check suite into a random number
                generator.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Для агента красный прогон — хороший вход в работу, если ему передают не строчку «failed», а материал:
                имя упавшей задачи, фрагмент лога с ошибкой, отчёт из артефактов и границу — что чинить можно, а
                что нет. Правка кода — да; правка теста, который поймал ошибку, — нет; правка workflow — нет. Без
                этой границы агент честно выполнит задачу «сделай зелёным» самым дешёвым способом, и это будет не
                тот способ, которого от него ждали.
              </>
            ) : (
              <>
                For an agent, a red run is a good entry point — provided it receives material rather than the word
                “failed”: the name of the failing job, the log fragment with the error, the report from the
                artifacts, and a boundary of what may be fixed and what may not. Fixing the code — yes; fixing the
                test that caught the bug — no; editing the workflow — no. Without that boundary the agent will
                honestly complete the task “make it green” by the cheapest available route, and it will not be the
                route anyone had in mind.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Собрать этот материал можно не открывая браузер. У GitHub есть консольный клиент{' '}
                <Term id="gh-cli" lang={lang}>gh</Term>: он показывает состояние пул-реквеста и прогонов там же, где
                агент уже работает — в терминале, текстом. Ставится отдельно (<code>brew install gh</code> на macOS,{' '}
                <code>sudo apt install gh</code> на Debian или Ubuntu) и один раз просит войти командой <code>gh auth login</code>.
                Дальше вся разборка красного CI укладывается в несколько команд.
              </>
            ) : (
              <>
                That material can be collected without opening a browser. GitHub ships a command-line client,{' '}
                <Term id="gh-cli" lang={lang}>gh</Term>: it shows the state of a pull request and its runs right
                where the agent already works — in the terminal, as text. It is installed separately
                (<code>brew install gh</code> on macOS, <code>sudo apt install gh</code> on Debian or Ubuntu) and asks you to sign in once
                with <code>gh auth login</code>. After that, taking apart a red CI fits into a few commands.
              </>
            )}
          </p>
          <Terminal
            title={lang === 'ru' ? 'gh · разбор красного прогона' : 'gh · taking apart a red run'}
            lines={[
              { cmd: 'gh pr checks', comment: lang === 'ru' ? '# статус проверок текущей ветки' : '# check status for the current branch' },
              { out: 'lint      ✓  pass   38s', tone: 'ok' },
              { out: 'typecheck ✓  pass   1m12s', tone: 'ok' },
              { out: 'test      ✗  fail   2m41s', tone: 'bad' },
              { cmd: 'gh run view --log-failed', comment: lang === 'ru' ? '# только лог упавшей задачи' : '# only the failing job’s log' },
              { out: 'FAIL src/lib/date.test.ts › formats a date in UTC', tone: 'bad' },
              { out: '  expected "2026-07-29" / received "2026-07-30"', tone: 'dim' },
              { cmd: 'gh run download --name playwright-report', comment: lang === 'ru' ? '# артефакт на диск' : '# artifact to disk' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Три команды закрывают три вопроса: <code>gh pr checks</code> показывает, какие проверки прошли и какая упала,{' '}
                <code>gh run view --log-failed</code> отдаёт лог только упавшей задачи вместо десятков тысяч строк общего
                вывода, а <code>gh run download</code> кладёт артефакты рядом с кодом. Именно такой набор удобно передавать
                агенту: он получает имя упавшей задачи, конкретную строку ошибки и отчёт — то есть материал, а не
                слово «failed». Отдельно полезна <code>gh run watch</code>, которая ждёт окончания прогона и возвращает код
                выхода: на неё удобно вешать следующий шаг сценария.
              </>
            ) : (
              <>
                Three commands answer three questions: <code>gh pr checks</code> shows which checks passed and which failed,{' '}
                <code>gh run view --log-failed</code> returns the log of the failing job only instead of tens of thousands of
                lines, and <code>gh run download</code> puts the artifacts next to the code. That is exactly the set worth
                handing to an agent: it gets the failing job name, the specific error line, and the report — material
                rather than the word “failed”. <code>gh run watch</code> is useful as well: it waits for a run to finish and
                returns an exit code, which makes it a natural hook for the next step of a script.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Границы у консольного клиента ровно те же, что у аккаунта, под которым выполнен вход: <code>gh</code> — удобный
                способ спрашивать GitHub, а не способ получить больше прав. Команда <code>gh pr merge</code> упрётся в{' '}
                <Term id="branch-protection" lang={lang}>защиту ветки</Term> так же, как кнопка в интерфейсе, а
                запуск проверок для пул-реквеста из внешнего форка всё так же потребует подтверждения мейнтейнера.
                Поэтому агенту обычно оставляют читающие команды (<code>checks</code>, <code>view</code>, <code>download</code>, <code>watch</code>), а
                изменяющие — слияние, перезапуск прогонов, правку настроек — держат за человеком.
              </>
            ) : (
              <>
                The client’s boundaries are exactly those of the account it signed in with: <code>gh</code> is a convenient way
                to ask GitHub questions, not a way to gain permissions. A <code>gh pr merge</code> runs into{' '}
                <Term id="branch-protection" lang={lang}>branch protection</Term> the same way the button in the web
                interface does, and starting checks for a pull request from an outside fork still requires a
                maintainer’s approval. So an agent is usually left with the reading commands (<code>checks</code>, <code>view</code>,
                <code>download</code>, <code>watch</code>), while the changing ones — merging, re-running, editing settings — stay with a
                human.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                На этом собирается вся цепочка комнаты: описанный в репозитории сценарий выполняется на чистой
                машине, быстрые проверки дают обратную связь за минуты, права прогона ограничены, артефакты
                объясняют падение, а защита ветки превращает результат в условие слияния. Дальше начинается вопрос,
                который решается уже не в YAML: кто имеет право сливать изменение и как оно выкатывается на
                пользователей — этому посвящена следующая комната пути.
              </>
            ) : (
              <>
                This assembles the room’s full chain: a script described in the repository runs on a clean machine,
                fast checks return feedback in minutes, run permissions are bounded, artifacts explain the failure,
                and branch protection turns the result into a merge condition. Then begins a question that YAML no
                longer answers: who may merge a change and how it reaches users — the subject of the next room on
                this path.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
