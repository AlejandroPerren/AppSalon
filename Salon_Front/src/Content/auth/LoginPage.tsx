
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type Usuario = {
  dni: number | string,
  password: string
}


const URI: string = 'http://localhost:4000/auth/login';

export const LoginContent = () => {

  const [password, setPassword] = useState<string>('');
  const [dni, setDNI] = useState<number | string>('');

  const navigate = useNavigate();

  const store = async (e: FormEvent) => {
    e.preventDefault();

    const user: Usuario = {
      dni,
      password
    }
    console.log(user);
    await axios.post(URI, user);
    navigate('/');
  }
  return (
    <div>
      <form onSubmit={store}>
      <div className="form-group">
          <label>Ingresa Tu DNI</label>
          <input className='' type="number"
            value={dni}
            onChange={(e) => setDNI(Number(e.target.value))}></input>
        </div>
        <div className="form-group">
          <label>Ingresa Tu Contraseña</label>
          <input className='' type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <button type='submit' className=''>Siguiente</button>
      </form>
    </div>
  )
}