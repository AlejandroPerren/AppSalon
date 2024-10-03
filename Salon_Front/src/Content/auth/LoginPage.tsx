import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../services/login';
import { jwtDecode } from 'jwt-decode';

type UserType = {
  id: string;
  name: string;
  role: string;
};

export const LoginContent = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [password, setPassword] = useState<string>('');
  const [dni, setDNI] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const token = await loginService({ dni, password });
      const decodedUser: UserType = jwtDecode(token); 
      setUser(decodedUser); 
      navigate('/'); 
    } catch (error: unknown) {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">
          {user ? `Bienvenido, ${user.name}` : 'Iniciar Sesión'}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {!user && ( 
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">DNI</label>
              <input
                type="number"
                value={dni}
                onChange={(e) => setDNI(e.target.value)}
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
        )}

        {user && ( 
          <div className="text-center mt-4">
            <p className="text-green-500 text-lg">¡Has iniciado sesión exitosamente!</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => navigate('/dashboard')}
            >
              Ir al dashboard
            </button>
          </div>
        )}

        {!user && (
          <p className="text-center text-gray-600 text-sm mt-4">
            ¿No tienes cuenta?{' '}
            <a href="/auth/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
