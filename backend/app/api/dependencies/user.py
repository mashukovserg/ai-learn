from typing import Annotated

from fastapi import Depends, Request

from app.api.exceptions import HTTPAuthenticationError
from app.db.repositories.auth_sessions import AuthSessionRepository, AuthSessionsCollection

from .db_session import DBSessionDep


async def get_current_user_id(
    db_session: DBSessionDep,
    request: Request,
) -> int:
    access_token = request.cookies.get('access_token')

    if access_token is None:
        raise HTTPAuthenticationError

    auth_session = await AuthSessionsCollection(db_session).get_by_token(access_token)

    if auth_session is None:
        raise HTTPAuthenticationError

    if await AuthSessionRepository(db_session, auth_session.id).is_session_expired():
        raise HTTPAuthenticationError(detail='Session expired')

    return auth_session.user_id


CurrentUserIDDep = Annotated[int, Depends(get_current_user_id)]
