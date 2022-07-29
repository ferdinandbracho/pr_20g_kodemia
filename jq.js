




// Ajax
// crud
// fetch(options)

// // Crud
// body: JSON.stringify(newKoder),
// $.ajax({
//   method: "POST",
//   url: "https://koders19gjs-default-rtdb.firebaseio.com/koders/.json",
//   data: JSON.stringify( { name: 'nuevo desde JQ', age: '20', biography: 'lorem', bootcamp: 'js'})
// })
// .done( ( response ) => {
//   // todo salio bien
//   alert( "Data Saved: " + response );
//   console.log(response)
//   // Que hacer si se cumplio el post

// })
// .fail(function() {
//   // si algo salio mal
//   alert( "error", err );
// })
// .always(function() {
//   // siempre que se ejecute la peticion 
//   alert( "complete" );
// })

// let idKoder = '-N4jGlHU2PnLytgG_rwg'
// $.ajax({
//     method: "PATCH",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
//     data: JSON.stringify( { name: 'nuevo desde JQ updated', age: '20', biography: 'lorem', bootcamp: 'js'})
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     console.log(response)
//     // Que hacer si se cumplio el post
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })

// Delete
// let idKoder = '-N4jGlHU2PnLytgG_rwg'
// $.ajax({
//     method: "DELETE",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     console.log(response)
//     // Que hacer si se cumplio el post
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })

// Obtener datos
// read -> GET

// xmlhttprequest
// $.ajax({
//     method: "GET",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     // Que hacer si se cumplio el post
//     console.log(response)
//     let template = ''
//     for(item in response) {
//         template += `
//             <li>${response[item].name}</li>
//         `
//     }
//     $('.lista__koders').html(template)
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })


// const newPost = {
//     title: "NNNNNN",
//     body: " aksjdnkijlasndkljasnd",
//     date: '77/77/77'
// }

// $.ajax({
//     method: "POST",
//     url: 'https://kodemia-g20-default-rtdb.firebaseio.com/posts.json',
//     data: JSON.stringify(newPost)
//   }).done(( msg )  => {
//     console.log(msg);
// });


// $.ajax({
//     method: "GET",
//     url: 'https://kodemia-g20-default-rtdb.firebaseio.com/posts.json'
// }).done((res) => {
//     console.log(res)
// }).fail( (textStatus ) => {
//     console.log(( "Request failed" ))
// }).always(() => {
//     console.log( "complete" );
// })



// ajax({options})
// method to chaining/handler the response 
//     donde 
//     fail 
//     always 