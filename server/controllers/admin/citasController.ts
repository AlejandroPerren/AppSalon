import { Request, Response } from 'express';
import db from '../../config.js/mysql';
import { Pool, RowDataPacket } from 'mysql2/promise';

interface Cita extends RowDataPacket {
    id: number;
    dni: string;
    nombreServicio: string;
    fecha: string;
    hora: string;
    duracion: number;
    precio: number;
    descripcion: string;
}
//Se All Citas
export const CitasAdminController = async (req: Request, res: Response): Promise<Response> => {
    const SQL = `
        SELECT citas.id_cita, usuarios.dni, servicios.nombre_serv, citas.fecha, citas.hora, 
        servicios.duracion, servicios.precio, servicios.descripcion
        FROM usuarios 
        JOIN citas ON usuarios.id = citas.id_usuario 
        JOIN citas_servicios ON citas.id_cita = citas_servicios.id_cita 
        JOIN servicios ON servicios.id = citas_servicios.id_servicio 
        ORDER BY fecha DESC, hora DESC`;

    try {   
        const connection = await (db as Pool).getConnection();
        const [rows] = await connection.query<Cita[]>(SQL);
        connection.release();

        if (rows.length === 0) {
            return res.status(400).json({ error: 'No hay Citas' });
        }

        return res.json(rows);
    } catch (error) {
        console.error('Ocurrio un Error', error);
        return res.status(500).json({ error: 'Error al Buscar las Citas' });
    }
};

//See one Cita
export const CitaAdminController = async (req: Request, res: Response): Promise<Response> => {
    const { dni } = req.body as { dni: string };  

    const SQL = `
        SELECT citas.id_cita, usuarios.dni, servicios.nombre_serv, citas.fecha, citas.hora, 
        servicios.duracion, servicios.precio, servicios.descripcion
        FROM usuarios 
        JOIN citas ON usuarios.id = citas.id_usuario 
        JOIN citas_servicios ON citas.id_cita = citas_servicios.id_cita 
        JOIN servicios ON servicios.id = citas_servicios.id_servicio 
        WHERE usuarios.dni = ?`;

    try {
        const connection = await (db as Pool).getConnection();
        const [rows] = await connection.query<Cita[]>(SQL, [dni]);
        connection.release();

        if (rows.length === 0) {
            return res.status(400).json({ error: 'No hay citas para este Usuario' });
        }
        return res.json(rows); 
    } catch (error) {
        console.error('Ocurrió un Error', error);
        return res.status(500).json({ error: 'Error al Buscar las citas' });
    }
};

//Delete Cita
export const deleteCita = async (req: Request, res: Response): Promise<Response> => {
    const { id_cita } = req.body;
    const SQL = `DELETE FROM citas WHERE id_cita = ?`;
    try {
        const connection = await (db as Pool).getConnection();
        const [rows] = await connection.query(SQL, [id_cita]);
        connection.release();
        return res.json(rows);
    } catch (error) {
        console.error('Ocurrio un Error', error);
        return res.status(500).json({ error: 'Error al Eliminar la Cita' });
    }
}





