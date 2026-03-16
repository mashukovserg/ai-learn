from datetime import date

from fastapi import APIRouter

from app.api.dependencies import CurrentUserIDDep, DBSessionDep
from app.db.repositories.progress import ProgressCollection
from app.db.repositories.users import UserRepository

from .schemas import CompleteTaskDTO, ProgressDTO

progress_router = APIRouter(prefix='/progress')

POINTS_PER_TASK = 10


@progress_router.get('', response_model=list[ProgressDTO])
async def get_all_progress(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> list[ProgressDTO]:
    progress_list = await ProgressCollection(db_session).get_all_by_user(user_id)
    return [
        ProgressDTO(room_id=p.room_id, completed_task_ids=p.completed_task_ids)
        for p in progress_list
    ]


@progress_router.get('/{room_id}', response_model=ProgressDTO)
async def get_room_progress(
    room_id: str,
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> ProgressDTO:
    progress = await ProgressCollection(db_session).get_by_user_and_room(user_id, room_id)
    if progress is None:
        return ProgressDTO(room_id=room_id, completed_task_ids=[])
    return ProgressDTO(room_id=progress.room_id, completed_task_ids=progress.completed_task_ids)


@progress_router.post('/{room_id}', response_model=ProgressDTO)
async def complete_task(
    room_id: str,
    body: CompleteTaskDTO,
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> ProgressDTO:
    collection = ProgressCollection(db_session)
    progress = await collection.get_by_user_and_room(user_id, room_id)

    if progress is None:
        progress = await collection.create(user_id, room_id, [body.task_id])
        await _award_points_and_streak(db_session, user_id)
        return ProgressDTO(room_id=progress.room_id, completed_task_ids=progress.completed_task_ids)

    if body.task_id in progress.completed_task_ids:
        return ProgressDTO(room_id=progress.room_id, completed_task_ids=progress.completed_task_ids)

    new_ids = [*progress.completed_task_ids, body.task_id]
    progress = await collection.update_tasks(progress, new_ids)
    await _award_points_and_streak(db_session, user_id)

    return ProgressDTO(room_id=progress.room_id, completed_task_ids=progress.completed_task_ids)


@progress_router.delete('/{room_id}', response_model=ProgressDTO)
async def reset_room_progress(
    room_id: str,
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> ProgressDTO:
    collection = ProgressCollection(db_session)
    progress = await collection.reset_by_user_and_room(user_id, room_id)
    if progress is None:
        return ProgressDTO(room_id=room_id, completed_task_ids=[])

    return ProgressDTO(room_id=progress.room_id, completed_task_ids=progress.completed_task_ids)


async def _award_points_and_streak(db_session, user_id: int) -> None:  # noqa: ANN001
    user_repo = UserRepository(db_session, user_id)
    user = await user_repo.user

    user.points += POINTS_PER_TASK

    today = date.today()
    if user.last_activity_date is None:
        user.streak_days = 1
        user.last_activity_date = today
    elif user.last_activity_date == today:
        pass
    elif (today - user.last_activity_date).days == 1:
        user.streak_days += 1
        user.last_activity_date = today
    else:
        user.streak_days = 1
        user.last_activity_date = today

    await db_session.commit()
