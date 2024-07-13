const _ = require('lodash')
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {

  return blogs.reduce((sum, { likes }) => sum + likes, 0)
}

const checkFavoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  const favorite = blogs.reduce((prev, curr) => {
    return (prev.likes > curr.likes) ? prev : curr
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogs) => {
  //Grouping based on the author
  const groupByAuthor = _.groupBy(blogs, 'author')
  //Mapping every author array and returning the expected format
  const authorsWithBlogs = _.map(groupByAuthor, (tempBlogs, author) => ({
    author: author,
    blogs: tempBlogs.length
  }))
  return _.maxBy(authorsWithBlogs, 'blogs')
}

const mostLikes = (blogs) => {
  const groupByAuthor = _.groupBy(blogs, 'author')

  const authorWithLikes = _.map(groupByAuthor, (blogs, author) => ({
    author: author,
    likes: blogs.reduce((sum, blog) => sum + blog.likes, 0)
  }))

  return _.maxBy(authorWithLikes, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  checkFavoriteBlog,
  mostBlogs,
  mostLikes
}