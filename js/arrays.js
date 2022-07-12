// ! Arrays
// !Coleccion de datos, que puede alvergar otros datos (cualquier tipo)

// let koder1 = "Mariana";
// let koder2 = "Marco";

// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

//! Bracket Notations -> []
// !Indexesas -> 0,1,2,3.....

// console.log(koders[5][3][0], koders[1]);

//! Modificar un array
// ! buena practica, declaralos con "const"
// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

// koders[2] = "Christopher";

// console.log(koders);

//!
// console.log(typeof koders);

//! identificando un array
// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

// console.log(typeof koders); -> objeto
// console.log(Array.isArray(koders));
// console.log(koders instanceof Array);

//! Metodos de Array
// ? Push -> Agrega un elemento al final del array
// const koders = ["Mariana", "Marco"];
// koders.push("Luis");
// console.log(koders);

//? Pop -> Elimina el ultimo elemento de array
// const koders = ["Mariana", "Marco"];
// koders.pop();
// console.log(koders);

// ? Reverse ->
// ? Copywhithing -> Copia un elemnto dentro del mimso array
// const koders = ["Mariana", "Marco", "Chris", "Chris", "Chris", "Chris"];

// console.log(koders.copyWithin(1, 3, 5));

// ! Callback functions
// ! en js las funciones son first class citizen

//? Casa 1 -> Funciones independientes
// const a = (msg) => {
//   console.log("Este es el mensaje: ", msg);
// };

// const b = () => {
//   let msg = prompt("ingresa un mensaje: ");
//   return msg;
// };

// let res = b();

// a(res);

// ? Caso 2 -> callback functions

// const a = (msg,otro) => {
//   console.log("Este es el mensaje: ", msg);
// };

// const b = (funcion) => {
//   msg = "este es el mensaje";

//   funcion();

// };

// b(a, otro);

// ! Metodos funcionales de Arrays

// ! 1 ForEach -
// ! Recibe un callback function  -> currentValue, Index, Copia array
// ! No necesita/hace un return
// ! No modiica el array original
// ! la logica se ejecuta dentro de su bloque de codigo

// let arrayTest = ["julio", "Sofy", "Chris", "Jose"];

// const callFun = (currentValue, index, array) => {
//   console.log("Current Value: ", currentValue);
//   console.log("index: ", index);
//   console.log("array: ", array);
// };

// arrayTest.forEach((cV, index, arr) => {
//     console.log(cV)
// });

// let ages = [22, 25, 30, 35, 40];

// for (let i = 0; i < ages.length; i++) {
//   ages[i] += 2;
// }

// let newAges = [];

// ages.forEach((age, posicion, arr) => {
//   age += 4;
//   newAges.push(age);
// });

// console.log(ages);
// console.log(newAges);

// let arrayTest = ["julio", "Sofy", "Chris", "Jose"];
// let koderMayus = [];

// arrayTest.forEach((cv) => {
//   koderMayus.push(cv.toUpperCase());
// });

// console.log(koderMayus);

// ! Practica forEach
// /**
//  * Escribir una función
//  * Reciba como parametro Un array de ciudades
//  * Retornar las ciudades capitalizadas
//  * capitalize(['méxicO','RIo', 'Los AngelEs'])
//  * -> ['México','Rio', 'Los Angeles']
//  * Usar el metodo de array ForEach
//  */
const capitalize = (arr) => {
  let capCities = [];

  arr.forEach((city) => {
    // ! evaluar nombre compuesto
    // if (city.split(' ').lenght > 1){
    //     city.forEach
    // }

    let texto = "Ferdinand";

    texto.slice();

    let cityCapitalized = `${city[0].toUpperCase()}${city
      .slice(1)
      .toLowerCase()}`;

    capCities.push(cityCapitalized);
  });

  return capCities;
};
capitalize(["méxicO", "RIo", "Los AngelEs"]);

//! 2. Map
// ! 2.1Crea un nuevo array transformado
// ! 2.2Recibe una callback function con los argumentos definidos
// ! 2.2.1Current value
// ! 2.2.2Index
// ! 2.2.3 Array objetivo
// ! 2.3Crea un nuevo array con las modificaciones indicadas
// ! 2.4 La función callback debe tener un return
// ! 2.5 No cambia el array original
// ! 2.6 Debe usarse si se va a crear un nuevo array

// const numbers = [1, 2, 3, 43, 4, 5];

// let arr = numbers.map((cv, index, arr) => {
//   //   console.log(cv, index, arr);
//   return cv + 10;
// });

// console.log(arr);

// ! Practica .Map
// /**
// * Escribir una función
// * Reciba como parámetro Un array de ciudades
// * Retornar las ciudades capitalizadas
// * capitalize(['méxicO','RIo', 'Los AngelEs'])
// * -> ['México','Rio', 'Los Angeles']
// * Usar el método de array Map
// */

const capitalizeMap = (arr) => {
  let capCities = arr.map((city) => {
    return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
  });
  return capCities;
};

//! 3. Filter
// ! 3.1Crea un nuevo array filtrado
// ! 3.2Recibe una callback function con los argumentos definidos
// ! 3.2.1 Current value
// ! 3.2.2 Index
// ! 3.2.3 Array objetivo
//! 3.4 El filtrado lo hacemos dentro de la función callback
//! 3.5 Crea un nuevo array con las modificaciones indicadas
//! 3.6 La función callback debe tener un return

let newArr = [10, 22, 30, 41];

// -> [10,20,30]

let soloPares = newArr.filter((currentValue, index, copiaArrOriginal) => {
  // Condicion
  if (currentValue % 2 === 0) {
    return currentValue;
  }
});

console.log(soloPares);

// Demo Reduce reducido

//! Demo1  filterCities
let onlycities = [];
onlycities = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  // condicion
  if (typeof element === "string") {
    return element;
  }
});
console.log(onlycities);

// //! filterCitiesReduced
let onlycities2 = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  return typeof element === "string" ? element : null;
});
console.log(onlycities2);

// //! filterCitiesMostReduced
const onlycities3 = [1, 2, 4, "México", "Perú", "España", 3].filter(
  (element) => {
    return typeof element === "string";
  }
);

console.log(onlycities3);

//! Practica Capitalized -> Pendiente

//  * Escribir una función
//  * Reciba como parametro Un array de ciudades
//  * Retornar las ciudades capitalizadas
//  * capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"])
//  * -> ['México', 'Caracas', 'Los angeles', 'Estambul']
//  *

// const capitalize = (arr) => {
//   let capCities = [];
//   arr.forEach((city) => {
//     let cityCapitalized = `${city[0].toUpperCase()}${city
//       .slice(1)
//       .toLowerCase()}`;
//     capCities.push(cityCapitalized);
//   });
//   return capCities;
// };

// result = capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"]);

// console.log(result);

//
// Ejercicio 2 *Opcional
// Función que reciba como parámetro una array de strings
// y devuelva el primer y último carácter de cada string
// p.ej.
// // -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
//
