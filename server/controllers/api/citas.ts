import { Request, Response } from 'express';
import db from '../../config.js/mysql';
import { Pool } from 'mysql2/promise';


export const crearCita = async (req: Request, res: Response): Promise<Response> => {
    const { id_usuario, fecha, hora, servicios } = req.body;

    if (!id_usuario || !fecha || !hora || !servicios || !Array.isArray(servicios)) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }

    try {
        const connection = await (db as Pool).getConnection();
        
        const [citaResult] = await connection.query(
            'INSERT INTO citas (id_usuario, fecha, hora, estado) VALUES (?, ?, ?, ?)', 
            [id_usuario, fecha, hora, 'pendiente']
        );
        const id_cita = (citaResult as any).insertId;
        
        const promises = servicios.map((id_servicio: number) =>
            connection.query('INSERT INTO citas_servicios (id_cita, id_servicio) VALUES (?, ?)', [id_cita, id_servicio])
        );
        await Promise.all(promises);

        connection.release();
        return res.json({ message: 'Cita creada exitosamente' });
    } catch (error) {
        console.error('Error al crear cita', error);
        return res.status(500).json({ error: 'Error al crear la cita' });
    }
};
export const citasUsuario = async (req: Request, res: Response) => {
    const user = res.locals.user; 
    const userId = user.id; 
  
    const SQL = `
      SELECT citas.id_cita, servicios.nombre_serv, citas.fecha, citas.hora, citas.estado
      FROM citas 
      JOIN citas_servicios ON citas.id_cita = citas_servicios.id_cita 
      JOIN servicios ON servicios.id = citas_servicios.id_servicio 
      WHERE citas.id_usuario = ?`;
  
    try {
      const connection = await (db as Pool).getConnection();
      const [rows] = await connection.query(SQL, [userId]);
      connection.release();
      return res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener citas.' });
    }
  };