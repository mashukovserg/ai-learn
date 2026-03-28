"use client";

import React from 'react';

export default function ScalingHypothesisTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">

      {/* Chapter 1 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Суть гипотезы' : 'Chapter 1: The Core Idea'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Гипотеза масштабирования (Scaling Hypothesis) — эмпирическое наблюдение, которое изменило подход к созданию ИИ. Суть проста: производительность нейросетей предсказуемо растёт при одновременном увеличении трёх ресурсов — вычислительной мощности (Compute), объёма данных (Data) и количества параметров модели (Parameters). Это не теорема и не закон природы — это закономерность, обнаруженная исследователями OpenAI и подтверждённая многократно на практике.'
              : 'The Scaling Hypothesis is an empirical observation that transformed how AI systems are built. The core claim is simple: neural network performance grows predictably when three resources are increased simultaneously — computing power (Compute), data volume (Data), and the number of model parameters (Parameters). It is not a theorem or a law of physics — it is a pattern discovered by OpenAI researchers and validated repeatedly in practice.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Исторически ИИ-исследователи тратили годы на разработку умных алгоритмов вручную: правил, эвристик, деревьев решений. Гипотеза масштабирования предложила радикальную альтернативу: вместо изощрённой инженерии — просто больше ресурсов. Огромные нейросети, обученные на огромном количестве текста с огромными вычислительными мощностями, начинают решать задачи, которым их никто не учил. Этот сдвиг произвёл революцию в отрасли и привёл к созданию GPT-3, GPT-4 и всех современных больших языковых моделей.'
              : 'Historically, AI researchers spent years manually crafting clever algorithms: rules, heuristics, decision trees. The Scaling Hypothesis offered a radical alternative: instead of sophisticated engineering, simply add more resources. Massive neural networks trained on massive amounts of text with massive compute begin solving problems no one explicitly taught them. This shift triggered a revolution in the field and led to GPT-3, GPT-4, and all modern large language models.'}
          </p>
          <div className="bg-card border-l-4 border-emerald-500 p-5 rounded-r-lg">
            <p className="text-neutral-300 text-sm leading-relaxed italic">
              {lang === 'ru'
                ? '"Мы не делаем алгоритм умнее — мы делаем его больше." Этот принцип оказался настолько плодотворным, что за несколько лет вычислительные затраты на обучение флагманских моделей выросли в десятки тысяч раз.'
                : '"We don\'t make the algorithm smarter — we make it bigger." This principle proved so fruitful that compute spent on training flagship models grew by tens of thousands of times in just a few years.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 2: Три столпа масштабирования' : 'Chapter 2: The Three Pillars'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Гипотеза масштабирования строится на трёх взаимозависимых ресурсах, которые необходимо увеличивать вместе. Вычисления (Compute) — это общее количество операций с плавающей точкой (FLOPs), выполненных за весь процесс обучения. Именно этот ресурс напрямую связан с финансовыми затратами: аренда тысяч GPU-кластеров стоит миллионы долларов в день. Рост вычислительных мощностей стимулировал гонку между NVIDIA, Google и другими производителями чипов — эта гонка сама по себе стала одной из ключевых историй нашей эпохи.'
              : 'The Scaling Hypothesis rests on three interdependent resources that must grow together. Compute is the total number of floating-point operations (FLOPs) performed across the entire training run. This resource is directly tied to financial cost: renting thousands of GPU clusters costs millions of dollars per day. The race to increase compute has driven competition between NVIDIA, Google, and other chip makers — a story that has become one of the defining narratives of our era.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Данные (Data) — это количество и качество токенов в обучающей выборке. Ранние LLM обучались на сотнях гигабайт текста; современные флагманы потребляют триллионы токенов с интернет-страниц, книг, кода и научных статей. Параметры (<Term id="parameters">Parameters</Term>) — это "веса" или внутренние переменные нейросети, настраиваемые в процессе обучения. Они определяют ёмкость модели: сколько паттернов и знаний она способна "запомнить". Ключевое открытие: эти три ресурса нельзя масштабировать независимо. Если увеличить только параметры без добавления данных — модель начинает переобучаться. Добавить данные без вычислительной мощности — обучение не завершится за разумное время. <Term id="scaling-laws" lang={lang}>Законы масштабирования</Term> описывают, как балансировать между этими тремя ресурсами для достижения оптимального результата.'
              : 'Data is the number and quality of tokens in the training set. Early LLMs trained on hundreds of gigabytes of text; modern frontier models consume trillions of tokens from web pages, books, code, and scientific papers. <Term id="parameters">Parameters</Term> are the "weights" or internal variables of the neural network tuned during training. They define the model\'s capacity: how many patterns and pieces of knowledge it can "memorize." The critical insight: these three resources cannot be scaled independently. Increasing only parameters without adding data leads to overfitting. Adding data without compute means training will not complete in a reasonable time. <Term id="scaling-laws" lang={lang}>Scaling laws</Term> describe how to balance these three resources to achieve optimal performance.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-card p-4 rounded-lg border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-2 uppercase text-sm tracking-widest">{lang === 'ru' ? 'Вычисления' : 'Compute'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'FLOPs при обучении. Связан с GPU, временем и бюджетом.' : 'FLOPs during training. Tied to GPUs, time, and budget.'}</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-2 uppercase text-sm tracking-widest">{lang === 'ru' ? 'Данные' : 'Data'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Токены обучающей выборки. Качество важно не меньше количества.' : 'Tokens in the training set. Quality matters as much as quantity.'}</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-2 uppercase text-sm tracking-widest">{lang === 'ru' ? 'Параметры' : 'Parameters'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Веса нейросети. Определяют ёмкость и сложность модели.' : 'Neural network weights. Define capacity and model complexity.'}</p>
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 3: Эмерджентные способности' : 'Chapter 3: Emergent Abilities'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Самое неожиданное следствие масштабирования — появление эмерджентных способностей. Эмерджентность означает: свойство системы, которого нет ни у одного из её отдельных компонентов. В случае нейросетей это навыки, которые внезапно проявляются при достижении определённого порога масштаба, а не накапливаются постепенно. Модель с миллиардом параметров может не уметь того, что умеет модель со ста миллиардами — и это умение не предсказывалось экстраполяцией из меньшей версии.'
              : 'The most unexpected consequence of scaling is the appearance of emergent abilities. Emergence means a property of a system that none of its individual components possesses. In the case of neural networks, these are skills that appear suddenly at a certain scale threshold rather than accumulating gradually. A model with one billion parameters may be unable to do something a hundred-billion-parameter model can — and that capability was not predictable by extrapolating from the smaller version.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Конкретные примеры: цепочечное рассуждение (chain-of-thought) — способность "думать вслух" шаг за шагом — не наблюдалась в моделях до примерно 100 миллиардов параметров. In-context learning — умение учиться по нескольким примерам прямо в промпте — тоже проявилось внезапно. Перевод с редких языков, решение задач по аналогии, написание кода — каждый из этих навыков "включился" как переключатель при достижении определённого размера. Мы не умеем предсказывать, какие способности появятся следующими. Масштабирование ведёт нас в неизвестность, где правила меняются.'
              : 'Specific examples: chain-of-thought reasoning — the ability to "think out loud" step by step — was not observed in models below roughly 100 billion parameters. In-context learning — the ability to learn from a few examples directly in the prompt — also appeared unexpectedly. Translation of rare languages, analogical reasoning, code generation — each of these skills "switched on" like a light when a certain scale was reached. We cannot predict which abilities will emerge next. Scaling takes us into unknown territory where the rules change.'}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
              <span className="font-bold text-emerald-400 uppercase tracking-widest text-sm">
                {lang === 'ru' ? 'Аналогия' : 'Analogy'}
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Добавляйте молекулы воды в кастрюлю — она остаётся жидкостью. Потом — в одну секунду — вода закипает и превращается в пар. Не постепенно, а скачком. Так и нейросеть: количественный рост параметров в какой-то момент приводит к качественному переходу в её способностях.'
                : 'Add water molecules to a pot — it stays liquid. Then — in one second — the water boils and turns to steam. Not gradually, but in a jump. The same with neural networks: quantitative growth in parameters at some point leads to a qualitative leap in capabilities.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 4 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 4: Законы Chinchilla' : 'Chapter 4: The Chinchilla Scaling Laws'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'В 2022 году исследовательская группа DeepMind под руководством Джордана Хоффманна опубликовала работу о модели Chinchilla. Их открытие перевернуло индустрию: большинство существующих больших моделей, включая GPT-3, были "недообучены по данным". Проще говоря, им дали слишком много параметров и слишком мало данных для обучения. GPT-3 с 175 миллиардами параметров обучался на 300 миллиардах токенов — авторы Chinchilla доказали, что оптимально было бы использовать в пять–десять раз больше токенов при меньшем числе параметров.'
              : 'In 2022, a DeepMind research group led by Jordan Hoffmann published a paper about the Chinchilla model. Their finding shook the industry: most existing large models, including GPT-3, were "data-undertrained." In simpler terms, they were given too many parameters and too little training data. GPT-3 with 175 billion parameters was trained on 300 billion tokens — the Chinchilla authors proved that the optimal approach would have been five to ten times more tokens with fewer parameters.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Chinchilla весила всего 70 миллиардов параметров, но обучалась на 1.4 триллиона токенов. Результат: превосходство над GPT-3 и Gopher (280B) по большинству бенчмарков при вдвое меньшем размере. Главный вывод: для compute-оптимального обучения параметры и токены должны масштабироваться пропорционально. Если вы увеличиваете число параметров вдвое — вам нужно и вдвое больше обучающих данных. Это изменило стратегию всей отрасли: появились Llama от Meta, Mistral и другие "эффективные" модели, которые сознательно применяли уроки Chinchilla.'
              : 'Chinchilla had only 70 billion parameters but was trained on 1.4 trillion tokens. The result: it outperformed GPT-3 and Gopher (280B) on most benchmarks at half the size. The core lesson: for compute-optimal training, parameters and tokens must scale proportionally. If you double the number of parameters, you need twice as much training data. This changed the strategy of the entire field: Meta\'s Llama, Mistral, and other "efficient" models consciously applied the Chinchilla lessons.'}
          </p>
          <div className="bg-card border border-border-card rounded-lg p-6">
            <h4 className="font-bold text-neutral-200 mb-3">{lang === 'ru' ? 'Ключевой вывод' : 'Key takeaway'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Недостаточно просто делать модель больше. Чтобы она была эффективной, её нужно обучать на пропорционально большем объёме качественных данных. Экономия на данных при росте параметров — это деньги, потраченные впустую.'
                : 'It\'s not enough to just make the model bigger. To be effective, it must be trained on a proportionally larger volume of high-quality data. Saving on data while growing parameters is money wasted.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 5 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 5: Критики, стены и новые горизонты' : 'Chapter 5: Critics, Walls, and New Frontiers'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Несмотря на успехи масштабирования, многие исследователи предупреждают о достижении пределов. Первый — "стена данных": мы уже обучили модели почти на всём доступном тексте интернета, и новый качественный текст перестаёт накапливаться с той же скоростью, с которой растут модели. Второй — "стена энергии": обучение GPT-4 обошлось ориентировочно в 100 миллионов долларов; следующее поколение может стоить в десятки раз больше, что делает конкуренцию доступной лишь для горстки корпораций. Третий — "стена архитектуры": Ян Лекун и другие исследователи утверждают, что трансформер, предсказывающий следующий токен, не способен достичь AGI — для этого нужен фундаментально новый подход к пониманию физического мира.'
              : 'Despite scaling successes, many researchers warn of approaching limits. The first is the "data wall": we have already trained models on nearly all available text on the internet, and new high-quality text stops accumulating as fast as models grow. The second is the "energy wall": training GPT-4 cost an estimated $100 million; the next generation may cost tens of times more, making competition accessible only to a handful of corporations. The third is the "architecture wall": Yann LeCun and others argue that a next-token-prediction transformer is incapable of reaching AGI — fundamentally new approaches to understanding the physical world are needed.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'В ответ на эти ограничения индустрия движется по нескольким новым направлениям. Синтетические данные — модели генерируют обучающие примеры для следующего поколения моделей, создавая "данные из данных". Инференс-вычисления (inference-time compute) — вместо того чтобы делать модели больше при обучении, мы заставляем их "думать дольше" при выводе ответа: системы вроде OpenAI o1 и DeepSeek-R1 используют расширенные цепочки рассуждений прямо во время ответа. Мультимодальные данные — добавление видео, аудио и изображений открывает новые масштабные источники обучающей информации. Будущее масштабирования, вероятно, не в одной метрике (параметры), а в многомерном пространстве: правильном типе данных, правильной архитектуре и умении "думать" эффективно.'
              : 'In response to these limits, the industry is moving in several new directions. Synthetic data — models generate training examples for the next generation of models, creating "data from data." Inference-time compute — instead of making models bigger during training, we make them "think longer" when generating a response: systems like OpenAI o1 and DeepSeek-R1 use extended reasoning chains at inference time. Multimodal data — adding video, audio, and images opens new large-scale sources of training information. The future of scaling likely lies not in one metric (parameters), but in a multidimensional space: the right type of data, the right architecture, and the ability to "think" efficiently.'}
          </p>
        </div>
      </div>

    </div>
  );
}
