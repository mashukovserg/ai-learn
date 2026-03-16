from collections.abc import Sequence
from typing import Any

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import InstrumentedAttribute, joinedload


class DBCollectionBase[M]:
    Model: type
    db_session: AsyncSession

    def __init__(self, db_session: AsyncSession) -> None:
        self.db_session = db_session

    async def all(
        self,
        filter_ids: set[int] | None = None,
        joined_loads: list[InstrumentedAttribute[Any]] | None = None,
    ) -> Sequence[M]:
        query = select(self.Model)  # type: ignore[var-annotated]

        if filter_ids and hasattr(self.Model, 'id'):
            query = query.where(self.Model.id.in_(filter_ids))

        if joined_loads:
            for joined_load in joined_loads:
                query = query.options(joinedload(joined_load))

        result = await self.db_session.scalars(query)

        if joined_loads:
            return result.unique().all()

        return result.all()

    async def get_by_id(self, obj_id: int) -> M | None:
        return await self.db_session.get(self.Model, obj_id)


class DBRepositoryBase[M]:
    Model: type
    db_session: AsyncSession
    __obj_id: int
    __obj: M | None

    def __init__(self, db_session: AsyncSession, obj_id: int) -> None:
        self.db_session = db_session
        self.__obj_id = obj_id
        self.__obj = None

    @property
    def obj_id(self) -> int:
        return self.__obj_id

    async def orm_obj(self) -> M:
        if self.__obj is None:
            self.__obj = await self.db_session.get(self.Model, self.__obj_id)

            if self.__obj is None:
                error_message = f'{self.Model.__name__} with id={self.__obj_id} not found'
                raise AttributeError(error_message)

        return self.__obj

    async def delete(self) -> None:
        await self.db_session.execute(delete(self.Model).where(self.Model.id == self.__obj_id))  # type: ignore[attr-defined]
        await self.db_session.commit()
        self.__obj = None
