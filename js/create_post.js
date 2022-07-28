document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = ''
    inputBodyPost.value = ''
    inputDatePost.value = ''
})


let createBtn = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')
let alertHolder = document.querySelector('.alerts_holder')

// Todo Create ajax function to create the post in firebase/post

const insertPost = (post) => {
    const hRequest = new XMLHttpRequest()

    let newPostId;
    hRequest.onload = (e) => {
        newPostId = JSON.parse(e.target.responseText)
    }
    
    hRequest.open("POST",'https://kodemia-g20-default-rtdb.firebaseio.com/posts.json' , false)

    hRequest.send(JSON.stringify(post))

    return newPostId.name
}

createBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    let title = inputTitlePost.value 
    let body = inputBodyPost.value
    let date = inputDatePost.value 

    if (
        title === '' ||
        body === '' ||
        date === ''
    )   {
        alertHolder.innerHTML =  `
        <div class="alert alert-danger mt-4" role="alert">
        Algunos de los campos estan vacios
        </div>
        `

        setTimeout(()=>{
            alertHolder.innerHTML =''
        }, 2000)
    } else {
        const postToInsert = {
            title: title,
            body: body,
            date: date
        }

        let NewPost = insertPost(postToInsert)

        if (NewPost)    {
            alertHolder.innerHTML =  `
            <div class="alert alert-success mt-4" role="alert">
            Post creado con exito! 
            </div>
            `
    
            setTimeout(()=>{
                alertHolder.innerHTML =''
            }, 2000)
            
        }
        
        // setTimeout(()=>{
        //     window.location.href = '' 
        // }, 1500)

    }

} )