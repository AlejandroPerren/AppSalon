import { JwtPayload } from "jsonwebtoken"; // O el tipo correcto según lo que devuelva tu función decodeToken

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload; // Ajusta el tipo de 'user' si es necesario
    }
  }
}
