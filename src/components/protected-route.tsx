// PrivateRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element, isLoggedIn }) => {
  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
