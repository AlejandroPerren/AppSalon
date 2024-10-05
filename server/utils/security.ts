import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

// Hash 
export const hashedPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

// token
export const generateToken = (user: { dni: string, role: string }): string => {
  return jwt.sign({ dni: user.dni, role: user.role }, process.env.KEY_SECRET_JWT as string, { expiresIn: '1h' });
};

// decoded token
export const decodeToken = (token: string): any => {
  return jwt.verify(token, process.env.KEY_SECRET_JWT as string);
};
