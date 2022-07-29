// De alguna forma insertar id en url -> Done 
// De alguna forma leer el id del post del url  -> Done
//! Cargar la data del post al cargar la pagina 

const getData = (url) => {
    const httRequest = new XMLHttpRequest()

    let result = []
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
    }

    httRequest.open("GET", url, false)

    httRequest.send()

    return result
}

const deletePost = (url) => {
    const httRequest = new XMLHttpRequest()

    let result = []
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
    }

    httRequest.open("DELETE", url, false)

    httRequest.send()

    return result
}


let queryURL = window.location.search
let postId = queryURL.substring(8)
// let params = new URLSearchParams(window.location.search)
// let postId = params.get('postId')

let url = `https://kodemia-g20-default-rtdb.firebaseio.com/posts/${postId}.json`
 
let postToRender = getData(url)

let cardHolder = document.querySelector('.card_holder')

document.addEventListener("DOMContentLoaded", (e)=> {
    cardHolder.innerHTML = `
    <div class="card mb-3 mt-5 w-75">
    <img src="https://picsum.photos/1000" class="card-img-top mt-2" alt="img"  height="300"  width="500"  />
    <div class="card-body">
    <h5 class="card-title">${postToRender.title}</h5>
    <p class="card-text">
      ${postToRender.body}
    </p>
    <p class="card-text">
        <strong class="text-muted">${postToRender.date}</strong>
    </p>

    <div class="d-flex justify-content-between px-5">
        <a href="edit_post.html?postId=${postId}">
        <button type="button" class="btn btn-warning">Editar</button>
        </a>
        <a href="#">
        <button type="button" class="btn btn-danger delete_btn">Delete</button>
        </a>
    </div>

    
    </div>
    </div> 
    `

    document.querySelector('.delete_btn').addEventListener('click', (e) => {
        deletePost(url)
        window.location.href = '/post.html' 
    })

})
