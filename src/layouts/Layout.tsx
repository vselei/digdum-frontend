import { Global, css } from '@emotion/react';
import { LoaderFunctionArgs, Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import useThemes from '../hooks/useThemes';

import icon from '/img/favicon.svg';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

export const loader = ({ request }: LoaderFunctionArgs) => {
  const path = new URL(request.url).pathname;

  if (!path.includes('/sign-up')) {
    sessionStorage.removeItem('userSignUpData');
  }

  return null;
};

const Layout = () => {
  const { theme } = useThemes();
  const { alert } = useAlert();

  return (
    <>
      <Global
        styles={css`
          :root {
            /* colors */
            --primary-color: ${theme === 'light' ? '#050119' : '#f4f4f4'};
            --secondary-color: ${theme === 'dark' ? '#050119' : '#f4f4f4'};

            --white-color: #f4f4f4;

            /* sizes */
            --size-1: 1rem;
            --size-1-2: 1.5rem;
            --size-2: 2rem;
            --size-3: 3rem;
            --size-4: 4rem;

            --size-full: 100%;

            /* vw */
            --w-100: 100vw;

            /* vh */
            --h-100: 100vh;

            /* resolutions */
            --resolution-240: 24rem;
            --resolution-480: 48rem;

            /* weights */
            --weight-700: 700;

            /* animations */
            --animation-300: 300ms;
          }

          html {
            box-sizing: border-box;
            line-height: 1.15;
            font-size: 75%;
          }

          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          body {
            font-family: 'Montserrat', sans-serif;
            min-height: var(--h-100);
            background: ${theme === 'dark'
              ? 'linear-gradient(to right, #030114, var(--secondary-color))'
              : 'linear-gradient(to right, #ffffff, var(--secondary-color))'};
          }

          h1,
          h2,
          h3,
          h4,
          p {
            font-size: 100%;
          }

          h1,
          h2,
          h3,
          h4 {
            font-weight: normal;
          }

          a {
            text-decoration: none;
            color: initial;
          }

          select,
          input,
          button {
            all: unset;
          }

          button,
          input,
          optgroup,
          select,
          textarea {
            box-sizing: inherit;
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
          }

          textarea {
            background-color: transparent;
            border: none;
            resize: vertical;
            word-wrap: break-word;
            overflow-x: hidden;
          }
        `}
      />

      <HelmetProvider>
        <Helmet>
          <meta name="author" content="Victor Seleimend" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href={icon} type="image/svg+xml" />
        </Helmet>
        {alert.message && <Alert type={alert.type}>{alert.message}</Alert>}
        <Outlet />
      </HelmetProvider>
    </>
  );
};

export default Layout;
