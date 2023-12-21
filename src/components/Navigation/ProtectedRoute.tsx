import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTokenContext } from '../../providers/TokenProvider';

interface IProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { token } = useTokenContext();
  const location = useLocation();

  return token ? <>{children}</> : <Navigate to="/auth" state={{ from: location }} replace />;
};
