import AlertType from './AlertEnum';

const InputValidation = (inputs: { [k: string]: FormDataEntryValue }) => {
  const inputValues = [...Object.values(inputs)];

  if (inputValues.includes('')) {
    return {
      isValid: false,
      type: AlertType.Error,
      message: 'Todos os campos são obrigatórios'
    };
  }

  return {
    isValid: true,
    emailValidation: (email: FormDataEntryValue) => {
      const mailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

      return mailRegex.test(`${email}`);
    },
    passwordValidation: (password: FormDataEntryValue) => {
      const passwordStr = `${password}`;
      const hasNumbers = /(?=.*\d)/;

      if (!hasNumbers.test(passwordStr)) {
        return {
          message: 'A senha tem que ter ao menos um número'
        };
      }
    },
    passwordLength: (password: FormDataEntryValue) => {
      return !(`${password}`.length < 8);
    },
    passwordMatch: (
      password: FormDataEntryValue,
      confirmPassword: FormDataEntryValue
    ) => {
      return password === confirmPassword;
    }
  };
};

export default InputValidation;
