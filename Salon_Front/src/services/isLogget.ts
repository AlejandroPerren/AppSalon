import {jwtDecode} from 'jwt-decode';

interface DecodedToken {
  id: string;
  role: string;
  exp: number;
}

export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;  
};

export const getRoleFromToken = (): string | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decoded = jwtDecode<DecodedToken>(token);
  return decoded.role;
};
