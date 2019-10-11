import * as path from 'path'
import { Config } from 'knex'
import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

const options = {
  client: 'postgresql',
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: path.join(__dirname, 'migrations'),
    stub: path.join(__dirname, 'migrations', 'migration.stub'),
  },
  seeds: {
    directory: path.join(__dirname, 'seeds'),
    stub: path.join(__dirname, 'seeds', 'seed.stub'),
  },
}

const config: Record<string, Config> = {
  development: options,

  // Can use other options for production instead
  production: options,
}

module.exports = config
