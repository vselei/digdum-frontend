import styled from '@emotion/styled';
import { HelmetProvider } from 'react-helmet-async';
import { useRouteError } from 'react-router-dom';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';

import GlobalStyles from '../components/GlobalStyles';
import Head from '../components/Head';

const ErrorBoundaryStyles = styled.div`
  color: var(--primary-color);
  text-transform: uppercase;

  & h1 {
    font-size: var(--size-4);
    font-weight: var(--weight-700);
    margin-bottom: var(--size-1);
  }

  & p {
    font-size: var(--size-1);
    font-weight: var(--weight-700);
  }
`;

const ErrorBoundary = () => {
  const error = useRouteError() as {
    status: number;
    statusText: string;
    data: string;
  };

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Head
          title={`Erro ${error.status}`}
          description={`${error.data}. Status: ${error.status}`}
        />
      </HelmetProvider>
      <FlexContainer justifyContent='center' alignItems='center' minHeight="var(--h-100)">
        <ErrorBoundaryStyles>
          <h1>Erro {error.status} - {error.statusText} ☹️</h1>
          <p>
            {error.data}. <Anchor path="/">Voltar para a página inicial</Anchor>
          </p>
        </ErrorBoundaryStyles>
      </FlexContainer>
    </>
  );
};

export default ErrorBoundary;
