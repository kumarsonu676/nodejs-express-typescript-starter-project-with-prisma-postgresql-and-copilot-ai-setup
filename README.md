# Node Express With TypeScript & PostgreSQL - Backend

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/muneebhashone/typescript-backend-toolkit)

This repository contains the backend implementation for the **Node Express With TypeScript & PostgreSQL - Backend**. It is built using **Node.js**, **Express**, **TypeScript**, and **Prisma** with **PostgreSQL** as the database.

---

## Features

- **User Management**: Create, update, delete, and retrieve user information.
- **Authentication**: Secure login, JWT-based authentication, and token refresh.
- **Role-Based Access Control**: Authorization based on user roles (Admin, Staff, User).
- **Validation**: Request payload validation using Yup.
- **Error Handling**: Centralized error-handling middleware.
- **Database Integration**: Prisma ORM with PostgreSQL.
- **Dependency Injection**: Inversify for modular and testable code.
- **Environment Configuration**: `.env` file support for environment variables.
- **Scalable Architecture**: Clean and modular folder structure.

---

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **TypeScript**: Strongly typed JavaScript for better maintainability.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database.
- **Inversify**: Dependency injection for modular architecture.
- **Yup**: Schema validation for request payloads.
- **JWT**: Secure authentication and authorization.

---

## Folder Structure

```plaintext
backend/
├── public/                 # Static files
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── dtos/               # Data Transfer Objects
│   ├── enums/              # Enums for constants
│   ├── exceptions/         # Custom error classes
│   ├── middlewares/        # Express middlewares
│   ├── models/             # Data models
│   ├── params/             # Query/filter parameters
│   ├── prisma/             # Prisma schema and client
│   ├── repositories/       # Database repositories
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   ├── validators/         # Yup validation schemas
│   └── index.ts            # Application entry point
├── .env.example            # Example environment variables
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16+)
- **PostgreSQL** (v12+)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kumarsonu676/nodejs-express-typescript-starter-project-with-prisma-postgresql-and-copilot-ai-setup.git
   cd nodejs-express-typescript-starter-project-with-prisma-postgresql-and-copilot-ai-setup
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Copy `.env.example` to `.env` and update the values.

4. Run database migrations:

   ```bash
   npm run db:migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Authentication

- `POST /api/auth/login`: User login.
- `POST /api/auth/register`: User registration.
- `POST /api/auth/refresh-token`: Refresh JWT token.
- `POST /api/auth/logout`: User logout.

### Users

- `GET /api/users/me`: Get current logged in user
- `GET /api/users/getbyemail`: Get user by Email.
- `GET /api/users/:id`: Get user by ID.
- `PUT /api/users/:id`: Update user by ID.
- `DELETE /api/users/:id`: Delete user by ID.

### Health Check

- `GET /api/health/check`: Check server health.

---

## Environment Variables

| Variable       | Description                    | Example                     |
| -------------- | ------------------------------ | --------------------------- |
| `PORT`         | Server port                    | `3001`                      |
| `NODE_ENV`     | Environment (development/test) | `development`               |
| `DATABASE_URL` | PostgreSQL connection string   | `postgres://user:pass@host` |
| `JWT_SECRET`   | Secret key for JWT             | `your_jwt_secret`           |
| `JWT_AUDIENCE` | JWT audience                   | `your_audience`             |
| `JWT_ISSUER`   | JWT issuer                     | `your_issuer`               |

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run start`: Start the production server.
- `npm run db:migrate`: Run database migrations.
- `npm run prisma:generate`: Generate Prisma client.

---

## Contributing

Contributions are welcome! Please follow the [Code of Conduct](./CODE_OF_CONDUCT.md) and submit a pull request.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
