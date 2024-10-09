import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const EditServiceForm = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState({ nombre_serv: '', precio: 0, duracion: 0, descripcion: '' });
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/servicios/${id}`);
        setService(response.data);
      } catch (error) {
        setError('Error al obtener el servicio.');
      }
    };

    fetchService();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    try {
      await axios.put(`http://localhost:4000/api/servicios/${id}`, service);
      setMensaje('Servicio actualizado con éxito.');
    } catch (error) {
      setError('Error al actualizar el servicio.');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={service.nombre_serv} onChange={(e) => setService({ ...service, nombre_serv: e.target.value })} placeholder="Nombre del Servicio" required />
      <input type="number" value={service.precio} onChange={(e) => setService({ ...service, precio: Number(e.target.value) })} placeholder="Precio" required />
      <input type="number" value={service.duracion} onChange={(e) => setService({ ...service, duracion: Number(e.target.value) })} placeholder="Duración (minutos)" required />
      <textarea value={service.descripcion} onChange={(e) => setService({ ...service, descripcion: e.target.value })} placeholder="Descripción" required />
      <button type="submit">Actualizar Servicio</button>
      {mensaje && <p>{mensaje}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
