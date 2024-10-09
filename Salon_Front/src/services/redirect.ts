import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoleFromToken } from '../services/isLogget';

export const HomeRedirect = () => {
  const navigate = useNavigate();
  const role = getRoleFromToken();

  useEffect(() => {
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'usuario') {
      navigate('/citas');
    }
  }, [role, navigate]);

  return null;
};
