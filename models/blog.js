//Creating the MongoDB schema for blogs and connecting

const mongoose = require('mongoose')
const logger = require('../utils/logger')
const url = process.env.MONGODB_URL
mongoose.set('strictQuery', false)

mongoose.connect(url)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch(err => { logger.info('Error') })


const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
