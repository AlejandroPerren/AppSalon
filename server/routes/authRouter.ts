import express from 'express';
import { register } from '../controllers/auth/registerController';
import { login } from '../controllers/auth/loginController';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { profile } from '../controllers/auth/profileController';

const router = express.Router(); 

// Registrar
router.post('/register', register);
router.post('/login', login);


// Profile
router.get('/profile',tokenMiddleware, profile);
export default router; 
