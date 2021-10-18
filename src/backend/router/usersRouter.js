const express = require('express');
const router = express.Router();

// Require all controllers ::: That is, the callback functions for each route
const register_controller = require('../controllers/userController');
const user_controller = require('../controllers/userController');

router.post('/', register_controller.register_user);
router.get('/', user_controller.userList);

module.exports = router