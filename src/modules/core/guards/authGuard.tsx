import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'

const AuthRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <>
      <Navigate to="/dashboard" />
    </>
  ) : (
    <>
      <Outlet />
    </>
  )
}

export default AuthRoute
