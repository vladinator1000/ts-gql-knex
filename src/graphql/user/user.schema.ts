import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    currrentUser: User
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(data: RegisterInput!): Boolean!
  }
`
