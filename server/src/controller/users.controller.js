const userService = require('../service/users.service')
const userValidation = require('../validation/users.validation')
const passwordValidation = require('../utils/password')
const createUser = async (req, res, next) => {
  const { username, email, password, boards } = req.body 
  await userValidation.validateUser(req, res, async() => {
    try {
      const hashedPassword = await passwordValidation.hashPassword(password)
      const user = await userService.createUserService(
        username,
        email,
        hashedPassword,
        boards)
      return res.status(201).json(user)
  } catch (error) { next(error) }
  })
}

module.exports={createUser}