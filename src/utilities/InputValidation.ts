const InputValidation = (inputs: { [k: string]: FormDataEntryValue }) => {
  const inputValues = [...Object.values(inputs)];

  if (inputValues.includes('')) {
    return {
      isEmpty: true
    };
  }

  return {
    isEmpty: false,
    emailValidation: (email: FormDataEntryValue) => {
      const mailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

      return mailRegex.test(`${email}`);
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
