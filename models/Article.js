const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Title not provided'],
  },
  authors: {
    type: String,
    require: [true, 'Authors not provided'],
  },
  source: {
    type: String,
    require: [true, 'Source not provided'],
  },
  pubYear: {
    type: String,
    require: [true, 'Published year not provided'],
  },
  doi: {
    type: String,
    require: [true, 'DOI not provided'],
  },
  claimedBenefit: {
    type: String,
    require: [true, 'Claimed benefit not provided'],
  },
  levelOfEvidence: {
    type: String,
    require: [true, 'Level of evidence not provided'],
  },
})

module.exports = mongoose.model('Article', ArticleSchema)
