const express = require('express');
const categoryController = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

const router = express.Router();

router.get('/', validateToken, categoryController.getAll);
router.post('/', validateToken, validateCategory, categoryController.createCategory);

module.exports = router;