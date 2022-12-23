'use strict';

const textWelcome = document.getElementById('welcome');
const loginModal = document.getElementById('login-modal');
const btnLogout = document.getElementById('btn-logout');
const currentUser = getCurrentUser('currentUser');

if (currentUser) {
  btnLogout.classList.remove('hidden');
  loginModal.classList.add('hidden');
  textWelcome.textContent = `Welcome ${currentUser.firstName}`;
}

btnLogout.addEventListener('click', function () {
  localStorage.removeItem('currentUser');
  loginModal.classList.remove('hidden');
  window.location.href = './pages/login.html';
});
