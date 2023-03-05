import { Global, css } from '@emotion/react';

const App = () => {
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
      <p>ola mundo</p>
    </>
  );
};

export default App;
