# app/dependencies.py
from app.database import get_db

def get_db_session():
    return get_db

