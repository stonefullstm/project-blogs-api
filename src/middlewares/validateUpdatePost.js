const Joi = require('joi');

const validateUpdateBlogPost = Joi.object(
  {
    title: Joi.string().required(),
    content: Joi.string().required(),
  },
);

module.exports = (req, res, next) => {
  const { error } = validateUpdateBlogPost.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};