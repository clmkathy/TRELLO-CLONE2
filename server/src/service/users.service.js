const { User } = require('../models/user.model')

const createUserService = async(username,email,password,boards) => {
  const user = new User({ username, email, password, boards })
  return user.save()
}

module.exports={createUserService}