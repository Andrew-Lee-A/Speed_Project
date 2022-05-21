const { StatusCodes } = require('http-status-codes')
const Article = require('../models/Article')

const getAllPendingArticles = async (req, res) => {
  const pendingArticles = Article.find()
  res.status(StatusCodes.OK).json(pendingArticles)
}

module.exports = { getAllPendingArticles }
