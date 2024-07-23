# Cost Management 
## _This project is a Full Stack service for managing monthly costs using FastAPI and React. It includes endpoints for creating, reading, updating, and deleting cost items. The service is containerized using Docker and Docker Compose for easy deployment._


## Table of Contents

 - [Project Structure](https://github.com/Raz4546/cost-manager-python/blob/main/README.md#project-structure)
 - [Getting Started](https://github.com/Raz4546/cost-manager-python/blob/main/README.md#getting-started)
    - [Prerequisites](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#prerequisites)
    - [Installation](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#installation)
      - [FastAPI Backend](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#fastapi-backend)
      - [React Frontend](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#react-frontend)
    - [Running the Application](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#running-the-application)
- [API Endpoints](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#api-endpoints)
- [Running Tests](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#running-tests)
- [Docker Setup](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#docker-setup)
    - [Docker Compose](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#docker-compose)
- [License](https://github.com/Raz4546/cost-manager-python?tab=readme-ov-file#license)
- [Demo](https://github.com/Raz4546/cost-manager-python/blob/main/README.md#demo)

## Getting Started
### Prerequisites

- Python 3.10
- Docker
- npm
  
## FastAPI Backend
### Installation

1) Clone the repository:

```sh
git clone https://github.com/yourusername/cost-management-backend.git
cd cost-management-backend
```

2) Install the dependencies:

```sh
pip install -r backend/requirements.txt
```
3) Running the Backend

```sh
uvicorn backend.main:app --reload
```
The application will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## React Frontend
### Installation
1) Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2) Install the dependencies:
   ```sh
   npm install
   ```
3) Running the Application:
   ```sh
   npm run dev
   ```
The frontend will be available at [http://localhost:5173](http://localhost:5173).

### Building the Application
To create a production build of the frontend:
   ```sh
   npm run build
   ```

## API Endpoints

* `GET /` : Returns a welcome message.
* `GET /costs` : Retrieves the list of monthly costs.
* `GET /favoriteCosts ` : Retrieves the favorite costs.
* `POST /addCost` : Adds a new cost item.
* `DELETE /deleteCost/{item_id}` : Deletes a cost item by ID.
* `PUT /updateCost/{item_id}` : Updates an existing cost item.

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
2) The application will be available at [http://localhost:3000](http://localhost:3000).
 ## License

 ## Demo
 [Link](https://youtu.be/W5LqOPPzjb4)

This project is licensed under the [MIT License](LICENSE).
