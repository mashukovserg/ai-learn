from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.users import UserORM

from .repository_base import DBCollectionBase, DBRepositoryBase


class UsersCollection(DBCollectionBase[UserORM]):
    Model = UserORM

    async def get_by_login(self, login: str) -> UserORM | None:
        query = select(UserORM).where(UserORM.login == login)
        result = await self.db_session.execute(query)
        return result.scalar()

    async def find(self, email: str, login: str) -> UserORM | None:
        query = select(UserORM).where(or_(UserORM.login == login, UserORM.email == email))
        result = await self.db_session.execute(query)
        return result.scalar()

    async def create(self, email: str, login: str, password_hash: str) -> UserORM:
        user = UserORM(email=email, login=login, password_hash=password_hash)
        self.db_session.add(user)
        await self.db_session.commit()
        await self.db_session.refresh(user)
        return user


class UserRepository(DBRepositoryBase[UserORM]):
    Model = UserORM

    @property
    async def user(self) -> UserORM:
        return await self.orm_obj()
