document.querySelectorAll('.publicherInfo').forEach((user) => {
  user.addEventListener('click', (e) => {
    const userId = e.currentTarget.parentElement.parentElement.dataset.userid;
    window.location.href = `/users/${userId}`;
  });
});
