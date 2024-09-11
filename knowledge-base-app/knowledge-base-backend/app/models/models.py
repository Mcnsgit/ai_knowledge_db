# app/models.py
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.database import Base

class Documentation(Base):
    __tablename__ = "documentation"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String)

    folder_id = Column(Integer, ForeignKey("folders.id"))  # Add folder_id foreign key
    folder = relationship("Folder", back_populates="documents")


class FAQ(Base):
    __tablename__ = "faq"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String, index=True)
    answer = Column(String)


class User(Base):
    __tablename__ = "users"  # Changed table name to plural for consistency

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    folders = relationship("Folder", back_populates="owner")


class Folder(Base):
    __tablename__ = "folders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)

    parent_id = Column(Integer, ForeignKey('folders.id'), nullable=True)
    user_id = Column(Integer, ForeignKey('users.id'))

    children = relationship("Folder", backref="parent", remote_side=[id])
    owner = relationship("User", back_populates="folders")
    documents = relationship("Documentation", back_populates="folder")  # Relationship to documentation