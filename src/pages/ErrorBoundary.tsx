import styled from '@emotion/styled';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRouteError } from 'react-router-dom';
import Anchor from '../components/Anchor';
import Container from '../components/Container';
import FlexContainer from '../components/FlexContainer';

import GlobalStyles from '../components/GlobalStyles';
import Head from '../components/Head';

import { removingDataFromSS } from '../utilities/ssCrud';

const ErrorBoundaryStyles = styled.div`
  color: var(--primary-color);
  text-transform: uppercase;

  & h1 {
    font-size: var(--size-2);
    font-weight: var(--weight-700);
    margin-bottom: var(--size-1);
  }

  & p {
    font-size: var(--size-1);
    font-weight: var(--weight-700);
  }

  @media (min-width: 768px) {
    & > h1 {
      font-size: var(--size-4);
    }
  }
`;

const ErrorBoundary = () => {
  const error = useRouteError() as {
    status: number;
    statusText: string;
    data: string;
  };

  useEffect(() => {
    removingDataFromSS('userSignUpData');
    removingDataFromSS('loginData');
    removingDataFromSS('forgotPasswordData');
  }, []);

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Head
          title={`Erro ${error.status}`}
          description={`${error.data}. Status: ${error.status}`}
        />
      </HelmetProvider>
      <Container>
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          minHeight="var(--h-100)"
        >
          <ErrorBoundaryStyles>
            <h1>
              Erro {error.status} - {error.statusText} ☹️
            </h1>
            <p>
              {error.data}{!error?.data ? '' : !error?.data?.endsWith('.') ? '. ' : ' '}
              <Anchor path="/">Voltar para a página inicial</Anchor>
            </p>
          </ErrorBoundaryStyles>
        </FlexContainer>
      </Container>
    </>
  );
};

export default ErrorBoundary;
