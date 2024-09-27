import axios from '../config/axiosconfig';

const getProtectedData = async () => {
    const { data } = await axios.get('/protected-route'); // Cambia a tu ruta protegida
    return data;
};

export default getProtectedData;