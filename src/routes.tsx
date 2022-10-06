import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './screens/ErrorPage';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { SignUp } from './screens/SignUp';

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
]);

export const AppRouter = () => <RouterProvider router={router} />;
