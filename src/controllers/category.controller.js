const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { dataValues } = await categoryService.createCategory({ name });
  res.status(201).json(dataValues);
};

const getAll = async (_req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAll,
};