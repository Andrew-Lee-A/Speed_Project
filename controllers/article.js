const {StatusCodes} = require('http-status-codes')

const getAllArticles = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'get all articles'})
}

const getArticle = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'get a single article'})
}

const addArticle = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'add a single article'})
}

module.exports = {
    getAllArticles,
    getArticle,
    addArticle
}