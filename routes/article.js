const express = require('express')
const router = express.Router()

const {
  getAllArticles,
  getArticle,
  addArticle,
} = require('../controllers/article')

router.route('/').get(getAllArticles).post(addArticle)
router.route('/:id').get(getArticle)

module.exports = router
