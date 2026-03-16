import React from 'react';
import { Landmark, Cpu, Globe2, Zap, Brain, History, Snowflake, FastForward } from 'lucide-react';

export default function AiHistoryTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <History className="text-emerald-500" />
            {lang === 'ru' ? 'AI: От мечты к инфраструктуре' : 'AI: From Dream to Infrastructure'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'История искусственного интеллекта — это не просто перечень дат и названий моделей. Это драматичная история о том, как человечество пыталось перенести искру разума в кремний, совершая грандиозные ошибки, переживая десятилетия застоя и достигая случайных, но меняющих мир прорывов. Сегодня мы воспринимаем AI как нечто само собой разумеющееся, но еще 15 лет назад идея о том, что компьютер сможет "понимать" шутки, писать программный код или генерировать фотореалистичные картины, казалась чистой научной фантастикой.'
                : 'The history of artificial intelligence is more than a list of dates and model names. It is a dramatic story of humanity trying to transfer the spark of reason into silicon, making grand mistakes, surviving decades of stagnation, and achieving accidental, world-changing breakthroughs. Today, we take AI for granted, but just 15 years ago, the idea that a computer could "understand" jokes, write code, or generate photorealistic paintings seemed like pure science fiction.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Чтобы понять, почему современные Большие Языковые Модели (LLM) работают именно так — с их галлюцинациями, окнами контекста и эмерджентными способностями — нужно проследить путь, который привел нас от строгой математической логики к вероятностному "черному ящику" нейросетей.'
                : 'To understand why modern Large Language Models (LLMs) work the way they do — with their hallucinations, context windows, and emergent abilities — we must trace the path that led us from strict mathematical logic to the probabilistic "black box" of neural networks.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Logic Foundations */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Landmark className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 1: Эра символов и правил (1950-е — 1980-е)' : 'Chapter 1: The Era of Symbols and Rules (1950s – 1980s)'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'На заре AI доминировал подход "Символического ИИ" (часто называемый GOFAI — Good Old-Fashioned AI). Пионеры компьютерных наук верили: если мы сможем описать все правила мира на строгом языке математической логики, машина станет разумной. Интеллект воспринимался как способность к дедуктивному выводу.'
                : 'At the dawn of AI, the "Symbolic AI" approach (often called GOFAI — Good Old-Fashioned AI) dominated. Computer science pioneers believed that if we could describe all the rules of the world in the strict language of mathematical logic, the machine would become intelligent. Intelligence was seen as the capacity for deductive reasoning.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-lg p-4">
                <h4 className="text-emerald-400 font-bold mb-2">
                  {lang === 'ru' ? 'Дартмутский семинар (1956)' : 'The Dartmouth Workshop (1956)'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Место, где сам термин "Искусственный интеллект" был официально принят. Ожидания были невероятно завышены: группа блестящих математиков полагала, что они смогут решить проблему компьютерного зрения и понимания естественного языка за одно лето.'
                    : 'The place where the term "Artificial Intelligence" was officially coined. Expectations were incredibly inflated: a group of brilliant mathematicians thought they could solve computer vision and natural language understanding over a single summer.'}
                </p>
              </div>
              <div className="bg-[#0a0a0a] border border-emerald-500/20 rounded-lg p-4">
                <h4 className="text-emerald-400 font-bold mb-2">
                  {lang === 'ru' ? 'Logic Theorist (1955)' : 'Logic Theorist (1955)'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Первая в истории программа, которая смогла доказать 38 теорем из сложнейших математических трудов. Это было воспринято как неопровержимое доказательство того, что "машины могут думать".'
                    : 'The first program in history capable of proving 38 theorems from complex mathematical texts. This was perceived as irrefutable proof that "machines can think."'}
                </p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed italic">
              {lang === 'ru'
                ? 'Но Символический ИИ разбился о так называемую "проблему здравого смысла". Как описать "кошку" через жесткие правила "если-то"? Она пушистая? (А если это сфинкс?) У неё 4 ноги? (А если у неё травма?) Оказалось, что человеческий интеллект опирается на интуицию и вероятности, а не на энциклопедию строгих правил.'
                : 'But Symbolic AI crashed against the "common sense problem." How do you describe a "cat" using rigid "if-then" rules? Is it furry? (What about a Sphinx?) Does it have 4 legs? (What about an injury?) It turned out human intelligence relies on intuition and probability, not an encyclopedia of strict rules.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: The AI Winters */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
            <Snowflake className="text-cyan-500" />
            {lang === 'ru' ? 'Глава 2: AI-Зимы и заморозка надежд' : 'Chapter 2: The AI Winters and Frozen Hopes'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Когда первоначальная эйфория спала, стало ясно, что алгоритмы не масштабируются. Машины могли играть в шахматы (где правила строго заданы), но не могли отличить чашку от стула на фотографии. Это несоответствие между громкими обещаниями ученых и реальными результатами привело к "AI-зимам" (1970-е и конец 1980-х).'
                : 'When the initial euphoria faded, it became clear that the algorithms did not scale. Machines could play chess (where rules are strict), but couldn\'t tell a cup from a chair in a photo. This mismatch between grand scientific promises and real results led to the "AI Winters" (1970s and late 1980s).'}
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6 mb-6">
              <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <Cpu size={18} />
                {lang === 'ru' ? 'Почему наступила зима?' : 'Why did Winter come?'}
              </h4>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Слабое железо:' : 'Weak Hardware:'}</span>{' '}
                  {lang === 'ru' ? 'Компьютеры того времени имели мегабайты памяти и смехотворную вычислительную мощность.' : 'Computers of the time had megabytes of memory and laughable compute power.'}
                </li>
                <li>
                  <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Отсутствие данных:' : 'Lack of Data:'}</span>{' '}
                  {lang === 'ru' ? 'Не существовало интернета, откуда можно было бы скачать миллионы текстов и картинок для обучения.' : 'There was no internet from which to download millions of texts and images for training.'}
                </li>
                <li>
                  <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Остановка финансирования:' : 'Funding Cuts:'}</span>{' '}
                  {lang === 'ru' ? 'Правительства (например, через отчет Лайтхилла в Великобритании) и военные инвесторы разочаровались и срезали бюджеты.' : 'Governments (e.g., via the Lighthill report in the UK) and military investors became disillusioned and cut budgets.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Connectionist Revolution */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
            <Brain className="text-blue-500" />
            {lang === 'ru' ? 'Глава 3: Восстание нейронов (2012 — момент ImageNet)' : 'Chapter 3: The Rise of Neurons (2012 — The ImageNet Moment)'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Параллельно с логическим ИИ существовала группа маргиналов — "коннекционисты". Они вдохновлялись строением человеческого мозга и развивали Искусственные Нейронные Сети. Десятилетиями этот подход считался неэффективным и тупиковым. Но в 2012 году всё изменилось.'
                : 'Parallel to logical AI, there was a group of outliers — the "connectionists". They were inspired by the human brain and developed Artificial Neural Networks. For decades, this approach was considered inefficient and a dead end. But in 2012, everything changed.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'На соревновании по распознаванию изображений ImageNet нейросеть под названием AlexNet буквально уничтожила всех конкурентов с огромным отрывом. Это был "Большой взрыв" глубокого обучения (Deep Learning).'
                : 'At the ImageNet image recognition competition, a neural network named AlexNet literally destroyed all competitors by a massive margin. This was the "Big Bang" of Deep Learning.'}
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
              <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <Zap size={18} />
                {lang === 'ru' ? 'Три столпа революции 2012 года' : 'The Three Pillars of the 2012 Revolution'}
              </h4>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Данные:' : 'Data:'}</span>{' '}
                  {lang === 'ru' ? 'Проект ImageNet предоставил миллионы размеченных картинок (спасибо краудсорсингу).' : 'The ImageNet project provided millions of labeled images (thanks to crowdsourcing).'}
                </li>
                <li>
                  <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Вычисления (Compute):' : 'Compute:'}</span>{' '}
                  {lang === 'ru' ? 'Исследователи догадались использовать игровые видеокарты (GPU) от NVIDIA. Оказалось, что железо для рендеринга видеоигр идеально подходит для перемножения матриц в нейросетях.' : 'Researchers figured out how to use gaming graphics cards (GPUs) from NVIDIA. It turned out that hardware for rendering video games is perfect for matrix multiplication in neural nets.'}
                </li>
                <li>
                  <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Алгоритмы:' : 'Algorithms:'}</span>{' '}
                  {lang === 'ru' ? 'Метод обратного распространения ошибки (Backpropagation) наконец-то заработал эффективно на действительно глубоких сетях.' : 'The Backpropagation algorithm finally worked efficiently on truly deep networks.'}
                </li>
              </ul>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Этот момент родил парадигму "Software 2.0" (термин Андрея Карпатого). Мы перестали писать алгоритмы решения задачи вручную. Вместо этого мы пишем небольшую программу-оптимизатор, "кормим" её огромным количеством данных, и она сама находит нужные веса (weights), обучаясь решать задачу.'
                : 'This moment gave birth to the "Software 2.0" paradigm (a term coined by Andrej Karpathy). We stopped writing problem-solving algorithms by hand. Instead, we write a small optimizer program, "feed" it massive amounts of data, and it finds the correct weights on its own, learning to solve the task.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4: From RNNs to Transformers */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-400">
            <FastForward className="text-amber-500" />
            {lang === 'ru' ? 'Глава 4: Внимание — это всё, что вам нужно (2017)' : 'Chapter 4: Attention Is All You Need (2017)'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Нейросети победили в зрении, но естественный язык оставался проблемой. Для работы с текстом использовали Рекуррентные нейронные сети (RNN) и LSTM. Они обрабатывали текст слово за словом, строго последовательно. Это было медленно, и они "забывали" контекст начала абзаца к моменту, когда дочитывали до конца.'
                : 'Neural networks conquered vision, but natural language remained a problem. Recurrent Neural Networks (RNNs) and LSTMs were used for text. They processed text word-by-word, strictly sequentially. This was slow, and they "forgot" the context of the beginning of a paragraph by the time they reached the end.'}
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-neutral-300">
                {lang === 'ru'
                  ? 'В 2017 году исследователи из Google выпустили статью с дерзким названием "Attention Is All You Need". Они предложили новую архитектуру — Трансформер (Transformer).'
                  : 'In 2017, researchers from Google published a paper with the bold title "Attention Is All You Need." They proposed a new architecture: the Transformer.'}
              </p>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Революция Трансформера заключалась в отказе от последовательного чтения. Трансформер смотрит на весь кусок текста сразу через "механизм самовнимания" (Self-Attention). Он математически вычисляет, как каждое слово в предложении связано с каждым другим словом. Это позволило:'
                : 'The Transformer revolution was abandoning sequential reading. A Transformer looks at the entire chunk of text all at once through the "Self-Attention" mechanism. It mathematically calculates how each word relates to every other word in the sentence. This allowed for:'}
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6 ml-4">
              <li>{lang === 'ru' ? 'Невероятно распараллелить вычисления на GPU (обучение стало в разы быстрее).' : 'Incredible parallelization on GPUs (training became magnitudes faster).'}</li>
              <li>{lang === 'ru' ? 'Обучать модели на неразмеченных данных (на всём открытом интернете).' : 'Training models on unlabeled data (the entire open internet).'}</li>
              <li>{lang === 'ru' ? 'Резко увеличить размер контекстного окна.' : 'Dramatically increasing the context window size.'}</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Вскоре OpenAI взяла эту архитектуру и создала серию моделей GPT (Generative Pre-trained Transformer). Увеличивая масштаб вычислений и данных, разработчики обнаружили магию: большие модели начали демонстрировать навыки логического вывода, перевода и программирования, которым их никто специально не учил. Это проложило путь к ChatGPT.'
                : 'Soon after, OpenAI took this architecture and created the GPT (Generative Pre-trained Transformer) series. By scaling up compute and data, developers discovered magic: large models began demonstrating logic, translation, and coding skills that no one explicitly taught them. This paved the way for ChatGPT.'}
            </p>
          </div>
        </div>
      </section>

      {/* Final Summary */}
      <section className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Зачем инженеру учить историю AI?' : 'Why Should an Engineer Study AI History?'}
        </h3>
        <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'История AI — это переход от иллюзии полного контроля (Символический ИИ) к управлению хаосом (Глубокое обучение). Мы больше не пишем 100% логики решения задачи. Мы задаем архитектуру, даем качественные данные и направляем процесс оптимизации.'
            : 'AI history is a transition from the illusion of absolute control (Symbolic AI) to managing chaos (Deep Learning). We no longer write 100% of the problem-solving logic. We define the architecture, provide quality data, and guide the optimization process.'}
        </p>
        <p className="text-neutral-300 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Понимая, что современные LLM — это вероятностные системы распознавания паттернов, рожденные из ограничений прошлых архитектур, вы перестанете ждать от них безупречной дедукции и научитесь правильно выстраивать вокруг них инженерные системы защиты (RAG, Evals, Fallbacks).'
            : 'By understanding that modern LLMs are probabilistic pattern-recognition systems born from the limitations of past architectures, you will stop expecting flawless deduction from them. Instead, you will learn to build proper engineering guardrails around them (RAG, Evals, Fallbacks).'}
        </p>
      </section>
    </div>
  );
}
