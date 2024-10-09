import express from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { CitasAdminController } from '../controllers/admin/citasController';
import { updateService } from '../controllers/admin/actServicios';
import { isAdmin } from '../middlewares/authMiddleware';

const router = express.Router(); 

router.get('/citas',tokenMiddleware, CitasAdminController);
router.post('/modcitas',tokenMiddleware, );
router.put('/servicios/:id', tokenMiddleware, isAdmin , updateService);


export default router; 
