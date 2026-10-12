"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';

export default function LlmLandscapeTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* 1. Why this room exists */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Зачем нужна карта LLM-ландшафта' : 'Why You Need an LLM Landscape Map'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'В 2026 году ИИ корректнее рассматривать как слой цифровой инфраструктуры, а не как один класс продуктов. Практический результат зависит не только от "умности" модели, но и от стоимости инференса, доступа к вычислениям, качества интеграции и регуляторных ограничений.'
            : 'In 2026, AI is better understood as a digital infrastructure layer rather than a single product category. Practical outcomes depend not only on model capability but also on inference economics, compute access, integration quality, and regulatory constraints.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Задача этой комнаты — дать вам рабочую карту выбора: какую модель брать под конкретный workload, когда идти в закрытый API, когда — в open-weight, и как учитывать геополитику/комплаенс.'
            : 'This room gives you a practical selection map: which model class to use for each workload, when to use closed APIs vs open-weight models, and how to account for geopolitics/compliance.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru' ? (
            <>
              По состоянию на 2026, зрелые команды редко ставят всё на одну модель. Типичный подход: портфель из нескольких моделей и роутинг по типу задачи. Это хорошо сочетается с мульти-модельными каталогами вроде{' '}
              <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                AWS Bedrock
              </a>{' '}
              и облачными model hubs.
            </>
          ) : (
            <>
              As of 2026, mature teams rarely bet on a single model. The typical pattern is a multi-model portfolio with routing by workload type. This fits multi-model catalogs such as{' '}
              <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                AWS Bedrock
              </a>{' '}
              and similar cloud model hubs.
            </>
          )}
        </p>
        <p className="text-neutral-400 mt-6 border-t border-border-card pt-4">
          {lang === 'ru'
            ? 'Начинаем с базового вопроса: что вообще такое "модель" в техническом смысле?'
            : 'We start with the core question: what exactly is a "model" in technical terms?'}
        </p>
      </div>

      {/* 2. What is a model */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Что такое «модель»?' : 'What Is a "Model"?'}
        </h2>
        <div className="space-y-5 text-neutral-300 leading-relaxed">
          <p>
            {lang === 'ru' ? (
              <>
                Модель — это не программа с жёсткими правилами вроде «если А, то Б»
                <Link
                  href={`/${lang}/rooms/ai-history`}
                  className="align-super text-[11px] font-medium text-accent-300/90 hover:text-accent-200 no-underline"
                  aria-label="Сноска: переход от rule-based AI к ML"
                >
                  [1]
                </Link>
                . Современные модели ближе к тому, что мы называем интуицией: в процессе обучения на миллиардах страниц текста модель усвоила статистические паттерны — какие слова, фразы и идеи чаще появляются рядом друг с другом.
              </>
            ) : (
              <>
                A model is not a rigid rule-based program like &quot;if A, then B&quot;
                <Link
                  href={`/${lang}/rooms/ai-history`}
                  className="align-super text-[11px] font-medium text-accent-300/90 hover:text-accent-200 no-underline"
                  aria-label="Footnote: transition from rule-based AI to ML"
                >
                  [1]
                </Link>
                . Modern models are closer to what we call intuition: during training on billions of pages, the model absorbs statistical patterns of which words, phrases, and ideas tend to appear together.
              </>
            )}
          </p>

          <p>
            {lang === 'ru' ? (
              <>
                Когда вы задаёте вопрос, модель не «ищет ответ в базе данных», а достраивает наиболее вероятное продолжение. За этой метафорой стоит конкретный артефакт: статический файл (часто в формате <code className="bg-white/5 px-1.5 py-0.5 rounded text-neutral-200">.safetensors</code>), содержащий миллиарды параметров — «весов».
              </>
            ) : (
              <>
                When you prompt the model, it does not &quot;look up&quot; an answer in a hidden database; it predicts the most likely continuation. Behind this metaphor is a concrete artifact: a static file (often in <code className="bg-white/5 px-1.5 py-0.5 rounded text-neutral-200">.safetensors</code> format) containing billions of parameters, the model weights.
              </>
            )}
          </p>

          <p>
            {lang === 'ru'
              ? 'Сам по себе файл ничего не делает; чтобы он «ожил», нужен GPU. И модель не меняется от разговора к разговору: чтобы она стала лучше, разработчики выпускают новую версию весов.'
              : 'The file alone does nothing; a GPU is needed to run inference. And the model does not change from chat to chat: to improve it, developers release a new version of weights.'}
          </p>

          <div className="pt-3 border-t border-border-card text-sm text-neutral-500">
            <p>
              <span className="text-neutral-400 mr-1">[1]</span>
              {lang === 'ru' ? (
                <>
                  Подробнее о переходе от rule-based подхода к ML: комната{' '}
                  <Link href={`/${lang}/rooms/ai-history`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                    «История ИИ»
                  </Link>
                  .
                </>
              ) : (
                <>
                  More on the shift from rule-based AI to ML in the{' '}
                  <Link href={`/${lang}/rooms/ai-history`} className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
                    History of AI
                  </Link>{' '}
                  room.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Category map (state: October 2026) */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-3 text-heading">
          {lang === 'ru' ? 'Карта LLM-ландшафта' : 'LLM Landscape Map'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? 'Названия моделей меняются каждые несколько месяцев, а классы — гораздо реже. Поэтому начинайте с класса модели, а не с бренда. Класс подсказывает три вещи сразу: сколько стоит запрос, как быстро придет ответ и где модель может работать — только через чужой API, на ваших серверах или прямо на телефоне. Конкретную модель внутри класса выбирают уже потом, по своим тестам. Таблица ниже показывает состояние на октябрь 2026 года.'
            : 'Model names change every few months; classes change much more slowly. So start from the model class, not the brand. The class tells you three things at once: what a request costs, how fast the answer arrives, and where the model can run — only through someone else\'s API, on your own servers, or right on a phone. The specific model within the class is chosen later, with your own tests. The table below shows the state as of October 2026.'}
        </p>

        <div className="overflow-x-auto border border-border-subtle rounded-xl">
          <table className="min-w-[920px] w-full text-left">
            <thead>
              <tr className="border-b border-border-subtle bg-input">
                <th className="px-4 py-3 text-xs uppercase tracking-wider text-neutral-500">{lang === 'ru' ? 'Класс' : 'Class'}</th>
                <th className="px-4 py-3 text-xs uppercase tracking-wider text-neutral-300 border-l border-border-subtle">{lang === 'ru' ? 'Примеры (октябрь 2026)' : 'Examples (October 2026)'}</th>
                <th className="px-4 py-3 text-xs uppercase tracking-wider text-accent-300 border-l border-border-subtle">{lang === 'ru' ? 'Когда использовать' : 'When to use'}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                {
                  cls: { ru: 'Флагманские модели', en: 'Flagship models' },
                  examples: [
                    ['GPT-6 Astra', 'https://developers.openai.com/api/docs/models/gpt-6-astra'],
                    ['Claude Fable 5.1', 'https://platform.claude.com/docs/en/models/fable-5-1/overview'],
                    ['Claude Opus 5.5', 'https://platform.claude.com/docs/en/models/opus-5-5/overview'],
                    ['Gemini 3.1 Pro (preview)', 'https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview'],
                  ],
                  use: { ru: 'Самые трудные задачи: долгая агентная работа, сложный код и анализ, где ошибка дорого стоит', en: 'The hardest tasks: long agentic work, complex code, and analysis where a mistake is expensive' },
                },
                {
                  cls: { ru: 'Сбалансированные модели', en: 'Balanced models' },
                  examples: [
                    ['Claude Sonnet 5.5', 'https://platform.claude.com/docs/en/models/sonnet-5-5/overview'],
                    ['GPT-6.1 Sol', 'https://developers.openai.com/api/docs/models/gpt-6.1-sol'],
                    ['Gemini 3.8 Flash', 'https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash'],
                  ],
                  use: { ru: 'Основной поток рабочих задач: качество близко к флагману, но дешевле и быстрее', en: 'The bulk of production work: quality close to the flagship, but cheaper and faster' },
                },
                {
                  cls: { ru: 'Быстрые и дешевые', en: 'Fast and low-cost' },
                  examples: [
                    ['Claude Haiku 5.5', 'https://platform.claude.com/docs/en/models/haiku-5-5/overview'],
                    ['GPT-6 Luna', 'https://developers.openai.com/api/docs/models/gpt-6-luna'],
                    ['Gemini 3.5 Flash-Lite', 'https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite'],
                    ['DeepSeek V4.1 Flash', 'https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash'],
                  ],
                  use: { ru: 'Большие объемы: классификация, извлечение данных, роутинг запросов', en: 'High volume: classification, data extraction, request routing' },
                },
                {
                  cls: { ru: 'Кодинг и агенты', en: 'Coding and agents' },
                  examples: [
                    ['Claude Opus 5.5', 'https://platform.claude.com/docs/en/models/opus-5-5/overview'],
                    ['GPT-6 Sol', 'https://developers.openai.com/api/docs/models/gpt-6-sol'],
                    ['Kimi K2.7-Code', 'https://huggingface.co/moonshotai/Kimi-K2.7-Code'],
                  ],
                  use: { ru: 'Агенты, которые сами пишут, запускают и исправляют код', en: 'Agents that write, run, and fix code on their own' },
                },
                {
                  cls: { ru: 'Открытые веса (open-weight)', en: 'Open-weight' },
                  examples: [
                    ['Kimi K3', 'https://huggingface.co/moonshotai/Kimi-K3'],
                    ['GLM-5.3', 'https://huggingface.co/zai-org/GLM-5.3'],
                    ['DeepSeek V4-Pro', 'https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro'],
                    ['Qwen3.8', 'https://huggingface.co/collections/Qwen/qwen38-6a7d69d63a8fa0914eb7e54c'],
                    ['Mistral Large 4', 'https://docs.mistral.ai/models/mistral-large-4-0'],
                    ['gpt-oss-120b', 'https://developers.openai.com/api/docs/models/gpt-oss-120b'],
                  ],
                  use: { ru: 'Свои серверы: контроль над данными, дообучение, нет зависимости от чужого API', en: 'Your own servers: control over data, fine-tuning, no dependence on someone else\'s API' },
                },
                {
                  cls: { ru: 'Голос и реальное время', en: 'Voice and real time' },
                  examples: [
                    ['GPT-Live 1', 'https://developers.openai.com/api/docs/models/gpt-live-1'],
                    ['GPT-Realtime-2.1', 'https://developers.openai.com/api/docs/models/gpt-realtime-2.1'],
                    ['Gemini 3.8 Live', 'https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live'],
                  ],
                  use: { ru: 'Голосовые агенты и живой диалог, в котором модель можно перебить', en: 'Voice agents and live dialogue in which the user can interrupt the model' },
                },
                {
                  cls: { ru: 'На устройстве (on-device)', en: 'On-device' },
                  examples: [
                    ['Gemma 4 E2B', 'https://huggingface.co/google/gemma-4-E2B-it'],
                    ['Gemma 4 E4B', 'https://huggingface.co/google/gemma-4-E4B-it'],
                    ['Apple AFM 3 Core', 'https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models'],
                    ['Ministral 3 3B', 'https://docs.mistral.ai/models/ministral-3-3b-25-12'],
                    ['Phi-4-mini', 'https://huggingface.co/microsoft/Phi-4-mini-instruct'],
                  ],
                  use: { ru: 'Телефон, ноутбук, браузер: работа без сети, данные не покидают устройство', en: 'Phone, laptop, browser: works offline, data stays on the device' },
                },
              ].map((row, idx, rows) => (
                <tr key={row.cls.en} className={idx < rows.length - 1 ? 'border-b border-border-subtle' : undefined}>
                  <td className="px-4 py-3 text-neutral-200">{lang === 'ru' ? row.cls.ru : row.cls.en}</td>
                  <td className="px-4 py-3 text-neutral-300 border-l border-border-subtle">
                    {row.examples.map(([name, href], i) => (
                      <React.Fragment key={name}>
                        <a href={href} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{name}</a>
                        {i < row.examples.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="px-4 py-3 text-neutral-400 border-l border-border-subtle">{lang === 'ru' ? row.use.ru : row.use.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mt-4">
          {lang === 'ru'
            ? 'Происхождение моделей из таблицы: OpenAI (GPT, gpt-oss), Anthropic (Claude), Google (Gemini, Gemma), Apple и Microsoft (Phi) — США; DeepSeek, Moonshot AI (Kimi), Z.ai (GLM) и Alibaba (Qwen) — Китай; Mistral AI (Mistral, Ministral) — Франция, Европа.'
            : 'Origin of the models in the table: OpenAI (GPT, gpt-oss), Anthropic (Claude), Google (Gemini, Gemma), Apple, and Microsoft (Phi) — USA; DeepSeek, Moonshot AI (Kimi), Z.ai (GLM), and Alibaba (Qwen) — China; Mistral AI (Mistral, Ministral) — France, Europe.'}
        </p>
        <p className="text-neutral-500 text-sm leading-relaxed mt-2">
          {lang === 'ru' ? 'Названия сверены 12.10.2026 с официальными страницами моделей: ' : 'Names checked on 12 Oct 2026 against the official model pages: '}
          {[
            ['OpenAI', 'https://developers.openai.com/api/docs/models/all'],
            ['Anthropic', 'https://platform.claude.com/docs/en/about-claude/models/overview'],
            ['Gemini', 'https://ai.google.dev/gemini-api/docs/models'],
            ['Gemma', 'https://ai.google.dev/gemma/docs/core'],
            ['DeepSeek', 'https://api-docs.deepseek.com/quick_start/pricing'],
            ['Mistral', 'https://docs.mistral.ai/getting-started/models'],
            ['Kimi', 'https://huggingface.co/moonshotai'],
            ['GLM', 'https://huggingface.co/zai-org'],
            ['Qwen', 'https://huggingface.co/Qwen'],
            ['Apple', 'https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models'],
          ].map(([label, href], idx, all) => (
            <React.Fragment key={label}>
              <a href={href} target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{label}</a>
              {idx < all.length - 1 ? ', ' : '.'}
            </React.Fragment>
          ))}
        </p>

        <div className="space-y-5 text-neutral-300 leading-relaxed mt-6">
          <p>
            {lang === 'ru'
              ? 'Разница в цене между классами большая. У Anthropic самая мощная модель, Claude Fable 5.1, стоит 10 долларов за миллион входных токенов и 50 долларов за миллион выходных, а Claude Haiku 5.5 — от 0,10 и 0,50 доллара. Это разница в сто раз внутри одной линейки. DeepSeek V4.1 Flash в часы пик берет 0,30 доллара за миллион входных токенов. Поэтому в продакшене часто строят роутинг: простые и массовые запросы идут в быструю модель, и только трудные попадают к флагману.'
              : 'The price gap between classes is large. Anthropic\'s most capable model, Claude Fable 5.1, costs $10 per million input tokens and $50 per million output tokens, while Claude Haiku 5.5 starts at $0.10 and $0.50. That is a hundredfold difference within one lineup. DeepSeek V4.1 Flash charges $0.30 per million input tokens at peak hours. This is why production systems often use routing: simple, high-volume requests go to a fast model, and only the hard ones reach the flagship.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'В прошлой версии этой таблицы были строки «модели рассуждения», «длинный контекст» и «мультимодальные». В 2026 году это уже не отдельные классы, а свойства большинства моделей. Все четыре текущие модели Claude рассуждают адаптивно, то есть сами решают, сколько думать, и принимают до миллиона токенов. У DeepSeek V4 рассуждение включено по умолчанию, контекст — тоже миллион токенов. Gemini 3.8 Flash принимает миллион токенов и позволяет выбрать уровень рассуждения: low, medium или high. Изображения на вход принимают все текущие модели Claude, а Gemma 4 — текст, аудио и изображения. Отдельной строкой остался голос в реальном времени: там решают задержка и умение модели остановиться, когда ее перебивают.'
              : 'The previous version of this table had rows for "reasoning models", "long context", and "multimodal". In 2026 these are no longer separate classes but properties of most models. All four current Claude models reason adaptively, meaning they decide for themselves how much to think, and accept up to a million tokens. DeepSeek V4 has reasoning on by default and a context of a million tokens as well. Gemini 3.8 Flash accepts a million tokens and lets you choose the reasoning level: low, medium, or high. All current Claude models accept images as input, and Gemma 4 accepts text, audio, and images. Voice in real time kept its own row: there, latency and the model\'s ability to stop when interrupted are what matter.'}
          </p>
          <p>
            {lang === 'ru'
              ? 'Такая таблица устаревает быстро. Прошлая версия называла примерами GPT-4o и o1; теперь на странице моделей OpenAI o1 стоит в разделе устаревших (deprecated), и туда же перенесены отдельные Codex-модели для кода. На странице моделей Google в октябре 2026 года одновременно перечислены Flash-модели версий 3, 3.1, 3.5, 3.6 и 3.8. Поэтому запоминайте классы и то, чем они отличаются, а конкретное имя проверяйте на официальной странице поставщика в тот день, когда выбираете модель.'
              : 'A table like this goes stale quickly. The previous version gave GPT-4o and o1 as examples; now OpenAI\'s model page lists o1 under deprecated models, and the separate Codex models for code have moved there too. In October 2026, Google\'s model page lists Flash models of versions 3, 3.1, 3.5, 3.6, and 3.8 at the same time. So remember the classes and what sets them apart, and check the specific name on the provider\'s official page on the day you choose a model.'}
          </p>
        </div>
      </div>

      {/* 4. API vs open-weight */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Закрытый API vs Open-weight: базовый выбор' : 'Closed API vs Open-weight: First Decision'}
        </h2>
        <div className="space-y-5">
          <p className="text-neutral-400 leading-relaxed max-w-4xl">
            {lang === 'ru'
              ? 'Выбор не между “модно/не модно”, а между скоростью запуска и степенью контроля над инфраструктурой и данными.'
              : 'This is not a “trendy vs non-trendy” choice. It is a tradeoff between launch speed and control over infrastructure and data.'}
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-[#161a18] via-card-dark to-card-dark p-5">
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-accent-500/10 border border-accent-500/30 text-[11px] font-semibold text-accent-300 uppercase tracking-wider mb-3">
                {lang === 'ru' ? 'КОНЦЕПТ' : 'CONCEPT'}
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">Endpoint</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                {lang === 'ru'
                  ? 'Endpoint — это URL API, куда ваше приложение отправляет запрос и откуда получает ответ модели.'
                  : 'An endpoint is the API URL where your app sends a request and receives the model response.'}
              </p>
              <div className="rounded-lg border border-border-emphasis bg-card-dark px-3 py-2 text-xs text-neutral-400 font-mono">
                POST /v1/responses
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-card p-5">
              <div className="text-[11px] uppercase tracking-wider text-accent-300/90 mb-3">
                {lang === 'ru' ? 'Закрытый API' : 'Closed API'}
              </div>
              <ul className="space-y-2 text-neutral-300 leading-relaxed mb-4">
                <li>• {lang === 'ru' ? 'Самый быстрый запуск.' : 'Fastest time-to-market.'}</li>
                <li>• {lang === 'ru' ? 'Минимум DevOps на старте.' : 'Minimal DevOps overhead at start.'}</li>
                <li>• {lang === 'ru' ? 'Хорошо для MVP и проверки гипотез.' : 'Best for MVP and hypothesis testing.'}</li>
              </ul>
              <div className="text-sm text-neutral-500 border-t border-border-subtle pt-3">
                {lang === 'ru' ? 'Фокус: скорость и простота.' : 'Focus: speed and simplicity.'}
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-card p-5">
              <div className="text-[11px] uppercase tracking-wider text-accent-300/90 mb-3">Open-weight</div>
              <ul className="space-y-2 text-neutral-300 leading-relaxed mb-4">
                <li>• {lang === 'ru' ? 'Больше контроля и приватности.' : 'More control and privacy.'}</li>
                <li>• {lang === 'ru' ? 'Гибкая кастомизация под домен.' : 'Flexible domain customization.'}</li>
                <li>• {lang === 'ru' ? 'Нужны инфраструктура и опытная команда.' : 'Requires infrastructure and mature engineering.'}</li>
              </ul>
              <div className="text-sm text-neutral-500 border-t border-border-subtle pt-3">
                {lang === 'ru' ? 'Фокус: владение и долгосрочный контроль.' : 'Focus: ownership and long-term control.'}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle bg-input p-4">
            <h4 className="text-neutral-200 font-semibold mb-3">
              {lang === 'ru' ? 'Практический порядок выбора' : 'Practical decision flow'}
            </h4>
            <ol className="space-y-3 text-sm text-neutral-400">
              <li className="rounded-lg border border-border-subtle bg-card-dark px-3 py-2">
                <span className="text-accent-300 mr-1">1.</span>
                {lang === 'ru' ? 'Определите workload.' : 'Define the workload.'}
              </li>
              <li className="rounded-lg border border-border-subtle bg-card-dark px-3 py-2">
                <span className="text-accent-300 mr-1">2.</span>
                {lang === 'ru' ? 'Выберите класс модели.' : 'Pick the model class.'}
              </li>
              <li className="rounded-lg border border-border-subtle bg-card-dark px-3 py-2">
                <span className="text-accent-300 mr-1">3.</span>
                {lang === 'ru' ? 'Выберите провайдера/endpoint.' : 'Choose provider/endpoint.'}
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 5. Workload-first choice */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Как выбирать по задаче (workload-first)' : 'How to Choose by Workload (Workload-First)'}
        </h2>
        <p className="text-neutral-400 leading-relaxed mb-5">
          {lang === 'ru'
            ? 'Ниже — четыре типовых класса workload. Читайте их сверху вниз и сопоставляйте со своей задачей по цели, объёму трафика и требованиям к качеству. Это быстрый ориентир до детального сравнения моделей и провайдеров.'
            : 'Below are four common workload classes. Read them top to bottom and map them to your use case by objective, traffic profile, and quality requirements. This is a fast orientation step before deeper model and provider comparison.'}
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Качество критично' : 'Quality-critical tasks'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Reasoning, сложные агентные цепочки, многошаговый анализ.' : 'Reasoning-heavy workflows, complex agentic chains, multi-step analysis.'}</p>
            <p className="text-accent-300 text-sm mt-2">{lang === 'ru' ? 'Обычно: Frontier + eval-gates' : 'Typical: Frontier + evaluation gates'}</p>
            <p className="text-neutral-500 text-sm mt-2">
              {lang === 'ru'
                ? 'Пример: юридический copilot готовит черновик позиции по сложному спору на основе десятков документов. Затем он проверяет рассуждение на логические противоречия и отмечает слабые аргументы. После этого юрист получает структурированный драфт с рисками и может быстро принять финальное решение.'
                : 'Example: a legal copilot drafts a position on a complex dispute based on dozens of documents. It then stress-tests the reasoning for contradictions and flags weak arguments. The lawyer receives a structured draft with risk notes and can make a final decision much faster.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Цена и масштаб' : 'Cost and scale-sensitive tasks'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Массовые FAQ, классификация, шаблонные ответы.' : 'High-volume FAQ, classification, templated responses.'}</p>
            <p className="text-accent-300 text-sm mt-2">{lang === 'ru' ? 'Обычно: эффективные модели' : 'Typical: Efficient models'}</p>
            <p className="text-neutral-500 text-sm mt-2">
              {lang === 'ru'
                ? 'Пример: e-commerce поддержка обрабатывает до 200k однотипных вопросов в день о доставке и возвратах. Пользователи ожидают быстрый ответ за секунды, а маржа не позволяет дорогой инференс на каждый тикет. Поэтому команда выбирает эффективную модель, держит строгий лимит cost/query и масштабирует сервис без скачка бюджета.'
                : 'Example: an e-commerce support bot handles up to 200k repetitive shipping and returns questions per day. Users expect replies in seconds, while margins do not allow expensive inference per ticket. The team uses an efficient model, enforces strict cost/query limits, and scales traffic without a budget spike.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Большой контекст' : 'Long-context analysis'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Контракты, отчеты, многостраничные документы.' : 'Contracts, reports, and long multi-document analysis.'}</p>
            <p className="text-accent-300 text-sm mt-2">{lang === 'ru' ? 'Обычно: модели длинного контекста' : 'Typical: Long-context class'}</p>
            <p className="text-neutral-500 text-sm mt-2">
              {lang === 'ru'
                ? 'Пример: инвестиционная команда загружает 300-страничный annual report и набор приложений к нему. Модель должна извлечь ключевые KPI, собрать риски и найти расхождения между разделами, которые люди часто пропускают. В итоге аналитик получает не пересказ, а карту сигналов с привязкой к конкретным страницам и цитатам.'
                : 'Example: an investment team uploads a 300-page annual report plus appendices. The model must extract key KPIs, summarize risks, and detect cross-section inconsistencies that humans often miss. The analyst gets not a generic summary but a signal map with references to exact pages and quotes.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Мультимодальные потоки' : 'Multimodal pipelines'}</h4>
            <p className="text-neutral-400 text-sm">{lang === 'ru' ? 'Изображения, видео, аудио + текст в одном workflow.' : 'Image, video, audio, and text in one workflow.'}</p>
            <p className="text-accent-300 text-sm mt-2">{lang === 'ru' ? 'Обычно: мультимодальные модели' : 'Typical: Multimodal class'}</p>
            <p className="text-neutral-500 text-sm mt-2">
              {lang === 'ru'
                ? 'Пример: служба контроля качества на производстве анализирует фото дефекта, голосовой комментарий инспектора и техкарту в одном процессе. Модель сопоставляет визуальный паттерн с текстовым описанием и формирует предварительный диагноз поломки. Затем система автоматически предлагает чек-лист действий для сменного инженера и сохраняет инцидент в журнал.'
                : 'Example: a manufacturing QA workflow analyzes a defect photo, an inspector voice note, and a technical sheet in one process. The model matches visual patterns with the spoken/text description and produces a preliminary fault diagnosis. The system then generates an action checklist for the shift engineer and logs the incident automatically.'}
            </p>
          </div>
        </div>
      </div>

      {/* 6. Open-weight details */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Open-Weight экосистема: владение и контроль' : 'Open-Weight Ecosystem: Ownership and Control'}
        </h2>

        <div className="grid grid-cols-1 gap-4 mb-5">
          <div className="bg-card border border-border-emphasis rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr] text-xs uppercase tracking-wider">
              <div className="px-4 py-3 text-neutral-500 border-b border-border-subtle">{lang === 'ru' ? 'Критерий' : 'Criteria'}</div>
              <div className="px-4 py-3 text-neutral-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Закрытый API' : 'Closed API'}</div>
              <div className="px-4 py-3 text-accent-300 border-l border-b border-border-subtle">Open-weight</div>
            </div>
            <div className="grid grid-cols-[180px_1fr_1fr] text-sm">
              <div className="px-4 py-3 text-neutral-500 border-b border-border-subtle">{lang === 'ru' ? 'Запуск' : 'Launch speed'}</div>
              <div className="px-4 py-3 text-neutral-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Очень быстро' : 'Very fast'}</div>
              <div className="px-4 py-3 text-neutral-400 border-l border-b border-border-subtle">{lang === 'ru' ? 'Медленнее, нужна настройка' : 'Slower, requires setup'}</div>

              <div className="px-4 py-3 text-neutral-500 border-b border-border-subtle">{lang === 'ru' ? 'Контроль' : 'Control'}</div>
              <div className="px-4 py-3 text-neutral-400 border-l border-b border-border-subtle">{lang === 'ru' ? 'Ограниченный' : 'Limited'}</div>
              <div className="px-4 py-3 text-accent-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Максимальный' : 'Maximum'}</div>

              <div className="px-4 py-3 text-neutral-500 border-b border-border-subtle">{lang === 'ru' ? 'Приватность' : 'Privacy'}</div>
              <div className="px-4 py-3 text-neutral-400 border-l border-b border-border-subtle">{lang === 'ru' ? 'Провайдер обрабатывает данные' : 'Provider handles data'}</div>
              <div className="px-4 py-3 text-accent-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Данные остаются у вас' : 'Data stays with you'}</div>

              <div className="px-4 py-3 text-neutral-500">{lang === 'ru' ? 'DevOps-нагрузка' : 'Ops burden'}</div>
              <div className="px-4 py-3 text-neutral-300 border-l">{lang === 'ru' ? 'Низкая' : 'Low'}</div>
              <div className="px-4 py-3 text-neutral-400 border-l">{lang === 'ru' ? 'Высокая' : 'High'}</div>
            </div>
          </div>

          <div className="bg-input border border-warning-500/30 rounded-xl p-4">
            <p className="text-[11px] uppercase tracking-wider text-warning-300 mb-2">
              {lang === 'ru' ? 'Важный нюанс' : 'Important nuance'}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Open-weight не равно open-source: чаще открыты только веса, а данные и полный рецепт обучения остаются закрытыми.'
                : 'Open-weight is not the same as open-source: usually only weights are shared, while data and full training recipe remain closed.'}
            </p>
          </div>
        </div>
      </div>

      {/* 7. Geopolitics and sovereignty */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Геополитика ИИ и технологический суверенитет' : 'AI Geopolitics and Technological Sovereignty'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6">
          {lang === 'ru'
            ? 'Геополитика ИИ в 2026 году определяется не только алгоритмами, но и концентрацией физических ресурсов. Выбор модели — это стратегическое решение, зависящее от доступа к чипам и контроля над данными.'
            : 'AI geopolitics in 2026 is shaped not only by algorithms but by the concentration of physical resources. Model choice is a strategic decision depending on chip access and data control.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border-subtle p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-heading mb-3">
              {lang === 'ru' ? 'Суверенитет данных (Data Sovereignty)' : 'Data Sovereignty'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Открытый интернет (Common Crawl) почти исчерпан. Главным сокровищем становятся проприетарные данные наций и корпораций: медицинские записи, юридические архивы, данные сенсоров и уникальные культурные пласты. Суверенитет — это способность защищать и эффективно использовать эти данные для обучения своих моделей.'
                : 'The open internet (Common Crawl) is nearly exhausted. Proprietary data from nations and corporations — medical records, legal archives, sensor data, and unique cultural layers — is becoming the primary treasure. Sovereignty is the ability to protect and effectively use this data to train one\'s own models.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-heading mb-3">
              {lang === 'ru' ? 'Вычислительный разрыв (The Compute Gap)' : 'The Compute Gap'}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Доступ к GPU-кластерам и дешевой энергии становится фактором национальной безопасности. Страны с избытком энергии и доступом к передовым чипам получают преимущество в скорости обучения "фронтирных" моделей, в то время как остальные вынуждены полагаться на более эффективные, но менее мощные системы.'
                : 'Access to GPU clusters and cheap energy is becoming a national security factor. Nations with energy surpluses and access to advanced chips gain an advantage in the training speed of "frontier" models, while others are forced to rely on more efficient but less powerful systems.'}
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border-subtle rounded-xl overflow-x-auto">
            <div className="min-w-[960px]">
              <div className="grid grid-cols-[110px_1fr_1fr_1.25fr] text-[11px] uppercase tracking-wider">
                <div className="px-3 py-2.5 text-neutral-500 border-b border-border-subtle">{lang === 'ru' ? 'Регион' : 'Region'}</div>
                <div className="px-3 py-2.5 text-neutral-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Сильная сторона' : 'Strength'}</div>
                <div className="px-3 py-2.5 text-neutral-400 border-l border-b border-border-subtle">{lang === 'ru' ? 'Ограничение' : 'Constraint'}</div>
                <div className="px-3 py-2.5 text-accent-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Типичная стратегия' : 'Typical strategy'}</div>
              </div>
              <div className="grid grid-cols-[110px_1fr_1fr_1.25fr] text-sm">
                <div className="px-3 py-3 text-neutral-300 border-b border-border-subtle">{lang === 'ru' ? 'США' : 'USA'}</div>
                <div className="px-3 py-3 text-neutral-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Frontier-вычисления и сильная платформа дистрибуции' : 'Frontier compute and strong distribution platform'}</div>
                <div className="px-3 py-3 text-neutral-500 border-l border-b border-border-subtle">{lang === 'ru' ? 'Высокая цена и влияние экспортных ограничений' : 'Higher cost and export-control exposure'}</div>
                <div className="px-3 py-3 text-accent-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Премиальные кейсы и tool-heavy copilot-продукты' : 'Premium workloads and tool-heavy copilot products'}</div>

                <div className="px-3 py-3 text-neutral-300 border-b border-border-subtle">{lang === 'ru' ? 'Китай' : 'China'}</div>
                <div className="px-3 py-3 text-neutral-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Эффективный инференс и массовый rollout' : 'Efficient inference and fast mass rollout'}</div>
                <div className="px-3 py-3 text-neutral-500 border-l border-b border-border-subtle">{lang === 'ru' ? 'Более сложный трансграничный комплаенс' : 'More complex cross-border compliance'}</div>
                <div className="px-3 py-3 text-accent-300 border-l border-b border-border-subtle">{lang === 'ru' ? 'Высокий объем трафика при жестком контроле cost/query' : 'High-volume traffic with strict cost/query focus'}</div>

                <div className="px-3 py-3 text-neutral-300">{lang === 'ru' ? 'Европа' : 'Europe'}</div>
                <div className="px-3 py-3 text-neutral-300 border-l">{lang === 'ru' ? 'Регуляторное лидерство и фокус на суверенитете' : 'Regulatory leadership and sovereignty focus'}</div>
                <div className="px-3 py-3 text-neutral-500 border-l">{lang === 'ru' ? 'Меньшая концентрация frontier-GPU мощностей' : 'Lower concentration of frontier GPU capacity'}</div>
                <div className="px-3 py-3 text-accent-300 border-l">{lang === 'ru' ? 'Compliance-first on-prem/hybrid архитектуры' : 'Compliance-first on-prem/hybrid architectures'}</div>
              </div>
            </div>
          </div>

          <div className="bg-input border border-border-subtle rounded-xl p-4">
            <h4 className="text-neutral-200 font-semibold mb-3">{lang === 'ru' ? 'Ключевые точки давления 2026' : 'Pressure Points 2026'}</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>{lang === 'ru' ? '• Концентрация вычислений у ограниченного числа облачных и чип-поставщиков.' : '• Compute concentration among a small set of cloud and chip providers.'}</li>
              <li>{lang === 'ru' ? '• Экспортные ограничения могут резко менять доступность моделей.' : '• Export controls can quickly change model availability.'}</li>
              <li>{lang === 'ru' ? '• Энергия и дата-центры напрямую влияют на AI-экономику.' : '• Power and data-center capacity directly shape AI economics.'}</li>
              <li>{lang === 'ru' ? '• Разные юрисдикции требуют разных правил хранения и аудита данных.' : '• Different jurisdictions require different data residency and audit models.'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 8. Practical team playbook */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Enterprise-чеклист 2.0' : 'Enterprise Checklist 2.0'}
        </h2>
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">1</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Классифицируйте workload по целям: качество, latency, цена.' : 'Classify workloads by objective: quality, latency, and cost.'}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">2</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Опишите классы данных и требования к data residency.' : 'Map data classes and residency requirements.'}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">3</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Выберите топологию: API, VPC, On-prem или гибрид.' : 'Choose topology: API, VPC, on-prem, or hybrid.'}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">4</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Заранее задайте fallback-модели и план vendor exit.' : 'Define fallback models and a vendor-exit plan in advance.'}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">5</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Поставьте eval-gates: качество, безопасность, комплаенс.' : 'Set evaluation gates for quality, safety, and compliance.'}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-300 text-xs flex items-center justify-center mt-0.5">6</span>
            <p className="text-neutral-300">{lang === 'ru' ? 'Считайте полный TCO ежемесячно: инференс + DevOps + комплаенс.' : 'Track full monthly TCO: inference, operations, and compliance.'}</p>
          </div>
        </div>
      </div>

      {/* 9. Scenario mission intro */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Сценарная миссия: применяем карту на практике' : 'Scenario Mission: Apply the Map in Practice'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Вместо абстрактного теста вы решаете мини-кейс как продуктовый инженер: выбираете архитектуру под реальные ограничения по стоимости, latency и комплаенсу.'
            : 'Instead of an abstract quiz, you solve a mini-case like a product engineer: select architecture under real cost, latency, and compliance constraints.'}
        </p>
        <div className="grid grid-cols-1 gap-3 text-sm">
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Контекст' : 'Context'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Банк, 100k запросов/день, mix простых и сложных кейсов.' : 'Bank assistant, 100k requests/day, mix of simple and complex cases.'}</p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Ограничения' : 'Constraints'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'PII внутри VPC, P95 latency <= 2.5s, бюджет <= $0.02/query.' : 'PII stays in VPC, P95 latency <= 2.5s, budget <= $0.02/query.'}</p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Критерий успеха' : 'Success criterion'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Рациональный routing: качество там, где нужно, и контроль там, где критичны риски.' : 'Rational routing: quality where needed and control where risk is critical.'}</p>
          </div>
        </div>
      </div>

      {/* 10. Major builders map */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Кто формирует рынок в 2026' : 'Who Shapes the Market in 2026'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? 'Согласно вашему документу, рынок больше не выглядит как гонка "одного лучшего LLM". Это портфель из разных классов моделей и провайдеров: frontier для сложных задач, efficient для массового трафика и open-weight для контроля/суверенитета.'
            : 'Based on your document, the market is no longer a race for one best LLM. It is a portfolio of model classes and providers: frontier for hard tasks, efficient models for high-volume traffic, and open-weight for control/sovereignty.'}
        </p>

        <div className="grid grid-cols-1 gap-4 text-sm">
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">OpenAI</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Сильная сквозная позиция: фронтир-модели + reasoning + API для инструментальных и агентных сценариев.'
                : 'Strong full-stack positioning: frontier + reasoning + APIs for tool/agent workflows.'}
            </p>
            <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Каталог моделей' : 'Models Catalog'}</a>
          </div>

          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">Anthropic</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Фокус на hybrid reasoning и прозрачности через system cards.'
                : 'Focus on hybrid reasoning and transparency via system cards.'}
            </p>
            <a href="https://www.anthropic.com/system-cards" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Системные карточки' : 'System Cards'}</a>
          </div>

          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">Google (Gemini/Gemma)</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Широкая линейка: модели высокой мощности, Flash/Flash-Lite, длинный контекст, Live voice/video и открытая линия Gemma.'
                : 'Wide lineup: high-capability, Flash/Flash-Lite, long-context, Live voice/video, and the open Gemma family.'}
            </p>
            <a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Модели Gemini' : 'Gemini Models'}</a>
          </div>

          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">Meta (Llama)</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Центр open-weight экосистемы: массовое распространение весов + мультимодальные модели.'
                : 'Core open-weight ecosystem: broad weight distribution plus multimodal model lines.'}
            </p>
            <a href="https://ai.meta.com/blog/llama-4-multimodal-intelligence/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Обзор Llama 4' : 'Llama 4 Overview'}</a>
          </div>

          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">DeepSeek / Mistral / Qwen</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Ключевые драйверы волны open-weight и цена/качество, включая MoE и reasoning-ориентированные линии.'
                : 'Key drivers of the open-weight and cost/performance wave, including MoE and reasoning-focused lines.'}
            </p>
            <a href="https://api-docs.deepseek.com/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Документация DeepSeek' : 'DeepSeek Docs'}</a>
          </div>

          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <h4 className="font-semibold text-neutral-100 mb-2">Microsoft / Cohere / xAI</h4>
            <p className="text-neutral-400 mb-2">
              {lang === 'ru'
                ? 'Разные стратегии: эффективные малые модели (Phi), enterprise RAG (Command R), agentic API с оплатой инструментов (Grok).'
                : 'Different strategies: efficient SLMs (Phi), enterprise RAG (Command R), and tool-priced agentic APIs (Grok).'}
            </p>
            <a href="https://docs.x.ai/developers/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Модели xAI' : 'xAI Models'}</a>
          </div>
        </div>
      </div>

      {/* 11. LLM infrastructure stack */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'LLM как инфраструктурный стек' : 'LLMs as an Infrastructure Stack'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-5">
          {lang === 'ru'
            ? 'Один чат-интерфейс сверху скрывает несколько слоёв. Ошибка в любом слое (роутинг, API-лимиты, GPU-дефицит, комплаенс) сразу влияет на продукт.'
            : 'A chat UI hides multiple layers underneath. A failure in any layer (routing, API limits, GPU constraints, compliance) impacts product quality directly.'}
        </p>

        <div className="space-y-3 text-sm">
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">1. {lang === 'ru' ? 'Уровень приложений' : 'Applications layer'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Копилоты, ассистенты, внутренние AI-инструменты команды.' : 'Copilots, assistants, and internal AI tools.'}</p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">2. {lang === 'ru' ? 'Уровень оркестрации' : 'Orchestration layer'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'RAG, tool-calling, guardrails, eval-gates, fallback routing.' : 'RAG, tool-calling, guardrails, eval-gates, and fallback routing.'}</p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">3. {lang === 'ru' ? 'Уровень API-моделей' : 'Model API layer'}</p>
            <p className="text-neutral-400">
              {lang === 'ru'
                ? 'Обычно это каталоги и managed endpoints (например, AWS Bedrock), где рядом доступны разные семейства моделей.'
                : 'Usually this is model catalogs and managed endpoints (for example AWS Bedrock) where multiple model families are available side by side.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">4. {lang === 'ru' ? 'Уровень весов' : 'Weights layer'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Open-weight ветка для self-hosting, distillation и доменной кастомизации.' : 'Open-weight branch for self-hosting, distillation, and domain customization.'}</p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">5. {lang === 'ru' ? 'Уровень вычислений и дата-центров' : 'Compute + datacenter layer'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'GPU/энергия/сеть задают реальные пределы latency и стоимости.' : 'GPU, power, and interconnect determine real latency and cost limits.'}</p>
          </div>
        </div>
      </div>

      {/* 12. Snapshot 2026 + links */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Снимок рынка 2026 + ссылки на источники' : '2026 Market Snapshot + Source Links'}
        </h2>
        <p className="text-neutral-400 text-sm mb-3">
          {lang === 'ru'
            ? 'Обновлено по вашему документу (состояние на 7 марта 2026): позиции игроков и тренды быстро меняются. Поэтому этот блок стоит читать как операционный срез, а не как вечный рейтинг. Цель здесь — быстро увидеть, где у каждого игрока сильная сторона именно сейчас: reasoning, long-context, мультимодальность, open-weight экосистема, стоимость и управляемость API.'
            : 'Updated from your document (as of March 7, 2026): vendor positioning and trends change quickly. Treat this section as an operational snapshot, not a permanent ranking. The goal is to quickly map where each vendor is strongest right now: reasoning, long-context, multimodality, open-weight ecosystem, cost profile, and API controllability.'}
        </p>
        <p className="text-neutral-400 text-sm mb-3">
          {lang === 'ru' ? (
            <>
              {'Важно сравнивать не только «качество ответа в вакууме», но и инженерные параметры: предсказуемость latency, поведение при tool-calling, прозрачность safety-политик, зрелость '}
              <Term id="sdk">SDK</Term>
              {', ограничения по лицензии и требования к резидентности данных. На практике именно эти факторы чаще всего определяют, можно ли модель стабильно внедрить в продукт и поддерживать в продакшене.'}
            </>
          ) : (
            <>
              {'It is important to compare not only output quality in isolation, but also engineering constraints: latency predictability, tool-calling behavior, safety-policy transparency, '}
              <Term id="sdk">SDK</Term>
              {' maturity, license limits, and data-residency requirements. In real deployments, these factors often decide whether a model can be integrated reliably and maintained in production.'}
            </>
          )}
        </p>
        <p className="text-neutral-400 text-sm mb-5">
          {lang === 'ru'
            ? 'Ниже — компактные профили ключевых игроков. Используйте их как стартовую карту для шорт-листа: сначала выбирайте 2–3 кандидата под ваш use case, затем подтверждайте выбор через eval-наборы, нагрузочные тесты и пилот на реальных пользовательских сценариях.'
            : 'Below are compact profiles of key players. Use them as a starting map for shortlisting: pick 2-3 candidates for your use case, then validate with eval sets, load tests, and a pilot on real user scenarios.'}
        </p>
        <div className="grid grid-cols-1 gap-4 mb-5">
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">ChatGPT (OpenAI)</h4>
            <p className="text-neutral-500 mb-2">{lang === 'ru' ? 'GPT-6 (Astra, Sol, Luna) + Responses API' : 'GPT-6 (Astra, Sol, Luna) + Responses API'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Сильный универсал с акцентом на reasoning-модели и tool/agent workflows.' : 'Strong generalist with a focus on reasoning models and tool/agent workflows.'}</p>
          </div>
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">Claude (Anthropic)</h4>
            <p className="text-neutral-500 mb-2">{lang === 'ru' ? 'Claude 5.x (Fable, Opus, Sonnet, Haiku), адаптивное рассуждение' : 'Claude 5.x (Fable, Opus, Sonnet, Haiku), adaptive thinking'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Стабильное качество текста/кода и прозрачность через system cards.' : 'Strong writing/coding consistency with transparent system cards.'}</p>
          </div>
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">Gemini (Google)</h4>
            <p className="text-neutral-500 mb-2">Gemini 3.x (Pro, Flash, Flash-Lite) + Live</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Сильный long-context, multimodal и real-time voice/video API.' : 'Strong in long-context, multimodal, and real-time voice/video APIs.'}</p>
          </div>
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">Meta / Llama</h4>
            <p className="text-neutral-500 mb-2">{lang === 'ru' ? 'Llama 4: open-weight + multimodal' : 'Llama 4: open-weight + multimodal'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Ключевой open-weight игрок; важно читать условия лицензии для enterprise-использования.' : 'Major open-weight ecosystem; licensing terms matter for enterprise usage.'}</p>
          </div>
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">DeepSeek</h4>
            <p className="text-neutral-500 mb-2">{lang === 'ru' ? 'V4 (Pro, Flash): MoE, рассуждение по умолчанию' : 'V4 (Pro, Flash): MoE, reasoning on by default'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Усилил open-weight reasoning-тренд и предлагает OpenAI-совместимый API-формат.' : 'A key open-weight reasoning player with OpenAI-compatible API formatting.'}</p>
          </div>
          <div className="bg-card border border-border-card rounded-lg p-4">
            <h4 className="font-bold text-neutral-200 mb-1">Mistral / Qwen</h4>
            <p className="text-neutral-500 mb-2">{lang === 'ru' ? 'Суверенитет + широкий модельный каталог' : 'Sovereignty + broad model catalogs'}</p>
            <p className="text-neutral-400">{lang === 'ru' ? 'Сильные альтернативы для EU/Asia сценариев, где важны стоимость, контроль и резидентность данных.' : 'Strong alternatives for EU/Asia scenarios where cost, control, and data residency are key.'}</p>
          </div>
        </div>

        <div className="bg-accent-500/5 border border-accent-500/20 rounded-xl p-5">
          <h4 className="font-bold text-heading uppercase mb-3">{lang === 'ru' ? 'Рыночный паттерн 2026' : '2026 Market Pattern'}</h4>
          <div className="grid grid-cols-1 gap-y-2 text-neutral-300 text-sm">
            <div><span className="text-neutral-500">{lang === 'ru' ? 'Лучший универсал:' : 'Best Generalist:'}</span> OpenAI</div>
            <div><span className="text-neutral-500">{lang === 'ru' ? 'Длинные тексты:' : 'Long-form writing:'}</span> Claude</div>
            <div><span className="text-neutral-500">{lang === 'ru' ? 'Мультимодальность:' : 'Multimodal:'}</span> Gemini</div>
            <div><span className="text-neutral-500">{lang === 'ru' ? 'Цена/качество:' : 'Cost/Performance:'}</span> DeepSeek</div>
            <div className="col-span-2 mt-2 pt-2 border-t border-accent-500/10"><span className="text-neutral-500">{lang === 'ru' ? 'Европа + On-prem:' : 'EU + On-prem:'}</span> Mistral</div>
          </div>
        </div>

        <div className="mt-5 bg-input border border-border-subtle rounded-xl p-5">
          <h4 className="font-bold text-neutral-200 mb-3">
            {lang === 'ru' ? 'Основные ссылки из документа' : 'Primary links from the document'}
          </h4>
          <div className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm">
            <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Модели OpenAI' : 'OpenAI Models'}</a>
            <a href="https://developers.openai.com/api/docs/guides/reasoning/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Гайд OpenAI по reasoning' : 'OpenAI Reasoning Guide'}</a>
            <a href="https://www.anthropic.com/system-cards" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Системные карточки Anthropic' : 'Anthropic System Cards'}</a>
            <a href="https://ai.google.dev/gemini-api/docs/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Модели Gemini API' : 'Gemini API Models'}</a>
            <a href="https://ai.google.dev/gemini-api/docs/long-context" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Long-context в Gemini' : 'Gemini Long Context'}</a>
            <a href="https://ai.meta.com/blog/llama-4-multimodal-intelligence/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Llama 4 от Meta' : 'Meta Llama 4'}</a>
            <a href="https://api-docs.deepseek.com/" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'API-документация DeepSeek' : 'DeepSeek API Docs'}</a>
            <a href="https://docs.mistral.ai/getting-started/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Документация моделей Mistral' : 'Mistral Models Docs'}</a>
            <a href="https://www.alibabacloud.com/help/en/model-studio/models" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Модели Alibaba Model Studio' : 'Alibaba Model Studio Models'}</a>
            <a href="https://opensource.org/ai/open-source-ai-definition" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">{lang === 'ru' ? 'Определение Open Source AI (OSI)' : 'OSI Open Source AI Definition'}</a>
          </div>
        </div>
      </div>

      {/* 13. Structural trends */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Структурные тренды 2026' : 'Structural Trends in 2026'}
        </h2>
        <div className="space-y-4 text-sm">
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'MoE стал нормой' : 'MoE is mainstream'}</p>
            <p className="text-neutral-400">
              {lang === 'ru'
                ? 'Модели растут по общей ёмкости, но активируют только часть параметров на токен. Это улучшает соотношение качество/стоимость для инференса.'
                : 'Models scale total capacity while activating only a subset of parameters per token. This improves quality/cost for inference.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Reasoning = отдельный продуктовый класс' : 'Reasoning is a separate product class'}</p>
            <p className="text-neutral-400">
              {lang === 'ru'
                ? 'Появилось явное разделение между быстрыми чат-моделями и моделями для “глубокого мышления”, с другой экономикой latency и токенов.'
                : 'There is now a clear split between fast chat models and deep-thinking models, with different latency and token economics.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Multimodal и long-context стали базовым ожиданием' : 'Multimodal and long-context became baseline expectations'}</p>
            <p className="text-neutral-400">
              {lang === 'ru'
                ? 'Для enterprise-сценариев уже недостаточно “просто текста”: нужны документы, изображения, аудио и длинные контексты в одном пайплайне.'
                : 'For enterprise workflows, text-only is no longer enough: teams expect documents, images, audio, and long context in one pipeline.'}
            </p>
          </div>
          <div className="bg-card border border-border-subtle rounded-lg p-4">
            <p className="text-neutral-200 font-semibold mb-1">{lang === 'ru' ? 'Цена теперь = токены + инструменты' : 'Pricing now = tokens + tools'}</p>
            <p className="text-neutral-400">
              {lang === 'ru'
                ? 'В agentic продуктах нужно считать не только токены, но и внешние tool-calls (поиск, код-исполнение, retrieval).'
                : 'In agentic products, you must budget not only tokens, but also external tool calls (search, code execution, retrieval).'}
            </p>
          </div>
        </div>
      </div>

      {/* 14. Summary */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {lang === 'ru' ? 'Итог: 5 правил выбора модели' : 'Summary: 5 Rules for Model Selection'}
        </h2>
        <ul className="space-y-2 text-neutral-300 text-sm">
          <li>1. {lang === 'ru' ? 'Сначала workload и критерии успеха, потом бренд.' : 'Start from workload and success criteria, then pick the brand.'}</li>
          <li>2. {lang === 'ru' ? 'Оценивайте не только качество, но и cost/query, latency и надежность.' : 'Evaluate not only quality, but also cost/query, latency, and reliability.'}</li>
          <li>3. {lang === 'ru' ? 'Разделяйте "быстрый старт" (API) и "стратегический контроль" (open-weight).' : 'Separate "fast launch" (API) from "strategic control" (open-weight).'}</li>
          <li>4. {lang === 'ru' ? 'Учитывайте комплаенс, data residency и vendor lock-in заранее.' : 'Account for compliance, data residency, and vendor lock-in early.'}</li>
          <li>5. {lang === 'ru' ? 'Регулярно обновляйте карту рынка: лидерство в классах задач быстро меняется.' : 'Refresh your market map frequently: leadership by workload class changes quickly.'}</li>
        </ul>
      </div>
    </>
  );
}
