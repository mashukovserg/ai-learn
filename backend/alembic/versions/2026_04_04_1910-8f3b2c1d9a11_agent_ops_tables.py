"""
add agent ops tables.

Revision ID: 8f3b2c1d9a11
Revises: ea8284351669
Create Date: 2026-04-04 19:10:00.000000

"""

from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = '8f3b2c1d9a11'
down_revision: str | None = 'ea8284351669'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.create_table(
        'agent_tasks',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('objective', sa.String(), nullable=False),
        sa.Column('priority', sa.Integer(), server_default='100', nullable=False),
        sa.Column('status', sa.String(), server_default='queued', nullable=False),
        sa.Column('context_json', sa.JSON(), nullable=True),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_agent_tasks_user_id_users')),
        sa.PrimaryKeyConstraint('id', name=op.f('pk_agent_tasks')),
    )
    op.create_index(
        'ix_agent_tasks_user_status_priority',
        'agent_tasks',
        ['user_id', 'status', 'priority', 'id'],
        unique=False,
    )

    op.create_table(
        'agent_runs',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('task_id', sa.Integer(), nullable=False),
        sa.Column('status', sa.String(), server_default='running', nullable=False),
        sa.Column('summary', sa.String(), server_default='', nullable=False),
        sa.Column('output_text', sa.String(), server_default='', nullable=False),
        sa.Column('dedupe_hit', sa.Boolean(), server_default='false', nullable=False),
        sa.Column('error_message', sa.String(), nullable=True),
        sa.ForeignKeyConstraint(['task_id'], ['agent_tasks.id'], name=op.f('fk_agent_runs_task_id_agent_tasks')),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_agent_runs_user_id_users')),
        sa.PrimaryKeyConstraint('id', name=op.f('pk_agent_runs')),
    )
    op.create_index('ix_agent_runs_user_created_at', 'agent_runs', ['user_id', 'created_at'], unique=False)

    op.create_table(
        'agent_knowledge_items',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('task_id', sa.Integer(), nullable=True),
        sa.Column('title', sa.String(), nullable=False),
        sa.Column('body', sa.String(), nullable=False),
        sa.Column('fingerprint', sa.String(), nullable=False),
        sa.Column('tags', sa.JSON(), nullable=False),
        sa.ForeignKeyConstraint(['task_id'], ['agent_tasks.id'], name=op.f('fk_agent_knowledge_items_task_id_agent_tasks')),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_agent_knowledge_items_user_id_users')),
        sa.PrimaryKeyConstraint('id', name=op.f('pk_agent_knowledge_items')),
        sa.UniqueConstraint('user_id', 'fingerprint', name='uq_agent_knowledge_items_user_id_fingerprint'),
    )
    op.create_index(
        'ix_agent_knowledge_items_user_created_at',
        'agent_knowledge_items',
        ['user_id', 'created_at'],
        unique=False,
    )


def downgrade() -> None:
    op.drop_index('ix_agent_knowledge_items_user_created_at', table_name='agent_knowledge_items')
    op.drop_table('agent_knowledge_items')

    op.drop_index('ix_agent_runs_user_created_at', table_name='agent_runs')
    op.drop_table('agent_runs')

    op.drop_index('ix_agent_tasks_user_status_priority', table_name='agent_tasks')
    op.drop_table('agent_tasks')
