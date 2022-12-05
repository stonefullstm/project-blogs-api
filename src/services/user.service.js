const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findOneByEmail = async ({ email }) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const findByPk = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const deleteUser = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  validateLogin,
  createUser,
  findOneByEmail,
  getAll,
  findByPk,
  deleteUser,
};