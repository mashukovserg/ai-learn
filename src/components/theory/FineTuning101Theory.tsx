import React from 'react';
import { Info, Layers, Zap, AlertTriangle, Database, Scale, Wrench, Code, Cloud, Combine } from 'lucide-react';

export default function FineTuning101Theory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: What is Fine-Tuning? */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Info className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: Что такое файн-тюнинг?' : 'Chapter 1: What is Fine-Tuning?'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Представьте: у вас есть GPT-4 или Claude. Они умные, знают кучу всего. Но вот проблема — вы работаете в юридической фирме, и вам нужна модель, которая отвечает только в формате юридического заключения, знает внутреннюю терминологию, не галлюцинирует про законы, а цитирует конкретные статьи — и работает быстро и дёшево.'
              : 'Imagine you have GPT-4 or Claude. They\'re smart, they know a lot. But here\'s the problem — you work at a law firm, and you need a model that answers only in legal opinion format, knows internal terminology, doesn\'t hallucinate about laws but cites specific statutes — and runs fast and cheap.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Базовая модель так не умеет «из коробки». Файн-тюнинг — это когда вы берёте предобученную модель и доучиваете её на своих данных. Не с нуля (это pre-training, и стоит миллионы долларов), а именно адаптируете уже готовую модель под свою задачу.'
              : 'A base model can\'t do this out of the box. Fine-tuning is when you take a pre-trained model and further train it on your own data. Not from scratch (that\'s pre-training, and costs millions of dollars), but specifically adapting an already-trained model for your task.'}
          </p>

          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-[#303030]">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Подход' : 'Approach'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Суть' : 'Essence'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Когда использовать' : 'When to use'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Prompt Engineering</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Подробный системный промпт' : 'Detailed system prompt'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Простые задачи, прототипирование' : 'Simple tasks, prototyping'}</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">RAG</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Подключение внешней базы знаний' : 'Connecting external knowledge base'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Нужны актуальные/приватные данные' : 'Need fresh/private data'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Fine-Tuning</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Дообучение самой модели' : 'Further training the model itself'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Нужно изменить поведение, стиль, формат' : 'Need to change behavior, style, format'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Ключевая аналогия' : 'Key Analogy'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Pre-training = высшее образование (общие знания). Fine-tuning = стажировка в конкретной компании (специализация). Промптинг = инструкция на совещании (временный контекст).'
                : 'Pre-training = university degree (general knowledge). Fine-tuning = internship at a specific company (specialization). Prompting = instructions at a meeting (temporary context).'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: Full Fine-Tuning vs LoRA */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Layers className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Виды файн-тюнинга' : 'Chapter 2: Types of Fine-Tuning'}
        </h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">Full Fine-Tuning</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Обновляются ВСЕ веса модели. Для 7B модели — минимум 1×A100 80GB. Мощно, но дорого и рискованно: есть угроза catastrophic forgetting — модель может забыть то, что знала раньше.'
                : 'ALL model weights are updated. For a 7B model — minimum 1×A100 80GB. Powerful, but expensive and risky: there\'s a threat of catastrophic forgetting — the model can forget what it knew before.'}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">LoRA (Low-Rank Adaptation)</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-4">
              {lang === 'ru'
                ? 'Ключевая идея: не трогай основные веса, а добавь маленькие обучаемые матрицы рядом с ними. Исследования показали, что изменения весов при файн-тюнинге имеют низкий ранг — модели не нужно менять ВСЁ, достаточно подкрутить небольшое подпространство.'
                : 'Key idea: don\'t touch the main weights, but add small trainable matrices alongside them. Research showed that weight changes during fine-tuning have low rank — the model doesn\'t need to change EVERYTHING, just adjust a small subspace.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400 mb-4">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// Математика LoRA' : '// LoRA Math'}</div>
              <div>{lang === 'ru' ? 'Оригинальный слой:' : 'Original layer:'} W <span className="text-neutral-600">({lang === 'ru' ? 'размер' : 'size'} d×d, {lang === 'ru' ? 'заморожен' : 'frozen'})</span></div>
              <div>{lang === 'ru' ? 'LoRA-добавка:' : 'LoRA addition:'}     B×A <span className="text-neutral-600">({lang === 'ru' ? 'размер' : 'size'} d×r × r×d, {lang === 'ru' ? 'где' : 'where'} r {'<<'} d)</span></div>
              <div className="mt-2 text-emerald-400">{lang === 'ru' ? 'Итого:' : 'Result:'} W&apos; = W + B×A</div>
              <div className="mt-2 text-neutral-500">
                {lang === 'ru'
                  ? '// При r=16 и d=4096: 2×(4096×16) = 131K параметров на слой'
                  : '// With r=16 and d=4096: 2×(4096×16) = 131K params per layer'}
              </div>
              <div className="text-neutral-500">
                {lang === 'ru'
                  ? '// вместо 4096×4096 = 16.7M — экономия в 128 раз'
                  : '// instead of 4096×4096 = 16.7M — 128x savings'}
              </div>
            </div>
            <p className="text-neutral-400 text-sm">
              {lang === 'ru'
                ? 'Параметр r (ранг) — обычно 4, 8, 16 или 32. Чем меньше — тем легче обучать, но меньше ёмкость. Бонус: можно переключаться между адаптерами — одна базовая модель и несколько "насадок".'
                : 'The r parameter (rank) — usually 4, 8, 16, or 32. Lower = easier to train, but less capacity. Bonus: you can swap adapters — one base model and several "attachments".'}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">QLoRA (Quantized LoRA)</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'LoRA + квантизация базовой модели до 4-bit. Это позволяет файн-тюнить 7B модель на GPU с 6GB VRAM — на обычной игровой карте. Демократизация файн-тюнинга: то, что раньше требовало кластер из A100, теперь работает на RTX 3060.'
                : 'LoRA + quantization of the base model to 4-bit. This allows fine-tuning a 7B model on a GPU with 6GB VRAM — on a regular gaming card. Democratization of fine-tuning: what previously required an A100 cluster now runs on an RTX 3060.'}
            </p>
          </div>

          {/* Memory comparison table */}
          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="text-emerald-500" size={18} />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{lang === 'ru' ? 'Сравнение методов (7B модель)' : 'Methods Comparison (7B model)'}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-[#303030]">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Метод' : 'Method'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Параметры' : 'Parameters'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">VRAM</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Стоимость' : 'Cost'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">GPU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">Full FT</td>
                    <td className="py-2 pr-4">100%</td>
                    <td className="py-2 pr-4">~28 GB (fp32)</td>
                    <td className="py-2 pr-4">$10,000+</td>
                    <td className="py-2">8x A100</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">LoRA</td>
                    <td className="py-2 pr-4">0.1-1%</td>
                    <td className="py-2 pr-4">~8-10 GB</td>
                    <td className="py-2 pr-4">$10-100</td>
                    <td className="py-2">1x A100</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300">QLoRA</td>
                    <td className="py-2 pr-4">0.1-1%</td>
                    <td className="py-2 pr-4">~4-6 GB</td>
                    <td className="py-2 pr-4">$5-50</td>
                    <td className="py-2">1x RTX 3060</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Other methods */}
          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Другие методы (кратко)' : 'Other Methods (brief)'}</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div><span className="text-neutral-300 font-medium">Prefix Tuning</span> — {lang === 'ru' ? 'обучение "виртуальных токенов", которые добавляются к началу каждого промпта' : 'training "virtual tokens" prepended to every prompt'}</div>
              <div><span className="text-neutral-300 font-medium">Adapters</span> — {lang === 'ru' ? 'маленькие обучаемые слои, вставленные между слоями трансформера' : 'small trainable layers inserted between transformer layers'}</div>
              <div><span className="text-neutral-300 font-medium">RLHF / DPO</span> — {lang === 'ru' ? 'файн-тюнинг на основе человеческих предпочтений (так Anthropic и OpenAI выравнивают модели)' : 'fine-tuning on human preferences (how Anthropic and OpenAI align models)'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 3: When to Fine-Tune */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Zap className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Когда файн-тюнить, когда промптить, когда RAG?' : 'Chapter 3: When to Fine-Tune, When to Prompt, When to RAG?'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Это главный вопрос, с которым сталкивается каждая команда. Неправильный выбор стоит недели работы и тысячи долларов.'
              : 'This is the core question every team faces. The wrong choice costs weeks of work and thousands of dollars.'}
          </p>

          <div className="space-y-3">
            <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Промптинг — когда:' : 'Prompting — when:'}</h4>
              <ul className="space-y-1 text-neutral-400 text-sm">
                <li>• {lang === 'ru' ? 'Задача хорошо описывается инструкцией на естественном языке' : 'The task is well-described by a natural-language instruction'}</li>
                <li>• {lang === 'ru' ? 'Нужна быстрая итерация (часы, не дни)' : 'You need fast iteration (hours, not days)'}</li>
                <li>• {lang === 'ru' ? 'Стиль вывода frontier-модели уже достаточно хорош' : 'The frontier model\'s output style is already good enough'}</li>
                <li>• {lang === 'ru' ? 'У вас нет специфического обучающего датасета' : 'You don\'t have a specific training dataset'}</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'RAG — когда:' : 'RAG — when:'}</h4>
              <ul className="space-y-1 text-neutral-400 text-sm">
                <li>• {lang === 'ru' ? 'Модели нужен доступ к актуальным или внутренним данным' : 'The model needs access to fresh or internal data'}</li>
                <li>• {lang === 'ru' ? 'Ответы должны быть подкреплены источниками (цитирование)' : 'Answers must be backed by sources (citation)'}</li>
                <li>• {lang === 'ru' ? 'Данные часто обновляются (базы знаний, документация)' : 'Data updates frequently (knowledge bases, docs)'}</li>
                <li>• {lang === 'ru' ? 'Hallucination-контроль критически важен' : 'Hallucination control is critical'}</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Файн-тюнинг — когда:' : 'Fine-Tuning — when:'}</h4>
              <ul className="space-y-1 text-neutral-400 text-sm">
                <li>• {lang === 'ru' ? 'Нужно изменить стиль, формат или "поведение" модели' : 'You need to change the model\'s style, format, or "behavior"'}</li>
                <li>• {lang === 'ru' ? 'Промпт стал слишком длинным (>2000 токенов инструкций)' : 'The prompt has become too long (>2000 tokens of instructions)'}</li>
                <li>• {lang === 'ru' ? 'Вам нужна консистентность, которую промптинг не обеспечивает' : 'You need consistency that prompting can\'t provide'}</li>
                <li>• {lang === 'ru' ? 'У вас есть 500+ качественных примеров для обучения' : 'You have 500+ high-quality training examples'}</li>
                <li>• {lang === 'ru' ? 'Нужно снизить latency/стоимость за счет маленькой специализированной модели' : 'You need to reduce latency/cost using a small specialized model'}</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-5">
            <h4 className="text-amber-400 font-bold mb-2 text-sm">{lang === 'ru' ? 'Неочевидный факт' : 'Non-obvious fact'}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Файн-тюненная 7B модель часто превосходит промпт-инженеренную 70B модель на специфических задачах. Файн-тюнинг "впечатывает" задачу в веса, и модели не нужно тратить контекст на инструкции.'
                : 'A fine-tuned 7B model often outperforms a prompt-engineered 70B model on specific tasks. Fine-tuning "bakes" the task into weights, so the model doesn\'t need to spend context on instructions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 4: Dataset Preparation */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Database className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Подготовка данных — 90% успеха' : 'Chapter 4: Data Preparation — 90% of Success'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Главное правило файн-тюнинга: мусор на входе = мусор на выходе. 100 идеальных примеров лучше, чем 10 000 мусорных. Каждый пример в датасете — это сигнал для модели. Шум в данных = шум в ответах.'
              : 'The cardinal rule of fine-tuning: garbage in = garbage out. 100 perfect examples beat 10,000 trash ones. Every example in the dataset is a signal to the model. Noise in data = noise in outputs.'}
          </p>

          {/* Data format examples */}
          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Формат: пары инструкция-ответ' : 'Format: instruction-response pairs'}</h4>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400 overflow-x-auto">
              <pre>{`{
  "instruction": "${lang === 'ru' ? 'Классифицируй тип договора' : 'Classify the contract type'}",
  "input": "${lang === 'ru' ? 'Стороны договорились о поставке 100 единиц...' : 'The parties agreed to deliver 100 units...'}",
  "output": "${lang === 'ru' ? 'Договор поставки (ст. 506 ГК РФ)' : 'Supply contract (§ 2-106 UCC)'}"
}`}</pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Формат: чат (conversations)' : 'Format: chat (conversations)'}</h4>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400 overflow-x-auto">
              <pre>{`{
  "messages": [
    {"role": "system", "content": "${lang === 'ru' ? 'Ты юридический консультант...' : 'You are a legal consultant...'}"},
    {"role": "user", "content": "${lang === 'ru' ? 'Что делать, если сосед затопил?' : 'What to do if a neighbor flooded my apartment?'}"},
    {"role": "assistant", "content": "${lang === 'ru' ? 'В соответствии со ст. 1064 ГК РФ...' : 'Under applicable tort law...'}"}
  ]
}`}</pre>
            </div>
          </div>

          {/* Dataset size table */}
          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Сколько данных нужно?' : 'How much data do you need?'}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-[#303030]">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Задача' : 'Task'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Минимум' : 'Minimum'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Оптимально' : 'Optimal'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">{lang === 'ru' ? 'Стиль/формат ответов' : 'Style/format of answers'}</td>
                    <td className="py-2 pr-4">50–100</td>
                    <td className="py-2">200–500</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">{lang === 'ru' ? 'Классификация' : 'Classification'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? '100–500 на класс' : '100–500 per class'}</td>
                    <td className="py-2">{lang === 'ru' ? '1000+ на класс' : '1,000+ per class'}</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">{lang === 'ru' ? 'Генерация специализированного текста' : 'Specialized text generation'}</td>
                    <td className="py-2 pr-4">500–1,000</td>
                    <td className="py-2">5,000–10,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300">{lang === 'ru' ? 'Обучение новым знаниям' : 'Teaching new knowledge'}</td>
                    <td className="py-2 pr-4 text-red-400" colSpan={2}>{lang === 'ru' ? 'Не рекомендуется — используй RAG' : 'Not recommended — use RAG'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Чек-лист качественного датасета' : 'Quality Dataset Checklist'}</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">1.</span><span>{lang === 'ru' ? 'Ответы соответствуют тому, как вы ХОТИТЕ, чтобы модель отвечала' : 'Responses match how you WANT the model to respond'}</span></div>
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">2.</span><span>{lang === 'ru' ? 'Нет противоречивых примеров (одинаковый input → разный output)' : 'No contradictory examples (same input → different output)'}</span></div>
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">3.</span><span>{lang === 'ru' ? 'Разнообразие инструкций (не один и тот же вопрос 100 раз)' : 'Diversity of instructions (not the same question 100 times)'}</span></div>
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">4.</span><span>{lang === 'ru' ? 'Формат консистентный по всему датасету' : 'Format is consistent across the entire dataset'}</span></div>
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">5.</span><span>{lang === 'ru' ? 'Валидация: 10-20% данных отложить для eval-набора (никогда не обучайте на eval!)' : 'Validation: hold out 10-20% for eval set (never train on eval!)'}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 5: Practical Pipeline */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Code className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Практика — пайплайн файн-тюнинга' : 'Chapter 5: Practice — Fine-Tuning Pipeline'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Минимальный рабочий пайплайн с HuggingFace + PEFT (LoRA). Шесть шагов от установки до готовой модели.'
              : 'A minimal working pipeline with HuggingFace + PEFT (LoRA). Six steps from installation to a ready model.'}
          </p>

          <div className="bg-black/40 rounded-xl p-5 font-mono text-xs text-neutral-400 overflow-x-auto space-y-6">
            <div>
              <div className="text-emerald-500 mb-2"># {lang === 'ru' ? 'Шаг 1: Установка' : 'Step 1: Install'}</div>
              <div className="text-neutral-300">pip install transformers datasets peft trl bitsandbytes</div>
            </div>

            <div>
              <div className="text-emerald-500 mb-2"># {lang === 'ru' ? 'Шаг 2: Загрузка модели с квантизацией (QLoRA)' : 'Step 2: Load model with quantization (QLoRA)'}</div>
              <div className="text-blue-400">from</div> transformers <div className="inline text-blue-400">import</div> AutoModelForCausalLM, BitsAndBytesConfig<br />
              <div className="mt-1">bnb_config = BitsAndBytesConfig(</div>
              <div className="pl-4">load_in_4bit=<span className="text-amber-400">True</span>,</div>
              <div className="pl-4">bnb_4bit_quant_type=<span className="text-green-400">&quot;nf4&quot;</span>,</div>
              <div>)</div>
              <div className="mt-1">model = AutoModelForCausalLM.from_pretrained(</div>
              <div className="pl-4"><span className="text-green-400">&quot;mistralai/Mistral-7B-v0.1&quot;</span>, quantization_config=bnb_config</div>
              <div>)</div>
            </div>

            <div>
              <div className="text-emerald-500 mb-2"># {lang === 'ru' ? 'Шаг 3: Настройка LoRA-адаптера' : 'Step 3: Configure LoRA adapter'}</div>
              <div className="text-blue-400">from</div> peft <div className="inline text-blue-400">import</div> LoraConfig, get_peft_model<br />
              <div className="mt-1">lora_config = LoraConfig(</div>
              <div className="pl-4">r=<span className="text-amber-400">16</span>,                <span className="text-neutral-600"># {lang === 'ru' ? 'ранг адаптера' : 'adapter rank'}</span></div>
              <div className="pl-4">lora_alpha=<span className="text-amber-400">32</span>,         <span className="text-neutral-600"># {lang === 'ru' ? 'скейлинг (обычно 2×r)' : 'scaling (usually 2×r)'}</span></div>
              <div className="pl-4">target_modules=[<span className="text-green-400">&quot;q_proj&quot;</span>, <span className="text-green-400">&quot;k_proj&quot;</span>, <span className="text-green-400">&quot;v_proj&quot;</span>, <span className="text-green-400">&quot;o_proj&quot;</span>],</div>
              <div>)</div>
              <div className="mt-1">model = get_peft_model(model, lora_config)</div>
              <div className="text-neutral-600"># → trainable: 0.36% {lang === 'ru' ? 'параметров' : 'of parameters'}</div>
            </div>

            <div>
              <div className="text-emerald-500 mb-2"># {lang === 'ru' ? 'Шаг 4-5: Обучение' : 'Step 4-5: Training'}</div>
              <div className="text-blue-400">from</div> trl <div className="inline text-blue-400">import</div> SFTTrainer<br />
              <div className="mt-1">trainer = SFTTrainer(model=model, train_dataset=dataset, ...)</div>
              <div>trainer.train()</div>
            </div>

            <div>
              <div className="text-emerald-500 mb-2"># {lang === 'ru' ? 'Шаг 6: Сохранение (только адаптер — несколько MB!)' : 'Step 6: Save (just the adapter — a few MB!)'}</div>
              <div>model.save_pretrained(<span className="text-green-400">&quot;./my-legal-adapter&quot;</span>)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 6: Fine-Tuning via API */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Cloud className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 6: Файн-тюнинг через API (без GPU)' : 'Chapter 6: Fine-Tuning via API (no GPU needed)'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Не у всех есть A100. Провайдеры предлагают файн-тюнинг как сервис — вы загружаете данные, а они обучают модель на своей инфраструктуре.'
              : 'Not everyone has an A100. Providers offer fine-tuning as a service — you upload data, they train the model on their infrastructure.'}
          </p>

          <div className="bg-black/40 rounded-xl p-5 font-mono text-xs text-neutral-400 overflow-x-auto">
            <div className="text-emerald-500 mb-2"># OpenAI Fine-Tuning API</div>
            <div className="text-blue-400">from</div> openai <div className="inline text-blue-400">import</div> OpenAI<br />
            <div className="mt-1">client = OpenAI()</div>
            <div className="mt-2 text-neutral-600"># 1. {lang === 'ru' ? 'Загрузка данных (формат JSONL)' : 'Upload data (JSONL format)'}</div>
            <div>file = client.files.create(file=open(<span className="text-green-400">&quot;data.jsonl&quot;</span>, <span className="text-green-400">&quot;rb&quot;</span>), purpose=<span className="text-green-400">&quot;fine-tune&quot;</span>)</div>
            <div className="mt-2 text-neutral-600"># 2. {lang === 'ru' ? 'Запуск обучения' : 'Start training'}</div>
            <div>job = client.fine_tuning.jobs.create(training_file=file.id, model=<span className="text-green-400">&quot;gpt-4o-mini&quot;</span>)</div>
            <div className="mt-2 text-neutral-600"># 3. {lang === 'ru' ? 'Использование' : 'Usage'}</div>
            <div>client.chat.completions.create(model=<span className="text-green-400">&quot;ft:gpt-4o-mini:my-org::abc123&quot;</span>, ...)</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Платформы' : 'Platforms'}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-[#303030]">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Платформа' : 'Platform'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Модели' : 'Models'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Особенности' : 'Features'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">OpenAI</td>
                    <td className="py-2 pr-4">GPT-4o mini, GPT-4o</td>
                    <td className="py-2">{lang === 'ru' ? 'Просто, дорого, закрытые модели' : 'Simple, expensive, closed models'}</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">Together AI</td>
                    <td className="py-2 pr-4">Llama, Mistral</td>
                    <td className="py-2">{lang === 'ru' ? 'Открытые модели, хорошие цены' : 'Open models, good pricing'}</td>
                  </tr>
                  <tr className="border-b border-[#262626]">
                    <td className="py-2 pr-4 text-neutral-300">HF AutoTrain</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Любая с HF' : 'Any from HF'}</td>
                    <td className="py-2">{lang === 'ru' ? 'No-code интерфейс' : 'No-code interface'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300">Google Vertex AI</td>
                    <td className="py-2 pr-4">Gemini</td>
                    <td className="py-2">{lang === 'ru' ? 'Интеграция с GCP' : 'GCP integration'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 7: Risks */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <AlertTriangle className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 7: Риски и ловушки' : 'Chapter 7: Risks and Pitfalls'}
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
              <h4 className="text-red-400 font-bold mb-2">Overfitting ({lang === 'ru' ? 'Переобучение' : 'Overfitting'})</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                {lang === 'ru'
                  ? 'Модель запоминает обучающие примеры наизусть. Признаки: eval loss растет при снижающемся train loss.'
                  : 'Model memorizes training examples by heart. Signs: eval loss rises while train loss drops.'}
              </p>
              <p className="text-neutral-500 text-xs">{lang === 'ru' ? 'Решение: ранняя остановка, больше данных, меньше эпох, dropout, меньше r' : 'Fix: early stopping, more data, fewer epochs, dropout, lower r'}</p>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
              <h4 className="text-red-400 font-bold mb-2">Underfitting ({lang === 'ru' ? 'Недообучение' : 'Underfitting'})</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                {lang === 'ru'
                  ? 'Модель мало изменилась по сравнению с базовой. Она не усвоила ваши данные.'
                  : 'Model barely changed from baseline. It didn\'t absorb your data.'}
              </p>
              <p className="text-neutral-500 text-xs">{lang === 'ru' ? 'Решение: больше эпох, выше learning rate, больше r, больше данных' : 'Fix: more epochs, higher learning rate, larger r, more data'}</p>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
              <h4 className="text-red-400 font-bold mb-2">Catastrophic Forgetting ({lang === 'ru' ? 'Катастрофическое забывание' : 'Catastrophic Forgetting'})</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                {lang === 'ru'
                  ? 'Модель стала хороша в новой задаче, но забыла базовые навыки.'
                  : 'Model excels at the new task but forgot base skills.'}
              </p>
              <p className="text-neutral-500 text-xs">{lang === 'ru' ? 'Решение: LoRA (а не full FT), добавить общие примеры в датасет' : 'Fix: LoRA (not full FT), add general examples to dataset'}</p>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
              <h4 className="text-red-400 font-bold mb-2">Data Contamination ({lang === 'ru' ? 'Загрязнение данных' : 'Data Contamination'})</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-2">
                {lang === 'ru'
                  ? 'Eval-данные попали в обучающий набор. Метрики выглядят отлично, но модель не работает в реальных условиях.'
                  : 'Eval data leaked into training set. Metrics look great but model fails in real conditions.'}
              </p>
              <p className="text-neutral-500 text-xs">{lang === 'ru' ? 'Решение: строго разделяйте train/eval/test' : 'Fix: strictly separate train/eval/test'}</p>
            </div>
          </div>

          {/* How to evaluate */}
          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Как понять, что файн-тюнинг сработал?' : 'How to tell if fine-tuning worked?'}</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>1. <span className="text-neutral-300">Train/Eval Loss</span> — {lang === 'ru' ? 'должен снижаться, но без расхождения' : 'should decrease without divergence'}</div>
              <div>2. <span className="text-neutral-300">{lang === 'ru' ? 'Ручная проверка' : 'Manual check'}</span> — {lang === 'ru' ? '20–50 промптов, которых не было в обучении' : '20–50 prompts not seen in training'}</div>
              <div>3. <span className="text-neutral-300">A/B {lang === 'ru' ? 'тестирование' : 'testing'}</span> — {lang === 'ru' ? 'сравнение базовой и файн-тюненной модели' : 'compare base vs fine-tuned model'}</div>
              <div>4. <span className="text-neutral-300">{lang === 'ru' ? 'Бенчмарки' : 'Benchmarks'}</span> — {lang === 'ru' ? 'accuracy, F1, BLEU — до и после' : 'accuracy, F1, BLEU — before and after'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 8: Decision Tree + Combined Approaches */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Wrench className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 8: Дерево решений' : 'Chapter 8: Decision Tree'}
        </h2>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5 font-mono text-xs text-neutral-400 overflow-x-auto">
            <pre className="whitespace-pre">{lang === 'ru'
              ? `Нужны конкретные факты/документы?
├── Да → используй RAG
└── Нет
    ├── Решается хорошим промптом + few-shot?
    │   ├── Да → Prompt Engineering
    │   └── Нет
    │       ├── Нужно изменить стиль/формат/поведение?
    │       │   └── Да → Fine-Tuning (LoRA) ✓
    │       └── Нужна скорость/дешевизна на inference?
    │           └── Да → Fine-tune маленькую модель
    │               (7B с FT часто ≥ 70B с промптом)`
              : `Need specific facts/documents?
├── Yes → use RAG
└── No
    ├── Solvable with a good prompt + few-shot?
    │   ├── Yes → Prompt Engineering
    │   └── No
    │       ├── Need to change style/format/behavior?
    │       │   └── Yes → Fine-Tuning (LoRA) ✓
    │       └── Need speed/cost reduction at inference?
    │           └── Yes → Fine-tune a small model
    │               (7B with FT often ≥ 70B with prompting)`}</pre>
          </div>
        </div>
      </div>

      {/* Chapter 9: Combined Approaches */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Combine className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 9: Комбинированные подходы' : 'Chapter 9: Combined Approaches'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'На практике часто используют не один подход, а комбинацию. Это даёт лучшие результаты, чем любой метод по отдельности.'
              : 'In practice, teams often combine approaches rather than using just one. This produces better results than any single method alone.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
              <h4 className="text-emerald-400 font-bold mb-2 text-sm">RAG + Fine-Tuning</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Fine-tuning задаёт формат, стиль и задачу. RAG подключает актуальные знания. Пример: юридический чат-бот с формализованными ответами (FT) и цитированием актуальных законов (RAG).'
                  : 'Fine-tuning sets format, style, and task. RAG connects fresh knowledge. Example: a legal chatbot with formalized answers (FT) and citation of current laws (RAG).'}
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl border border-[#262626]">
              <h4 className="text-emerald-400 font-bold mb-2 text-sm">Fine-Tuning + Prompting</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Fine-tuning задаёт базовое поведение модели. Промпт уточняет конкретный запрос. Результат: короткие промпты (экономия токенов) + стабильное поведение (из файн-тюнинга).'
                  : 'Fine-tuning sets base model behavior. Prompt refines the specific request. Result: short prompts (token savings) + stable behavior (from fine-tuning).'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
