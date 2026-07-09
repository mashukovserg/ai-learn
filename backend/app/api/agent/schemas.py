from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field

TaskStatus = Literal['queued', 'in_progress', 'review', 'done', 'blocked']
RunStatus = Literal['running', 'completed', 'failed']


class AgentTaskCreateDTO(BaseModel):
    title: str = Field(..., min_length=1, max_length=180)
    objective: str = Field(..., min_length=1, max_length=4000)
    role: str = Field(default='generalist', min_length=1, max_length=50)
    priority: int = Field(default=100, ge=1, le=1000)
    context: dict[str, str] | None = None


class AgentTaskStatusUpdateDTO(BaseModel):
    status: TaskStatus


class AgentTaskDTO(BaseModel):
    id: int
    title: str
    objective: str
    role: str
    priority: int
    status: TaskStatus
    context: dict[str, str] | None
    created_at: datetime
    updated_at: datetime


class AgentRunDTO(BaseModel):
    id: int
    task_id: int
    status: RunStatus
    summary: str
    output_text: str
    dedupe_hit: bool
    error_message: str | None
    created_at: datetime
    updated_at: datetime


class AgentKnowledgeItemDTO(BaseModel):
    id: int
    task_id: int | None
    title: str
    body: str
    fingerprint: str
    tags: list[str]
    created_at: datetime


class AgentCycleRunResponseDTO(BaseModel):
    executed: bool
    message: str
    task: AgentTaskDTO | None
    run: AgentRunDTO | None
    knowledge_item: AgentKnowledgeItemDTO | None
