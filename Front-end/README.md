# Todo Application Frontend

This is the frontend for the Full-Stack Todo Application, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

-   Modern, responsive, and colorful UI
-   Create, read, update, and delete todos
-   Filter todos by status (all, active, completed)
-   Search todos by title
-   API integration with the backend service

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm
-   A running instance of the backend service.

### Installation

1.  **Clone the repository** (if you haven't already).

2.  **Navigate to the `Front-end` directory:**
    ```bash
    cd Front-end
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the `Front-end` directory and add the following variable, pointing to your backend API URL:
    ```env
    VITE_API_BASE_URL=http://localhost:3000/api
    ```

### Running the Application

-   **Development:**
    ```bash
    npm run dev
    ```
    The development server will start, typically on `http://localhost:5173`.

-   **Production Build:**
    ```bash
    npm run build
    ```
    This command creates a `dist` folder with the optimized production build. You can serve this folder with any static file server.

    To preview the production build locally:
    ```bash
    npm run preview
    ```

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the source code.
-   `npm run preview`: Serves the production build locally.

## Docker

To run the frontend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build frontend
```
The application will be available at `http://localhost`.