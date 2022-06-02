const { StatusCodes } = require('http-status-codes')

const getUserInfo = async (req, res) => {
  res.status(StatusCodes.OK).json(req.user)
}

module.exports = { getUserInfo }
