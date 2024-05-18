//Función que verifica si cadena es vacia
export const verificarNoVacio = (cadena) => {
//   if (cadena.trim() !== "") {
  if (String(cadena).trim() !== "") {
    return true;
  } else {
    return false;
  }
};

//Función que verifica que una cadena solo contanga
//caracteres alfabéticos y espacios
export const verificarCaracteresAlfabeticos = (cadena) => {
  const regex = new RegExp("^[a-zA-ZñÑ ]+$");
  return regex.test(cadena);
};

//Función que verifica un valor entero (positivo negativo o cero)
export const validarNumeroEntero = (cadena) => {
  const regex = new RegExp("^-?d+$");
  return regex.test(cadena);
};

//Función que verifica un valor entero (positivo o cero)
export const validarNumeroEnteroPositivo = (cadena) => {
  const regex = new RegExp("^[1-9]([0-9])*$");
  return regex.test(cadena);
};

//Función que valida longitud minima y maxima de cadena
export const validarLongitudCadena = (cadena, minimo, maximo) => {
  const longitud = cadena.length;
  return longitud >= minimo && longitud <= maximo;
};

//Función que valida numeros decimales
export const validarNumeroDecimal = (numero) => {
  const regex = new RegExp(
    "^(([1-9]{1,3}(.[0-9]{3})*)|([0-9]+))(,[0-9]{1,2})?$"
  );
  // const regex = new RegExp("^[1-9]{1,3}(\.[1-9]{3})*(,[1-9]{1,2})?$");
  return regex.test(numero);
};

//Función que valida File Selected
export const fileSelected = (inputFile) => {
  if (inputFile.files[0]) return true;
  else return false;
};

//Función que valida email
export const validarEmail = (email) => {
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
  return regexEmail.test(email);
};
