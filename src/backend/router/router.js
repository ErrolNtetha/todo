const express = require('express');
const router = express.Router();
const register_user = require('../controllers/userController');

router.get('/', )
router.post('/register', register_user);

module.exports = router