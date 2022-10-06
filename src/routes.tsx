import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './screens/ErrorPage';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Register } from './screens/Register';

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
    path: '/register',
    element: <Register />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
