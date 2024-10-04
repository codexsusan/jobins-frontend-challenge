# JOBINS FRONTEND CHALLENGE

This project is a React application built with Vite and uses JSON Server for mock API data.

## Table of Contents

- Prerequisites
- Installing
- Running the application
- Using JSON Server
  

## Prerequisites

Before you begin, ensure you have the following installed:

Node.js (version 14.0.0 or later)
npm (usually comes with Node.js)



## Installation

1. Clone the repository:
   
    ```bash
    git clone https://github.com/codexsusan/jobins-frontend-challenge
    ```
2. Navigate to the project directory:
   
   ```bash
   cd jobins-frontend-challenge
   ```
3. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

To run the application in development mode:

1. Start the JSON Server:
   
   ```bash
    npm run server
    ```
2. In a new terminal, start the Vite development server:
   ```bash
    npm run dev
    ```
3. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).


## Using JSON Server

This project uses JSON Server to simulate a REST API. The mock data is stored in `db.json` at the root of the project.

To start JSON Server:

```bash
npm run server
```

This will start JSON Server on `http://localhost:3001`. You can now make HTTP requests to this endpoint in your React application.
