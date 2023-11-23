const { Router } = require('express')
const {createUser} = require('../controller/users.controller')

const userRouter= Router()

// 在这里把controller和route关联起来

userRouter.post('/',createUser)

module.exports = userRouter