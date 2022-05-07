const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const signUp = async (req, res) => {
  const user = await User.create(req.body)
  const token = user.signJWT()
  res.status(StatusCodes.OK).json({
    user: { username: user.username, permission: user.permission },
    token: token,
  })
}

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    throw new Error('username or password not provided')
  }

  const user = await User.findOne({ username })

  if (!user) {
    throw new Error('User not found')
  }

  const passwordIsValid = await user.passwordIsValid(password)
  if (!passwordIsValid) {
    throw new Error('Invalid password')
  }

  const token = user.signJWT()
  res.status(StatusCodes.OK).json({
    user: { username: user.username, permission: user.permission },
    token: token,
  })
}

module.exports = {
  signUp,
  login,
}
