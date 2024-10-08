import express from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { CitasAdminController } from '../controllers/admin/citasController';

const router = express.Router(); 

router.get('/citas',tokenMiddleware, CitasAdminController);
router.post('/modcitas',tokenMiddleware, );



export default router; 
