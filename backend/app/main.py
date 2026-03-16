import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth.router import auth_router
from app.api.labs.router import labs_router
from app.api.progress.router import progress_router
from app.api.users.router import users_router
from settings import settings

app = FastAPI()


@app.get('/')
async def status() -> dict[str, str]:
    return {'status': 'OK'}


app.include_router(auth_router, tags=['Authentication'])
app.include_router(users_router, tags=['Users'])
app.include_router(progress_router, tags=['Progress'])
app.include_router(labs_router, tags=['Labs'])

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS.split(','),
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


def main() -> None:
    uvicorn.run('app.main:app', host='0.0.0.0', port=8000, reload=True)  # noqa: S104


if __name__ == '__main__':
    main()
