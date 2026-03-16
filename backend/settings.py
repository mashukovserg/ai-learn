from typing import Literal

from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class GunicornConfig(BaseModel):
    host: str = '0.0.0.0'  # noqa: S104
    port: int = 8000
    workers: int = 1
    timeout: int = 900


class LoggingConfig(BaseModel):
    log_level: Literal['debug', 'info', 'warning', 'error', 'critical'] = 'info'


class Settings(BaseSettings):
    SQLALCHEMY_VERBOSE: bool = Field(default=False)
    DATABASE_URI: str = Field(default='postgresql+asyncpg://postgres:postgres@localhost:5432/ai_learning')
    JWT_SECRET_KEY: str = Field(default='change-me-in-production')
    JWT_ALGORITHM: str = Field(default='HS256')

    CORS_ORIGINS: str = Field(default='http://localhost:3000')
    GROQ_API_KEY: str = Field(default='')

    gunicorn: GunicornConfig = GunicornConfig()
    logging: LoggingConfig = LoggingConfig()

    model_config = SettingsConfigDict(
        env_file='.env',
        extra='ignore',
        env_nested_delimiter='__',
        case_sensitive=False,
        env_ignore_empty=True,
    )


settings = Settings()
