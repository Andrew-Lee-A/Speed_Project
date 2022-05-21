const { StatusCodes } = require('http-status-codes')
const Article = require('../models/Article')

const getAllPendingArticles = async (req, res) => {
  const pendingArticles = await Article.find({ status: 'pending' })
  res.status(StatusCodes.OK).json({ pendingArticles })
}

const acceptArticle = async (req, res) => {
  const { id } = req.params
  const { recommended } = req.body

  const article = await Article.findByIdAndUpdate(
    id,
    {
      recommended: recommended,
      status: 'accepted',
    },
    { new: true, runValidators: true }
  )

  if (!article) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: 'no matching article' })
    return
  }

  res.status(StatusCodes.OK).json({ article })
}

const rejectArticle = async (req, res) => {
  const { id } = req.params
  const article = await Article.findByIdAndDelete(id)

  if (!article) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: 'no matching article' })
    return
  }

  res.status(StatusCodes.OK).json({ article })
}

module.exports = { getAllPendingArticles, acceptArticle, rejectArticle }
