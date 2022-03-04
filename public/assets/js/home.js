const plusIcon = document.querySelector('#plus');
const postForm = document.querySelector('.createPost');
const closeIcon = document.querySelector('#close');
const closeIcon2 = document.querySelector('#close2');
const container = document.querySelector('.posts');
const title = document.querySelector('.userName');
const image = document.querySelector('.image');
const caption = document.querySelector('.caption');
const publicherInfo = document.querySelector('.publicherInfo');
const posts = document.querySelector('.posts');
const useridText = document.querySelector('.id');
const form = document.querySelector('#form');
const addBtn = document.querySelector('.addPost');
const commentForm = document.querySelector('#commentForm');
const commentsContent = document.querySelector('.commentsContent');
const commentSection = document.querySelector('.commentSection');
fetch(`/user-info/${localStorage.getItem('user_id')}`)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('.welcome').textContent = `Welcome ${data.username}`;
  })
  .catch((err) => console.log(err.message));

const getAllComments = () => {
  commentSection.style.display = 'flex';
  getUser2('/comments').then((data) => mapComments(data)).catch((err) => console.log(err.message));
};
const mapComments = (arr) => {
  arr.map((comment) => {
    console.log(comment);
    renderComment(comment);
  });
};
const passData = (commentInfo) => {
  const { value } = commentInfo.comment;
  const user_id = localStorage.getItem('user_id');
  const post_id = '1';

  addUser({
    value, user_id, post_id,
  }, 'POST', '/comment')
    .then((data) => {
      renderComment(data[0]);
    })
    .catch((err) => console.log(err));
};

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const postInfo = e.target;
  passData(postInfo);
});
const renderComment = ((comment) => {
  console.log(comment);

  const commentDev = document.createElement('div');
  commentDev.className = 'comment';
  const userImage = document.createElement('img');
  userImage.src = './assets/users.jpeg';
  const userName = document.createElement('p');
  userName.id = 'userNmaeComent';
  userName.textContent = 'farah';
  const commentText = document.createElement('p');
  commentText.id = 'value';
  console.log('the value', comment.content);
  commentText.textContent = comment.content;
  commentDev.append(userImage, userName, commentText);
  commentsContent.append(commentDev);
});

document.addEventListener('click', (e) => {
  if (!e.target.matches('.delete')) return;
  const postId = e.target.parentElement.parentElement.dataset.id;
  fetch(`/post/${postId}`, {
    method: 'DELETE',
  })
    .then(() => {
      e.target.parentElement.parentElement.remove();
    })
    .catch((err) => console.log(err));
});

const renderPost = ((obj) => {
  const post = document.createElement('div');
  post.setAttribute('data-id', obj.id);
  post.className = 'post';

  const headerPost = document.createElement('div');
  headerPost.className = 'headerPost';
  const publicherInfo = document.createElement('div');
  publicherInfo.className = 'publicherInfo';
  const userImage = document.createElement('img');
  userImage.src = './assets/users.jpeg';
  const title = document.createElement('p');
  title.className = 'userName';
  title.textContent = obj.title;
  publicherInfo.appendChild(userImage);
  publicherInfo.appendChild(title);
  const del = document.createElement('div');
  del.className = 'delete';
  del.textContent = 'Delete';
  del.style.cursor = 'pointer';
  headerPost.append(publicherInfo);
  headerPost.append(del);

  const content = document.createElement('div');
  content.className = 'contant';

  const image = document.createElement('img');
  image.className = 'img';
  image.src = obj.image_url;
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.className = 'icons';
  const li1 = document.createElement('li');
  const heartIcon = document.createElement('i');
  heartIcon.className = 'fa fa-heart';
  li1.append(heartIcon);
  const li2 = document.createElement('li');
  const commentIcon = document.createElement('i');
  commentIcon.className = 'fa fa-comments-o';
  li2.append(commentIcon);
  ul.append(li1, li2);
  div.append(ul);
  const div2 = document.createElement('div');
  const caption = document.createElement('p');
  caption.className = 'caption';
  caption.textContent = obj.content;
  content.append(image, div, div2);

  div2.append(caption);
  post.append(headerPost, content);
  posts.append(post);
  commentIcon.addEventListener('click', getAllComments);
});

const passDataToFetch = (postInfo) => {
  fetch(`/user-info/${localStorage.getItem('user_id')}`)
    .then((res) => res.json())
    .then((data) => data.username).then((name) => {
      const username = name;
      const url = postInfo.url.value;
      const content = postInfo.post.value;
      const id = localStorage.getItem('user_id');

      addUser({
        username, url, content, id,
      }, 'POST', '/post')
        .then((data) => {
          renderPost(data[0]);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err.message));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const postInfo = e.target;
  passDataToFetch(postInfo);
});

window.onload = () => {
  getUser('/all-posts').then((data) => mapPosts(data)).catch((err) => alert(err.message));
};

useridText.value = localStorage.getItem('user_id');
const mapPosts = (arr) => {
  arr.map((post) => {
    renderPost(post);
  });
};

plusIcon.addEventListener('click', () => {
  postForm.style.display = 'flex';
  container.style.opacity = 0.2;
  plusIcon.style.color = '#000';
});
addBtn.addEventListener('click', () => {
  postForm.style.display = 'none';
  container.style.opacity = 1;
  plusIcon.style.color = 'rgb(98, 98, 192)';
});

closeIcon.addEventListener('click', () => {
  postForm.style.display = 'none';
  container.style.opacity = 1;
  plusIcon.style.color = 'rgb(98, 98, 192)';
});

closeIcon2.addEventListener('click', () => {
  commentSection.style.display = 'none';
  container.style.opacity = 1;
});

document.querySelector('.fa-user').addEventListener('click', () => {
  window.location.href = '/profile';
});
