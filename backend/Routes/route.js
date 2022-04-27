const express = require('express');
const homeController = require('../Controller/homeController');
const router = express.Router();
router.get('/',homeController().home);
router.get('/signup',homeController().signup);
module.exports = router;