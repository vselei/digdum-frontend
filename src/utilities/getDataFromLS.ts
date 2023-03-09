const getDataFromLS = (lsName: string, defaultValue: string) => {
  return JSON.parse(localStorage.getItem(lsName) || defaultValue);
}

export default getDataFromLS;