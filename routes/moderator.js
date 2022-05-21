const express = require('express')
const router = express.Router()

const { getAllPendingArticles } = require('../controllers/moderator')

router.route('/').get(getAllPendingArticles)

module.exports = router
