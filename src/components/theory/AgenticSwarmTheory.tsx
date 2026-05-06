import React from 'react';

export default function AgenticSwarmTheory({ lang }: { lang: string }) {
  if (lang === 'ru') {
    return (
      <>
        <section>
          <h2>От исполнителя к дирижеру</h2>
          <p>
            Представьте, что вы переходите от вождения автомобиля (где вы контролируете каждое движение руля) 
            к управлению <strong>логистической компанией</strong>. Вам больше не нужно нажимать на педаль — 
            ваша задача ставить цели, распределять ресурсы и следить за тем, чтобы грузы доставлялись вовремя.
          </p>
          <p>
            В концепции Scale AI это называется переходом к <strong>агентным роям</strong>. Это не просто 
            один ИИ-помощник в чате, а группа специализированных агентов, работающих над одной большой задачей.
          </p>
        </section>

        <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
          <h3 className="text-emerald-500 mt-0">Ключевая аналогия: Автопилот vs Диспетчер</h3>
          <p className="mb-0">
            <strong>ИИ-ассистент:</strong> Вы просите его написать письмо. Это автопилот. Он помогает вам в конкретный момент.<br />
            <strong>Агентный рой:</strong> Вы поручаете ему &quot;Провести исследование рынка 10 конкурентов, собрать их цены в таблицу и подготовить отчет&quot;. Это работа целого отдела, которым вы теперь управляете как диспетчер.
          </p>
        </section>

        <section>
          <h3>Правило 90/10 и &quot;Founder Mode&quot;</h3>
          <p>
            Александр Ванг предупреждает: достичь 90% точности с помощью агентов относительно легко. Но последние <strong>10% качества</strong> — 
            те самые &quot;краевые случаи&quot; (edge cases) — требуют огромного внимания. 
          </p>
          <p>
            Именно здесь включается <strong>Founder Mode</strong> (Режим основателя). Это не значит делать всё самому. 
            Это значит глубоко погружаться в детали работы вашего роя, проводить аудит качества и лично проверять 
            критически важные узлы. Качество в ИИ-системах — это <em>фрактал</em>: если вы не заботитесь о нем на верхнем уровне, 
            оно рассыплется на нижних.
          </p>
        </section>

        <section>
          <h3>Архитектура будущего труда</h3>
          <ul>
            <li><strong>Агенты:</strong> Берут на себя масштабируемую, повторяемую работу, поиск данных и первичный анализ.</li>
            <li><strong>Вы (Менеджер роя):</strong> Задаете стратегию, формулируете видение, разрешаете сложные этические и бизнес-дилеммы.</li>
          </ul>
          <p>
            Ваш &quot;рычаг&quot; (leverage) увеличивается в десятки раз. Один инженер или аналитик теперь может управлять объемом работы, 
            который раньше требовал усилий целого департамента.
          </p>
        </section>

        <section>
          <h3>Агентная телеметрия и бесконечные рынки</h3>
          <p>
            Чтобы рой не превратился в &quot;черный ящик&quot;, менеджеру нужна <strong>телеметрия</strong>. Это система мониторинга, 
            которая показывает не только финальный результат, но и промежуточные шаги: какие инструменты вызывал агент, 
            сколько токенов потратил и на каком этапе возникло замедление.
          </p>
          <p>
            Александру Вангу часто задают вопрос: &quot;Не закончатся ли задачи для людей?&quot;. Его ответ — концепция <strong>бесконечных рынков</strong>. 
            Как только выполнение базовых задач становится почти бесплатным благодаря агентам, спрос человечества на более сложные 
            и амбициозные проекты мгновенно возрастает, создавая новые рабочие места в сфере управления этими системами.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>From Performer to Conductor</h2>
        <p>
          Imagine transitioning from driving a car (where you control every turn of the wheel) 
          to managing a <strong>logistics company</strong>. You no longer need to press the pedal — 
          your task is to set goals, allocate resources, and ensure cargo is delivered on time.
        </p>
        <p>
          In the Scale AI concept, this is called the shift to <strong>agentic swarms</strong>. It&apos;s not just 
          one AI assistant in a chat, but a group of specialized agents working on a single large task.
        </p>
      </section>

      <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
        <h3 className="text-emerald-500 mt-0">Key Analogy: Autopilot vs. Dispatcher</h3>
        <p className="mb-0">
          <strong>AI Assistant:</strong> You ask it to write an email. It&apos;s an autopilot. It helps you in a specific moment.<br />
          <strong>Agentic Swarm:</strong> You task it to &quot;Research 10 competitors, collect their prices in a table, and prepare a report.&quot; This is the work of an entire department that you now manage as a dispatcher.
        </p>
      </section>

      <section>
        <h3>The 90/10 Rule and &quot;Founder Mode&quot;</h3>
        <p>
          Alexandr Wang warns: reaching 90% accuracy with agents is relatively easy. But the final <strong>10% of quality</strong> — 
          the &quot;edge cases&quot; — requires immense attention.
        </p>
        <p>
          This is where <strong>Founder Mode</strong> kicks in. It doesn&apos;t mean doing everything yourself.
          It means diving deep into the details of your swarm&apos;s work, conducting quality audits, and personally
          verifying critical nodes. Quality in AI systems is a <em>fractal</em>: if you don&apos;t care about it at the top level,
          it will crumble at the lower levels.
        </p>
      </section>

      <section>
        <h3>The Architecture of Future Work</h3>
        <ul>
          <li><strong>Agents:</strong> Take on scalable, repeatable work, data retrieval, and primary analysis.</li>
          <li><strong>You (Swarm Manager):</strong> Set strategy, formulate vision, and resolve complex ethical and business dilemmas.</li>
        </ul>
        <p>
          Your &quot;leverage&quot; increases tenfold. A single engineer or analyst can now manage a volume of work 
          that previously required the efforts of an entire department.
        </p>
      </section>

      <section>
        <h3>Agentic Telemetry and Infinite Markets</h3>
        <p>
          To prevent a swarm from becoming a &quot;black box,&quot; a manager needs <strong>telemetry</strong>. This is a monitoring system 
          that shows not just the final result, but also the intermediate steps: which tools the agent called, 
          how many tokens it spent, and at what stage a slowdown occurred.
        </p>
        <p>
          Alexandr Wang is often asked: &quot;Will we run out of tasks for humans?&quot;. His answer is the concept of <strong>infinite markets</strong>. 
          As soon as the execution of basic tasks becomes nearly free thanks to agents, humanity&apos;s demand for more complex 
          and ambitious projects immediately increases, creating new jobs in managing these systems.
        </p>
      </section>
    </>
  );
}
