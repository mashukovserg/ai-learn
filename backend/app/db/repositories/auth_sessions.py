from datetime import UTC, datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.auth_session import AuthSessionORM

from .repository_base import DBCollectionBase, DBRepositoryBase

ONE_MONTH = 60 * 60 * 24 * 30


class AuthSessionsCollection(DBCollectionBase[AuthSessionORM]):
    Model = AuthSessionORM

    async def get_by_user_id(self, user_id: int) -> AuthSessionORM | None:
        query = select(AuthSessionORM).where(AuthSessionORM.user_id == user_id)
        result = await self.db_session.scalars(query)
        return result.first()

    async def get_by_token(self, jwt_token: str) -> AuthSessionORM | None:
        query = select(AuthSessionORM).where(AuthSessionORM.jwt_token == jwt_token)
        result = await self.db_session.scalars(query)
        return result.first()

    async def create(self, jwt_token: str, user_id: int) -> AuthSessionORM:
        auth_session = AuthSessionORM(
            jwt_token=jwt_token,
            expires_at=int(datetime.now(tz=UTC).timestamp()) + ONE_MONTH,
            user_id=user_id,
        )
        self.db_session.add(auth_session)
        await self.db_session.commit()
        await self.db_session.refresh(auth_session)
        return auth_session


class AuthSessionRepository(DBRepositoryBase[AuthSessionORM]):
    Model = AuthSessionORM

    async def is_session_expired(self) -> bool:
        return (await self.orm_obj()).expires_at < datetime.now(tz=UTC).timestamp()
