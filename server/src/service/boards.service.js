const { Board } = require('../models/board.model')
//create a new board
const createBoardService = async ({ title, description, members, lists }) => {
  const board = new Board({ title, description, members, lists })
  return board.save()
}

module.exports = { createBoardService }
