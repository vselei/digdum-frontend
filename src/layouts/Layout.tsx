import { Global, css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import icon from '/img/favicon.svg'

const Layout = () => {
  return (
    <>
      <Global
        styles={css`
          :root {
            /* colors */
            --color-white: #f4f4f4;
            
            --color-blue-900: #050119;

            /* sizes */
            --size-1: 1rem;
            --size-1-2: 1.5rem;
            --size-2: 2rem;

            --size-full: 100%;
            
            /* resolutions */
            --resolution-480: 48rem;

            /* weights */
            --weight-700: 700;

            /* animations */
            --animation-300: 300ms;
          } 

          html {
            box-sizing: border-box;
            line-height: 1.15;
            font-size: 62.5%;
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
            min-height: 100vh;
            background: linear-gradient(to right, #ffffff, var(--color-white));
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
          <meta name='author' content='Victor Seleimend' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href={icon} type="image/svg+xml" />
        </Helmet>
        <Outlet />
      </HelmetProvider>
    </>
  );
};

export default Layout;
