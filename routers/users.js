const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users_Controller');
const User = require('../models/UserSchema');

router.get('/',UserController.usersPage);
router.get('/profile', UserController.profile);
router.get('/sign-in', UserController.sign_in);
router.get('/sign-up', UserController.sign_up);

module.exports = router;