import { Form } from 'react-router-dom';

import WhiteLogo from '/img/digdum-logo.svg';

import Head from '../components/Head';
import FormInput from '../components/FormInput';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Login = () => {
  return (
    <>
      <Head
        title="Login"
        description="Realize seu login ou crie sua conta, e comece a postar fotos, vídeos, digdums e muito mais. A rede social que ajuda você a crescer! Tudo em um, não perca mais tempo, e use o DigDum."
      />
      <Logo
        src={WhiteLogo}
        alt="Logo DigDum: Um panda branco e azul escuro, segurando um celular"
        width={480}
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
        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
};

export default Login;
