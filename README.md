Cost Management Backend
This project is a backend service for managing monthly costs using FastAPI. It includes endpoints for creating, reading, updating, and deleting cost items. The service is containerized using Docker and Docker Compose for easy deployment.

Table of Contents
Project Structure
Getting Started
Prerequisites
Installation
Running the Application
API Endpoints
Running Tests
Docker Setup
Docker Compose
License
Project Structure

.
├── backend
│   ├── main.py
│   ├── storage.py
│   ├── test.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── README.md

backend/main.py: The main application file with FastAPI routes.
backend/storage.py: Contains the Pydantic model for cost items.
backend/test.py: Contains tests for the API endpoints.
backend/requirements.txt: Lists the Python dependencies.
backend/Dockerfile: Instructions to build the Docker image.
docker-compose.yml: Configuration for Docker Compose.
Getting Started
Prerequisites
Python 3.10
Docker
Docker Compose
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/cost-management-backend.git
cd cost-management-backend
Install the dependencies:

bash
Copy code
pip install -r backend/requirements.txt
Running the Application
To run the application locally:

bash
Copy code
uvicorn backend.main:app --reload
The application will be available at http://127.0.0.1:8000.

API Endpoints
GET /: Returns a welcome message.
GET /costs: Retrieves the list of monthly costs.
GET /costs/{cost_id}: Retrieves a single cost item by ID.
POST /addCost: Adds a new cost item.
DELETE /deleteCost/{item_id}: Deletes a cost item by ID.
PUT /updateCost: Updates an existing cost item.
Running Tests
To run the tests:

bash
Copy code
pytest backend/test.py
Docker Setup
Docker Compose
To build and run the Docker container using Docker Compose:

Build and start the containers:

bash
Copy code
docker-compose up --build
The application will be available at http://localhost:8000.

License
This project is licensed under the MIT License.






