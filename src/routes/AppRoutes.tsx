import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/home" /> : <Login />}
          element={<Login />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
