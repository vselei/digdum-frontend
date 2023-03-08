import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';

import { ThemesProvider } from '../context/ThemesProvider';
import SignUp from '../pages/SignUp';

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
          },
          {
            path: '/sign-up',
            element: <SignUp />
          }
        ]
      }
    ]
  }
]);

export default routes;
