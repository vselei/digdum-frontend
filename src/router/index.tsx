import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../pages/ErrorBoundary';

import Layout, {loader as layoutLoader} from '../layouts/Layout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import SignUp, {
  action as signUpAction,
  loader as signUpLoader
} from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import { ThemesProvider } from '../context/ThemesProvider';
import { AlertProvider } from '../context/AlertProvider';

const routes = createBrowserRouter([
  {
    element: (
      <ThemesProvider>
        <AlertProvider>
          <Layout />
        </AlertProvider>
      </ThemesProvider>
    ),
    loader: layoutLoader,
    errorElement: <ErrorBoundary />,
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
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader
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
