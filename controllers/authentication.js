const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const req = require('express/lib/request')

const signUp = async(req, res) => {
    const user = await User.create(req.body)
    const token = user.signJWT()
    res.status(StatusCodes.OK).json({user: {username: user.username, permission: user.permission}, token: token})
}

const login = async(req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        throw new Error
    }

    const user = user.findOne({username})

    if(!user) {
        throw new Error
    }

    const passwordIsValid = user.verifyPassword(password)

    if(!passwordIsValid) {
        throw new Error
    }

    const token = user.signJWT()
    res.status(StatusCodes.OK).json({user: {username: user.username, permission: user.permission}, token: token})
}

module.exports = {
    signUp,
    login
}