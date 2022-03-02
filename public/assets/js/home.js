const plusIcon = document.querySelector('#plus');
const postForm =document.querySelector('.createPost')
const closeIcon=document.querySelector('#close')
const container =document.querySelector(".posts")
const title=document.querySelector('.userName')
const image =document.querySelector('.image')
const caption =document.querySelector('.caption')
const publicherInfo=document.querySelector('.publicherInfo')
const posts =document.querySelector('.posts')

window.onload=()=>{

 fetchData('/getPosts').then((data)=>mapPosts(data))}
 const mapPosts=(arr)=>{
    arr.map(post=>{
     renderPost(post);
     })
 }

const renderPost=((obj)=>{
    console.log(obj)
   const post=document.createElement('div')
   post.className='post';
   const headerPost=document.createElement('div')
   headerPost.className='headerPost'
   const publicherInfo=document.createElement('div')
   publicherInfo.className='publicherInfo';
   const userImage=document.createElement('img')
   userImage.src="../users.jpeg"
   const title=document.createElement('p')
   title.className="userName"
   title.textContent=obj.title;
   publicherInfo.appendChild(userImage)
   publicherInfo.appendChild(title)
   const icon=document.createElement('div')
   icon.className='icon'
   const ellipsisIcon=document.createElement('i')
   ellipsisIcon.className="fa fa-ellipsis-v"
   icon.append(ellipsisIcon)
   headerPost.append(publicherInfo)
   headerPost.append(icon)
  
   const content=document.createElement('div')
   content.className='contant'
   
   const image=document.createElement('img')
   image.className='image';
   image.src=obj.image_url;
   const div=document.createElement('div')
   const ul=document.createElement('ul')
   ul.className="icons"
   const li1=document.createElement('li')
   const heartIcon=document.createElement('i')
   heartIcon.className="fa fa-heart"
   li1.append(heartIcon)
   const li2=document.createElement('li')
   const commentIcon=document.createElement('i')
   commentIcon.className="fa fa-comments-o";
   li2.append(commentIcon);
   ul.append(li1,li2);
   div.append(ul)
   const div2=document.createElement('div')
   const caption= document.createElement('p')
   caption.className="caption";
   caption.textContent=obj.content;
   content.append(image,div,div2)
  
div2.append(caption)
post.append(headerPost,content)
posts.append(post)

 })


plusIcon.addEventListener('click',()=>{
    postForm.style.display ='flex';
    container.style.opacity= 0.2;
 })
closeIcon.addEventListener('click',()=>{
    postForm.style.display ='none';
    container.style.opacity= 1;})