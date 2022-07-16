/**
 * Ejercicio 1 *Obligatorio
 * Realizar una función que reciba como parametro 1 array de numeros
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 *
 */

const evenOnly = (arr) => {
  if (arr && arr.length > 0) {
    let arrayEven = [];

    for (i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item % 2 === 0) {
        arrayEven.push(item);
      }
    }

    return arrayEven;
  } else {
    return "Se necesita un array";
  }
};

console.log(evenOnly([1, 23, 4, 3, 55, 22]));

/**
 * Ejercicio 2 *Opcional
 * Función que reciba como parámetro una array de strings
 * y devuelva el primer y último carácter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */

const firstAndLast = (arrStrings) => {
  let arrayToFill = [];
  for (i = 0; i < arrStrings.length; i++) {
    let item = arrStrings[i];
    let newString = ` ${item.slice(0, 1)}${item.slice(item.length - 1)}`;
    arrayToFill.push(newString);
  }
  return arrayToFill;
};

console.log(firstAndLast(["koders", "mentor", "kodemia"]));
