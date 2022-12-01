const express = require('express');
const userRouter = require('./user.router');

const routers = express.Router();
routers.use('/login', userRouter);

// routers.use(authMiddleware.validateToken);
// routers.use('/courses', courseRouter);

// routers.use('/students', studentRouter);
// routers.use('/modules', moduleRouter);

module.exports = routers;