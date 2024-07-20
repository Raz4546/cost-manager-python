from datetime import date
from typing import Optional
from pydantic import BaseModel

class Cost(BaseModel):
    
    item_id: Optional[str] = 0 
    date: date
    description: str
    amount: float
    balance: str
    favorite: bool
    category: str