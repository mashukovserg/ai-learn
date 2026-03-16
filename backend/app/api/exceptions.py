from fastapi import HTTPException
from fastapi import status as http_status


class HTTPAuthenticationError(HTTPException):
    def __init__(self, detail: str | None = None) -> None:
        super().__init__(
            status_code=http_status.HTTP_401_UNAUTHORIZED,
            detail=detail or 'Not authenticated',
            headers={'WWW-Authenticate': 'Bearer'},
        )


class HTTPNotFoundException(HTTPException):
    def __init__(self, detail: str | None = None) -> None:
        super().__init__(http_status.HTTP_404_NOT_FOUND, detail)


class HTTPBadRequestException(HTTPException):
    def __init__(self, detail: str | None = None) -> None:
        super().__init__(http_status.HTTP_400_BAD_REQUEST, detail)
