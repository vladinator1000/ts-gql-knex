export interface KnexMigrationsTable {
  id: number
  name: string | null
  batch: number | null
  migration_time: string | null
}

export interface KnexMigrationsLockTable {
  is_locked: number | null
}

export interface UserTable {
  id: number
  name: string
  email: string
  password: string
  created_at: string
  updated_at: string | null
}
