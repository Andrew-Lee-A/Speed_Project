const express = require('express')
const { route } = require('express/lib/router')
const router = express.Router()

const {
    getAllArticles,
    getArticle,
    addArticle
} = require('../controllers/article')

router.route('/').get(getAllArticles).post(addArticle)
router.route('/:id').get(getArticle)