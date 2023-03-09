import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import SignUp, { action as signUpAction } from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

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
          },
          {
            path: '/sign-up/:steps',
            element: <SignUp />,
            action: signUpAction
          },
          {
            path: '/forgot-password',
            element: <ForgotPassword />
          }
        ]
      }
    ]
  }
]);

export default routes;
