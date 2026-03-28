"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import { Info, Thermometer, Zap, Layers, BrainCircuit, FlaskConical } from 'lucide-react';

export default function LlmMechanicsTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: Tokens & The BPE Process */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
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
              : <>{'Neural networks do not understand words. They live in a world of numbers and vectors. For an '} <Term id="llm">AI</Term> {' to read this text, it must be broken down into fragments called '} <Term id="token" lang={lang}>tokens</Term>. A token is not always a whole word. It can be a root, a suffix, or even a single character if the word is rare.</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Нейросети не понимают слов. Они живут в мире чисел и векторов. Чтобы '} <Term id="llm">ИИ</Term> {' мог прочитать этот текст, его нужно разбить на фрагменты, называемые '} <Term id="token" lang={lang}>токенами</Term>. Токен — это не всегда целое слово. Это может быть корень, суффикс или даже отдельный символ, если слово редкое.</>
              : <>{'Modern models use the '} <Term id="bpe" /> {' algorithm. It starts with individual characters and gradually merges the most frequent character pairs into a single token. For example, "cat" + "s" might become "cats" as one token because they frequently appear together. This allows the AI to efficiently compress language.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Современные модели используют алгоритм '} <Term id="bpe" /> {'. Он начинает с отдельных букв и постепенно объединяет самые частые пары символов в один токен. Например, в английском слово "playing" часто кодируется двумя токенами: "play" + "ing", потому что обе части встречаются в огромном количестве слов. Для русского языка принцип тот же, хотя конкретные границы токенов зависят от обучающего корпуса и могут не совпадать с привычными морфемами.'}</>
              : <>Historically, Russian words were split into more tokens than English in older tokenizers, which increased <Term id="inference">inference</Term> cost. Newer models reduced this gap, but token accounting still matters for budgets.</>}
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
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
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
              ? <>На каждом шаге модель рассчитывает вероятность для каждого возможного продолжения — по сути, составляет рейтинг всех кандидатов из своего словаря (обычно это 50,000 – 100,000 токенов). Технически этот рейтинг проходит через шаг <Term id="softmax">Softmax</Term>, который превращает сырые баллы в нормализованные вероятности.</>
              : <>At each step, the model computes logits for the whole token vocabulary (typically 50,000 – 100,000 entries). <Term id="softmax">Softmax</Term> then turns them into normalized probabilities. The decoder selects the next token from this distribution.</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Интересно, что модель не выбирает всегда самый вероятный токен. Если бы она это делала (Greedy Search), ответы были бы крайне сухими, повторяющимися и "роботизированными". Вместо этого используются различные стратегии сэмплирования, которые вносят контролируемую долю случайности.'
              : 'Interestingly, the model does not always pick the most likely token. If it did (Greedy Search), the output would be repetitive and "robotic." Instead, sampling strategies introduce a controlled amount of randomness.'}
          </p>
        </div>
      </div>

      {/* Chapter 3: Self-Attention — The "Focus" Mechanism */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-400">
          <Layers className="text-blue-500" />
          {lang === 'ru' ? 'Глава 3: Self-Attention — Механизм внимания' : 'Chapter 3: Self-Attention — The Focus Mechanism'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? <>Как модель понимает, к какому существительному относится местоимение &quot;он&quot; в длинном абзаце? Для этого используется <Term id="self-attention">Self-Attention</Term>. Это математический способ вычислить &quot;важность&quot; каждого слова относительно всех остальных слов в текущем контексте.</>
              : <>How does a model know which noun the pronoun &quot;it&quot; refers to in a long paragraph? It uses <Term id="self-attention">Self-Attention</Term>. This is a mathematical way to weigh the &quot;importance&quot; of every word relative to every other word in the current context.</>}
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-blue-400 font-bold mb-3">{lang === 'ru' ? 'Как это работает наглядно:' : 'How it works visually:'}</h4>
            <p className="text-sm italic mb-4">
              {lang === 'ru' ? 'Фраза: "Банк закрыл счёт, потому что он был пуст."' : 'Phrase: "The bank closed the account because it was empty."'}
            </p>
            <p>
              {lang === 'ru'
                ? 'Когда модель обрабатывает слово "он", механизм внимания подсвечивает слово "счёт" гораздо ярче, чем слово "банк". Модель понимает: пустым может быть счёт, а не здание банка. Это и есть контекстное понимание через математику.'
                : 'When the model processes "it," the attention mechanism highlights "account" much more than "bank." The model understands that an account can be empty, not the physical building. This is contextual understanding through math.'}
            </p>
          </div>
          <p>
            {lang === 'ru'
              ? 'Трансформеры используют "многоголовое" внимание (Multi-Head Attention). Разные "головы" следят за разными аспектами: одна следит за грамматикой, другая — за смыслом, третья — за фактическими данными. Это позволяет модели строить многомерную карту связей в тексте.'
              : 'Transformers use Multi-Head Attention. Different "heads" focus on different aspects: one on syntax, another on semantics, a third on entities. This allows the model to build a multidimensional map of relationships within the text.'}
          </p>
        </div>
      </div>

      {/* Chapter 4: Positional Encoding — Knowing the Order */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-amber-400">
          <Zap className="text-amber-500" />
          {lang === 'ru' ? 'Глава 4: Позиционное кодирование' : 'Chapter 4: Positional Encoding'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'В отличие от человека или старых ИИ, Трансформер читает весь текст сразу, а не слева направо. Для него фразы "Собака кусает человека" и "Человек кусает собаку" выглядят как один и тот же набор слов (Bag of Words).'
              : 'Unlike humans or older AIs, a Transformer reads the whole text at once rather than left-to-right. To the attention mechanism, "Dog bites man" and "Man bites dog" look like the same set of words (a Bag of Words).'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Чтобы решить эту проблему, к вектору каждого токена добавляется "позиционный сигнал". Это специальная математическая метка, которая говорит модели: "это слово стоит на первом месте, а это — на десятом". Без этого ИИ не понимал бы структуру предложений и логику повествования.'
              : 'To solve this, a "positional signal" is added to every token vector. This is a mathematical label that tells the model: "this word is at index 1, and this one is at index 10." Without this, the AI would fail to understand sentence structure and narrative logic.'}
          </p>
        </div>
      </div>

      {/* Chapter 5: Temperature */}

      {/* Chapter 3: Temperature */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
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
          <div className="rounded-xl border border-border-subtle bg-base p-5 space-y-4">
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

          <div className="rounded-xl border border-border-subtle bg-base p-5 space-y-4">
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
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
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
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Zap className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Природа галлюцинаций' : 'Chapter 5: The Nature of Hallucinations'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? <><Term id="hallucination">Галлюцинации</Term> {' — это не баг, это особенность архитектуры. Поскольку модель всегда обязана выдать следующий токен, она сделает это, даже если не уверена в ответе. Если вероятность правильного факта — 5%, а вероятность красивой, но ложной фразы — 15%, при определенной температуре модель выберет ложь.'}</>
            : <><Term id="hallucination">Hallucinations</Term> {' are not a bug; they are a feature of the architecture. Since the model is always required to output a next token, it will do so even if it is unsure of the answer. If the probability of a correct fact is 5%, and the probability of a beautiful but false phrase is 15%, at a certain temperature, the model will choose the lie.'}</>}
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
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
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

      {/* Chapter 7: Lab — compare models */}
      <div className="bg-card-dark border border-emerald-500/20 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <FlaskConical size={22} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-emerald-400">
            {lang === 'ru' ? 'Глава 7: Лаборатория' : 'Chapter 7: Lab'}
          </h2>
        </div>

        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? 'Вся теория выше описывает, как модель генерирует текст: токены, вероятности, температура, размер контекста. Теперь пришло время увидеть это своими глазами. Ниже — встроенный инструмент сравнения моделей. Используйте его для выполнения финального задания.'
            : 'All the theory above describes how a model generates text: tokens, probabilities, temperature, context size. Now it is time to see it with your own eyes. Below is an embedded model comparison tool. Use it for the final task.'}
        </p>

        <div className="bg-base border border-border-card rounded-xl p-5 mb-5">
          <h3 className="text-sm font-semibold text-neutral-200 mb-3">
            {lang === 'ru' ? 'Инструкция к эксперименту' : 'Experiment instructions'}
          </h3>
          <ol className="space-y-2 text-sm text-neutral-400 list-decimal pl-5">
            <li>{lang === 'ru'
              ? 'Откройте Prompt Lab по ссылке ниже.'
              : 'Open the Prompt Lab using the link below.'}</li>
            <li>{lang === 'ru'
              ? 'Выберите модель A — Llama 3.3 70B, модель B — Llama 4 Scout 17B.'
              : 'Select model A — Llama 3.3 70B, model B — Llama 4 Scout 17B.'}</li>
            <li>{lang === 'ru'
              ? 'Введите незавершённую фразу «американцы это» (или «americans are» для EN). Не добавляйте системный промпт.'
              : 'Enter the incomplete phrase "americans are" (or "американцы это" for RU). Do not add a system prompt.'}</li>
            <li>{lang === 'ru'
              ? 'Нажмите «Сравнить» и изучите: текст ответов, количество токенов (вход/выход), латентность.'
              : 'Hit "Compare" and study: response text, token counts (in/out), latency.'}</li>
            <li>{lang === 'ru'
              ? 'Обратите внимание: одна модель даёт развёрнутый ответ, другая — компактный. Почему?'
              : 'Notice: one model gives a verbose answer, the other — a concise one. Why?'}</li>
          </ol>
        </div>

        <Link
          href={`/${lang}/labs/prompt-compare`}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/25 hover:border-emerald-500/40 transition-colors"
        >
          <FlaskConical size={16} />
          {lang === 'ru' ? 'Открыть Prompt Lab' : 'Open Prompt Lab'}
        </Link>

        <div className="mt-6 p-4 bg-base rounded-lg border border-border-card">
          <h3 className="text-sm font-semibold text-neutral-200 mb-3">
            {lang === 'ru' ? 'На что обратить внимание' : 'What to look for'}
          </h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>{lang === 'ru'
              ? '→ Токены и латентность: во сколько раз отличается объём выхода и скорость между моделями?'
              : '→ Tokens and latency: how much do output volume and speed differ between models?'}</li>
            <li>{lang === 'ru'
              ? '→ Стиль: большая модель структурирует ответ списками и подпунктами, маленькая — отвечает коротко. Это не значит, что она "хуже".'
              : '→ Style: the large model structures the response with lists and subpoints, the small one answers briefly. This does not mean it is "worse."'}</li>
            <li>{lang === 'ru'
              ? '→ Механизм: ни один ответ не содержит ссылок на источники. Модель не ищет информацию — она генерирует наиболее вероятное продолжение.'
              : '→ Mechanism: neither response contains source references. The model does not search for information — it generates the most probable continuation.'}</li>
            <li>{lang === 'ru'
              ? '→ Открытый промпт усиливает расхождение: чем меньше контекста, тем сильнее проявляется дефолтный стиль каждой модели.'
              : '→ An open prompt amplifies divergence: the less context, the more each model\'s default style shows through.'}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
