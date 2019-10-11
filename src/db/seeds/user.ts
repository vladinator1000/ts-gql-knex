import * as Knex from 'knex'
import UserModel from '../models/User'

exports.seed = async (knex: Knex): Promise<any> => {
  const userModel = new UserModel(knex)

  const testUsers = [
    {
      name: 'test1',
      email: 'test1@ts-gql-knex.com',
      password: 'Password123',
    },
    {
      name: 'test2',
      email: 'test2@ts-gql-knex.com',
      password: 'Password123',
    },
  ]
  return Promise.all(testUsers.map(user => userModel.create(user)))
}
