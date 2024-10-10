import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { RegisterContent } from './Content/auth/RegisterPage';
import { LoginContent } from './Content/auth/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { NavbarAdmin } from './Content/common/Navbar';
import { AdminDashboard } from './Components/Dashboards/AdminDarshBoard';
import { CitasForm } from './Components/FormCitas';
import { UserDashboard } from './Components/Dashboards/UserDashboard';
import { useAuth } from './services/useAuth';

export const App = (): JSX.Element => {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarAdmin />
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                userRole === 'admin' ? <Navigate to="/admin" /> : <Navigate to="/user/dashboard" />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />

          {/* Rutas de autenticación */}
          <Route path="/auth/register" element={<RegisterContent />} />
          <Route path="/auth/login" element={<LoginContent />} />

          {/* Rutas protegidas para admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/citas"
            element={
              <ProtectedRoute requiredRole="admin">
                <CitasForm />
              </ProtectedRoute>
            }
          />

          {/* Rutas protegidas para usuarios normales */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute requiredRole="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Ruta de no autorizado */}
          <Route path="/unauthorized" element={<p>No tienes permiso para acceder a esta página.</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
