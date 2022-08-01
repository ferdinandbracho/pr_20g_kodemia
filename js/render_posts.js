
const insertPost = (posts) => {
        
    let template = ''
    for (post in posts) {

        let bodyL = posts[post].body.length
        let body;
        
        if (bodyL > 199)   {
            body = posts[post].body.slice(0,200)
        } else {
            body = posts[post].body
        }
        

        template +=  `
                <div class="col">
                    <div class="card border-secondary">
                        <img src="https://picsum.photos/1000" class="card-img-top" alt="img" width="400" height="400" />
                        <div class="card-body">
                            <h5 class="card-title">${posts[post].title}</h5>
                            <p class="card-text" >
                            ${body}..
                            </p>
                            <hr>
                            <div class="d-flex justify-content-between p-2">
                            <strong>${posts[post].date}</strong>
                            <a href="post_detail.html?postId=${post}">
                                <button type="button" class="btn btn-primary">Detalle</button>
                            </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    }
    postsHolder.innerHTML = template
}

postsHolder = document.querySelector('.post_holder')


// // ! GET 
fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts.json')
.then((res)=>{
    return res.json()
})
.then((res)=>{
    insertPost(res)
})
.catch((error)=>{
    console.log(error)
})



// // ! 

// const newPost = {
//     title: "nuevo post ",
//     body: "lkasnmdkl;ansdlokas",
//     date: '77/77/77'
// }

// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts.json', {method: "POST",body: JSON.stringify(newPost),headers: {"Content-type": "application/json; charset=UTF-8"}})
// .then((res)=>{
//         return res.json()
// }).then((res)=>{
//         console.log(res)
// }).catch((error)=>{
//      console.log(error)   
// })










// ? DELETE
// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts/-N8Bwmim5O_hgV5BcpLO.json', {
//     method:"DELETE",
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
// .finally(()=>{
//     console.log('operacion realizada ')
// })



// ? UPDATE
// const newPost = {
//     title: "update",
//     body: "update",
//     date: "33/1333333"
// }

// fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts/-N8Bwmim5O_hgV5BcpLO.json', {
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


// fetch()
// fetch(url,{method: "GET"})
































// ? Iniciamos con signo de interrogacion
//? query params ?test=test
//? Estructura es de llaves y valores (asociados a esa llave )
// ? Para agregar multiples quiery parans los separamos con &
    //  ?test=test&limit=5&num=10



// reto 
// hacer crud de post con devto 

// analizar el compartamiento 
// tener la posbiilida de crear 
// tener la posbilida de eliminar 
// tener la posbilida de editar 




// ! Promesas 

    // // ! Sync / Async 
    // console.log('a')
    // console.log('b')

    // setTimeout(()=>{
    //     console.log('f')
    // },2000)

    // console.log('c')
    // console.log('d')

// Estados de las promesas
    // Pendiente 
    // fullfilment -> resuelta de forma posiva 
    // rejected -> rechazada 

// let storeOpen = null



// let BuySomething = new Promise((resolve, rejected)=>{
//     if (storeOpen === true) {
//         resolve('Comprado')
//     } else if (storeOpen === false) {
//         rejected('No comprado')
//     }
// })

// BuySomething
// .then((res)=>{
//     console.log(res)
// })
// .then((res)=>{
//     // Codigo
//     let result = JSON.parse(res)
//     return result 
// }).then((res)=>{
//     document.querySelector('body').innerHTML =
//     `
//     <li>${res.body}</li>
//     `
//     console.log(res)
// }).then((res)=>{
//     console.log(res)
// }).then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('se ejecuta en cualquier de los escenarios')
// })




// then
// catch
// finally




// try {
    
// } catch (error) {
    
// }



// let storeOpen = true
// proFun()


// const proFun = () => {
    //     return new Promise((resolve, rejected)=>{
        //         if (storeOpen === true) {
            //             resolve('Comprado')
//         } else if (storeOpen === false) {
//             rejected('No comprado')
//         }
//     })
//     .then(res =>{
    //         console.log(res)
    //     })
    //     .then(())
    // }
    
    
    // new Promise((resolve, rejected)=>{
        //     // logica 
        // })
        
        // Array.forEach((post,index,arr)=>{
            //     // Logica 
// })

// //! async / await 
// let storeOpen = true
// let primerPromesa =  new Promise((resolve, rejected)=>{
//                 if (storeOpen === true) {
//                         resolve('Comprado')
//         } else if (storeOpen === false) {
//             rejected('No comprado')
//         }
//     })

// // console.log(primerPromesa)

// const asyncFunction = async () => {
//     // nuestra logica 
//     try {
//         let result = await primerPromesa
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// asyncFunction()


// // ! GET 
// fetch(url)
// .then((res)=>{
//     console.log(res)
//     return res.json()
// })
// .then((res)=>{
//     // for (post in res){
//     //     console.log(post)
//     //     let holder = document.querySelector('hodler')
//     //     holder.innerHTML = `
//     //     lksmdklsdfmsdf
//     //     lksmdfklsdfmlksnmdf
//     //     s'lfdmlksdnf
//     //     sdmf;nmlf`
//     // }
// })
// .catch((error)=>{
//     console.log(error)
// })
