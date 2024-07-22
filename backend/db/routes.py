from fastapi import APIRouter, HTTPException
from db.database import collectionName
from db.schemas import list_serial
from bson import ObjectId
from pydantic import BaseModel


router = APIRouter()

class Cost(BaseModel):
    title: str
    description: str
    date: str
    amount: float
    favorite: bool

@router.get("/costs")
async def get_costs():
    try:
        costs = list_serial(collectionName.find())
        return costs
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/favoriteCosts")
async def get_favorite_costs():
    try:
        favorite_costs = list_serial(collectionName.find({"favorite": True}))
        return favorite_costs
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/addCost")
async def create_new_cost(cost: Cost):
    try:
        collectionName.insert_one(dict(cost))
        return {"message": "Cost added successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/updateCost/{id}")
async def update_cost(id: str, cost: Cost):
    try:
        result = collectionName.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(cost)})
        if result:
            return {"message": "Cost updated successfully"}
        else:
            raise HTTPException(status_code=404, detail="Cost not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/deleteCost/{id}")
async def delete_cost(id: str):
    try:
        result = collectionName.find_one_and_delete({"_id": ObjectId(id)})
        if result:
            return {"message": "Cost deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Cost not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
