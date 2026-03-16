from pydantic import BaseModel, Field

SUPPORTED_MODELS = [
    'llama-3.3-70b-versatile',
    'llama-3.1-8b-instant',
    'meta-llama/llama-4-scout-17b-16e-instruct',
    'qwen/qwen3-32b',
]


class CompareRequest(BaseModel):
    prompt: str = Field(..., min_length=1, max_length=4000)
    model_a: str = Field(...)
    model_b: str = Field(...)
    system_prompt: str | None = Field(default=None, max_length=2000)


class ModelResponse(BaseModel):
    model: str
    content: str
    tokens_in: int
    tokens_out: int
    latency_ms: int


class CompareResponse(BaseModel):
    response_a: ModelResponse
    response_b: ModelResponse
