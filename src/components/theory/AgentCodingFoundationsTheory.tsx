"use client";

import React from 'react';
import Term from '@/components/Term';

export default function AgentCodingFoundationsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
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
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed text-center">
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
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
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
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
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
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
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
                Порядок recovery принципиален. Сначала retry — быстрое повторение того же действия (часто помогает при транзиентных ошибках). Затем fallback — попытка решить задачу другим путем. Если и это не помогло — rollback: возврат к последнему стабильному состоянию, чтобы не копить поломки. И только когда автоматика исчерпана — escalate: человек получает контекст проблемы и принимает решение. Без этой цепочки одна ошибка может каскадно разрушить весь pipeline. Агент без recovery — это бомба замедленного действия в production.
              </>
            ) : (
              <>
                The recovery order matters. First retry — a quick repeat of the same action (often helps with transient errors). Then fallback — try solving the task a different way. If that fails too — rollback: return to the last stable state to avoid accumulating breakage. Only when automation is exhausted — escalate: a human receives problem context and makes the decision. Without this chain, one error can cascade and destroy the entire pipeline. An agent without recovery is a ticking time bomb in production.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 7 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
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
            <pre className="text-sm text-emerald-300/90 leading-relaxed overflow-x-auto whitespace-pre">
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
