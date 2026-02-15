"use client";

import React, { useState, use } from 'react';
import { ChevronRight, Info, HelpCircle, Landmark, Cpu, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';

export default function AiHistoryPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой тезис наиболее точно описывает ранний этап AI (1950-2000-е) с точки зрения методологии, институтов и общественного влияния?'
        : 'Which thesis best characterizes the early AI period (1950s-2000s) in terms of methodology, institutions, and societal impact?',
      options: lang === 'ru'
        ? [
            'AI в основном развивался как исследовательское направление внутри Computer Science: фокус на алгоритмах, бенчмарках и лабораторных прототипах при ограниченном массовом внедрении',
            'AI уже функционировал как массовая потребительская платформа с устойчивыми пользовательскими рынками и повседневным применением',
            'AI уже был зрелой геополитической инфраструктурой, определяющей международные цепочки поставок, экспортный контроль и регуляторные режимы'
          ]
        : [
            'AI was primarily a research field inside Computer Science: focused on algorithms, benchmarks, and lab prototypes with limited mass adoption',
            'AI already operated as a mass consumer platform with stable user markets and everyday use',
            'AI was already a mature geopolitical infrastructure shaping supply chains, export controls, and regulatory regimes'
          ],
      answer: lang === 'ru'
        ? 'AI в основном развивался как исследовательское направление внутри Computer Science: фокус на алгоритмах, бенчмарках и лабораторных прототипах при ограниченном массовом внедрении'
        : 'AI was primarily a research field inside Computer Science: focused on algorithms, benchmarks, and lab prototypes with limited mass adoption',
      hint: lang === 'ru' ? 'Ищите вариант, где акцент на research-контексте и ограниченном общественном масштабе.' : 'Look for the option centered on research context and limited societal scale.',
      completed: false,
    },
    {
      id: 2,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Что изменилось в эпоху foundation models?'
        : 'What changed in the foundation-model era?',
      options: lang === 'ru'
        ? ['AI стал частью публичной инфраструктуры', 'AI влияет на экономику и политику', 'AI перестал требовать вычислений', 'AI стал предметом регулирования']
        : ['AI became part of public infrastructure', 'AI impacts economics and politics', 'AI no longer needs compute', 'AI became a regulatory subject'],
      answer: lang === 'ru'
        ? ['AI стал частью публичной инфраструктуры', 'AI влияет на экономику и политику', 'AI стал предметом регулирования']
        : ['AI became part of public infrastructure', 'AI impacts economics and politics', 'AI became a regulatory subject'],
      hint: lang === 'ru' ? 'Не выбирайте вариант про отсутствие compute.' : 'Do not select the option saying compute is no longer needed.',
      completed: false,
    },
    {
      id: 3,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется переход, когда AI перестает быть только академической темой и становится фактором устройства общества?'
        : 'What is the transition called when AI moves from academia into a system-shaping social force?',
      answer: lang === 'ru' ? 'Глобальный феномен' : 'Global phenomenon',
      hint: lang === 'ru' ? 'Два слова: первое "Глобальный".' : 'Two words, first is "Global".',
      completed: false,
    },
    {
      id: 4,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Почему этот переход называется consequential?'
        : 'Why is this shift called consequential?',
      options: lang === 'ru'
        ? ['Потому что он влияет на рынки, институты и риски в реальном мире', 'Потому что меняется только интерфейс чат-ботов', 'Потому что это только академический спор']
        : ['Because it affects markets, institutions, and real-world risk', 'Because only chatbot UI changed', 'Because it is only an academic debate'],
      answer: lang === 'ru'
        ? 'Потому что он влияет на рынки, институты и риски в реальном мире'
        : 'Because it affects markets, institutions, and real-world risk',
      hint: lang === 'ru' ? 'Consequence = системный эффект вне лаборатории.' : 'Consequence means system-level impact outside labs.',
      completed: false,
    },
    {
      id: 5,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Какие области сегодня напрямую затрагивает AI?'
        : 'Which domains does AI now directly affect?',
      options: lang === 'ru'
        ? ['Труд и производительность', 'Национальная безопасность', 'Здравоохранение и образование', 'Только индустрия игр']
        : ['Labor and productivity', 'National security', 'Healthcare and education', 'Only gaming industry'],
      answer: lang === 'ru'
        ? ['Труд и производительность', 'Национальная безопасность', 'Здравоохранение и образование']
        : ['Labor and productivity', 'National security', 'Healthcare and education'],
      hint: lang === 'ru' ? 'AI стал межотраслевой технологией общего назначения.' : 'AI is now a cross-sector general-purpose technology.',
      completed: false,
    },
    {
      id: 6,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Какой практический вывод для продуктовых команд из этой исторической смены контекста?'
        : 'What is the practical takeaway for product teams from this historical shift?',
      answer: lang === 'ru' ? 'Инженерная ответственность' : 'Engineering responsibility',
      hint: lang === 'ru' ? 'Речь о том, что AI-продукты требуют качества, безопасности и governance.' : 'Think quality, safety, and governance in AI products.',
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
            {lang === 'ru' ? 'История AI' : 'History of AI'}
          </span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === 'ru' ? 'История AI' : 'History of AI'}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Новичок' : 'Beginner'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 540 {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '1 ч' : '1h'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Старт: Дартмутская конференция (1956)' : 'Starting Point: The Dartmouth Conference (1956)'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Историю AI обычно отсчитывают от Дартмутской конференции 1956 года, где область была сформулирована как самостоятельная исследовательская программа. В фокусе были формальные модели интеллекта, символические методы и идея, что когнитивные процессы можно воспроизвести вычислительно.'
                : 'AI history is commonly traced to the 1956 Dartmouth Conference, where the field was framed as a distinct research program. Early work focused on formal models of intelligence, symbolic methods, and the premise that cognition could be computationally reproduced.'}
            </p>
            <p className="text-xs text-neutral-500 mb-4">
              {lang === 'ru' ? 'Термины:' : 'Terms:'}{' '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Перцептрон: ранняя нейросетевая модель для базовой классификации по обучаемым весам.' : 'Perceptron: an early neural model for basic classification using learned weights.'}
              >
                Perceptron
              </span>
              {' · '}
              <span
                className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-300"
                title={lang === 'ru' ? 'Нейропластичность: способность нейронных связей изменяться под влиянием опыта.' : 'Neuroplasticity: the ability of neural connections to change through experience.'}
              >
                neuroplasticity
              </span>
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В последующие десятилетия AI развивался в логике академической Computer Science: алгоритмы, исследовательские бенчмарки и лабораторные прототипы. Влияние на повседневную жизнь существовало, но оставалось ограниченным по масштабу.'
                : 'In the following decades, AI largely evolved inside academic Computer Science: algorithms, research benchmarks, and lab prototypes. It influenced products, but at a limited societal scale.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              {lang === 'ru'
                ? 'Исторически важной частью этого этапа стало машинное обучение: фокус сместился от полностью ручных, жестко заданных правил к подходам, где система обучается на данных. Поэтому ML долгое время рассматривался как ключевая практическая ветка внутри более широкой области AI.'
                : 'Historically, machine learning became a central part of this phase: the focus moved from fully hand-written deterministic rules toward data-driven training. For that reason, ML was long treated as the primary practical branch inside the broader AI field.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              {lang === 'ru' ? (
                <>
                  Отдельная линия этой истории связана с Фрэнком Розенблаттом, создателем Перцептрона: подход можно рассматривать как попытку построить систему, которая "учится" по принципу распределенной адаптации, а не через полностью детерминированные правила, то есть с опорой на вероятностную логику.
                </>
              ) : (
                <>
                  A key historical thread is associated with Frank Rosenblatt, the creator of the Perceptron: this approach can be read as an attempt to build a system that "learns" through distributed adaptation rather than fully deterministic rules, relying on probabilistic logic.
                </>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              {lang === 'ru' ? (
                <>
                  В интерпретации{' '}
                  <a
                    href="https://www.journals.uchicago.edu/doi/abs/10.1086/717313"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-emerald-400 underline decoration-dotted underline-offset-4"
                  >
                    Орит Халперн
                  </a>
                  {' '}это похоже на логику распределенного рынка: поведение возникает не из единого заранее заданного плана, а из постоянной адаптации к локальным сигналам и вероятностям.
                </>
              ) : (
                <>
                  In the interpretation of{' '}
                  <a
                    href="https://www.journals.uchicago.edu/doi/abs/10.1086/717313"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-emerald-400 underline decoration-dotted underline-offset-4"
                  >
                    Orit Halpern
                  </a>
                  , this resembles a distributed-market logic: behavior does not come from a single fixed planner, but from continuous adaptation to local signals and probabilities.
                </>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              {lang === 'ru'
                ? 'Практически это выглядело как смена парадигмы: вместо заранее прописанного набора правил система обучала параметры по данным и работала с вероятностями классификации. Перцептрон стал ранним примером перехода от жесткой символической логики к статистическому обучению.'
                : 'In practical terms, this was a paradigm shift: instead of a fixed hand-written rule set, the system learned parameters from data and operated with classification probabilities. The Perceptron became an early example of the transition from rigid symbolic logic to statistical learning.'}
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Landmark className="text-emerald-500" />
              {lang === 'ru' ? 'Сдвиг: AI как глобальный феномен' : 'The Shift: AI as a Global Phenomenon'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'С появлением foundation models AI перестал быть только разделом Computer Science и стал инфраструктурным слоем экономики и институтов. Модели теперь влияют на рынок труда, образование, медиа, безопасность и государственную политику.'
                : 'With foundation models, AI moved beyond a Computer Science subfield and became infrastructure for economies and institutions. Models now affect labor markets, education, media, security, and public policy.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Этот переход consequential: последствия выходят за рамки лаборатории. Ошибки, предвзятость, утечки данных и зависимость от инфраструктуры превращаются в системные риски.'
                : 'This shift is consequential: effects extend far beyond labs. Errors, bias, data exposure, and infrastructure dependence become system-level risks.'}
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Cpu className="text-emerald-500" />
              {lang === 'ru' ? 'Что изменилось для инженеров и команд' : 'What Changed for Engineers and Teams'}
            </h2>
            <ul className="text-neutral-300 leading-relaxed space-y-2">
              <li>
                {lang === 'ru'
                  ? 'Фокус с "работает ли модель" сместился к "работает ли продукт надежно и безопасно".'
                  : 'The focus shifted from "does the model work" to "does the product work reliably and safely".'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Появилась необходимость в eval-процессах, мониторинге, fallback и governance.'
                  : 'Teams now need eval pipelines, monitoring, fallback, and governance.'}
              </li>
              <li>
                {lang === 'ru'
                  ? 'Архитектурные решения теперь включают комплаенс, юрисдикцию данных и контроль стоимости.'
                  : 'Architecture decisions now include compliance, data jurisdiction, and cost control.'}
              </li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Globe2 className="text-emerald-500" />
              {lang === 'ru' ? 'Почему это важно сейчас' : 'Why It Matters Now'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'AI становится технологией общего назначения, сравнимой по значимости с электричеством или интернетом. Поэтому вопрос не в том, "будет ли AI", а в том, как ответственно интегрировать его в критичные процессы.'
                : 'AI is becoming a general-purpose technology, comparable in impact to electricity or the internet. The question is no longer whether AI will be used, but how responsibly it is integrated into critical workflows.'}
            </p>
            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-amber-200">
                {lang === 'ru'
                  ? 'Практический принцип: AI-продукт оценивается не только по демо-качеству, но и по предсказуемости, устойчивости и управляемости последствий.'
                  : 'Practical principle: AI products are judged not only by demo quality, but by predictability, resilience, and consequence management.'}
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
