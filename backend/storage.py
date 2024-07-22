from datetime import date
from typing import Optional
from pydantic import BaseModel

class Cost(BaseModel):
    title: str
    description: str
    date: str
    amount: float
    favorite: bool

