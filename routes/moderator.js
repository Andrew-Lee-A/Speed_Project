const express = require('express')
const router = express.Router()

const {
  getAllPendingArticles,
  acceptArticle,
  rejectArticle,
} = require('../controllers/moderator')

router.route('/').get(getAllPendingArticles)
router.route('/accept/:id').post(acceptArticle)
router.route('/reject/:id').post(rejectArticle)

module.exports = router
