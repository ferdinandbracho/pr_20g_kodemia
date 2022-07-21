
// ! Eventos 
    // ! Estos suceden sobre los elementos de nuestro dom y podemos capturar y reaccionar a ellos, manipularlos a nustros favor 

    //! tipos de enventos 
        // ! Eventos Automaticos 
        // ! Eventos generados por usaurios 


// ! Eventos en linea -> Online events 


const funEvent = () => {
    // ! Demo change background
    // console.log('Estoy cambiando')
    document.body.style.backgroundColor = `
    rgb(
        ${Math.floor(Math.random() * (255+1))},
        ${Math.floor(Math.random() * (255+1))},
        ${Math.floor(Math.random() * (255+1))})
 `
}


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

// let btn1 = document.querySelector('.btn1')

// btn1.addEventListener('submit', funEvent)

// ! event handlers 

// ! Event object 

let btn1 = document.querySelector('.btn1')
console.log(btn1.value)

btn1.addEventListener('click',  (e) => {
    console.log(e)
})

// addEventListener(<nombre del evento como string>,<callback -> nos da acceso object event</callback>>)
