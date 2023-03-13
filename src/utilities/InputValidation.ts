const inputValidation = (inputs: { [k: string]: FormDataEntryValue }) => {
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
    biggerThan: (text: FormDataEntryValue, length: number) => {
      return !(`${text}`.length < length);
    },
    passwordMatch: (
      password: FormDataEntryValue,
      confirmPassword: FormDataEntryValue
    ) => {
      return password === confirmPassword;
    },
    dateValidation: (date: string) => {
      const splittedDate = date.split('/');
    }
  };
};

export default inputValidation;
