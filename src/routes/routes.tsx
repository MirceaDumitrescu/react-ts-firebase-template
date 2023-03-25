import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/admin/dashboard';
import ProtectedRoute from '../components/privateRoute/PrivateRoute';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute component={Dashboard} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
