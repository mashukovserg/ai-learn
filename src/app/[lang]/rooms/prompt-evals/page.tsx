"use client";

import React, { useState, use } from "react";
import { ChevronRight, Info, HelpCircle, Scale, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import TaskQuestion, { TaskType } from "@/components/TaskQuestion";

export default function PromptEvalsPage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: "multiple-choice" as TaskType,
      question: lang === "ru"
        ? "Что такое gold set в eval-процессе?"
        : "What is a gold set in an eval workflow?",
      options: lang === "ru"
        ? ["Набор эталонных примеров с ожидаемыми ответами", "Случайный лог вчерашних запросов", "Список только успешных демо"]
        : ["A reference dataset with expected outputs", "A random log of yesterday's requests", "A list of successful demos only"],
      answer: lang === "ru"
        ? "Набор эталонных примеров с ожидаемыми ответами"
        : "A reference dataset with expected outputs",
      hint: lang === "ru" ? "Это базовая точка сравнения между версиями." : "It is the baseline for comparing versions.",
      completed: false,
    },
    {
      id: 2,
      type: "multiple-select" as TaskType,
      question: lang === "ru"
        ? "Какие метрики обычно нужны для прод-оценки LLM-фичи?"
        : "Which metrics are typically needed for production LLM evaluation?",
      options: lang === "ru"
        ? ["Качество ответа", "Latency", "Стоимость", "Hallucination rate", "Цвет интерфейса"]
        : ["Answer quality", "Latency", "Cost", "Hallucination rate", "Interface color palette"],
      answer: lang === "ru"
        ? ["Качество ответа", "Latency", "Стоимость", "Hallucination rate"]
        : ["Answer quality", "Latency", "Cost", "Hallucination rate"],
      hint: lang === "ru" ? "Выберите продуктовые метрики, а не визуальный стиль." : "Pick product metrics, not visual style.",
      completed: false,
    },
    {
      id: 3,
      type: "multiple-choice" as TaskType,
      question: lang === "ru"
        ? "Зачем делать regression eval при изменении промпта?"
        : "Why run regression evals after a prompt change?",
      options: lang === "ru"
        ? ["Чтобы не ухудшить уже работающие сценарии", "Чтобы получить больше креативности", "Чтобы заменить мониторинг"]
        : ["To avoid breaking scenarios that already work", "To increase creativity", "To replace monitoring"],
      answer: lang === "ru"
        ? "Чтобы не ухудшить уже работающие сценарии"
        : "To avoid breaking scenarios that already work",
      hint: lang === "ru" ? "Цель regression — проверка стабильности." : "Regression is about stability checks.",
      completed: false,
    },
    {
      id: 4,
      type: "input" as TaskType,
      question: lang === "ru"
        ? "Как называется сравнение двух вариантов модели/промпта на одной задаче?"
        : "What is it called when you compare two model/prompt variants on the same task?",
      answer: lang === "ru" ? "A/B тест" : "A/B test",
      hint: lang === "ru" ? "Формат с двумя альтернативами: A и B." : "Two-variant experiment: A and B.",
      completed: false,
    },
    {
      id: 5,
      type: "multiple-choice" as TaskType,
      question: lang === "ru"
        ? "Что лучше использовать как release gate для LLM-фичи?"
        : "What is a better release gate for an LLM feature?",
      options: lang === "ru"
        ? ["Порог по quality + latency + cost на eval-наборе", "Один удачный демо-кейс", "Количество лайков от команды"]
        : ["Quality + latency + cost thresholds on eval set", "One successful demo case", "Team likes count"],
      answer: lang === "ru"
        ? "Порог по quality + latency + cost на eval-наборе"
        : "Quality + latency + cost thresholds on eval set",
      hint: lang === "ru" ? "Gate должен быть измеримым и воспроизводимым." : "A gate must be measurable and reproducible.",
      completed: false,
    },
    {
      id: 6,
      type: "input" as TaskType,
      question: lang === "ru"
        ? "Как называется показатель доли фактически неверных, но уверенных ответов модели?"
        : "What is the metric called for confidently incorrect model outputs?",
      answer: "Hallucination rate",
      hint: lang === "ru" ? "Термин уже встречался в комнате." : "This term appears in the lesson.",
      completed: false,
    },
  ]);

  const markCompleted = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: true } : t)));
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-8 h-[calc(100vh-120px)]">
      <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
          <span>{lang === "ru" ? "Комнаты" : "Rooms"}</span>
          <ChevronRight size={14} />
          <span>{lang === "ru" ? "Основы" : "Foundations"}</span>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">{lang === "ru" ? "Prompt Evaluation & Evals" : "Prompt Evaluation & Evals"}</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === "ru" ? "Prompt Evaluation & Evals" : "Prompt Evaluation & Evals"}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === "ru" ? "Новичок" : "Beginner"}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} className="text-neutral-500" /> 460 {lang === "ru" ? "учеников" : "learners"}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-neutral-500" /> {lang === "ru" ? "55 мин" : "55m"}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === "ru" ? "Почему eval важнее демо" : "Why Evals Matter More Than Demos"}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === "ru"
                ? "Один удачный пример не доказывает качество LLM-фичи. Для продуктовой надежности нужен воспроизводимый eval-процесс: единый набор задач, понятные метрики и сравнение версий по одним и тем же правилам."
                : "One successful demo does not prove LLM quality. Product reliability requires a reproducible eval process: fixed task sets, clear metrics, and version comparisons under identical conditions."}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === "ru"
                ? "Цель eval — не «победить в бенчмарке», а уменьшить риск регрессий при изменениях промптов, моделей и маршрутизации."
                : "The goal of eval is not benchmark vanity. It is risk control: preventing regressions when prompts, models, or routing logic change."}
            </p>
            <p className="text-sm text-neutral-400 mt-4">
              {lang === "ru"
                ? "Проще: eval — это системная проверка качества до релиза и после изменений."
                : "In plain terms: eval is a systematic quality check before release and after each change."}
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Scale className="text-emerald-500" />
              {lang === "ru" ? "Gold set и критерии качества" : "Gold Set and Quality Criteria"}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === "ru"
                ? <>{" "}
                    <TermTip term="Gold set" definition="Набор эталонных задач для сравнения качества между версиями." />{" "}
                    — это эталонный набор запросов с ожидаемыми свойствами ответа. Он должен отражать реальные пользовательские сценарии, а не только «красивые» кейсы.
                  </>
                : <>
                    <TermTip term="Gold set" definition="A reference dataset used to compare quality across versions." />{" "}
                    is a reference set of prompts with expected output properties. It should represent real user scenarios, not only curated best-case examples.
                  </>}
            </p>
            <ul className="text-neutral-300 space-y-2">
              <li>{lang === "ru" ? "Покрывайте типичные, пограничные и рискованные случаи." : "Cover typical, edge, and high-risk cases."}</li>
              <li>{lang === "ru" ? "Фиксируйте критерии: корректность, полнота, формат, источник фактов." : "Define criteria: correctness, completeness, format, and factual grounding."}</li>
              <li>{lang === "ru" ? "Проверяйте стабильно после каждого изменения." : "Run consistently after each meaningful change."}</li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BarChart3 className="text-emerald-500" />
              {lang === "ru" ? "Метрики: качество, latency, стоимость, галлюцинации" : "Metrics: Quality, Latency, Cost, Hallucinations"}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === "ru"
                ? <>Прод-решение принимается по набору метрик, а не по одной. Улучшение качества может ухудшить{" "}
                    <TermTip term="latency" definition="Задержка: сколько времени проходит до ответа модели." />{" "}
                    или увеличить стоимость — это нормальный инженерный{" "}
                    <TermTip term="trade-off" definition="Компромисс: улучшая один параметр, часто ухудшаем другой." />.
                  </>
                : <>Production decisions should use a metric set, not a single number. Quality gains can increase{" "}
                    <TermTip term="latency" definition="Delay: time between user request and model response." />{" "}
                    or cost, and that is a normal engineering{" "}
                    <TermTip term="trade-off" definition="A compromise where improving one metric can worsen another." />.
                  </>}
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">Quality</p><p className="text-xs text-neutral-400">{lang === "ru" ? "Точность и полезность" : "Correctness and usefulness"}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">Latency</p><p className="text-xs text-neutral-400">{lang === "ru" ? "Время ответа" : "Response time"}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">Cost</p><p className="text-xs text-neutral-400">{lang === "ru" ? "Цена запроса" : "Per-request cost"}</p></div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3"><p className="text-xs text-emerald-400 mb-1">Risk</p><p className="text-xs text-neutral-400">{lang === "ru" ? "Hallucination rate (доля уверенно неверных ответов)" : "Hallucination rate (share of confidently wrong answers)"}</p></div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <ShieldCheck className="text-emerald-500" />
              {lang === "ru" ? "Release gate и regression discipline" : "Release Gates and Regression Discipline"}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === "ru"
                ? <>Перед релизом фиксируйте минимальные пороги по quality, latency и cost. Это и есть{" "}
                    <TermTip term="release gate" definition="Набор обязательных условий, без которых релиз не выпускают." />.
                    Если новая версия улучшает один параметр, но проваливает критичный порог по другому, релиз откладывается.
                  </>
                : <>Before release, define minimum thresholds for quality, latency, and cost. This is your{" "}
                    <TermTip term="release gate" definition="A mandatory set of conditions required before deployment." />.
                    If a new version improves one metric but fails a critical threshold in another, release should be blocked.
                  </>}
            </p>
            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-amber-200">
                {lang === "ru"
                  ? "Практический принцип: eval — это не разовая проверка, а постоянный контур контроля качества."
                  : "Practical principle: eval is not a one-off check; it is a continuous quality-control loop."}
              </p>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">
              {lang === "ru" ? "Мини-глоссарий терминов" : "Mini Glossary"}
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-md p-3 text-neutral-300"><strong>Eval</strong>: {lang === "ru" ? "системная оценка качества модели/промпта на фиксированном наборе задач." : "systematic quality assessment on a fixed task set."}</div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-md p-3 text-neutral-300"><strong>Gold set</strong>: {lang === "ru" ? "эталонный набор для сравнения версий." : "reference dataset for comparing versions."}</div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-md p-3 text-neutral-300"><strong>Regression</strong>: {lang === "ru" ? "ухудшение ранее работающего сценария после изменений." : "a previously working scenario getting worse after changes."}</div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-md p-3 text-neutral-300"><strong>Release gate</strong>: {lang === "ru" ? "пороговые условия для допуска в прод." : "threshold conditions required for production release."}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[400px] flex flex-col gap-6">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-y-auto max-h-[70vh]">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-500" size={20} />
            {lang === "ru" ? "Задания комнаты" : "Room Tasks"}
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
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{lang === "ru" ? "Прогресс" : "Progress"}</span>
            <span className="text-sm font-bold text-emerald-500">
              {Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#262626]">
            <motion.div
              className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${(tasks.filter((t) => t.completed).length / tasks.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TermTip({ term, definition }: { term: string; definition: string }) {
  return (
    <span
      className="underline decoration-dotted underline-offset-4 cursor-help text-neutral-200"
      title={definition}
      aria-label={`${term}: ${definition}`}
    >
      {term}
    </span>
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
