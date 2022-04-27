const express = require('express');
const homeController = require('../Controller/homeController');
const router = express.Router();
router.get('/',homeController().home);
module.exports = router;