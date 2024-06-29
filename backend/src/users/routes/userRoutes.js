const express = require('express');
const router = express.Router();
const authenticateUser = require('../../middlewares/authenticateUser');
const UserController = require('../controllers/userController');

// Example route with authentication middleware
router.get('/', authenticateUser, UserController.getAllUsers);

module.exports = router;
