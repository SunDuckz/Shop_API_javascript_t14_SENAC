const connection = require('../database/connection.js');
const express = require('express');
const router = express.router();
const userController = require('../controllers/userController.js');

router.get('/Clientes', userController.getUsers)

module.exports = router