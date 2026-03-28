"use client";

import React from 'react';
import Term from '@/components/Term';

interface AiRegulationEuTheoryProps {
  lang: string;
}

const AiRegulationEuTheory: React.FC<AiRegulationEuTheoryProps> = ({ lang }) => {
  const t = {
    en: {
      chapters: [
        {
          title: "1. The Global Blueprint",
          content: (
            <>
              <p>The <strong>EU AI Act</strong>, adopted in early 2024 and fully in effect by 2026, is the world&apos;s first comprehensive horizontal law on Artificial Intelligence. It doesn&apos;t just regulate specific products; it regulates the technology itself based on how it is used.</p>
              <p>The law has a significant <strong>extra-territorial effect</strong>. If you are a developer in Silicon Valley or Shanghai, but your AI is used by citizens within the European Union, you must comply with these rules. This phenomenon is known as the <Term id="brussels-effect" lang="en">Brussels Effect</Term>.</p>
            </>
          )
        },
        {
          title: "2. The Risk-Based Approach",
          content: (
            <>
              <p>The EU doesn&apos;t ban AI; it classifies it into four levels of risk:</p>
              <ul>
                <li><strong>Unacceptable Risk:</strong> Prohibited practices. This includes social scoring, cognitive behavioral manipulation, and real-time biometric identification in public spaces (with narrow exceptions).</li>
                <li><strong>High Risk:</strong> Critical systems in health, transport, education, and law enforcement. These require strict <Term id="conformity-assessment" lang="en">Conformity Assessments</Term> and human oversight.</li>
                <li><strong>Limited Risk:</strong> Systems with transparency obligations. For example, users must be informed they are interacting with an AI (chatbots, deepfakes).</li>
                <li><strong>Minimal Risk:</strong> Most AI applications, like spam filters or video games, which are permitted without additional legal constraints.</li>
              </ul>
            </>
          )
        },
        {
          title: "3. High-Risk AI Requirements",
          content: (
            <>
              <p>If your AI is deemed &quot;High Risk,&quot; you face a rigorous compliance checklist before you can enter the market:</p>
              <ol>
                <li><strong>Data Governance:</strong> Training datasets must be high-quality, relevant, and free from <Term id="bias" lang="en">biases</Term>.</li>
                <li><strong>Technical Documentation:</strong> You must maintain a detailed &quot;living&quot; record of the system&apos;s architecture and decision-making logic.</li>
                <li><strong>Logging:</strong> The system must automatically record events to ensure traceability.</li>
                <li><strong>Human Oversight:</strong> High-risk systems must be designed so they can be monitored and overridden by a human.</li>
              </ol>
            </>
          )
        },
        {
          title: "4. General-Purpose AI (GPAI)",
          content: (
            <>
              <p>Large models like GPT-4, Claude, or Llama fall under the <strong>GPAI</strong> (General-Purpose AI) category. Developers of these foundation models have specific transparency obligations:</p>
              <ul>
                <li>Publishing a detailed summary of the content used for training.</li>
                <li>Complying with EU copyright law.</li>
                <li>Providing technical documentation to the AI Office.</li>
              </ul>
              <p>Models with &quot;systemic risk&quot; (those trained with huge <Term id="compute" lang="en">compute</Term> power) have additional requirements, including adversarial testing and incident reporting.</p>
            </>
          )
        },
        {
          title: "5. Enforcement and Fines",
          content: (
            <>
              <p>The EU AI Act is &quot;not a paper tiger.&quot; Enforcement is handled by national authorities and a central EU AI Office. The penalties for non-compliance are among the highest in the world:</p>
              <ul>
                <li><strong>€35 million or 7% of global turnover</strong> for prohibited practices.</li>
                <li><strong>€15 million or 3% of global turnover</strong> for most other violations.</li>
                <li><strong>€7.5 million or 1.5% of global turnover</strong> for providing incorrect information to regulators.</li>
              </ul>
              <p>For product teams, the EU AI Act makes &quot;Compliance by Design&quot; a business necessity rather than a legal afterthought.</p>
            </>
          )
        }
      ]
    },
    ru: {
      chapters: [
        {
          title: "1. Глобальный чертеж регулирования",
          content: (
            <>
              <p><strong>EU AI Act</strong>, принятый в начале 2024 года и полностью вступивший в силу к 2026-му, является первым в мире комплексным горизонтальным законом об искусственном интеллекте. Он не просто регулирует отдельные продукты — он регулирует саму технологию в зависимости от того, как она используется.</p>
              <p>Закон обладает значительным <strong>экстерриториальным действием</strong>. Если вы разработчик в Кремниевой долине или Шанхае, но ваш ИИ используется гражданами внутри Европейского союза, вы обязаны соблюдать эти правила. Это явление известно как <Term id="brussels-effect" lang="ru">Эффект Брюсселя</Term>.</p>
            </>
          )
        },
        {
          title: "2. Риск-ориентированный подход",
          content: (
            <>
              <p>ЕС не запрещает ИИ; он классифицирует его на четыре уровня риска:</p>
              <ul>
                <li><strong>Неприемлемый риск:</strong> Запрещенные практики. Сюда входят социальный скоринг, манипуляция поведением и удаленная биометрия в общественных местах (за редкими исключениями).</li>
                <li><strong>Высокий риск:</strong> Критические системы в здравоохранении, транспорте, образовании и правоохранительных органах. Они требуют строгой <Term id="conformity-assessment" lang="ru">Оценки соответствия</Term> и контроля со стороны человека.</li>
                <li><strong>Ограниченный риск:</strong> Системы с обязательствами по прозрачности. Например, пользователи должны быть проинформированы о том, что они общаются с ИИ (чат-боты, дипфейки).</li>
                <li><strong>Минимальный риск:</strong> Большинство приложений ИИ, таких как спам-фильтры или видеоигры, которые разрешены без дополнительных юридических ограничений.</li>
              </ul>
            </>
          )
        },
        {
          title: "3. Требования к ИИ высокого риска",
          content: (
            <>
              <p>Если ваш ИИ признан «высокорисковым», вы сталкиваетесь с серьезным чек-листом перед выходом на рынок:</p>
              <ol>
                <li><strong>Управление данными:</strong> Обучающие наборы данных должны быть качественными, релевантными и очищенными от <Term id="bias" lang="ru">предвзятости (bias)</Term>.</li>
                <li><strong>Техническая документация:</strong> Вы должны вести подробный «живой» отчет об архитектуре системы и логике принятия решений.</li>
                <li><strong>Логирование:</strong> Система должна автоматически записывать события для обеспечения прослеживаемости.</li>
                <li><strong>Человеческий надзор:</strong> Системы должны быть спроектированы так, чтобы человек мог контролировать их работу и отменить решение ИИ.</li>
              </ol>
            </>
          )
        },
        {
          title: "4. ИИ общего назначения (GPAI)",
          content: (
            <>
              <p>Большие модели, такие как GPT-4, Claude или Llama, подпадают под категорию <strong>GPAI</strong> (ИИ общего назначения). Разработчики таких базовых моделей имеют специфические обязательства:</p>
              <ul>
                <li>Публикация подробного резюме контента, использованного для обучения.</li>
                <li>Соблюдение авторского права ЕС.</li>
                <li>Предоставление технической документации в европейский Офис по ИИ.</li>
              </ul>
              <p>Модели с «системным риском» (обученные с использованием огромных <Term id="compute" lang="ru">вычислительных мощностей</Term>) имеют дополнительные требования, включая состязательное тестирование (red-teaming) и отчетность об инцидентах.</p>
            </>
          )
        },
        {
          title: "5. Исполнение и штрафы",
          content: (
            <>
              <p>EU AI Act — это не «бумажный тигр». За исполнением следят национальные органы и центральный Офис ИИ в ЕС. Штрафы за несоблюдение являются одними из самых высоких в мире:</p>
              <ul>
                <li><strong>€35 млн или 7% мирового оборота</strong> за запрещенные практики.</li>
                <li><strong>€15 млн или 3% мирового оборота</strong> за большинство других нарушений.</li>
                <li><strong>€7,5 млн или 1,5% мирового оборота</strong> за предоставление недостоверной информации регуляторам.</li>
              </ul>
              <p>Для продуктовых команд EU AI Act делает принцип «Соответствие через дизайн» (Compliance by Design) бизнес-необходимостью, а не юридической формальностью.</p>
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

export default AiRegulationEuTheory;
