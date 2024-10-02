import { Request, Response } from 'express';
import db from '../../config.js/mysql';
import { Pool, RowDataPacket } from 'mysql2/promise'; 

type Cita = {
    id: number;//id_citas_servicios
    dni: string;
    nombreServicio: string;
    fecha: string;//revisar tipo fecha typeScript
    hora: string;
    duracion: number;
    precio: number;
    descripcion: string;
}
export const citasAdminController = async (req: Request, res: Response): Promise<Response> => {
    const {dni, id, nombreServicio, fecha, hora, precio, duracion, descripcion} = req.body as Cita;
    const userSQL = `SELECT * FROM usuarios WHERE dni = ?`;
    const citaSQL = 'SELECT '

   return res.status(200).json();
}



    
   