# Database Configuration

This folder contains PostgreSQL database initialization and migration scripts.

## Setup

1. **Install PostgreSQL** (if not already installed):

   ```bash
   brew install postgresql@16
   brew services start postgresql@16
   ```

2. **Create the database**:

   ```bash
   createdb adisolar
   ```

3. **Configure connection** — update `backend/.env`:

   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/adisolar
   ```

4. **Tables are auto-created** on first server start via `backend/src/db.ts`.

## Schema

| Table       | Description                              |
| ----------- | ---------------------------------------- |
| `Admin`     | Admin users for CRM dashboard            |
| `User`      | Regular users (customers)                |
| `Lead`      | Customer inquiries & contact submissions |
| `SiteVisit` | Scheduled site visits linked to leads    |
| `Analytics` | Page view & interaction tracking         |

## Prisma

The Prisma schema at `backend/prisma/schema.prisma` is configured for PostgreSQL and can be used for migrations:

```bash
cd backend
npx prisma migrate dev --name init
```
