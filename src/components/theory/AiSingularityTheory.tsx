import React from 'react';
import { Sparkles, Zap, ShieldAlert, Target } from 'lucide-react';

export default function AiSingularityTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Chapter 1: The Event Horizon of Intelligence */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-400">
            <Sparkles className="text-amber-500" />
            {lang === 'ru' ? 'Глава 1: Горизонт событий интеллекта' : 'Chapter 1: The Event Horizon of Intelligence'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Представьте черную дыру. У неё есть "горизонт событий" — точка, за которой законы физики, какими мы их знаем, перестают работать, и мы не можем предсказать, что внутри. Технологическая сингулярность — это аналогичная концепция для будущего человечества.'
                : 'Imagine a black hole. It has an "event horizon"—a point beyond which the laws of physics as we know them cease to function, and we cannot predict what lies inside. The technological singularity is a similar concept for the future of humanity.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В контексте AI это момент, когда искусственный интеллект становится способен к рекурсивному самосовершенствованию. Он создаёт версию себя чуть умнее, которая затем создаёт ещё более умную версию, и так до бесконечности за крайне короткое время. Этот процесс называют "интеллектуальным взрывом".'
                : 'In the context of AI, it is the moment when artificial intelligence becomes capable of recursive self-improvement. It creates a slightly smarter version of itself, which then creates an even smarter version, and so on, infinitely and in an extremely short time. This process is called an "intelligence explosion."' }
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Three Pillars of the Debate */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-400">
              <Zap size={20} />
              {lang === 'ru' ? 'Оптимисты (Accelerationists)' : 'Optimists (Accelerationists)'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Верят, что сингулярность решит все проблемы человечества: от старения до энергетического кризиса. Главный лозунг — e/acc (effective accelerationism): ускорять прогресс любой ценой.'
                : 'Believe that the singularity will solve all of humanity\'s problems: from aging to the energy crisis. The main slogan is e/acc (effective accelerationism): accelerate progress at any cost.'}
            </p>
          </div>
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-rose-400">
              <ShieldAlert size={20} />
              {lang === 'ru' ? 'Скептики и Doomers' : 'Skeptics and Doomers'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Указывают на проблему "выравнивания" (alignment). Если сверхразум не будет разделять человеческие ценности, он может уничтожить нас просто как побочный продукт выполнения своей цели (проблема "скрепок" Элиезера Юдковского).'
                : 'Point to the "alignment" problem. If superintelligence does not share human values, it could destroy us simply as a byproduct of fulfilling its goal (Eliezer Yudkowsky\'s "paperclip maximizer" problem).'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: Physical Limits and Reality Check */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
            <Target className="text-blue-500" />
            {lang === 'ru' ? 'Глава 2: Физические пределы и проверка реальностью' : 'Chapter 2: Physical Limits and Reality Check'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Критики идеи сингулярности, такие как Ян Лекун или Родни Брукс, напоминают о "стенах", в которые может упереться экспоненциальный рост:'
                : 'Critics of the singularity idea, such as Yann LeCun or Rodney Brooks, point to the "walls" that exponential growth might hit:'}
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6 ml-4">
              <li>{lang === 'ru' ? 'Доступность чистой энергии и литографических мощностей.' : 'Availability of clean energy and lithographic capacity.'}</li>
              <li>{lang === 'ru' ? 'Закон убывающей отдачи от данных: после прочтения всего интернета обучаться становится сложнее.' : 'Law of diminishing returns on data: after reading the entire internet, learning becomes harder.'}</li>
              <li>{lang === 'ru' ? 'Сложность взаимодействия с физическим миром (робототехника отстаёт от софта).' : 'The complexity of interacting with the physical world (robotics lags behind software).'}</li>
            </ul>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 italic text-sm text-blue-300">
              {lang === 'ru'
                ? 'Сингулярность — это не только про код, но и про атомы. Пока AI заперт в дата-центрах, его влияние на реальность ограничено пропускной способностью наших интерфейсов.'
                : 'Singularity is not just about code, but about atoms. As long as AI is locked in data centers, its impact on reality is limited by the bandwidth of our interfaces.'}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-br from-amber-500/10 to-emerald-500/10 border border-amber-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Что это значит для нас?' : 'What does this mean for us?'}
        </h3>
        <p className="text-neutral-300">
          {lang === 'ru'
            ? 'Даже если сингулярность — это миф, сама подготовка к ней заставляет нас решать фундаментальные вопросы безопасности и этики AI уже сегодня.'
            : 'Even if the singularity is a myth, preparing for it forces us to solve fundamental questions of AI safety and ethics today.'}
        </p>
      </section>
    </div>
  );
}
