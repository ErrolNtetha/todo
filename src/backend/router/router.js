const express = require('express');
const router = express.Router();
const register_user = require('../controllers/userController');
const home = require('../controllers/userController');

router.get('/', home);
router.post('/signup', register_user);

module.exports = router