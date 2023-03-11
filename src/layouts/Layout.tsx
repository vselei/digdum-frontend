import { LoaderFunctionArgs, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import GlobalStyles from '../components/GlobalStyles';

export const loader = ({ request }: LoaderFunctionArgs) => {
  const path = new URL(request.url).pathname;

  if (!path.includes('/sign-up')) {
    sessionStorage.removeItem('userSignUpData');
  }

  return null;
};

const Layout = () => {
  const { alert } = useAlert();

  return (
    <>
      <GlobalStyles />

      <HelmetProvider>
        {alert.message && <Alert type={alert.type}>{alert.message}</Alert>}
        <Outlet />
      </HelmetProvider>
    </>
  );
};

export default Layout;
