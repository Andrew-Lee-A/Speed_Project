const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const auth = async (req, res, next) => {
  const authHead = req.headers.authorization
  console.log(req.headers)
  console.log(authHead)
  console.log(req.body)
  if (!authHead || !authHead.startsWith('Bearer ')) {
    throw new Error()
  }

  const token = authHead.split(' ')[1]

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET)
    req.user = {
      userID: verifiedUser.userID,
      username: verifiedUser.username,
      permission: verifiedUser.permission,
    }
    next()
  } catch (e) {
    throw new Error('Not Authorized')
  }
}

module.exports = auth
