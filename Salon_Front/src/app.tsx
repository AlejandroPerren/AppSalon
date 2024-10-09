import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterContent } from './Content/auth/RegisterPage';
import { LoginContent } from './Content/auth/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { NavbarAdmin } from './Content/common/Navbar';
import { AdminDashboard } from './Components/AdminDarshBoard';
import { CitasForm } from './Components/FormCitas'; 
import { HomeRedirect } from './services/redirect';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomeRedirect />} />
          <Route path="*" element={<p>La página que estás buscando no existe.</p>} />
          <Route path="/auth/register" element={<RegisterContent />} />
          <Route path="/auth/login" element={<LoginContent />} />
          
          {/* Rutas protegidas */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <>
                <NavbarAdmin />
                <AdminDashboard />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/citas" element={
            <ProtectedRoute requiredRole="admin">
              <>
                <NavbarAdmin />
                <CitasForm />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/unauthorized" element={<p>No tienes permiso para acceder a esta página.</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
