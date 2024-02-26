const express = require('express');
const { Registration, Login } = require('../Controller/userController');
const userRoutes = express.Router();

userRoutes.post('/Registration',Registration)
userRoutes.post('/Login',Login)



module.exports = {userRoutes}