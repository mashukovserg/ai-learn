from dataclasses import dataclass
from datetime import timedelta

from pydantic import BaseModel, EmailStr, Field

from settings import settings


class LoginDTO(BaseModel):
    login: str
    password: str


class SignUpDTO(BaseModel):
    email: EmailStr
    login: str
    password: str


class UserDTO(BaseModel):
    login: str
    email: str


class TokenDTO(BaseModel):
    token: str
    token_type: str = Field(default='bearer')


class JWTPayload(BaseModel):
    sub: str
    exp: int
    iat: int
    login: str
    email: str


class JWTAccessTokenSchema(BaseModel):
    claims: JWTPayload
    key: str = Field(default=settings.JWT_SECRET_KEY)
    algorithm: str = Field(default=settings.JWT_ALGORITHM)


@dataclass(frozen=True)
class CookiesDefaultValues:
    key: str = 'access_token'
    httponly: bool = True
    samesite: str = 'lax'
    secure: bool = False
    max_age: int = int(timedelta(days=30).total_seconds())


class CookiesData(BaseModel):
    key: str = Field(default=CookiesDefaultValues.key)
    value: str
    httponly: bool = Field(default=CookiesDefaultValues.httponly)
    samesite: str = Field(default=CookiesDefaultValues.samesite)
    secure: bool = Field(default=CookiesDefaultValues.secure)
    max_age: int = Field(default=CookiesDefaultValues.max_age)
