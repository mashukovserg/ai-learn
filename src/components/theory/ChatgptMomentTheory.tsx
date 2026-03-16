import React from 'react';
import Term from '@/components/Term';
import { Info, Clock, Zap, Award, AlertCircle, MessageSquare, Globe, TrendingUp } from 'lucide-react';

export default function ChatgptMomentTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: The Quiet Before the Storm */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Clock className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: Тишина перед бурей (До ноября 2022)' : 'Chapter 1: The Quiet Before the Storm (Pre-November 2022)'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
          {lang === 'ru'
            ? 'До 30 ноября 2022 года мир искусственного интеллекта представлял собой раздробленный ландшафт, в котором обитали преимущественно исследователи, узкопрофильные разработчики и техно-энтузиасты. Хотя термин «ИИ» часто звучал на советах директоров, для обычного человека он оставался абстрактным понятием — чем-то, запрятанным в рекомендательных алгоритмах Netflix или в системе распознавания лиц iPhone. Мы уже знали про GPT-3, выпущенную OpenAI в 2020 году, но существовал огромный «разрыв в юзабилити». Использование модели требовало наличия API-ключа, привязанной кредитной карты и терпения, чтобы разобраться в интерфейсе Playground.'
            : 'Before November 30, 2022, the AI world was a fragmented landscape occupied mainly by researchers and niche developers. While "AI" was a buzzword in boardrooms, for the average person, it remained an abstract concept—something hidden in Netflix recommendation algorithms or iPhone face recognition. We already had GPT-3, released by OpenAI in 2020, but a massive "usability gap" existed. Using the model required an API key, a linked credit card, and the patience to navigate the complex Playground interface.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-6">
          {lang === 'ru'
            ? 'Вам приходилось осваивать темное искусство «few-shot промптинга» — предоставления модели нескольких примеров того, что вы хотите получить, просто чтобы добиться связного ответа. Для широкой публики «Большая языковая модель» была дорогим и капризным инструментом для специалистов, а не повседневным помощником. Программы казались сложными, а их логика — непредсказуемой для неподготовленного пользователя.'
            : 'Users had to master the dark art of "few-shot prompting"—providing the model with multiple examples of the desired output just to get a coherent response. To the general public, a "Large Language Model" was an expensive, temperamental tool for specialists, not a daily utility. Applications felt complex, and their logic seemed unpredictable to the untrained user.'}
        </p>
        <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5 my-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
            <span className=" font-bold text-emerald-400 uppercase tracking-widest">
              {lang === 'ru' ? 'Инсайт' : 'Insight'}
            </span>
          </div>
          <p className=" font-semibold text-neutral-200 mb-2">
            {lang === 'ru' ? 'Внутренний просчет OpenAI:' : 'The Internal OpenAI Miscalculation:'}
          </p>
          <p className=" text-neutral-400 leading-relaxed">
            {lang === 'ru'
              ? 'Запуск ChatGPT не планировался как собыние мирового масштаба. Внутри OpenAI проект считался «незаметным превью исследования» (low-key research preview). Основная цель — сбор данных о том, как люди взаимодействуют с диалоговой моделью, чтобы улучшить её безопасность. Маркетингового бюджета не было. Никто не ожидал, что это станет самым быстрорастущим потребительским приложением в истории интернета — 100 млн пользователей за два месяца.'
              : 'The launch of ChatGPT wasn&apos;t planned as a world-changing event. Inside OpenAI, the project was regarded as a "low-key research preview." The primary goal was to gather data on how people interact with a dialogue-tuned model to improve safety. There was no dedicated marketing budget. No one expected it to become the fastest-growing consumer app in history, reaching 100 million users in just two months.'}
          </p>
        </div>
        <p className="text-neutral-300 leading-relaxed mt-6">
          {lang === 'ru'
            ? 'Момент не возник из ниоткуда. Его готовили годы накопленного прогресса. В 2017 году архитектура Transformer изменила подход к работе с текстом. Затем появились «<Term id="scaling-laws" lang={lang}>scaling laws</Term>» — эмпирическое наблюдение, что чем больше модель и данных, тем предсказуемо лучше её способности. Облачные вычисления сделали возможным обучение гигантских сетей, а пандемия ускорила цифровизацию мира и привычку общаться онлайн. ChatGPT был логическим завершением технологической кривой, которая медленно, но неизбежно шла вверх.'
            : 'The moment didn&apos;t emerge from nowhere. It was prepared by years of accumulated progress. In 2017, the Transformer architecture revolutionized text processing. Then came the "<Term id="scaling-laws" lang={lang}>scaling laws</Term>"—the empirical observation that the larger the model and the data, the predictably better its capabilities. Cloud computing enabled the training of massive networks, and the pandemic accelerated global digitalization and the habit of online communication. ChatGPT was the logical culmination of a technological curve that was slowly but inevitably rising.'}
        </p>
      </div>

      {/* Chapter 2: The Secret Ingredient - <Term id="rlhf" lang={lang}>RLHF</Term> */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Zap className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Секретный ингредиент — <Term id="rlhf" lang={lang}>RLHF</Term> (Обучение послушанию)' : 'Chapter 2: The Secret Ingredient - <Term id="rlhf" lang={lang}>RLHF</Term> (Training for Obedience)'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
          {lang === 'ru'
            ? 'Настоящая магия момента ChatGPT заключалась не в том, что модель внезапно стала «умнее» за одну ночь, а в том, что она стала «послушной». Чтобы понять это, нужно рассмотреть переход от базовой GPT-3 к InstructGPT — фундаменту, на котором построен ChatGPT. Базовая модель — это просто предсказатель следующего слова. Если вы просили её написать эссе, она могла в ответ выдать список вопросов для викторины, потому что так было в её обучающих данных.'
            : 'The real magic of the ChatGPT moment wasn&apos;t that the model suddenly became "smarter" overnight; it was that it became "obedient." To understand this, we must look at the transition from base GPT-3 to InstructGPT—the foundation upon which ChatGPT is built. A base model is simply a next-word predictor. If you asked it to write an essay, it might respond with a list of quiz questions because that&apos;s what appeared in its training data.'}
        </p>
        
        <div className="grid md:grid-cols-1 gap-4 mb-8">
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase ">{lang === 'ru' ? 'Процесс из трех этапов:' : 'The Three-Step Process:'}</h4>
            <ul className="space-y-4  text-neutral-400 list-disc ml-5">
              <li><strong>{lang === 'ru' ? 'Контролируемая настройка (SFT):' : 'Supervised Fine-Tuning (SFT):'}</strong> {lang === 'ru' ? 'Люди-тренеры прописывают тысячи идеальных диалогов, обучая модель формату полезного помощника.' : 'Human trainers write out thousands of ideal dialogues, teaching the model the format of a helpful assistant.'}</li>
              <li><strong>{lang === 'ru' ? 'Модель вознаграждения:' : 'Reward Modeling:'}</strong> {lang === 'ru' ? 'Люди ранжируют ответы модели от лучших к худшим. Так ИИ учится понимать, что именно мы считаем "хорошим" ответом.' : 'Humans rank model outputs from best to worst. This is how the AI learns to understand what exactly we consider a "good" answer.'}</li>
              <li><strong>{lang === 'ru' ? 'Оптимизация (PPO):' : 'Optimization (PPO):'}</strong> {lang === 'ru' ? 'Модель тренируется сама, пытаясь максимизировать оценку от виртуального "критика", созданного на прошлом этапе.' : 'The model trains itself, trying to maximize the score from the virtual "critic" created in the previous step.'}</li>
            </ul>
          </div>
        </div>

        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? 'Этот процесс называют «выравниванием» (Alignment). Он превратил ИИ из статистического автодополнителя текста в собеседника, который понимает ваши намерения. Теперь модель не просто "знает" факты интернета, она знает, как подать их в форме, удобной и безопасной для человека.'
            : 'This process is called "Alignment." It transformed the AI from a statistical text completer into a conversationalist that understands your intentions. Now, the model doesn&apos;t just "know" internet facts; it knows how to present them in a form that is useful and safe for humans.'}
        </p>
      </div>

      {/* Chapter 3: The 5-Day Miracle & Interface Power */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <TrendingUp className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Чудо пяти дней и сила интерфейса' : 'Chapter 3: The 5-Day Miracle & Interface Power'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6">
          {lang === 'ru'
            ? 'Почему чат-бокс изменил мир, а API — нет? Ответ в психологии. Выбрав формат чата, OpenAI использовала паттерн, который миллиарды людей уже понимали по WhatsApp и Slack. Это создало "низкий порог" входа: вам не нужно быть программистом, достаточно просто уметь печатать.'
            : 'Why did a chat box change the world when the API didn&apos;t? The answer lies in psychology. By choosing the chat format, OpenAI used a pattern that billions of people already understood from WhatsApp and Slack. This created a "low floor" of entry: you don&apos;t need to be a programmer; you just need to know how to type.'}
        </p>
        <div className="grid grid-cols-1 gap-2  mb-6">
          <div className="flex items-center gap-4 bg-black/20 p-3 rounded-lg border border-white/5">
            <div className="w-24 text-neutral-500 font-mono">Netflix</div>
            <div className="h-2 flex-1 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-neutral-600" style={{ width: '100%' }} />
            </div>
            <div className="w-20 text-right">3.5y</div>
          </div>
          <div className="flex items-center gap-4 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
            <div className="w-24 text-emerald-400 font-bold font-mono">ChatGPT</div>
            <div className="h-2 flex-1 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: '2%' }} />
            </div>
            <div className="w-20 text-right text-emerald-400 font-bold">5d</div>
          </div>
        </div>
        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? 'Это создало глобальный эффект "зеркала": ИИ начал звучать настолько по-человечески, что люди впервые массово ощутили, что будущее из научной фантастики наступило прямо сейчас.'
            : 'This created a global "mirror" effect: the AI began to sound so human that, for the first time, people collectively felt that the science fiction future had arrived right now.'}
        </p>
      </div>

      {/* Chapter 4: Structural Changes & Market Reaction */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Globe className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Тектонические сдвиги и реакция рынка' : 'Chapter 4: Tectonic Shifts & Market Reaction'}
        </h2>
        <div className="space-y-8">
          {/* Market Reaction & Code Red */}
          <div className="border-b border-[#262626] pb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="text-yellow-500" size={20} />
              {lang === 'ru' ? 'Google "Code Red": Угроза бизнес-модели' : 'Google "Code Red": An Existential Threat'}
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Релиз ChatGPT вызвал в штаб-квартире Google состояние «Красного кода» (Code Red). Проблема заключалась не просто в конкуренции, а в фундаментальной угрозе рекламной бизнес-модели, которая кормила компанию 20 лет. Традиционный поиск Google строится на «синих ссылках»: вы ищете, кликаете, видите рекламу. ChatGPT предложил альтернативу — прямой синтезированный ответ без необходимости переходить по сайтам. Это превратило интернет из библиотеки, где нужно искать самому, в оракула, который выдает готовый результат.'
                : 'The release of ChatGPT triggered a "Code Red" at Google. The issue was not just competition, but a fundamental threat to the ad-based business model that sustained the company for 20 years. Traditional Google Search relies on "blue links": you search, click, and see ads. ChatGPT offered an alternative—direct synthesized answers without the need to visit websites. This transformed the internet from a library where you search for yourself into an oracle that delivers ready-made results.'}
            </p>
            <p className="text-neutral-400 ">
              {lang === 'ru'
                ? 'Результат: Google в экстренном порядке выпустил Bard (позже Gemini), Microsoft мгновенно интегрировала ИИ в Bing, а капитализация компаний начала напрямую зависеть от их успехов в области больших языковых моделей.'
                : 'The result: Google rushed out Bard (later Gemini), Microsoft instantly integrated AI into Bing, and company valuations began to depend directly on their success in large language models.'}
            </p>
          </div>

          {/* Education & Coding */}
          <div className="border-b border-[#262626] pb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="text-blue-400" size={20} />
              {lang === 'ru' ? 'Образование и Код: Смена парадигмы' : 'Education and Code: A Paradigm Shift'}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="text-emerald-400 font-bold mb-2  uppercase">{lang === 'ru' ? 'Образование' : 'Education'}</h4>
                <p className=" text-neutral-300 leading-relaxed">
                  {lang === 'ru'
                    ? 'Традиционное эссе как мерило знаний «умерло». Когда ИИ пишет текст уровня выпускника вуза за 30 секунд, система оценки должна сместиться с продукта (результата) на процесс (мышление). Университеты начали возвращаться к устным экзаменам и написанию работ в классе, одновременно пытаясь интегрировать ИИ как тьютора, а не как инструмент для списывания.'
                    : 'The traditional essay as a measure of knowledge "died." When AI writes graduate-level text in 30 seconds, the assessment system must shift from product (result) to process (thinking). Universities began returning to oral exams and in-class writing while trying to integrate AI as a tutor rather than a cheating tool.'}
                </p>
              </div>
              <div>
                <h4 className="text-emerald-400 font-bold mb-2  uppercase">{lang === 'ru' ? 'Программирование' : 'Programming'}</h4>
                <p className=" text-neutral-300 leading-relaxed">
                  {lang === 'ru'
                    ? 'Программисты получили «экзоскелет». Написание шаблонного кода, unit-тестов и документации теперь занимает минуты вместо часов. Порог входа в индустрию снизился: теперь важно не то, помните ли вы синтаксис, а то, можете ли вы правильно спроектировать систему и проверить код, написанный ИИ. Роль программиста сместилась от «писателя» к «редактору и архитектору».'
                    : 'Programmers gained an "exoskeleton." Writing boilerplate code, unit tests, and documentation now takes minutes instead of hours. The entry barrier to the industry dropped: what matters now is not whether you remember syntax, but whether you can design a system correctly and verify code written by AI. The role of the programmer shifted from "writer" to "editor and architect."'}
                </p>
              </div>
            </div>
          </div>

          {/* Geopolitics & Infrastructure */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="text-orange-400" size={20} />
              {lang === 'ru' ? 'Геополитика и "Вычислительная Нефть"' : 'Geopolitics and "Compute Oil"'}
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Мир осознал, что вычислительные мощности — это новая нефть. Капитализация NVIDIA превысила три триллиона долларов, так как их чипы H100 стали единственным способом обучать передовые модели. Понятие «Суверенный ИИ» стало ключевым в геополитике: страны (от Франции до ОАЭ) начали инвестировать миллиарды в создание собственных дата-центров и моделей, чтобы не зависеть от облачных технологий США и Китая. Доступ к GPU стал вопросом национальной безопасности.'
                : 'The world realized that compute power is the new oil. NVIDIA&apos;s valuation surpassed three trillion dollars as their H100 chips became the only way to train cutting-edge models. The concept of "Sovereign AI" became a geopolitical cornerstone: nations (from France to the UAE) began investing billions in creating their own data centers and models to avoid dependence on US and Chinese cloud technology. Access to GPUs became a matter of national security.'}
            </p>
            <div className="bg-black/30 p-4 rounded-lg border border-white/5  text-neutral-500">
              {lang === 'ru'
                ? 'Факт: Стоимость обучения современной модели уровня GPT-4 оценивается в сотни миллионов долларов только за электричество и аренду чипов.'
                : 'Fact: The cost of training a modern GPT-4 class model is estimated at hundreds of millions of dollars for electricity and chip rentals alone.'}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 5: Why it is a "Moment" */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <MessageSquare className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Почему это именно "Момент"?' : 'Chapter 5: Why it is a "Moment"?'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4 text-lg">
          {lang === 'ru'
            ? 'В истории технологий есть точки невозврата: печатный станок, самолет, iPhone. "ChatGPT момент" — это точка, когда интеллект перестал быть монополией биологии. Мы перешли от эпохи "Поиска" к эпохе "Генерации".'
            : 'Tech history has points of no return: the printing press, the airplane, the iPhone. The "ChatGPT moment" is the point where intelligence ceased to be a biological monopoly. We moved from the era of "Search" to the era of "Generation."'}
        </p>
        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? 'Компьютер перестал быть просто инструментом для хранения данных. Он стал синтезатором новых идей, способным рассуждать, объяснять и творить вместе с человеком. Мы открыли новую главу в эволюции инструментов человечества, где программа превращается в активного партнера по мышлению.'
            : 'The computer ceased to be just a tool for storing data. It became a synthesizer of new ideas, capable of reasoning, explaining, and creating alongside humans. This marks a new chapter in the evolution of human tools, where software becomes an active thinking partner.'}
        </p>
      </div>

      {/* Final Warning */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-400">
          <AlertCircle className="text-red-500" />
          {lang === 'ru' ? 'Обратная сторона медали: Галлюцинации и Риски' : 'The Dark Side: Hallucinations and Risks'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Несмотря на триумф, момент ChatGPT обнажил критическую проблему: "галлюцинации". Модель может уверенно врать, потому что она не знает фактов, а лишь предсказывает вероятности слов. Это делает её опасной в руках тех, кто не проверяет результат.'
            : 'Despite the triumph, the ChatGPT moment revealed a critical problem: "hallucinations." The model can confidently lie because it doesn&apos;t know facts, only predicts word probabilities. This makes it dangerous in the hands of those who don&apos;t verify the result.'}
        </p>
        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? 'Понимание того, что ИИ — это вероятностная машина, а не всезнающий оракул, является ключом к ответственному использованию этой новой суперсилы.'
            : 'Understanding that AI is a probabilistic machine, not an omniscient oracle, is key to the responsible use of this new superpower.'}
        </p>
      </div>
    </>
  );
}