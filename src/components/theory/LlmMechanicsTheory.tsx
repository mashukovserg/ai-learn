"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import { FlaskConical } from 'lucide-react';

export default function LlmMechanicsTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: Tokens & The BPE Process */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          <span className="leading-tight text-balance">
            {lang === 'ru' ? 'Глава 1: Токены — атомы цифрового разума' : 'Chapter 1: Tokens — The Atoms of the Digital Mind'}
          </span>
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'Представьте, что вам нужно передать сообщение человеку, который не знает вашего языка, но умеет работать с числовыми кодами. Вы не можете отправить текст как есть — сначала нужно разбить его на стандартные фрагменты и присвоить каждому фрагменту номер из общего справочника. Именно это происходит с любым текстом, прежде чем его увидит языковая модель.'
              : 'Imagine you need to send a message to someone who does not know your language but works fluently with numeric codes. You cannot hand over the text as it is — first you have to cut it into standard fragments and give each fragment a number from a shared reference table. This is exactly what happens to any text before a language model sees it.'}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Нейросети не понимают слов. Они живут в мире чисел и векторов. Чтобы '} <Term id="llm">ИИ</Term> {' мог прочитать этот текст, его нужно разбить на фрагменты, называемые '} <Term id="token" lang={lang}>токенами</Term>{'. Токен — это не всегда целое слово. Это может быть корень, суффикс, пробел вместе с началом слова или отдельный символ, если слово редкое.'}</>
              : <>{'Neural networks do not understand words. They live in a world of numbers and vectors. For an '} <Term id="llm">AI</Term> {' to read this text, it must be broken down into fragments called '} <Term id="token" lang={lang}>tokens</Term>{'. A token is not always a whole word. It can be a root, a suffix, a space plus the start of a word, or even a single character if the word is rare.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Современные модели используют алгоритм '} <Term id="bpe" />{'. Он начинает с отдельных букв и постепенно объединяет самые частые пары символов в один токен. Например, в английском слово "playing" часто кодируется двумя токенами: "play" + "ing", потому что обе части встречаются в огромном количестве слов. Для русского языка принцип тот же, хотя конкретные границы токенов зависят от обучающего корпуса и могут не совпадать с привычными морфемами.'}</>
              : <>{'Modern models use the '} <Term id="bpe" /> {' algorithm. It starts with individual characters and gradually merges the most frequent character pairs into a single token. In English, "playing" is often encoded as two tokens — "play" + "ing" — because both parts appear in a huge number of words. The principle is the same for other languages, though the exact token boundaries depend on the training corpus and rarely match textbook morphemes.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Здесь есть практическая деталь, которая стоит денег. В ранних токенайзерах русский текст резался на заметно большее число токенов, чем английский текст того же смысла, — а значит, тот же запрос стоил дороже на этапе '} <Term id="inference">инференса</Term>{' и быстрее упирался в лимит окна. Новые модели этот разрыв заметно сократили, но счёт в токенах всё равно приходится держать в голове, когда вы считаете бюджет продукта.'}</>
              : <>{'There is a practical detail here that costs money. In early tokenizers, Russian text was split into noticeably more tokens than English text of the same meaning — so the same request cost more at '} <Term id="inference">inference</Term> {' time and hit the window limit sooner. Newer models have narrowed this gap considerably, but token accounting still matters whenever you budget a product.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Почему это важно в целом? Токены определяют границы "памяти" модели. Если у модели окно в 128 тысяч токенов, это означает, что она может "видеть" одновременно текст объёмом с небольшую книгу. Всё, что выходит за эти рамки, она мгновенно забывает — не потому, что "не хочет вспомнить", а потому что этих чисел просто нет на входе.'
              : 'Why does this matter in general? Tokens define the boundaries of the model\'s "memory." If a model has a 128,000-token window, it can "see" a small book\'s worth of text at once. Anything beyond that frame is instantly forgotten — not because the model "chooses not to recall" it, but because those numbers are simply not on the input.'}
          </p>
        </div>
      </div>

      {/* Chapter 2: The Next-Token Game */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 2: Великая игра в предсказания' : 'Chapter 2: The Great Prediction Game'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'Весь "интеллект", который вы видите в ChatGPT, — это результат одной-единственной задачи: "На основе всех предыдущих токенов предскажи самый вероятный следующий". Это локальный процесс. Модель не знает, чем закончится предложение, когда начинает его писать: она выбирает один шаг за раз.'
              : 'All the "intelligence" you see in ChatGPT is the result of a single task: "Based on all previous tokens, predict the most likely next one." This is a local process. The model does not know how a sentence will end when it starts writing it — it picks one step at a time.'}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'На каждом шаге модель рассчитывает балл для каждого возможного продолжения — по сути, составляет рейтинг всех кандидатов из своего словаря (обычно это 50 000 – 100 000 токенов). Эти сырые баллы называются логитами. Технически рейтинг проходит через шаг '} <Term id="softmax">Softmax</Term>{', который превращает баллы в нормализованные вероятности: теперь их можно сравнивать между собой как распределение.'}</>
              : <>{'At each step the model computes a score for every possible continuation — effectively a ranking of all candidates in its vocabulary (typically 50,000 – 100,000 tokens). These raw scores are called logits. '} <Term id="softmax">Softmax</Term> {' then turns them into normalized probabilities, so they can be compared with each other as one distribution.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Дальше цикл замыкается. Выбранный токен дописывается в конец контекста, и всё начинается заново: текст превращается в токены, считаются логиты по словарю, из распределения выбирается следующий токен, он снова уходит в историю. Модель читает собственный ответ как часть промпта — поэтому ранняя ошибка в первом предложении тянет за собой остальные, а удачно начатая мысль часто дописывается сама.'
              : 'Then the loop closes. The chosen token is appended to the end of the context, and everything starts over: text becomes tokens, logits are computed across the vocabulary, the next token is selected from the distribution, and it is appended to the history again. The model reads its own answer as part of the prompt — which is why an early mistake in the first sentence drags the rest along, and a well-started thought often completes itself.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Интересно, что модель не выбирает всегда самый вероятный токен. Если бы она это делала, ответы были бы сухими, повторяющимися и заметно "роботизированными". Вместо этого используются стратегии декодинга, которые вносят контролируемую долю случайности — им посвящена глава 5.'
              : 'Interestingly, the model does not always pick the most likely token. If it did, the output would be dry, repetitive, and noticeably "robotic." Instead, decoding strategies introduce a controlled amount of randomness — Chapter 5 is devoted to them.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Из этого же цикла следует, зачем модель просят "думать вслух". У неё нет отдельного черновика, где можно было бы прикинуть решение и показать только вывод: единственное место для промежуточных шагов — сам текст ответа. Когда вы просите расписать рассуждение по шагам, эти промежуточные токены попадают в контекст и участвуют в предсказании следующих. Рассуждение занимает место в ответе просто потому, что больше ему быть негде.'
              : 'The same loop explains why models are asked to "think out loud." There is no separate scratchpad where a model could work out a solution and show only the conclusion: the only place for intermediate steps is the answer text itself. When you ask for step-by-step reasoning, those intermediate tokens enter the context and take part in predicting the next ones. Reasoning occupies space in the answer simply because there is nowhere else for it to live.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Практическое следствие простое: одинаковый промпт может дать разные ответы, и это нормальное поведение архитектуры, а не сбой. Детерминированность — это настройка, которую вы включаете сознательно, а не свойство модели по умолчанию.'
              : 'The practical consequence is simple: the same prompt can produce different answers, and that is normal architectural behavior rather than a malfunction. Determinism is a setting you switch on deliberately, not a default property of the model.'}
          </p>
        </div>
      </div>

      {/* Chapter 3: Self-Attention — The "Focus" Mechanism */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 3: Self-Attention — механизм внимания' : 'Chapter 3: Self-Attention — The Focus Mechanism'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? <>Как модель понимает, к какому существительному относится местоимение &quot;он&quot; в длинном абзаце? Для этого используется <Term id="self-attention">Self-Attention</Term>. Это математический способ вычислить &quot;важность&quot; каждого слова относительно всех остальных слов в текущем контексте.</>
              : <>How does a model know which noun the pronoun &quot;it&quot; refers to in a long paragraph? It uses <Term id="self-attention">Self-Attention</Term>. This is a mathematical way to weigh the &quot;importance&quot; of every word relative to every other word in the current context.</>}
          </p>
          <div className="bg-info-500/10 border border-info-500/20 rounded-lg p-6">
            <h4 className="text-info-400 font-bold mb-3">{lang === 'ru' ? 'Как это работает наглядно:' : 'How it works visually:'}</h4>
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
              ? 'Под капотом каждый токен получает три вектора. Первый — запрос (Query): "что я сейчас ищу вокруг себя". Второй — ключ (Key): "по какому признаку меня можно найти". Третий — значение (Value): "что я передам дальше тому, кто меня выбрал". Схожесть запроса одного токена с ключом другого даёт число — вес связи между ними. Эту тройку обычно так и называют: матрицы Q, K, V.'
              : 'Under the hood, every token gets three vectors. The first is the Query: "what am I looking for around me." The second is the Key: "by what feature can I be found." The third is the Value: "what I will pass on to whoever selected me." The similarity between one token\'s query and another\'s key produces a number — the weight of the link between them. This trio is usually named exactly that: the Q, K, V matrices.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Все веса связей нормализуются и превращаются в веса значимости: сумма по каждой строке равна единице, и по этим весам смешиваются значения соседей. Получается, что представление слова "он" буквально собирается из представлений тех слов, на которые оно смотрит сильнее всего. Никакого правила "местоимение ссылается на ближайшее существительное" в модель не заложено — связь выучена статистически.'
              : 'All link weights are normalized into significance weights: each row sums to one, and the neighbors\' values are mixed according to those weights. The representation of "it" is literally assembled from the representations of the words it looks at most. No rule saying "a pronoun refers to the nearest noun" is hardcoded into the model — the link is learned statistically.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Трансформеры используют "многоголовое" внимание (Multi-Head Attention). Разные "головы" следят за разными аспектами: одна — за грамматической связью, другая — за смыслом, третья — за упомянутыми сущностями. Каждая голова строит свою карту связей, и вместе они дают многомерную картину текста вместо одной плоской.'
              : 'Transformers use Multi-Head Attention. Different "heads" track different aspects: one follows grammatical agreement, another meaning, a third the entities mentioned. Each head builds its own map of relationships, and together they produce a multidimensional picture of the text instead of a single flat one.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Именно это заменило последовательное чтение старых архитектур: все связи считаются параллельно, и связь между первым и сотым словом не "затухает" по дороге. Плата за это — квадратичный рост вычислений: вдвое более длинный текст даёт вчетверо больше пар "токен-токен". Отсюда и стоимость длинного контекста, о которой пойдёт речь в главе 6.'
              : 'This is precisely what replaced the sequential reading of older architectures: all links are computed in parallel, and the connection between word 1 and word 100 does not "fade" along the way. The price is quadratic growth in computation: text twice as long produces four times as many token-to-token pairs. That is where the cost of long context — the subject of Chapter 6 — comes from.'}
          </p>
        </div>
      </div>

      {/* Chapter 4: Positional Encoding — Knowing the Order */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 4: Позиционное кодирование' : 'Chapter 4: Positional Encoding'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'В отличие от человека или старых архитектур, трансформер читает весь текст сразу, а не слева направо. Для механизма внимания фразы "Собака кусает человека" и "Человек кусает собаку" выглядят как один и тот же набор слов — мешок слов (Bag of Words), в котором порядок потерян.'
              : 'Unlike a human or older architectures, a Transformer reads the whole text at once rather than left to right. To the attention mechanism, "Dog bites man" and "Man bites dog" look like the same set of words — a Bag of Words in which order has been lost.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Чтобы решить эту проблему, к вектору каждого токена добавляется позиционный сигнал. Это математическая метка, которая говорит модели: "это слово стоит на первом месте, а это — на десятом". Без неё ИИ не различал бы структуру предложений и логику повествования, потому что в его входных числах не было бы ничего про порядок.'
              : 'To solve this, a positional signal is added to every token vector. It is a mathematical label telling the model: "this word sits at index 1, and this one at index 10." Without it, the AI would not distinguish sentence structure or narrative logic, because nothing in its input numbers would encode order.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'В оригинальном трансформере эти метки были синусоидальными: позиция кодировалась набором синусов и косинусов разной частоты. Такой узор уникален для каждой позиции, но при этом сохраняет сравнимость расстояний — по разнице узоров модель может судить, насколько далеко друг от друга стоят два токена, а не только какой из них первый.'
              : 'In the original Transformer these labels were sinusoidal: a position was encoded by a set of sines and cosines of different frequencies. Such a pattern is unique for every position while keeping distances comparable — from the difference between patterns the model can tell how far apart two tokens are, not merely which one comes first.'}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Современные открытые модели чаще используют другой приём — '} <Term id="rope" />{'. Вместо того чтобы прибавлять метку, он поворачивает вектор токена на угол, зависящий от позиции. Практическая выгода в том, что такое кодирование можно "растянуть" уже после обучения, продолжив тренировку на более длинных последовательностях, — именно так модели дотягиваются до окна в 128 тысяч токенов.'}</>
              : <>{'Modern open models more often use a different trick — '} <Term id="rope" />{'. Instead of adding a label, it rotates the token vector by an angle that depends on its position. The practical benefit is that such an encoding can be "stretched" after training by continuing on longer sequences — this is how models reach a 128,000-token window.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'У позиций есть неприятная особенность на длинных текстах. Позиции, которых модель почти не видела при обучении, кодируются хуже знакомых, и качество ближе к дальнему краю окна проседает. Поэтому заявленный размер окна и размер, на котором модель работает уверенно, — это часто разные числа: производитель называет предел, до которого модель принимает вход, а не предел, до которого она одинаково хорошо этот вход понимает.'
              : 'Positions have an unpleasant property on long texts. Positions the model barely saw during training are encoded less reliably than familiar ones, and quality sags toward the far edge of the window. That is why the advertised window size and the size at which a model works confidently are often different numbers: the published limit is how much input the model accepts, not how much of it the model understands equally well.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Практический вывод: порядок для модели — часть смысла, а не оформление. Нумерованные шаги инструкции, хронология событий, порядок аргументов в промпте читаются как данные. Если вы перемешаете пункты, модель воспримет это как другое сообщение, а не как то же самое в другой вёрстке.'
              : 'The practical takeaway: for a model, order is part of the meaning, not formatting. Numbered instruction steps, event chronology, and argument order inside a prompt are all read as data. If you shuffle the items, the model treats it as a different message rather than the same one relaid out.'}
          </p>
        </div>
      </div>

      {/* Chapter 5: Temperature and decoding strategies */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 5: Температура и стратегии декодинга' : 'Chapter 5: Temperature and Decoding Strategies'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? 'При T=0 модель каждый раз выбирает самый вероятный вариант и даёт практически одинаковый ответ на один и тот же промпт. При T≈1 менее вероятные варианты получают реальный шанс — ответы становятся разнообразнее, но менее предсказуемыми.'
              : 'At T=0 the model picks the most probable option every time and returns a nearly identical answer to the same prompt. At T≈1 less likely options get a real chance — answers become more varied but less predictable.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Технически температура сжимает или растягивает распределение вероятностей следующего токена. Низкие значения усиливают лидера списка, высокие — дают шанс кандидатам из хвоста. Поэтому один и тот же промпт может выдавать либо стабильный сухой текст, либо более живой, но менее точный.'
              : 'Technically, temperature sharpens or flattens the next-token probability distribution. Lower values amplify the leader of the list; higher values give the tail candidates a chance. That is why the same prompt can produce either stable, dry output or more vivid but less precise output.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Важно: температура не делает модель умнее. Она меняет только поведение при выборе токена. Если нужных фактов нет в контексте, высокая температура обычно повышает риск выдумывания. Если контекст сильный, а задача творческая, повышенная температура даёт более разнообразные формулировки.'
              : 'Important: temperature does not make the model smarter. It only changes token-selection behavior. If the facts are missing from context, high temperature usually increases the risk of invention. If context is strong and the task is creative, higher temperature yields more varied phrasing.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Температура — не единственная ручка. Жадный выбор (Greedy Search, T=0) всегда берёт топ-1 токен и потому максимально предсказуем. Лучевой поиск (Beam Search) держит несколько вариантов продолжения одновременно и оставляет ту последовательность, у которой лучше суммарная вероятность: он всё ещё детерминирован, но рассматривает больше путей, чем жадный выбор. Дальше идёт сэмплирование, и чем выше температура, тем случайнее результат.'
              : 'Temperature is not the only knob. Greedy Search (T=0) always takes the top-1 token and is therefore maximally predictable. Beam Search keeps several candidate continuations at once and keeps the sequence with the best cumulative probability: it is still deterministic, but explores more paths than greedy decoding. After that comes sampling, and the higher the temperature, the more random the result.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Сэмплирование обычно ограничивают. Top-k оставляет только k самых вероятных кандидатов и выбирает из них. Top-p (его же называют nucleus sampling) работает гибче: он берёт минимальный набор токенов, суммарная вероятность которых достигает p, — на уверенном шаге это может быть два кандидата, на неуверенном пятьдесят. Отдельная ручка — штраф за повторы (repetition penalty): он понижает логиты уже использованных токенов и вытаскивает модель из зацикливания, когда она начинает повторять одну и ту же фразу.'
              : 'Sampling is usually constrained. Top-k keeps only the k most probable candidates and chooses among them. Top-p (also called nucleus sampling) is more flexible: it takes the smallest set of tokens whose cumulative probability reaches p — two candidates on a confident step, fifty on an uncertain one. A separate knob is the repetition penalty: it lowers the logits of already-used tokens and pulls the model out of a loop when it starts repeating the same phrase.'}
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-accent-500/20 bg-accent-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-accent-300">0.0-0.2</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'код, SQL, юридические формулировки (максимальная детерминированность).' : 'code, SQL, legal wording (maximum determinism).'}</span>
            </div>
            <div className="rounded-lg border border-accent-500/20 bg-accent-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-accent-300">0.3-0.7</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'аналитика, суммаризация, продуктовые тексты.' : 'analysis, summarization, product copy.'}</span>
            </div>
            <div className="rounded-lg border border-accent-500/20 bg-accent-500/5 px-4 py-3 text-sm text-neutral-200">
              <span className="font-semibold text-accent-300">0.8-1.2</span>
              <span className="text-neutral-300"> — {lang === 'ru' ? 'брейншторм, storytelling, генерация вариантов.' : 'brainstorming, storytelling, variant generation.'}</span>
            </div>
          </div>
          <p>
            {lang === 'ru'
              ? 'Практическое правило: начинайте с консервативного значения (обычно 0.2-0.4), прогоняйте реальные кейсы и только потом повышайте температуру там, где действительно нужна вариативность. Если задача чувствительна к фактам, лучше сначала улучшить контекст и структуру промпта, а не компенсировать проблемы высокой температурой.'
              : 'Practical rule: start conservative (usually 0.2-0.4), evaluate on real cases, and only then raise temperature where variation is truly needed. If a task is fact-sensitive, improve context and prompt structure first instead of trying to compensate with higher temperature.'}
          </p>
          <div className="rounded-xl border border-border-subtle bg-base p-5 space-y-4">
            <h3 className="text-lg font-semibold text-heading">
              {lang === 'ru' ? 'Где бесплатно потренироваться с температурой' : 'Where to practice temperature for free'}
            </h3>

            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-neutral-100">1. Free LLM Playground.</strong>{' '}
                {lang === 'ru'
                  ? <>Браузерный sandbox для экспериментов с LLM. Можно менять параметры генерации (включая <strong>temperature</strong>) и сравнивать ответы разных моделей. Есть бесплатный лимит — около <strong>50 чатов в день</strong>.{' '}</>
                  : <>A browser sandbox for LLM experiments. You can change generation parameters (including <strong>temperature</strong>) and compare answers from different models. There is a free limit of roughly <strong>50 chats per day</strong>.{' '}</>}
                <a href="https://playground.srclauncher.com/" target="_blank" rel="noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                  Free LLM Playground
                </a>
              </p>
              <p>
                <strong className="text-neutral-100">2. Hugging Face Playground.</strong>{' '}
                {lang === 'ru'
                  ? 'Интерактивная среда, где можно отправлять промпты в разные модели и смотреть, как меняются ответы. Подходит для базовых экспериментов с генерацией текста. '
                  : 'An interactive environment where you can send prompts to different models and watch how answers change. Good for basic text-generation experiments. '}
                <a href="https://huggingface.co/chat/" target="_blank" rel="noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                  Hugging Face
                </a>
              </p>
              <p>
                <strong className="text-neutral-100">3. LM Studio.</strong>{' '}
                {lang === 'ru'
                  ? <>Бесплатное приложение для запуска LLM локально на компьютере. В интерфейсе можно менять параметры генерации, включая <strong>temperature</strong>.{' '}</>
                  : <>A free application for running LLMs locally on your machine. The interface exposes generation parameters, including <strong>temperature</strong>.{' '}</>}
                <a href="https://lmstudio.ai/" target="_blank" rel="noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                  LM Studio
                </a>
              </p>
              <p>
                <strong className="text-neutral-100">4. Ollama + Open WebUI.</strong>{' '}
                {lang === 'ru'
                  ? <>Полностью бесплатный локальный стек: запускаете модель на своём компьютере и управляете параметрами генерации (<strong>temperature</strong>, penalties и др.) через веб-интерфейс.{' '}</>
                  : <>A fully free local stack: run the model on your own machine and control generation parameters (<strong>temperature</strong>, penalties and others) through a web interface.{' '}</>}
                <a href="https://ollama.com/" target="_blank" rel="noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                  Ollama
                </a>{' '}
                {lang === 'ru' ? 'и' : 'and'}{' '}
                <a href="https://openwebui.com/" target="_blank" rel="noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                  Open WebUI
                </a>
                .
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle bg-base p-5 space-y-4">
            <h3 className="text-lg font-semibold text-heading">
              {lang === 'ru' ? 'Мини-упражнение' : 'Mini exercise'}
            </h3>
            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>
                {lang === 'ru'
                  ? <>Возьмите один и тот же промпт: <span className="text-neutral-100 font-medium">«Придумай идею стартапа в образовании»</span>.</>
                  : <>Take one and the same prompt: <span className="text-neutral-100 font-medium">&quot;Come up with a startup idea in education&quot;</span>.</>}
              </p>
              <p>
                {lang === 'ru'
                  ? <>Запустите его с температурами: <span className="text-neutral-100">0.1, 0.4, 0.8, 1.0</span>.</>
                  : <>Run it at temperatures <span className="text-neutral-100">0.1, 0.4, 0.8, 1.0</span>.</>}
              </p>
              <p>
                {lang === 'ru'
                  ? 'Сравните результаты по трём критериям: повторяемость ответа, разнообразие идей и креативность формулировок.'
                  : 'Compare the results on three criteria: repeatability of the answer, diversity of ideas, and creativity of phrasing.'}
              </p>
              <p>
                {lang === 'ru'
                  ? 'Это самый быстрый способ почувствовать, как температура влияет на поведение модели.'
                  : 'This is the fastest way to feel how temperature affects model behavior.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 6: Context Window */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 6: Контекстное окно' : 'Chapter 6: The Context Window'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? <><Term id="context-window">Контекстное окно</Term>{' — это "рабочая память" модели. Всё, что находится внутри этого окна, она может использовать для ответа. Всё, что выпало за его границу, забывается полностью: следующий запрос стартует так, будто этого текста никогда не было.'}</>
              : <>The <Term id="context-window">context window</Term>{' is the model\'s "working memory." Everything inside the window can be used for the answer. Everything that falls outside is forgotten completely: the next request starts as if that text had never existed.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Размер этой памяти вырос очень быстро. У GPT-2 окно было около тысячи токенов — несколько страниц. GPT-3 работала примерно с двумя тысячами. Claude 2 подняла планку до ста тысяч, а Gemini 1.5 заявила миллион и больше. За пять лет "память" модели прошла путь от короткой статьи до целой полки книг.'
              : 'This memory has grown very fast. GPT-2 had a window of about a thousand tokens — a few pages. GPT-3 worked with roughly two thousand. Claude 2 raised the bar to a hundred thousand, and Gemini 1.5 announced a million and beyond. In five years the model\'s "memory" went from a short article to a whole bookshelf.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Новички часто считают, что большое окно автоматически решает все проблемы. На практике это не так: длинный контекст повышает стоимость и задержку ответа, а плохо структурированный промпт теряет важное даже в огромном окне. Есть и физическое ограничение: во время генерации модель хранит промежуточные ключи и значения в KV-кэше, чтобы не пересчитывать всё заново на каждом шаге. Кэш ускоряет работу, но растёт вместе с длиной диалога и занимает видеопамять — на длинных документах именно он упирается в потолок железа.'
              : 'Beginners often assume a large window automatically solves everything. In practice it does not: long context increases cost and latency, and a poorly structured prompt loses what matters even inside a huge window. There is also a physical limit: while generating, the model stores intermediate keys and values in a KV cache so it does not recompute everything at each step. The cache speeds things up, but it grows with dialogue length and consumes video memory — on long documents it is exactly what hits the hardware ceiling.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Есть и хорошо задокументированный эффект, который называют "Lost in the Middle": информация в начале и в конце контекста используется лучше, чем та, что оказалась в середине. Поэтому в длинном промпте ключевые ограничения стоит повторить ближе к концу, а не надеяться, что модель удержит их из вступления.'
              : 'There is also a well-documented effect called "Lost in the Middle": information at the beginning and the end of the context is used better than what ends up in the middle. In a long prompt, key constraints are worth repeating near the end rather than hoping the model retains them from the introduction.'}
          </p>
          <p>
            {lang === 'ru'
              ? <>{'Отсюда рабочий протокол: задайте бюджет токенов на вход и выход, вычистите шум перед отправкой, оставьте только тот контекст, который реально влияет на ответ, и повторите критичные ограничения в конце. Для больших документов лучше использовать '} <Term id="rag" />{', чем пытаться уместить весь текст в одно окно: чем точнее отбор контекста, тем выше качество ответа и ниже цена запроса.'}</>
              : <>{'Hence a working protocol: set token budgets for input and output, strip noise before sending, keep only the context that materially affects the answer, and repeat critical constraints at the end. For large documents, use '} <Term id="rag" /> {' instead of stuffing everything into one window: the more precise the context selection, the higher the answer quality and the lower the cost.'}</>}
          </p>
        </div>
      </div>

      {/* Chapter 7: Why It Hallucinates */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 7: Природа галлюцинаций' : 'Chapter 7: The Nature of Hallucinations'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru'
              ? <><Term id="hallucination">Галлюцинации</Term>{' — это не баг, а следствие архитектуры. Модель на каждом шаге обязана выдать следующий токен. У неё нет кнопки "промолчать": даже когда в весах нет надёжного факта, распределение вероятностей всё равно построится, и какой-то токен будет выбран.'}</>
              : <><Term id="hallucination">Hallucinations</Term>{' are not a bug; they follow from the architecture. At every step the model must emit a next token. It has no "stay silent" button: even when its weights hold no reliable fact, a probability distribution is still built and some token is still chosen.'}</>}
          </p>
          <p>
            {lang === 'ru'
              ? 'Посмотрите на это через числа. Если вероятность правильного факта — 5%, а вероятность красивой, но ложной фразы — 15%, то при определённой температуре модель выберет ложь. Она не отличает "знаю" от "звучит правдоподобно": обе оценки живут в одном и том же распределении.'
              : 'Look at it through the numbers. If the probability of the correct fact is 5% and the probability of a beautiful but false phrase is 15%, then at a certain temperature the model will pick the lie. It does not separate "I know" from "this sounds plausible": both estimates live in the very same distribution.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Отсюда понятно, почему чаще всего выдумываются именно ссылки, номера и цитаты. Формат такого фрагмента предсказуем: модель хорошо выучила, как выглядит библиографическая ссылка, идентификатор статьи или номер судебного дела. А вот конкретное содержимое приходится добирать из вероятностей. Получается правдоподобная оболочка с выдуманной начинкой — самый опасный вид ошибки, потому что выглядит она убедительнее обычного текста.'
              : 'This explains why references, identifiers, and quotations are the things most often invented. The format of such a fragment is predictable: the model has learned well what a bibliographic reference, a paper identifier, or a case number looks like. The specific content, however, has to be filled in from probabilities. The result is a plausible shell with invented filling — the most dangerous kind of error, because it looks more convincing than ordinary text.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Полностью устранить галлюцинации нельзя, но можно снизить их частоту и цену. Три рычага. Температура: чем она ниже, тем сильнее модель прижимается к самым вероятным вариантам и реже выдумывает. Контекст: если нужные факты явно лежат в промпте или получены через RAG, модели не приходится опираться на вероятностную "память". Верификация: там, где ошибка дорого стоит, просите помечать неуверенность и проверяйте критичные утверждения внешним инструментом или вторым запросом.'
              : 'Hallucinations cannot be eliminated entirely, but their frequency and cost can be reduced. Three levers. Temperature: the lower it is, the more the model hugs the most probable options and the less it invents. Context: if the needed facts are explicitly in the prompt or retrieved via RAG, the model does not have to lean on probabilistic "memory." Verification: where an error is expensive, ask the model to mark uncertainty and validate critical claims with an external tool or a second request.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Что почти не работает — инструкция "не выдумывай" сама по себе. Она добавляет несколько токенов в промпт, но не меняет того, что модель по-прежнему обязана выбрать продолжение. Надёжнее менять условия задачи: дать факты, сузить формулировку, потребовать ссылку на источник из контекста и отвергать ответ без неё.'
              : 'What barely works is the instruction "do not make things up" on its own. It adds a few tokens to the prompt but does not change the fact that the model still has to choose a continuation. It is more reliable to change the conditions of the task: supply the facts, narrow the question, require a citation from the provided context, and reject an answer without one.'}
          </p>
        </div>
      </div>

      {/* Chapter 8: Practical decoding checklist (Short block) */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-2 text-heading">
          {lang === 'ru' ? 'Глава 8: Быстрый чек-лист перед запуском' : 'Chapter 8: Fast Pre-Launch Checklist'}
        </h2>
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          {lang === 'ru' ? 'Краткий блок' : 'Short block'}
        </p>
        <ol className="space-y-2 text-sm text-neutral-300 list-decimal pl-5">
          <li>{lang === 'ru' ? 'Определи цель ответа: точность или креативность.' : 'Define the response goal: precision or creativity.'}</li>
          <li>{lang === 'ru' ? 'Подбери температуру и sampling (top-k / top-p) под эту цель.' : 'Pick temperature and sampling (top-k / top-p) for that goal.'}</li>
          <li>{lang === 'ru' ? 'Если ответ зацикливается — добавь штраф за повторы, а не температуру.' : 'If the output loops, add a repetition penalty rather than temperature.'}</li>
          <li>{lang === 'ru' ? 'Проверь длину контекста и риск "Lost in the Middle".' : 'Check context length and Lost-in-the-Middle risk.'}</li>
          <li>{lang === 'ru' ? 'Для ответов с высокой ценой ошибки добавь валидацию и источники.' : 'For high-stakes outputs, add validation and sources.'}</li>
        </ol>
      </div>

      {/* Chapter 9: Lab — compare models (Short block) */}
      <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-2 text-heading">
          {lang === 'ru' ? 'Глава 9: Лаборатория' : 'Chapter 9: Lab'}
        </h2>
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          {lang === 'ru' ? 'Краткий блок' : 'Short block'}
        </p>

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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent-500/15 text-accent-300 border border-accent-500/25 hover:bg-accent-500/25 hover:border-accent-500/40 transition-colors"
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

      {/* Where to go next */}
      <div className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-6 mb-8">
        <p className="text-sm font-semibold text-accent-300 mb-2">
          {lang === 'ru' ? 'Куда дальше' : 'Where to go next'}
        </p>
        <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
          {lang === 'ru'
            ? 'Вы разобрались, как модель превращает текст в токены и выбирает следующий. Следующий шаг — уровень архитектуры: чем модели отличаются по размеру контекстного окна, цене и задержке, и как выбирать модель под конкретную задачу.'
            : 'You now know how a model turns text into tokens and picks the next one. The next step is the architecture level: how models differ in context window, cost, and latency, and how to choose one for a concrete task.'}
        </p>
        <Link
          href={`/${lang}/rooms/llm-landscape`}
          className="inline-flex items-center rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-[#082018] hover:bg-accent-300 transition-colors"
        >
          {lang === 'ru' ? 'Перейти в «Ландшафт LLM»' : 'Go to "LLM Landscape"'}
        </Link>
      </div>
    </>
  );
}
