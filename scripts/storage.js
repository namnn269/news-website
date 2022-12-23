'use strict';

// list user
function getFromStorage(key) {
  const userArrObj = JSON.parse(localStorage.getItem(key));
  if (!userArrObj) return;
  return userArrObj.map((user) => {
    return new User(
      user.firstName,
      user.lastName,
      user.userName,
      user.password
    );
  });
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// current user
function setCurrentUser(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getCurrentUser(key) {
  const cur = JSON.parse(localStorage.getItem(key));
  if (!cur) return;
  return new User(cur.firstName, cur.lastName, cur.userName, cur.password);
}

// todo Array
function getTodoArr(key) {
  const todoArr = JSON.parse(localStorage.getItem(key));
  if (!todoArr) return;
  return todoArr.map((t) => {
    return new Task(t.task, t.owner, t.isDone);
  });
}

function setTodoArr(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// current settings
function setSettings(key, value) {
  localStorage.setItem(key + 'settings', JSON.stringify(value));
}

function getSettings(key) {
  return JSON.parse(localStorage.getItem(key + 'settings'));
}
// localStorage.clear();
