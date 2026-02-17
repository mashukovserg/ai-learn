"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { ChevronRight, Info, BookOpen, HelpCircle, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import TaskQuestion, { TaskType } from '@/components/TaskQuestion';
import TaskSorting from '@/components/TaskSorting';
import TerminologyTooltip from '@/components/TerminologyTooltip';
import { useProgress } from '@/hooks/useProgress';

export default function RoomPage(props: { params: Promise<{ lang: string, id: string }> }) {
  const params = use(props.params);
  const lang = params.lang;

  const { completedIds, markCompleted: persistCompleted } = useProgress('llm-landscape');

  const [tasks, setTasks] = useState([
    {
      id: 0,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что такое ИИ-модель (веса) по своей сути?'
        : 'What is an AI model (weights) at its core?',
      options: lang === 'ru'
        ? ['Набор жестких правил "если-то"', 'Статический файл с результатами обучения', 'Живой организм, который растет сам']
        : ['A set of hard "if-then" rules', 'A static file containing training results', 'A living organism that grows on its own'],
      answer: lang === 'ru' ? 'Статический файл с результатами обучения' : 'A static file containing training results',
      explanation: lang === 'ru'
        ? 'Верно! Модель — это снимок знаний (весов), полученных в процессе обучения. Она не меняется динамически, пока вы её используете.'
        : 'Correct! A model is a snapshot of knowledge (weights) gained during training. It doesn\'t change dynamically while you use it.',
      completed: false
    },
    {
      id: 1,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Какая компания разработала Claude?'
        : 'Which company developed Claude?',
      answer: 'Anthropic',
      hint: lang === 'ru' ? 'Название компании уже указано в блоке про Claude в теории.' : 'The company name is explicitly shown in the Claude theory block.',
      completed: false
    },
    {
      id: 2,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Если Модель А постоянно побеждает Модель Б в слепых тестах, что происходит с их рейтингом ELO?'
        : 'If Model A consistently beats Model B in blind tests, what happens to their ELO ratings?',
      options: lang === 'ru'
        ? ['Рейтинг А растет, Б падает', 'Рейтинг Б растет, А падает', 'Оба остаются без изменений']
        : ['Model A goes up, Model B goes down', 'Model B goes up, Model A goes down', 'Both stay exactly the same'],
      answer: lang === 'ru' ? 'Рейтинг А растет, Б падает' : 'Model A goes up, Model B goes down',
      hint: lang === 'ru' ? 'Вспомните, как работают шахматные рейтинги.' : 'Think about how chess rankings work.',
      completed: false
    },
    {
      id: 3,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Выберите модели, которые НЕ принадлежат компаниям из США.'
        : 'Select models that do NOT belong to US companies.',
      options: ['Claude', 'DeepSeek', 'Gemini', 'Mistral', 'Qwen', 'Llama', 'Yi', 'Jamba'],
      answer: ['DeepSeek', 'Mistral', 'Qwen', 'Yi', 'Jamba'],
      hint: lang === 'ru' ? 'Ищите модели из Китая, Франции и Израиля.' : 'Look for models from China, France, and Israel.',
      completed: false
    },
    {
      id: 4,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется концепция, согласно которой страна должна иметь свою модель ИИ для независимости?'
        : 'What is the concept of a country having its own AI model for independence called?',
      answer: lang === 'ru' ? 'Суверенный ИИ' : 'Sovereign AI',
      hint: lang === 'ru' ? 'Слово начинается на "Сув...".' : 'The word starts with "Sov...".',
      completed: false
    },
    {
      id: 6,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Выберите модели/семейства, которые обычно относятся к open-weight экосистеме.'
        : 'Select model families that are typically part of the open-weight ecosystem.',
      options: ['Llama', 'Mistral', 'Qwen', 'Claude', 'Gemini'],
      answer: ['Llama', 'Mistral', 'Qwen'],
      hint: lang === 'ru'
        ? 'Ищите те, которые можно запускать в своей инфраструктуре.'
        : 'Pick those commonly self-hosted on your own infrastructure.',
      explanation: lang === 'ru'
        ? 'Верно! Llama, Mistral и Qwen — лидеры открытого мира. В отличие от Claude и Gemini, их веса доступны для скачивания и запуска локально.'
        : 'Correct! Llama, Mistral, and Qwen are leaders of the open world. Unlike Claude and Gemini, their weights are available to download and run locally.',
      completed: false
    },
    {
      id: 7,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется стратегия государства развивать собственные модели и стек ИИ для независимости?'
        : 'What is the strategy called where a nation builds its own models and AI stack for independence?',
      answer: lang === 'ru' ? 'Суверенный ИИ' : 'Sovereign AI',
      hint: lang === 'ru' ? 'Два слова: первое связано с независимостью.' : 'Two words, starts with "Sovereign".',
      completed: false
    },
    {
      id: 8,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Если модель A стабильно выигрывает у модели B в слепых сравнениях, что происходит в ELO?'
        : 'If Model A consistently wins against Model B in blind comparisons, what happens in ELO?',
      options: lang === 'ru'
        ? ['Рейтинг А растет, Б падает', 'Рейтинг Б растет, А падает', 'Оба остаются без изменений']
        : ['Model A goes up, Model B goes down', 'Model B goes up, Model A goes down', 'Both stay exactly the same'],
      answer: lang === 'ru' ? 'Рейтинг А растет, Б падает' : 'Model A goes up, Model B goes down',
      hint: lang === 'ru' ? 'Вспомните, как работают шахматные рейтинги.' : 'Think about how chess rankings work.',
      completed: false
    },
    {
      id: 9,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется популярная платформа слепых сравнений ИИ-чатботов?'
        : 'What is the popular platform for blind LLM head-to-head comparisons called?',
      answer: 'Chatbot Arena',
      hint: lang === 'ru' ? 'Название из двух слов, второе — Arena.' : 'Two words; second word is Arena.',
      completed: false
    },
    {
      id: 10,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Для задач с чувствительными данными и строгими требованиями on-prem что обычно предпочтительнее?'
        : 'For sensitive data and strict on-prem requirements, what is usually preferred?',
      options: lang === 'ru'
        ? ['Open-weight модель в приватном контуре', 'Публичный API без ограничений', 'Максимальная температура генерации']
        : ['Open-weight model in a private environment', 'Unrestricted public API', 'Maximum generation temperature'],
      answer: lang === 'ru'
        ? 'Open-weight модель в приватном контуре'
        : 'Open-weight model in a private environment',
      hint: lang === 'ru' ? 'Подумайте о контроле над данными и инфраструктурой.' : 'Think data control and infrastructure ownership.',
      completed: false
    },
    {
      id: 11,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Какие метрики стоит сравнивать при выборе модели в прод?'
        : 'Which metrics should you compare when selecting a model for production?',
      options: lang === 'ru'
        ? ['Качество ответов', 'Задержка (latency)', 'Стоимость за токены', 'Безопасность/риски', 'Цвет логотипа']
        : ['Response quality', 'Latency', 'Token cost', 'Safety/risk', 'Logo color'],
      answer: lang === 'ru'
        ? ['Качество ответов', 'Задержка (latency)', 'Стоимость за токены', 'Безопасность/риски']
        : ['Response quality', 'Latency', 'Token cost', 'Safety/risk'],
      hint: lang === 'ru' ? 'Ориентируйтесь на SLA, бюджет и надежность.' : 'Think SLA, budget, and reliability.',
      completed: false
    },
    {
      id: 12,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой вендор чаще ассоциируется с открытыми европейскими моделями и on-prem стратегией?'
        : 'Which vendor is most associated with European open-weight models and on-prem strategy?',
      options: ['Mistral', 'ChatGPT', 'Gemini', 'Claude'],
      answer: 'Mistral',
      hint: lang === 'ru'
        ? 'Смотрите на open-weight позиционирование в ЕС.'
        : 'Think EU-based open-weight positioning.',
      completed: false
    },
    {
      id: 13,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой первый шаг самый правильный при выборе между Claude/Gemini/DeepSeek/ChatGPT/Mistral?'
        : 'What is the best first step when choosing between Claude/Gemini/DeepSeek/ChatGPT/Mistral?',
      options: lang === 'ru'
        ? ['Запустить eval на своих задачах и KPI', 'Выбрать лидера по хайпу в соцсетях', 'Ориентироваться только на общий ELO']
        : ['Run evals on your own tasks and KPIs', 'Pick whoever is trending on social media', 'Rely only on a global ELO table'],
      answer: lang === 'ru'
        ? 'Запустить eval на своих задачах и KPI'
        : 'Run evals on your own tasks and KPIs',
      hint: lang === 'ru' ? 'Нет универсально лучшей модели для всех продуктов.' : 'There is no universally best model for every product.',
      completed: false
    },
    {
      id: 14,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что лучше всего отражает практический смысл "суверенного ИИ"?'
        : 'Which option best captures the practical meaning of "sovereign AI"?',
      options: lang === 'ru'
        ? ['Контроль над модельным стеком, данными и инфраструктурой', 'Только высокий ELO на лидербордах', 'Только наличие локального дата-центра']
        : ['Control over model stack, critical data, and infrastructure', 'Only top ELO leaderboard ranking', 'Only having a local data center'],
      answer: lang === 'ru'
        ? 'Контроль над модельным стеком, данными и инфраструктурой'
        : 'Control over model stack, critical data, and infrastructure',
      hint: lang === 'ru' ? 'Речь о системном контроле, не об одном показателе.' : 'Think full-system control, not a single metric.',
      completed: false
    },
    {
      id: 15,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Какие факторы обычно учитывают при выборе AI-вендора в enterprise?'
        : 'Which factors are typically considered when selecting an AI vendor in enterprise?',
      options: lang === 'ru'
        ? ['Качество и стабильность', 'Комплаенс и юрисдикция данных', 'Стоимость и latency', 'Цвет бренда', 'Возможность fallback']
        : ['Quality and stability', 'Compliance and data jurisdiction', 'Cost and latency', 'Brand color palette', 'Fallback strategy support'],
      answer: lang === 'ru'
        ? ['Качество и стабильность', 'Комплаенс и юрисдикция данных', 'Стоимость и latency', 'Возможность fallback']
        : ['Quality and stability', 'Compliance and data jurisdiction', 'Cost and latency', 'Fallback strategy support'],
      hint: lang === 'ru' ? 'Выбирайте факторы, влияющие на прод и риски.' : 'Pick factors that affect production risk and reliability.',
      completed: false
    },
    {
      id: 16,
      type: 'input' as TaskType,
      question: lang === 'ru'
        ? 'Как называется стратегия с основной и резервной моделью для устойчивости сервиса?'
        : 'What is the strategy called when you use a primary and backup model for resilience?',
      answer: 'Fallback',
      hint: lang === 'ru' ? 'Короткий англ. термин, уже встречался в уроке.' : 'Short English term already used in the lesson.',
      completed: false
    },
    {
      id: 17,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой закон США направлен на укрепление внутреннего полупроводникового производства?'
        : 'Which U.S. law aims to strengthen domestic semiconductor manufacturing?',
      options: ['CHIPS and Science Act', 'AI Safety Act', 'Digital Markets Act'],
      answer: 'CHIPS and Science Act',
      hint: lang === 'ru' ? 'В уроке указан прямой линк на Congress.gov.' : 'The lesson links directly to Congress.gov.',
      completed: false
    },
    {
      id: 18,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какая компания ассоциируется с критичным узким местом в EUV-литографии?'
        : 'Which company is associated with a critical bottleneck in EUV lithography?',
      options: ['ASML', 'TSMC', 'NVIDIA'],
      answer: 'ASML',
      hint: lang === 'ru' ? 'Нидерланды, литографическое оборудование.' : 'Netherlands-based lithography equipment provider.',
      completed: false
    },
    {
      id: 19,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Что обычно входит в понятие модельного/технологического суверенитета?'
        : 'What is typically included in model/technological sovereignty?',
      options: lang === 'ru'
        ? ['Локальный хостинг', 'Независимый доступ к compute', 'Регуляторное соответствие', 'Только высокий ELO']
        : ['Local hosting', 'Independent compute access', 'Regulatory alignment', 'Only a top ELO score'],
      answer: lang === 'ru'
        ? ['Локальный хостинг', 'Независимый доступ к compute', 'Регуляторное соответствие']
        : ['Local hosting', 'Independent compute access', 'Regulatory alignment'],
      hint: lang === 'ru' ? 'Суверенитет связан с контролем, а не с одним бенчмарком.' : 'Sovereignty is about control, not one benchmark score.',
      completed: false
    },
    {
      id: 20,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Что означает "compute nationalism" в контексте 2026 outlook?'
        : 'What does "compute nationalism" mean in the 2026 outlook context?',
      options: lang === 'ru'
        ? ['Субсидирование национальной полупроводниковой и дата-центровой базы', 'Полный отказ от облаков', 'Только open-source политика']
        : ['Subsidizing domestic semiconductor and data-center capacity', 'Complete rejection of cloud infrastructure', 'Open-source-only policy'],
      answer: lang === 'ru'
        ? 'Субсидирование национальной полупроводниковой и дата-центровой базы'
        : 'Subsidizing domestic semiconductor and data-center capacity',
      hint: lang === 'ru' ? 'Ключевое слово: государственная поддержка инфраструктуры.' : 'Key idea: state-supported domestic infrastructure.',
      completed: false
    },
    {
      id: 21,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой источник наиболее нейтрален для cross-model comparison в реальном времени?'
        : 'Which source is most useful for neutral cross-model comparison in near real-time?',
      options: ['LMSYS Chatbot Arena', 'Single vendor blog post', 'One tweet thread'],
      answer: 'LMSYS Chatbot Arena',
      hint: lang === 'ru' ? 'Смотрите общий лидерборд с head-to-head сравнением.' : 'Use a broad head-to-head public leaderboard.',
      completed: false
    },
    {
      id: 22,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какая модельная семья чаще считается сильной для long-form аккуратного письма?'
        : 'Which model family is most commonly associated with careful long-form writing?',
      options: ['Claude', 'DeepSeek', 'Mistral 7B'],
      answer: 'Claude',
      hint: lang === 'ru' ? 'Смотрите профиль enterprise writing/documentation.' : 'Think enterprise writing and document workflows.',
      completed: false
    },
    {
      id: 23,
      type: 'multiple-choice' as TaskType,
      question: lang === 'ru'
        ? 'Какой вариант чаще рассматривают для EU/on-prem и open-weight стратегии?'
        : 'Which option is most often considered for EU/on-prem and open-weight strategy?',
      options: ['Mistral', 'Gemini Flash only', 'Closed API only approach'],
      answer: 'Mistral',
      hint: lang === 'ru' ? 'Ориентир: data sovereignty + open ecosystem.' : 'Think data sovereignty plus open ecosystem.',
      completed: false
    },
    {
      id: 24,
      type: 'multiple-select' as TaskType,
      question: lang === 'ru'
        ? 'Что обязательно запускать перед выбором AI-провайдера?'
        : 'What should always be run before committing to an AI provider?',
      options: lang === 'ru'
        ? ['Свой eval-набор', 'Latency + cost тесты', 'Hallucination audits', 'Только чтение маркетинговой страницы']
        : ['Your own eval set', 'Latency + cost tests', 'Hallucination audits', 'Only reading marketing pages'],
      answer: lang === 'ru'
        ? ['Свой eval-набор', 'Latency + cost тесты', 'Hallucination audits']
        : ['Your own eval set', 'Latency + cost tests', 'Hallucination audits'],
      hint: lang === 'ru' ? 'Решение принимается на данных вашего продукта.' : 'Decisions should be based on your product data.',
      completed: false
    },
    {
      id: 25,
      type: 'sorting' as TaskType,
      question: lang === 'ru'
        ? 'Упорядочите шаги фреймворка выбора модели (Model Selection Framework).'
        : 'Sort the steps of the Model Selection Framework.',
      initialItems: lang === 'ru'
        ? ['Выбор стратегии Fallback', 'Сбор Shortlist', 'Определение KPI', 'Проведение A/B Eval']
        : ['Define Fallback Strategy', 'Build Shortlist', 'Define KPIs', 'Run A/B Evals'],
      correctOrder: lang === 'ru'
        ? ['Определение KPI', 'Сбор Shortlist', 'Проведение A/B Eval', 'Выбор стратегии Fallback']
        : ['Define KPIs', 'Build Shortlist', 'Run A/B Evals', 'Define Fallback Strategy'],
      explanation: lang === 'ru'
        ? 'Верно! Сначала мы понимаем, что измеряем (KPI), затем выбираем кандидатов, тестируем их и настраиваем резервные варианты.'
        : 'Correct! First, we understand what we measure (KPIs), then select candidates, test them, and set up fallback options.',
      completed: false
    },
  ]);

  const markCompleted = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: true } : t));
    persistCompleted(id);
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
      {/* Контентная область */}
      <div className="min-w-0">
        <div className="max-w-[920px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
          <Link href={`/${lang}/rooms`} className="hover:text-neutral-300 transition-colors">
            {lang === 'ru' ? 'Комнаты' : 'Rooms'}
          </Link>
          <ChevronRight size={14} />
          <Link href={`/${lang}/paths/beginner`} className="hover:text-neutral-300 transition-colors">
            {lang === 'ru' ? 'Основы' : 'Foundations'}
          </Link>
          <ChevronRight size={14} />
          <span className="text-emerald-500 font-medium">{lang === 'ru' ? 'Ландшафт LLM' : 'LLM Landscape'}</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">{lang === 'ru' ? 'Ландшафт LLM' : 'LLM Landscape'}</h1>
        <div className="flex items-center gap-6 mb-8 text-sm text-neutral-400">
          <span className="flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded text-xs uppercase border border-emerald-500/20">
            {lang === 'ru' ? 'Новичок' : 'Beginner'}
          </span>
          <span className="flex items-center gap-2">
             <Users size={16} className="text-neutral-500" /> 1.2k {lang === 'ru' ? 'учеников' : 'learners'}
          </span>
          <span className="flex items-center gap-2">
             <Clock size={16} className="text-neutral-500" /> {lang === 'ru' ? '1 ч' : '1h'}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Info className="text-emerald-500" />
              {lang === 'ru' ? 'Введение' : 'Introduction'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru' 
                ? 'В 2026 году ИИ корректнее рассматривать как слой цифровой инфраструктуры, а не как один класс продуктов. Производительность моделей важна, но итоговая ценность все чаще определяется доступом к вычислениям, стоимостью инференса (сколько стоит обработка запросов пользователя), качеством интеграции и регуляторными ограничениями.'
                : 'In 2026, AI is best analyzed as digital infrastructure rather than a single product category. Model capability still matters, but practical outcomes are increasingly determined by compute access, inference economics, integration quality, and regulatory constraints.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Курс model-agnostic: он не привязан к одной компании-разработчику (вендору). Важно познакомиться с разными моделями, чтобы понимать их преимущества и ограничения при решении конкретных задач, а не ориентироваться только на название бренда.'
                : 'This course is model-agnostic: it is not tied to one provider. It is important to explore different models to understand their strengths and limitations for specific tasks, rather than relying solely on brand names.'}
            </p>
            {lang === 'ru' ? (
              <p className="text-neutral-300 leading-relaxed">
                Рыночная структура стала полицентричной: разные модели доминируют в разных классах задач (код, long-context, мультимодальность, стоимость). Поэтому ключевая компетенция сегодня — системная оценка качества, рисков, стоимости и операционной устойчивости.
              </p>
            ) : (
              <div className="text-neutral-300 leading-relaxed">
                <p>
                  The market is now structurally multi-vendor: different models lead in different workload classes (coding, long-context reasoning, multimodal processing, cost efficiency). The core skill is rigorous evaluation of quality, risk, cost, and operational resilience.
                </p>
              </div>
            )}
            <p className="text-neutral-400 text-sm italic mt-6 border-t border-[#262626] pt-4">
              {lang === 'ru'
                ? 'Но прежде чем мы перейдем к карте этого ландшафта, нам нужно договориться о терминах: что именно мы имеем в виду, когда говорим «модель ИИ»?'
                : 'But before we explore the map of this landscape, we need to agree on terms: what exactly do we mean when we say "AI model"?'}
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Cpu className="text-emerald-500" />
              {lang === 'ru' ? 'Что такое «модель» на самом деле?' : 'What is a "Model" exactly?'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Представьте модель как «цифрового подмастерья». Она не родилась умной; она «училась», просматривая миллиарды страниц текста из интернета. В результате этого обучения получилась не программа с четкими правилами (если А, то Б), а огромный файл с числами — «весами».'
                : 'Think of a model as a "digital apprentice." It wasn\'t born smart; it "learned" by looking at billions of pages of text from the internet. The result of this training isn\'t a program with fixed rules (if A, then B), but a massive file of numbers called "weights."'}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-emerald-400 font-bold mb-2 text-sm uppercase">{lang === 'ru' ? 'Аналогия: Цифровая интуиция' : 'Analogy: Digital Intuition'}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'ru'
                    ? 'Веса — это как «мышечная память» или интуиция. Модель не «знает» факты в обычном смысле, она чувствует паттерны: какие слова чаще всего стоят рядом.'
                    : 'Weights are like "muscle memory" or intuition. The model doesn\'t "know" facts in the usual sense; it senses patterns: which words most likely belong together.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-emerald-400 font-bold mb-2 text-sm uppercase">{lang === 'ru' ? 'Это просто файл' : 'It\'s just a file'}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'ru'
                    ? 'Технически, модель — это статический файл (часто в формате .safetensors). Чтобы он «ожил», нужна видеокарта (GPU), которая прогонит ваш запрос через эти миллиарды чисел.'
                    : 'Technically, a model is a static file (often in .safetensors format). To make it "come alive," you need a GPU to run your query through those billions of numbers.'}
                </p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-emerald-200">
                <span className="font-bold">{lang === 'ru' ? 'Суть:' : 'The Bottom Line:'}</span>{' '}
                {lang === 'ru'
                  ? 'Модель — это застывший результат обучения. Она не меняется сама по себе, когда вы с ней общаетесь. Чтобы она стала лучше, разработчики должны выпустить новую версию файла.'
                  : 'A model is the frozen result of training. It doesn\'t change on its own while you talk to it. To make it better, developers must release a new version of the file.'}
              </p>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? 'Открытые vs закрытые модели: когда что выбирать' : 'Open vs Closed Models: When to Choose Which'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? <>У каждой стратегии есть компромиссы. Закрытые API часто быстрее дают state-of-the-art качество и удобную инфраструктуру. Open-weight модели дают контроль, кастомизацию и возможность <TerminologyTooltip term="on-prem развертывания" definition="On-premise: запуск модели на собственных серверах компании, а не в облаке вендора." />.</>
                : <>Each strategy has tradeoffs. Closed APIs often deliver state-of-the-art quality and easier infrastructure. Open-weight models offer control, customization, and <TerminologyTooltip term="on-prem deployment" definition="On-premise: running the model on your own company servers rather than the vendor's cloud." />.</>}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Закрытые API' : 'Closed APIs'}</h4>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Быстрый старт и меньше DevOps-нагрузки' : 'Fast launch with less DevOps overhead'}</li>
                  <li>{lang === 'ru' ? 'Сильное качество на широком классе задач' : 'Strong quality across broad task classes'}</li>
                  <li>{lang === 'ru' ? 'Ограниченный контроль над данными и настройкой' : 'Limited control over data and internals'}</li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Open-weight модели' : 'Open-weight models'}</h4>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Контроль над приватностью и инфраструктурой' : 'Greater privacy and infrastructure control'}</li>
                  <li>{lang === 'ru' ? 'Возможность дообучения/тонкой настройки' : 'Fine-tuning and adaptation flexibility'}</li>
                  <li>{lang === 'ru' ? 'Нужны ресурсы на поддержку и оптимизацию' : 'Requires resources for optimization and maintenance'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BookOpen className="text-emerald-500" />
              {lang === 'ru' ? 'Open-Weight экосистема: Владение и Контроль' : 'The Open-Weight Ecosystem: Ownership and Control'}
            </h2>
            
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Представьте разницу между заказом еды в ресторане (API) и наличием полного рецепта и кухни (Open-weight). В первом случае вам не нужно мыть посуду, но вы не можете изменить ингредиенты. Во втором — вы полностью контролируете процесс.'
                : 'Think of the difference between ordering food at a restaurant (API) and having the full recipe and your own kitchen (Open-weight). In the first case, you don\'t have to wash dishes, but you can\'t change the ingredients. In the second, you have total control over the process.'}
            </p>

            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-amber-200">
                <span className="font-bold">{lang === 'ru' ? 'Важный нюанс:' : 'Important distinction:'}</span>{' '}
                {lang === 'ru'
                  ? 'Мы говорим "open-weight", а не "open-source", потому что компании часто делятся финальными весами модели, но не обучающими данными или кодом обучения. Это "открытые веса", которые можно запустить на своем железе.'
                  : 'We say "open-weight" rather than "open-source" because companies often share the final model weights but not the training data or the training code. They are "open weights" you can run on your own hardware.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Приватность' : 'Privacy'}</h4>
                <p className="text-xs text-neutral-500">
                  {lang === 'ru' ? 'Данные никогда не покидают ваш сервер. Идеально для медицины, юристов и госсектора.' : 'Data never leaves your server. Ideal for healthcare, legal, and government sectors.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Независимость' : 'Independence'}</h4>
                <p className="text-[11px] text-neutral-400 leading-tight mb-2">
                  {lang === 'ru' 
                    ? 'API — это ресторан: если он закроется, вы потеряете доступ. Цены и политики могут измениться в любой момент.' 
                    : 'API is a restaurant: if it closes, you lose access. Access, pricing, and policies can change at any time.'}
                </p>
                <p className="text-[11px] text-emerald-500/80 leading-tight">
                  {lang === 'ru' 
                    ? 'Open-weight — это ваша кухня: никто не отзовет доступ. Вы полностью контролируете модель и владеете процессом.' 
                    : 'Open-weight is your kitchen: no one can revoke access. You run the model under your own control.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Тонкая настройка' : 'Fine-tuning'}</h4>
                <p className="text-[11px] text-neutral-400 leading-tight mb-2">
                  {lang === 'ru'
                    ? 'API — это просьба «поменьше соли». Open-weight — это переработка всего блюда под свою нишу.'
                    : 'API is asking for "less salt." Open-weight is redesigning the entire dish for your niche domain.'}
                </p>
                <p className="text-[11px] text-emerald-500/80 leading-tight">
                  {lang === 'ru'
                    ? 'Вы не просто заказываете — вы готовите: дообучайте модель на своих данных и меняйте её поведение глубже, чем промптами.'
                    : 'You are not just ordering — you are cooking: fine-tune on your data and modify behavior deeper than prompt engineering.'}
                </p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Главные игроки открытого мира:'
                : 'Leading players in the open world:'}
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Llama (Meta)</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— фактический стандарт индустрии. Огромное сообщество и поддержка любого железа.' : '— the de facto industry standard. Huge community and support for any hardware.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Mistral / Mixtral</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— европейские чемпионы. Популяризировали технологию MoE (смесь экспертов) для высокой скорости.' : '— European champions. Popularized MoE (Mixture of Experts) for high speed.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Qwen (Alibaba)</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— мощные модели из Китая, часто лидирующие в тестах на кодинг и математику.' : '— powerful models from China, often leading in coding and math benchmarks.'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <Globe className="text-emerald-500" />
              {lang === 'ru' ? 'Геополитика ИИ и технологический суверенитет' : 'AI Geopolitics and Technological Sovereignty'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru' 
                ? 'Геополитика ИИ определяется концентрацией вычислений, уязвимостями полупроводниковых цепочек, экспортными ограничениями и зависимостью от гиперскейлеров. В результате выбор модели превращается в инфраструктурное решение с правовыми и операционными последствиями.'
                : 'AI geopolitics is shaped by compute concentration, semiconductor supply-chain fragility, export-control regimes, and hyperscaler dependency. As a result, model choice becomes an infrastructure decision with legal and operational consequences.'}
            </p>
            <p className="text-xs text-neutral-500 mb-4">
              {lang === 'ru' ? 'Термины:' : 'Terms:'}{' '}
              <TerminologyTooltip 
                term="hyperscalers" 
                definition={lang === 'ru' ? 'Гиперскейлеры: крупнейшие облачные провайдеры с глобальной инфраструктурой (AWS, Azure, Google Cloud).' : 'Hyperscalers: the largest cloud providers with global-scale infrastructure (AWS, Azure, Google Cloud).'} 
              />
              {' · '}
              <TerminologyTooltip 
                term="export controls" 
                definition={lang === 'ru' ? 'Export controls: государственные ограничения на экспорт критических технологий (например, продвинутых AI-чипов).' : 'Export controls: government restrictions on exporting critical technologies (for example, advanced AI chips).'} 
              />
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-neutral-600 bg-white/5 p-4 rounded-r-lg">
                <h4 className="font-bold text-neutral-300 mb-1">
                  {lang === 'ru' ? 'США: масштаб вычислений и продуктовые платформы' : 'United States: Compute Scale and Product Platforms'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Преимущества: доступ к frontier-вычислениям, сильные облачные платформы и зрелая продуктовая дистрибуция. Риски: высокая концентрация рынка и рост инфраструктурной стоимости.'
                    : 'Advantages include frontier-scale compute, strong cloud platforms, and mature distribution. Risks include market concentration and rising infrastructure cost.'}
                </p>
              </div>

              <div className="border-l-4 border-neutral-600 bg-white/5 p-4 rounded-r-lg">
                <h4 className="font-bold text-neutral-300 mb-1">
                  {lang === 'ru' ? 'Китай: эффективность и масштабирование' : 'China: Efficiency and Scale-Up'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Фокус: эффективность моделей, стоимость инференса и массовое внедрение. Ограничение: доступ к передовым чипам под экспортным контролем.'
                    : 'The emphasis is on model efficiency, inference economics, and high-scale deployment. Constraint: restricted access to leading-edge chips under export controls.'}
                </p>
              </div>

              <div className="border-l-4 border-neutral-600 bg-white/5 p-4 rounded-r-lg">
                <h4 className="font-bold text-neutral-300 mb-1">
                  {lang === 'ru' ? 'Европа: регулирование, открытость и соответствие' : 'Europe: Regulation, Openness, and Compliance'}
                </h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Сильная сторона: стандарты комплаенса, прозрачность и open-weight направления. Ограничения: более фрагментированный капитал (финансирование распределено между многими рынками и игроками, без единого масштабного центра) и меньший hyperscale-ресурс.'
                    : 'Strengths include compliance standards, transparency, and open-weight strategies. Constraints include fragmented capital (funding spread across many markets and actors rather than one large concentrated pool) and lower hyperscale capacity.'}
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-neutral-600 bg-white/5 p-4 rounded-r-lg">
              <p className="text-sm text-neutral-300 font-medium mb-2">
                {lang === 'ru' ? 'Формальное определение: Sovereign AI' : 'Formal Definition: Sovereign AI'}
              </p>
              <p className="text-sm text-neutral-400">
                {lang === 'ru'
                  ? 'Sovereign AI — это способность организации или государства обеспечивать локально управляемый жизненный цикл ИИ: размещение, доступ к вычислениям, контроль критичных данных, аудитируемое управление и соответствие локальным правовым нормам.'
                  : 'Sovereign AI is the capability of an organization or state to maintain a locally governed AI lifecycle: deployment control, compute access, critical-data control, auditable governance, and alignment with local legal requirements.'}
              </p>
            </div>

            <div className="mt-6 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Enterprise-чеклист инфраструктурного выбора' : 'Enterprise Infrastructure Selection Checklist'}
              </h4>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>{lang === 'ru' ? '1. Классифицируйте workload: требования к качеству, latency, доступности и масштабу.' : '1. Classify workloads by quality, latency, availability, and scale requirements.'}</li>
                <li>{lang === 'ru' ? '2. Зафиксируйте регуляторный контур: data residency, комплаенс, аудируемость, retention.' : '2. Define regulatory boundaries: data residency, compliance, auditability, and retention.'}</li>
                <li>{lang === 'ru' ? '3. Выберите topology: hosted API, VPC, hybrid, on-prem, air-gapped.' : '3. Select deployment topology: hosted API, VPC, hybrid, on-prem, or air-gapped.'}</li>
                <li>{lang === 'ru' ? '4. Оцените TCO: стоимость токенов, инфраструктура, engineering overhead, vendor lock-in risk.' : '4. Evaluate TCO: token cost, infrastructure spend, engineering overhead, and lock-in risk.'}</li>
                <li>{lang === 'ru' ? '5. Спроектируйте устойчивость: primary/fallback routing, SLO, rollback и incident-процедуры.' : '5. Design resilience: primary/fallback routing, SLOs, rollback, and incident procedures.'}</li>
              </ul>
            </div>

            <div className="mt-6 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Ключевые геополитические узлы' : 'Core Geopolitical Battlegrounds'}
              </h4>
              <div className="text-sm text-neutral-400 space-y-2">
                <p>
                  <span className="text-neutral-300 font-medium">{lang === 'ru' ? '1. Compute Infrastructure:' : '1. Compute Infrastructure:'}</span>{' '}
                  {lang === 'ru'
                    ? 'доступ к передовым GPU, дата-центрам и энергии определяет скорость развития моделей.'
                    : 'access to advanced GPUs, data centers, and power capacity determines model development velocity.'}
                </p>
                <p>
                  <span className="text-neutral-300 font-medium">{lang === 'ru' ? '2. Semiconductor Supply Chains:' : '2. Semiconductor Supply Chains:'}</span>{' '}
                  {lang === 'ru'
                    ? 'узкие места включают фабрикацию, литографию, HBM и design IP. Для EUV-литографии ключевой зависимостью остается ASML.'
                    : 'critical choke points include fabrication, lithography, HBM, and design IP. In EUV lithography, ASML remains a central dependency.'}
                </p>
                <p>
                  <span className="text-neutral-300 font-medium">{lang === 'ru' ? '3. Data Sovereignty:' : '3. Data Sovereignty:'}</span>{' '}
                  {lang === 'ru'
                    ? 'локализация и ограничения трансграничных потоков данных влияют на архитектуру AI-продуктов.'
                    : 'localization and cross-border data restrictions shape AI product architecture.'}
                </p>
                <p>
                  <span className="text-neutral-300 font-medium">{lang === 'ru' ? '4. Model Sovereignty:' : '4. Model Sovereignty:'}</span>{' '}
                  {lang === 'ru'
                    ? 'вопрос не только в качестве модели, но и в возможности локально запускать, настраивать и аудировать систему.'
                    : 'the issue is not only model quality, but also the ability to run, tune, and audit systems locally.'}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Стратегические сдвиги 2026: за чем важно следить' : 'Strategic Shifts for 2026: What Actually Matters'}
              </h4>
              <ol className="list-decimal pl-5 text-sm text-neutral-400 space-y-1">
                <li>
                  {lang === 'ru'
                    ? 'Формирование AI-блоков: экосистемы постепенно расходятся по стандартам, регулированию и инфраструктурным альянсам.'
                    : 'AI-bloc formation: ecosystems are diverging by standards, regulation, and infrastructure alliances.'}
                </li>
                <li>
                  {lang === 'ru'
                    ? 'Compute nationalism: страны субсидируют локальные чипы и дата-центры, чтобы снизить внешнюю технологическую зависимость.'
                    : 'Compute nationalism: governments are subsidizing domestic chips and data centers to reduce external dependency.'}
                </li>
                <li>
                  {lang === 'ru'
                    ? 'Концентрация frontier-слоя: самые мощные модели остаются у ограниченного числа лабораторий с доступом к крупному compute.'
                    : 'Frontier concentration: highest-end models remain controlled by a small set of labs with large compute access.'}
                </li>
                <li>
                  {lang === 'ru'
                    ? 'Ускорение middle powers: Индия, ОАЭ и Саудовская Аравия строят собственные AI-стратегии через инфраструктуру и партнерства.'
                    : 'Middle-power acceleration: India, UAE, and Saudi Arabia are building independent AI capacity via infrastructure and partnerships.'}
                </li>
                <li>
                  {lang === 'ru'
                    ? 'Open-weight как рычаг переговорной позиции: компании используют открытые модели для контроля TCO, скорости итераций и vendor risk.'
                    : 'Open-weight as leverage: teams use open models to control TCO, iteration speed, and vendor risk.'}
                </li>
              </ol>
            </div>

            <div className="mt-6 text-xs text-neutral-500">
              <p className="mb-1">{lang === 'ru' ? 'Справочные ссылки:' : 'Reference links:'}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a className="hover:text-neutral-300 transition-colors" href="https://www.nvidia.com" target="_blank" rel="noreferrer">NVIDIA</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://aws.amazon.com" target="_blank" rel="noreferrer">AWS</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://azure.microsoft.com" target="_blank" rel="noreferrer">Azure</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://cloud.google.com" target="_blank" rel="noreferrer">Google Cloud</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://openai.com" target="_blank" rel="noreferrer">OpenAI</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://deepmind.google" target="_blank" rel="noreferrer">DeepMind</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://www.anthropic.com" target="_blank" rel="noreferrer">Anthropic</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://www.congress.gov/bill/117th-congress/house-bill/4346" target="_blank" rel="noreferrer">CHIPS Act</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://www.tsmc.com" target="_blank" rel="noreferrer">TSMC</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://www.asml.com" target="_blank" rel="noreferrer">ASML</a>
                <a className="hover:text-neutral-300 transition-colors" href="https://artificialintelligenceact.eu" target="_blank" rel="noreferrer">EU AI Act</a>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BookOpen className="text-emerald-500" />
              {lang === 'ru' ? 'Битва за лидерство: Понимание ELO' : 'The Leaderboard Wars: Understanding ELO'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Как мы узнаем, какая модель действительно "самая умная"? Чтобы решить эту проблему, индустрия приняла систему рейтинга ELO.'
                : 'How do we know which model is truly the "smartest"? To solve this problem, the industry adopted the ELO rating system.'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-emerald-400 font-bold mb-2 text-sm uppercase">{lang === 'ru' ? 'Истоки в шахматах' : 'Origins in Chess'}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'ru'
                    ? 'Разработанная Арпадом Эло, эта система изначально предназначалась для ранжирования шахматистов.'
                    : 'Developed by Arpad Elo, this system was originally designed to rank chess players.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-emerald-400 font-bold mb-2 text-sm uppercase">Chatbot Arena</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'ru'
                    ? 'В ИИ такие проекты, как LMSYS Chatbot Arena, используют "слепое A/B тестирование".'
                    : 'In AI, projects like LMSYS Chatbot Arena use "blind A/B testing."'}
                </p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-lg">
              <p className="text-sm text-emerald-200">
                {lang === 'ru'
                  ? 'Практический вывод: ELO полезен как ориентир, но нельзя выбирать модель только по одной таблице. Для продакшена важны еще латентность, стоимость, устойчивость и безопасность.'
                  : 'Practical takeaway: ELO is a useful signal, but you should not select a model by one leaderboard alone. Production decisions also require latency, cost, reliability, and safety.'}
              </p>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? 'Открытые vs закрытые модели: когда что выбирать' : 'Open vs Closed Models: When to Choose Which'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? <>У каждой стратегии есть компромиссы. Закрытые API часто быстрее дают state-of-the-art качество и удобную инфраструктуру. Open-weight модели дают контроль, кастомизацию и возможность <TerminologyTooltip term="on-prem развертывания" definition="On-premise: запуск модели на собственных серверах компании, а не в облаке вендора." />.</>
                : <>Each strategy has tradeoffs. Closed APIs often deliver state-of-the-art quality and easier infrastructure. Open-weight models offer control, customization, and <TerminologyTooltip term="on-prem deployment" definition="On-premise: running the model on your own company servers rather than the vendor's cloud." />.</>}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Закрытые API' : 'Closed APIs'}</h4>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Быстрый старт и меньше DevOps-нагрузки' : 'Fast launch with less DevOps overhead'}</li>
                  <li>{lang === 'ru' ? 'Сильное качество на широком классе задач' : 'Strong quality across broad task classes'}</li>
                  <li>{lang === 'ru' ? 'Ограниченный контроль над данными и настройкой' : 'Limited control over data and internals'}</li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">{lang === 'ru' ? 'Open-weight модели' : 'Open-weight models'}</h4>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Контроль над приватностью и инфраструктурой' : 'Greater privacy and infrastructure control'}</li>
                  <li>{lang === 'ru' ? 'Возможность дообучения/тонкой настройки' : 'Fine-tuning and adaptation flexibility'}</li>
                  <li>{lang === 'ru' ? 'Нужны ресурсы на поддержку и оптимизацию' : 'Requires resources for optimization and maintenance'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
              <BookOpen className="text-emerald-500" />
              {lang === 'ru' ? 'Open-Weight экосистема: Владение и Контроль' : 'The Open-Weight Ecosystem: Ownership and Control'}
            </h2>
            
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Представьте разницу между заказом еды в ресторане (API) и наличием полного рецепта и кухни (Open-weight). В первом случае вам не нужно мыть посуду, но вы не можете изменить ингредиенты. Во втором — вы полностью контролируете процесс.'
                : 'Think of the difference between ordering food at a restaurant (API) and having the full recipe and your own kitchen (Open-weight). In the first case, you don\'t have to wash dishes, but you can\'t change the ingredients. In the second, you have total control over the process.'}
            </p>

            <div className="border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-amber-200">
                <span className="font-bold">{lang === 'ru' ? 'Важный нюанс:' : 'Important distinction:'}</span>{' '}
                {lang === 'ru'
                  ? 'Мы говорим "open-weight", а не "open-source", потому что компании часто делятся финальными весами модели, но не обучающими данными или кодом обучения. Это "открытые веса", которые можно запустить на своем железе.'
                  : 'We say "open-weight" rather than "open-source" because companies often share the final model weights but not the training data or the training code. They are "open weights" you can run on your own hardware.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Приватность' : 'Privacy'}</h4>
                <p className="text-xs text-neutral-500">
                  {lang === 'ru' ? 'Данные никогда не покидают ваш сервер. Идеально для медицины, юристов и госсектора.' : 'Data never leaves your server. Ideal for healthcare, legal, and government sectors.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Независимость' : 'Independence'}</h4>
                <p className="text-[11px] text-neutral-400 leading-tight mb-2">
                  {lang === 'ru' 
                    ? 'API — это ресторан: если он закроется, вы потеряете доступ. Цены и политики могут измениться в любой момент.' 
                    : 'API is a restaurant: if it closes, you lose access. Access, pricing, and policies can change at any time.'}
                </p>
                <p className="text-[11px] text-emerald-500/80 leading-tight">
                  {lang === 'ru' 
                    ? 'Open-weight — это ваша кухня: никто не отзовет доступ. Вы полностью контролируете модель и владеете процессом.' 
                    : 'Open-weight is your kitchen: no one can revoke access. You run the model under your own control.'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626]">
                <h4 className="font-bold text-neutral-200 mb-2 text-xs uppercase">{lang === 'ru' ? 'Тонкая настройка' : 'Fine-tuning'}</h4>
                <p className="text-[11px] text-neutral-400 leading-tight mb-2">
                  {lang === 'ru'
                    ? 'API — это просьба «поменьше соли». Open-weight — это переработка всего блюда под свою нишу.'
                    : 'API is asking for "less salt." Open-weight is redesigning the entire dish for your niche domain.'}
                </p>
                <p className="text-[11px] text-emerald-500/80 leading-tight">
                  {lang === 'ru'
                    ? 'Вы не просто заказываете — вы готовите: дообучайте модель на своих данных и меняйте её поведение глубже, чем промптами.'
                    : 'You are not just ordering — you are cooking: fine-tune on your data and modify behavior deeper than prompt engineering.'}
                </p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Главные игроки открытого мира:'
                : 'Leading players in the open world:'}
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Llama (Meta)</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— фактический стандарт индустрии. Огромное сообщество и поддержка любого железа.' : '— the de facto industry standard. Huge community and support for any hardware.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Mistral / Mixtral</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— европейские чемпионы. Популяризировали технологию MoE (смесь экспертов) для высокой скорости.' : '— European champions. Popularized MoE (Mixture of Experts) for high speed.'}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold font-mono">Qwen (Alibaba)</span>
                <span className="text-sm text-neutral-400">{lang === 'ru' ? '— мощные модели из Китая, часто лидирующие в тестах на кодинг и математику.' : '— powerful models from China, often leading in coding and math benchmarks.'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? 'Фреймворк выбора модели для продукта' : 'A Practical Model Selection Framework'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Используйте короткий цикл: определить KPI -> собрать shortlist -> провести A/B eval -> выбрать стратегию fallback. Это снижает риск "выбора по хайпу".'
                : 'Use a short loop: define KPIs -> build a shortlist -> run A/B evals -> define fallback strategy. This prevents hype-driven decisions.'}
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3">
                <p className="text-xs text-emerald-400 mb-1">1. KPI</p>
                <p className="text-xs text-neutral-400">{lang === 'ru' ? 'Качество, latency, cost, risk' : 'Quality, latency, cost, risk'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3">
                <p className="text-xs text-emerald-400 mb-1">2. Shortlist</p>
                <p className="text-xs text-neutral-400">{lang === 'ru' ? '3-5 моделей разных поставщиков' : '3-5 models from different vendors'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3">
                <p className="text-xs text-emerald-400 mb-1">3. Eval</p>
                <p className="text-xs text-neutral-400">{lang === 'ru' ? 'Слепые тесты на реальных данных' : 'Blind tests on real production prompts'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-3">
                <p className="text-xs text-emerald-400 mb-1">4. Fallback</p>
                <p className="text-xs text-neutral-400">{lang === 'ru' ? 'Primary + резервная модель' : 'Primary + fallback model routing'}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              {lang === 'ru' ? 'Репутация моделей: типичные best-fit сценарии (обзор 2026)' : 'Model Reputation: Typical Best-Fit Use Cases (2026 Overview)'}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-5">
              {lang === 'ru'
                ? 'Это не абсолютный рейтинг. Качество моделей быстро меняется, поэтому финальное решение всегда подтверждайте своими eval-тестами и реальными benchmark-сценариями.'
                : 'This is not an absolute ranking. Model quality shifts quickly, so always validate with your own evals and real-world benchmarks.'}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="font-bold text-neutral-200 mb-2">ChatGPT (OpenAI)</h4>
                <p className="text-xs text-neutral-400 mb-3 leading-relaxed italic border-l-2 border-emerald-500/30 pl-3">
                  {lang === 'ru'
                    ? 'В ранней фазе массового внедрения ChatGPT часто описывали как "original gangster" потребительских LLM: это был первый продукт, который вывел диалоговый интерфейс с большой языковой моделью в мейнстрим.'
                    : 'In the early mass-adoption phase, ChatGPT was often described as the "original gangster" of consumer LLM products: the first interface that made direct LLM interaction mainstream.'}
                </p>
                <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? 'Модели: GPT-4o, GPT-4.1, GPT-4 Turbo' : 'Models: GPT-4o, GPT-4.1, GPT-4 Turbo'}</p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Сильный generalist в разных доменах' : 'Strong generalist across domains'}</li>
                  <li>{lang === 'ru' ? 'Кодинг и copilot-потоки' : 'Coding and copilot workflows'}</li>
                  <li>{lang === 'ru' ? 'Зрелая API/tool экосистема' : 'Mature API/tool ecosystem'}</li>
                </ul>
                <p className="text-xs text-neutral-500 mt-2">{lang === 'ru' ? 'Best-fit: product copilots, conversational agents, multimodal assistants.' : 'Best-fit: product copilots, conversational agents, multimodal assistants.'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="font-bold text-neutral-200 mb-2">Claude (Anthropic)</h4>
                <p className="text-xs text-neutral-400 mb-3 leading-relaxed italic border-l-2 border-emerald-500/30 pl-3">
                  {lang === 'ru'
                    ? 'Claude разработан компанией Anthropic. Это важно помнить при сравнении вендоров и их стратегий безопасности.'
                    : 'Claude is developed by Anthropic. This is an important anchor when comparing vendors and their safety strategies.'}
                </p>
                <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? 'Модели: Claude 3 family (Opus, Sonnet, Haiku)' : 'Models: Claude 3 family (Opus, Sonnet, Haiku)'}</p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Аккуратное long-form письмо' : 'Careful long-form writing'}</li>
                  <li>{lang === 'ru' ? 'Сильная работа с длинным контекстом' : 'Strong long-context behavior'}</li>
                  <li>{lang === 'ru' ? 'Enterprise-ориентированный safety-профиль' : 'Enterprise-aligned safety posture'}</li>
                </ul>
                <p className="text-xs text-neutral-500 mt-2">{lang === 'ru' ? 'Best-fit: policy/legal docs, research summarization.' : 'Best-fit: policy/legal docs, research summarization.'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="font-bold text-neutral-200 mb-2">Gemini (Google)</h4>
                <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? 'Модели: Gemini 1.5 Pro / Flash' : 'Models: Gemini 1.5 Pro / Flash'}</p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Мультимодальные сценарии (image/video/text)' : 'Multimodal scenarios (image/video/text)'}</li>
                  <li>{lang === 'ru' ? 'Длинный контекст в отдельных конфигурациях' : 'Long context in specific configurations'}</li>
                  <li>{lang === 'ru' ? 'Интеграция с Google ecosystem' : 'Google ecosystem integration'}</li>
                </ul>
                <p className="text-xs text-neutral-500 mt-2">{lang === 'ru' ? 'Best-fit: Google-native and multimodal applications.' : 'Best-fit: Google-native and multimodal applications.'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4">
                <h4 className="font-bold text-neutral-200 mb-2">DeepSeek</h4>
                <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? 'Модели: DeepSeek-V2, DeepSeek-Coder' : 'Models: DeepSeek-V2, DeepSeek-Coder'}</p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Cost/performance профиль в coding-задачах' : 'Cost/performance profile in coding tasks'}</li>
                  <li>{lang === 'ru' ? 'Open-weight направление' : 'Open-weight direction'}</li>
                  <li>{lang === 'ru' ? 'Сильный интерес в research experimentation' : 'Strong interest in research experimentation'}</li>
                </ul>
                <p className="text-xs text-neutral-500 mt-2">{lang === 'ru' ? 'Best-fit: cost-sensitive and coding-heavy internal tooling.' : 'Best-fit: cost-sensitive and coding-heavy internal tooling.'}</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 md:col-span-2">
                <h4 className="font-bold text-neutral-200 mb-2">Mistral</h4>
                <p className="text-xs text-neutral-500 mb-2">{lang === 'ru' ? 'Модели: Mistral Large, Mixtral, Mistral 7B' : 'Models: Mistral Large, Mixtral, Mistral 7B'}</p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>{lang === 'ru' ? 'Сильный open-weight ecosystem' : 'Strong open-weight ecosystem'}</li>
                  <li>{lang === 'ru' ? 'EU positioning и data-sovereignty use cases' : 'EU positioning and data-sovereignty use cases'}</li>
                  <li>{lang === 'ru' ? 'On-prem / air-gapped deployment сценарии' : 'On-prem / air-gapped deployment scenarios'}</li>
                </ul>
                <p className="text-xs text-neutral-500 mt-2">{lang === 'ru' ? 'Best-fit: EU enterprise, custom LLM stacks, open-model infra.' : 'Best-fit: EU enterprise, custom LLM stacks, open-model infra.'}</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Дополнение по open-weight экосистеме' : 'Open-Weight Ecosystem Note'}
              </h4>
              <p className="text-sm text-neutral-400">
                {lang === 'ru'
                  ? 'В этом уроке под open-weight семействами мы подразумеваем прежде всего Llama, Mistral и Qwen. В более широком non-US наборе часто также встречаются Yi (Китай) и Jamba (Израиль).'
                  : 'In this lesson, open-weight families primarily refer to Llama, Mistral, and Qwen. In the broader non-US set, Yi (China) and Jamba (Israel) are also frequently referenced.'}
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Cross-model benchmark источники' : 'Cross-Model Benchmark Sources'}
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                <a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="https://chat.lmsys.org/?leaderboard" target="_blank" rel="noreferrer">LMSYS Arena</a>
                <a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="https://artificialanalysis.ai/" target="_blank" rel="noreferrer">Artificial Analysis</a>
                <a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="https://crfm.stanford.edu/helm/latest/" target="_blank" rel="noreferrer">HELM</a>
                <a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard" target="_blank" rel="noreferrer">HF Open LLM Leaderboard</a>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                {lang === 'ru' ? 'Рыночный паттерн 2026 (рабочее наблюдение)' : '2026 Market Pattern (Working Observation)'}
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-neutral-400">
                <p><span className="text-neutral-300">Best Generalist:</span> OpenAI</p>
                <p><span className="text-neutral-300">{lang === 'ru' ? 'Long-form writing:' : 'Long-form writing:'}</span> Claude</p>
                <p><span className="text-neutral-300">{lang === 'ru' ? 'Multimodal / Google-native:' : 'Multimodal / Google-native:'}</span> Gemini</p>
                <p><span className="text-neutral-300">{lang === 'ru' ? 'Cost/Performance:' : 'Cost/Performance:'}</span> DeepSeek</p>
                <p className="md:col-span-2"><span className="text-neutral-300">{lang === 'ru' ? 'EU + On-prem + Open-weight:' : 'EU + On-prem + Open-weight:'}</span> Mistral</p>
              </div>
            </div>

            <div className="border-l-4 border-neutral-600 bg-white/5 p-4 rounded-r-lg text-sm text-neutral-400">
              <p className="mb-2">{lang === 'ru' ? 'Важно: репутация моделей меняется быстро из-за частых релизов, fine-tuning обновлений, контекстных улучшений, tool-use апдейтов и изменений цены.' : 'Important: model reputation shifts quickly due to frequent releases, fine-tuning improvements, context upgrades, tool-use updates, and pricing changes.'}</p>
              <p>{lang === 'ru' ? 'Перед выбором провайдера обязательно запускайте: свой eval-набор, domain-specific benchmarks, latency/cost тесты и hallucination audits.' : 'Before committing to a provider, always run your own eval set, domain-specific benchmarks, latency/cost tests, and hallucination audits.'}</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Боковая панель заданий */}
      <aside className="w-[320px] sticky top-[100px] self-start border-l border-[#282828] pl-5 flex flex-col gap-4">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 overflow-y-auto max-h-[calc(100vh-280px)]">
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
                  initialItems={(task as any).initialItems}
                  correctOrder={(task as any).correctOrder}
                  explanation={(task as any).explanation}
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
                  explanation={(task as any).explanation}
                  type={task.type}
                  onSuccess={markCompleted}
                  initialCompleted={completedIds.has(task.id)}
                />
              )
            ))}
          </div>
        </div>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 shrink-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{lang === 'ru' ? 'Прогресс' : 'Progress'}</span>
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
      </aside>
    </div>
  );
}

function Users({ size, className }: { size: number, className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}

function Clock({ size, className }: { size: number, className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
