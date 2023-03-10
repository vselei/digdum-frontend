import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Form,
  redirect,
  useLoaderData,
  useActionData,
  useSearchParams
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
import getDataFromLS from '../utilities/getDataFromLS';
import usernameGenerator from '../utilities/usernameGenerator';
import InputValidation from '../utilities/InputValidation';
import AlertType from '../utilities/AlertEnum';
import useAlert from '../hooks/useAlert';
import { useEffect } from 'react';

export const action = async ({ request }: ActionFunctionArgs) => {
  // TODO: Página 404 quando a rota não existir
  // TODO: Detectar quando a etapa de cadastro estiver no meio do caminho e encaminhar para primeira etapa, caso não haja dado anterior inserido
  // TODO: Mudar para query string
  // TODO: Validar
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const { isValid, type, message } = InputValidation(inputs);

  if (!isValid) {
    return {
      type,
      message
    };
  }

  const lsName = 'UserSignUpData';
  storingInputData(lsName, inputs);

  const searchParams = new URL(request.url).searchParams;
  const step = parseInt(searchParams.get('step')!) || 0;

  if (step >= signUpSteps.length) {
    return redirect('/bamboo-forest');
  }

  return redirect(`/sign-up?step=${step + 1}`);
};

export const loader = ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const step = parseInt(searchParams.get('step')!) || 0;

  const lsName = 'UserSignUpData';
  const userSignUpDataParsed = getDataFromLS(lsName, '{}');

  if (step !== 3) {
    return '';
  }

  const usernameGen = usernameGenerator(userSignUpDataParsed['complete-name']);

  return usernameGen;
};

const SignUp = () => {
  const actionData = useActionData() as {
    type: AlertType;
    message: string;
  };

  const defaultValue = useLoaderData() as string;

  const [searchParams] = useSearchParams();
  const step = parseInt(searchParams.get('step')!) || 0;

  const { showAlert } = useAlert();
  useEffect(() => {
    if (actionData?.message) {
      showAlert({
        message: actionData.message,
        type: actionData.type
      });
    }
  }, [actionData]);

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
        <Form method="post" noValidate>
          <Heading>Cadastre-se</Heading>
          {step <= signUpSteps.length - 1 ? (
            <>
              {signUpSteps[
                step < signUpSteps.length ? step : signUpSteps.length - 1
              ].map(step => (
                <FormInput
                  key={step.id}
                  id={step.id}
                  label={step.label}
                  type={step.type}
                  placeholder={step.placeholder}
                  defaultValue={defaultValue}
                />
              ))}
              <Button type="submit">
                {step < signUpSteps.length - 1 ? 'Próximo' : 'Cadastre-se'}
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
                defaultValue={defaultValue}
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
