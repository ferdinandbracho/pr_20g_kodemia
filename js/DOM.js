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
// ! 1 Seleccionar el elemento
// let parrafo = document.getElementById('esteESUNID')
// console.log(parrafo)

// ! Setear atributo
// setAttribute(<nombre attributo>,<valor>)
// parrafo.setAttribute('hidden', true)

// ! Obtener valor de atributos
// getAttribute(<nombre atributo>)
// console.log(parrafo.getAttribute('class'))

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

// 2.1
// list.setAttribute('class', 'lista')
// list.setAttribute('id', 'lista')

// listItems = document.querySelectorAll('ul')

// 2.2
// listItems.forEach(element => {
//    element.removeAttribute('class')

// });

// 2.3
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

// let parent = document.querySelector('.parent')

// let reference = document.querySelector('.reference')

// let item = document.createElement('p')

// item.textContent = 'algoooooooo'

// parent.insertBefore(item, reference)

// ! Tarea

// * Dado un arreglo de koders
// * 1. Generar una lista con la clase "koders"
// * 2. Agregar a cada koder en esa lista
// * 3. A todos los koders agregarles la clase "item-koder"

// let koders =  [
//     {
//         name: 'Ferdinand',
//         lastName: 'Bracho',
//         age: 30,
//         generation: 2,
//         modulos: ['js','python', 'git'],
//     },
//     {
//         name: 'Alfredo',
//         lastName: 'Pi',
//         age: 20,
//         generation: 10,
//         modulos: ['Node', 'Cloud'],
//     },
//     {
//         name: 'Ale',
//         lastName: 'Pa',
//         age: 30,
//         generation: 1,
//         modulos: ['React'],
//     }
// ]

// // * 1
// let list = document.createElement('ul')

// list.setAttribute('class', 'koders')

// document.querySelector('body').appendChild(list)

// // * 2 y 3
// koders.forEach((koder) => {
//     listItem = document.createElement('li')

//     listItem.textContent = `${koder.name} con ${koder.age} anios, es koder de la generacion ${koder.generation} y sus modulos favoritos son ${koder.modulos}`
//     listItem.textContent = Object.values(koder)

//     listItem.setAttribute('class', 'item-koder')

//     list.appendChild(listItem)
// })


{/* <table>
    <thead>
        <th>Nom</th>
        <th>Ape</th>
        <th>Edad</th>
        <th>Gen</th>
        <th>Mod</th>
    </thead>
    <tbody>
        <tr>
            <td>ferdinand</td>
            <td>bracho</td>
            <td>30 </td>
            <td>fgegt</td>
            <td>modules</td>
        </tr>
        <tr>
            <td>Alfredo</td>
            <td>bracho</td>
            <td>30 </td>
            <td>fgegt</td>
            <td>modules</td>
        </tr>
        <tr>
            <td>Ale</td>
            <td>bracho</td>
            <td>30 </td>
            <td>fgegt</td>
            <td>modules</td>
        </tr>
    </tbody>
</table>  */}

// ! Demo tabla de koders
// document.querySelector("h1").textContent += "Koders";

// console.log(document.querySelector('h1').textContent)

// let koders = [
//   {
//     name: "Ferdinand",
//     lastName: "Bracho",
//     age: 30,
//     generation: 2,
//     modulos: ["js", "python", "git"],
//   },
//   {
//     name: "Alfredo",
//     lastName: "Pi",
//     age: 20,
//     generation: 10,
//     modulos: ["Node", "Cloud"],
//   },
//   {
//     name: "Ale",
//     lastName: "Pa",
//     age: 30,
//     generation: 1,
//     modulos: ["React"],
//   },
//   {
//     name: "Ale",
//     lastName: "Pa",
//     age: 30,
//     generation: 1,
//     modulos: ["React"],
//   },{
//     name: "Ale",
//     lastName: "Pa",
//     age: 30,
//     generation: 1,
//     modulos: ["React"],
//   },{
//     name: "Ale",
//     lastName: "Pa",
//     age: 30,
//     generation: 1,
//     modulos: ["React"],
//   },{
//     name: "Ale",
//     lastName: "Pa",
//     age: 30,
//     generation: 1,
//     modulos: ["React"],
//   },
// ];

// // ? Creating initial elements
// let table = document.createElement("table");
// let tHead = document.createElement("thead");
// table.appendChild(tHead);

// let thName = document.createElement("th");
// thName.textContent = "Nombre";

// let thLastNAme = document.createElement("th");
// thLastNAme.textContent = "Apellido";

// let thAge = document.createElement("th");
// thAge.textContent = "Edad";

// let thGeneration = document.createElement("th");
// thGeneration.textContent = "Generacion";

// let thModule = document.createElement("th");
// thModule.textContent = "Modulos";

// tHead.appendChild(thName);
// tHead.appendChild(thLastNAme);
// tHead.appendChild(thAge);
// tHead.appendChild(thGeneration);
// tHead.appendChild(thModule);


// document.querySelector("body").appendChild(table);

// let tBody = document.createElement("tbody");
// table.appendChild(tBody);

// //? Creating and setting table body elements
// // XX  TODO =>

// koders.forEach((koder) => {
//     // ? Creando fila
//     let tRow = document.createElement('tr')

//     // ? Creando celdas 
//     let tdName = document.createElement('td')
//     let tdLasTName = document.createElement('td')
//     let tdAge = document.createElement('td')
//     let tdGeneration = document.createElement('td')
//     let tdModule = document.createElement('td')

//     // ? Poblando celdas con datos del koder 
//     tdName.textContent = koder['name']
//     tdLasTName.textContent = koder['lastName']
//     tdAge.textContent = koder['age']
//     tdGeneration.textContent = koder['generation']
//     tdModule.textContent = koder['modulos']

//     // ? Insertadndo celdas en la fila 
//     tRow.appendChild(tdName)
//     tRow.appendChild(tdLasTName)
//     tRow.appendChild(tdAge)
//     tRow.appendChild(tdGeneration)
//     tRow.appendChild(tdModule)

//     // ? Insertando fila en cuerpo de la tabla
//     tBody.appendChild(tRow)
// })

// ! Otras propiedades de los elementos del DOM 
// ? textContent
// ? innerText
// ? innerHTML
    // let lista = document.querySelector('.lista')

    // console.log(lista)

    // let menuItems = ['comidaChina', 'Mexicana', 'Venezolana']

    // menuItems.forEach((texto, index, arr) =>{
    //     lista.innerHTML += `<li class="items"> ${texto} </li>`
    // })

// ! classList
// let lista = document.querySelector('ul')

// console.log(lista)

// // ? Agregamos una o mas clases (respando las ya presentas)
// lista.classList.add('otra','otramas')

// // ? Nos ayuda a elimianr clases indicadas
// lista.classList.remove('otramas')

// // ? Nos da un string con las clases 
// console.log(lista.classList.value)

// // ? Nos construye un iterable -> for of 
// let iteClass = lista.classList.values()

// console.log(iteClass)

// for (x of iteClass){
//     console.log(x)
// }

// // ? lenght 
// console.log(lista.classList.length)


// ! Construir un album de card 
/**
* Ejercicio
* Dado un array de álbumes
* Imprimir en un grid de cards con los álbumes
* Cada card debe tener
* Id, Titulo e imagen del album
*
* Referencia
* https://getbootstrap.com/docs/5.2/components/card/#grid-cards
*/
 
 
// const albumes = [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600x300/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//       "albumId": 1,
//       "id": 2,
//       "title": "reprehenderit est deserunt velit ipsam",
//       "url": "https://via.placeholder.com/600x300/771796",
//       "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//       "albumId": 1,
//       "id": 3,
//       "title": "officia porro iure quia iusto qui ipsa ut modi",
//       "url": "https://via.placeholder.com/600x300/24f355",
//       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//       "albumId": 1,
//       "id": 4,
//       "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//       "url": "https://via.placeholder.com/600x300/d32776",
//       "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//       "albumId": 1,
//       "id": 5,
//       "title": "natus nisi omnis corporis facere molestiae rerum in",
//       "url": "https://via.placeholder.com/600x300/f66b97",
//       "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     },
//     {
//       "albumId": 1,
//       "id": 6,
//       "title": "accusamus ea aliquid et amet sequi nemo",
//       "url": "https://via.placeholder.com/600x300/56a8c2",
//       "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//     },
//     {
//       "albumId": 1,
//       "id": 7,
//       "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//       "url": "https://via.placeholder.com/600x300/b0f7cc",
//       "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
//     },
//     {
//       "albumId": 1,
//       "id": 8,
//       "title": "aut porro officiis laborum odit ea laudantium corporis",
//       "url": "https://via.placeholder.com/600x300/54176f",
//       "thumbnailUrl": "https://via.placeholder.com/150/54176f"
//     },
//     {
//       "albumId": 1,
//       "id": 9,
//       "title": "qui eius qui autem sed",
//       "url": "https://via.placeholder.com/600x300/51aa97",
//       "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
//     },
//     {
//       "albumId": 1,
//       "id": 10,
//       "title": "beatae et provident et ut vel",
//       "url": "https://via.placeholder.com/600x300/810b14",
//       "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//     }
//  ]
 
//  <div class="col">
//  <div class="card">
//    <img src="..." class="card-img-top" alt="..." />
//    <div class="card-body">
//      <h5 class="card-title">Card title</h5>
//      <p class="card-text">
//        This is a longer card with supporting text below as a natural
//        lead-in to additional content. This content is a little bit
//        longer.
//      </p>
//    </div>
//  </div>
// </div>

// ? Seleccionamos el elemento donde queremos insertar nuestro template 
// let album = document.getElementById('albums')

// ? resolucion con reduce
// let template = albumes.reduce((acc, cv, index, arr) => {
//     acc += `
//      <div class="col">
//      <div class="card">
//        <img src="${cv.url}" class="card-img-top" alt="..." />
//        <div class="card-body">
//          <h5 class="card-title">${cv.id}</h5>
//          <p class="card-text">
//            ${cv.title}
//          </p>
//        </div>
//      </div>
//     </div>
    
//     `
//     return acc
// }, '')


// {
//     "albumId": 1,
//     "id": 10,
//     "title": "beatae et provident et ut vel",
//     "url": "https://via.placeholder.com/600x300/810b14",
//     "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//   }

// ? resolucion con forEach
// let template = ''
// albumes.forEach((album) => {
//     template += `
//     <div class="col">
//          <div class="card">
//            <img src="${album.url}" class="card-img-top" alt="..." />
//            <div class="card-body">
//              <h5 class="card-title">${album.id}</h5>
//              <p class="card-text">
//                ${album.title}
//              </p>
//            </div>
//          </div>
//         </div>
//     `
// })


// console.log(template)

// album.innerHTML = template





