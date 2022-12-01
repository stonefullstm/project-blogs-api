const express = require('express');
const userController = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/validateToken');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.get('/', validateToken, userController.getAll);
router.post('/', validateUser, userController.createUser);

module.exports = router;