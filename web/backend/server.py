from fastapi import FastAPI, Depends
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from backendRouters import pokemonList
from utils.webUtils import get_guest_id
from utils.fileUtils import WEB_DIR

# Initialize the backend application
app = FastAPI(title="Pokemon Battle!")

app.mount("/static", StaticFiles(directory=WEB_DIR / "frontend"), name="static")

# Endpoint 1: Serves HTML (Sets cookie on first visit)
@app.get("/")
def read_root(guest_id: str = Depends(get_guest_id)):
    return FileResponse(WEB_DIR / "frontend" / "index.html")


app.include_router(pokemonList.router)


# Change all the json sent/received to basemodel schema types (not really that hard) 
# from dict types!!