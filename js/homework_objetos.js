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

// let koder = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isMentor: true,
//     level: 3,
//     avatar: "https://picsum.photos/200/300"
// }

// koder.languages.push('Go')
// koder.level = 4
// delete koder.avatar
// koder.age = 30
// koder2 = {...koder}
// koder2 = koder 

// console.log(koder)
// console.log(koder2)




// element.innerHTML

// element.innerText

// element.style.color = value

// element.getAttribute(attribute_name)

// element.setAttribute(attribute_name, value)

// element.removeAttribute(attribute_name)




// // selecionar el elemento a cambiar
// let titulo = document.querySelector('.title')
// titulo.setAttribute('data-id', 100)


// // element.getAttribute('')
// let atrirbutoP = titulo.getAttribute('data-id')
// console.log(atrirbutoP)
// document.querySelector('.title').getAttribute('hidden') 
// // // comprobar si existe un atributo
// // titulo.hasAttribute('data-id')
// // // -> true / false

// // eliminar atributos 
// // element.removeAttribute(attrName)
// // document.querySelector('.title').removeAttribute('id')


let ul = document.querySelector('ul');

for (let i = 1; i <= 10; i++){
    let item = document.createElement('li')
    item.textContent = `item ${i}`
    ul.appendChild(item)
}



// Paso a paso
// Creamos lista
let listaDos = document.createElement('ul')

// Creamos list item 
let item1 = document.createElement('li')

// Seleccionamos el body del documento
let body = document.querySelector('body')

// Agregamos texto al item de la lista
item1.textContent = 'item 1'

// Agregamos el item dentro de lista
listaDos.appendChild(item1 )

// Agregamos la lista dentro del 
body
body.appendChild( listaDos )


// Insert Before 

parent = document.querySelector('.parent')

itemToIsert = document.createElement('p')
itemToIsert.textContent = 'Soy un parrafo insertado'
reference = document.querySelector('.reference')

parent.insertBefore(itemToIsert, reference)

