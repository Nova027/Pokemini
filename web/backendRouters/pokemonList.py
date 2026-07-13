from fastapi import APIRouter
import json

router = APIRouter(prefix="/pokemon", tags=["pokemon"])

# @router.get("/", response_model=List[schemas.PropertyOut])
# def list_properties(db: Session = Depends(get_db)):
#     return db.query(models.Property).all()

# Return the move played by opponent reading from json.
@router.get("/move_played_opp")
async def get_users():
    with open("data.json", "r") as file:
        data = json.load(file)
    return data
# The right way to communicate would be via fixed schemas in json format. But random python collections are fine too for now.    

# Save the move played by current player to json.
@router.post("/play_move")
async def create_user(data: dict):
    with open("data.json", "w") as file:
        json.dump(data, file, indent=4)
    
    return {"message": "Data created", "data": data}