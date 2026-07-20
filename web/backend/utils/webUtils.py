import uuid
from fastapi import Cookie, Response

# Reusable tracking (cookie) dependency
def get_guest_id(response: Response, guest_id: str = Cookie(None)) -> str:
    if not guest_id:
        guest_id = str(uuid.uuid4())
        response.set_cookie(
            key="guest_id", value=guest_id, max_age=31536000,
            httponly=True, samesite="lax", secure=False # secure True for HTTPS
        )
    return guest_id