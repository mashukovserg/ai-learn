"use client";

import React, { useState, use } from 'react';
import { ChevronRight, Info, BookOpen, HelpCircle, Wand2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';

export default function PromptingPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой блок в промпте чаще всего задает поведение модели (тон и правила)?'
        : 'Which prompt block most often sets model behavior (tone and rules)?',
      options: lang === 'ru'
        ? ['System prompt', 'User message', 'Temperature']
        : ['System prompt', 'User message', 'Temperature'],
      answer: 'System prompt',
      hint: lang === 'ru' ? 'Это верхнеуровневая инструкция для всей сессии.' : 'It is the highest-level instruction for a session.',
      completed: false,
    },
    {
      id: 2,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Что делает промпт более надежным в продакшене?'
        : 'What makes a prompt more reliable in production?',
      options: lang === 'ru'
        ? ['Явный формат ответа', 'Четкие ограничения', 'Примеры few-shot', 'Случайные эмодзи']
        : ['Explicit output format', 'Clear constraints', 'Few-shot examples', 'Random emojis'],
      answer: lang === 'ru'
        ? ['Явный формат ответа', 'Четкие ограничения', 'Примеры few-shot']
        : ['Explicit output format', 'Clear constraints', 'Few-shot examples'],
      hint: lang === 'ru' ? 'Выбирайте все, что снижает неоднозначность.' : 'Pick everything that reduces ambiguity.',
      completed: false,
    },
    {
      id: 3,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется техника с несколькими примерами "вопрос -> ответ" в промпте?'
        : 'What is the technique called when you include several "input -> output" examples in the prompt?',
      answer: 'Few-shot prompting',
      hint: lang === 'ru' ? 'Название начинается с "Few-".' : 'It starts with "Few-".',
      completed: false,
    },
    {
      id: 4,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что лучше просить у модели, если нужна проверяемость фактов?'
        : 'What should you ask for when factual verifiability is required?',
      options: lang === 'ru'
        ? ['Ссылки/источники и степень уверенности', 'Больше креативности', 'Максимальную температуру']
        : ['Sources/citations and confidence level', 'More creativity', 'Maximum temperature'],
      answer: lang === 'ru' ? 'Ссылки/источники и степень уверенности' : 'Sources/citations and confidence level',
      hint: lang === 'ru' ? 'Нужна трассируемость, а не "красивый текст".' : 'You need traceability, not stylistic variety.',
      completed: false,
    },
    {
      id: 5,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой подход лучше для снижения галлюцинаций в RAG-сценарии?'
        : 'Which approach is best for reducing hallucinations in a RAG setup?',
      options: lang === 'ru'
        ? ['Ограничить ответ только предоставленным контекстом', 'Убрать ограничения полностью', 'Поднять температуру до 1']
        : ['Constrain answers to provided context only', 'Remove all constraints', 'Raise temperature to 1'],
      answer: lang === 'ru'
        ? 'Ограничить ответ только предоставленным контекстом'
        : 'Constrain answers to provided context only',
      hint: lang === 'ru' ? 'Меньше свободы -> меньше выдумок.' : 'Less freedom usually means fewer invented facts.',
      completed: false,
    },
    {
      id: 6,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется короткий цикл улучшения промпта: определить метрику -> тест -> правка?'
        : 'What is the short loop for improving prompts: define metric -> test -> revise?',
      answer: lang === 'ru' ? 'Итерация' : 'Iteration',
      hint: lang === 'ru' ? 'Ключевая идея: улучшение по циклу, а не разово.' : 'Key idea: continuous cycle, not one-shot writing.',
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
          <span>{lang === 'ru' ? 'Основы' : 'Foundations'}</span>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">
            {lang === 'ru' ? 'Основы промптинга' : 'Prompting 101'}
          </span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === 'ru' ? 'Основы промптинга' : 'Prompting 101'}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Новичок' : 'Beginner'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 620 {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '1 ч' : '1h'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Что такое хороший промпт' : 'What Makes a Good Prompt'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Промпт — это не "магическая фраза", а спецификация задачи для модели. Хороший промпт уменьшает неоднозначность: описывает роль, контекст, задачу, ограничения и формат ответа.'
                : 'A prompt is not a magic phrase; it is a task specification for the model. A good prompt reduces ambiguity: it defines role, context, task, constraints, and output format.'}
            </p>
            <p className="text-xs text-neutral-500 mb-4">
              {lang === 'ru' ? 'Термины:' : 'Terms:'}{' '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'System prompt: верхнеуровневая инструкция, задающая поведение модели в диалоге.' : 'System prompt: the high-level instruction that sets model behavior in the conversation.'}
              >
                system prompt
              </span>
              {' · '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Few-shot: метод, где в промпт добавляют несколько примеров правильных ответов.' : 'Few-shot: a method where several examples are included in the prompt.'}
              >
                few-shot
              </span>
            </p>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                lang === 'ru' ? 'Роль' : 'Role',
                lang === 'ru' ? 'Контекст' : 'Context',
                lang === 'ru' ? 'Задача' : 'Task',
                lang === 'ru' ? 'Ограничения' : 'Constraints',
                lang === 'ru' ? 'Формат' : 'Format',
              ].map((block) => (
                <div key={block} className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-400 font-medium">{block}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Wand2 className="text-emerald-500" />
              {lang === 'ru' ? 'Zero-shot и Few-shot' : 'Zero-shot and Few-shot'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Zero-shot подходит для простых инструкций без примеров. Few-shot добавляет 2-5 эталонных примеров и резко повышает стабильность формата и качества.'
                : 'Zero-shot works for straightforward instructions without examples. Few-shot adds 2-5 reference examples and significantly improves output consistency and quality.'}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">Zero-shot</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Быстрее писать, но больше вариативности в ответах.'
                    : 'Faster to write, but more variability in outputs.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">Few-shot</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Требует примеров, но лучше удерживает стиль и структуру.'
                    : 'Requires examples, but better preserves style and structure.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <ShieldAlert className="text-emerald-500" />
              {lang === 'ru' ? 'Анти-галлюцинационные паттерны' : 'Anti-Hallucination Prompt Patterns'}
            </h2>
            <ul className="text-neutral-300 leading-relaxed space-y-2">
              <li>
                {lang === 'ru'
                  ? 'Явно ограничьте источники: "используй только переданный контекст".'
                  : 'Constrain sources explicitly: "use only the provided context".'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Просите указать уверенность или отметить неопределенность.'
                  : 'Ask for confidence level or explicit uncertainty markers.'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Фиксируйте формат: JSON/таблица/список полей для машинной проверки.'
                  : 'Lock output format: JSON/table/field list for machine validation.'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Добавляйте критерии отказа: когда модель должна сказать "недостаточно данных".'
                  : 'Add refusal criteria: when the model should say "insufficient evidence".'}
              </li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BookOpen className="text-emerald-500" />
              {lang === 'ru' ? 'Как улучшать промпты системно' : 'How to Improve Prompts Systematically'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Сначала задайте метрики (точность, формат, latency, цена), затем гоняйте один и тот же eval-набор при каждой правке. Промпт-инжиниринг работает как обычная инженерная итерация.'
                : 'Define metrics first (accuracy, format adherence, latency, cost), then rerun the same eval set after each change. Prompt engineering works as regular engineering iteration.'}
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">1. Metric</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Что считаем успехом' : 'Define success criteria'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">2. Baseline</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Текущий промпт + тест-набор' : 'Current prompt + eval set'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">3. Change</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Меняем 1-2 параметра' : 'Change 1-2 variables only'}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">4. Compare</p><p className="text-xs text-neutral-400">{lang === 'ru' ? 'Сравниваем с baseline' : 'Compare against baseline'}</p></div>
            </div>
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
