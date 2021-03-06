# ts-gql-knex

A starter template for GraphQL with Knex

## Quickstart

1. Run a database or use the one for testing 🐘 `make db` (you'll need 🐋 Docker installed)
1. Put all of your configuration in env variables or create a `.env` file in the root directory (for more information on config see [./src/env.ts](./src/env.ts))

```env
DB_NAME=mydb
DB_USER=postgres
DB_PASSWORD=test
```

2. Run migrations, seeds and start the server 💥 `yarn db:nuke`
3. Go to [http://localhost:4000/graphql](http://localhost:4000/graphql) and try this query

```graphql
mutation register {
  register(
    data: { name: "hello", email: "hello@hello.com", password: "Password123" }
  )
}
```

This will create a row in the `user` table of the database

4. Browse through the project structure, modify it and use this as a starting point for your next project 😎
