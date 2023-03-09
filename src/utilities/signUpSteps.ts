const signUpSteps = [
  [
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'Digite seu e-mail'
    }
  ],
  [
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Digite sua senha'
    },
    {
      id: 'confirm-password',
      label: 'Confirme sua Senha',
      type: 'password',
      placeholder: 'Confirme sua senha'
    }
  ],
  [
    {
      id: 'complete-name',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo'
    },
    {
      id: 'born-date',
      label: 'Data de nascimento',
      type: 'text',
      placeholder: 'Data de nascimento (DD/MM/AAAA)'
    }
  ],
  [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Digite seu nome de usuário'
    }
  ]
];

export default signUpSteps;
