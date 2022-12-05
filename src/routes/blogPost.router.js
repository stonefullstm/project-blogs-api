const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { validateToken } = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');
const validateUpdatePost = require('../middlewares/validateUpdatePost');
const { existCategory } = require('../middlewares/existCategory');

const router = express.Router();

router.get('/search', validateToken, blogPostController.getAllByTerm);
router.post('/', validateToken, validateBlogPost, existCategory, blogPostController.createBlogPost);
router.get('/', validateToken, blogPostController.getAll);
router.get('/:id', validateToken, blogPostController.getById);
router.put('/:id', validateToken, validateUpdatePost, blogPostController.updateBlogPost);
router.delete('/:id', validateToken, blogPostController.deleteBlogPost);

module.exports = router;