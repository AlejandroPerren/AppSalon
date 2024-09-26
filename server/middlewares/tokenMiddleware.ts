import { decodeToken } from "../utils/security";
import express, { Request, Response, NextFunction } from 'express';

export const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'];

    // Validar si el token existe o si es un arreglo (lo cual no sería correcto)
    if (!token || Array.isArray(token)) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        // Decodificar el token usando tu utilidad `decodeToken`
        const decoded = await decodeToken(token);

        // Almacenar la información del usuario decodificada en el objeto req
        req.user = decoded; 

        // Pasar al siguiente middleware o controlador
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

