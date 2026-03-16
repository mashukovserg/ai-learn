from fastapi import APIRouter, HTTPException, Response
from fastapi import status as http_status

from app.api.auth.handlers import Cookies, login_user, signup_user, verify_password
from app.api.dependencies import CurrentUserIDDep, DBSessionDep
from app.api.exceptions import HTTPAuthenticationError
from app.db.repositories.auth_sessions import AuthSessionsCollection
from app.db.repositories.users import UsersCollection

from .schemas import LoginDTO, SignUpDTO, TokenDTO, UserDTO

auth_router = APIRouter(prefix='/auth')


@auth_router.post('/signup')
async def auth_post_signup(
    signup_data: SignUpDTO,
    response: Response,
    db_session: DBSessionDep,
) -> TokenDTO:
    if await UsersCollection(db_session).find(signup_data.email, signup_data.login) is not None:
        raise HTTPException(status_code=http_status.HTTP_409_CONFLICT, detail='User already exists')

    token = await signup_user(
        email=signup_data.email,
        login=signup_data.login,
        password=signup_data.password,
        db_session=db_session,
        response=response,
    )

    return TokenDTO(token=token)


@auth_router.post('/login', response_model=UserDTO)
async def auth_post_login(
    login_data: LoginDTO,
    response: Response,
    db_session: DBSessionDep,
) -> UserDTO:
    user = await UsersCollection(db_session).get_by_login(login_data.login)

    if user is None:
        raise HTTPAuthenticationError(detail='Incorrect username or password')

    if not verify_password(login_data.password, user.password_hash):
        raise HTTPAuthenticationError(detail='Incorrect username or password')

    await login_user(user=user, db_session=db_session, response=response)

    return UserDTO(login=user.login, email=user.email)


@auth_router.post('/logout')
async def auth_post_logout(
    response: Response,
    db_session: DBSessionDep,
    user_id: CurrentUserIDDep,
) -> dict[str, str]:
    auth_session = await AuthSessionsCollection(db_session).get_by_user_id(user_id)
    if auth_session is not None:
        from app.db.repositories.auth_sessions import AuthSessionRepository

        await AuthSessionRepository(db_session, auth_session.id).delete()

    Cookies(response).delete_auth_cookie()

    return {'status': 'ok'}
