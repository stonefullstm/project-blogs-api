const express = require('express');
const userController = require('../controllers/user.controller');
const { validateToken } = require('../middlewares/validateToken');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.get('/', validateToken, userController.getAll);
router.post('/', validateUser, userController.createUser);
router.get('/:id', validateToken, userController.getById);
router.delete('/me', validateToken, userController.deleteUser);

module.exports = router;