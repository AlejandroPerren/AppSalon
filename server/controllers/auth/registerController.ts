import db from '../../config.js/mysql';
import { Request, Response } from 'express';
import { Pool } from 'mysql2/promise';
import { hashedPassword } from '../../utils/security';

interface RegisterBody {
  correo: string;
  password: string;
  dni: string;
  tel: string;
}

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { correo, password, dni, tel } = req.body as RegisterBody;

  if (!correo || !password || !dni || !tel) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = 'INSERT INTO usuarios (dni, password, correo, tel) VALUES (?, ?, ?, ?)';

  try {
    const connection = await (db as Pool).getConnection();
    const passwordHash = await hashedPassword(password);
    const [result] = await connection.query(sql, [dni, passwordHash, correo, tel]);

    connection.release();

    return res.status(201).json({ message: 'Usuario registrado exitosamente', result });
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    return res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};
