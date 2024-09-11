from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import Documentation, FAQ
from app.database import get_db

router = APIRouter()

@router.get("/search")
def search_items(query: str, db: Session = Depends(get_db)):
    docs = db.query(Documentation).filter(Documentation.content.ilike(f'%{query}%')).all()
    faqs = db.query(FAQ).filter(FAQ.answer.ilike(f'%{query}%')).all()
    
    if not docs and not faqs:
        raise HTTPException(status_code=404, detail="No results found")
    
    return {
        "docs": docs,
        "faqs": faqs
    }
    
@router.post("/add_test_data")
def add_test_data(db: Session = Depends(get_db)):
    test_doc = Documentation(title="Test Document", content="This is a test document.")
    test_faq = FAQ(question="What is this?", answer="This is a test FAQ.")
    db.add(test_doc)
    db.add(test_faq)
    db.commit()
    return {"message": "Test data added"}