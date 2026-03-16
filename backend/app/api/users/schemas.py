from pydantic import BaseModel


class UserProfileDTO(BaseModel):
    user_id: int
    login: str
    email: str
    points: int
    streak_days: int
    completed_rooms_count: int
