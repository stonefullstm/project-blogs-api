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

module.exports = {
  login,
};