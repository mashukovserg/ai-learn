"use client";

import React from 'react';
import Term from '@/components/Term';

interface AiRegulationRuTheoryProps {
  lang: string;
}

const AiRegulationRuTheory: React.FC<AiRegulationRuTheoryProps> = ({ lang }) => {
  const t = {
    en: {
      chapters: [
        {
          title: "1. From Soft Law to Hard Rules",
          content: (
            <>
              <p>For a long time, Russia avoided specific AI legislation, relying on the 2020 Regulation Concept, <Term id="sandbox" lang="en">experimental legal regimes</Term> (EPR), and industry self-regulation through the AI Alliance. The goal was simple: don&apos;t stifle a market that accounts for about 2% of the global total.</p>
              <p>However, by late 2025, the &quot;soft&quot; approach was deemed insufficient. Following high-level government meetings in December 2025, the Ministry of Digital Development was tasked with drafting a comprehensive law. On <strong>March 18, 2026</strong>, the draft federal law on the state regulation of AI was officially published. This isn&apos;t just a vision anymore—it&apos;s a text with specific, binding norms.</p>
            </>
          )
        },
        {
          title: "2. Key Provisions: Marking & Risk Levels",
          content: (
            <>
              <p>The 2026 law introduces several critical requirements for AI developers and platforms:</p>
              <ul>
                <li><strong>AI Content Marking:</strong> Social networks and video platforms must verify that AI-generated audiovisual content is marked. If a creator fails to mark it, the platform must do so or remove the content. Parallel legislation requires permanent, machine-readable metadata tags.</li>
                <li><strong>Risk Classification:</strong> AI systems are divided into levels, from minimal to unacceptable. Unacceptable systems (like &quot;social scoring&quot;) are banned. High-risk systems require mandatory state registration and certification from <Term id="fstec" lang="en">FSTEC</Term> and <Term id="fsb" lang="en">FSB</Term> if used on critical infrastructure.</li>
              </ul>
              <p>Non-compliance with marking rules can lead to fines ranging from 10k rubles for individuals to 500k rubles for legal entities <em>per episode</em>.</p>
            </>
          )
        },
        {
          title: "3. The Four-Way Split of Liability",
          content: (
            <>
              <p>The draft law distributes legal <Term id="liability" lang="en">liability</Term> for harm among four parties: the <strong>Model Developer</strong>, the <strong>System Operator</strong>, the <strong>Service Owner</strong>, and the <strong>End User</strong>—proportionate to their degree of fault.</p>
              <p>A developer may be cleared if they took all reasonable steps to prevent harm, while operators of high-risk systems are required to have mandatory liability insurance. On the criminal side, using AI for illegal purposes is now an &quot;aggravating circumstance&quot; in the Criminal Code, with up to 6 years of imprisonment for AI-assisted cyber-fraud.</p>
            </>
          )
        },
        {
          title: "4. Traditional Values & Cultural Filters",
          content: (
            <>
              <p>A unique feature of the March 2026 law is the explicit requirement that AI development and application must account for <strong>&quot;traditional Russian spiritual and moral values&quot;</strong>—including dignity, patriotism, service to the Fatherland, and justice.</p>
              <p>Developers are also prohibited from using neural networks to manipulate human behavior. For product teams, this means implementing sophisticated <Term id="guardrails" lang="en">Guardrails</Term> to filter content that might be deemed &quot;contrary to constitutional order or traditional values.&quot; This transforms ideological requirements into complex engineering and <Term id="red-teaming" lang="en">red-teaming</Term> tasks.</p>
            </>
          )
        },
        {
          title: "5. Impact on Product Teams",
          content: (
            <>
              <p>If you are building for the Russian market in 2026, the roadmap is clear:</p>
              <ul>
                <li><strong>Engineering Marking:</strong> You must build mechanisms for both visible and machine-readable marking into your generation pipelines now.</li>
                <li><strong>Risk Inventory:</strong> Assess if your product (MedTech, FinTech, HR-scoring) falls into the high-risk category to prepare for certification.</li>
                <li><strong>Data Documentation:</strong> With ongoing discussions about mandatory dataset disclosure, you should begin documenting the origin, format, and volume of your training data immediately.</li>
              </ul>
              <p>The law is expected to enter full force on <strong>September 1, 2027</strong>, but specific marking requirements for video may arrive as early as late 2026.</p>
            </>
          )
        }
      ]
    },
    ru: {
      chapters: [
        {
          title: "1. От «мягкого» права к жестким нормам",
          content: (
            <>
              <p>Россия долго обходилась без специального закона об ИИ, опираясь на Концепцию 2020 года, <Term id="sandbox" lang="ru">экспериментальные правовые режимы</Term> (ЭПР) и саморегулирование через Альянс в сфере ИИ. Цель была простой: не задушить рынок, составляющий около 2% мирового.</p>
              <p>Однако к концу 2025 года стало ясно, что «мягкого» подхода недостаточно. После межведомственных совещаний в декабре 2025 года Минцифры получило поручение подготовить полноценный закон. <strong>18 марта 2026 года</strong> был официально опубликован проект федерального закона о государственном регулировании ИИ. Это уже не просто концепция — это текст с конкретными, обязательными нормами.</p>
            </>
          )
        },
        {
          title: "2. Ключевые положения: Маркировка и уровни риска",
          content: (
            <>
              <p>Закон 2026 года вводит несколько критических требований для разработчиков и платформ:</p>
              <ul>
                <li><strong>Маркировка ИИ-контента:</strong> Соцсети и видеохостинги обязаны проверять наличие маркировки у материалов, созданных ИИ. Если автор ее не поставил — платформа должна сделать это сама или удалить контент. Параллельные нормы требуют встраивания неудаляемых машиночитаемых меток в метаданные.</li>
                <li><strong>Классификация по рискам:</strong> Системы ИИ делятся на уровни — от минимального до неприемлемого. Системы с неприемлемым риском (например, «социальный скоринг») запрещаются. Высокорисковые системы требуют обязательной госрегистрации и сертификации <Term id="fstec" lang="ru">ФСТЭК</Term> и <Term id="fsb" lang="ru">ФСБ</Term> при использовании на объектах КИИ.</li>
              </ul>
              <p>За нарушения правил маркировки предусмотрены штрафы: от 10 тыс. руб. для граждан до 500 тыс. руб. для юрлиц <em>за каждый эпизод</em>.</p>
            </>
          )
        },
        {
          title: "3. Четырехстороннее распределение ответственности",
          content: (
            <>
              <p>Законопроект распределяет юридическую <Term id="liability" lang="ru">ответственность</Term> за вред между четырьмя субъектами: <strong>Разработчиком модели</strong>, <strong>Оператором системы</strong>, <strong>Владельцем сервиса</strong> и <strong>Конечным пользователем</strong> — соразмерно степени их вины.</p>
              <p>Разработчик может быть освобожден, если принял все меры для предотвращения вреда, в то время как для операторов высокорисковых систем вводится обязательное страхование ответственности. В уголовной плоскости использование ИИ в преступных целях становится «отягчающим обстоятельством», а за кибермошенничество с ИИ грозит до 6 лет лишения свободы.</p>
            </>
          )
        },
        {
          title: "4. Традиционные ценности и культурные фильтры",
          content: (
            <>
              <p>Уникальная черта закона марта 2026 года — прямое требование учитывать при разработке ИИ <strong>«традиционные российские духовно-нравственные ценности»</strong>: достоинство, патриотизм, служение Отечеству, справедливость.</p>
              <p>Также запрещается использование нейросетей для манипулирования поведением людей. Для продуктовых команд это означает необходимость внедрения продвинутых <Term id="guardrails" lang="ru">Guardrails</Term> для фильтрации контента, который может быть признан «противоречащим конституционному строю или традиционным ценностям». Это превращает идеологические требования в сложную инженерную задачу по <Term id="red-teaming" lang="ru">ред-тимингу</Term>.</p>
            </>
          )
        },
        {
          title: "5. Что это значит для продуктовых команд",
          content: (
            <>
              <p>Если вы создаете продукт для российского рынка в 2026 году, ваш план действий понятен:</p>
              <ul>
                <li><strong>Инженерия маркировки:</strong> Уже сейчас нужно встраивать механизмы видимой и невидимой маркировки в пайплайны генерации.</li>
                <li><strong>Инвентаризация рисков:</strong> Оцените, попадает ли ваш продукт (MedTech, FinTech, HR-скоринг) в категорию высокого риска, чтобы начать подготовку к сертификации.</li>
                <li><strong>Документирование данных:</strong> На фоне дискуссий об обязательном раскрытии датасетов стоит начать фиксировать происхождение, формат и объем обучающих данных уже сегодня.</li>
              </ul>
              <p>Ожидается, что закон вступит в полную силу <strong>1 сентября 2027 года</strong>, однако отдельные нормы по маркировке видео могут заработать уже в конце 2026-го.</p>
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

export default AiRegulationRuTheory;
