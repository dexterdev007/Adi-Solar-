from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.api import router
import os

app = FastAPI(
    title="Adi Solar Backend API",
    description="API for handling user submissions",
    version="1.0.0"
)

# Configure CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the API router
app.include_router(router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "API is running. Database endpoints are available at /api/contact and /api/booking"}

if __name__ == "__main__":
    import uvicorn
    # Make sure to run with right port if specified by render
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
