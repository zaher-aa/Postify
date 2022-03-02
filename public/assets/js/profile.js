const username = document.querySelector('.username');
const email = document.querySelector('.email');
const postsContainer = document.querySelector('.posts');
const welcome = document.querySelector('.welcome');
const userId = localStorage.getItem('user_id');

const renderPosts = (posts) => {
  if (posts.length === 0) {
    postsContainer.textContent = 'You don\'t  have any posts yet';
  }
  posts.forEach((post) => {
    const postBody = document.createElement('div');
    postBody.className = 'post';

    const postHeader = document.createElement('div');
    postHeader.className = 'headerPost';

    const publisherInfo = document.createElement('div');
    publisherInfo.className = 'publicherInfo';

    const userImg = document.createElement('img');
    userImg.src = './assets/users.jpeg';

    const title = document.createElement('p');
    title.textContent = post.title;

    publisherInfo.append(userImg, title);

    const moreOptions = document.createElement('div');
    moreOptions.className = 'icon';

    const icon = document.createElement('i');
    icon.className = 'fa fa-ellipsis-v';

    moreOptions.append(icon);

    postHeader.append(publisherInfo, moreOptions);

    const image = document.createElement('img');
    image.className = 'img';
    image.src = post.image_url;

    const icons = document.createElement('div');
    icons.className = 'icons';

    const like = document.createElement('span');
    like.className = 'like';

    const likeIco = document.createElement('i');
    likeIco.className = 'fa fa-heart';

    const likeCounts = document.createElement('span');
    likeCounts.className = 'count';
    likeCounts.textContent = post.likes;

    like.append(likeIco, likeCounts);

    const comments = document.createElement('span');
    comments.className = 'comments';

    const commentsIco = document.createElement('i');
    commentsIco.className = 'fa-solid fa-comment-dots';

    const commentsCount = document.createElement('span');
    commentsCount.className = 'count';
    commentsCount.textContent = post.comments;

    comments.append(commentsIco, commentsCount);

    icons.append(like, comments);

    const content = document.createElement('p');
    content.className = 'content';
    content.textContent = post.content;

    postBody.append(postHeader, image, icons, content);

    postsContainer.append(postBody);
  });
};

fetch(`/user-info/${userId}`)
  .then((res) => res.json())
  .then((data) => {
    username.textContent = data.username;
    email.textContent = data.email;
    welcome.textContent = `Welcome ${data.username}`;
  })
  .catch((err) => console.log(err.message));

fetch(`/user-posts/${userId}`)
  .then((res) => res.json())
  .then((data) => {
    postsContainer.textContent = '';
    renderPosts(data);
  })
  .catch((err) => console.log(err.message));
