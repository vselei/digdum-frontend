import { Global, css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Global
        styles={css`
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
      <Outlet />
    </>
  );
};

export default Layout;
