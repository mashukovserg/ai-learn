"use client";

import React from 'react';
import Term from '@/components/Term';

export default function MultiAgentCollaborationTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8 reading-prose">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Зачем нужно много агентов?' : 'Chapter 1: Why Use Multiple Agents?'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В одиночном режиме даже самая мощная модель (например, Claude 3.5 Sonnet или GPT-4o) ограничена своим <Term id="context-window" lang={lang}>контекстным окном</Term> и способностью удерживать внимание на деталях. Когда задача становится слишком большой — например, создание целой фичи с фронтендом, бэкендом и тестами — один агент начинает «плыть»: забывать старые инструкции, галлюцинировать в путях к файлам или предлагать противоречивые решения.
              </>
            ) : (
              <>
                In single-agent mode, even the most powerful models (like Claude 3.5 Sonnet or GPT-4o) are limited by their <Term id="context-window" lang={lang}>context window</Term> and their ability to maintain focus on details. When a task becomes too large — for instance, building a complete feature with frontend, backend, and tests — a single agent begins to &quot;drift&quot;: forgetting old instructions, hallucinating file paths, or proposing contradictory solutions.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Решение — <strong>Multi-Agent Systems (MAS)</strong>. Мы разделяем ответственность между специализированными агентами. Один планирует, другой пишет код, третий проверяет. Это не просто «несколько чатов», а архитектурный паттерн, где каждый участник имеет узкий контекст, четкие инструменты и измеримую зону ответственности.
              </>
            ) : (
              <>
                The solution is <strong>Multi-Agent Systems (MAS)</strong>. We divide responsibility among specialized agents. One plans, another writes code, a third validates. This isn&apos;t just &quot;multiple chats,&quot; but an architectural pattern where each participant has a narrow context, clear tools, and a measurable area of responsibility.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 2: Паттерн Orchestrator-Workers' : 'Chapter 2: The Orchestrator-Workers Pattern'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Самый популярный паттерн в агентной разработке — иерархический. <strong>Оркестратор</strong> получает общую цель от человека, декомпозирует ее на подзадачи и распределяет между <strong>Воркерами</strong>. Воркеры не знают о существовании друг друга; они просто выполняют свой кусок работы и возвращают результат.
              </>
            ) : (
              <>
                The most popular pattern in agentic development is hierarchical. An <strong>Orchestrator</strong> receives a high-level goal from a human, decomposes it into subtasks, and distributes them among <strong>Workers</strong>. Workers are unaware of each other; they simply execute their portion of the work and return the result.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Это дает два преимущества: во-первых, параллелизм (можно делать фронт и бэк одновременно). Во-вторых, надежность. Если один воркер ошибся, Оркестратор может отправить его на второй круг или заменить другим, не теряя контекст всей задачи. Оркестратор выступает в роли «хранителя истины», собирая финальный результат из кусочков.
              </>
            ) : (
              <>
                This provides two main benefits: first, parallelism (frontend and backend can be built simultaneously). Second, reliability. If one worker fails, the Orchestrator can send it for another iteration or replace it without losing the context of the entire task. The Orchestrator acts as the &quot;source of truth,&quot; assembling the final result from individual pieces.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 3: Гигиена контекста и Token Hygiene' : 'Chapter 3: Context and Token Hygiene'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В многоагентных системах критически важно управлять тем, что видит каждый агент. Паттерн <strong>Token Hygiene</strong> подразумевает, что мы подаем воркеру только те файлы и те куски документации, которые нужны для его конкретной задачи. Если вы просите агента поправить CSS, ему не нужно видеть схему базы данных.
              </>
            ) : (
              <>
                In multi-agent systems, it is critical to manage what each agent sees. The <strong>Token Hygiene</strong> pattern implies that we feed a worker only the files and documentation snippets necessary for its specific task. If you ask an agent to fix CSS, it doesn&apos;t need to see the database schema.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Зачем это нужно? Чем больше лишнего шума в контексте, тем слабее работает механизм <strong>Attention</strong> (внимания) модели. Модель начинает отвлекаться на нерелевантные куски кода и чаще совершает ошибки в логике. Ограничивая видимость («песочница»), мы повышаем предсказуемость и качество работы каждого отдельного звена системы.
              </>
            ) : (
              <>
                Why is this necessary? The more noise there is in the context, the weaker the model&apos;s <strong>Attention</strong> mechanism becomes. The model starts getting distracted by irrelevant code and makes more logic errors. By restricting visibility (sandboxing), we increase the predictability and quality of every single link in the system.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 4: Ветвление: Branch-per-Task' : 'Chapter 4: Branching: Branch-per-Task'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Когда несколько агентов работают над одним проектом, возникает риск конфликтов в коде. Паттерн <strong>Branch-per-Task</strong> решает эту проблему. Каждая подзадача, назначенная воркеру, выполняется в изолированной git-ветке. Это позволяет системе запускать тесты и линтеры для конкретного изменения, не дожидаясь готовности всей фичи.
              </>
            ) : (
              <>
                When multiple agents work on the same project, code conflict risks arise. The <strong>Branch-per-Task</strong> pattern solves this. Each subtask assigned to a worker is executed in an isolated git branch. This allows the system to run tests and linters for specific changes without waiting for the entire feature to be ready.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Такой подход делает разработку «атомарной». Мы можем в любой момент откатить одно неудачное изменение («rollback»), не затрагивая прогресс других агентов. Финальное слияние (merge) происходит только после того, как все воркеры отчитались об успехе, а Оркестратор подтвердил отсутствие интеграционных конфликтов.
              </>
            ) : (
              <>
                This approach makes development &quot;atomic.&quot; We can roll back a single failed change at any time without affecting the progress of other agents. The final merge happens only after all workers report success and the Orchestrator confirms there are no integration conflicts.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 5: Динамическая передача (Handoffs)' : 'Chapter 5: Dynamic Handoffs'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В более продвинутых системах (вроде OpenAI Swarm) используется механизм <strong>Handoff</strong>. Агенты не просто выполняют приказы сверху, а могут сами решать, кому передать эстафету. Например, агент-исследователь находит баг в бэкенде и «передает» (handoff) текущий контекст и задачу специализированному агенту-отладчику.
              </>
            ) : (
              <>
                In more advanced systems (like OpenAI Swarm), a <strong>Handoff</strong> mechanism is used. Agents don&apos;t just follow orders from above; they can decide for themselves who to pass the baton to. For example, a research agent finds a backend bug and &quot;handoffs&quot; the current context and task to a specialized debugger agent.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Это превращает иерархию в гибкую сеть. Однако здесь кроется риск <strong>бесконечных циклов</strong>: если агент А передаст задачу агенту Б, а тот вернет ее обратно, вы быстро сожжете бюджет на токены. Поэтому в любой многоагентной системе обязательны жесткие лимиты на количество итераций (Max Steps) и явные точки выхода для человека-контролера.
              </>
            ) : (
              <>
                This transforms the hierarchy into a flexible network. However, this carries a risk of <strong>infinite loops</strong>: if Agent A passes a task to Agent B, and B passes it back, you will quickly burn through your token budget. Therefore, in any multi-agent system, hard limits on the number of iterations (Max Steps) and explicit exit points for a human controller are mandatory.
              </>
            )}
          </p>
        </div>
      </section>

    </div>
  );
}
