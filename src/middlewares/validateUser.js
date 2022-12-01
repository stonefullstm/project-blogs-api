const Joi = require('joi');

const validateNewUser = Joi.object(
  {
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  },
);

module.exports = (req, res, next) => {
  const { error } = validateNewUser.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};