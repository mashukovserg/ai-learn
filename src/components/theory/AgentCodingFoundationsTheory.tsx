"use client";

import React from 'react';
import Term from '@/components/Term';

export default function AgentCodingFoundationsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Что такое Agent Coding в инженерной практике' : 'Chapter 1: What Agent Coding Means in Engineering Practice'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В классическом режиме команда пишет один промпт и ждет удачного ответа. В режиме <Term id="agent" lang={lang}>agent coding</Term> подход другой: цель разбивается на шаги, на каждом шаге есть проверка, и только после проверки система двигается дальше. Такой процесс снижает долю случайных решений, которые трудно повторить. Мы управляем не только финальным ответом, но и тем, как система приходит к нему. Это делает разработку предсказуемой: можно объяснить результат, отследить причину ошибки и быстро повторить рабочий путь для следующей задачи.
              </>
            ) : (
              <>
                In a classic flow, a team writes one prompt and hopes the first answer is good enough. In <Term id="agent" lang={lang}>agent coding</Term>, the approach is different: the goal is decomposed into steps, each step has verification, and the system moves forward only after that verification passes. This reduces random outcomes that are hard to reproduce. We control not only the final answer but also the path to that answer. The result is predictable engineering: you can explain outcomes, trace root causes, and replay successful execution patterns for the next task.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Важная деталь: модель на этапе <Term id="inference" lang={lang}>inference</Term> работает в ограниченном контексте. Она видит только то, что помещается в <Term id="context-window" lang={lang}>контекстное окно</Term>, и принимает решения на основе входных <Term id="token" lang={lang}>токенов</Term>. Если команда не задает структуру цикла, модель может пропустить ограничение или неправильно понять приоритет. Поэтому инженерная дисциплина начинается с формулировки цели, ограничений и критериев приемки до первого вызова инструмента. Такой старт повышает скорость итераций и уменьшает число дорогих пересборок после неудачного релиза.
              </>
            ) : (
              <>
                A critical detail is that during <Term id="inference" lang={lang}>inference</Term> the model operates with constrained context. It sees only what fits in the <Term id="context-window" lang={lang}>context window</Term> and makes decisions from the incoming <Term id="token" lang={lang}>tokens</Term>. Without a structured loop, the model can miss constraints or misread priorities. That is why engineering discipline starts before the first tool call: define objective, boundaries, and acceptance criteria up front. This foundation improves iteration speed and reduces expensive rebuilds after failed releases.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 2: Контракт задачи и проверяемые критерии' : 'Chapter 2: Task Contract and Verifiable Criteria'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                У задачи для coding-агента должен быть контракт: что нужно сделать, какие ограничения нельзя нарушать, и как именно команда поймет, что работа завершена. Когда агент вызывает инструменты через <Term id="function-calling" lang={lang}>Function Calling</Term>, он использует схему параметров, заданную инженером. Если схема расплывчата, появляется шум: лишние действия, неверные аргументы, повторные попытки. Если схема строгая, агент выбирает меньший набор действий и реже делает опасные шаги. Контракт задачи всегда включает диапазон допустимых изменений и явные признаки того, что требуется эскалация человеку.
              </>
            ) : (
              <>
                A coding-agent task must have an explicit contract: what to deliver, which constraints are non-negotiable, and how the team will determine completion. When the agent invokes tools via <Term id="function-calling" lang={lang}>Function Calling</Term>, it follows parameter schemas defined by engineers. If schemas are vague, noise increases: extra actions, wrong arguments, repeated retries. If schemas are strict, the agent takes fewer unnecessary actions and is less likely to perform risky operations. A proper contract always defines allowed change scope and clear escalation triggers for human intervention.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Второй элемент контракта — способ проверки. Команда заранее определяет набор тестов и <Term id="evals" lang={lang}>evals</Term>, которые подтверждают качество по функциональности, стабильности и безопасности. В практической работе полезно фиксировать и технический контур: какой <Term id="sdk" lang={lang}>SDK</Term> используется, какие версии зависимостей разрешены, какие лимиты на вызовы инструментов допустимы. Тогда любой участник может воспроизвести результат, а аналитика инцидентов становится точной. Критерий «сделай лучше» без метрик не подходит для production-команд, потому что он не дает однозначного определения готовности.
              </>
            ) : (
              <>
                The second part of the contract is verification. The team predefines tests and <Term id="evals" lang={lang}>evals</Term> that confirm quality across functionality, stability, and safety. In production work, it also helps to pin execution context: which <Term id="sdk" lang={lang}>SDK</Term> is used, which dependency versions are allowed, and what tool-call limits apply. This makes outcomes reproducible and incident analysis precise. A vague request like “make it better” is not enough for production teams because it provides no unambiguous definition of done.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 3: Роли Planner, Executor, Validator и порядок цикла' : 'Chapter 3: Planner, Executor, Validator Roles and Loop Order'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                На практике удобен трехролевой контур. Planner декомпозирует цель в этапы и задает критерии приемки. Executor выполняет изменения: редактирует код, вызывает инструменты, обновляет конфигурацию в рамках контракта. Validator проверяет результат через тесты, статический анализ и контрольные сценарии. Такое разделение убирает типичную ошибку, когда одна и та же сущность одновременно планирует, исполняет и оценивает собственную работу. Если роли смешаны, растет риск ложной уверенности и необнаруженных дефектов.
              </>
            ) : (
              <>
                In practice, a three-role loop works well. Planner decomposes goals into stages and sets acceptance criteria. Executor applies changes: edits code, invokes tools, and updates configuration within contract boundaries. Validator checks outcomes with tests, static analysis, and control scenarios. This separation removes a common failure mode where one entity plans, executes, and judges its own work at the same time. When roles collapse, false confidence increases and defects are more likely to remain undetected.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Базовый порядок цикла обычно выглядит так: цель, план, действие, наблюдение и доработка. На шаге наблюдения команда фиксирует факты: что прошло, что упало, где нарушены ограничения. Для контекстных задач с внешними данными часто подключают <Term id="rag" lang={lang}>RAG</Term>, чтобы агент опирался на актуальные артефакты проекта, а не на случайные предположения из старого контекста. После наблюдения loop возвращается к плану и уточняет следующий шаг. Именно эта итеративность дает прирост качества без потери управляемости.
              </>
            ) : (
              <>
                The baseline loop order is usually goal, plan, act, observe, then refine. In the observe step, the team records facts: what passed, what failed, and which constraints were violated. For context-heavy tasks with external project data, teams often add <Term id="rag" lang={lang}>RAG</Term> so the agent grounds decisions in current artifacts rather than stale assumptions. After observation, the loop returns to planning and adjusts the next step. This iterative rhythm is what improves quality without sacrificing control.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 4: Риски и guardrails при агентной разработке' : 'Chapter 4: Risks and Guardrails in Agent Coding'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Главный риск в agent coding связан не только с ошибками логики, но и с ошибками контекста. Агент может получить вредоносную инструкцию через внешние данные, включая сценарии типа <Term id="prompt-injection" lang={lang}>prompt injection</Term>. Если pipeline доверяет любому входу, модель может выполнить действие, которое противоречит политике продукта. Поэтому в production-контуре всегда нужны барьеры до и после выполнения: фильтрация входа, проверка параметров вызова, ограничение прав и контроль финального ответа перед релизом.
              </>
            ) : (
              <>
                The main risk in agent coding is not only logic mistakes but also context mistakes. An agent can ingest hostile instructions through external data, including <Term id="prompt-injection" lang={lang}>prompt injection</Term> scenarios. If the pipeline trusts every input, the model may execute an action that violates product policy. That is why production loops need barriers both before and after execution: input filtering, argument validation, permission boundaries, and final-output checks before release.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Такие барьеры объединяют в слой <Term id="guardrails" lang={lang}>guardrails</Term>. Он задает допустимые операции, лимиты воздействия и обязательные точки подтверждения. Для командной работы важно формализовать, какие действия агент выполняет автономно, а какие требуют ручного approve. Тогда скорость остается высокой, а риск ущерба остается ограниченным. Guardrails эффективны только вместе с наблюдаемостью: логи шагов, метрики качества и явные причины отказа позволяют быстро понять, где процесс вышел за рамки и как вернуть его в норму.
              </>
            ) : (
              <>
                These barriers are grouped into a <Term id="guardrails" lang={lang}>guardrails</Term> layer. It defines allowed operations, impact limits, and mandatory confirmation points. For team workflows, it is critical to formalize which actions are autonomous and which require manual approval. That keeps delivery speed high while keeping risk bounded. Guardrails work only when paired with observability: step logs, quality metrics, and explicit rejection reasons let teams quickly identify where execution drifted and how to bring it back to a safe path.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 5: Релиз, стоимость, задержка и rollback-план' : 'Chapter 5: Release, Cost, Latency, and Rollback Plan'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Надежный релиз agent-coding фичи строится через этапность: сначала canary на малой доле трафика, затем расширение после прохождения quality-gate. На gate обычно проверяют тесты, ключевые метрики и целевые <Term id="evals" lang={lang}>evals</Term>. Если пороги не пройдены, релиз не продолжают. Такой подход не замедляет команду, потому что проблемы выявляются до полного воздействия на пользователей. Важно заранее определить, кто принимает решение на каждом этапе и какие сигналы считаются блокирующими.
              </>
            ) : (
              <>
                A reliable agent-coding release uses staged rollout: start with canary traffic and expand only after passing a quality gate. Gates typically check tests, key metrics, and target <Term id="evals" lang={lang}>evals</Term>. If thresholds fail, rollout does not continue. This does not slow teams down because issues are detected before full user impact. It is important to predefine who decides at each stage and which signals are considered release blockers.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Для контроля стоимости и latency первым шагом обычно вводят лимиты на количество вызовов инструментов и четкие stop-критерии цикла. Это дешевле и быстрее, чем немедленная смена модели или расширение контекста без границ. Параллельно команда должна держать готовый rollback-сценарий: как вернуть предыдущую стабильную версию за минуты и как восстановить сервис после отката. Rollback рассматривается как стандартная операция локализации инцидента, а не как признак провала. Такой подход защищает пользователей и сохраняет устойчивый темп разработки.
              </>
            ) : (
              <>
                For cost and latency control, the first practical lever is usually limiting tool-call counts and defining explicit stop criteria for the loop. This is cheaper and faster than immediately changing models or expanding context without limits. In parallel, teams need a ready rollback procedure: how to restore the previous stable version within minutes and recover service state after rollback. Rollback is treated as a standard incident-containment operation, not a failure signal. This protects users while keeping development cadence stable.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
