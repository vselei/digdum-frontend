const storingInputData = (
  lsName: string,
  inputs: {
    [k: string]: FormDataEntryValue;
  }
) => {
  const ancientLSData = JSON.parse(localStorage.getItem(lsName) || '{}');
  
  localStorage.setItem(
    lsName,
    JSON.stringify({
      ...ancientLSData,
      ...inputs
    })
  );
};

export default storingInputData;
