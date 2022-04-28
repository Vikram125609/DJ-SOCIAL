const express = require('express');
const homeController = require('../Controller/homeController');
const userController = require('../Controller/userController');
const router = express.Router();
router.get('/',homeController().home);
router.get('/signup',userController().singup);
router.post('/signup',userController().register);
module.exports = router;