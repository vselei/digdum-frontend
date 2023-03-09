const storingInputData = (
  formData: FormData
) => {
  const userSignUpData = 'userSignUpData';

  const ancientLSData = JSON.parse(
    localStorage.getItem(userSignUpData) || '{}'
  );

  const inputs = Object.fromEntries(formData);

  for (const inputProp in inputs) {
    localStorage.setItem(
      userSignUpData,
      JSON.stringify({
        ...ancientLSData,
        [inputProp]: inputs[inputProp]
      })
    );
  }
};

export default storingInputData;
