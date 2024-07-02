from fastapi.testclient import TestClient
from main import app
from uuid import UUID

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World!"}

def test_create_new_cost():
    cost = {
        "date": "2024-06-23",
        "description": "gas",
        "cost": 150
    }

    response = client.post("/addCost", json=cost)
    assert response.status_code == 200
    res_json = response.json()
    assert res_json["description"] == cost["description"]
    assert res_json["date"] == cost["date"]
    assert res_json["cost"] == cost["cost"]
    assert "item_id" in res_json
    assert UUID(res_json["item_id"])

def test_monthly_costs():
    response = client.get("/costs")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_delete_cost():
    cost = {
            "date": "2024-06-23",
            "description": "gas",
            "cost": 150
    }
    response = client.post("/addCost", json=cost)
    assert response.status_code == 200
    new_cost = response.json()
    item_id = new_cost["item_id"]
    
    deleted_res = client.delete(f"/deleteCost/{item_id}")
    assert deleted_res.status_code == 200
    deleted_item = deleted_res.json()
    assert deleted_item["message"] == "The item has been removed"
    assert deleted_item["item_id"] == item_id

    get_response = client.get("/costs")
    costs_list = get_response.json()
    assert all(item["item_id"] != item_id for item in costs_list)

def test_update_cost():
    cost = {
            "date": "2024-06-23",
            "description": "gas",
            "cost": 150
    }
    response = client.post("/addCost", json=cost)
    assert response.status_code == 200
    res_json = response.json()
    item_id = res_json["item_id"]

    updated_cost = {
        "item_id": item_id,
        "date": "2024-06-24",
        "description": "food",
        "cost": 1500
    }

    updated_response = client.put("/updateCost", json=updated_cost)
    assert updated_response.status_code == 200
    updated_json = updated_response.json()
    assert updated_json["item_id"] == item_id   
    assert updated_json["date"] == "2024-06-24"   
    assert updated_json["description"] == "food"   
    assert updated_json["cost"] == 1500   

def test_get_single_cost():
    cost = {
            "date": "2024-06-23",
            "description": "gas",
            "cost": 150
    }
    response = client.post("/addCost", json=cost)
    assert response.status_code == 200
    res_json = response.json()
    item_id = res_json["item_id"]

    cost_res = client.get(f"/costs/{item_id}")
    assert cost_res.status_code == 200
    cost_json = cost_res.json()
    assert cost_json["item_id"] == item_id
    assert cost_json["description"] == "gas"
    assert cost_json["date"] == "2024-06-23"
    assert cost_json["cost"] == 150