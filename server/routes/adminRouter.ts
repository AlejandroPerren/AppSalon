import express from 'express';

import { login } from '../controllers/auth/loginController';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { citasAdminController } from '../controllers/admin/citasController';

const router = express.Router(); 

router.post('/citas',tokenMiddleware, citasAdminController);
router.post('/ingresos',tokenMiddleware, login);


export default router; 
