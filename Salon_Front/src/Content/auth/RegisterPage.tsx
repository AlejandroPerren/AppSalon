import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const URI: string = 'http//localhos:4000/auth/register'

export const Register = () => {
    const [correo, setCorreo] = useState<string>('');
    const [password, setPassword] = useState<string>(''); 
    const [dni, setDNI] = useState<number | string>(''); 
    const [tel, setTel] = useState<number | string>(''); 
    const navigate = useNavigate();

    const store = async (e: FormEvent) => {
        e.preventDefault();
        await axios.post(URI, { correo: correo, password: password, dni: dni, tel: tel });
        navigate('/auth/login');
    }
    return (
        <div>
        <form onSubmit={store}>
            <div className="form-group">
                <label>Ingresa Tu Correo</label>
                <input className='' type="text"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Ingresa Tu Contraseña</label>
                <input className='' type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Ingresa Tu DNI</label>
                <input className='' type="number"
                    value={dni}
                    onChange={(e) => setDNI(Number(e.target.value))}></input> 
            </div>
            <div className="form-group">
                <label>Ingresa Tu Telefono</label>
                <input className='' type="number"
                    value={tel}
                    onChange={(e) => setTel(Number(e.target.value))}></input> 
            </div>
            <button type='submit' className=''>Siguiente</button>
        </form>
    </div>
    )
}
