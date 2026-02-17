"use client";

import React, { useState, use } from 'react';
import { ChevronRight, Info, BookOpen, HelpCircle, Cpu, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';
import TaskSorting from '@/components/TaskSorting';
import { useProgress } from '@/hooks/useProgress';

export default function LlmMechanicsPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const { completedIds, markCompleted: persistCompleted } = useProgress('llm-mechanics');

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется процесс разбивки текста на фрагменты (подслова)?'
        : 'What is the process of splitting text into fragments (subwords) called?',
      answer: lang === 'ru' ? 'Токенизация' : 'Tokenization',
      hint: lang === 'ru' ? 'Слово связано с "токенами".' : 'The word is related to "tokens".',
      explanation: lang === 'ru' 
        ? 'Верно! Токенизация — это первый шаг, где сырой текст превращается в числа, понятные модели.'
        : 'Correct! Tokenization is the first step where raw text is converted into numbers the model can understand.',
      completed: false,
    },
    {
      id: 2,
      type: 'sorting' as TaskType,
      question: lang === 'ru'
        ? 'Упорядочите шаги цикла генерации токена.'
        : 'Sort the steps of the token generation loop.',
      initialItems: lang === 'ru' 
        ? ['Выбор токена', 'Токенизация ввода', 'Расчет вероятностей', 'Добавление в контекст']
        : ['Select token', 'Tokenize input', 'Compute probabilities', 'Append to context'],
      correctOrder: lang === 'ru'
        ? ['Токенизация ввода', 'Расчет вероятностей', 'Выбор токена', 'Добавление в контекст']
        : ['Tokenize input', 'Compute probabilities', 'Select token', 'Append to context'],
      explanation: lang === 'ru'
        ? 'Правильно! Сначала мы превращаем текст в числа, затем модель предсказывает вероятности, мы выбираем лучший вариант и возвращаем его обратно в модель.'
        : 'Correct! First we turn text into numbers, then the model predicts probabilities, we select the best option, and feed it back into the model.',
      completed: false,
    },
    {
      id: 3,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Выберите модели с контекстным окном >100K токенов.'
        : 'Select models with a context window >100K tokens.',
      options: ['GPT-3.5', 'GPT-4 Turbo', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'],
      answer: ['GPT-4 Turbo', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'],
      hint: lang === 'ru' ? 'GPT-3.5 имеет всего 4K токенов.' : 'GPT-3.5 only has 4K tokens.',
      explanation: lang === 'ru'
        ? 'Правильно. Современные модели соревнуются в размере контекста: от 128K у GPT-4 Turbo до миллионов у Gemini.'
        : 'Correct. Modern models compete in context size: from 128K in GPT-4 Turbo to millions in Gemini.',
      completed: false,
    },
    {
      id: 4,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какая температура лучше всего подходит для генерации стабильного, воспроизводимого кода?'
        : 'Which temperature is best for generating stable, reproducible code?',
      options: lang === 'ru'
        ? ['Temperature = 0', 'Temperature = 0.7', 'Temperature = 1']
        : ['Temperature = 0', 'Temperature = 0.7', 'Temperature = 1'],
      answer: 'Temperature = 0',
      hint: lang === 'ru' ? 'Чем ниже, тем детерминированнее.' : 'The lower, the more deterministic.',
      explanation: lang === 'ru'
        ? 'Верно! При T=0 модель всегда выбирает наиболее вероятный токен, что делает код стабильным и уменьшает ошибки.'
        : 'Correct! At T=0, the model always picks the most probable token, making code stable and reducing errors.',
      completed: false,
    },
  ]);

  const markCompleted = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: true } : t));
    persistCompleted(id);
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-8 h-[calc(100vh-120px)]">
      {/* Content area */}
      <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
          <span>{lang === 'ru' ? 'Комнаты' : 'Rooms'}</span>
          <ChevronRight size={14} />
          <span>{lang === 'ru' ? 'Основы' : 'Foundations'}</span>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">
            {lang === 'ru' ? 'Как мыслят LLM' : 'How LLMs Think'}
          </span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">
          {lang === 'ru' ? 'Как мыслят LLM' : 'How LLMs Think'}
        </h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Новичок' : 'Beginner'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 980 {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '45 мин' : '45m'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Section 1: Tokens & Tokenization */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Токены и токенизация' : 'Tokens & Tokenization'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'LLM не читают текст так, как это делаем мы. Вместо этого они разбивают входной текст на маленькие фрагменты — токены. Токен может быть словом, частью слова или даже одним символом.'
                : 'LLMs don\'t read text the way we do. Instead, they break the input text into small fragments — tokens. A token can be a word, part of a word, or even a single character.'}
            </p>

            {/* Visual tokenization demo */}
            <div className="bg-[#0a0a0a] border border-[#262626] rounded-lg p-4 mb-4">
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">
                {lang === 'ru' ? 'Пример токенизации' : 'Tokenization example'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['How', ' do', ' large', ' language', ' models', ' work', '?'].map((token, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-mono border"
                    style={{
                      backgroundColor: [
                        'rgba(16,185,129,0.15)',
                        'rgba(59,130,246,0.15)',
                        'rgba(245,158,11,0.15)',
                        'rgba(168,85,247,0.15)',
                        'rgba(239,68,68,0.15)',
                        'rgba(20,184,166,0.15)',
                        'rgba(244,114,182,0.15)',
                      ][i],
                      borderColor: [
                        'rgba(16,185,129,0.3)',
                        'rgba(59,130,246,0.3)',
                        'rgba(245,158,11,0.3)',
                        'rgba(168,85,247,0.3)',
                        'rgba(239,68,68,0.3)',
                        'rgba(20,184,166,0.3)',
                        'rgba(244,114,182,0.3)',
                      ][i],
                      color: [
                        '#10b981',
                        '#3b82f6',
                        '#f59e0b',
                        '#a855f7',
                        '#ef4444',
                        '#14b8a6',
                        '#f472b6',
                      ][i],
                    }}
                  >
                    {token}
                  </span>
                ))}
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                → 7 {lang === 'ru' ? 'токенов' : 'tokens'}
              </p>
            </div>

            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Токены определяют всё: стоимость API-запроса (оплата за токены), размер контекстного окна, и даже то, как модель "думает". Чем эффективнее токенизация, тем больше информации помещается в контекст.'
                : 'Tokens determine everything: API cost (you pay per token), context window size, and even how the model "thinks." The more efficient the tokenization, the more information fits in the context.'}
            </p>
          </div>

          {/* Token Inspector lab */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? '🧪 Задание: Token Inspector' : '🧪 Task: Token Inspector'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              <span className="font-medium">{lang === 'ru' ? 'Сценарий:' : 'Scenario:'}</span>{' '}
              {lang === 'ru'
                ? 'Вы аудируете API-расходы AI-стартапа. Команда обрабатывает тикеты поддержки на английском, русском и арабском. Ваша задача — понять, почему русскоязычный и арабоязычный пайплайны обходятся заметно дороже.'
                : 'You are auditing an AI startup&apos;s API costs. They process customer support tickets in English, Russian, and Arabic. Your job is to figure out why the Russian and Arabic pipelines cost so much more.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              <span className="font-medium">{lang === 'ru' ? 'Инструменты:' : 'Tools:'}</span>{' '}
              {lang === 'ru'
                ? 'Используйте OpenAI Tokenizer '
                : 'Go to OpenAI Tokenizer '}
              (<span className="text-emerald-400">https://platform.openai.com/tokenizer</span>)
              {lang === 'ru'
                ? ' или библиотеку '
                : ' or use '}
              <span className="font-mono">tiktoken</span>
              {lang === 'ru' ? ' в Python.' : ' library in Python.'}
            </p>

            <ol className="list-decimal pl-5 space-y-5 text-neutral-300">
              <li>
                <p className="mb-2">
                  {lang === 'ru'
                    ? 'Шаг 1. Вставьте это предложение в токенизатор:'
                    : 'Step 1. Take this sentence and paste it into the tokenizer:'}
                </p>
                <p className="bg-[#0f0f0f] border border-[#282828] rounded-md px-3 py-2 text-sm font-mono mb-2">
                  &quot;The cat sat on the mat.&quot;
                </p>
                <p><span className="font-medium">Q1:</span> {lang === 'ru' ? 'Сколько токенов получается?' : 'How many tokens does it produce?'} <span className="text-neutral-500">___</span></p>
              </li>

              <li>
                <p className="mb-2">
                  {lang === 'ru'
                    ? 'Шаг 2. Теперь вставьте русский эквивалент:'
                    : 'Step 2. Now paste the Russian equivalent:'}
                </p>
                <p className="bg-[#0f0f0f] border border-[#282828] rounded-md px-3 py-2 text-sm font-mono mb-2">
                  &quot;Кошка сидела на коврике.&quot;
                </p>
                <p className="mb-1"><span className="font-medium">Q2:</span> {lang === 'ru' ? 'Сколько токенов?' : 'How many tokens?'} <span className="text-neutral-500">___</span></p>
                <p><span className="font-medium">Q3:</span> {lang === 'ru' ? 'Каково соотношение русских токенов к английским?' : 'What is the ratio of Russian tokens to English tokens?'} <span className="text-neutral-500">___</span></p>
              </li>

              <li>
                <p className="mb-1">
                  {lang === 'ru'
                    ? 'Шаг 3. Вставьте более длинный фрагмент (2-3 предложения) на обоих языках.'
                    : 'Step 3. Now paste a longer passage (2-3 sentences) in both languages.'}
                </p>
                <p><span className="font-medium">Q4:</span> {lang === 'ru' ? 'Соотношение осталось примерно тем же, стало лучше или хуже?' : 'Does the ratio stay roughly the same, get better, or get worse?'} <span className="text-neutral-500">___</span></p>
              </li>

              <li>
                <p className="mb-1">
                  {lang === 'ru'
                    ? 'Шаг 4. Токенизируйте слова "tokenization" и "токенизация".'
                    : 'Step 4. Try tokenizing the word "tokenization" and then "токенизация".'}
                </p>
                <p><span className="font-medium">Q5:</span> {lang === 'ru' ? 'Сколько токенов у каждого? English:' : 'How many tokens for each? English:'} <span className="text-neutral-500">___</span> {lang === 'ru' ? 'Russian:' : 'Russian:'} <span className="text-neutral-500">___</span></p>
              </li>

              <li>
                <p className="mb-1">
                  {lang === 'ru'
                    ? 'Шаг 5 (Boss level). Стартап обрабатывает 10 000 тикетов в день, в среднем по 200 слов. API стоит $0.01 за 1K токенов.'
                    : 'Step 5 (Boss level). Your startup processes 10,000 tickets/day, average 200 words each. The API costs $0.01 per 1K tokens.'}
                </p>
                <p><span className="font-medium">Q6:</span> {lang === 'ru' ? 'Оцените дневную разницу в стоимости между английским и русским пайплайнами. Покажите расчеты.' : 'Estimate the daily cost difference between the English and Russian pipelines. Show your math.'} <span className="text-neutral-500">___</span></p>
              </li>
            </ol>

            <div className="mt-6 border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-emerald-200">
                💡 <span className="font-medium">{lang === 'ru' ? 'Ключевой вывод:' : 'Key takeaway:'}</span>{' '}
                {lang === 'ru'
                  ? 'Напишите одно предложение, почему эффективность токенизации важна для мультиязычных AI-систем.'
                  : 'Write one sentence explaining why tokenization efficiency matters for multilingual AI systems.'}
              </p>
            </div>

            <div className="mt-6 bg-[#0f0f0f] border border-[#282828] rounded-lg p-4">
              <h3 className="text-base font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Advanced Task: Terminal + Python' : 'Advanced Task: Terminal + Python'}
              </h3>
              <p className="text-sm text-neutral-400 mb-3">
                {lang === 'ru'
                  ? 'Сделайте воспроизводимый мини-аудит в терминале: установите tiktoken, запустите скрипт и сравните токены для EN/RU/AR.'
                  : 'Run a reproducible mini audit in terminal: install tiktoken, execute a script, and compare EN/RU/AR token counts.'}
              </p>
              <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? '1) В терминале:' : '1) In terminal:'}</p>
              <pre className="text-xs bg-black/40 border border-[#282828] rounded-md p-3 overflow-x-auto text-neutral-300 mb-3">
{`python -m venv .venv
source .venv/bin/activate
pip install tiktoken`}
              </pre>
              <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? '2) Создайте файл token_audit.py:' : '2) Create token_audit.py:'}</p>
              <pre className="text-xs bg-black/40 border border-[#282828] rounded-md p-3 overflow-x-auto text-neutral-300 mb-3">
{`import tiktoken

enc = tiktoken.get_encoding("cl100k_base")
texts = {
    "en": "The cat sat on the mat.",
    "ru": "Кошка сидела на коврике.",
    "ar": "جلست القطة على السجادة."
}

for lang, text in texts.items():
    print(lang, len(enc.encode(text)), enc.encode(text))`}
              </pre>
              <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? '3) Запустите:' : '3) Run:'}</p>
              <pre className="text-xs bg-black/40 border border-[#282828] rounded-md p-3 overflow-x-auto text-neutral-300 mb-3">
{`python token_audit.py`}
              </pre>
              <p className="text-sm text-neutral-300">
                <span className="font-medium">Q7:</span> {lang === 'ru' ? 'Скопируйте вывод и посчитайте EN->RU и EN->AR ratios.' : 'Copy the output and compute EN->RU and EN->AR ratios.'}
              </p>
              <p className="text-sm text-neutral-300">
                <span className="font-medium">Q8:</span> {lang === 'ru' ? 'Измените тексты на 10 реальных тикетов и посчитайте среднюю разницу по токенам.' : 'Replace with 10 real tickets and compute average token delta.'}
              </p>
              <p className="text-sm text-neutral-300">
                <span className="font-medium">Q9:</span> {lang === 'ru' ? 'Предложите 2 меры снижения cost (с конкретными оценками).' : 'Propose 2 concrete cost-reduction actions with estimates.'}
              </p>
            </div>
          </div>

          {/* Section 2: Next-Token Prediction */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Cpu className="text-emerald-500" />
              {lang === 'ru' ? 'Предсказание следующего токена' : 'Next-Token Prediction'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Весь "интеллект" LLM сводится к одной задаче: предсказать следующий токен. Модель делает это снова и снова, пока не сгенерирует полный ответ.'
                : 'The entire "intelligence" of an LLM boils down to one task: predict the next token. The model does this over and over until it generates a complete response.'}
            </p>
            <p className="text-xs text-neutral-500 mb-5">
              {lang === 'ru' ? 'Термины:' : 'Terms:'}{' '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Next-token prediction: механизм, где модель выбирает наиболее вероятный следующий токен на каждом шаге.' : 'Next-token prediction: the mechanism where the model selects the most probable next token at each step.'}
              >
                next-token prediction
              </span>
              {' · '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Hallucination: уверенный, но фактически неверный ответ модели.' : 'Hallucination: a confident but factually incorrect model output.'}
              >
                hallucination
              </span>
            </p>

            {/* 3-step flow */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="text-emerald-400 font-bold mb-1 text-sm uppercase">
                  {lang === 'ru' ? 'Токенизация' : 'Tokenize'}
                </h4>
                <p className="text-xs text-neutral-400">
                  {lang === 'ru'
                    ? 'Входной текст разбивается на токены'
                    : 'Input text is split into tokens'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="text-emerald-400 font-bold mb-1 text-sm uppercase">
                  {lang === 'ru' ? 'Предсказание' : 'Predict'}
                </h4>
                <p className="text-xs text-neutral-400">
                  {lang === 'ru'
                    ? 'Модель вычисляет вероятности для следующего токена'
                    : 'The model computes probabilities for the next token'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="text-emerald-400 font-bold mb-1 text-sm uppercase">
                  {lang === 'ru' ? 'Добавить и повторить' : 'Append & Repeat'}
                </h4>
                <p className="text-xs text-neutral-400">
                  {lang === 'ru'
                    ? 'Выбранный токен добавляется, цикл начинается заново'
                    : 'The chosen token is appended, the cycle starts again'}
                </p>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-amber-200">
                {lang === 'ru'
                  ? '⚠️ Важно: LLM НЕ планирует предложение заранее. Каждое решение — локальное: "какой токен наиболее вероятен прямо сейчас?" Это объясняет многие ошибки и галлюцинации.'
                  : '⚠️ Important: LLMs do NOT plan a sentence in advance. Every decision is local: "which token is most likely right now?" This explains many errors and hallucinations.'}
              </p>
            </div>
          </div>

          {/* Section 3: Context Window */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BookOpen className="text-emerald-500" />
              {lang === 'ru' ? 'Контекстное окно' : 'Context Window'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Контекстное окно — это "рабочая память" модели: максимальное количество токенов, которое она может обработать за один раз. Представьте блокнот с ограниченным числом страниц: если текст не помещается, старая информация "выпадает".'
                : 'The context window is the model\'s "working memory": the maximum number of tokens it can process at once. Think of a notepad with limited pages — if the text doesn\'t fit, old information "falls off."'}
            </p>

            {/* 2x2 grid of model stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-300 mb-1">GPT-3.5</h4>
                <p className="text-2xl font-bold text-red-400">4K</p>
                <p className="text-xs text-neutral-500">{lang === 'ru' ? 'токенов' : 'tokens'}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-300 mb-1">GPT-4 Turbo</h4>
                <p className="text-2xl font-bold text-blue-400">128K</p>
                <p className="text-xs text-neutral-500">{lang === 'ru' ? 'токенов' : 'tokens'}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-300 mb-1">Claude 3.5</h4>
                <p className="text-2xl font-bold text-purple-400">200K</p>
                <p className="text-xs text-neutral-500">{lang === 'ru' ? 'токенов' : 'tokens'}</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-300 mb-1">Gemini 1.5 Pro</h4>
                <p className="text-2xl font-bold text-emerald-400">1M</p>
                <p className="text-xs text-neutral-500">{lang === 'ru' ? 'токенов' : 'tokens'}</p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Эволюция контекстных окон — одна из главных тенденций 2024–2025 годов. Большие окна позволяют загружать целые книги, кодовые базы или длинные разговоры.'
                : 'The evolution of context windows is one of the key trends of 2024–2025. Larger windows allow loading entire books, codebases, or long conversations.'}
            </p>
          </div>

          {/* Section 4: Temperature & Randomness */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Thermometer className="text-emerald-500" />
              {lang === 'ru' ? 'Температура и случайность' : 'Temperature & Randomness'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Температура контролирует, насколько "творческой" или "строгой" будет модель при выборе следующего токена. Это один из самых важных параметров при работе с LLM.'
                : 'Temperature controls how "creative" or "strict" the model will be when choosing the next token. It\'s one of the most important parameters when working with LLMs.'}
            </p>

            {/* Side-by-side comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Temperature = 0</h4>
                <p className="text-sm text-neutral-400 mb-2">
                  {lang === 'ru'
                    ? 'Модель ВСЕГДА выбирает самый вероятный токен. Результат детерминирован и воспроизводим.'
                    : 'The model ALWAYS picks the most probable token. Output is deterministic and reproducible.'}
                </p>
                <p className="text-xs text-blue-300 italic">
                  {lang === 'ru' ? '→ Идеально для: кода, фактов, математики' : '→ Ideal for: code, facts, math'}
                </p>
              </div>
              <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-lg">
                <h4 className="font-bold text-orange-400 mb-2">Temperature = 1</h4>
                <p className="text-sm text-neutral-400 mb-2">
                  {lang === 'ru'
                    ? 'Модель выбирает токены более случайно, позволяя редким вариантам "всплывать". Результат каждый раз разный.'
                    : 'The model picks tokens more randomly, letting rare options "surface." Output differs each time.'}
                </p>
                <p className="text-xs text-orange-300 italic">
                  {lang === 'ru' ? '→ Идеально для: креатива, историй, брейнсторма' : '→ Ideal for: creativity, stories, brainstorming'}
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 mb-6">
              <h4 className="text-sm font-bold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Практика' : 'Practice'}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'ru'
                  ? 'Открой playground любой модели (ChatGPT, Claude, или локальную через Ollama). Задай один и тот же промпт с temperature=0 и temperature=1. Зафиксируй разницу.'
                  : 'Open a playground for any model (ChatGPT, Claude, or a local one via Ollama). Run the same prompt with temperature=0 and temperature=1. Record the difference.'}
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-red-200">
                {lang === 'ru'
                  ? '🔥 Галлюцинации: Высокая температура увеличивает вероятность "галлюцинаций" — когда модель уверенно генерирует неверную информацию. При высокой температуре редкие (и часто ошибочные) токены получают больше шансов быть выбранными.'
                  : '🔥 Hallucinations: High temperature increases the chance of "hallucinations" — when the model confidently generates incorrect information. At high temperature, rare (and often wrong) tokens get a greater chance of being selected.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Task sidebar */}
      <div className="w-[400px] flex flex-col gap-6">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-y-auto max-h-[70vh]">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-500" size={20} />
            {lang === 'ru' ? 'Задания комнаты' : 'Room Tasks'}
          </h3>
          <div className="space-y-2">
            {tasks.map((task) => (
              task.type === 'sorting' ? (
                <TaskSorting
                  key={task.id}
                  id={task.id}
                  question={task.question}
                  initialItems={task.initialItems!}
                  correctOrder={task.correctOrder!}
                  explanation={task.explanation}
                  onSuccess={markCompleted}
                  initialCompleted={completedIds.has(task.id)}
                />
              ) : (
                <TaskQuestion
                  key={task.id}
                  id={task.id}
                  question={task.question}
                  correctAnswer={(task as any).answer}
                  options={(task as any).options}
                  hint={task.hint}
                  explanation={task.explanation}
                  type={task.type}
                  onSuccess={markCompleted}
                  initialCompleted={completedIds.has(task.id)}
                />
              )
            ))}
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              {lang === 'ru' ? 'Прогресс' : 'Progress'}
            </span>
            <span className="text-sm font-bold text-emerald-500">
              {Math.round((Math.max(tasks.filter(t => t.completed).length, completedIds.size) / tasks.length) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#262626]">
            <motion.div
              className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.max(tasks.filter(t => t.completed).length, completedIds.size) / tasks.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Users({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Clock({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
