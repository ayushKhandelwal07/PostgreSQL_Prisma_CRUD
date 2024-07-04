# Prisma PostgreSQL CRUD Operations

This repository demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Prisma with a PostgreSQL database.

### Prerequisites
Before you begin, ensure you have the following installed:

* Node.js (v14 or later)
* PostgreSQL
* Prisma CLI

Getting Started

## 1. Clone the Repository
```
git clone <repository-url>
cd prisma-postgresql-crud
```


## 2. Install Dependencies
```
npm install

```

## 3. Set Up PostgreSQL Database
Create a new PostgreSQL database and note down the connection details.

## 4. Configure Prisma
Update the DATABASE_URL in your .env file with your PostgreSQL connection string.

```
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/
<database>?schema=public"
```


## 5. Define Your Data Model
In **prisma/schema.prisma**, define your data model.

```
datasource db {
  provider = "postgresql"
  url   = env("DATABASE_URL")
}

model User{
  id Int  @id @default(autoincrement())
  email String @unique
  firstName String?
  lastName String?
  password String
}


model Todo{
  id Int @id @default(autoincrement())
  title String
  done Boolean @default(false)
  description String?
  userId Int
}
```

## 6. Migrate Your Database
Run the following command to create the necessary database tables:

```
npx prisma migrate dev --name init
```

## 7. Generate Prisma Client
Generate the Prisma client to interact with your database:

```
npx prisma generate
```

## 8. Perform CRUD Operations
Create a file **script.ts** to perform CRUD operations.
