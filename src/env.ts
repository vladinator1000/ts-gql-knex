type Environment = {
  NODE_ENV: string
  DB_NAME: string
  DB_USER: string
  DB_PASSWORD: string
  CLIENT_URL: string
  PORT: number
}

const env: Environment = {
  NODE_ENV: process.env.NODE_ENV || process.env.ENV || 'development',
  DB_NAME: process.env.DB_NAME || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  CLIENT_URL: process.env.CLIENT_URL || 'localhost:3000',
  PORT: parseInt(process.env.PORT || '') || 4000,
}

export default env
