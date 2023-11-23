const { Router } = require('express')
const boardRouter = require('./board.routes')
const userRouter = require('./user.routes')
const v1Router = Router()

v1Router.use('/boards', boardRouter)
v1Router.use('/users', userRouter)

module.exports = v1Router
