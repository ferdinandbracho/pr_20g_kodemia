// Ejercicio 1 
// Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
// Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
// Luego en otro console log, imprime todas las llaves dentro del objeto
// Luego en otra console log, imprime todas los valores dentro del objeto
// En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador


// koder = {
//     firstName: 'Ferdinand',
//     lastName: 'Bracho',
//     age: 30,
//     city: 'Ciudad de Mexico',
//     bootcamp: {
//         python: true,
//         javascript: false
//     },
//     mentor: true
// }

// console.log(`${koder.firstName} es un koder del bootcamp de ${koder.bootcamp.python ? 'python' : 'javascript'}, tienen ${koder.age} anios de edad y por ahora ${koder.mentor ? 'es mentor' : 'no es mentor'}`)


// **
//  * Ejercicio 2.
//  * Dado un objeto inicial, hacer los siguientes puntos 
//  * 
//  * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
//  * 2. Cambiar el nivel a 4
//  * 3. Eliminar la propiedad avatar
//  * 4. Agregar una nueva propiedad de edad y poner el valor de 30
//  * 5. Imprimir en consola todos los lenguajes dominados
//  * 6. Clonar el objeto en uno nuevo
//  * 7. Imprimir en consola el nuevo objeto
//  * 
//  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//  */

let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}

koder.languages.push('Go')
koder.level = 4
delete koder.avatar
koder.age = 30
koder2 = {...koder}

console.log(koder)
console.log(koder2)