from sqlalchemy import JSON, Boolean, ForeignKey, Index, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from .base_model import CreatedAtColumn, ModelBase, PrimaryKeyIntColumn, UpdatedAtColumn


class AgentTaskORM(ModelBase):
    __tablename__ = 'agent_tasks'
    __table_args__ = (
        Index('ix_agent_tasks_user_status_priority', 'user_id', 'status', 'priority', 'id'),
    )

    id: Mapped[PrimaryKeyIntColumn]
    created_at: Mapped[CreatedAtColumn]
    updated_at: Mapped[UpdatedAtColumn]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    title: Mapped[str]
    objective: Mapped[str]
    priority: Mapped[int] = mapped_column(default=100, server_default='100')
    status: Mapped[str] = mapped_column(default='queued', server_default='queued')
    context_json: Mapped[dict[str, str] | None] = mapped_column(JSON, nullable=True)


class AgentRunORM(ModelBase):
    __tablename__ = 'agent_runs'
    __table_args__ = (
        Index('ix_agent_runs_user_created_at', 'user_id', 'created_at'),
    )

    id: Mapped[PrimaryKeyIntColumn]
    created_at: Mapped[CreatedAtColumn]
    updated_at: Mapped[UpdatedAtColumn]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    task_id: Mapped[int] = mapped_column(ForeignKey('agent_tasks.id'))
    status: Mapped[str] = mapped_column(default='running', server_default='running')
    summary: Mapped[str] = mapped_column(default='', server_default='')
    output_text: Mapped[str] = mapped_column(default='', server_default='')
    dedupe_hit: Mapped[bool] = mapped_column(Boolean, default=False, server_default='false')
    error_message: Mapped[str | None] = mapped_column(nullable=True)


class AgentKnowledgeItemORM(ModelBase):
    __tablename__ = 'agent_knowledge_items'
    __table_args__ = (
        UniqueConstraint('user_id', 'fingerprint', name='uq_agent_knowledge_items_user_id_fingerprint'),
        Index('ix_agent_knowledge_items_user_created_at', 'user_id', 'created_at'),
    )

    id: Mapped[PrimaryKeyIntColumn]
    created_at: Mapped[CreatedAtColumn]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))
    task_id: Mapped[int | None] = mapped_column(ForeignKey('agent_tasks.id'), nullable=True)
    title: Mapped[str]
    body: Mapped[str]
    fingerprint: Mapped[str]
    tags: Mapped[list[str]] = mapped_column(JSON, default=list)
