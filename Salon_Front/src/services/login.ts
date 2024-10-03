import api from '../../config/axiosconfig'; 

const loginService = async (credentials: { dni: string; password: string }): Promise<string> => {
    const { data } = await api.post('/auth/login', credentials); 
    const token = data.token; 
    localStorage.setItem('token', token);
    return token;
}
export default loginService;