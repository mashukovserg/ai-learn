# Deployment Guide

## Overview

| Layer | Platform | Status |
|-------|----------|--------|
| Frontend | Vercel | Live — `ai-learning-platform-murex.vercel.app` |
| Backend | Railway | Deploy using this guide |
| Database | Railway PostgreSQL | Provisioned alongside backend |

Local development uses `npm run dev` (port 3000) + `docker-compose up` (FastAPI on 8000, Postgres on 5432). Production mirrors this split but on cloud services.

---

## What Was Changed to Enable Production Deployment

### `backend/Dockerfile`

Two bugs were fixed:

**Bug 1 — non-existent user in `--chown`:**
```dockerfile
# Before (broken — user "app" was never created in the final image)
COPY --from=uv-builder --chown=app:app /app /app

# After (correct)
COPY --from=uv-builder /app /app
```

**Bug 2 — dev server in production:**
```dockerfile
# Before — ran uvicorn with reload=True (development mode)
CMD ["python", "-m", "app.main"]

# After — runs alembic migrations then gunicorn with uvicorn workers
CMD ["sh", "-c", "alembic upgrade head && gunicorn app.main:app -w 2 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:${PORT:-8000}"]
```

The `PORT` env var is injected by Railway automatically. The `${PORT:-8000}` fallback keeps `docker-compose` working locally without changes.

Migrations run automatically on every container start. Alembic is idempotent — it only applies migrations that haven't been applied yet.

### `next.config.ts`

The API rewrite destination was hardcoded, breaking production:
```typescript
// Before — always pointed to localhost
destination: 'http://localhost:8000/:path*'

// After — reads from env var, falls back to localhost for local dev
const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:8000';
destination: `${backendUrl}/:path*`
```

In production, Vercel receives all `/api/*` requests from the browser and proxies them to the Railway backend. The browser never talks to Railway directly — this avoids CORS issues.

---

## Railway Deployment (Backend + Database)

### 1. Push changes
```bash
git add backend/Dockerfile next.config.ts
git commit -m "fix: production Dockerfile + dynamic backend URL"
git push
```

### 2. Create Railway project
1. Go to [railway.app](https://railway.app) → **New Project**
2. **Add PostgreSQL** — "+ New" → Database → PostgreSQL
3. **Add backend service** — "+ New" → GitHub Repo → select this repo
   - Set **Root Directory**: `backend`
   - Railway detects the Dockerfile automatically

### 3. Set environment variables (backend service)

| Variable | Value |
|----------|-------|
| `DATABASE_URI` | From Railway Postgres connect tab — change `postgresql://` prefix to `postgresql+asyncpg://` |
| `JWT_SECRET_KEY` | Run `openssl rand -hex 32` locally and paste the result |
| `CORS_ORIGINS` | `https://ai-learning-platform-murex.vercel.app` |
| `GROQ_API_KEY` | Your Groq API key (for `/labs/prompt-compare` — optional, can add later) |

> **asyncpg prefix**: Railway's DATABASE_URL uses `postgresql://`. The backend requires `postgresql+asyncpg://`. Change the prefix manually in the Railway UI.

### 4. Deploy and verify migrations
Watch deploy logs. You should see:
```
INFO  [alembic.runtime.migration] Running upgrade -> ea8284351669, initial_tables
```
Then gunicorn starts on the Railway-assigned PORT.

Get your Railway URL (e.g. `https://backend-production-xxxx.up.railway.app`) and verify:
```bash
curl https://backend-production-xxxx.up.railway.app/
# → {"status": "OK"}
```

---

## Vercel Configuration (Frontend)

In your Vercel project → **Settings → Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `BACKEND_URL` | `https://backend-production-xxxx.up.railway.app` |

Redeploy the frontend (or push a commit — Vercel picks up env changes on next deploy).

Verify the proxy is working end-to-end:
```bash
curl https://ai-learning-platform-murex.vercel.app/api/
# → {"status": "OK"}
```

---

## Local Development (unchanged)

```bash
# Terminal 1 — Postgres + FastAPI
cd backend
docker-compose up

# Terminal 2 — Next.js
npm run dev
```

`BACKEND_URL` is not set locally, so `next.config.ts` falls back to `http://localhost:8000`. No `.env` changes needed for local dev.

---

## Environment Variables Reference

### Backend (Railway)
| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URI` | Yes | — | PostgreSQL connection string (`postgresql+asyncpg://...`) |
| `JWT_SECRET_KEY` | Yes | `change-me-in-production` | Signs JWT tokens — use a long random string in prod |
| `CORS_ORIGINS` | Yes | `http://localhost:3000` | Comma-separated list of allowed frontend origins |
| `GROQ_API_KEY` | No | `""` | Enables `/labs/prompt-compare` endpoint (Groq API) |

### Frontend (Vercel)
| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `BACKEND_URL` | Yes (prod) | `http://localhost:8000` | Base URL of the Railway backend, no trailing slash |

---

## Architecture: Request Flow in Production

```
Browser
  │
  │  GET /api/me
  ▼
Vercel (Next.js)
  │  rewrite: /api/* → BACKEND_URL/*
  │
  ▼
Railway (FastAPI)
  │  JWT from httpOnly cookie
  ▼
Railway PostgreSQL
```

The browser only ever talks to the Vercel domain. The backend URL is a server-side secret — it never leaks to the client.
