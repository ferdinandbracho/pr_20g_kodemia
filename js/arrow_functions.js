// ! Funciones Fecla o Arrow Functions
// ! No necesitamos de la palabra reservada functions
// ! no en todo los caso es necesaria la palbara reservcada return para regresar

//! Declaracion
// const arrowFunction = () => {
//   console.log(p1);
// };

//! Demo
// const stringReverse = (str = "hola") => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// console.log(stringReverse());

//! Demo reduccion de codigo con el uso de arrow function
// // ? Version 1
// const functionLarge = (a) => {
//   // Code
//   return a + 1;
// };

// // ? Version 2
// const functionMedium = () => {
//   a + 1;
// };

// // ? Version 3
// const functionSmall = () => a + 1;

// Practica Grupal -> Identificar palidromo

// función de retorno
const isPalindrome = (str) => {
  let strWithOutSpaces = str.trim().replaceAll(/\s/g, "").toLowerCase();
  let strReversed = "";

  for (i = strWithOutSpaces.length - 1; i >= 0; i--) {
    strReversed += strWithOutSpaces[i];
  }

  if (strWithOutSpaces === strReversed) {
    return "El string ingresado si es un palindromo";
  } else {
    return "El string ingresado no es un palindromo";
  }
};

console.log(isPalindrome("osof"));
