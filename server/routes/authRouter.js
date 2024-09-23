const express = require('express');
const { register } = require('../controllers/auth/registerController');
const router = express.Router(); 

// Registrar
router.post('/register', register);

module.exports = router; 
