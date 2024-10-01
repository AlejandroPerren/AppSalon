import express from 'express';
import { register } from '../controllers/auth/registerController';
import { login } from '../controllers/auth/loginController';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';

const router = express.Router(); 


router.post('/citas',tokenMiddleware, register);
router.post('/ingresos',tokenMiddleware, login);


export default router; 
