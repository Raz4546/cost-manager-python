# Cost Management 
## _This project is a Full Stack service for managing monthly costs using FastAPI and React. It includes endpoints for creating, reading, updating, and deleting cost items. The service is containerized using Docker and Docker Compose for easy deployment._


## Table of Contents

 - [Project Structure](https://github.com/Raz4546/cost-manager-python/blob/main/README.md#project-structure)
 - [Getting Started](https://github.com/Raz4546/cost-manager-python/blob/main/README.md#getting-started)
    - [Prerequisites](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#prerequisites)
    - [Installation](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#installation)
    - [Running the Application](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#running-the-application)
- [API Endpoints](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#api-endpoints)
- [Running Tests](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#running-tests)
- [Docker Setup](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#docker-setup)
    - [Docker Compose](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#docker-compose)
- [License](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#license)

## Project Structure

    .
    ├──backend
    │   ├── main.py
    │   ├── storage.py
    │   ├── test.py
    │   ├── requirements.txt
    │   └── Dockerfile
    ├── docker-compose.yml
    └── README.md

    
- backend/main.py: The main application file with FastAPI routes.
- backend/storage.py: Contains the Pydantic model for cost items.
- backend/test.py: Contains tests for the API endpoints.
- backend/requirements.txt: Lists the Python dependencies.
- backend/Dockerfile: Instructions to build the Docker image.
- docker-compose.yml: Configuration for Docker Compose.

## Getting Started
### Prerequisites

- Python 3.10
- Docker

## Installation

1) Clone the repository:

```sh
git clone https://github.com/yourusername/cost-management-backend.git
cd cost-management-backend
```

2) Install the dependencies:

```sh
pip install -r backend/requirements.txt
```

## Running the Application

To run the application locally:

```sh
uvicorn backend.main:app --reload
```
The application will be available at http://127.0.0.1:8000.

## API Endpoints

* `GET /` : Returns a welcome message.
* `GET /costs` : Retrieves the list of monthly costs.
* `GET /costs/{cost_id}` : Retrieves a single cost item by ID.
* `POST /addCost` : Adds a new cost item.
* `DELETE /deleteCost/{item_id}` : Deletes a cost item by ID.
* `PUT /updateCost` : Updates an existing cost item.

## Running Tests
To run the tests:

```sh
pytest backend/test.py
```

## Docker Setup
### Docker Compose

To build and run the Docker container using Docker Compose:
1) Build and start the containers:
```sh
docker-compose up --build
```
2) The application will be available at http://localhost:8000.
 ## License

This project is licensed under the [MIT License](LICENSE).
