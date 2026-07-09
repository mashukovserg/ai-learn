"use client";

import React from 'react';
import Term from '@/components/Term';

export default function LocalModels101Theory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: What Are Open Weights? */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 1: Что такое открытые веса' : 'Chapter 1: What Are Open Weights'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? <>{'Когда вы пишете запрос в ChatGPT или Claude, текст уходит на сервер компании, обрабатывается там и возвращается ответом. Сама модель — файл с миллиардами обученных параметров — вам недоступна. Локальные модели устроены иначе: их '} <Term id="open-weights" lang={lang}>открытые веса</Term> {' можно скачать как обычный файл и запустить на собственном компьютере. Запрос никуда не отправляется — весь '} <Term id="inference" lang={lang}>инференс</Term> {' происходит на вашем железе.'}</>
              : <>{'When you send a prompt to ChatGPT or Claude, the text travels to the company\'s servers, gets processed there, and comes back as a response. The model itself — a file with billions of trained parameters — is out of your reach. Local models work differently: their '} <Term id="open-weights" lang={lang}>open weights</Term> {' can be downloaded like a regular file and run on your own computer. The prompt never leaves your machine — all '} <Term id="inference" lang={lang}>inference</Term> {' happens on your hardware.'}</>}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Важно не путать открытые веса с open source. Скачивая модель, вы получаете готовые параметры — результат обучения. Но сами обучающие данные, код пайплайна и рецепты обучения компании, как правило, не публикуют. Кроме того, у каждой модели своя лицензия: одни разрешают почти всё, другие ограничивают коммерческое использование или требуют указывать происхождение модели. Перед использованием в продукте лицензию стоит прочитать — детали лицензий разобраны в комнате про Llama 3.1 8B.'
              : 'It is important not to confuse open weights with open source. When you download a model, you get the finished parameters — the result of training. The training data, pipeline code, and training recipes are usually not published. Each model also carries its own license: some allow almost anything, others restrict commercial use or require attribution. Read the license before shipping a product — the licensing details are covered in the Llama 3.1 8B room.'}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Аналогия' : 'Analogy'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Облачная модель — как ресторан: вы получаете готовое блюдо, но не рецепт и не кухню. Открытые веса — как замороженный полуфабрикат из магазина: готовите дома, на своей плите, и никто не знает, что вы ели на ужин. Но рецепт (обучающие данные) производитель всё равно держит в секрете.'
                : 'A cloud model is like a restaurant: you get the finished dish but not the recipe or the kitchen. Open weights are like a frozen meal from the store: you cook it at home, on your own stove, and nobody knows what you had for dinner. The recipe (training data), however, is still the manufacturer\'s secret.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: Why Run Locally */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 2: Зачем запускать локально' : 'Chapter 2: Why Run Locally'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Первая причина — приватность. Медицинские записи, юридические документы, исходный код с коммерческой тайной — есть данные, которые нельзя или страшно отправлять на чужие серверы. Локальная модель обрабатывает их, не покидая периметра компании, что снимает целый класс юридических вопросов о передаче данных третьим лицам. Вторая причина — работа офлайн: модель на ноутбуке отвечает в самолёте, в деревне без интернета и при недоступности облачного сервиса.'
              : 'The first reason is privacy. Medical records, legal documents, source code with trade secrets — some data cannot or should not be sent to someone else\'s servers. A local model processes them without leaving the company perimeter, removing a whole class of legal questions about third-party data transfer. The second reason is offline work: a model on a laptop answers on a plane, in a village with no internet, or during a cloud outage.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Третья причина — контроль затрат. Облачные API берут плату за каждый токен, и при больших объёмах (массовая обработка документов, генерация синтетических данных) счёт растёт линейно. Локальная модель требует один раз вложиться в железо, дальше вы платите только за электричество. Четвёртая — контроль поведения: модель не обновится без вашего ведома, не изменит стиль ответов после апдейта и может быть дообучена под вашу задачу.'
              : 'The third reason is cost control. Cloud APIs charge per token, and at high volume (bulk document processing, synthetic data generation) the bill grows linearly. A local model needs a one-time hardware investment; after that you pay only for electricity. The fourth is behavior control: the model will not silently update, will not change its answer style after a release, and can be fine-tuned for your task.'}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <h4 className="font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Где облако выигрывает' : 'Where the Cloud Wins'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Честная картина требует второй колонки. Фронтирные облачные модели заметно умнее любой модели, которая помещается на обычный ноутбук: разрыв особенно виден на сложных рассуждениях, редких языках и длинных задачах. Облако не требует администрирования — не нужно следить за драйверами, обновлениями и совместимостью. И оно масштабируется мгновенно: тысяча параллельных запросов для API — норма, для домашней видеокарты — фантастика. Выбор локальной модели — это компромисс, а не бесплатное улучшение.'
                : 'An honest picture needs the second column. Frontier cloud models are noticeably smarter than anything that fits on a regular laptop: the gap shows on complex reasoning, low-resource languages, and long tasks. The cloud requires no administration — no drivers, updates, or compatibility to babysit. And it scales instantly: a thousand parallel requests is routine for an API and fantasy for a home GPU. Choosing a local model is a tradeoff, not a free upgrade.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 3: The Open Model Landscape */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 3: Ландшафт открытых моделей' : 'Chapter 3: The Open Model Landscape'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Экосистема открытых моделей выросла вокруг нескольких семейств. Llama от Meta — самое влиятельное: первая версия утекла в сеть в феврале 2023 года, Llama 2 вышла уже официально в июле 2023-го, а Llama 3.1 (июль 2024) подняла планку качества для открытых моделей. Qwen от Alibaba славится сильной многоязычностью, Mistral 7B от французской Mistral AI в сентябре 2023 года показала, что 7 миллиардов параметров могут обгонять модели вдвое больше. Gemma — открытая линейка Google, Phi от Microsoft делает ставку на компактность, а DeepSeek-R1 (январь 2025) принесла в открытый мир рассуждающие модели.'
              : 'The open model ecosystem grew around a few families. Meta\'s Llama is the most influential: the first version leaked online in February 2023, Llama 2 shipped officially in July 2023, and Llama 3.1 (July 2024) raised the quality bar for open models. Alibaba\'s Qwen is known for strong multilingual skills; Mistral 7B from France\'s Mistral AI showed in September 2023 that 7 billion parameters can beat models twice the size. Gemma is Google\'s open line, Microsoft\'s Phi bets on compactness, and DeepSeek-R1 (January 2025) brought reasoning models to the open world.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Главная характеристика модели — число параметров: 1–4B (миллиарда) — совсем маленькие, для телефонов и простых задач; 7–9B — рабочие лошадки для ноутбуков; 27–70B — требуют серьёзной видеокарты или нескольких; сотни миллиардов — уже уровень серверных кластеров. Чем больше параметров, тем умнее модель, но тем больше памяти ей нужно. Для старта на обычном ноутбуке разумный выбор — класс 7–9B.'
              : 'A model\'s headline characteristic is its parameter count: 1–4B (billion) — tiny, for phones and simple tasks; 7–9B — the workhorses for laptops; 27–70B — demand a serious GPU or several; hundreds of billions — server-cluster territory. More parameters means a smarter model but more memory. For a first run on a regular laptop, the 7–9B class is the sensible choice.'}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Семейство' : 'Family'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Компания' : 'Company'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Чем известно' : 'Known For'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Llama</td>
                    <td className="py-2 pr-4">Meta</td>
                    <td className="py-2">{lang === 'ru' ? 'Ориентир всей открытой экосистемы' : 'The reference point of the open ecosystem'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Qwen</td>
                    <td className="py-2 pr-4">Alibaba</td>
                    <td className="py-2">{lang === 'ru' ? 'Сильная многоязычность' : 'Strong multilingual performance'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Mistral</td>
                    <td className="py-2 pr-4">Mistral AI</td>
                    <td className="py-2">{lang === 'ru' ? 'Эффективность малых моделей' : 'Small-model efficiency'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Gemma</td>
                    <td className="py-2 pr-4">Google</td>
                    <td className="py-2">{lang === 'ru' ? 'Открытая линейка на технологиях Gemini' : 'Open line built on Gemini technology'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Phi</td>
                    <td className="py-2 pr-4">Microsoft</td>
                    <td className="py-2">{lang === 'ru' ? 'Компактные модели на отборных данных' : 'Compact models trained on curated data'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">DeepSeek</td>
                    <td className="py-2 pr-4">DeepSeek</td>
                    <td className="py-2">{lang === 'ru' ? 'Открытые рассуждающие модели (R1)' : 'Open reasoning models (R1)'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 4: Your First Local Run */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 4: Первый запуск' : 'Chapter 4: Your First Local Run'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Самый простой путь — Ollama: бесплатный инструмент командной строки для Mac, Linux и Windows. Порядок действий: установить Ollama с официального сайта, скачать модель командой скачивания (pull), запустить её командой запуска (run) и проверить работу тестовым вопросом в чате. Весь путь от установки до первого ответа занимает минут пять. Если командная строка пугает, есть LM Studio — приложение с графическим интерфейсом, где модели выбираются из каталога кликом.'
              : 'The easiest path is Ollama: a free command-line tool for Mac, Linux, and Windows. The sequence: install Ollama from the official site, download a model with the pull command, start it with the run command, and verify it works with a test question in the chat. The whole journey from install to first answer takes about five minutes. If the command line feels intimidating, there is LM Studio — a GUI application where models are picked from a catalog with a click.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? <>{'Ключевое понятие при выборе версии модели — '} <Term id="quantization" lang={lang}>квантизация</Term>{': сжатие весов за счёт снижения точности чисел. Версия Q8 почти не теряет качества и занимает вдвое меньше памяти, чем несжатая; Q4 экономит ещё больше ценой лёгкой деградации ответов. Сколько именно нужно памяти — определяет '} <Term id="vram" lang={lang}>VRAM</Term> {' вашей видеокарты (на Mac — объединённая память): 8 ГБ хватает на модель 7–8B в Q4, 16 ГБ — на 8B без сжатия, а модели классов 30B+ требуют 24 ГБ и больше даже в Q4.'}</>
              : <>{'The key concept when picking a model version is '} <Term id="quantization" lang={lang}>quantization</Term>{': compressing weights by lowering numeric precision. A Q8 version loses almost no quality and takes half the memory of the uncompressed one; Q4 saves even more at the cost of slight answer degradation. How much memory you need is set by your GPU\'s '} <Term id="vram" lang={lang}>VRAM</Term> {' (unified memory on a Mac): 8 GB fits a 7–8B model in Q4, 16 GB fits an 8B uncompressed, and 30B+ class models need 24 GB or more even in Q4.'}</>}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Куда дальше' : 'Where to Go Next'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Подробный разбор одного конкретного запуска — с командами, сравнением Ollama, vLLM и Hugging Face Transformers и точными бюджетами памяти — ждёт в комнате «Llama 3.1 8B». Эта глава даёт общую карту; та комната — маршрут по одной дороге.'
                : 'A detailed walkthrough of one specific setup — with commands, an Ollama vs. vLLM vs. Hugging Face Transformers comparison, and exact memory budgets — awaits in the "Llama 3.1 8B" room. This chapter gives you the map; that room walks one road.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 5: Limits and Expectations */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 5: Пределы и ожидания' : 'Chapter 5: Limits and Expectations'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Типичное разочарование новичка: скачал модель 8B, задал ей вопрос, на который ChatGPT отвечает блестяще, — и получил ответ заметно слабее. Это ожидаемо. Модель на ноутбуке в сотни раз меньше фронтирной облачной, и разница проявляется на сложных рассуждениях, точных фактах и редких темах. Маленькие модели чаще галлюцинируют — уверенно выдают неверные факты, — поэтому проверка ответов для них ещё важнее, чем для больших.'
              : 'A typical beginner disappointment: you download an 8B model, ask it a question ChatGPT answers brilliantly — and get a noticeably weaker response. That is expected. A laptop model is hundreds of times smaller than a frontier cloud model, and the gap shows on complex reasoning, precise facts, and rare topics. Small models hallucinate more often — confidently producing wrong facts — so verifying answers matters even more than with big ones.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Правильная стратегия — подбирать инструмент под задачу. Локальная модель класса 7–9B отлично справляется с суммаризацией документов, черновиками текстов, классификацией, извлечением данных из приватных файлов и ролью автодополнения. Для сложного анализа, нетривиального кода и ответственных решений разумно эскалировать задачу к облачной фронтирной модели — если данные позволяют. Гибридная схема «локальная для потока, облачная для сложного» на практике встречается чаще, чем чистые крайности.'
              : 'The right strategy is matching the tool to the task. A local 7–9B model handles document summarization, text drafts, classification, data extraction from private files, and autocomplete duty well. For complex analysis, non-trivial code, and high-stakes decisions, it is reasonable to escalate to a frontier cloud model — if the data allows it. The hybrid pattern "local for volume, cloud for hard cases" is more common in practice than either extreme.'}
          </p>
        </div>
      </div>
    </>
  );
}
