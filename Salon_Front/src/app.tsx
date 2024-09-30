import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterContent } from './Content/auth/RegisterPage';
import { LoginContent } from './Content/auth/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { NavbarAdmin } from './Content/common/Navbar';



export const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <Routes>
            <Route path="/" element={<NavbarAdmin />} />
          </Routes>
        </div>
        <div className="App-main">
          <Routes>
            <Route path="/auth/register" element={<RegisterContent />} />
            <Route path="/auth/login" element={<LoginContent />} />
            
            {/* Rutas protegidas */}
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <NavbarAdmin />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
