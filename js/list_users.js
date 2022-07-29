    
// ! AJAX - Asynchronous JavaScript and XML 

//! Arquitecturas 
    // ! Monolica 
    // ! cliente - servidor 

// ! CRUD 
    // ! C -> create
    // ! R -> Read : list - details  
    // ! U -> Update : Global - Parcial 
    // ! D -> Delete 

//* Propiedades 

// * readyState
//   *  /**
//   * Holds the status of the XMLHttpRequest.
//   * 0: request not initialized
//   * 1: server connection established
//   * 2: request received
//   * 3: processing request
//   * 4: request finished and response is ready

// * Status 
    // * Docs -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


    // ! Metodo HTTTP - Verbos HTTP 
    //? GET -> Read
    //? POST ->  create
    //? PUT ->  Update : Global
    //? PATCH ->  Update : Parcial
    //? DELETE -> Delete

    // ? CRUD 
    // ? C -> create
    // ? R -> Read : list - details  
    // ? U -> Update : Global - Parcial 
    // ? D -> Delete 


    // ! API - Application programming interface 
    // ! Endpoint - Accesos a los recursos y acciones 

// ! Practica En clase 

const filterUsers = (str, arr) => {
    strTofilter = str.toLowerCase()

    let filteredUsers = arr.filter((user) =>{
        if(
            user.firstName.toLowerCase().match(strTofilter) ||
            user.username.toLowerCase().match(strTofilter) ||
            user.email.toLowerCase().match(strTofilter)
        ){
            return user
        }
    })

    return filteredUsers
}

const ajaxFunction = (url, method="GET") =>  {
    // ? Instanciamos nuestro objeto
    const xRe = new XMLHttpRequest()

    let result = []
    // ? Definir un callback en nuestro evento onload 
    xRe.onload = (data) => {
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                    result = JSON.parse(data.target.responseText)
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }
    } 

    //? Abrir y setear nuestra peticion 
    xRe.open(method,url, false)

    // //? Enviar nuestra peticion 
    xRe.send() 

    return result.users
}

// ! practica cards grid in
users = ajaxFunction('https://dummyjson.com/users')

document.addEventListener('DOMContentLoaded', ()=>{
    insertUSers(users)
})


let findButton = document.querySelector('.find_user')
let input = document.querySelector('.input_text')

input.addEventListener('input', () => {
    strToFilter = input.value
    result = filterUsers(strToFilter, users)
    insertUSers(result)
})




const insertUSers = (arr) => {
    let list = document.querySelector('#list_users')
    list.innerHTML = ''
    arr.forEach((user) => {
        list.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-start bg-primary bg-gradient rounded-2 border border-1 border-secondary m-2">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${user.firstName} - ${user.lastName}</div>
            ${user.username}
        </div>
      </li>
    
        `
    })
}




// fetch('https://dummyjson.com/users')
// .then((res)=>{
//     console.log(res)
//     if (!res.ok) {
//         let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
//         throw err
//     } else {
//         return res.json()
//     }
// })
// .then((res)=>{
//     let ul = document.querySelector('.test')
//     let template = res.users.reduce((acc, cv) =>{
//         console.log(cv)
//         acc += `<li> ${cv.id}</li>`

//         return acc
//     }, '')


//     ul.innerHTML = template
// })
// .catch((error)=>{
//     console.log(error)
// })
    
// const newPost = {
//     title: "nuevo psot",
//     body: "laksmdl;knas;dlnas;dnjndsas",
//     date: "22/12/22"
// }

// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts.json', {
//     method:"POST",
//     body: JSON.stringify(newPost),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })



// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts/-N8AZY6fCeGiV2QbnVJh.json', {
//     method:"DELETE",
//     // body: JSON.stringify(newPost),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })




// const newPost = {
//     title: "update",
//     body: "update",
//     date: "33/1333333"
// }

// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts/-N8AZtGA4n0QsRY8WnGS.json', {
//     method:"PATCH",
//     body: JSON.stringify(newPost),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })


let pastel = true

let encontrarPastel = new Promise((resolve, reject) => {
    if (pastel){
        resolve("encontrado")
    }
    else {
        reject('No encontrado')
    }
})

encontrarPastel
.then(res => {
    console.log(res)
})
.catch(res => {
    console.log(res)
})
.finally(()=>{
    console.log('el final')
})

const encontrarPastel2 = async () => {
    result = await encontrarPastel
    console.log(result)
}

encontrarPastel2()