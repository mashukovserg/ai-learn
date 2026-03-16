import time

from fastapi import APIRouter, HTTPException
from openai import AsyncOpenAI, APIError, RateLimitError

from settings import settings

from .schemas import SUPPORTED_MODELS, CompareRequest, CompareResponse, ModelResponse

labs_router = APIRouter(prefix='/labs')

_client: AsyncOpenAI | None = None


def _get_client() -> AsyncOpenAI:
    global _client  # noqa: PLW0603
    if _client is None:
        if not settings.GROQ_API_KEY:
            msg = 'GROQ_API_KEY is not configured'
            raise HTTPException(status_code=503, detail=msg)
        _client = AsyncOpenAI(
            api_key=settings.GROQ_API_KEY,
            base_url='https://api.groq.com/openai/v1',
        )
    return _client


async def _call_model(
    client: AsyncOpenAI,
    model: str,
    prompt: str,
    system_prompt: str | None,
) -> ModelResponse:
    messages: list[dict[str, str]] = []
    if system_prompt:
        messages.append({'role': 'system', 'content': system_prompt})
    messages.append({'role': 'user', 'content': prompt})

    start = time.monotonic()
    response = await client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=1024,
        temperature=0.7,
    )
    elapsed_ms = int((time.monotonic() - start) * 1000)

    choice = response.choices[0]
    usage = response.usage

    return ModelResponse(
        model=model,
        content=choice.message.content or '',
        tokens_in=usage.prompt_tokens if usage else 0,
        tokens_out=usage.completion_tokens if usage else 0,
        latency_ms=elapsed_ms,
    )


@labs_router.get('/models')
async def list_models() -> list[str]:
    return SUPPORTED_MODELS


@labs_router.post('/compare', response_model=CompareResponse)
async def compare_models(body: CompareRequest) -> CompareResponse:
    if body.model_a not in SUPPORTED_MODELS:
        raise HTTPException(status_code=400, detail=f'Unsupported model: {body.model_a}')
    if body.model_b not in SUPPORTED_MODELS:
        raise HTTPException(status_code=400, detail=f'Unsupported model: {body.model_b}')

    client = _get_client()

    import asyncio

    try:
        result_a, result_b = await asyncio.gather(
            _call_model(client, body.model_a, body.prompt, body.system_prompt),
            _call_model(client, body.model_b, body.prompt, body.system_prompt),
        )
    except RateLimitError as e:
        raise HTTPException(status_code=429, detail='Groq rate limit exceeded. Please wait a moment and try again.') from e
    except APIError as e:
        raise HTTPException(status_code=502, detail=f'Groq API error: {e.message}') from e

    return CompareResponse(response_a=result_a, response_b=result_b)
