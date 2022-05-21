const Article = require('../models/Article')
const { StatusCodes } = require('http-status-codes')

const getAllArticles = async (req, res) => {
  const articles = await Article.find({ status: 'accepted' })
  res.status(StatusCodes.OK).json({ articles })
}

const getArticle = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'get a single article' })
}

const addArticle = async (req, res) => {
  const article = await Article.create(req.body)
  res.status(StatusCodes.OK).json(article)
}

module.exports = {
  getAllArticles,
  getArticle,
  addArticle,
}
