from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import ModelBase, PrimaryKeyIntColumn

if TYPE_CHECKING:
    from .users import UserORM


class AuthSessionORM(ModelBase):
    __tablename__ = 'auth_sessions'

    id: Mapped[PrimaryKeyIntColumn]

    jwt_token: Mapped[str] = mapped_column(unique=True)
    expires_at: Mapped[int]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    user: Mapped['UserORM'] = relationship(back_populates='auth_session')
