const userService = require('../services/user.service');
const jwtUtil = require('../utils/jwt.util');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  const user = await userService.validateLogin(req.body);
  if (!user || user.length === 0) return res.status(400).json({ message: 'Invalid fields' });
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);
  res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { email } = req.body;
  let user = await userService.findOneByEmail({ email });
  if (user) return res.status(409).json({ message: 'User already registered' });
  user = await userService.createUser(req.body);
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwtUtil.createToken(userWithoutPassword);
  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  login,
  createUser,
  getAll,
};