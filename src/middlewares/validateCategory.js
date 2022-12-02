const Joi = require('joi');

const validateNewCategory = Joi.object(
  {
    name: Joi.string().required(),
  },
);

module.exports = (req, res, next) => {
  const { error } = validateNewCategory.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};