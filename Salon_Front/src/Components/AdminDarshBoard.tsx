import { useEffect, useState } from 'react';
import axios from 'axios';
import { getRoleFromToken } from '../services/isLogget'; 

interface Cita {
  id: number;
  fecha: string;
  cliente: string;
}
const URLCITAS = 'http://localhost:4000/api/admin/citas';
const URLCITASDEL = 'http://localhost:4000/api/admin/delcitas';
export const AdminDashboard = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [error, setError] = useState<string | null>(null); 
  const role = getRoleFromToken();  

  useEffect(() => {
    if (role === 'admin') {
      const fetchData = async () => {
        const citas = axios.get(URLCITAS)
        
        try {
   
      };
    }
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
