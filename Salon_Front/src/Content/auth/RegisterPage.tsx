import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import registerService from '../../services/register'; 

export const RegisterContent = () => {
  const [correo, setCorreo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dni, setDNI] = useState<number | string>('');
  const [tel, setTel] = useState<number | string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const user = {
      correo,
      password,
      dni,
      tel,
    };

    try {
      await registerService(user);
      navigate('/auth/login'); 
    } catch (error: unknown) {
      setError('Error al registrarse. Por favor, intenta de nuevo.');
    }
  };
    return (
        <div>
            <form onSubmit={handleRegister}>
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
                {error && <p>{error}</p>}
                <button type='submit' className=''>Siguiente</button>
            </form>
        </div>
    )
}
