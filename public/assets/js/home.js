document.querySelectorAll('.publicherInfo').forEach((user) => {
  user.addEventListener('click', (e) => {
    window.location.href = '/profile';
  });
});
