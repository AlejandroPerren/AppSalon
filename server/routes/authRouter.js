const express = require('express');
const { register } = require('../controllers/auth/registerController');
const router = express.Router();  // Cambiado a Router() con "R" mayúscula

// Registrar
router.post('/register', register);

module.exports = router; // Corregido el error en la exportación
