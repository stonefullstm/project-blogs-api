const categoryService = require('../services/category.service');

const existCategory = async (req, res, next) => {
  const { categoryIds: array } = req.body;
  const categories = await categoryService.getAll();
  const categoryIds = categories.map((category) => category.id);
  const result = array.every((id) => categoryIds.includes(id));
  if (!result) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = { existCategory };