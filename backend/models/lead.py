from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)
    email: Optional[EmailStr] = None
    service: Optional[str] = Field(None, max_length=100)
    message: Optional[str] = Field(None, max_length=2000)
    source: Optional[str] = Field(None, max_length=100)
