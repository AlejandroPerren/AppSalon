import { decodeToken } from "../utils/security";
import express, { Request, Response, NextFunction } from 'express';

export const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    //'x-access-token' es el nombre de un header personalizado que suele usarse para enviar un token de autenticación en las solicitudes HTTP. Este header contiene el token que el cliente envía al servidor, por ejemplo, un token JWT (JSON Web Token).
    const token = req.headers['x-access-token'] as string;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = await decodeToken(token);
        //res.locals es una forma segura de compartir datos entre middleware y controladores sin modificar el objeto Request
        res.locals.user = decoded;

        next(); 
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
