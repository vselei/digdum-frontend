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

  // TODO: Detectar quando a etapa de cadastro estiver no meio do caminho e encaminhar para primeira etapa, caso não haja dado anterior inserido
};

export default storingInputData;
