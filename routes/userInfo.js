const express = require('express')
const router = express.Router()

const { getUserInfo } = require('../controllers/userinfo')

router.route('/').get(getUserInfo)

module.exports = router
