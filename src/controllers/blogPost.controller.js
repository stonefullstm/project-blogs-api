const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
  const { id: userId } = req.user.data;
  const newBlogPost = await blogPostService.createBlogPost(req.body, userId);
  return res.status(201).json(newBlogPost);
};

module.exports = {
  createBlogPost,
};