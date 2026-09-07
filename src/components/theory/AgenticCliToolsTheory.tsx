"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function AgenticCliToolsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: CLI как контур управления агентной разработкой'
            : 'Chapter 1: CLI as the Control Plane of Agent Coding'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте, что вы заказали ремонт. Можно позвонить мастеру и услышать «всё сделал, работает» — и у вас
                останется только впечатление. А можно получить смету с перечнем работ: заменили смеситель, подтянули
                стояк, проверили давление. По первому разговору вы не проверите ничего. По второму — каждый пункт.
              </>
            ) : (
              <>
                Imagine you have hired someone to fix your plumbing. They can call and say “all done, it works” — and
                all you are left with is an impression. Or they can hand you an itemised invoice: replaced the tap,
                tightened the riser, checked the pressure. From the phone call you can verify nothing. From the invoice,
                every line.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Разговор с {' '}<Term id="agent" lang={lang}>агентом</Term> в окне чата — это первый вариант. Терминал —
                второй. В чате вы читаете рассказ модели о том, что она сделала. В терминале вы видите саму команду, её
                аргументы и её вывод. Разница не в удобстве, а в том, что во втором случае у вас есть чем проверить.
              </>
            ) : (
              <>
                A chat window with an {' '}<Term id="agent" lang={lang}>agent</Term> is the phone call. The terminal is
                the invoice. In the chat you read the model’s account of what it did. In the terminal you see the
                command itself, its arguments and its output. The difference is not convenience — it is that the second
                one gives you something to check.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                CLI — это Command Line Interface, интерфейс командной строки. В этой комнате мы смотрим на него не как
                на список команд, которые надо запомнить, а как на <strong>управляемый контур</strong>: исследование,
                изменение и проверка, где каждый шаг наблюдаем. Именно наблюдаемость даёт повторяемость — другой
                инженер пройдёт тот же путь, сверит вывод и быстро найдёт, где сломалось.
              </>
            ) : (
              <>
                CLI stands for Command Line Interface. In this room we look at it not as a list of commands to memorise
                but as a <strong>controlled loop</strong>: discovery, change and validation, with every step observable.
                That observability is what buys you repeatability — another engineer can walk the same path, compare the
                output and find where it broke.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Есть и техническая причина работать циклом. На этапе <Term id="inference" lang={lang}>inference</Term>
                {' '}модель рассуждает только внутри <Term id="context-window" lang={lang}>контекстного окна</Term> и тех
                {' '}<Term id="token" lang={lang}>токенов</Term>, что в него попали. Она не помнит вчерашнюю сессию и не
                видит файл, который вы ей не показали. Поэтому сначала вы фиксируете контекст и границы, потом делаете
                изменение, и только после проверки принимаете решение о выпуске.
              </>
            ) : (
              <>
                There is a technical reason for the loop, too. During <Term id="inference" lang={lang}>inference</Term>
                {' '}the model reasons only inside its <Term id="context-window" lang={lang}>context window</Term> and the
                {' '}<Term id="token" lang={lang}>tokens</Term> that made it in. It does not remember yesterday’s session
                and cannot see a file you never showed it. So you fix context and boundaries first, then make the
                change, and only after validation decide about release.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Пять шагов цикла' : 'The five steps of the loop'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{ru
  ? `Собрать контекст  ->  План и критерии  ->  Изменение  ->  Quality gates  ->  Релиз / откат`
  : `Gather context  ->  Plan and criteria  ->  Change  ->  Quality gates  ->  Release / rollback`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Так один проход цикла выглядит в терминале. Каждая строка здесь — либо ваша команда, либо ответ системы; ничего из этого не пересказано словами.'
              : 'Here is one pass of that loop in a terminal. Every line is either your command or the system’s answer — none of it is retold in prose.'}
          </p>
          <Terminal
            lines={[
              { cmd: 'rg "validateSession" src/', comment: ru ? '# шаг 1: где живёт логика' : '# step 1: where the logic lives' },
              { out: 'src/auth/service.ts:41:  function validateSession(token)' },
              { cmd: 'apply_patch service.ts', comment: ru ? '# шаг 3: минимальный патч' : '# step 3: a minimal patch' },
              { out: 'patched 1 file  +6 -2' },
              { cmd: 'npm run check-all', comment: ru ? '# шаг 4: линт, типы, тесты' : '# step 4: lint, types, tests' },
              { out: '✓ lint · tsc · 1706 passed', tone: 'ok' },
              { cmd: 'git commit -m "fix: session ttl"', comment: ru ? '# шаг 5: только после зелёного' : '# step 5: only after green' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Одно пояснение к первой строке: <Term id="ripgrep" lang={lang}>rg</Term> — это ripgrep, утилита поиска
                по коду. Она не входит в стандартную поставку системы, её ставят отдельно; инструменты сбора контекста
                и команды установки разберём в главе 2.
              </>
            ) : (
              <>
                One note on the first line: <Term id="ripgrep" lang={lang}>rg</Term> is ripgrep, a code-search tool. It
                does not ship with the operating system and has to be installed separately; Chapter 2 covers the
                discovery tools and their install commands.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Discovery — собрать контекст до первой правки'
            : 'Chapter 2: Discovery — Gathering Context Before the First Edit'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Прежде чем сносить стену в квартире, выясняют, не несущая ли она. Стоимость вопроса несимметрична:
                проверка занимает полчаса, ошибка — обрушение. В коде та же асимметрия, только менее заметная — сломанное
                не падает сразу, а всплывает через неделю у другой команды.
              </>
            ) : (
              <>
                Before knocking down a wall, you find out whether it is load-bearing. The cost is asymmetric: the check
                takes half an hour, the mistake takes the ceiling. Code has the same asymmetry, just less visible —
                what you break does not fall immediately, it surfaces a week later in someone else’s team.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Фаза discovery отвечает на один вопрос: что вообще связано с этой задачей. Вы собираете карту
                зависимостей, точки входа и ключевые контракты — до первого патча, а не после. Пропустите этот шаг, и
                агент починит симптом, не увидев причины: правило простое — <strong>сначала читать и анализировать,
                потом менять</strong>.
              </>
            ) : (
              <>
                Discovery answers one question: what is actually connected to this task. You build a map of
                dependencies, entry points and the key contracts — before the first patch, not after. Skip this step and
                the agent fixes the symptom without seeing the cause. The rule is simple: <strong>read and analyse
                first, then modify</strong>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'На практике вся фаза укладывается в четыре команды. Две из них знакомы, две — скорее всего, нет.'
              : 'In practice the whole phase fits into four commands. Two of them you will know; two you probably will not.'}
          </p>
          <Terminal
            lines={[
              { cmd: 'rg "createUser" src/', comment: ru ? '# все упоминания в коде' : '# every mention in the code' },
              { out: 'src/api/users.ts:23  export function createUser(...)' },
              { out: 'src/jobs/import.ts:88   createUser(row)' },
              { cmd: 'tree -L 2 src/', comment: ru ? '# структура на два уровня вглубь' : '# structure two levels deep' },
              { out: 'src/\n├── api/\n├── jobs/\n└── auth/', tone: 'dir' },
              { cmd: 'git grep -n "createUser" -- "*.test.ts"', comment: ru ? '# только по файлам под Git' : '# only in Git-tracked files' },
              { out: 'src/api/users.test.ts:12  it("createUser rejects duplicates")' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Разберём их по очереди. <Term id="ripgrep" lang={lang}>rg</Term> — сокращение от ripgrep, рекурсивный
                поиск по коду; именно его здесь рекомендуют вместо привычного grep. На большом репозитории он заметно
                быстрее, по умолчанию уважает <code className="text-accent-300">.gitignore</code> и пропускает бинарные
                файлы, поэтому в выдаче меньше мусора. Команда <code className="text-accent-300">tree</code> печатает
                дерево каталогов, а флаг <code className="text-accent-300">-L 2</code> ограничивает глубину двумя
                уровнями — структуру видно, а тонуть в ней не приходится. Оставшиеся две есть в системе изначально:
                {' '}<code className="text-accent-300">cat</code> выводит файл целиком, а
                {' '}<code className="text-accent-300">git grep</code> ищет только по файлам, которые Git отслеживает.
              </>
            ) : (
              <>
                One at a time. <Term id="ripgrep" lang={lang}>rg</Term> is short for ripgrep, a recursive code search —
                the recommended replacement for the familiar grep here. On a large repository it is noticeably faster,
                it respects <code className="text-accent-300">.gitignore</code> by default and skips binary files, so
                there is less noise in the output. <code className="text-accent-300">tree</code> prints the directory
                tree, and the <code className="text-accent-300">-L 2</code> flag caps the depth at two levels — enough
                to see the structure without drowning in it. The other two ship with the system:
                {' '}<code className="text-accent-300">cat</code> prints a whole file, and
                {' '}<code className="text-accent-300">git grep</code> searches only files Git tracks.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ни ripgrep, ни tree не входят в стандартную поставку macOS и большинства дистрибутивов Linux — их ставят
                отдельно. А если поставить нельзя, например на чужом сервере или в закрытом контуре, тот же результат
                дадут <code className="text-accent-300">grep -r</code> и <code className="text-accent-300">git grep</code>:
                медленнее на больших репозиториях, зато доступны всегда.
              </>
            ) : (
              <>
                Neither ripgrep nor tree ships with macOS or most Linux distributions — you install them separately. And
                when you cannot install anything, on someone else’s server or inside a locked-down environment,
                {' '}<code className="text-accent-300">grep -r</code> and <code className="text-accent-300">git grep</code>
                {' '}give you the same result: slower on large repositories, but always there.
              </>
            )}
          </p>
          <Terminal
            title="install"
            lines={[
              { cmd: 'brew install ripgrep tree', comment: '# macOS' },
              { cmd: 'sudo apt install ripgrep tree', comment: '# Debian / Ubuntu' },
              { out: ru ? '# нет прав на установку? — используйте:' : '# no permission to install? — use:', tone: 'dim' },
              { cmd: 'grep -rn "createUser" src/' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Когда в задаче есть внешние спецификации, discovery стоит связать с
                {' '}<Term id="rag" lang={lang}>RAG</Term> и вызывать инструменты через
                {' '}<Term id="function-calling" lang={lang}>function calling</Term> в контуре
                {' '}<Term id="sdk" lang={lang}>SDK</Term>. Это убирает хаотичный подбор команд: сбор контекста
                становится воспроизводимым, и потом видно, откуда взят факт и почему агент предложил именно такой путь.
              </>
            ) : (
              <>
                When the task involves external specifications, tie discovery to
                {' '}<Term id="rag" lang={lang}>RAG</Term> and call tools through
                {' '}<Term id="function-calling" lang={lang}>function calling</Term> inside an
                {' '}<Term id="sdk" lang={lang}>SDK</Term> loop. That removes the ad-hoc guessing of commands: context
                gathering becomes reproducible, and afterwards you can see where a fact came from and why the agent
                proposed this particular path.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Change — минимальный патч и разделение ролей'
            : 'Chapter 3: Change — Minimal Patches and Who Decides What'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте, что вам вернули рукопись, где редактор поправил одно предложение. Вы посмотрите на него за
                минуту. А теперь — рукопись, где переписана каждая страница. Формально работы больше, но проверить её вы
                уже не можете: чтобы понять, что изменилось по делу, придётся перечитать всё заново.
              </>
            ) : (
              <>
                Imagine getting back a manuscript where the editor changed one sentence. You will look at it in a
                minute. Now imagine one where every page has been rewritten. Formally that is more work, but you can no
                longer check it: to find what actually changed, you would have to read the whole thing again.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Патч работает так же. Цель фазы change — <strong>минимальный достаточный патч</strong>. Чем больше
                файлов затронуто, тем дороже ревью и тем выше шанс побочного эффекта, о котором никто не подумал. Второе
                правило рядом с первым: <strong>ограничивать область изменений и документировать шаги</strong> — тогда
                diff читается, а не расшифровывается.
              </>
            ) : (
              <>
                A patch behaves the same way. The goal of the change phase is a <strong>minimal sufficient patch</strong>.
                The more files it touches, the more expensive the review and the higher the chance of a side effect
                nobody considered. The second rule sits next to the first: <strong>limit the scope of the edit and
                document the steps</strong> — then a diff is read rather than decoded.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Границы задаёте вы, и задаёте их <strong>до того</strong>, как агент начал работу. Это отдельный шаг, и
                он предшествует сбору контекста: сначала вы получаете и фиксируете критерии приёмки и ограничения —
                какие каталоги можно править, какие файлы трогать нельзя, что считается готовым, — и только потом агент
                идёт искать код. Внутри этих рамок он работает сам; за рамками не работает вообще.
              </>
            ) : (
              <>
                You set the boundaries, and you set them <strong>before</strong> the agent starts. That is its own step,
                and it comes before context gathering: first you collect and write down the acceptance criteria and
                constraints — which directories may be edited, which files are off limits, what counts as done — and
                only then does the agent go looking through the code. Inside those limits it works on its own; outside
                them it does not work at all.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
              {ru ? 'Кто что делает' : 'Who does what'}
            </p>
            <ul className="space-y-2 text-neutral-300 text-sm leading-relaxed">
              <li>
                <span className="text-accent-400 font-medium">{ru ? 'Агент: ' : 'Agent: '}</span>
                {ru
                  ? 'ищет код, предлагает патч, запускает команды в рамках контракта.'
                  : 'searches the code, proposes a patch, runs commands inside the contract limits.'}
              </li>
              <li>
                <span className="text-accent-400 font-medium">{ru ? 'Инженер: ' : 'Engineer: '}</span>
                {ru
                  ? 'задаёт границы, подтверждает рискованные команды, принимает решение о релизе.'
                  : 'sets the boundaries, approves risky commands, makes the release decision.'}
              </li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для рискованных операций одного контракта мало — нужен отдельный шлюз. Он состоит из трёх шагов:
                {' '}<strong>dry run</strong> (холостой прогон, который показывает, что команда сделала бы, ничего не
                меняя), проверка воздействия и ручное подтверждение. На этом же рубеже включаются
                {' '}<Term id="guardrails" lang={lang}>guardrails</Term>, ограничивающие аргументы и блокирующие команды с
                высоким потенциальным ущербом.
              </>
            ) : (
              <>
                For risky operations the contract alone is not enough — you need a separate gate. It has three steps: a
                {' '}<strong>dry run</strong> (a no-op pass that shows what the command would do without changing
                anything), an impact check, and manual confirmation. This is also where
                {' '}<Term id="guardrails" lang={lang}>guardrails</Term> apply, constraining arguments and blocking
                commands with high potential damage.
              </>
            )}
          </p>
          <Terminal
            lines={[
              { cmd: 'rm -rf cache/legacy/', comment: ru ? '# ← так нельзя: сразу и необратимо' : '# ← not like this: immediate and irreversible' },
              { out: ru ? 'заблокировано guardrail: деструктивная команда' : 'blocked by guardrail: destructive command', tone: 'bad' },
              { cmd: 'rm -rf --dry-run cache/legacy/', comment: ru ? '# сначала холостой прогон' : '# dry run first' },
              { out: 'would remove 412 files (1.2 GB)' },
              { cmd: 'rg -l "cache/legacy" src/', comment: ru ? '# кто на это ссылается?' : '# who references this?' },
              { out: 'src/jobs/report.ts', tone: 'warn' },
              { out: ru ? '# найдена зависимость — удаление отменено' : '# dependency found — deletion cancelled', tone: 'dim' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Обратите внимание на порядок в примере: сначала выясняется, кто зависит от файлов, и только потом принимается решение. Если бы первая команда прошла, зависимость нашлась бы уже по упавшему отчёту.'
              : 'Note the order in the example: first you find out what depends on the files, and only then decide. Had the first command gone through, the dependency would have been discovered by way of a broken report.'}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Verify — проверка в конкретных командах'
            : 'Chapter 4: Verify — Validation in Concrete Commands'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Перед дальней поездкой машину не осматривают «в целом». Есть список: тормоза, резина, масло, свет. Каждый
                пункт проверяется отдельным действием и даёт однозначный ответ. Именно поэтому техосмотр работает, а
                ощущение «вроде едет» — нет.
              </>
            ) : (
              <>
                Before a long drive nobody inspects a car “in general”. There is a list: brakes, tyres, oil, lights.
                Each item is checked by a separate action and gives an unambiguous answer. That is why an inspection
                works and “it seems to drive fine” does not.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Фаза verify отвечает на вопрос, безопасно ли выпускать изменение, и она не должна быть абстрактной. Формулировка «я всё посмотрел» проверкой не является: у
                каждой проверки есть конкретный инструмент, конкретная команда и ожидаемый сигнал на выходе. Минимальный набор — четыре пункта:
                {' '}<strong>линт, типы, тесты, сборка</strong>. Отсюда и третье правило CLI-цикла:
                {' '}<strong>покрывать изменения проверкой</strong> — <code className="text-accent-300">eslint</code>,
                {' '}<code className="text-accent-300">tsc</code> и тестами.
              </>
            ) : (
              <>
                The verify phase answers whether the change is safe to ship, and it must not be abstract. Every check
                has a concrete tool and an expected signal. The minimum set is four items: <strong>lint, types, tests,
                build</strong>. Hence the third rule of the CLI loop: <strong>cover the change with validation</strong> —
                {' '}<code className="text-accent-300">eslint</code>, <code className="text-accent-300">tsc</code> and
                tests.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4 overflow-x-auto">
            <table className="w-full text-sm text-neutral-300">
              <thead>
                <tr className="text-neutral-500 text-xs uppercase tracking-wider">
                  <th className="text-left pb-2 pr-6 font-medium">{ru ? 'Проверка' : 'Check'}</th>
                  <th className="text-left pb-2 font-medium">{ru ? 'Инструмент' : 'Tool'}</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr><td className="pr-6 py-1">{ru ? 'Линт' : 'Lint'}</td><td className="py-1">ESLint</td></tr>
                <tr><td className="pr-6 py-1">{ru ? 'Типы' : 'Types'}</td><td className="py-1">TypeScript</td></tr>
                <tr><td className="pr-6 py-1">{ru ? 'Тесты' : 'Tests'}</td><td className="py-1">Jest / Vitest</td></tr>
                <tr><td className="pr-6 py-1">{ru ? 'Smoke-сценарий' : 'Smoke scenario'}</td><td className="py-1">Playwright / custom smoke script</td></tr>
              </tbody>
            </table>
          </div>

          <Terminal
            lines={[
              { cmd: 'npx eslint src/', comment: ru ? '# стиль и очевидные ошибки' : '# style and obvious mistakes' },
              { out: '✓ 0 problems', tone: 'ok' },
              { cmd: 'npx tsc --noEmit', comment: ru ? '# типы, без сборки артефактов' : '# types only, no build output' },
              { out: '✓ no errors', tone: 'ok' },
              { cmd: 'npm test', comment: ru ? '# поведение' : '# behaviour' },
              { out: '2 failed | 536 passed', tone: 'bad' },
              { out: ru ? '# красное — релизного решения нет' : '# red — there is no release decision', tone: 'dim' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Порядок в этом примере не случайный. Проверки запускают от дешёвых к дорогим: линт отрабатывает за
                секунды, типы — за десятки секунд, тесты — за минуты, а полный прогон сборки и сценариев может занять
                четверть часа. Если падает линт, нет смысла ждать тесты: вы уже знаете, что до релизного решения дело не
                дойдёт. Такой порядок экономит не столько машинное время, сколько ваше внимание — вы получаете ответ
                «нет» как можно раньше и возвращаетесь к правке, пока задача ещё в голове.
              </>
            ) : (
              <>
                The order in that example is not accidental. Checks run cheapest first: lint finishes in seconds, types
                in tens of seconds, tests in minutes, and a full build with scenarios can take a quarter of an hour. If
                lint fails there is no point waiting for the tests — you already know the release decision will not be
                reached. This order saves less machine time than it saves your attention: you get the answer “no” as
                early as possible and go back to the edit while the task is still in your head.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для агентных сценариев к четырём пунктам добавляется пятый — <Term id="evals" lang={lang}>evals</Term>,
                проверка поведения. Она показывает не техническую корректность, а качество итогового решения: код может
                компилироваться и проходить тесты, оставаясь при этом неверным ответом на задачу.
              </>
            ) : (
              <>
                For agentic work a fifth item joins the four — <Term id="evals" lang={lang}>evals</Term>, a check on
                behaviour. It shows not technical correctness but the quality of the resulting solution: code can
                compile and pass its tests while still being the wrong answer to the task.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если задача работает с внешними источниками, на этой же фазе проверяют защиту от
                {' '}<Term id="prompt-injection" lang={lang}>prompt injection</Term> и убеждаются, что данные отделены от
                исполняемых команд. Само решение о релизе принимают после прохождения
                {' '}<Term id="quality-gate" lang={lang}>quality gates</Term> и проверки метрик на canary — выкатке на
                малую долю трафика. Это переводит релиз из режима доверия в режим доказательств.
              </>
            ) : (
              <>
                If the task touches external sources, this same phase checks the defence against
                {' '}<Term id="prompt-injection" lang={lang}>prompt injection</Term> and confirms that data is separated
                from executable commands. The release decision itself comes after the
                {' '}<Term id="quality-gate" lang={lang}>quality gates</Term> pass and the metrics hold on a canary — a
                rollout to a small share of traffic. That moves release from a matter of trust to a matter of evidence.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Операционный протокол — стоимость, откат и чек-лист'
            : 'Chapter 5: The Operating Protocol — Cost, Rollback, Checklist'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Счётчик в такси не спрашивает, далеко ли вам ехать. Он просто крутится, пока вы не скажете «здесь».
                Агент в цикле устроен так же: если не задать, когда останавливаться, он будет пробовать ещё раз, и ещё
                раз, и каждая попытка стоит денег и времени.
              </>
            ) : (
              <>
                A taxi meter does not ask how far you are going. It simply runs until you say “here”. An agent in a loop
                behaves the same way: unless you say when to stop, it will try again, and again, and every attempt costs
                money and time.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Поэтому, когда цикл начинает работать регулярно, фокус смещается с команд на операционную дисциплину.
                Она держится на четырёх вещах: бюджет команд, лимит повторов, <strong>stop-критерии</strong> и заранее
                подготовленный откат. Первые три отвечают на вопрос «когда прекратить», четвёртая — «что делать, если
                уже выпустили».
              </>
            ) : (
              <>
                So once the loop runs regularly, the focus shifts from commands to operating discipline. It rests on
                four things: a command budget, a retry limit, <strong>stop criteria</strong>, and a rollback prepared in
                advance. The first three answer “when do we stop”; the fourth answers “what if it already shipped”.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Заметьте, чего в этом списке нет. Разогнать агента на большее число шагов, чтобы он «доделал», —
                типичная и дорогая ошибка: без критериев остановки лишние попытки не приближают результат, а только
                увеличивают счёт. Правильный ответ обратный — задать stop-критерии и лимит на количество команд в цикле.
              </>
            ) : (
              <>
                Notice what is not on that list. Letting the agent run for more steps so it can “finish” is a common and
                expensive mistake: without stop criteria the extra attempts do not bring the result closer, they only
                grow the bill. The correct move is the opposite — set stop criteria and a command budget per loop.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Откат здесь — штатная операция локализации ущерба, а не признание провала. Команда заранее определяет
                триггеры отката, порядок действий и ответственных, и держит его в понятном бюджете времени — например,
                не дольше десяти минут. Это сокращает время восстановления и сохраняет темп поставки.
              </>
            ) : (
              <>
                Rollback here is a routine damage-limiting operation, not an admission of failure. The team defines its
                triggers, its order of actions and its owners in advance, and keeps it inside a known time budget — ten
                minutes, say. That shortens recovery and preserves delivery pace.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
              {ru ? 'Чек-лист одного прохода' : 'Checklist for one pass'}
            </p>
            <ul className="space-y-2 text-neutral-300 text-sm leading-relaxed list-disc list-inside">
              <li>{ru ? 'Критерии приёмки и границы получены до начала работы.' : 'Acceptance criteria and boundaries collected before starting.'}</li>
              <li>{ru ? 'Найдены все связанные файлы и зависимости.' : 'All related files and dependencies are mapped.'}</li>
              <li>{ru ? 'Патч минимален и не выходит за границы.' : 'The patch is minimal and stays inside scope.'}</li>
              <li>{ru ? 'Пройдены линт, типы, тесты, сборка.' : 'Lint, types, tests and build all passed.'}</li>
              <li>{ru ? 'Риски оценены, план отката готов.' : 'Risks assessed, rollback plan ready.'}</li>
              <li>{ru ? 'Есть основание для решения о релизе.' : 'There is evidence for the release decision.'}</li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Попробуйте пройти цикл сами на небольшой задаче: исправить баг в auth-модуле минимальным патчем. Соберите контекст через rg и чтение ключевых файлов, сформулируйте план и границы, сделайте минимальный фикс и посмотрите diff, прогоните verify-команды и подготовьте откат. Когда эти пять шагов выполняются стабильно, agent coding перестаёт быть серией непредсказуемых запусков и становится управляемым инженерным процессом.'
              : 'Try one pass yourself on a small task: fix a bug in the auth module with a minimal patch. Gather context with rg and a few key file reads, define the plan and the boundaries, apply the minimal fix and inspect the diff, run the verify commands and prepare the rollback. Once those five steps run reliably, agent coding stops being a series of unpredictable runs and becomes a manageable engineering process.'}
          </p>
        </div>
      </section>
    </div>
  );
}
