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
                В этой комнате CLI рассматривается как рабочий контур, а не как набор случайных команд. Когда
                {' '}<Term id="agent" lang={lang}>агент</Term> работает через терминал, команда видит последовательность
                шагов, аргументы и результат каждого шага. Это дает повторяемость: другой инженер может пройти тот же
                путь, проверить вывод и быстро найти ошибку. Без такой трассы агентная разработка превращается в набор
                догадок, где трудно понять причину сбоя и трудно оценить риск релиза.
              </>
            ) : (
              <>
                In this room, CLI is treated as an operating loop, not a random command list. When an
                {' '}<Term id="agent" lang={lang}>agent</Term> works through terminal actions, the team can see the
                sequence of steps, arguments, and outcomes. That creates repeatability: another engineer can replay the
                same path, validate output, and localize failures quickly. Without that trace, agentic development turns
                into guesswork, where root causes and release risk are hard to evaluate.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ограничение модели на этапе <Term id="inference" lang={lang}>inference</Term> остается ключевым:
                она мыслит только в пределах <Term id="context-window" lang={lang}>контекстного окна</Term> и текущих
                {' '}<Term id="token" lang={lang}>токенов</Term>. Поэтому в CLI-цикле сначала фиксируют контекст и границы,
                затем делают изменение, и только после проверки принимают решение о выпуске. Такая дисциплина снижает
                риск широких правок и помогает держать инженерные решения в проверяемой форме.
              </>
            ) : (
              <>
                The core model limit during <Term id="inference" lang={lang}>inference</Term> still applies: reasoning
                is bounded by the <Term id="context-window" lang={lang}>context window</Term> and current
                {' '}<Term id="token" lang={lang}>tokens</Term>. That is why a CLI loop fixes context and boundaries first,
                then applies a change, and only after validation makes a release decision. This discipline reduces broad
                edits and keeps engineering decisions in a verifiable form.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Ментальная модель цикла' : 'Mental Model'}
            </p>
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`Discovery -> Plan -> Change -> Verify -> Release/Rollback`}
            </pre>
          </div>

          <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
            {ru ? 'Пример: один проход цикла в терминале' : 'Example: one loop pass in the terminal'}
          </p>
          <Terminal
            lines={[
              { cmd: 'rg "validateSession" src/', comment: ru ? '# discover: где живёт логика' : '# discover: where the logic lives' },
              { out: 'src/auth/service.ts:41:  function validateSession(token)' },
              { cmd: 'apply_patch service.ts', comment: ru ? '# change: минимальный патч' : '# change: a minimal patch' },
              { out: 'patched 1 file  +6 -2' },
              { cmd: 'npm run check-all', comment: ru ? '# verify: линт, типы, тесты' : '# verify: lint, types, tests' },
              { out: '✓ lint · tsc · 1706 passed', tone: 'ok' },
              { cmd: 'git commit -m "fix: session ttl"', comment: ru ? '# только после зелёного' : '# only after green' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Одно пояснение к первой строке примера: <Term id="ripgrep" lang={lang}>rg</Term> — это ripgrep,
                утилита поиска по коду. Она не входит в стандартную поставку системы и ставится отдельно;
                подробный разбор инструментов discovery и команды установки — в главе 2.
              </>
            ) : (
              <>
                One note on the first line of the example: <Term id="ripgrep" lang={lang}>rg</Term> is ripgrep, a
                code-search tool. It does not ship with the operating system and has to be installed separately;
                Chapter 2 covers the discovery tools and the install commands in detail.
              </>
            )}
          </p>

          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Ниже мы разбираем каждую фазу так, чтобы ею можно было пользоваться в реальной задаче на следующий рабочий день.'
              : 'Below, each phase is explained in a way that can be applied in a real task on the next workday.'}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Discovery-фаза: быстрый сбор контекста перед изменениями'
            : 'Chapter 2: Discovery Phase for Fast Context Before Changes'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Discovery отвечает на вопрос, что именно связано с задачей до первого патча. В этой фазе цель
                простая: собрать карту зависимостей, точки входа и ключевые контракты. Если пропустить этот шаг,
                агент часто исправляет симптом и не видит корень проблемы. Практическое правило: сначала поиск,
                потом чтение, потом план. Только после этого переход к записи в файлы.
              </>
            ) : (
              <>
                Discovery answers what is actually related to the task before the first patch. The goal is simple:
                build a dependency map, find entry points, and confirm key contracts. If this step is skipped, the
                agent often fixes a symptom and misses the root cause. Practical rule: search first, read second, plan
                third. Only then move to write actions.
              </>
            )}
          </p>

          <Terminal
            title="discovery · zsh"
            lines={[
              { cmd: 'rg "auth" src/' },
              { cmd: 'tree -L 2' },
              { cmd: 'cat src/auth/service.ts' },
              { cmd: 'git grep "validateSession"' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Разберём эти четыре команды, потому что две из них незнакомы по умолчанию.
                {' '}<Term id="ripgrep" lang={lang}>rg</Term> — это ripgrep, утилита рекурсивного поиска по коду:
                именно её здесь рекомендуют вместо <code>grep</code> для быстрого поиска. На больших репозиториях
                она заметно быстрее, по умолчанию уважает <code>.gitignore</code> и пропускает бинарные файлы,
                поэтому в выдаче меньше мусора. <code>tree</code> печатает дерево каталогов, а флаг{' '}
                <code>-L 2</code> ограничивает глубину двумя уровнями, чтобы увидеть структуру проекта без полного
                обхода. Оставшиеся две — <code>cat</code> (вывести файл) и <code>git grep</code> (поиск по
                отслеживаемым в Git файлам) — есть в системе изначально.
              </>
            ) : (
              <>
                These four commands are worth unpacking, because two of them are not available by default.
                {' '}<Term id="ripgrep" lang={lang}>rg</Term> is ripgrep, a recursive code search tool — the one
                recommended here instead of <code>grep</code> for fast search. On large repositories it is
                noticeably faster, respects <code>.gitignore</code> by default, and skips binary files, so the
                output carries less noise. <code>tree</code> prints a directory tree, and the <code>-L 2</code>{' '}
                flag caps the depth at two levels so you see the project structure without walking all of it. The
                other two — <code>cat</code> (print a file) and <code>git grep</code> (search Git-tracked files) —
                ship with the system.
              </>
            )}
          </p>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ни ripgrep, ни <code>tree</code> не входят в стандартную поставку macOS и большинства
                дистрибутивов Linux, поэтому их ставят отдельно. Если поставить нельзя (например, на чужом
                сервере или в закрытом контуре), тот же результат дадут <code>grep -r</code> и{' '}
                <code>git grep</code>: медленнее на больших репозиториях, но доступны всегда и никакой установки
                не требуют.
              </>
            ) : (
              <>
                Neither ripgrep nor <code>tree</code> ships with macOS or most Linux distributions, so they are
                installed separately. When you cannot install anything — on someone else&apos;s server or in a
                locked-down environment — <code>grep -r</code> and <code>git grep</code> produce the same result:
                slower on large repositories, but always available and requiring no setup.
              </>
            )}
          </p>

          <Terminal
            title="setup · zsh"
            lines={[
              { cmd: 'brew install ripgrep tree', comment: '# macOS (Homebrew)' },
              { cmd: 'sudo apt install ripgrep tree', comment: '# Debian / Ubuntu' },
              { cmd: 'rg --version', comment: ru ? '# проверить, что команда доступна' : '# check the command is available' },
              { out: ru ? 'ripgrep установлен' : 'ripgrep installed', tone: 'ok' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если в задаче есть внешние спецификации, discovery лучше связывать с
                {' '}<Term id="rag" lang={lang}>RAG</Term> и вызывать инструменты через
                {' '}<Term id="function-calling" lang={lang}>function calling</Term> интерфейсы в
                {' '}<Term id="sdk" lang={lang}>SDK</Term>-контуре. Это убирает хаотичный выбор команд и делает сбор
                контекста воспроизводимым. Команда может проверить, откуда взят факт и почему агент предложил именно
                этот путь изменения.
              </>
            ) : (
              <>
                If a task depends on external specs, discovery should be connected to
                {' '}<Term id="rag" lang={lang}>RAG</Term> and tool calls should pass through
                {' '}<Term id="function-calling" lang={lang}>function calling</Term> interfaces in an
                {' '}<Term id="sdk" lang={lang}>SDK</Term> flow. This removes chaotic command choices and makes context
                gathering reproducible. The team can verify where a fact came from and why the agent proposed a
                specific change path.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Change-фаза: минимальный patch и разделение ролей'
            : 'Chapter 3: Change Phase with Minimal Patches and Clear Roles'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На фазе Change ключевая цель состоит в минимальном достаточном патче. Чем больше файлов затронуто,
                тем сложнее ревью и тем выше риск побочного эффекта. Поэтому инженер заранее задает границы изменений:
                какие директории можно редактировать, какие файлы трогать нельзя, какие критерии приемки обязательны.
                Агент выполняет работу внутри этих рамок, а не по свободной интерпретации задачи.
              </>
            ) : (
              <>
                In Change phase, the core goal is a minimal sufficient patch. The more files are touched, the harder
                review becomes and the higher the side-effect risk. Teams define edit boundaries in advance: which
                directories are writable, which files are off-limits, and which acceptance criteria are mandatory. The
                agent executes inside those bounds, not through open-ended interpretation.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Кто что делает' : 'Who Does What'}
            </p>
            <ul className="list-disc pl-5 text-neutral-300 space-y-1">
              <li>{ru ? 'Агент: ищет код, предлагает patch, запускает команды в рамках контракта.' : 'Agent: searches code, proposes a patch, runs commands inside contract limits.'}</li>
              <li>{ru ? 'Инженер: задает ограничения, подтверждает риск-команды, принимает решение по релизу.' : 'Engineer: sets boundaries, approves risk commands, makes final release decisions.'}</li>
            </ul>
          </div>

          <Terminal
            title="change · zsh"
            lines={[
              { cmd: 'git diff' },
              { cmd: 'git add src/auth/service.ts' },
              { cmd: 'git commit -m "fix: narrow auth validation path"' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для рискованных операций нужен дополнительный gate: dry run, проверка воздействия и ручное
                подтверждение. В этой точке включаются <Term id="guardrails" lang={lang}> guardrails</Term>, чтобы
                ограничить аргументы и заблокировать команды с высоким потенциальным ущербом. Такая модель сохраняет
                скорость разработки и одновременно снижает вероятность аварийного diff в production.
              </>
            ) : (
              <>
                Risky operations need an extra gate: dry run, impact validation, and human approval. This is where
                {' '}<Term id="guardrails" lang={lang}>guardrails</Term> become critical, constraining arguments and
                blocking high-blast-radius commands. This model keeps delivery fast while reducing the chance of a
                production-breaking diff.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Verify-фаза: проверка качества в конкретных командах'
            : 'Chapter 4: Verify Phase with Concrete Quality Commands'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Verify отвечает на вопрос, безопасно ли выпускать изменения. Эта фаза не должна быть абстрактной:
                у каждой проверки есть конкретный инструмент и ожидаемый сигнал. Минимальный набор включает линт,
                типизацию, тесты и сборку. Для агентных сценариев дополнительно проверяют поведение через
                {' '}<Term id="evals" lang={lang}>evals</Term>, чтобы увидеть не только техническую корректность, но и
                качество итогового решения.
              </>
            ) : (
              <>
                Verify answers whether a change is safe to ship. This phase cannot stay abstract: every check needs a
                concrete tool and an expected signal. The minimum set includes lint, type checks, tests, and build. For
                agentic flows, teams add <Term id="evals" lang={lang}> evals</Term> to validate not only technical
                correctness but also output quality.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-2 pr-4 text-neutral-400 font-medium">{ru ? 'Проверка' : 'Check'}</th>
                  <th className="text-left py-2 text-neutral-400 font-medium">{ru ? 'Инструмент' : 'Tool'}</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Линт' : 'Lint'}</td>
                  <td className="py-2">ESLint</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Типы' : 'Types'}</td>
                  <td className="py-2">TypeScript</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Тесты' : 'Tests'}</td>
                  <td className="py-2">Jest / Vitest</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{ru ? 'Smoke-сценарий' : 'Smoke scenario'}</td>
                  <td className="py-2">Playwright / custom smoke script</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Terminal
            title="verify · zsh"
            lines={[
              { cmd: 'npm run lint' },
              { cmd: 'npx tsc --noEmit' },
              { cmd: 'npm run test' },
              { cmd: 'npm run build' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если задача использует внешние источники, в verify-фазе важно проверить защиту от
                {' '}<Term id="prompt-injection" lang={lang}>prompt injection</Term> и убедиться, что данные отделены от
                команд исполнения. Релизное решение принимают только после прохождения quality gates и проверки метрик
                на canary-срезе. Это переводит релиз из режима доверия в режим доказательств.
              </>
            ) : (
              <>
                If a task consumes external content, verify must include
                {' '}<Term id="prompt-injection" lang={lang}>prompt injection</Term> defenses and clear separation between
                data and executable instructions. Release decisions should happen only after quality gates pass and
                canary metrics remain stable. This shifts release from trust-based judgment to evidence-based control.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Операционный протокол: стоимость, rollback и рабочий чек-лист'
            : 'Chapter 5: Operational Protocol for Cost, Rollback, and Daily Checklist'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Когда CLI-цикл начинает работать регулярно, фокус смещается в операционную дисциплину: бюджет команд,
                лимит повторов, stop-критерии и заранее подготовленный rollback. Rollback здесь является штатной
                операцией локализации ущерба, а не аварийным признанием провала. Команда заранее определяет триггеры
                отката, порядок действий и ответственных. Это уменьшает время восстановления и сохраняет темп поставки.
              </>
            ) : (
              <>
                Once the CLI loop runs regularly, focus shifts to operational discipline: command budgets, retry caps,
                stop criteria, and a rehearsed rollback path. Rollback here is a standard containment operation, not a
                failure signal. Teams define rollback triggers, execution order, and owners in advance. This reduces
                recovery time and preserves delivery cadence.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Чек-лист CLI-цикла' : 'CLI Loop Checklist'}
            </p>
            <ul className="list-disc pl-5 text-neutral-300 space-y-1">
              <li>{ru ? 'Найдены все связанные файлы и зависимости.' : 'All related files and dependencies are mapped.'}</li>
              <li>{ru ? 'Патч минимален и соответствует границам.' : 'Patch is minimal and stays inside scope limits.'}</li>
              <li>{ru ? 'Пройдены линт, типы, тесты, сборка.' : 'Lint, types, tests, and build all passed.'}</li>
              <li>{ru ? 'Оценены риски и подготовлен rollback-план.' : 'Risks are assessed and rollback plan is ready.'}</li>
              <li>{ru ? 'Есть основание для релизного решения.' : 'There is evidence for a release decision.'}</li>
            </ul>
          </div>

          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Практическое задание' : 'Hands-on Exercise'}
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed mb-2">
              {ru ? 'Сценарий: исправить баг в auth-модуле минимальным патчем.' : 'Scenario: fix a bug in the auth module with a minimal patch.'}
            </p>
            <ol className="list-decimal pl-5 text-neutral-300 text-sm space-y-1">
              <li>{ru ? 'Соберите контекст через `rg` и чтение ключевых файлов.' : 'Gather context with `rg` and key file reads.'}</li>
              <li>{ru ? 'Сформулируйте план и границы изменений.' : 'Define plan and change boundaries.'}</li>
              <li>{ru ? 'Сделайте минимальный фикс и проверьте diff.' : 'Apply a minimal fix and inspect the diff.'}</li>
              <li>{ru ? 'Прогоните verify-команды и подготовьте rollback.' : 'Run verify commands and prepare rollback.'}</li>
            </ol>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Если этот алгоритм выполняется стабильно, agent coding становится управляемым инженерным процессом, а не серией непредсказуемых запусков.'
              : 'When this algorithm is executed consistently, agent coding becomes a controllable engineering process instead of a series of unpredictable runs.'}
          </p>
        </div>
      </section>
    </div>
  );
}
