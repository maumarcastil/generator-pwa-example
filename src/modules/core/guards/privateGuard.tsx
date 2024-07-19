import { Navigate } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? children : <Navigate to="/auth/login" />
}
