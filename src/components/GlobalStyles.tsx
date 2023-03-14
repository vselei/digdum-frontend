import { Global, css } from '@emotion/react';

import useThemes from '../hooks/useThemes';

const GlobalStyles = () => {
  const { theme } = useThemes();

  return <Global
    styles={css`
      :root {
        /* colors */
        --primary-color: ${theme === 'light' ? '#030110' : '#f4f4f4'};
        --secondary-color: ${theme === 'dark' ? '#030110' : '#f4f4f4'};

        --white-color: #f4f4f4;

        --gradient: ${theme === 'dark'
          ? 'linear-gradient(to right, #04020f, var(--secondary-color))'
          : 'linear-gradient(to right, #ffffff, var(--secondary-color))'};

        /* sizes */
        --size-1: 1rem;
        --size-1-2: 1.5rem;
        --size-2: 2rem;
        --size-3: 3rem;
        --size-4: 4rem;
        --size-5: 5rem;

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

        /* radius */
        --radius-full: 50%;
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
        background: var(--gradient);
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
  />;
};

export default GlobalStyles;
