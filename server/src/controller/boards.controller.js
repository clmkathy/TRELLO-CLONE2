const boardService = require('../service/boards.service')
const boardValidation = require('../validation/boards.validation')

const createBoard = async (req, res, next) => {
  const { title, description, members, lists } = req.body
  boardValidation.validateBoard(req, res, async () => {
    try {
      const board = await boardService.createBoardService(req.body)
      return res.status(201).json(board)
    } catch (error) {
      next(error)
    }
  })
}

module.exports = { createBoard }
