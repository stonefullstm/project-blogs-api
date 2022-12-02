const express = require('express');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');

const routers = express.Router();
routers.use('/login', loginRouter);
routers.use('/user', userRouter);
routers.use('/categories', categoryRouter);

// routers.use(validateToken);
// routers.use('/user', validateToken, validateUser, userRouter);

// routers.use('/students', studentRouter);
// routers.use('/modules', moduleRouter);

module.exports = routers;