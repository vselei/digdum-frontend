const getDataFromSS = (ssName: string, defaultValue: string) => {
  return JSON.parse(sessionStorage.getItem(ssName) || defaultValue);
}

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

const removingDataFromSS = (ssName: string) => {
  sessionStorage.removeItem(ssName);
}

export {getDataFromSS, storingInputData, removingDataFromSS};