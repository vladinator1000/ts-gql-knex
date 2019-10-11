import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
dotenv.config()

import modules from './graphql/modules'
import env from './env'

const app = express()

const apolloServer = new ApolloServer({
  modules,
})

apolloServer.applyMiddleware({
  app,
  cors: {
    origin: [env.CLIENT_URL],
    credentials: true,
  },
})

app.listen(env.PORT, '127.0.0.1', () =>
  console.info(`GraphQL listening on http://localhost:${env.PORT}/graphql 🌊`),
)
