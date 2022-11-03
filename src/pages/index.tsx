import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from './screens/Dashboard'
import ErrorPage from './screens/ErrorPage'
import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { Profile } from './screens/Profile'
import { SignUp } from './screens/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

export const AppRouter = () => <RouterProvider router={router} />
