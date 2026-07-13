from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from web.backend.backendRouters import pokemonList

BASE_DIR = Path(__file__).resolve().parent
PROJECT_DIR = BASE_DIR.parent

# Initialize the backend application
app = FastAPI(title="Pokemon Battle!")

app.mount("/static", StaticFiles(directory=BASE_DIR / "frontend"), name="static")

app.include_router(pokemonList.router)

# Serve the frontend entry page from the root URL
@app.get("/")
def read_root():
    return FileResponse(BASE_DIR / "frontend" / "index.html")

# Define a POST endpoint that accepts JSON data
# @app.post("/items")
# def create_item(item: Item):
#     return {"status": "success", "received_data": item}
