import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado.' });
  }

  const secretKey = process.env.KEY_SECRET_JWT;
  if (!secretKey) {
    return res.status(500).json({ message: 'Error del servidor: clave secreta no configurada.' });
  }

  try {
    const decoded: any = jwt.verify(token, secretKey);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Acceso denegado. Solo administradores pueden realizar esta acción.' });
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido.' });
  }
};
