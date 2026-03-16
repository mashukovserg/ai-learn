import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import { Info, Thermometer, Zap, Layers, BrainCircuit } from 'lucide-react';

export default function LlmMechanicsTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: Tokens & The BPE Process */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-start gap-3 text-emerald-400">
          <Info className="text-emerald-500 shrink-0 mt-1" />
          <span className="leading-tight text-balance">
            {lang === 'ru' ? 'Глава 1: Токены — атомы цифрового разума' : 'Chapter 1: Tokens — The Atoms of Digital Mind'}
          </span>
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? <>Представьте, что вам нужно передать сообщение человеку, который не знает вашего языка, но умеет работать с числовыми кодами. Вы не можете отправить текст как есть — сначала нужно разбить его на стандартные фрагменты и присвоить каждому номер. Именно это происходит с любым текстом, прежде чем его увидит языковая модель.</>
              : <>{'Neural networks do not understand words. They live in a world of numbers and vectors. For an '} <Term id="llm" lang={lang}>AI</Term> {' to read this text, it must be broken down into fragments called '} <Term id="token" lang={lang}>tokens</Term>. A token is not always a whole word. It can be a root, a suffix, or even a single character if the word is rare.</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Нейросети не понимают слов. Они живут в мире чисел и векторов. Чтобы '} <Term id="llm" lang={lang}>ИИ</Term> {' мог прочитать этот текст, его нужно разбить на фрагменты, называемые '} <Term id="token" lang={lang}>токенами</Term>. Токен — это не всегда целое слово. Это может быть корень, суффикс или даже отдельный символ, если слово редкое.</>
              : <>{'Modern models use the '} <Term id="bpe" lang={lang} /> {' algorithm. It starts with individual characters and gradually merges the most frequent character pairs into a single token. For example, "cat" + "s" might become "cats" as one token because they frequently appear together. This allows the AI to efficiently compress language.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Современные модели используют алгоритм '} <Term id="bpe" lang={lang} /> {'. Он начинает с отдельных букв и постепенно объединяет самые частые пары символов в один токен. Например, в английском слово "playing" часто кодируется двумя токенами: "play" + "ing", потому что обе части встречаются в огромном количестве слов. Для русского языка принцип тот же, хотя конкретные границы токенов зависят от обучающего корпуса и могут не совпадать с привычными морфемами.'}</>
              : <>Historically, Russian words were split into more tokens than English in older tokenizers, which increased <Term id="inference" lang={lang}>inference</Term> cost. Newer models reduced this gap, but token accounting still matters for budgets.</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Почему это важно? Токены определяют границы "памяти" модели. Если у модели окно в 128к токенов, это означает, что она может "видеть" одновременно текст объемом с небольшую книгу. Всё, что выходит за эти рамки, она мгновенно забывает.'
              : 'Why does this matter? Tokens define the boundaries of the model\'s "memory." If a model has a 128k token window, it means it can "see" a book\'s worth of text simultaneously. Anything outside that frame is instantly forgotten.'}
          </p>
          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
            <p className="text-sm font-semibold text-emerald-300 mb-2">
              {lang === 'ru' ? 'Что дальше?' : 'What next?'}
            </p>
            <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
              {lang === 'ru'
                ? 'Если вы хотите глубже разобраться, как модели отличаются по размеру контекстного окна и почему это влияет на качество ответов, откройте комнату «Ландшафт LLM».'
                : 'Now apply this idea at architecture level: how context limits, cost, and latency shape model selection for a real task.'}
            </p>
            <Link
              href={`/${lang}/rooms/llm-landscape`}
              className="inline-flex items-center rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#082018] hover:bg-emerald-300 transition-colors"
            >
              {lang === 'ru' ? 'Перейти в «Ландшафт LLM»' : 'Go to "LLM Landscape"'}
            </Link>
          </div>
        </div>
      </div>

      {/* Chapter 2: The Next-Token Game */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <BrainCircuit className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Великая игра в предсказания' : 'Chapter 2: The Great Prediction Game'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'Весь "интеллект", который вы видите в ChatGPT, — это результат одной-единственной задачи: "На основе всех предыдущих слов предскажи самое вероятное следующее". Это локальный процесс. Модель не знает, чем закончится предложение, когда начинает его писать.'
              : 'All the "intelligence" you see in ChatGPT is the result of a single task: "Based on all previous words, predict the most likely next one." This is a local process. The model doesn\'t know how a sentence will end when it starts writing it.'}
          </p>
          <p>
            {lang === 'ru'
              ? <>На каждом шаге модель рассчитывает вероятность для каждого возможного продолжения — по сути, составляет рейтинг всех кандидатов из своего словаря. Технически этот рейтинг проходит через шаг <Term id="softmax" lang={lang}>Softmax</Term>, который превращает сырые баллы в нормализованные вероятности. Дальше происходит отбор: система может взять только несколько самых вероятных вариантов, либо набрать минимальную группу, покрывающую заданный порог уверенности. Этот элемент случайности — не дефект, а конструктивное решение: без него модель повторяла бы одни и те же фразы дословно.</>
              : <>At each step, the model computes logits for the whole token vocabulary. <Term id="softmax" lang={lang}>Softmax</Term> then turns them into probabilities. The decoder selects the next token from this distribution.</>}
          </p>
          {lang !== 'ru' ? (
            <ul className="space-y-2 text-sm text-neutral-400 list-disc pl-5">
              <li>top-k: keep only the k most likely tokens.</li>
              <li>top-p (nucleus): keep the smallest set of tokens covering probability p.</li>
              <li>Sampling prevents loops and enables varied wording.</li>
            </ul>
          ) : null}
        </div>
      </div>

      {/* Chapter 3: Temperature */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Thermometer className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Температура' : 'Chapter 3: Temperature'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'При T=0 модель каждый раз выбирает самый вероятный вариант и даёт практически одинаковый ответ на один и тот же промпт. При T≈1 менее вероятные варианты получают реальный шанс — ответы становятся разнообразнее, но менее предсказуемыми.'
              : 'Temperature controls the balance between accuracy and creativity. At T=0, the model becomes a strict robot; at T=1, a creative storyteller.'}
          </p>
          {lang !== 'ru' ? (
            <>
              <p>
                Technically, temperature flattens or sharpens the next-token probability distribution. Lower values amplify the top candidate, while higher values give more chance to lower-probability tokens. That is why the same prompt can produce either stable, dry output or more vivid but less precise output.
              </p>
              <p>
                Important: temperature does not make the model smarter. It only changes token selection behavior. If facts are missing in context, high temperature usually increases hallucination risk. If context is strong and the task is creative, higher temperature can improve wording diversity.
              </p>
            </>
          ) : null}
          <div className="space-y-3">
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-emerald-300">0.0-0.2</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'код, SQL, юридические формулировки (максимальная детерминированность).' : 'code, SQL, legal wording (maximum determinism).'}</span>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-emerald-300">0.3-0.7</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'аналитика, суммаризация, продуктовые тексты.' : 'analysis, summarization, product copy.'}</span>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-emerald-300">0.8-1.2</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'брейншторм, storytelling, генерация вариантов.' : 'brainstorming, storytelling, variant generation.'}</span>
            </div>
          </div>
          <p>
            {lang === 'ru'
              ? 'Практическое правило: начинайте с консервативного значения (обычно 0.2-0.4), прогоняйте реальные кейсы и только потом повышайте температуру там, где действительно нужна вариативность. Если задача чувствительна к фактам, лучше сначала улучшить контекст и структуру промпта, а не компенсировать проблемы высокой температурой.'
              : 'Practical rule: start conservative (usually 0.2-0.4), evaluate on real cases, and only then raise temperature where variation is truly needed. If a task is fact-sensitive, improve context and prompt structure first instead of trying to compensate with higher temperature.'}
          </p>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-5 space-y-4">
            <h3 className="text-lg font-semibold text-emerald-300">
              {lang === 'ru' ? 'Где бесплатно потренироваться с температурой' : 'Where to practice temperature for free'}
            </h3>

            {lang === 'ru' ? (
              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  <strong className="text-neutral-100">1. Free LLM Playground.</strong> Браузерный sandbox для экспериментов с LLM. Можно менять параметры генерации (включая <strong>temperature</strong>) и сравнивать ответы разных моделей. Есть бесплатный лимит — около <strong>50 чатов в день</strong>.{' '}
                  <a href="https://playground.srclauncher.com/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                    Free LLM Playground
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-100">2. Hugging Face Playground.</strong> Интерактивная среда, где можно отправлять промпты в разные модели и смотреть, как меняются ответы. Подходит для базовых экспериментов с генерацией текста.{' '}
                  <a href="https://huggingface.co/chat/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                    Hugging Face
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-100">3. LM Studio.</strong> Бесплатное приложение для запуска LLM локально на компьютере. В интерфейсе можно менять параметры генерации, включая <strong>temperature</strong>.{' '}
                  <a href="https://lmstudio.ai/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                    LM Studio
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-100">4. Ollama + Open WebUI.</strong> Полностью бесплатный локальный стек: запускаете модель на своём компьютере и управляете параметрами генерации (<strong>temperature</strong>, penalties и др.) через веб-интерфейс.{' '}
                  <a href="https://ollama.com/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                    Ollama
                  </a>{' '}
                  и{' '}
                  <a href="https://openwebui.com/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                    Open WebUI
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  Try free playgrounds to feel how temperature changes output style: Free LLM Playground, Hugging Face Chat, LM Studio, or Ollama + Open WebUI for local runs.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#101010] p-5 space-y-4">
            <h3 className="text-lg font-semibold text-emerald-300">
              {lang === 'ru' ? 'Мини-упражнение' : 'Mini exercise'}
            </h3>
            {lang === 'ru' ? (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <p>
                  Возьмите один и тот же промпт: <span className="text-neutral-100 font-medium">«Придумай идею стартапа в образовании»</span>.
                </p>
                <p>
                  Запустите его с температурами: <span className="text-neutral-100">0.1, 0.4, 0.8, 1.0</span>.
                </p>
                <p>
                  Сравните результаты по трём критериям: повторяемость ответа, разнообразие идей и креативность формулировок.
                </p>
                <p>
                  Это самый быстрый способ почувствовать, как температура влияет на поведение модели.
                </p>
              </div>
            ) : (
              <p className="text-sm text-neutral-300 leading-relaxed">
                Use one prompt at temperatures 0.1, 0.4, 0.8, and 1.0. Compare repeatability, idea diversity, and phrasing creativity.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Chapter 4: Context Window */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Layers className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Контекстное окно' : 'Chapter 4: Context Window'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'Контекстное окно — это "рабочая память" ИИ. Всё, что находится внутри этого окна, модель может использовать для ответа. Всё, что выпало — забывается навсегда.'
              : 'The context window is the AI\'s "working memory." Everything inside this window can be used for the response. Everything that falls out is forgotten forever.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Есть хорошо задокументированный эффект: информация в начале и в конце контекста запоминается лучше, чем в середине. Поэтому если вы работаете с длинным промптом, ключевые ограничения стоит повторить ближе к концу, а не надеяться, что модель удержит их из вступления.'
              : 'Beginners often assume that a larger context window automatically solves everything. In practice, it does not: longer context increases cost, latency, and cognitive load for the model. If prompts are poorly structured, key information gets lost even in large windows.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Главный практический вывод: большое окно — это не повод загружать в него всё подряд. Чем точнее вы отбираете контекст, тем выше качество ответа и тем ниже стоимость запроса. Для работы с большими документами лучше использовать RAG (об этом — в разделе «Исследования и заземление»), чем пытаться уместить весь текст в одно окно.'
              : 'There is also a positional effect: the beginning and the end of context are often retained better than the middle. Critical constraints should be repeated near the end, not only at the top.'}
          </p>
          {lang !== 'ru' ? (
            <>
              <ul className="space-y-2 text-sm text-neutral-400 list-disc pl-5">
                <li>KV-cache speeds generation, but grows with dialogue length and consumes VRAM.</li>
                <li>&quot;Lost in the Middle&quot;: models often retain middle-context facts worse in very long prompts.</li>
                <li>Good practice: structure context in blocks and repeat critical constraints near the end of the prompt.</li>
              </ul>
              <p>
                Production-friendly protocol: (1) set token budgets for input and output, (2) trim noise before sending prompts, (3) keep only context that materially affects the answer, and (4) use RAG for long documents instead of stuffing everything at once.
              </p>
            </>
          ) : null}
        </div>
      </div>

      {/* Chapter 5: Why It Hallucinates */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Zap className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Природа галлюцинаций' : 'Chapter 5: The Nature of Hallucinations'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? <><Term id="hallucination" lang={lang}>Галлюцинации</Term> {' — это не баг, это особенность архитектуры. Поскольку модель всегда обязана выдать следующий токен, она сделает это, даже если не уверена в ответе. Если вероятность правильного факта — 5%, а вероятность красивой, но ложной фразы — 15%, при определенной температуре модель выберет ложь.'}</>
            : <><Term id="hallucination" lang={lang}>Hallucinations</Term> {' are not a bug; they are a feature of the architecture. Since the model is always required to output a next token, it will do so even if it is unsure of the answer. If the probability of a correct fact is 5%, and the probability of a beautiful but false phrase is 15%, at a certain temperature, the model will choose the lie.'}</>}
        </p>
        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? 'Полностью устранить галлюцинации нельзя — это следствие самой архитектуры. Но можно существенно снизить их частоту и тяжесть последствий. Три ключевых рычага: температура (чем она ниже, тем больше модель «прижимается» к самым вероятным вариантам и реже выдумывает), контекст (если нужные факты явно присутствуют в промпте или получены через RAG, модели не нужно полагаться на вероятностную «память»), и верификация (для ответов, где цена ошибки высока, стоит просить модель помечать неуверенность и проверять критичные утверждения внешним инструментом или вторым запросом).'
            : ''}
        </p>
        {lang !== 'ru' ? (
          <ul className="space-y-2 text-sm text-neutral-400 list-disc pl-5">
            <li>Lower temperature for factual tasks.</li>
            <li>Inject verifiable context (RAG/citations/sources).</li>
            <li>Ask the model to mark uncertainty and validate critical outputs externally.</li>
          </ul>
        ) : null}
      </div>

      {/* Chapter 6: Practical decoding checklist */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">
          {lang === 'ru' ? 'Глава 6: Быстрый чек-лист перед запуском' : 'Chapter 6: Fast Pre-Launch Checklist'}
        </h2>
        <ol className="space-y-2 text-sm text-neutral-300 list-decimal pl-5">
          <li>{lang === 'ru' ? 'Определи цель ответа: точность или креативность.' : 'Define the response goal: precision or creativity.'}</li>
          <li>{lang === 'ru' ? 'Подбери температуру и sampling (top-k/top-p) под цель.' : 'Pick temperature and sampling (top-k/top-p) for that goal.'}</li>
          <li>{lang === 'ru' ? 'Проверь длину контекста и риск "Lost in the Middle".' : 'Check context length and Lost-in-the-Middle risk.'}</li>
          <li>{lang === 'ru' ? 'Для high-stakes ответов добавь валидацию и источники.' : 'For high-stakes outputs, add validation and sources.'}</li>
        </ol>
      </div>
    </>
  );
}
