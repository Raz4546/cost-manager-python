from fastapi import FastAPI, HTTPException
from typing import List, Optional
from storage import Cost  
from uuid import uuid4
import uvicorn

monthly_costs: List[Cost] = []

app = FastAPI()

@app.get("/")
def read_root():
    return {"msg": "Hello World!"}

@app.get("/costs", response_model=List[Cost])
async def get_monthly_costs():
    return monthly_costs

@app.get('/costs/{cost_id}', response_model=Cost)
async def get_single_cost(cost_id: str):
    for item in monthly_costs:
        if item.item_id == cost_id:
            return item
        
    raise HTTPException(status_code=404, detail="Cost item not found")

@app.post('/addCost', response_model=Cost)
async def create_new_cost(item: Cost):
    item.item_id = str(uuid4())        
    monthly_costs.append(item)
    return item

@app.delete('/deleteCost/{item_id}')
async def delete_cost(item_id: str):
    for item in monthly_costs:
        if item.item_id == item_id:
            monthly_costs.remove(item)
            return {"message": "The item has been removed", "item_id": item_id}
        
    raise HTTPException(status_code=404, detail="Cost item not found")

@app.put('/updateCost', response_model=Cost)
async def update_cost(item: Cost):
    for cost in monthly_costs:
        if cost.item_id == item.item_id:
            cost.date = item.date
            cost.description = item.description
            cost.cost = item.cost
            return cost
    
    raise HTTPException(status_code=404, detail=f"No such cost with id: {item.item_id}")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
