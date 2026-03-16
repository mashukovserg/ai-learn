from datetime import date
from typing import TYPE_CHECKING

from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import CreatedAtColumn, ModelBase, PrimaryKeyIntColumn

if TYPE_CHECKING:
    from .auth_session import AuthSessionORM
    from .progress import UserProgressORM


class UserORM(ModelBase):
    __tablename__ = 'users'

    id: Mapped[PrimaryKeyIntColumn]
    created_at: Mapped[CreatedAtColumn]

    email: Mapped[str] = mapped_column(unique=True)
    login: Mapped[str] = mapped_column(unique=True)
    password_hash: Mapped[str]

    points: Mapped[int] = mapped_column(default=0, server_default='0')
    streak_days: Mapped[int] = mapped_column(default=0, server_default='0')
    last_activity_date: Mapped[date | None] = mapped_column(nullable=True)

    auth_session: Mapped['AuthSessionORM'] = relationship(back_populates='user')
    progress: Mapped[list['UserProgressORM']] = relationship(back_populates='user')
