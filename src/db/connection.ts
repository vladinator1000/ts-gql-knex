import Knex from 'knex'

import env from '../env'

const knexfile = require('./knexfile')
export const connection: Knex = Knex(knexfile[env.NODE_ENV])

connection
  .raw('select 1')
  .then(() => {
    console.log(`Connected to database - OK`)
  })
  .catch(err => {
    console.error(`Failed to connect to database: ${err}`)

    process.exit(1)
  })