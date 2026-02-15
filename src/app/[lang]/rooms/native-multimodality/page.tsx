"use client";

import React, { useState, use } from 'react';
import { ChevronRight, Info, HelpCircle, Image as ImageIcon, AudioLines, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';

export default function NativeMultimodalityPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Как обычно представляется изображение для мультимодальной модели?'
        : 'How is an image usually represented for a multimodal model?',
      options: lang === 'ru'
        ? ['Как последовательность vision tokens/patches', 'Как чистый звук', 'Как SQL-таблица']
        : ['As a sequence of vision tokens/patches', 'As raw audio only', 'As an SQL table'],
      answer: lang === 'ru'
        ? 'Как последовательность vision tokens/patches'
        : 'As a sequence of vision tokens/patches',
      hint: lang === 'ru' ? 'Модель превращает картинку в "токены зрения".' : 'The model turns image data into visual token units.',
      completed: false,
    },
    {
      id: 2,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется визуальное представление звука по времени и частоте?'
        : 'What is the visual representation of sound over time and frequency called?',
      answer: lang === 'ru' ? 'Спектрограмма' : 'Spectrogram',
      hint: lang === 'ru' ? 'Часто используется перед аудио-токенизацией.' : 'It is commonly used before audio tokenization.',
      completed: false,
    },
    {
      id: 3,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Какие преимущества дает нативная мультимодальность?'
        : 'What are key advantages of native multimodality?',
      options: lang === 'ru'
        ? ['Единый reasoning по тексту/изображению/аудио', 'Меньше потерь между пайплайнами', 'Автоматически нулевая задержка', 'Лучше grounding на визуальном контексте']
        : ['Unified reasoning across text/image/audio', 'Less loss across stitched pipelines', 'Automatically zero latency', 'Better grounding on visual context'],
      answer: lang === 'ru'
        ? ['Единый reasoning по тексту/изображению/аудио', 'Меньше потерь между пайплайнами', 'Лучше grounding на визуальном контексте']
        : ['Unified reasoning across text/image/audio', 'Less loss across stitched pipelines', 'Better grounding on visual context'],
      hint: lang === 'ru' ? 'Не выбирайте вариант про "нулевую задержку".' : 'Do not pick the "zero latency" option.',
      completed: false,
    },
    {
      id: 4,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что обычно сильнее всего влияет на latency в мультимодальном запросе?'
        : 'What usually impacts latency most in multimodal requests?',
      options: lang === 'ru'
        ? ['Размер входных медиа и длина контекста', 'Цвет интерфейса', 'Название модели']
        : ['Input media size and context length', 'UI color theme', 'Model name'],
      answer: lang === 'ru' ? 'Размер входных медиа и длина контекста' : 'Input media size and context length',
      hint: lang === 'ru' ? 'Больше токенов -> дольше обработка.' : 'More tokens generally means longer processing.',
      completed: false,
    },
    {
      id: 5,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой подход лучше для анализа звонков с последующим саммари?'
        : 'Which approach is best for call analysis with summarization?',
      options: lang === 'ru'
        ? ['ASR + структурированный промпт + quality checks', 'Только случайный creative prompt', 'Игнорировать шум и таймкоды']
        : ['ASR + structured prompt + quality checks', 'Only random creative prompt', 'Ignore noise and timestamps'],
      answer: lang === 'ru' ? 'ASR + структурированный промпт + quality checks' : 'ASR + structured prompt + quality checks',
      hint: lang === 'ru' ? 'Нужен pipeline с контролем качества, а не один шаг.' : 'Use a pipeline with validation, not a single prompt.',
      completed: false,
    },
    {
      id: 6,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется объединение сигналов из разных модальностей в одной модели?'
        : 'What is combining signals from different modalities inside one model called?',
      answer: 'Fusion',
      hint: lang === 'ru' ? 'Короткий термин из ML, начинается на F.' : 'Short ML term starting with F.',
      completed: false,
    },
  ]);

  const markCompleted = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: true } : t));
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-8 h-[calc(100vh-120px)]">
      <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
          <span>{lang === 'ru' ? 'Комнаты' : 'Rooms'}</span>
          <ChevronRight size={14} />
          <span>{lang === 'ru' ? 'Архитектура' : 'Architecture'}</span>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">
            {lang === 'ru' ? 'Нативная мультимодальность' : 'Native Multimodality'}
          </span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === 'ru' ? 'Нативная мультимодальность' : 'Native Multimodality'}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Средний' : 'Intermediate'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 410 {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '1.5 ч' : '1.5h'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Что значит "нативная мультимодальность"' : 'What Native Multimodality Means'}
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Нативная мультимодальность означает, что модель обучена совместно работать с текстом, изображениями и аудио внутри одного reasoning-процесса. Это снижает потери, которые возникают в пайплайнах из нескольких отдельных моделей.'
                : 'Native multimodality means the model is trained to process text, images, and audio inside one reasoning process. It reduces the information loss common in chained multi-model pipelines.'}
            </p>
            <p className="text-xs text-neutral-500 mt-4">
              {lang === 'ru' ? 'Термины:' : 'Terms:'}{' '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Vision tokens: числовые представления фрагментов изображения, с которыми работает модель.' : 'Vision tokens: numerical representations of image fragments used by the model.'}
              >
                vision tokens
              </span>
              {' · '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Спектрограмма: визуальное представление аудио по времени и частоте.' : 'Spectrogram: a visual representation of audio across time and frequency.'}
              >
                spectrogram
              </span>
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <ImageIcon className="text-emerald-500" />
              {lang === 'ru' ? 'Как модель "видит" изображения' : 'How Models "See" Images'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Изображение разбивается на patch-блоки и превращается в vision tokens. Дальше эти токены обрабатываются вместе с текстовыми токенами, что позволяет задавать вопросы по картинке в одном диалоге.'
                : 'An image is split into patch blocks and converted into vision tokens. These tokens are processed with text tokens, enabling question answering over visuals in the same dialogue.'}
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">1. Encode</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Image -> patches' : 'Image -> patches'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">2. Tokenize</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Patches -> vision tokens' : 'Patches -> vision tokens'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">3. Reason</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Текст + визуальный контекст' : 'Text + visual context jointly'}</p></div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <AudioLines className="text-emerald-500" />
              {lang === 'ru' ? 'Как модель "слышит" аудио' : 'How Models "Hear" Audio'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Аудиосигнал обычно переводится в спектрограмму или последовательность аудио-токенов. Модель учится связывать фонемы, интонацию и паузы с текстовым значением.'
                : 'Audio is commonly transformed into spectrograms or audio token sequences. The model learns to map phonemes, prosody, and pauses to textual meaning.'}
            </p>
            <ul className="text-neutral-300 space-y-2">
              <li>{lang === 'ru' ? 'Точность зависит от шума, качества микрофона и акцента.' : 'Accuracy depends on noise, microphone quality, and accent variation.'}</li>
              <li>{lang === 'ru' ? 'Таймкоды и сегментация критичны для длинных звонков.' : 'Timestamps and segmentation are critical for long calls.'}</li>
              <li>{lang === 'ru' ? 'Для прода нужны quality checks на уровне чанков.' : 'Production setups need chunk-level quality checks.'}</li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Layers className="text-emerald-500" />
              {lang === 'ru' ? 'Практический стек мультимодального продукта' : 'Practical Multimodal Product Stack'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Успешные продукты не ограничиваются одной моделью: они комбинируют ingestion, routing, safety, caching и fallback. Это дает управляемую стоимость и стабильный UX.'
                : 'Successful products rarely rely on a single call: they combine ingestion, routing, safety, caching, and fallback layers. This keeps cost predictable and UX stable.'}
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">1. Ingest</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Медиа + метаданные' : 'Media + metadata'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">2. Route</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Выбор модели по задаче' : 'Route by task/profile'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">3. Validate</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Проверка качества и safety' : 'Quality and safety checks'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">4. Fallback</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Резервный путь ответа' : 'Fallback response path'}</p></div>
            </div>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg mb-8">
            <p className="text-sm text-amber-200">
              {lang === 'ru'
                ? 'Важно: мультимодальность усиливает возможности, но и увеличивает стоимость/latency. Сначала измеряйте ценность для UX и только потом масштабируйте.'
                : 'Important: multimodality increases capability, but also cost and latency. Measure UX value first, then scale.'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[400px] flex flex-col gap-6">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-y-auto max-h-[70vh]">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-500" size={20} />
            {lang === 'ru' ? 'Задания комнаты' : 'Room Tasks'}
          </h3>
          <div className="space-y-2">
            {tasks.map((task) => (
              <TaskQuestion
                key={task.id}
                id={task.id}
                question={task.question}
                correctAnswer={task.answer}
                options={task.options}
                hint={task.hint}
                type={task.type}
                onSuccess={markCompleted}
              />
            ))}
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              {lang === 'ru' ? 'Прогресс' : 'Progress'}
            </span>
            <span className="text-sm font-bold text-emerald-500">
              {Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#262626]">
            <motion.div
              className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
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
