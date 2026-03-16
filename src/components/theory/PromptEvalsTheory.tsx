import React from 'react';
import { ClipboardCheck, Target, Zap, ShieldCheck } from 'lucide-react';

export default function PromptEvalsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Chapter 1: The Vibe Check vs. Evals */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
            <ClipboardCheck className="text-cyan-500" />
            {lang === 'ru' ? 'Глава 1: От "вайб-чека" к метрикам' : 'Chapter 1: From "Vibe Check" to Metrics'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Когда вы только начинаете работать с LLM, вы обычно делаете "vibe check" — задаете несколько вопросов, видите, что ответы выглядят адекватно, и решаете, что всё работает. Это главная ловушка AI-разработки.'
                : 'When you start working with LLMs, you usually do a "vibe check"—you ask a few questions, see that the answers look decent, and decide it works. This is the main trap of AI development.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Evals (оценки) — это систематический способ измерения качества ответов. Без них вы не можете быть уверены, что новая версия промпта или модели не сломала что-то, что работало раньше (регрессия).'
                : 'Evals (evaluations) are a systematic way to measure answer quality. Without them, you cannot be sure that a new version of a prompt or model hasn\'t broken something that previously worked (regression).'}
            </p>
          </div>
        </div>
      </section>
      {/* Chapter 2: The Three Types of Evals */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? 'Детерминированные' : 'Deterministic'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Простые проверки: содержит ли ответ JSON? Есть ли в нём ссылка? Длина текста в пределах нормы? (Python/Regex)'
                : 'Simple checks: Does the answer contain JSON? Is there a link? Is the text length within limits? (Python/Regex)'}
            </p>
          </div>
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              {lang === 'ru' ? 'LLM-as-a-Judge' : 'LLM-as-a-Judge'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Более мощная модель (например, GPT-4o) оценивает ответ слабой модели по шкале от 1 до 5 или по критериям (тон, точность, дружелюбие).'
                : 'A more powerful model (e.g., GPT-4o) evaluates the response of a weaker model on a 1-5 scale or based on criteria (tone, accuracy, friendliness).'}
            </p>
          </div>
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 text-amber-400">
              {lang === 'ru' ? 'Human-in-the-loop' : 'Human-in-the-loop'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Золотой стандарт. Эксперты размечают ответы. Дорого и медленно, но необходимо для создания эталонного набора данных.'
                : 'The gold standard. Experts label responses. Expensive and slow, but necessary for creating a ground-truth dataset.'}
            </p>
          </div>
        </div>
      </section>
      {/* Chapter 3: Building a Release Gate */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-rose-400">
            <ShieldCheck className="text-rose-500" />
            {lang === 'ru' ? 'Глава 2: Release Gate и жизненный цикл' : 'Chapter 2: Release Gate and Lifecycle'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Release Gate — это порог качества, который промпт должен пройти перед выходом в продакшен. Например: "Точность извлечения данных > 95% при 0% галлюцинаций в критических полях".'
                : 'A Release Gate is a quality threshold a prompt must pass before production. For example: "Data extraction accuracy > 95% with 0% hallucinations in critical fields."'}
            </p>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-4 italic text-sm text-rose-300">
              {lang === 'ru'
                ? 'Главный секрет: ваш набор тестов (eval set) должен расти каждый раз, когда вы находите баг. Нашли ошибку в чате? Добавьте этот запрос в эвалы как новый тест-кейс.'
                : 'The main secret: your eval set must grow every time you find a bug. Found a mistake in chat? Add that query to your evals as a new test case.'}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Итог для инженера' : 'Engineer\'s Summary'}
        </h3>
        <p className="text-neutral-300">
          {lang === 'ru'
            ? 'Если вы не измеряете качество своего промпта числами, вы не занимаетесь разработкой ПО — вы занимаетесь алхимией.'
            : 'If you don\'t measure your prompt quality with numbers, you\'re not doing software engineering — you\'re doing alchemy.'}
        </p>
      </section>
    </div>
  );
}
