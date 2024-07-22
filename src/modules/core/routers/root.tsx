import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import AuthRoute from '../guards/authGuard'
import { PrivateRoute } from '../guards/privateGuard'

import HomePage from '../../home/pages'

import { RootLayout } from '../layout/rootLayout'
import { DashboardLayout } from '../layout/dashboard'

import { SidebarProvider } from '../context/sidebarContext'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
        element: (
          <>
            <PrivateRoute>
              <SidebarProvider>
                <DashboardLayout />
              </SidebarProvider>
            </PrivateRoute>
          </>
        ),
        children: [
          {
            path: '',
            element: <HomePage />,
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
          {
            path: 'materials',
            element: <div>Materials</div>,
          },
          {
            path: 'certificates',
            element: <div>Certificates</div>,
          },
          {
            path: 'settings',
            element: <div>Settings</div>,
          },
          {
            path: 'help',
            element: <div>Help</div>,
          },
        ],
      },
    ],
  },
])
