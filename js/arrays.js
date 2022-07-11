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

//! Practica Capitalized -> Pendiente

/**
 * Escribir una función
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitalizadas
 * capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"])
 * -> ['México', 'Caracas', 'Los angeles', 'Estambul']
 *
 */
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

multidimensionalArray = [[12, 3, 4], ["asd", 123], "sgtring"];
console.log(multidimensionalArray instanceof Array);

multidimensionalArray.forEach((e) => {
  if (e instanceof Array) {
    e.forEach((e) => {
      console.log(e);
    });
  } else {
    console.log(e);
  }
});

let name = "erdinand";

if ("aeiou".includes(name[0])) {
  console.log("start with vocal ");
}
