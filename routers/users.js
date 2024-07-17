const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users_Controller');
const User = require('../models/users');

router.get('/',UserController.usersPage);
router.get('/profile', UserController.profile);
router.get('/sign-in', UserController.sign_in);

router.post('/New_User' , (req, res)=>{
    if(req.body.password===req.body.password2){
        User.create({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password2
        });
    }
    return res.redirect('/users');
}
);
router.get('/sign-up', UserController.sign_up);

module.exports = router;