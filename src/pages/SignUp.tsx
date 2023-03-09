import {
  ActionFunctionArgs,
  Form,
  redirect,
  useParams
} from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

import signUpSteps from '../utilities/signUpSteps';
import storingInputData from '../utilities/storingInputData';

export const action = async ({ request, params }: ActionFunctionArgs) => {
  // TODO: Página 404 quando a rota não existir

  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const lsName = 'UserSignUpData';
  storingInputData(lsName, inputs);

  const { steps } = params;
  const stepCount = parseInt(steps!);

  if (stepCount >= signUpSteps.length) {
    return redirect('/bamboo-forest');
  }

  return redirect(`/sign-up/${stepCount + 1}`);
};

const SignUp = () => {
  const { steps } = useParams();
  const stepCount = parseInt(steps!);

  // TODO: Data de nascimento

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
        <Form method="post">
          <Heading>Cadastre-se</Heading>
          {stepCount <= signUpSteps.length - 1 ? (
            <>
              {signUpSteps[
                stepCount < signUpSteps.length
                  ? stepCount
                  : signUpSteps.length - 1
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
                {stepCount < signUpSteps.length - 1 ? 'Próximo' : 'Cadastre-se'}
              </Button>
              <Anchor path="/">Já possui uma conta? Faça seu Login</Anchor>
            </>
          ) : (
            <>
              <FormInput
                key="email-validation"
                id="email-validation"
                label="Valide seu e-mail"
                type="tel"
                placeholder="Verifique sua caixa de mensagens"
              />
              <Button type="submit">Validar e-mail</Button>
              <Anchor path={`/bamboo-forest`}>Validar mais tarde</Anchor>
            </>
          )}
        </Form>
      </FlexContainer>
    </>
  );
};

export default SignUp;
