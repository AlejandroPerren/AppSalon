import { useEffect, useState } from 'react';
import axios from 'axios';

interface Appointment {
  id_cita: number;
  fecha: string;
  hora: string;
  id_usuario: number;
  estado: string;
}

export const AppointmentsList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/citas');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Citas</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id_cita}>
            Fecha: {appointment.fecha}, Hora: {appointment.hora}, Usuario ID: {appointment.id_usuario}, Estado: {appointment.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};
