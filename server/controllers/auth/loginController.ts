import db from '../../config.js/mysql'
import { Request, Response } from 'express'
import { Pool } from 'mysql2/promise';


interface LoginBody {
    dni: string;
    password: string;
}

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { dni, password } = req.body as LoginBody;
    
    if (!password || !dni ) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const sql = `SELECT * FROM usuarios WHERE dni = ${dni} AND password = ${password}`;
    try {
        const connection = await (db as Pool).getConnection();
        const [result] = await connection.query(sql, [dni, password]);
        if(result === null) {
            return res.status(400).json({ error: 'Credenciales incorrectas' });
        }else {
            return res.status(201).json({ message: 'Credenciales correctas', result });
            
        }
        connection.release();
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).json({ error: 'Error al ingresar el usuario' });
    }
};