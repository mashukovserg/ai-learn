from pydantic import BaseModel


class ProgressDTO(BaseModel):
    room_id: str
    completed_task_ids: list[int]


class CompleteTaskDTO(BaseModel):
    task_id: int
