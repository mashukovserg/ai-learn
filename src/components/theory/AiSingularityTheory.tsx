"use client";

import React from 'react';

export default function AiSingularityTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">

      {/* Chapter 1 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 1: Горизонт событий интеллекта' : 'Chapter 1: The Event Horizon of Intelligence'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Представьте чёрную дыру. У неё есть "горизонт событий" — точка, за которой законы физики, какими мы их знаем, перестают работать и мы не можем предсказать, что происходит внутри. Технологическая сингулярность — аналогичная концепция для будущего человечества. В контексте AI это момент, когда искусственный интеллект становится способен к рекурсивному самосовершенствованию: он создаёт версию себя чуть умнее, которая затем создаёт ещё более умную версию, и так до бесконечности за крайне короткое время. Этот процесс называют "интеллектуальным взрывом".'
              : 'Imagine a black hole. It has an "event horizon" — a point beyond which the laws of physics as we know them cease to function, and we cannot predict what lies inside. The technological singularity is a similar concept for the future of humanity. In the context of AI, it is the moment when artificial intelligence becomes capable of recursive self-improvement: it creates a slightly smarter version of itself, which then creates an even smarter version, and so on, infinitely and in an extremely short time. This process is called an "intelligence explosion."'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Термин был введён математиком и учёным-компьютерщиком Джоном фон Нейманом в 1950-х годах, а математик И.Дж. Гуд формализовал концепцию "ультраинтеллектуальной машины" в 1965-м. Рэй Курцвайль популяризировал идею в книге "Сингулярность уже близко" (2005), предсказав наступление этого события к 2045 году. С тех пор сингулярность превратилась из нишевой гипотезы в один из центральных вопросов современной философии, политики и бизнеса, связанных с технологиями. Понять её — значит понять, почему инвесторы вкладывают сотни миллиардов в AI, а правительства спешно разрабатывают регуляторные рамки.'
              : 'The term was introduced by mathematician and computer scientist John von Neumann in the 1950s, and mathematician I.J. Good formalized the concept of the "ultraintelligent machine" in 1965. Ray Kurzweil popularized the idea in his book "The Singularity Is Near" (2005), predicting the event by 2045. Since then, the singularity has transformed from a niche hypothesis into one of the central questions of modern technology philosophy, policy, and business. Understanding it means understanding why investors pour hundreds of billions into AI and why governments rush to develop regulatory frameworks.'}
          </p>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 2: Два лагеря — Акселерационисты и Доомеры' : 'Chapter 2: Two Camps — Accelerationists and Doomers'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Дебаты о сингулярности раскололи технологическое сообщество на два непримиримых лагеря, каждый из которых имеет собственную внутреннюю логику. Оптимисты-акселерационисты (e/acc — effective accelerationism) верят, что сингулярность решит большинство проблем человечества: победит старение и болезни, ликвидирует энергетический дефицит, создаст изобилие ресурсов. Их аргумент прост: ИИ — это инструмент, и как любой инструмент, он станет благом в руках цивилизации, которая уже десятки тысяч лет в целом справлялась с технологическими революциями. Сдерживать прогресс ради мифических рисков — значит лишать миллиарды людей будущего, которое они могли бы получить.'
              : 'The singularity debate has split the technology community into two irreconcilable camps, each with its own internal logic. Optimist-accelerationists (e/acc — effective accelerationism) believe that the singularity will solve most of humanity\'s problems: defeat aging and disease, eliminate energy scarcity, and create abundance. Their argument is simple: AI is a tool, and like any tool, it will be a benefit in the hands of a civilization that has managed technological revolutions for tens of thousands of years. Restraining progress for the sake of mythical risks means denying billions of people a future they could have had.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Скептики и так называемые доомеры (doomers) указывают на фундаментальную проблему выравнивания (alignment): если сверхразум не будет разделять человеческие ценности, он может уничтожить нас просто как побочный продукт выполнения своей цели. Элиезер Юдковский сформулировал это через мысленный эксперимент: ИИ, запрограммированный максимизировать производство скрепок, в конечном счёте превратит всю доступную материю — включая людей — в скрепки. Не из злобы, а просто потому что это оптимально для его целевой функции. Философ Ник Бостром в книге "Сверхинтеллект" (2014) разработал эту идею в детальный анализ экзистенциального риска.'
              : 'Skeptics and so-called doomers point to a fundamental alignment problem: if a superintelligence does not share human values, it could destroy us simply as a byproduct of pursuing its goal. Eliezer Yudkowsky formulated this through a thought experiment: an AI programmed to maximize paperclip production would ultimately convert all available matter — including humans — into paperclips. Not out of malice, but simply because that is optimal for its objective function. Philosopher Nick Bostrom in "Superintelligence" (2014) developed this idea into a detailed analysis of existential risk.'}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="bg-card-dark border border-emerald-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 text-emerald-400">
              {lang === 'ru' ? 'Оптимисты (e/acc)' : 'Optimists (e/acc)'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Ускорение прогресса — это моральный долг. Технологии всегда создавали больше возможностей, чем угроз. Сингулярность победит смерть, болезни и нищету.'
                : 'Accelerating progress is a moral duty. Technology has always created more opportunities than threats. The singularity will defeat death, disease, and poverty.'}
            </p>
          </div>
          <div className="bg-card-dark border border-rose-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 text-rose-400">
              {lang === 'ru' ? 'Скептики / Doomers' : 'Skeptics / Doomers'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Проблема выравнивания — нерешённая инженерная задача. Сверхразум с нечеловеческими целями может уничтожить нас без какого-либо злого умысла.'
                : 'The alignment problem is an unsolved engineering challenge. A superintelligence with non-human goals could destroy us with no malicious intent whatsoever.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 3: Физические пределы и проверка реальностью' : 'Chapter 3: Physical Limits and Reality Check'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Критики идеи сингулярности, такие как Ян Лекун или Родни Брукс, напоминают о "стенах", в которые может упереться экспоненциальный рост. Первая — доступность чистой энергии и полупроводниковых производственных мощностей. Обучение флагманских моделей сегодня уже потребляет столько электричества, сколько небольшой город. Вторая — закон убывающей отдачи от данных: после прочтения всего интернета качество новых обучающих примеров стремительно падает, а синтетические данные пока не доказали способность полностью заменить реальные. Третья — сложность взаимодействия с физическим миром: робототехника по-прежнему катастрофически отстаёт от возможностей программного ИИ.'
              : 'Critics of the singularity idea, such as Yann LeCun or Rodney Brooks, point to "walls" that exponential growth might hit. The first is the availability of clean energy and semiconductor manufacturing capacity. Training frontier models already consumes as much electricity as a small city. The second is the law of diminishing returns on data: after reading the entire internet, the quality of new training examples drops sharply, and synthetic data has not yet proven it can fully replace real-world data. The third is the difficulty of interacting with the physical world: robotics still catastrophically lags behind software AI capabilities.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Даже если мы предположим, что все технические барьеры будут преодолены, остаётся вопрос интерпретируемости: как мы узнаем, что ИИ действительно решает нашу задачу, а не её поверхностное приближение? Современные нейросети — "чёрные ящики": невозможно с уверенностью сказать, что именно они оптимизируют. Это означает, что даже без злого умысла система может вести себя непредсказуемо при выходе за границы обучающего распределения. Проблема не в том, что ИИ станет "злым" — проблема в том, что он может оказаться безразличным к нашим интересам.'
              : 'Even assuming all technical barriers are overcome, the question of interpretability remains: how do we know that an AI is actually solving our problem and not a superficial approximation of it? Modern neural networks are "black boxes": it is impossible to say with certainty what exactly they are optimizing. This means that even without malicious intent, a system can behave unpredictably when it moves beyond its training distribution. The problem is not that AI will become "evil" — the problem is that it may simply be indifferent to our interests.'}
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 italic text-sm text-blue-300">
            {lang === 'ru'
              ? 'Сингулярность — это не только про код, но и про атомы. Пока AI заперт в дата-центрах, его влияние на реальность ограничено пропускной способностью наших интерфейсов с физическим миром.'
              : 'Singularity is not just about code, but about atoms. As long as AI is locked in data centers, its impact on reality is limited by the bandwidth of our interfaces with the physical world.'}
          </div>
        </div>
      </div>

      {/* Chapter 4 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 4: Ключевые голоса в дебатах' : 'Chapter 4: Key Voices in the Debate'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Дебаты о сингулярности — это не абстрактная философия: в них участвуют люди, которые буквально строят это будущее. Рэй Курцвайль, директор по инженерии в Google, остаётся главным оптимистом: он предсказывает AGI к 2029 году и сингулярность к 2045-му, основываясь на экспоненциальном росте вычислительных мощностей. Ник Бостром, философ Оксфордского университета, сформулировал наиболее детальный академический аргумент в пользу экзистенциального риска в книге "Сверхинтеллект" (2014). Его основная идея: первая организация, создавшая AGI, получит такое стратегическое преимущество, что гонка будет происходить слишком быстро для формирования надлежащих мер безопасности.'
              : 'The singularity debate is not abstract philosophy: it involves people who are literally building this future. Ray Kurzweil, Director of Engineering at Google, remains the chief optimist: he predicts AGI by 2029 and the singularity by 2045, based on the exponential growth of computing power. Nick Bostrom, philosopher at Oxford University, formulated the most detailed academic argument for existential risk in "Superintelligence" (2014). His core idea: the first organization to create AGI will gain such a strategic advantage that the race will happen too quickly for proper safety measures to form.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Джеффри Хинтон — "крёстный отец глубокого обучения" — в 2023 году покинул Google, публично заявив о своих опасениях относительно AI. Его позиция примечательна: он признаёт, что сам не понимает всех рисков, но уверен, что они реальны и недооцениваются. Ян Лекун, научный директор Meta AI, занимает полярно противоположную позицию: по его мнению, нынешние LLM принципиально неспособны достичь AGI из-за архитектурных ограничений — у них нет моделей реального мира и настоящего понимания причинно-следственных связей. Илон Маск основал компанию xAI для создания "истинно полезного AGI" и одновременно финансирует исследования по безопасности AI. Эти позиции отражают реальную неопределённость: даже люди, строящие системы, не пришли к консенсусу.'
              : 'Geoffrey Hinton — the "godfather of deep learning" — left Google in 2023, publicly stating his concerns about AI. His position is notable: he admits he does not fully understand all the risks himself, but is confident they are real and underestimated. Yann LeCun, Chief AI Scientist at Meta, holds a diametrically opposite view: in his opinion, current LLMs are fundamentally incapable of reaching AGI due to architectural limitations — they lack real-world models and genuine understanding of cause and effect. Elon Musk founded xAI to build "truly beneficial AGI" while simultaneously funding AI safety research. These positions reflect genuine uncertainty: even the people building the systems have not reached consensus.'}
          </p>
        </div>
      </div>

      {/* Chapter 5 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 5: От мысленного эксперимента к практической повестке' : 'Chapter 5: From Thought Experiment to Practical Agenda'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Независимо от того, состоится ли сингулярность по расписанию Курцвайля или окажется фантастикой, сама подготовка к ней уже меняет мир. Компании и правительства инвестируют в AI safety — не потому что уверены в неизбежности сверхинтеллекта, а потому что неопределённость достаточно высока, чтобы принимать её в расчёт. Именно этот аргумент ("страховка от маловероятного, но катастрофического события") лежит в основе политики ЕС по регулированию AI, инициативы Anthropic по Constitutional AI и большинства корпоративных политик ответственного использования AI.'
              : 'Regardless of whether the singularity arrives on Kurzweil\'s schedule or turns out to be fiction, preparing for it is already changing the world. Companies and governments invest in AI safety — not because they are certain superintelligence is inevitable, but because the uncertainty is high enough to factor in. This "insurance against a low-probability but catastrophic event" argument underlies the EU\'s AI regulation policy, Anthropic\'s Constitutional AI initiative, and most corporate responsible AI policies.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Для практикующих специалистов — продактов, инженеров, предпринимателей — дебаты о сингулярности задают рамку для принятия решений прямо сейчас. Как формулировать целевые функции для AI-систем, чтобы они решали нужную задачу, а не её оптимизированную до абсурда версию? Как проектировать механизмы надзора и отключения? Как объяснять риски стейкхолдерам, которые видят лишь краткосрочную выгоду? Сингулярность может быть далека, но вопросы, которые она ставит, актуальны уже сегодня — при деплое любого AI-продукта в реальный мир.'
              : 'For practitioners — product managers, engineers, entrepreneurs — the singularity debate provides a decision-making framework for right now. How do you formulate objective functions for AI systems so they solve the intended problem rather than an absurdly optimized proxy of it? How do you design oversight and shutdown mechanisms? How do you explain risks to stakeholders who see only short-term gain? The singularity may be far off, but the questions it raises are relevant today — when deploying any AI product into the real world.'}
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-500/10 to-emerald-500/10 border border-amber-500/20 rounded-xl p-6 mt-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-white">
            {lang === 'ru' ? 'Итоговая мысль' : 'Final Thought'}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            {lang === 'ru'
              ? 'Даже если сингулярность — это миф, подготовка к ней заставляет нас решать фундаментальные вопросы безопасности и этики AI прямо сейчас. Это не абстрактная философия — это инженерная задача нашего поколения.'
              : 'Even if the singularity is a myth, preparing for it forces us to solve fundamental questions of AI safety and ethics right now. This is not abstract philosophy — it is the engineering challenge of our generation.'}
          </p>
        </div>
      </div>

    </div>
  );
}
