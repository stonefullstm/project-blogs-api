const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
  const { id: userId } = req.user.data;
  const newBlogPost = await blogPostService.createBlogPost(req.body, userId);
  return res.status(201).json(newBlogPost);
};

const getAll = async (_req, res) => {
  const blogPosts = await blogPostService.getAll();
  return res.status(200).json(blogPosts);
};

module.exports = {
  createBlogPost,
  getAll,
};