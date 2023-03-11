const storingInputData = (
  ssName: string,
  inputs: {
    [k: string]: FormDataEntryValue;
  }
) => {
  const ancientLSData = JSON.parse(sessionStorage.getItem(ssName) || '{}');
  
  sessionStorage.setItem(
    ssName,
    JSON.stringify({
      ...ancientLSData,
      ...inputs
    })
  );
};

export default storingInputData;
