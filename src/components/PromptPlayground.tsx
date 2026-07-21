"use client";

import { useState } from 'react';
import { Play, Loader2, AlertTriangle, Clock, ChevronDown, ChevronUp, Sparkles, RotateCcw, ArrowRightLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PlaygroundConfig } from '@/data/rooms/playgroundConfigs';

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

interface PromptPlaygroundProps {
  lang: string;
  config: PlaygroundConfig;
}

export default function PromptPlayground({ lang, config }: PromptPlaygroundProps) {
  const [expanded, setExpanded] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [systemPrompt, setSystemPrompt] = useState(
    config.systemPrompt ? config.systemPrompt[lang as 'en' | 'ru'] : ''
  );
  const [showSystem, setShowSystem] = useState(!!config.systemPrompt);
  const [modelA, setModelA] = useState(MODELS[0].id);
  const [modelB, setModelB] = useState(MODELS[2].id);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CompareResult | null>(null);
  const [status, setStatus] = useState<Status>(null);

  const isRu = lang === 'ru';
  const canSubmit = prompt.trim().length > 0 && !loading;

  const modelLabel = (id: string) => MODELS.find(m => m.id === id)?.label ?? id;

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
          text: isRu
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
        text: isRu
          ? `Ошибка: ${err instanceof Error ? err.message : 'Неизвестная ошибка'}`
          : `Error: ${err instanceof Error ? err.message : 'Unknown error'}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const applySuggestion = (promptText: string) => {
    setPrompt(promptText);
  };

  const reset = () => {
    setPrompt('');
    setResult(null);
    setStatus(null);
  };

  return (
    <div className="mt-10 mb-8">
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 group"
      >
        <div className="flex items-center gap-2 text-accent-400">
          <Sparkles size={20} />
          <h2 className="text-lg font-bold">
            Prompt Playground
          </h2>
        </div>
        <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
          {isRu
            ? 'Сравни ответы двух LLM на один промпт'
            : 'Compare two LLM responses to the same prompt'}
        </span>
        <div className="ml-auto text-neutral-500 group-hover:text-neutral-300 transition-colors">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 bg-input border border-border-subtle rounded-xl p-5">
              {/* Suggested prompts */}
              {config.suggestions.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
                    {isRu ? 'Попробуй:' : 'Try:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {config.suggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => applySuggestion(s.prompt[lang as 'en' | 'ru'])}
                        className="text-xs px-3 py-1.5 rounded-full border border-accent-500/25 text-accent-400 hover:bg-accent-500/10 hover:border-accent-500/40 transition-colors"
                      >
                        {s.label[lang as 'en' | 'ru']}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* System prompt toggle */}
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => setShowSystem(!showSystem)}
                  className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showSystem
                    ? (isRu ? '− Скрыть системный промпт' : '− Hide system prompt')
                    : (isRu ? '+ Системный промпт' : '+ System prompt')}
                </button>
                {showSystem && (
                  <textarea
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    placeholder={isRu ? 'Системный промпт...' : 'System prompt...'}
                    className="w-full mt-2 bg-base border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 resize-none focus:outline-none focus:border-accent-500/40 transition-colors"
                    rows={2}
                  />
                )}
              </div>

              {/* Main prompt */}
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={isRu ? 'Введите промпт...' : 'Enter your prompt...'}
                className="w-full bg-base border border-border-subtle rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 resize-none focus:outline-none focus:border-accent-500/40 transition-colors"
                rows={3}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && canSubmit) {
                    onCompare();
                  }
                }}
              />

              {/* Controls row: two model selectors + compare button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-medium w-5">A:</span>
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
                  <span className="text-xs text-neutral-500 font-medium w-5">B:</span>
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

                <div className="flex items-center gap-2 sm:ml-auto">
                  {(result || prompt) && (
                    <button
                      type="button"
                      onClick={reset}
                      className="p-2 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-colors"
                      title={isRu ? 'Сбросить' : 'Reset'}
                    >
                      <RotateCcw size={14} />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={onCompare}
                    disabled={!canSubmit}
                    className="px-4 py-2 rounded-md text-sm font-semibold bg-accent-300 text-accent-950 hover:bg-accent-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        {isRu ? 'Генерация...' : 'Generating...'}
                      </>
                    ) : (
                      <>
                        <Play size={14} />
                        {isRu ? 'Сравнить' : 'Compare'}
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-neutral-600 mt-2">
                {isRu ? '⌘+Enter для отправки • Groq Cloud API • бесплатно' : '⌘+Enter to send • Groq Cloud API • free'}
              </p>

              {/* Status messages */}
              {status && (
                <div
                  className={`mt-4 text-sm rounded-md px-4 py-3 border flex items-start gap-2 ${
                    status.kind === 'rate-limit'
                      ? 'bg-amber-500/10 border-amber-500/25 text-amber-300'
                      : 'bg-red-500/10 border-red-500/25 text-red-300'
                  }`}
                >
                  <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                  {status.text}
                </div>
              )}

              {/* Loading skeleton — two panels */}
              {loading && !result && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <SkeletonPanel />
                  <SkeletonPanel />
                </div>
              )}

              {/* Results — two panels side by side */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <ResponsePanel label={`A: ${modelLabel(result.response_a.model)}`} response={result.response_a} lang={lang} />
                  <ResponsePanel label={`B: ${modelLabel(result.response_b.model)}`} response={result.response_b} lang={lang} />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResponsePanel({ label, response, lang }: { label: string; response: ModelResponse; lang: string }) {
  const isRu = lang === 'ru';
  return (
    <div className="bg-base border border-border-subtle rounded-lg overflow-hidden">
      <div className="px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-300">{label}</span>
        <div className="flex items-center gap-3 text-[11px] text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {response.latency_ms} {isRu ? 'мс' : 'ms'}
          </span>
          <span>{response.tokens_in + response.tokens_out} tok</span>
        </div>
      </div>
      <div className="px-4 py-3 max-h-[400px] overflow-y-auto">
        <pre className="text-sm text-neutral-300 whitespace-pre-wrap font-sans leading-relaxed">
          {response.content}
        </pre>
      </div>
    </div>
  );
}

function SkeletonPanel() {
  return (
    <div className="bg-base border border-border-subtle rounded-lg overflow-hidden animate-pulse">
      <div className="px-4 py-2.5 border-b border-border-subtle">
        <div className="h-3.5 w-28 bg-muted rounded" />
      </div>
      <div className="px-4 py-3 space-y-2.5">
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-5/6 bg-muted rounded" />
        <div className="h-3 w-4/6 bg-muted rounded" />
        <div className="h-3 w-full bg-muted rounded" />
        <div className="h-3 w-3/6 bg-muted rounded" />
      </div>
    </div>
  );
}
