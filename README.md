# EmplBack

A simple Node.js/TypeScript backend for managing employee records using Express and MySQL.

## Project Overview

This repository implements an employee management API with the following structure:

- `src/index.ts` - application entry point
- `src/Server.ts` - Express server setup
- `src/routes/EmplRoutes.ts` - API route definitions
- `src/controllers/EmplController.ts` - request handling logic
- `src/repository/EmplRepository.ts` - MySQL data access layer
- `src/model/Employee.ts` - employee data model
- `src/config/dbConfig.ts` - MySQL connection configuration

## Prerequisites

- Node.js 18+ (or compatible)
- MySQL server
- `npm`

## Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd EmplBack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Database Setup

This project connects to a MySQL database using the configuration in `src/config/dbConfig.ts`.

Default configuration:

- host: `localhost`
- port: `3306`
- user: `root`
- password: `sion999`
- database: `cool_app`

Update `src/config/dbConfig.ts` to match your local database credentials.

### Example table schema

Create an `employees` table similar to the following:

```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  hire_date DATE NOT NULL,
  position VARCHAR(100) NOT NULL
);
```

## Running the App

Start the server:

```bash
npm start
```

The API will run on `http://localhost:3000`.

## API Endpoints

Base path: `/empl`

- `GET /empl/hello`
  - Returns a simple hello message.
- `GET /empl/`
  - Returns all employees.
- `GET /empl/get/:id`
  - Returns a single employee by ID.
- `POST /empl/add`
  - Adds a new employee.
  - Request body should include:
    - `firstName`
    - `lastName`
    - `hireDate`
    - `position`
- `PUT /empl/position/:id`
  - Updates the `position` for an employee.
  - Request body should include:
    - `position`
- `DELETE /empl/delete/:id`
  - Deletes an employee by ID.

## Notes

- The repository currently uses `mysql2/promise` and `ts-node` for runtime TypeScript execution.
- The controller methods return JSON responses and basic error handling for missing records.
- If you want to add database migrations or seed data, update the SQL files or add a migration layer.

## Recommended Improvements

- Add input validation for request payloads
- Add proper response payloads for create/update operations
- Add automated tests and/or validation for SQL operations
- Move sensitive database credentials to environment variables
