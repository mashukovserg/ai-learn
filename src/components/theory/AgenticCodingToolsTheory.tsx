"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function AgenticCodingToolsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 1: Зачем агентной разработке нужен инструментальный слой'
            : 'Chapter 1: Why Agentic Coding Needs a Tooling Layer'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В обычном чате <Term id="agent" lang={lang}>агент</Term> может объяснить идею, но не гарантирует, что
                изменение действительно внесено в код и проверено в среде проекта. В инженерной разработке нужна
                цепочка действий, где модель не только рассуждает, но и вызывает инструменты с предсказуемым
                результатом. Именно поэтому архитектура agentic coding опирается на слой вызовов через{' '}
                <Term id="function-calling" lang={lang}>Function Calling</Term> и интеграции через{' '}
                <Term id="sdk" lang={lang}>SDK</Term>. Этот слой превращает «текстовый ответ» в операцию,
                которую можно отследить, повторить и проверить по контракту.
              </>
            ) : (
              <>
                In a regular chat, an <Term id="agent" lang={lang}>agent</Term> can explain an approach, but it does
                not guarantee that the change was actually applied and validated inside the repository. Engineering
                delivery needs an execution chain where the model not only reasons but also invokes tools with
                predictable outcomes. That is why agentic coding architecture relies on a tool invocation layer via{' '}
                <Term id="function-calling" lang={lang}>Function Calling</Term> and integration through{' '}
                <Term id="sdk" lang={lang}>SDK</Term>. This layer converts a “text answer” into an auditable,
                repeatable operation governed by an explicit contract.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                На этапе <Term id="inference" lang={lang}>inference</Term> модель ограничена входными данными: она
                видит только то, что помещается в <Term id="context-window" lang={lang}>контекстное окно</Term>, и
                делает выводы из текущих <Term id="token" lang={lang}>токенов</Term>. Если инструментальный слой не
                структурирован, агент начинает действовать «вслепую»: дублирует шаги, вызывает неподходящие команды,
                увеличивает стоимость и время выполнения. Хорошая инженерная практика задает маршрут заранее: цель,
                критерии приемки, допустимые инструменты и пределы воздействия. Тогда каждый шаг становится
                контролируемым, а качество зависит от системы, а не от удачи в одном ответе.
              </>
            ) : (
              <>
                During <Term id="inference" lang={lang}>inference</Term>, the model is constrained by input scope: it
                only sees what fits into the <Term id="context-window" lang={lang}>context window</Term> and reasons
                from the current <Term id="token" lang={lang}>tokens</Term>. Without a structured tooling layer, the
                agent starts operating blindly: repeating steps, selecting wrong commands, and inflating cost and
                latency. Strong engineering practice defines the route in advance: objective, acceptance criteria,
                allowed tools, and impact boundaries. This makes each step controllable and shifts quality from
                one-shot luck to a reliable system.
              </>
            )}
          </p>
          <Terminal
            title="agent · tools"
            lines={[
              { cmd: lang === 'ru' ? 'добавь валидацию email' : 'add email validation', prompt: '>' },
              { out: '● read_file ▸ src/forms/signup.ts' },
              { out: '● edit_file ▸ signup.ts  +7 -0' },
              { out: '● run_tests ▸ 12 passed', tone: 'ok' },
            ]}
          />
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 2: Карта инструментов для coding-агента'
            : 'Chapter 2: Tool Map for a Coding Agent'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Практический стек обычно делится на группы: инструменты чтения (поиск по коду, чтение файлов,
                обзор архитектуры), инструменты изменения (патчи, генерация тестов, миграции), и инструменты
                контроля релиза (quality gates, canary, feature flags). Такое разделение снижает вероятность того,
                что агент случайно перейдет от анализа к разрушительным действиям. Для задач, где важен внешний
                контекст, часто добавляют <Term id="rag" lang={lang}>RAG</Term> и доступ к внутренней документации,
                чтобы решения принимались на основе актуальных артефактов проекта.
              </>
            ) : (
              <>
                A practical stack is usually grouped into read tools (code search, file reads, architecture overview),
                write tools (patching, test generation, migrations), and release-control tools (quality gates,
                canary rollout, feature flags). This separation reduces the chance that an agent accidentally jumps
                from analysis to destructive actions. For context-heavy tasks, teams often add{' '}
                <Term id="rag" lang={lang}>RAG</Term> and internal documentation access so decisions are grounded in
                current project artifacts rather than stale assumptions.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Важно не количество инструментов, а управляемость их интерфейсов. Каждый инструмент должен иметь
                понятную цель, строго типизированные аргументы, ограничения по правам и предсказуемые ошибки.
                Инструменты чтения по умолчанию делают систему безопаснее на ранних этапах, потому что они не
                изменяют состояние проекта. Инструменты записи и деплоя включаются поэтапно, только когда агент
                прошел промежуточные проверки. Такой дизайн ускоряет работу команды: агент не тратит шаги на
                угадывание, а выбирает операции из заранее подготовленного каталога действий.
              </>
            ) : (
              <>
                The key is not the number of tools but the controllability of their interfaces. Each tool should
                expose a clear purpose, strictly typed arguments, permission boundaries, and predictable failures.
                Read tools make early stages safer by default because they do not mutate repository state. Write and
                deploy tools should be enabled progressively, only after intermediate checks pass. This design also
                improves team speed: the agent does not waste cycles guessing commands and instead selects from a
                curated catalog of approved operations.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 3: Контракты инструментов и проверка результата'
            : 'Chapter 3: Tool Contracts and Result Validation'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Контракт инструмента должен отвечать на четыре вопроса: что делает вызов, какие параметры обязательны,
                какие эффекты допустимы, и что считается ошибкой. Если эти правила зафиксированы слабо, агент может
                выполнять внешне корректные команды, но нарушать политику продукта или инженерные ограничения.
                Поэтому контракты полезно оформлять как исполняемую схему с обязательной валидацией аргументов.
                Дополнительно задают лимиты: таймаут, число повторов, бюджет шагов и условия остановки цикла.
              </>
            ) : (
              <>
                A tool contract should answer four questions: what the call does, which parameters are required,
                which side effects are allowed, and what counts as failure. If these rules are weak, the agent may
                run technically valid commands while violating product policy or engineering constraints. That is why
                contracts should be encoded as executable schemas with mandatory argument validation. Teams also define
                operational limits: timeout, retry count, step budget, and explicit stop conditions for the loop.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                После выполнения команда проверяет не только «успех команды», но и соответствие критериям качества.
                Здесь используются тесты, статический анализ и целевые <Term id="evals" lang={lang}>evals</Term> для
                сценариев, где агент может дать формально рабочий, но рискованный результат. В отчете фиксируют,
                какие инструменты были вызваны, какие аргументы применялись, и какие проверки прошли или не прошли.
                Такая трассировка сокращает время расследования и упрощает rollback-решения. Контракт и проверка
                должны рассматриваться как единая система контроля, а не как два независимых этапа.
              </>
            ) : (
              <>
                After execution, the team should validate more than command success; it must validate compliance with
                quality criteria. This is where tests, static analysis, and targeted <Term id="evals" lang={lang}>evals</Term>{' '}
                are used for scenarios where an output may be functionally correct but still risky. Reports should
                capture which tools were called, which arguments were applied, and which checks passed or failed.
                This traceability reduces investigation time and simplifies rollback decisions. Contract design and
                validation need to operate as one control system, not as two disconnected stages.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 4: Безопасность инструментов и границы автономии'
            : 'Chapter 4: Tool Security and Autonomy Boundaries'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Инструменты расширяют возможности агента, но одновременно расширяют поверхность риска. Самая
                частая проблема в production — скрытые инструкции из внешних источников, включая{' '}
                <Term id="prompt-injection" lang={lang}>prompt injection</Term>. Если агент читает документ и
                без проверки выполняет команды из него, система теряет контроль над политикой безопасности.
                Поэтому доступ к инструментам должен строиться по принципу минимально необходимых прав: отдельно
                для чтения, отдельно для записи, отдельно для деплой-операций с подтверждением человеком.
              </>
            ) : (
              <>
                Tools increase agent capability, but they also increase risk surface. A common production issue is
                hidden instructions from external sources, including <Term id="prompt-injection" lang={lang}>prompt injection</Term>.
                If an agent reads a document and executes embedded directives without validation, the system loses
                policy control. Tool access should therefore follow least-privilege boundaries: separate permissions
                for read operations, write operations, and deployment actions that require human confirmation.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Практически это оформляют через слой <Term id="guardrails" lang={lang}>guardrails</Term>: фильтры
                входных данных, проверка аргументов, deny-list опасных операций и обязательные stop-сигналы при
                выходе за рамки контракта. Дополняют это наблюдаемостью: логи каждого вызова, причины отказа,
                и метрики качества по релизным срезам. Если guardrails не связаны с мониторингом, команда узнает
                о проблеме слишком поздно. Если связаны, инциденты локализуются быстро, а автономия агента остается
                полезной и управляемой.
              </>
            ) : (
              <>
                In practice, teams implement a <Term id="guardrails" lang={lang}>guardrails</Term> layer: input
                filters, argument checks, deny-lists for dangerous operations, and mandatory stop signals when the
                contract is violated. This must be paired with observability: per-call logs, explicit rejection
                reasons, and quality metrics by release slice. Guardrails without monitoring reveal issues too late.
                Guardrails with monitoring localize incidents quickly and keep agent autonomy useful and controlled.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 5: Эксплуатация, стоимость и надежный релиз'
            : 'Chapter 5: Operations, Cost, and Reliable Release'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Как только инструментальный слой подключен, главный вопрос меняется: как удержать качество и
                экономику выполнения при росте нагрузки. Первый рычаг — лимит вызовов инструментов на задачу и
                явные критерии ранней остановки, когда дальнейшие шаги не повышают вероятность успеха. Второй
                рычаг — staged rollout: сначала ограниченный трафик, затем расширение после прохождения quality gate.
                Такой подход защищает пользователей от массовой деградации и даёт команде время отреагировать.
              </>
            ) : (
              <>
                Once the tooling layer is connected, the main question changes: how to preserve quality and execution
                economics as load grows. The first lever is a tool-call budget per task with explicit early-stop
                criteria when additional steps no longer improve success probability. The second lever is staged
                rollout: limited traffic first, broader rollout only after quality gates pass. This protects users from
                widespread regressions and gives the team response time when signals deteriorate.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В production-процессе необходим заранее готовый rollback-план: как быстро откатить версию,
                какие артефакты проверить после отката, и кто принимает финальное решение по возобновлению релиза.
                Rollback должен считаться штатным механизмом локализации инцидента. Команда, которая тренирует
                rollback-сценарии заранее, восстанавливает сервис быстрее и с меньшим ущербом. В результате
                agentic coding tools дают не хаос автоматизации, а устойчивую систему поставки, где скорость,
                безопасность и наблюдаемость работают вместе.
              </>
            ) : (
              <>
                Production operation also requires a prebuilt rollback plan: how to revert quickly, which artifacts to
                validate after rollback, and who makes the final decision to resume rollout. Rollback should be treated
                as a normal incident-containment mechanism. Teams that rehearse rollback paths in advance recover faster
                with lower blast radius. The result is that agentic coding tools do not create automation chaos; they
                create a resilient delivery system where speed, safety, and observability reinforce each other.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
