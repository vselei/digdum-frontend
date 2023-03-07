import { Form } from 'react-router-dom';

import Head from '../components/Head';
import FormInput from '../components/FormInput';

const Login = () => {
  return (
    <>
      <Head
        title="Login"
        description="Realize seu login ou crie sua conta, e comece a postar fotos, vídeos, digdums e muito mais. A rede social que ajuda você a crescer! Tudo em um, não perca mais tempo, e use o DigDum."
      />
      <Form method="post">
        <FormInput
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <FormInput
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <FormInput
          id="confirm-password"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme sua senha"
        />
      </Form>
    </>
  );
};

export default Login;
