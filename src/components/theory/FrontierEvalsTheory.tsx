import React from 'react';

export default function FrontierEvalsTheory({ lang }: { lang: string }) {
  if (lang === 'ru') {
    return (
      <>
        <section>
          <h2>На границе познания</h2>
          <p>
            Представьте тест, ответы на который нельзя найти ни в одном учебнике, ни на одном форуме в интернете. 
            Это и есть <strong>Frontier Evals</strong> — тесты, которые проверяют, способен ли ИИ рассуждать (reasoning) 
            в условиях полной новизны.
          </p>
          <p>
            Старые бенчмарки (MMLU, ARC) страдают от <strong>контаминации</strong> (contamination): модели 
            просто &quot;вызубрили&quot; ответы во время обучения. Фронтирные тесты направлены на то, чтобы отличить 
            реальный интеллект от заученного шаблона.
          </p>
        </section>

        <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
          <h3 className="text-emerald-500 mt-0">Ключевая аналогия: Школьный экзамен vs Научное открытие</h3>
          <p className="mb-0">
            <strong>Обычный бенчмарк:</strong> Это школьный тест по истории. Ответы известны, нужно просто их вспомнить.<br />
            <strong>Frontier Eval:</strong> Это научная лаборатория, где вам нужно решить проблему, с которой еще не сталкивался никто в мире. Здесь нечего вспоминать — нужно <em>думать</em>.
          </p>
        </section>

        <section>
          <h3>Humanity&apos;s Last Exam (Последний экзамен человечества)</h3>
          <p>
            Этот бенчмарк, созданный Scale AI совместно с учеными, содержит вопросы по биологии, химии и физике 
            такой сложности, что на них могут ответить лишь считанные эксперты в мире. И самое главное — этих вопросов 
            никогда не было в публичном доступе.
          </p>
          <p>
            Когда модели &quot;насыщают&quot; бенчмарк (достигают 90%+ точности), он становится бесполезным. Мы переходим к 
            новым испытаниям — <strong>реальным задачам</strong> из индустрии, например, поиску новых лекарств или 
            оптимизации чипов.
          </p>
        </section>

        <section>
          <h3>Scaling Compute at Test-Time</h3>
          <p>
            Новое поколение моделей (режим рассуждений) использует <strong>Test-time compute</strong>. 
            Вместо того чтобы выдать первый попавшийся ответ, модель &quot;тратит время на раздумья&quot;: она проверяет 
            собственные гипотезы, ищет логические ошибки и пробует разные пути решения. 
          </p>
          <p>
            В некоторых сложных тестах моделям дают до 24 часов на раздумья. Это меняет наше представление об ИИ 
            из &quot;быстрого чат-бота&quot; в &quot;глубокого мыслителя&quot;.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>At the Frontier of Knowledge</h2>
        <p>
          Imagine a test where the answers cannot be found in any textbook or on any internet forum.
          This is what <strong>Frontier Evals</strong> are — tests that verify if an AI can reason 
          in conditions of complete novelty.
        </p>
        <p>
          Old benchmarks (MMLU, ARC) suffer from <strong>contamination</strong>: models 
          have simply &quot;memorized&quot; the answers during training. Frontier tests aim to distinguish 
          real intelligence from a learned pattern.
        </p>
      </section>

      <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
        <h3 className="text-emerald-500 mt-0">Key Analogy: School Exam vs. Scientific Discovery</h3>
        <p className="mb-0">
          <strong>Regular Benchmark:</strong> This is a school history test. The answers are known; you just need to recall them.<br />
          <strong>Frontier Eval:</strong> This is a scientific lab where you need to solve a problem that no one in the world has encountered yet. There is nothing to recall — you have to <em>think</em>.
        </p>
      </section>

      <section>
        <h3>Humanity&apos;s Last Exam</h3>
        <p>
          This benchmark, created by Scale AI in collaboration with scientists, contains biology, chemistry, and physics 
          questions of such complexity that only a handful of experts in the world can answer them. Most importantly — 
          these questions have never been publicly available.
        </p>
        <p>
          When models &quot;saturate&quot; a benchmark (reach 90%+ accuracy), it becomes useless. We move to 
          new challenges — <strong>real-world tasks</strong> from industry, such as drug discovery or 
          chip optimization.
        </p>
      </section>

      <section>
        <h3>Scaling Compute at Test-Time</h3>
        <p>
          The new generation of models (reasoning mode) uses <strong>Test-time compute</strong>. 
          Instead of giving the first answer that comes to mind, the model &quot;spends time thinking&quot;: it checks 
          its own hypotheses, looks for logical errors, and tries different solution paths.
        </p>
        <p>
          In some complex tests, models are given up to 24 hours to think. This shifts our perception of AI 
          from a &quot;fast chatbot&quot; to a &quot;deep thinker.&quot;
        </p>
      </section>
    </>
  );
}
