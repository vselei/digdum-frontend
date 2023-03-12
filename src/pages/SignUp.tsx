import { useEffect } from 'react';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Form,
  redirect,
  useLoaderData,
  useActionData,
  useSearchParams,
  useNavigate
} from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';
import IconButton from '../components/IconButton';

import signUpSteps from '../utilities/signUpSteps';
import storingInputData from '../utilities/storingInputData';
import getDataFromSS from '../utilities/getDataFromSS';
import usernameGenerator from '../utilities/usernameGenerator';
import InputValidation from '../utilities/InputValidation';

import AlertType from '../helpers/AlertEnum';
import IconButtonType from '../helpers/IconButtonEnum';

import useAlert from '../hooks/useAlert';
import Position from '../components/Position';

const SS_NAME = 'userSignUpData';

export const action = async ({ request }: ActionFunctionArgs) => {
  // TODO: Remover session storage na página 404
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  storingInputData(SS_NAME, inputs);

  const { isEmpty, emailValidation, biggerThan, passwordMatch } =
    InputValidation(inputs);

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

  if (inputs['complete-name'] && !biggerThan!(inputs['complete-name'], 3)) {
    return {
      type: AlertType.Error,
      message: 'Digite seu nome completo'
    };
  }

  if (inputs.password && !biggerThan!(inputs.password, 8)) {
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

  const userSignUpDataParsed = getDataFromSS(SS_NAME, '{}');

  if (
    (step > 0 &&
      !userSignUpDataParsed['email'] &&
      !userSignUpDataParsed['complete-name']) ||
    (step > 1 &&
      !userSignUpDataParsed['password'] &&
      !userSignUpDataParsed['confirm-password'])
  ) {
    return {
      type: AlertType.Info,
      message: 'Você esqueceu algum campo. Volte para preencher'
    };
  }

  if (step < signUpSteps.length - 1) {
    return redirect(`/sign-up?step=${step + 1}`);
  }

  return redirect('/bamboo-forest');
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const step = Number.parseInt(searchParams.get('step')!) || 0;

  if (step < 0 || step >= signUpSteps.length) {
    throw new Response('O recurso solicitado não foi encontrado', {
      status: 404,
      statusText: 'Not Found'
    })
  }

  const userSignUpDataParsed = getDataFromSS(SS_NAME, '{}');

  if (step < signUpSteps.length - 1) {
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

  const navigate = useNavigate();

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
          col: 'var(--size-2)',
          row: 'var(--size-2)'
        }}
        flex="1 1 var(--resolution-240)"
        minHeight='calc(var(--h-100) - var(--size-2) * 3)'
      >
        <Logo />
        <Form method="post" noValidate>
          <FlexContainer justifyContent="space-between">
            <Heading>Cadastre-se</Heading>
            {step > 0 ? (
              <Position
                pos="fixed"
                left="var(--size-1)"
                bottom="var(--size-1)"
                media={[
                  {
                    size: 1024,
                    css: `
                    position: static;
                  `
                  }
                ]}
              >
                <IconButton
                  type={IconButtonType.Two}
                  onClickHandler={() => navigate(`/sign-up?step=${step - 1}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </IconButton>
              </Position>
            ) : (
              <></>
            )}
          </FlexContainer>
          {signUpSteps[step].map(step => (
            <FormInput
              key={step.id}
              id={step.id}
              label={step.label}
              type={step.type}
              placeholder={step.placeholder}
              defaultValue={
                getDataFromSS(SS_NAME, '{}')[step.id] || defaultValue
              }
            />
          ))}
          <Button type="submit">
            {step < signUpSteps.length - 1 ? 'Próximo' : 'Cadastre-se'}
          </Button>
          <Anchor path="/">Faça seu Login</Anchor>
        </Form>
      </FlexContainer>
    </>
  );
};

export default SignUp;
