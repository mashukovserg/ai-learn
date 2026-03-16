from typing import TYPE_CHECKING

from sqlalchemy import JSON, ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import ModelBase, PrimaryKeyIntColumn, UpdatedAtColumn

if TYPE_CHECKING:
    from .users import UserORM


class UserProgressORM(ModelBase):
    __tablename__ = 'user_progress'
    __table_args__ = (UniqueConstraint('user_id', 'room_id', name='uq_user_progress_user_id_room_id'),)

    id: Mapped[PrimaryKeyIntColumn]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    room_id: Mapped[str]
    completed_task_ids: Mapped[list[int]] = mapped_column(JSON, default=list)
    updated_at: Mapped[UpdatedAtColumn]

    user: Mapped['UserORM'] = relationship(back_populates='progress')
