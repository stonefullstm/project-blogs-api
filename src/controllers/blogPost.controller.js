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

const getById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await blogPostService.findByPk(id);
  if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(blogPost);
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user.data;
  const blogPost = await blogPostService.findByPk(id);
  if (!blogPost) return res.status(404).json({ message: 'Post does not exist' });
  if (blogPost.user.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const isUpdated = await blogPostService.updateBlogPost(id, req.body);

  if (isUpdated) {
    return res.status(200).json(await blogPostService.findByPk(id));
  }
};

module.exports = {
  createBlogPost,
  updateBlogPost,
  getAll,
  getById,
};