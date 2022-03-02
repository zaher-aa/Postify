const { forms } = document;

const alert = (message) => {
  const alertBody = document.createElement('div');
  alertBody.className = 'alert-body';
  const alertContent = document.createElement('div');
  alertContent.className = 'alert-content';
  const content = document.createElement('span');
  content.textContent = message;
  const button = document.createElement('button');
  button.textContent = 'Ok';

  alertBody.append(alertContent);
  alertContent.append(content, button);
  document.body.append(alertBody);
};

const goToHome = (id) => {
  localStorage.setItem('user_id', id);

  window.location.href = '/home';
};

const register = (username, email, password) => {
  if (username.trim() === '' || email.length < 1 || password.length < 1) {
    alert('Please fill in all fields');
    return;
  }

  addUser({ username, email, password }, 'POST', '/register')
    .then((data) => goToHome(data.id))
    .catch((err) => alert(err.message));
};

const checkUser = (email, password) => {
  if (email.trim() === '' || password.trim() === '') {
    alert('Please enter a username and email');
    return;
  }

  getUser(`/check-user?email=${email}&password=${password}`)
    .then((data) => {
      if (!Array.isArray(data)) {
        goToHome(data.id);
      } else {
        alert('Your email or password is incorrect, if you don\'t have an account create a new one.');
      }
    })
    .catch((err) => alert(err.message));
};

const makeReq = (form) => {
  const [email, password] = [form.email.value, form.password.value];

  if (form.className === 'register') {
    const username = form.username.value;
    register(username, email, password);
  } else {
    checkUser(email, password);
  }
};

[...forms].forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const curForm = e.target;
    makeReq(curForm);
  });
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.alert-content button, .alert-body')) {
    document.querySelectorAll('.alert-body').forEach((msg) => msg.remove());
  }
});
