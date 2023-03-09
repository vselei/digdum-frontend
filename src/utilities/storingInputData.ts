const storingInputData = (
  lsName: string,
  inputs: {
    [k: string]: FormDataEntryValue;
  }
) => {
  const ancientLSData = JSON.parse(localStorage.getItem(lsName) || '{}');

  for (const inputProp in inputs) {
    localStorage.setItem(
      lsName,
      JSON.stringify({
        ...ancientLSData,
        [inputProp]: inputs[inputProp]
      })
    );
  }
};

export default storingInputData;
