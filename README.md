# ts-gql-knex

A starter template for GraphQL with Knex

1. Run a database `make db`
2. Run migrations, seeds and start the server `yarn db:nuke`
3. Go to [http://localhost:4000/graphql](http://localhost:4000/graphql) and try this query

```graphql
mutation register {
  register(
    data: { name: "hello", email: "hello@hello.com", password: "Password123" }
  )
}
```

This will create a row in the `user` table of the database

4. Use this as a starting point for your next project 😁
