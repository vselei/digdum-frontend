const getDataFromSS = (ssName: string, defaultValue: string) => {
  return JSON.parse(sessionStorage.getItem(ssName) || defaultValue);
}

export default getDataFromSS;