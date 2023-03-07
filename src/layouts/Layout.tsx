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
            --color-white: #f4f4f4;
            --color-blue-900: #050119;

            --size-1: 1.4rem;

            --weight-700: 700;
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

          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
          }

          select,
          input,
          button {
            all: unset;
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
