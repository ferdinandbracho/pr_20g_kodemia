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

// const insertPost = (post) => {
//     const hRequest = new XMLHttpRequest()

//     let newPostId;
//     hRequest.onload = (e) => {
//         newPostId = JSON.parse(e.target.responseText)
//     }
    
//     hRequest.open("POST",'https://kodemia-g20-default-rtdb.firebaseio.com/posts.json' , false)

//     hRequest.send(JSON.stringify(post))

//     return newPostId.name
// }

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
            alertHolder.innerHTML = ''
        }, 2000)

    } else {
        const postToInsert = {
            title: title,
            body: body,
            date: date
        }

        
        fetch('https://kodemia-g20-default-rtdb.firebaseio.com/posts.json', {method: "POST",body: JSON.stringify(postToInsert),headers: {"Content-type": "application/json; charset=UTF-8"}})
        .then((res)=>{
                return res.json()
        }).then((res)=>{
                console.log(res)
                if (res)    {
                    alertHolder.innerHTML =  `
                    <div class="alert alert-success mt-4" role="alert">
                    Post creado con exito! 
                    </div>
                    `
            
                    setTimeout(()=>{
                        alertHolder.innerHTML =''
                    }, 2000)
                    
                }
                
                setTimeout(()=>{
                    window.location.href = '/post.html' 
                }, 1500)
        }).catch((error)=>{
             console.log(error)   
        })

    }
} )




document.querySelector('.class').innerHTML = `
    <di> </di>
`
!-- Include stylesheet -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

<!-- Create the editor container -->
<div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br></p>
</div>

<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

<!-- Initialize Quill editor -->
<script>
  var quill = new Quill('#editor', {
    theme: 'snow'
  });
</script>