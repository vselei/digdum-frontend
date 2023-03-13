import { ActionFunctionArgs, Form, useActionData } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Anchor from '../components/Anchor';
import FlexContainer from '../components/FlexContainer';
import Heading from '../components/Heading';

import { getDataFromSS, storingInputData } from '../utilities/ssCrud';
import inputValidation from '../utilities/inputValidation';
import AlertType from '../helpers/AlertEnum';
import useAlert from '../hooks/useAlert';
import { useEffect } from 'react';

const SS_NAME = 'forgotPasswordData';

export const action = async ({ request }: ActionFunctionArgs) => {
  // TODO: Validação do back

  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  storingInputData(SS_NAME, inputs);

  const { isEmpty, emailValidation } = inputValidation(inputs);

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

  return {
    type: AlertType.Success,
    message: 'E-mail enviado com sucesso. Verifique sua caixa de mensagens'
  };
};

const ForgotPassword = () => {
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
        minHeight="90vh"
      >
        <Logo />
        <Form method="post" noValidate>
          <Heading>Esqueceu Sua Senha?</Heading>
          <FormInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            defaultValue={getDataFromSS(SS_NAME, '{}')['email'] || ''}
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
            <Anchor path="/sign-up?step=0">Cadastre-se!</Anchor>
            <Anchor path="/">Faça seu Login</Anchor>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  );
};

export default ForgotPassword;
