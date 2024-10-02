import { Request, Response } from 'express';


export const profile = async (req: Request, res: Response): Promise<Response> => {
   return res.status(200).json();
}