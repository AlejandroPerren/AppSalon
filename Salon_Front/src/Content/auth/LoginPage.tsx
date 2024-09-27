import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginService from '../../services/login';

type UserType = {
  id: string;
  name: string;
}
export const LoginContent = () => {
  const [user, setUser] = useState<UserType | null>(null); 
  const [password, setPassword] = useState<string>('');
  const [dni, setDNI] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
//: Esto es la tipificación del evento, que indica que el evento se origina en un formulario HTML (<form>). Esta es una característica de TypeScript que te ayuda a obtener mayor seguridad en el tipo de datos que se manejan.
const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  try {
    const user: UserType = await loginService({
      dni,
      password
    });

    setUser(user); 
    navigate('/');
  } catch (error: unknown) {
    setError('Credenciales incorrectas. Inténtalo de nuevo.');
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Iniciar Sesión</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">DNI</label>
          <input
            type="number"
            value={dni}
            onChange={(e) => setDNI(String(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu DNI"
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

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>

      <p className="text-center text-gray-600 text-sm mt-4">
        ¿No tienes cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate aquí</a>
      </p>
    </div>
  </div>
);
};