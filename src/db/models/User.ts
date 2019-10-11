import DataModel from './DataModel'
import { UserTable } from '../types'
import { RegisterInput } from '../../graphql/generated'

export default class UserModel extends DataModel {
  async create(
    data: RegisterInput,
  ): Promise<Omit<UserTable, 'password'> | undefined> {
    try {
      const result = await this.db<UserTable>('user')
        .insert({
          ...data,
          password: "don't store plaintext passwords",
        })
        .returning('*')

      if (result) {
        delete result[0].password

        return result[0]
      }

      return result
    } catch (error) {
      throw error
    }
  }

  getById(id: number) {
    return this.db<UserTable>('user')
      .select()
      .where({ id })
      .first()
  }
}
