const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const findOneByEmail = async ({ email }) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token not found');
    throw e;
  }

  const user = jwtUtil.validateToken(token);
  return user;
};

module.exports = {
  validateLogin,
  validateToken,
  createUser,
  findOneByEmail,
};