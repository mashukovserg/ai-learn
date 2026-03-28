"use client";

import React from 'react';
import Term from '@/components/Term';
import { Cpu, Zap } from 'lucide-react';

export default function AiHistoryTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">

      {/* Introduction */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'AI: От мечты к инфраструктуре' : 'AI: From Dream to Infrastructure'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'История искусственного интеллекта — это драматичная история о том, как человечество пыталось перенести искру разума в кремний, совершая грандиозные ошибки, переживая десятилетия застоя и достигая случайных, но меняющих мир прорывов. Сегодня мы воспринимаем AI как нечто само собой разумеющееся, но ещё 15 лет назад идея о том, что компьютер сможет писать код или генерировать фотореалистичные картины, казалась чистой научной фантастикой.'
              : 'The history of artificial intelligence is a dramatic story of humanity trying to transfer the spark of reason into silicon, making grand mistakes, surviving decades of stagnation, and achieving accidental, world-changing breakthroughs. Today we take AI for granted, but just 15 years ago, the idea that a computer could write code or generate photorealistic paintings seemed like pure science fiction.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Писатель Дуглас Хофстадтер — автор легендарной книги "Гёдель, Эшер, Бах" — в 2014 году стоял перед залом инженеров Google и сказал: "Я в ужасе. В ужасе." Но его страх был не страхом перед роботами-убийцами. Он боялся противоположного: что человеческое творчество окажется слишком простым для машины. Программа EMI к тому времени уже сочиняла мазурки в стиле Шопена, которые профессиональные музыканты Eastman School of Music принимали за оригиналы. Если музыку Шопена можно воспроизвести крошечным чипом, что тогда значит быть человеком?'
              : 'Writer Douglas Hofstadter — author of the legendary "Gödel, Escher, Bach" — stood before a room of Google engineers in 2014 and said: "I am terrified. Terrified." But his fear was not of killer robots. He feared the opposite: that human creativity might turn out to be too easy for a machine. A program called EMI had already been composing Chopin-style mazurkas that professional musicians at the Eastman School of Music could not tell from the originals. If Chopin\'s music can be reproduced by a tiny chip, what does it mean to be human?'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Чтобы понять, почему современные LLM работают именно так — с их галлюцинациями, окнами контекста и эмерджентными способностями — нужно проследить путь, который привёл нас от строгой математической логики к вероятностному "чёрному ящику" нейросетей.'
              : 'To understand why modern LLMs work the way they do — with their hallucinations, context windows, and emergent abilities — we must trace the path that led us from strict mathematical logic to the probabilistic "black box" of neural networks.'}
          </p>
        </div>
      </div>

      {/* Chapter 1 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Эра символов и правил (1950-е — 1980-е)' : 'Chapter 1: The Era of Symbols and Rules (1950s – 1980s)'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'На заре AI доминировал подход "Символического ИИ" (GOFAI — Good Old-Fashioned AI). Пионеры компьютерных наук верили: если описать все правила мира на строгом языке математической логики, машина станет разумной. Интеллект воспринимался как способность к дедуктивному выводу. Строгость и явность правил — вот рецепт разума.'
              : 'At the dawn of AI, the "Symbolic AI" approach (GOFAI — Good Old-Fashioned AI) dominated. Computer science pioneers believed that if we described all the rules of the world in the strict language of mathematical logic, the machine would become intelligent. Intelligence was seen as the capacity for deductive reasoning — that rigor and explicit rules were the recipe for mind.'}
          </p>

          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-deep border border-emerald-500/20 rounded-lg p-5">
              <h4 className="text-emerald-400 font-bold mb-2">
                {lang === 'ru' ? 'Дартмутский семинар (1956): бардак, финансированный вполовину' : 'The Dartmouth Workshop (1956): half-funded, mostly chaotic'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Джон Маккарти — 28-летний математик — предложил "двухмесячное исследование ИИ" с участием десяти человек, финансируемое Фондом Рокфеллера. Фонд выделил только половину запрошенной суммы. Участники семинара разъезжались и приезжали по собственному расписанию. "У каждого была своя идея, здоровое эго и огромный энтузиазм только к своему плану." Из семинара не вышло ни одного прорыва. Вышло название: именно тогда Маккарти ввёл термин "Artificial Intelligence" — как он сам потом признавал, "надо было как-то назвать, вот и назвал".'
                  : 'John McCarthy — a 28-year-old mathematician — proposed "a 2-month, 10-man study of artificial intelligence," funded by the Rockefeller Foundation. The Foundation gave only half of what was asked. Attendees came and went on their own schedules. "Everyone had a different idea, a hearty ego, and much enthusiasm for their own plan." No breakthrough came out of the workshop. What came out was a name: McCarthy coined the term "Artificial Intelligence" — as he later admitted, "I had to call it something, so I called it that."'}
              </p>
            </div>
            <div className="bg-deep border border-emerald-500/20 rounded-lg p-5">
              <h4 className="text-emerald-400 font-bold mb-2">
                {lang === 'ru' ? 'Logic Theorist (1955) и волна невыполненных обещаний' : 'Logic Theorist (1955) and the wave of broken promises'}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Первая в истории программа, доказавшая 38 математических теорем, была воспринята как неопровержимое доказательство того, что "машины могут думать". Нобелевский лауреат Херберт Саймон заявил в 1958 году: "Машины смогут делать всё, что делает человек, через двадцать лет." Марвин Минский обещал, что "проблема AI будет в целом решена в течение одного поколения". Основатель Stanford AI Project Джон Маккарти ставил целью создать "полностью разумную машину за десятилетие". Ни одно из этих предсказаний не сбылось — зато все они повторяются в той или иной форме с 1956 года по сей день.'
                  : 'The first program in history to prove 38 mathematical theorems was received as irrefutable proof that "machines can think." Nobel laureate Herbert Simon declared in 1958: "Machines will be capable of doing any work a man can do within twenty years." Marvin Minsky promised that "the problem of AI will be substantially solved within a generation." McCarthy set a goal to build "a fully intelligent machine in a decade." None of these predictions came true — yet all of them have been repeated, in one form or another, from 1956 to the present day.'}
              </p>
            </div>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Но Символический ИИ столкнулся с "проблемой здравого смысла". Как описать "кошку" через жёсткие правила "если-то"? Она пушистая? (А если это сфинкс?) У неё 4 ноги? (А если травма?) Оказалось, что человеческий интеллект опирается на интуицию и вероятности, а не на энциклопедию строгих правил.'
              : 'But Symbolic AI crashed against the "common sense problem." How do you describe a "cat" using rigid "if-then" rules? Is it furry? (What about a Sphinx?) Does it have 4 legs? (What about an injury?) It turned out that human intelligence relies on intuition and probability, not an encyclopedia of strict rules.'}
          </p>

          <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-5">
            <h4 className="font-bold text-rose-400 mb-3">
              {lang === 'ru' ? 'Минский убил нейросети — возможно, нечестно' : 'Minsky killed neural networks — possibly dishonestly'}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed mb-3">
              {lang === 'ru'
                ? 'Параллельно с GOFAI существовал другой подход — нейронные сети, которые вдохновлялись строением мозга. Фрэнк Розенблатт разрабатывал перцептрон и его многослойные варианты. Но в 1969 году Марвин Минский и Сеймур Пейперт опубликовали книгу "Перцептроны", математически доказав ограничения однослойных сетей. Финансирование нейросетевых исследований мгновенно испарилось. Однако — как позже выяснили историки науки — ограничения однослойных сетей были уже известны специалистам в этой области. Самое разрушительное высказывание Минского о том, что многослойные сети "стерильны", было лишь предположением, а не доказанной теоремой.'
                : 'Parallel to GOFAI was another approach — neural networks inspired by the brain. Frank Rosenblatt was developing the perceptron and multilayer variants. Then in 1969, Marvin Minsky and Seymour Papert published "Perceptrons," mathematically proving the limitations of single-layer networks. Funding for neural network research instantly evaporated. However — as later historians of science noted — the limitations of single-layer networks were already known to researchers in the field. Minsky\'s most damaging claim, that multilayer networks were "sterile," was a mere speculation, not a proven theorem.'}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed italic">
              {lang === 'ru'
                ? 'Минский возглавлял MIT AI Lab и имел конкурентный интерес в перераспределении финансирования в пользу символического подхода. В 1971 году Розенблатт погиб в морской катастрофе — ему было 43 года. Без своего главного защитника нейронные сети были заморожены на полтора десятилетия.'
                : 'Minsky headed the MIT AI Lab and had a competitive interest in redirecting funding toward symbolic AI. In 1971, Rosenblatt died in a boating accident at the age of 43. Without its most prominent advocate, neural network research was frozen for a decade and a half.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">
          {lang === 'ru' ? 'Глава 2: AI-Зимы и заморозка надежд' : 'Chapter 2: The AI Winters and Frozen Hopes'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Когда первоначальная эйфория спала, стало ясно, что алгоритмы не масштабируются. Машины могли играть в шахматы (где правила строго заданы), но не могли отличить чашку от стула на фотографии. Это несоответствие между громкими обещаниями учёных и реальными результатами привело к "AI-зимам" — периодическим обвалам финансирования и общественного интереса (1970-е, конец 1980-х).'
              : 'When the initial euphoria faded, it became clear that the algorithms did not scale. Machines could play chess (where rules are strict), but could not tell a cup from a chair in a photo. This mismatch between grand scientific promises and real results led to the "AI Winters" — periodic collapses of funding and public interest (1970s, late 1980s).'}
          </p>

          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Cpu size={18} />
              {lang === 'ru' ? 'Почему наступала зима?' : 'Why did Winter come?'}
            </h4>
            <ul className="list-disc list-inside text-neutral-300 space-y-3">
              <li>
                <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Слабое железо:' : 'Weak hardware:'}</span>{' '}
                {lang === 'ru' ? 'Компьютеры имели мегабайты памяти и смехотворную вычислительную мощность. Обучение даже простой нейросети занимало недели.' : 'Computers had megabytes of memory and laughable compute. Training even a simple neural net took weeks.'}
              </li>
              <li>
                <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Отсутствие данных:' : 'Lack of data:'}</span>{' '}
                {lang === 'ru' ? 'Не существовало интернета — данные собирались вручную, что было крайне дорого и медленно.' : 'There was no internet — data was collected manually, making it extremely expensive and slow.'}
              </li>
              <li>
                <span className="text-cyan-300 font-medium">{lang === 'ru' ? 'Остановка финансирования:' : 'Funding cuts:'}</span>{' '}
                {lang === 'ru' ? (
                  <>
                    {'Правительства разочаровались и срезали бюджеты. Ключевым моментом стал '}
                    <Term id="lighthill-report">отчёт Лайтхилла</Term>
                    {' в Великобритании (1973), который признал ИИ тупиковым направлением, неспособным решать реальные задачи.'}
                  </>
                ) : (
                  <>
                    {'Governments became disillusioned and cut budgets. A key moment was the '}
                    <Term id="lighthill-report">Lighthill report</Term>
                    {' in the UK (1973), which deemed AI research a dead end, incapable of solving real-world problems.'}
                  </>
                )}
              </li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Цикл повторялся с пугающей регулярностью. В 1988 году высокопоставленный чиновник DARPA заявил, что нейронные сети "важнее атомной бомбы" — и менее чем через год наступила очередная зима. Когда Джеффри Хинтон в 1990 году заканчивал аспирантуру, поле было в таком упадке, что научные руководители советовали ему убрать слово "Artificial Intelligence" из резюме при поиске работы. '
              : 'The cycle repeated with alarming regularity. In 1988, a senior DARPA official proclaimed that neural networks were "more important than the atom bomb" — and less than a year later the next winter arrived. When Geoffrey Hinton finished his PhD in 1990, the field was in such disrepute that advisors told him to remove "Artificial Intelligence" from his job applications.'}
          </p>

          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shrink-0" />
              <span className="font-bold text-cyan-400 uppercase tracking-widest text-sm">
                {lang === 'ru' ? 'Закономерность' : 'The Pattern'}
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Джон Маккарти сформулировал это точнее всех: "Как только что-то начинает работать, это перестают называть ИИ." Deep Blue победил Каспарова в шахматы в 1997 году — и шахматы немедленно были переклассифицированы в "задачу, которая не требует настоящего интеллекта". Каждое достижение AI автоматически перестаёт считаться AI. Эта "движущаяся цель" существует с 1956 года.'
                : 'John McCarthy put it most precisely: "As soon as it works, no one calls it AI anymore." Deep Blue defeated Kasparov at chess in 1997 — and chess was immediately reclassified as "a task that doesn\'t require real intelligence." When Deep Blue\'s winning move was analyzed, a commentator said: "Deep Blue may have beaten Kasparov, but it didn\'t get any joy out of it." Every AI achievement automatically stops being considered AI. This moving goalpost has existed since 1956.'}
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                {'Главной проблемой Символического ИИ стала комбинаторная сложность. Ключевые фигуры эпохи, такие как '}
                <Term id="marvin-minsky">Марвин Минский</Term>
                {', обещали создать AGI за 10–20 лет, но реальность оказалась гораздо сложнее. Сегодня, если опросить практикующих AI-исследователей о том, когда появится AGI, ответы варьируются от "в ближайшие десять лет" до "никогда". По сути, с 1956 года мы не продвинулись в способности предсказывать это событие ни на шаг.'}
              </>
            ) : (
              <>
                {'The main problem with Symbolic AI was combinatorial complexity. Key figures of the era, such as '}
                <Term id="marvin-minsky">Marvin Minsky</Term>
                {', promised AGI in 10–20 years, but reality proved far more complex. Today, if you survey practicing AI researchers on when AGI will arrive, the answers range from "in the next ten years" to "never." Essentially, since 1956, we have made no progress in our ability to predict this event.'}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          {lang === 'ru' ? 'Глава 3: Восстание нейронов (2012 — момент ImageNet)' : 'Chapter 3: The Rise of Neurons (2012 — The ImageNet Moment)'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Параллельно с логическим ИИ существовала группа маргиналов — "коннекционисты". Десятилетиями этот подход считался неэффективным. Но в 2012 году произошло то, что никто не предсказывал: в конкурсе по распознаванию изображений ImageNet победитель 2010 года показал 72% точности, победитель 2011-го — 74%. Ожидался очередной небольшой прирост. Вместо этого команда под руководством '
              : 'Parallel to logical AI, there was a group of outliers — the "connectionists." For decades this approach was considered inefficient. But in 2012, something no one predicted happened: in the ImageNet image recognition competition, the 2010 winner had achieved 72% accuracy, the 2011 winner 74%. Another modest improvement was expected. Instead, a team led by '}
            <Term id="geoffrey-hinton">{lang === 'ru' ? 'Джеффри Хинтона' : 'Geoffrey Hinton'}</Term>
            {lang === 'ru'
              ? ' представила нейросеть '
              : ' submitted the neural network '}
            <Term id="alexnet">AlexNet</Term>
            {lang === 'ru'
              ? ' — и показала 85%. Отрыв от второго места был больше, чем весь прогресс за предыдущие пять лет соревнований.'
              : ' — and it scored 85%. The gap over second place was larger than all progress accumulated over the previous five years of the competition.'}
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
              <Zap size={18} />
              {lang === 'ru' ? 'Три столпа революции 2012 года' : 'The Three Pillars of the 2012 Revolution'}
            </h4>
            <ul className="list-disc list-inside text-neutral-300 space-y-4">
              <li>
                <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Данные (ImageNet):' : 'Data (ImageNet):'}</span>
                <p className="mt-2 ml-6 text-sm">
                  {lang === 'ru' ? 'Проект под руководством ' : 'A project led by '}
                  <Term id="li-fei-fei">{lang === 'ru' ? 'Ли Фей-Фей' : 'Li Fei-Fei'}</Term>
                  {lang === 'ru'
                    ? ' собрал базу из 3.2 млн размеченных изображений в 5247 категориях — в 20 раз больше категорий и в 100 раз больше картинок, чем в любом существовавшем наборе данных. Каждое изображение проверялось через '
                    : ' assembled a database of 3.2 million labeled images across 5247 categories — 20x more categories and 100x more total images than any existing benchmark. Every image was verified via '}
                  <Term id="amt">Amazon Mechanical Turk</Term>
                  {lang === 'ru' ? ', что обеспечило точность разметки 99.7%.' : ', ensuring 99.7% labeling accuracy.'}
                </p>
              </li>
              <li>
                <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Вычисления (GPU):' : 'Compute (GPU):'}</span>
                <p className="mt-2 ml-6 text-sm">
                  {lang === 'ru' ? 'Исследователи использовали игровые видеокарты ' : 'Researchers used gaming graphics cards from '}
                  <Term id="nvidia">NVIDIA</Term>
                  {lang === 'ru'
                    ? '. Чипы, созданные для рендеринга миллионов пикселей в играх, идеально подходят для перемножения гигантских матриц. GPU ускорил обучение в 50–100 раз. После 2012 года акции NVIDIA выросли более чем на 1000% к 2017 году.'
                    : '. Chips designed for rendering millions of pixels in games are perfect for multiplying giant matrices. GPUs accelerated training by 50–100x. After 2012, NVIDIA\'s stock rose more than 1,000% by 2017.'}
                </p>
              </li>
              <li>
                <span className="text-blue-300 font-medium">{lang === 'ru' ? 'Алгоритмы:' : 'Algorithms:'}</span>{' '}
                <Term id="backpropagation">{lang === 'ru' ? 'Метод обратного распространения ошибки' : 'The Backpropagation algorithm'}</Term>
                {lang === 'ru' ? ' наконец-то заработал эффективно на действительно глубоких сетях.' : ' finally worked efficiently on truly deep networks.'}
              </li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Лекун позже вспоминал реакцию зала на результаты AlexNet: "Прямо на глазах многие старшие коллеги просто переключились. Они сказали: \'Всё, теперь я верю. Вот оно.\'" В течение года Google купил небольшую компанию Хинтона; Facebook нанял Лекуна. Индустрия перевернулась за два года от одного академического результата.'
              : 'LeCun later recalled the audience reaction to AlexNet\'s results: "You could see right there a lot of senior people in the community just flipped. They said, \'Okay, now we buy it. That\'s it, now — you won.\'" Within a year, Google acquired Hinton\'s small company; Facebook hired LeCun. The industry flipped in two years from a single academic result.'}
          </p>

          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block shrink-0" />
              <span className="font-bold text-blue-400 uppercase tracking-widest text-sm">
                {lang === 'ru' ? 'AlphaGo: рука бога и детский сад' : 'AlphaGo: the hand of God and kindergarten'}
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-3">
              {lang === 'ru'
                ? 'В 2016 году нейросеть AlphaGo победила чемпиона мира по го Ли Седоля. Во второй партии AlphaGo сделала ход, который комментаторы сначала сочли ошибкой. Европейский чемпион Фань Хуй повторял: "Это нечеловеческий ход. Я никогда не видел такого хода от человека. Прекрасно. Прекрасно." Ли Седоль встал и вышел из зала, чтобы прийти в себя. В японской традиции такие ходы называют kami no itte — "рука бога".'
                : 'In 2016, the neural network AlphaGo defeated world Go champion Lee Sedol. In the second game, AlphaGo made a move commentators initially thought was a mistake. European champion Fan Hui kept repeating: "It\'s not a human move. I\'ve never seen a human play this move. Beautiful. Beautiful." Lee Sedol stood up and left the room to recover. In the Japanese tradition, such moves are called kami no itte — "the hand of God."'}
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Но вот что важно: AlphaGo не умеет играть в крестики-нолики. Более того — AlphaZero, самая мощная версия, содержит отдельную нейросеть для го, отдельную для шахмат, отдельную для сёги. Если сместить платформу на несколько пикселей, обученный AI-игрок в Atari теряет все свои навыки. Самый слабый первоклассник из школьного шахматного кружка умнее AlphaGo — потому что ребёнок умеет переносить знания из одной области в другую. Трансфер обучения (transfer learning) по-прежнему остаётся одной из главных нерешённых проблем AI.'
                : 'But here is what matters: AlphaGo cannot play tic-tac-toe. Moreover — AlphaZero, the most powerful version, contains a separate neural network for Go, a separate one for chess, a separate one for shogi. If the paddle in an Atari game is shifted by a few pixels, a trained superhuman AI player loses all its skills. The weakest kindergartner in the school chess club is smarter than AlphaGo — because the child knows how to transfer knowledge from one domain to another. Transfer learning remains one of the most important unsolved problems in AI.'}
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                <Term id="geoffrey-hinton">Джеффри Хинтон</Term>
                {' десятилетиями верил в нейросети, когда над ними смеялись. Однако в 2023 году Хинтон ушёл из Google, чтобы предупредить мир: созданная им технология может стать умнее человека гораздо быстрее, чем мы думали, и несёт экзистенциальные риски.'}
              </>
            ) : (
              <>
                <Term id="geoffrey-hinton">Geoffrey Hinton</Term>
                {' believed in neural networks for decades while others mocked them. But in 2023, Hinton left Google to warn the world: the technology he helped create might surpass human intelligence much sooner than expected, posing existential risks.'}
              </>
            )}
          </p>

          <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-5">
            <h4 className="font-bold text-amber-400 mb-2">
              {lang === 'ru' ? 'Осторожно: "человеческий уровень ImageNet"' : 'Caution: "human-level ImageNet performance"'}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В 2015 году технологические компании заявили, что AI "превзошёл человека" на ImageNet. Два момента остались за скобками. Первый: "человеческий базис" был получен от одного человека — аспиранта Стэнфорда Андрея Карпатого, который, по его собственному признанию, "наслаждался только первыми 200" из 1500 тестовых изображений. Второй: AI давалось пять попыток на изображение (top-5 accuracy). При одной попытке точность была лишь ~82%. Когда же модели показывали те же изображения с чуть изменёнными пикселями — так называемые adversarial examples, — они начинали классифицировать школьный автобус как страуса. Что-то принципиально другое, нежели человеческое восприятие, происходит внутри нейросети.'
                : 'In 2015, tech companies announced that AI had "surpassed human performance" on ImageNet. Two things were left unsaid. First: the human baseline came from a single person — Stanford PhD student Andrej Karpathy, who by his own admission "only enjoyed the first ~200" of 1,500 test images. Second: the AI was given five guesses per image (top-5 accuracy). With one guess, accuracy was only ~82%. When the same models were shown images with subtly altered pixels — so-called adversarial examples — they began classifying school buses as ostriches. Something fundamentally different from human perception is happening inside the neural network.'}
            </p>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Этот момент породил парадигму "Software 2.0" (термин '
              : 'This moment gave birth to the "Software 2.0" paradigm (a term coined by '}
            <Term id="andrej-karpathy">{lang === 'ru' ? 'Андрея Карпатого' : 'Andrej Karpathy'}</Term>
            {lang === 'ru'
              ? '). Мы перестали писать алгоритмы вручную. Вместо этого мы даём оптимизатору данные, и он сам находит нужные веса.'
              : '). We stopped writing algorithms by hand. Instead, we give an optimizer data, and it finds the correct weights on its own.'}
          </p>
        </div>
      </div>

      {/* Chapter 4 */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">
          {lang === 'ru' ? 'Глава 4: Внимание — это всё, что вам нужно (2017)' : 'Chapter 4: Attention Is All You Need (2017)'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Нейросети победили в зрении, но естественный язык оставался проблемой. Для работы с текстом использовали '
              : 'Neural networks conquered vision, but natural language remained a problem. '}
            <Term id="rnn">RNN</Term>
            {lang === 'ru' ? ' и ' : ' and '}
            <Term id="lstm">LSTM</Term>
            {lang === 'ru'
              ? '. Они обрабатывали текст слово за словом, строго последовательно. Это было медленно, и они "забывали" контекст начала абзаца к моменту, когда дочитывали до конца.'
              : '. They processed text word by word, strictly sequentially. This was slow, and they "forgot" the context of the beginning of a paragraph by the time they reached the end.'}
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-sm text-neutral-300">
              {lang === 'ru'
                ? 'В 2017 году исследователи из Google выпустили статью с дерзким названием "Attention Is All You Need". Они предложили новую архитектуру — '
                : 'In 2017, researchers from Google published a paper with the bold title "Attention Is All You Need." They proposed a new architecture: the '}
              <Term id="transformer">{lang === 'ru' ? 'Трансформер' : 'Transformer'}</Term>
              {'.'}
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Революция Трансформера заключалась в отказе от последовательного чтения. Трансформер смотрит на весь текст сразу через '
              : 'The Transformer revolution was abandoning sequential reading. A Transformer looks at the entire text at once through the '}
            <Term id="self-attention">{lang === 'ru' ? 'механизм самовнимания (Self-Attention)' : 'Self-Attention mechanism'}</Term>
            {lang === 'ru'
              ? '. Он математически вычисляет, как каждое слово связано с каждым другим. Это позволило распараллелить вычисления, обучать модели на неразмеченном тексте (на всём интернете) и резко увеличить контекстное окно.'
              : '. It mathematically calculates how each word relates to every other word. This allowed for parallelizing computation, training on unlabeled text (the entire internet), and dramatically increasing the context window.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'OpenAI взяла эту архитектуру и создала серию GPT (Generative Pre-trained Transformer). Увеличивая масштаб вычислений и данных, исследователи обнаружили магию: большие модели начали демонстрировать логику, перевод и программирование, которым их никто специально не учил. Это проложило путь к ChatGPT.'
              : 'OpenAI took this architecture and built the GPT series (Generative Pre-trained Transformer). Scaling up compute and data, researchers discovered magic: large models began demonstrating logic, translation, and coding skills that no one explicitly taught them. This paved the way for ChatGPT.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                {'На этом этапе история AI стала не только историей моделей, но и историей людей, трактующих будущее по-разному. '}
                <Term id="john-von-neumann">Джон фон Нейман</Term>
                {' и '}
                <Term id="ij-good">И.Дж. Гуд</Term>
                {' сформулировали идею интеллектуального взрыва; '}
                <Term id="ray-kurzweil">Рэй Курцвайль</Term>
                {' популяризировал экспоненциальный взгляд на прогресс; '}
                <Term id="eliezer-yudkowsky">Элиезер Юдковский</Term>
                {' и '}
                <Term id="nick-bostrom">Ник Бостром</Term>
                {' вывели тему выравнивания и экзистенциальных рисков в центр общественной дискуссии.'}
              </>
            ) : (
              <>
                {'At this stage, AI history became not only a story of new models, but also a story of people interpreting the future differently. '}
                <Term id="john-von-neumann">John von Neumann</Term>
                {' and '}
                <Term id="ij-good">I.J. Good</Term>
                {' framed the intelligence-explosion concept early; '}
                <Term id="ray-kurzweil">Ray Kurzweil</Term>
                {' popularized the exponential-progress view; '}
                <Term id="eliezer-yudkowsky">Eliezer Yudkowsky</Term>
                {' and '}
                <Term id="nick-bostrom">Nick Bostrom</Term>
                {' pushed alignment and existential-risk debates into mainstream policy and public discourse.'}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-3 text-white">
          {lang === 'ru' ? 'Зачем инженеру учить историю AI?' : 'Why Should an Engineer Study AI History?'}
        </h3>
        <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'История AI — это переход от иллюзии полного контроля (Символический ИИ) к управлению хаосом (Глубокое обучение). Мы больше не пишем 100% логики решения задачи. Мы задаём архитектуру, даём качественные данные и направляем процесс оптимизации. Понимая, что каждый "прорыв" в истории AI сопровождался завышенными ожиданиями, зимой и пересмотром понятия "интеллект" — вы лучше оцените, где находитесь сегодня.'
            : 'AI history is a transition from the illusion of absolute control (Symbolic AI) to managing chaos (Deep Learning). We no longer write 100% of the problem-solving logic. We define the architecture, provide quality data, and guide the optimization process. Understanding that every AI "breakthrough" in history was accompanied by inflated expectations, a winter, and a revision of what "intelligence" means — you will better assess where you stand today.'}
        </p>
        <p className="text-neutral-300 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Понимая, что современные LLM — это вероятностные системы распознавания паттернов, рождённые из ограничений прошлых архитектур, вы перестанете ждать от них безупречной дедукции и научитесь правильно выстраивать вокруг них инженерные системы защиты (RAG, Evals, Fallbacks).'
            : 'By understanding that modern LLMs are probabilistic pattern-recognition systems born from the limitations of past architectures, you will stop expecting flawless deduction from them. Instead, you will learn to build proper engineering guardrails around them (RAG, Evals, Fallbacks).'}
        </p>
      </div>

    </div>
  );
}
