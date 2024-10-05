import express from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { CitasAdminController , deleteCita, CitaAdminController } from '../controllers/admin/citasController';

const router = express.Router(); 

router.get('/citas',tokenMiddleware, CitasAdminController);
router.get('/delcitas',tokenMiddleware, deleteCita);
router.get('/cita',tokenMiddleware, CitaAdminController);


export default router; 
