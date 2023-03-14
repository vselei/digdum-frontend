import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData
} from 'react-router-dom';
import { useEffect } from 'react';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

import inputValidation from '../utilities/inputValidation';

import AlertType from '../helpers/AlertEnum';
import useAlert from '../hooks/useAlert';

import { getDataFromSS, storingInputData } from '../utilities/ssCrud';

const SS_NAME = 'loginData';

export const action = async ({ request }: ActionFunctionArgs) => {
  // TODO: Validação do back

  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  storingInputData(SS_NAME, inputs);

  const { isEmpty, emailValidation, biggerThan } = inputValidation(inputs);

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

  if (inputs.password && !biggerThan!(inputs.password, 8)) {
    return {
      type: AlertType.Error,
      message: 'A senha tem que ter no mínimo 8 caracteres'
    };
  }

  return redirect('/bamboo-forest');
};

const Login = () => {
  const actionData = useActionData() as {
    type: AlertType;
    message: string;
  };

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
        title="Login"
        description="Realize seu login ou crie sua conta, e comece a postar fotos, vídeos, digdums e muito mais. A rede social que ajuda você a crescer! Tudo em um, não perca mais tempo, e use o DigDum."
      />
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        gap={{
          col: 'var(--size-2)',
          row: 'var(--size-2)'
        }}
        flex="1 1 var(--resolution-240)"
        minHeight="90vh"
      >
        <Logo />
        <Form method="post" noValidate>
          <Heading>Login</Heading>
          <FormInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            defaultValue={getDataFromSS(SS_NAME, '{}')['email'] || ''}
          />
          <FormInput
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            defaultValue={getDataFromSS(SS_NAME, '{}')['password'] || ''}
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
          >
            <Anchor path="/sign-up?step=0">Cadastre-se!</Anchor>
            <Anchor path="/forgot-password">Esqueceu sua senha?</Anchor>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  );
};

export default Login;
