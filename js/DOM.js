//! DOM  Document Object Model 
// *----------------------------------------

// ! Seleccionar elementos 
// ? Seleccionar por id 
// let test = document.getElementById('titulo');

// ? Seleccionar por tag -> Multiples coincidencias
// let test = document.getElementsByTagName('h1')

// ? Seleccionar por clase  -> Multiples coincidencias
// let test = document.getElementsByClassName('claseTest')

// ! Seleccion por query id, clase  y tag -> Unica Coincidencia

// ? Seleccionar por id 
// let test = document.querySelector('#titulo') 

// ? Seleccionar por clase 
// let test = document.querySelector('.claseTest') 


// ? Seleccion por tag 
// let test = document.querySelector('h1') 

// ! Seleccionar multiples conincidencias por query
// let test2 = document.querySelectorAll('h1')

// * -------------------------------------
// ? 1 Seleccionar el elemento 

// let parrafo = document.getElementById('parrafo')
// console.log(parrafo)

// ! Setear atributo
    // setAttribute(<nombre attributo>,<valor>)
    // parrafo.setAttribute('hidden', true)

// ! Obtener  atributos
    // getAttribute(<nombre atributo>)
    // console.log(parrafo.getAttribute('id'))

// ! Comprobar la existencia de atributos
    // hasAtrribute(<nombre atributo>)
    // console.log(parrafo.hasAttribute('hidden'))

// ! Eliminar atributos
    // removeAttribute(<nombre del atributo>)
    // parrafo.removeAttribute('hidden')

// * ---------------------------------------------
// ! Practica 
/*
* Practica
* 1. Agregar en nuestro index.html
*  1.1. Un elemento lista <ul></ul> o <ol></ol>
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'
*/


// let list = document.querySelector('ul')
 
// // 2.1
// list.setAttribute('class', 'lista')
// list.setAttribute('id', 'lista')
 
 
// listItems = document.querySelectorAll('ul')
 
// // 2.2
// listItems.forEach(element => {
//    element.removeAttribute('class')
 
// });
 
// // 2.3
// listItems.forEach(element => {
//    element.setAttribute('class', 'list__item')
// });
// * -----------------------------------------

// ! Crear elementos en el DOM 
// createElemente(<elemento html a crear>)
// let list = document.createElement('ul')


// ! Insertar elemento a otro elemento
// ElementoObjetivo.appendChild(<elemento a agregar>) 
// let body = document.querySelector('body')
// body.appendChild(list)

// ! Agregar texto al interior de un elemento
// let item = document.createElement('li')
// item.textContent = 'Esto es texto'
// list.appendChild(item)
// console.log(list)

// * -----------------
// ! Demo insertar multiples items 
// let list = document.createElement('ul')
// let body = document.querySelector('body')
// body.appendChild(list)

// for (let i = 0; i <= 30; i++){
//     let item = document.createElement('li')
//     item.textContent = `item # ${i}`
//     list.appendChild(item)
// }

// ! Insertar elemento antes que otro
// insertBefore(<elemento a insertar>, <referencia>)

let parent = document.querySelector('.parent')

let reference = document.querySelector('.reference')

let item = document.createElement('p')

item.textContent = 'algoooooooo'


parent.insertBefore(item, reference)







