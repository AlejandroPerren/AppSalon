import { useEffect, useState } from 'react';
import axios from 'axios';

interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

export const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/servicios'); // Ajusta la URL de la API
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">{service.nombre}</h3>
            <p className="text-gray-600">{service.descripcion}</p>
            <p className="mt-2 font-semibold text-blue-600">${service.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
