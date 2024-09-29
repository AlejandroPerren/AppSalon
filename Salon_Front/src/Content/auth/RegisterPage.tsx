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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Registrarse</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">DNI</label>
            <input
              type="number"
              value={dni}
              onChange={(e) => setDNI(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu DNI"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
            <input
              type="number"
              value={tel}
              onChange={(e) => setTel(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Registrarse
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          ¿Ya tienes cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  )
}
