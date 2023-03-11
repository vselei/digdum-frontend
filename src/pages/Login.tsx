import { Form } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

const Login = () => {
  // TODO: Validar

  return (
    <>
      <Head
        title="Login"
        description="Realize seu login ou crie sua conta, e comece a postar fotos, vídeos, digdums e muito mais. A rede social que ajuda você a crescer! Tudo em um, não perca mais tempo, e use o DigDum."
      />
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        gap={{
          col: 'var(--size-3)'
        }}
        flex="1 1 var(--resolution-240)"
        minHeight="90vh"
        media={[
          {
            size: 768,
            css: `
              min-height: var(--h-100);
            `
          }
        ]}
      >
        <Logo />
        <Form method="post" noValidate>
          <Heading>Login</Heading>
          <FormInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            defaultValue=""
          />
          <FormInput
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            defaultValue=""
          />
          <Button type="submit">Entrar</Button>
          <FlexContainer
            justifyContent="space-between"
            alignItems="center"
            gap={{
              row: 'var(--size-1)',
              col: 'var(--size-1)'
            }}
            width="var(--size-full)"
            maxWidth="var(--resolution-480)"
          >
            <Anchor path="/sign-up?step=0">Não tem uma conta? Cadastre-se!</Anchor>
            <Anchor path="/forgot-password">Esqueceu sua senha?</Anchor>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  );
};

export default Login;
