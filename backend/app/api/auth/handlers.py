from datetime import UTC, datetime

import bcrypt
from fastapi import Response
from jose import jwt
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.auth_session import AuthSessionORM
from app.db.models.users import UserORM
from app.db.repositories.auth_sessions import AuthSessionRepository, AuthSessionsCollection

from .schemas import CookiesData, JWTAccessTokenSchema, JWTPayload

ONE_MONTH = 60 * 60 * 24 * 30


class Cookies:
    def __init__(self, response: Response) -> None:
        self.response = response

    def set_auth_cookie(self, access_token: str) -> None:
        self.response.set_cookie(**CookiesData(value=access_token).model_dump())

    def delete_auth_cookie(self) -> None:
        self.response.delete_cookie('access_token')


def get_password_hash(password: str) -> str:
    hashed: bytes = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed.decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    result: bool = bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))
    return result


def create_token(user: UserORM) -> str:
    now = int(datetime.now(tz=UTC).timestamp())
    token_payload = JWTPayload(
        sub=str(user.id),
        exp=now + ONE_MONTH,
        iat=now,
        email=user.email,
        login=user.login,
    )
    return str(jwt.encode(**JWTAccessTokenSchema(claims=token_payload).model_dump()))


async def get_auth_session(
    user: UserORM,
    db_session: AsyncSession,
) -> AuthSessionORM:
    auth_session_collection = AuthSessionsCollection(db_session=db_session)
    auth_session = await auth_session_collection.get_by_user_id(user.id)

    if auth_session is not None:
        auth_session_repo = AuthSessionRepository(db_session, auth_session.id)
        if not await auth_session_repo.is_session_expired():
            return auth_session
        await auth_session_repo.delete()
        await db_session.refresh(user)

    jwt_token = create_token(user=user)
    return await auth_session_collection.create(jwt_token, user.id)


async def login_user(
    user: UserORM,
    db_session: AsyncSession,
    response: Response,
) -> UserORM:
    auth_session = await get_auth_session(user, db_session)
    Cookies(response).set_auth_cookie(auth_session.jwt_token)
    await db_session.refresh(user)
    return user


async def signup_user(
    email: str,
    login: str,
    password: str,
    db_session: AsyncSession,
    response: Response,
) -> str:
    from app.db.repositories.users import UsersCollection

    password_hash = get_password_hash(password)
    user = await UsersCollection(db_session).create(email=email, login=login, password_hash=password_hash)

    auth_session = await get_auth_session(user, db_session)
    Cookies(response).set_auth_cookie(auth_session.jwt_token)

    return auth_session.jwt_token
