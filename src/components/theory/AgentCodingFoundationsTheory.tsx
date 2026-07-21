"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function AgentCodingFoundationsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Что такое Agent Coding в инженерной практике' : 'Chapter 1: What Agent Coding Means in Engineering Practice'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Agent Coding — это не &quot;умный промпт&quot;, а <strong>управляемый процесс выполнения задачи</strong>. В классическом режиме инженер пишет один запрос и надеется на удачный ответ. В режиме <Term id="agent" lang={lang}>agent coding</Term> подход иной: задача разбивается на шаги, каждый шаг проверяется, и система движется дальше только при успешной проверке. Это превращает LLM из &quot;генератора ответов&quot; в <strong>исполнителя workflow</strong>. Мы управляем не только финальным результатом, но и тем, как система к нему приходит. Результат — предсказуемая инженерия: можно объяснить любой исход, отследить причину ошибки и воспроизвести рабочий путь для следующей задачи.
              </>
            ) : (
              <>
                Agent Coding is not a &quot;smart prompt&quot; — it is a <strong>controlled task execution process</strong>. In a classic flow, an engineer writes one request and hopes for a good answer. In <Term id="agent" lang={lang}>agent coding</Term>, the approach is different: the task is broken into steps, each step is verified, and the system advances only after verification passes. This turns an LLM from an &quot;answer generator&quot; into a <strong>workflow executor</strong>. We control not just the final output, but the path to it. The result is predictable engineering: you can explain any outcome, trace root causes, and reproduce working execution patterns for the next task.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ключевое ограничение простое: на этапе <Term id="inference" lang={lang}>inference</Term> модель не видит весь проект. Она работает только с тем, что вошло в <Term id="context-window" lang={lang}>контекстное окно</Term>, и делает выводы по текущим <Term id="token" lang={lang}>токенам</Term>. Без явной структуры модель теряет ограничения, путает приоритеты и совершает лишние действия. Поэтому до первого вызова инструмента команда фиксирует три вещи: <strong>цель</strong>, <strong>границы изменений</strong> и <strong>проверяемые критерии приемки</strong>. Именно эта тройка отличает агентный подход от одноразового промпта.
              </>
            ) : (
              <>
                The core constraint is simple: during <Term id="inference" lang={lang}>inference</Term>, the model does not see the whole project. It works only with what fits in the <Term id="context-window" lang={lang}>context window</Term> and reasons from the current <Term id="token" lang={lang}>tokens</Term>. Without explicit structure, the model loses constraints, confuses priorities, and takes unnecessary actions. That is why teams lock in three items before the first tool call: <strong>goal</strong>, <strong>change boundaries</strong>, and <strong>verifiable acceptance criteria</strong>. This triad is what separates agent coding from a one-shot prompt.
              </>
            )}
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-2 pr-4 text-neutral-400 font-medium">{ru ? 'Prompt-подход' : 'Prompt approach'}</th>
                  <th className="text-left py-2 text-neutral-400 font-medium">{ru ? 'Agent-подход' : 'Agent approach'}</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Один запрос' : 'Single request'}</td>
                  <td className="py-2">{ru ? 'Цикл шагов' : 'Loop of steps'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Нет контроля процесса' : 'No process control'}</td>
                  <td className="py-2">{ru ? 'Контроль на каждом этапе' : 'Control at each stage'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Невоспроизводимость' : 'Not reproducible'}</td>
                  <td className="py-2">{ru ? 'Повторяемость' : 'Repeatable'}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{ru ? 'Нет дебага' : 'No debugging'}</td>
                  <td className="py-2">{ru ? 'Трассируемость' : 'Traceable'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Контракт задачи (Task Contract)' : 'Chapter 2: Task Contract'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Контракт — это <strong>формальное описание задачи для агента</strong>. Когда агент вызывает инструменты через <Term id="function-calling" lang={lang}>Function Calling</Term>, он использует схему параметров, заданную инженером. Если схема расплывчата, появляется шум: лишние действия, неверные аргументы, повторные попытки. Если схема строгая, агент выбирает меньший набор действий и реже делает опасные шаги. Контракт задачи всегда включает: что нужно сделать (<strong>goal</strong>), какие ограничения нельзя нарушать (<strong>constraints</strong>), какие инструменты разрешены (<strong>tools_allowed</strong>), когда эскалировать человеку (<strong>escalation</strong>), и как проверить завершение (<strong>acceptance_criteria</strong>).
              </>
            ) : (
              <>
                A contract is the <strong>formal task description for an agent</strong>. When the agent invokes tools via <Term id="function-calling" lang={lang}>Function Calling</Term>, it follows parameter schemas defined by engineers. If schemas are vague, noise increases: extra actions, wrong arguments, repeated retries. If schemas are strict, the agent takes fewer unnecessary actions and is less likely to perform risky operations. A task contract always includes: what to deliver (<strong>goal</strong>), which constraints are non-negotiable (<strong>constraints</strong>), which tools are allowed (<strong>tools_allowed</strong>), when to escalate to a human (<strong>escalation</strong>), and how to verify completion (<strong>acceptance_criteria</strong>).
              </>
            )}
          </p>

          {/* YAML contract example */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Пример контракта (YAML)' : 'Contract example (YAML)'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`task:
  goal: "Add endpoint /users"
  constraints:
    - "Do not modify existing API"
    - "Use current ORM"
  tools_allowed:
    - "code_editor"
    - "test_runner"
  escalation:
    - "If tests fail > 3 times"
  acceptance_criteria:
    - "Endpoint returns 200"
    - "Test coverage > 80%"`}
            </pre>
          </div>

          <Terminal
            title="agent · run"
            lines={[
              { cmd: 'agent run --contract task.yaml', prompt: '>' },
              { out: '● code_editor ▸ + endpoint /users' },
              { out: '● test_runner ▸ 8 passed · coverage 84%' },
              { out: '✓ acceptance: 200 OK · coverage > 80%', tone: 'ok' },
            ]}
          />

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй элемент контракта — способ проверки. Команда заранее определяет набор тестов и <Term id="evals" lang={lang}>evals</Term>, которые подтверждают качество по функциональности, стабильности и безопасности. Строгие контракты со schema-first подходом резко снижают количество ошибок агентов, потому что каждое действие проверяется против формальной спецификации, а не против расплывчатого &quot;сделай лучше&quot;.
              </>
            ) : (
              <>
                The second part of the contract is verification. The team predefines tests and <Term id="evals" lang={lang}>evals</Term> that confirm quality across functionality, stability, and safety. Strict contracts with a schema-first approach dramatically reduce agent errors because every action is validated against a formal specification, not a vague &quot;make it better.&quot;
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Архитектура ролей (Planner / Executor / Validator)' : 'Chapter 3: Role Architecture (Planner / Executor / Validator)'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Базовый production-паттерн строится на трех ролях. <strong>Planner</strong> декомпозирует цель в этапы, задает критерии приемки и определяет порядок действий. <strong>Executor</strong> выполняет изменения: редактирует код, вызывает инструменты, обновляет конфигурацию в рамках контракта. <strong>Validator</strong> проверяет результат через тесты, статический анализ и контрольные сценарии. Такое разделение убирает типичную ошибку, когда одна и та же сущность одновременно планирует, исполняет и оценивает собственную работу.
              </>
            ) : (
              <>
                The baseline production pattern is built on three roles. <strong>Planner</strong> decomposes goals into stages, sets acceptance criteria, and determines action order. <strong>Executor</strong> applies changes: edits code, invokes tools, and updates configuration within contract boundaries. <strong>Validator</strong> checks outcomes with tests, static analysis, and control scenarios. This separation removes a common failure mode where one entity plans, executes, and judges its own work at the same time.
              </>
            )}
          </p>

          {/* Role diagram */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <pre className="text-sm text-accent-300/90 leading-relaxed text-center">
{`Planner → Executor → Validator
   ↑                      ↓
   └──────────────────────┘`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Когда роли смешаны, растет риск <strong>self-bias</strong> — ложной уверенности агента в собственном результате. Planner не видит деталей исполнения и судит по критериям. Executor не определяет, что считать успехом. Validator не знает контекста планирования и проверяет чисто формально. Именно эта независимость позволяет ловить ошибки, которые одиночный агент пропустит. В мультиагентных системах каждая роль может быть отдельным вызовом модели с собственным системным промптом и набором инструментов.
              </>
            ) : (
              <>
                When roles collapse, <strong>self-bias</strong> risk grows — the agent becomes falsely confident in its own output. Planner does not see execution details and judges by criteria alone. Executor does not decide what counts as success. Validator has no planning context and checks purely formally. This independence is what catches errors a single agent would miss. In multi-agent systems, each role can be a separate model call with its own system prompt and tool set.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Цикл выполнения (Agent Loop)' : 'Chapter 4: The Agent Loop'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Агентный цикл — это не линейный процесс, а <strong>замкнутая система управления</strong> (closed-loop). На каждой итерации агент проходит пять состояний: <strong>plan</strong> (разбить задачу), <strong>execute</strong> (выполнить действие), <strong>observe</strong> (зафиксировать результат), <strong>validate</strong> (проверить против критериев) и <strong>decide</strong> (выбрать: продолжить, перепланировать или остановиться). Ключевое отличие от линейного pipeline — агент может <strong>корректировать план</strong> на основе наблюдений, а ошибки не ломают весь процесс.
              </>
            ) : (
              <>
                The agent loop is not a linear process — it is a <strong>closed-loop control system</strong>. On each iteration, the agent passes through five states: <strong>plan</strong> (break down the task), <strong>execute</strong> (perform the action), <strong>observe</strong> (record the result), <strong>validate</strong> (check against criteria), and <strong>decide</strong> (choose: continue, replan, or stop). The key difference from a linear pipeline is that the agent can <strong>adjust the plan</strong> based on observations, and errors do not break the entire process.
              </>
            )}
          </p>

          {/* Loop state machine */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Состояния цикла' : 'Loop states'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`loop:
  - plan       # decompose task into steps
  - execute    # call tools, apply changes
  - observe    # record what happened
  - validate   # check against criteria
  - decide:    # choose next action
      - continue   # proceed to next step
      - replan     # adjust the plan
      - stop       # task complete or blocked`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для контекстных задач с внешними данными на этапе observe часто подключают <Term id="rag" lang={lang}>RAG</Term>, чтобы агент опирался на актуальные артефакты проекта, а не на случайные предположения. На этапе decide система принимает решение на основе валидации: если тесты прошли — переходим к следующему шагу; если упали — возвращаемся к plan с новой информацией; если количество retry исчерпано — эскалируем человеку. Именно этот замкнутый цикл, а не количество промптов, делает агентную систему надежной.
              </>
            ) : (
              <>
                For context-heavy tasks with external data, the observe step often includes <Term id="rag" lang={lang}>RAG</Term> so the agent grounds decisions in current project artifacts rather than stale assumptions. At the decide step, the system acts on validation results: if tests pass, move to the next step; if they fail, return to plan with new information; if retry budget is exhausted, escalate to a human. It is this closed loop — not the number of prompts — that makes an agent system reliable.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Наблюдаемость и состояние (Observability)' : 'Chapter 5: Observability and State'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Без наблюдаемости агент превращается в &quot;черный ящик&quot;. На каждом шаге цикла система должна фиксировать структурированный результат: успех или неуспех, список ошибок, внесенные изменения и метрики (задержка, количество вызовов инструментов, потраченные токены). Этот лог — не просто отладочная информация. Он нужен для трех вещей: <strong>дебаг</strong> (почему упал конкретный шаг), <strong>аналитика</strong> (где система тратит больше всего ресурсов) и <strong>улучшение</strong> (какие паттерны ошибок повторяются и требуют изменения контракта).
              </>
            ) : (
              <>
                Without observability, an agent becomes a &quot;black box.&quot; At each loop step, the system must record a structured result: success or failure, error list, changes made, and metrics (latency, tool call count, tokens spent). This log is not just debug info. It serves three purposes: <strong>debugging</strong> (why a specific step failed), <strong>analytics</strong> (where the system spends the most resources), and <strong>improvement</strong> (which error patterns recur and require contract changes).
              </>
            )}
          </p>

          {/* Step result schema */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Структура записи шага' : 'Step result structure'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`step_result:
  step_id: 3
  success: false
  errors:
    - "test_api_users: 404 Not Found"
  changes:
    - "src/routes/users.ts: added"
  metrics:
    latency_ms: 2340
    tool_calls: 5
    tokens_used: 12800`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В production-системах эти записи отправляются в систему мониторинга, где можно строить дашборды по успешности шагов, среднему количеству retry и стоимости на задачу. Без структурированной наблюдаемости невозможно понять, почему агент &quot;застрял&quot;, тратит бюджет впустую или систематически выбирает неоптимальные инструменты. Наблюдаемость — не роскошь и не дополнение. Это <strong>обязательный слой</strong>, без которого любая оптимизация агентной системы превращается в угадывание.
              </>
            ) : (
              <>
                In production systems, these records are sent to a monitoring system where teams build dashboards for step success rates, average retry counts, and per-task cost. Without structured observability, it is impossible to understand why an agent is &quot;stuck,&quot; wasting budget, or systematically choosing suboptimal tools. Observability is not a luxury or an add-on. It is a <strong>required layer</strong> — without it, any optimization of an agent system becomes guesswork.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Ошибки и Recovery' : 'Chapter 6: Errors and Recovery'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В агентных системах ошибки — это <strong>нормальный режим работы</strong>, а не исключительная ситуация. Мультиагентные системы ломаются по умолчанию без стратегии recovery. Каждый агент должен уметь четыре вещи: <strong>retry</strong> (повторить шаг, до N раз), <strong>fallback</strong> (переключиться на альтернативный инструмент или стратегию), <strong>rollback</strong> (откатить внесенные изменения к стабильному состоянию) и <strong>escalate</strong> (передать задачу человеку, когда автоматическое восстановление исчерпано).
              </>
            ) : (
              <>
                In agent systems, errors are a <strong>normal operating mode</strong>, not an exceptional situation. Multi-agent systems break by default without a recovery strategy. Every agent must be able to do four things: <strong>retry</strong> (repeat a step, up to N times), <strong>fallback</strong> (switch to an alternative tool or strategy), <strong>rollback</strong> (revert changes to a stable state), and <strong>escalate</strong> (hand off to a human when automated recovery is exhausted).
              </>
            )}
          </p>

          {/* Recovery schema */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Стратегия recovery' : 'Recovery strategy'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`recovery:
  retry:
    max_attempts: 3
    backoff: exponential
  fallback:
    tool: "alternative_test_runner"
  rollback:
    method: "git reset --hard HEAD~1"
  escalate:
    trigger: "retry exhausted OR critical error"
    channel: "human-in-the-loop"`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Порядок recovery принципиален. Сначала retry — быстрое повторение того же действия (часто помогает при <Term id="transient-failure" lang={lang}>транзиентных ошибках</Term>). Затем fallback — попытка решить задачу другим путем. Если и это не помогло — rollback: возврат к последнему стабильному состоянию, чтобы не копить поломки. И только когда автоматика исчерпана — escalate: человек получает контекст проблемы и принимает решение. Без этой цепочки одна ошибка может каскадно разрушить весь pipeline. Агент без recovery — это бомба замедленного действия в production.
              </>
            ) : (
              <>
                The recovery order matters. First retry — a quick repeat of the same action (often helps with <Term id="transient-failure" lang={lang}>transient errors</Term>). Then fallback — try solving the task a different way. If that fails too — rollback: return to the last stable state to avoid accumulating breakage. Only when automation is exhausted — escalate: a human receives problem context and makes the decision. Without this chain, one error can cascade and destroy the entire pipeline. An agent without recovery is a ticking time bomb in production.
              </>
            )}
          </p>

          <h3 className="text-lg font-bold text-heading pt-2">
            {ru ? 'Связь с классической инженерией' : 'The Link to Classical Engineering'}
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Цепочка retry → fallback → rollback → escalate — не изобретение LLM-инженеров и не особенность AI. Это дистиллят многолетних практик Software Engineering, Distributed Systems, DevOps и SRE — дисциплин, которые десятилетиями строят системы, где сетевые вызовы обрываются, диски умирают, а деплои ломаются. Агент с точки зрения надежности — это просто еще одна распределенная система: он вызывает внешние инструменты по сети, держит состояние и обязан переживать отказ любой из своих зависимостей.
              </>
            ) : (
              <>
                The retry → fallback → rollback → escalate chain is not an invention of LLM engineers and not an AI-specific trick. It is distilled from decades of Software Engineering, Distributed Systems, DevOps, and SRE practice — disciplines that have spent years building systems where network calls drop, disks die, and deploys break. From a reliability standpoint, an agent is just another distributed system: it calls external tools over the network, holds state, and must survive the failure of any of its dependencies.
              </>
            )}
          </p>

          <div className="space-y-3">
            <div className="bg-deep border border-border-subtle rounded-lg p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-accent-300">retry</strong>{' — '}
                {ru
                  ? 'это самая простая стратегия восстановления: если действие не удалось, система не считает, что все сломалось, а просто пробует еще раз. Это помогает, когда проблема временная: сеть на секунду пропала, внешний сервис был перегружен или API ответил слишком поздно. Часто уже вторая или третья попытка оказывается успешной. Но повторять бесконечно нельзя. Поэтому между попытками делают небольшую паузу, которая с каждым разом увеличивается, а общее количество попыток заранее ограничивают (например, тремя). Иначе система может сама усугубить проблему: тысячи агентов начнут одновременно повторять запросы и еще сильнее перегрузят сервис, который и так пытается восстановиться. Именно поэтому в схеме выше указано max_attempts: 3, а не «повторять до тех пор, пока не получится».'
                  : 'the simplest recovery strategy: if an action fails, the system does not conclude that everything is broken — it just tries again. This helps when the problem is temporary: the network dropped for a second, an external service was overloaded, or an API answered too late. Often the second or third attempt already succeeds. But you cannot retry forever. So the system waits a little between attempts, makes the pause longer each time, and caps the total number of attempts in advance (say, at three). Otherwise the system can make the problem worse: thousands of agents start retrying at once and overload a service that is already struggling to recover. That is exactly why the schema above says max_attempts: 3, not «retry until it works».'}
              </p>
            </div>
            <div className="bg-deep border border-border-subtle rounded-lg p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-accent-300">fallback</strong>{' — '}
                {ru ? (
                  <>
                    {'это запасной план. Если действие не удалось даже после повторов, система не ломится дальше в ту же дверь, а пробует другой путь: другой инструмент, запасной сервис или упрощенный режим работы — например, показать сохраненную копию данных, пока живой поиск недоступен. В классической инженерии этот прием доведен до автоматизма паттерном '}
                    <Term id="circuit-breaker" lang={lang}>Circuit Breaker</Term>
                    {' («предохранитель»): после серии отказов сервис временно помечается как нерабочий, и запросы сразу идут в обход — никто не тратит время на заведомо мертвое соединение. Агент, который после трех неудач переключается на alternative_test_runner из схемы выше, делает ровно то же самое.'}
                  </>
                ) : (
                  <>
                    {'the backup plan. If an action failed even after retries, the system does not keep pushing on the same door — it tries a different path: another tool, a reserve service, or a simplified mode of operation, such as showing a saved copy of the data while live search is down. Classical engineering automates this move with the '}
                    <Term id="circuit-breaker" lang={lang}>Circuit Breaker</Term>
                    {' pattern: after a series of failures, the service is temporarily marked as broken and requests immediately route around it — nobody wastes time on a connection that is known to be dead. An agent that switches to the alternative_test_runner from the schema above after three failures is doing exactly the same thing.'}
                  </>
                )}
              </p>
            </div>
            <div className="bg-deep border border-border-subtle rounded-lg p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-accent-300">rollback</strong>{' — '}
                {ru
                  ? 'это возврат к последнему состоянию, которому можно доверять. Если ни повторы, ни запасной путь не помогли, худшее, что можно сделать, — продолжать работать поверх поломки: каждое следующее действие будет опираться на испорченное состояние и умножать ущерб. Поэтому система сначала откатывается назад. Так работают транзакции в базе данных (изменение либо применяется целиком, либо отменяется целиком), так разработчик возвращает код командой git reset или git revert, и так же при неудачном деплое трафик переводят обратно на предыдущую версию. Строка git reset --hard HEAD~1 в схеме — ровно это: сначала вернуться в чистое состояние, и только потом решать, что делать дальше.'
                  : 'returning to the last state you can trust. If neither retries nor the backup path helped, the worst thing to do is to keep working on top of the breakage: every next action would build on a corrupted state and multiply the damage. So the system first rolls back. This is how database transactions work (a change either applies fully or is undone fully), how a developer reverts code with git reset or git revert, and how a failed deploy is handled by routing traffic back to the previous version. The git reset --hard HEAD~1 line in the schema is exactly that: first return to a clean state, and only then decide what to do next.'}
              </p>
            </div>
            <div className="bg-deep border border-border-subtle rounded-lg p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-accent-300">escalate</strong>{' — '}
                {ru ? (
                  <>
                    {'это честное признание, что автоматика исчерпана, и передача задачи человеку. В классической эксплуатации это называется incident response: когда система не может починить себя сама, она будит дежурного инженера. Важно, как именно она это делает. Плохой сигнал — голое «что-то сломалось». Хороший — полный контекст: что агент пытался сделать, какие попытки предпринял, что именно упало и что показывают логи. Чем полнее переданный контекст, тем быстрее человек примет решение — поэтому качество эскалации напрямую определяет скорость восстановления. В агентных системах этот же принцип называют '}
                    <Term id="human-in-the-loop" lang={lang}>Human-in-the-Loop</Term>
                    {'.'}
                  </>
                ) : (
                  <>
                    {'an honest admission that automation is exhausted, and a handoff of the task to a human. In classical operations this is called incident response: when a system cannot fix itself, it wakes the on-call engineer. How it does so matters. A bad signal is a bare «something broke». A good one carries the full context: what the agent was trying to do, which attempts it made, what exactly failed, and what the logs show. The fuller the handed-over context, the faster the human can decide — which is why the quality of escalation directly determines recovery speed. In agent systems the same principle is called '}
                    <Term id="human-in-the-loop" lang={lang}>Human-in-the-Loop</Term>
                    {'.'}
                  </>
                )}
              </p>
            </div>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Порядок цепочки — это лестница стоимости восстановления. Retry стоит секунды и ничего не меняет в системе. Fallback дороже: другой путь, возможно, ухудшенный результат. Rollback жертвует уже сделанным прогрессом ради консистентности. Escalate — самый дорогой шаг: минуты или часы человеческого времени плюс переключение контекста. Пробуя дешевое раньше дорогого, система минимизирует ожидаемую цену восстановления. А жесткие лимиты на каждой ступени (max_attempts, триггеры эскалации) не дают отказу каскадировать: без них повторы и обходные пути сами становятся источником нагрузки, которая роняет соседние компоненты — классический сценарий каскадного сбоя из практики SRE.
              </>
            ) : (
              <>
                The order of the chain is a ladder of recovery cost. Retry costs seconds and changes nothing in the system. Fallback is pricier: a different path, possibly a degraded result. Rollback sacrifices progress already made for the sake of consistency. Escalate is the most expensive step: minutes or hours of human time plus a context switch. By trying cheap before expensive, the system minimizes the expected cost of recovery. And the hard limits at every rung (max_attempts, escalation triggers) keep a failure from cascading: without them, retries and detours themselves become a source of load that takes down neighboring components — the classic cascading-failure scenario from SRE practice.
              </>
            )}
          </p>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У этой логики есть устоявшиеся имена. <strong><Term id="graceful-degradation" lang={lang}>Graceful Degradation</Term></strong> — система при отказе теряет качество, а не падает целиком. <strong><Term id="fault-tolerance" lang={lang}>Fault Tolerance</Term></strong> — архитектура, которая продолжает работу при отказе компонентов. <strong>Resilience Engineering</strong> — проектирование исходя из того, что отказы неизбежны, и главное — скорость восстановления. <strong>Self-Healing Systems</strong> — системы, которые обнаруживают и чинят сбои без человека. Агентный recovery — это применение всех четырех идей к системе, в которой «компонентом» стала LLM.
              </>
            ) : (
              <>
                This logic has established names. <strong><Term id="graceful-degradation" lang={lang}>Graceful Degradation</Term></strong> — under failure, the system loses quality instead of collapsing entirely. <strong><Term id="fault-tolerance" lang={lang}>Fault Tolerance</Term></strong> — an architecture that keeps working when components fail. <strong>Resilience Engineering</strong> — designing on the assumption that failures are inevitable and recovery speed is what matters. <strong>Self-Healing Systems</strong> — systems that detect and repair faults without a human. Agent recovery is all four ideas applied to a system where the LLM became a «component».
              </>
            )}
          </p>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вывод: агентные системы не изобрели новую отказоустойчивость — они переиспользуют принципы, на которых стоят современные микросервисные архитектуры. Агент — это автономный программный компонент, и контракт у него тот же, что у хорошо спроектированного сервиса: самостоятельно обнаружить ошибку, локализовать ее, восстановиться — и только в крайнем случае передать задачу человеку, вместе с полным контекстом произошедшего.
              </>
            ) : (
              <>
                The takeaway: agent systems did not invent a new kind of fault tolerance — they reuse the principles modern microservice architectures stand on. An agent is an autonomous software component, and its contract is the same as a well-designed service: detect the error on its own, contain it, recover — and only as a last resort hand the task to a human, together with the full context of what happened.
              </>
            )}
          </p>

          <div className="bg-deep border border-border-subtle rounded-lg p-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Источники' : 'Sources'}
            </p>
            <ul className="text-sm text-neutral-400 space-y-1.5">
              <li>
                {'Microsoft Azure Architecture Center — '}
                <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/retry" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Retry pattern</a>
                {', '}
                <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Circuit Breaker</a>
                {', '}
                <a href="https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Transient fault handling</a>
              </li>
              <li>
                {'Google — '}
                <a href="https://sre.google/sre-book/table-of-contents/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Site Reliability Engineering</a>
                {ru ? ' (особенно глава про каскадные сбои)' : ' (see the cascading-failures chapter)'}
              </li>
              <li>
                {'Martin Fowler — '}
                <a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Circuit Breaker</a>
              </li>
              <li>
                {'AWS Well-Architected Framework — '}
                <a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Reliability Pillar</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 7 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 7: Guardrails, инструменты и антипаттерны' : 'Chapter 7: Guardrails, Tools, and Antipatterns'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Главный риск в agent coding связан не только с ошибками логики, но и с ошибками контекста. Агент может получить вредоносную инструкцию через внешние данные (<Term id="prompt-injection" lang={lang}>prompt injection</Term>). Слой <Term id="guardrails" lang={lang}>guardrails</Term> задает допустимые операции, лимиты воздействия и обязательные точки подтверждения. Для работы с инструментами действует правило: <strong>чем строже схема, тем лучше поведение агента</strong>. Строгая JSON-схема с обязательными полями и ограничением типов делает вызовы предсказуемыми и уменьшает количество &quot;мусорных&quot; tool calls.
              </>
            ) : (
              <>
                The main risk in agent coding is not only logic mistakes but also context mistakes. An agent can ingest hostile instructions through external data (<Term id="prompt-injection" lang={lang}>prompt injection</Term>). A <Term id="guardrails" lang={lang}>guardrails</Term> layer defines allowed operations, impact limits, and mandatory confirmation points. For tool usage, the rule is: <strong>the stricter the schema, the better the agent behavior</strong>. A strict JSON schema with required fields and type constraints makes tool calls predictable and reduces &quot;junk&quot; tool calls.
              </>
            )}
          </p>

          {/* Tool schema example */}
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Пример схемы инструмента' : 'Tool schema example'}
            </p>
            <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">
{`{
  "name": "run_tests",
  "parameters": {
    "type": "object",
    "properties": {
      "path": { "type": "string" },
      "timeout_ms": { "type": "integer", "maximum": 30000 }
    },
    "required": ["path"]
  }
}`}
            </pre>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Guardrails эффективны только вместе с наблюдаемостью: логи шагов, метрики качества и явные причины отказа позволяют быстро понять, где процесс вышел за рамки. При этом важно избегать пяти антипаттернов, которые делают агентную систему нестабильной: один агент делает всё (нет разделения ролей), нет явных критериев завершения, нет логирования шагов, нет ограничений на инструменты, нет стратегии recovery. Если убрать хотя бы один элемент — архитектуру, процесс или контроль — система теряет предсказуемость, и результаты перестают быть воспроизводимыми.
              </>
            ) : (
              <>
                Guardrails work only when paired with observability: step logs, quality metrics, and explicit rejection reasons let teams quickly find where execution drifted. It is also critical to avoid five antipatterns that make agent systems unstable: one agent does everything (no role separation), no explicit completion criteria, no step logging, no tool constraints, and no recovery strategy. Remove any single element — architecture, process, or control — and the system loses predictability, making outcomes non-reproducible.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
