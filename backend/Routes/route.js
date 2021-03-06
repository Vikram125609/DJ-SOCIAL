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
router.post('/signin',userController().postsignin);
router.put('/update/:id/:password',userController().update);
router.get('/:id',userController().user);
// The below request is used to follow the user
router.put('/follow/:id',userController().follow)
module.exports = router;