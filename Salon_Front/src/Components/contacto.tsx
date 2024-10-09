import { useState } from 'react';
import axios from 'axios';

export const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/contact', { nombre, correo, mensaje });
      setStatus('Mensaje enviado correctamente.');
    } catch (error) {
      setStatus('Error al enviar el mensaje.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo" required />
      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Mensaje" required />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
};
