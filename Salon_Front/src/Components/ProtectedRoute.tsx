import { Navigate } from 'react-router-dom';
import { isLoggedIn, getRoleFromToken } from '../services/isLogget'; 

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps): JSX.Element => {
  const role = getRoleFromToken();

  if (!isLoggedIn()) {
    return <Navigate to="/auth/login" />;  
  }

  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" />; 
  }

  return children;
};

export default ProtectedRoute;
