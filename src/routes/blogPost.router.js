const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { validateToken } = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');
const { existCategory } = require('../middlewares/existCategory');

const router = express.Router();

router.post('/', validateToken, validateBlogPost, existCategory, blogPostController.createBlogPost);
router.get('/', validateToken, blogPostController.getAll);

module.exports = router;