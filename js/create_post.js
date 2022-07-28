document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = ''
    inputBodyPost.value = ''
    inputDatePost.value = ''
})


let createBtn = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')

// Todo Create ajax function to create the post in firebase/post

// let params = new URLSearchParams(window.location.search)
// console.log(params.get('test2'))

