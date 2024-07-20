from fastapi import FastAPI, HTTPException
from typing import List
from storage import Cost  
from uuid import uuid4
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

monthly_costs: List[Cost] = [
    {
        "id": "8",
        "title": "Salary",
        "description": "Salary",
        "amount": 5000,
        "balance": "14,782.85 ILS",
        "date": "2024-07-20",
        "favorite": False,
        "category": "Other",
    },
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"msg": "Hello World!"}

@app.get("/costs", response_model=List[Cost])
async def get_monthly_costs():
    return monthly_costs

@app.get('/costs/{cost_id}', response_model=Cost)
async def get_single_cost(cost_id: str):
    for item in monthly_costs:
        if item["id"] == cost_id:
            return item
        
    raise HTTPException(status_code=404, detail="Cost item not found")

@app.post('/addCost', response_model=Cost)
async def create_new_cost(item: Cost):
    item.id = str(uuid4())        
    monthly_costs.append(item.dict())
    return item

@app.delete('/deleteCost/{item_id}')
async def delete_cost(item_id: str):
    for item in monthly_costs:
        if item["id"] == item_id:
            monthly_costs.remove(item)
            return {"message": "The item has been removed", "item_id": item_id}
        
    raise HTTPException(status_code=404, detail="Cost item not found")

@app.put('/updateCost', response_model=Cost)
async def update_cost(item: Cost):
    for cost in monthly_costs:
        if cost["id"] == item.id:
            cost["title"] = item.title
            cost["description"] = item.description
            cost["amount"] = item.amount
            cost["balance"] = item.balance
            cost["date"] = item.date
            cost["favorite"] = item.favorite
            cost["category"] = item.category
            return cost
    
    raise HTTPException(status_code=404, detail=f"No such cost with id: {item.id}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)