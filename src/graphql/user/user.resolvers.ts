import { Resolvers } from '../generated'
import { userModel } from '../../db'

export const resolvers: Resolvers = {
  Query: {
    async currrentUser(_, __, _context) {
      // Here you would need to get user id from the context
      // ⚠ It won't magically appear there unless you put it using express middleware
      const result = await userModel.getById(1)

      if (result) {
        return result
      }

      return null
    },
  },
  Mutation: {
    async register(_, { data }) {
      const result = await userModel.create(data)

      if (result) {
        return true
      }

      return false
    },
  },
}

export default resolvers
