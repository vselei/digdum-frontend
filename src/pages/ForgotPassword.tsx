import { Form } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

const ForgotPassword = () => {
  // TODO: Validar

  return (
    <>
      <Head
        title="Esqueceu Sua Senha"
        description="Esqueceu sua senha? Recupere já, e volte a usar o DigDum, a única rede social, tudo em um!"
      />
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        gap={{
          col: 'var(--size-2)',
          row: 'var(--size-2)'
        }}
        flex="1 1 var(--resolution-240)"
        minHeight='90vh'
      >
        <Logo />
        <Form method="post" noValidate>
          <Heading>Esqueceu Sua Senha?</Heading>
          <FormInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            defaultValue=""
          />
          <Button type="submit">Recuperar Conta</Button>
          <FlexContainer
            justifyContent="space-between"
            alignItems="center"
            gap={{
              row: 'var(--size-1)',
              col: 'var(--size-1)'
            }}
            width="var(--size-full)"
            media={[
              {
                size: 1024,
                css: `
                  max-width: var(--resolution-480);
                `
              }
            ]}
          >
            <Anchor path="/sign-up?step=0">
              Cadastre-se!
            </Anchor>
            <Anchor path="/">Faça seu Login</Anchor>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  );
};

export default ForgotPassword;
