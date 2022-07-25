
// ! Eventos 
    // ! Estos suceden sobre los elementos de nuestro dom y podemos capturar y reaccionar a ellos, manipularlos a nustros favor 

    //! tipos de enventos 
        // ! Eventos Automaticos 
        // ! Eventos generados por usaurios 


// ! Eventos en linea -> Online events 


// const funEvent = () => {
//     console.log('Estoy cambiando')
// }

// let btn1 = document.querySelector('#btn1')

// const arrayTest = [23, 'text', [1,2,3]]

// arrayTest.forEach((cv, index, arr ) => {
//     console.log('current Value : ', cv)
//     console.log('index : ', index)
//     console.log('Copia array : ', arr)
//     console.log('Fin de iteracion')
// })

// btn1.addEventListener('input', (e) => {
//     console.log(e)
//     // let val = e.target.value
//     // let num = '2134567890'
//     // if (num.includes(val)){
//     //     console.log('No se aceptad numeros')
//     // }
// })

// const event = {
//     isTrusted: true,
//     bubbles: true,
//     target: {
//         accept: "",
//         accessKey: "",
//         value: "sssssss"
//         }

// }

// addEventListener("e a escuchar",(e) => {
//     console.log()
// })



//! object event


//! Eventos mas ussados
//? click
//? change
//? input
//? focus
//? blur

//! Eventos de mouse
//? click
//? contextmenu
//? dbclick
//? mousedown
//? mouseup
//? mouseenter
//? mouseleave
//? mousemove
//? mouseover

//! Eventos de teclado
//? keydown 
//? keypress 
//? keyup

//! Eventos de navegador
//? load
//? scroll

// ! EventListener 
    // ! Es un metodo de los elementos del dom


// let btn1 = document.querySelector('.btn1')/

// btn1.addEventListener('click',funEvent)

// ! event handlers 

// ! Event object 

// let btn1 = document.querySelector('.btn1')
// console.log(btn1.value)

// btn1.addEventListener('click',  (e) => {
//     console.log(e)
// })
// Array.forEach((c)=>{

// })
// addEventListener(<nombre del evento como string>,<callback -> nos da acceso object event</callback>>)


//! Practica Insertar eventos 

// Tres eventos a insertar 
// 1.Escuchar boton y insertar card con otro evento inserto 
// 2. Dar retro de un input 
// 3. insertar una imagen en un mouse event

//! Menejo de envento en el boton "show Card"
// Pasos
//* 1. Seleccionar el holder de la card 
//* 2. seleccionar quien detona el evento 
//* 3. agregar un listener al detonador 
//* 4. insertar html al holder 
//* 5. Opcional insertar elemento en el card para eliminarla 

// * 1
cardHolder = document.querySelector('.card_holder')

// * 2
btn = document.querySelector('.btn_show')


// * 2
// btn.addEventListener('click', () => {
//     cardHolder.innerHTML = `
//     <div class="card mt-2 ms-3 " style="width: 35rem;">
//     <img src="8udwgumkwl591.jpg" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Este es el titulo de la foto</h5>
//       <p class="card-text">Algun Texto.</p>
//       <a href="#" class="mr-5 btn btn-primary btn2">Eliminar Card</a>
//     </div>
//   </div>
//     `
//     let btn2 = document.querySelector('.btn2')

//     btn2.addEventListener('click', (e) => {
//         console.log(e.target.value)
//         cardHolder.innerHTML = ''
//     })

// })

// Event object 

// !2 Manejo de envento en el input "inserte texto"
// pasos 
// 1. Seleccionar el holder de la card 
// 2. seleccionar quien detona el evento 
// 3. agregar un listener al detonador 
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input 



let input = document.querySelector('.input_text')
input.value = ''

let textDiv =document.querySelector('.text_div')
input.addEventListener('input',(e) => {
    textDiv.innerHTML = `
            <p class="fs-5 fw-bolder" >
                Este es tu texto: ${e.target.value}
            </p>
    `    
})

let btnClean = document.querySelector('.btn_clear')
console.log(btnClean)

btnClean.addEventListener('click', () => {
    input.value = ''
    textDiv.innerHTML = ''  
})


// ! 3 Mouse Events 
// Pasos
// 1. Seleccionar el holder de la card 
conaole.los(elemento)[1]
// 2. seleccionar quien detona el evento 
// 3. agregar un listener al detonador 
// 4. insertar html al holder cuando se detono el evento 
// 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout

// imgDiv = document.querySelector('.img-div')
// let mouseTarget = document.querySelector('.mouse_target')

// mouseTarget.addEventListener('click', (e)=> {
//     imgDiv. innerHTML = 
//     `
//     <img src="msg-1205958363-13486.jpg" class=" mt-5 rounded mx-auto d-block" alt="...">
//     `
//     setTimeout(()=>{
//         imgDiv.innerHTML = ''
//     }, 2500)
// })


// ! Practica filtar lista de usaurios 

let users = [
    {
      "id": 1,
      "name": "Brad Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Brad fox",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 3,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 4,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 5,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 6,
      "name": "Patricia Jones",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 7,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 8,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 9,
      "name": "Kurtis Weissnat",
      "username": "Isaac.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 10,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 11,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 12,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Isaac@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    },
    {
      "id": 13,
      "name": "Jorge Camarillo",
      "username": "jorge.Camarillo",
      "email": "jorge.camarillo@kodemia.mx",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    },
    {
      "id": 14,
      "name": "Isaac luna",
      "username": "Isaac.luna",
      "email": "isaac.luna@gmail.com",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
 

// // Pasos 
// // 1. filtrat usaurios 
// // 2. Identificar elementos objetivos e insertar evento adecuado
// // 2.1 Si hace falte tomar los valores de algun otro elemento 
// // 3 insertar usuarios filtrados en una lista 
// // 4 Opcional - Cambiar a vento a que cada que se agregue un caracter al input se filtre y pinte la lista 
// // 5 Opcional - Agregar un evento al documento para que cada vez que cargue la lista de la carga del mismo  -> 'DOMContentLoaded'

const filterUsers = (str) => {
    strTofilter = str.toLowerCase()

    let filteredUsers = users.filter((user) =>{
        if(
            user.name.toLowerCase().match(strTofilter) ||
            user.username.toLowerCase().match(strTofilter) ||
            user.email.toLowerCase().match(strTofilter)
        ){
            return user
        }
    })

    return filteredUsers
}

console.log(filterUsers('isaac'))
// // 2 y 2.1

// let findButton = document.querySelector('.find_user')
// let input = document.querySelector('.input_text')
// findButton.addEventListener('click', () =>{
//     strToFilter = input.value
//     result = filterUsers(strToFilter)
//     insertUSers(result)
// })

// // 3


// const insertUSers = (arr) => {
//     let list = document.querySelector('#list_users')
//     list.innerHTML = ''
//     arr.forEach((user) => {
//         list.innerHTML += `
//         <li class="list-group-item d-flex justify-content-between align-items-start bg-secondary bg-gradient rounded-2 border border-1 border-secondary m-2">
//         <div class="ms-2 me-auto">
//           <div class="fw-bold">${user.name}</div>
//             ${user.username}
//         </div>
//       </li>
    
//         `
//     })
// }




// ! Repaso AddEventListeners





// ! 



//!  Destructuracion de objetos 
// const objetPrueba = {
//     firstName: 'Koder',
//     lastName: 'Kodemia',
//     isActive: true
//     miMetodo:  function(){
//         console.aklsmkamsd
//     }
// }

// let { firstName:nombre } = objetPrueba

// let firstName = objetPrueba.firstName
// let lastName = objetPrueba.lastName
// let isActive = objetPrueba.isActive

// console.log(nombre)

// console.log(objetPrueba.firstName, objetPrueba['lastName'])


// users.forEach((user)=>{
//     let { firstName } = user
// })
// MediaElementAudioSourceNode.innerHTML =
// `
// <p> esto es el data de koder ${firstName}</p>

// `


// const xhrFun = (url, method="GET") => {
//     let payload = {}
//     const re = new XMLHttpRequest()
    
//     re.onload = (e) => {
//         // console.log(e.target.response)
//         payload = JSON.parse(e.target.response)
//     }
    
//     re.open("GET", url, false)
    
//     re.send()

//     return payload
// }



// const user = {
//     firstName : 'Ferdinand',
//     lastName : 'Bracho',
//     isActive : true
// }

// const createUSer = (user) => {
//     console.log('ejecutando')

//     const re = new XMLHttpRequest()
//     re.onload = (e) => {
//         console.log(e.target.response)
//     }

//     re.open('POST','https://f-d5a6f-default-rtdb.firebaseio.com/users/.json', true )

//     body = JSON.stringify(user)
//     counter = 0

//     re.send(body)

//     return
// }


// document.querySelector('.cargar').addEventListener('click', () => {
//     createUSer(user)
// })



// const updateUser = user => {
//     const re =  new XMLHttpRequest()

//     re.onload = (response) => {
//         if (response.target.status >= 200 && response.target.status <= 399) {
//             console.log(response.target.response)
//         }
//     }

//     re.open('DELETE',
//     'https://f-d5a6f-default-rtdb.firebaseio.com/users/-N7bMftSTDOw7myKr69k/.json',
//     true)

//     re.send()
//     return




// }












