import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_MODELS = [
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
  'meta-llama/llama-4-scout-17b-16e-instruct',
  'qwen/qwen3-32b',
];

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

type ModelResponse = {
  model: string;
  content: string;
  tokens_in: number;
  tokens_out: number;
  latency_ms: number;
};

async function callModel(
  apiKey: string,
  model: string,
  prompt: string,
  systemPrompt: string | null,
): Promise<ModelResponse> {
  const messages: { role: string; content: string }[] = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }
  messages.push({ role: 'user', content: prompt });

  const start = Date.now();
  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: 1024,
      temperature: 0.7,
    }),
  });

  if (res.status === 429) {
    throw new Error('RATE_LIMIT');
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Groq API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const elapsed = Date.now() - start;
  const choice = data.choices?.[0];
  const usage = data.usage;

  return {
    model,
    content: choice?.message?.content ?? '',
    tokens_in: usage?.prompt_tokens ?? 0,
    tokens_out: usage?.completion_tokens ?? 0,
    latency_ms: elapsed,
  };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { detail: 'GROQ_API_KEY is not configured' },
      { status: 503 },
    );
  }

  let body: { prompt?: string; model_a?: string; model_b?: string; system_prompt?: string | null };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid JSON' }, { status: 400 });
  }

  const { prompt, model_a, model_b, system_prompt } = body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return NextResponse.json({ detail: 'prompt is required' }, { status: 400 });
  }
  if (prompt.length > 4000) {
    return NextResponse.json({ detail: 'prompt too long (max 4000)' }, { status: 400 });
  }
  if (!model_a || !SUPPORTED_MODELS.includes(model_a)) {
    return NextResponse.json({ detail: `Unsupported model: ${model_a}` }, { status: 400 });
  }
  if (!model_b || !SUPPORTED_MODELS.includes(model_b)) {
    return NextResponse.json({ detail: `Unsupported model: ${model_b}` }, { status: 400 });
  }

  const sysPrompt = system_prompt && typeof system_prompt === 'string' && system_prompt.trim()
    ? system_prompt.trim().slice(0, 2000)
    : null;

  try {
    const [responseA, responseB] = await Promise.all([
      callModel(apiKey, model_a, prompt.trim(), sysPrompt),
      callModel(apiKey, model_b, prompt.trim(), sysPrompt),
    ]);

    return NextResponse.json({ response_a: responseA, response_b: responseB });
  } catch (err) {
    if (err instanceof Error && err.message === 'RATE_LIMIT') {
      return NextResponse.json(
        { detail: 'Groq rate limit exceeded. Please wait a moment and try again.' },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { detail: err instanceof Error ? err.message : 'Unknown error' },
      { status: 502 },
    );
  }
}
