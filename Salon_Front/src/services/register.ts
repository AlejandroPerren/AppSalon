import api from '../../config/axiosconfig';

const registerService = async (user: { 
  correo: string; 
  password: string; 
  dni: number | string; 
  tel: number | string 
}): Promise<void> => {
  await api.post('/auth/register', user);
};

export default registerService;
