var express = require('express');
var router = express.Router();

const userController = require('./../controllers/userController');

/** User routes */

// GET user information
router.post('/register', userController.register);

module.exports = router;