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


let postToRender = getData('https://dummyjson.com/posts')

postToRender = postToRender.posts

// ! Tarea 3 -> in progress 
    // ! 3.1 - Seleciar elmento holder - quien recibe mis cards
    // ! 3.2 contruir e insertar mi template 
    // ! 3.3 Escuchar un evento para cargar data 

let postsHolder = document.querySelector('.post_holder')

const insertPost = (posts) => {

    let template = posts.reduce((acc, post) => {
        acc +=  `
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200" class="card-img-top" alt="img" />
                    <div class="card-body">
                        <h5 class="card-title">=${post.title}</h5>
                        <p class="card-text">
                            ${post.body}
                        </p>
                    </div>
                </div>
            </div>
        `

        return acc
    }, '')

    console.log(template)

    postsHolder.innerHTML = template
}


document.addEventListener('DOMContentLoaded', ()=>{
    insertPost(postToRender)
})


