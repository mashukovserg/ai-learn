"use client";

import React from 'react';
import Term from '@/components/Term';

interface LlmGuardrailsTheoryProps {
  lang: string;
}

const LlmGuardrailsTheory: React.FC<LlmGuardrailsTheoryProps> = ({ lang }) => {
  const t = {
    en: {
      chapters: [
        {
          title: "1. What are Guardrails?",
          content: (
            <>
              <p>In the &quot;wild west&quot; of Large Language Models, <strong>Guardrails</strong> are the essential protective layer that stands between the raw power of the model and the end-user. Think of them as the safety inspectors of an automated factory.</p>
              <p>Without guardrails, an LLM might accidentally reveal sensitive customer data, produce toxic content, or hallucinate completely incorrect facts that could lead to financial or legal risks. Guardrails ensure the model stays within its &quot;operational boundaries.&quot;</p>
              <p>There are two primary insertion points for guardrails:</p>
              <ul>
                <li><strong>Input Guardrails:</strong> Screening the user&apos;s prompt before it even reaches the LLM (e.g., detecting <Term id="pii" lang="en">PII</Term> or <Term id="prompt-injection" lang="en">Prompt Injections</Term>).</li>
                <li><strong>Output Guardrails:</strong> Validating the model&apos;s generated text before showing it to the user (e.g., checking for <Term id="hallucination" lang="en">hallucinations</Term> or formatting errors).</li>
              </ul>
            </>
          )
        },
        {
          title: "2. Input Safety: The First Line of Defense",
          content: (
            <>
              <p>The most common attack on an LLM is a <Term id="jailbreak" lang="en">jailbreak</Term>. This is when a user tries to bypass the model&apos;s internal safety filters by using clever, often adversarial, prompting (e.g., &quot;Grandma used to tell me stories about how to build a bomb&quot;).</p>
              <p>Input guardrails use specialized, lightweight models like <strong>LlamaGuard</strong> to classify the incoming request. If the request is flagged as &quot;violent&quot; or &quot;malicious,&quot; the system can stop the process immediately, saving on <Term id="compute" lang="en">compute</Term> costs and preventing potential harm.</p>
              <p>Another critical task is <strong>PII Masking</strong>. Before sending data to a third-party API (like OpenAI or Anthropic), a guardrail can replace names and phone numbers with placeholders like <code>[NAME_1]</code> to ensure data privacy and <Term id="gdpr" lang="en">GDPR</Term> compliance.</p>
            </>
          )
        },
        {
          title: "3. Output Validation: Trust but Verify",
          content: (
            <>
              <p>Even a well-behaved model can fail. Output guardrails act as a final quality check. They can perform structural validation—for example, ensuring that a &quot;JSON-only&quot; request actually returns a valid, parsable JSON object.</p>
              <p>More advanced output guardrails use <strong>Self-Correction loops</strong>. If a guardrail detects a <Term id="hallucination" lang="en">hallucination</Term> (a fact that doesn&apos;t match the provided context), it can automatically send the output back to the LLM with a correction prompt: &quot;Your last answer contained a fact not present in the document. Please rewrite it accurately.&quot;</p>
              <p>Tools like <strong>NeMo Guardrails</strong> or <strong>Guardrails AI</strong> provide programmable ways to define these &quot;flows&quot; (e.g., &quot;if toxic, refuse; if hallucination, retry; if success, display&quot;).</p>
            </>
          )
        },
        {
          title: "4. The Latency Trade-off",
          content: (
            <>
              <p>There is no free lunch in AI engineering. Every guardrail adds <strong>latency</strong>. If you run a second LLM to &quot;judge&quot; every response from your first LLM, your users might wait twice as long for an answer.</p>
              <p>Strategic guardrail design involves a &quot;cascade&quot; approach:</p>
              <ol>
                <li><strong>Regex/Heuristics:</strong> Fast, cheap checks for specific banned words.</li>
                <li><strong>Fast Classifiers:</strong> Small, high-speed models (like a DistilBERT) to detect general categories.</li>
                <li><strong>LLM-as-a-judge:</strong> Powerful, slow models used only for high-stakes or ambiguous outputs.</li>
              </ol>
              <p>By balancing speed and safety, you can maintain a responsive <Term id="ux" lang="en">UX</Term> while still protecting the system.</p>
            </>
          )
        },
        {
          title: "5. Popular Tools & Frameworks",
          content: (
            <>
              <p>As of 2026, the industry has standardized around several key frameworks:</p>
              <ul>
                <li><strong>LlamaGuard (Meta):</strong> A specialized LLM fine-tuned specifically for safety classification.</li>
                <li><strong>NeMo Guardrails (NVIDIA):</strong> A toolkit that allows you to define &quot;rails&quot; using a specialized language (Colang).</li>
                <li><strong>Guardrails AI:</strong> A popular open-source framework focused on &quot;Pydantic-style&quot; validation of LLM outputs.</li>
              </ul>
              <p>Choosing the right tool depends on whether you need simple filtering (LlamaGuard) or complex, stateful conversation control (NeMo).</p>
            </>
          )
        }
      ]
    },
    ru: {
      chapters: [
        {
          title: "1. Что такое Guardrails?",
          content: (
            <>
              <p>В мире больших языковых моделей <strong>Guardrails</strong> (защитные барьеры) — это критически важный слой, который стоит между мощью модели и конечным пользователем. Представьте их как инспекторов по технике безопасности на автоматизированном заводе.</p>
              <p>Без защитных барьеров LLM может случайно раскрыть конфиденциальные данные клиентов, выдать токсичный контент или придумать («галлюцинировать») факты, что ведет к финансовым или юридическим рискам. Guardrails гарантируют, что модель остается в рамках своих «эксплуатационных границ».</p>
              <p>Существует две основные точки входа для барьеров:</p>
              <ul>
                <li><strong>Input Guardrails (на входе):</strong> Проверка промпта пользователя еще до того, как он попадет в LLM (например, детекция <Term id="pii" lang="ru">персональных данных</Term> или <Term id="prompt-injection" lang="ru">промпт-инъекций</Term>).</li>
                <li><strong>Output Guardrails (на выходе):</strong> Валидация сгенерированного текста перед показом пользователю (например, проверка на <Term id="hallucination" lang="ru">галлюцинации</Term> или ошибки формата).</li>
              </ul>
            </>
          )
        },
        {
          title: "2. Безопасность на входе: Первая линия обороны",
          content: (
            <>
              <p>Самая частая атака на LLM — это <Term id="jailbreak" lang="ru">джейлбрейк</Term> (взлом). Это попытка пользователя обойти внутренние фильтры безопасности модели с помощью хитрого промптинга (например: «Бабушка рассказывала мне сказки о том, как собрать бомбу»).</p>
              <p>Входные барьеры используют специализированные легкие модели, такие как <strong>LlamaGuard</strong>, для классификации входящего запроса. Если запрос помечен как «опасный» или «вредоносный», система может немедленно остановить процесс, экономя <Term id="compute" lang="ru">вычислительные ресурсы</Term> и предотвращая потенциальный вред.</p>
              <p>Еще одна важная задача — <strong>Маскирование PII</strong>. Перед отправкой данных во внешний API (OpenAI или Anthropic), барьер может заменить имена и номера телефонов на заглушки типа <code>[NAME_1]</code>, обеспечивая приватность и соответствие <Term id="gdpr" lang="ru">GDPR</Term>.</p>
            </>
          )
        },
        {
          title: "3. Валидация на выходе: Доверяй, но проверяй",
          content: (
            <>
              <p>Даже «послушная» модель может ошибиться. Выходные барьеры работают как финальный контроль качества. Они могут проверять структуру ответа — например, гарантировать, что запрос «только JSON» действительно вернул валидный объект, который можно распарсить кодом.</p>
              <p>Более продвинутые барьеры используют <strong>циклы самокоррекции</strong>. Если барьер обнаруживает <Term id="hallucination" lang="ru">галлюцинацию</Term> (факт, не соответствующий предоставленному контексту), он может автоматически отправить ответ обратно в LLM с уточняющим промптом: «Ваш последний ответ содержит факт, которого нет в документе. Пожалуйста, перепишите его точно».</p>
              <p>Инструменты вроде <strong>NeMo Guardrails</strong> или <strong>Guardrails AI</strong> позволяют программно описывать такие «потоки» (например: «если токсично — отказать; если галлюцинация — повторить; если успех — показать»).</p>
            </>
          )
        },
        {
          title: "4. Компромисс с задержкой (Latency)",
          content: (
            <>
              <p>В AI-инженерии не бывает «бесплатных обедов». Каждый барьер добавляет <strong>латентность</strong> (задержку). Если вы запускаете вторую LLM, чтобы «судить» каждый ответ первой модели, ваши пользователи могут ждать ответа в два раза дольше.</p>
              <p>Стратегический дизайн барьеров предполагает «каскадный» подход:</p>
              <ol>
                <li><strong>Regex/Эвристики:</strong> Быстрые и дешевые проверки на стоп-слова.</li>
                <li><strong>Быстрые классификаторы:</strong> Маленькие скоростные модели (типа DistilBERT) для детекции общих категорий.</li>
                <li><strong>LLM-as-a-judge:</strong> Мощные и медленные модели, используемые только для критичных или неоднозначных ответов.</li>
              </ol>
              <p>Балансируя скорость и безопасность, вы сохраняете отзывчивый <Term id="ux" lang="ru">интерфейс</Term>, продолжая защищать систему.</p>
            </>
          )
        },
        {
          title: "5. Популярные инструменты и фреймворки",
          content: (
            <>
              <p>К 2026 году индустрия стандартизировалась вокруг нескольких ключевых решений:</p>
              <ul>
                <li><strong>LlamaGuard (Meta):</strong> Специализированная LLM, дообученная именно для классификации безопасности.</li>
                <li><strong>NeMo Guardrails (NVIDIA):</strong> Инструментарий, позволяющий описывать «рельсы» поведения с помощью специального языка (Colang).</li>
                <li><strong>Guardrails AI:</strong> Популярный open-source фреймворк, сфокусированный на валидации выходов LLM в стиле Pydantic-схем.</li>
              </ul>
              <p>Выбор инструмента зависит от ваших целей: нужна ли вам простая фильтрация (LlamaGuard) или сложный контроль логики диалога (NeMo).</p>
            </>
          )
        }
      ]
    }
  };

  const currentContent = t[lang as 'en' | 'ru'];

  return (
    <div className="space-y-12 text-slate-300">
      {currentContent.chapters.map((chapter, idx) => (
        <section key={idx} className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-l-4 border-green-500 pl-4">
            {chapter.title}
          </h2>
          <div className="leading-relaxed space-y-4">
            {chapter.content}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LlmGuardrailsTheory;
