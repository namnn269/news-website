'use strict';

const inputFirstName = document.getElementById('input-firstname');
const inputLastName = document.getElementById('input-lastname');
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const inputPasswordConfirm = document.getElementById('input-password-confirm');
const btnRegister = document.getElementById('btn-submit');
const userArr = getFromStorage('userArr') || [];

btnRegister.addEventListener('click', function (e) {
  e.preventDefault();
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const userName = inputUsername.value;
  const password = inputPassword.value;
  const passwordConfirm = inputPasswordConfirm.value;
  const userRegister = new User(firstName, lastName, userName, password);

  function checkInput() {
    if (
      firstName === '' ||
      lastName === '' ||
      userName === '' ||
      password === '' ||
      passwordConfirm === ''
    ) {
      alert('Nhap thieu thong tin!');
      return;
    }
    if (userArr.find((u) => u.userName === userName)) {
      alert('Da ton tai username! \nChon username khac!');
      return;
    }
    if (password !== passwordConfirm) {
      alert('Password va passwordConfirm phai trung nhau!');
      return;
    }
    if (password.length < 8) {
      alert('Password phai nhieu hon 8 ky tu!');
      return;
    }
    return true;
  }

  function clearInput() {
    inputFirstName.value = '';
    inputLastName.value = '';
    inputUsername.value = '';
    inputPassword.value = '';
    inputPasswordConfirm.value = '';
  }

  const fulfilled = checkInput();
  if (!fulfilled) return;
  userArr.push(userRegister);
  setLocalStorage('userArr', userArr);
  clearInput();
  window.location.href = '../pages/login.html';
});
