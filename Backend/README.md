# Todo Application Backend

This is the backend for the Full-Stack Todo Application, built with Node.js, Express, TypeScript, and Prisma.

## Features

-   RESTful API for Todo management (Create, Read, Update, Delete)
-   Filtering todos by status (all, active, completed)
-   Searching todos by title
-   SQLite database with Prisma ORM
-   Request validation with Zod
-   Secure headers with Helmet and CORS support

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm

### Installation

1.  **Clone the repository** (if you haven't already).

2.  **Navigate to the `Backend` directory:**
    ```bash
    cd Backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the `Backend` directory and add the following variables:
    ```env
    PORT=3000
    CORS_ORIGIN=http://localhost
    DATABASE_URL="file:./data/dev.db"
    ```

5.  **Run Prisma migrations:**
    This will create the SQLite database file and the `todos` table.
    ```bash
    npx prisma migrate dev --name init
    ```

### Running the Application

-   **Development:**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000`.

-   **Production:**
    ```bash
    npm run build
    npm start
    ```

## API Endpoints

-   `GET /api/todos`: Get all todos.
    -   Query Params:
        -   `status` (`all` | `active` | `completed`): Filter by completion status.
        -   `search` (string): Filter by title (case-insensitive contains).
-   `POST /api/todos`: Create a new todo.
    -   Body: `{ "title": "My new todo" }`
-   `PATCH /api/todos/:id`: Update a todo (toggles completion status).
-   `DELETE /api/todos/:id`: Delete a todo.

## Docker

To run the backend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build backend
```