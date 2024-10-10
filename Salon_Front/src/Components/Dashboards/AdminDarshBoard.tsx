import { AppointmentsList } from '../ListAppoint';
import { ServicesList } from '../ServicesList';
import { MessagesList } from '../messagesList';

export const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
      <div className="mb-8">
        <AppointmentsList />
      </div>
      <div className="mb-8">
        <ServicesList />
      </div>
      <div>
        <MessagesList />
      </div>
    </div>
  );
};
