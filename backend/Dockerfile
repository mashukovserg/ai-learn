FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv-builder

WORKDIR /app

ENV UV_COMPILE_BYTECODE=1
ENV UV_LINK_MODE=copy
ENV UV_PYTHON_DOWNLOADS=0

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-install-project --no-dev

COPY . /app

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen

FROM python:3.12-slim-bookworm

COPY --from=uv-builder /app /app

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

ENV PATH="/app/.venv/bin:$PATH"

# Run migrations then start with gunicorn + uvicorn workers.
# PORT is injected by Railway (defaults to 8000 for local docker-compose).
CMD ["sh", "-c", "alembic upgrade head && gunicorn app.main:app -w 2 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:${PORT:-8000}"]
