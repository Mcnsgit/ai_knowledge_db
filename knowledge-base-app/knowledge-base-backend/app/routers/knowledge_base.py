from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import models  # Fix: import models properly
from app.database import get_db  # Ensure you're using the correct get_db function
from app.schemas import FolderCreate, DocumentationCreate
router = APIRouter()

# Route to get all documentation
@router.get("/docs")
def get_docs(db: Session = Depends(get_db)):
    docs = db.query(models.Documentation).all()
    return docs

# Route to get a specific document by ID
@router.get("/docs/{doc_id}")
def get_doc_by_id(doc_id: int, db: Session = Depends(get_db)):
    doc = db.query(models.Documentation).filter(models.Documentation.id == doc_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc

# Route to get all FAQs
@router.get("/faqs")
def get_faqs(db: Session = Depends(get_db)):
    faqs = db.query(models.FAQ).all()
    return faqs

@router.get("/faqs/{faq_id}")
def get_faq_by_id(faq_id: int, db: Session = Depends(get_db)):
    faq = db.query(models.FAQ).filter(models.FAQ.id == faq_id).first()
    if not faq:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return faq

@router.get("/folders")
def get_folders(db: Session = Depends(get_db)):
    folders = db.query(models.Folder).all()
    return folders
@router.post("/folders")
def create_folder(folder: FolderCreate, db: Session = Depends(get_db)):
    db_folder = models.Folder(name=folder.name, description=folder.description)
    db.add(db_folder)
    db.commit()
    db.refresh(db_folder)
    return db_folder


@router.put("/folders/{folder_id}")
def update_folder(folder_id: int, folder: models.FolderCreate, db: Session = Depends(get_db)):
    db_folder = db.query(models.Folder).filter(models.Folder.id == folder_id).first()
    if not db_folder:
        raise HTTPException(status_code=404, detail="Folder not found")
    db_folder.name = folder.name
    db.commit()
    return db_folder

@router.post("/folders/{folder_id}/docs")
def add_doc_to_folder(folder_id: int, doc: DocumentationCreate, db: Session = Depends(get_db)):
    db_doc = models.Documentation(title=doc.title, content=doc.content, folder_id=folder_id)
    db.add(db_doc)
    db.commit()
    db.refresh(db_doc)
    return db_doc

@router.delete("/folders/{folder_id}")  
def delete_folder(folder_id: int, db: Session = Depends(get_db)):
    db_folder = db.query(models.Folder).filter(models.Folder.id == folder_id).first()
    if not db_folder:
        raise HTTPException(status_code=404, detail="Folder not found")
    db.delete(db_folder)
    db.commit()
    return

@router.delete("/folders/{folder_id}/docs/{doc_id}")
def delete_doc_from_folder(folder_id: int, doc_id: int, db: Session = Depends(get_db)):
    db_doc = db.query(models.Documentation).filter(models.Documentation.id == doc_id).first()
    if not db_doc:
        raise HTTPException(status_code=404, detail="Document not found")
    db.delete(db_doc)
    db.commit()
    return

@router.get("/folders/{folder_id}/docs/{doc_id}")
def get_doc_from_folder_by_id(folder_id: int, doc_id: int, db: Session = Depends(get_db)):
    doc = db.query(models.Documentation).filter(models.Documentation.id == doc_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc



@router.get("/folders/{folder_id}")
def get_folder_by_id(folder_id: int, db: Session = Depends(get_db)):
    folder = db.query(models.Folder).filter(models.Folder.id == folder_id).first()
    if not folder:
        raise HTTPException(status_code=404, detail="Folder not found")
    return folder


@router.get("folders/{folder_id}/docs")
def get_docs_by_folder_id(folder_id: int, db: Session = Depends(get_db)):
    docs = db.query(models.Documentation).filter(models.Documentation.folder_id == folder_id).all()
    return docs
