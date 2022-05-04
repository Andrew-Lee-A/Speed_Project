const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 12,
        require: [true, 'No username provided'],
        unique
    },
    password: {
        type: String,
        minLength: 7,
        require: [true, 'No password provided']
    },
    permission: {
        type: String,
        enum: ['user', 'moderator', 'analyst']
    }
})

UserSchema.pre('save', async function() {
    this.permission = 'user' // a user cannot be created with higher level permissions
    
    const salt = await bcrypt.genSalt(11)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.signJWT = function() {
    return jwt.sign(
        {
        userID: this._id,
        username: this.username,
        permission: this.permission
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFECYCLE
        }
    )
}

UserSchema.methods.verifyPassword = async function (inputPassword) {
    const isValid = await bcrypt.compare(inputPassword, this.password)
    return isValid
}

module.exports = mongoose.model('User', UserSchema)