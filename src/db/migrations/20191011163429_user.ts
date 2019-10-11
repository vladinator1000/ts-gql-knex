import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user', table => {
    // Primary Key
    table.increments()

    // Other columns
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.timestamps()
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.raw('DROP TABLE "user" CASCADE')
}
