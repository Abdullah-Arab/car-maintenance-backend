# Car Maintenance Tracker Backend

This is the backend for a mobile app that helps users track their car maintenance, insurance, and registration, and sends notifications before expiration dates. The backend is built with **Node.js**, **TypeScript**, **Express**, **PostgreSQL**, and **Prisma**.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [License](#license)

## Features

- User management (create and list users).
- Vehicle management (add and list vehicles).
- Manage maintenance records, insurance policies, and registration.
- Notifications for upcoming maintenance, insurance, and registration expirations.
  
## Technologies

- **Node.js**: JavaScript runtime environment
- **Express**: Fast and minimal web framework
- **TypeScript**: Type-safe JavaScript
- **PostgreSQL**: Relational database management system
- **Prisma**: ORM for database interaction

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or above)
- **PostgreSQL** (v12 or above)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/username/car-tracker-backend.git
cd car-tracker-backend
```

### 2. Install Dependncies

    ```bash
    npm install
    ```

### 3. Set Up PostgreSQL Database

Make sure you have PostgreSQL installed and running. Create a new database and update the connection string in the `.env` file.

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
```

### 5. Run Prisma Migrations

    ```bash
    npx prisma migrate dev
    ```

### 6. Start the Server

    ```bash
    npm run dev
    ```


## Project Structure

The project structure is as follows:

```
car-tracker-backend/
├── prisma/                # Prisma schema and migrations
├── src/
│   ├── controllers/       # Controller logic
│   ├── models/            # Prisma models and DB logic
│   ├── routes/            # API routes
│   └── app.ts             # Express app setup
│   └── index.ts           # Main entry point
├── package.json
├── tsconfig.json
└── .env                   # Environment variables
```
