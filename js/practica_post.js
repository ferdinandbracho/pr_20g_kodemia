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
        template +=  `
                <div class="col">
                    <div class="card border-secondary">
                        <img src="https://picsum.photos/1000" class="card-img-top" alt="img" width="400" height="400" />
                        <div class="card-body">
                            <h5 class="card-title">${postToRender[post].title}</h5>
                            <p class="card-text">
                                ${postToRender[post].body}
                            </p>
                            <strong>${postToRender[post].date}</strong>
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












