import axios from 'axios';

const getProtectedData = async () => {
    const { data } = await axios.get('/protected-route'); // Cambia a tu ruta protegida
    return data;
};
const isLoggedIn = (): boolean => {
    const token = localStorage.getItem('token');
    return !!token; // Retorna true si existe un token
  };
  
export default getProtectedData;