const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

const auth = async (req, res, next) => {
    const authHead = req.headers.authorization

    if(!authHead || authHead.startsWith('Bearer ')) {
        throw new Error
    }

    const token = authHead.split(' ')[1]

    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userID: verifiedUser.userID, username: verifiedUser.username, permission: verifiedUser.permission}
    } catch (e) {
        throw new Error
    }
}

module.exports = auth