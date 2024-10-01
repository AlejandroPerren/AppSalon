import express from 'express';
import { register } from '../controllers/auth/registerController';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = express.Router(); 

// Logout//Login
router.post('/servicios',tokenMiddleware, register);

export default router; 
