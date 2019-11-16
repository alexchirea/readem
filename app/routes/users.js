var express = require('express');
var router = express.Router();

const userController = require('./../controllers/userController');

/** User routes */

// GET user information
router.get('/profile/:id', userController.profile);

module.exports = router;