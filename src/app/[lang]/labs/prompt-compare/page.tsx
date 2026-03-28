"use client";

import { use, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Play, Loader2, AlertTriangle, Clock, ArrowRightLeft, Info, ChevronDown } from 'lucide-react';

const MODELS = [
  { id: 'llama-3.3-70b-versatile', label: 'Llama 3.3 70B' },
  { id: 'llama-3.1-8b-instant', label: 'Llama 3.1 8B' },
  { id: 'meta-llama/llama-4-scout-17b-16e-instruct', label: 'Llama 4 Scout 17B' },
  { id: 'qwen/qwen3-32b', label: 'Qwen 3 32B' },
];

type ModelResponse = {
  model: string;
  content: string;
  tokens_in: number;
  tokens_out: number;
  latency_ms: number;
};

type CompareResult = {
  response_a: ModelResponse;
  response_b: ModelResponse;
};

type Status = { kind: 'error' | 'rate-limit'; text: string } | null;

export default function PromptComparePage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = use(props.params);

  const [prompt, setPrompt] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [showSystem, setShowSystem] = useState(false);
  const [modelA, setModelA] = useState(MODELS[0].id);
  const [modelB, setModelB] = useState(MODELS[2].id);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CompareResult | null>(null);
  const [status, setStatus] = useState<Status>(null);

  const canSubmit = prompt.trim().length > 0 && !loading;

  const onCompare = async () => {
    setLoading(true);
    setStatus(null);
    setResult(null);

    try {
      const res = await fetch('/api/labs/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          prompt: prompt.trim(),
          model_a: modelA,
          model_b: modelB,
          system_prompt: showSystem && systemPrompt.trim() ? systemPrompt.trim() : null,
        }),
      });

      if (res.status === 429) {
        setStatus({
          kind: 'rate-limit',
          text: lang === 'ru'
            ? 'Лимит запросов превышен. Подождите 30 секунд и попробуйте снова.'
            : 'Rate limit exceeded. Please wait 30 seconds and try again.',
        });
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.detail || `HTTP ${res.status}`);
      }

      const data: CompareResult = await res.json();
      setResult(data);
    } catch (err) {
      setStatus({
        kind: 'error',
        text: lang === 'ru'
          ? `Ошибка: ${err instanceof Error ? err.message : 'Неизвестная ошибка'}`
          : `Error: ${err instanceof Error ? err.message : 'Unknown error'}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const modelLabel = (id: string) => MODELS.find(m => m.id === id)?.label ?? id;

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
          {lang === 'ru' ? 'Главная' : 'Home'}
        </Link>
        <ChevronRight size={14} />
        <Link href={`/${lang}/labs`} className="hover:text-neutral-300 transition-colors">
          {lang === 'ru' ? 'Лаборатории' : 'Labs'}
        </Link>
        <ChevronRight size={14} />
        <span className="text-neutral-300">{lang === 'ru' ? 'Сравнение промптов' : 'Prompt Compare'}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2 text-neutral-200">
          {lang === 'ru' ? 'Сравнение промптов' : 'Prompt Compare'}
        </h1>
        <p className="text-neutral-500 text-sm">
          {lang === 'ru'
            ? 'Отправьте один промпт двум моделям и сравните ответы бок о бок.'
            : 'Send the same prompt to two models and compare responses side by side.'}
        </p>
      </div>

      {/* How it works — collapsible explainer */}
      <HowItWorks lang={lang} />

      {/* Input section */}
      <div className="bg-input border border-border-subtle rounded-xl p-6 mb-6">
        {/* System prompt toggle */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowSystem(!showSystem)}
            className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            {showSystem
              ? (lang === 'ru' ? '- Скрыть системный промпт' : '- Hide system prompt')
              : (lang === 'ru' ? '+ Добавить системный промпт' : '+ Add system prompt')}
          </button>
          {showSystem && (
            <textarea
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder={lang === 'ru' ? 'Системный промпт (опционально)...' : 'System prompt (optional)...'}
              className="w-full mt-2 bg-base border border-border-subtle rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 resize-none focus:outline-none focus:border-emerald-500/40 transition-colors"
              rows={2}
            />
          )}
        </div>

        {/* Main prompt */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={lang === 'ru' ? 'Введите промпт...' : 'Enter your prompt...'}
          className="w-full bg-base border border-border-subtle rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 resize-none focus:outline-none focus:border-emerald-500/40 transition-colors"
          rows={4}
        />

        {/* Model selectors + button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-medium w-6">A:</span>
            <select
              value={modelA}
              onChange={(e) => setModelA(e.target.value)}
              className="bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-neutral-200"
            >
              {MODELS.map(m => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>

          <ArrowRightLeft size={14} className="text-neutral-600 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-medium w-6">B:</span>
            <select
              value={modelB}
              onChange={(e) => setModelB(e.target.value)}
              className="bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-neutral-200"
            >
              {MODELS.map(m => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={onCompare}
            disabled={!canSubmit}
            className="px-5 py-2 rounded-md text-sm font-semibold bg-emerald-300 text-emerald-950 hover:bg-emerald-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 sm:ml-auto"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                {lang === 'ru' ? 'Генерация...' : 'Generating...'}
              </>
            ) : (
              <>
                <Play size={14} />
                {lang === 'ru' ? 'Сравнить' : 'Compare'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Status messages */}
      {status && (
        <div
          className={`mb-6 text-sm rounded-md px-4 py-3 border flex items-start gap-2 ${
            status.kind === 'rate-limit'
              ? 'bg-amber-500/10 border-amber-500/25 text-amber-300'
              : 'bg-red-500/10 border-red-500/25 text-red-300'
          }`}
        >
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          {status.text}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResponsePanel label={`A: ${modelLabel(result.response_a.model)}`} response={result.response_a} lang={lang} />
          <ResponsePanel label={`B: ${modelLabel(result.response_b.model)}`} response={result.response_b} lang={lang} />
        </div>
      )}

      {/* Loading skeleton */}
      {loading && !result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkeletonPanel />
          <SkeletonPanel />
        </div>
      )}
    </div>
  );
}

function HowItWorks({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

  const ru = (
    <>
      <p className="mb-3">
        Когда вы нажимаете <strong>«Сравнить»</strong>, вот что происходит под капотом:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-neutral-400">
        <li>
          <strong className="text-neutral-300">Браузер → наш сервер.</strong>{' '}
          Ваш промпт, системный промпт и выбранные модели отправляются POST-запросом на наш FastAPI-бэкенд через прокси Next.js (<code className="text-xs bg-base px-1.5 py-0.5 rounded">/api/labs/compare</code>).
        </li>
        <li>
          <strong className="text-neutral-300">Параллельные запросы к Groq.</strong>{' '}
          Бэкенд одновременно отправляет два запроса к Groq Cloud API — одинаковый промпт для модели A и модели B. Groq использует специализированные чипы (LPU), поэтому ответы приходят за 0.3–2 секунды.
        </li>
        <li>
          <strong className="text-neutral-300">Модели генерируют текст.</strong>{' '}
          Каждая LLM получает ваш промпт в виде токенов и генерирует ответ авторегрессивно — по одному токену за раз, выбирая следующий на основе вероятностного распределения (temperature = 0.7).
        </li>
        <li>
          <strong className="text-neutral-300">Метрики собираются.</strong>{' '}
          Для каждого ответа мы замеряем латентность (время от запроса до полного ответа) и количество токенов (входных + выходных). Это позволяет сравнить не только качество, но и скорость моделей.
        </li>
        <li>
          <strong className="text-neutral-300">Результат → браузер.</strong>{' '}
          Оба ответа возвращаются одним JSON-объектом и отображаются бок о бок. Ваш API-ключ никогда не покидает сервер — браузер не знает ключ Groq.
        </li>
      </ol>
      <div className="mt-4 p-3 bg-base rounded-lg border border-border-card">
        <p className="text-xs text-neutral-500 font-mono">
          Браузер → POST /api/labs/compare → FastAPI → asyncio.gather(groq(A), groq(B)) → JSON → Браузер
        </p>
      </div>
    </>
  );

  const en = (
    <>
      <p className="mb-3">
        When you hit <strong>&quot;Compare&quot;</strong>, here is what happens under the hood:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-neutral-400">
        <li>
          <strong className="text-neutral-300">Browser → our server.</strong>{' '}
          Your prompt, system prompt, and selected models are sent as a POST request to our FastAPI backend via Next.js proxy (<code className="text-xs bg-base px-1.5 py-0.5 rounded">/api/labs/compare</code>).
        </li>
        <li>
          <strong className="text-neutral-300">Parallel requests to Groq.</strong>{' '}
          The backend simultaneously fires two requests to the Groq Cloud API — the same prompt for model A and model B. Groq uses specialized chips (LPU), so responses arrive in 0.3–2 seconds.
        </li>
        <li>
          <strong className="text-neutral-300">Models generate text.</strong>{' '}
          Each LLM receives your prompt as tokens and generates a response autoregressively — one token at a time, picking the next based on a probability distribution (temperature = 0.7).
        </li>
        <li>
          <strong className="text-neutral-300">Metrics are collected.</strong>{' '}
          For each response we measure latency (time from request to full response) and token count (input + output). This lets you compare not just quality but speed across models.
        </li>
        <li>
          <strong className="text-neutral-300">Result → browser.</strong>{' '}
          Both responses come back as a single JSON object and render side by side. Your API key never leaves the server — the browser never sees the Groq key.
        </li>
      </ol>
      <div className="mt-4 p-3 bg-base rounded-lg border border-border-card">
        <p className="text-xs text-neutral-500 font-mono">
          Browser → POST /api/labs/compare → FastAPI → asyncio.gather(groq(A), groq(B)) → JSON → Browser
        </p>
      </div>
    </>
  );

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        <Info size={15} />
        {lang === 'ru' ? 'Как это работает под капотом?' : 'How does this work under the hood?'}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-3 bg-input border border-border-subtle rounded-xl p-6 text-sm text-neutral-300 leading-relaxed">
          {lang === 'ru' ? ru : en}
        </div>
      )}
    </div>
  );
}

function ResponsePanel({ label, response, lang }: { label: string; response: ModelResponse; lang: string }) {
  return (
    <div className="bg-input border border-border-subtle rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-border-subtle flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-200">{label}</span>
        <div className="flex items-center gap-3 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {response.latency_ms} {lang === 'ru' ? 'мс' : 'ms'}
          </span>
          <span>{response.tokens_in + response.tokens_out} tok</span>
        </div>
      </div>
      <div className="px-5 py-4">
        <pre className="text-sm text-neutral-300 whitespace-pre-wrap font-sans leading-relaxed">
          {response.content}
        </pre>
      </div>
    </div>
  );
}

function SkeletonPanel() {
  return (
    <div className="bg-input border border-border-subtle rounded-xl overflow-hidden animate-pulse">
      <div className="px-5 py-3 border-b border-border-subtle">
        <div className="h-4 w-32 bg-muted rounded" />
      </div>
      <div className="px-5 py-4 space-y-3">
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-5/6 bg-muted rounded" />
        <div className="h-3 w-4/6 bg-muted rounded" />
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-3/6 bg-muted rounded" />
      </div>
    </div>
  );
}
