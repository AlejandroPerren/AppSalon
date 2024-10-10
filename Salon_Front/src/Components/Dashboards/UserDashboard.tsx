// UserDashboard.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ContactForm } from '../contacto';
import { ServicesList } from '../ServicesList';
import { CitasForm } from '../FormCitas';

interface Cita {
  id: number;
  fecha: string;
  hora: string;
}

export const UserDashboard = () => {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/citas/usuario');
        setCitas(response.data);
      } catch (error) {
        console.error('Error fetching citas:', error);
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Panel de Usuario</h2>

      {/* Formulario de contacto */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Formulario de Contacto</h3>
        <ContactForm />
      </section>

      {/* Lista de servicios */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Nuestros Servicios</h3>
        <ServicesList />
      </section>

      {/* Formulario para crear citas */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Agendar una Cita</h3>
        <CitasForm />
      </section>

      {/* Lista de citas del usuario */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Tus Citas</h3>
        {citas.length > 0 ? (
          <ul className="list-disc pl-5">
            {citas.map((cita) => (
              <li key={cita.id}>
                Cita el {cita.fecha} a las {cita.hora}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes citas agendadas.</p>
        )}
      </section>
    </div>
  );
};