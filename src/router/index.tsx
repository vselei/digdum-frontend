import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../pages/ErrorBoundary';

import Layout, { loader as layoutLoader } from '../layouts/Layout';
import AuthLayout from '../layouts/AuthLayout';
import Login, { action as loginAction } from '../pages/Login';
import SignUp, {
  action as signUpAction,
} from '../pages/SignUp';
import ForgotPassword, {action as forgotPasswordAction} from '../pages/ForgotPassword';

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
            element: <Login />,
            action: loginAction
          },
          {
            path: '/sign-up',
            element: <SignUp />,
            action: signUpAction
          },
          {
            path: '/forgot-password',
            element: <ForgotPassword />,
            action: forgotPasswordAction
          }
        ]
      }
    ]
  }
]);

export default routes;
