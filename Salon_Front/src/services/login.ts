import axios from 'axios';

const URI = 'http://localhost:3000/auth/login';

const loginService = async (credentials: { dni: string; password: string }): Promise<string> => {
    const { data } = await axios.post(URI, credentials); 
    const token = data.token; 
    localStorage.setItem('token', token);
    return token;
}

export default loginService;
