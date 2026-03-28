"use client";

import React from 'react';
import Term from '@/components/Term';

export default function PostChatgptHistoryTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">
            {lang === 'ru' ? 'Эпоха после ChatGPT: Гонка вооружений' : 'The Post-ChatGPT Era: An Arms Race'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Релиз ChatGPT в ноябре 2022 года стал водоразделом. Если до этого момента AI развивался поступательно в тишине корпоративных лабораторий, то после — началась технологическая гонка, какой мир не видел со времен Холодной войны и космической программы.'
                : 'The release of ChatGPT in November 2022 was a watershed moment. While AI had previously developed steadily in the quiet of corporate labs, what followed was a technological race the likes of which the world hadn\'t seen since the Cold War and the Space Race.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? <>В считанные месяцы гиганты индустрии (Google, Meta, Microsoft) объявили &quot;<Term id="code-red" lang={lang}>Красный код</Term>&quot; (Code Red), перестроив все свои стратегии вокруг генеративного ИИ. То, что мы наблюдаем с 2023 года по сегодняшний день, - это стремительная эволюция от простых чат-ботов к мыслящим системам и автономным агентам.</>
                : <>In a matter of months, industry giants (Google, Meta, Microsoft) declared a &quot;<Term id="code-red" lang={lang}>Code Red</Term>,&quot; completely realigning their strategies around generative AI. What we have witnessed from 2023 to the present day is a rapid evolution from simple chatbots to reasoning systems and autonomous agents.</>}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: Closed vs Open Source */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            {lang === 'ru' ? 'Глава 1: Модели по доступу — API и открытые веса' : 'Chapter 1: Access Models - API and Open Weights'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'В первой половине 2023 года рынок в основном строился вокруг закрытых API-моделей. GPT-4 и Claude задавали уровень качества, а доступ к ним оставался централизованным через облачные интерфейсы провайдеров. Такой формат давал поставщикам контроль над безопасностью, политиками использования и скоростью обновлений.'
                : 'In early 2023, the market was largely organized around closed API models. GPT-4 and Claude set the quality bar, while access remained centralized through provider-hosted endpoints. This model gave vendors strong control over safety policy, usage constraints, and release cadence.'}
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-card border border-border-card rounded-xl p-6">
                <h4 className="font-bold text-neutral-200 mb-3 text-lg">
                  {lang === 'ru' ? 'Закрытые модели (Frontier APIs)' : 'Closed Models (Frontier APIs)'}
                </h4>
                <ul className="text-neutral-400 space-y-2 list-disc list-inside">
                  <li>{lang === 'ru' ? 'Крупные бюджеты на обучение и инфраструктуру.' : 'Large training and infrastructure budgets.'}</li>
                  <li>{lang === 'ru' ? 'Сильные показатели на сложных бенчмарках в момент релиза.' : 'Strong benchmark performance at release time.'}</li>
                  <li>{lang === 'ru' ? 'Централизованное управление модерацией, безопасностью и ценовой политикой.' : 'Centralized control over moderation, safety, and pricing policy.'}</li>
                </ul>
              </div>
              <div className="bg-card border border-border-card rounded-xl p-6">
                <h4 className="font-bold text-neutral-200 mb-3 text-lg">
                  {lang === 'ru' ? 'Открытые веса (Open-Weight)' : 'Open-Weight Models'}
                </h4>
                <ul className="text-neutral-400 space-y-2 list-disc list-inside">
                  <li>{lang === 'ru' ? 'Публикация весов LLaMA ускорила внешний R&D-цикл.' : 'LLaMA weight releases accelerated external R&D cycles.'}</li>
                  <li>{lang === 'ru' ? 'Новые команды (например, Mistral) быстро сократили разрыв по качеству.' : 'New teams (for example, Mistral) reduced quality gaps quickly.'}</li>
                  <li>{lang === 'ru' ? 'Появились сценарии локального запуска: приватность, кастомизация, офлайн-контуры.' : 'Local deployment paths expanded: privacy, customization, and offline workflows.'}</li>
                </ul>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Записка Google "We Have No Moat" зафиксировала ключевой вывод периода: открытая экосистема итеративно улучшается быстрее за счет распределенного сообщества, поэтому конкурентная динамика сместилась от статуса "лидер на релизе" к скорости инженерного цикла и интеграции в продукты.'
                : 'The Google memo "We Have No Moat" captured the core takeaway: open ecosystems improved through distributed iteration, shifting competition from one-time model leadership toward execution speed, product integration, and operational reliability.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Shift to Reasoning */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-amber-400">
            {lang === 'ru' ? 'Глава 2: Сдвиг к рассуждениям (Reasoning Models)' : 'Chapter 2: The Shift to Reasoning Models'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'К 2024 году простого "предсказания следующего токена" (Система 1 по Канеману) стало недостаточно. Модели писали красивые тексты, но спотыкались на сложных математических и логических задачах, требующих планирования.'
                : 'By 2024, simple "next-token prediction" (System 1 thinking, per Kahneman) was no longer enough. Models wrote beautiful prose but stumbled on complex math and logic tasks that required planning.'}
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-6">
              <h4 className="text-amber-400 font-bold mb-3">
                {lang === 'ru' ? 'Релиз OpenAI o1 (Проект Strawberry)' : 'The OpenAI o1 Release (Project Strawberry)'}
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                {lang === 'ru'
                  ? 'Новая парадигма: обучение с подкреплением (RL) на этапе вывода (Inference-Time Compute). Вместо того чтобы выпаливать ответ немедленно, модель тратит вычислительное время на создание "Скрытой цепочки рассуждений" (Hidden Chain of Thought). Она думает, пробует разные пути, исправляет свои ошибки и только потом выдает результат. Это "Система 2" (медленное, вдумчивое мышление) для ИИ.'
                  : 'A new paradigm: Reinforcement Learning (RL) during Inference (Inference-Time Compute). Instead of blurting out an answer immediately, the model spends compute time generating a "Hidden Chain of Thought." It thinks, tries different paths, corrects its own errors, and only then provides the output. This is "System 2" (slow, deliberate thinking) for AI.'}
              </p>
              <p className="text-neutral-400 leading-relaxed mt-3 text-sm">
                {lang === 'ru'
                  ? 'Внутри OpenAI этот сдвиг к reasoning-подходу известен как Проект Strawberry: цель — не просто повысить качество ответа, а научить модель планировать ход решения перед финальной формулировкой.'
                  : 'Inside OpenAI, this shift toward reasoning-focused behavior is known as Project Strawberry: the goal is not only better final answers, but also explicit planning before final response formulation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Geopolitics of Compute */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            {lang === 'ru' ? 'Глава 3: Геополитика и DeepSeek' : 'Chapter 3: Geopolitics and DeepSeek'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'ИИ стал вопросом национальной безопасности. США ввели санкции на экспорт передовых чипов NVIDIA в Китай, пытаясь замедлить развитие китайского ИИ. Однако это привело к неожиданному результату.'
                : 'AI became a matter of national security. The US imposed export controls on advanced NVIDIA chips to China, attempting to slow Chinese AI development. However, this led to an unexpected result.'}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-5">
              <h4 className="text-cyan-400 font-bold mb-2">{lang === 'ru' ? 'Эффект DeepSeek' : 'The DeepSeek Effect'}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {lang === 'ru'
                  ? 'Китайские лаборатории (в частности, DeepSeek), столкнувшись с нехваткой "железа", были вынуждены сосредоточиться на радикальной алгоритмической оптимизации. Они разработали архитектуры (MoE - Mixture of Experts), которые достигали качества GPT-4 при многократно меньших затратах на обучение. Это показало, что грубая сила (compute) — не единственный путь к успеху.'
                  : 'Chinese labs (notably DeepSeek), facing a hardware shortage, were forced to focus on radical algorithmic optimization. They developed architectures (like MoE - Mixture of Experts) that achieved GPT-4 level quality at a fraction of the training cost. This proved that brute compute force isn\'t the only path to success.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Итог для инженера' : 'Engineer\'s Summary'}
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Пост-ChatGPT эпоха показала, что "модель как сервис" — это лишь начало. Будущее принадлежит не одиночным моделям, а сложным архитектурам: агентам, которые используют инструменты (API, браузеры), моделям рассуждений (o1), которые планируют шаги, и гибридным системам, объединяющим дешевые открытые модели для рутины и дорогие закрытые — для сложной логики.'
            : 'The post-ChatGPT era proved that "model-as-a-service" is just the beginning. The future belongs not to single models, but to complex architectures: agents that use tools (APIs, browsers), reasoning models (o1) that plan steps, and hybrid systems that combine cheap open models for routine tasks with expensive closed models for complex logic.'}
        </p>
      </section>
    </div>
  );
}
