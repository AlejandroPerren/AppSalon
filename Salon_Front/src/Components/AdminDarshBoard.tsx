import { useEffect, useState } from 'react';
import axios from 'axios';
import { getRoleFromToken } from '../services/isLogget'; 

interface Cita {
  id: number;
  fecha: string;
  cliente: string;
}

interface Ingreso {
  mes: string;
  monto: number;
}

export const AdminDashboard = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [ingresos, setIngresos] = useState<Ingreso[]>([]);
  const [error, setError] = useState<string | null>(null); 
  const role = getRoleFromToken();  

  useEffect(() => {
    if (role === 'admin') {
      const fetchData = async () => {
        try {
          const [citasResponse, ingresosResponse] = await Promise.all([
            axios.get('http://localhost:3000/api/admin/citas'),
            axios.get('http://localhost:3000/api/admin/ingresos'),
          ]);
          setCitas(citasResponse.data);
          setIngresos(ingresosResponse.data);
        } catch (error) {
          console.error('Error fetching admin data:', error);
          setError('Error al cargar los datos de administración.');
        }
      };

      fetchData();
    }
  }, [role]);

  if (role !== 'admin') {
    return <p>No tienes acceso a esta página.</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Panel de Administración</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">Citas</h3>
        <ul className="list-disc list-inside">
          {citas.map((cita) => (
            <li key={cita.id}>
              {cita.fecha} - {cita.cliente}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Ingresos Mensuales</h3>
        <ul className="list-disc list-inside">
          {ingresos.map((ingreso) => (
            <li key={ingreso.mes}>
              {ingreso.mes}: ${ingreso.monto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
