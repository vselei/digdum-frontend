import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';

import { ThemesProvider } from '../context/ThemesProvider';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemesProvider>
        <Layout />
      </ThemesProvider>
    ),
    children: [
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />
          }
        ]
      }
    ]
  }
]);

export default routes;
