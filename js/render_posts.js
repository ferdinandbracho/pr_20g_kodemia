
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

let postToRender = getData('https://kodemia-g20-default-rtdb.firebaseio.com/posts.json')



let postsHolder = document.querySelector('.post_holder')

const insertPost = (posts) => {

    let template = ''
    for (post in postToRender) {
        console.log(post)
        template +=  `
                <div class="col">
                    <div class="card border-secondary">
                        <img src="https://picsum.photos/1000" class="card-img-top" alt="img" width="400" height="400" />
                        <div class="card-body">
                            <h5 class="card-title">${postToRender[post].title}</h5>
                            <p class="card-text">
                                ${postToRender[post].body}
                            </p>
                            <hr>
                            <div class="d-flex justify-content-between p-2">
                            <strong>${postToRender[post].date}</strong>
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


document.addEventListener('DOMContentLoaded', ()=>{
    insertPost(postToRender)
})
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
