"use client";

import React from 'react';
import Term from '@/components/Term';
import { Flame, Globe, Cpu, Scale, Wrench, AlertTriangle } from 'lucide-react';

export default function Llama318bTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: What is Llama 3.1 8B? */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Flame className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: Что такое Llama 3.1 8B?' : 'Chapter 1: What is Llama 3.1 8B?'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Llama 3.1 8B — открытая языковая модель от Meta с 8 миллиардами параметров, выпущенная 23 июля 2024 года. На простом языке: это «открытый конкурент GPT-3.5», которого вы можете скачать целиком и запустить на своём ноутбуке или сервере, не отправляя никому ни одного байта данных.'
              : 'Llama 3.1 8B is an open-weights language model from Meta with 8 billion parameters, released on July 23, 2024. In plain English: it is the "open competitor to GPT-3.5" that you can download in full and run on your own laptop or server without sending a single byte of data to anyone.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Размер «8B» — это не случайное число. Это именно та точка, где модель достаточно большая, чтобы быть полезной (отвечает связно, понимает инструкции, знает много фактов), и достаточно маленькая, чтобы поместиться на одной потребительской GPU. Семья Llama 3.1 включает три размера: 8B, 70B и 405B. 8B — самая популярная, потому что она «помещается в реальность».'
              : 'The "8B" size is not arbitrary. It is exactly the point where the model is large enough to be useful (coherent answers, follows instructions, knows a lot of facts) and small enough to fit on a single consumer GPU. The Llama 3.1 family includes three sizes: 8B, 70B, and 405B. 8B is the most popular because it "fits into reality".'}
          </p>

          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Ключевая аналогия' : 'Key Analogy'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'GPT-4 или Claude — это «такси»: удобно, быстро, но каждая поездка стоит денег и водитель видит, куда вы едете. Llama 3.1 8B — это ваш собственный автомобиль: один раз вложились в железо, и потом ездите бесплатно и приватно. Не самый быстрый болид в мире, но для большинства задач хватает с запасом.'
                : 'GPT-4 or Claude is a "taxi": convenient and fast, but every ride costs money and the driver sees where you go. Llama 3.1 8B is your own car: one-time investment in hardware, then you drive for free and in private. Not the fastest race car on Earth, but more than enough for most trips.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: Why it mattered for the open ecosystem */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Globe className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Почему она изменила открытую экосистему' : 'Chapter 2: Why it Changed the Open Ecosystem'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'До Llama 3.1 расклад был простой: лучшие модели были закрытыми (OpenAI, Anthropic, Google), а открытые сильно отставали. Llama 3.1 первой реально догнала закрытых конкурентов на многих бенчмарках — особенно версии 70B и 405B. Но именно 8B изменила то, как тысячи команд по всему миру начали строить продукты.'
              : 'Before Llama 3.1, the landscape was simple: the best models were closed (OpenAI, Anthropic, Google), and open models lagged far behind. Llama 3.1 was the first to genuinely catch up on many benchmarks — especially the 70B and 405B variants. But it was the 8B that changed how thousands of teams around the world started building products.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">{lang === 'ru' ? 'Приватность' : 'Privacy'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Юридические фирмы, госструктуры, медицинские стартапы — все, кому нельзя отправлять данные в чужой API, получили рабочее решение.'
                  : 'Law firms, government agencies, medical startups — anyone who cannot send data to a third-party API got a working solution.'}
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">{lang === 'ru' ? 'Стоимость' : 'Cost'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Одна покупка GPU вместо ежемесячного счёта за токены. Для продукта с большим объёмом запросов экономия в десятки раз.'
                  : 'One-off GPU purchase instead of a monthly per-token bill. For high-volume products, this is a 10x+ cost reduction.'}
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">{lang === 'ru' ? 'Кастомизация' : 'Customization'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Можно дообучать (LoRA), сжимать (квантизация), резать на части, упаковывать в свои продукты — никаких API-ограничений.'
                  : 'You can fine-tune (LoRA), compress (quantization), shard, and package into your own products — no API restrictions.'}
              </p>
            </div>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Llama 3.1 8B стала точкой отсчёта для целой волны открытых моделей: Qwen 2.5, Mistral, DeepSeek и других. Сегодня «8B-открытая» — это де-факто базовая категория, с которой сравнивают всё новое.'
              : 'Llama 3.1 8B became the reference point for a whole wave of open models: Qwen 2.5, Mistral, DeepSeek, and others. Today, "8B open-weights" is the de-facto baseline category that everything new is benchmarked against.'}
          </p>
        </div>
      </div>

      {/* Chapter 3: Architecture in plain English */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Cpu className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Архитектура простыми словами' : 'Chapter 3: Architecture in Plain English'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Под капотом Llama 3.1 — обычный декодерный трансформер, но с тремя интересными решениями: <Term id="gqa">GQA</Term> для экономии памяти, <Term id="rope">RoPE</Term>-скейлинг для длинного контекста, и SwiGLU + RMSNorm как стандартные «гайки» современных LLM.
              </>
            ) : (
              <>
                Under the hood, Llama 3.1 is a standard decoder-only transformer with three interesting choices: <Term id="gqa">GQA</Term> for memory efficiency, <Term id="rope">RoPE</Term> scaling for long context, and SwiGLU + RMSNorm as the standard &quot;screws&quot; of modern LLMs.
              </>
            )}
          </p>

          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Параметр' : 'Parameter'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">Llama 2 7B</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">Llama 3.1 8B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Параметров' : 'Parameters'}</td>
                    <td className="py-2 pr-4">7B</td>
                    <td className="py-2">8B</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Окно контекста' : 'Context window'}</td>
                    <td className="py-2 pr-4">4K</td>
                    <td className="py-2 text-emerald-400">128K</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Внимание' : 'Attention'}</td>
                    <td className="py-2 pr-4">MHA</td>
                    <td className="py-2 text-emerald-400">GQA</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Размер словаря' : 'Vocabulary size'}</td>
                    <td className="py-2 pr-4">32K</td>
                    <td className="py-2 text-emerald-400">128K</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Данные обучения' : 'Training data'}</td>
                    <td className="py-2 pr-4">2T токенов</td>
                    <td className="py-2 text-emerald-400">15T токенов</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'GQA — почему это важно' : 'GQA — Why it Matters'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'В обычном multi-head attention каждая «голова» внимания имеет свою пару (Key, Value). На длинных контекстах эти KV-матрицы съедают огромное количество памяти. GQA (Grouped-Query Attention) делает компромисс: несколько query-голов делят одну пару KV. Качество почти не страдает, а KV-кэш в разы меньше — именно это даёт возможность работать с 128K токенами на скромной GPU.'
                : 'In standard multi-head attention each attention "head" has its own (Key, Value) pair. On long contexts these KV matrices eat a huge amount of memory. GQA (Grouped-Query Attention) makes a trade-off: several query heads share one KV pair. Quality barely suffers, but the KV cache is several times smaller — and that is exactly what makes 128K tokens viable on a modest GPU.'}
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'RoPE-скейлинг и 128K контекста' : 'RoPE Scaling and 128K Context'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'RoPE (Rotary Position Embeddings) — это способ закодировать позицию токена через поворот вектора. Главная фишка: его можно «растянуть» постфактум, продолжая обучать модель на более длинных контекстах. Llama 3.1 обучалась сначала на 8K, потом на длинных последовательностях с растянутым RoPE — и в итоге уверенно работает на 128K токенов.'
                : 'RoPE (Rotary Position Embeddings) encodes a token\'s position by rotating its vector. The key trick: it can be "stretched" after the fact by continuing training on longer contexts. Llama 3.1 was trained first on 8K, then on long sequences with stretched RoPE — and ended up working confidently up to 128K tokens.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 4: The licence reality */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Scale className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Реальность лицензии' : 'Chapter 4: The Licence Reality'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Llama 3.1 распространяется под Llama Community License — это не MIT и не Apache, но и не «закрытая» лицензия. Веса можно скачивать, дообучать, использовать коммерчески и встраивать в продукты. Большинству команд этого хватает с большим запасом.'
              : 'Llama 3.1 ships under the Llama Community License — not MIT or Apache, but not a "closed" licence either. Weights can be downloaded, fine-tuned, used commercially, and embedded into products. For most teams this is more than enough.'}
          </p>

          <div className="bg-yellow-500/5 border-l-4 border-yellow-500 p-6 my-6">
            <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} />
              {lang === 'ru' ? 'На что обратить внимание' : 'What to Watch Out For'}
            </h4>
            <ul className="text-neutral-400 leading-relaxed list-disc pl-5 space-y-1">
              <li>
                {lang === 'ru'
                  ? 'Компании с более чем 700 миллионов активных пользователей в месяц обязаны запросить отдельную лицензию у Meta.'
                  : 'Companies with more than 700 million monthly active users must request a separate licence from Meta.'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Запрещено использовать Llama для обучения других LLM, если конкурируете с Meta (есть нюансы — читайте лицензию).'
                  : 'You may not use Llama to train other LLMs that compete with Meta (with nuances — read the licence).'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'В продукте, использующем Llama, нужно указывать «Built with Llama» и сохранять упоминание лицензии.'
                  : 'A product using Llama must display "Built with Llama" and preserve the licence notice.'}
              </li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Простой эвристический совет: если вы стартап, корпорация или ИП и не являетесь одной из 20 крупнейших соцсетей или поисковиков мира — лицензия Llama вам подходит без оговорок.'
              : 'Simple rule of thumb: if you are a startup, a regular corporation, or a solo developer — and you are not one of the 20 largest social networks or search engines in the world — the Llama licence works for you with no caveats.'}
          </p>
        </div>
      </div>

      {/* Chapter 5: Running it yourself */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Wrench className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Как запустить у себя' : 'Chapter 5: Running it Yourself'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Запустить Llama 3.1 8B — задача на 5 минут, если выбрать правильный runtime. Есть три основных пути в зависимости от ваших целей.'
              : 'Running Llama 3.1 8B is a 5-minute task if you pick the right runtime. There are three main paths depending on your goals.'}
          </p>

          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">Ollama — {lang === 'ru' ? 'самый простой путь' : 'the easiest path'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                {lang === 'ru'
                  ? 'Идеально для разработки, прототипов и личного использования. Работает на Mac (включая M1/M2/M3), Linux и Windows. Автоматически выбирает квантизацию GGUF под ваше железо.'
                  : 'Perfect for development, prototypes, and personal use. Runs on Mac (including M1/M2/M3), Linux, and Windows. Picks GGUF quantization automatically based on your hardware.'}
              </p>
              <div className="bg-black/60 rounded-lg p-4 font-mono text-xs text-neutral-400">
                <div className="text-neutral-500"># {lang === 'ru' ? 'Установить и запустить — три команды' : 'Install and run — three commands'}</div>
                <div>curl -fsSL https://ollama.com/install.sh | sh</div>
                <div>ollama pull llama3.1:8b</div>
                <div>ollama run llama3.1:8b</div>
              </div>
            </div>

            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">vLLM — {lang === 'ru' ? 'для продакшна' : 'for production'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Высокопроизводительный inference-сервер с continuous batching и PagedAttention. Подходит, когда вам нужно отвечать сотням пользователей одновременно и держать высокий throughput. Совместим с OpenAI API — можно переключиться без изменения клиентского кода.'
                  : 'A high-throughput inference server with continuous batching and PagedAttention. The right choice when you need to serve hundreds of concurrent users at high throughput. OpenAI-API-compatible — you can switch over without changing client code.'}
              </p>
            </div>

            <div className="bg-black/40 p-5 rounded-xl border border-border-card">
              <h4 className="font-bold text-emerald-500 mb-2">Hugging Face Transformers — {lang === 'ru' ? 'для исследований и файн-тюнинга' : 'for research and fine-tuning'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Полный контроль над моделью: можно копаться во внутренностях, делать LoRA-файн-тюнинг (через PEFT), сравнивать варианты квантизации. Скорость хуже, чем у vLLM, но гибкости — на порядок больше.'
                  : 'Full control over the model: you can poke around the internals, do LoRA fine-tuning (via PEFT), compare quantization variants. Slower than vLLM, but an order of magnitude more flexible.'}
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/5 border-l-4 border-yellow-500 p-6 my-6">
            <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} />
              {lang === 'ru' ? 'Сколько VRAM реально нужно' : 'How Much VRAM You Actually Need'}
            </h4>
            <ul className="text-neutral-400 leading-relaxed list-disc pl-5 space-y-1">
              <li>{lang === 'ru' ? 'Полная точность (fp16): ~16 ГБ VRAM — нужна одна A10/A100 или RTX 4090.' : 'Full precision (fp16): ~16 GB VRAM — needs one A10/A100 or RTX 4090.'}</li>
              <li>{lang === 'ru' ? 'Q8 квантизация: ~8–10 ГБ — комфортно на RTX 3080 / 4070.' : 'Q8 quantization: ~8–10 GB — comfortable on an RTX 3080 / 4070.'}</li>
              <li>{lang === 'ru' ? 'Q4 квантизация: ~5–6 ГБ — запустится даже на RTX 3060 12GB или Mac M1 16GB.' : 'Q4 quantization: ~5–6 GB — runs on an RTX 3060 12 GB or Mac M1 16 GB.'}</li>
            </ul>
          </div>

          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Главный практический вывод: для большинства команд цикл такой — поднять Llama 3.1 8B через Ollama, проверить гипотезу, потом при необходимости перейти на vLLM в продакшн или добавить RAG / LoRA для качества. Точка входа в локальный LLM-стек ниже, чем кажется.'
              : 'The main practical takeaway: for most teams the cycle is — spin up Llama 3.1 8B via Ollama, validate the hypothesis, then switch to vLLM in production or layer on RAG / LoRA for quality. The entry point into a local LLM stack is lower than it looks.'}
          </p>
        </div>
      </div>
    </>
  );
}
