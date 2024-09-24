import express from 'express';
import { register } from '../controllers/auth/registerController';

const router = express.Router(); 

// Registrar
router.post('/register', register);

export default router; 
