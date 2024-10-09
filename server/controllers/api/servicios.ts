import { Request, Response } from 'express';
import db from '../../config.js/mysql'; 

// Obtener todos los servicios
export const getAllServices = async (req: Request, res: Response) => {
  const SQL = `SELECT * FROM servicios`;

  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query(SQL);
    connection.release();

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los servicios.' });
  }
};