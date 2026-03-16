from collections.abc import Sequence

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.progress import UserProgressORM

from .repository_base import DBCollectionBase


class ProgressCollection(DBCollectionBase[UserProgressORM]):
    Model = UserProgressORM

    async def get_by_user_and_room(self, user_id: int, room_id: str) -> UserProgressORM | None:
        query = select(UserProgressORM).where(
            UserProgressORM.user_id == user_id,
            UserProgressORM.room_id == room_id,
        )
        result = await self.db_session.scalars(query)
        return result.first()

    async def get_all_by_user(self, user_id: int) -> Sequence[UserProgressORM]:
        query = select(UserProgressORM).where(UserProgressORM.user_id == user_id)
        result = await self.db_session.scalars(query)
        return result.all()

    async def create(self, user_id: int, room_id: str, completed_task_ids: list[int]) -> UserProgressORM:
        progress = UserProgressORM(
            user_id=user_id,
            room_id=room_id,
            completed_task_ids=completed_task_ids,
        )
        self.db_session.add(progress)
        await self.db_session.commit()
        await self.db_session.refresh(progress)
        return progress

    async def update_tasks(self, progress: UserProgressORM, completed_task_ids: list[int]) -> UserProgressORM:
        progress.completed_task_ids = completed_task_ids
        await self.db_session.commit()
        await self.db_session.refresh(progress)
        return progress

    async def reset_by_user_and_room(self, user_id: int, room_id: str) -> UserProgressORM | None:
        progress = await self.get_by_user_and_room(user_id, room_id)
        if progress is None:
            return None

        progress.completed_task_ids = []
        await self.db_session.commit()
        await self.db_session.refresh(progress)
        return progress
