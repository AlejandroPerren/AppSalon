import axios from 'axios';

const URI = 'http://localhost:4000/auth/register';

const registerService = async (user: {
  correo: string;
  password: string;
  dni: number | string;
  tel: number | string;
}): Promise<void> => {
  await axios.post(URI, user);
};

export default registerService;
