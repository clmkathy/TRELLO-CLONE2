const { Router } = require('express')
const { createBoard } = require('../controller/boards.controller')
const boardRouter = Router()

boardRouter.post('/', createBoard)

module.exports = boardRouter
