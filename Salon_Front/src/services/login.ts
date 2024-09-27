import axios from 'axios';

const URI = 'http://localhost:3000/auth/login';

const loginService = async (credentials: { dni: string; password: string }): Promise<string> => {
    const { data } = await axios.post(URI, credentials); 
    return data;
}

export default loginService;
