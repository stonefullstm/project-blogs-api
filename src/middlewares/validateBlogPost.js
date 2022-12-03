const Joi = require('joi');

const validateNewBlogPost = Joi.object(
  {
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  },
);

module.exports = (req, res, next) => {
  const { error } = validateNewBlogPost.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};