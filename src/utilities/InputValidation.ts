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
      const hasLowerCaseLetter = /(?=.*[a-z])/;
      const hasUpperCaseLetter = /(?=.*[A-Z])/;
      const hasSpecialCharacter = /(?=.*[$*&@#])/;

      if (!hasNumbers.test(passwordStr)) {
        return {
          message: 'A senha deve conter ao menos um número'
        };
      }

      if (!hasLowerCaseLetter.test(passwordStr)) {
        return {
          message: 'A senha deve conter ao menos uma letra minúscula'
        };
      }

      if (!hasUpperCaseLetter.test(passwordStr)) {
        return {
          message: 'A senha deve conter ao menos uma letra maiúscula'
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
