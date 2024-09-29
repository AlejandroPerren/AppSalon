import db from '../../config.js/mysql';
import { Request, Response } from 'express';
import { Pool, RowDataPacket } from 'mysql2/promise'; 
import { comparePassword, generateToken } from '../../utils/security';

interface LoginBody {
    dni: string;
    password: string;
}
// RowDataPacket: RowDataPacket[] es simplemente la interface que representa lo que te devuelve una query. Como una query puede devolverte diferentes resultados ( RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader), es necesario el casting para especificar el objeto que esperas de acuerdo a la consulta que hiciste
interface Usuario extends RowDataPacket {   
    dni: string;
    password: string;
}
export const login = async (req: Request, res: Response): Promise<Response> => {
    const { dni, password } = req.body as LoginBody;
    
    if (!password || !dni) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `SELECT * FROM usuarios WHERE dni = ?`;
    
    try {
        const connection = await (db as Pool).getConnection();
        const [rows] = await connection.query<Usuario[]>(sql, [dni]);
        connection.release();
        
        if (rows.length === 0) {
            return res.status(400).json({ error: 'Credenciales incorrectas' });
        }

        const user = rows[0]; 
        const hashedPassword = user.password; 

        const isPasswordValid = await comparePassword(password, hashedPassword);
        
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Credenciales incorrectas' });
        }

        const token = await generateToken({ dni: user.dni, role: user.role });

        return res.status(200).json({ message: 'Login exitoso', token });
        
    } catch (err) {
        console.error('Error al ingresar el usuario:', err);
        return res.status(500).json({ error: 'Error al ingresar el usuario' });
    }
};
