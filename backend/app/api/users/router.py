from fastapi import APIRouter

from app.api.dependencies import CurrentUserIDDep, DBSessionDep
from app.api.exceptions import HTTPNotFoundException
from app.db.repositories.progress import ProgressCollection
from app.db.repositories.users import UserRepository

from .schemas import UserProfileDTO

users_router = APIRouter()


@users_router.get('/me', response_model=UserProfileDTO)
async def get_me(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> UserProfileDTO:
    user_repo = UserRepository(db_session, user_id)
    user = await user_repo.user

    if user is None:
        raise HTTPNotFoundException(detail='User not found')

    progress_list = await ProgressCollection(db_session).get_all_by_user(user_id)
    completed_rooms_count = sum(1 for p in progress_list if len(p.completed_task_ids) > 0)

    return UserProfileDTO(
        user_id=user.id,
        login=user.login,
        email=user.email,
        points=user.points,
        streak_days=user.streak_days,
        completed_rooms_count=completed_rooms_count,
    )
