const express = require('express');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');

const validateUser = require('../middlewares/validateUser');

const routers = express.Router();
routers.use('/login', loginRouter);
routers.use('/user', validateUser, userRouter);

// routers.use(authMiddleware.validateToken);
// routers.use('/courses', courseRouter);

// routers.use('/students', studentRouter);
// routers.use('/modules', moduleRouter);

module.exports = routers;