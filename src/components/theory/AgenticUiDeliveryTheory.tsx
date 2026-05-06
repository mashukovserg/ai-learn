"use client";

import React from 'react';
import Term from '@/components/Term';

export default function AgenticUiDeliveryTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8 reading-prose">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Работа &quot;вслепую&quot; и проблема Vision' : 'Chapter 1: Working Blind and the Vision Problem'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Создание UI для агента — задача на порядок сложнее, чем написание алгоритмов. Причина в том, что стандартный цикл <Term id="agent" lang={lang}>agentic loop</Term> обычно не включает визуальную проверку. Агент пишет JSX, который синтаксически корректен, но при рендеринге кнопка может наехать на заголовок, а текст стать нечитаемым из-за низкого контраста.
              </>
            ) : (
              <>
                Creating UI for an agent is significantly more complex than writing algorithms. The reason is that a standard <Term id="agent" lang={lang}>agentic loop</Term> typically lacks visual verification. An agent writes JSX that is syntactically correct, but upon rendering, a button might overlap a heading, or text might become unreadable due to low contrast.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Пока <strong>Vision-модели</strong> не стали дешевым и быстрым стандартом для каждой итерации, инженеры используют текстовые суррогаты «зрения»: линтеры для JSX, спецификации <Term id="design-system" lang={lang}>дизайн-систем</Term> и автоматические тесты верстки. Это превращает творческий процесс в строгий инженерный воркфлоу, где агент следует заданным «рельсам» параметров.
              </>
            ) : (
              <>
                Until <strong>Vision models</strong> become a cheap and fast standard for every iteration, engineers use textual &quot;vision&quot; surrogates: JSX linters, <Term id="design-system" lang={lang}>design system</Term> specifications, and automated layout tests. This transforms a creative process into a rigid engineering workflow where the agent follows predefined parameter &quot;rails.&quot;
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 2: Дизайн-система как API для агента' : 'Chapter 2: Design System as an Agent API'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Лучший способ гарантировать качество UI от агента — запретить ему использовать произвольные стили. Агент должен работать только с <strong>дизайн-токенами</strong>: предопределенными цветами, отступами и типографикой. В проектах с Tailwind CSS это означает использование только классов из конфига, без «магических чисел» вроде <code>margin-left: 13px</code>.
              </>
            ) : (
              <>
                The best way to guarantee UI quality from an agent is to forbid arbitrary styling. The agent should only work with <strong>design tokens</strong>: predefined colors, spacing, and typography. In projects using Tailwind CSS, this means using only config-based classes, avoiding &quot;magic numbers&quot; like <code>margin-left: 13px</code>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Когда дизайн-система формализована, агент воспринимает ее как API. Вместо того чтобы «рисовать», он «вызывает» нужные компоненты и токены. Это обеспечивает <strong>Component Consistency</strong>: даже если агент создаст новый экран, он будет выглядеть так, будто его нарисовал штатный дизайнер, потому что используются те же атомарные блоки.
              </>
            ) : (
              <>
                When a design system is formalized, the agent treats it like an API. Instead of &quot;drawing,&quot; it &quot;invokes&quot; the necessary components and tokens. This ensures <strong>Component Consistency</strong>: even if the agent creates a new screen, it will look as if it were designed by a staff designer because the same atomic blocks are used.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 3: Адаптивность и Responsive Workflow' : 'Chapter 3: Responsiveness and the Responsive Workflow'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Агенты часто забывают про мобильных пользователей, если им не указать на это явно. Надежный воркфлоу доставки UI включает в себя обязательный <strong>Responsive Pass</strong>. Мы требуем от агента проверять код на наличие префиксов адаптивности (<code>sm:</code>, <code>md:</code>, <code>lg:</code>) и описывать логику перестроения сетки в комментариях или плане.
              </>
            ) : (
              <>
                Agents often overlook mobile users unless explicitly instructed. A reliable UI delivery workflow includes a mandatory <strong>Responsive Pass</strong>. We require the agent to check code for responsive prefixes (<code>sm:</code>, <code>md:</code>, <code>lg:</code>) and describe the grid restructuring logic in comments or the plan.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Практический совет: подавайте агенту спецификацию в формате <strong>Mobile-First</strong>. Если агент сначала строит простую вертикальную структуру, ему проще затем добавить правила для расширения на десктоп, чем пытаться «схлопнуть» сложный многоколоночный интерфейс без визуального контроля.
              </>
            ) : (
              <>
                Practical tip: provide specs to the agent in a <strong>Mobile-First</strong> format. If the agent builds a simple vertical structure first, it is easier to add expansion rules for desktop than to attempt &quot;collapsing&quot; a complex multi-column interface without visual feedback.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 4: Доступность (a11y) как критерий качества' : 'Chapter 4: Accessibility (a11y) as a Quality Metric'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Для агента доступность интерфейса — это отличный способ самопроверки. Семантичный HTML (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;button&gt;</code> вместо <code>&lt;div&gt;</code>) и наличие ARIA-атрибутов делают структуру кода более понятной для самой модели. Чем логичнее размечен код для скринридеров, тем меньше в нем галлюцинаций для агента.
              </>
            ) : (
              <>
                For an agent, interface accessibility is an excellent way to self-verify. Semantic HTML (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;button&gt;</code> instead of <code>&lt;div&gt;</code>) and ARIA attributes make the code structure more understandable for the model itself. The more logically code is marked up for screen readers, the fewer hallucinations the agent produces.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В инженерный цикл можно встроить автоматические проверки вроде <strong>pa11y</strong> или <strong>axe-core</strong>. Если агент выдает код, который не проходит тест на контрастность или пропущенные лейблы, он получает текстовую ошибку и возвращается в цикл исправления. Это гарантирует, что инклюзивность становится частью «Definition of Done» для каждого компонента.
              </>
            ) : (
              <>
                Automated checks like <strong>pa11y</strong> or <strong>axe-core</strong> can be integrated into the engineering loop. If an agent produces code that fails contrast tests or is missing labels, it receives a text error and returns to the fix cycle. This ensures that inclusivity becomes part of the &quot;Definition of Done&quot; for every component.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-emerald-400">
          {lang === 'ru' ? 'Глава 5: Будущее: Visual Feedback Loop' : 'Chapter 5: The Future: Visual Feedback Loops'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Следующий этап эволюции — <strong>Visual Feedback Loop</strong>. В этом сценарии агент не просто пишет код, а делает скриншот отрендеренного компонента (через headless-браузер вроде Playwright) и отправляет его в Vision-модель для сравнения с дизайн-макетом.
              </>
            ) : (
              <>
                The next stage of evolution is the <strong>Visual Feedback Loop</strong>. In this scenario, the agent doesn&apos;t just write code; it takes a screenshot of the rendered component (via a headless browser like Playwright) and sends it to a Vision model to compare it with the design mock-up.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Такая «закрытая петля» позволяет агенту видеть свои ошибки: «Заголовок слишком близко к краю», «Цвет кнопки не совпадает с брендом». Это превращает агента из «кодера по текстовому описанию» в полноценного фронтенд-инженера, который несет ответственность за финальный пользовательский опыт, а не только за чистоту кода.
              </>
            ) : (
              <>
                This &quot;closed loop&quot; allows the agent to see its errors: &quot;Heading is too close to the edge,&quot; &quot;Button color doesn&apos;t match the brand.&quot; It transforms the agent from a &quot;coder following text descriptions&quot; into a full-fledged frontend engineer responsible for the final user experience, not just code cleanliness.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
