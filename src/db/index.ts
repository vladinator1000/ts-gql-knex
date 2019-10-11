import { connection } from './connection'

import UserModel from './models/User'

const userModel = new UserModel(connection)

export {
  UserModel,
  // Instantiated models
  userModel,
}
