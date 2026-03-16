'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import MiniReferenceWindow from '@/components/MiniReferenceWindow';

export default function DeepSearchAgentsTheory({ lang }: { lang: string }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const resetTimerRef = useRef<number | null>(null);

  const templateText = useMemo(() => {
    if (lang === 'ru') {
      return `Роль агента (agent role):
Ты — AI-исследователь, который выполняет deep search (глубокий поиск) и выдает только проверяемые выводы.

Цель задачи (goal):
[Опиши задачу пользователя в 1–2 предложениях]

Ограничения (constraints):
- Время на работу: [например, 25 минут]
- Минимум источников на ключевой факт: 2 независимых источника
- Для каждого ключевого утверждения укажи ссылку и дату публикации
- Если источники конфликтуют, отметь это явно
- Если данных не хватает, не выдумывай, а укажи неопределенность

Процесс глубокого поиска (deep search process):
1) Сформулируй подзапросы и план исследования.
2) Выполни первую волну поиска по подзапросам.
3) Отбери релевантные источники и оцени надежность.
4) Найди и зафиксируй противоречия между источниками.
5) Проведи уточняющий раунд поиска по пробелам.
6) Подготовь финальный синтез только на основе проверенных данных.

Критерии качества (quality checks):
- Ключевые факты подтверждены >= 2 независимыми источниками.
- Все критичные факты имеют ссылку и дату.
- Разделены факты, выводы и предположения.
- Противоречия и ограничения данных обозначены явно.

Формат финального ответа (output format):
1) Краткий вывод (3–5 предложений)
2) Ключевые факты с источниками (пунктами)
3) Блок «Что пока не ясно / неопределенность»
4) Рекомендованные следующие шаги поиска`;
    }

    return `Agent role:
You are an AI researcher that performs deep search and returns only verifiable conclusions.

Goal:
[Describe the user task in 1–2 sentences]

Constraints:
- Time budget: [e.g., 25 minutes]
- Minimum sources per key fact: 2 independent sources
- Include link + publication date for each key claim
- Explicitly flag conflicting sources
- If evidence is insufficient, state uncertainty instead of guessing

Deep search process:
1) Define sub-queries and a research plan.
2) Run the first retrieval wave across sub-queries.
3) Select relevant sources and assess reliability.
4) Detect and document source conflicts.
5) Run a gap-closing retrieval wave.
6) Produce final synthesis based only on verified evidence.

Quality checks:
- Key facts are validated by >= 2 independent sources.
- All critical claims include link + date.
- Facts, conclusions, and assumptions are clearly separated.
- Conflicts and evidence limits are explicitly documented.

Final output format:
1) Short conclusion (3–5 sentences)
2) Key facts with citations (bullet list)
3) "What remains uncertain" block
4) Recommended next research steps`;
  }, [lang]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const scheduleReset = () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = window.setTimeout(() => {
      setCopyState('idle');
    }, 1800);
  };

  const fallbackCopy = (text: string): boolean => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      textarea.style.pointerEvents = 'none';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  };

  const handleCopyTemplate = async () => {
    let success = false;

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(templateText);
        success = true;
      } else {
        success = fallbackCopy(templateText);
      }
    } catch {
      success = fallbackCopy(templateText);
    }

    setCopyState(success ? 'copied' : 'error');
    scheduleReset();
  };

  const copyButtonLabel =
    copyState === 'copied'
      ? (lang === 'ru' ? 'Скопировано' : 'Copied')
      : copyState === 'error'
        ? (lang === 'ru' ? 'Не удалось' : 'Failed')
        : (lang === 'ru' ? 'Скопировать шаблон' : 'Copy template');

  return (
    <>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          {lang === 'ru' ? 'Что такое «глубокий поиск» в агенте' : 'What Deep Search Means in an Agent'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Глубокий поиск (deep search) — это режим, где агент не останавливается на первом ответе. Он раскладывает задачу на подзапросы, проходит несколько раундов поиска и собирает проверяемый итог с источниками.'
            : 'Deep search is a mode where the agent does not stop at the first answer. It decomposes the task into sub-queries, runs multiple retrieval rounds, and produces a verifiable final output with sources.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Это следующий уровень после базовой комнаты про агентов: там мы разбираем циклы действий, а здесь учимся делать исследование качественно и прозрачно.'
            : 'It is the next level after the core agents room: there you learn action loops, here you learn how to run research with quality and transparency.'}
        </p>
        <p className="text-neutral-400 leading-relaxed">
          {lang === 'ru' ? (
            <>
              Если нужно освежить базу, вернитесь в{' '}
              <Link href={`/${lang}/rooms/ai-agents`} className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                комнату про AI-агентов
              </Link>{' '}
              и в{' '}
              <Link href={`/${lang}/rooms/research-grounding`} className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                комнату про заземление и источники
              </Link>
              .
            </>
          ) : (
            <>
              If you need a refresher, return to the{' '}
              <Link href={`/${lang}/rooms/ai-agents`} className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                AI Agents room
              </Link>{' '}
              and the{' '}
              <Link href={`/${lang}/rooms/research-grounding`} className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                Research & Grounding room
              </Link>
              .
            </>
          )}
        </p>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          {lang === 'ru' ? 'Базовый цикл глубокого поиска' : 'Core Deep-Search Loop'}
        </h2>
        <ol className="list-decimal ml-5 space-y-3 text-neutral-300 leading-relaxed">
          <li>
            <strong>{lang === 'ru' ? 'Рамка задачи:' : 'Task frame:'}</strong>{' '}
            {lang === 'ru'
              ? 'агент фиксирует цель, ограничения, формат результата и критерии качества.'
              : 'the agent defines goal, constraints, output format, and quality criteria.'}
          </li>
          <li>
            <strong>{lang === 'ru' ? 'План подзапросов:' : 'Sub-query plan:'}</strong>{' '}
            {lang === 'ru'
              ? 'вместо одного запроса агент строит дерево уточняющих вопросов.'
              : 'instead of one query, the agent builds a tree of follow-up questions.'}
          </li>
          <li>
            <strong>{lang === 'ru' ? 'Первая волна поиска:' : 'First retrieval wave:'}</strong>{' '}
            {lang === 'ru'
              ? 'собираются черновые источники по каждому подзапросу.'
              : 'draft sources are collected for each sub-query.'}
          </li>
          <li>
            <strong>{lang === 'ru' ? 'Верификация:' : 'Verification:'}</strong>{' '}
            {lang === 'ru'
              ? 'агент оценивает надёжность источников, даты и противоречия.'
              : 'the agent evaluates source reliability, publication dates, and contradictions.'}
          </li>
          <li>
            <strong>{lang === 'ru' ? 'Уточняющий раунд:' : 'Gap-closing round:'}</strong>{' '}
            {lang === 'ru'
              ? 'дополнительный поиск закрывает слабые места в доказательной базе.'
              : 'additional retrieval closes weak spots in the evidence base.'}
          </li>
          <li>
            <strong>{lang === 'ru' ? 'Финальный синтез:' : 'Final synthesis:'}</strong>{' '}
            {lang === 'ru'
              ? 'ответ собирается со ссылками, уровнем уверенности и блоком неопределённости.'
              : 'the answer is assembled with citations, confidence level, and an uncertainty block.'}
          </li>
        </ol>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          {lang === 'ru' ? 'Задержка (latency) и стоимость в глубоком поиске' : 'Latency and Cost in Deep Search'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Глубокий поиск обычно медленнее обычного чата, потому что внутри одного ответа происходит несколько вызовов поиска и этапов проверки. Latency (задержка) — это общее время от отправки запроса до финального ответа.'
            : 'Deep search is usually slower than normal chat because one final answer contains multiple retrieval calls and verification steps. Latency is the total time from request submission to final response.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Практически полезно измерять P95 latency, чтобы видеть не среднее, а “плохой” хвост задержек. Для продакшен-сценариев также фиксируют стоимость завершённой задачи.'
            : 'In practice, teams measure P95 latency to track the long tail, not only the average. Production setups also track cost per completed task.'}
        </p>
        <MiniReferenceWindow
          title={lang === 'ru' ? 'Endpoint' : 'Endpoint'}
          label={lang === 'ru' ? 'ТЕРМИН' : 'TERM'}
          content={
            lang === 'ru'
              ? 'Endpoint (эндпоинт) — это адрес API, куда агент отправляет запрос к поисковому или LLM-сервису.'
              : 'An endpoint is the API address where the agent sends requests to a search service or LLM service.'
          }
        />
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          {lang === 'ru' ? 'Критерии качества перед публикацией ответа' : 'Quality Gates Before Shipping the Answer'}
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-neutral-300 leading-relaxed">
          <li>
            {lang === 'ru'
              ? 'Каждый ключевой факт подтверждён минимум двумя независимыми источниками.'
              : 'Each key fact is confirmed by at least two independent sources.'}
          </li>
          <li>
            {lang === 'ru'
              ? 'У фактов есть ссылка, дата и понятный контекст.'
              : 'Facts include link, date, and clear context.'}
          </li>
          <li>
            {lang === 'ru'
              ? 'Противоречия не скрываются: агент явно показывает, где источники расходятся.'
              : 'Conflicts are not hidden: the agent explicitly marks where sources disagree.'}
          </li>
          <li>
            {lang === 'ru'
              ? 'В ответе отделены подтверждённые факты от интерпретаций.'
              : 'Confirmed facts are separated from interpretation.'}
          </li>
          <li>
            {lang === 'ru'
              ? 'Указано, что остаётся неопределённым и какие данные ещё нужны.'
              : 'The answer states what remains uncertain and what data is still needed.'}
          </li>
        </ul>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          {lang === 'ru' ? 'Мини-шаблон архитектуры' : 'Mini Architecture Template'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? 'Для минимального жизнеспособного продукта (MVP) достаточно следующей последовательности компонентов:'
            : 'For an MVP, this component sequence is enough:'}
        </p>
        <pre className="bg-[#0f0f0f] border border-[#2b2b2b] rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto">
{lang === 'ru'
  ? `Цель пользователя
  -> Планировщик
  -> Поисковые эндпоинты
  -> Верификатор
  -> Синтезатор с цитированием
  -> Финальный ответ + блок неопределенности`
  : `User goal
  -> Planner
  -> Search endpoints
  -> Verifier
  -> Synthesizer with citations
  -> Final answer + uncertainty block`}
        </pre>
        <button
          type="button"
          onClick={handleCopyTemplate}
          className="mt-3 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
        >
          {copyButtonLabel}
        </button>
        <p className="text-neutral-400 leading-relaxed mt-4">
          {lang === 'ru'
            ? 'Главная идея: сначала дисциплина процесса, потом масштабирование. Без критериев качества глубокий поиск быстро превращается в «длинный, но слабый» ответ.'
            : 'Core idea: process discipline first, scale second. Without quality gates, deep search quickly becomes a “long but weak” answer.'}
        </p>
      </div>
    </>
  );
}
