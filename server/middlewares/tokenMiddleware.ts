// tokenMiddleware.ts
import express, { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../utils/security';

export const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = await decodeToken(token);
        res.locals.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
