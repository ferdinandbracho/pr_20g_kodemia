// ! Funciones Fecla o Arrow Functions
// ! No necesitamos de la palabra reservada functions
// ! no en todo los caso es necesaria la palbara reservcada return para regresar

const numbers = [45, 4, 9, 16, 25];

function myFunction(total, value) {
  total + value;
}

let sum = numbers.reduce(myFunction, 100);

console.log(sum);
