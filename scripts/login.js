'use strict';

const inputUserNameLogin = document.getElementById('input-username');
const inputPasswordLogin = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-submit');
const userArr = getFromStorage('userArr') || [];
let currentUser;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const usernameLogin = inputUserNameLogin.value;
  const passwordLogin = inputPasswordLogin.value;

  function clearLogin() {
    inputUserNameLogin.value = '';
    inputPasswordLogin.value = '';
  }

  if (usernameLogin === '' || passwordLogin === '') {
    alert('Nhap thieu thong tin!');
    return;
  }

  if (
    (currentUser = userArr.find((u) => {
      return u.userName === usernameLogin && u.password === passwordLogin;
    }))
  ) {
  } else {
    alert('Thong tin tai khoan hoac mat khau sai!');
    return;
  }
  setCurrentUser('currentUser', currentUser);
  clearLogin();
  window.location.href = '../index.html';
});

// console.log(getCurrentUser('currentUser'));
