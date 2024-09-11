# app/schemas.py (create a new file)
from pydantic import BaseModel
from typing import Optional

# Pydantic model for Folder creation
class FolderCreate(BaseModel):
    name: str
    description: Optional[str] = None

# Pydantic model for Documentation creation
class DocumentationCreate(BaseModel):
    title: str
    content: str
    folder_id: Optional[int] = None  # Optional folder association