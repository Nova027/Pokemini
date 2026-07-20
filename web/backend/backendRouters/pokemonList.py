from fastapi import APIRouter, Depends
import json

from utils.fileUtils import WEB_DIR
from utils.webUtils import get_guest_id

router = APIRouter(prefix="/pokemonList", tags=["pokemonList"])

MOCK_TEAMS_DB = {
    # If the user doesn't exist, we will seed default data below
}

@router.get("/api/my-team")
def get_user_team(guest_id: str = Depends(get_guest_id)):
    # Look up the user in our data store based on their cookie ID
    if guest_id not in MOCK_TEAMS_DB:
        MOCK_TEAMS_DB[guest_id] = {
            "trainer_name": f"Trainer_{guest_id[:4]}",
            "roster": ["Pikachu", "Charizard"],
            "guest_id": guest_id
        }
        
    return MOCK_TEAMS_DB[guest_id]

# Return the team data reading from json.
@router.get("/get_team")
async def get_users(guest_id: str = Depends(get_guest_id)):
    with open(WEB_DIR / "playerData" / f"teamData_{guest_id}.json", "r") as file:
        data = json.load(file)
    return data

# Save the team data for the current player to json.
@router.post("/set_team")
async def create_user(data: dict, guest_id: str = Depends(get_guest_id)):
    with open(WEB_DIR / "playerData" / f"teamData_{guest_id}.json", "w") as file:
        json.dump(data, file, indent=4)
    
    return {"message": "Data created", "data": data}