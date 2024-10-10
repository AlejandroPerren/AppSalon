import { useEffect, useState } from 'react';
import axios from 'axios';

interface Message {
  id: number;
  nombre: string;
  correo: string;
  mensaje: string;
}

export const MessagesList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/mensajes');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Mensajes de Contacto</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            Nombre: {message.nombre}, Correo: {message.correo}, Mensaje: {message.mensaje}
          </li>
        ))}
      </ul>
    </div>
  );
};
