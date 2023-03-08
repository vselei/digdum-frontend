import { Form, useActionData, ActionFunctionArgs } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

import signUpSteps from '../utilities/signUpSteps';

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  const steps = form.get('steps');

  return {
    steps
  };
};

const SignUp = () => {
  const steps = 0;

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
          <input type="hidden" name="steps" value={steps || 0} />
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
