const express = require('express');
const { register } = require('../controllers/auth/registerController');
const router = express.router();

//register
router.post('/register', register)
    



module.exports = router