import { Form } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

import signUpSteps from '../utilities/signUpSteps';
import { useState } from 'react';

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
        flex="1 1 var(--resolution-240)"
        minHeight="var(--h-100)"
      >
        <Logo />
        <Form method="post" onSubmit={handleIncreaseSteps}>
          <Heading>Cadastre-se</Heading>
          {signUpSteps[
            steps < signUpSteps.length ? steps : signUpSteps.length - 1
          ].map(step => (
            <FormInput
              key={step.id}
              id={step.id}
              label={step.label}
              type={step.type}
              placeholder={step.placeholder}
            />
          ))}
          <Button type="submit">
            {steps < signUpSteps.length - 1 ? 'Próximo' : 'Cadastre-se'}
          </Button>
          <Anchor path="/">Já possui uma conta? Faça seu Login</Anchor>
        </Form>
      </FlexContainer>
    </>
  );
};

export default SignUp;
