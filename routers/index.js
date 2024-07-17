const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
//const loginPage = require('../controllers/')

console.log("express Router is used");

router.get('/', homeController.home);
router.use('/users', require('./users'));
module.exports = router;
