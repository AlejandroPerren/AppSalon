import express, { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';



export const profile = async (req: Request, res: Response): Promise<Response> => {
   return res.status(200).json();
}