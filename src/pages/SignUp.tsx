import { Form } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';
import { useState } from 'react';

const signUpSteps = [
  [
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'Digite seu e-mail'
    }
  ],
  [
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Digite sua senha'
    },
    {
      id: 'confirm-password',
      label: 'Confirme sua Senha',
      type: 'password',
      placeholder: 'Confirme sua senha'
    }
  ],
  [
    {
      id: 'complete-name',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo'
    },
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Digite seu nome de usuário'
    }
  ]
];

const SignUp = () => {
  const [steps, setSteps] = useState(0);

  const handleIncreaseSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <>
      <Head
        title="Cadastre-se"
        description="Crie sua conta ou realize seu login, e comece a postar fotos, vídeos, digdums e muito mais. Uma rede social inovadora, tudo em um, venha ser um DigDum!"
      />
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        gap={{
          col: 'var(--size-3)'
        }}
        flex="1 1 24rem"
        minHeight="var(--h-100)"
      >
        <Logo />
        <Form method="post">
          <Heading>Cadastre-se</Heading>
          {signUpSteps[steps].map(step => (
            <FormInput
              key={step.id}
              id={step.id}
              label={step.label}
              type={step.type}
              placeholder={step.placeholder}
            />
          ))}
          {steps < signUpSteps.length - 1 ? (
            <Button type="button" onClick={handleIncreaseSteps}>
              Próximo
            </Button>
          ) : (
            <Button type="submit">Cadastre-se</Button>
          )}
          <Anchor path="/">Já possui uma conta? Faça seu Login</Anchor>
        </Form>
      </FlexContainer>
    </>
  );
};

export default SignUp;
