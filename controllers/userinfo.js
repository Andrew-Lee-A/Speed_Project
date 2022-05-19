const { StatusCodes } = require('http-status-codes')

const getUserInfo = async (req, res) => {
  if (!req.user.error) {
    res.status(StatusCodes.OK).json(req.user.username)
  } else {
    res.status(StatusCodes.UNAUTHORIZED.json({ error: 'not authorized' }))
  }
}

module.exports = { getUserInfo }
