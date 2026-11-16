
# TaskFlow Backend

A RESTful API built with Node.js and Express.js for managing tasks and project workflows.

TaskFlow Backend provides endpoints for creating, retrieving, updating, and deleting tasks. 
It is designed to work with the TaskFlow frontend application.

## Features

- Create, read, update, and delete tasks (CRUD)
- Retrieve individual tasks by ID
- Manage task status and priority
- Assign tasks to users
- Custom logging middleware
- RESTful API architecture
- CORS support
- JSON request and response handling
- 
<img width="700" height="393" alt="get" src="https://github.com/user-attachments/assets/eec1dc47-ad82-4ac9-b15b-94ffd6c785b9" />
<img width="700" height="358" alt="Ekran görüntüsü 2026-11-16 114545" src="https://github.com/user-attachments/assets/942c61f9-a406-46cb-9251-f5e43cd6ffb6" />
<img width="700" height="358" alt="delete 200" src="https://github.com/user-attachments/assets/730d7bc0-9717-4347-973a-4681d17bd32e" />
<img width="700" height="393" alt="priority update" src="https://github.com/user-attachments/assets/126a20d1-04d2-47e0-bca6-f04b5018de54" />


## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **JavaScript** – Application logic
- **CORS** – Cross-origin resource sharing
- **NPM** – Package management

## Project Structure

```text
TaskFlow/
│
├── controllers/
│   └── taskController.js
│
├── data/
│   └── tasks.js
│
├── middlewares/
│   └── logger.js
│
├── routes/
│   └── taskRoutes.js
│
├── services/
│   └── taskService.js
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

**1. Clone the repository**

```bash
git clone https://github.com/israfezaaglamis/Task-flow-backend.git
```

**2. Navigate to the project directory**

```bash
cd Task-flow-backend
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the server**

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## API Endpoints

Base URL: `http://localhost:3000/api/tasks`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Task Properties

Tasks support properties such as:

- `id`
- `title`
- `description`
- `status`
- `priority`
- `assignedTo`

Available status values:

- `PENDING`
- `IN_PROGRESS`
- `COMPLETED`

Available priority values:

- `LOW`
- `MEDIUM`
- `HIGH`

## Architecture

The project follows a layered structure:

- **Routes:** Defines API endpoints.
- **Controllers:** Handles incoming HTTP requests and responses.
- **Services:** Contains task management and business logic.
- **Data:** Stores task data.
- **Middlewares:** Handles request logging and other middleware operations.

## Data Storage

The current version uses in-memory data storage.

Task data is not persisted in a database and will reset when the server restarts.

## Frontend

TaskFlow Backend is integrated with the TaskFlow frontend application.

Frontend Repository:  
https://github.com/israfezaaglamis/Task-flow-webapp

## Future Improvements

- Database integration
- Authentication and authorization
- Automated testing
- API documentation
- Improved error handling

## Author

**İsra**

GitHub:  
https://github.com/israfezaaglamis
