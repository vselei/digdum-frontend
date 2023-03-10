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

  return { isValid: true };
};

export default InputValidation;
