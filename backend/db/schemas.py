def individual_serial(cost) -> dict:
    return {
        "id": str(cost["_id"]),
        "title": cost["title"],
        "description": cost["description"],
        "date": cost["date"],
        "amount": cost["amount"],
        "favorite": cost["favorite"]
    }

def list_serial(costs) -> list:
    return [individual_serial(cost) for cost in costs]
