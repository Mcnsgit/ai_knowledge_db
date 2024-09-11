# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import knowledge_base, search
from app.database import engine, Base

app = FastAPI(
    title="Knowledge Base API",
    description="API for fetching documentation and FAQs for the knowledge base",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with the frontend URL or use "*" to allow all origins (use caution)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Automatically create tables if not already created
Base.metadata.create_all(bind=engine)

# Include routers for documentation and FAQ endpoints
app.include_router(knowledge_base.router)
app.include_router(search.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Knowledge Base API"}