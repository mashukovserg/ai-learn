"use client";

import React, { useState, use } from 'react';
import { ChevronRight, Info, HelpCircle, Image as ImageIcon, SlidersHorizontal, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';

export default function AiImageCreationPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что чаще всего сильнее всего влияет на результат генерации изображения?'
        : 'What usually has the strongest effect on generated image quality?',
      options: lang === 'ru'
        ? ['Качество и конкретика промпта', 'Только цвет UI', 'Название файла проекта']
        : ['Prompt quality and specificity', 'Only UI color theme', 'Project file name'],
      answer: lang === 'ru' ? 'Качество и конкретика промпта' : 'Prompt quality and specificity',
      hint: lang === 'ru' ? 'Чем точнее описание сцены, тем управляемее результат.' : 'The more specific the scene description, the more controllable the output.',
      completed: false,
    },
    {
      id: 2,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Что полезно явно указывать в image-промпте?'
        : 'What is useful to specify explicitly in an image prompt?',
      options: lang === 'ru'
        ? ['Композиция', 'Освещение', 'Стиль/референс эпохи', 'Случайный текст без цели']
        : ['Composition', 'Lighting', 'Style/reference era', 'Random irrelevant text'],
      answer: lang === 'ru'
        ? ['Композиция', 'Освещение', 'Стиль/референс эпохи']
        : ['Composition', 'Lighting', 'Style/reference era'],
      hint: lang === 'ru' ? 'Выбирайте параметры, которые управляют визуальным результатом.' : 'Choose parameters that directly control visual output.',
      completed: false,
    },
    {
      id: 3,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется параметр, фиксирующий воспроизводимость генерации изображения?'
        : 'What parameter controls reproducibility of image generation?',
      answer: 'Seed',
      hint: lang === 'ru' ? 'Короткое английское слово.' : 'Short English word.',
      completed: false,
    },
    {
      id: 4,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Для чего обычно используется negative prompt?'
        : 'What is a negative prompt usually used for?',
      options: lang === 'ru'
        ? ['Чтобы исключать нежелательные элементы', 'Чтобы ускорять интернет', 'Чтобы менять язык интерфейса']
        : ['To exclude unwanted elements', 'To speed up internet connection', 'To change interface language'],
      answer: lang === 'ru' ? 'Чтобы исключать нежелательные элементы' : 'To exclude unwanted elements',
      hint: lang === 'ru' ? 'Это про контроль того, чего не должно быть в кадре.' : 'It controls what should not appear in the image.',
      completed: false,
    },
    {
      id: 5,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что важно учитывать при коммерческом использовании AI-изображений?'
        : 'What is important for commercial use of AI-generated images?',
      options: lang === 'ru'
        ? ['Лицензии, права и политика платформы', 'Только размер PNG', 'Только число шагов генерации']
        : ['Licenses, rights, and platform policy', 'Only PNG size', 'Only sampling steps count'],
      answer: lang === 'ru'
        ? 'Лицензии, права и политика платформы'
        : 'Licenses, rights, and platform policy',
      hint: lang === 'ru' ? 'Юридическая часть так же важна, как и визуальное качество.' : 'Legal constraints matter as much as visual quality.',
      completed: false,
    },
    {
      id: 6,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется процесс улучшения промпта через цикл тестов и правок?'
        : 'What is the process of improving prompts through repeated tests and revisions called?',
      answer: lang === 'ru' ? 'Итерация' : 'Iteration',
      hint: lang === 'ru' ? 'Ключевая идея: не one-shot, а цикл.' : 'Key idea: not one-shot, but a loop.',
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
          <span>{lang === 'ru' ? 'Практика' : 'Practice'}</span>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">
            {lang === 'ru' ? 'AI для создания изображений' : 'AI for Image Creation'}
          </span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === 'ru' ? 'AI для создания изображений' : 'AI for Image Creation'}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Новичок' : 'Beginner'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 460 {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '50 мин' : '50m'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Что происходит при генерации изображений' : 'How Image Generation Works'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Современные image-модели преобразуют текстовое описание в визуальную композицию через последовательные шаги денойзинга и согласования с промптом. На практике качество результата зависит от управляемости входа: структуры промпта, ограничений и параметров.'
                : 'Modern image models transform text prompts into visual compositions through iterative denoising and prompt alignment. In practice, output quality depends on controllable inputs: prompt structure, constraints, and generation parameters.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Поэтому AI-изображения - это не "магия кнопки", а инженерный процесс: формулировка задачи, генерация вариантов, оценка и итерация.'
                : 'So AI image creation is not a one-click trick but an engineering workflow: define task, generate variants, evaluate, and iterate.'}
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <ImageIcon className="text-emerald-500" />
              {lang === 'ru' ? 'Структура хорошего image-промпта' : 'Structure of a Good Image Prompt'}
            </h2>
            <ul className="text-neutral-300 leading-relaxed space-y-2">
              <li>{lang === 'ru' ? 'Субъект и сцена: кто/что в кадре.' : 'Subject and scene: what is in frame.'}</li>
              <li>{lang === 'ru' ? 'Композиция: ракурс, крупность, кадрирование.' : 'Composition: angle, framing, shot type.'}</li>
              <li>{lang === 'ru' ? 'Свет и настроение: daylight, cinematic, soft, dramatic.' : 'Lighting and mood: daylight, cinematic, soft, dramatic.'}</li>
              <li>{lang === 'ru' ? 'Стиль: фотореализм, иллюстрация, editorial, retro и т.д.' : 'Style: photoreal, illustration, editorial, retro, etc.'}</li>
              <li>{lang === 'ru' ? 'Ограничения: что исключить (negative prompt).' : 'Constraints: what to exclude (negative prompt).'}</li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <SlidersHorizontal className="text-emerald-500" />
              {lang === 'ru' ? 'Параметры, которые важно контролировать' : 'Parameters You Should Control'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">Seed</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Позволяет воспроизводить результат.' : 'Enables reproducibility of outputs.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Шаги' : 'Steps'}</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Баланс между скоростью и детализацией.' : 'Trade-off between speed and detail.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">Guidance</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Насколько строго модель следует промпту.' : 'How strongly the model follows the prompt.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Shield className="text-emerald-500" />
              {lang === 'ru' ? 'Ответственное использование' : 'Responsible Use'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Для коммерческого применения важно проверять условия лицензии, требования к атрибуции, ограничения на стили и контент-политику платформы. Команда должна фиксировать, какие модели и настройки использовались для продакшн-ассетов.'
                : 'For commercial use, verify license terms, attribution rules, style restrictions, and platform content policy. Teams should log which models and settings were used for production assets.'}
            </p>
            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-amber-200">
                {lang === 'ru'
                  ? 'Практика: оценивайте не только "красиво/некрасиво", но и бренд-фит, юридические риски и воспроизводимость.'
                  : 'Practice: evaluate not only aesthetics, but also brand fit, legal risk, and reproducibility.'}
              </p>
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
