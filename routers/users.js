const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users_Controller');

router.get('/',UserController.usersPage);
router.get('/profile', UserController.profile);

module.exports = router;