const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/', userController.home);

router.get('/about', userController.about);


module.exports = router;
