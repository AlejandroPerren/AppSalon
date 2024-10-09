import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterContent } from './Content/auth/RegisterPage';
import { LoginContent } from './Content/auth/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { NavbarAdmin } from './Content/common/Navbar';
import { AdminDashboard } from './Components/AdminDarshBoard';
import { CitasForm } from './Components/FormCitas'; 

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarAdmin></NavbarAdmin>
        <Routes>
          <Route path="/auth/register" element={<RegisterContent />} />
          <Route path="/auth/login" element={<LoginContent />} />
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/citas" element={
            <ProtectedRoute requiredRole="admin">
              <CitasForm />
            </ProtectedRoute>
          } />
          <Route path="/unauthorized" element={<p>No tienes permiso para acceder a esta página.</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
