/* eslint-disable react/no-unstable-nested-components */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Outlet {...props} /> : <Navigate to="/" />;
};

export default PrivateRoute;
