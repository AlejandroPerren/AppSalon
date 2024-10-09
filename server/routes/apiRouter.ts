import express from 'express';
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import { citasUsuario, crearCita } from '../controllers/api/citas';
import { getAllServices } from '../controllers/api/servicios';


const router = express.Router(); 

// Logout//Login
router.post('/Createcita', tokenMiddleware, crearCita);
router.post('/cita', tokenMiddleware, citasUsuario);
router.get('/servicios',tokenMiddleware, getAllServices)
export default router; 
