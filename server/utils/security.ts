import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

//hashed password
export const hashedPassword = async (password: string): Promise<string> => {
    password = await bcrypt.hash(password, 10);
    return password;
}
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
}

// Generate Token
export const generateToken = async (id: number): Promise<string> => {
    const token = await jwt.sign({id}, process.env.KEY_SECRET_JWT as string, { expiresIn: '1h' });
    return token;
}

export const decodeToken = async (token: string): Promise<any> => {
    const decoded = await jwt.verify(token, process.env.KEY_SECRET_JWT as string);  
    return decoded;
}


