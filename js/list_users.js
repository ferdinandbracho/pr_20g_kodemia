    
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

//! JSON
// { } 
// key: value 

// const user = {\n
//      username: 'koder554',\n
//     email: 'kofer55@koder.com' \n
// }

// console.log(user)



    // ! JSON Parse -> de json a objeto
    // ! Para enviar request 
    // ? JSON.stringify(<Objecto>)
    
    // ! JSON Stringify -> de Obj a json
    // ! Para leer response 
    // ? JSON.parse(<json>)


// ! XMLHttpRequest     
// ! Paso a paso para su uso 
    // ? Instanciamos nuestro objeto
    // const xRe = new XMLHttpRequest()
    // console.log(xRe)

    // // ? Definir un callback en nuestro evento onload 
    // xRe.onload = (data) => {
    //     console.log(data)
    //     if (data.target.readyState === 4)   {
    //         if (
    //             data.target.status >= 200 ||
    //             data.target.status <= 399 
    //             ){
    //             console.log(data.target.responseText)
    //         }
    //         else if (data.target.status === 400)    {
    //             console.log('sucedio un error')
    //         }
    //     }
    // } 

    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    // xRe.open("GET", "https://dummyjson.com/carts", false)
    // console.log(xRe)

    // //? Enviar nuestra peticion 
    // xRe.send()

    // let = users = []
    // const requestProduct = new XMLHttpRequest()

    // requestProduct.onload = (e) => {

    //     users = e.target.responseText
    // }

    // requestProduct.open("GET","https://dummyjson.com/products", false)

    // requestProduct.send()


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



// const requestGet = (url) => {
//     const httpRequest = new XMLHttpRequest()
    
//     let result = []
//     httpRequest.onload = (e) => { 
//         result = JSON.parse(e.target.responseText)
//     }
    
//     httpRequest.open("GET", url, false)
    
//     httpRequest.send() 

//     return result 
// }


// const users = requestGet('https://dummyjson.com/users')

// console.log(users)



// // ! Crear un usario con AJAX -> POST
// const insertData = (obj) => {
//     const httRequest = new XMLHttpRequest()

//     httRequest.onload = (e) => {
//         console.log(e.target.responseText)
//     }

//     httRequest.open("POST", 'https://kodemia-g20-default-rtdb.firebaseio.com/post.json', false)

//     let objJson = JSON.stringify(obj)

//     httRequest.send(objJson)
// }


// const post = {
//     title: "este en un titulo",
//     body: "body bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
//     date: "07/27/22"
// }


// // //! Update Data -> PUT -> Update Global  
// const updateData = (data, userId) => {
//     const hResquest = new XMLHttpRequest()

//     hResquest.onload = (e) => {
//         console.log(e.target.responseText)
//     }

//     hResquest.open("PUT", `https://kodemia-g20-default-rtdb.firebaseio.com/user/${userId}.json`, false )

//     hResquest.send(JSON.stringify(data))
// }

// const newData = {
//     firstName: 'Sebas!',
//     asdasd: 123
// }


// updateData(newData,'-N81LUE4h3Uiw5hajQGj')


// // //! Update Data -> PATCH -> Update Parcial  
// const updateData = (data, userId) => {
//     const hResquest = new XMLHttpRequest()

//     hResquest.onload = (e) => {
//         console.log(e.target.responseText)
//     }

//     hResquest.open("PATCH", `https://kodemia-g20-default-rtdb.firebaseio.com/user/${userId}.json`, false )

//     hResquest.send(JSON.stringify(data))
// }

// const newData = {
//     firstName: 'Ferdinand Marco',
//     lastName: 'askjdndsa'
// }




// updateData(newData, '-N81LUE4h3Uiw5hajQGj')


// // //! Delete Data -> DELETE -> Eliminar  
// const deleteData = (userId) => {
//     const hResquest = new XMLHttpRequest()

//     hResquest.onload = (e) => {
//         console.log(e.target.responseText)
//     }

//     hResquest.open("DELETE", `https://kodemia-g20-default-rtdb.firebaseio.com/post/${userId}.json`, false )

//     hResquest.send()
// }



// deleteData('-N81MqhNJf-WDfIyWUkI')



// const functionAJAXTotal = (url, callback, userId, data, method="GET") => {
//     const hResquest = new XMLHttpRequest()

//     hResquest.onload = (e) => {
//         let response = e.target.responseText
//         callback(response)
//     }

//     hResquest.open(method, `${url}/${userId}.json`, false )

//     if (data) {
//         hResquest.send(JSON.stringify(data))
//     } else {
//         hResquest.send()
//     }
// }






