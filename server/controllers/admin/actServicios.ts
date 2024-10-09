import { Request, Response } from 'express';
import db from '../../config.js/mysql'; 
import { ResultSetHeader } from 'mysql2';

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre_serv, precio, duracion, descripcion } = req.body;

  const SQL = `
    UPDATE servicios 
    SET nombre_serv = ?, precio = ?, duracion = ?, descripcion = ? 
    WHERE id = ?
  `;

  try {
    const connection = await db.getConnection();
    const [result] = await connection.query<ResultSetHeader>(SQL, [nombre_serv, precio, duracion, descripcion, id]);
    connection.release();

    if (result.affectedRows > 0) {
      return res.json({ message: 'Servicio actualizado con éxito.' });
    } else {
      return res.status(404).json({ message: 'Servicio no encontrado.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el servicio.' });
  }
};
