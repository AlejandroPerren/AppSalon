import { isLoggedIn, getRoleFromToken } from './isLogget';

interface AuthState {
  isAuthenticated: boolean;
  userRole: string | null;
}

export const useAuth = (): AuthState => {
  const isAuthenticated = isLoggedIn();
  const userRole = getRoleFromToken();

  return { isAuthenticated, userRole };
};
