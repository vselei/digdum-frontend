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
import getDataFromSS from '../utilities/getDataFromSS';
import usernameGenerator from '../utilities/usernameGenerator';
import InputValidation from '../utilities/InputValidation';
import AlertType from '../utilities/AlertEnum';
import useAlert from '../hooks/useAlert';
import { useEffect } from 'react';

const SS_NAME = 'UserSignUpData';

export const action = async ({ request }: ActionFunctionArgs) => {
  // TODO: Página 404 quando a rota não existir
  // TODO: Detectar quando a etapa de cadastro estiver no meio do caminho e encaminhar para primeira etapa, caso não haja dado anterior inserido
  // TODO: Validar
  // TODO: Apagar signup data ao completar cadastro ou sair da url de cadastro
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  storingInputData(SS_NAME, inputs);

  const {
    isEmpty,
    emailValidation,
    passwordLength,
    passwordMatch
  } = InputValidation(inputs);

  if (isEmpty) {
    return {
      type: AlertType.Error,
      message: 'Todos os campos são obrigatórios'
    };
  }

  if (inputs.email && !emailValidation!(inputs.email)) {
    return {
      type: AlertType.Error,
      message: 'Formato de e-mail incorreto'
    };
  }

  if (inputs.password && !passwordLength!(inputs.password)) {
    return {
      type: AlertType.Error,
      message: 'A senha tem que ter no mínimo 8 caracteres'
    };
  }

  if (
    inputs.password &&
    inputs['confirm-password'] &&
    !passwordMatch!(inputs.password, inputs['confirm-password'])
  ) {
    return {
      type: AlertType.Error,
      message: 'As senhas não são iguais'
    };
  }

  const searchParams = new URL(request.url).searchParams;
  const step = parseInt(searchParams.get('step')!) || 0;

  if (step >= signUpSteps.length) {
    return redirect('/bamboo-forest');
  }

  return redirect(`/sign-up?step=${step + 1}`);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const step = Number.parseInt(searchParams.get('step')!) || 0;

  const userSignUpDataParsed = getDataFromSS(SS_NAME, '{}');

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
    } else {
      showAlert({ type: AlertType.Error, message: '' });
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
                  defaultValue={getDataFromSS(SS_NAME, '{}')[step.id] || defaultValue}
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
                defaultValue={getDataFromSS(SS_NAME, '{}')['email-validation'] || defaultValue}
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
