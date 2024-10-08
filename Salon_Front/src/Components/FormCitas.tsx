import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CitasForm = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCitaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMensaje(null);

    try {
      await axios.post('http://localhost:4000/api/formulario', { fecha, hora, id_usuario: idUsuario });
      setMensaje('Cita creada con éxito');
      navigate('/dashboard'); 
    } catch (err) {
      setError('Error al crear la cita. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Crear Nueva Cita</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {mensaje && <p className="text-green-500 text-center mb-4">{mensaje}</p>}
        <form onSubmit={handleCitaSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Hora</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">ID Usuario</label>
            <input
              type="text"
              value={idUsuario}
              onChange={(e) => setIdUsuario(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa el ID de usuario"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Crear Cita
          </button>
        </form>
      </div>
    </div>
  );
};
