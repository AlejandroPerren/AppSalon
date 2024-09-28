import { Navigate } from 'react-router-dom';
import { isLoggedIn, getRoleFromToken } from '../services/isLogget'; 

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps): JSX.Element => {
  const role = getRoleFromToken();

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;

import jwtDecode from 'jwt-decode';

interface DecodedToken {
  id: string;
  role: string;
  exp: number;  // Expiración del token
}

export const getRoleFromToken = (): string | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decoded = jwtDecode<DecodedToken>(token);
  return decoded.role;
};
