const plusIcon = document.querySelector('#plus');
const postForm =document.querySelector('.createPost')
const closeIcon=document.querySelector('#close')
const container =document.querySelector(".posts")
const title=document.querySelector('.userName')
const image =document.querySelector('.image')
const caption =document.querySelector('.caption')
const publicherInfo=document.querySelector('.publicherInfo')
window.onload=()=>{

 fetchData('/getPosts').then((data)=>mapPosts(data))}
 const mapPosts=(arr)=>{
    arr.map(post=>{
     renderPost(renderPost(post));
     })
 }

const renderPost=((obj)=>{
    title.textContent=obj.title;
    caption.textContent=obj.content;
    image.src=obj.image_url;
 })


plusIcon.addEventListener('click',()=>{
    postForm.style.display ='flex';
    container.style.opacity= 0.2;
 })
closeIcon.addEventListener('click',()=>{
    postForm.style.display ='none';
    container.style.opacity= 1;})