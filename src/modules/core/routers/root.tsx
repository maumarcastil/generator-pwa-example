import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import AuthRoute from '../guards/authGuard'
import { PrivateRoute } from '../guards/privateGuard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth" />,
  },
  {
    path: '/auth',
    element: <AuthRoute />,
    children: [
      {
        path: '',
        element: <Navigate to="login" />,
      },
      {
        path: 'login',
        element: <div>Login</div>,
      },
      {
        path: 'register',
        element: <div>Register</div>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <div>Home</div>,
      },
      {
        path: 'collections',
        element: <div>Collections</div>,
      },
      {
        path: 'marketplace',
        element: <div>Marketplace</div>,
      },
      {
        path: 'wallet',
        element: <div>Wallet</div>,
      },
    ],
  },
])
