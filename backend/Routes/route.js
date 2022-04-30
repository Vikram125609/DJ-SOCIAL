const express = require('express');
const homeController = require('../Controller/homeController');
const userController = require('../Controller/userController');
const verifyController = require('../Controller/verifyController');
const router = express.Router();
router.get('/',homeController().home);
router.get('/signup',userController().signup);
router.post('/signup',userController().postsignup);
router.get('/verify',verifyController().verify);
router.post('/verify',verifyController().postverify);
router.get('/signin',userController().signin);
router.post('/signin',userController().postsignin)
module.exports = router;