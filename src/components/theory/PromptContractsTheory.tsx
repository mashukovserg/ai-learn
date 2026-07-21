"use client";

import React from 'react';
import Term from '@/components/Term';

export default function PromptContractsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8 reading-prose">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 1: От &quot;Вибраций&quot; к Инженерному Контракту' : 'Chapter 1: From &quot;Vibes&quot; to Engineering Contracts'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В обычной переписке с ИИ мы часто полагаемся на «vibes» — интуитивно понятные, но рыхлые инструкции вроде «сделай красиво» или «напиши тесты». Для автономного агента такие инструкции — источник высокого <Term id="hallucination" lang={lang}>риска галлюцинаций</Term>. Когда агент работает в цикле, любая неопределенность в промпте превращается в «дрейф» (drift): с каждой итерацией модель все дальше уходит от реальной архитектуры проекта в сторону случайных предположений.
              </>
            ) : (
              <>
                In casual AI interactions, we often rely on &quot;vibes&quot; — intuitive but loose instructions like &quot;make it look good&quot; or &quot;write some tests.&quot; For an autonomous agent, these instructions are a major source of <Term id="hallucination" lang={lang}>hallucination risk</Term>. When an agent operates in a loop, any ambiguity in the prompt translates into &quot;drift&quot;: with each iteration, the model moves further away from the actual project architecture toward random assumptions.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                <Term id="prompt-engineering" lang={lang}>Промпт-контракт</Term> — это переход от пожеланий к жестким спецификациям. Представьте это как API-контракт между вами и моделью. Если вы не договорились о формате входных и выходных данных, система будет ломаться при первом же неожиданном ответе. Контракт фиксирует не только цель, но и границы дозволенного, предотвращая неконтролируемые изменения в кодовой базе.
              </>
            ) : (
              <>
                A <Term id="prompt-engineering" lang={lang}>Prompt Contract</Term> is a shift from wishes to hard specifications. Think of it as an API contract between you and the model. If you haven&apos;t agreed on input and output formats, the system will break at the first unexpected response. A contract pins down not just the goal but the boundaries of allowed action, preventing uncontrolled changes in your codebase.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 2: Анатомия надежного контракта' : 'Chapter 2: Anatomy of a Reliable Contract'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Сильный контракт состоит из трех слоев. Первый — <strong>Schema Layer</strong>. Мы не просто просим JSON, мы задаем схему (JSON Schema или TypeScript interface). Это позволяет автоматически валидировать ответ модели и мгновенно возвращать ошибку в цикл, если поле пропущено. Второй слой — <strong>Constraint Layer</strong>. Здесь живут <Term id="guardrails" lang={lang}>negative constraints</Term>: «никогда не меняй существующие тесты», «запрещено использовать axios».
              </>
            ) : (
              <>
                A strong contract consists of three layers. The first is the <strong>Schema Layer</strong>. We don&apos;t just ask for JSON; we define a schema (JSON Schema or TypeScript interface). This allows us to automatically validate the model&apos;s response and instantly return an error to the loop if a field is missing. The second layer is the <strong>Constraint Layer</strong>. This is where <Term id="guardrails" lang={lang}>negative constraints</Term> live: &quot;never change existing tests,&quot; &quot;forbidden to use axios.&quot;
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Третий слой — <strong>Observability Layer</strong>. Мы требуем от агента логировать не только результат, но и цепочку рассуждений (Chain of Thought) в строго заданном поле. Это превращает «черный ящик» в прозрачный процесс. Если агент ошибается, вы видите, на каком этапе контракта произошел сбой логики, и можете точечно поправить системный промпт.
              </>
            ) : (
              <>
                The third layer is the <strong>Observability Layer</strong>. We require the agent to log not just the result but also the Chain of Thought in a strictly defined field. This turns the &quot;black box&quot; into a transparent process. If the agent fails, you can see exactly which stage of the contract experienced a logic breakdown and fix the system prompt with surgical precision.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 3: Борьба с дрейфом и детерминизм' : 'Chapter 3: Fighting Drift and Determinism'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Основной враг агентных систем — стохастическая природа LLM. Контракт призван навязать детерминизм там, где это критично. Например, использование жестких форматов для <Term id="function-calling" lang={lang}>Function Calling</Term> гарантирует, что агент вызовет инструмент с правильными типами данных. Если промпт позволяет модели «импровизировать» с именами аргументов, ваш пайплайн упадет.
              </>
            ) : (
              <>
                The primary enemy of agentic systems is the stochastic nature of LLMs. A contract is designed to impose determinism where it&apos;s critical. For example, using rigid formats for <Term id="function-calling" lang={lang}>Function Calling</Term> ensures the agent invokes tools with correct data types. If the prompt allows the model to &quot;improvise&quot; with argument names, your pipeline will crash.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Для борьбы с дрейфом полезно внедрять <strong>Error Correction Loops</strong> прямо в контракт. Если валидатор обнаружил нарушение схемы, он должен автоматически отправить агенту сообщение: «Ошибка валидации в поле X, ожидался тип Y». Это позволяет агенту «самоисцеляться» в рамках одной сессии, не прерывая выполнение задачи человеком.
              </>
            ) : (
              <>
                To fight drift, it&apos;s useful to embed <strong>Error Correction Loops</strong> directly into the contract. If a validator detects a schema violation, it should automatically send a message to the agent: &quot;Validation error in field X, type Y expected.&quot; This allows the agent to &quot;self-heal&quot; within a single session without requiring human intervention to restart the task.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 4: Промпты как код (Prompts as Code)' : 'Chapter 4: Prompts as Code'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В профессиональной разработке мы перестаем относиться к промптам как к тексту и начинаем относиться к ним как к коду. Это значит: версии (versioning), тесты (evals) и ревью. Любое изменение в контракте должно проходить через <Term id="evals" lang={lang}>Prompt Evals</Term> — набор контрольных задач, на которых проверяется, не сломались ли старые функции при добавлении новых инструкций.
              </>
            ) : (
              <>
                In professional development, we stop treating prompts as text and start treating them as code. This means: versioning, testing (evals), and review. Any change to a contract must pass through <Term id="evals" lang={lang}>Prompt Evals</Term> — a suite of control tasks used to verify that old functions didn&apos;t break when new instructions were added.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Такой подход позволяет безопасно масштабировать систему. Если над агентом работают несколько человек, контракт гарантирует, что изменения одного инженера не превратят вывод агента в нечитаемый мусор для инструментов другого инженера. Мы строим доверенную среду, где агент — это предсказуемый исполнитель, а не капризный чат-бот.
              </>
            ) : (
              <>
                This approach allows for safe system scaling. If multiple people are working on an agent, the contract ensures that one engineer&apos;s changes won&apos;t turn the agent&apos;s output into unreadable noise for another engineer&apos;s tools. We are building a trusted environment where the agent is a predictable executor, not a moody chatbot.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 5: Контроль контекстной гигиены' : 'Chapter 5: Managing Context Hygiene'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Последний элемент контракта — управление ресурсами. Каждый лишний токен в ответе — это деньги и задержка (latency). Строгий контракт на формат вывода отсекает лишние рассуждения там, где они не нужны, освобождая <Term id="context-window" lang={lang}>контекстное окно</Term> для действительно важных данных.
              </>
            ) : (
              <>
                The final element of a contract is resource management. Every extra token in a response costs money and adds latency. A strict output format contract cuts out unnecessary chatter where it isn&apos;t needed, freeing up the <Term id="context-window" lang={lang}>context window</Term> for truly important data.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Хороший контракт включает в себя инструкции по сокращению контекста: когда агент должен сжать историю или выкинуть старые артефакты. Это превращает «бесконечный» цикл в устойчивый процесс, который может работать над большими задачами часами, не теряя нить повествования и не выходя за рамки бюджета.
              </>
            ) : (
              <>
                A good contract includes instructions for context pruning: when the agent should compress history or discard old artifacts. This turns an &quot;infinite&quot; loop into a sustainable process that can work on large tasks for hours without losing the thread or exceeding the budget.
              </>
            )}
          </p>
        </div>
      </section>

    </div>
  );
}
